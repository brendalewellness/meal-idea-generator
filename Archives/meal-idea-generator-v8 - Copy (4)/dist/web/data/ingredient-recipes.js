/* ============================================================================
   INGREDIENT RECIPES  --  Basic food items categorized by food type
   ----------------------------------------------------------------------------
   156 items. Each has foodCats array: protein, carb, vegetable, fat-flavor, complete
   ============================================================================ */

const INGREDIENT_RECIPES = [
  {
    id:'p01', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'steak.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Steak',time:'5 min',servings:'4 oz',why:'',ingredients:["Beef steak 4 oz", "Salt", "Pepper", "Olive oil 1 tsp"],steps:["Season with salt and pepper", "Sear in hot pan 3-4 min per side", "Rest 5 min"],notes:''},
    zh:{name:'牛排',time:'5 分钟',servings:'110克',why:'',ingredients:["\u725b\u6392 110\u514b", "\u76d0", "\u80e1\u6912", "\u6a44\u6984\u6cb9 1\u8336\u5319"],steps:["\u8c03\u5473", "\u70ed\u9505\u6bcf\u9762\u714e 3-4 \u5206\u949f", "\u9759\u7f6e 5 \u5206\u949f"],notes:''},
    macros:{protein:{g:26,pct:44},fat:{g:15,pct:56},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p02', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'ground-beef.jpg', emoji:'🥩', foodCats:["protein"],
    en:{name:'Ground Beef',time:'5 min',servings:'4 oz',why:'',ingredients:["Ground beef 4 oz (85% lean)"],steps:["Brown in skillet over medium-high heat", "Drain fat"],notes:''},
    zh:{name:'牛肉末',time:'5 分钟',servings:'110克',why:'',ingredients:["\u725b\u8089\u672b 110\u514b"],steps:["\u4e2d\u5927\u706b\u7092\u6563", "\u6ca5\u6cb9"],notes:''},
    macros:{protein:{g:24,pct:37},fat:{g:18,pct:63},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p03', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'beef-burger-patty.jpg', emoji:'🍔', foodCats:["protein", "complete"],
    en:{name:'Beef Burger Patty',time:'5 min',servings:'1 patty',why:'',ingredients:["Ground beef 4 oz", "Salt", "Pepper"],steps:["Form patty", "Grill or pan-fry 4-5 min per side"],notes:''},
    zh:{name:'牛肉饼',time:'5 分钟',servings:'1个',why:'',ingredients:["\u725b\u8089\u672b 110\u514b", "\u76d0", "\u80e1\u6912"],steps:["\u538b\u6210\u997c", "\u6bcf\u9762\u714e 4-5 \u5206\u949f"],notes:''},
    macros:{protein:{g:24,pct:34},fat:{g:20,pct:63},netCarbs:{g:2,pct:3}}
  },
  {
    id:'p04', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'roast-beef-slices.jpg', emoji:'🥩', foodCats:["protein"],
    en:{name:'Roast Beef Slices',time:'5 min',servings:'4 oz',why:'',ingredients:["Roast beef slices 4 oz"],steps:["Serve cold or gently warm"],notes:''},
    zh:{name:'烤牛肉片',time:'5 分钟',servings:'110克',why:'',ingredients:["\u70e4\u725b\u8089\u7247 110\u514b"],steps:["\u51b7\u98df\u6216\u52a0\u70ed"],notes:''},
    macros:{protein:{g:25,pct:52},fat:{g:10,pct:46},netCarbs:{g:1,pct:2}}
  },
  {
    id:'p05', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'slow-cooked-shredded-beef.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Slow-Cooked Shredded Beef',time:'5 min',servings:'1 cup',why:'',ingredients:["Beef chuck 1 lb", "Onion", "Garlic", "Broth 1 cup", "Salt"],steps:["Sear beef", "Slow cook with veg and broth 8 hr on low", "Shred"],notes:''},
    zh:{name:'慢炖手撕牛肉',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u725b\u80a9 1\u78c5", "\u6d0b\u8471", "\u849c", "\u9ad8\u6c64 1\u676f", "\u76d0"],steps:["\u714e\u725b\u8089", "\u52a0\u83dc\u548c\u9ad8\u6c64\u6162\u7096 8 \u5c0f\u65f6", "\u6495\u4e1d"],notes:''},
    macros:{protein:{g:28,pct:48},fat:{g:12,pct:47},netCarbs:{g:3,pct:5}}
  },
  {
    id:'p06', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'pork-chops.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Pork Chops',time:'5 min',servings:'6 oz',why:'',ingredients:["Pork chops 6 oz", "Salt", "Pepper", "Oil"],steps:["Season", "Sear 4-5 min per side to 145F", "Rest 3 min"],notes:''},
    zh:{name:'猪排',time:'5 分钟',servings:'170克',why:'',ingredients:["\u732a\u6392 170\u514b", "\u76d0", "\u80e1\u6912", "\u6cb9"],steps:["\u8c03\u5473", "\u6bcf\u9762\u714e 4-5 \u5206\u949f", "\u9759\u7f6e"],notes:''},
    macros:{protein:{g:26,pct:45},fat:{g:14,pct:55},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p07', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'pork-sausage.jpg', emoji:'🌭', foodCats:["protein", "fat-flavor"],
    en:{name:'Pork Sausage',time:'5 min',servings:'2 links',why:'',ingredients:["Pork sausage 2 links"],steps:["Pan-fry or grill 8-10 min turning"],notes:''},
    zh:{name:'香肠',time:'5 分钟',servings:'2根',why:'',ingredients:["\u9999\u80a0 2\u6839"],steps:["\u714e\u6216\u70e4 8-10 \u5206\u949f"],notes:''},
    macros:{protein:{g:18,pct:26},fat:{g:22,pct:72},netCarbs:{g:1,pct:1}}
  },
  {
    id:'p08', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'pork-ribs.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Pork Ribs',time:'5 min',servings:'1 rack',why:'',ingredients:["Pork ribs 1 rack", "Dry rub"],steps:["Rub spices", "Bake 300F covered 2", "5 hr", "Broil 5 min"],notes:''},
    zh:{name:'排骨',time:'5 分钟',servings:'1排',why:'',ingredients:["\u6392\u9aa8 1\u6392", "\u5e72\u6599"],steps:["\u62b9\u6599", "300\u00b0F \u76d6\u70e4 2.5 \u5c0f\u65f6", "\u518d\u70e4 5 \u5206\u949f"],notes:''},
    macros:{protein:{g:25,pct:35},fat:{g:20,pct:63},netCarbs:{g:1,pct:1}}
  },
  {
    id:'p09', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'ham-slices.jpg', emoji:'🥩', foodCats:["protein"],
    en:{name:'Ham Slices',time:'5 min',servings:'3 oz',why:'',ingredients:["Ham slices 3 oz"],steps:["Serve cold or pan-fry briefly"],notes:''},
    zh:{name:'火腿片',time:'5 分钟',servings:'85克',why:'',ingredients:["\u706b\u817f\u7247 85\u514b"],steps:["\u51b7\u98df\u6216\u7565\u714e"],notes:''},
    macros:{protein:{g:18,pct:60},fat:{g:5,pct:37},netCarbs:{g:1,pct:3}}
  },
  {
    id:'p10', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'bacon.jpg', emoji:'🥓', foodCats:["protein", "fat-flavor"],
    en:{name:'Bacon',time:'5 min',servings:'3 strips',why:'',ingredients:["Bacon 3 strips"],steps:["Pan-fry medium heat 3-4 min per side", "Drain"],notes:''},
    zh:{name:'培根',time:'5 分钟',servings:'3片',why:'',ingredients:["\u57f9\u6839 3\u7247"],steps:["\u4e2d\u706b\u6bcf\u9762\u714e 3-4 \u5206\u949f", "\u6ca5\u6cb9"],notes:''},
    macros:{protein:{g:12,pct:11},fat:{g:42,pct:89},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p11', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'chicken-breast.jpg', emoji:'🍗', foodCats:["protein"],
    en:{name:'Chicken Breast',time:'5 min',servings:'6 oz',why:'',ingredients:["Chicken breast 6 oz", "Salt", "Pepper"],steps:["Season", "Pan-fry or bake 375F 20-25 min", "Rest 5 min"],notes:''},
    zh:{name:'鸡胸肉',time:'5 分钟',servings:'170克',why:'',ingredients:["\u9e21\u80f8\u8089 170\u514b", "\u76d0", "\u80e1\u6912"],steps:["\u8c03\u5473", "\u714e\u6216\u70e4 20-25 \u5206\u949f", "\u9759\u7f6e"],notes:''},
    macros:{protein:{g:31,pct:78},fat:{g:4,pct:22},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p12', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'chicken-thighs.jpg', emoji:'🍗', foodCats:["protein", "complete"],
    en:{name:'Chicken Thighs',time:'5 min',servings:'6 oz',why:'',ingredients:["Chicken thighs 6 oz", "Salt", "Pepper"],steps:["Season", "Skin-side down 8 min, flip 6 min"],notes:''},
    zh:{name:'鸡腿肉',time:'5 分钟',servings:'170克',why:'',ingredients:["\u9e21\u817f\u8089 170\u514b", "\u76d0", "\u80e1\u6912"],steps:["\u8c03\u5473", "\u76ae\u671d\u4e0b\u714e 8 \u5206\u949f\uff0c\u7ffb\u9762 6 \u5206\u949f"],notes:''},
    macros:{protein:{g:26,pct:44},fat:{g:15,pct:56},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p13', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'ground-chicken.jpg', emoji:'🍗', foodCats:["protein"],
    en:{name:'Ground Chicken',time:'5 min',servings:'4 oz',why:'',ingredients:["Ground chicken 4 oz"],steps:["Cook in skillet breaking up", "Season"],notes:''},
    zh:{name:'鸡肉末',time:'5 分钟',servings:'110克',why:'',ingredients:["\u9e21\u8089\u672b 110\u514b"],steps:["\u7092\u6563", "\u8c03\u5473"],notes:''},
    macros:{protein:{g:26,pct:59},fat:{g:8,pct:41},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p14', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'chicken-wings.jpg', emoji:'🍗', foodCats:["protein", "complete"],
    en:{name:'Chicken Wings',time:'5 min',servings:'4 wings',why:'',ingredients:["Chicken wings 4", "Salt", "Pepper"],steps:["Season", "Bake 400F 40-45 min flip halfway"],notes:''},
    zh:{name:'鸡翅',time:'5 分钟',servings:'4只',why:'',ingredients:["\u9e21\u7fc5 4\u53ea", "\u76d0", "\u80e1\u6912"],steps:["\u8c03\u5473", "400\u00b0F \u70e4 40-45 \u5206\u949f"],notes:''},
    macros:{protein:{g:22,pct:35},fat:{g:18,pct:65},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p15', type:'snack', carb:'low', tags:[], contains:["turkey"], focus:[],
    img:'ground-turkey.jpg', emoji:'🦃', foodCats:["protein"],
    en:{name:'Ground Turkey',time:'5 min',servings:'4 oz',why:'',ingredients:["Ground turkey 4 oz"],steps:["Cook in skillet", "Season"],notes:''},
    zh:{name:'火鸡肉末',time:'5 分钟',servings:'110克',why:'',ingredients:["\u706b\u9e21\u8089\u672b 110\u514b"],steps:["\u7092\u6563", "\u8c03\u5473"],notes:''},
    macros:{protein:{g:26,pct:59},fat:{g:8,pct:41},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p16', type:'snack', carb:'low', tags:[], contains:["turkey"], focus:[],
    img:'turkey-slices.jpg', emoji:'🦃', foodCats:["protein"],
    en:{name:'Turkey Slices',time:'5 min',servings:'4 oz',why:'',ingredients:["Turkey breast slices 4 oz"],steps:["Serve cold or pan-fry briefly"],notes:''},
    zh:{name:'火鸡片',time:'5 分钟',servings:'110克',why:'',ingredients:["\u706b\u9e21\u7247 110\u514b"],steps:["\u51b7\u98df\u6216\u7565\u714e"],notes:''},
    macros:{protein:{g:24,pct:76},fat:{g:3,pct:21},netCarbs:{g:1,pct:3}}
  },
  {
    id:'p17', type:'snack', carb:'low', tags:[], contains:["turkey"], focus:[],
    img:'leftover-roast-turkey.jpg', emoji:'🦃', foodCats:["protein", "complete"],
    en:{name:'Leftover Roast Turkey',time:'5 min',servings:'6 oz',why:'',ingredients:["Roast turkey 6 oz"],steps:["Slice and serve cold or reheat in gravy"],notes:''},
    zh:{name:'烤火鸡',time:'5 分钟',servings:'170克',why:'',ingredients:["\u70e4\u706b\u9e21 170\u514b"],steps:["\u5207\u7247\u51b7\u98df\u6216\u52a0\u8089\u6c41\u52a0\u70ed"],notes:''},
    macros:{protein:{g:28,pct:67},fat:{g:6,pct:33},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p18', type:'snack', carb:'low', tags:[], contains:["sheep"], focus:[],
    img:'lamb-chops.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Lamb Chops',time:'5 min',servings:'4 chops',why:'',ingredients:["Lamb chops 4", "Salt", "Pepper", "Oil"],steps:["Season", "Sear 3 min per side", "Rest"],notes:''},
    zh:{name:'羊排',time:'5 分钟',servings:'4根',why:'',ingredients:["\u7f8a\u6392 4\u6839", "\u76d0", "\u80e1\u6912", "\u6cb9"],steps:["\u8c03\u5473", "\u6bcf\u9762\u714e 3 \u5206\u949f", "\u9759\u7f6e"],notes:''},
    macros:{protein:{g:24,pct:37},fat:{g:18,pct:63},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p19', type:'snack', carb:'low', tags:[], contains:["sheep", "egg"], focus:[],
    img:'lamb-meatballs.jpg', emoji:'🧆', foodCats:["protein", "complete"],
    en:{name:'Lamb Meatballs',time:'5 min',servings:'4 pieces',why:'',ingredients:["Ground lamb 4 oz", "Onion", "Cumin", "Egg", "Salt"],steps:["Mix and form balls", "Bake 400F 15-18 min"],notes:''},
    zh:{name:'羊肉丸',time:'5 分钟',servings:'4个',why:'',ingredients:["\u7f8a\u8089\u672b 110\u514b", "\u6d0b\u8471", "\u5b5c\u7136", "\u9e21\u86cb", "\u76d0"],steps:["\u62cc\u5747\u63c9\u4e38", "400\u00b0F \u70e4 15-18 \u5206\u949f"],notes:''},
    macros:{protein:{g:22,pct:37},fat:{g:16,pct:60},netCarbs:{g:2,pct:3}}
  },
  {
    id:'p20', type:'snack', carb:'low', tags:[], contains:["duck"], focus:[],
    img:'roast-duck.jpg', emoji:'🦆', foodCats:["protein", "complete"],
    en:{name:'Roast Duck',time:'5 min',servings:'6 oz',why:'',ingredients:["Duck 6 oz"],steps:["Score skin", "Pan-fry skin-side 8 min", "Roast 400F 12-15 min"],notes:''},
    zh:{name:'烤鸭',time:'5 分钟',servings:'170克',why:'',ingredients:["\u9e2d\u8089 170\u514b"],steps:["\u76ae\u5212\u5200", "\u76ae\u671d\u4e0b\u714e 8 \u5206\u949f", "400\u00b0F \u70e4 12-15 \u5206\u949f"],notes:''},
    macros:{protein:{g:22,pct:25},fat:{g:30,pct:75},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p21', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'baked-salmon.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Baked Salmon',time:'5 min',servings:'6 oz',why:'',ingredients:["Salmon 6 oz", "Oil", "Salt", "Lemon"],steps:["Brush with oil", "Bake 400F 12-15 min", "Squeeze lemon"],notes:''},
    zh:{name:'烤三文鱼',time:'5 分钟',servings:'170克',why:'',ingredients:["\u4e09\u6587\u9c7c 170\u514b", "\u6cb9", "\u76d0", "\u67e0\u6aac"],steps:["\u5237\u6cb9", "400\u00b0F \u70e4 12-15 \u5206\u949f", "\u6324\u67e0\u6aac"],notes:''},
    macros:{protein:{g:28,pct:51},fat:{g:12,pct:49},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p22', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'pan-fried-haddock.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Pan-Fried Haddock',time:'5 min',servings:'6 oz',why:'',ingredients:["Haddock 6 oz", "Flour", "Butter", "Salt"],steps:["Dust with flour", "Pan-fry in butter 4-5 min per side"],notes:''},
    zh:{name:'煎鳕鱼',time:'5 分钟',servings:'170克',why:'',ingredients:["\u9cd5\u9c7c 170\u514b", "\u9762\u7c89", "\u9ec4\u6cb9", "\u76d0"],steps:["\u88f9\u9762\u7c89", "\u9ec4\u6cb9\u714e\u6bcf\u9762 4-5 \u5206\u949f"],notes:''},
    macros:{protein:{g:24,pct:68},fat:{g:5,pct:32},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p23', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'baked-tilapia.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Baked Tilapia',time:'5 min',servings:'6 oz',why:'',ingredients:["Tilapia 6 oz", "Oil", "Salt"],steps:["Brush with oil", "Bake 375F 15-20 min"],notes:''},
    zh:{name:'烤罗非鱼',time:'5 分钟',servings:'170克',why:'',ingredients:["\u7f57\u975e\u9c7c 170\u514b", "\u6cb9", "\u76d0"],steps:["\u5237\u6cb9", "375\u00b0F \u70e4 15-20 \u5206\u949f"],notes:''},
    macros:{protein:{g:23,pct:77},fat:{g:3,pct:23},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p24', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'grilled-halibut.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Grilled Halibut',time:'5 min',servings:'6 oz',why:'',ingredients:["Halibut 6 oz", "Oil", "Salt"],steps:["Brush with oil", "Grill 4-5 min per side"],notes:''},
    zh:{name:'烤比目鱼',time:'5 分钟',servings:'170克',why:'',ingredients:["\u6bd4\u76ee\u9c7c 170\u514b", "\u6cb9", "\u76d0"],steps:["\u5237\u6cb9", "\u6bcf\u9762\u70e4 4-5 \u5206\u949f"],notes:''},
    macros:{protein:{g:28,pct:71},fat:{g:5,pct:29},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p25', type:'snack', carb:'low', tags:[], contains:["shellfish"], focus:[],
    img:'boiled-shrimp.jpg', emoji:'🦐', foodCats:["protein"],
    en:{name:'Boiled Shrimp',time:'5 min',servings:'6 oz',why:'',ingredients:["Shrimp 6 oz", "Salt"],steps:["Boil salted water", "Add shrimp 2-3 min until pink", "Drain"],notes:''},
    zh:{name:'白灼虾',time:'5 分钟',servings:'170克',why:'',ingredients:["\u867e 170\u514b", "\u76d0"],steps:["\u76d0\u6c34\u716e 2-3 \u5206\u949f\u81f3\u53d8\u7c89\u7ea2", "\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:24,pct:91},fat:{g:1,pct:9},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p26', type:'snack', carb:'low', tags:[], contains:["shellfish"], focus:[],
    img:'pan-fried-scallops.jpg', emoji:'🦪', foodCats:["protein"],
    en:{name:'Pan-Fried Scallops',time:'5 min',servings:'6 pieces',why:'',ingredients:["Scallops 6", "Butter", "Salt"],steps:["Pat dry", "Sear in butter high heat 2 min per side"],notes:''},
    zh:{name:'煎带子',time:'5 分钟',servings:'6个',why:'',ingredients:["\u5e26\u5b50 6\u4e2a", "\u9ec4\u6cb9", "\u76d0"],steps:["\u62cd\u4e7e", "\u5927\u706b\u9ec4\u6cb9\u6bcf\u9762\u714e 2 \u5206\u949f"],notes:''},
    macros:{protein:{g:24,pct:73},fat:{g:3,pct:21},netCarbs:{g:2,pct:6}}
  },
  {
    id:'p27', type:'snack', carb:'low', tags:[], contains:["shellfish"], focus:[],
    img:'steamed-mussels.jpg', emoji:'🦪', foodCats:["protein", "complete"],
    en:{name:'Steamed Mussels',time:'5 min',servings:'1 lb',why:'',ingredients:["Mussels 1 lb", "Garlic", "Wine", "Butter"],steps:["Saut\u00e9 garlic in butter with wine", "Add mussels, cover 5 min"],notes:''},
    zh:{name:'蒸青口',time:'5 分钟',servings:'1磅',why:'',ingredients:["\u9752\u53e3 1\u78c5", "\u849c", "\u767d\u9152", "\u9ec4\u6cb9"],steps:["\u849c\u9ec4\u6cb9\u52a0\u767d\u9152\u7092", "\u653e\u9752\u53e3\u76d6\u84b8 5 \u5206\u949f"],notes:''},
    macros:{protein:{g:20,pct:61},fat:{g:4,pct:27},netCarbs:{g:4,pct:12}}
  },
  {
    id:'p28', type:'snack', carb:'low', tags:[], contains:["shellfish"], focus:[],
    img:'smoked-oysters.jpg', emoji:'🦪', foodCats:["protein"],
    en:{name:'Smoked Oysters',time:'5 min',servings:'3 oz',why:'',ingredients:["Smoked oysters 3 oz canned"],steps:["Serve from tin"],notes:''},
    zh:{name:'烟熏生蚝',time:'5 分钟',servings:'85克',why:'',ingredients:["\u70df\u718f\u751f\u869d 85\u514b\u7f50\u5934"],steps:["\u5f00\u7f50\u5373\u98df"],notes:''},
    macros:{protein:{g:12,pct:55},fat:{g:4,pct:41},netCarbs:{g:1,pct:5}}
  },
  {
    id:'p29', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'scrambled-eggs.jpg', emoji:'🍳', foodCats:["protein"],
    en:{name:'Scrambled Eggs',time:'5 min',servings:'2 eggs',why:'',ingredients:["Eggs 2", "Butter 1 tsp", "Salt"],steps:["Beat eggs", "Melt butter medium-low", "Stir until set"],notes:''},
    zh:{name:'炒蛋',time:'5 分钟',servings:'2个',why:'',ingredients:["\u9e21\u86cb 2\u4e2a", "\u9ec4\u6cb9 1\u8336\u5319", "\u76d0"],steps:["\u6253\u6563", "\u9ec4\u6cb9\u4e2d\u5c0f\u706b\u6405\u81f3\u51dd\u56fa"],notes:''},
    macros:{protein:{g:12,pct:32},fat:{g:11,pct:66},netCarbs:{g:1,pct:3}}
  },
  {
    id:'p30', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'fried-eggs.jpg', emoji:'🍳', foodCats:["protein"],
    en:{name:'Fried Eggs',time:'5 min',servings:'2 eggs',why:'',ingredients:["Eggs 2", "Oil 1 tsp", "Salt"],steps:["Heat oil", "Crack eggs", "Cook 2-3 min until whites set"],notes:''},
    zh:{name:'煎蛋',time:'5 分钟',servings:'2个',why:'',ingredients:["\u9e21\u86cb 2\u4e2a", "\u6cb9 1\u8336\u5319", "\u76d0"],steps:["\u70ed\u6cb9", "\u6253\u5165\u9e21\u86cb", "\u714e 2-3 \u5206\u949f"],notes:''},
    macros:{protein:{g:12,pct:31},fat:{g:12,pct:69},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p31', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'poached-eggs.jpg', emoji:'🍳', foodCats:["protein"],
    en:{name:'Poached Eggs',time:'5 min',servings:'2 eggs',why:'',ingredients:["Eggs 2", "Vinegar 1 tsp"],steps:["Simmer water with vinegar", "Create whirlpool", "Drop egg", "Cook 3 min"],notes:''},
    zh:{name:'水波蛋',time:'5 分钟',servings:'2个',why:'',ingredients:["\u9e21\u86cb 2\u4e2a", "\u918b 1\u8336\u5319"],steps:["\u6c34\u52a0\u918b\u5fae\u6cb8", "\u6405\u65cb\u6da1\u6253\u5165\u86cb", "\u716e 3 \u5206\u949f"],notes:''},
    macros:{protein:{g:12,pct:34},fat:{g:10,pct:63},netCarbs:{g:1,pct:3}}
  },
  {
    id:'p32', type:'snack', carb:'low', tags:[], contains:["soy"], focus:[],
    img:'pan-fried-firm-tofu.jpg', emoji:'🧈', foodCats:["protein", "fat-flavor"],
    en:{name:'Pan-Fried Firm Tofu',time:'5 min',servings:'1/2 block',why:'',ingredients:["Firm tofu 1/2 block", "Oil", "Soy sauce"],steps:["Press and slice", "Pan-fry 3-4 min per side", "Drizzle soy"],notes:''},
    zh:{name:'煎豆腐',time:'5 分钟',servings:'半块',why:'',ingredients:["\u786c\u8c46\u8150\u534a\u5757", "\u6cb9", "\u751f\u62bd"],steps:["\u538b\u6c34\u5207\u7247", "\u6bcf\u9762\u714e 3-4 \u5206\u949f", "\u6dcb\u751f\u62bd"],notes:''},
    macros:{protein:{g:12,pct:39},fat:{g:7,pct:51},netCarbs:{g:3,pct:10}}
  },
  {
    id:'p33', type:'snack', carb:'low', tags:[], contains:["soy"], focus:[],
    img:'scrambled-tofu.jpg', emoji:'🥄', foodCats:["protein", "vegetable"],
    en:{name:'Scrambled Tofu',time:'5 min',servings:'1 cup',why:'',ingredients:["Tofu 1/2 block", "Turmeric", "Nutritional yeast", "Oil", "Veg"],steps:["Crumble tofu", "Saut\u00e9 with turmeric and yeast 5 min", "Add veg"],notes:''},
    zh:{name:'豆腐炒',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u8c46\u8150\u534a\u5757", "\u59dc\u9ec4", "\u8425\u517b\u9175\u6bcd", "\u6cb9", "\u852c\u83dc"],steps:["\u538b\u788e\u8c46\u8150", "\u52a0\u59dc\u9ec4\u9175\u6bcd\u7092 5 \u5206\u949f", "\u52a0\u852c\u83dc"],notes:''},
    macros:{protein:{g:12,pct:41},fat:{g:6,pct:46},netCarbs:{g:4,pct:14}}
  },
  {
    id:'p34', type:'snack', carb:'low', tags:[], contains:["soy"], focus:[],
    img:'marinated-tempeh.jpg', emoji:'🥢', foodCats:["protein"],
    en:{name:'Marinated Tempeh',time:'5 min',servings:'3 oz',why:'',ingredients:["Tempeh 3 oz", "Soy sauce", "Maple", "Garlic", "Vinegar"],steps:["Slice", "Marinate 20 min", "Pan-fry 3 min per side"],notes:''},
    zh:{name:'卤天贝',time:'5 分钟',servings:'85克',why:'',ingredients:["\u5929\u8d1d 85\u514b", "\u751f\u62bd", "\u67ab\u7cd6", "\u849c", "\u918b"],steps:["\u5207\u7247", "\u814c 20 \u5206\u949f", "\u6bcf\u9762\u714e 3 \u5206\u949f"],notes:''},
    macros:{protein:{g:19,pct:48},fat:{g:7,pct:40},netCarbs:{g:5,pct:13}}
  },
  {
    id:'p35', type:'snack', carb:'low', tags:[], contains:["wheat"], focus:[],
    img:'seitan-strips.jpg', emoji:'🍖', foodCats:["protein"],
    en:{name:'Seitan Strips',time:'5 min',servings:'3 oz',why:'',ingredients:["Seitan 3 oz", "Oil", "Soy sauce"],steps:["Slice", "Pan-fry 2-3 min", "Toss with soy"],notes:''},
    zh:{name:'面筋条',time:'5 分钟',servings:'85克',why:'',ingredients:["\u9762\u7b4b 85\u514b", "\u6cb9", "\u751f\u62bd"],steps:["\u5207\u6761", "\u714e 2-3 \u5206\u949f", "\u52a0\u751f\u62bd"],notes:''},
    macros:{protein:{g:25,pct:75},fat:{g:2,pct:13},netCarbs:{g:4,pct:12}}
  },
  {
    id:'p36', type:'snack', carb:'low', tags:[], contains:["soy"], focus:[],
    img:'plant-based-burger-patty.jpg', emoji:'🍔', foodCats:["protein", "complete"],
    en:{name:'Plant-Based Burger Patty',time:'5 min',servings:'1 patty',why:'',ingredients:["Plant-based patty 1"],steps:["Pan-fry or grill 3-4 min per side"],notes:''},
    zh:{name:'植物肉饼',time:'5 分钟',servings:'1个',why:'',ingredients:["\u690d\u7269\u8089\u997c 1\u4e2a"],steps:["\u6bcf\u9762\u714e\u6216\u70e4 3-4 \u5206\u949f"],notes:''},
    macros:{protein:{g:20,pct:39},fat:{g:12,pct:53},netCarbs:{g:4,pct:8}}
  },
  {
    id:'p37', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'lentils.jpg', emoji:'🫘', foodCats:["protein", "carb"],
    en:{name:'Lentils',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Lentils 1/4 cup dry", "Water", "Salt"],steps:["Rinse", "Simmer 20-25 min", "Drain"],notes:''},
    zh:{name:'扁豆',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u6241\u8c46 1/4\u676f\u5e72", "\u6c34", "\u76d0"],steps:["\u6d17\u51c0", "\u716e 20-25 \u5206\u949f", "\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:9,pct:31},fat:{g:0,pct:0},netCarbs:{g:20,pct:69}}
  },
  {
    id:'p38', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'black-beans.jpg', emoji:'🫘', foodCats:["protein", "carb"],
    en:{name:'Black Beans',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Black beans 1/2 cup"],steps:["Drain and rinse"],notes:''},
    zh:{name:'黑豆',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u9ed1\u8c46 \u534a\u676f"],steps:["\u6ca5\u4e7e\u6d17\u51c0"],notes:''},
    macros:{protein:{g:7,pct:26},fat:{g:0,pct:0},netCarbs:{g:20,pct:74}}
  },
  {
    id:'p39', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'kidney-beans.jpg', emoji:'🫘', foodCats:["protein", "carb"],
    en:{name:'Kidney Beans',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Kidney beans 1/2 cup"],steps:["Drain and rinse"],notes:''},
    zh:{name:'红腰豆',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u7ea2\u8170\u8c46 \u534a\u676f"],steps:["\u6ca5\u4e7e\u6d17\u51c0"],notes:''},
    macros:{protein:{g:7,pct:26},fat:{g:0,pct:0},netCarbs:{g:20,pct:74}}
  },
  {
    id:'p40', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'navy-beans.jpg', emoji:'🫘', foodCats:["protein", "carb"],
    en:{name:'Navy Beans',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Navy beans 1/2 cup"],steps:["Drain and rinse"],notes:''},
    zh:{name:'白腰豆',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u767d\u8170\u8c46 \u534a\u676f"],steps:["\u6ca5\u4e7e\u6d17\u51c0"],notes:''},
    macros:{protein:{g:7,pct:26},fat:{g:0,pct:0},netCarbs:{g:20,pct:74}}
  },
  {
    id:'f01', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'cream-cheese.jpg', emoji:'🧀', foodCats:["fat-flavor"],
    en:{name:'Cream Cheese',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Cream cheese 2 tbsp"],steps:["Spread on bread or toast"],notes:''},
    zh:{name:'奶油奶酪',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u5976\u6cb9\u5976\u916a 2\u6c64\u5319"],steps:["\u6d82\u9762\u5305\u6216\u5410\u53f8"],notes:''},
    macros:{protein:{g:3,pct:11},fat:{g:10,pct:82},netCarbs:{g:2,pct:7}}
  },
  {
    id:'p41', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'paneer.jpg', emoji:'🧀', foodCats:["protein", "fat-flavor"],
    en:{name:'Paneer',time:'5 min',servings:'3 oz',why:'',ingredients:["Paneer 3 oz"],steps:["Pan-fry cubes 2 min per side", "Or add to curries"],notes:''},
    zh:{name:'印度奶酪',time:'5 分钟',servings:'85克',why:'',ingredients:["\u5370\u5ea6\u5976\u916a 85\u514b"],steps:["\u5207\u5757\u714e 2 \u5206\u949f", "\u6216\u52a0\u5165\u5496\u55b1"],notes:''},
    macros:{protein:{g:14,pct:29},fat:{g:14,pct:66},netCarbs:{g:2,pct:4}}
  },
  {
    id:'p42', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'canned-tuna.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Canned Tuna',time:'5 min',servings:'1 can',why:'',ingredients:["Canned tuna 1 can drained"],steps:["Drain", "Flake with fork", "Season"],notes:''},
    zh:{name:'金枪鱼罐头',time:'5 分钟',servings:'1罐',why:'',ingredients:["\u91d1\u67aa\u9c7c\u7f50\u5934 1\u7f50\u6ca5\u4e7e"],steps:["\u6ca5\u4e7e", "\u62e8\u6563", "\u8c03\u5473"],notes:''},
    macros:{protein:{g:20,pct:90},fat:{g:1,pct:10},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p43', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'meat-sticks.jpg', emoji:'🍖', foodCats:["protein", "fat-flavor"],
    en:{name:'Meat Sticks',time:'5 min',servings:'1 stick',why:'',ingredients:["Meat stick 1"],steps:["Unwrap and eat"],notes:''},
    zh:{name:'肉干棒',time:'5 分钟',servings:'1根',why:'',ingredients:["\u8089\u5e72\u68d2 1\u6839"],steps:["\u62c6\u5f00\u5373\u98df"],notes:''},
    macros:{protein:{g:14,pct:27},fat:{g:16,pct:71},netCarbs:{g:1,pct:2}}
  },
  {
    id:'v01', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'cucumber-slices.jpg', emoji:'🥒', foodCats:["vegetable"],
    en:{name:'Cucumber Slices',time:'5 min',servings:'1 cup',why:'',ingredients:["Cucumber 1"],steps:["Slice into rounds"],notes:''},
    zh:{name:'黄瓜片',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u9ec4\u74dc 1\u6839"],steps:["\u5207\u5706\u7247"],notes:''},
    macros:{protein:{g:1,pct:20},fat:{g:0,pct:0},netCarbs:{g:4,pct:80}}
  },
  {
    id:'v02', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'carrot-sticks.jpg', emoji:'🥕', foodCats:["vegetable"],
    en:{name:'Carrot Sticks',time:'5 min',servings:'1 cup',why:'',ingredients:["Carrots 2"],steps:["Cut into sticks"],notes:''},
    zh:{name:'胡萝卜条',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u80e1\u841d\u535c 2\u6839"],steps:["\u5207\u6761"],notes:''},
    macros:{protein:{g:1,pct:12},fat:{g:0,pct:0},netCarbs:{g:7,pct:88}}
  },
  {
    id:'v03', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'celery-sticks.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Celery Sticks',time:'5 min',servings:'1 cup',why:'',ingredients:["Celery 2 stalks"],steps:["Cut into sticks"],notes:''},
    zh:{name:'芹菜条',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u82b9\u83dc 2\u6839"],steps:["\u5207\u6761"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:3,pct:100}}
  },
  {
    id:'v04', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'bell-pepper-strips.jpg', emoji:'🫑', foodCats:["vegetable"],
    en:{name:'Bell Pepper Strips',time:'5 min',servings:'1 cup',why:'',ingredients:["Bell pepper 1"],steps:["Slice into strips"],notes:''},
    zh:{name:'彩椒条',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u5f69\u6912 1\u4e2a"],steps:["\u5207\u6761"],notes:''},
    macros:{protein:{g:1,pct:14},fat:{g:0,pct:0},netCarbs:{g:6,pct:86}}
  },
  {
    id:'v05', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'radish-slices.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Radish Slices',time:'5 min',servings:'1 cup',why:'',ingredients:["Radishes 5"],steps:["Slice thinly"],notes:''},
    zh:{name:'萝卜片',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u5c0f\u7ea2\u841d\u535c 5\u4e2a"],steps:["\u5207\u8584\u7247"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:4,pct:100}}
  },
  {
    id:'v06', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sugar-snap-peas.jpg', emoji:'🫛', foodCats:["vegetable"],
    en:{name:'Sugar Snap Peas',time:'5 min',servings:'1 cup',why:'',ingredients:["Sugar snap peas 1 cup"],steps:["String if needed", "Serve raw or blanch 1 min"],notes:''},
    zh:{name:'甜脆豆',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u751c\u8106\u8c46 1\u676f"],steps:["\u53bb\u7b4b", "\u751f\u98df\u6216\u712f\u6c34 1 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:22},fat:{g:0,pct:0},netCarbs:{g:7,pct:78}}
  },
  {
    id:'v07', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'romaine-lettuce.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Romaine Lettuce',time:'5 min',servings:'2 cups',why:'',ingredients:["Romaine 2 cups"],steps:["Chop and wash"],notes:''},
    zh:{name:'罗马生菜',time:'5 分钟',servings:'2杯',why:'',ingredients:["\u7f57\u9a6c\u751f\u83dc 2\u676f"],steps:["\u5207\u788e\u6d17\u51c0"],notes:''},
    macros:{protein:{g:1,pct:25},fat:{g:0,pct:0},netCarbs:{g:3,pct:75}}
  },
  {
    id:'v08', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'spinach-raw.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Spinach (Raw)',time:'5 min',servings:'2 cups',why:'',ingredients:["Fresh spinach 2 cups"],steps:["Wash", "Use in salads or saut\u00e9"],notes:''},
    zh:{name:'菠菜',time:'5 分钟',servings:'2杯',why:'',ingredients:["\u65b0\u9c9c\u83e0\u83dc 2\u676f"],steps:["\u6d17\u51c0", "\u505a\u6c99\u62c9\u6216\u7092"],notes:''},
    macros:{protein:{g:1,pct:20},fat:{g:0,pct:0},netCarbs:{g:4,pct:80}}
  },
  {
    id:'v09', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'mixed-salad-greens.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Mixed Salad Greens',time:'5 min',servings:'2 cups',why:'',ingredients:["Mixed greens 2 cups"],steps:["Wash and dry"],notes:''},
    zh:{name:'混合沙拉菜',time:'5 分钟',servings:'2杯',why:'',ingredients:["\u6df7\u5408\u6c99\u62c9\u83dc 2\u676f"],steps:["\u6d17\u51c0\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:1,pct:20},fat:{g:0,pct:0},netCarbs:{g:4,pct:80}}
  },
  {
    id:'v10', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'arugula.jpg', emoji:'🌿', foodCats:["vegetable"],
    en:{name:'Arugula',time:'5 min',servings:'2 cups',why:'',ingredients:["Arugula 2 cups"],steps:["Wash and dry"],notes:''},
    zh:{name:'芝麻菜',time:'5 分钟',servings:'2杯',why:'',ingredients:["\u829d\u9ebb\u83dc 2\u676f"],steps:["\u6d17\u51c0\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:1,pct:20},fat:{g:0,pct:0},netCarbs:{g:4,pct:80}}
  },
  {
    id:'v11', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'kale.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Kale',time:'5 min',servings:'1 cup',why:'',ingredients:["Kale 1 cup stemmed"],steps:["Remove stems", "Massage with oil 1 min"],notes:''},
    zh:{name:'羽衣甘蓝',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u7fbd\u8863\u7518\u84dd 1\u676f\u53bb\u6897"],steps:["\u53bb\u6897", "\u52a0\u6cb9\u63c9 1 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:22},fat:{g:0,pct:0},netCarbs:{g:7,pct:78}}
  },
  {
    id:'v12', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-brussels-sprouts.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Roasted Brussels Sprouts',time:'5 min',servings:'1 cup',why:'',ingredients:["Brussels sprouts 1 cup", "Oil", "Salt"],steps:["Halve", "Toss with oil and salt", "Roast 400F 20 min"],notes:''},
    zh:{name:'烤球芽甘蓝',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u7403\u82bd\u7518\u84dd 1\u676f", "\u6cb9", "\u76d0"],steps:["\u5bf9\u534a\u5207", "\u62cc\u6cb9\u76d0", "400\u00b0F \u70e4 20 \u5206\u949f"],notes:''},
    macros:{protein:{g:3,pct:18},fat:{g:1,pct:14},netCarbs:{g:11,pct:68}}
  },
  {
    id:'v13', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-carrots.jpg', emoji:'🥕', foodCats:["vegetable"],
    en:{name:'Roasted Carrots',time:'5 min',servings:'1 cup',why:'',ingredients:["Carrots 3", "Oil", "Salt"],steps:["Cut into sticks", "Toss with oil", "Roast 400F 25 min"],notes:''},
    zh:{name:'烤胡萝卜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u80e1\u841d\u535c 3\u6839", "\u6cb9", "\u76d0"],steps:["\u5207\u6761", "\u62cc\u6cb9", "400\u00b0F \u70e4 25 \u5206\u949f"],notes:''},
    macros:{protein:{g:1,pct:6},fat:{g:2,pct:26},netCarbs:{g:12,pct:69}}
  },
  {
    id:'v14', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-butternut-squash.jpg', emoji:'🎃', foodCats:["vegetable"],
    en:{name:'Roasted Butternut Squash',time:'5 min',servings:'1 cup',why:'',ingredients:["Butternut squash 1 cup", "Oil", "Salt"],steps:["Cube", "Toss with oil", "Roast 400F 30 min"],notes:''},
    zh:{name:'烤南瓜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u5357\u74dc 1\u676f", "\u6cb9", "\u76d0"],steps:["\u5207\u5757", "\u62cc\u6cb9", "400\u00b0F \u70e4 30 \u5206\u949f"],notes:''},
    macros:{protein:{g:1,pct:5},fat:{g:1,pct:12},netCarbs:{g:15,pct:82}}
  },
  {
    id:'v15', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-beets.jpg', emoji:'🫛', foodCats:["vegetable"],
    en:{name:'Roasted Beets',time:'5 min',servings:'1 cup',why:'',ingredients:["Beets 2", "Oil", "Salt"],steps:["Wrap in foil", "Roast 400F 45-60 min", "Peel"],notes:''},
    zh:{name:'烤甜菜根',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u751c\u83dc\u6839 2\u4e2a", "\u6cb9", "\u76d0"],steps:["\u5305\u9521\u7eb8", "400\u00b0F \u70e4 45-60 \u5206\u949f", "\u53bb\u76ae"],notes:''},
    macros:{protein:{g:2,pct:13},fat:{g:0,pct:0},netCarbs:{g:13,pct:87}}
  },
  {
    id:'v16', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-parsnips.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Roasted Parsnips',time:'5 min',servings:'1 cup',why:'',ingredients:["Parsnips 3", "Oil", "Salt"],steps:["Cut into sticks", "Roast 400F 25 min"],notes:''},
    zh:{name:'烤欧防风',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u6b27\u9632\u98ce 3\u6839", "\u6cb9", "\u76d0"],steps:["\u5207\u6761", "400\u00b0F \u70e4 25 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:9},fat:{g:1,pct:10},netCarbs:{g:18,pct:81}}
  },
  {
    id:'v17', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-broccoli.jpg', emoji:'🥦', foodCats:["vegetable"],
    en:{name:'Steamed Broccoli',time:'5 min',servings:'1 cup',why:'',ingredients:["Broccoli 1 cup florets"],steps:["Steam 4-5 min"],notes:''},
    zh:{name:'蒸西兰花',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u897f\u5170\u82b1 1\u676f"],steps:["\u84b8 4-5 \u5206\u949f"],notes:''},
    macros:{protein:{g:3,pct:33},fat:{g:0,pct:0},netCarbs:{g:6,pct:67}}
  },
  {
    id:'v18', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-green-beans.jpg', emoji:'🫛', foodCats:["vegetable"],
    en:{name:'Steamed Green Beans',time:'5 min',servings:'1 cup',why:'',ingredients:["Green beans 1 cup"],steps:["Steam 5 min"],notes:''},
    zh:{name:'蒸四季豆',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u56db\u5b63\u8c46 1\u676f"],steps:["\u84b8 5 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:22},fat:{g:0,pct:0},netCarbs:{g:7,pct:78}}
  },
  {
    id:'v19', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-asparagus.jpg', emoji:'🌿', foodCats:["vegetable"],
    en:{name:'Steamed Asparagus',time:'5 min',servings:'1 cup',why:'',ingredients:["Asparagus 1 cup trimmed"],steps:["Snap ends", "Steam 3-4 min"],notes:''},
    zh:{name:'蒸芦笋',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u82a6\u7b0b 1\u676f"],steps:["\u53bb\u786c\u5934", "\u84b8 3-4 \u5206\u949f"],notes:''},
    macros:{protein:{g:3,pct:38},fat:{g:0,pct:0},netCarbs:{g:5,pct:62}}
  },
  {
    id:'v20', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-carrots.jpg', emoji:'🥕', foodCats:["vegetable"],
    en:{name:'Steamed Carrots',time:'5 min',servings:'1 cup',why:'',ingredients:["Carrots 2 sliced"],steps:["Steam 6-8 min"],notes:''},
    zh:{name:'蒸胡萝卜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u80e1\u841d\u535c 2\u6839\u5207\u7247"],steps:["\u84b8 6-8 \u5206\u949f"],notes:''},
    macros:{protein:{g:1,pct:11},fat:{g:0,pct:0},netCarbs:{g:8,pct:89}}
  },
  {
    id:'v21', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'boiled-corn.jpg', emoji:'🌽', foodCats:["vegetable", "carb"],
    en:{name:'Boiled Corn',time:'5 min',servings:'1 ear',why:'',ingredients:["Corn 1 ear"],steps:["Boil salted water 5-7 min"],notes:''},
    zh:{name:'煮玉米',time:'5 分钟',servings:'1根',why:'',ingredients:["\u7389\u7c73 1\u6839"],steps:["\u76d0\u6c34\u716e 5-7 \u5206\u949f"],notes:''},
    macros:{protein:{g:4,pct:16},fat:{g:1,pct:9},netCarbs:{g:19,pct:75}}
  },
  {
    id:'v22', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sautéed-mushrooms.jpg', emoji:'🍄', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Sautéed Mushrooms',time:'5 min',servings:'1 cup',why:'',ingredients:["Mushrooms 1 cup", "Butter", "Garlic"],steps:["Melt butter with garlic", "Saut\u00e9 mushrooms 6-8 min"],notes:''},
    zh:{name:'炒蘑菇',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u8611\u83c7 1\u676f", "\u9ec4\u6cb9", "\u849c"],steps:["\u9ec4\u6cb9\u849c\u7092\u8611\u83c7 6-8 \u5206\u949f"],notes:''},
    macros:{protein:{g:3,pct:19},fat:{g:4,pct:56},netCarbs:{g:4,pct:25}}
  },
  {
    id:'v23', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sautéed-spinach.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Sautéed Spinach',time:'5 min',servings:'1 cup',why:'',ingredients:["Spinach 4 cups", "Oil", "Garlic"],steps:["Heat oil with garlic", "Toss spinach 2-3 min"],notes:''},
    zh:{name:'炒菠菜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u83e0\u83dc 4\u676f", "\u6cb9", "\u849c"],steps:["\u6cb9\u849c\u7092\u83e0\u83dc 2-3 \u5206\u949f"],notes:''},
    macros:{protein:{g:3,pct:26},fat:{g:2,pct:39},netCarbs:{g:4,pct:35}}
  },
  {
    id:'v24', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sautéed-zucchini.jpg', emoji:'🥒', foodCats:["vegetable"],
    en:{name:'Sautéed Zucchini',time:'5 min',servings:'1 cup',why:'',ingredients:["Zucchini 1 cup", "Oil", "Salt"],steps:["Slice", "Saut\u00e9 4-5 min"],notes:''},
    zh:{name:'炒西葫芦',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u897f\u846b\u82a6 1\u676f", "\u6cb9", "\u76d0"],steps:["\u5207\u7247", "\u7092 4-5 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:19},fat:{g:2,pct:43},netCarbs:{g:4,pct:38}}
  },
  {
    id:'v25', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'spaghetti-squash.jpg', emoji:'🎃', foodCats:["vegetable", "carb"],
    en:{name:'Spaghetti Squash',time:'5 min',servings:'1 cup',why:'',ingredients:["Spaghetti squash 1"],steps:["Halve and roast 400F 40 min", "Scrape strands"],notes:''},
    zh:{name:'金丝瓜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u91d1\u4e1d\u74dc 1\u4e2a"],steps:["\u5bf9\u534a\u5207 400\u00b0F \u70e4 40 \u5206\u949f", "\u522e\u4e1d"],notes:''},
    macros:{protein:{g:1,pct:10},fat:{g:1,pct:22},netCarbs:{g:7,pct:68}}
  },
  {
    id:'v26', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'mashed-turnips.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Mashed Turnips',time:'5 min',servings:'1 cup',why:'',ingredients:["Turnips 2", "Butter", "Salt"],steps:["Boil 15 min", "Drain and mash with butter"],notes:''},
    zh:{name:'芜菁泥',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u829c\u83c1 2\u4e2a", "\u9ec4\u6cb9", "\u76d0"],steps:["\u716e 15 \u5206\u949f", "\u52a0\u9ec4\u6cb9\u6363\u6ce5"],notes:''},
    macros:{protein:{g:2,pct:16},fat:{g:1,pct:18},netCarbs:{g:8,pct:65}}
  },
  {
    id:'v27', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-mixed-vegetables.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Steamed Mixed Vegetables',time:'5 min',servings:'1 cup',why:'',ingredients:["Mixed veg 1 cup"],steps:["Steam 5 min"],notes:''},
    zh:{name:'蒸混合蔬菜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u6df7\u5408\u852c\u83dc 1\u676f"],steps:["\u84b8 5 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:20},fat:{g:0,pct:0},netCarbs:{g:8,pct:80}}
  },
  {
    id:'v28', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'coleslaw.jpg', emoji:'🥗', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Coleslaw',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Cabbage 1 cup shredded", "Carrot", "Mayo", "Vinegar"],steps:["Shred", "Toss with mayo and vinegar"],notes:''},
    zh:{name:'凉拌卷心菜',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u5377\u5fc3\u83dc 1\u676f\u4e1d", "\u80e1\u841d\u535c", "\u86cb\u9ec4\u9171", "\u918b"],steps:["\u5207\u4e1d", "\u62cc\u86cb\u9ec4\u9171\u548c\u918b"],notes:''},
    macros:{protein:{g:2,pct:7},fat:{g:8,pct:64},netCarbs:{g:8,pct:29}}
  },
  {
    id:'v29', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'simple-green-salad.jpg', emoji:'🥗', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Simple Green Salad',time:'5 min',servings:'1 bowl',why:'',ingredients:["Greens 2 cups", "Olive oil", "Lemon", "Salt"],steps:["Toss with oil, lemon, salt"],notes:''},
    zh:{name:'绿色沙拉',time:'5 分钟',servings:'1碗',why:'',ingredients:["\u6c99\u62c9\u83dc 2\u676f", "\u6a44\u6984\u6cb9", "\u67e0\u6aac", "\u76d0"],steps:["\u62cc\u5300"],notes:''},
    macros:{protein:{g:1,pct:7},fat:{g:5,pct:74},netCarbs:{g:3,pct:20}}
  },
  {
    id:'v30', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'greek-salad.jpg', emoji:'🥗', foodCats:["vegetable", "fat-flavor", "complete"],
    en:{name:'Greek Salad',time:'5 min',servings:'1 bowl',why:'',ingredients:["Tomato", "Cucumber", "Olives", "Feta", "Olive oil"],steps:["Chop", "Toss together"],notes:''},
    zh:{name:'希腊沙拉',time:'5 分钟',servings:'1碗',why:'',ingredients:["\u756a\u8304", "\u9ec4\u74dc", "\u6a44\u6984", "\u83f2\u8fbe\u5976\u916a", "\u6a44\u6984\u6cb9"],steps:["\u5207\u5757", "\u62cc\u5300"],notes:''},
    macros:{protein:{g:4,pct:10},fat:{g:12,pct:69},netCarbs:{g:8,pct:21}}
  },
  {
    id:'v31', type:'snack', carb:'low', tags:[], contains:["sesame"], focus:[],
    img:'seaweed-salad.jpg', emoji:'🌿', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Seaweed Salad',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Seaweed 1 cup", "Sesame oil", "Vinegar", "Sesame"],steps:["Rehydrate if dried", "Toss with dressing"],notes:''},
    zh:{name:'海藻沙拉',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u6d77\u85fb 1\u676f", "\u829d\u9ebb\u6cb9", "\u918b", "\u829d\u9ebb"],steps:["\u6ce1\u53d1", "\u62cc\u9171\u6599"],notes:''},
    macros:{protein:{g:2,pct:14},fat:{g:3,pct:46},netCarbs:{g:6,pct:41}}
  },
  {
    id:'v32', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'kimchi.jpg', emoji:'🌶️', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Kimchi',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Kimchi 1/2 cup"],steps:["Serve as side"],notes:''},
    zh:{name:'泡菜',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u6ce1\u83dc \u534a\u676f"],steps:["\u914d\u83dc\u98df\u7528"],notes:''},
    macros:{protein:{g:1,pct:33},fat:{g:0,pct:0},netCarbs:{g:2,pct:67}}
  },
  {
    id:'v33', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sauerkraut.jpg', emoji:'🥬', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Sauerkraut',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Sauerkraut 1/2 cup"],steps:["Serve as side"],notes:''},
    zh:{name:'酸菜',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u9178\u83dc \u534a\u676f"],steps:["\u914d\u83dc\u98df\u7528"],notes:''},
    macros:{protein:{g:1,pct:25},fat:{g:0,pct:0},netCarbs:{g:3,pct:75}}
  },
  {
    id:'v34', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'corn-on-the-cob.jpg', emoji:'🌽', foodCats:["vegetable", "carb"],
    en:{name:'Corn on the Cob',time:'5 min',servings:'1 ear',why:'',ingredients:["Corn 1 ear", "Butter"],steps:["Boil or grill 5-7 min", "Spread butter"],notes:''},
    zh:{name:'玉米棒',time:'5 分钟',servings:'1根',why:'',ingredients:["\u7389\u7c73 1\u6839", "\u9ec4\u6cb9"],steps:["\u716e\u6216\u70e4 5-7 \u5206\u949f", "\u62b9\u9ec4\u6cb9"],notes:''},
    macros:{protein:{g:4,pct:16},fat:{g:1,pct:9},netCarbs:{g:19,pct:75}}
  },
  {
    id:'c01', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'steamed-taro.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Steamed Taro',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Taro 1/2 cup cubed"],steps:["Steam 20 min"],notes:''},
    zh:{name:'蒸芋头',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u828b\u5934 \u534a\u676f"],steps:["\u84b8 20 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:9},fat:{g:0,pct:0},netCarbs:{g:20,pct:91}}
  },
  {
    id:'c02', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'boiled-cassava.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Boiled Cassava',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Cassava 1/2 cup cubed"],steps:["Boil 20 min"],notes:''},
    zh:{name:'煮木薯',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u6728\u85af \u534a\u676f"],steps:["\u716e 20 \u5206\u949f"],notes:''},
    macros:{protein:{g:1,pct:3},fat:{g:0,pct:0},netCarbs:{g:38,pct:97}}
  },
  {
    id:'c03', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'steamed-yam.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Steamed Yam',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Yam 1/2 cup cubed"],steps:["Steam 25 min"],notes:''},
    zh:{name:'蒸山药',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u5c71\u836f \u534a\u676f"],steps:["\u84b8 25 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:7},fat:{g:0,pct:0},netCarbs:{g:28,pct:93}}
  },
  {
    id:'c04', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'plantain.jpg', emoji:'🍌', foodCats:["carb"],
    en:{name:'Plantain',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Plantain 1 sliced"],steps:["Pan-fry in oil 2-3 min per side"],notes:''},
    zh:{name:'大蕉',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u5927\u8549 1\u6839\u5207\u7247"],steps:["\u52a0\u6cb9\u6bcf\u9762\u714e 2-3 \u5206\u949f"],notes:''},
    macros:{protein:{g:1,pct:3},fat:{g:0,pct:0},netCarbs:{g:30,pct:97}}
  },
  {
    id:'v35', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'green-peas.jpg', emoji:'🫛', foodCats:["vegetable", "carb"],
    en:{name:'Green Peas',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Green peas 1/2 cup"],steps:["Steam or boil 3-5 min"],notes:''},
    zh:{name:'豌豆',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u8c4c\u8c46 \u534a\u676f"],steps:["\u84b8\u6216\u716e 3-5 \u5206\u949f"],notes:''},
    macros:{protein:{g:4,pct:22},fat:{g:0,pct:0},netCarbs:{g:14,pct:78}}
  },
  {
    id:'c05', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'boiled-potato.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Boiled Potato',time:'5 min',servings:'1 medium',why:'',ingredients:["Potato 1"],steps:["Boil salted water 15-20 min"],notes:''},
    zh:{name:'煮土豆',time:'5 分钟',servings:'1个',why:'',ingredients:["\u571f\u8c46 1\u4e2a"],steps:["\u76d0\u6c34\u716e 15-20 \u5206\u949f"],notes:''},
    macros:{protein:{g:3,pct:8},fat:{g:0,pct:0},netCarbs:{g:34,pct:92}}
  },
  {
    id:'c06', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'mashed-sweet-potato.jpg', emoji:'🍠', foodCats:["carb"],
    en:{name:'Mashed Sweet Potato',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Sweet potato 1 large"],steps:["Bake or steam until tender", "Mash"],notes:''},
    zh:{name:'红薯泥',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u7ea2\u85af 1\u5927\u4e2a"],steps:["\u70e4\u6216\u84b8\u81f3\u8f6f", "\u6363\u6ce5"],notes:''},
    macros:{protein:{g:2,pct:7},fat:{g:0,pct:0},netCarbs:{g:25,pct:93}}
  },
  {
    id:'c07', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'rice-cakes.jpg', emoji:'🍘', foodCats:["carb"],
    en:{name:'Rice Cakes',time:'5 min',servings:'2 cakes',why:'',ingredients:["Rice cakes 2"],steps:["Top as desired"],notes:''},
    zh:{name:'米饼',time:'5 分钟',servings:'2片',why:'',ingredients:["\u7c73\u997c 2\u7247"],steps:["\u6309\u9700\u52a0\u914d\u6599"],notes:''},
    macros:{protein:{g:2,pct:11},fat:{g:1,pct:12},netCarbs:{g:14,pct:77}}
  },
  {
    id:'c08', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'rice-crackers.jpg', emoji:'🍘', foodCats:["carb"],
    en:{name:'Rice Crackers',time:'5 min',servings:'10 crackers',why:'',ingredients:["Rice crackers 10"],steps:["Serve with dip"],notes:''},
    zh:{name:'米饼脆',time:'5 分钟',servings:'10片',why:'',ingredients:["\u7c73\u997c\u8106 10\u7247"],steps:["\u914d\u9171\u6599"],notes:''},
    macros:{protein:{g:2,pct:9},fat:{g:1,pct:10},netCarbs:{g:18,pct:81}}
  },
  {
    id:'c09', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'whole-wheat-bread.jpg', emoji:'🍞', foodCats:["carb"],
    en:{name:'Whole-Wheat Bread',time:'5 min',servings:'1 slice',why:'',ingredients:["Whole-wheat bread 1 slice"],steps:["Toast or serve as is"],notes:''},
    zh:{name:'全麦面包',time:'5 分钟',servings:'1片',why:'',ingredients:["\u5168\u9ea6\u9762\u5305 1\u7247"],steps:["\u70e4\u6216\u76f4\u63a5\u98df\u7528"],notes:''},
    macros:{protein:{g:4,pct:18},fat:{g:2,pct:20},netCarbs:{g:14,pct:62}}
  },
  {
    id:'c10', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'gluten-free-bread.jpg', emoji:'🍞', foodCats:["carb"],
    en:{name:'Gluten-Free Bread',time:'5 min',servings:'1 slice',why:'',ingredients:["GF bread 1 slice"],steps:["Toast or serve as is"],notes:''},
    zh:{name:'无麸质面包',time:'5 分钟',servings:'1片',why:'',ingredients:["\u65e0\u9eb8\u8d28\u9762\u5305 1\u7247"],steps:["\u70e4\u6216\u76f4\u63a5\u98df\u7528"],notes:''},
    macros:{protein:{g:2,pct:10},fat:{g:2,pct:22},netCarbs:{g:14,pct:68}}
  },
  {
    id:'c11', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'toast.jpg', emoji:'🍞', foodCats:["carb"],
    en:{name:'Toast',time:'5 min',servings:'1 slice',why:'',ingredients:["Bread 1 slice"],steps:["Toast until golden"],notes:''},
    zh:{name:'吐司',time:'5 分钟',servings:'1片',why:'',ingredients:["\u9762\u5305 1\u7247"],steps:["\u70e4\u81f3\u91d1\u9ec4"],notes:''},
    macros:{protein:{g:4,pct:18},fat:{g:2,pct:20},netCarbs:{g:14,pct:62}}
  },
  {
    id:'c12', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'flour-tortilla.jpg', emoji:'🫓', foodCats:["carb"],
    en:{name:'Flour Tortilla',time:'5 min',servings:'1 piece',why:'',ingredients:["Flour tortilla 1"],steps:["Warm in dry pan 10 sec"],notes:''},
    zh:{name:'面粉卷饼',time:'5 分钟',servings:'1张',why:'',ingredients:["\u9762\u7c89\u5377\u997c 1\u5f20"],steps:["\u5e72\u9505\u52a0\u70ed 10 \u79d2"],notes:''},
    macros:{protein:{g:3,pct:11},fat:{g:3,pct:24},netCarbs:{g:18,pct:65}}
  },
  {
    id:'c13', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'corn-tortilla.jpg', emoji:'🫓', foodCats:["carb"],
    en:{name:'Corn Tortilla',time:'5 min',servings:'1 piece',why:'',ingredients:["Corn tortilla 1"],steps:["Warm in dry pan 15 sec"],notes:''},
    zh:{name:'玉米饼',time:'5 分钟',servings:'1张',why:'',ingredients:["\u7389\u7c73\u997c 1\u5f20"],steps:["\u5e72\u9505\u52a0\u70ed 15 \u79d2"],notes:''},
    macros:{protein:{g:2,pct:12},fat:{g:1,pct:14},netCarbs:{g:12,pct:74}}
  },
  {
    id:'c14', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'pita-bread.jpg', emoji:'🫓', foodCats:["carb"],
    en:{name:'Pita Bread',time:'5 min',servings:'1 piece',why:'',ingredients:["Pita 1"],steps:["Warm", "Cut and stuff"],notes:''},
    zh:{name:'皮塔饼',time:'5 分钟',servings:'1个',why:'',ingredients:["\u76ae\u5854\u997c 1\u4e2a"],steps:["\u52a0\u70ed", "\u5207\u5f00\u5939\u9985"],notes:''},
    macros:{protein:{g:3,pct:14},fat:{g:1,pct:11},netCarbs:{g:16,pct:75}}
  },
  {
    id:'c15', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'bagel.jpg', emoji:'🥯', foodCats:["carb"],
    en:{name:'Bagel',time:'5 min',servings:'1 piece',why:'',ingredients:["Bagel 1"],steps:["Toast if desired", "Split and top"],notes:''},
    zh:{name:'贝果',time:'5 分钟',servings:'1个',why:'',ingredients:["\u8d1d\u679c 1\u4e2a"],steps:["\u53ef\u70e4", "\u5207\u5f00\u52a0\u6599"],notes:''},
    macros:{protein:{g:5,pct:11},fat:{g:2,pct:10},netCarbs:{g:35,pct:79}}
  },
  {
    id:'c16', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'rice-paper-wrappers.jpg', emoji:'🫓', foodCats:["carb"],
    en:{name:'Rice-Paper Wrappers',time:'5 min',servings:'2 sheets',why:'',ingredients:["Rice paper 2"],steps:["Soak in warm water 5 sec", "Fill and roll"],notes:''},
    zh:{name:'米纸',time:'5 分钟',servings:'2张',why:'',ingredients:["\u7c73\u7eb8 2\u5f20"],steps:["\u6e29\u6c34\u6ce1 5 \u79d2", "\u5305\u5377"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:20,pct:100}}
  },
  {
    id:'c17', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'gluten-free-pasta.jpg', emoji:'🍝', foodCats:["carb"],
    en:{name:'Gluten-Free Pasta',time:'5 min',servings:'1 cup',why:'',ingredients:["GF pasta 1 cup", "Salt"],steps:["Boil per package", "Drain"],notes:''},
    zh:{name:'无麸质意面',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u65e0\u9eb8\u8d28\u610f\u9762 1\u676f", "\u76d0"],steps:["\u6309\u5305\u88c5\u716e", "\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:3,pct:6},fat:{g:1,pct:5},netCarbs:{g:42,pct:89}}
  },
  {
    id:'p44', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'chickpea-pasta.jpg', emoji:'🍝', foodCats:["protein", "carb"],
    en:{name:'Chickpea Pasta',time:'5 min',servings:'1 cup',why:'',ingredients:["Chickpea pasta 1 cup", "Salt"],steps:["Boil 8-10 min", "Drain"],notes:''},
    zh:{name:'鹰嘴豆意面',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u9e70\u5634\u8c46\u610f\u9762 1\u676f", "\u76d0"],steps:["\u716e 8-10 \u5206\u949f", "\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:14,pct:25},fat:{g:3,pct:12},netCarbs:{g:35,pct:63}}
  },
  {
    id:'p45', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'lentil-pasta.jpg', emoji:'🍝', foodCats:["protein", "carb"],
    en:{name:'Lentil Pasta',time:'5 min',servings:'1 cup',why:'',ingredients:["Lentil pasta 1 cup", "Salt"],steps:["Boil 8-10 min", "Drain"],notes:''},
    zh:{name:'扁豆意面',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u6241\u8c46\u610f\u9762 1\u676f", "\u76d0"],steps:["\u716e 8-10 \u5206\u949f", "\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:13,pct:26},fat:{g:1,pct:4},netCarbs:{g:35,pct:70}}
  },
  {
    id:'c18', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'soba-noodles.jpg', emoji:'🍜', foodCats:["carb"],
    en:{name:'Soba Noodles',time:'5 min',servings:'1 cup',why:'',ingredients:["Soba 1 bundle", "Salt"],steps:["Boil 4-5 min", "Rinse cold"],notes:''},
    zh:{name:'荞麦面',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u835e\u9ea6\u9762 1\u675f", "\u76d0"],steps:["\u716e 4-5 \u5206\u949f", "\u8fc7\u51b7\u6c34"],notes:''},
    macros:{protein:{g:8,pct:23},fat:{g:1,pct:7},netCarbs:{g:24,pct:70}}
  },
  {
    id:'c19', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'udon-noodles.jpg', emoji:'🍜', foodCats:["carb"],
    en:{name:'Udon Noodles',time:'5 min',servings:'1 cup',why:'',ingredients:["Udon 1 pack", "Salt"],steps:["Boil 8-10 min", "Drain"],notes:''},
    zh:{name:'乌冬面',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u4e4c\u51ac\u9762 1\u5305", "\u76d0"],steps:["\u716e 8-10 \u5206\u949f", "\u6ca5\u4e7e"],notes:''},
    macros:{protein:{g:4,pct:9},fat:{g:1,pct:5},netCarbs:{g:40,pct:86}}
  },
  {
    id:'c20', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'shirataki-noodles.jpg', emoji:'🍜', foodCats:["carb"],
    en:{name:'Shirataki Noodles',time:'5 min',servings:'1 cup',why:'',ingredients:["Shirataki 1 pack"],steps:["Rinse well", "Pan-fry dry 2 min", "Add sauce"],notes:''},
    zh:{name:'魔芋面',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u9b54\u828b\u9762 1\u5305"],steps:["\u51b2\u6d17", "\u4e7e\u7092 2 \u5206\u949f", "\u52a0\u9171"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:3,pct:100}}
  },
  {
    id:'c21', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'apple.jpg', emoji:'🍎', foodCats:["carb"],
    en:{name:'Apple',time:'5 min',servings:'1 medium',why:'',ingredients:["Apple 1"],steps:["Wash and eat"],notes:''},
    zh:{name:'苹果',time:'5 分钟',servings:'1个',why:'',ingredients:["\u82f9\u679c 1\u4e2a"],steps:["\u6d17\u51c0\u98df\u7528"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:25,pct:100}}
  },
  {
    id:'c22', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'pear.jpg', emoji:'🍐', foodCats:["carb"],
    en:{name:'Pear',time:'5 min',servings:'1 medium',why:'',ingredients:["Pear 1"],steps:["Wash and eat"],notes:''},
    zh:{name:'梨',time:'5 分钟',servings:'1个',why:'',ingredients:["\u68a8 1\u4e2a"],steps:["\u6d17\u51c0\u98df\u7528"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:25,pct:100}}
  },
  {
    id:'c23', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'orange.jpg', emoji:'🍊', foodCats:["carb"],
    en:{name:'Orange',time:'5 min',servings:'1 medium',why:'',ingredients:["Orange 1"],steps:["Peel and eat"],notes:''},
    zh:{name:'橙子',time:'5 分钟',servings:'1个',why:'',ingredients:["\u6a59\u5b50 1\u4e2a"],steps:["\u5265\u76ae\u98df\u7528"],notes:''},
    macros:{protein:{g:1,pct:5},fat:{g:0,pct:0},netCarbs:{g:18,pct:95}}
  },
  {
    id:'c24', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'mandarin.jpg', emoji:'🍊', foodCats:["carb"],
    en:{name:'Mandarin',time:'5 min',servings:'2 small',why:'',ingredients:["Mandarin 2"],steps:["Peel and eat"],notes:''},
    zh:{name:'橘子',time:'5 分钟',servings:'2个',why:'',ingredients:["\u6a58\u5b50 2\u4e2a"],steps:["\u5265\u76ae\u98df\u7528"],notes:''},
    macros:{protein:{g:1,pct:6},fat:{g:0,pct:0},netCarbs:{g:15,pct:94}}
  },
  {
    id:'c25', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'kiwi.jpg', emoji:'🥝', foodCats:["carb"],
    en:{name:'Kiwi',time:'5 min',servings:'2 pieces',why:'',ingredients:["Kiwi 2"],steps:["Cut in half", "Scoop"],notes:''},
    zh:{name:'猕猴桃',time:'5 分钟',servings:'2个',why:'',ingredients:["\u7315\u7334\u6843 2\u4e2a"],steps:["\u5bf9\u534a\u5207", "\u6316\u98df"],notes:''},
    macros:{protein:{g:1,pct:6},fat:{g:0,pct:0},netCarbs:{g:15,pct:94}}
  },
  {
    id:'c26', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'mango.jpg', emoji:'🥭', foodCats:["carb"],
    en:{name:'Mango',time:'5 min',servings:'1/2',why:'',ingredients:["Mango 1/2"],steps:["Cut around pit", "Score and scoop"],notes:''},
    zh:{name:'芒果',time:'5 分钟',servings:'半个',why:'',ingredients:["\u8292\u679c \u534a\u4e2a"],steps:["\u6cbf\u6838\u5207", "\u5212\u82b1\u5200\u6316\u8089"],notes:''},
    macros:{protein:{g:1,pct:4},fat:{g:0,pct:0},netCarbs:{g:25,pct:96}}
  },
  {
    id:'c27', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'watermelon.jpg', emoji:'🍉', foodCats:["carb"],
    en:{name:'Watermelon',time:'5 min',servings:'1 cup',why:'',ingredients:["Watermelon 1 cup"],steps:["Cut into chunks"],notes:''},
    zh:{name:'西瓜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u897f\u74dc 1\u676f"],steps:["\u5207\u5757"],notes:''},
    macros:{protein:{g:1,pct:8},fat:{g:0,pct:0},netCarbs:{g:11,pct:92}}
  },
  {
    id:'c28', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'cantaloupe.jpg', emoji:'🍈', foodCats:["carb"],
    en:{name:'Cantaloupe',time:'5 min',servings:'1 cup',why:'',ingredients:["Cantaloupe 1 cup"],steps:["Cut into chunks"],notes:''},
    zh:{name:'哈密瓜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u54c8\u5bc6\u74dc 1\u676f"],steps:["\u5207\u5757"],notes:''},
    macros:{protein:{g:1,pct:7},fat:{g:0,pct:0},netCarbs:{g:13,pct:93}}
  },
  {
    id:'c29', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'cherries.jpg', emoji:'🍒', foodCats:["carb"],
    en:{name:'Cherries',time:'5 min',servings:'1 cup',why:'',ingredients:["Cherries 1 cup"],steps:["Wash and pit if desired"],notes:''},
    zh:{name:'樱桃',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u6a31\u6843 1\u676f"],steps:["\u6d17\u51c0", "\u53ef\u53bb\u6838"],notes:''},
    macros:{protein:{g:1,pct:5},fat:{g:0,pct:0},netCarbs:{g:18,pct:95}}
  },
  {
    id:'c30', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'peaches.jpg', emoji:'🍑', foodCats:["carb"],
    en:{name:'Peaches',time:'5 min',servings:'1 medium',why:'',ingredients:["Peach 1"],steps:["Wash and eat"],notes:''},
    zh:{name:'桃子',time:'5 分钟',servings:'1个',why:'',ingredients:["\u6843\u5b50 1\u4e2a"],steps:["\u6d17\u51c0\u98df\u7528"],notes:''},
    macros:{protein:{g:1,pct:7},fat:{g:0,pct:0},netCarbs:{g:14,pct:93}}
  },
  {
    id:'c31', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'dried-apricots.jpg', emoji:'🟠', foodCats:["carb"],
    en:{name:'Dried Apricots',time:'5 min',servings:'4 halves',why:'',ingredients:["Dried apricots 4"],steps:["Eat as snack"],notes:''},
    zh:{name:'杏干',time:'5 分钟',servings:'4片',why:'',ingredients:["\u674f\u5e72 4\u7247"],steps:["\u5f53\u96f6\u98df"],notes:''},
    macros:{protein:{g:1,pct:5},fat:{g:0,pct:0},netCarbs:{g:20,pct:95}}
  },
  {
    id:'c32', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'raisins.jpg', emoji:'🍇', foodCats:["carb"],
    en:{name:'Raisins',time:'5 min',servings:'1/4 cup',why:'',ingredients:["Raisins 1/4 cup"],steps:["Snack or add to oatmeal"],notes:''},
    zh:{name:'葡萄干',time:'5 分钟',servings:'1/4杯',why:'',ingredients:["\u8461\u8404\u5e72 1/4\u676f"],steps:["\u96f6\u98df\u6216\u52a0\u5165\u71d5\u9ea6"],notes:''},
    macros:{protein:{g:1,pct:4},fat:{g:0,pct:0},netCarbs:{g:22,pct:96}}
  },
  {
    id:'c33', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'dates.jpg', emoji:'🌴', foodCats:["carb"],
    en:{name:'Dates',time:'5 min',servings:'3 pieces',why:'',ingredients:["Dates 3"],steps:["Eat as is or stuff with nut butter"],notes:''},
    zh:{name:'椰枣',time:'5 分钟',servings:'3颗',why:'',ingredients:["\u6930\u67a3 3\u9897"],steps:["\u76f4\u63a5\u98df\u7528\u6216\u5939\u575a\u679c\u9171"],notes:''},
    macros:{protein:{g:1,pct:2},fat:{g:0,pct:0},netCarbs:{g:40,pct:98}}
  },
  {
    id:'c34', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'prunes.jpg', emoji:'🟣', foodCats:["carb"],
    en:{name:'Prunes',time:'5 min',servings:'3 pieces',why:'',ingredients:["Prunes 3"],steps:["Eat as snack"],notes:''},
    zh:{name:'西梅干',time:'5 分钟',servings:'3颗',why:'',ingredients:["\u897f\u6885\u5e72 3\u9897"],steps:["\u5f53\u96f6\u98df"],notes:''},
    macros:{protein:{g:1,pct:5},fat:{g:0,pct:0},netCarbs:{g:20,pct:95}}
  },
  {
    id:'p46', type:'snack', carb:'moderate', tags:[], contains:["soy"], focus:[],
    img:'roasted-edamame.jpg', emoji:'🫛', foodCats:["protein", "carb"],
    en:{name:'Roasted Edamame',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Edamame 1/2 cup", "Oil", "Salt"],steps:["Toss with oil and salt", "Roast 400F 20 min"],notes:''},
    zh:{name:'烤毛豆',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u6bdb\u8c46\u4ec1 \u534a\u676f", "\u6cb9", "\u76d0"],steps:["\u62cc\u6cb9\u76d0", "400\u00b0F \u70e4 20 \u5206\u949f"],notes:''},
    macros:{protein:{g:14,pct:35},fat:{g:6,pct:34},netCarbs:{g:12,pct:30}}
  },
  {
    id:'c35', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'unsweetened-applesauce.jpg', emoji:'🍎', foodCats:["carb"],
    en:{name:'Unsweetened Applesauce',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Applesauce 1/2 cup"],steps:["Serve as is"],notes:''},
    zh:{name:'无糖苹果酱',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u82f9\u679c\u9171 \u534a\u676f"],steps:["\u76f4\u63a5\u98df\u7528"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:14,pct:100}}
  },
  {
    id:'c36', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'plain-popcorn.jpg', emoji:'🍿', foodCats:["carb"],
    en:{name:'Plain Popcorn',time:'5 min',servings:'3 cups',why:'',ingredients:["Popcorn kernels 2 tbsp"],steps:["Pop in air popper or stovetop"],notes:''},
    zh:{name:'原味爆米花',time:'5 分钟',servings:'3杯',why:'',ingredients:["\u7206\u7c73\u82b1\u7389\u7c73\u7c92 2\u6c64\u5319"],steps:["\u7206\u5f00"],notes:''},
    macros:{protein:{g:3,pct:12},fat:{g:1,pct:9},netCarbs:{g:19,pct:78}}
  },
  {
    id:'c37', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'pretzels.jpg', emoji:'🥨', foodCats:["carb"],
    en:{name:'Pretzels',time:'5 min',servings:'10 pieces',why:'',ingredients:["Pretzels 10"],steps:["Serve as snack"],notes:''},
    zh:{name:'椒盐脆饼',time:'5 分钟',servings:'10个',why:'',ingredients:["\u6912\u76d0\u8106\u997c 10\u4e2a"],steps:["\u5f53\u96f6\u98df"],notes:''},
    macros:{protein:{g:2,pct:8},fat:{g:1,pct:9},netCarbs:{g:22,pct:84}}
  },
  {
    id:'f02', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'pecans.jpg', emoji:'🌰', foodCats:["fat-flavor"],
    en:{name:'Pecans',time:'5 min',servings:'1 oz',why:'',ingredients:["Pecans 1 oz"],steps:["Eat as snack"],notes:''},
    zh:{name:'碧根果',time:'5 分钟',servings:'28克',why:'',ingredients:["\u78a7\u6839\u679c 28\u514b"],steps:["\u5f53\u96f6\u98df"],notes:''},
    macros:{protein:{g:1,pct:2},fat:{g:20,pct:90},netCarbs:{g:4,pct:8}}
  },
  {
    id:'f03', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'cashews.jpg', emoji:'🌰', foodCats:["fat-flavor"],
    en:{name:'Cashews',time:'5 min',servings:'1 oz',why:'',ingredients:["Cashews 1 oz"],steps:["Snack or add to stir-fries"],notes:''},
    zh:{name:'腰果',time:'5 分钟',servings:'28克',why:'',ingredients:["\u8170\u679c 28\u514b"],steps:["\u96f6\u98df\u6216\u5165\u7092\u83dc"],notes:''},
    macros:{protein:{g:5,pct:12},fat:{g:13,pct:68},netCarbs:{g:9,pct:21}}
  },
  {
    id:'f04', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'pistachios.jpg', emoji:'🌰', foodCats:["fat-flavor"],
    en:{name:'Pistachios',time:'5 min',servings:'1 oz',why:'',ingredients:["Pistachios 1 oz"],steps:["Eat as snack"],notes:''},
    zh:{name:'开心果',time:'5 分钟',servings:'28克',why:'',ingredients:["\u5f00\u5fc3\u679c 28\u514b"],steps:["\u5f53\u96f6\u98df"],notes:''},
    macros:{protein:{g:6,pct:14},fat:{g:13,pct:68},netCarbs:{g:8,pct:18}}
  },
  {
    id:'f05', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'brazil-nuts.jpg', emoji:'🌰', foodCats:["fat-flavor"],
    en:{name:'Brazil Nuts',time:'5 min',servings:'1 oz',why:'',ingredients:["Brazil nuts 1 oz"],steps:["Eat 1-2 per day"],notes:''},
    zh:{name:'巴西坚果',time:'5 分钟',servings:'28克',why:'',ingredients:["\u5df4\u897f\u575a\u679c 28\u514b"],steps:["\u6bcf\u5929 1-2 \u7c92"],notes:''},
    macros:{protein:{g:2,pct:4},fat:{g:19,pct:90},netCarbs:{g:3,pct:6}}
  },
  {
    id:'f06', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'hazelnuts.jpg', emoji:'🌰', foodCats:["fat-flavor"],
    en:{name:'Hazelnuts',time:'5 min',servings:'1 oz',why:'',ingredients:["Hazelnuts 1 oz"],steps:["Eat as snack"],notes:''},
    zh:{name:'榛子',time:'5 分钟',servings:'28克',why:'',ingredients:["\u699b\u5b50 28\u514b"],steps:["\u5f53\u96f6\u98df"],notes:''},
    macros:{protein:{g:4,pct:8},fat:{g:17,pct:81},netCarbs:{g:5,pct:11}}
  },
  {
    id:'f07', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'pine-nuts.jpg', emoji:'🌰', foodCats:["fat-flavor"],
    en:{name:'Pine Nuts',time:'5 min',servings:'1 oz',why:'',ingredients:["Pine nuts 1 oz"],steps:["Toast 2 min", "Use in pesto"],notes:''},
    zh:{name:'松子',time:'5 分钟',servings:'28克',why:'',ingredients:["\u677e\u5b50 28\u514b"],steps:["\u5e72\u9505\u70e4 2 \u5206\u949f", "\u505a\u9752\u9171"],notes:''},
    macros:{protein:{g:4,pct:8},fat:{g:19,pct:84},netCarbs:{g:4,pct:8}}
  },
  {
    id:'f08', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'mixed-nuts.jpg', emoji:'🌰', foodCats:["fat-flavor"],
    en:{name:'Mixed Nuts',time:'5 min',servings:'1 oz',why:'',ingredients:["Mixed nuts 1 oz"],steps:["Eat as snack"],notes:''},
    zh:{name:'综合坚果',time:'5 分钟',servings:'28克',why:'',ingredients:["\u7efc\u5408\u575a\u679c 28\u514b"],steps:["\u5f53\u96f6\u98df"],notes:''},
    macros:{protein:{g:5,pct:11},fat:{g:16,pct:77},netCarbs:{g:6,pct:13}}
  },
  {
    id:'f09', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'pumpkin-seeds.jpg', emoji:'🎃', foodCats:["fat-flavor"],
    en:{name:'Pumpkin Seeds',time:'5 min',servings:'1 oz',why:'',ingredients:["Pumpkin seeds 1 oz"],steps:["Eat raw or toast 3 min"],notes:''},
    zh:{name:'南瓜籽',time:'5 分钟',servings:'28克',why:'',ingredients:["\u5357\u74dc\u7c7d 28\u514b"],steps:["\u751f\u98df\u6216\u70e4 3 \u5206\u949f"],notes:''},
    macros:{protein:{g:5,pct:13},fat:{g:13,pct:75},netCarbs:{g:5,pct:13}}
  },
  {
    id:'f10', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sunflower-seeds.jpg', emoji:'🌻', foodCats:["fat-flavor"],
    en:{name:'Sunflower Seeds',time:'5 min',servings:'1 oz',why:'',ingredients:["Sunflower seeds 1 oz"],steps:["Eat raw or toast lightly"],notes:''},
    zh:{name:'葵花籽',time:'5 分钟',servings:'28克',why:'',ingredients:["\u8475\u82b1\u7c7d 28\u514b"],steps:["\u751f\u98df\u6216\u7a0d\u70e4"],notes:''},
    macros:{protein:{g:3,pct:7},fat:{g:14,pct:78},netCarbs:{g:6,pct:15}}
  },
  {
    id:'f11', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'chia-seeds.jpg', emoji:'🟤', foodCats:["fat-flavor"],
    en:{name:'Chia Seeds',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Chia seeds 1 tbsp"],steps:["Soak in liquid 15 min"],notes:''},
    zh:{name:'奇亚籽',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u5947\u4e9a\u7c7d 1\u6c64\u5319"],steps:["\u6ce1 15 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:10},fat:{g:4,pct:43},netCarbs:{g:10,pct:48}}
  },
  {
    id:'f12', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'ground-flaxseed.jpg', emoji:'🟤', foodCats:["fat-flavor"],
    en:{name:'Ground Flaxseed',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Ground flaxseed 1 tbsp"],steps:["Add to oatmeal or smoothies"],notes:''},
    zh:{name:'亚麻籽粉',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u4e9a\u9ebb\u7c7d\u7c89 1\u6c64\u5319"],steps:["\u52a0\u5165\u71d5\u9ea6\u6216\u601d\u6155\u96ea"],notes:''},
    macros:{protein:{g:2,pct:16},fat:{g:3,pct:53},netCarbs:{g:4,pct:31}}
  },
  {
    id:'f13', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'hemp-hearts.jpg', emoji:'🟢', foodCats:["fat-flavor"],
    en:{name:'Hemp Hearts',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Hemp hearts 1 tbsp"],steps:["Sprinkle on dishes"],notes:''},
    zh:{name:'火麻仁',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u706b\u9ebb\u4ec1 1\u6c64\u5319"],steps:["\u6492\u5728\u83dc\u4e0a"],notes:''},
    macros:{protein:{g:3,pct:48},fat:{g:1,pct:36},netCarbs:{g:1,pct:16}}
  },
  {
    id:'f14', type:'snack', carb:'low', tags:[], contains:["sesame"], focus:[],
    img:'sesame-seeds.jpg', emoji:'⚪', foodCats:["fat-flavor"],
    en:{name:'Sesame Seeds',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Sesame seeds 1 tbsp"],steps:["Toast 1-2 min", "Sprinkle"],notes:''},
    zh:{name:'芝麻',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u829d\u9ebb 1\u6c64\u5319"],steps:["\u70e4 1-2 \u5206\u949f", "\u6492\u4e0a"],notes:''},
    macros:{protein:{g:2,pct:13},fat:{g:5,pct:74},netCarbs:{g:2,pct:13}}
  },
  {
    id:'f15', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'cashew-butter.jpg', emoji:'🥜', foodCats:["fat-flavor"],
    en:{name:'Cashew Butter',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Cashew butter 1 tbsp"],steps:["Spread or use in sauces"],notes:''},
    zh:{name:'腰果酱',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u8170\u679c\u9171 1\u6c64\u5319"],steps:["\u6d82\u6216\u505a\u9171"],notes:''},
    macros:{protein:{g:2,pct:8},fat:{g:8,pct:75},netCarbs:{g:4,pct:17}}
  },
  {
    id:'f16', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sunflower-seed-butter.jpg', emoji:'🥜', foodCats:["fat-flavor"],
    en:{name:'Sunflower Seed Butter',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Sunflower butter 1 tbsp"],steps:["Spread on toast"],notes:''},
    zh:{name:'葵花籽酱',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u8475\u82b1\u7c7d\u9171 1\u6c64\u5319"],steps:["\u6d82\u5410\u53f8"],notes:''},
    macros:{protein:{g:3,pct:12},fat:{g:8,pct:72},netCarbs:{g:4,pct:16}}
  },
  {
    id:'f17', type:'snack', carb:'low', tags:[], contains:["sesame"], focus:[],
    img:'tahini.jpg', emoji:'🥣', foodCats:["fat-flavor"],
    en:{name:'Tahini',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Tahini 1 tbsp"],steps:["Use in hummus or dressings"],notes:''},
    zh:{name:'芝麻酱',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u829d\u9ebb\u9171 1\u6c64\u5319"],steps:["\u505a\u9e70\u5634\u8c46\u6ce5\u6216\u6c99\u62c9\u9171"],notes:''},
    macros:{protein:{g:3,pct:11},fat:{g:9,pct:77},netCarbs:{g:3,pct:11}}
  },
  {
    id:'f18', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'olives.jpg', emoji:'🫒', foodCats:["fat-flavor"],
    en:{name:'Olives',time:'5 min',servings:'10 pieces',why:'',ingredients:["Olives 10"],steps:["Serve as snack or in salads"],notes:''},
    zh:{name:'橄榄',time:'5 分钟',servings:'10颗',why:'',ingredients:["\u6a44\u6984 10\u9897"],steps:["\u96f6\u98df\u6216\u52a0\u6c99\u62c9"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:15,pct:89},netCarbs:{g:4,pct:11}}
  },
  {
    id:'f19', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'extra-virgin-olive-oil.jpg', emoji:'🫒', foodCats:["fat-flavor"],
    en:{name:'Extra-Virgin Olive Oil',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Olive oil 1 tbsp"],steps:["Drizzle on salads or vegetables"],notes:''},
    zh:{name:'特级初榨橄榄油',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u6a44\u6984\u6cb9 1\u6c64\u5319"],steps:["\u6dcb\u6c99\u62c9\u6216\u852c\u83dc"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:14,pct:100},netCarbs:{g:0,pct:0}}
  },
  {
    id:'f20', type:'snack', carb:'low', tags:[], contains:["dairy", "nuts"], focus:[],
    img:'pesto.jpg', emoji:'🌿', foodCats:["fat-flavor"],
    en:{name:'Pesto',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Basil 1 cup", "Pine nuts", "Olive oil", "Parmesan", "Garlic"],steps:["Blend all until smooth"],notes:''},
    zh:{name:'青酱',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u7f57\u52d2 1\u676f", "\u677e\u5b50", "\u6a44\u6984\u6cb9", "\u5e15\u739b\u68ee", "\u849c"],steps:["\u6253\u81f3\u987a\u6ed1"],notes:''},
    macros:{protein:{g:3,pct:6},fat:{g:18,pct:87},netCarbs:{g:3,pct:6}}
  },
  {
    id:'f21', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'homemade-vinaigrette.jpg', emoji:'🫗', foodCats:["fat-flavor"],
    en:{name:'Homemade Vinaigrette',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Olive oil 3 tbsp", "Vinegar", "Mustard", "Salt"],steps:["Whisk together"],notes:''},
    zh:{name:'油醋汁',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u6a44\u6984\u6cb9 3\u6c64\u5319", "\u918b", "\u82a5\u672b", "\u76d0"],steps:["\u6405\u5300"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:14,pct:97},netCarbs:{g:1,pct:3}}
  },
  {
    id:'f22', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'tzatziki.jpg', emoji:'🥒', foodCats:["fat-flavor"],
    en:{name:'Tzatziki',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Greek yogurt", "Cucumber", "Garlic", "Lemon", "Dill"],steps:["Grate cucumber, squeeze water", "Mix with yogurt"],notes:''},
    zh:{name:'酸奶黄瓜酱',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u5e0c\u814a\u9178\u5976", "\u9ec4\u74dc", "\u849c", "\u67e0\u6aac", "\u83b3\u841d"],steps:["\u9ec4\u74dc\u78e8\u788e\u6324\u6c34", "\u62cc\u9178\u5976"],notes:''},
    macros:{protein:{g:2,pct:21},fat:{g:2,pct:47},netCarbs:{g:3,pct:32}}
  },
  {
    id:'f23', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'greek-yogurt-dip.jpg', emoji:'🥣', foodCats:["fat-flavor"],
    en:{name:'Greek Yogurt Dip',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Greek yogurt", "Garlic", "Lemon", "Salt"],steps:["Mix together"],notes:''},
    zh:{name:'酸奶蘸酱',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u5e0c\u814a\u9178\u5976", "\u849c", "\u67e0\u6aac", "\u76d0"],steps:["\u62cc\u5300"],notes:''},
    macros:{protein:{g:3,pct:29},fat:{g:2,pct:43},netCarbs:{g:3,pct:29}}
  },
  {
    id:'f24', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'ranch-dip.jpg', emoji:'🥗', foodCats:["fat-flavor"],
    en:{name:'Ranch Dip',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Greek yogurt", "Ranch seasoning"],steps:["Mix and chill 10 min"],notes:''},
    zh:{name:'牧场蘸酱',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u5e0c\u814a\u9178\u5976", "\u7267\u573a\u8c03\u5473\u7c89"],steps:["\u62cc\u5300\u51b7\u85cf"],notes:''},
    macros:{protein:{g:1,pct:5},fat:{g:8,pct:86},netCarbs:{g:2,pct:10}}
  },
  {
    id:'v36', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'spinach-dip.jpg', emoji:'🥬', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Spinach Dip',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Spinach", "Greek yogurt", "Garlic", "Salt"],steps:["Squeeze spinach", "Mix with yogurt"],notes:''},
    zh:{name:'菠菜蘸酱',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u83e0\u83dc", "\u5e0c\u814a\u9178\u5976", "\u849c", "\u76d0"],steps:["\u83e0\u83dc\u6324\u6c34", "\u62cc\u9178\u5976"],notes:''},
    macros:{protein:{g:2,pct:11},fat:{g:6,pct:73},netCarbs:{g:3,pct:16}}
  },
  {
    id:'v37', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'salsa.jpg', emoji:'🍅', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Salsa',time:'5 min',servings:'1/4 cup',why:'',ingredients:["Tomato", "Onion", "Jalape\u00f1o", "Lime", "Cilantro", "Salt"],steps:["Dice finely", "Mix with lime and salt"],notes:''},
    zh:{name:'莎莎酱',time:'5 分钟',servings:'1/4杯',why:'',ingredients:["\u756a\u8304", "\u6d0b\u8471", "\u8fa3\u6912", "\u9752\u67e0", "\u9999\u83dc", "\u76d0"],steps:["\u5207\u4e01", "\u62cc\u9752\u67e0\u548c\u76d0"],notes:''},
    macros:{protein:{g:1,pct:17},fat:{g:0,pct:0},netCarbs:{g:5,pct:83}}
  },
  {
    id:'f25', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'sour-cream.jpg', emoji:'🥛', foodCats:["fat-flavor"],
    en:{name:'Sour Cream',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Sour cream 2 tbsp"],steps:["Dollop on dishes"],notes:''},
    zh:{name:'酸奶油',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u9178\u5976\u6cb9 2\u6c64\u5319"],steps:["\u52a0\u5728\u83dc\u4e0a"],notes:''},
    macros:{protein:{g:1,pct:6},fat:{g:6,pct:82},netCarbs:{g:2,pct:12}}
  },
  {
    id:'v38', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'marinara-sauce.jpg', emoji:'🍅', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Marinara Sauce',time:'5 min',servings:'1/2 cup',why:'',ingredients:["Crushed tomatoes", "Olive oil", "Garlic", "Basil", "Salt"],steps:["Saut\u00e9 garlic", "Add tomatoes, simmer 15 min"],notes:''},
    zh:{name:'番茄酱汁',time:'5 分钟',servings:'半杯',why:'',ingredients:["\u756a\u8304\u788e", "\u6a44\u6984\u6cb9", "\u849c", "\u7f57\u52d2", "\u76d0"],steps:["\u7092\u849c", "\u52a0\u756a\u8304\u716e 15 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:12},fat:{g:3,pct:40},netCarbs:{g:8,pct:48}}
  },
  {
    id:'f26', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'peanut-sauce.jpg', emoji:'🥜', foodCats:["fat-flavor"],
    en:{name:'Peanut Sauce',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Peanut butter", "Soy sauce", "Lime", "Honey", "Water"],steps:["Whisk together", "Thin with water"],notes:''},
    zh:{name:'花生酱汁',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u82b1\u751f\u9171", "\u751f\u62bd", "\u9752\u67e0", "\u8702\u871c", "\u6c34"],steps:["\u6405\u5300", "\u52a0\u6c34\u8c03\u7a00"],notes:''},
    macros:{protein:{g:4,pct:11},fat:{g:12,pct:73},netCarbs:{g:6,pct:16}}
  },
  {
    id:'f27', type:'snack', carb:'low', tags:[], contains:["sesame"], focus:[],
    img:'sesame-dressing.jpg', emoji:'🥗', foodCats:["fat-flavor"],
    en:{name:'Sesame Dressing',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Sesame oil", "Rice vinegar", "Soy sauce", "Honey"],steps:["Whisk together"],notes:''},
    zh:{name:'芝麻沙拉酱',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u829d\u9ebb\u6cb9", "\u7c73\u918b", "\u751f\u62bd", "\u8702\u871c"],steps:["\u6405\u5300"],notes:''},
    macros:{protein:{g:1,pct:3},fat:{g:12,pct:87},netCarbs:{g:3,pct:10}}
  },
  {
    id:'f28', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'aioli.jpg', emoji:'🧄', foodCats:["fat-flavor"],
    en:{name:'Aioli',time:'5 min',servings:'1 tbsp',why:'',ingredients:["Mayonnaise", "Garlic", "Lemon"],steps:["Mix together"],notes:''},
    zh:{name:'蒜蓉蛋黄酱',time:'5 分钟',servings:'1汤匙',why:'',ingredients:["\u86cb\u9ec4\u9171", "\u849c", "\u67e0\u6aac"],steps:["\u62cc\u5300"],notes:''},
    macros:{protein:{g:1,pct:2},fat:{g:20,pct:96},netCarbs:{g:1,pct:2}}
  },
  {
    id:'f29', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'hot-sauce.jpg', emoji:'🌶️', foodCats:["fat-flavor"],
    en:{name:'Hot Sauce',time:'5 min',servings:'1 tsp',why:'',ingredients:["Hot sauce 1 tsp"],steps:["Drizzle on dishes"],notes:''},
    zh:{name:'辣酱',time:'5 分钟',servings:'1茶匙',why:'',ingredients:["\u8fa3\u9171 1\u8336\u5319"],steps:["\u52a0\u5728\u83dc\u4e0a"],notes:''},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:1,pct:100}}
  },
  {
    id:'v39', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'chimichurri.jpg', emoji:'🌿', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Chimichurri',time:'5 min',servings:'2 tbsp',why:'',ingredients:["Parsley", "Olive oil", "Garlic", "Vinegar", "Oregano", "Salt"],steps:["Chop finely", "Mix with oil and vinegar"],notes:''},
    zh:{name:'阿根廷青酱',time:'5 分钟',servings:'2汤匙',why:'',ingredients:["\u6b27\u82b9", "\u6a44\u6984\u6cb9", "\u849c", "\u918b", "\u725b\u81f3", "\u76d0"],steps:["\u5207\u7ec6", "\u62cc\u6cb9\u548c\u918b"],notes:''},
    macros:{protein:{g:1,pct:3},fat:{g:14,pct:91},netCarbs:{g:2,pct:6}}
  },
  {
    id:'f30', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'coconut-curry-sauce.jpg', emoji:'🍛', foodCats:["fat-flavor"],
    en:{name:'Coconut Curry Sauce',time:'5 min',servings:'1/4 cup',why:'',ingredients:["Coconut milk", "Curry paste", "Garlic", "Ginger"],steps:["Saut\u00e9 curry paste", "Add coconut milk, simmer 5 min"],notes:''},
    zh:{name:'椰香咖喱酱',time:'5 分钟',servings:'1/4杯',why:'',ingredients:["\u6930\u5976", "\u5496\u55b1\u9171", "\u849c", "\u59dc"],steps:["\u7092\u5496\u55b1\u9171", "\u52a0\u6930\u5976\u716e 5 \u5206\u949f"],notes:''},
    macros:{protein:{g:2,pct:5},fat:{g:14,pct:80},netCarbs:{g:6,pct:15}}
  },
  {
    id:'f31', type:'snack', carb:'low', tags:[], contains:["gluten"], focus:[],
    img:'gravy.jpg', emoji:'🍖', foodCats:["fat-flavor"],
    en:{name:'Gravy',time:'5 min',servings:'1/4 cup',why:'',ingredients:["Pan drippings", "Flour", "Broth"],steps:["Whisk flour into drippings", "Add broth, thicken"],notes:''},
    zh:{name:'肉汁',time:'5 分钟',servings:'1/4杯',why:'',ingredients:["\u9505\u5e95\u6c41", "\u9762\u7c89", "\u9ad8\u6c64"],steps:["\u9762\u7c89\u62cc\u5165\u6c41", "\u52a0\u9ad8\u6c64\u716e\u7a20"],notes:''},
    macros:{protein:{g:2,pct:12},fat:{g:5,pct:69},netCarbs:{g:3,pct:18}}
  },
  {
    id:'f32', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'seaweed-snacks.jpg', emoji:'🌿', foodCats:["fat-flavor"],
    en:{name:'Seaweed Snacks',time:'5 min',servings:'10 sheets',why:'',ingredients:["Seaweed sheets 10"],steps:["Eat as crispy snack"],notes:''},
    zh:{name:'海苔脆',time:'5 分钟',servings:'10片',why:'',ingredients:["\u6d77\u82d4\u8106 10\u7247"],steps:["\u5f53\u8106\u96f6\u98df"],notes:''},
    macros:{protein:{g:1,pct:24},fat:{g:1,pct:53},netCarbs:{g:1,pct:24}}
  },
  {
    id:'v40', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'frozen-vegetables.jpg', emoji:'🥦', foodCats:["vegetable"],
    en:{name:'Frozen Vegetables',time:'5 min',servings:'1 cup',why:'',ingredients:["Frozen mixed veg 1 cup"],steps:["Steam or microwave"],notes:''},
    zh:{name:'冷冻蔬菜',time:'5 分钟',servings:'1杯',why:'',ingredients:["\u51b7\u51bb\u6df7\u5408\u852c\u83dc 1\u676f"],steps:["\u84b8\u6216\u5fae\u6ce2"],notes:''},
    macros:{protein:{g:2,pct:25},fat:{g:0,pct:0},netCarbs:{g:6,pct:75}}
  },
  {
    id:'f33', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'canned-coconut-milk.jpg', emoji:'🥥', foodCats:["fat-flavor"],
    en:{name:'Canned Coconut Milk',time:'5 min',servings:'1/4 cup',why:'',ingredients:["Coconut milk 1/4 cup"],steps:["Shake can", "Use in curries or smoothies"],notes:''},
    zh:{name:'椰奶（罐头）',time:'5 分钟',servings:'1/4杯',why:'',ingredients:["\u7f50\u5934\u6930\u5976 1/4\u676f"],steps:["\u6447\u5300", "\u505a\u5496\u55b1\u6216\u601d\u6155\u96ea"],notes:''},
    macros:{protein:{g:1,pct:3},fat:{g:12,pct:87},netCarbs:{g:3,pct:10}}
  },
];

const INGREDIENT_MICROS = {
  'p01':{calcium:20,iron:3,sodium:55,potassium:350,fibre:0,vitaminC:0},
  'p02':{calcium:15,iron:3,sodium:75,potassium:320,fibre:0,vitaminC:0},
  'p03':{calcium:15,iron:3,sodium:300,potassium:280,fibre:0,vitaminC:0},
  'p04':{calcium:10,iron:2,sodium:350,potassium:300,fibre:0,vitaminC:0},
  'p05':{calcium:20,iron:4,sodium:300,potassium:400,fibre:1,vitaminC:0},
  'p06':{calcium:20,iron:1,sodium:350,potassium:420,fibre:0,vitaminC:0},
  'p07':{calcium:15,iron:1,sodium:700,potassium:200,fibre:0,vitaminC:0},
  'p08':{calcium:30,iron:2,sodium:400,potassium:350,fibre:0,vitaminC:0},
  'p09':{calcium:10,iron:1,sodium:1200,potassium:240,fibre:0,vitaminC:0},
  'p10':{calcium:5,iron:1,sodium:600,potassium:110,fibre:0,vitaminC:0},
  'p11':{calcium:15,iron:1,sodium:90,potassium:300,fibre:0,vitaminC:0},
  'p12':{calcium:20,iron:2,sodium:90,potassium:300,fibre:0,vitaminC:0},
  'p13':{calcium:12,iron:1,sodium:90,potassium:260,fibre:0,vitaminC:0},
  'p14':{calcium:12,iron:1,sodium:350,potassium:210,fibre:0,vitaminC:0},
  'p15':{calcium:15,iron:2,sodium:90,potassium:280,fibre:0,vitaminC:0},
  'p16':{calcium:10,iron:1,sodium:900,potassium:280,fibre:0,vitaminC:0},
  'p17':{calcium:15,iron:2,sodium:90,potassium:320,fibre:0,vitaminC:0},
  'p18':{calcium:15,iron:2,sodium:70,potassium:280,fibre:0,vitaminC:0},
  'p19':{calcium:15,iron:3,sodium:300,potassium:250,fibre:0,vitaminC:0},
  'p20':{calcium:12,iron:3,sodium:400,potassium:300,fibre:0,vitaminC:0},
  'p21':{calcium:15,iron:1,sodium:60,potassium:350,fibre:0,vitaminC:0},
  'p22':{calcium:15,iron:1,sodium:300,potassium:350,fibre:0,vitaminC:0},
  'p23':{calcium:10,iron:1,sodium:200,potassium:320,fibre:0,vitaminC:0},
  'p24':{calcium:15,iron:1,sodium:250,potassium:450,fibre:0,vitaminC:0},
  'p25':{calcium:70,iron:2,sodium:200,potassium:250,fibre:0,vitaminC:0},
  'p26':{calcium:40,iron:2,sodium:300,potassium:350,fibre:0,vitaminC:0},
  'p27':{calcium:50,iron:6,sodium:500,potassium:350,fibre:0,vitaminC:5},
  'p28':{calcium:40,iron:2,sodium:300,potassium:150,fibre:0,vitaminC:0},
  'p29':{calcium:50,iron:2,sodium:300,potassium:120,fibre:0,vitaminC:0},
  'p30':{calcium:50,iron:2,sodium:300,potassium:120,fibre:0,vitaminC:0},
  'p31':{calcium:50,iron:2,sodium:150,potassium:130,fibre:0,vitaminC:0},
  'p32':{calcium:200,iron:3,sodium:20,potassium:180,fibre:1,vitaminC:0},
  'p33':{calcium:200,iron:3,sodium:300,potassium:200,fibre:2,vitaminC:5},
  'p34':{calcium:40,iron:1,sodium:80,potassium:220,fibre:3,vitaminC:0},
  'p35':{calcium:20,iron:2,sodium:300,potassium:100,fibre:1,vitaminC:0},
  'p36':{calcium:40,iron:3,sodium:400,potassium:200,fibre:3,vitaminC:0},
  'p37':{calcium:25,iron:3,sodium:5,potassium:360,fibre:8,vitaminC:2},
  'p38':{calcium:25,iron:2,sodium:300,potassium:280,fibre:7,vitaminC:0},
  'p39':{calcium:30,iron:2,sodium:300,potassium:300,fibre:7,vitaminC:1},
  'p40':{calcium:50,iron:2,sodium:300,potassium:280,fibre:6,vitaminC:0},
  'f01':{calcium:20,iron:1,sodium:300,potassium:50,fibre:0,vitaminC:0},
  'p41':{calcium:250,iron:1,sodium:300,potassium:100,fibre:0,vitaminC:0},
  'p42':{calcium:0,iron:1,sodium:250,potassium:200,fibre:0,vitaminC:0},
  'p43':{calcium:10,iron:1,sodium:600,potassium:120,fibre:0,vitaminC:0},
  'v01':{calcium:20,iron:1,sodium:10,potassium:150,fibre:1,vitaminC:5},
  'v02':{calcium:40,iron:1,sodium:60,potassium:230,fibre:3,vitaminC:8},
  'v03':{calcium:40,iron:1,sodium:80,potassium:260,fibre:2,vitaminC:3},
  'v04':{calcium:10,iron:1,sodium:5,potassium:210,fibre:2,vitaminC:120},
  'v05':{calcium:25,iron:1,sodium:20,potassium:180,fibre:2,vitaminC:15},
  'v06':{calcium:40,iron:2,sodium:10,potassium:180,fibre:3,vitaminC:40},
  'v07':{calcium:30,iron:1,sodium:5,potassium:120,fibre:2,vitaminC:10},
  'v08':{calcium:60,iron:2,sodium:25,potassium:170,fibre:2,vitaminC:15},
  'v09':{calcium:40,iron:1,sodium:10,potassium:150,fibre:2,vitaminC:10},
  'v10':{calcium:80,iron:1,sodium:5,potassium:150,fibre:1,vitaminC:15},
  'v11':{calcium:90,iron:1,sodium:20,potassium:150,fibre:1,vitaminC:80},
  'v12':{calcium:40,iron:1,sodium:30,potassium:340,fibre:4,vitaminC:70},
  'v13':{calcium:40,iron:1,sodium:60,potassium:300,fibre:4,vitaminC:8},
  'v14':{calcium:80,iron:1,sodium:10,potassium:350,fibre:4,vitaminC:20},
  'v15':{calcium:20,iron:1,sodium:90,potassium:420,fibre:4,vitaminC:10},
  'v16':{calcium:40,iron:1,sodium:20,potassium:370,fibre:5,vitaminC:15},
  'v17':{calcium:50,iron:1,sodium:60,potassium:300,fibre:3,vitaminC:90},
  'v18':{calcium:40,iron:1,sodium:5,potassium:180,fibre:4,vitaminC:10},
  'v19':{calcium:30,iron:2,sodium:5,potassium:270,fibre:3,vitaminC:15},
  'v20':{calcium:40,iron:1,sodium:40,potassium:290,fibre:3,vitaminC:8},
  'v21':{calcium:2,iron:1,sodium:15,potassium:250,fibre:3,vitaminC:10},
  'v22':{calcium:0,iron:1,sodium:50,potassium:300,fibre:1,vitaminC:0},
  'v23':{calcium:120,iron:2,sodium:120,potassium:500,fibre:4,vitaminC:20},
  'v24':{calcium:20,iron:1,sodium:10,potassium:250,fibre:2,vitaminC:15},
  'v25':{calcium:40,iron:1,sodium:20,potassium:180,fibre:1,vitaminC:5},
  'v26':{calcium:60,iron:1,sodium:250,potassium:300,fibre:3,vitaminC:20},
  'v27':{calcium:40,iron:1,sodium:30,potassium:280,fibre:3,vitaminC:15},
  'v28':{calcium:40,iron:1,sodium:150,potassium:180,fibre:2,vitaminC:15},
  'v29':{calcium:40,iron:1,sodium:10,potassium:150,fibre:2,vitaminC:10},
  'v30':{calcium:80,iron:2,sodium:300,potassium:280,fibre:3,vitaminC:15},
  'v31':{calcium:50,iron:2,sodium:400,potassium:50,fibre:2,vitaminC:5},
  'v32':{calcium:30,iron:2,sodium:500,potassium:100,fibre:2,vitaminC:15},
  'v33':{calcium:20,iron:1,sodium:400,potassium:150,fibre:3,vitaminC:15},
  'v34':{calcium:2,iron:1,sodium:15,potassium:250,fibre:3,vitaminC:10},
  'c01':{calcium:30,iron:1,sodium:15,potassium:400,fibre:3,vitaminC:5},
  'c02':{calcium:20,iron:1,sodium:10,potassium:280,fibre:2,vitaminC:15},
  'c03':{calcium:20,iron:1,sodium:10,potassium:400,fibre:2,vitaminC:5},
  'c04':{calcium:10,iron:1,sodium:5,potassium:350,fibre:2,vitaminC:15},
  'v35':{calcium:25,iron:1,sodium:5,potassium:110,fibre:5,vitaminC:15},
  'c05':{calcium:30,iron:1,sodium:5,potassium:900,fibre:3,vitaminC:15},
  'c06':{calcium:40,iron:1,sodium:100,potassium:450,fibre:4,vitaminC:25},
  'c07':{calcium:10,iron:1,sodium:30,potassium:40,fibre:0,vitaminC:0},
  'c08':{calcium:10,iron:1,sodium:80,potassium:40,fibre:0,vitaminC:0},
  'c09':{calcium:40,iron:1,sodium:120,potassium:80,fibre:2,vitaminC:0},
  'c10':{calcium:20,iron:1,sodium:120,potassium:60,fibre:1,vitaminC:0},
  'c11':{calcium:40,iron:1,sodium:120,potassium:80,fibre:2,vitaminC:0},
  'c12':{calcium:20,iron:1,sodium:200,potassium:60,fibre:1,vitaminC:0},
  'c13':{calcium:20,iron:1,sodium:15,potassium:40,fibre:1,vitaminC:0},
  'c14':{calcium:20,iron:1,sodium:250,potassium:80,fibre:1,vitaminC:0},
  'c15':{calcium:40,iron:2,sodium:400,potassium:80,fibre:2,vitaminC:0},
  'c16':{calcium:10,iron:0,sodium:15,potassium:20,fibre:0,vitaminC:0},
  'c17':{calcium:10,iron:1,sodium:10,potassium:40,fibre:2,vitaminC:0},
  'p44':{calcium:30,iron:3,sodium:15,potassium:120,fibre:8,vitaminC:0},
  'p45':{calcium:25,iron:3,sodium:10,potassium:100,fibre:8,vitaminC:0},
  'c18':{calcium:20,iron:1,sodium:200,potassium:100,fibre:2,vitaminC:0},
  'c19':{calcium:10,iron:1,sodium:300,potassium:50,fibre:1,vitaminC:0},
  'c20':{calcium:20,iron:0,sodium:5,potassium:10,fibre:1,vitaminC:0},
  'c21':{calcium:15,iron:1,sodium:5,potassium:260,fibre:4,vitaminC:10},
  'c22':{calcium:15,iron:1,sodium:5,potassium:240,fibre:5,vitaminC:10},
  'c23':{calcium:60,iron:1,sodium:50,potassium:250,fibre:3,vitaminC:80},
  'c24':{calcium:40,iron:1,sodium:40,potassium:200,fibre:2,vitaminC:50},
  'c25':{calcium:50,iron:1,sodium:5,potassium:450,fibre:4,vitaminC:80},
  'c26':{calcium:15,iron:1,sodium:5,potassium:200,fibre:3,vitaminC:40},
  'c27':{calcium:10,iron:1,sodium:15,potassium:180,fibre:1,vitaminC:15},
  'c28':{calcium:15,iron:1,sodium:15,potassium:270,fibre:1,vitaminC:60},
  'c29':{calcium:15,iron:1,sodium:10,potassium:350,fibre:3,vitaminC:10},
  'c30':{calcium:5,iron:1,sodium:5,potassium:190,fibre:2,vitaminC:10},
  'c31':{calcium:15,iron:1,sodium:10,potassium:300,fibre:2,vitaminC:2},
  'c32':{calcium:20,iron:1,sodium:10,potassium:300,fibre:1,vitaminC:2},
  'c33':{calcium:15,iron:1,sodium:5,potassium:240,fibre:3,vitaminC:0},
  'c34':{calcium:15,iron:1,sodium:5,potassium:200,fibre:3,vitaminC:2},
  'p46':{calcium:100,iron:4,sodium:30,potassium:400,fibre:8,vitaminC:10},
  'c35':{calcium:10,iron:1,sodium:5,potassium:100,fibre:2,vitaminC:15},
  'c36':{calcium:3,iron:1,sodium:1,potassium:80,fibre:4,vitaminC:0},
  'c37':{calcium:10,iron:1,sodium:350,potassium:80,fibre:1,vitaminC:0},
  'f02':{calcium:20,iron:1,sodium:0,potassium:120,fibre:3,vitaminC:0},
  'f03':{calcium:10,iron:2,sodium:15,potassium:180,fibre:1,vitaminC:0},
  'f04':{calcium:30,iron:1,sodium:130,potassium:290,fibre:3,vitaminC:0},
  'f05':{calcium:50,iron:1,sodium:0,potassium:200,fibre:2,vitaminC:0},
  'f06':{calcium:30,iron:1,sodium:0,potassium:190,fibre:3,vitaminC:0},
  'f07':{calcium:5,iron:1,sodium:1,potassium:170,fibre:1,vitaminC:0},
  'f08':{calcium:40,iron:1,sodium:100,potassium:200,fibre:3,vitaminC:0},
  'f09':{calcium:35,iron:2,sodium:10,potassium:230,fibre:2,vitaminC:0},
  'f10':{calcium:20,iron:1,sodium:1,potassium:180,fibre:2,vitaminC:0},
  'f11':{calcium:60,iron:1,sodium:0,potassium:50,fibre:5,vitaminC:0},
  'f12':{calcium:20,iron:1,sodium:3,potassium:70,fibre:2,vitaminC:0},
  'f13':{calcium:15,iron:1,sodium:0,potassium:80,fibre:0,vitaminC:0},
  'f14':{calcium:10,iron:1,sodium:1,potassium:50,fibre:1,vitaminC:0},
  'f15':{calcium:10,iron:1,sodium:10,potassium:50,fibre:0,vitaminC:0},
  'f16':{calcium:20,iron:1,sodium:60,potassium:60,fibre:1,vitaminC:0},
  'f17':{calcium:60,iron:1,sodium:20,potassium:40,fibre:1,vitaminC:0},
  'f18':{calcium:60,iron:1,sodium:400,potassium:20,fibre:1,vitaminC:0},
  'f19':{calcium:0,iron:0,sodium:0,potassium:1,fibre:0,vitaminC:0},
  'f20':{calcium:80,iron:2,sodium:300,potassium:60,fibre:1,vitaminC:2},
  'f21':{calcium:0,iron:0,sodium:180,potassium:10,fibre:0,vitaminC:0},
  'f22':{calcium:30,iron:0,sodium:50,potassium:40,fibre:0,vitaminC:2},
  'f23':{calcium:30,iron:0,sodium:30,potassium:40,fibre:0,vitaminC:1},
  'f24':{calcium:10,iron:0,sodium:260,potassium:20,fibre:0,vitaminC:0},
  'v36':{calcium:40,iron:1,sodium:200,potassium:60,fibre:1,vitaminC:3},
  'v37':{calcium:10,iron:1,sodium:150,potassium:100,fibre:1,vitaminC:10},
  'f25':{calcium:30,iron:0,sodium:15,potassium:30,fibre:0,vitaminC:0},
  'v38':{calcium:20,iron:1,sodium:400,potassium:400,fibre:2,vitaminC:15},
  'f26':{calcium:10,iron:1,sodium:200,potassium:40,fibre:1,vitaminC:0},
  'f27':{calcium:20,iron:1,sodium:200,potassium:30,fibre:0,vitaminC:0},
  'f28':{calcium:10,iron:0,sodium:100,potassium:10,fibre:0,vitaminC:0},
  'f29':{calcium:5,iron:0,sodium:150,potassium:10,fibre:0,vitaminC:2},
  'v39':{calcium:20,iron:1,sodium:200,potassium:50,fibre:0,vitaminC:10},
  'f30':{calcium:20,iron:1,sodium:300,potassium:120,fibre:1,vitaminC:5},
  'f31':{calcium:10,iron:1,sodium:300,potassium:50,fibre:0,vitaminC:0},
  'f32':{calcium:10,iron:1,sodium:200,potassium:10,fibre:0,vitaminC:0},
  'v40':{calcium:30,iron:1,sodium:30,potassium:200,fibre:3,vitaminC:10},
  'f33':{calcium:10,iron:1,sodium:20,potassium:80,fibre:1,vitaminC:0},
};
if(typeof window!=='undefined'){window.INGREDIENT_RECIPES=INGREDIENT_RECIPES; window.INGREDIENT_MICROS=INGREDIENT_MICROS;}