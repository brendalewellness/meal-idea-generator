#!/usr/bin/env python3
"""Batch-update recipes with more detailed ingredient amounts and directions.
Handles specific user requests:
- Roasted Beets: change to peel, cut, toss in oil, then roast
- Ranch Dip: use simpler, easier-to-find ingredients
- Marinara Sauce: simplify to jar of store-bought sauce
"""
import re, sys

PATH = r'C:/Users/ble1/Documents/Vitamin Qi/Workbuddy Projects/meal-idea-generator-v8/data/ingredient-recipes.js'

with open(PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Build index: find line number of each recipe's id: line
id_lines = {}
for i, line in enumerate(lines):
    m = re.match(r"\s*id:\s*'([^']+)'", line)
    if m:
        id_lines[m.group(1)] = i

IMPROVEMENTS = {}

def add(rid, en_block, zh_block):
    IMPROVEMENTS[rid] = (en_block, zh_block)

def arr(items):
    return '[' + ','.join(f"'{i}'" for i in items) + ']'

def en(name, time, serv, why, ings, steps, notes):
    return f"en:{{name:'{name}',time:'{time}',servings:'{serv}',why:'{why}',ingredients:{ings},steps:{steps},notes:'{notes}'}}"

def zh(name, time, serv, why, ings, steps, notes):
    return f"zh:{{name:'{name}',time:'{time}',servings:'{serv}',why:'{why}',ingredients:{ings},steps:{steps},notes:'{notes}'}}"

# === STEAK (p01) ===
add('p01',
    en('Steak','15 min','1',
        'A classic high-protein meal that satisfies and keeps blood sugar stable — a tender, juicy steak with a caramelized crust is one of the most nutritious single-ingredient meals you can make.',
        arr(['Beef steak (sirloin, ribeye, or New York strip) 6 to 8 oz (170 to 225 g), 1 to 1.5 inches thick','Sea salt 3/4 tsp (kosher or flaky)','Freshly ground black pepper 1/2 tsp','Olive oil or avocado oil 1 tbsp','Garlic clove 1, smashed with the side of a knife','Fresh rosemary or thyme 1 sprig','Butter 1 tbsp (optional, for basting)']),
        arr(['Remove the steak from the refrigerator 30 to 45 minutes before cooking and let it sit at room temperature — cold meat seizes up in a hot pan and cooks unevenly.','Pat the steak completely dry on all sides with paper towels. Moisture is the enemy of a good crust.','Season generously: sprinkle salt and pepper on all sides, pressing it into the surface with your fingers. Use more salt than you think you need — some will fall off in the pan.','Heat a cast-iron skillet over high heat for 4 to 5 minutes until it is smoking hot. Add 1 tbsp oil and swirl to coat.','Place the steak in the center of the pan and press down gently with tongs for 3 seconds to ensure full contact. Do not move it.','Sear for 3 to 4 minutes for a 1-inch steak (4 to 5 minutes for 1.5 inches) until a deep brown crust forms on the bottom. Do not peek or lift it early.','Flip the steak. Add the smashed garlic clove, rosemary sprig, and butter to the pan.','Tilt the pan slightly and use a spoon to baste the steak with the foaming butter and aromatics continuously for 2 to 3 minutes.','Check internal temperature with a meat thermometer: 120 to 125F for rare, 130 to 135F for medium-rare, 140F for medium.','Transfer the steak to a cutting board and let it rest for 5 to 8 minutes — this is critical. The juices redistribute; cutting early lets them run out.','Slice against the grain into 1/4-inch strips and serve immediately.']),
        'The single most important step is resting — a steak cut immediately loses up to 30% of its juices. Use a thermometer: 125F rare, 135F medium-rare, 145F medium. For a thicker (2-inch) steak, finish in a 400F oven for 4 to 6 minutes after searing both sides.'),
    zh('牛排','15 分钟','1 份',
        '经典高蛋白主菜，满足感强且稳定血糖——焦香外壳、软嫩多汁的牛排是最营养的单一食材餐之一。',
        arr(['牛排（西冷、肋眼或纽约客）170 至 225 克，厚 2.5 至 4 厘米','海盐 3/4 茶匙（粗盐或片状盐）','现磨黑胡椒 半茶匙','橄榄油或牛油果油 1 汤匙','蒜 1 瓣，刀面拍碎','新鲜迷迭香或百里香 1 枝','黄油 1 汤匙（可选，用于淋浇）']),
        arr(['烹饪前 30 至 45 分钟从冰箱取出回温——冷肉入热锅会收缩，受热不均。','用厨房纸将牛排各面彻底吸干——水分是焦壳的大敌。','大量调味：各面撒盐和胡椒，用手指按压使其附着。盐要比预期多——部分会脱落在锅中。','铸铁锅大火加热 4 至 5 分钟至冒烟，加 1 汤匙油转匀。','牛排放入锅中，用夹子轻压 3 秒确保全面接触。不要移动。','煎 3 至 4 分钟（2.5 厘米厚）或 4 至 5 分钟（4 厘米厚）至底部形成深棕色焦壳。不要提前翻看。','翻面，加入拍碎的蒜、迷迭香和黄油。','倾斜锅身，用勺子持续将起泡黄油和香料淋浇牛排 2 至 3 分钟。','用温度计测内部温度：120 至 125F 一分熟，130 至 135F 三分熟，140F 五分熟。','移至砧板静置 5 至 8 分钟——此步骤至关重要。肉汁重新分布；过早切割会让肉汁流失。','逆纹切 0.5 厘米条状，立即食用。']),
        '最关键的步骤是静置——立即切开会流失多达 30% 的肉汁。温度计：125F 一分熟，135F 三分熟，145F 五分熟。2 英寸厚牛排两面煎后放 400F 烤箱再烤 4 至 6 分钟。'))

# === SLOW-COOKED SHREDDED BEEF (p05) ===
add('p05',
    en('Slow-Cooked Shredded Beef','8 hr (hands-off 15 min)','6',
        'Tender, pull-apart beef that is perfect for meal prep and freezes beautifully — one pot yields six satisfying servings for tacos, bowls, sandwiches or salads.',
        arr(['Beef chuck roast 2 to 2.5 lb (900 to 1100 g), trimmed of excess fat','Yellow onion 1 medium, roughly chopped into 1-inch pieces','Garlic 4 cloves, minced or pressed','Beef broth or stock 2 cups (480 ml), low-sodium','Tomato paste 2 tbsp','Worcestershire sauce 1 tbsp','Soy sauce 1 tbsp','Smoked paprika 1 tsp','Sea salt 1 tsp','Black pepper 1/2 tsp','Bay leaf 1','Olive oil 1 tbsp (for searing)']),
        arr(['Pat the chuck roast dry with paper towels and cut it into 3 to 4 large chunks (about 3 inches each) — smaller pieces cook more evenly and shred easier.','Season all sides of the beef chunks with salt, pepper, and smoked paprika, pressing the spices into the meat.','Heat 1 tbsp olive oil in a large skillet or Dutch oven over medium-high heat until shimmering.','Sear the beef chunks in batches (do not crowd the pan) for 2 to 3 minutes per side until a deep brown crust forms on all sides. Transfer to the slow cooker.','In the same pan (do not wash it — those browned bits are flavour), reduce heat to medium. Add the chopped onion and cook for 3 minutes, stirring occasionally. Add the minced garlic and cook for 1 more minute.','Stir in the tomato paste and cook for 1 minute, stirring constantly — this caramelizes the paste and removes the raw flavour.','Pour in the beef broth, Worcestershire sauce, and soy sauce. Scrape the bottom of the pan with a wooden spoon to deglaze and release all the browned bits.','Bring the liquid to a simmer, then pour the entire mixture over the beef in the slow cooker. Add the bay leaf.','Cook on LOW for 7 to 8 hours or on HIGH for 4 to 5 hours, until the beef falls apart when pressed with a fork.','Remove and discard the bay leaf. Use two forks to shred the beef directly in the slow cooker, mixing it with the cooking liquid.','Taste and adjust salt if needed. The shredded beef will absorb the liquid as it sits.']),
        'Freezes up to 3 months in portion-sized containers. For richer flavour, add 1 tbsp balsamic vinegar or a splash of red wine during deglazing. The cooking liquid can be strained and reduced into a concentrated au jus for dipping sandwiches.'),
    zh('慢炖手撕牛肉','8 小时（实际操作 15 分钟）','6 份',
        '软嫩拉丝牛肉，适合备餐且冷冻效果好——一锅出六份，用于塔可、饭碗、三明治或沙拉。',
        arr(['牛肩肉 900 至 1100 克，修去多余脂肪','黄洋葱 1 个，切 2.5 厘米块','蒜 4 瓣，切末或压泥','低钠牛肉高汤 480 毫升','番茄膏 2 汤匙','伍斯特酱 1 汤匙','酱油 1 汤匙','烟熏辣椒粉 1 茶匙','海盐 1 茶匙','黑胡椒 半茶匙','月桂叶 1 片','橄榄油 1 汤匙（煎用）']),
        arr(['牛肩肉吸干水分，切成 3 至 4 大块（每块约 7 厘米）——小块受热更均匀且更易撕丝。','各面撒盐、胡椒和烟熏辣椒粉，按压使其附着。','大平底锅或荷兰锅中大火加 1 汤匙橄榄油至微闪。','分批煎牛肉块（不要挤锅），每面 2 至 3 分钟至各面深棕焦壳。移至慢炖锅。','原锅不洗（锅底焦物是风味），转中火，加洋葱炒 3 分钟，偶尔翻动。加蒜末炒 1 分钟。','加番茄膏炒 1 分钟不停搅——焦糖化去除生味。','倒入牛肉高汤、伍斯特酱和酱油，用木铲刮起锅底焦物。','煮沸后连汁倒入慢炖锅牛肉上，加月桂叶。','低火炖 7 至 8 小时或高火 4 至 5 小时至叉压即散。','取出丢弃月桂叶，用两把叉子在慢炖锅中直接撕碎牛肉，与汤汁拌匀。','试味按需调盐。撕碎牛肉静置时会吸收汤汁。']),
        '分装冷冻可存 3 个月。更浓郁可在 deglaze 时加 1 汤匙香醋或少许红酒。汤汁可过滤收浓成蘸三明治的浓缩肉汁。'))

# === PORK CHOPS (p06) ===
add('p06',
    en('Pork Chops','20 min','1',
        'A quick weeknight protein that pairs well with roasted vegetables — a properly seared pork chop is juicy inside with a golden, flavourful crust.',
        arr(['Pork chops 6 to 8 oz (170 to 225 g) each, bone-in, 3/4 to 1 inch thick','Sea salt 1/2 tsp (kosoh salt)','Black pepper 1/4 tsp, freshly ground','Olive oil 1 tbsp','Garlic clove 1, smashed','Fresh thyme 2 to 3 sprigs (or 1/2 tsp dried)','Butter 1 tbsp (optional, for basting)','Water or chicken broth 2 tbsp (for deglazing, optional)']),
        arr(['Remove the pork chops from the refrigerator 20 minutes before cooking and let them sit at room temperature.','Pat both sides completely dry with paper towels — a dry surface is essential for a good sear.','Season both sides generously with salt and pepper, pressing it into the meat with your fingers. If you have time, salt the chops 45 minutes ahead — the salt draws out moisture then reabsorbs it, seasoning the meat deeply.','Heat 1 tbsp olive oil in a heavy skillet (cast iron is ideal) over medium-high heat until the oil shimmers and just begins to smoke.','Place the chops in the pan and press down gently with tongs for 3 seconds to ensure full contact. Do not move them.','Sear for 4 to 5 minutes on the first side until a deep golden-brown crust forms. The chop should release easily from the pan when it is ready to flip — if it sticks, it needs another minute.','Flip the chops. Add the smashed garlic clove, thyme sprigs, and butter to the pan.','Tilt the pan slightly and spoon the foaming butter over the chops continuously for 1 to 2 minutes.','Continue cooking for 3 to 4 more minutes until the internal temperature in the thickest part reads 145F (63C) on a meat thermometer inserted horizontally into the center.','Transfer the chops to a plate and tent loosely with foil. Let rest for 3 to 5 minutes — the internal temperature will rise another 5 degrees.','Optional: pour off excess fat, add 2 tbsp water or broth to the pan, and scrape up the browned bits to make a quick pan sauce. Spoon over the chops.']),
        'Brining in 4 cups water + 2 tbsp salt for 30 minutes makes the chops extra juicy and is worth the effort. Do not overcook — 145F is safe and still slightly pink in the center, which is ideal for juiciness. Bone-in chops have more flavor than boneless.'),
    zh('猪排','20 分钟','1 份',
        '快速工作日晚餐蛋白，搭配烤蔬菜极佳——煎好的猪排内里多汁，外皮金黄香浓。',
        arr(['带骨猪排 170 至 225 克，厚 2 至 2.5 厘米','海盐 半茶匙','现磨黑胡椒 1/4 茶匙','橄榄油 1 汤匙','蒜 1 瓣，拍碎','新鲜百里香 2 至 3 枝（或半茶匙干百里香）','黄油 1 汤匙（可选，淋浇用）','水或鸡汤 2 汤匙（可选，deg laze 用）']),
        arr(['猪排提前 20 分钟从冰箱取出回温。','两面用厨房纸彻底吸干——干燥的表面是煎制焦壳的关键。','两面大量撒盐和胡椒，用手指按压附着。如有时间，提前 45 分钟撒盐——盐先吸出水分再回吸，深层入味。','厚底平底锅（铸铁最佳）中大火加 1 汤匙橄榄油至微闪、刚冒烟。','放入猪排，用夹子轻压 3 秒确保全面接触。不要移动。','先煎一面 4 至 5 分钟至深金黄焦壳。猪排能轻松脱锅时才该翻——如粘锅则再等 1 分钟。','翻面，加入拍碎的蒜、百里香和黄油。','倾斜锅身，持续用勺子将起泡黄油淋浇猪排 1 至 2 分钟。','继续煎 3 至 4 分钟至最厚处水平插入的温度计读数 145F（63C）。','装盘松盖锡纸，静置 3 至 5 分钟——内部温度会再升 5 度。','可选：倒出多余油，加 2 汤匙水或高汤刮起锅底焦物做快酱，浇在猪排上。']),
        '4 杯水加 2 汤匙盐浸泡 30 分钟可使猪排更多汁，值得花时间。不要过熟——145F 安全且中心微粉，是最佳多汁状态。带骨猪排比去骨更有风味。'))

# === PORK RIBS (p08) ===
add('p08',
    en('Pork Ribs','3 hr (hands-off 15 min)','4',
        'Fall-off-the-bone tender ribs with a caramelized crust — the low-and-slow method guarantees succulent meat every time, perfect for weekend cooking.',
        arr(['Pork ribs (baby back or St. Louis style) 1 full rack, about 2 to 2.5 lb (900 to 1100 g)','Dry rub: smoked paprika 1 tbsp, brown sugar 1 tbsp, sea salt 1 tsp, black pepper 1 tsp, garlic powder 1 tsp, onion powder 1 tsp, ground cumin 1/2 tsp','Apple cider vinegar 2 tbsp','BBQ sauce 1/3 cup (80 ml), your favourite brand','Water 1/4 cup (for the foil packet)','Olive oil or cooking spray (for the rack)']),
        arr(['Remove the thin membrane from the back of the rack: slide a butter knife under one edge of the membrane at a bone, lift it up, grab it with a paper towel for grip, and peel it off in one sheet. This step is essential for tender, edible ribs.','Pat the rack dry with paper towels on both sides.','Mix all the dry rub ingredients together in a small bowl: smoked paprika, brown sugar, salt, pepper, garlic powder, onion powder, and cumin.','Rub the mixture generously over both sides of the rack, pressing it into the meat with your fingers. Every inch should be coated.','Preheat the oven to 300F (150C). Line a baking sheet with heavy-duty foil.','Tear off two long sheets of heavy-duty foil. Lay one down, place the rack meat-side up on it, and pour 1/4 cup water and 2 tbsp apple cider vinegar into the bottom of the foil around the ribs (not on top of the rub).','Wrap the foil tightly around the rack, sealing all edges. Add a second layer of foil on top to ensure no steam escapes.','Place the foil packet on the baking sheet and bake for 2 to 2.5 hours. The ribs are ready when a fork slides easily into the meat between the bones.','Remove from the oven and carefully open the foil (watch out for hot steam). Transfer the ribs to a clean baking sheet lined with fresh foil.','Brush BBQ sauce evenly over the top of the rack using a pastry brush.','Turn the oven to broil (high). Broil the ribs for 4 to 6 minutes, watching closely, until the BBQ sauce bubbles, caramelizes, and gets sticky with charred edges.','Let rest for 5 minutes, then cut between the bones into individual ribs with a sharp knife. Serve with extra BBQ sauce on the side.']),
        'For a smoky flavour without a smoker, add 1 tsp liquid smoke to the dry rub. Leftover ribs reheat well wrapped in foil at 300F for 15 minutes. To freeze: wrap cooked ribs tightly in foil and freeze for up to 2 months. Reheat from frozen at 300F for 30 minutes.'),
    zh('排骨','3 小时（实际操作 15 分钟）','4 份',
        '骨肉分离的软嫩排骨配焦糖外皮——低温慢烤保证每次都鲜嫩多汁，周末烹饪首选。',
        arr(['猪排骨（背排或圣路易斯式）1 整排约 900 至 1100 克','干料：烟熏辣椒粉 1 汤匙、红糖 1 汤匙、海盐 1 茶匙、黑胡椒 1 茶匙、蒜粉 1 茶匙、洋葱粉 1 茶匙、孜然粉 半茶匙','苹果醋 2 汤匙','烧烤酱 80 毫升，喜欢的品牌','清水 60 毫升（锡纸包用）','橄榄油或 cooking spray（烤架用）']),
        arr(['撕去排骨背面的薄筋膜：用黄油刀在骨头处插入膜下边缘，挑起，用厨房纸抓住（增加摩擦力），整片撕下。此步骤是排骨软嫩可食的关键。','两面用厨房纸吸干。','小碗混合所有干料：烟熏辣椒粉、红糖、盐、胡椒、蒜粉、洋葱粉和孜然。','均匀涂抹排骨两面，用手指按压附着。每一寸都要覆盖。','烤箱预热 300F（150C），烤盘铺加厚锡纸。','撕两张长加厚锡纸。一张放底，排骨肉面朝上放上面，将 60 毫升水和 2 汤匙苹果醋倒在锡纸底部排骨周围（不要浇在干料上）。','锡纸紧紧包住排骨，密封所有边缘。上面再加一层锡纸确保蒸汽不漏。','放在烤盘上烤 2 至 2.5 小时。叉子能轻松插入骨间肉中即熟。','取出小心打开锡纸（注意热蒸汽）。排骨移至铺新锡纸的烤盘上。','用糕饼刷将烧烤酱均匀刷在排骨上面。','烤箱转 broil（大火烤）。烤 4 至 6 分钟，注意观察，至烧烤酱冒泡、焦糖化、边缘微焦粘稠。','静置 5 分钟，用利刀在骨间切开成条。配额外烧烤酱上桌。']),
        '无烟熏炉可加 1 茶匙液体烟熏液到干料中。剩排骨锡纸包裹 300F 烤 15 分钟复热。冷冻：熟排骨紧包锡纸冷冻可存 2 个月。从冷冻 300F 烤 30 分钟。'))

# === CHICKEN BREAST (p11) ===
add('p11',
    en('Chicken Breast','25 min','1',
        'A lean protein staple that is versatile and meal-prep friendly — a properly cooked chicken breast is juicy, not dry, with a golden exterior and tender interior.',
        arr(['Chicken breast 6 to 8 oz (170 to 225 g), boneless, skinless, trimmed','Sea salt 1/2 tsp','Black pepper 1/4 tsp, freshly ground','Olive oil 1 tbsp','Garlic powder 1/4 tsp','Paprika 1/4 tsp (sweet or smoked)','Onion powder 1/4 tsp','Chicken broth or water 1 tbsp (for deglazing, optional)']),
        arr(['Place the chicken breast on a cutting board. If one end is much thicker than the other, place it between two sheets of plastic wrap and pound the thick end gently with a meat mallet or rolling pin until the breast is an even 3/4-inch thickness throughout. This ensures even cooking.','Pat the chicken completely dry with paper towels on both sides.','In a small bowl, mix together the salt, pepper, garlic powder, paprika, and onion powder.','Sprinkle the seasoning blend on both sides of the chicken, rubbing it in with your fingers to coat evenly.','Heat 1 tbsp olive oil in a skillet (cast iron or stainless steel works best) over medium-high heat until the oil shimmers.','Place the chicken in the pan and press down gently with a spatula for 3 seconds to ensure full contact. Do not move it.','Cook for 6 to 7 minutes on the first side without disturbing. The chicken should develop a golden-brown crust and release easily from the pan when ready to flip.','Flip the chicken and cook for 6 to 7 more minutes. Check the internal temperature with a meat thermometer inserted into the thickest part — it should read 165F (74C).','If the outside is browning too fast but the inside is not done, reduce heat to medium, add 1 tbsp broth or water, cover the pan with a lid, and steam for 2 to 3 minutes until the temperature is reached.','Transfer to a cutting board and let rest for 5 minutes before slicing — this lets the juices redistribute and keeps the meat moist.','Slice against the grain for the most tender texture.']),
        'Alternatively, bake at 375F (190C) for 20 to 25 minutes on a parchment-lined sheet. For meal prep, cook 3 to 4 breasts at once and store in containers for up to 4 days refrigerated. A meat thermometer is the single best investment for juicy chicken — visual cues are unreliable.'),
    zh('鸡胸肉','25 分钟','1 份',
        '精瘦蛋白主食，百搭且适合备餐——煎好的鸡胸肉多汁不柴，外金黄内软嫩。',
        arr(['去骨去皮鸡胸肉 170 至 225 克，修整','海盐 半茶匙','现磨黑胡椒 1/4 茶匙','橄榄油 1 汤匙','蒜粉 1/4 茶匙','辣椒粉 1/4 茶匙（甜味或烟熏）','洋葱粉 1/4 茶匙','鸡汤或水 1 汤匙（可选，deg laze 用）']),
        arr(['鸡胸肉放砧板。如一端明显更厚，夹在两张保鲜膜间，用肉锤或擀面杖轻敲厚端至整体均匀 2 厘米厚——确保受热均匀。','两面用厨房纸彻底吸干。','小碗混合盐、胡椒、蒜粉、辣椒粉和洋葱粉。','两面撒调味料，用手指搓匀附着。','平底锅（铸铁或不锈钢最佳）中大火加 1 汤匙橄榄油至微闪。','鸡胸入锅，用铲轻压 3 秒确保全面接触。不要移动。','不翻动煎 6 至 7 分钟。鸡胸应形成金黄焦壳且能轻松脱锅时才翻。','翻面再煎 6 至 7 分钟。在最厚处插入温度计——应读 165F（74C）。','如外皮焦太快但内部未熟，转小火，加 1 汤匙鸡汤或水，盖盖蒸 2 至 3 分钟至达标。','移至砧板静置 5 分钟后切片——让肉汁重新分布保持湿润。','逆纹切片口感最嫩。']),
        '也可 375F（190C）铺烘焙纸烤 20 至 25 分钟。备餐可一次煎 3 至 4 块，分装冷藏 4 天。温度计是多汁鸡胸的最佳投资——视觉判断不可靠。'))

# === CHICKEN THIGHS (p12) ===
add('p12',
    en('Chicken Thighs','25 min','1',
        'Juicy and flavourful with crispy skin — more forgiving than breast meat, chicken thighs stay moist even if slightly overcooked, making them ideal for beginners.',
        arr(['Chicken thighs 6 to 8 oz (170 to 225 g) each, bone-in, skin-on','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tsp (just to coat the pan)','Garlic clove 1, smashed','Fresh rosemary 1 sprig or thyme 2 sprigs (or 1/2 tsp dried Italian herbs)','Butter 1 tbsp (optional, for basting)','Lemon wedge 1 (optional, for serving)']),
        arr(['Remove the chicken thighs from the refrigerator 20 minutes before cooking and let them sit at room temperature.','Pat the thighs completely dry with paper towels on all sides, especially the skin — moisture on the skin prevents it from getting crispy.','Season both sides generously with salt and pepper, making sure to get seasoning under the skin as well: gently loosen the skin from the meat with your fingers and sprinkle salt directly on the flesh beneath.','Heat 1 tsp olive oil in a skillet (cast iron is ideal) over medium heat. Place the thighs skin-side down in the pan.','Cook for 8 to 10 minutes on the skin side, pressing down occasionally with a spatula to ensure even contact. The skin should become deeply golden brown and crispy. If the skin is browning too fast, reduce the heat slightly.','Flip the thighs. Add the smashed garlic clove, rosemary sprig, and butter to the pan.','Tilt the pan and spoon the foaming butter and aromatics over the thighs continuously for 1 to 2 minutes.','Continue cooking for 6 to 8 more minutes until the internal temperature in the thickest part (without touching the bone) reads 165F (74C) on a meat thermometer.','If the skin needs more crisping, place the pan under the broiler for 2 to 3 minutes, watching closely.','Transfer to a plate and rest for 3 minutes. Squeeze lemon over the top if desired and serve.']),
        'Starting with a cold or medium pan (not high heat) renders more fat from the skin gradually, producing crispier results. Boneless, skinless thighs cook in about 12 minutes total (6 minutes per side) over medium-high heat. Chicken thighs are very forgiving — they remain juicy even at 175F.'),
    zh('鸡腿肉','25 分钟','1 份',
        '多汁美味带脆皮——比鸡胸更不易过老，即使略微过熟也保持湿润，适合新手。',
        arr(['带骨带皮鸡腿肉 170 至 225 克','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 茶匙（仅润锅）','蒜 1 瓣，拍碎','新鲜迷迭香 1 枝或百里香 2 枝（或半茶匙干意式香草）','黄油 1 汤匙（可选，淋浇用）','柠檬角 1 个（可选，食用时挤汁）']),
        arr(['鸡腿提前 20 分钟从冰箱取出回温。','各面用厨房纸彻底吸干，尤其是鸡皮——皮上水分会阻碍酥脆。','两面大量撒盐和胡椒，也要在皮下调味：用手指轻掀鸡皮与肉分离，直接在皮下肉上撒盐。','平底锅（铸铁最佳）中火加 1 茶匙橄榄油。鸡腿皮朝下放入锅中。','皮面煎 8 至 10 分钟，偶尔用铲轻压确保均匀接触。鸡皮应变深金黄酥脆。如焦太快可略调小火。','翻面，加入拍碎的蒜、迷迭香和黄油。','倾斜锅身，持续用勺子将起泡黄油和香料淋浇鸡腿 1 至 2 分钟。','继续煎 6 至 8 分钟至最厚处（不触骨）温度计读 165F（74C）。','如皮需更脆，将锅放入烤箱 broil 2 至 3 分钟，注意观察。','装盘静置 3 分钟。按需挤柠檬汁食用。']),
        '冷锅或中火起步（非大火）可逐步逼出皮脂，更酥脆。去骨去皮鸡腿约 12 分钟可熟（每面 6 分钟）中大火。鸡腿非常宽容——即使 175F 仍多汁。'))

# === PAN-FRIED FIRM TOFU (p32) ===
add('p32',
    en('Pan-Fried Firm Tofu','15 min (plus 15 min pressing)','1',
        'A plant-based protein that crisps beautifully and absorbs sauces well — with the right technique, tofu develops a golden, crunchy exterior while staying tender inside.',
        arr(['Firm or extra-firm tofu 4 to 6 oz (110 to 170 g), drained from the package','Olive oil or neutral oil 1 tbsp','Soy sauce 1 tbsp','Cornstarch or arrowroot powder 1 tbsp (essential for crispy crust)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Garlic powder 1/4 tsp (optional)','Sesame oil 1/2 tsp (optional, for finishing flavour)']),
        arr(['Open the tofu package and drain the water. Wrap the block in a clean kitchen towel or paper towels.','Place the wrapped tofu on a plate and put a heavy object on top (a cast-iron skillet, a stack of books, or a pot filled with water). Press for 15 minutes (5 minutes minimum). This removes excess water and allows the tofu to absorb seasoning and crisp up.','Unwrap the tofu and cut it into 1/2-inch (1 cm) slabs or 3/4-inch cubes — thinner pieces get crispier, cubes hold their shape better in stir-fries.','Place the tofu pieces in a bowl. Sprinkle with cornstarch, salt, pepper, and garlic powder if using. Toss gently with your hands until each piece is evenly coated with a thin layer of cornstarch — this is the secret to the crispy crust.','Heat 1 tbsp oil in a non-stick skillet over medium-high heat until the oil shimmers.','Add the tofu pieces in a single layer with space between them. Do not crowd the pan — cook in two batches if needed.','Cook for 3 to 4 minutes on the first side without disturbing, until a deep golden crust forms. Use tongs or a spatula to flip each piece.','Cook for 3 to 4 minutes on each remaining side until all sides are golden and crispy (about 10 to 12 minutes total for cubes).','In the last 30 seconds, drizzle the soy sauce over the tofu and toss quickly to coat — it will sizzle and caramelize. Remove from heat immediately.','Drizzle sesame oil over the tofu if using, and toss gently. Serve immediately while crispy.']),
        'Pressing is the single most important step for crispy tofu — skip it and you get soggy results. Extra-firm tofu needs only 5 minutes of pressing. For even more flavour, marinate the pressed tofu in 2 tbsp soy sauce + 1 tsp rice vinegar for 10 minutes before coating with cornstarch. Great in stir-fries, grain bowls, and noodle dishes.'),
    zh('煎豆腐','15 分钟（另加压水 15 分钟）','1 份',
        '植物蛋白，煎后酥脆且容易吸收酱汁——用对方法，豆腐外酥内嫩。',
        arr(['硬或特硬豆腐 110 至 170 克，沥干包装水分','橄榄油或中性油 1 汤匙','酱油 1 汤匙','玉米淀粉或竹芋粉 1 汤匙（酥脆外壳关键）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','蒜粉 1/4 茶匙（可选）','麻油 半茶匙（可选，提香用）']),
        arr(['打开豆腐包装沥干水，用干净厨房巾或厨房纸包裹。','包好的豆腐放盘上，上面压重物（铸铁锅、书堆或装水的锅）。压 15 分钟（至少 5 分钟）。去除多余水分让豆腐吸味且变脆。','拆开豆腐切成 1 厘米厚片或 2 厘米块——薄片更脆，块状更适合炒菜保持形状。','豆腐放入碗中，撒玉米淀粉、盐、胡椒和蒜粉（如用），用手轻拌至每块均匀裹薄层淀粉——这是酥脆外壳的秘诀。','不粘中大火加 1 汤匙油至微闪。','豆腐块平铺入锅留间距。不要挤锅——需要分两批。','不翻动煎 3 至 4 分钟至深金黄焦壳。用夹子或铲逐块翻面。','各面煎 3 至 4 分钟至全部金黄酥脆（方块约共 10 至 12 分钟）。','最后 30 秒淋酱油快速翻裹——会嗞嗞作响并焦糖化。立即离火。','淋麻油（如用）轻拌。趁酥脆立即食用。']),
        '压水是酥脆豆腐最关键的步骤——跳过会变软塌。特硬豆腐只需压 5 分钟。更入味可压好后用 2 汤匙酱油加 1 茶匙米醋腌 10 分钟再裹淀粉。适合炒菜、饭碗和面食。'))

# === MARINATED TEMPEH (p34) ===
add('p34',
    en('Marinated Tempeh','20 min (plus 10 min marinating)','2',
        'Nutty, firm tempeh marinated in a savoury-sweet glaze — a probiotic-rich plant protein with satisfying bite that pan-fries into caramelized, flavourful strips.',
        arr(['Tempeh 8 oz (225 g), one standard package','Soy sauce or tamari 3 tbsp','Apple cider vinegar 1 tbsp','Maple syrup 1 tbsp','Garlic clove 1, minced','Smoked paprika 1/2 tsp','Fresh ginger 1/2 tsp grated (optional)','Olive oil 1 tbsp','Water 2 tbsp','Sesame oil 1/2 tsp (for finishing)']),
        arr(['Remove the tempeh from its package. Some tempeh has a bitter surface taste — to remove it, steam the tempeh in a steamer basket over boiling water for 10 minutes, then let cool. This also opens up the pores so it absorbs marinade better. (Skip this step if you are short on time.)','Cut the tempeh block into 1/4-inch (0.5 cm) slices — you can cut it into flat slabs for pan-frying, or into strips for wraps and bowls.','In a shallow dish or zip-top bag, whisk together the soy sauce, apple cider vinegar, maple syrup, minced garlic, smoked paprika, grated ginger, and 2 tbsp water until the maple syrup is dissolved.','Add the tempeh slices to the marinade in a single layer. Let them sit for at least 10 minutes at room temperature, turning once halfway through. For deeper flavour, marinate in the refrigerator for 4 to 8 hours or overnight.','Heat 1 tbsp olive oil in a skillet over medium heat.','Remove the tempeh slices from the marinade, letting excess drip off (reserve the remaining marinade in the dish).','Place the tempeh slices in the pan in a single layer. Cook for 3 to 4 minutes on the first side until golden brown and slightly crisp at the edges.','Flip each piece and cook for 3 to 4 more minutes on the other side.','Pour the reserved marinade into the pan. It will bubble and reduce quickly. Stir gently to coat each piece of tempeh with the thickening glaze.','Cook for 1 to 2 more minutes, stirring constantly, until the marinade has reduced to a sticky glaze that coats each piece.','Remove from heat. Drizzle sesame oil over the tempeh and toss gently. Serve immediately in bowls, wraps, salads, or alongside vegetables and rice.']),
        'Steaming tempeh before marinating is optional but highly recommended — it removes bitterness and doubles the marinade absorption. Tempeh freezes well: marinate raw slices, freeze in the marinade, then thaw and pan-fry for a quick meal. For a smoky version, add 1 tsp liquid smoke to the marinade.'),
    zh('腌制天贝','20 分钟（另加腌制 10 分钟）','2 份',
        '坚果味、紧实的天贝腌制于咸甜酱汁中——富含益生菌的植物蛋白，煎后焦糖化、风味浓郁。',
        arr(['天贝 225 克，一标准包','酱油或 tamari 3 汤匙','苹果醋 1 汤匙','枫糖浆 1 汤匙','蒜 1 瓣，切末','烟熏辣椒粉 半茶匙','鲜姜 半茶匙，磨泥（可选）','橄榄油 1 汤匙','清水 2 汤匙','麻油 半茶匙（提香用）']),
        arr(['拆开天贝包装。部分天贝表面有苦味——去除方法是蒸笼蒸 10 分钟后冷却。此步骤也打开孔隙更易吸味。（时间紧可跳过。）','天贝切成 0.5 厘米片——可切平片用于煎，或切条用于包和饭碗。','浅盘或密封袋中搅打酱油、苹果醋、枫糖浆、蒜末、烟熏辣椒粉、姜末和 2 汤匙水至枫糖溶解。','天贝片单层放入腌料中。室温至少腌 10 分钟，中途翻一次。更深入味可冷藏腌 4 至 8 小时或过夜。','平底锅中火加 1 汤匙橄榄油。','天贝片取出沥去多余腌料（保留盘中剩余腌料）。','天贝片单层放入锅中。煎 3 至 4 分钟至一面金黄、边缘微脆。','逐块翻面再煎 3 至 4 分钟。','将保留的腌料倒入锅中。会迅速冒泡收浓。轻拌使每块天贝裹上增稠的酱汁。','再煮 1 至 2 分钟不停翻拌至腌料收成粘稠酱汁裹住每块。','离火。淋麻油轻拌。立即用于饭碗、生菜包、沙拉或配蔬菜米饭。']),
        '腌制前蒸天贝是可选但强烈推荐的——去除苦味且使腌料吸收翻倍。天贝冷冻效果好：生片腌好连腌料冷冻，解冻后煎制即可。烟熏版可加 1 茶匙液体烟熏液到腌料中。'))

# === SEITAN STRIPS (p35) ===
add('p35',
    en('Seitan Strips','10 min','1 cup',
        'A chewy, meat-like plant protein — seitan absorbs flavours well and pan-fries into satisfying, caramelized strips that work in any dish calling for sliced meat.',
        arr(['Pre-made seitan 4 to 6 oz (110 to 170 g), store-bought or homemade','Olive oil 1 tbsp','Soy sauce 1 tbsp','Smoked paprika 1/4 tsp','Garlic powder 1/4 tsp','Onion powder 1/4 tsp','Black pepper 1/8 tsp','Vegetable broth or water 1 to 2 tbsp (if pan gets dry)']),
        arr(['Remove the seitan from its package and pat it dry with paper towels — removing surface moisture helps it brown better.','Slice the seitan into 1/4-inch (0.5 cm) strips. For stir-fries, cut shorter 2-inch strips; for sandwiches, cut longer 4-inch strips.','In a small bowl, mix together the smoked paprika, garlic powder, onion powder, and black pepper.','Sprinkle the seasoning blend over the seitan strips and toss with your hands until evenly coated.','Heat 1 tbsp olive oil in a skillet over medium-high heat until the oil shimmers.','Add the seitan strips in a single layer (cook in two batches if your pan is small). Do not stir immediately — let them sit for 1 minute to develop a crust.','Stir or toss every 1 to 2 minutes, cooking for a total of 4 to 5 minutes, until the strips are browned and slightly crispy on the edges.','If the pan gets dry or the seitan starts to stick, add 1 tbsp vegetable broth or water and stir to deglaze.','Drizzle the soy sauce over the seitan and toss quickly to coat — it will sizzle and caramelize in 30 seconds.','Remove from heat immediately. The seitan should be browned, slightly crispy, and coated with a savoury glaze. Use in stir-fries, wraps, bowls, sandwiches, or salads.']),
        'Seitan is very high in protein — about 25 g per 4 oz serving, comparable to chicken. If it seems dry, add a splash of broth while cooking. For deeper flavour, marinate the strips in 2 tbsp soy sauce + 1 tsp maple syrup for 10 minutes before cooking. Store-bought seitan varies in texture — the vacuum-packed strips work best for pan-frying.'),
    zh('面筋条','10 分钟','1 杯',
        '有嚼劲、类似肉质的植物蛋白——面筋吸味好，煎后焦糖化、口感满足，可用于任何需要肉片的菜肴。',
        arr(['预制面筋 110 至 170 克，市售或自制','橄榄油 1 汤匙','酱油 1 汤匙','烟熏辣椒粉 1/4 茶匙','蒜粉 1/4 茶匙','洋葱粉 1/4 茶匙','黑胡椒 1/8 茶匙','蔬菜高汤或水 1 至 2 汤匙（如锅干用）']),
        arr(['面筋拆包后用厨房纸吸干——去除表面水分有助于上色。','面筋切 0.5 厘米条。炒菜用切 5 厘米短条；三明治用切 10 厘米长条。','小碗混合烟熏辣椒粉、蒜粉、洋葱粉和黑胡椒。','调味料撒在面筋条上，用手搓匀附着。','平底锅中大火加 1 汤匙橄榄油至微闪。','面筋条单层入锅（锅小可分两批）。不要立即翻——静置 1 分钟形成焦壳。','每 1 至 2 分钟翻拌一次，共煎 4 至 5 分钟至条面焦黄、边缘微脆。','如锅干或粘锅，加 1 汤匙蔬菜高汤或水搅动 deg laze。','淋酱油快速翻裹——30 秒内嗞嗞焦糖化。','立即离火。面筋应焦黄微脆，裹着咸鲜酱汁。用于炒菜、包、饭碗、三明治或沙拉。']),
        '面筋蛋白含量很高——每 110 克约 25 克，与鸡肉相当。偏干可加少许高汤。更深入味可用 2 汤匙酱油加 1 茶匙枫糖腌 10 分钟再煎。市售面筋口感不一——真空包装条状最适合煎。'))

# === ROASTED BRUSSELS SPROUTS (v12) ===
add('v12',
    en('Roasted Brussels Sprouts','30 min','4',
        'Caramelized and crispy on the outside, tender inside — roasting transforms Brussels sprouts into an irresistible side dish that even skeptics enjoy.',
        arr(['Brussels sprouts 1 lb (450 g), about 20 to 25 medium sprouts','Olive oil 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Garlic powder 1/2 tsp','Balsamic vinegar 1 tbsp (optional, for finishing)','Honey or maple syrup 1 tsp (optional, for caramelization)','(Optional add-ins) bacon strips 2, chopped and cooked, or grated Parmesan 2 tbsp']),
        arr(['Preheat the oven to 400F (200C). Line a large baking sheet with parchment paper.','Rinse the Brussels sprouts under cold water. Pat them dry thoroughly with a clean towel — wet sprouts will steam instead of roast.','Trim about 1/4 inch off the root end of each sprout with a paring knife. Remove and discard any yellow, wilted, or bruised outer leaves.','Cut each sprout in half lengthwise (top to bottom). For very large sprouts (over 1.5 inches), quarter them. Leave small sprouts whole.','Place the halved sprouts in a large bowl. Add 2 tbsp olive oil, 1/2 tsp salt, 1/4 tsp pepper, and 1/2 tsp garlic powder. Toss with your hands until every sprout is evenly coated — the oil should glisten on all surfaces.','Spread the sprouts cut-side down on the baking sheet in a single layer. This is important: the flat cut side makes direct contact with the hot pan, creating the best caramelization. Leave space between sprouts — overcrowding causes steaming instead of roasting.','Roast for 12 minutes. Remove the pan and use a spatula to flip each sprout so the other cut side faces down.','Return to the oven and roast for 10 to 12 more minutes until the outer leaves are dark brown and crispy and the sprouts are tender when pierced with a fork.','If using honey or maple syrup: drizzle 1 tsp over the hot sprouts and toss immediately to coat. The heat will caramelize the sugar.','If using balsamic vinegar: drizzle 1 tbsp over the sprouts right after removing from the oven and toss to coat.','Optional: sprinkle with cooked bacon bits or grated Parmesan before serving.','Taste and add more salt if needed. Serve immediately while hot and crispy.']),
        'Do not overcrowd the pan — use two baking sheets if needed. Sprouts that are packed too tightly steam instead of roast and become soft instead of crispy. For extra flavour, toss the sprouts with 2 chopped bacon strips before roasting — the bacon fat flavours the sprouts as they cook.'),
    zh('烤球芽甘蓝','30 分钟','4 份',
        '外焦内嫩的球芽甘蓝——烤制后变成令人无法抗拒的配菜，连不喜欢的人也会喜欢。',
        arr(['球芽甘蓝 450 克，约 20 至 25 个中型','橄榄油 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','蒜粉 半茶匙','香醋 1 汤匙（可选，提味用）','蜂蜜或枫糖浆 1 茶匙（可选，增焦糖化）','（可选加料）培根 2 条，切碎炒熟，或帕玛森芝士 2 汤匙，擦丝']),
        arr(['烤箱预热 400F（200C）。大烤盘铺烘焙纸。','球芽甘蓝冷水冲洗，用干净毛巾彻底吸干——湿的会蒸而非烤。','用小刀切去根部约 0.5 厘米。剥去丢弃发黄、萎蔫或受损的外叶。','每个纵切对半（从头到底）。超大的（超 4 厘米）切四瓣。小的可整颗留。','切好的球芽甘蓝放大碗中，加 2 汤匙橄榄油、半茶匙盐、1/4 茶匙胡椒和半茶匙蒜粉，用手翻拌至每个均匀裹油——各面应油亮。','切面朝下平铺烤盘单层。这很重要：平面切面直接接触热锅，产生最佳焦糖化。留间距——拥挤会蒸而非烤。','烤 12 分钟。取出用铲翻面使另一切面朝下。','放回烤箱再烤 10 至 12 分钟至外叶深棕酥脆、叉可轻松刺入。','如用蜂蜜或枫糖浆：在热球芽甘蓝上淋 1 茶匙立即翻裹——热量会焦糖化糖分。','如用香醋：出炉后立即淋 1 汤匙翻裹。','可选：上桌前撒炒熟培根碎或帕玛森丝。','试味按需补盐。趁热酥脆时立即食用。']),
        '不要挤满烤盘——需要两张烤盘就分批。太挤会蒸而非烤，变软不脆。增味可在烤前拌入 2 条切碎培根——培根油在烤制过程中调味球芽甘蓝。'))

# === ROASTED BEETS (v15) — USER REQUESTED: peel, cut, toss in oil, then roast ===
add('v15',
    en('Roasted Beets','35 min','4',
        'Earthy, sweet beets with concentrated flavour — roasting intensifies their natural sugars. Peeled and cubed before roasting for faster cooking and caramelized edges.',
        arr(['Beets 4 medium (about 1.5 lb / 680 g) — red, golden, or mixed','Olive oil 1 to 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) balsamic vinegar 1 tbsp, for finishing','(Optional) fresh goat cheese or feta 2 tbsp, crumbled','(Optional) fresh thyme leaves 1 tsp']),
        arr(['Preheat the oven to 400F (200C). Line a baking sheet with parchment paper.','Trim off the top and bottom of each beet with a knife — remove about 1/4 inch from each end. Discard the stems and root tail.','Peel the beets with a vegetable peeler, removing all the outer skin. (Wear disposable gloves if using red beets to avoid staining your hands.)','Cut each peeled beet into 3/4-inch (2 cm) cubes. Try to keep the pieces roughly the same size so they cook evenly.','Place the beet cubes in a bowl. Add 1 to 2 tbsp olive oil, 1/2 tsp salt, and 1/4 tsp pepper. Toss with your hands or a spoon until every cube is evenly coated with oil.','Spread the cubes in a single layer on the parchment-lined baking sheet, leaving space between pieces. Do not overcrowd — use two sheets if needed.','Roast for 25 to 30 minutes, stirring once halfway through (at the 15-minute mark) so all sides caramelize evenly. The beets are done when they are tender when pierced with a fork and have slightly caramelized, darkened edges.','Remove from the oven. If using balsamic vinegar, drizzle 1 tbsp over the hot beets and toss to coat — the acidity balances the sweetness.','If using goat cheese or feta, sprinkle 2 tbsp crumbled cheese over the warm beets just before serving. Sprinkle with fresh thyme leaves if using.','Serve warm or at room temperature.']),
        'Peeling and cubing beets before roasting (rather than wrapping whole in foil) cuts the cooking time in half and creates caramelized, crispy edges. Golden beets are milder and will not stain your hands. Beets pair beautifully with goat cheese, walnuts, and balsamic.'),
    zh('烤甜菜根','35 分钟','4 份',
        '泥土味、甜味浓缩的甜菜根——烤制增强天然糖分。先去皮切块再烤，更快且边缘焦糖化。',
        arr(['甜菜根 4 个中型（约 680 克）——红色、金色或混合','橄榄油 1 至 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','（可选）香醋 1 汤匙，提味用','（可选）新鲜山羊奶酪或羊奶酪 2 汤匙，碎','（可选）新鲜百里香叶 1 茶匙']),
        arr(['烤箱预热 400F（200C）。烤盘铺烘焙纸。','用刀切去每个甜菜根的顶部和底部各约 0.5 厘米。丢弃茎和根尾。','用削皮器削去所有外皮。（用红甜菜根可戴一次性手套防染色。）','每个去皮甜菜根切成 2 厘米方块。尽量大小均匀以便受热均匀。','甜菜根块放入碗中，加 1 至 2 汤匙橄榄油、半茶匙盐和 1/4 茶匙胡椒，用手或勺翻拌至每块均匀裹油。','单层铺在烘焙纸上，留间距。不要拥挤——需要两张烤盘就分批。','烤 25 至 30 分钟，中途（15 分钟时）翻一次使各面均匀焦糖化。叉可轻松刺入且边缘微焦深色即熟。','出炉。如用香醋，淋 1 汤匙在热甜菜根上翻裹——酸味平衡甜味。','如用山羊奶酪或羊奶酪，上桌前撒 2 汤匙碎奶酪在温甜菜根上。撒百里香叶（如用）。','温食或室温食用。']),
        '先去皮切块再烤（而非整颗包锡纸）可将烹饪时间减半，且产生焦糖化酥脆边缘。金甜菜根更温和且不染手。甜菜根与山羊奶酪、核桃和香醋绝配。'))

# === COLESLAW (v28) ===
add('v28',
    en('Coleslaw','10 min','4',
        'A crisp, creamy cabbage salad — a refreshing side that pairs with everything from burgers to fish. The key is finely shredded cabbage and a balanced sweet-tangy dressing.',
        arr(['Green cabbage 4 cups (about 1/2 medium head), finely shredded','Carrot 1 large, peeled and grated on the large holes of a box grater','Mayonnaise 3 tbsp (or 2 tbsp mayo + 1 tbsp Greek yogurt for lighter)','Apple cider vinegar 1 tbsp','Honey or granulated sugar 1 tsp','Celery seed 1/4 tsp (optional, adds classic deli flavour)','Dijon mustard 1/2 tsp (optional, adds depth)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) red cabbage 1 cup, shredded, for colour']),
        arr(['Shred the cabbage: remove any loose outer leaves, cut the head into quarters through the core, and cut out the tough core from each quarter. Slice each quarter as thinly as possible across the grain using a sharp knife or a mandoline. Aim for pieces 1/16 to 1/8 inch wide.','Grate the carrot on the large holes of a box grater. You should get about 1 cup of grated carrot.','In a small bowl or measuring cup, whisk together the mayonnaise, apple cider vinegar, honey, celery seed, Dijon mustard, salt, and pepper until smooth and well combined. Taste the dressing — it should be creamy, tangy, and slightly sweet. Adjust vinegar for more tang or honey for more sweetness.','In a large bowl, combine the shredded green cabbage (and red cabbage if using) and grated carrot. Toss with your hands to mix.','Pour the dressing over the cabbage mixture. Use tongs or two large spoons to toss everything together thoroughly, lifting from the bottom to ensure every strand is coated.','Let the coleslaw sit at room temperature for 10 minutes, or refrigerate for 20 to 30 minutes before serving. The cabbage will soften slightly and the flavours will meld and improve.','Taste again before serving and adjust salt and pepper if needed. The vinegar continues to tenderize the cabbage over time.']),
        'For a lighter version, substitute half the mayo with plain Greek yogurt. Red cabbage adds beautiful colour. The slaw keeps for up to 2 days refrigerated but is best within the first 24 hours — after that the cabbage loses its crunch. Do not dress the slaw until close to serving time for maximum crispness.'),
    zh('凉拌卷心菜','10 分钟','4 份',
        '爽脆奶滑的卷心菜沙拉——百搭配菜，从汉堡到鱼都合适。关键是细切卷心菜和平衡的酸甜酱汁。',
        arr(['绿卷心菜 4 杯（约半个中型），细切','胡萝卜 1 大根，去皮用粗孔刨丝器刨丝','蛋黄酱 3 汤匙（或 2 汤匙蛋黄酱加 1 汤匙希腊酸奶更轻）','苹果醋 1 汤匙','蜂蜜或白砂糖 1 茶匙','芹菜籽 1/4 茶匙（可选，增添经典熟食风味）','第戎芥末 半茶匙（可选，增层次）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）紫甘蓝 1 杯，切丝，增色']),
        arr(['切卷心菜：剥去外层松散叶，从中心切四瓣，切去每瓣的硬芯。用利刀或 mandoline 尽可能逆纹薄切，目标 1 至 2 毫米宽。','胡萝卜用粗孔刨丝器刨丝，约 1 杯。','小碗或量杯中搅打蛋黄酱、苹果醋、蜂蜜、芹菜籽、第戎芥末、盐和胡椒至顺滑均匀。试味——应奶滑、微酸、略甜。醋多更酸，蜂蜜多更甜。','大碗中混合卷心菜丝（和紫甘蓝如用）和胡萝卜丝，用手拌匀。','淋酱汁在卷心菜上，用夹子或两把大勺彻底翻拌，从底部翻起确保每根都裹酱。','室温静置 10 分钟，或冷藏 20 至 30 分钟后食用。卷心菜会略微软化，风味融合更佳。','上桌前再试味，按需调盐和胡椒。醋会持续软化卷心菜。']),
        '更轻可用一半希腊酸奶替代蛋黄酱。紫甘蓝增色。冷藏可存 2 天但前 24 小时最佳——之后卷心菜失去脆度。接近食用时才拌酱以保持最脆。'))

# === GREEK SALAD (v30) ===
add('v30',
    en('Greek Salad','15 min','4',
        'A Mediterranean classic loaded with vegetables, healthy fats and protein — no lettuce, just bold flavours from ripe tomatoes, briny olives, and creamy feta.',
        arr(['Roma or vine-ripe tomatoes 2, cut into 1-inch wedges','English cucumber 1, cut into 3/4-inch half-moons','Red onion 1/4, very thinly sliced','Green bell pepper 1/2, cut into thin rings','Kalamata olives 1/4 cup (about 12 olives, 40 g), pitted','Feta cheese 4 oz (110 g), cut into 1/2-inch cubes (or one solid block to crumble on top)','Olive oil 2 tbsp, extra-virgin','Red wine vinegar 1 tbsp','Dried oregano 1/2 tsp (plus extra for sprinkling)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) cucumber peeling: peel in stripes for a decorative look']),
        arr(['Prepare the tomatoes: cut each tomato into 6 to 8 wedges. Remove the tough core from each wedge if present. Place in a large serving bowl.','Cut the cucumber: if using a regular cucumber, peel it and scrape out the seeds with a spoon. For English cucumber, leave the skin on. Cut into 3/4-inch thick half-moons. Add to the bowl.','Slice the red onion as thinly as possible — aim for translucent pieces. Add to the bowl. (If the onion is very sharp, soak the slices in cold water for 5 minutes, then drain.)','Cut the green bell pepper into thin rings about 1/4 inch wide. Add to the bowl.','Add the Kalamata olives to the bowl.','Cut the feta into 1/2-inch cubes (or keep it as one block to crumble on top for a more rustic presentation). Set aside.','Make the dressing: in a small jar or bowl, combine 2 tbsp olive oil, 1 tbsp red wine vinegar, 1/2 tsp dried oregano, 1/4 tsp salt, and 1/8 tsp pepper. Shake the jar vigorously or whisk until the dressing is emulsified and slightly thickened.','Pour the dressing over the vegetables in the bowl. Toss gently with your hands or large spoons to coat everything evenly — be careful not to crush the tomatoes.','Add the feta cubes on top (or crumble the block over the salad). Do not toss after adding the feta — it should stay in visible chunks on top.','Sprinkle an extra pinch of dried oregano over the feta for garnish and flavour.','Let the salad sit for 5 minutes before serving so the flavours meld. The tomatoes release their juice and mix with the dressing to create a delicious pool at the bottom of the bowl — soak it up with crusty bread.']),
        'Traditional Greek salad (horiatiki) does not include lettuce. For a heartier version, add 1 cup rinsed and drained chickpeas or 4 oz grilled chicken strips. Use the best tomatoes you can find — this salad lives or dies by tomato quality. In winter, use cherry tomatoes which have more flavour.'),
    zh('希腊沙拉','15 分钟','4 份',
        '地中海经典，富含蔬菜、健康脂肪和蛋白质——不加生菜，只有成熟番茄、咸鲜橄榄和奶滑羊奶酪的浓烈风味。',
        arr(['罗马或藤熟番茄 2 个，切 2.5 厘米角','英式黄瓜 1 根，切 2 厘米半月片','红洋葱 1/4 个，极薄切','青椒 半个，切薄圈','卡拉马塔橄榄 40 克（约 12 颗），去核','羊奶酪 110 克，切 1 厘米丁（或整块掰碎铺面）','特级初榨橄榄油 2 汤匙','红酒醋 1 汤匙','干牛至 半茶匙（另撒装饰用）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙']),
        arr(['处理番茄：每个切 6 至 8 角。如有硬芯则去除。放大碗中。','切黄瓜：普通黄瓜需去皮并挖籽。英式黄瓜留皮。切 2 厘米半月片放入碗中。','红洋葱尽可能薄切——目标半透明。放入碗中。（如太辛辣，冷水泡 5 分钟后沥干。）','青椒切 0.5 厘米薄圈放入碗中。','加入卡拉马塔橄榄。','羊奶酪切 1 厘米丁（或整块掰碎铺面，更 rustic）。备用。','做酱汁：小瓶或碗中混合 2 汤匙橄榄油、1 汤匙红酒醋、半茶匙干牛至、1/4 茶匙盐和 1/8 茶匙胡椒。用力摇瓶或搅打至乳化微稠。','淋酱汁在蔬菜上，用手或大勺轻拌至均匀裹酱——小心不要压碎番茄。','羊奶酪丁铺在上面（或掰碎整块撒面）。加奶酪后不要再拌——应保持可见块状在面上。','额外撒一撮干牛至在羊奶酪上增色增味。','静置 5 分钟后食用让风味融合。番茄会出汁与酱汁混合，碗底形成美味汤汁——用脆面包蘸食。']),
        '传统希腊沙拉（horiatiki）不加生菜。更饱腹可加 1 杯冲洗沥干的鹰嘴豆或 110 克烤鸡条。用最好的番茄——这道沙拉成败取决于番茄品质。冬天可用樱桃番茄，风味更浓。'))

# === PESTO (f20) ===
add('f20',
    en('Pesto','10 min','4 (makes about 1 cup)','A vibrant, herbaceous Italian sauce — fresh basil blended with pine nuts, garlic and Parmesan for a burst of flavour on pasta, vegetables, or as a sandwich spread.',
        arr(['Fresh basil leaves 2 cups (packed tight, about 1 large bunch or 2 oz / 60 g)','Pine nuts 1/3 cup (50 g) — or walnuts, sunflower seeds, or almonds','Garlic clove 1, peeled (or 2 small cloves)','Parmesan cheese 1/2 cup (40 g), freshly grated (or Pecorino Romano)','Extra-virgin olive oil 1/2 cup (120 ml)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon juice 1 tsp (optional, brightens the colour and flavour)','(Optional) ice cubes 1 to 2, for blanching basil']),
        arr(['Toast the pine nuts: place them in a dry skillet over medium heat. Shake the pan constantly for 2 to 3 minutes until they are golden brown and fragrant. Watch them closely — pine nuts go from toasted to burnt in 30 seconds. Remove immediately to a plate to stop cooking.','Optional basil blanching for brighter green: bring a small pot of water to a boil. Drop the basil leaves in for 5 seconds, then immediately transfer to a bowl of ice water. Drain and squeeze dry. This step preserves the vibrant green colour but is not essential.','Combine the toasted pine nuts, garlic clove, and a pinch of salt in a food processor. Pulse 4 to 5 times until finely chopped.','Add the basil leaves (blanched or fresh). Pulse 8 to 10 times until the basil is finely chopped and the mixture looks like a coarse green paste.','With the food processor running continuously, slowly pour the olive oil through the feed tube in a thin stream. Process for 30 to 45 seconds until the mixture becomes smooth and creamy.','Stop the processor. Add the grated Parmesan cheese, lemon juice, 1/4 tsp salt, and 1/8 tsp pepper. Pulse 3 to 4 times until just combined — do not over-process or the cheese will become gummy.','Taste and adjust: more salt if needed, more lemon juice for brightness, more olive oil if the pesto is too thick.','Transfer the pesto to a clean jar or container. Smooth the top and pour a thin layer of olive oil (about 1 tbsp) over the surface to create a seal that prevents oxidation and browning.','Cover tightly and refrigerate for up to 5 days, or freeze for up to 3 months (freeze in ice cube trays for single-serving portions).']),
        'Pesto darkens when exposed to air — the olive oil layer on top is the best way to preserve the green colour. For a nut-free version, use sunflower seeds. For a dairy-free version, omit the Parmesan and add 1 tbsp nutritional yeast + 1/4 tsp extra salt. Never heat pesto on the stove — stir it into hot pasta off the heat to preserve the fresh basil flavour.'),
    zh('青酱','10 分钟','4 份（约 1 杯）',
        '鲜艳香浓的意式酱——新鲜罗勒与松子、蒜、帕玛森打碎，淋在意面、蔬菜上或作三明治抹酱皆宜。',
        arr(['新鲜罗勒叶 2 杯（压紧，约 1 大把或 60 克）','松子 1/3 杯（50 克）——或核桃、葵花籽、杏仁','蒜 1 瓣，去皮（或 2 小瓣）','帕玛森芝士 半杯（40 克），现擦丝（或佩科里诺罗马诺）','特级初榨橄榄油 半杯（120 毫升）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬汁 1 茶匙（可选，提亮色泽和风味）','（可选）冰块 1 至 2 个，焯罗勒用']),
        arr(['烘松子：干锅中火放入松子，不断晃锅 2 至 3 分钟至金黄出香。注意观察——松子从烘好到焦只需 30 秒。立即倒至盘中停止加热。','可选焯罗勒保绿：小锅水煮沸，放入罗勒叶 5 秒，立即捞出放入冰水。沥干挤干。此步骤保持鲜绿色但非必需。','食物处理器中放入烘好的松子、蒜瓣和少许盐。脉冲 4 至 5 次至细碎。','加入罗勒叶（焯过或新鲜的）。脉冲 8 至 10 次至罗勒细碎，混合物成粗粒绿色酱。','开机连续运转中，从进料口细流慢慢倒入橄榄油。处理 30 至 45 秒至顺滑细腻。','停机。加入擦丝帕玛森、柠檬汁、1/4 茶匙盐和 1/8 茶匙胡椒。脉冲 3 至 4 次至刚好混合——不要过度处理否则芝士变粘。','试味调整：按需加盐、柠檬汁增亮、橄榄油调稀。','青酱装入干净瓶中，抹平表面，倒一薄层橄榄油（约 1 汤匙）封住表面防止氧化变色。','盖紧密封冷藏 5 天，或冷冻 3 个月（冰格冷冻可分单份）。']),
        '青酱遇空气变暗——表面封橄榄油是保绿的最佳方法。无坚果版用葵花籽。无乳版省去帕玛森加 1 汤匙营养酵母和 1/4 茶匙额外盐。绝不在炉上加热青酱——离火后拌入热意面以保新鲜罗勒风味。'))

# === TZATZIKI (f22) ===
add('f22',
    en('Tzatziki','10 min (plus 30 min chilling)','4',
        'A refreshing Greek yogurt and cucumber dip — cool, garlicky and tangy, perfect with grilled meats, falafel, or as a vegetable dip. The secret is removing every drop of water from the cucumber.',
        arr(['Greek yogurt 1 cup (240 ml), full-fat for best texture (at least 5% milk fat)','English cucumber 1/2 (about 4 oz / 110 g) — or 1 regular cucumber, peeled and seeded','Garlic clove 1, minced to a paste (or 2 cloves for extra garlic lovers)','Lemon juice 1 tbsp (about half a lemon)','Fresh dill 1 tbsp, finely chopped (or fresh mint 1 tbsp)','Extra-virgin olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) white wine vinegar 1 tsp (traditional, instead of lemon)']),
        arr(['Grate the cucumber: use the large holes of a box grater. Grate the cucumber down to the seeds (if using a regular cucumber, peel it first and grate only the flesh, discarding the seedy core). You should get about 1 cup of grated cucumber.','Remove the water — this is the most important step: place the grated cucumber in the center of a clean kitchen towel or double layer of cheesecloth. Gather the edges and twist the top closed. Squeeze firmly over the sink for 10 to 15 seconds, twisting tighter as you go. Keep squeezing until no more liquid comes out. You should be left with about 1/3 cup of relatively dry cucumber shreds.','Make the garlic paste: mince the garlic clove finely on a cutting board. Sprinkle a pinch of salt over it. Using the flat side of your chef knife, drag it across the minced garlic at an angle, pressing down, 5 to 6 times. The garlic will break down into a smooth paste. (Alternatively, use a garlic press.)','In a medium bowl, combine the Greek yogurt, squeezed cucumber shreds, garlic paste, lemon juice, chopped dill, olive oil, salt, and pepper.','Stir with a spoon or whisk until completely smooth and all ingredients are evenly distributed. The dip should be thick and creamy.','Taste and adjust: add more salt if bland, more lemon juice for tanginess, or more garlic if you want it bolder. Remember that the garlic flavour intensifies as it sits.','Cover the bowl with plastic wrap and refrigerate for at least 30 minutes before serving — this lets the flavours meld and the garlic mellow. For best results, make it 2 to 4 hours ahead.','Transfer to a serving bowl. Drizzle a small amount of olive oil on top and sprinkle with a few sprigs of dill for garnish. Serve with pita bread, grilled chicken, lamb, falafel, or raw vegetable sticks.']),
        'Removing the cucumber water is the single most important step — skip it and your tzatziki will be runny within hours. English cucumbers are preferred because they have fewer seeds and less water. Full-fat Greek yogurt is essential — low-fat versions are too thin and lack the creamy mouthfeel. Keeps 3 to 4 days refrigerated.'),
    zh('酸奶黄瓜酱','10 分钟（另加冷藏 30 分钟）','4 份',
        '清爽的希腊酸奶黄瓜蘸酱——冰凉、蒜香、微酸，搭配烤肉、法拉费或蔬菜条极佳。秘诀是去除黄瓜的每一滴水。',
        arr(['希腊酸奶 1 杯（240 毫升），全脂口感最佳（至少 5% 脂肪）','英式黄瓜 半根（约 110 克）——或 1 根普通黄瓜，去皮去籽','蒜 1 瓣，磨成泥（蒜控可 2 瓣）','柠檬汁 1 汤匙（约半个柠檬）','新鲜莳萝 1 汤匙，切碎（或新鲜薄荷 1 汤匙）','特级初榨橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）白酒醋 1 茶匙（传统做法，替代柠檬）']),
        arr(['刨黄瓜：用粗孔刨丝器。刨到籽为止（普通黄瓜先去皮，只刨果肉，弃带籽核心）。约得 1 杯碎黄瓜。','去除水分——最重要的步骤：将碎黄瓜放在干净厨房巾或双层纱布中央。收拢边缘拧紧。在水池上方用力挤压 10 至 15 秒，越拧越紧。持续挤压直到不再有液体流出。应剩约 1/3 杯相对干燥的黄瓜丝。','做蒜泥：砧板上将蒜切细末。撒少许盐。用厨师刀面以角度压住蒜末拖刮 5 至 6 次。蒜会分解成顺滑的泥。（或用蒜压器。）','中碗中混合希腊酸奶、挤干的黄瓜丝、蒜泥、柠檬汁、切碎的莳萝、橄榄油、盐和胡椒。','用勺或打蛋器搅拌至完全顺滑、所有成分均匀分布。酱应浓稠奶滑。','试味调整：淡加盐，酸加柠檬汁，更浓加蒜。记住蒜味会随时间增强。','盖保鲜膜冷藏至少 30 分钟——让风味融合、蒜味缓和。最佳提前 2 至 4 小时做。','盛入碗中。表面淋少许橄榄油，撒几枝莳萝装饰。配皮塔饼、烤鸡、羊肉、法拉费或生蔬菜条食用。']),
        '去除黄瓜水分是最关键的步骤——跳过几小时内就变稀。英式黄瓜首选因为籽少水少。全脂希腊酸奶是必须的——低脂版太稀缺乏奶滑口感。冷藏可存 3 至 4 天。'))

# === RANCH DIP (f24) — USER REQUESTED: simpler, easier-to-find ingredients ===
add('f24',
    en('Ranch Dip','5 min','4',
        'A creamy, herbaceous dip — all the classic ranch flavour using simple pantry ingredients. No packaged seasoning mix needed.',
        arr(['Greek yogurt 1/2 cup (120 ml), full-fat','Mayonnaise 2 tbsp (use real mayo, not low-fat)','Garlic powder 1/2 tsp','Onion powder 1/2 tsp','Dried dill 1 tsp (or 1 tbsp fresh dill, finely chopped)','Dried parsley 1/2 tsp (or 1 tbsp fresh parsley, finely chopped)','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Apple cider vinegar or lemon juice 1 tsp']),
        arr(['In a small bowl, combine the Greek yogurt and mayonnaise. Whisk with a fork or small whisk until completely smooth with no lumps.','Add the garlic powder, onion powder, dried dill, dried parsley, salt, pepper, and apple cider vinegar.','Stir thoroughly until all the seasonings are evenly incorporated. The mixture should be creamy and uniform in colour.','Taste the dip. Adjust as needed: more salt if bland, more vinegar or lemon juice for tanginess, more garlic powder for a stronger garlic flavour.','Cover and refrigerate for at least 10 minutes before serving. This allows the dried herbs to rehydrate and the flavours to develop — the dip tastes noticeably better after resting.','If the dip is too thick, thin it with 1 tsp milk or water. If too thin, add 1 more tsp of mayonnaise.','Serve with raw vegetables (carrot sticks, celery, cucumber, bell pepper), with wings, on baked potatoes, or as a sandwich spread.']),
        'Using mostly Greek yogurt with just 2 tbsp of mayonnaise gives the classic ranch flavour with much less fat. If you have fresh dill and parsley, use 3 times the amount of dried. The dip keeps for 5 days refrigerated and actually improves after the first day as the herbs rehydrate fully.'),
    zh('牧场蘸酱','5 分钟','4 份',
        '奶滑香草蘸酱——用简单的厨房常备料做出经典牧场风味，无需市售调味包。',
        arr(['希腊酸奶 半杯（120 毫升），全脂','蛋黄酱 2 汤匙（用真蛋黄酱，非低脂）','蒜粉 半茶匙','洋葱粉 半茶匙','干莳萝 1 茶匙（或鲜莳萝 1 汤匙，切碎）','干欧芹 半茶匙（或鲜欧芹 1 汤匙，切碎）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','苹果醋或柠檬汁 1 茶匙']),
        arr(['小碗中混合希腊酸奶和蛋黄酱。用叉或小打蛋器搅至完全顺滑无块。','加蒜粉、洋葱粉、干莳萝、干欧芹、盐、胡椒和苹果醋。','充分搅拌至所有调味料均匀混合。酱应奶滑且颜色一致。','试味调整：淡加盐，酸加醋或柠檬汁，蒜味更浓加蒜粉。','盖盖冷藏至少 10 分钟。让干香草吸水复原、风味发展——静置后明显更好吃。','如太稠加 1 茶匙牛奶或水调稀。太稀加 1 茶匙蛋黄酱。','配生蔬菜（胡萝卜条、芹菜、黄瓜、青椒）、鸡翅、烤土豆或作三明治抹酱。']),
        '以希腊酸奶为主加 2 汤匙蛋黄酱，经典牧场风味但脂肪大减。鲜莳萝和欧芹用量是干的三倍。蘸酱冷藏 5 天，第二天干香草完全吸水后更好。'))

# === SALSA (v37) ===
add('v37',
    en('Salsa','10 min','4 (makes about 2 cups)','A fresh, zesty tomato salsa — far better than store-bought and ready in minutes. The key is ripe tomatoes and a balance of acid, heat, and salt.',
        arr(['Roma tomatoes 4 (about 1 lb / 450 g) — or any ripe, firm tomato','Red onion 1/4 cup (40 g), finely diced','Jalapeno pepper 1, seeded and minced (leave seeds in for more heat)','Fresh cilantro 2 tbsp, finely chopped','Lime juice 2 tbsp (about 1 lime)','Garlic clove 1, minced','Sea salt 1/2 tsp (adjust to taste)','(Optional) 1/2 tsp ground cumin for depth']),
        arr(['Prepare the tomatoes: bring a small pot of water to a boil. Cut a shallow X on the bottom of each tomato. Drop them into the boiling water for 30 seconds, then immediately transfer to a bowl of ice water. The skins will peel off easily. Peel all four tomatoes. (Skip this step if you do not mind the skins — they add nutrition but a slightly tougher texture.)','Dice the tomatoes: cut each peeled tomato in half horizontally. Gently squeeze out the seeds and discard them. Cut the flesh into 1/4-inch (0.5 cm) dice. You should get about 2 cups of diced tomato. Place in a medium bowl.','Dice the red onion as finely as possible — aim for 1/8-inch pieces. Add to the bowl.','Mince the jalapeno: cut off the stem end, slice it in half lengthwise, and use a spoon to scrape out the seeds and membranes (wear gloves if your skin is sensitive). Mince the flesh as finely as possible. Add to the bowl. (Leave the seeds in if you want a spicier salsa.)','Mince the garlic clove. Add to the bowl.','Finely chop the fresh cilantro. Add to the bowl.','Add the lime juice, salt, and cumin if using. Stir everything together with a spoon.','Taste and adjust: add more salt if the salsa tastes flat (salt is critical — it brings out all the other flavours), more lime juice for brightness, or more jalapeno for heat.','Let the salsa sit at room temperature for 10 minutes before serving. This allows the flavours to meld and the tomatoes to release some juice, creating a flavorful liquid.','Serve with tortilla chips, over eggs, tacos, grilled fish, or chicken.']),
        'For a smoky salsa, char the tomatoes, onion, and jalapeno under the broiler for 5 minutes before chopping. For a smoother texture, pulse half the salsa in a food processor or blender and mix back in. Refrigerate up to 3 days — the flavour improves after the first day.'),
    zh('莎莎酱','10 分钟','4 份（约 2 杯）',
        '新鲜爽辣的番茄莎莎酱——远胜市售且几分钟做好。关键是成熟番茄和酸、辣、盐的平衡。',
        arr(['罗马番茄 4 个（约 450 克）——或任何成熟硬实番茄','红洋葱 40 克，切细丁','墨西哥辣椒 1 个，去籽切末（留籽更辣）','新鲜香菜 2 汤匙，切碎','青柠汁 2 汤匙（约 1 个青柠）','蒜 1 瓣，切末','海盐 半茶匙（按口味调整）','（可选）孜然粉 半茶匙，增层次']),
        arr(['处理番茄：小锅水煮沸。每个番茄底部划浅十字。放入沸水 30 秒，立即捞出放入冰水。皮会轻松剥落。四个全部去皮。（不在意皮可跳过——皮增营养但口感略粗。）','切番茄丁：每个去皮番茄水平切半。轻挤去籽丢弃。果肉切 0.5 厘米丁。约得 2 杯番茄丁放入中碗中。','红洋葱尽可能切细——目标 3 毫米丁。放入碗中。','处理辣椒：切去蒂端，纵切两半，用勺刮去籽和筋膜（皮肤敏感可戴手套）。果肉尽可能切细。放入碗中。（想更辣可留籽。）','蒜切末。放入碗中。','香菜切碎。放入碗中。','加青柠汁、盐和孜然（如用），用勺拌匀。','试味调整：淡加盐（盐很关键——带出所有其他风味），亮加青柠汁，辣加辣椒。','室温静置 10 分钟后食用。让风味融合、番茄出汁形成美味液体。','配玉米片、鸡蛋、塔可、烤鱼或鸡肉食用。']),
        '烟熏莎莎酱可将番茄、洋葱和辣椒先在 broiler 下烤 5 分钟再切。更顺滑口感可将一半莎莎酱用食物处理器脉冲打碎后拌回。冷藏 3 天——第一天后风味更佳。'))

# === MARINARA SAUCE (v38) — USER REQUESTED: just 1 ingredient (jar of sauce) ===
add('v38',
    en('Marinara Sauce','5 min','1/2 cup',
        'A convenient, ready-to-use tomato sauce — simply open a jar and heat. A versatile pantry staple for pasta, pizza, or as a base for other dishes.',
        arr(['Store-bought marinara sauce 1 jar (24 oz / 680 g), your favourite brand']),
        arr(['Open the jar of marinara sauce.','Pour the desired amount (about 1/2 cup per serving) into a small saucepan.','Heat over medium-low heat for 3 to 5 minutes, stirring occasionally, until warmed through. Do not boil — gentle heating preserves the flavour.','Alternatively, microwave in a microwave-safe bowl for 60 to 90 seconds, stirring halfway through.','Taste and add a pinch of salt, black pepper, or dried oregano if desired.','Use immediately over pasta, pizza, meatballs, or as a dipping sauce.']),
        'Look for brands with no added sugar — the ingredient list should be short: tomatoes, olive oil, garlic, herbs, salt. Good brands include Rao, Mutti, and Cento. Once opened, refrigerate the remaining sauce and use within 5 to 7 days.'),
    zh('番茄酱汁','5 分钟','半杯',
        '方便即用的番茄酱——开罐加热即可。意面、披萨或作为其他菜肴基底的百搭厨房常备品。',
        arr(['市售番茄酱汁 1 罐（680 克），喜欢的品牌']),
        arr(['打开番茄酱罐。','将所需分量（每份约半杯）倒入小锅中。','中小火加热 3 至 5 分钟，偶尔搅动至温透。不要煮沸——温和加热保持风味。','或微波炉专用碗中加热 60 至 90 秒，中途搅拌。','按需加少许盐、黑胡椒或干牛至调味。','立即用于意面、披萨、肉丸或蘸酱。']),
        '选择无添加糖的品牌——成分表应简短：番茄、橄榄油、蒜、香草、盐。好品牌包括 Rao、Mutti 和 Cento。开封后冷藏剩余酱汁，5 至 7 天内用完。'))

# === PEANUT SAUCE (f26) ===
add('f26',
    en('Peanut Sauce','10 min','4 (makes about 3/4 cup)','A rich, savoury-sweet Southeast Asian sauce — creamy peanut butter thinned with soy, lime and a touch of honey. Perfect for satay, noodles, spring rolls, or as a dip.',
        arr(['Peanut butter 1/2 cup (130 g), smooth and natural (just peanuts and salt — avoid brands with added sugar or hydrogenated oils)','Soy sauce 2 tbsp (or tamari for gluten-free)','Lime juice 1 tbsp (about half a lime) — or rice vinegar','Honey 1 tbsp (or maple syrup for vegan)','Garlic clove 1, minced','Fresh ginger 1 tsp, grated on a microplane','Warm water 3 to 4 tbsp (for thinning)','Sesame oil 1 tsp','(Optional) sriracha or chili flakes 1/4 tsp for heat','(Optional) coconut aminos 1 tbsp, to replace some soy sauce for a sweeter, lower-sodium option']),
        arr(['In a medium bowl, combine the peanut butter, soy sauce, lime juice, honey, minced garlic, and grated ginger.','Begin stirring with a whisk or fork. The mixture will be very thick and stiff at first — this is normal.','Add the warm water 1 tablespoon at a time, whisking vigorously after each addition. The sauce will gradually loosen and become smooth. Stop adding water when the sauce reaches your desired consistency: it should be pourable but still thick enough to coat a spoon. Typically 3 to 4 tbsp total.','Add the sesame oil and sriracha (if using). Stir until completely incorporated.','Taste the sauce and adjust: more soy sauce for saltiness, more honey for sweetness, more lime juice for brightness and acidity, more sriracha for heat. The balance of salty, sweet, and sour is what makes a great peanut sauce.','If the sauce is too thick after sitting, add another splash of warm water and stir. If too thin, add another tablespoon of peanut butter.','Use immediately, or transfer to a jar and refrigerate. The sauce thickens when cold — reheat gently in the microwave (15 to 20 seconds) or on the stove over low heat, and thin with warm water if needed.']),
        'Natural peanut butter (ingredients: peanuts, salt) gives the best flavour and texture — conventional brands with added sugar and oil produce a sauce that is too sweet and has a greasy mouthfeel. For a nut-free version, use sunflower seed butter with the same measurements. The sauce keeps for 1 week refrigerated.'),
    zh('花生酱汁','10 分钟','4 份（约 3/4 杯）',
        '浓郁咸甜的东南亚酱汁——花生酱配酱油、青柠和蜂蜜调稀。蘸沙爹、拌面、春卷或作蘸酱皆宜。',
        arr(['花生酱 半杯（130 克），顺滑天然（仅花生和盐——避免加糖或氢化油的品牌）','酱油 2 汤匙（无麸用 tamari）','青柠汁 1 汤匙（约半个青柠）——或米醋','蜂蜜 1 汤匙（纯素用枫糖浆）','蒜 1 瓣，切末','鲜姜 1 茶匙，磨泥','温水 3 至 4 汤匙（调稀用）','麻油 1 茶匙','（可选）是拉差或辣椒片 1/4 茶匙增辣','（可选）椰子氨基酸 1 汤匙，替代部分酱油，更甜低钠']),
        arr(['中碗中混合花生酱、酱油、青柠汁、蜂蜜、蒜末和姜末。','用打蛋器或叉开始搅拌。混合物开始很稠很硬——正常。','逐次加 1 汤匙温水，每次加后用力搅打。酱会逐渐变松变顺滑。加至理想稠度时停：应可倒但仍浓到能裹勺。通常共 3 至 4 汤匙。','加麻油和是拉差（如用），搅至完全混合。','试味调整：咸加酱油，甜加蜂蜜，亮加青柠汁，辣加是拉差。咸、甜、酸的平衡是好花生酱汁的关键。','静置后太稠可再加少许温水搅打。太稀加 1 汤匙花生酱。','立即使用，或装入瓶中冷藏。冷后变稠——微波 15 至 20 秒或小火炉上微温加热，需要时加温水调稀。']),
        '天然花生酱（成分：花生、盐）风味口感最佳——加糖加油的常规品牌酱太甜且口感油腻。无坚果版用葵花籽酱，用量相同。酱冷藏可存 1 周。'))

# === SESAME DRESSING (f27) ===
add('f27',
    en('Sesame Dressing','5 min','4 (makes about 1/3 cup)','A nutty, umami-rich Japanese dressing — toasted sesame oil combined with rice vinegar and soy for a bright, savoury drizzle that transforms simple greens.',
        arr(['Toasted sesame oil 3 tbsp (45 ml) — this is dark, fragrant oil from roasted sesame seeds','Rice vinegar 2 tbsp (30 ml) — unseasoned (not seasoned rice vinegar which contains added sugar and salt)','Soy sauce 1 tbsp (15 ml) — or tamari for gluten-free','Honey 1 tsp (or sugar 1/2 tsp dissolved in 1 tsp warm water)','Fresh ginger 1/2 tsp, grated on a microplane','Garlic clove 1 small, grated on a microplane to a paste','Sea salt 1/8 tsp (the soy sauce is salty, so add sparingly)','(Optional) toasted sesame seeds 1 tsp, for texture and garnish','(Optional) neutral oil 1 tbsp (like canola or grapeseed) to mellow the strong sesame flavour if desired']),
        arr(['In a small jar with a tight-fitting lid (a 4 oz mason jar works perfectly), combine the toasted sesame oil, rice vinegar, soy sauce, honey, grated ginger, grated garlic, and salt.','If using the optional neutral oil, add it now.','Seal the jar tightly. Shake vigorously for 15 to 20 seconds. The dressing should become slightly thicker and more opaque as the ingredients emulsify.','Stop shaking and let the dressing rest for 1 minute. The tiny ginger and garlic particles will settle slightly.','Taste the dressing by dipping a small piece of lettuce or cucumber. Adjust: more rice vinegar for acidity, more soy sauce for saltiness, more honey for sweetness, more ginger for bite.','If using sesame seeds, add them now and shake briefly to distribute.','The dressing is ready to use immediately. Drizzle over salads, steamed vegetables, cold noodles, or sliced cucumbers. Use about 1 tbsp per serving.','Store leftover dressing in the sealed jar at room temperature for up to 1 week. Shake before each use — the ingredients will separate as they sit.']),
        'Toasted sesame oil is made from roasted sesame seeds and has a deep, smoky, nutty flavour. Do not confuse it with untoasted (light-coloured) sesame oil, which has almost no flavour. Never heat toasted sesame oil — it loses its aroma at high temperatures. Add it to cooked dishes off the heat.'),
    zh('芝麻沙拉酱','5 分钟','4 份（约 1/3 杯）',
        '坚果香、鲜味浓郁的日式酱——烤芝麻油配米醋和酱油，咸鲜明亮，让简单沙拉焕然一新。',
        arr(['烤芝麻油 3 汤匙（45 毫升）——深色、芳香，由烘焙芝麻制成','米醋 2 汤匙（30 毫升）——无调味（非含糖盐的调味米醋）','酱油 1 汤匙（15 毫升）——无麸用 tamari','蜂蜜 1 茶匙（或糖 半茶匙溶于 1 茶匙温水）','鲜姜 半茶匙，磨泥','蒜 1 小瓣，磨泥','海盐 1/8 茶匙（酱油已咸，少量加）','（可选）烤芝麻 1 茶匙，增口感和装饰','（可选）中性油 1 汤匙（如菜籽或葡萄籽）缓和浓芝麻味']),
        arr(['小密封瓶中（4 盎司 mason 瓶最佳），混合烤芝麻油、米醋、酱油、蜂蜜、姜末、蒜泥和盐。','如用中性油现在加入。','盖紧密封。用力摇 15 至 20 秒。酱应略微变稠变浊——成分乳化。','停摇静置 1 分钟。姜蒜微粒会略沉淀。','蘸一小片生菜或黄瓜试味。调整：酸加米醋，咸加酱油，甜加蜂蜜，辣加姜。','如用芝麻，现在加入轻摇分布。','酱立即可用。淋在沙拉、蒸蔬菜、凉面或黄瓜片上。每份约 1 汤匙。','剩余酱密封瓶中室温存放 1 周。每次用前摇匀——静置会分层。']),
        '烤芝麻油由烘焙芝麻制成，有深沉烟熏坚果风味。不要与未烤（浅色）芝麻油混淆——后者几乎无味。绝不可加热烤芝麻油——高温会失去香气。在离火后加入菜肴。'))

# === AIOLI (f28) ===
add('f28',
    en('Aioli','5 min','4 (makes about 1/2 cup)','A garlicky, creamy Mediterranean sauce — mayonnaise elevated with fresh garlic and lemon for a bold, pungent accompaniment to fries, fish, and grilled meats.',
        arr(['Mayonnaise 1/2 cup (120 ml) — good quality, store-bought (or use Greek yogurt for a lighter version)','Garlic clove 1, large (or 2 small cloves)','Sea salt 1/4 tsp (for making the garlic paste)','Lemon juice 1 tsp (about 1/4 lemon)','Extra-virgin olive oil 1 tsp','Black pepper 1/8 tsp','(Optional) fresh parsley 1 tsp, finely chopped','(Optional) lemon zest 1/4 tsp, for extra lemon flavour']),
        arr(['Make the garlic paste (this step is crucial for smooth aioli): peel the garlic clove and mince it as finely as possible on a cutting board. Sprinkle 1/4 tsp sea salt over the minced garlic. Using the flat side of a chef knife held at a slight angle, press down and drag it across the garlic-salt mixture repeatedly, scraping it back together with the edge of the knife between drags. Repeat 6 to 8 times until the garlic breaks down into a smooth, glossy paste with no chunks. The salt acts as an abrasive that helps break down the garlic fibers.','In a small bowl, combine the garlic paste, mayonnaise, lemon juice, olive oil, and black pepper.','Whisk with a small whisk or fork until completely smooth and well blended. The aioli should be creamy and uniform in colour.','Add the chopped parsley and lemon zest if using. Stir to incorporate.','Let the aioli rest for 5 minutes at room temperature before serving. This allows the raw garlic flavour to mellow slightly and the lemon to infuse into the sauce.','Taste and adjust: add more lemon juice for brightness, more garlic paste for intensity (but be careful — raw garlic gets stronger over time), or more salt if needed.','Serve with french fries, grilled fish, roasted vegetables, fried chicken, or as a sandwich spread.']),
        'Making a garlic paste with salt is the key step — it mellows the harsh, raw bite of garlic and creates a smooth texture without chunks. For a more authentic (but more labor-intensive) version, whisk 1 egg yolk with the garlic paste, then slowly drizzle in 1/2 cup olive oil while whisking constantly to create a true emulsion. The mayonnaise shortcut is faster, safer (no raw egg), and tastes nearly identical.'),
    zh('蒜蓉蛋黄酱','5 分钟','4 份（约半杯）',
        '蒜香浓郁的地中海酱——蛋黄酱配鲜蒜和柠檬提升，浓烈大胆，配薯条、鱼和烤肉极佳。',
        arr(['蛋黄酱 半杯（120 毫升）——优质市售（或用希腊酸奶更轻）','蒜 1 大瓣（或 2 小瓣）','海盐 1/4 茶匙（做蒜泥用）','柠檬汁 1 茶匙（约 1/4 个柠檬）','特级初榨橄榄油 1 茶匙','黑胡椒 1/8 茶匙','（可选）鲜欧芹 1 茶匙，切碎','（可选）柠檬皮 1/4 茶匙，增柠檬味']),
        arr(['做蒜泥（此步骤对顺滑蒜泥酱至关重要）：蒜去皮后在砧板上尽可能切细末。撒 1/4 茶匙海盐在蒜末上。用厨师刀面微角度压住蒜盐混合物反复拖刮，用刀刃刮回聚拢。重复 6 至 8 次至蒜分解成顺滑光亮的泥，无块状。盐起研磨作用帮助分解蒜纤维。','小碗中混合蒜泥、蛋黄酱、柠檬汁、橄榄油和黑胡椒。','用小打蛋器或叉搅至完全顺滑均匀。蒜泥酱应奶滑且颜色一致。','加切碎的欧芹和柠檬皮（如用），搅拌混合。','室温静置 5 分钟后食用。让生蒜味略缓和、柠檬渗入酱中。','试味调整：亮加柠檬汁，浓加蒜泥（注意——生蒜随时间增强），淡加盐。','搭配薯条、烤鱼、烤蔬菜、炸鸡或作三明治抹酱。']),
        '用盐做蒜泥是关键步骤——缓和生蒜的辛辣并产生无块顺滑质地。更正宗（但更费工）的做法：用蒜泥搅打 1 个蛋黄，然后慢慢淋入半杯橄榄油不停搅打形成真正乳化。蛋黄酱捷径更快、更安全（无生蛋）且味道几乎相同。'))

# === CHIMICHURRI (v39) ===
add('v39',
    en('Chimichurri','10 min','6 (makes about 3/4 cup)','A vibrant, herbaceous Argentine sauce — perfect drizzled over grilled steak, chicken, or fish. The combination of parsley, garlic, vinegar, and oil is simple but transformative.',
        arr(['Fresh flat-leaf parsley 1 cup (packed, about 1 large bunch / 30 g) — remove thick stems','Fresh oregano 2 tbsp fresh (or 1 tsp dried oregano, crumbled)','Garlic 3 cloves, peeled','Red wine vinegar 3 tbsp (45 ml)','Extra-virgin olive oil 1/3 cup (80 ml)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Red pepper flakes 1/4 tsp (optional, for mild heat)','(Optional) fresh cilantro 2 tbsp, for a brighter, more complex flavour']),
        arr(['Wash the parsley thoroughly under cold water and pat dry with paper towels. Remove the thick lower stems (keep the tender stems and all leaves). Roughly chop the parsley.','If using fresh oregano, strip the leaves from the stems. If using dried oregano, crumble it between your fingers to release the oils.','Peel the garlic cloves.','Place the parsley (and cilantro if using), fresh oregano leaves (or dried oregano), and peeled garlic cloves in a food processor. Pulse 6 to 8 times until everything is finely chopped but not pureed — you want texture, not a smooth paste. (Alternatively, chop everything by hand as finely as possible.)','Transfer the chopped herb mixture to a medium bowl.','Add the red wine vinegar, sea salt, black pepper, and red pepper flakes (if using). Stir to combine.','Slowly pour in the olive oil while whisking gently. The sauce should look loose and herbaceous, not thick like a paste — chimichurri is meant to be pourable.','Taste and adjust: more vinegar for acidity, more salt if it tastes flat, more olive oil if it is too sharp. The balance should be herb-forward with a bright acidic kick.','Let the chimichurri sit at room temperature for at least 15 minutes before serving. This is essential — it allows the dried herbs (if using dried oregano) to rehydrate, the garlic to mellow, and all the flavours to meld.','Stir before serving. Drizzle generously over grilled steak, chicken, fish, pork, or roasted vegetables.']),
        'Chimichurri is best made ahead — it improves dramatically after 2 to 3 hours and keeps for 5 days refrigerated. The olive oil will solidify when cold; let it sit at room temperature for 30 minutes and stir before using. For a chunkier, more traditional version, chop everything by hand instead of using a food processor.'),
    zh('阿根廷青酱','10 分钟','6 份（约 3/4 杯）',
        '鲜艳香草的阿根廷酱——淋在烤牛排、鸡或鱼上完美。欧芹、蒜、醋和油的组合简单却变化无穷。',
        arr(['新鲜平叶欧芹 1 杯（压紧，约 1 大把 / 30 克）——去粗梗','新鲜牛至 2 汤匙（或干牛至 1 茶匙，捏碎）','蒜 3 瓣，去皮','红酒醋 3 汤匙（45 毫升）','特级初榨橄榄油 1/3 杯（80 毫升）','海盐 半茶匙','黑胡椒 1/4 茶匙','辣椒片 1/4 茶匙（可选，微辣）','（可选）新鲜香菜 2 汤匙，更亮更复杂']),
        arr(['欧芹冷水彻底冲洗后用厨房纸吸干。去除粗下梗（保留嫩梗和所有叶）。粗切。','如用鲜牛至，从茎上剥叶。如用干牛至，手指捏碎释放精油。','蒜去皮。','食物处理器中放入欧芹（和香菜如用）、鲜牛至叶（或干牛至）和去皮蒜瓣。脉冲 6 至 8 次至全部细碎但未成泥——要质感，不要顺滑酱。（或手工尽可能切细。）','切碎的香草混合物移至中碗中。','加红酒醋、海盐、黑胡椒和辣椒片（如用），搅拌混合。','慢慢倒入橄榄油同时轻搅。酱应松散多草本，不像糊状——阿根廷青酱应可倒。','试味调整：酸加醋，淡加盐，冲加橄榄油。应以草本为主、带明亮酸味。','室温静置至少 15 分钟后食用。此步骤至关重要——让干香草（如用干牛至）吸水复原、蒜味缓和、所有风味融合。','食用前搅拌。大量淋在烤牛排、鸡、鱼、猪或烤蔬菜上。']),
        '阿根廷青酱最好提前做——2 至 3 小时后大幅改善，冷藏可存 5 天。橄榄油冷藏会凝固；室温放 30 分钟搅后使用。更传统更粗的版本可全部手工切。'))

# === COCONUT CURRY SAUCE (f30) ===
add('f30',
    en('Coconut Curry Sauce','10 min','4 (makes about 1 cup)','A fragrant, spiced coconut sauce — Thai curry paste bloomed in oil, then simmered with coconut milk for a rich, versatile curry base that pairs with any protein or vegetable.',
        arr(['Coconut milk 1 cup (240 ml), full-fat and canned (not the carton beverage kind — it is too thin)','Red or green Thai curry paste 1 to 2 tbsp (start with 1 tbsp for mild, 2 for medium heat)','Garlic clove 1, minced','Fresh ginger 1 tsp, grated on a microplane','Coconut oil 1 tbsp (or olive oil if you do not have coconut oil)','Fish sauce 1 tsp (optional, adds umami depth — omit for vegan)','Lime juice 1 tsp (about 1/4 lime)','(Optional) fresh cilantro 1 tbsp, chopped for garnish','(Optional) 1/2 tsp brown sugar or coconut sugar, to balance heat']),
        arr(['Open the can of coconut milk. If the cream has separated from the water (common with full-fat canned coconut milk), scoop the thick solid cream from the top into a small bowl and set aside the liquid water portion.','Heat 1 tbsp coconut oil in a small saucepan over medium heat until melted and shimmering.','Add 1 to 2 tbsp curry paste (depending on your preferred heat level). Cook for 1 to 2 minutes, stirring constantly with a wooden spoon, pressing the paste against the bottom of the pan to break it apart. The paste will become fragrant and the oil will turn bright red or green — this step is called "blooming" and it releases the complex spice flavours. Do not let it burn.','Add the minced garlic and grated ginger. Cook for 30 seconds more, stirring constantly.','Pour in the coconut milk (both the cream and the liquid water portion). Whisk or stir vigorously until the curry paste is fully dissolved and the sauce is smooth — no lumps of paste should remain.','Bring the sauce to a gentle simmer (small bubbles around the edges, not a rolling boil). Reduce heat to medium-low.','Simmer for 3 to 5 minutes, stirring occasionally, until the sauce slightly thickens and coats the back of a spoon.','Remove from heat. Stir in the fish sauce (if using) and lime juice. The lime juice is added off the heat to preserve its bright flavour.','If using brown sugar, add it now and stir to dissolve. Taste and adjust: more curry paste for heat, more fish sauce for saltiness, more lime for brightness, more sugar to mellow the heat.','Garnish with chopped cilantro if using. Serve immediately as a sauce for chicken, fish, shrimp, tofu, vegetables, or rice.']),
        'Blooming the curry paste in oil before adding liquid is the single most important step — it unlocks the complex layer of spices that defines Thai curry. Do not skip it. Adjust the curry paste amount for your preferred heat level. The sauce keeps for 3 days refrigerated and thickens when cold — reheat gently and thin with a splash of water or broth.'),
    zh('椰香咖喱酱','10 分钟','4 份（约 1 杯）',
        '香料芬芳的椰奶酱——泰式咖喱酱在油中爆香，再与椰奶同煮成浓郁百搭的咖喱底，搭配任何蛋白或蔬菜。',
        arr(['椰奶 1 杯（240 毫升），全脂罐头（非纸盒饮料型——太稀）','红或绿泰式咖喱酱 1 至 2 汤匙（1 汤匙微辣，2 汤匙中辣）','蒜 1 瓣，切末','鲜姜 1 茶匙，磨泥','椰油 1 汤匙（无椰油可用橄榄油）','鱼露 1 茶匙（可选，增鲜味——纯素省去）','青柠汁 1 茶匙（约 1/4 个青柠）','（可选）鲜香菜 1 汤匙，切碎装饰','（可选）红糖 半茶匙或椰糖，平衡辣味']),
        arr(['开椰奶罐。如奶油与水分层（全脂罐头常见），将顶部厚固体奶油舀入小碗，液体水部分单独放。','小锅中火加 1 汤匙椰油至融化微闪。','加 1 至 2 汤匙咖喱酱（按辣度喜好）。炒 1 至 2 分钟不停搅，用木勺将酱压向锅底分散。酱会变香、油会变亮红或绿——此步骤叫"爆香"，释放复合香料风味。不要焦。','加蒜末和姜末炒 30 秒不停搅。','倒入椰奶（奶油和液体水部分都倒）。用力搅打至咖喱酱完全溶解、酱顺滑——不应有酱块残留。','煮至微沸（边缘小泡，非大滚）。转中小火。','微沸煮 3 至 5 分钟偶尔搅至微稠能裹勺背。','离火。搅入鱼露（如用）和青柠汁。青柠汁离火后加以保持明亮风味。','如用红糖现在加搅至溶解。试味调整：辣加咖喱酱，咸加鱼露，亮加青柠，辣太冲加糖。','撒香菜（如用）。立即作为鸡、鱼、虾、豆腐、蔬菜或米饭的酱汁食用。']),
        '咖喱酱先用油爆香再加液体是最重要的步骤——释放定义泰式咖喱的复合香料层。不可跳过。咖喱酱量按辣度调整。酱冷藏 3 天，冷后变稠——微温加热并加少许水或高汤调稀。'))

# === APPLY IMPROVEMENTS ===
applied = 0
skipped = []
for rid, (en_new, zh_new) in IMPROVEMENTS.items():
    if rid not in id_lines:
        skipped.append(rid)
        continue
    idx = id_lines[rid]
    en_start = None
    en_end = None
    zh_start = None
    zh_end = None
    for j in range(idx, min(idx + 20, len(lines))):
        if en_start is None and "en:{" in lines[j]:
            en_start = j
        if en_start is not None and '},' in lines[j]:
            en_end = j
            break
    for j in range(en_end if en_end else idx, min(idx + 20, len(lines))):
        if zh_start is None and "zh:{" in lines[j]:
            zh_start = j
        if zh_start is not None and '},' in lines[j]:
            zh_end = j
            break

    if en_start is not None and en_end is not None:
        lines[en_start] = f"    {en_new},\n"
        del lines[en_start+1:en_end+1]
        offset = en_end - en_start
        if zh_start is not None:
            zh_start -= offset
        if zh_end is not None:
            zh_end -= offset
        for j in range(en_start + 1, min(en_start + 20, len(lines))):
            if zh_start is None and "zh:{" in lines[j]:
                zh_start = j
            if zh_start is not None and '},' in lines[j]:
                zh_end = j
                break
        if zh_start is not None and zh_end is not None:
            lines[zh_start] = f"    {zh_new},\n"
            del lines[zh_start+1:zh_end+1]
            applied += 1
        else:
            skipped.append(rid + " (zh not found)")
    else:
        skipped.append(rid + " (en not found)")

with open(PATH, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"Applied: {applied}")
print(f"Skipped: {skipped}")
print(f"Total improvements defined: {len(IMPROVEMENTS)}")