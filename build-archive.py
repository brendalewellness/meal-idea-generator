#!/usr/bin/env python3
"""
Recipe Archive builder — generates a standalone, browsable recipe catalog.

Reads the same data files as the main app (meals.js, new-recipes.js,
extra-recipes.js, micronutrients.js, branding.js), embeds all images
as base64 data URIs, and produces a single self-contained HTML file.

Output: dist/recipe-archive.html
"""
import base64
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(ROOT, "images")
DIST = os.path.join(ROOT, "dist")

MAX_SIDE = 480      # slightly smaller than main app — archive has more images
QUALITY = 72

DATA_FILES = [
    os.path.join(ROOT, "data", "meals.js"),
    os.path.join(ROOT, "data", "new-recipes.js"),
    os.path.join(ROOT, "data", "extra-recipes.js"),
    os.path.join(ROOT, "data", "ingredient-recipes.js"),
    os.path.join(ROOT, "data", "added-recipes.js"),
    os.path.join(ROOT, "data", "micronutrients.js"),
    os.path.join(ROOT, "data", "branding.js"),
]


def encode_image(name):
    """Read images/<name> as a data: URI (compressed). Returns (uri, size)."""
    path = os.path.join(IMG_DIR, name)
    if not os.path.exists(path) or os.path.getsize(path) == 0:
        return None, 0
    try:
        from PIL import Image
    except ImportError:
        sys.exit("Pillow required: pip install pillow")
    try:
        im = Image.open(path)
    except Exception:
        return None, 0
    is_png = name.lower().endswith(".png")
    if is_png and im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        im.thumbnail((MAX_SIDE, MAX_SIDE))
        buf = io.BytesIO()
        im.save(buf, "PNG", optimize=True)
        b64 = base64.b64encode(buf.getvalue()).decode("ascii")
        return f"data:image/png;base64,{b64}", len(buf.getvalue())
    else:
        im = im.convert("RGB")
        im.thumbnail((MAX_SIDE, MAX_SIDE))
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        b64 = base64.b64encode(buf.getvalue()).decode("ascii")
        return f"data:image/jpeg;base64,{b64}", len(buf.getvalue())


def embed_images_in_js(src):
    """Replace img: 'xxx.jpg' with img: 'data:...' in JS source."""
    cache = {}
    total = 0
    def repl(m):
        nonlocal total
        fname = m.group(1)
        if fname not in cache:
            uri, sz = encode_image(fname)
            if uri:
                cache[fname] = uri
                total += sz
                print(f"  embedded {fname:42s} {sz/1024:6.1f} KB")
            else:
                cache[fname] = f"images/{fname}"
        return f"img: '{cache[fname]}'"
    out = re.sub(r"img:\s*'([^']+\.jpg)'", repl, src)
    return out, len(cache), total


# ── HTML template ──────────────────────────────────────────────────────────

HTML_TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Recipe Archive — Brenda Le Wellness</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --primary:#495a58; --accent:#d4967d; --neutral:#dcd9d0;
  --ink:#2a3432; --muted:#7a847f; --bg:#faf8f4; --panel:#fff;
  --font-h:'Lora',Georgia,'Times New Roman',serif;
  --font-b:'Source Sans Pro',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  --radius:12px; --shadow:0 2px 8px rgba(0,0,0,.07); --shadow-lg:0 8px 32px rgba(0,0,0,.15);
  --type-b:#e8b894; --type-l:#94b8a8; --type-d:#a89bc4; --type-s:#b8c47a;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--font-b);color:var(--ink);background:var(--bg);line-height:1.5}
h1,h2,h3,h4{font-family:var(--font-h);color:var(--primary);font-weight:600}

/* ── Header ── */
.hdr{position:sticky;top:0;z-index:100;background:var(--panel);border-bottom:1px solid var(--neutral);
  box-shadow:var(--shadow);padding:14px 28px;display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.hdr-logo{height:40px;flex-shrink:0}
.hdr-title{font-size:22px;font-weight:600;color:var(--primary);white-space:nowrap}
.hdr-count{font-size:13px;color:var(--muted);margin-left:4px}
.hdr-spacer{flex:1}
.lang-btn{background:var(--neutral);border:none;border-radius:20px;padding:6px 16px;font-size:13px;
  font-family:var(--font-b);cursor:pointer;color:var(--primary);font-weight:600;transition:.2s}
.lang-btn:hover{background:var(--accent);color:#fff}
.print-btn{background:var(--primary);color:#fff;border:none;border-radius:20px;padding:8px 20px;
  font-size:13px;font-family:var(--font-b);cursor:pointer;font-weight:600;transition:.2s}
.print-btn:hover{background:var(--ink)}

/* ── Controls ── */
.ctl{padding:12px 28px;background:var(--panel);border-bottom:1px solid var(--neutral);
  display:flex;align-items:center;gap:12px;flex-wrap:wrap;position:sticky;top:69px;z-index:90}
.search{flex:1;min-width:200px;max-width:400px;position:relative}
.search input{width:100%;padding:8px 14px 8px 36px;border:1px solid var(--neutral);border-radius:20px;
  font-size:14px;font-family:var(--font-b);background:var(--bg);color:var(--ink);outline:none;transition:.2s}
.search input:focus{border-color:var(--accent)}
.search svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--muted)}
.f-chips{display:flex;gap:6px;flex-wrap:wrap}
.chip{padding:5px 14px;border-radius:16px;font-size:13px;font-weight:600;cursor:pointer;
  border:1px solid var(--neutral);background:var(--panel);color:var(--muted);transition:.15s;user-select:none}
.chip:hover{border-color:var(--accent);color:var(--primary)}
.chip.active{background:var(--primary);color:#fff;border-color:var(--primary)}
.chip.active.type-b{background:var(--type-b);border-color:var(--type-b)}
.chip.active.type-l{background:var(--type-l);border-color:var(--type-l)}
.chip.active.type-d{background:var(--type-d);border-color:var(--type-d)}
.chip.active.type-s{background:var(--type-s);border-color:var(--type-s)}
.sort-sel{padding:6px 12px;border:1px solid var(--neutral);border-radius:16px;font-size:13px;
  font-family:var(--font-b);background:var(--panel);color:var(--primary);cursor:pointer;outline:none}
.result-info{font-size:13px;color:var(--muted);min-width:80px;text-align:right}

/* ── Grid ── */
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px;padding:20px 28px 60px}
.card{background:var(--panel);border-radius:var(--radius);overflow:hidden;cursor:pointer;
  box-shadow:var(--shadow);transition:.2s;border:1px solid transparent}
.card:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px);border-color:var(--accent)}
.card-img{width:100%;height:180px;object-fit:cover;background:var(--neutral);display:block}
.card-emoji{height:180px;display:flex;align-items:center;justify-content:center;font-size:64px;background:linear-gradient(135deg,var(--neutral),var(--bg))}
.card-body{padding:12px 14px}
.card-name{font-family:var(--font-h);font-size:16px;font-weight:600;color:var(--primary);
  line-height:1.3;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.card-meta{display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap}
.type-badge{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;
  padding:2px 8px;border-radius:10px;color:#fff}
.type-badge.breakfast{background:var(--type-b)}
.type-badge.lunch{background:var(--type-l)}
.type-badge.dinner{background:var(--type-d)}
.type-badge.snack{background:var(--type-s)}
.card-cal{font-size:13px;color:var(--muted);font-weight:600}
.card-macros{display:flex;gap:8px}
.macro-p{font-size:11px;color:#4a7da8;font-weight:600}
.macro-c{font-size:11px;color:#c4954a;font-weight:600}
.macro-f{font-size:11px;color:#d4856a;font-weight:600}
.card-tags{display:flex;gap:4px;flex-wrap:wrap;margin-top:6px}
.mini-tag{font-size:10px;padding:1px 6px;border-radius:8px;background:var(--bg);color:var(--muted);
  border:1px solid var(--neutral)}

/* ── Modal ── */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:200;display:none;
  align-items:flex-start;justify-content:center;padding:40px 20px;overflow-y:auto}
.overlay.show{display:flex}
.modal{background:var(--panel);border-radius:var(--radius);max-width:680px;width:100%;
  box-shadow:var(--shadow-lg);overflow:hidden;position:relative;margin:auto}
.modal-close{position:absolute;top:12px;right:14px;z-index:5;background:rgba(255,255,255,.9);
  border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;
  color:var(--primary);box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center}
.modal-close:hover{background:var(--accent);color:#fff}
.modal-img{width:100%;height:280px;object-fit:cover;display:block}
.modal-emoji{height:280px;display:flex;align-items:center;justify-content:center;font-size:96px;
  background:linear-gradient(135deg,var(--neutral),var(--bg))}
.modal-body{padding:24px 28px}
.modal-name{font-family:var(--font-h);font-size:26px;font-weight:600;color:var(--primary);margin-bottom:4px}
.modal-why{font-size:15px;color:var(--muted);font-style:italic;margin-bottom:16px;line-height:1.5}
.modal-meta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--neutral)}
.modal-meta-item{font-size:13px;color:var(--muted)}
.modal-meta-item b{color:var(--primary);font-weight:600}
.modal-macros{display:flex;gap:16px;margin-bottom:20px;padding:14px 18px;background:var(--bg);border-radius:8px}
.modal-macro-box{text-align:center;flex:1}
.modal-macro-val{font-size:20px;font-weight:700;color:var(--primary)}
.modal-macro-label{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}
.modal-macro-cal{color:var(--accent)}
.section-title{font-family:var(--font-h);font-size:16px;font-weight:600;color:var(--primary);
  margin-bottom:8px;margin-top:16px}
.ingredient-list{list-style:none;padding-left:0}
.ingredient-list li{padding:6px 0;border-bottom:1px solid var(--neutral);font-size:14px;color:var(--ink)}
.ingredient-list li:last-child{border-bottom:none}
.steps-list{counter-reset:step;list-style:none;padding-left:0}
.steps-list li{counter-increment:step;padding:8px 0 8px 32px;position:relative;font-size:14px;color:var(--ink);line-height:1.5}
.steps-list li::before{content:counter(step);position:absolute;left:0;top:6px;width:22px;height:22px;
  background:var(--accent);color:#fff;border-radius:50%;font-size:12px;font-weight:700;
  display:flex;align-items:center;justify-content:center}
.modal-notes{margin-top:16px;padding:12px 16px;background:#fef5ee;border-left:3px solid var(--accent);
  border-radius:0 8px 8px 0;font-size:13px;color:var(--ink)}
.micro-table{width:100%;border-collapse:collapse;margin-top:8px}
.micro-table th{text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.5px;
  color:var(--muted);padding:6px 10px;border-bottom:2px solid var(--neutral)}
.micro-table td{padding:6px 10px;font-size:13px;color:var(--ink);border-bottom:1px solid var(--neutral)}
.micro-table td:last-child{font-weight:600;color:var(--primary)}

/* ── Empty state ── */
.empty{text-align:center;padding:80px 20px;color:var(--muted)}
.empty-icon{font-size:48px;margin-bottom:12px}

/* ── Print ── */
@media print{
  .hdr,.ctl,.overlay{display:none!important}
  .grid{grid-template-columns:repeat(3,1fr);gap:8px;padding:10px}
  .card{box-shadow:none;border:1px solid var(--neutral);page-break-inside:avoid}
  .card-img,.card-emoji{height:120px}
  .card-body{padding:8px}
  body{background:#fff}
}
</style>
</head>
<body>

<!-- Header -->
<header class="hdr">
  <img class="hdr-logo" id="logoImg" alt="Brenda Le Wellness">
  <span class="hdr-title">Recipe Archive</span>
  <span class="hdr-count" id="totalCount"></span>
  <div class="hdr-spacer"></div>
  <button class="lang-btn" id="langBtn">中文</button>
  <button class="print-btn" id="printBtn">Print</button>
</header>

<!-- Controls -->
<div class="ctl">
  <div class="search">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    <input type="text" id="searchInput" placeholder="Search recipes...">
  </div>
  <div class="f-chips" id="typeChips">
    <span class="chip active" data-type="all">All</span>
    <span class="chip" data-type="breakfast">Breakfast</span>
    <span class="chip" data-type="lunch">Lunch</span>
    <span class="chip" data-type="dinner">Dinner</span>
    <span class="chip" data-type="snack">Snack</span>
  </div>
  <div class="f-chips" id="carbChips">
    <span class="chip active" data-carb="all">All Carbs</span>
    <span class="chip" data-carb="low">Low-Carb</span>
    <span class="chip" data-carb="moderate">Moderate</span>
  </div>
  <select class="sort-sel" id="sortSel">
    <option value="name">Sort: Name A-Z</option>
    <option value="cal">Sort: Calories</option>
    <option value="protein">Sort: Protein</option>
    <option value="type">Sort: By Type</option>
  </select>
  <span class="result-info" id="resultInfo"></span>
</div>

<!-- Grid -->
<div class="grid" id="grid"></div>

<!-- Modal -->
<div class="overlay" id="overlay">
  <div class="modal" id="modal"></div>
</div>

<script>
// ____DATA_START____
</script>
<script>
// ____APP_LOGIC____
(function(){
  'use strict';

  var lang = 'en';
  var allMeals = [].concat(MEALS||[], NEW_RECIPES||[], EXTRA_RECIPES||[]);
  var micros = typeof MICROS !== 'undefined' ? MICROS : {};
  var brand = typeof BRAND !== 'undefined' ? BRAND : {};

  // ── Helpers ──
  function L(m){ return m[lang] || m.en; }
  function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function imgSrc(m){
    if(!m.img) return null;
    if(m.img.indexOf('data:')===0 || m.img.indexOf('images/')===0) return m.img;
    return m.img;
  }
  function macroCal(m){
    var p=(m.macros.protein.g||0)*4, f=(m.macros.fat.g||0)*9, c=(m.macros.netCarbs.g||0)*4;
    return Math.round(p+f+c);
  }
  function typeLabel(t){
    var map = {breakfast:'Breakfast',lunch:'Lunch',dinner:'Dinner',snack:'Snack'};
    return lang==='zh' ? {breakfast:'早餐',lunch:'午餐',dinner:'晚餐',snack:'零食'}[t] : map[t];
  }
  function typeClass(t){ return 'type-' + t.charAt(0); }

  // ── State ──
  var state = { search:'', type:'all', carb:'all', sort:'name' };

  // ── Filter ──
  function filtered(){
    var q = state.search.toLowerCase().trim();
    return allMeals.filter(function(m){
      if(state.type!=='all' && m.type!==state.type) return false;
      if(state.carb!=='all' && m.carb!==state.carb) return false;
      if(q){
        var n = (m.en.name+' '+m.zh.name).toLowerCase();
        if(n.indexOf(q)<0) return false;
      }
      return true;
    });
  }

  // ── Sort ──
  function sorted(arr){
    var s = state.sort;
    var c = arr.slice();
    if(s==='name') c.sort(function(a,b){ return L(a).name.localeCompare(L(b).name); });
    else if(s==='cal') c.sort(function(a,b){ return macroCal(b)-macroCal(a); });
    else if(s==='protein') c.sort(function(a,b){ return b.macros.protein.g-a.macros.protein.g; });
    else if(s==='type') c.sort(function(a,b){
      var ord={breakfast:0,lunch:1,dinner:2,snack:3};
      if(ord[a.type]!==ord[b.type]) return ord[a.type]-ord[b.type];
      return L(a).name.localeCompare(L(b).name);
    });
    return c;
  }

  // ── Render card ──
  function cardHTML(m){
    var img = imgSrc(m);
    var imgHTML = img
      ? '<img class="card-img" loading="lazy" src="'+esc(img)+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="card-emoji" style="display:none">'+esc(m.emoji||'🍽')+'</div>'
      : '<div class="card-emoji">'+esc(m.emoji||'🍽')+'</div>';
    var d = L(m);
    var cal = macroCal(m);
    var tags = (m.focus||[]).slice(0,2).map(function(t){
      return '<span class="mini-tag">'+esc(t)+'</span>';
    }).join('');
    return '<div class="card" data-id="'+esc(m.id)+'">'+
      imgHTML +
      '<div class="card-body">'+
        '<div class="card-name">'+esc(d.name)+'</div>'+
        '<div class="card-meta">'+
          '<span class="type-badge '+m.type+'">'+typeLabel(m.type)+'</span>'+
          '<span class="card-cal">'+cal+' cal</span>'+
        '</div>'+
        '<div class="card-macros">'+
          '<span class="macro-p">P '+m.macros.protein.g+'g</span>'+
          '<span class="macro-c">C '+m.macros.netCarbs.g+'g</span>'+
          '<span class="macro-f">F '+m.macros.fat.g+'g</span>'+
        '</div>'+
        (tags?'<div class="card-tags">'+tags+'</div>':'')+
      '</div>'+
    '</div>';
  }

  // ── Render grid ──
  function render(){
    var list = sorted(filtered());
    var g = document.getElementById('grid');
    if(!list.length){
      g.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="empty-icon">🔍</div>'+
        '<p>No recipes match your filters.</p></div>';
    } else {
      g.innerHTML = list.map(cardHTML).join('');
    }
    document.getElementById('resultInfo').textContent = list.length + ' / ' + allMeals.length;
    // Bind clicks
    g.querySelectorAll('.card').forEach(function(c){
      c.addEventListener('click', function(){
        var id = c.getAttribute('data-id');
        var m = allMeals.find(function(x){ return x.id===id; });
        if(m) openModal(m);
      });
    });
  }

  // ── Modal ──
  function openModal(m){
    var d = L(m);
    var img = imgSrc(m);
    var imgHTML = img
      ? '<img class="modal-img" src="'+esc(img)+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="modal-emoji" style="display:none">'+esc(m.emoji||'🍽')+'</div>'
      : '<div class="modal-emoji">'+esc(m.emoji||'🍽')+'</div>';
    var cal = macroCal(m);
    var micro = micros[m.id] || {};

    // Build macro percentages
    function pct(key){
      var v = m.macros[key];
      return v && v.pct ? v.pct : 0;
    }

    var ings = (d.ingredients||[]).map(function(i){
      return '<li>'+esc(i)+'</li>';
    }).join('');

    var steps = (d.steps||[]).map(function(s){
      return '<li>'+esc(s)+'</li>';
    }).join('');

    var microRows = '';
    var microLabels = {
      calcium: lang==='zh'?'钙':'Calcium',
      iron: lang==='zh'?'铁':'Iron',
      sodium: lang==='zh'?'钠':'Sodium',
      potassium: lang==='zh'?'钾':'Potassium',
      fibre: lang==='zh'?'纤维':'Fibre',
      vitaminC: lang==='zh'?'维C':'Vitamin C'
    };
    var microUnits = {fibre:'g',sodium:'mg',potassium:'mg',calcium:'mg',iron:'mg',vitaminC:'mg'};
    Object.keys(microLabels).forEach(function(k){
      var v = micro[k];
      if(v!==undefined && v!==null){
        microRows += '<tr><td>'+microLabels[k]+'</td><td>'+v+' '+microUnits[k]+'</td></tr>';
      }
    });

    var tags = (m.tags||[]).map(function(t){
      return '<span class="mini-tag">'+esc(t.replace(/-/g,' '))+'</span>';
    }).join('');

    document.getElementById('modal').innerHTML =
      '<button class="modal-close" id="modalClose">&times;</button>'+
      imgHTML +
      '<div class="modal-body">'+
        '<div class="modal-name">'+esc(d.name)+'</div>'+
        '<div class="modal-why">'+esc(d.why||'')+'</div>'+
        '<div class="modal-meta">'+
          '<span class="modal-meta-item"><span class="type-badge '+m.type+'">'+typeLabel(m.type)+'</span></span>'+
          '<span class="modal-meta-item">⏱ <b>'+esc(d.time||'')+'</b></span>'+
          '<span class="modal-meta-item">🍽 <b>'+esc(d.servings||'')+'</b></span>'+
          (m.carb==='low'?'<span class="modal-meta-item">🥬 <b>Low-Carb</b></span>':'')+
        '</div>'+
        '<div class="modal-macros">'+
          '<div class="modal-macro-box"><div class="modal-macro-val modal-macro-cal">'+cal+'</div><div class="modal-macro-label">Calories</div></div>'+
          '<div class="modal-macro-box"><div class="modal-macro-val">'+m.macros.protein.g+'g</div><div class="modal-macro-label">Protein '+pct('protein')+'%</div></div>'+
          '<div class="modal-macro-box"><div class="modal-macro-val">'+m.macros.netCarbs.g+'g</div><div class="modal-macro-label">Carbs '+pct('netCarbs')+'%</div></div>'+
          '<div class="modal-macro-box"><div class="modal-macro-val">'+m.macros.fat.g+'g</div><div class="modal-macro-label">Fat '+pct('fat')+'%</div></div>'+
        '</div>'+
        (tags?'<div class="card-tags" style="margin-bottom:16px">'+tags+'</div>':'')+
        '<div class="section-title">Ingredients</div>'+
        '<ul class="ingredient-list">'+ings+'</ul>'+
        '<div class="section-title">Instructions</div>'+
        '<ol class="steps-list">'+steps+'</ol>'+
        (d.notes?'<div class="modal-notes">'+esc(d.notes)+'</div>':'')+
        (microRows?'<div class="section-title">Micronutrients</div><table class="micro-table"><thead><tr><th>Nutrient</th><th>Per Serving</th></tr></thead><tbody>'+microRows+'</tbody></table>':'')+
      '</div>';
    document.getElementById('overlay').classList.add('show');
    document.getElementById('modalClose').addEventListener('click', closeModal);
  }

  function closeModal(){
    document.getElementById('overlay').classList.remove('show');
  }

  // ── Bindings ──
  document.getElementById('searchInput').addEventListener('input', function(e){
    state.search = e.target.value;
    render();
  });

  document.querySelectorAll('#typeChips .chip').forEach(function(c){
    c.addEventListener('click', function(){
      document.querySelectorAll('#typeChips .chip').forEach(function(x){ x.classList.remove('active'); });
      c.classList.add('active');
      state.type = c.getAttribute('data-type');
      render();
    });
  });

  document.querySelectorAll('#carbChips .chip').forEach(function(c){
    c.addEventListener('click', function(){
      document.querySelectorAll('#carbChips .chip').forEach(function(x){ x.classList.remove('active'); });
      c.classList.add('active');
      state.carb = c.getAttribute('data-carb');
      render();
    });
  });

  document.getElementById('sortSel').addEventListener('change', function(e){
    state.sort = e.target.value;
    render();
  });

  document.getElementById('overlay').addEventListener('click', function(e){
    if(e.target===this) closeModal();
  });

  document.addEventListener('keydown', function(e){
    if(e.key==='Escape') closeModal();
  });

  document.getElementById('langBtn').addEventListener('click', function(){
    lang = lang==='en' ? 'zh' : 'en';
    this.textContent = lang==='en' ? '中文' : 'EN';
    document.getElementById('searchInput').placeholder = lang==='zh' ? '搜索食谱...' : 'Search recipes...';
    document.querySelector('.hdr-title').textContent = lang==='zh' ? '食谱档案' : 'Recipe Archive';
    document.getElementById('printBtn').textContent = lang==='zh' ? '打印' : 'Print';
    // Update chip labels
    var typeLabels = lang==='zh'
      ? {all:'全部',breakfast:'早餐',lunch:'午餐',dinner:'晚餐',snack:'零食'}
      : {all:'All',breakfast:'Breakfast',lunch:'Lunch',dinner:'Dinner',snack:'Snack'};
    document.querySelectorAll('#typeChips .chip').forEach(function(c){
      c.textContent = typeLabels[c.getAttribute('data-type')];
    });
    var carbLabels = lang==='zh'
      ? {all:'全部碳水',low:'低碳',moderate:'适中'}
      : {all:'All Carbs',low:'Low-Carb',moderate:'Moderate'};
    document.querySelectorAll('#carbChips .chip').forEach(function(c){
      c.textContent = carbLabels[c.getAttribute('data-carb')];
    });
    var sortOpts = lang==='zh'
      ? [['name','排序：名称 A-Z'],['cal','排序：卡路里'],['protein','排序：蛋白质'],['type','排序：类型']]
      : [['name','Sort: Name A-Z'],['cal','Sort: Calories'],['protein','Sort: Protein'],['type','Sort: By Type']];
    var sel = document.getElementById('sortSel');
    sel.innerHTML = sortOpts.map(function(o){ return '<option value="'+o[0]+'">'+o[1]+'</option>'; }).join('');
    sel.value = state.sort;
    render();
  });

  document.getElementById('printBtn').addEventListener('click', function(){
    window.print();
  });

  // ── Init ──
  // Set logo
  if(brand.logo_lotus){
    document.getElementById('logoImg').src = brand.logo_lotus;
  }
  document.getElementById('totalCount').textContent = '(' + allMeals.length + ' recipes)';
  render();
})();
</script>
</body>
</html>
"""


def main():
    if not os.path.exists(DIST):
        os.makedirs(DIST)

    # Read all data files
    js_parts = []
    for f in DATA_FILES:
        if os.path.exists(f):
            src = open(f, encoding="utf-8").read()
            js_parts.append(src)

    combined_js = "\n\n".join(js_parts)

    # Embed images
    print("Embedding recipe images...")
    combined_js, n_img, total_img = embed_images_in_js(combined_js)
    print(f"\nEmbedded {n_img} images, {total_img/1024/1024:.2f} MB total\n")

    # Build HTML
    html = HTML_TEMPLATE.replace("// ____DATA_START____\n", combined_js)

    out_path = os.path.join(DIST, "recipe-archive.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)

    size = os.path.getsize(out_path)
    print(f"✓ Generated: {out_path}")
    print(f"  Size: {size/1024/1024:.2f} MB")
    print("  Standalone — no external files needed.")


if __name__ == "__main__":
    main()
