/* ============================================================================
   INGREDIENT RECIPES  --  Basic food items categorized by food type
   ----------------------------------------------------------------------------
   156 items. Each has foodCats array: protein, carb, vegetable, fat-flavor, complete
   ============================================================================ */

const INGREDIENT_RECIPES = [
  {
    id:'p01', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'steak.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Steak',time:'15 min',servings:'1',why:'A classic high-protein meal that satisfies and keeps blood sugar stable — a tender, juicy steak with a caramelized crust is one of the most nutritious single-ingredient meals you can make.',ingredients:['Beef steak (sirloin, ribeye, or New York strip) 6 to 8 oz (170 to 225 g), 1 to 1.5 inches thick','Sea salt 3/4 tsp (kosher or flaky)','Freshly ground black pepper 1/2 tsp','Olive oil or avocado oil 1 tbsp','Garlic clove 1, smashed with the side of a knife','Fresh rosemary or thyme 1 sprig','Butter 1 tbsp (optional, for basting)'],steps:['Remove the steak from the refrigerator 30 to 45 minutes before cooking and let it sit at room temperature — cold meat seizes up in a hot pan and cooks unevenly.','Pat the steak completely dry on all sides with paper towels. Moisture is the enemy of a good crust.','Season generously: sprinkle salt and pepper on all sides, pressing it into the surface with your fingers. Use more salt than you think you need — some will fall off in the pan.','Heat a cast-iron skillet over high heat for 4 to 5 minutes until it is smoking hot. Add 1 tbsp oil and swirl to coat.','Place the steak in the center of the pan and press down gently with tongs for 3 seconds to ensure full contact. Do not move it.','Sear for 3 to 4 minutes for a 1-inch steak (4 to 5 minutes for 1.5 inches) until a deep brown crust forms on the bottom. Do not peek or lift it early.','Flip the steak. Add the smashed garlic clove, rosemary sprig, and butter to the pan.','Tilt the pan slightly and use a spoon to baste the steak with the foaming butter and aromatics continuously for 2 to 3 minutes.','Check internal temperature with a meat thermometer: 120 to 125F for rare, 130 to 135F for medium-rare, 140F for medium.','Transfer the steak to a cutting board and let it rest for 5 to 8 minutes — this is critical. The juices redistribute; cutting early lets them run out.','Slice against the grain into 1/4-inch strips and serve immediately.'],notes:'The single most important step is resting — a steak cut immediately loses up to 30% of its juices. Use a thermometer: 125F rare, 135F medium-rare, 145F medium. For a thicker (2-inch) steak, finish in a 400F oven for 4 to 6 minutes after searing both sides.'},
    zh:{name:'牛排',time:'15 分钟',servings:'1 份',why:'经典高蛋白主菜，满足感强且稳定血糖——焦香外壳、软嫩多汁的牛排是最营养的单一食材餐之一。',ingredients:['牛排（西冷、肋眼或纽约客）170 至 225 克，厚 2.5 至 4 厘米','海盐 3/4 茶匙（粗盐或片状盐）','现磨黑胡椒 半茶匙','橄榄油或牛油果油 1 汤匙','蒜 1 瓣，刀面拍碎','新鲜迷迭香或百里香 1 枝','黄油 1 汤匙（可选，用于淋浇）'],steps:['烹饪前 30 至 45 分钟从冰箱取出回温——冷肉入热锅会收缩，受热不均。','用厨房纸将牛排各面彻底吸干——水分是焦壳的大敌。','大量调味：各面撒盐和胡椒，用手指按压使其附着。盐要比预期多——部分会脱落在锅中。','铸铁锅大火加热 4 至 5 分钟至冒烟，加 1 汤匙油转匀。','牛排放入锅中，用夹子轻压 3 秒确保全面接触。不要移动。','煎 3 至 4 分钟（2.5 厘米厚）或 4 至 5 分钟（4 厘米厚）至底部形成深棕色焦壳。不要提前翻看。','翻面，加入拍碎的蒜、迷迭香和黄油。','倾斜锅身，用勺子持续将起泡黄油和香料淋浇牛排 2 至 3 分钟。','用温度计测内部温度：120 至 125F 一分熟，130 至 135F 三分熟，140F 五分熟。','移至砧板静置 5 至 8 分钟——此步骤至关重要。肉汁重新分布；过早切割会让肉汁流失。','逆纹切 0.5 厘米条状，立即食用。'],notes:'最关键的步骤是静置——立即切开会流失多达 30% 的肉汁。温度计：125F 一分熟，135F 三分熟，145F 五分熟。2 英寸厚牛排两面煎后放 400F 烤箱再烤 4 至 6 分钟。'},
    macros:{protein:{g:26,pct:44},fat:{g:15,pct:56},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p02', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'ground-beef.jpg', emoji:'🥩', foodCats:["protein"],
    en:{name:'Ground Beef',time:'10 min',servings:'1',why:'A versatile protein base for many dishes — quick to cook and easy to season.',ingredients:['Ground beef 4 oz (110 g, 85% lean)','Olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Garlic powder 1/4 tsp (optional)'],steps:['Heat olive oil in a skillet over medium-high heat.','Add the ground beef, breaking it apart with a wooden spoon into small crumbles.','Cook for 5-7 minutes, stirring occasionally, until fully browned with no pink remaining.','Drain excess fat if desired. Season with salt, pepper and garlic powder.','Use immediately in tacos, bowls, pasta sauces or eat on its own.'],notes:'For meal prep, cook a larger batch (1 lb) and portion into containers. Keeps 4 days refrigerated.'},
    zh:{name:'牛肉末',time:'10 分钟',servings:'1 份',why:'百搭蛋白基底——快速烹饪、易于调味。',ingredients:['牛肉末 110 克（85% 瘦肉）','橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','蒜粉 1/4 茶匙（可选）'],steps:['平底锅中大火加橄榄油。','放入牛肉末，用木铲拨散成小粒。','炒 5-7 分钟至完全变色无粉红。','按需沥油，加盐、胡椒和蒜粉调味。','立即用于塔可、饭碗、意面酱或单独食用。'],notes:'备餐可一次炒 1 磅，分装保存。冷藏 4 天。'},
    macros:{protein:{g:24,pct:37},fat:{g:18,pct:63},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p03', type:'snack', carb:'low', tags:[], contains:["beef"], focus:[],
    img:'beef-burger-patty.jpg', emoji:'🍔', foodCats:["protein", "complete"],
    en:{name:'Beef Burger Patty',time:'15 min',servings:'1',why:'A juicy handheld protein source that is easy to customize and satisfying.',ingredients:['Ground beef 4 oz (110 g)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Worcestershire sauce 1/2 tsp (optional)','Olive oil 1 tsp'],steps:['Gently mix the ground beef with salt, pepper and Worcestershire sauce — do not overwork the meat.','Form into a patty about 3/4 inch thick, slightly wider than the bun. Press a dimple in the center to prevent puffing.','Heat a skillet or grill over medium-high heat. Brush with olive oil.','Cook for 4-5 minutes per side until a crust forms and internal temperature reaches 160F.','Rest 2 minutes before serving.'],notes:'Do not press the patty while cooking — it squeezes out the juices. The center dimple keeps it flat.'},
    zh:{name:'牛肉饼',time:'15 分钟',servings:'1 个',why:'多汁的手持蛋白来源，易于定制，满足感强。',ingredients:['牛肉末 110 克','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','伍斯特酱 半茶匙（可选）','橄榄油 1 茶匙'],steps:['轻柔混合牛肉末、盐、胡椒和伍斯特酱——不要过度揉捏。','压成约 2 厘米厚的饼，比面包圈略宽。中心按一个浅凹防止鼓起。','平底锅或烤架中大火，刷橄榄油。','每面煎 4-5 分钟至形成焦壳，内部温度达 160F。','静置 2 分钟后食用。'],notes:'煎时不要压饼——会挤出肉汁。中心凹痕可保持平整。'},
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
    en:{name:'Slow-Cooked Shredded Beef',time:'8 hr (hands-off 15 min)',servings:'6',why:'Tender, pull-apart beef that is perfect for meal prep and freezes beautifully — one pot yields six satisfying servings for tacos, bowls, sandwiches or salads.',ingredients:['Beef chuck roast 2 to 2.5 lb (900 to 1100 g), trimmed of excess fat','Yellow onion 1 medium, roughly chopped into 1-inch pieces','Garlic 4 cloves, minced or pressed','Beef broth or stock 2 cups (480 ml), low-sodium','Tomato paste 2 tbsp','Worcestershire sauce 1 tbsp','Soy sauce 1 tbsp','Smoked paprika 1 tsp','Sea salt 1 tsp','Black pepper 1/2 tsp','Bay leaf 1','Olive oil 1 tbsp (for searing)'],steps:['Pat the chuck roast dry with paper towels and cut it into 3 to 4 large chunks (about 3 inches each) — smaller pieces cook more evenly and shred easier.','Season all sides of the beef chunks with salt, pepper, and smoked paprika, pressing the spices into the meat.','Heat 1 tbsp olive oil in a large skillet or Dutch oven over medium-high heat until shimmering.','Sear the beef chunks in batches (do not crowd the pan) for 2 to 3 minutes per side until a deep brown crust forms on all sides. Transfer to the slow cooker.','In the same pan (do not wash it — those browned bits are flavour), reduce heat to medium. Add the chopped onion and cook for 3 minutes, stirring occasionally. Add the minced garlic and cook for 1 more minute.','Stir in the tomato paste and cook for 1 minute, stirring constantly — this caramelizes the paste and removes the raw flavour.','Pour in the beef broth, Worcestershire sauce, and soy sauce. Scrape the bottom of the pan with a wooden spoon to deglaze and release all the browned bits.','Bring the liquid to a simmer, then pour the entire mixture over the beef in the slow cooker. Add the bay leaf.','Cook on LOW for 7 to 8 hours or on HIGH for 4 to 5 hours, until the beef falls apart when pressed with a fork.','Remove and discard the bay leaf. Use two forks to shred the beef directly in the slow cooker, mixing it with the cooking liquid.','Taste and adjust salt if needed. The shredded beef will absorb the liquid as it sits.'],notes:'Freezes up to 3 months in portion-sized containers. For richer flavour, add 1 tbsp balsamic vinegar or a splash of red wine during deglazing. The cooking liquid can be strained and reduced into a concentrated au jus for dipping sandwiches.'},
    zh:{name:'慢炖手撕牛肉',time:'8 小时（实际操作 15 分钟）',servings:'6 份',why:'软嫩拉丝牛肉，适合备餐且冷冻效果好——一锅出六份，用于塔可、饭碗、三明治或沙拉。',ingredients:['牛肩肉 900 至 1100 克，修去多余脂肪','黄洋葱 1 个，切 2.5 厘米块','蒜 4 瓣，切末或压泥','低钠牛肉高汤 480 毫升','番茄膏 2 汤匙','伍斯特酱 1 汤匙','酱油 1 汤匙','烟熏辣椒粉 1 茶匙','海盐 1 茶匙','黑胡椒 半茶匙','月桂叶 1 片','橄榄油 1 汤匙（煎用）'],steps:['牛肩肉吸干水分，切成 3 至 4 大块（每块约 7 厘米）——小块受热更均匀且更易撕丝。','各面撒盐、胡椒和烟熏辣椒粉，按压使其附着。','大平底锅或荷兰锅中大火加 1 汤匙橄榄油至微闪。','分批煎牛肉块（不要挤锅），每面 2 至 3 分钟至各面深棕焦壳。移至慢炖锅。','原锅不洗（锅底焦物是风味），转中火，加洋葱炒 3 分钟，偶尔翻动。加蒜末炒 1 分钟。','加番茄膏炒 1 分钟不停搅——焦糖化去除生味。','倒入牛肉高汤、伍斯特酱和酱油，用木铲刮起锅底焦物。','煮沸后连汁倒入慢炖锅牛肉上，加月桂叶。','低火炖 7 至 8 小时或高火 4 至 5 小时至叉压即散。','取出丢弃月桂叶，用两把叉子在慢炖锅中直接撕碎牛肉，与汤汁拌匀。','试味按需调盐。撕碎牛肉静置时会吸收汤汁。'],notes:'分装冷冻可存 3 个月。更浓郁可在 deglaze 时加 1 汤匙香醋或少许红酒。汤汁可过滤收浓成蘸三明治的浓缩肉汁。'},
    macros:{protein:{g:28,pct:48},fat:{g:12,pct:47},netCarbs:{g:3,pct:5}}
  },
  {
    id:'p06', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'pork-chops.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Pork Chops',time:'20 min',servings:'1',why:'A quick weeknight protein that pairs well with roasted vegetables — a properly seared pork chop is juicy inside with a golden, flavourful crust.',ingredients:['Pork chops 6 to 8 oz (170 to 225 g) each, bone-in, 3/4 to 1 inch thick','Sea salt 1/2 tsp (kosoh salt)','Black pepper 1/4 tsp, freshly ground','Olive oil 1 tbsp','Garlic clove 1, smashed','Fresh thyme 2 to 3 sprigs (or 1/2 tsp dried)','Butter 1 tbsp (optional, for basting)','Water or chicken broth 2 tbsp (for deglazing, optional)'],steps:['Remove the pork chops from the refrigerator 20 minutes before cooking and let them sit at room temperature.','Pat both sides completely dry with paper towels — a dry surface is essential for a good sear.','Season both sides generously with salt and pepper, pressing it into the meat with your fingers. If you have time, salt the chops 45 minutes ahead — the salt draws out moisture then reabsorbs it, seasoning the meat deeply.','Heat 1 tbsp olive oil in a heavy skillet (cast iron is ideal) over medium-high heat until the oil shimmers and just begins to smoke.','Place the chops in the pan and press down gently with tongs for 3 seconds to ensure full contact. Do not move them.','Sear for 4 to 5 minutes on the first side until a deep golden-brown crust forms. The chop should release easily from the pan when it is ready to flip — if it sticks, it needs another minute.','Flip the chops. Add the smashed garlic clove, thyme sprigs, and butter to the pan.','Tilt the pan slightly and spoon the foaming butter over the chops continuously for 1 to 2 minutes.','Continue cooking for 3 to 4 more minutes until the internal temperature in the thickest part reads 145F (63C) on a meat thermometer inserted horizontally into the center.','Transfer the chops to a plate and tent loosely with foil. Let rest for 3 to 5 minutes — the internal temperature will rise another 5 degrees.','Optional: pour off excess fat, add 2 tbsp water or broth to the pan, and scrape up the browned bits to make a quick pan sauce. Spoon over the chops.'],notes:'Brining in 4 cups water + 2 tbsp salt for 30 minutes makes the chops extra juicy and is worth the effort. Do not overcook — 145F is safe and still slightly pink in the center, which is ideal for juiciness. Bone-in chops have more flavor than boneless.'},
    zh:{name:'猪排',time:'20 分钟',servings:'1 份',why:'快速工作日晚餐蛋白，搭配烤蔬菜极佳——煎好的猪排内里多汁，外皮金黄香浓。',ingredients:['带骨猪排 170 至 225 克，厚 2 至 2.5 厘米','海盐 半茶匙','现磨黑胡椒 1/4 茶匙','橄榄油 1 汤匙','蒜 1 瓣，拍碎','新鲜百里香 2 至 3 枝（或半茶匙干百里香）','黄油 1 汤匙（可选，淋浇用）','水或鸡汤 2 汤匙（可选，deg laze 用）'],steps:['猪排提前 20 分钟从冰箱取出回温。','两面用厨房纸彻底吸干——干燥的表面是煎制焦壳的关键。','两面大量撒盐和胡椒，用手指按压附着。如有时间，提前 45 分钟撒盐——盐先吸出水分再回吸，深层入味。','厚底平底锅（铸铁最佳）中大火加 1 汤匙橄榄油至微闪、刚冒烟。','放入猪排，用夹子轻压 3 秒确保全面接触。不要移动。','先煎一面 4 至 5 分钟至深金黄焦壳。猪排能轻松脱锅时才该翻——如粘锅则再等 1 分钟。','翻面，加入拍碎的蒜、百里香和黄油。','倾斜锅身，持续用勺子将起泡黄油淋浇猪排 1 至 2 分钟。','继续煎 3 至 4 分钟至最厚处水平插入的温度计读数 145F（63C）。','装盘松盖锡纸，静置 3 至 5 分钟——内部温度会再升 5 度。','可选：倒出多余油，加 2 汤匙水或高汤刮起锅底焦物做快酱，浇在猪排上。'],notes:'4 杯水加 2 汤匙盐浸泡 30 分钟可使猪排更多汁，值得花时间。不要过熟——145F 安全且中心微粉，是最佳多汁状态。带骨猪排比去骨更有风味。'},
    macros:{protein:{g:26,pct:45},fat:{g:14,pct:55},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p07', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'pork-sausage.jpg', emoji:'🌭', foodCats:["protein", "fat-flavor"],
    en:{name:'Pork Sausage',time:'10 min',servings:'2 links',why:'A savoury, high-protein convenience food — pre-seasoned and quick to pan-fry for a satisfying meal.',ingredients:['Pork sausage links 2 (about 3 oz / 85 g each)','Water 2 tbsp','(Optional) olive oil 1 tsp'],steps:['Prick each sausage a few times with a fork to prevent bursting.','Heat a skillet over medium heat. Add a tsp of oil or water and the sausage links.','Cook for 4-5 minutes per side, turning occasionally, until browned on all sides and internal temperature reaches 160F (71C).','If the outside browns too quickly, add 2 tbsp water, cover, and steam for 3 minutes to cook through.'],notes:'Pan-frying gives the best crust. For a healthier option, bake at 400F for 20 minutes. Pre-cooked sausages only need 2-3 minutes per side.'},
    zh:{name:'香肠',time:'10 分钟',servings:'2 根',why:'方便的高蛋白预制食品——已调味，快速煎制即可享用。',ingredients:['猪肉香肠 2 根（每根约 85 克）','清水 2 汤匙','（可选）橄榄油 1 茶匙'],steps:['用叉子在香肠上戳几个小孔防爆裂。','平底锅中大火，加少许油或水和香肠。','每面煎 4-5 分钟，不时翻面至各面焦黄、内部温度达 160F。','若外皮焦太快，加 2 汤匙水盖盖蒸 3 分钟至熟透。'],notes:'煎制口感最佳。更健康可 400F 烤 20 分钟。熟香肠每面煎 2-3 分钟即可。'},
    macros:{protein:{g:18,pct:26},fat:{g:22,pct:72},netCarbs:{g:1,pct:1}}
  },
  {
    id:'p08', type:'snack', carb:'low', tags:[], contains:["pork"], focus:[],
    img:'pork-ribs.jpg', emoji:'🥩', foodCats:["protein", "complete"],
    en:{name:'Pork Ribs',time:'3 hr (hands-off 15 min)',servings:'4',why:'Fall-off-the-bone tender ribs with a caramelized crust — the low-and-slow method guarantees succulent meat every time, perfect for weekend cooking.',ingredients:['Pork ribs (baby back or St. Louis style) 1 full rack, about 2 to 2.5 lb (900 to 1100 g)','Dry rub: smoked paprika 1 tbsp, brown sugar 1 tbsp, sea salt 1 tsp, black pepper 1 tsp, garlic powder 1 tsp, onion powder 1 tsp, ground cumin 1/2 tsp','Apple cider vinegar 2 tbsp','BBQ sauce 1/3 cup (80 ml), your favourite brand','Water 1/4 cup (for the foil packet)','Olive oil or cooking spray (for the rack)'],steps:['Remove the thin membrane from the back of the rack: slide a butter knife under one edge of the membrane at a bone, lift it up, grab it with a paper towel for grip, and peel it off in one sheet. This step is essential for tender, edible ribs.','Pat the rack dry with paper towels on both sides.','Mix all the dry rub ingredients together in a small bowl: smoked paprika, brown sugar, salt, pepper, garlic powder, onion powder, and cumin.','Rub the mixture generously over both sides of the rack, pressing it into the meat with your fingers. Every inch should be coated.','Preheat the oven to 300F (150C). Line a baking sheet with heavy-duty foil.','Tear off two long sheets of heavy-duty foil. Lay one down, place the rack meat-side up on it, and pour 1/4 cup water and 2 tbsp apple cider vinegar into the bottom of the foil around the ribs (not on top of the rub).','Wrap the foil tightly around the rack, sealing all edges. Add a second layer of foil on top to ensure no steam escapes.','Place the foil packet on the baking sheet and bake for 2 to 2.5 hours. The ribs are ready when a fork slides easily into the meat between the bones.','Remove from the oven and carefully open the foil (watch out for hot steam). Transfer the ribs to a clean baking sheet lined with fresh foil.','Brush BBQ sauce evenly over the top of the rack using a pastry brush.','Turn the oven to broil (high). Broil the ribs for 4 to 6 minutes, watching closely, until the BBQ sauce bubbles, caramelizes, and gets sticky with charred edges.','Let rest for 5 minutes, then cut between the bones into individual ribs with a sharp knife. Serve with extra BBQ sauce on the side.'],notes:'For a smoky flavour without a smoker, add 1 tsp liquid smoke to the dry rub. Leftover ribs reheat well wrapped in foil at 300F for 15 minutes. To freeze: wrap cooked ribs tightly in foil and freeze for up to 2 months. Reheat from frozen at 300F for 30 minutes.'},
    zh:{name:'排骨',time:'3 小时（实际操作 15 分钟）',servings:'4 份',why:'骨肉分离的软嫩排骨配焦糖外皮——低温慢烤保证每次都鲜嫩多汁，周末烹饪首选。',ingredients:['猪排骨（背排或圣路易斯式）1 整排约 900 至 1100 克','干料：烟熏辣椒粉 1 汤匙、红糖 1 汤匙、海盐 1 茶匙、黑胡椒 1 茶匙、蒜粉 1 茶匙、洋葱粉 1 茶匙、孜然粉 半茶匙','苹果醋 2 汤匙','烧烤酱 80 毫升，喜欢的品牌','清水 60 毫升（锡纸包用）','橄榄油或 cooking spray（烤架用）'],steps:['撕去排骨背面的薄筋膜：用黄油刀在骨头处插入膜下边缘，挑起，用厨房纸抓住（增加摩擦力），整片撕下。此步骤是排骨软嫩可食的关键。','两面用厨房纸吸干。','小碗混合所有干料：烟熏辣椒粉、红糖、盐、胡椒、蒜粉、洋葱粉和孜然。','均匀涂抹排骨两面，用手指按压附着。每一寸都要覆盖。','烤箱预热 300F（150C），烤盘铺加厚锡纸。','撕两张长加厚锡纸。一张放底，排骨肉面朝上放上面，将 60 毫升水和 2 汤匙苹果醋倒在锡纸底部排骨周围（不要浇在干料上）。','锡纸紧紧包住排骨，密封所有边缘。上面再加一层锡纸确保蒸汽不漏。','放在烤盘上烤 2 至 2.5 小时。叉子能轻松插入骨间肉中即熟。','取出小心打开锡纸（注意热蒸汽）。排骨移至铺新锡纸的烤盘上。','用糕饼刷将烧烤酱均匀刷在排骨上面。','烤箱转 broil（大火烤）。烤 4 至 6 分钟，注意观察，至烧烤酱冒泡、焦糖化、边缘微焦粘稠。','静置 5 分钟，用利刀在骨间切开成条。配额外烧烤酱上桌。'],notes:'无烟熏炉可加 1 茶匙液体烟熏液到干料中。剩排骨锡纸包裹 300F 烤 15 分钟复热。冷冻：熟排骨紧包锡纸冷冻可存 2 个月。从冷冻 300F 烤 30 分钟。'},
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
    en:{name:'Bacon',time:'8 min',servings:'3 strips',why:'A crispy, savoury favourite — bacon adds rich flavour and satisfies hunger with its high fat and protein content.',ingredients:['Bacon strips 3 (about 1 oz / 30 g each)','(Optional) fresh ground black pepper'],steps:['Place bacon strips in a cold skillet — starting cold renders the fat gradually for crispier results.','Turn heat to medium and cook for 3-4 minutes per side, adjusting heat if splattering excessively.','When the bacon is golden and crispy to your liking, transfer to paper towels to drain.','Sprinkle with black pepper if desired and serve immediately.'],notes:'For less mess, bake at 400F for 15-18 minutes on a foil-lined sheet. Save the bacon fat for cooking eggs or vegetables.'},
    zh:{name:'培根',time:'8 分钟',servings:'3 片',why:'香脆可口的经典——培根富含脂肪和蛋白质，风味浓郁且饱腹。',ingredients:['培根 3 片（每片约 30 克）','（可选）现磨黑胡椒'],steps:['将培根放入冷锅——冷锅起步可逐步出油，口感更脆。','中火每面煎 3-4 分钟，油溅过大时调小火。','煎至金黄酥脆后移至厨房纸沥油。','按需撒黑胡椒，立即食用。'],notes:'少油烟可垫锡纸 400F 烤 15-18 分钟。保留培根油用于煎蛋或炒菜。'},
    macros:{protein:{g:12,pct:11},fat:{g:42,pct:89},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p11', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'chicken-breast.jpg', emoji:'🍗', foodCats:["protein"],
    en:{name:'Chicken Breast',time:'25 min',servings:'1',why:'A lean protein staple that is versatile and meal-prep friendly — a properly cooked chicken breast is juicy, not dry, with a golden exterior and tender interior.',ingredients:['Chicken breast 6 to 8 oz (170 to 225 g), boneless, skinless, trimmed','Sea salt 1/2 tsp','Black pepper 1/4 tsp, freshly ground','Olive oil 1 tbsp','Garlic powder 1/4 tsp','Paprika 1/4 tsp (sweet or smoked)','Onion powder 1/4 tsp','Chicken broth or water 1 tbsp (for deglazing, optional)'],steps:['Place the chicken breast on a cutting board. If one end is much thicker than the other, place it between two sheets of plastic wrap and pound the thick end gently with a meat mallet or rolling pin until the breast is an even 3/4-inch thickness throughout. This ensures even cooking.','Pat the chicken completely dry with paper towels on both sides.','In a small bowl, mix together the salt, pepper, garlic powder, paprika, and onion powder.','Sprinkle the seasoning blend on both sides of the chicken, rubbing it in with your fingers to coat evenly.','Heat 1 tbsp olive oil in a skillet (cast iron or stainless steel works best) over medium-high heat until the oil shimmers.','Place the chicken in the pan and press down gently with a spatula for 3 seconds to ensure full contact. Do not move it.','Cook for 6 to 7 minutes on the first side without disturbing. The chicken should develop a golden-brown crust and release easily from the pan when ready to flip.','Flip the chicken and cook for 6 to 7 more minutes. Check the internal temperature with a meat thermometer inserted into the thickest part — it should read 165F (74C).','If the outside is browning too fast but the inside is not done, reduce heat to medium, add 1 tbsp broth or water, cover the pan with a lid, and steam for 2 to 3 minutes until the temperature is reached.','Transfer to a cutting board and let rest for 5 minutes before slicing — this lets the juices redistribute and keeps the meat moist.','Slice against the grain for the most tender texture.'],notes:'Alternatively, bake at 375F (190C) for 20 to 25 minutes on a parchment-lined sheet. For meal prep, cook 3 to 4 breasts at once and store in containers for up to 4 days refrigerated. A meat thermometer is the single best investment for juicy chicken — visual cues are unreliable.'},
    zh:{name:'鸡胸肉',time:'25 分钟',servings:'1 份',why:'精瘦蛋白主食，百搭且适合备餐——煎好的鸡胸肉多汁不柴，外金黄内软嫩。',ingredients:['去骨去皮鸡胸肉 170 至 225 克，修整','海盐 半茶匙','现磨黑胡椒 1/4 茶匙','橄榄油 1 汤匙','蒜粉 1/4 茶匙','辣椒粉 1/4 茶匙（甜味或烟熏）','洋葱粉 1/4 茶匙','鸡汤或水 1 汤匙（可选，deg laze 用）'],steps:['鸡胸肉放砧板。如一端明显更厚，夹在两张保鲜膜间，用肉锤或擀面杖轻敲厚端至整体均匀 2 厘米厚——确保受热均匀。','两面用厨房纸彻底吸干。','小碗混合盐、胡椒、蒜粉、辣椒粉和洋葱粉。','两面撒调味料，用手指搓匀附着。','平底锅（铸铁或不锈钢最佳）中大火加 1 汤匙橄榄油至微闪。','鸡胸入锅，用铲轻压 3 秒确保全面接触。不要移动。','不翻动煎 6 至 7 分钟。鸡胸应形成金黄焦壳且能轻松脱锅时才翻。','翻面再煎 6 至 7 分钟。在最厚处插入温度计——应读 165F（74C）。','如外皮焦太快但内部未熟，转小火，加 1 汤匙鸡汤或水，盖盖蒸 2 至 3 分钟至达标。','移至砧板静置 5 分钟后切片——让肉汁重新分布保持湿润。','逆纹切片口感最嫩。'],notes:'也可 375F（190C）铺烘焙纸烤 20 至 25 分钟。备餐可一次煎 3 至 4 块，分装冷藏 4 天。温度计是多汁鸡胸的最佳投资——视觉判断不可靠。'},
    macros:{protein:{g:31,pct:78},fat:{g:4,pct:22},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p12', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'chicken-thighs.jpg', emoji:'🍗', foodCats:["protein", "complete"],
    en:{name:'Chicken Thighs',time:'25 min',servings:'1',why:'Juicy and flavourful with crispy skin — more forgiving than breast meat, chicken thighs stay moist even if slightly overcooked, making them ideal for beginners.',ingredients:['Chicken thighs 6 to 8 oz (170 to 225 g) each, bone-in, skin-on','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tsp (just to coat the pan)','Garlic clove 1, smashed','Fresh rosemary 1 sprig or thyme 2 sprigs (or 1/2 tsp dried Italian herbs)','Butter 1 tbsp (optional, for basting)','Lemon wedge 1 (optional, for serving)'],steps:['Remove the chicken thighs from the refrigerator 20 minutes before cooking and let them sit at room temperature.','Pat the thighs completely dry with paper towels on all sides, especially the skin — moisture on the skin prevents it from getting crispy.','Season both sides generously with salt and pepper, making sure to get seasoning under the skin as well: gently loosen the skin from the meat with your fingers and sprinkle salt directly on the flesh beneath.','Heat 1 tsp olive oil in a skillet (cast iron is ideal) over medium heat. Place the thighs skin-side down in the pan.','Cook for 8 to 10 minutes on the skin side, pressing down occasionally with a spatula to ensure even contact. The skin should become deeply golden brown and crispy. If the skin is browning too fast, reduce the heat slightly.','Flip the thighs. Add the smashed garlic clove, rosemary sprig, and butter to the pan.','Tilt the pan and spoon the foaming butter and aromatics over the thighs continuously for 1 to 2 minutes.','Continue cooking for 6 to 8 more minutes until the internal temperature in the thickest part (without touching the bone) reads 165F (74C) on a meat thermometer.','If the skin needs more crisping, place the pan under the broiler for 2 to 3 minutes, watching closely.','Transfer to a plate and rest for 3 minutes. Squeeze lemon over the top if desired and serve.'],notes:'Starting with a cold or medium pan (not high heat) renders more fat from the skin gradually, producing crispier results. Boneless, skinless thighs cook in about 12 minutes total (6 minutes per side) over medium-high heat. Chicken thighs are very forgiving — they remain juicy even at 175F.'},
    zh:{name:'鸡腿肉',time:'25 分钟',servings:'1 份',why:'多汁美味带脆皮——比鸡胸更不易过老，即使略微过熟也保持湿润，适合新手。',ingredients:['带骨带皮鸡腿肉 170 至 225 克','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 茶匙（仅润锅）','蒜 1 瓣，拍碎','新鲜迷迭香 1 枝或百里香 2 枝（或半茶匙干意式香草）','黄油 1 汤匙（可选，淋浇用）','柠檬角 1 个（可选，食用时挤汁）'],steps:['鸡腿提前 20 分钟从冰箱取出回温。','各面用厨房纸彻底吸干，尤其是鸡皮——皮上水分会阻碍酥脆。','两面大量撒盐和胡椒，也要在皮下调味：用手指轻掀鸡皮与肉分离，直接在皮下肉上撒盐。','平底锅（铸铁最佳）中火加 1 茶匙橄榄油。鸡腿皮朝下放入锅中。','皮面煎 8 至 10 分钟，偶尔用铲轻压确保均匀接触。鸡皮应变深金黄酥脆。如焦太快可略调小火。','翻面，加入拍碎的蒜、迷迭香和黄油。','倾斜锅身，持续用勺子将起泡黄油和香料淋浇鸡腿 1 至 2 分钟。','继续煎 6 至 8 分钟至最厚处（不触骨）温度计读 165F（74C）。','如皮需更脆，将锅放入烤箱 broil 2 至 3 分钟，注意观察。','装盘静置 3 分钟。按需挤柠檬汁食用。'],notes:'冷锅或中火起步（非大火）可逐步逼出皮脂，更酥脆。去骨去皮鸡腿约 12 分钟可熟（每面 6 分钟）中大火。鸡腿非常宽容——即使 175F 仍多汁。'},
    macros:{protein:{g:26,pct:44},fat:{g:15,pct:56},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p13', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'ground-chicken.jpg', emoji:'🍗', foodCats:["protein"],
    en:{name:'Ground Chicken',time:'10 min',servings:'1',why:'A lighter alternative to ground beef that absorbs flavors well.',ingredients:['Ground chicken 4 oz (110 g)','Olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Garlic powder 1/4 tsp','Soy sauce 1 tsp (optional)'],steps:['Heat olive oil in a skillet over medium-high heat.','Add the ground chicken and break apart with a wooden spoon into small pieces.','Cook for 5-7 minutes, stirring frequently, until fully cooked through with no pink.','Season with salt, pepper, garlic powder and soy sauce.','Drain any excess liquid and use immediately.'],notes:'Ground chicken is leaner than beef — do not overcook or it becomes dry. Great in lettuce wraps, stir-fries and bowls.'},
    zh:{name:'鸡肉末',time:'10 分钟',servings:'1 份',why:'比牛肉末更清淡，容易吸收调味。',ingredients:['鸡肉末 110 克','橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','蒜粉 1/4 茶匙','酱油 1 茶匙（可选）'],steps:['平底锅中大火加橄榄油。','放入鸡肉末，木铲拨散成小粒。','炒 5-7 分钟至完全变色无粉红。','加盐、胡椒、蒜粉和酱油调味。','沥出多余液体后立即使用。'],notes:'鸡肉末比牛肉末瘦——不要过熟否则会干。适合生菜包、炒菜和饭碗。'},
    macros:{protein:{g:26,pct:59},fat:{g:8,pct:41},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p14', type:'snack', carb:'low', tags:[], contains:["chicken"], focus:[],
    img:'chicken-wings.jpg', emoji:'🍗', foodCats:["protein", "complete"],
    en:{name:'Chicken Wings',time:'35 min',servings:'4 wings',why:'Crispy-skinned wings with juicy meat — a crowd-pleaser that works as a main or snack.',ingredients:['Chicken wings 4 (about 1 lb / 450 g)','Baking powder 1 tsp','Sea salt 1 tsp','Black pepper 1/2 tsp','Garlic powder 1/2 tsp','Paprika 1/2 tsp'],steps:['Pat the wings completely dry with paper towels — dry skin is essential for crispiness.','Toss wings with baking powder, salt, pepper, garlic powder and paprika in a bowl until evenly coated.','Arrange wings on a wire rack set over a baking sheet, leaving space between each.','Bake at 425F (220C) for 30-35 minutes, flipping once halfway, until skin is golden and crispy.','Rest 2 minutes before serving. Toss with sauce if desired.'],notes:'Baking powder (not baking soda) is the secret to crispy oven wings. For extra crunch, refrigerate the coated wings uncovered for 1 hour before baking.'},
    zh:{name:'鸡翅',time:'35 分钟',servings:'4 只',why:'皮脆肉嫩的鸡翅——可作主菜或小吃，人人喜爱。',ingredients:['鸡翅 4 只（约 450 克）','泡打粉 1 茶匙','海盐 1 茶匙','黑胡椒 半茶匙','蒜粉 半茶匙','辣椒粉 半茶匙'],steps:['用厨房纸将鸡翅彻底吸干——干燥的表皮是酥脆的关键。','碗中用泡打粉、盐、胡椒、蒜粉和辣椒粉拌匀鸡翅。','将鸡翅放在烤架上网架，留间距，下接烤盘。','425F（220C）烤 30-35 分钟，中途翻面一次，至皮金黄酥脆。','静置 2 分钟后食用。可按需拌酱。'],notes:'泡打粉（非小苏打）是烤箱鸡翅酥脆的秘诀。涂层后不盖冷藏 1 小时更脆。'},
    macros:{protein:{g:22,pct:35},fat:{g:18,pct:65},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p15', type:'snack', carb:'low', tags:[], contains:["turkey"], focus:[],
    img:'ground-turkey.jpg', emoji:'🦃', foodCats:["protein"],
    en:{name:'Ground Turkey',time:'10 min',servings:'1',why:'A leaner alternative to ground beef — quick to cook and versatile for bowls, tacos or pasta sauces.',ingredients:['Ground turkey 4 oz (110 g, 93% lean)','Olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Garlic powder 1/4 tsp','Onion powder 1/4 tsp'],steps:['Heat olive oil in a skillet over medium-high heat.','Add the ground turkey, breaking it apart with a wooden spoon into small crumbles.','Cook for 5-7 minutes, stirring occasionally, until fully cooked through with no pink remaining.','Season with salt, pepper, garlic powder and onion powder. Stir to combine.','Use immediately in bowls, tacos, lettuce wraps or pasta sauces.'],notes:'Turkey is leaner than beef and can dry out — do not overcook. Add a splash of broth or olive oil if it seems dry. Keeps 4 days refrigerated.'},
    zh:{name:'火鸡末',time:'10 分钟',servings:'1 份',why:'比牛肉末更瘦的替代——快速烹饪，适用于饭碗、塔可或意面酱。',ingredients:['火鸡肉末 110 克（93% 瘦肉）','橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','蒜粉 1/4 茶匙','洋葱粉 1/4 茶匙'],steps:['平底锅中大火加橄榄油。','放入火鸡末，用木铲拨散成小粒。','炒 5-7 分钟至完全变色无粉红。','加盐、胡椒、蒜粉和洋葱粉拌匀。','立即用于饭碗、塔可、生菜包或意面酱。'],notes:'火鸡比牛肉瘦，易干——不要过熟。偏干可加少许高汤或橄榄油。冷藏 4 天。'},
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
    en:{name:'Lamb Chops',time:'15 min',servings:'2 chops',why:'Tender, flavourful lamb with a caramelized crust — an elegant protein that cooks in minutes.',ingredients:['Lamb chops 2 (about 4 oz / 110 g each, loin or rib)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tbsp','Garlic clove 1, crushed','Fresh rosemary 1 sprig (optional)'],steps:['Remove lamb from fridge 20 minutes before cooking to bring to room temperature.','Pat dry and season both sides with salt and pepper.','Heat olive oil in a skillet over medium-high heat until shimmering.','Sear chops for 3-4 minutes per side for medium-rare (135F), basting with garlic and rosemary in the last minute.','Transfer to a plate, tent with foil, and rest 3 minutes before serving.'],notes:'Use a meat thermometer for best results: 130F rare, 135F medium-rare, 145F medium. Lamb pairs well with mint sauce or garlic yogurt.'},
    zh:{name:'羊排',time:'15 分钟',servings:'2 块',why:'软嫩多汁的羊排配焦香外壳——优雅的蛋白质，几分钟即成。',ingredients:['羊排 2 块（每块约 110 克，腰肉或肋排）','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 汤匙','蒜 1 瓣，压碎','新鲜迷迭香 1 枝（可选）'],steps:['烹饪前 20 分钟从冰箱取出回温。','吸干水分，两面撒盐和胡椒。','平底锅中大火加橄榄油至微闪。','每面煎 3-4 分钟至三分熟（135F），最后 1 分钟淋蒜和迷迭香。','装盘盖锡纸静置 3 分钟后食用。'],notes:'温度计最佳：130F 一分熟，135F 三分熟，145F 五分熟。搭配薄荷酱或蒜泥酸奶。'},
    macros:{protein:{g:24,pct:37},fat:{g:18,pct:63},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p19', type:'snack', carb:'low', tags:[], contains:["sheep", "egg"], focus:[],
    img:'lamb-meatballs.jpg', emoji:'🧆', foodCats:["protein", "complete"],
    en:{name:'Lamb Meatballs',time:'30 min',servings:'4 meatballs',why:'Juicy, herb-seasoned lamb meatballs — great for meal prep and pair beautifully with Mediterranean flavours.',ingredients:['Ground lamb 8 oz (225 g)','Egg 1','Breadcrumbs 2 tbsp (or almond flour for gf)','Finely chopped onion 2 tbsp','Minced garlic 1 clove','Dried oregano 1 tsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tbsp'],steps:['In a bowl, combine ground lamb, egg, breadcrumbs, onion, garlic, oregano, salt and pepper. Mix gently until just combined — do not overwork.','Form into 4 equal meatballs, about 1.5 inches across.','Heat olive oil in a skillet over medium heat. Add meatballs and brown on all sides, about 2 minutes per side.','Reduce heat to medium-low, cover, and cook for 10-12 minutes until internal temperature reaches 160F.','Rest 2 minutes before serving. Excellent with tzatziki or tomato sauce.'],notes:'For a complete meal, simmer the browned meatballs in tomato sauce for 15 minutes. Freeze raw meatballs for up to 1 month.'},
    zh:{name:'羊肉丸',time:'30 分钟',servings:'4 个',why:'多汁的香草羊肉丸——适合备餐，与地中海风味绝配。',ingredients:['羊肉末 225 克','鸡蛋 1 个','面包糠 2 汤匙（无麸用杏仁粉）','洋葱末 2 汤匙','蒜末 1 瓣','干牛至 1 茶匙','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 汤匙'],steps:['碗中混合羊肉末、蛋、面包糠、洋葱、蒜、牛至、盐和胡椒，轻拌至刚好混合。','分成 4 等份搓成约 4 厘米的丸子。','平底锅中火加油，各面煎约 2 分钟至焦黄。','转小火盖盖煮 10-12 分钟至内部温度 160F。','静置 2 分钟后食用。搭配酸奶黄瓜酱或番茄酱极佳。'],notes:'完整一餐可将煎好的肉丸在番茄酱中炖 15 分钟。生肉丸冷冻可存 1 个月。'},
    macros:{protein:{g:22,pct:37},fat:{g:16,pct:60},netCarbs:{g:2,pct:3}}
  },
  {
    id:'p20', type:'snack', carb:'low', tags:[], contains:["duck"], focus:[],
    img:'roast-duck.jpg', emoji:'🦆', foodCats:["protein", "complete"],
    en:{name:'Roast Duck',time:'2 hr 15 min',servings:'4',why:'Rich, succulent duck with crispy skin — a special-occasion protein that delivers deep flavour.',ingredients:['Whole duck 1 (about 4 lb / 1.8 kg)','Sea salt 1 tsp','Black pepper 1/2 tsp','Orange 1, quartered','Garlic 3 cloves, crushed','Fresh thyme 3 sprigs'],steps:['Remove duck from fridge 30 minutes before cooking. Remove giblets and pat the duck completely dry inside and out.','Score the skin in a crosshatch pattern with a sharp knife, being careful not to cut into the meat.','Season inside and out with salt and pepper. Stuff the cavity with orange quarters, garlic and thyme.','Place breast-up on a rack in a roasting pan. Roast at 350F (175C) for 1.5-2 hours, pouring off fat every 30 minutes.','The duck is done when a thermometer in the thigh reads 165F (74C) and the skin is golden and crispy.','Rest 15 minutes loosely tented with foil before carving.'],notes:'Save the rendered duck fat — it is excellent for roasting potatoes. Prick the skin all over before roasting to help fat render.'},
    zh:{name:'烤鸭',time:'2 小时 15 分钟',servings:'4 份',why:'皮脆肉嫩、风味浓郁的鸭肉——特殊场合的优选蛋白。',ingredients:['整鸭 1 只（约 1.8 公斤）','海盐 1 茶匙','黑胡椒 半茶匙','橙子 1 个，切四瓣','蒜 3 瓣，压碎','新鲜百里香 3 枝'],steps:['烹饪前 30 分钟取出鸭子回温。去除内脏，内外彻底吸干。','用利刀在鸭皮上划十字网格，注意不要切到肉。','内外撒盐和胡椒，腹内填入橙子、蒜和百里香。','胸朝上放在烤架上的烤盘中，350F（175C）烤 1.5-2 小时，每 30 分钟倒出鸭油。','大腿温度计读数 165F 且皮金黄酥脆即熟。','盖锡纸松松覆盖静置 15 分钟后切块。'],notes:'保留鸭油——烤土豆极佳。烤前在鸭皮各处戳孔有助于出油。'},
    macros:{protein:{g:22,pct:25},fat:{g:30,pct:75},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p21', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'baked-salmon.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Baked Salmon',time:'20 min',servings:'1',why:'Rich in omega-3 fatty acids and protein — a heart-healthy choice that cooks quickly.',ingredients:['Salmon fillet 6 oz (170 g)','Olive oil 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon 2 slices','Fresh dill 1 sprig (optional)'],steps:['Preheat oven to 400F (200C). Line a baking sheet with parchment.','Pat the salmon dry. Rub with olive oil and season with salt and pepper.','Place skin-side down on the baking sheet. Top with lemon slices and dill.','Bake for 12-15 minutes until the salmon flakes easily with a fork and reaches 145F internally.','Rest 2 minutes before serving.'],notes:'For a crispy top, broil for the last 2 minutes. Leftover salmon is excellent flaked into salads or grain bowls.'},
    zh:{name:'三文鱼',time:'20 分钟',servings:'1 份',why:'富含 Omega-3 脂肪酸和蛋白质——护心且快速烹饪。',ingredients:['三文鱼片 170 克','橄榄油 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬 2 片','新鲜莳萝 1 枝（可选）'],steps:['烤箱预热 400F（200C），烤盘铺烘焙纸。','三文鱼吸干水分，涂橄榄油，撒盐和胡椒。','皮朝下放烤盘，铺柠檬片和莳萝。','烤 12-15 分钟至轻松叉散、内部温度 145F。','静置 2 分钟后食用。'],notes:'最后 2 分钟开烤模式可使表面酥脆。剩三文鱼拆块拌沙拉或饭碗极佳。'},
    macros:{protein:{g:28,pct:51},fat:{g:12,pct:49},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p22', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'pan-fried-haddock.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Pan-Fried Haddock',time:'12 min',servings:'1 fillet',why:'A flaky, mild white fish with a golden crust — quick to cook and universally appealing.',ingredients:['Haddock fillet 1 (about 6 oz / 170 g)','Olive oil 1 tbsp','Butter 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon wedge 1','Fresh parsley 1 tsp chopped (optional)'],steps:['Pat the fillet dry with paper towels and season both sides with salt and pepper.','Heat olive oil in a non-stick skillet over medium-high heat.','When the oil shimmers, place the fillet skin-side down (if it has skin). Press gently for 30 seconds to prevent curling.','Cook for 3-4 minutes until the underside is golden and the flesh is opaque halfway up.','Flip carefully, add butter to the pan, and cook 2-3 more minutes, basting with the melted butter.','Squeeze lemon over the top, sprinkle with parsley, and serve immediately.'],notes:'Do not overcook — the fish should just flake when pressed. Haddock can be replaced with cod, pollock or any mild white fish.'},
    zh:{name:'煎黑线鳕',time:'12 分钟',servings:'1 片',why:'薄片状的温和白鱼配金黄外壳——快速烹饪，老少皆宜。',ingredients:['黑线鳕鱼柳 1 片（约 170 克）','橄榄油 1 汤匙','黄油 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬角 1 个','新鲜欧芹 1 茶匙，切碎（可选）'],steps:['用厨房纸吸干鱼柳，两面撒盐和胡椒。','不粘锅中大火加橄榄油。','油微闪时放入鱼柳（如有皮则皮朝下），轻压 30 秒防卷曲。','煎 3-4 分钟至底面金黄、鱼肉下半部变白。','小心翻面，加入黄油，再煎 2-3 分钟，用融化黄油淋浇。','挤柠檬汁，撒欧芹，立即食用。'],notes:'不要过熟——鱼肉轻按即散即可。黑线鳕可用鳕鱼、绿青鳕或任何温和白鱼替代。'},
    macros:{protein:{g:24,pct:68},fat:{g:5,pct:32},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p23', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'baked-tilapia.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Baked Tilapia',time:'20 min',servings:'2 fillets',why:'A budget-friendly, mild white fish that bakes effortlessly with minimal seasoning.',ingredients:['Tilapia fillets 2 (about 4 oz / 110 g each)','Olive oil 1 tbsp','Lemon juice 1 tbsp','Garlic clove 1, minced','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Paprika 1/4 tsp'],steps:['Preheat oven to 400F (200C). Line a baking sheet with parchment paper.','Pat fillets dry and place on the baking sheet.','In a small bowl, whisk together olive oil, lemon juice, minced garlic, salt, pepper and paprika.','Brush the mixture evenly over both fillets.','Bake for 12-15 minutes until the fish flakes easily with a fork and is opaque throughout.','Serve immediately with lemon wedges.'],notes:'Tilapia cooks quickly — check at 12 minutes to avoid dryness. Add a sprinkle of parmesan in the last 2 minutes for extra flavour.'},
    zh:{name:'烤罗非鱼',time:'20 分钟',servings:'2 片',why:'经济实惠的温和白鱼——简单调味即可烤制。',ingredients:['罗非鱼柳 2 片（每片约 110 克）','橄榄油 1 汤匙','柠檬汁 1 汤匙','蒜 1 瓣，切末','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','辣椒粉 1/4 茶匙'],steps:['烤箱预热 400F（200C），烤盘铺烘焙纸。','吸干鱼柳水分，放在烤盘上。','小碗混合橄榄油、柠檬汁、蒜末、盐、胡椒和辣椒粉。','均匀刷在两片鱼柳上。','烤 12-15 分钟至鱼肉可用叉轻松拨散且通体变白。','搭配柠檬角立即食用。'],notes:'罗非鱼熟得快——12 分钟时检查以免过干。最后 2 分钟撒帕玛森芝士可增味。'},
    macros:{protein:{g:23,pct:77},fat:{g:3,pct:23},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p24', type:'snack', carb:'low', tags:[], contains:["fish"], focus:[],
    img:'grilled-halibut.jpg', emoji:'🐟', foodCats:["protein"],
    en:{name:'Grilled Halibut',time:'15 min',servings:'1 fillet',why:'A firm, meaty fish with a clean flavour — grilling gives it a beautiful char while keeping the interior moist.',ingredients:['Halibut fillet 1 (about 6 oz / 170 g)','Olive oil 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon zest 1 tsp','Fresh dill 1 tsp chopped (optional)'],steps:['Pat the fillet dry and brush both sides with olive oil.','Season with salt, pepper and lemon zest.','Preheat a grill or grill pan to medium-high heat (about 400F).','Oil the grill grates with a paper towel dipped in oil.','Grill the fillet for 4-5 minutes per side, depending on thickness, until it just flakes when tested with a fork.','Rest 2 minutes, sprinkle with dill, and serve with lemon wedges.'],notes:'Halibut is expensive — do not overcook. It is done when it reaches 145F or just starts to flake. A 1-inch fillet needs about 4 minutes per side.'},
    zh:{name:'烤大比目鱼',time:'15 分钟',servings:'1 片',why:'紧实肉厚、风味清新的鱼——烤制外焦内嫩。',ingredients:['大比目鱼柳 1 片（约 170 克）','橄榄油 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬皮 1 茶匙','新鲜莳萝 1 茶匙，切碎（可选）'],steps:['吸干鱼柳，两面刷橄榄油。','撒盐、胡椒和柠檬皮。','烤架或烤盘中大火预热（约 400F）。','用蘸油的厨房纸擦烤架防粘。','每面烤 4-5 分钟（视厚度），至叉测可散。','静置 2 分钟，撒莳萝，配柠檬角食用。'],notes:'大比目鱼价格不菲——不要过熟。达 145F 或刚开始散开即熟。1 英寸厚每面约 4 分钟。'},
    macros:{protein:{g:28,pct:71},fat:{g:5,pct:29},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p25', type:'snack', carb:'low', tags:[], contains:["shellfish"], focus:[],
    img:'boiled-shrimp.jpg', emoji:'🦐', foodCats:["protein"],
    en:{name:'Boiled Shrimp',time:'10 min',servings:'2',why:'A fast, high-protein seafood option that is naturally low in calories.',ingredients:['Large shrimp 8 oz (225 g), peeled and deveined','Sea salt 1 tbsp','Black peppercorns 5','Bay leaf 1','Lemon 1, halved','Ice water in a bowl'],steps:['Fill a large pot with 4 cups water. Add salt, peppercorns, bay leaf and lemon halves.','Bring to a boil over high heat.','Add the shrimp and stir. Cook for 2-3 minutes until shrimp turn pink and curl into a C shape.','Immediately drain and transfer to the ice water bath to stop cooking and keep tender.','Drain and serve warm or chilled with cocktail sauce or lemon wedges.'],notes:'Do not overcook — shrimp become rubbery. For extra flavor, add Old Bay seasoning to the boiling water.'},
    zh:{name:'水煮虾',time:'10 分钟',servings:'2 份',why:'快速高蛋白海鲜，天然低热量。',ingredients:['大虾 225 克，去壳去肠线','海盐 1 汤匙','黑胡椒粒 5 粒','月桂叶 1 片','柠檬 1 个，对切','冰水一碗'],steps:['大锅加水 4 杯，放入盐、胡椒粒、月桂叶和柠檬。','大火煮沸。','放入虾搅散，煮 2-3 分钟至虾变粉红弯曲成 C 形。','立即捞出放入冰水降温以保持嫩度。','沥干后温食或冷食，配鸡尾酒酱或柠檬角。'],notes:'不要过熟——虾会变硬。沸水中加 Old Bay 调味料可增味。'},
    macros:{protein:{g:24,pct:91},fat:{g:1,pct:9},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p26', type:'snack', carb:'low', tags:[], contains:["shellfish"], focus:[],
    img:'pan-fried-scallops.jpg', emoji:'🦪', foodCats:["protein"],
    en:{name:'Pan-Fried Scallops',time:'8 min',servings:'6 scallops',why:'Sweet, tender scallops with a caramelized golden crust — an elegant protein ready in minutes.',ingredients:['Large sea scallops 6 (about 1 lb / 450 g)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tbsp','Butter 1 tbsp','Garlic clove 1, crushed','Lemon juice 1 tsp'],steps:['Remove the small side muscle from each scallop if still attached. Rinse briefly and pat thoroughly dry — moisture prevents searing.','Season both sides with salt and pepper.','Heat olive oil in a heavy skillet over high heat until smoking.','Place scallops in the pan, flat-side down, leaving space between them. Do not crowd the pan.','Sear for 2 minutes undisturbed until a deep golden crust forms. Flip and cook 1-2 more minutes.','Add butter, garlic and lemon juice in the last 30 seconds, basting the scallops.','Remove immediately when the centres are just translucent — overcooked scallops become rubbery.'],notes:'The key to perfect scallops is a dry surface and a very hot pan. Cook in two batches if needed to avoid crowding.'},
    zh:{name:'煎扇贝',time:'8 分钟',servings:'6 只',why:'鲜甜软嫩的扇贝配焦糖金壳——几分钟即成的优雅蛋白。',ingredients:['大扇贝 6 只（约 450 克）','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 汤匙','黄油 1 汤匙','蒜 1 瓣，压碎','柠檬汁 1 茶匙'],steps:['如有侧肌则去除。快速冲洗后彻底吸干——水分影响煎制。','两面撒盐和胡椒。','厚底锅大火加油至冒烟。','扇贝平面朝下放入锅中，留间距，不要挤。','不翻动煎 2 分钟至深金色焦壳。翻面再煎 1-2 分钟。','最后 30 秒加入黄油、蒜和柠檬汁，淋浇扇贝。','中心刚变半透明即盛出——过熟会变硬。'],notes:'完美扇贝的关键：干燥的表面和极热的锅。避免拥挤可分两批煎。'},
    macros:{protein:{g:24,pct:73},fat:{g:3,pct:21},netCarbs:{g:2,pct:6}}
  },
  {
    id:'p27', type:'snack', carb:'low', tags:[], contains:["shellfish"], focus:[],
    img:'steamed-mussels.jpg', emoji:'🦪', foodCats:["protein", "complete"],
    en:{name:'Steamed Mussels',time:'15 min',servings:'2 lb',why:'Briny, tender mussels steamed in a fragrant broth — simple to prepare and naturally flavourful.',ingredients:['Fresh mussels 2 lb (900 g), scrubbed and debearded','Dry white wine 1/2 cup (120 ml) or water','Garlic 3 cloves, minced','Shallot 1, finely chopped','Butter 2 tbsp','Fresh parsley 2 tbsp chopped','Sea salt to taste'],steps:['Discard any mussels that are open and do not close when tapped — they are dead. Also discard any with cracked shells.','Melt butter in a large pot with a tight-fitting lid over medium heat. Add shallot and garlic, saute for 2 minutes.','Add wine (or water) and bring to a simmer.','Add the mussels, cover, and steam for 5-7 minutes, shaking the pot once halfway through.','When most mussels have opened, remove from heat. Discard any that remain closed.','Stir in parsley, adjust salt, and serve in deep bowls with the cooking broth.'],notes:'Mussels that do not open after cooking are unsafe — discard them. Serve with crusty bread to soak up the broth.'},
    zh:{name:'蒸青口贝',time:'15 分钟',servings:'2 磅',why:'鲜美软嫩的青口贝蒸于香浓汤汁中——制作简单，天然提味。',ingredients:['新鲜青口贝 900 克，刷洗去须','干白葡萄酒 120 毫升或清水','蒜 3 瓣，切末','红葱头 1 个，切碎','黄油 2 汤匙','新鲜欧芹 2 汤匙，切碎','海盐 适量'],steps:['丢弃敲后不闭合的开口青口——已死。丢弃破壳的。','大锅中火融化黄油，加入红葱头和蒜炒 2 分钟。','加酒（或水）煮至微沸。','放入青口贝，盖紧盖子蒸 5-7 分钟，中途晃锅一次。','大多数开口后离火。未开的丢弃。','拌入欧芹，调盐，连汤盛入深碗食用。'],notes:'煮后不开口的青口不安全——丢弃。搭配面包蘸汤汁食用。'},
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
    en:{name:'Scrambled Eggs',time:'10 min',servings:'1',why:'A fast, affordable protein source that is easy to digest and customize.',ingredients:['Eggs 3','Butter 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Milk or water 1 tbsp (optional)','Fresh chives 1 tsp, chopped (optional)'],steps:['Crack the eggs into a bowl, add milk or water if using, and whisk vigorously until uniform.','Heat butter in a non-stick skillet over medium-low heat until melted and foaming.','Pour in the eggs and let sit for 10 seconds. Then gently push the eggs from the edges toward the center with a silicone spatula.','Continue folding gently for 2-3 minutes until soft curds form and the eggs are just set but still glossy.','Season with salt and pepper, garnish with chives, and serve immediately.'],notes:'Cooking on low heat gives creamier eggs. Remove from heat while still slightly wet — residual heat finishes them.'},
    zh:{name:'炒蛋',time:'10 分钟',servings:'1 份',why:'快速经济的蛋白来源，易消化且可随意搭配。',ingredients:['鸡蛋 3 个','黄油 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','牛奶或清水 1 汤匙（可选）','新鲜细葱 1 茶匙，切碎（可选）'],steps:['鸡蛋打入碗中，加入牛奶或清水（如用），充分搅打至均匀。','不粘锅中小火加黄油至融化起泡。','倒入蛋液静置 10 秒，用硅胶铲从边缘向中心轻推。','持续轻翻 2-3 分钟至形成柔软凝块、刚凝固仍微亮。','加盐和胡椒，撒细葱，立即食用。'],notes:'小火炒出的蛋更滑嫩。略带湿润时离火——余热会将其烘熟。'},
    macros:{protein:{g:12,pct:32},fat:{g:11,pct:66},netCarbs:{g:1,pct:3}}
  },
  {
    id:'p30', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'fried-eggs.jpg', emoji:'🍳', foodCats:["protein"],
    en:{name:'Fried Eggs',time:'8 min',servings:'1',why:'A satisfying protein-rich breakfast or topper for bowls and toast.',ingredients:['Eggs 2','Butter or olive oil 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp'],steps:['Heat butter or oil in a non-stick skillet over medium heat until shimmering.','Crack the eggs into the pan, keeping them separate.','For sunny-side up: cook 3-4 minutes until whites are set and yolks are still runny.','For over-easy: cook 3 minutes, flip carefully, and cook 30 more seconds.','Season with salt and pepper and serve immediately.'],notes:'Cover the pan with a lid for 1 minute to set the whites without flipping (over-easy style without breaking the yolk).'},
    zh:{name:'煎蛋',time:'8 分钟',servings:'1 份',why:'满足感强的高蛋白早餐，也可盖在饭碗或吐司上。',ingredients:['鸡蛋 2 个','黄油或橄榄油 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙'],steps:['不粘锅中火加黄油或油至微微发光。','鸡蛋打入锅中，分开摆放。','单面煎：煎 3-4 分钟至蛋白凝固蛋黄仍流心。','双面煎：煎 3 分钟后小心翻面再煎 30 秒。','撒盐和胡椒，立即食用。'],notes:'盖锅盖 1 分钟可不翻面使蛋白凝固（仿双面煎而不破黄）。'},
    macros:{protein:{g:12,pct:31},fat:{g:12,pct:69},netCarbs:{g:0,pct:0}}
  },
  {
    id:'p31', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'poached-eggs.jpg', emoji:'🍳', foodCats:["protein"],
    en:{name:'Poached Eggs',time:'10 min',servings:'1',why:'An elegant, oil-free egg preparation that is perfect for bowls and toast.',ingredients:['Eggs 2','White vinegar 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Water 3 cups'],steps:['Bring 3 cups water to a gentle simmer in a small pot. Add vinegar.','Crack each egg into a small ramekin or cup.','Create a gentle whirlpool in the water with a spoon. Slide the egg into the center.','Cook for 3 minutes for a runny yolk or 4 minutes for a firmer yolk.','Remove with a slotted spoon, dab on a paper towel, and season with salt and pepper.'],notes:'Use the freshest eggs possible — they hold their shape better. Vinegar helps the whites coagulate faster.'},
    zh:{name:'水波蛋',time:'10 分钟',servings:'1 份',why:'优雅的无油蛋料理，适合盖饭碗和吐司。',ingredients:['鸡蛋 2 个','白醋 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','清水 3 杯'],steps:['小锅加水 3 杯小火煮至微沸，加入白醋。','每个鸡蛋先打入小杯中。','用勺子在水中搅出旋涡，将蛋滑入旋涡中心。','煮 3 分钟得流心蛋黄，4 分钟则较凝固。','用漏勺取出，轻按厨房纸吸水，撒盐和胡椒。'],notes:'尽量用新鲜鸡蛋——成形更好。醋有助于蛋白快速凝固。'},
    macros:{protein:{g:12,pct:34},fat:{g:10,pct:63},netCarbs:{g:1,pct:3}}
  },
  {
    id:'p32', type:'snack', carb:'low', tags:[], contains:["soy"], focus:[],
    img:'pan-fried-firm-tofu.jpg', emoji:'🧈', foodCats:["protein", "fat-flavor"],
    en:{name:'Pan-Fried Firm Tofu',time:'15 min (plus 15 min pressing)',servings:'1',why:'A plant-based protein that crisps beautifully and absorbs sauces well — with the right technique, tofu develops a golden, crunchy exterior while staying tender inside.',ingredients:['Firm or extra-firm tofu 4 to 6 oz (110 to 170 g), drained from the package','Olive oil or neutral oil 1 tbsp','Soy sauce 1 tbsp','Cornstarch or arrowroot powder 1 tbsp (essential for crispy crust)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Garlic powder 1/4 tsp (optional)','Sesame oil 1/2 tsp (optional, for finishing flavour)'],steps:['Open the tofu package and drain the water. Wrap the block in a clean kitchen towel or paper towels.','Place the wrapped tofu on a plate and put a heavy object on top (a cast-iron skillet, a stack of books, or a pot filled with water). Press for 15 minutes (5 minutes minimum). This removes excess water and allows the tofu to absorb seasoning and crisp up.','Unwrap the tofu and cut it into 1/2-inch (1 cm) slabs or 3/4-inch cubes — thinner pieces get crispier, cubes hold their shape better in stir-fries.','Place the tofu pieces in a bowl. Sprinkle with cornstarch, salt, pepper, and garlic powder if using. Toss gently with your hands until each piece is evenly coated with a thin layer of cornstarch — this is the secret to the crispy crust.','Heat 1 tbsp oil in a non-stick skillet over medium-high heat until the oil shimmers.','Add the tofu pieces in a single layer with space between them. Do not crowd the pan — cook in two batches if needed.','Cook for 3 to 4 minutes on the first side without disturbing, until a deep golden crust forms. Use tongs or a spatula to flip each piece.','Cook for 3 to 4 minutes on each remaining side until all sides are golden and crispy (about 10 to 12 minutes total for cubes).','In the last 30 seconds, drizzle the soy sauce over the tofu and toss quickly to coat — it will sizzle and caramelize. Remove from heat immediately.','Drizzle sesame oil over the tofu if using, and toss gently. Serve immediately while crispy.'],notes:'Pressing is the single most important step for crispy tofu — skip it and you get soggy results. Extra-firm tofu needs only 5 minutes of pressing. For even more flavour, marinate the pressed tofu in 2 tbsp soy sauce + 1 tsp rice vinegar for 10 minutes before coating with cornstarch. Great in stir-fries, grain bowls, and noodle dishes.'},
    zh:{name:'煎豆腐',time:'15 分钟（另加压水 15 分钟）',servings:'1 份',why:'植物蛋白，煎后酥脆且容易吸收酱汁——用对方法，豆腐外酥内嫩。',ingredients:['硬或特硬豆腐 110 至 170 克，沥干包装水分','橄榄油或中性油 1 汤匙','酱油 1 汤匙','玉米淀粉或竹芋粉 1 汤匙（酥脆外壳关键）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','蒜粉 1/4 茶匙（可选）','麻油 半茶匙（可选，提香用）'],steps:['打开豆腐包装沥干水，用干净厨房巾或厨房纸包裹。','包好的豆腐放盘上，上面压重物（铸铁锅、书堆或装水的锅）。压 15 分钟（至少 5 分钟）。去除多余水分让豆腐吸味且变脆。','拆开豆腐切成 1 厘米厚片或 2 厘米块——薄片更脆，块状更适合炒菜保持形状。','豆腐放入碗中，撒玉米淀粉、盐、胡椒和蒜粉（如用），用手轻拌至每块均匀裹薄层淀粉——这是酥脆外壳的秘诀。','不粘中大火加 1 汤匙油至微闪。','豆腐块平铺入锅留间距。不要挤锅——需要分两批。','不翻动煎 3 至 4 分钟至深金黄焦壳。用夹子或铲逐块翻面。','各面煎 3 至 4 分钟至全部金黄酥脆（方块约共 10 至 12 分钟）。','最后 30 秒淋酱油快速翻裹——会嗞嗞作响并焦糖化。立即离火。','淋麻油（如用）轻拌。趁酥脆立即食用。'],notes:'压水是酥脆豆腐最关键的步骤——跳过会变软塌。特硬豆腐只需压 5 分钟。更入味可压好后用 2 汤匙酱油加 1 茶匙米醋腌 10 分钟再裹淀粉。适合炒菜、饭碗和面食。'},
    macros:{protein:{g:12,pct:39},fat:{g:7,pct:51},netCarbs:{g:3,pct:10}}
  },
  {
    id:'p33', type:'snack', carb:'low', tags:[], contains:["soy"], focus:[],
    img:'scrambled-tofu.jpg', emoji:'🥄', foodCats:["protein", "vegetable"],
    en:{name:'Scrambled Tofu',time:'10 min',servings:'2',why:'A plant-based scramble with a fluffy, egg-like texture — high in protein and naturally cholesterol-free.',ingredients:['Firm tofu 8 oz (225 g), drained','Olive oil 1 tbsp','Nutritional yeast 2 tbsp','Turmeric 1/2 tsp','Garlic powder 1/2 tsp','Onion powder 1/4 tsp','Sea salt 1/2 tsp','Black pepper 1/8 tsp','Soy sauce 1 tsp','(Optional) spinach 1 cup, chopped'],steps:['Press the tofu to remove excess water, then crumble it into bite-sized pieces with your hands or a fork.','Heat olive oil in a skillet over medium heat.','Add the crumbled tofu and cook for 3 minutes, stirring occasionally.','Sprinkle in nutritional yeast, turmeric, garlic powder, onion powder, salt, pepper and soy sauce. Stir well to combine.','Cook for 3-4 more minutes until heated through and slightly golden. Add chopped spinach in the last minute if using.','Taste and adjust seasoning. Serve immediately.'],notes:'Turmeric gives the scramble a golden egg-like colour. For a softer texture, add a splash of plant milk while cooking.'},
    zh:{name:'豆腐炒蛋',time:'10 分钟',servings:'2 份',why:'植物基炒蛋——蓬松如蛋，高蛋白且无胆固醇。',ingredients:['硬豆腐 225 克，沥水','橄榄油 1 汤匙','营养酵母 2 汤匙','姜黄粉 半茶匙','蒜粉 半茶匙','洋葱粉 1/4 茶匙','海盐 半茶匙','黑胡椒 1/8 茶匙','酱油 1 茶匙','（可选）菠菜 1 杯，切碎'],steps:['压去豆腐多余水分，用手或叉子掰成小块。','平底锅中火加油。','放入碎豆腐炒 3 分钟，不时翻动。','撒入营养酵母、姜黄、蒜粉、洋葱粉、盐、胡椒和酱油，拌匀。','再炒 3-4 分钟至热透微金。最后 1 分钟加菠菜（如用）。','尝味调整，立即食用。'],notes:'姜黄赋予金黄蛋色。更软口感可加少许植物奶。'},
    macros:{protein:{g:12,pct:41},fat:{g:6,pct:46},netCarbs:{g:4,pct:14}}
  },
  {
    id:'p34', type:'snack', carb:'low', tags:[], contains:["soy"], focus:[],
    img:'marinated-tempeh.jpg', emoji:'🥢', foodCats:["protein"],
    en:{name:'Marinated Tempeh',time:'20 min (plus 10 min marinating)',servings:'2',why:'Nutty, firm tempeh marinated in a savoury-sweet glaze — a probiotic-rich plant protein with satisfying bite that pan-fries into caramelized, flavourful strips.',ingredients:['Tempeh 8 oz (225 g), one standard package','Soy sauce or tamari 3 tbsp','Apple cider vinegar 1 tbsp','Maple syrup 1 tbsp','Garlic clove 1, minced','Smoked paprika 1/2 tsp','Fresh ginger 1/2 tsp grated (optional)','Olive oil 1 tbsp','Water 2 tbsp','Sesame oil 1/2 tsp (for finishing)'],steps:['Remove the tempeh from its package. Some tempeh has a bitter surface taste — to remove it, steam the tempeh in a steamer basket over boiling water for 10 minutes, then let cool. This also opens up the pores so it absorbs marinade better. (Skip this step if you are short on time.)','Cut the tempeh block into 1/4-inch (0.5 cm) slices — you can cut it into flat slabs for pan-frying, or into strips for wraps and bowls.','In a shallow dish or zip-top bag, whisk together the soy sauce, apple cider vinegar, maple syrup, minced garlic, smoked paprika, grated ginger, and 2 tbsp water until the maple syrup is dissolved.','Add the tempeh slices to the marinade in a single layer. Let them sit for at least 10 minutes at room temperature, turning once halfway through. For deeper flavour, marinate in the refrigerator for 4 to 8 hours or overnight.','Heat 1 tbsp olive oil in a skillet over medium heat.','Remove the tempeh slices from the marinade, letting excess drip off (reserve the remaining marinade in the dish).','Place the tempeh slices in the pan in a single layer. Cook for 3 to 4 minutes on the first side until golden brown and slightly crisp at the edges.','Flip each piece and cook for 3 to 4 more minutes on the other side.','Pour the reserved marinade into the pan. It will bubble and reduce quickly. Stir gently to coat each piece of tempeh with the thickening glaze.','Cook for 1 to 2 more minutes, stirring constantly, until the marinade has reduced to a sticky glaze that coats each piece.','Remove from heat. Drizzle sesame oil over the tempeh and toss gently. Serve immediately in bowls, wraps, salads, or alongside vegetables and rice.'],notes:'Steaming tempeh before marinating is optional but highly recommended — it removes bitterness and doubles the marinade absorption. Tempeh freezes well: marinate raw slices, freeze in the marinade, then thaw and pan-fry for a quick meal. For a smoky version, add 1 tsp liquid smoke to the marinade.'},
    zh:{name:'腌制天贝',time:'20 分钟（另加腌制 10 分钟）',servings:'2 份',why:'坚果味、紧实的天贝腌制于咸甜酱汁中——富含益生菌的植物蛋白，煎后焦糖化、风味浓郁。',ingredients:['天贝 225 克，一标准包','酱油或 tamari 3 汤匙','苹果醋 1 汤匙','枫糖浆 1 汤匙','蒜 1 瓣，切末','烟熏辣椒粉 半茶匙','鲜姜 半茶匙，磨泥（可选）','橄榄油 1 汤匙','清水 2 汤匙','麻油 半茶匙（提香用）'],steps:['拆开天贝包装。部分天贝表面有苦味——去除方法是蒸笼蒸 10 分钟后冷却。此步骤也打开孔隙更易吸味。（时间紧可跳过。）','天贝切成 0.5 厘米片——可切平片用于煎，或切条用于包和饭碗。','浅盘或密封袋中搅打酱油、苹果醋、枫糖浆、蒜末、烟熏辣椒粉、姜末和 2 汤匙水至枫糖溶解。','天贝片单层放入腌料中。室温至少腌 10 分钟，中途翻一次。更深入味可冷藏腌 4 至 8 小时或过夜。','平底锅中火加 1 汤匙橄榄油。','天贝片取出沥去多余腌料（保留盘中剩余腌料）。','天贝片单层放入锅中。煎 3 至 4 分钟至一面金黄、边缘微脆。','逐块翻面再煎 3 至 4 分钟。','将保留的腌料倒入锅中。会迅速冒泡收浓。轻拌使每块天贝裹上增稠的酱汁。','再煮 1 至 2 分钟不停翻拌至腌料收成粘稠酱汁裹住每块。','离火。淋麻油轻拌。立即用于饭碗、生菜包、沙拉或配蔬菜米饭。'],notes:'腌制前蒸天贝是可选但强烈推荐的——去除苦味且使腌料吸收翻倍。天贝冷冻效果好：生片腌好连腌料冷冻，解冻后煎制即可。烟熏版可加 1 茶匙液体烟熏液到腌料中。'},
    macros:{protein:{g:19,pct:48},fat:{g:7,pct:40},netCarbs:{g:5,pct:13}}
  },
  {
    id:'p35', type:'snack', carb:'low', tags:[], contains:["wheat"], focus:[],
    img:'seitan-strips.jpg', emoji:'🍖', foodCats:["protein"],
    en:{name:'Seitan Strips',time:'10 min',servings:'1 cup',why:'A chewy, meat-like plant protein — seitan absorbs flavours well and pan-fries into satisfying, caramelized strips that work in any dish calling for sliced meat.',ingredients:['Pre-made seitan 4 to 6 oz (110 to 170 g), store-bought or homemade','Olive oil 1 tbsp','Soy sauce 1 tbsp','Smoked paprika 1/4 tsp','Garlic powder 1/4 tsp','Onion powder 1/4 tsp','Black pepper 1/8 tsp','Vegetable broth or water 1 to 2 tbsp (if pan gets dry)'],steps:['Remove the seitan from its package and pat it dry with paper towels — removing surface moisture helps it brown better.','Slice the seitan into 1/4-inch (0.5 cm) strips. For stir-fries, cut shorter 2-inch strips; for sandwiches, cut longer 4-inch strips.','In a small bowl, mix together the smoked paprika, garlic powder, onion powder, and black pepper.','Sprinkle the seasoning blend over the seitan strips and toss with your hands until evenly coated.','Heat 1 tbsp olive oil in a skillet over medium-high heat until the oil shimmers.','Add the seitan strips in a single layer (cook in two batches if your pan is small). Do not stir immediately — let them sit for 1 minute to develop a crust.','Stir or toss every 1 to 2 minutes, cooking for a total of 4 to 5 minutes, until the strips are browned and slightly crispy on the edges.','If the pan gets dry or the seitan starts to stick, add 1 tbsp vegetable broth or water and stir to deglaze.','Drizzle the soy sauce over the seitan and toss quickly to coat — it will sizzle and caramelize in 30 seconds.','Remove from heat immediately. The seitan should be browned, slightly crispy, and coated with a savoury glaze. Use in stir-fries, wraps, bowls, sandwiches, or salads.'],notes:'Seitan is very high in protein — about 25 g per 4 oz serving, comparable to chicken. If it seems dry, add a splash of broth while cooking. For deeper flavour, marinate the strips in 2 tbsp soy sauce + 1 tsp maple syrup for 10 minutes before cooking. Store-bought seitan varies in texture — the vacuum-packed strips work best for pan-frying.'},
    zh:{name:'面筋条',time:'10 分钟',servings:'1 杯',why:'有嚼劲、类似肉质的植物蛋白——面筋吸味好，煎后焦糖化、口感满足，可用于任何需要肉片的菜肴。',ingredients:['预制面筋 110 至 170 克，市售或自制','橄榄油 1 汤匙','酱油 1 汤匙','烟熏辣椒粉 1/4 茶匙','蒜粉 1/4 茶匙','洋葱粉 1/4 茶匙','黑胡椒 1/8 茶匙','蔬菜高汤或水 1 至 2 汤匙（如锅干用）'],steps:['面筋拆包后用厨房纸吸干——去除表面水分有助于上色。','面筋切 0.5 厘米条。炒菜用切 5 厘米短条；三明治用切 10 厘米长条。','小碗混合烟熏辣椒粉、蒜粉、洋葱粉和黑胡椒。','调味料撒在面筋条上，用手搓匀附着。','平底锅中大火加 1 汤匙橄榄油至微闪。','面筋条单层入锅（锅小可分两批）。不要立即翻——静置 1 分钟形成焦壳。','每 1 至 2 分钟翻拌一次，共煎 4 至 5 分钟至条面焦黄、边缘微脆。','如锅干或粘锅，加 1 汤匙蔬菜高汤或水搅动 deg laze。','淋酱油快速翻裹——30 秒内嗞嗞焦糖化。','立即离火。面筋应焦黄微脆，裹着咸鲜酱汁。用于炒菜、包、饭碗、三明治或沙拉。'],notes:'面筋蛋白含量很高——每 110 克约 25 克，与鸡肉相当。偏干可加少许高汤。更深入味可用 2 汤匙酱油加 1 茶匙枫糖腌 10 分钟再煎。市售面筋口感不一——真空包装条状最适合煎。'},
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
    en:{name:'Lentils',time:'30 min',servings:'4',why:'A budget-friendly plant protein rich in fibre, iron and folate.',ingredients:['Brown or green lentils 1 cup (200 g)','Water 3 cups (720 ml)','Sea salt 1/2 tsp','Bay leaf 1','Garlic clove 1, halved','Olive oil 1 tsp'],steps:['Rinse the lentils in a fine-mesh sieve and pick out any debris.','Combine lentils, water, salt, bay leaf and garlic in a pot. Bring to a boil.','Reduce to a simmer, cover, and cook for 20-25 minutes until tender but not mushy.','Drain any excess liquid. Remove the bay leaf and garlic.','Toss with olive oil and adjust seasoning. Use in salads, soups or bowls.'],notes:'Do not add salt until the lentils are partially cooked — early salting can toughen the skins. Red lentils cook in 15 minutes and break down into a puree.'},
    zh:{name:'扁豆',time:'30 分钟',servings:'4 份',why:'经济实惠的植物蛋白，富含纤维、铁和叶酸。',ingredients:['褐色或绿色扁豆 200 克','清水 720 毫升','海盐 半茶匙','月桂叶 1 片','蒜 1 瓣，对切','橄榄油 1 茶匙'],steps:['细筛冲洗扁豆，拣去杂质。','锅中放入扁豆、水、盐、月桂叶和蒜，大火煮沸。','转小火盖盖炖 20-25 分钟至软但不烂。','沥干多余水分，取出月桂叶和蒜。','拌入橄榄油，调整调味。用于沙拉、汤或饭碗。'],notes:'扁豆半熟后再加盐——过早加盐会使豆皮变硬。红扁豆 15 分钟即熟且化为泥。'},
    macros:{protein:{g:9,pct:31},fat:{g:0,pct:0},netCarbs:{g:20,pct:69}}
  },
  {
    id:'p38', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'black-beans.jpg', emoji:'🫘', foodCats:["protein", "carb"],
    en:{name:'Black Beans',time:'35 min (or 10 min canned)',servings:'4',why:'A fibre-rich legume that supports digestion and blood sugar balance.',ingredients:['Dried black beans 1 cup (200 g) OR canned 2 cans (15 oz / 425 g each)','Water 3 cups (if using dried)','Sea salt 1 tsp','Garlic clove 1, halved','Cumin 1/2 tsp','Olive oil 1 tsp'],steps:['For dried beans: soak overnight in water, then drain.','Combine soaked beans, water, salt, garlic and cumin in a pot. Bring to a boil.','Simmer covered for 30-35 minutes until tender.','Drain. Remove garlic. Toss with olive oil.','For canned beans: rinse well, drain, and warm in a pan with olive oil, cumin and salt for 3-4 minutes.'],notes:'Canned beans are a convenient shortcut — just rinse well to remove excess sodium. Cooked beans freeze up to 3 months.'},
    zh:{name:'黑豆',time:'35 分钟（或罐装 10 分钟）',servings:'4 份',why:'富含纤维的豆类，有助消化和血糖平衡。',ingredients:['干黑豆 200 克 或罐装 2 罐（各 425 克）','清水 720 毫升（干豆用）','海盐 1 茶匙','蒜 1 瓣，对切','孜然粉 半茶匙','橄榄油 1 茶匙'],steps:['干豆：提前浸泡过夜后沥干。','锅中放入泡好的豆、水、盐、蒜和孜然，大火煮沸。','盖盖小火炖 30-35 分钟至软。','沥干，取出蒜，拌入橄榄油。','罐装豆：冲洗沥干，锅中加橄榄油、孜然和盐加热 3-4 分钟。'],notes:'罐装豆是便捷替代——充分冲洗去多余钠即可。熟豆冷冻可存 3 个月。'},
    macros:{protein:{g:7,pct:26},fat:{g:0,pct:0},netCarbs:{g:20,pct:74}}
  },
  {
    id:'p39', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'kidney-beans.jpg', emoji:'🫘', foodCats:["protein", "carb"],
    en:{name:'Kidney Beans',time:'10 min',servings:'1 cup',why:'A hearty, fibre-rich legume — kidney beans are the base of chili and a versatile plant protein.',ingredients:['Canned kidney beans 1 can (15 oz / 425 g)','Water for rinsing','Sea salt 1/4 tsp','Olive oil 1 tsp (optional)'],steps:['Open the can and pour the beans into a colander. Rinse thoroughly under cold water until the water runs clear — this removes excess sodium and the starchy liquid.','Shake off excess water. The beans are now ready to use.','For warm beans: heat olive oil in a small pot over medium heat, add beans and salt, and stir for 2-3 minutes until heated through.','For chili or stew: add directly to the pot with other ingredients and simmer for 15-20 minutes to absorb flavours.'],notes:'Never eat raw or undercooked kidney beans — they contain a toxin that is destroyed by boiling. Canned beans are pre-cooked and safe.'},
    zh:{name:'红腰豆',time:'10 分钟',servings:'1 杯',why:'高纤维的丰盛豆类——红腰豆是辣豆酱的基础，也是百搭植物蛋白。',ingredients:['红腰豆罐头 1 罐（425 克）','清水（冲洗用）','海盐 1/4 茶匙','橄榄油 1 茶匙（可选）'],steps:['开罐倒入滤网，冷水冲洗至水变清——去除多余钠和淀粉液。','甩去多余水分，即可使用。','热豆：小锅中火加橄榄油，放入豆和盐翻炒 2-3 分钟至热透。','用于辣豆酱或炖菜：直接加入锅中与其他食材炖 15-20 分钟入味。'],notes:'切勿食用生或未熟红腰豆——含毒素需煮沸破坏。罐头已预煮安全。'},
    macros:{protein:{g:7,pct:26},fat:{g:0,pct:0},netCarbs:{g:20,pct:74}}
  },
  {
    id:'p40', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'navy-beans.jpg', emoji:'🫘', foodCats:["protein", "carb"],
    en:{name:'Navy Beans',time:'10 min',servings:'1 cup',why:'Small, creamy white beans with a mild flavour — the classic base for baked beans and hearty soups.',ingredients:['Canned navy beans 1 can (15 oz / 425 g)','Water for rinsing','Sea salt 1/4 tsp'],steps:['Open the can and pour beans into a colander. Rinse well under cold water until the foam is gone.','Shake off excess water and the beans are ready to use.','For soups or stews: add directly to the pot and simmer 15-20 minutes with other ingredients.','For a simple side: heat with a splash of broth, salt and a bay leaf for 5 minutes, then drain and serve.'],notes:'Navy beans are an excellent source of fibre and folate. They mash easily for dips or spreads.'},
    zh:{name:'白豆',time:'10 分钟',servings:'1 杯',why:'小巧奶白色的温和豆类——焗豆和浓汤的经典基底。',ingredients:['白豆罐头 1 罐（425 克）','清水（冲洗用）','海盐 1/4 茶匙'],steps:['开罐倒入滤网，冷水冲洗至泡沫消失。','甩去多余水分即可使用。','用于汤或炖菜：直接加入锅中与其他食材炖 15-20 分钟。','简易配菜：加少许高汤、盐和月桂叶煮 5 分钟，沥水上桌。'],notes:'白豆富含纤维和叶酸。易压成泥用于蘸酱或涂抹。'},
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
    en:{name:'Canned Tuna',time:'5 min',servings:'1 can',why:'A convenient, shelf-stable protein — tuna is rich in omega-3 fatty acids and ready in seconds.',ingredients:['Canned tuna 1 can (5 oz / 140 g), drained','Olive oil 1 tsp','Lemon juice 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) mayonnaise 1 tbsp','(Optional) chopped celery 1 tbsp'],steps:['Open the can and drain the liquid — for oil-packed tuna, drain well; for water-packed, drain completely.','Transfer tuna to a bowl and flake with a fork.','Drizzle with olive oil and lemon juice. Season with salt and pepper. Toss gently.','For tuna salad: add mayonnaise and chopped celery, mix until combined.','Serve immediately on its own, in lettuce cups, on toast or in a wrap.'],notes:'Choose chunk light tuna for lower mercury levels than albacore. Rinse with water to reduce sodium if needed.'},
    zh:{name:'金枪鱼罐头',time:'5 分钟',servings:'1 罐',why:'方便耐储的蛋白质——金枪鱼富含 omega-3 脂肪酸，秒速即成。',ingredients:['金枪鱼罐头 1 罐（140 克），沥干','橄榄油 1 茶匙','柠檬汁 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）蛋黄酱 1 汤匙','（可选）芹菜末 1 汤匙'],steps:['开罐沥液——油浸的沥干，水浸的完全沥干。','将金枪鱼放入碗中，用叉拨散。','淋橄榄油和柠檬汁，撒盐和胡椒，轻拌。','金枪鱼沙拉：加蛋黄酱和芹菜末拌匀。','立即食用，可放生菜杯、吐司或卷饼中。'],notes:'大眼金枪鱼汞含量高于碎块浅色金枪鱼。需减钠可用水冲洗。'},
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
    en:{name:'Sugar Snap Peas',time:'5 min',servings:'1 cup',why:'A sweet, crunchy vegetable enjoyed raw or lightly cooked — rich in vitamin C and fibre.',ingredients:['Sugar snap peas 1 cup (about 10 pods, washed)','(Optional) sea salt pinch','(Optional) olive oil 1 tsp','(Optional) garlic clove 1, minced'],steps:['Wash the snap peas and trim off the stem end and any tough string along the seam.','Serve raw as a crunchy snack, optionally with a pinch of sea salt.','For a quick saute: heat olive oil in a skillet over medium-high heat, add snap peas and minced garlic, and stir-fry for 2-3 minutes until bright green and crisp-tender.','For steaming: place in a steamer basket over boiling water for 2 minutes.'],notes:'Snap peas are best enjoyed crisp — do not overcook. Look for bright green, plump pods with no blemishes.'},
    zh:{name:'甜脆豆',time:'5 分钟',servings:'1 杯',why:'爽脆清甜的蔬菜，生食或轻烹皆可——富含维生素C和纤维。',ingredients:['甜脆豆 1 杯（约 10 荚，洗净）','（可选）海盐 少许','（可选）橄榄油 1 茶匙','（可选）蒜 1 瓣，切末'],steps:['洗净甜脆豆，去蒂及荚缝硬筋。','生食作为脆爽零食，可撒少许海盐。','快炒：平底锅中大火加油，放入甜脆豆和蒜末翻炒 2-3 分钟至翠绿脆嫩。','蒸制：沸水上方蒸笼蒸 2 分钟。'],notes:'甜脆豆以脆为佳——不要过熟。选鲜绿饱满无斑点的豆荚。'},
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
    en:{name:'Kale',time:'5 min',servings:'1 cup',why:'A nutrient-dense leafy green — massaging with oil tenderises the leaves and reduces bitterness.',ingredients:['Kale 1 cup, stems removed and chopped','Olive oil 1 tsp','Lemon juice 1 tsp','Sea salt pinch','(Optional) nutritional yeast 1 tsp'],steps:['Remove the tough centre stems from the kale leaves and discard or save for stock. Finely chop the leaves.','Place chopped kale in a bowl. Add olive oil, lemon juice and a pinch of salt.','Massage the leaves with your hands for 1-2 minutes until they soften, darken slightly and reduce in volume by about half.','Let sit for 5 minutes to allow the acid to further tenderise the leaves.','Sprinkle with nutritional yeast if using and serve.'],notes:'Massaging kale is the secret to making it tender enough for raw salads. Lacinato (dinosaur) kale is more tender than curly kale.'},
    zh:{name:'羽衣甘蓝',time:'5 分钟',servings:'1 杯',why:'营养密集的叶菜——按摩揉油可软化叶片并减轻苦味。',ingredients:['羽衣甘蓝 1 杯，去梗切碎','橄榄油 1 茶匙','柠檬汁 1 茶匙','海盐 少许','（可选）营养酵母 1 茶匙'],steps:['去除羽衣甘蓝的硬梗（留作高汤用），切碎叶片。','放入碗中，加橄榄油、柠檬汁和少许盐。','用手按摩叶片 1-2 分钟至变软、颜色变深、体积减半。','静置 5 分钟让酸进一步软化。','撒营养酵母（如用）食用。'],notes:'按摩是让羽衣甘蓝柔软可生食的秘诀。恐龙羽衣甘蓝比卷边品种更嫩。'},
    macros:{protein:{g:2,pct:22},fat:{g:0,pct:0},netCarbs:{g:7,pct:78}}
  },
  {
    id:'v12', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-brussels-sprouts.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Roasted Brussels Sprouts',time:'30 min',servings:'4',why:'Caramelized and crispy on the outside, tender inside — roasting transforms Brussels sprouts into an irresistible side dish that even skeptics enjoy.',ingredients:['Brussels sprouts 1 lb (450 g), about 20 to 25 medium sprouts','Olive oil 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Garlic powder 1/2 tsp','Balsamic vinegar 1 tbsp (optional, for finishing)','Honey or maple syrup 1 tsp (optional, for caramelization)','(Optional add-ins) bacon strips 2, chopped and cooked, or grated Parmesan 2 tbsp'],steps:['Preheat the oven to 400F (200C). Line a large baking sheet with parchment paper.','Rinse the Brussels sprouts under cold water. Pat them dry thoroughly with a clean towel — wet sprouts will steam instead of roast.','Trim about 1/4 inch off the root end of each sprout with a paring knife. Remove and discard any yellow, wilted, or bruised outer leaves.','Cut each sprout in half lengthwise (top to bottom). For very large sprouts (over 1.5 inches), quarter them. Leave small sprouts whole.','Place the halved sprouts in a large bowl. Add 2 tbsp olive oil, 1/2 tsp salt, 1/4 tsp pepper, and 1/2 tsp garlic powder. Toss with your hands until every sprout is evenly coated — the oil should glisten on all surfaces.','Spread the sprouts cut-side down on the baking sheet in a single layer. This is important: the flat cut side makes direct contact with the hot pan, creating the best caramelization. Leave space between sprouts — overcrowding causes steaming instead of roasting.','Roast for 12 minutes. Remove the pan and use a spatula to flip each sprout so the other cut side faces down.','Return to the oven and roast for 10 to 12 more minutes until the outer leaves are dark brown and crispy and the sprouts are tender when pierced with a fork.','If using honey or maple syrup: drizzle 1 tsp over the hot sprouts and toss immediately to coat. The heat will caramelize the sugar.','If using balsamic vinegar: drizzle 1 tbsp over the sprouts right after removing from the oven and toss to coat.','Optional: sprinkle with cooked bacon bits or grated Parmesan before serving.','Taste and add more salt if needed. Serve immediately while hot and crispy.'],notes:'Do not overcrowd the pan — use two baking sheets if needed. Sprouts that are packed too tightly steam instead of roast and become soft instead of crispy. For extra flavour, toss the sprouts with 2 chopped bacon strips before roasting — the bacon fat flavours the sprouts as they cook.'},
    zh:{name:'烤球芽甘蓝',time:'30 分钟',servings:'4 份',why:'外焦内嫩的球芽甘蓝——烤制后变成令人无法抗拒的配菜，连不喜欢的人也会喜欢。',ingredients:['球芽甘蓝 450 克，约 20 至 25 个中型','橄榄油 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','蒜粉 半茶匙','香醋 1 汤匙（可选，提味用）','蜂蜜或枫糖浆 1 茶匙（可选，增焦糖化）','（可选加料）培根 2 条，切碎炒熟，或帕玛森芝士 2 汤匙，擦丝'],steps:['烤箱预热 400F（200C）。大烤盘铺烘焙纸。','球芽甘蓝冷水冲洗，用干净毛巾彻底吸干——湿的会蒸而非烤。','用小刀切去根部约 0.5 厘米。剥去丢弃发黄、萎蔫或受损的外叶。','每个纵切对半（从头到底）。超大的（超 4 厘米）切四瓣。小的可整颗留。','切好的球芽甘蓝放大碗中，加 2 汤匙橄榄油、半茶匙盐、1/4 茶匙胡椒和半茶匙蒜粉，用手翻拌至每个均匀裹油——各面应油亮。','切面朝下平铺烤盘单层。这很重要：平面切面直接接触热锅，产生最佳焦糖化。留间距——拥挤会蒸而非烤。','烤 12 分钟。取出用铲翻面使另一切面朝下。','放回烤箱再烤 10 至 12 分钟至外叶深棕酥脆、叉可轻松刺入。','如用蜂蜜或枫糖浆：在热球芽甘蓝上淋 1 茶匙立即翻裹——热量会焦糖化糖分。','如用香醋：出炉后立即淋 1 汤匙翻裹。','可选：上桌前撒炒熟培根碎或帕玛森丝。','试味按需补盐。趁热酥脆时立即食用。'],notes:'不要挤满烤盘——需要两张烤盘就分批。太挤会蒸而非烤，变软不脆。增味可在烤前拌入 2 条切碎培根——培根油在烤制过程中调味球芽甘蓝。'},
    macros:{protein:{g:3,pct:18},fat:{g:1,pct:14},netCarbs:{g:11,pct:68}}
  },
  {
    id:'v13', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-carrots.jpg', emoji:'🥕', foodCats:["vegetable"],
    en:{name:'Roasted Carrots',time:'30 min',servings:'4',why:'Sweet and caramelized root vegetables that pair with any main dish.',ingredients:['Carrots 1 lb (450 g)','Olive oil 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Honey or maple syrup 1 tbsp (optional)','Fresh thyme 1 tsp (optional)'],steps:['Preheat oven to 400F (200C).','Peel the carrots and cut into 2-inch sticks or diagonal slices.','Toss with olive oil, salt, pepper and honey if using.','Spread in a single layer on a baking sheet.','Roast for 20-25 minutes, stirring once, until tender and caramelized at the edges.','Garnish with fresh thyme if using.'],notes:'Rainbow carrots add visual appeal. Cut evenly for uniform cooking.'},
    zh:{name:'烤胡萝卜',time:'30 分钟',servings:'4 份',why:'焦糖化的甜味根菜，百搭任何主菜。',ingredients:['胡萝卜 450 克','橄榄油 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','蜂蜜或枫糖 1 汤匙（可选）','新鲜百里香 1 茶匙（可选）'],steps:['烤箱预热 400F（200C）。','胡萝卜去皮切 5 厘米条或斜片。','拌橄榄油、盐、胡椒和蜂蜜（如用）。','平铺烤盘不重叠。','烤 20-25 分钟，中途翻一次，至软且边缘焦糖化。','撒新鲜百里香（如用）。'],notes:'彩色胡萝卜更美观。均匀切块以受热一致。'},
    macros:{protein:{g:1,pct:6},fat:{g:2,pct:26},netCarbs:{g:12,pct:69}}
  },
  {
    id:'v14', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-butternut-squash.jpg', emoji:'🎃', foodCats:["vegetable"],
    en:{name:'Roasted Butternut Squash',time:'35 min',servings:'4',why:'Sweet, caramelised squash with a crispy edge — a comforting autumn side rich in vitamin A and fibre.',ingredients:['Butternut squash 1 medium (about 2 lb / 900 g)','Olive oil 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Maple syrup 1 tsp (optional)','Cinnamon 1/4 tsp (optional)'],steps:['Preheat oven to 400F (200C). Line a baking sheet with parchment paper.','Peel the squash with a vegetable peeler, cut in half lengthwise, and scoop out the seeds with a spoon.','Cut the squash into 1-inch cubes.','Toss with olive oil, salt, pepper, maple syrup and cinnamon (if using) in a bowl until evenly coated.','Spread in a single layer on the baking sheet, leaving space between pieces.','Roast for 25-30 minutes, flipping once halfway, until edges are caramelised and the squash is tender when pierced with a fork.'],notes:'The skin is edible once roasted if you prefer to skip peeling. For extra caramelisation, roast at 425F.'},
    zh:{name:'烤南瓜',time:'35 分钟',servings:'4 份',why:'焦糖甜香、边缘酥脆的南瓜——秋日暖心配菜，富含维生素A和纤维。',ingredients:['南瓜 1 个（约 900 克）','橄榄油 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','枫糖浆 1 茶匙（可选）','肉桂粉 1/4 茶匙（可选）'],steps:['烤箱预热 400F（200C），烤盘铺烘焙纸。','削皮器去皮，纵向切半，勺挖去籽。','切成 3 厘米方块。','碗中用橄榄油、盐、胡椒、枫糖浆和肉桂（如用）拌匀。','平铺烤盘留间距。','烤 25-30 分钟，中途翻面一次，至边缘焦糖化、叉可插入即软。'],notes:'烤后皮可食。更焦可 425F 烤。'},
    macros:{protein:{g:1,pct:5},fat:{g:1,pct:12},netCarbs:{g:15,pct:82}}
  },
  {
    id:'v15', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-beets.jpg', emoji:'🫛', foodCats:["vegetable"],
    en:{name:'Roasted Beets',time:'35 min',servings:'4',why:'Earthy, sweet beets with concentrated flavour — roasting intensifies their natural sugars. Peeled and cubed before roasting for faster cooking and caramelized edges.',ingredients:['Beets 4 medium (about 1.5 lb / 680 g) — red, golden, or mixed','Olive oil 1 to 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) balsamic vinegar 1 tbsp, for finishing','(Optional) fresh goat cheese or feta 2 tbsp, crumbled','(Optional) fresh thyme leaves 1 tsp'],steps:['Preheat the oven to 400F (200C). Line a baking sheet with parchment paper.','Trim off the top and bottom of each beet with a knife — remove about 1/4 inch from each end. Discard the stems and root tail.','Peel the beets with a vegetable peeler, removing all the outer skin. (Wear disposable gloves if using red beets to avoid staining your hands.)','Cut each peeled beet into 3/4-inch (2 cm) cubes. Try to keep the pieces roughly the same size so they cook evenly.','Place the beet cubes in a bowl. Add 1 to 2 tbsp olive oil, 1/2 tsp salt, and 1/4 tsp pepper. Toss with your hands or a spoon until every cube is evenly coated with oil.','Spread the cubes in a single layer on the parchment-lined baking sheet, leaving space between pieces. Do not overcrowd — use two sheets if needed.','Roast for 25 to 30 minutes, stirring once halfway through (at the 15-minute mark) so all sides caramelize evenly. The beets are done when they are tender when pierced with a fork and have slightly caramelized, darkened edges.','Remove from the oven. If using balsamic vinegar, drizzle 1 tbsp over the hot beets and toss to coat — the acidity balances the sweetness.','If using goat cheese or feta, sprinkle 2 tbsp crumbled cheese over the warm beets just before serving. Sprinkle with fresh thyme leaves if using.','Serve warm or at room temperature.'],notes:'Peeling and cubing beets before roasting (rather than wrapping whole in foil) cuts the cooking time in half and creates caramelized, crispy edges. Golden beets are milder and will not stain your hands. Beets pair beautifully with goat cheese, walnuts, and balsamic.'},
    zh:{name:'烤甜菜根',time:'35 分钟',servings:'4 份',why:'泥土味、甜味浓缩的甜菜根——烤制增强天然糖分。先去皮切块再烤，更快且边缘焦糖化。',ingredients:['甜菜根 4 个中型（约 680 克）——红色、金色或混合','橄榄油 1 至 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','（可选）香醋 1 汤匙，提味用','（可选）新鲜山羊奶酪或羊奶酪 2 汤匙，碎','（可选）新鲜百里香叶 1 茶匙'],steps:['烤箱预热 400F（200C）。烤盘铺烘焙纸。','用刀切去每个甜菜根的顶部和底部各约 0.5 厘米。丢弃茎和根尾。','用削皮器削去所有外皮。（用红甜菜根可戴一次性手套防染色。）','每个去皮甜菜根切成 2 厘米方块。尽量大小均匀以便受热均匀。','甜菜根块放入碗中，加 1 至 2 汤匙橄榄油、半茶匙盐和 1/4 茶匙胡椒，用手或勺翻拌至每块均匀裹油。','单层铺在烘焙纸上，留间距。不要拥挤——需要两张烤盘就分批。','烤 25 至 30 分钟，中途（15 分钟时）翻一次使各面均匀焦糖化。叉可轻松刺入且边缘微焦深色即熟。','出炉。如用香醋，淋 1 汤匙在热甜菜根上翻裹——酸味平衡甜味。','如用山羊奶酪或羊奶酪，上桌前撒 2 汤匙碎奶酪在温甜菜根上。撒百里香叶（如用）。','温食或室温食用。'],notes:'先去皮切块再烤（而非整颗包锡纸）可将烹饪时间减半，且产生焦糖化酥脆边缘。金甜菜根更温和且不染手。甜菜根与山羊奶酪、核桃和香醋绝配。'},
    macros:{protein:{g:2,pct:13},fat:{g:0,pct:0},netCarbs:{g:13,pct:87}}
  },
  {
    id:'v16', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'roasted-parsnips.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Roasted Parsnips',time:'30 min',servings:'4',why:'Sweet, nutty roasted parsnips with caramelised edges — an underappreciated root vegetable worth discovering.',ingredients:['Parsnips 4 medium (about 1 lb / 450 g)','Olive oil 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Honey or maple syrup 1 tsp (optional)','Fresh thyme 1 tsp (optional)'],steps:['Preheat oven to 425F (220C). Line a baking sheet with parchment paper.','Peel parsnips and cut into 2-inch sticks, similar to thick fries.','Toss with olive oil, salt, pepper, honey and thyme in a bowl until evenly coated.','Spread in a single layer on the baking sheet.','Roast for 20-25 minutes, flipping once halfway, until golden and tender with caramelised edges.','Serve immediately.'],notes:'Parsnips become sweeter after a frost — late autumn and winter crops are the best. Remove the woody core if present.'},
    zh:{name:'烤欧防风',time:'30 分钟',servings:'4 份',why:'甜坚果味的焦边烤欧防风——值得发现的根菜。',ingredients:['欧防风 4 根（约 450 克）','橄榄油 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','蜂蜜或枫糖浆 1 茶匙（可选）','新鲜百里香 1 茶匙（可选）'],steps:['烤箱预热 425F（220C），烤盘铺烘焙纸。','去皮切 5 厘米条状如粗薯条。','碗中用橄榄油、盐、胡椒、蜂蜜和百里香拌匀。','平铺烤盘。','烤 20-25 分钟，中途翻面一次，至金黄软嫩边缘焦糖化。','立即食用。'],notes:'霜后欧防风更甜——秋冬产最佳。如有木质芯则去除。'},
    macros:{protein:{g:2,pct:9},fat:{g:1,pct:10},netCarbs:{g:18,pct:81}}
  },
  {
    id:'v17', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-broccoli.jpg', emoji:'🥦', foodCats:["vegetable"],
    en:{name:'Steamed Broccoli',time:'12 min',servings:'4',why:'A quick, nutrient-preserving way to prepare this cruciferous vegetable.',ingredients:['Broccoli 1 head (about 1 lb / 450 g)','Water 1 cup','Sea salt 1/4 tsp','Olive oil or butter 1 tsp (optional)','Lemon juice 1 tsp (optional)'],steps:['Cut the broccoli into florets of even size. Peel and slice the stem.','Bring 1 cup water to a boil in a pot with a steamer basket.','Place florets in the steamer basket, cover, and steam for 4-5 minutes until bright green and tender-crisp.','Immediately transfer to a bowl to stop cooking.','Toss with salt, olive oil and lemon juice if using.'],notes:'Do not overcook — broccoli loses nutrients and color. The stem is edible and delicious when peeled.'},
    zh:{name:'蒸西兰花',time:'12 分钟',servings:'4 份',why:'保留营养的快速十字花科蔬菜做法。',ingredients:['西兰花 1 个（约 450 克）','清水 1 杯','海盐 1/4 茶匙','橄榄油或黄油 1 茶匙（可选）','柠檬汁 1 茶匙（可选）'],steps:['西兰花切均匀小朵，茎去皮切片。','锅中加水 1 杯，放蒸笼煮沸。','花放入蒸笼盖盖蒸 4-5 分钟至翠绿脆嫩。','立即移入碗中止热。','拌盐、橄榄油和柠檬汁（如用）。'],notes:'不要过熟——会损失营养和颜色。茎去皮后也可食用。'},
    macros:{protein:{g:3,pct:33},fat:{g:0,pct:0},netCarbs:{g:6,pct:67}}
  },
  {
    id:'v18', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-green-beans.jpg', emoji:'🫛', foodCats:["vegetable"],
    en:{name:'Steamed Green Beans',time:'8 min',servings:'4',why:'Crisp-tender bright green beans — steaming preserves their colour and nutrients better than boiling.',ingredients:['Green beans 8 oz (225 g), trimmed','Water 1 inch','Sea salt 1/4 tsp','(Optional) butter 1 tsp','(Optional) lemon juice 1 tsp'],steps:['Trim the stem ends of the green beans and wash them.','Bring 1 inch of water to a boil in a pot with a steamer basket.','Add beans to the steamer basket, cover, and steam for 5-7 minutes until crisp-tender — they should bend but still have a slight snap.','Remove from heat immediately and transfer to a serving bowl to stop the cooking.','Toss with salt, butter and lemon juice if using. Serve hot.'],notes:'For the brightest colour, plunge steamed beans into ice water for 30 seconds, then drain. This stops cooking and preserves the green.'},
    zh:{name:'蒸四季豆',time:'8 分钟',servings:'4 份',why:'脆嫩翠绿的四季豆——蒸制比煮更能保色和营养。',ingredients:['四季豆 225 克，去蒂','清水 1 英寸深','海盐 1/4 茶匙','（可选）黄油 1 茶匙','（可选）柠檬汁 1 茶匙'],steps:['去蒂洗净四季豆。','锅中加 1 英寸水煮沸，放蒸笼。','放入四季豆盖盖蒸 5-7 分钟至脆嫩——可弯但仍有弹性。','立即离火移至碗中停止烹饪。','拌入盐、黄油和柠檬汁（如用），热食。'],notes:'为最翠绿色，蒸后冰水浸泡 30 秒再沥干。此法止烹保色。'},
    macros:{protein:{g:2,pct:22},fat:{g:0,pct:0},netCarbs:{g:7,pct:78}}
  },
  {
    id:'v19', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-asparagus.jpg', emoji:'🌿', foodCats:["vegetable"],
    en:{name:'Steamed Asparagus',time:'7 min',servings:'4',why:'Tender-crisp asparagus with a clean, grassy flavour — steaming is the gentlest way to cook it.',ingredients:['Asparagus 1 bunch (about 1 lb / 450 g)','Water 1 inch','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) olive oil 1 tsp','(Optional) lemon juice 1 tsp'],steps:['Snap off the woody bottom ends of each asparagus spear — they will break naturally at the right point.','Wash the spears and place in a steamer basket over 1 inch of boiling water.','Cover and steam for 4-6 minutes depending on thickness: thin spears 4 min, thick spears 6 min.','Test by piercing the thickest part with a fork — it should slide in with slight resistance.','Remove immediately, season with salt, pepper, olive oil and lemon juice.','Serve hot or at room temperature.'],notes:'Choose asparagus with tightly closed tips and firm stalks. Store upright in a glass of water in the fridge for up to 4 days.'},
    zh:{name:'蒸芦笋',time:'7 分钟',servings:'4 份',why:'嫩脆的芦笋配清草味——蒸制是最温和的烹饪方式。',ingredients:['芦笋 1 束（约 450 克）','清水 1 英寸深','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）橄榄油 1 茶匙','（可选）柠檬汁 1 茶匙'],steps:['折去每根芦笋底部木质部分——会自然断在对的位置。','洗净放入沸水上方蒸笼中（水深 1 英寸）。','盖盖蒸 4-6 分钟：细的 4 分钟，粗的 6 分钟。','用叉刺最粗处——略有阻力即可。','立即取出，撒盐、胡椒、橄榄油和柠檬汁。','热食或室温食用。'],notes:'选笋尖紧闭、茎干硬挺的芦笋。冰箱中竖放水杯内可存 4 天。'},
    macros:{protein:{g:3,pct:38},fat:{g:0,pct:0},netCarbs:{g:5,pct:62}}
  },
  {
    id:'v20', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-carrots.jpg', emoji:'🥕', foodCats:["vegetable"],
    en:{name:'Steamed Carrots',time:'8 min',servings:'4',why:'Sweet, tender carrots that retain more nutrients steamed than boiled — a simple and colourful side dish.',ingredients:['Carrots 4 medium (about 1 lb / 450 g)','Water 1 inch','Sea salt 1/4 tsp','(Optional) butter 1 tsp','(Optional) honey 1 tsp','(Optional) fresh dill 1 tsp'],steps:['Peel carrots and cut into 2-inch sticks or rounds, about 1/4 inch thick.','Bring 1 inch of water to a boil in a pot with a steamer basket.','Add carrots, cover, and steam for 5-7 minutes until tender but not mushy — a fork should pierce with slight resistance.','Drain any excess water and transfer to a serving bowl.','Toss with salt, butter, honey and dill if using. Serve immediately.'],notes:'Rainbow carrots add visual appeal. Baby carrots work but take 1-2 minutes less to steam.'},
    zh:{name:'蒸胡萝卜',time:'8 分钟',servings:'4 份',why:'甜软的胡萝卜——蒸制比煮保留更多营养，简单多彩的配菜。',ingredients:['胡萝卜 4 根（约 450 克）','清水 1 英寸深','海盐 1/4 茶匙','（可选）黄油 1 茶匙','（可选）蜂蜜 1 茶匙','（可选）新鲜莳萝 1 茶匙'],steps:['去皮切 5 厘米条或 0.5 厘米圆片。','锅中加 1 英寸水煮沸，放蒸笼。','放入胡萝卜盖盖蒸 5-7 分钟至软但不烂——叉刺略有阻力。','沥去余水移入碗中。','拌入盐、黄油、蜂蜜和莳萝（如用），立即食用。'],notes:'彩虹胡萝卜增色。小胡萝卜可用但少蒸 1-2 分钟。'},
    macros:{protein:{g:1,pct:11},fat:{g:0,pct:0},netCarbs:{g:8,pct:89}}
  },
  {
    id:'v21', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'boiled-corn.jpg', emoji:'🌽', foodCats:["vegetable", "carb"],
    en:{name:'Boiled Corn',time:'10 min',servings:'4 ears',why:'Sweet, juicy corn on the cob — boiling is the classic method that delivers plump, tender kernels.',ingredients:['Fresh corn on the cob 4 ears','Water 4 quarts (enough to cover)','Sea salt 1 tsp','(Optional) butter 2 tbsp','(Optional) black pepper 1/8 tsp'],steps:['Husk the corn and remove all silk threads. Break or cut each ear in half if desired.','Bring a large pot of salted water to a rolling boil.','Add the corn and boil for 5-7 minutes — do not overcook or the kernels become starchy and tough.','Remove with tongs and let drain briefly.','Brush with butter and season with salt and pepper if desired. Serve immediately.'],notes:'For the sweetest corn, cook it within hours of picking — sugar converts to starch rapidly after harvest.'},
    zh:{name:'煮玉米',time:'10 分钟',servings:'4 根',why:'甜嫩多汁的煮玉米——经典煮法制出饱满软嫩的玉米粒。',ingredients:['新鲜玉米 4 根','清水（没过玉米）','海盐 1 茶匙','（可选）黄油 2 汤匙','（可选）黑胡椒 1/8 茶匙'],steps:['剥去玉米皮和须。如需可将每根折或切半。','大锅加盐水大火煮沸。','放入玉米煮 5-7 分钟——不要过熟否则粒变硬粉。','用夹子取出沥水。','刷黄油撒盐和胡椒（如用），立即食用。'],notes:'采摘后数小时内煮制最甜——采摘后糖分迅速转为淀粉。'},
    macros:{protein:{g:4,pct:16},fat:{g:1,pct:9},netCarbs:{g:19,pct:75}}
  },
  {
    id:'v22', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sautéed-mushrooms.jpg', emoji:'🍄', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Sauteed Mushrooms',time:'12 min',servings:'4',why:'Savory umami-rich side that enhances steaks, burgers and bowls.',ingredients:['Cremini or button mushrooms 8 oz (225 g)','Butter 1 tbsp','Olive oil 1 tbsp','Garlic 2 cloves, minced','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Fresh parsley 1 tbsp, chopped (optional)'],steps:['Clean the mushrooms with a damp paper towel. Slice them 1/4 inch thick.','Heat butter and olive oil in a skillet over medium-high heat.','Add mushrooms in a single layer. Do not stir for 2 minutes to allow browning.','Stir and cook 5-6 more minutes until deeply golden and any liquid has evaporated.','Add garlic in the last minute. Season with salt and pepper.','Garnish with parsley if using.'],notes:'Do not wash mushrooms in water — they absorb it and become soggy. A dry pan start gives better browning.'},
    zh:{name:'炒蘑菇',time:'12 分钟',servings:'4 份',why:'鲜味浓郁的配菜，可提升牛排、汉堡和饭碗。',ingredients:['褐蘑菇或白蘑菇 225 克','黄油 1 汤匙','橄榄油 1 汤匙','蒜 2 瓣，切末','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','新鲜欧芹 1 汤匙，切碎（可选）'],steps:['湿厨房纸擦净蘑菇，切 5 毫米片。','平底中大火加黄油和橄榄油。','蘑菇平铺不搅，静置 2 分钟上色。','翻炒 5-6 分钟至深金黄、液体蒸发。','最后一分钟加蒜末，撒盐和胡椒。','撒欧芹（如用）。'],notes:'不要用水洗蘑菇——会吸水变软。干锅开始上色更好。'},
    macros:{protein:{g:3,pct:19},fat:{g:4,pct:56},netCarbs:{g:4,pct:25}}
  },
  {
    id:'v23', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sautéed-spinach.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Sautéed Spinach',time:'5 min',servings:'2',why:'Quick-cooked spinach with garlic — a nutrient-dense side that wilts down to concentrate its vitamins.',ingredients:['Fresh baby spinach 6 cups (180 g)','Olive oil 1 tbsp','Garlic 2 cloves, sliced','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) lemon juice 1 tsp','(Optional) red pepper flakes pinch'],steps:['Wash spinach if needed and drain well — wet spinach will steam rather than saute.','Heat olive oil in a large skillet or wok over medium heat.','Add sliced garlic and red pepper flakes if using. Cook for 30 seconds until fragrant but not browned.','Add spinach by the handful, tossing with tongs to coat with oil. Add more as each batch wilts.','Cook for 2-3 minutes total until all spinach is wilted but still bright green.','Season with salt, pepper and lemon juice. Serve immediately.'],notes:'Spinach reduces dramatically — 6 cups of raw spinach yields about 1 cup cooked. Do not overcook or it becomes mushy.'},
    zh:{name:'炒菠菜',time:'5 分钟',servings:'2 份',why:'蒜香快炒菠菜——营养密集的配菜，炒后浓缩维生素。',ingredients:['新鲜嫩菠菜 6 杯（180 克）','橄榄油 1 汤匙','蒜 2 瓣，切片','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）柠檬汁 1 茶匙','（可选）红辣椒片 少许'],steps:['如需洗净沥干——湿菠菜会变蒸而非炒。','大平底锅或炒锅中火加橄榄油。','放入蒜片和红辣椒片（如用），炒 30 秒出香但不焦。','用手抓菠菜分批加入，用夹子翻拌裹油。','共炒 2-3 分钟至全部软塌但仍翠绿。','撒盐、胡椒和柠檬汁，立即食用。'],notes:'菠菜大幅缩小——6 杯生菠菜约出 1 杯熟。不要过熟否则变糊。'},
    macros:{protein:{g:3,pct:26},fat:{g:2,pct:39},netCarbs:{g:4,pct:35}}
  },
  {
    id:'v24', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'sautéed-zucchini.jpg', emoji:'🥒', foodCats:["vegetable"],
    en:{name:'Sauteed Zucchini',time:'10 min',servings:'4',why:'A light, quick summer vegetable that is low in carbs and high in vitamin C.',ingredients:['Zucchini 2 medium (about 1 lb / 450 g)','Olive oil 1 tbsp','Garlic 2 cloves, minced','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Fresh basil 1 tsp, torn (optional)'],steps:['Slice the zucchini into 1/4-inch rounds or half-moons.','Heat olive oil in a skillet over medium-high heat.','Add zucchini in a single layer. Cook 2-3 minutes per side until golden.','Add garlic and cook 1 minute more until fragrant.','Season with salt and pepper. Garnish with basil.'],notes:'Salt right before cooking — salting too early draws out water and makes zucchini soggy. For a crispier result, use high heat and do not overcrowd.'},
    zh:{name:'炒西葫芦',time:'10 分钟',servings:'4 份',why:'清淡快速的夏季蔬菜，低碳水高维生素 C。',ingredients:['西葫芦 2 根（约 450 克）','橄榄油 1 汤匙','蒜 2 瓣，切末','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','新鲜罗勒 1 茶匙，撕碎（可选）'],steps:['西葫芦切 5 毫米圆片或半月片。','平底中大火加橄榄油。','西葫芦平铺，每面炒 2-3 分钟至金黄。','加蒜炒 1 分钟至出香。','撒盐和胡椒，撒罗勒。'],notes:'临炒再加盐——过早加盐会出水变软。高温不挤叠可更脆。'},
    macros:{protein:{g:2,pct:19},fat:{g:2,pct:43},netCarbs:{g:4,pct:38}}
  },
  {
    id:'v25', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'spaghetti-squash.jpg', emoji:'🎃', foodCats:["vegetable", "carb"],
    en:{name:'Spaghetti Squash',time:'40 min',servings:'4',why:'A low-carb vegetable that shreds into noodle-like strands — a fun, nutritious alternative to pasta.',ingredients:['Spaghetti squash 1 medium (about 3 lb / 1.4 kg)','Olive oil 1 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp'],steps:['Preheat oven to 400F (200C).','Carefully cut the squash in half lengthwise — microwave for 3 minutes first to soften if needed.','Scoop out the seeds and stringy bits with a spoon.','Rub the cut sides with olive oil and season with salt and pepper.','Place cut-side down on a baking sheet lined with parchment paper.','Roast for 35-40 minutes until the skin gives slightly when pressed.','Flip over and use a fork to scrape the flesh into spaghetti-like strands.','Toss with more oil or sauce and serve.'],notes:'Do not overcook or the strands become mushy. The squash is ready when the strands separate easily but still have a slight bite.'},
    zh:{name:'金丝瓜',time:'40 分钟',servings:'4 份',why:'低碳水蔬菜——撕成面条状，是有趣营养的意面替代。',ingredients:['金丝瓜 1 个（约 1.4 公斤）','橄榄油 1 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙'],steps:['烤箱预热 400F（200C）。','小心纵向切半——可先微波 3 分钟软化。','勺挖去籽和丝。','切面抹橄榄油，撒盐和胡椒。','切面朝下放在铺烘焙纸的烤盘上。','烤 35-40 分钟至按压外皮微凹。','翻面用叉刮出面条状细丝。','拌油或酱食用。'],notes:'不要过熟否则丝变糊。丝易分离但仍有嚼劲即熟。'},
    macros:{protein:{g:1,pct:10},fat:{g:1,pct:22},netCarbs:{g:7,pct:68}}
  },
  {
    id:'v26', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'mashed-turnips.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Mashed Turnips',time:'25 min',servings:'4',why:'Creamy, peppery mashed turnips — a lower-carb alternative to mashed potatoes with a distinctive earthy flavour.',ingredients:['Turnips 4 medium (about 1.5 lb / 680 g)','Butter 2 tbsp','Milk or cream 3 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) garlic clove 1, roasted'],steps:['Peel turnips and cut into 1-inch cubes.','Place in a pot and cover with salted water. Bring to a boil.','Boil for 15-20 minutes until very tender when pierced with a fork.','Drain thoroughly and return to the warm pot.','Add butter, milk, salt and pepper. Mash with a potato masher or hand blender until smooth.','Taste and adjust seasoning. Serve hot.'],notes:'Turnips have a slightly peppery, bitter edge — a pinch of sugar in the cooking water mellows it. Parsnips can be added for sweetness.'},
    zh:{name:'芜菁泥',time:'25 分钟',servings:'4 份',why:'奶滑微辣的芜菁泥——低碳水替代土豆泥，独特泥土风味。',ingredients:['芜菁 4 个（约 680 克）','黄油 2 汤匙','牛奶或奶油 3 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','（可选）蒜 1 瓣，烤制'],steps:['去皮切 3 厘米块。','放入锅中加盐水没过，煮沸。','煮 15-20 分钟至叉可轻松穿透。','彻底沥干放回温锅。','加黄油、牛奶、盐和胡椒，用压泥器或搅拌棒压至顺滑。','尝味调整，热食。'],notes:'芜菁略带辛辣苦味——煮水中加少许糖可缓和。可加欧防风增甜。'},
    macros:{protein:{g:2,pct:16},fat:{g:1,pct:18},netCarbs:{g:8,pct:65}}
  },
  {
    id:'v27', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'steamed-mixed-vegetables.jpg', emoji:'🥬', foodCats:["vegetable"],
    en:{name:'Steamed Mixed Vegetables',time:'10 min',servings:'4',why:'A colourful medley of seasonal vegetables — steaming preserves their individual flavours and nutrients.',ingredients:['Broccoli florets 1 cup','Carrot 1, sliced','Cauliflower florets 1 cup','Green beans 8, trimmed','Water 1 inch','Sea salt 1/4 tsp','(Optional) olive oil 1 tsp','(Optional) lemon juice 1 tsp'],steps:['Wash and prepare all vegetables: cut broccoli and cauliflower into florets, slice carrots, trim beans.','Bring 1 inch of water to a boil in a pot with a steamer basket.','Add the harder vegetables first (carrots and cauliflower), cover, and steam for 3 minutes.','Add softer vegetables (broccoli and green beans), cover, and steam for 3-4 more minutes until all are crisp-tender.','Remove from heat, season with salt, olive oil and lemon juice.','Serve immediately.'],notes:'Stagger vegetables by hardness — dense roots need more time than leafy greens. Frozen mixed vegetables work too — steam for 5 minutes.'},
    zh:{name:'蒸杂菜',time:'10 分钟',servings:'4 份',why:'多彩时令蔬菜——蒸制保留各自风味和营养。',ingredients:['西兰花小朵 1 杯','胡萝卜 1 根，切片','花椰菜小朵 1 杯','四季豆 8 根，去蒂','清水 1 英寸深','海盐 1/4 茶匙','（可选）橄榄油 1 茶匙','（可选）柠檬汁 1 茶匙'],steps:['洗净切备所有蔬菜：西兰花和花椰菜切小朵，胡萝卜切片，四季豆去蒂。','锅中加 1 英寸水煮沸放蒸笼。','先放硬蔬菜（胡萝卜和花椰菜）盖盖蒸 3 分钟。','加入软蔬菜（西兰花和四季豆）盖盖再蒸 3-4 分钟至脆嫩。','离火撒盐、橄榄油和柠檬汁。','立即食用。'],notes:'按硬度分批蒸——根类需更长时间。冷冻杂菜也可——蒸 5 分钟。'},
    macros:{protein:{g:2,pct:20},fat:{g:0,pct:0},netCarbs:{g:8,pct:80}}
  },
  {
    id:'v28', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'coleslaw.jpg', emoji:'🥗', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Coleslaw',time:'10 min',servings:'4',why:'A crisp, creamy cabbage salad — a refreshing side that pairs with everything from burgers to fish. The key is finely shredded cabbage and a balanced sweet-tangy dressing.',ingredients:['Green cabbage 4 cups (about 1/2 medium head), finely shredded','Carrot 1 large, peeled and grated on the large holes of a box grater','Mayonnaise 3 tbsp (or 2 tbsp mayo + 1 tbsp Greek yogurt for lighter)','Apple cider vinegar 1 tbsp','Honey or granulated sugar 1 tsp','Celery seed 1/4 tsp (optional, adds classic deli flavour)','Dijon mustard 1/2 tsp (optional, adds depth)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) red cabbage 1 cup, shredded, for colour'],steps:['Shred the cabbage: remove any loose outer leaves, cut the head into quarters through the core, and cut out the tough core from each quarter. Slice each quarter as thinly as possible across the grain using a sharp knife or a mandoline. Aim for pieces 1/16 to 1/8 inch wide.','Grate the carrot on the large holes of a box grater. You should get about 1 cup of grated carrot.','In a small bowl or measuring cup, whisk together the mayonnaise, apple cider vinegar, honey, celery seed, Dijon mustard, salt, and pepper until smooth and well combined. Taste the dressing — it should be creamy, tangy, and slightly sweet. Adjust vinegar for more tang or honey for more sweetness.','In a large bowl, combine the shredded green cabbage (and red cabbage if using) and grated carrot. Toss with your hands to mix.','Pour the dressing over the cabbage mixture. Use tongs or two large spoons to toss everything together thoroughly, lifting from the bottom to ensure every strand is coated.','Let the coleslaw sit at room temperature for 10 minutes, or refrigerate for 20 to 30 minutes before serving. The cabbage will soften slightly and the flavours will meld and improve.','Taste again before serving and adjust salt and pepper if needed. The vinegar continues to tenderize the cabbage over time.'],notes:'For a lighter version, substitute half the mayo with plain Greek yogurt. Red cabbage adds beautiful colour. The slaw keeps for up to 2 days refrigerated but is best within the first 24 hours — after that the cabbage loses its crunch. Do not dress the slaw until close to serving time for maximum crispness.'},
    zh:{name:'凉拌卷心菜',time:'10 分钟',servings:'4 份',why:'爽脆奶滑的卷心菜沙拉——百搭配菜，从汉堡到鱼都合适。关键是细切卷心菜和平衡的酸甜酱汁。',ingredients:['绿卷心菜 4 杯（约半个中型），细切','胡萝卜 1 大根，去皮用粗孔刨丝器刨丝','蛋黄酱 3 汤匙（或 2 汤匙蛋黄酱加 1 汤匙希腊酸奶更轻）','苹果醋 1 汤匙','蜂蜜或白砂糖 1 茶匙','芹菜籽 1/4 茶匙（可选，增添经典熟食风味）','第戎芥末 半茶匙（可选，增层次）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）紫甘蓝 1 杯，切丝，增色'],steps:['切卷心菜：剥去外层松散叶，从中心切四瓣，切去每瓣的硬芯。用利刀或 mandoline 尽可能逆纹薄切，目标 1 至 2 毫米宽。','胡萝卜用粗孔刨丝器刨丝，约 1 杯。','小碗或量杯中搅打蛋黄酱、苹果醋、蜂蜜、芹菜籽、第戎芥末、盐和胡椒至顺滑均匀。试味——应奶滑、微酸、略甜。醋多更酸，蜂蜜多更甜。','大碗中混合卷心菜丝（和紫甘蓝如用）和胡萝卜丝，用手拌匀。','淋酱汁在卷心菜上，用夹子或两把大勺彻底翻拌，从底部翻起确保每根都裹酱。','室温静置 10 分钟，或冷藏 20 至 30 分钟后食用。卷心菜会略微软化，风味融合更佳。','上桌前再试味，按需调盐和胡椒。醋会持续软化卷心菜。'],notes:'更轻可用一半希腊酸奶替代蛋黄酱。紫甘蓝增色。冷藏可存 2 天但前 24 小时最佳——之后卷心菜失去脆度。接近食用时才拌酱以保持最脆。'},
    macros:{protein:{g:2,pct:7},fat:{g:8,pct:64},netCarbs:{g:8,pct:29}}
  },
  {
    id:'v29', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'simple-green-salad.jpg', emoji:'🥗', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Simple Green Salad',time:'10 min',servings:'2',why:'A refreshing side salad that adds fiber and vitamins to any meal.',ingredients:['Mixed salad greens 4 cups (80 g)','Cucumber 1/2, sliced','Cherry tomatoes 6, halved','Olive oil 1 tbsp','Lemon juice or apple cider vinegar 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp'],steps:['Wash the greens and spin dry. Tear into bite-sized pieces.','In a large bowl, combine greens, cucumber slices and cherry tomato halves.','In a small jar, shake together olive oil, lemon juice, salt and pepper.','Pour the dressing over the salad and toss gently to coat.','Serve immediately.'],notes:'Dry greens are essential — wet greens dilute the dressing. Massaging kale with oil for 1 minute tenderizes it.'},
    zh:{name:'蔬菜沙拉',time:'10 分钟',servings:'2 份',why:'清爽的配菜沙拉，为任何一餐增添纤维和维生素。',ingredients:['混合沙拉叶 80 克','黄瓜 半根，切片','小番茄 6 颗，对半切','橄榄油 1 汤匙','柠檬汁或苹果醋 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙'],steps:['沙拉叶洗净甩干，撕成一口大小。','大碗放入沙拉叶、黄瓜片和小番茄。','小瓶中摇晃混合橄榄油、柠檬汁、盐和胡椒。','淋在沙拉上轻拌均匀。','立即食用。'],notes:'沙拉叶必须干燥——湿叶会稀释酱汁。羽衣甘蓝提前按摩 1 分钟可软化。'},
    macros:{protein:{g:1,pct:7},fat:{g:5,pct:74},netCarbs:{g:3,pct:20}}
  },
  {
    id:'v30', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'greek-salad.jpg', emoji:'🥗', foodCats:["vegetable", "fat-flavor", "complete"],
    en:{name:'Greek Salad',time:'15 min',servings:'4',why:'A Mediterranean classic loaded with vegetables, healthy fats and protein — no lettuce, just bold flavours from ripe tomatoes, briny olives, and creamy feta.',ingredients:['Roma or vine-ripe tomatoes 2, cut into 1-inch wedges','English cucumber 1, cut into 3/4-inch half-moons','Red onion 1/4, very thinly sliced','Green bell pepper 1/2, cut into thin rings','Kalamata olives 1/4 cup (about 12 olives, 40 g), pitted','Feta cheese 4 oz (110 g), cut into 1/2-inch cubes (or one solid block to crumble on top)','Olive oil 2 tbsp, extra-virgin','Red wine vinegar 1 tbsp','Dried oregano 1/2 tsp (plus extra for sprinkling)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) cucumber peeling: peel in stripes for a decorative look'],steps:['Prepare the tomatoes: cut each tomato into 6 to 8 wedges. Remove the tough core from each wedge if present. Place in a large serving bowl.','Cut the cucumber: if using a regular cucumber, peel it and scrape out the seeds with a spoon. For English cucumber, leave the skin on. Cut into 3/4-inch thick half-moons. Add to the bowl.','Slice the red onion as thinly as possible — aim for translucent pieces. Add to the bowl. (If the onion is very sharp, soak the slices in cold water for 5 minutes, then drain.)','Cut the green bell pepper into thin rings about 1/4 inch wide. Add to the bowl.','Add the Kalamata olives to the bowl.','Cut the feta into 1/2-inch cubes (or keep it as one block to crumble on top for a more rustic presentation). Set aside.','Make the dressing: in a small jar or bowl, combine 2 tbsp olive oil, 1 tbsp red wine vinegar, 1/2 tsp dried oregano, 1/4 tsp salt, and 1/8 tsp pepper. Shake the jar vigorously or whisk until the dressing is emulsified and slightly thickened.','Pour the dressing over the vegetables in the bowl. Toss gently with your hands or large spoons to coat everything evenly — be careful not to crush the tomatoes.','Add the feta cubes on top (or crumble the block over the salad). Do not toss after adding the feta — it should stay in visible chunks on top.','Sprinkle an extra pinch of dried oregano over the feta for garnish and flavour.','Let the salad sit for 5 minutes before serving so the flavours meld. The tomatoes release their juice and mix with the dressing to create a delicious pool at the bottom of the bowl — soak it up with crusty bread.'],notes:'Traditional Greek salad (horiatiki) does not include lettuce. For a heartier version, add 1 cup rinsed and drained chickpeas or 4 oz grilled chicken strips. Use the best tomatoes you can find — this salad lives or dies by tomato quality. In winter, use cherry tomatoes which have more flavour.'},
    zh:{name:'希腊沙拉',time:'15 分钟',servings:'4 份',why:'地中海经典，富含蔬菜、健康脂肪和蛋白质——不加生菜，只有成熟番茄、咸鲜橄榄和奶滑羊奶酪的浓烈风味。',ingredients:['罗马或藤熟番茄 2 个，切 2.5 厘米角','英式黄瓜 1 根，切 2 厘米半月片','红洋葱 1/4 个，极薄切','青椒 半个，切薄圈','卡拉马塔橄榄 40 克（约 12 颗），去核','羊奶酪 110 克，切 1 厘米丁（或整块掰碎铺面）','特级初榨橄榄油 2 汤匙','红酒醋 1 汤匙','干牛至 半茶匙（另撒装饰用）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙'],steps:['处理番茄：每个切 6 至 8 角。如有硬芯则去除。放大碗中。','切黄瓜：普通黄瓜需去皮并挖籽。英式黄瓜留皮。切 2 厘米半月片放入碗中。','红洋葱尽可能薄切——目标半透明。放入碗中。（如太辛辣，冷水泡 5 分钟后沥干。）','青椒切 0.5 厘米薄圈放入碗中。','加入卡拉马塔橄榄。','羊奶酪切 1 厘米丁（或整块掰碎铺面，更 rustic）。备用。','做酱汁：小瓶或碗中混合 2 汤匙橄榄油、1 汤匙红酒醋、半茶匙干牛至、1/4 茶匙盐和 1/8 茶匙胡椒。用力摇瓶或搅打至乳化微稠。','淋酱汁在蔬菜上，用手或大勺轻拌至均匀裹酱——小心不要压碎番茄。','羊奶酪丁铺在上面（或掰碎整块撒面）。加奶酪后不要再拌——应保持可见块状在面上。','额外撒一撮干牛至在羊奶酪上增色增味。','静置 5 分钟后食用让风味融合。番茄会出汁与酱汁混合，碗底形成美味汤汁——用脆面包蘸食。'],notes:'传统希腊沙拉（horiatiki）不加生菜。更饱腹可加 1 杯冲洗沥干的鹰嘴豆或 110 克烤鸡条。用最好的番茄——这道沙拉成败取决于番茄品质。冬天可用樱桃番茄，风味更浓。'},
    macros:{protein:{g:4,pct:10},fat:{g:12,pct:69},netCarbs:{g:8,pct:21}}
  },
  {
    id:'v31', type:'snack', carb:'low', tags:[], contains:["sesame"], focus:[],
    img:'seaweed-salad.jpg', emoji:'🌿', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Seaweed Salad',time:'5 min',servings:'2',why:'A mineral-rich, umami-packed Japanese side — rehydrated wakame seaweed tossed in a sweet-sesame dressing.',ingredients:['Dried wakame seaweed 2 tbsp','Cucumber 1 small, thinly sliced','Rice vinegar 1 tbsp','Soy sauce 1 tsp','Sesame oil 1 tsp','Sugar 1 tsp','Toasted sesame seeds 1 tsp'],steps:['Place dried wakame in a bowl of cold water and soak for 5 minutes until expanded and tender.','Drain and squeeze out excess water. Trim any tough central stems.','In a small bowl, whisk together rice vinegar, soy sauce, sesame oil and sugar until the sugar dissolves.','Combine wakame and cucumber slices in a bowl. Pour dressing over and toss.','Sprinkle with sesame seeds and chill 10 minutes before serving.'],notes:'Wakame expands 5-7 times when rehydrated — a little goes a long way. Find it at Asian grocery stores.'},
    zh:{name:'海藻沙拉',time:'5 分钟',servings:'2 份',why:'富含矿物质和鲜味的日式配菜——裙带菜配甜芝麻酱汁。',ingredients:['干裙带菜 2 汤匙','小黄瓜 1 根，切薄片','米醋 1 汤匙','酱油 1 茶匙','麻油 1 茶匙','白糖 1 茶匙','烤芝麻 1 茶匙'],steps:['将干裙带菜放入冷水中泡 5 分钟至膨胀变软。','沥干挤去多余水分，去除硬梗。','小碗混合米醋、酱油、麻油和糖至糖溶化。','碗中混合裙带菜和黄瓜片，倒入酱汁拌匀。','撒芝麻，冷藏 10 分钟后食用。'],notes:'裙带菜泡发后膨胀 5-7 倍——少量即可。亚洲超市有售。'},
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
    en:{name:'Corn on the Cob',time:'10 min',servings:'4 ears',why:'Classic boiled corn on the cob — sweet, juicy and satisfying with butter and salt.',ingredients:['Fresh corn 4 ears','Water 4 quarts','Sea salt 1 tsp','Butter 2 tbsp','Black pepper 1/8 tsp'],steps:['Husk corn and remove all silk. Optionally break in half.','Bring a large pot of salted water to a boil.','Add corn and boil for 5-7 minutes until kernels are bright yellow and tender.','Remove with tongs, brush with butter, and season with salt and pepper.','Serve immediately while hot.'],notes:'Add a tablespoon of sugar to the cooking water for sweeter corn — never add salt as it toughens the kernels.'},
    zh:{name:'煮玉米棒',time:'10 分钟',servings:'4 根',why:'经典煮玉米棒——甜嫩多汁，配黄油和盐。',ingredients:['新鲜玉米 4 根','清水 4 夸脱','海盐 1 茶匙','黄油 2 汤匙','黑胡椒 1/8 茶匙'],steps:['剥去玉米皮和须。可折半。','大锅加盐水煮沸。','放入玉米煮 5-7 分钟至粒鲜黄软嫩。','用夹子取出刷黄油撒盐和胡椒。','趁热立即食用。'],notes:'煮水中加 1 汤匙糖更甜——切勿加盐因会使粒变硬。'},
    macros:{protein:{g:4,pct:16},fat:{g:1,pct:9},netCarbs:{g:19,pct:75}}
  },
  {
    id:'c01', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'steamed-taro.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Steamed Taro',time:'25 min',servings:'4',why:'A starchy, slightly sweet root vegetable — steaming reveals its creamy, potato-like texture.',ingredients:['Taro root 1 lb (450 g)','Water for steaming','Sea salt 1/2 tsp'],steps:['Wear gloves to peel taro — its skin can cause itching. Peel and cut into 1-inch cubes.','Place taro in a steamer basket over boiling water.','Cover and steam for 20-25 minutes until a fork pierces easily.','Season with salt and serve hot.'],notes:'Never eat raw taro — it contains calcium oxalate crystals that cause throat irritation. Always cook thoroughly.'},
    zh:{name:'蒸芋头',time:'25 分钟',servings:'4 份',why:'淀粉微甜的根菜——蒸制展现奶油般土豆质感。',ingredients:['芋头 450 克','清水（蒸用）','海盐 半茶匙'],steps:['戴手套去皮——芋头皮可致痒。切 3 厘米块。','放入沸水上方蒸笼中。','盖盖蒸 20-25 分钟至叉可轻松穿透。','撒盐热食。'],notes:'切勿生食芋头——含草酸钙结晶刺激喉咙。必须完全煮熟。'},
    macros:{protein:{g:2,pct:9},fat:{g:0,pct:0},netCarbs:{g:20,pct:91}}
  },
  {
    id:'c02', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'boiled-cassava.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Boiled Cassava',time:'25 min',servings:'4',why:'A dense, calorie-rich tuber — boiled cassava has a fluffy texture similar to potatoes but slightly sweet.',ingredients:['Cassava root 1 lb (450 g)','Water for boiling','Sea salt 1 tsp'],steps:['Peel the cassava deeply — remove both the outer waxy skin and the inner pinkish layer. Cut into 3-inch chunks.','Place in a pot, cover with water and add salt. Bring to a boil.','Boil for 15-20 minutes until fork-tender and the fibrous core can be easily removed.','Drain and remove any tough stringy core from each piece.','Serve hot with butter or olive oil.'],notes:'Cassava must be peeled and cooked thoroughly — raw cassava contains cyanogenic compounds. Never eat it raw.'},
    zh:{name:'煮木薯',time:'25 分钟',servings:'4 份',why:'高热量密度的块根——煮木薯口感蓬松如土豆但略甜。',ingredients:['木薯 450 克','清水（煮用）','海盐 1 茶匙'],steps:['深剥木薯——去除外蜡皮和内层粉皮。切 8 厘米段。','放入锅中加水加盐煮沸。','煮 15-20 分钟至叉可插入且纤维芯可轻松去除。','沥去每块中的硬丝芯。','配黄油或橄榄油热食。'],notes:'木薯必须去皮煮熟——生木薯含氰苷。切勿生食。'},
    macros:{protein:{g:1,pct:3},fat:{g:0,pct:0},netCarbs:{g:38,pct:97}}
  },
  {
    id:'c03', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'steamed-yam.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Steamed Yam',time:'25 min',servings:'4',why:'A creamy, sweet tuber — yams are denser and drier than sweet potatoes, with a distinctive earthy flavour.',ingredients:['Yam 1 lb (450 g)','Water for steaming','Sea salt 1/2 tsp'],steps:['Peel the yam and cut into 1-inch rounds or cubes.','Place in a steamer basket over boiling water.','Cover and steam for 20-25 minutes until a fork pierces easily.','Season with salt and serve hot with butter or oil.'],notes:'True yams have dark brown, bark-like skin and white or purple flesh. They are different from sweet potatoes.'},
    zh:{name:'蒸山药',time:'25 分钟',servings:'4 份',why:'奶滑微甜的块根——山药比红薯更密实干燥，独特泥土风味。',ingredients:['山药 450 克','清水（蒸用）','海盐 半茶匙'],steps:['去皮切 3 厘米段或块。','放入沸水上方蒸笼中。','盖盖蒸 20-25 分钟至叉可轻松穿透。','撒盐配黄油或油热食。'],notes:'真山药外皮棕褐似树皮，肉白或紫。与红薯不同。'},
    macros:{protein:{g:2,pct:7},fat:{g:0,pct:0},netCarbs:{g:28,pct:93}}
  },
  {
    id:'c04', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'plantain.jpg', emoji:'🍌', foodCats:["carb"],
    en:{name:'Plantain',time:'15 min',servings:'2',why:'A starchy banana relative — plantains are cooked, not eaten raw, and make a satisfying side dish.',ingredients:['Ripe plantain 1 (skin mostly black)','Olive oil or coconut oil 1 tbsp','Sea salt pinch'],steps:['Cut off both ends of the plantain and score the peel lengthwise. Remove the peel.','Slice the plantain diagonally into 1/2-inch thick ovals.','Heat oil in a skillet over medium heat.','Fry slices for 2-3 minutes per side until golden and caramelised.','Drain on paper towels and sprinkle with salt. Serve warm.'],notes:'Green plantains are starchy like potatoes — use for tostones. Ripe (black-skinned) ones are sweet — use for maduros.'},
    zh:{name:'大蕉',time:'15 分钟',servings:'2 份',why:'淀粉质香蕉近亲——大蕉需烹饪不可生食，是满足的配菜。',ingredients:['熟大蕉 1 根（皮大部分发黑）','橄榄油或椰子油 1 汤匙','海盐 少许'],steps:['切去大蕉两端，纵向划开剥皮。','斜切 1 厘米厚椭圆片。','平底锅中火加油。','每面煎 2-3 分钟至金黄焦糖化。','沥油撒盐，温热食用。'],notes:'绿大蕉淀粉质如土豆——做炸大蕉。熟（黑皮）甜——做甜蕉。'},
    macros:{protein:{g:1,pct:3},fat:{g:0,pct:0},netCarbs:{g:30,pct:97}}
  },
  {
    id:'v35', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'green-peas.jpg', emoji:'🫛', foodCats:["vegetable", "carb"],
    en:{name:'Green Peas',time:'5 min',servings:'1 cup',why:'Sweet, vibrant green peas — a quick-cooking vegetable rich in protein and fibre.',ingredients:['Frozen green peas 1 cup (140 g)','Water 2 tbsp','Sea salt 1/4 tsp','Butter 1 tsp (optional)','Fresh mint 1 tsp chopped (optional)'],steps:['Place frozen peas in a small saucepan with 2 tbsp water.','Cover and heat over medium heat for 3-5 minutes, stirring once, until peas are heated through and bright green.','Drain any excess water.','Toss with salt, butter and fresh mint if using.','Serve immediately — peas lose their sweetness as they cool.'],notes:'Frozen peas are often sweeter than fresh because they are frozen within hours of picking. Do not overcook.'},
    zh:{name:'豌豆',time:'5 分钟',servings:'1 杯',why:'甜嫩翠绿的豌豆——快煮蔬菜，富含蛋白质和纤维。',ingredients:['冷冻豌豆 1 杯（140 克）','清水 2 汤匙','海盐 1/4 茶匙','黄油 1 茶匙（可选）','新鲜薄荷 1 茶匙，切碎（可选）'],steps:['将冷冻豌豆放入小锅中加 2 汤匙水。','盖盖中火加热 3-5 分钟，中途搅拌一次，至热透翠绿。','沥去余水。','拌入盐、黄油和薄荷（如用）。','立即食用——豌豆冷却后甜味降低。'],notes:'冷冻豌豆常比新鲜的更甜，因采摘后数小时内速冻。不要过熟。'},
    macros:{protein:{g:4,pct:22},fat:{g:0,pct:0},netCarbs:{g:14,pct:78}}
  },
  {
    id:'c05', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'boiled-potato.jpg', emoji:'🥔', foodCats:["carb"],
    en:{name:'Boiled Potato',time:'20 min',servings:'4',why:'A classic, comforting staple — boiled potatoes are fluffy and versatile, ready to absorb butter or herbs.',ingredients:['Potatoes 4 medium (about 1.5 lb / 680 g), Yukon Gold or red','Water for boiling','Sea salt 1 tsp','(Optional) butter 2 tbsp','(Optional) fresh parsley 2 tbsp chopped','(Optional) black pepper 1/4 tsp'],steps:['Scrub potatoes clean. Peel if desired, or leave skins on for more nutrients.','Cut into 1.5-inch chunks for faster cooking. Place in a pot and cover with cold salted water.','Bring to a boil, then reduce heat to a simmer.','Cook for 15-20 minutes until a fork slides in easily.','Drain thoroughly. Toss with butter, salt, pepper and parsley if using.','Serve hot.'],notes:'Start potatoes in cold water so they heat evenly — dropping them into boiling water makes the outside mushy before the centre is done.'},
    zh:{name:'煮土豆',time:'20 分钟',servings:'4 份',why:'经典舒适主食——煮土豆蓬松百搭，可吸黄油和香草。',ingredients:['土豆 4 个（约 680 克），黄皮或红皮','清水（煮用）','海盐 1 茶匙','（可选）黄油 2 汤匙','（可选）新鲜欧芹 2 汤匙，切碎','（可选）黑胡椒 1/4 茶匙'],steps:['刷净土豆。如需去皮，或保留皮以增营养。','切 4 厘米块加速烹饪。放入锅中加冷水没过加盐。','煮沸后转小火。','煮 15-20 分钟至叉可轻松插入。','彻底沥干。拌入黄油、盐、胡椒和欧芹（如用）。','热食。'],notes:'冷水起步使受热均匀——直接放入沸水会使外层糊而中心未熟。'},
    macros:{protein:{g:3,pct:8},fat:{g:0,pct:0},netCarbs:{g:34,pct:92}}
  },
  {
    id:'c06', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'mashed-sweet-potato.jpg', emoji:'🍠', foodCats:["carb"],
    en:{name:'Mashed Sweet Potato',time:'25 min',servings:'4',why:'Creamy, naturally sweet mashed sweet potatoes — rich in beta-carotene and vitamin A.',ingredients:['Sweet potatoes 2 lb (900 g)','Butter 2 tbsp','Milk or cream 3 tbsp','Sea salt 1/2 tsp','Cinnamon 1/4 tsp (optional)','Maple syrup 1 tsp (optional)'],steps:['Peel sweet potatoes and cut into 1.5-inch chunks.','Place in a pot, cover with water and bring to a boil.','Boil for 15-20 minutes until very tender.','Drain thoroughly and return to the warm pot.','Add butter, milk, salt, cinnamon and maple syrup if using. Mash with a potato masher until smooth.','Taste and adjust seasoning. Serve hot.'],notes:'Sweet potatoes are moister than regular potatoes — use less milk than you would for mashed potatoes.'},
    zh:{name:'红薯泥',time:'25 分钟',servings:'4 份',why:'奶滑天然甜的红薯泥——富含β-胡萝卜素和维生素A。',ingredients:['红薯 900 克','黄油 2 汤匙','牛奶或奶油 3 汤匙','海盐 半茶匙','肉桂粉 1/4 茶匙（可选）','枫糖浆 1 茶匙（可选）'],steps:['去皮切 4 厘米块。','放入锅中加水没过煮沸。','煮 15-20 分钟至非常软。','彻底沥干放回温锅。','加黄油、牛奶、盐、肉桂和枫糖浆（如用），用压泥器压至顺滑。','尝味调整，热食。'],notes:'红薯比普通土豆更湿润——牛奶用量比土豆泥少。'},
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
    en:{name:'Rice-Paper Wrappers',time:'5 min',servings:'8 wrappers',why:'Thin, translucent Vietnamese wrappers — soak briefly to create pliable wraps for fresh spring rolls.',ingredients:['Round rice-paper wrappers 8 (8.5 inch / 22 cm)','Warm water in a wide shallow pan'],steps:['Fill a wide, shallow pan or pie plate with warm water (not hot — hot water makes them tear).','Submerge one rice-paper wrapper in the water for 5-10 seconds until it softens but still has slight resistance — do not over-soak or it becomes sticky and tears.','Remove and lay flat on a damp clean kitchen towel or cutting board.','Add fillings (lettuce, herbs, protein, vermicelli) in the lower third. Fold the bottom up over the filling, fold in the sides, and roll tightly.','Repeat with remaining wrappers. Keep finished rolls under a damp towel to prevent drying.'],notes:'If a wrapper tears, double-wrap with a second soaked wrapper. Keep a damp paper towel over the stack of unused wrappers to prevent them from cracking.'},
    zh:{name:'米纸',time:'5 分钟',servings:'8 张',why:'薄而透明的越南春卷皮——浸泡后变软用于包裹鲜春卷。',ingredients:['圆形米纸 8 张（22 厘米）','温水（放入宽浅盘中）'],steps:['宽浅盘或派盘中倒入温水（不可热水——热水使皮破裂）。','将一张米纸浸入水中 5-10 秒至变软但仍有微弹——不要泡过久否则变粘破烂。','取出平放在湿厨房巾或砧板上。','在下三分之一处放馅料（生菜、香草、蛋白、粉丝），下边向上折盖馅，两侧折入，紧紧卷起。','重复剩余米纸。做好的卷下垫湿巾防干。'],notes:'如破裂可用第二张湿米纸双层包裹。未用米纸堆上盖湿纸巾防裂。'},
    macros:{protein:{g:0,pct:0},fat:{g:0,pct:0},netCarbs:{g:20,pct:100}}
  },
  {
    id:'c17', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'gluten-free-pasta.jpg', emoji:'🍝', foodCats:["carb"],
    en:{name:'Gluten-Free Pasta',time:'12 min',servings:'2',why:'A versatile pasta alternative made from rice, corn or quinoa flour — cook carefully to avoid mushiness.',ingredients:['Gluten-free pasta 8 oz (225 g)','Water 3 quarts','Sea salt 1 tbsp','Olive oil 1 tsp (optional)'],steps:['Bring a large pot of salted water to a rolling boil.','Add the pasta and stir immediately to prevent sticking — gf pasta sticks more than regular.','Cook for 8-12 minutes depending on shape, tasting a piece 2 minutes before the package time. GF pasta goes from firm to mushy quickly.','Drain immediately and rinse briefly with warm water to remove surface starch.','Toss with olive oil to prevent sticking. Sauce immediately.'],notes:'GF pasta does not tolerate overcooking — test early and drain as soon as it is al dente. It does not reheat as well as wheat pasta.'},
    zh:{name:'无麸质意面',time:'12 分钟',servings:'2 份',why:'由大米、玉米或藜麦粉制成的百搭意面替代——需小心煮制避免过软。',ingredients:['无麸质意面 225 克','清水 3 夸脱','海盐 1 汤匙','橄榄油 1 茶匙（可选）'],steps:['大锅加盐水大火煮沸。','放入意面立即搅拌防粘——无麸面比普通面更易粘。','根据形状煮 8-12 分钟，在包装时间前 2 分钟试吃。无麸面很快从硬变糊。','立即沥干，温水快速冲洗去表面淀粉。','拌橄榄油防粘，立即加酱。'],notes:'无麸面不耐过煮——提前试吃，刚有嚼劲即沥干。复热效果不如小麦面。'},
    macros:{protein:{g:3,pct:6},fat:{g:1,pct:5},netCarbs:{g:42,pct:89}}
  },
  {
    id:'p44', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'chickpea-pasta.jpg', emoji:'🍝', foodCats:["protein", "carb"],
    en:{name:'Chickpea Pasta',time:'10 min',servings:'2',why:'A high-protein, gluten-free pasta made from chickpea flour — it has a slightly nutty flavour and extra protein.',ingredients:['Chickpea pasta 8 oz (225 g)','Water 3 quarts','Sea salt 1 tbsp','Olive oil 1 tsp (optional)'],steps:['Bring a large pot of salted water to a boil.','Add chickpea pasta and stir well — it produces more foam than regular pasta, so keep the heat slightly reduced.','Cook for 8-10 minutes, tasting 1 minute before the package time. It should be al dente with a slight bite.','Drain and rinse briefly with warm water.','Toss with olive oil and sauce immediately.'],notes:'Chickpea pasta creates a lot of foam — do not walk away while cooking or it may boil over. It has about 3x the protein of regular pasta.'},
    zh:{name:'鹰嘴豆意面',time:'10 分钟',servings:'2 份',why:'由鹰嘴豆粉制成的高蛋白无麸意面——略带坚果味和额外蛋白质。',ingredients:['鹰嘴豆意面 225 克','清水 3 夸脱','海盐 1 汤匙','橄榄油 1 茶匙（可选）'],steps:['大锅加盐水煮沸。','放入意面搅拌——比普通面产生更多泡沫，略微调小火。','煮 8-10 分钟，包装时间前 1 分钟试吃。应有嚼劲。','沥干温水快速冲洗。','拌橄榄油立即加酱。'],notes:'鹰嘴豆意面泡沫多——不可离锅否则溢出。蛋白质约为普通面的 3 倍。'},
    macros:{protein:{g:14,pct:25},fat:{g:3,pct:12},netCarbs:{g:35,pct:63}}
  },
  {
    id:'p45', type:'snack', carb:'moderate', tags:[], contains:[], focus:[],
    img:'lentil-pasta.jpg', emoji:'🍝', foodCats:["protein", "carb"],
    en:{name:'Lentil Pasta',time:'10 min',servings:'2',why:'A protein-rich, gluten-free pasta made from red or green lentil flour — quick-cooking with an earthy flavour.',ingredients:['Lentil pasta 8 oz (225 g)','Water 3 quarts','Sea salt 1 tbsp','Olive oil 1 tsp (optional)'],steps:['Bring a large pot of salted water to a boil.','Add lentil pasta and stir immediately to prevent sticking.','Cook for 7-9 minutes, testing 1 minute before the package time. Lentil pasta cooks faster than wheat pasta.','Drain and rinse briefly with warm water to remove starch.','Toss with olive oil and your favourite sauce.'],notes:'Lentil pasta can become mealy if overcooked — err on the side of al dente. It works best with robust sauces like marinara or pesto.'},
    zh:{name:'扁豆意面',time:'10 分钟',servings:'2 份',why:'由红或绿扁豆粉制成的高蛋白无麸意面——快熟，泥土风味。',ingredients:['扁豆意面 225 克','清水 3 夸脱','海盐 1 汤匙','橄榄油 1 茶匙（可选）'],steps:['大锅加盐水煮沸。','放入意面立即搅拌防粘。','煮 7-9 分钟，包装时间前 1 分钟试吃。扁豆面比小麦面熟更快。','沥干温水冲洗去淀粉。','拌橄榄油和喜欢的酱。'],notes:'过熟会变粉——宁可偏硬。配番茄酱或青酱等浓郁酱最佳。'},
    macros:{protein:{g:13,pct:26},fat:{g:1,pct:4},netCarbs:{g:35,pct:70}}
  },
  {
    id:'c18', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'soba-noodles.jpg', emoji:'🍜', foodCats:["carb"],
    en:{name:'Soba Noodles',time:'8 min',servings:'2',why:'Japanese buckwheat noodles with a nutty, earthy flavour — serve cold with dipping sauce or hot in broth.',ingredients:['Soba noodles 8 oz (225 g)','Water 3 quarts','(For cold) soy sauce 2 tbsp, mirin 1 tbsp, dashi or water 2 tbsp','(For hot) dashi broth 4 cups','Green onion 1, sliced','Nori seaweed 1 sheet, shredded (optional)'],steps:['Bring a large pot of water to a boil. Do not salt the water — soba is cooked in unsalted water.','Add soba noodles and stir gently to separate. Cook for 5-7 minutes until tender but still firm.','Drain and rinse thoroughly under cold running water, rubbing gently to remove excess starch — this gives soba its characteristic smooth texture.','For cold soba: serve on a plate with a small bowl of dipping sauce (soy, mirin, dashi). Dip and slurp.','For hot soba: place in bowls and pour hot dashi broth over. Top with sliced green onion and shredded nori.'],notes:'Rinsing soba under cold water is essential — it removes the starch that makes them gummy. 100% buckwheat soba is gluten-free.'},
    zh:{name:'荞麦面',time:'8 分钟',servings:'2 份',why:'日式荞麦面——坚果泥土风味，冷食蘸酱或热汤皆宜。',ingredients:['荞麦面 225 克','清水 3 夸脱','（冷食）酱油 2 汤匙、味醂 1 汤匙、出汁或水 2 汤匙','（热食）出汁高汤 4 杯','葱 1 根，切丝','海苔 1 片，撕丝（可选）'],steps:['大锅加水煮沸——不要加盐，荞麦面用无盐水煮。','放入面条轻搅拨散。煮 5-7 分钟至软但仍弹。','沥干冷水彻底冲洗，轻搓去多余淀粉——此步骤赋予荞麦面特有滑润口感。','冷食：装盘配小碗蘸汁（酱油、味醂、出汁），蘸食。','热食：放入碗中倒入热出汁高汤，撒葱丝和海苔丝。'],notes:'冷水冲洗荞麦面至关重要——去除使面变粘的淀粉。100% 荞麦面无麸质。'},
    macros:{protein:{g:8,pct:23},fat:{g:1,pct:7},netCarbs:{g:24,pct:70}}
  },
  {
    id:'c19', type:'snack', carb:'moderate', tags:[], contains:["gluten"], focus:[],
    img:'udon-noodles.jpg', emoji:'🍜', foodCats:["carb"],
    en:{name:'Udon Noodles',time:'8 min',servings:'2',why:'Thick, chewy Japanese wheat noodles — comforting in a hot broth or stir-fried with sauce.',ingredients:['Udon noodles 8 oz (225 g), fresh or dried','Water 3 quarts','(For soup) dashi broth 4 cups','Soy sauce 1 tbsp','Mirin 1 tbsp','Green onion 1, sliced','(Optional) tempura, tofu or egg'],steps:['Bring a large pot of water to a boil.','Add udon noodles. Fresh udon needs 2-3 minutes; dried udon needs 7-9 minutes. Stir occasionally.','Drain and rinse briefly with warm water.','For soup: combine dashi broth, soy sauce and mirin in a pot. Bring to a simmer.','Place noodles in bowls, pour hot broth over, and top with sliced green onion and your choice of tempura, tofu or egg.'],notes:'Fresh frozen udon has the best texture — it springs back when pressed. Dried udon is more convenient but slightly less chewy.'},
    zh:{name:'乌冬面',time:'8 分钟',servings:'2 份',why:'厚实有嚼劲的日式小麦面——热汤或炒皆舒适。',ingredients:['乌冬面 225 克，鲜或干','清水 3 夸脱','（汤面）出汁高汤 4 杯','酱油 1 汤匙','味醂 1 汤匙','葱 1 根，切丝','（可选）天妇罗、豆腐或鸡蛋'],steps:['大锅加水煮沸。','放入乌冬面。鲜面 2-3 分钟，干面 7-9 分钟，偶尔搅拌。','沥干温水略冲。','汤面：锅中混合出汁、酱油和味醂，煮至微沸。','面条放入碗中，倒入热汤，撒葱丝和天妇罗、豆腐或蛋。'],notes:'冷冻鲜乌冬口感最佳——按压会弹回。干乌冬更方便但嚼劲略逊。'},
    macros:{protein:{g:4,pct:9},fat:{g:1,pct:5},netCarbs:{g:40,pct:86}}
  },
  {
    id:'c20', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'shirataki-noodles.jpg', emoji:'🍜', foodCats:["carb"],
    en:{name:'Shirataki Noodles',time:'5 min',servings:'2',why:'Near-zero-calorie konjac noodles — a low-carb pasta alternative with a neutral taste that absorbs sauce flavours.',ingredients:['Shirataki noodles 2 packages (7 oz / 200 g each)','Water for boiling','(Optional) soy sauce 1 tsp','(Optional) garlic clove 1, minced','(Optional) sesame oil 1 tsp'],steps:['Open the packages and drain the water. The noodles may have a slight earthy smell — this is normal and rinsing removes it.','Rinse the noodles thoroughly under cold running water for 30 seconds.','Bring a pot of water to a boil. Add the noodles and boil for 2-3 minutes to improve texture.','Drain well and pat dry with paper towels — dry noodles absorb sauce better.','Heat a dry skillet over medium heat. Add the noodles and stir-fry for 1-2 minutes to remove excess moisture.','Toss with soy sauce, garlic and sesame oil, or use in any pasta or stir-fry recipe.'],notes:'Shirataki noodles are made from konjac root and contain almost zero calories and carbs. The key step is boiling and dry-frying to remove their natural water content and improve the rubbery texture.'},
    zh:{name:'魔芋丝',time:'5 分钟',servings:'2 份',why:'近零卡路里的魔芋面——低碳意面替代品，味道中性，能吸收酱汁风味。',ingredients:['魔芋丝 2 包（每包 200 克）','煮沸用水','（可选）酱油 1 茶匙','（可选）蒜 1 瓣，切末','（可选）麻油 1 茶匙'],steps:['开包沥干水分。面条可能有轻微泥土味——正常现象，冲洗即可去除。','冷水下彻底冲洗 30 秒。','烧一锅开水，放入面条煮 2-3 分钟改善口感。','沥干用厨房纸吸干——干燥的面条更吸酱汁。','干锅中大火，放入面条炒 1-2 分钟去多余水分。','拌酱油、蒜末和麻油，或用于任何意面或炒菜食谱。'],notes:'魔芋丝由魔芋根制成，几乎零卡零碳水。关键步骤是煮和干炒以去除天然水分并改善橡胶般口感。'},
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
    en:{name:'Roasted Edamame',time:'25 min',servings:'1 cup',why:'Crispy, nutty roasted soybeans — a high-protein, high-fibre snack that satisfies like nuts but with less fat.',ingredients:['Frozen shelled edamame 2 cups (300 g), thawed','Olive oil 1 tbsp','Sea salt 1/2 tsp','Garlic powder 1/2 tsp','Smoked paprika 1/4 tsp'],steps:['Preheat oven to 400F (200C). Line a baking sheet with parchment paper.','Pat the thawed edamame completely dry with paper towels — moisture prevents crispiness.','Toss edamame with olive oil, salt, garlic powder and smoked paprika in a bowl until evenly coated.','Spread in a single layer on the baking sheet, leaving space between each bean.','Roast for 18-20 minutes, stirring once halfway, until golden and crispy.','Cool 5 minutes on the baking sheet — they crisp further as they cool.'],notes:'These keep for 3 days in an airtight container at room temperature. Re-crisp in a 350F oven for 3 minutes if needed.'},
    zh:{name:'烤毛豆',time:'25 分钟',servings:'1 杯',why:'酥脆坚果味的烤大豆——高蛋白高纤维零食，比坚果更低脂。',ingredients:['去壳冷冻毛豆 2 杯（300 克），解冻','橄榄油 1 汤匙','海盐 半茶匙','蒜粉 半茶匙','烟熏辣椒粉 1/4 茶匙'],steps:['烤箱预热 400F（200C），烤盘铺烘焙纸。','用厨房纸彻底吸干解冻毛豆的水分——水分影响酥脆。','碗中用橄榄油、盐、蒜粉和烟熏辣椒粉拌匀毛豆。','平铺烤盘，留间距。','烤 18-20 分钟，中途翻一次，至金黄酥脆。','在烤盘上冷却 5 分钟——冷却后更脆。'],notes:'密封室温保存 3 天。不脆可 350F 烤 3 分钟恢复。'},
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
    en:{name:'Pesto',time:'10 min',servings:'4 (makes about 1 cup)',why:'A vibrant, herbaceous Italian sauce — fresh basil blended with pine nuts, garlic and Parmesan for a burst of flavour on pasta, vegetables, or as a sandwich spread.',ingredients:['Fresh basil leaves 2 cups (packed tight, about 1 large bunch or 2 oz / 60 g)','Pine nuts 1/3 cup (50 g) — or walnuts, sunflower seeds, or almonds','Garlic clove 1, peeled (or 2 small cloves)','Parmesan cheese 1/2 cup (40 g), freshly grated (or Pecorino Romano)','Extra-virgin olive oil 1/2 cup (120 ml)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon juice 1 tsp (optional, brightens the colour and flavour)','(Optional) ice cubes 1 to 2, for blanching basil'],steps:['Toast the pine nuts: place them in a dry skillet over medium heat. Shake the pan constantly for 2 to 3 minutes until they are golden brown and fragrant. Watch them closely — pine nuts go from toasted to burnt in 30 seconds. Remove immediately to a plate to stop cooking.','Optional basil blanching for brighter green: bring a small pot of water to a boil. Drop the basil leaves in for 5 seconds, then immediately transfer to a bowl of ice water. Drain and squeeze dry. This step preserves the vibrant green colour but is not essential.','Combine the toasted pine nuts, garlic clove, and a pinch of salt in a food processor. Pulse 4 to 5 times until finely chopped.','Add the basil leaves (blanched or fresh). Pulse 8 to 10 times until the basil is finely chopped and the mixture looks like a coarse green paste.','With the food processor running continuously, slowly pour the olive oil through the feed tube in a thin stream. Process for 30 to 45 seconds until the mixture becomes smooth and creamy.','Stop the processor. Add the grated Parmesan cheese, lemon juice, 1/4 tsp salt, and 1/8 tsp pepper. Pulse 3 to 4 times until just combined — do not over-process or the cheese will become gummy.','Taste and adjust: more salt if needed, more lemon juice for brightness, more olive oil if the pesto is too thick.','Transfer the pesto to a clean jar or container. Smooth the top and pour a thin layer of olive oil (about 1 tbsp) over the surface to create a seal that prevents oxidation and browning.','Cover tightly and refrigerate for up to 5 days, or freeze for up to 3 months (freeze in ice cube trays for single-serving portions).'],notes:'Pesto darkens when exposed to air — the olive oil layer on top is the best way to preserve the green colour. For a nut-free version, use sunflower seeds. For a dairy-free version, omit the Parmesan and add 1 tbsp nutritional yeast + 1/4 tsp extra salt. Never heat pesto on the stove — stir it into hot pasta off the heat to preserve the fresh basil flavour.'},
    zh:{name:'青酱',time:'10 分钟',servings:'4 份（约 1 杯）',why:'鲜艳香浓的意式酱——新鲜罗勒与松子、蒜、帕玛森打碎，淋在意面、蔬菜上或作三明治抹酱皆宜。',ingredients:['新鲜罗勒叶 2 杯（压紧，约 1 大把或 60 克）','松子 1/3 杯（50 克）——或核桃、葵花籽、杏仁','蒜 1 瓣，去皮（或 2 小瓣）','帕玛森芝士 半杯（40 克），现擦丝（或佩科里诺罗马诺）','特级初榨橄榄油 半杯（120 毫升）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬汁 1 茶匙（可选，提亮色泽和风味）','（可选）冰块 1 至 2 个，焯罗勒用'],steps:['烘松子：干锅中火放入松子，不断晃锅 2 至 3 分钟至金黄出香。注意观察——松子从烘好到焦只需 30 秒。立即倒至盘中停止加热。','可选焯罗勒保绿：小锅水煮沸，放入罗勒叶 5 秒，立即捞出放入冰水。沥干挤干。此步骤保持鲜绿色但非必需。','食物处理器中放入烘好的松子、蒜瓣和少许盐。脉冲 4 至 5 次至细碎。','加入罗勒叶（焯过或新鲜的）。脉冲 8 至 10 次至罗勒细碎，混合物成粗粒绿色酱。','开机连续运转中，从进料口细流慢慢倒入橄榄油。处理 30 至 45 秒至顺滑细腻。','停机。加入擦丝帕玛森、柠檬汁、1/4 茶匙盐和 1/8 茶匙胡椒。脉冲 3 至 4 次至刚好混合——不要过度处理否则芝士变粘。','试味调整：按需加盐、柠檬汁增亮、橄榄油调稀。','青酱装入干净瓶中，抹平表面，倒一薄层橄榄油（约 1 汤匙）封住表面防止氧化变色。','盖紧密封冷藏 5 天，或冷冻 3 个月（冰格冷冻可分单份）。'],notes:'青酱遇空气变暗——表面封橄榄油是保绿的最佳方法。无坚果版用葵花籽。无乳版省去帕玛森加 1 汤匙营养酵母和 1/4 茶匙额外盐。绝不在炉上加热青酱——离火后拌入热意面以保新鲜罗勒风味。'},
    macros:{protein:{g:3,pct:6},fat:{g:18,pct:87},netCarbs:{g:3,pct:6}}
  },
  {
    id:'f21', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'homemade-vinaigrette.jpg', emoji:'🫗', foodCats:["fat-flavor"],
    en:{name:'Homemade Vinaigrette',time:'5 min',servings:'4',why:'A classic oil-and-vinegar emulsion — brighter and healthier than bottled dressings, ready in under a minute.',ingredients:['Extra-virgin olive oil 6 tbsp','Vinegar 2 tbsp (red wine, apple cider or balsamic)','Dijon mustard 1 tsp','Honey 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp'],steps:['In a small jar or bowl, combine the vinegar, Dijon mustard, honey, salt and pepper.','Slowly add the olive oil while whisking vigorously (or shaking the jar) until the dressing emulsifies and thickens slightly.','Taste and adjust — more vinegar for tanginess, more honey for sweetness.','Use immediately or store in the jar at room temperature for up to 1 week. Shake before each use.'],notes:'The ratio is 3 parts oil to 1 part acid. The mustard acts as an emulsifier to keep the dressing from separating. For a creamier version, add 1 tbsp Greek yogurt.'},
    zh:{name:'油醋汁',time:'5 分钟',servings:'4 份',why:'经典的油醋乳化酱——比瓶装更新鲜更健康，不到一分钟做好。',ingredients:['特级初榨橄榄油 6 汤匙','醋 2 汤匙（红酒醋、苹果醋或黑醋）','第戎芥末 1 茶匙','蜂蜜 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙'],steps:['小瓶或碗中混合醋、芥末、蜂蜜、盐和胡椒。','边搅边慢慢加入橄榄油（或盖盖摇瓶），至酱乳化微稠。','试味调整——醋多更酸，蜂蜜多更甜。','立即使用或室温存放 1 周。每次用前摇匀。'],notes:'比例为三份油一份酸。芥末起乳化剂作用防止分层。更浓郁可加 1 汤匙希腊酸奶。'},
    macros:{protein:{g:0,pct:0},fat:{g:14,pct:97},netCarbs:{g:1,pct:3}}
  },
  {
    id:'f22', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'tzatziki.jpg', emoji:'🥒', foodCats:["fat-flavor"],
    en:{name:'Tzatziki',time:'10 min (plus 30 min chilling)',servings:'4',why:'A refreshing Greek yogurt and cucumber dip — cool, garlicky and tangy, perfect with grilled meats, falafel, or as a vegetable dip. The secret is removing every drop of water from the cucumber.',ingredients:['Greek yogurt 1 cup (240 ml), full-fat for best texture (at least 5% milk fat)','English cucumber 1/2 (about 4 oz / 110 g) — or 1 regular cucumber, peeled and seeded','Garlic clove 1, minced to a paste (or 2 cloves for extra garlic lovers)','Lemon juice 1 tbsp (about half a lemon)','Fresh dill 1 tbsp, finely chopped (or fresh mint 1 tbsp)','Extra-virgin olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) white wine vinegar 1 tsp (traditional, instead of lemon)'],steps:['Grate the cucumber: use the large holes of a box grater. Grate the cucumber down to the seeds (if using a regular cucumber, peel it first and grate only the flesh, discarding the seedy core). You should get about 1 cup of grated cucumber.','Remove the water — this is the most important step: place the grated cucumber in the center of a clean kitchen towel or double layer of cheesecloth. Gather the edges and twist the top closed. Squeeze firmly over the sink for 10 to 15 seconds, twisting tighter as you go. Keep squeezing until no more liquid comes out. You should be left with about 1/3 cup of relatively dry cucumber shreds.','Make the garlic paste: mince the garlic clove finely on a cutting board. Sprinkle a pinch of salt over it. Using the flat side of your chef knife, drag it across the minced garlic at an angle, pressing down, 5 to 6 times. The garlic will break down into a smooth paste. (Alternatively, use a garlic press.)','In a medium bowl, combine the Greek yogurt, squeezed cucumber shreds, garlic paste, lemon juice, chopped dill, olive oil, salt, and pepper.','Stir with a spoon or whisk until completely smooth and all ingredients are evenly distributed. The dip should be thick and creamy.','Taste and adjust: add more salt if bland, more lemon juice for tanginess, or more garlic if you want it bolder. Remember that the garlic flavour intensifies as it sits.','Cover the bowl with plastic wrap and refrigerate for at least 30 minutes before serving — this lets the flavours meld and the garlic mellow. For best results, make it 2 to 4 hours ahead.','Transfer to a serving bowl. Drizzle a small amount of olive oil on top and sprinkle with a few sprigs of dill for garnish. Serve with pita bread, grilled chicken, lamb, falafel, or raw vegetable sticks.'],notes:'Removing the cucumber water is the single most important step — skip it and your tzatziki will be runny within hours. English cucumbers are preferred because they have fewer seeds and less water. Full-fat Greek yogurt is essential — low-fat versions are too thin and lack the creamy mouthfeel. Keeps 3 to 4 days refrigerated.'},
    zh:{name:'酸奶黄瓜酱',time:'10 分钟（另加冷藏 30 分钟）',servings:'4 份',why:'清爽的希腊酸奶黄瓜蘸酱——冰凉、蒜香、微酸，搭配烤肉、法拉费或蔬菜条极佳。秘诀是去除黄瓜的每一滴水。',ingredients:['希腊酸奶 1 杯（240 毫升），全脂口感最佳（至少 5% 脂肪）','英式黄瓜 半根（约 110 克）——或 1 根普通黄瓜，去皮去籽','蒜 1 瓣，磨成泥（蒜控可 2 瓣）','柠檬汁 1 汤匙（约半个柠檬）','新鲜莳萝 1 汤匙，切碎（或新鲜薄荷 1 汤匙）','特级初榨橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）白酒醋 1 茶匙（传统做法，替代柠檬）'],steps:['刨黄瓜：用粗孔刨丝器。刨到籽为止（普通黄瓜先去皮，只刨果肉，弃带籽核心）。约得 1 杯碎黄瓜。','去除水分——最重要的步骤：将碎黄瓜放在干净厨房巾或双层纱布中央。收拢边缘拧紧。在水池上方用力挤压 10 至 15 秒，越拧越紧。持续挤压直到不再有液体流出。应剩约 1/3 杯相对干燥的黄瓜丝。','做蒜泥：砧板上将蒜切细末。撒少许盐。用厨师刀面以角度压住蒜末拖刮 5 至 6 次。蒜会分解成顺滑的泥。（或用蒜压器。）','中碗中混合希腊酸奶、挤干的黄瓜丝、蒜泥、柠檬汁、切碎的莳萝、橄榄油、盐和胡椒。','用勺或打蛋器搅拌至完全顺滑、所有成分均匀分布。酱应浓稠奶滑。','试味调整：淡加盐，酸加柠檬汁，更浓加蒜。记住蒜味会随时间增强。','盖保鲜膜冷藏至少 30 分钟——让风味融合、蒜味缓和。最佳提前 2 至 4 小时做。','盛入碗中。表面淋少许橄榄油，撒几枝莳萝装饰。配皮塔饼、烤鸡、羊肉、法拉费或生蔬菜条食用。'],notes:'去除黄瓜水分是最关键的步骤——跳过几小时内就变稀。英式黄瓜首选因为籽少水少。全脂希腊酸奶是必须的——低脂版太稀缺乏奶滑口感。冷藏可存 3 至 4 天。'},
    macros:{protein:{g:2,pct:21},fat:{g:2,pct:47},netCarbs:{g:3,pct:32}}
  },
  {
    id:'f23', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'greek-yogurt-dip.jpg', emoji:'🥣', foodCats:["fat-flavor"],
    en:{name:'Greek Yogurt Dip',time:'5 min',servings:'4',why:'A simple, protein-rich dip — tangy yogurt brightened with garlic and lemon, ready in minutes for raw vegetables or chips.',ingredients:['Greek yogurt 1 cup','Garlic clove 1, minced','Lemon juice 1 tbsp','Extra-virgin olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) dried dill 1 tsp'],steps:['In a small bowl, combine the Greek yogurt, minced garlic, lemon juice, olive oil, salt and pepper.','Whisk until smooth and creamy.','Sprinkle with dried dill if using. Taste and adjust seasoning — more lemon for tanginess, more salt to taste.','Let sit for 5 minutes for the garlic flavour to develop. Serve with vegetables, pita or grilled meats.'],notes:'Letting the dip rest briefly mellows the raw garlic. For a thicker dip, strain the yogurt through cheesecloth for 1 hour first.'},
    zh:{name:'酸奶蘸酱',time:'5 分钟',servings:'4 份',why:'简单高蛋白蘸酱——酸奶配蒜和柠檬，几分钟做好，搭配生蔬菜或薯片。',ingredients:['希腊酸奶 1 杯','蒜 1 瓣，切末','柠檬汁 1 汤匙','特级初榨橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）干莳萝 1 茶匙'],steps:['小碗中混合希腊酸奶、蒜末、柠檬汁、橄榄油、盐和胡椒。','搅拌至顺滑细腻。','撒干莳萝（如用）。试味调整——柠檬多更酸，盐按口味加。','静置 5 分钟让蒜味散发。搭配蔬菜、皮塔饼或烤肉。'],notes:'静置片刻可缓和生蒜味。更浓稠可先用纱布沥水 1 小时。'},
    macros:{protein:{g:3,pct:29},fat:{g:2,pct:43},netCarbs:{g:3,pct:29}}
  },
  {
    id:'f24', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'ranch-dip.jpg', emoji:'🥗', foodCats:["fat-flavor"],
    en:{name:'Ranch Dip',time:'5 min',servings:'4',why:'A creamy, herbaceous dip — all the classic ranch flavour using simple pantry ingredients. No packaged seasoning mix needed.',ingredients:['Greek yogurt 1/2 cup (120 ml), full-fat','Mayonnaise 2 tbsp (use real mayo, not low-fat)','Garlic powder 1/2 tsp','Onion powder 1/2 tsp','Dried dill 1 tsp (or 1 tbsp fresh dill, finely chopped)','Dried parsley 1/2 tsp (or 1 tbsp fresh parsley, finely chopped)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Apple cider vinegar or lemon juice 1 tsp'],steps:['In a small bowl, combine the Greek yogurt and mayonnaise. Whisk with a fork or small whisk until completely smooth with no lumps.','Add the garlic powder, onion powder, dried dill, dried parsley, salt, pepper, and apple cider vinegar.','Stir thoroughly until all the seasonings are evenly incorporated. The mixture should be creamy and uniform in colour.','Taste the dip. Adjust as needed: more salt if bland, more vinegar or lemon juice for tanginess, more garlic powder for a stronger garlic flavour.','Cover and refrigerate for at least 10 minutes before serving. This allows the dried herbs to rehydrate and the flavours to develop — the dip tastes noticeably better after resting.','If the dip is too thick, thin it with 1 tsp milk or water. If too thin, add 1 more tsp of mayonnaise.','Serve with raw vegetables (carrot sticks, celery, cucumber, bell pepper), with wings, on baked potatoes, or as a sandwich spread.'],notes:'Using mostly Greek yogurt with just 2 tbsp of mayonnaise gives the classic ranch flavour with much less fat. If you have fresh dill and parsley, use 3 times the amount of dried. The dip keeps for 5 days refrigerated and actually improves after the first day as the herbs rehydrate fully.'},
    zh:{name:'牧场蘸酱',time:'5 分钟',servings:'4 份',why:'奶滑香草蘸酱——用简单的厨房常备料做出经典牧场风味，无需市售调味包。',ingredients:['希腊酸奶 半杯（120 毫升），全脂','蛋黄酱 2 汤匙（用真蛋黄酱，非低脂）','蒜粉 半茶匙','洋葱粉 半茶匙','干莳萝 1 茶匙（或鲜莳萝 1 汤匙，切碎）','干欧芹 半茶匙（或鲜欧芹 1 汤匙，切碎）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','苹果醋或柠檬汁 1 茶匙'],steps:['小碗中混合希腊酸奶和蛋黄酱。用叉或小打蛋器搅至完全顺滑无块。','加蒜粉、洋葱粉、干莳萝、干欧芹、盐、胡椒和苹果醋。','充分搅拌至所有调味料均匀混合。酱应奶滑且颜色一致。','试味调整：淡加盐，酸加醋或柠檬汁，蒜味更浓加蒜粉。','盖盖冷藏至少 10 分钟。让干香草吸水复原、风味发展——静置后明显更好吃。','如太稠加 1 茶匙牛奶或水调稀。太稀加 1 茶匙蛋黄酱。','配生蔬菜（胡萝卜条、芹菜、黄瓜、青椒）、鸡翅、烤土豆或作三明治抹酱。'],notes:'以希腊酸奶为主加 2 汤匙蛋黄酱，经典牧场风味但脂肪大减。鲜莳萝和欧芹用量是干的三倍。蘸酱冷藏 5 天，第二天干香草完全吸水后更好。'},
    macros:{protein:{g:1,pct:5},fat:{g:8,pct:86},netCarbs:{g:2,pct:10}}
  },
  {
    id:'v36', type:'snack', carb:'low', tags:[], contains:["dairy"], focus:[],
    img:'spinach-dip.jpg', emoji:'🥬', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Spinach Dip',time:'10 min',servings:'4',why:'A creamy, garlicky dip with spinach — a crowd-pleasing appetizer that works with bread or veggie sticks.',ingredients:['Frozen chopped spinach 1 package (10 oz / 280 g), thawed and squeezed dry','Greek yogurt or sour cream 1/2 cup','Mayonnaise 1/4 cup','Garlic 2 cloves, minced','Parmesan cheese 2 tbsp, grated','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) artichoke hearts 2, chopped'],steps:['Thaw the spinach and squeeze out as much water as possible using your hands or a clean kitchen towel.','In a bowl, combine the squeezed spinach, yogurt, mayonnaise, garlic, parmesan, salt and pepper.','Stir until well combined. Fold in chopped artichoke hearts if using.','Chill for at least 30 minutes to allow flavours to meld.','Serve with bread cubes, crackers, cucumber slices or carrot sticks.'],notes:'Squeezing the spinach dry is critical — wet spinach makes a watery dip. For a warm version, bake at 350F for 15 minutes.'},
    zh:{name:'菠菜蘸酱',time:'10 分钟',servings:'4 份',why:'奶滑蒜香菠菜蘸酱——老少皆宜的开胃菜，配面包或蔬菜条。',ingredients:['冷冻碎菠菜 1 包（280 克），解冻挤干','希腊酸奶或酸奶油 120 毫升','蛋黄酱 60 毫升','蒜 2 瓣，切末','帕玛森芝士 2 汤匙，擦丝','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）洋蓟心 2 个，切碎'],steps:['解冻菠菜，用手或厨房巾尽量挤干水分。','碗中混合挤干的菠菜、酸奶、蛋黄酱、蒜、帕玛森、盐和胡椒。','搅拌至均匀。拌入洋蓟心（如用）。','冷藏至少 30 分钟让味道融合。','搭配面包块、饼干、黄瓜片或胡萝卜条。'],notes:'挤干菠菜是关键——湿菠菜使蘸酱水。热版可 350F 烤 15 分钟。'},
    macros:{protein:{g:2,pct:11},fat:{g:6,pct:73},netCarbs:{g:3,pct:16}}
  },
  {
    id:'v37', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'salsa.jpg', emoji:'🍅', foodCats:["vegetable", "fat-flavor"],
    en:{name:'Salsa',time:'10 min',servings:'4 (makes about 2 cups)',why:'A fresh, zesty tomato salsa — far better than store-bought and ready in minutes. The key is ripe tomatoes and a balance of acid, heat, and salt.',ingredients:['Roma tomatoes 4 (about 1 lb / 450 g) — or any ripe, firm tomato','Red onion 1/4 cup (40 g), finely diced','Jalapeno pepper 1, seeded and minced (leave seeds in for more heat)','Fresh cilantro 2 tbsp, finely chopped','Lime juice 2 tbsp (about 1 lime)','Garlic clove 1, minced','Sea salt 1/2 tsp (adjust to taste)','(Optional) 1/2 tsp ground cumin for depth'],steps:['Prepare the tomatoes: bring a small pot of water to a boil. Cut a shallow X on the bottom of each tomato. Drop them into the boiling water for 30 seconds, then immediately transfer to a bowl of ice water. The skins will peel off easily. Peel all four tomatoes. (Skip this step if you do not mind the skins — they add nutrition but a slightly tougher texture.)','Dice the tomatoes: cut each peeled tomato in half horizontally. Gently squeeze out the seeds and discard them. Cut the flesh into 1/4-inch (0.5 cm) dice. You should get about 2 cups of diced tomato. Place in a medium bowl.','Dice the red onion as finely as possible — aim for 1/8-inch pieces. Add to the bowl.','Mince the jalapeno: cut off the stem end, slice it in half lengthwise, and use a spoon to scrape out the seeds and membranes (wear gloves if your skin is sensitive). Mince the flesh as finely as possible. Add to the bowl. (Leave the seeds in if you want a spicier salsa.)','Mince the garlic clove. Add to the bowl.','Finely chop the fresh cilantro. Add to the bowl.','Add the lime juice, salt, and cumin if using. Stir everything together with a spoon.','Taste and adjust: add more salt if the salsa tastes flat (salt is critical — it brings out all the other flavours), more lime juice for brightness, or more jalapeno for heat.','Let the salsa sit at room temperature for 10 minutes before serving. This allows the flavours to meld and the tomatoes to release some juice, creating a flavorful liquid.','Serve with tortilla chips, over eggs, tacos, grilled fish, or chicken.'],notes:'For a smoky salsa, char the tomatoes, onion, and jalapeno under the broiler for 5 minutes before chopping. For a smoother texture, pulse half the salsa in a food processor or blender and mix back in. Refrigerate up to 3 days — the flavour improves after the first day.'},
    zh:{name:'莎莎酱',time:'10 分钟',servings:'4 份（约 2 杯）',why:'新鲜爽辣的番茄莎莎酱——远胜市售且几分钟做好。关键是成熟番茄和酸、辣、盐的平衡。',ingredients:['罗马番茄 4 个（约 450 克）——或任何成熟硬实番茄','红洋葱 40 克，切细丁','墨西哥辣椒 1 个，去籽切末（留籽更辣）','新鲜香菜 2 汤匙，切碎','青柠汁 2 汤匙（约 1 个青柠）','蒜 1 瓣，切末','海盐 半茶匙（按口味调整）','（可选）孜然粉 半茶匙，增层次'],steps:['处理番茄：小锅水煮沸。每个番茄底部划浅十字。放入沸水 30 秒，立即捞出放入冰水。皮会轻松剥落。四个全部去皮。（不在意皮可跳过——皮增营养但口感略粗。）','切番茄丁：每个去皮番茄水平切半。轻挤去籽丢弃。果肉切 0.5 厘米丁。约得 2 杯番茄丁放入中碗中。','红洋葱尽可能切细——目标 3 毫米丁。放入碗中。','处理辣椒：切去蒂端，纵切两半，用勺刮去籽和筋膜（皮肤敏感可戴手套）。果肉尽可能切细。放入碗中。（想更辣可留籽。）','蒜切末。放入碗中。','香菜切碎。放入碗中。','加青柠汁、盐和孜然（如用），用勺拌匀。','试味调整：淡加盐（盐很关键——带出所有其他风味），亮加青柠汁，辣加辣椒。','室温静置 10 分钟后食用。让风味融合、番茄出汁形成美味液体。','配玉米片、鸡蛋、塔可、烤鱼或鸡肉食用。'],notes:'烟熏莎莎酱可将番茄、洋葱和辣椒先在 broiler 下烤 5 分钟再切。更顺滑口感可将一半莎莎酱用食物处理器脉冲打碎后拌回。冷藏 3 天——第一天后风味更佳。'},
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
    en:{name:'Marinara Sauce',time:'5 min',servings:'1/2 cup',why:'A convenient, ready-to-use tomato sauce — simply open a jar and heat. A versatile pantry staple for pasta, pizza, or as a base for other dishes.',ingredients:['Store-bought marinara sauce 1 jar (24 oz / 680 g), your favourite brand'],steps:['Open the jar of marinara sauce.','Pour the desired amount (about 1/2 cup per serving) into a small saucepan.','Heat over medium-low heat for 3 to 5 minutes, stirring occasionally, until warmed through. Do not boil — gentle heating preserves the flavour.','Alternatively, microwave in a microwave-safe bowl for 60 to 90 seconds, stirring halfway through.','Taste and add a pinch of salt, black pepper, or dried oregano if desired.','Use immediately over pasta, pizza, meatballs, or as a dipping sauce.'],notes:'Look for brands with no added sugar — the ingredient list should be short: tomatoes, olive oil, garlic, herbs, salt. Good brands include Rao, Mutti, and Cento. Once opened, refrigerate the remaining sauce and use within 5 to 7 days.'},
    zh:{name:'番茄酱汁',time:'5 分钟',servings:'半杯',why:'方便即用的番茄酱——开罐加热即可。意面、披萨或作为其他菜肴基底的百搭厨房常备品。',ingredients:['市售番茄酱汁 1 罐（680 克），喜欢的品牌'],steps:['打开番茄酱罐。','将所需分量（每份约半杯）倒入小锅中。','中小火加热 3 至 5 分钟，偶尔搅动至温透。不要煮沸——温和加热保持风味。','或微波炉专用碗中加热 60 至 90 秒，中途搅拌。','按需加少许盐、黑胡椒或干牛至调味。','立即用于意面、披萨、肉丸或蘸酱。'],notes:'选择无添加糖的品牌——成分表应简短：番茄、橄榄油、蒜、香草、盐。好品牌包括 Rao、Mutti 和 Cento。开封后冷藏剩余酱汁，5 至 7 天内用完。'},
    macros:{protein:{g:2,pct:12},fat:{g:3,pct:40},netCarbs:{g:8,pct:48}}
  },
  {
    id:'f26', type:'snack', carb:'low', tags:[], contains:["nuts"], focus:[],
    img:'peanut-sauce.jpg', emoji:'🥜', foodCats:["fat-flavor"],
    en:{name:'Peanut Sauce',time:'10 min',servings:'4 (makes about 3/4 cup)',why:'A rich, savoury-sweet Southeast Asian sauce — creamy peanut butter thinned with soy, lime and a touch of honey. Perfect for satay, noodles, spring rolls, or as a dip.',ingredients:['Peanut butter 1/2 cup (130 g), smooth and natural (just peanuts and salt — avoid brands with added sugar or hydrogenated oils)','Soy sauce 2 tbsp (or tamari for gluten-free)','Lime juice 1 tbsp (about half a lime) — or rice vinegar','Honey 1 tbsp (or maple syrup for vegan)','Garlic clove 1, minced','Fresh ginger 1 tsp, grated on a microplane','Warm water 3 to 4 tbsp (for thinning)','Sesame oil 1 tsp','(Optional) sriracha or chili flakes 1/4 tsp for heat','(Optional) coconut aminos 1 tbsp, to replace some soy sauce for a sweeter, lower-sodium option'],steps:['In a medium bowl, combine the peanut butter, soy sauce, lime juice, honey, minced garlic, and grated ginger.','Begin stirring with a whisk or fork. The mixture will be very thick and stiff at first — this is normal.','Add the warm water 1 tablespoon at a time, whisking vigorously after each addition. The sauce will gradually loosen and become smooth. Stop adding water when the sauce reaches your desired consistency: it should be pourable but still thick enough to coat a spoon. Typically 3 to 4 tbsp total.','Add the sesame oil and sriracha (if using). Stir until completely incorporated.','Taste the sauce and adjust: more soy sauce for saltiness, more honey for sweetness, more lime juice for brightness and acidity, more sriracha for heat. The balance of salty, sweet, and sour is what makes a great peanut sauce.','If the sauce is too thick after sitting, add another splash of warm water and stir. If too thin, add another tablespoon of peanut butter.','Use immediately, or transfer to a jar and refrigerate. The sauce thickens when cold — reheat gently in the microwave (15 to 20 seconds) or on the stove over low heat, and thin with warm water if needed.'],notes:'Natural peanut butter (ingredients: peanuts, salt) gives the best flavour and texture — conventional brands with added sugar and oil produce a sauce that is too sweet and has a greasy mouthfeel. For a nut-free version, use sunflower seed butter with the same measurements. The sauce keeps for 1 week refrigerated.'},
    zh:{name:'花生酱汁',time:'10 分钟',servings:'4 份（约 3/4 杯）',why:'浓郁咸甜的东南亚酱汁——花生酱配酱油、青柠和蜂蜜调稀。蘸沙爹、拌面、春卷或作蘸酱皆宜。',ingredients:['花生酱 半杯（130 克），顺滑天然（仅花生和盐——避免加糖或氢化油的品牌）','酱油 2 汤匙（无麸用 tamari）','青柠汁 1 汤匙（约半个青柠）——或米醋','蜂蜜 1 汤匙（纯素用枫糖浆）','蒜 1 瓣，切末','鲜姜 1 茶匙，磨泥','温水 3 至 4 汤匙（调稀用）','麻油 1 茶匙','（可选）是拉差或辣椒片 1/4 茶匙增辣','（可选）椰子氨基酸 1 汤匙，替代部分酱油，更甜低钠'],steps:['中碗中混合花生酱、酱油、青柠汁、蜂蜜、蒜末和姜末。','用打蛋器或叉开始搅拌。混合物开始很稠很硬——正常。','逐次加 1 汤匙温水，每次加后用力搅打。酱会逐渐变松变顺滑。加至理想稠度时停：应可倒但仍浓到能裹勺。通常共 3 至 4 汤匙。','加麻油和是拉差（如用），搅至完全混合。','试味调整：咸加酱油，甜加蜂蜜，亮加青柠汁，辣加是拉差。咸、甜、酸的平衡是好花生酱汁的关键。','静置后太稠可再加少许温水搅打。太稀加 1 汤匙花生酱。','立即使用，或装入瓶中冷藏。冷后变稠——微波 15 至 20 秒或小火炉上微温加热，需要时加温水调稀。'],notes:'天然花生酱（成分：花生、盐）风味口感最佳——加糖加油的常规品牌酱太甜且口感油腻。无坚果版用葵花籽酱，用量相同。酱冷藏可存 1 周。'},
    macros:{protein:{g:4,pct:11},fat:{g:12,pct:73},netCarbs:{g:6,pct:16}}
  },
  {
    id:'f27', type:'snack', carb:'low', tags:[], contains:["sesame"], focus:[],
    img:'sesame-dressing.jpg', emoji:'🥗', foodCats:["fat-flavor"],
    en:{name:'Sesame Dressing',time:'5 min',servings:'4 (makes about 1/3 cup)',why:'A nutty, umami-rich Japanese dressing — toasted sesame oil combined with rice vinegar and soy for a bright, savoury drizzle that transforms simple greens.',ingredients:['Toasted sesame oil 3 tbsp (45 ml) — this is dark, fragrant oil from roasted sesame seeds','Rice vinegar 2 tbsp (30 ml) — unseasoned (not seasoned rice vinegar which contains added sugar and salt)','Soy sauce 1 tbsp (15 ml) — or tamari for gluten-free','Honey 1 tsp (or sugar 1/2 tsp dissolved in 1 tsp warm water)','Fresh ginger 1/2 tsp, grated on a microplane','Garlic clove 1 small, grated on a microplane to a paste','Sea salt 1/8 tsp (the soy sauce is salty, so add sparingly)','(Optional) toasted sesame seeds 1 tsp, for texture and garnish','(Optional) neutral oil 1 tbsp (like canola or grapeseed) to mellow the strong sesame flavour if desired'],steps:['In a small jar with a tight-fitting lid (a 4 oz mason jar works perfectly), combine the toasted sesame oil, rice vinegar, soy sauce, honey, grated ginger, grated garlic, and salt.','If using the optional neutral oil, add it now.','Seal the jar tightly. Shake vigorously for 15 to 20 seconds. The dressing should become slightly thicker and more opaque as the ingredients emulsify.','Stop shaking and let the dressing rest for 1 minute. The tiny ginger and garlic particles will settle slightly.','Taste the dressing by dipping a small piece of lettuce or cucumber. Adjust: more rice vinegar for acidity, more soy sauce for saltiness, more honey for sweetness, more ginger for bite.','If using sesame seeds, add them now and shake briefly to distribute.','The dressing is ready to use immediately. Drizzle over salads, steamed vegetables, cold noodles, or sliced cucumbers. Use about 1 tbsp per serving.','Store leftover dressing in the sealed jar at room temperature for up to 1 week. Shake before each use — the ingredients will separate as they sit.'],notes:'Toasted sesame oil is made from roasted sesame seeds and has a deep, smoky, nutty flavour. Do not confuse it with untoasted (light-coloured) sesame oil, which has almost no flavour. Never heat toasted sesame oil — it loses its aroma at high temperatures. Add it to cooked dishes off the heat.'},
    zh:{name:'芝麻沙拉酱',time:'5 分钟',servings:'4 份（约 1/3 杯）',why:'坚果香、鲜味浓郁的日式酱——烤芝麻油配米醋和酱油，咸鲜明亮，让简单沙拉焕然一新。',ingredients:['烤芝麻油 3 汤匙（45 毫升）——深色、芳香，由烘焙芝麻制成','米醋 2 汤匙（30 毫升）——无调味（非含糖盐的调味米醋）','酱油 1 汤匙（15 毫升）——无麸用 tamari','蜂蜜 1 茶匙（或糖 半茶匙溶于 1 茶匙温水）','鲜姜 半茶匙，磨泥','蒜 1 小瓣，磨泥','海盐 1/8 茶匙（酱油已咸，少量加）','（可选）烤芝麻 1 茶匙，增口感和装饰','（可选）中性油 1 汤匙（如菜籽或葡萄籽）缓和浓芝麻味'],steps:['小密封瓶中（4 盎司 mason 瓶最佳），混合烤芝麻油、米醋、酱油、蜂蜜、姜末、蒜泥和盐。','如用中性油现在加入。','盖紧密封。用力摇 15 至 20 秒。酱应略微变稠变浊——成分乳化。','停摇静置 1 分钟。姜蒜微粒会略沉淀。','蘸一小片生菜或黄瓜试味。调整：酸加米醋，咸加酱油，甜加蜂蜜，辣加姜。','如用芝麻，现在加入轻摇分布。','酱立即可用。淋在沙拉、蒸蔬菜、凉面或黄瓜片上。每份约 1 汤匙。','剩余酱密封瓶中室温存放 1 周。每次用前摇匀——静置会分层。'],notes:'烤芝麻油由烘焙芝麻制成，有深沉烟熏坚果风味。不要与未烤（浅色）芝麻油混淆——后者几乎无味。绝不可加热烤芝麻油——高温会失去香气。在离火后加入菜肴。'},
    macros:{protein:{g:1,pct:3},fat:{g:12,pct:87},netCarbs:{g:3,pct:10}}
  },
  {
    id:'f28', type:'snack', carb:'low', tags:[], contains:["egg"], focus:[],
    img:'aioli.jpg', emoji:'🧄', foodCats:["fat-flavor"],
    en:{name:'Aioli',time:'5 min',servings:'4 (makes about 1/2 cup)',why:'A garlicky, creamy Mediterranean sauce — mayonnaise elevated with fresh garlic and lemon for a bold, pungent accompaniment to fries, fish, and grilled meats.',ingredients:['Mayonnaise 1/2 cup (120 ml) — good quality, store-bought (or use Greek yogurt for a lighter version)','Garlic clove 1, large (or 2 small cloves)','Sea salt 1/4 tsp (for making the garlic paste)','Lemon juice 1 tsp (about 1/4 lemon)','Extra-virgin olive oil 1 tsp','Black pepper 1/8 tsp','(Optional) fresh parsley 1 tsp, finely chopped','(Optional) lemon zest 1/4 tsp, for extra lemon flavour'],steps:['Make the garlic paste (this step is crucial for smooth aioli): peel the garlic clove and mince it as finely as possible on a cutting board. Sprinkle 1/4 tsp sea salt over the minced garlic. Using the flat side of a chef knife held at a slight angle, press down and drag it across the garlic-salt mixture repeatedly, scraping it back together with the edge of the knife between drags. Repeat 6 to 8 times until the garlic breaks down into a smooth, glossy paste with no chunks. The salt acts as an abrasive that helps break down the garlic fibers.','In a small bowl, combine the garlic paste, mayonnaise, lemon juice, olive oil, and black pepper.','Whisk with a small whisk or fork until completely smooth and well blended. The aioli should be creamy and uniform in colour.','Add the chopped parsley and lemon zest if using. Stir to incorporate.','Let the aioli rest for 5 minutes at room temperature before serving. This allows the raw garlic flavour to mellow slightly and the lemon to infuse into the sauce.','Taste and adjust: add more lemon juice for brightness, more garlic paste for intensity (but be careful — raw garlic gets stronger over time), or more salt if needed.','Serve with french fries, grilled fish, roasted vegetables, fried chicken, or as a sandwich spread.'],notes:'Making a garlic paste with salt is the key step — it mellows the harsh, raw bite of garlic and creates a smooth texture without chunks. For a more authentic (but more labor-intensive) version, whisk 1 egg yolk with the garlic paste, then slowly drizzle in 1/2 cup olive oil while whisking constantly to create a true emulsion. The mayonnaise shortcut is faster, safer (no raw egg), and tastes nearly identical.'},
    zh:{name:'蒜蓉蛋黄酱',time:'5 分钟',servings:'4 份（约半杯）',why:'蒜香浓郁的地中海酱——蛋黄酱配鲜蒜和柠檬提升，浓烈大胆，配薯条、鱼和烤肉极佳。',ingredients:['蛋黄酱 半杯（120 毫升）——优质市售（或用希腊酸奶更轻）','蒜 1 大瓣（或 2 小瓣）','海盐 1/4 茶匙（做蒜泥用）','柠檬汁 1 茶匙（约 1/4 个柠檬）','特级初榨橄榄油 1 茶匙','黑胡椒 1/8 茶匙','（可选）鲜欧芹 1 茶匙，切碎','（可选）柠檬皮 1/4 茶匙，增柠檬味'],steps:['做蒜泥（此步骤对顺滑蒜泥酱至关重要）：蒜去皮后在砧板上尽可能切细末。撒 1/4 茶匙海盐在蒜末上。用厨师刀面微角度压住蒜盐混合物反复拖刮，用刀刃刮回聚拢。重复 6 至 8 次至蒜分解成顺滑光亮的泥，无块状。盐起研磨作用帮助分解蒜纤维。','小碗中混合蒜泥、蛋黄酱、柠檬汁、橄榄油和黑胡椒。','用小打蛋器或叉搅至完全顺滑均匀。蒜泥酱应奶滑且颜色一致。','加切碎的欧芹和柠檬皮（如用），搅拌混合。','室温静置 5 分钟后食用。让生蒜味略缓和、柠檬渗入酱中。','试味调整：亮加柠檬汁，浓加蒜泥（注意——生蒜随时间增强），淡加盐。','搭配薯条、烤鱼、烤蔬菜、炸鸡或作三明治抹酱。'],notes:'用盐做蒜泥是关键步骤——缓和生蒜的辛辣并产生无块顺滑质地。更正宗（但更费工）的做法：用蒜泥搅打 1 个蛋黄，然后慢慢淋入半杯橄榄油不停搅打形成真正乳化。蛋黄酱捷径更快、更安全（无生蛋）且味道几乎相同。'},
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
    en:{name:'Chimichurri',time:'10 min',servings:'6 (makes about 3/4 cup)',why:'A vibrant, herbaceous Argentine sauce — perfect drizzled over grilled steak, chicken, or fish. The combination of parsley, garlic, vinegar, and oil is simple but transformative.',ingredients:['Fresh flat-leaf parsley 1 cup (packed, about 1 large bunch / 30 g) — remove thick stems','Fresh oregano 2 tbsp fresh (or 1 tsp dried oregano, crumbled)','Garlic 3 cloves, peeled','Red wine vinegar 3 tbsp (45 ml)','Extra-virgin olive oil 1/3 cup (80 ml)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Red pepper flakes 1/4 tsp (optional, for mild heat)','(Optional) fresh cilantro 2 tbsp, for a brighter, more complex flavour'],steps:['Wash the parsley thoroughly under cold water and pat dry with paper towels. Remove the thick lower stems (keep the tender stems and all leaves). Roughly chop the parsley.','If using fresh oregano, strip the leaves from the stems. If using dried oregano, crumble it between your fingers to release the oils.','Peel the garlic cloves.','Place the parsley (and cilantro if using), fresh oregano leaves (or dried oregano), and peeled garlic cloves in a food processor. Pulse 6 to 8 times until everything is finely chopped but not pureed — you want texture, not a smooth paste. (Alternatively, chop everything by hand as finely as possible.)','Transfer the chopped herb mixture to a medium bowl.','Add the red wine vinegar, sea salt, black pepper, and red pepper flakes (if using). Stir to combine.','Slowly pour in the olive oil while whisking gently. The sauce should look loose and herbaceous, not thick like a paste — chimichurri is meant to be pourable.','Taste and adjust: more vinegar for acidity, more salt if it tastes flat, more olive oil if it is too sharp. The balance should be herb-forward with a bright acidic kick.','Let the chimichurri sit at room temperature for at least 15 minutes before serving. This is essential — it allows the dried herbs (if using dried oregano) to rehydrate, the garlic to mellow, and all the flavours to meld.','Stir before serving. Drizzle generously over grilled steak, chicken, fish, pork, or roasted vegetables.'],notes:'Chimichurri is best made ahead — it improves dramatically after 2 to 3 hours and keeps for 5 days refrigerated. The olive oil will solidify when cold; let it sit at room temperature for 30 minutes and stir before using. For a chunkier, more traditional version, chop everything by hand instead of using a food processor.'},
    zh:{name:'阿根廷青酱',time:'10 分钟',servings:'6 份（约 3/4 杯）',why:'鲜艳香草的阿根廷酱——淋在烤牛排、鸡或鱼上完美。欧芹、蒜、醋和油的组合简单却变化无穷。',ingredients:['新鲜平叶欧芹 1 杯（压紧，约 1 大把 / 30 克）——去粗梗','新鲜牛至 2 汤匙（或干牛至 1 茶匙，捏碎）','蒜 3 瓣，去皮','红酒醋 3 汤匙（45 毫升）','特级初榨橄榄油 1/3 杯（80 毫升）','海盐 半茶匙','黑胡椒 1/4 茶匙','辣椒片 1/4 茶匙（可选，微辣）','（可选）新鲜香菜 2 汤匙，更亮更复杂'],steps:['欧芹冷水彻底冲洗后用厨房纸吸干。去除粗下梗（保留嫩梗和所有叶）。粗切。','如用鲜牛至，从茎上剥叶。如用干牛至，手指捏碎释放精油。','蒜去皮。','食物处理器中放入欧芹（和香菜如用）、鲜牛至叶（或干牛至）和去皮蒜瓣。脉冲 6 至 8 次至全部细碎但未成泥——要质感，不要顺滑酱。（或手工尽可能切细。）','切碎的香草混合物移至中碗中。','加红酒醋、海盐、黑胡椒和辣椒片（如用），搅拌混合。','慢慢倒入橄榄油同时轻搅。酱应松散多草本，不像糊状——阿根廷青酱应可倒。','试味调整：酸加醋，淡加盐，冲加橄榄油。应以草本为主、带明亮酸味。','室温静置至少 15 分钟后食用。此步骤至关重要——让干香草（如用干牛至）吸水复原、蒜味缓和、所有风味融合。','食用前搅拌。大量淋在烤牛排、鸡、鱼、猪或烤蔬菜上。'],notes:'阿根廷青酱最好提前做——2 至 3 小时后大幅改善，冷藏可存 5 天。橄榄油冷藏会凝固；室温放 30 分钟搅后使用。更传统更粗的版本可全部手工切。'},
    macros:{protein:{g:1,pct:3},fat:{g:14,pct:91},netCarbs:{g:2,pct:6}}
  },
  {
    id:'f30', type:'snack', carb:'low', tags:[], contains:[], focus:[],
    img:'coconut-curry-sauce.jpg', emoji:'🍛', foodCats:["fat-flavor"],
    en:{name:'Coconut Curry Sauce',time:'10 min',servings:'4 (makes about 1 cup)',why:'A fragrant, spiced coconut sauce — Thai curry paste bloomed in oil, then simmered with coconut milk for a rich, versatile curry base that pairs with any protein or vegetable.',ingredients:['Coconut milk 1 cup (240 ml), full-fat and canned (not the carton beverage kind — it is too thin)','Red or green Thai curry paste 1 to 2 tbsp (start with 1 tbsp for mild, 2 for medium heat)','Garlic clove 1, minced','Fresh ginger 1 tsp, grated on a microplane','Coconut oil 1 tbsp (or olive oil if you do not have coconut oil)','Fish sauce 1 tsp (optional, adds umami depth — omit for vegan)','Lime juice 1 tsp (about 1/4 lime)','(Optional) fresh cilantro 1 tbsp, chopped for garnish','(Optional) 1/2 tsp brown sugar or coconut sugar, to balance heat'],steps:['Open the can of coconut milk. If the cream has separated from the water (common with full-fat canned coconut milk), scoop the thick solid cream from the top into a small bowl and set aside the liquid water portion.','Heat 1 tbsp coconut oil in a small saucepan over medium heat until melted and shimmering.','Add 1 to 2 tbsp curry paste (depending on your preferred heat level). Cook for 1 to 2 minutes, stirring constantly with a wooden spoon, pressing the paste against the bottom of the pan to break it apart. The paste will become fragrant and the oil will turn bright red or green — this step is called "blooming" and it releases the complex spice flavours. Do not let it burn.','Add the minced garlic and grated ginger. Cook for 30 seconds more, stirring constantly.','Pour in the coconut milk (both the cream and the liquid water portion). Whisk or stir vigorously until the curry paste is fully dissolved and the sauce is smooth — no lumps of paste should remain.','Bring the sauce to a gentle simmer (small bubbles around the edges, not a rolling boil). Reduce heat to medium-low.','Simmer for 3 to 5 minutes, stirring occasionally, until the sauce slightly thickens and coats the back of a spoon.','Remove from heat. Stir in the fish sauce (if using) and lime juice. The lime juice is added off the heat to preserve its bright flavour.','If using brown sugar, add it now and stir to dissolve. Taste and adjust: more curry paste for heat, more fish sauce for saltiness, more lime for brightness, more sugar to mellow the heat.','Garnish with chopped cilantro if using. Serve immediately as a sauce for chicken, fish, shrimp, tofu, vegetables, or rice.'],notes:'Blooming the curry paste in oil before adding liquid is the single most important step — it unlocks the complex layer of spices that defines Thai curry. Do not skip it. Adjust the curry paste amount for your preferred heat level. The sauce keeps for 3 days refrigerated and thickens when cold — reheat gently and thin with a splash of water or broth.'},
    zh:{name:'椰香咖喱酱',time:'10 分钟',servings:'4 份（约 1 杯）',why:'香料芬芳的椰奶酱——泰式咖喱酱在油中爆香，再与椰奶同煮成浓郁百搭的咖喱底，搭配任何蛋白或蔬菜。',ingredients:['椰奶 1 杯（240 毫升），全脂罐头（非纸盒饮料型——太稀）','红或绿泰式咖喱酱 1 至 2 汤匙（1 汤匙微辣，2 汤匙中辣）','蒜 1 瓣，切末','鲜姜 1 茶匙，磨泥','椰油 1 汤匙（无椰油可用橄榄油）','鱼露 1 茶匙（可选，增鲜味——纯素省去）','青柠汁 1 茶匙（约 1/4 个青柠）','（可选）鲜香菜 1 汤匙，切碎装饰','（可选）红糖 半茶匙或椰糖，平衡辣味'],steps:['开椰奶罐。如奶油与水分层（全脂罐头常见），将顶部厚固体奶油舀入小碗，液体水部分单独放。','小锅中火加 1 汤匙椰油至融化微闪。','加 1 至 2 汤匙咖喱酱（按辣度喜好）。炒 1 至 2 分钟不停搅，用木勺将酱压向锅底分散。酱会变香、油会变亮红或绿——此步骤叫"爆香"，释放复合香料风味。不要焦。','加蒜末和姜末炒 30 秒不停搅。','倒入椰奶（奶油和液体水部分都倒）。用力搅打至咖喱酱完全溶解、酱顺滑——不应有酱块残留。','煮至微沸（边缘小泡，非大滚）。转中小火。','微沸煮 3 至 5 分钟偶尔搅至微稠能裹勺背。','离火。搅入鱼露（如用）和青柠汁。青柠汁离火后加以保持明亮风味。','如用红糖现在加搅至溶解。试味调整：辣加咖喱酱，咸加鱼露，亮加青柠，辣太冲加糖。','撒香菜（如用）。立即作为鸡、鱼、虾、豆腐、蔬菜或米饭的酱汁食用。'],notes:'咖喱酱先用油爆香再加液体是最重要的步骤——释放定义泰式咖喱的复合香料层。不可跳过。咖喱酱量按辣度调整。酱冷藏 3 天，冷后变稠——微温加热并加少许水或高汤调稀。'},
    macros:{protein:{g:2,pct:5},fat:{g:14,pct:80},netCarbs:{g:6,pct:15}}
  },
  {
    id:'f31', type:'snack', carb:'low', tags:[], contains:["gluten"], focus:[],
    img:'gravy.jpg', emoji:'🍖', foodCats:["fat-flavor"],
    en:{name:'Gravy',time:'10 min',servings:'4',why:'A rich, savoury pan sauce — built from meat drippings, thickened with flour and finished with broth for a classic accompaniment.',ingredients:['Pan drippings 2 tbsp (from roasted or fried meat)','All-purpose flour 2 tbsp','Broth 1 cup (chicken, beef or vegetable)','Worcestershire sauce 1 tsp (optional)','Black pepper 1/8 tsp','Sea salt to taste'],steps:['After cooking your meat, remove it from the pan and pour off all but 2 tablespoons of drippings.','Place the pan over medium heat.','Sprinkle the flour over the drippings and whisk constantly for 1 minute to cook out the raw flour taste — this is the roux.','Gradually pour in the broth, whisking constantly to prevent lumps.','Continue cooking and whisking for 3-5 minutes until the gravy thickens to your desired consistency.','Add Worcestershire sauce and pepper. Taste and add salt if needed — drippings are already salty.','If the gravy is too thick, add more broth. If too thin, simmer a few more minutes.','Serve hot over meat, mashed potatoes or biscuits.'],notes:'The key ratio is equal parts fat and flour. If you do not have enough drippings, supplement with butter. Strain the gravy through a fine sieve for a silky texture.'},
    zh:{name:'肉汁',time:'10 分钟',servings:'4 份',why:'浓郁咸鲜的锅底酱——用肉底汁、面粉增稠、高汤收尾的经典酱汁。',ingredients:['锅底汁 2 汤匙（烤肉或煎肉剩余）','中筋面粉 2 汤匙','高汤 1 杯（鸡、牛或蔬菜）','伍斯特酱 1 茶匙（可选）','黑胡椒 1/8 茶匙','海盐适量'],steps:['肉烤好后取出，锅中只留 2 汤匙底汁。','中火加热锅。','撒面粉在底汁上，不停搅 1 分钟炒去生粉味——这就是面糊。','慢慢倒入高汤，不停搅防结块。','继续搅煮 3-5 分钟至理想稠度。','加伍斯特酱和胡椒。试味按需加盐——底汁本身已咸。','太稠加高汤，太稀多煮几分钟。','趁热浇在肉、土豆泥或饼干上。'],notes:'关键比例是等量油脂和面粉。底汁不够可用黄油补。过筛可得更丝滑口感。'},
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


  /* ==================== NEW INGREDIENT RECIPES (Nov 2026) ==================== */

  {
    id:'v41', type:'snack', carb:'low', tags:['vegetarian','vegan','gluten-free'], contains:[], focus:['Quick & easy'],
    img:null, emoji:'🥤', foodCats:['vegetable'],
    en:{name:'Roasted Rutabaga',time:'35 min',servings:'4',why:'Rutabaga is a cross between cabbage and turnip with a sweet, earthy flavour. Roasting caramelises its natural sugars and brings out a nutty, potato-like texture with fewer carbs.',ingredients:['Rutabaga 1 large (about 600 g)','Olive oil 2 tbsp','Salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) garlic powder 1/2 tsp','(Optional) fresh thyme or rosemary 1 tsp chopped'],steps:['Preheat oven to 425F (220C).','Peel the rutabaga and cut into 1/2-inch (1 cm) cubes.','Toss with olive oil, salt, pepper, and any optional seasonings.','Spread on a baking sheet in a single layer.','Roast 25-30 minutes, flipping once halfway, until golden and tender.'],notes:'Rutabaga can be tough to peel. Try adding a drizzle of honey and thyme for a sweet-savoury version. Also delicious mashed like potatoes.'},
    zh:{name:'烤大头菜',time:'35 分钟',servings:'4 份',why:'大头菜（芙蓃甘蓝）是卷心菜与芙蓃的杂交，甜味醇厚。烘烤使天然糖分焦糖化，带出坚果风味和类土豆口感，但碳水更低。',ingredients:['大头菜 1 个（约 600g）','橄榄油 2 汤匙','盐 1/2 茶匙','黑胡椒 1/4 茶匙','（可选）蓜粉 1/2 茶匙','（可选）新鲜百里香或迷迫香 1 茶匙切碎'],steps:['烤箱预热至 220°C。','大头菜去皮切成 1 厘米方块。','拌入橄榄油、盐、胡椒和可选调味料。','单层铺在烤盘上。','烤 25-30 分钟，中途翻一次，至金黄软烂。'],notes:'大头菜皮硬难削——用利刀。可加蜂蜜和百里香做甜咸版。也可像土豆一样压泥。'},
    macros:{protein:{g:2,pct:10},fat:{g:7,pct:52},netCarbs:{g:8,pct:38}}
  },

  {
    id:'v42', type:'snack', carb:'low', tags:['vegetarian','vegan','gluten-free','gut-healing'], contains:['dairy'], focus:['Gut-healing'],
    img:null, emoji:'🥤', foodCats:['vegetable'],
    en:{name:'Mashed Turnip',time:'25 min',servings:'4',why:'A lighter alternative to mashed potatoes. Turnips have a slightly peppery, sweet flavour and significantly fewer carbs. Mashed with butter, they make a comforting side dish.',ingredients:['Turnips 4 medium (about 600 g)','Butter 2 tbsp','Milk or cream 2-3 tbsp','Salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) garlic clove 1, roasted and mashed','(Optional) fresh chives or parsley, chopped'],steps:['Peel the turnips and cut into 1-inch cubes.','Place in a pot of salted water, bring to a boil, and cook 15-20 minutes until very tender.','Drain well and return to the pot.','Add butter, milk, salt, and pepper. Mash with a potato masher until smooth.','Taste and adjust seasoning. Stir in chives if using.'],notes:'For dairy-free, use olive oil instead of butter and a plant-based milk. Turnips can be bitter. Mix half turnip and half potato for a milder version.'},
    zh:{name:'芙蓃泥',time:'25 分钟',servings:'4 份',why:'比土豆泥更清淡的替代品。芙蓃微辣带甜，碳水显著更低。加黄油压泥后是舒适的配菜。',ingredients:['芙蓃 4 个（约 600g）','黄油 2 汤匙','牛奶或奶油 2-3 汤匙','盐 1/2 茶匙','黑胡椒 1/4 茶匙','（可选）蒜 1 瓣烤软压泥','（可选）细香葱或欧芹碎'],steps:['芙蓃去皮切 2.5 厘米块。','放盐水煮沸 15-20 分钟至非常软烂。','充分沪干回锅。','加黄油、牛奶、盐和胡椒，用压泥器压至顺滑。','试味调整，拌入香葱。'],notes:'无乳版用橄榄油和植物奶。半芙蓃半土豆口感更温和。'},
    macros:{protein:{g:2,pct:12},fat:{g:6,pct:50},netCarbs:{g:6,pct:38}}
  },

  {
    id:'f34', type:'snack', carb:'low', tags:['vegetarian','vegan','gluten-free'], contains:[], focus:['Quick & easy'],
    img:null, emoji:'🦐', foodCats:['fat-flavor'],
    en:{name:'Blueberry Chia Seed Jam',time:'15 min',servings:'8 (2 tbsp each)',why:'A quick, no-pectin jam that uses chia seeds to thicken naturally. Far less sugar than store-bought jam, with added fibre and omega-3s from chia. Perfect on toast, yogurt, or oatmeal.',ingredients:['Fresh or frozen blueberries 2 cups (300 g)','Chia seeds 2 tbsp','Maple syrup or honey 1-2 tbsp (to taste)','Lemon juice 1 tbsp','Vanilla extract 1/2 tsp (optional)','Salt a tiny pinch'],steps:['Combine blueberries and lemon juice in a small saucepan over medium heat.','Cook 8-10 minutes, stirring occasionally, until the berries burst and reduce.','Remove from heat and stir in chia seeds, maple syrup, vanilla, and salt.','Let cool 10 minutes. The chia seeds will thicken the jam as it cools.','Transfer to a jar and refrigerate.'],notes:'Keeps refrigerated up to 2 weeks. Use any berry. For a smoother jam, blend briefly before adding chia seeds.'},
    zh:{name:'蓝莓奇亚籽果酱',time:'15 分钟',servings:'8 份（每份 2 汤匙）',why:'无需果胶的快手果酱，用奇亚籽天然增稠。比市售果酱少得多糖分，奇亚籽额外提供纤维和omega-3。适合抹面包、拌酸奶或燕麦。',ingredients:['鲜或冷冻蓝莓 2 杯（300g）','奇亚籽 2 汤匙','枫糖浆或蜂蜜 1-2 汤匙（按口味）','柠檬汁 1 汤匙','香草精 1/2 茶匙（可选）','盐 一小撿'],steps:['小锅中放入蓝莓和柠檬汁，中火加热。','煮 8-10 分钟，偶尔搅拌，至浆果破裂出汁变少。','离火拌入奇亚籽、枫糖浆、香草精和盐。','放凉 10 分钟——奇亚籽在冷却过程中增稠。','装入罐中冷藏。'],notes:'冷藏 2 周。可用任何浆果。如需更细腻，加奇亚籽前短暂搅拌。'},
    macros:{protein:{g:2,pct:12},fat:{g:3,pct:27},netCarbs:{g:6,pct:61}}
  },

  {
    id:'f35', type:'snack', carb:'low', tags:['vegetarian','vegan','gluten-free'], contains:['sesame'], focus:['Quick & easy'],
    img:null, emoji:'⚫', foodCats:['fat-flavor'],
    en:{name:'Black Sesame Butter',time:'15 min',servings:'12 (2 tbsp each)',why:'A mineral-rich paste made by grinding black sesame seeds until they release their natural oils. Similar to tahini but using black sesame seeds, which are higher in calcium and antioxidants. Use as a spread, in energy balls, or in smoothies.',ingredients:['Black sesame seeds 1 1/2 cups (200 g)','Sesame oil 1-2 tbsp (as needed)','Salt a pinch','(Optional) honey or maple syrup 1 tsp'],steps:['Toast the black sesame seeds in a dry skillet over medium heat for 3-4 minutes until fragrant, stirring constantly. Let cool.','Transfer to a food processor or high-powered blender.','Process for 5-10 minutes, scraping down the sides every minute or two. The seeds will first become a powder, then start clumping, and finally release their oils to form a smooth paste.','If the mixture is too dry after 8 minutes, add sesame oil 1 tablespoon at a time until it reaches a spreadable consistency.','Add salt and sweetener if using. Process for 30 more seconds.','Transfer to a jar and store at room temperature or refrigerated.'],notes:'Keeps refrigerated up to 3 months. The oils may separate. For a sweeter spread, add more honey or maple syrup.'},
    zh:{name:'黑芻麻酱',time:'15 分钟',servings:'12 份（每份 2 汤匙）',why:'富含矿物质的酱料，将黑芻麻研磨至出油成酱。类似塔希尼但用黑芻麻，钙和抗氧化物含量更高。可抹面包、做能量球或拌奶昔。',ingredients:['黑芻麻 1 1/2 杯（200g）','芻麻油 1-2 汤匙（视需要）','盐 一撿','（可选）蜂蜜或枫糖浆 1 茶匙'],steps:['干锅中火烘黑芻麻 3-4 分钟至出香，不停翻炒，放凉。','移入食物处理器或大功率搅拌机。','处理 5-10 分钟，每 1-2 分钟刮壁一次。芻麻先变粉，再结块，最后出油成顺滑酱。','如 8 分钟后太干，逐汤匙加芻麻油至可涂抹稠度。','加盐和甜味剂（如用），再处理 30 秒。','装罐室温或冷藏保存。'],notes:'冷藏 3 个月。油可能分离——用前搅匀。如需更甜可加更多蜂蜜。'},
    macros:{protein:{g:4,pct:13},fat:{g:14,pct:73},netCarbs:{g:3,pct:14}}
  }

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
  'v41':{calcium:60,iron:0.8,sodium:300,potassium:350,fibre:3,vitaminC:25},
  'v42':{calcium:40,iron:0.5,sodium:300,potassium:250,fibre:3,vitaminC:20},
  'f34':{calcium:30,iron:0.8,sodium:5,potassium:60,fibre:4,vitaminC:8},
  'f35':{calcium:200,iron:3.0,sodium:10,potassium:80,fibre:2,vitaminC:0},
};
if(typeof window!=='undefined'){window.INGREDIENT_RECIPES=INGREDIENT_RECIPES; window.INGREDIENT_MICROS=INGREDIENT_MICROS;}