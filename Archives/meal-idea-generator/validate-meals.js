const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const TYPES = ['breakfast','lunch','dinner','snack'];
const CARBS = ['low','moderate'];
const KNOWN_TAGS = ['gut-healing','asian','quick-easy','no-cook','batch-cook','high-protein','vegetarian','vegan','gluten-free'];
const KNOWN_CONTAINS = ['dairy','gluten','nuts','egg','soy','fish','shellfish','sesame'];
const LANGS = ['en','zh'];

let fail = 0;
const bad = (m) => { console.log('  ✗ ' + m); fail++; };

/* ---------- 1. 加载菜品库 ---------- */
const code = fs.readFileSync(path.join(ROOT,'data','meals.js'),'utf8');
const MEALS = new Function(code + '\n; return MEALS;')();

// Load new-recipes.js (additional recipes)
const newCodePath = path.join(ROOT,'data','new-recipes.js');
let NEW_RECIPES = [];
if (fs.existsSync(newCodePath)) {
  const newCode = fs.readFileSync(newCodePath,'utf8');
  NEW_RECIPES = new Function(newCode + '\n; return NEW_RECIPES;')();
}
const ALL_MEALS = MEALS.concat(NEW_RECIPES);

console.log('=== 1. 菜品库结构 ===');
console.log('总菜品数:', ALL_MEALS.length, '(基础:', MEALS.length, '+ 新增:', NEW_RECIPES.length, ')');

const ids = new Set();
const byType = {};
ALL_MEALS.forEach(m => {
  byType[m.type] = (byType[m.type]||0)+1;
  if(!m.id) bad('缺少 id');
  if(ids.has(m.id)) bad('id 重复: '+m.id); ids.add(m.id);
  if(!TYPES.includes(m.type)) bad(m.id+' type 非法: '+m.type);
  if(!CARBS.includes(m.carb)) bad(m.id+' carb 非法: '+m.carb);
  if(!m.emoji) bad(m.id+' 缺少 emoji');
  (m.tags||[]).forEach(x => { if(!KNOWN_TAGS.includes(x)) bad(m.id+' 未知 tag: '+x); });
  (m.contains||[]).forEach(x => { if(!KNOWN_CONTAINS.includes(x)) bad(m.id+' 未知 contains: '+x); });

  // 双语字段完整性
  LANGS.forEach(lang => {
    const L = m[lang];
    if(!L){ bad(m.id+' 缺少 '+lang+' 文案'); return; }
    ['name','time','servings','why','notes'].forEach(k => {
      if(!L[k]) bad(m.id+'.'+lang+' 缺少 '+k);
    });
    ['ingredients','steps'].forEach(k => {
      if(!Array.isArray(L[k]) || !L[k].length) bad(m.id+'.'+lang+' 缺少 '+k);
    });
  });
  // 中英食材/步骤条数应一致
  if(m.en && m.zh){
    if(m.en.ingredients.length !== m.zh.ingredients.length)
      bad(m.id+' 中英食材条数不一致 ('+m.en.ingredients.length+' vs '+m.zh.ingredients.length+')');
    if(m.en.steps.length !== m.zh.steps.length)
      bad(m.id+' 中英步骤条数不一致 ('+m.en.steps.length+' vs '+m.zh.steps.length+')');
  }
  // 宏量营养素检查
  if(!m.macros) bad(m.id+' 缺少 macros');
  else {
    ['protein','fat','netCarbs'].forEach(k => {
      if(!m.macros[k]) bad(m.id+' macros 缺少 '+k);
      else {
        if(typeof m.macros[k].g !== 'number') bad(m.id+' macros.'+k+'.g 非数字');
        if(typeof m.macros[k].pct !== 'number') bad(m.id+' macros.'+k+'.pct 非数字');
      }
    });
  }
  // focus 标签
  if(!m.focus || !Array.isArray(m.focus)) bad(m.id+' 缺少 focus 数组');

  // 逻辑冲突
  const ANIMAL = ['dairy','egg','fish','shellfish'];
  if((m.tags||[]).includes('gluten-free') && (m.contains||[]).includes('gluten'))
    bad(m.id+' 冲突：标 gluten-free 但 contains 含 gluten');
  if((m.tags||[]).includes('vegetarian') && (m.contains||[]).some(x=>['fish','shellfish'].includes(x)))
    bad(m.id+' 冲突：标 vegetarian 但含鱼/贝类');
  const animal = (m.contains||[]).filter(x=>ANIMAL.includes(x));
  if((m.tags||[]).includes('vegan') && animal.length)
    bad(m.id+' 冲突：标 vegan 但含动物性成分: '+animal.join(','));
  if((m.tags||[]).includes('vegan') && !(m.tags||[]).includes('vegetarian'))
    bad(m.id+' 提示：标了 vegan 但没标 vegetarian');
});
Object.entries(byType).forEach(([k,v])=>console.log('  '+k.padEnd(10)+v+' 道'));

/* ---------- 2. 图片引用 ---------- */
console.log('\n=== 2. 配图引用 ===');
let withImg = 0, ph = 0;
ALL_MEALS.forEach(m => {
  if(m.img){
    withImg++;
    if(!fs.existsSync(path.join(ROOT,'images',m.img))) bad('图片缺失: images/'+m.img+'  ('+m.id+')');
  } else ph++;
});
console.log('  真实配图:', withImg, '· 占位图:', ph);
const files = fs.readdirSync(path.join(ROOT,'images')).filter(f=>f.endsWith('.jpg'));
console.log('  images/ 下 JPG:', files.length);
const used = new Set(ALL_MEALS.map(m=>m.img).filter(Boolean));
files.forEach(f => { if(!used.has(f)) console.log('  · 未被引用: images/'+f); });

/* ---------- 3. 筛选逻辑仿真 ---------- */
console.log('\n=== 3. 筛选逻辑仿真 ===');
function matches(m, s){
  if(s.carb !== 'any' && m.carb !== s.carb) return false;
  for(const x of s.focus||[]) if(!m.tags.includes(x)) return false;
  for(const x of s.diet||[])  if(!m.tags.includes(x)) return false;
  for(const x of s.avoid||[]) if(m.contains.includes(x)) return false;
  return true;
}
const cases = [
  {label:'低碳 / Low carb',              s:{carb:'low'}},
  {label:'中碳 / Moderate carb',         s:{carb:'moderate'}},
  {label:'低碳+快手 / Low+quick',        s:{carb:'low',focus:['quick-easy']}},
  {label:'亚洲风味 / Asian',             s:{carb:'any',focus:['asian']}},
  {label:'gut+GF+dairy-free',            s:{carb:'any',focus:['gut-healing'],diet:['gluten-free'],avoid:['dairy']}},
  {label:'vegan+GF+nut-free',            s:{carb:'any',diet:['vegan','gluten-free'],avoid:['nuts']}},
  {label:'no-cook+no dairy/GF/egg',      s:{carb:'any',focus:['no-cook'],avoid:['dairy','gluten','egg']}},
  {label:'batch-cook+high-protein',      s:{carb:'any',focus:['batch-cook','high-protein']}},
];
cases.forEach(cc => {
  const r = ALL_MEALS.filter(m => matches(m, cc.s));
  const per = {};
  r.forEach(m => per[m.type]=(per[m.type]||0)+1);
  console.log('  '+cc.label.padEnd(28)+r.length+' 道  ('+TYPES.map(x=>x.slice(0,3)+':'+(per[x]||0)).join(' ')+')');
  if(!r.length) bad('组合「'+cc.label+'」结果为空');
});

/* ---------- 4. index.html 语法与 DOM 检查 ---------- */
console.log('\n=== 4. index.html 检查 ===');
const html = fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
const blocks = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
blocks.forEach((b,i)=>{
  try{ new vm.Script(b); console.log('  内联脚本 '+(i+1)+' 语法 OK ('+b.split('\n').length+' 行)'); }
  catch(e){ bad('内联脚本 '+(i+1)+' 语法错误: '+e.message); }
});
const refIds = new Set([...html.matchAll(/\$\('#([A-Za-z0-9_-]+)'/g)].map(m=>m[1]));
const defIds = new Set([...html.matchAll(/\sid="([A-Za-z0-9_-]+)"/g)].map(m=>m[1]));
const DYNAMIC_IDS = new Set(['toast']);   // 运行时动态创建
const missing = [...refIds].filter(x=>!defIds.has(x) && !DYNAMIC_IDS.has(x));
if(missing.length) bad('引用了不存在的 DOM id: '+missing.join(', '));
else console.log('  DOM id 引用全部存在 ('+refIds.size+' 个)');

/* ---------- 5. i18n 键完整性 ---------- */
console.log('\n=== 5. i18n 双语键 ===');
function keysOf(lang){
  const re = new RegExp('\\n  '+lang+': \\{\\n([\\s\\S]*?)\\n  \\}');
  const seg = html.match(re);
  if(!seg) return null;
  return [...seg[1].matchAll(/^ {4}([A-Za-z_][A-Za-z0-9_]*):/gm)].map(x=>x[1]);
}
const zk = keysOf('zh'), ek = keysOf('en');
if(!zk || !ek) bad('未解析出 I18N 的 zh/en 键集合');
else {
  const missEn = zk.filter(k=>!ek.includes(k));
  const missZh = ek.filter(k=>!zk.includes(k));
  if(missEn.length) bad('I18N.en 缺少键: '+missEn.join(', '));
  if(missZh.length) bad('I18N.zh 缺少键: '+missZh.join(', '));
  if(!missEn.length && !missZh.length) console.log('  zh/en 键完全一致 ('+zk.length+' 个键)');
}

/* ---------- 结果 ---------- */
console.log('\n' + '='.repeat(44));
console.log(fail ? '✗ 发现 '+fail+' 个问题' : '✓ 全部检查通过');
process.exit(fail?1:0);
