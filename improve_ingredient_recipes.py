#!/usr/bin/env python3
"""Batch-improve brief ingredient recipes with detailed ingredients, steps, why, and notes.
Skips truly simple items (raw nuts, canned goods, fresh fruit, etc.)."""
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

# Recipe improvements: { id: (en_block, zh_block) }
# Each block is the full en:{...} or zh:{...} text to replace
IMPROVEMENTS = {}

def add(rid, en_name, en_time, en_serv, en_why, en_ings, en_steps, en_notes,
        zh_name, zh_time, zh_serv, zh_why, zh_ings, zh_steps, zh_notes):
    en = f"en:{{name:'{en_name}',time:'{en_time}',servings:'{en_serv}',why:'{en_why}',ingredients:{en_ings},steps:{en_steps},notes:'{en_notes}'}}"
    zh = f"zh:{{name:'{zh_name}',time:'{zh_time}',servings:'{zh_serv}',why:'{zh_why}',ingredients:{zh_ings},steps:{zh_steps},notes:'{zh_notes}'}}"
    IMPROVEMENTS[rid] = (en, zh)

def arr(items):
    return '[' + ','.join(f"'{i}'" for i in items) + ']'

# === PROTEINS ===
add('p07', 'Pork Sausage', '10 min', '2 links',
    'A savoury, high-protein convenience food — pre-seasoned and quick to pan-fry for a satisfying meal.',
    arr(['Pork sausage links 2 (about 3 oz / 85 g each)','Water 2 tbsp','(Optional) olive oil 1 tsp']),
    arr(['Prick each sausage a few times with a fork to prevent bursting.','Heat a skillet over medium heat. Add a tsp of oil or water and the sausage links.','Cook for 4-5 minutes per side, turning occasionally, until browned on all sides and internal temperature reaches 160F (71C).','If the outside browns too quickly, add 2 tbsp water, cover, and steam for 3 minutes to cook through.']),
    'Pan-frying gives the best crust. For a healthier option, bake at 400F for 20 minutes. Pre-cooked sausages only need 2-3 minutes per side.',
    '香肠', '10 分钟', '2 根',
    '方便的高蛋白预制食品——已调味，快速煎制即可享用。',
    arr(['猪肉香肠 2 根（每根约 85 克）','清水 2 汤匙','（可选）橄榄油 1 茶匙']),
    arr(['用叉子在香肠上戳几个小孔防爆裂。','平底锅中大火，加少许油或水和香肠。','每面煎 4-5 分钟，不时翻面至各面焦黄、内部温度达 160F。','若外皮焦太快，加 2 汤匙水盖盖蒸 3 分钟至熟透。']),
    '煎制口感最佳。更健康可 400F 烤 20 分钟。熟香肠每面煎 2-3 分钟即可。')

add('p10', 'Bacon', '8 min', '3 strips',
    'A crispy, savoury favourite — bacon adds rich flavour and satisfies hunger with its high fat and protein content.',
    arr(['Bacon strips 3 (about 1 oz / 30 g each)','(Optional) fresh ground black pepper']),
    arr(['Place bacon strips in a cold skillet — starting cold renders the fat gradually for crispier results.','Turn heat to medium and cook for 3-4 minutes per side, adjusting heat if splattering excessively.','When the bacon is golden and crispy to your liking, transfer to paper towels to drain.','Sprinkle with black pepper if desired and serve immediately.']),
    'For less mess, bake at 400F for 15-18 minutes on a foil-lined sheet. Save the bacon fat for cooking eggs or vegetables.',
    '培根', '8 分钟', '3 片',
    '香脆可口的经典——培根富含脂肪和蛋白质，风味浓郁且饱腹。',
    arr(['培根 3 片（每片约 30 克）','（可选）现磨黑胡椒']),
    arr(['将培根放入冷锅——冷锅起步可逐步出油，口感更脆。','中火每面煎 3-4 分钟，油溅过大时调小火。','煎至金黄酥脆后移至厨房纸沥油。','按需撒黑胡椒，立即食用。']),
    '少油烟可垫锡纸 400F 烤 15-18 分钟。保留培根油用于煎蛋或炒菜。')

add('p14', 'Chicken Wings', '35 min', '4 wings',
    'Crispy-skinned wings with juicy meat — a crowd-pleaser that works as a main or snack.',
    arr(['Chicken wings 4 (about 1 lb / 450 g)','Baking powder 1 tsp','Sea salt 1 tsp','Black pepper 1/2 tsp','Garlic powder 1/2 tsp','Paprika 1/2 tsp']),
    arr(['Pat the wings completely dry with paper towels — dry skin is essential for crispiness.','Toss wings with baking powder, salt, pepper, garlic powder and paprika in a bowl until evenly coated.','Arrange wings on a wire rack set over a baking sheet, leaving space between each.','Bake at 425F (220C) for 30-35 minutes, flipping once halfway, until skin is golden and crispy.','Rest 2 minutes before serving. Toss with sauce if desired.']),
    'Baking powder (not baking soda) is the secret to crispy oven wings. For extra crunch, refrigerate the coated wings uncovered for 1 hour before baking.',
    '鸡翅', '35 分钟', '4 只',
    '皮脆肉嫩的鸡翅——可作主菜或小吃，人人喜爱。',
    arr(['鸡翅 4 只（约 450 克）','泡打粉 1 茶匙','海盐 1 茶匙','黑胡椒 半茶匙','蒜粉 半茶匙','辣椒粉 半茶匙']),
    arr(['用厨房纸将鸡翅彻底吸干——干燥的表皮是酥脆的关键。','碗中用泡打粉、盐、胡椒、蒜粉和辣椒粉拌匀鸡翅。','将鸡翅放在烤架上网架，留间距，下接烤盘。','425F（220C）烤 30-35 分钟，中途翻面一次，至皮金黄酥脆。','静置 2 分钟后食用。可按需拌酱。']),
    '泡打粉（非小苏打）是烤箱鸡翅酥脆的秘诀。涂层后不盖冷藏 1 小时更脆。')

add('p15', 'Ground Turkey', '10 min', '1',
    'A leaner alternative to ground beef — quick to cook and versatile for bowls, tacos or pasta sauces.',
    arr(['Ground turkey 4 oz (110 g, 93% lean)','Olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Garlic powder 1/4 tsp','Onion powder 1/4 tsp']),
    arr(['Heat olive oil in a skillet over medium-high heat.','Add the ground turkey, breaking it apart with a wooden spoon into small crumbles.','Cook for 5-7 minutes, stirring occasionally, until fully cooked through with no pink remaining.','Season with salt, pepper, garlic powder and onion powder. Stir to combine.','Use immediately in bowls, tacos, lettuce wraps or pasta sauces.']),
    'Turkey is leaner than beef and can dry out — do not overcook. Add a splash of broth or olive oil if it seems dry. Keeps 4 days refrigerated.',
    '火鸡末', '10 分钟', '1 份',
    '比牛肉末更瘦的替代——快速烹饪，适用于饭碗、塔可或意面酱。',
    arr(['火鸡肉末 110 克（93% 瘦肉）','橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','蒜粉 1/4 茶匙','洋葱粉 1/4 茶匙']),
    arr(['平底锅中大火加橄榄油。','放入火鸡末，用木铲拨散成小粒。','炒 5-7 分钟至完全变色无粉红。','加盐、胡椒、蒜粉和洋葱粉拌匀。','立即用于饭碗、塔可、生菜包或意面酱。']),
    '火鸡比牛肉瘦，易干——不要过熟。偏干可加少许高汤或橄榄油。冷藏 4 天。')

add('p18', 'Lamb Chops', '15 min', '2 chops',
    'Tender, flavourful lamb with a caramelized crust — an elegant protein that cooks in minutes.',
    arr(['Lamb chops 2 (about 4 oz / 110 g each, loin or rib)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tbsp','Garlic clove 1, crushed','Fresh rosemary 1 sprig (optional)']),
    arr(['Remove lamb from fridge 20 minutes before cooking to bring to room temperature.','Pat dry and season both sides with salt and pepper.','Heat olive oil in a skillet over medium-high heat until shimmering.','Sear chops for 3-4 minutes per side for medium-rare (135F), basting with garlic and rosemary in the last minute.','Transfer to a plate, tent with foil, and rest 3 minutes before serving.']),
    'Use a meat thermometer for best results: 130F rare, 135F medium-rare, 145F medium. Lamb pairs well with mint sauce or garlic yogurt.',
    '羊排', '15 分钟', '2 块',
    '软嫩多汁的羊排配焦香外壳——优雅的蛋白质，几分钟即成。',
    arr(['羊排 2 块（每块约 110 克，腰肉或肋排）','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 汤匙','蒜 1 瓣，压碎','新鲜迷迭香 1 枝（可选）']),
    arr(['烹饪前 20 分钟从冰箱取出回温。','吸干水分，两面撒盐和胡椒。','平底锅中大火加橄榄油至微闪。','每面煎 3-4 分钟至三分熟（135F），最后 1 分钟淋蒜和迷迭香。','装盘盖锡纸静置 3 分钟后食用。']),
    '温度计最佳：130F 一分熟，135F 三分熟，145F 五分熟。搭配薄荷酱或蒜泥酸奶。')

add('p19', 'Lamb Meatballs', '30 min', '4 meatballs',
    'Juicy, herb-seasoned lamb meatballs — great for meal prep and pair beautifully with Mediterranean flavours.',
    arr(['Ground lamb 8 oz (225 g)','Egg 1','Breadcrumbs 2 tbsp (or almond flour for gf)','Finely chopped onion 2 tbsp','Minced garlic 1 clove','Dried oregano 1 tsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tbsp']),
    arr(['In a bowl, combine ground lamb, egg, breadcrumbs, onion, garlic, oregano, salt and pepper. Mix gently until just combined — do not overwork.','Form into 4 equal meatballs, about 1.5 inches across.','Heat olive oil in a skillet over medium heat. Add meatballs and brown on all sides, about 2 minutes per side.','Reduce heat to medium-low, cover, and cook for 10-12 minutes until internal temperature reaches 160F.','Rest 2 minutes before serving. Excellent with tzatziki or tomato sauce.']),
    'For a complete meal, simmer the browned meatballs in tomato sauce for 15 minutes. Freeze raw meatballs for up to 1 month.',
    '羊肉丸', '30 分钟', '4 个',
    '多汁的香草羊肉丸——适合备餐，与地中海风味绝配。',
    arr(['羊肉末 225 克','鸡蛋 1 个','面包糠 2 汤匙（无麸用杏仁粉）','洋葱末 2 汤匙','蒜末 1 瓣','干牛至 1 茶匙','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 汤匙']),
    arr(['碗中混合羊肉末、蛋、面包糠、洋葱、蒜、牛至、盐和胡椒，轻拌至刚好混合。','分成 4 等份搓成约 4 厘米的丸子。','平底锅中火加油，各面煎约 2 分钟至焦黄。','转小火盖盖煮 10-12 分钟至内部温度 160F。','静置 2 分钟后食用。搭配酸奶黄瓜酱或番茄酱极佳。']),
    '完整一餐可将煎好的肉丸在番茄酱中炖 15 分钟。生肉丸冷冻可存 1 个月。')

add('p20', 'Roast Duck', '2 hr 15 min', '4',
    'Rich, succulent duck with crispy skin — a special-occasion protein that delivers deep flavour.',
    arr(['Whole duck 1 (about 4 lb / 1.8 kg)','Sea salt 1 tsp','Black pepper 1/2 tsp','Orange 1, quartered','Garlic 3 cloves, crushed','Fresh thyme 3 sprigs']),
    arr(['Remove duck from fridge 30 minutes before cooking. Remove giblets and pat the duck completely dry inside and out.','Score the skin in a crosshatch pattern with a sharp knife, being careful not to cut into the meat.','Season inside and out with salt and pepper. Stuff the cavity with orange quarters, garlic and thyme.','Place breast-up on a rack in a roasting pan. Roast at 350F (175C) for 1.5-2 hours, pouring off fat every 30 minutes.','The duck is done when a thermometer in the thigh reads 165F (74C) and the skin is golden and crispy.','Rest 15 minutes loosely tented with foil before carving.']),
    'Save the rendered duck fat — it is excellent for roasting potatoes. Prick the skin all over before roasting to help fat render.',
    '烤鸭', '2 小时 15 分钟', '4 份',
    '皮脆肉嫩、风味浓郁的鸭肉——特殊场合的优选蛋白。',
    arr(['整鸭 1 只（约 1.8 公斤）','海盐 1 茶匙','黑胡椒 半茶匙','橙子 1 个，切四瓣','蒜 3 瓣，压碎','新鲜百里香 3 枝']),
    arr(['烹饪前 30 分钟取出鸭子回温。去除内脏，内外彻底吸干。','用利刀在鸭皮上划十字网格，注意不要切到肉。','内外撒盐和胡椒，腹内填入橙子、蒜和百里香。','胸朝上放在烤架上的烤盘中，350F（175C）烤 1.5-2 小时，每 30 分钟倒出鸭油。','大腿温度计读数 165F 且皮金黄酥脆即熟。','盖锡纸松松覆盖静置 15 分钟后切块。']),
    '保留鸭油——烤土豆极佳。烤前在鸭皮各处戳孔有助于出油。')

add('p22', 'Pan-Fried Haddock', '12 min', '1 fillet',
    'A flaky, mild white fish with a golden crust — quick to cook and universally appealing.',
    arr(['Haddock fillet 1 (about 6 oz / 170 g)','Olive oil 1 tbsp','Butter 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon wedge 1','Fresh parsley 1 tsp chopped (optional)']),
    arr(['Pat the fillet dry with paper towels and season both sides with salt and pepper.','Heat olive oil in a non-stick skillet over medium-high heat.','When the oil shimmers, place the fillet skin-side down (if it has skin). Press gently for 30 seconds to prevent curling.','Cook for 3-4 minutes until the underside is golden and the flesh is opaque halfway up.','Flip carefully, add butter to the pan, and cook 2-3 more minutes, basting with the melted butter.','Squeeze lemon over the top, sprinkle with parsley, and serve immediately.']),
    'Do not overcook — the fish should just flake when pressed. Haddock can be replaced with cod, pollock or any mild white fish.',
    '煎黑线鳕', '12 分钟', '1 片',
    '薄片状的温和白鱼配金黄外壳——快速烹饪，老少皆宜。',
    arr(['黑线鳕鱼柳 1 片（约 170 克）','橄榄油 1 汤匙','黄油 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬角 1 个','新鲜欧芹 1 茶匙，切碎（可选）']),
    arr(['用厨房纸吸干鱼柳，两面撒盐和胡椒。','不粘锅中大火加橄榄油。','油微闪时放入鱼柳（如有皮则皮朝下），轻压 30 秒防卷曲。','煎 3-4 分钟至底面金黄、鱼肉下半部变白。','小心翻面，加入黄油，再煎 2-3 分钟，用融化黄油淋浇。','挤柠檬汁，撒欧芹，立即食用。']),
    '不要过熟——鱼肉轻按即散即可。黑线鳕可用鳕鱼、绿青鳕或任何温和白鱼替代。')

add('p23', 'Baked Tilapia', '20 min', '2 fillets',
    'A budget-friendly, mild white fish that bakes effortlessly with minimal seasoning.',
    arr(['Tilapia fillets 2 (about 4 oz / 110 g each)','Olive oil 1 tbsp','Lemon juice 1 tbsp','Garlic clove 1, minced','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Paprika 1/4 tsp']),
    arr(['Preheat oven to 400F (200C). Line a baking sheet with parchment paper.','Pat fillets dry and place on the baking sheet.','In a small bowl, whisk together olive oil, lemon juice, minced garlic, salt, pepper and paprika.','Brush the mixture evenly over both fillets.','Bake for 12-15 minutes until the fish flakes easily with a fork and is opaque throughout.','Serve immediately with lemon wedges.']),
    'Tilapia cooks quickly — check at 12 minutes to avoid dryness. Add a sprinkle of parmesan in the last 2 minutes for extra flavour.',
    '烤罗非鱼', '20 分钟', '2 片',
    '经济实惠的温和白鱼——简单调味即可烤制。',
    arr(['罗非鱼柳 2 片（每片约 110 克）','橄榄油 1 汤匙','柠檬汁 1 汤匙','蒜 1 瓣，切末','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','辣椒粉 1/4 茶匙']),
    arr(['烤箱预热 400F（200C），烤盘铺烘焙纸。','吸干鱼柳水分，放在烤盘上。','小碗混合橄榄油、柠檬汁、蒜末、盐、胡椒和辣椒粉。','均匀刷在两片鱼柳上。','烤 12-15 分钟至鱼肉可用叉轻松拨散且通体变白。','搭配柠檬角立即食用。']),
    '罗非鱼熟得快——12 分钟时检查以免过干。最后 2 分钟撒帕玛森芝士可增味。')

add('p24', 'Grilled Halibut', '15 min', '1 fillet',
    'A firm, meaty fish with a clean flavour — grilling gives it a beautiful char while keeping the interior moist.',
    arr(['Halibut fillet 1 (about 6 oz / 170 g)','Olive oil 1 tbsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon zest 1 tsp','Fresh dill 1 tsp chopped (optional)']),
    arr(['Pat the fillet dry and brush both sides with olive oil.','Season with salt, pepper and lemon zest.','Preheat a grill or grill pan to medium-high heat (about 400F).','Oil the grill grates with a paper towel dipped in oil.','Grill the fillet for 4-5 minutes per side, depending on thickness, until it just flakes when tested with a fork.','Rest 2 minutes, sprinkle with dill, and serve with lemon wedges.']),
    'Halibut is expensive — do not overcook. It is done when it reaches 145F or just starts to flake. A 1-inch fillet needs about 4 minutes per side.',
    '烤大比目鱼', '15 分钟', '1 片',
    '紧实肉厚、风味清新的鱼——烤制外焦内嫩。',
    arr(['大比目鱼柳 1 片（约 170 克）','橄榄油 1 汤匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬皮 1 茶匙','新鲜莳萝 1 茶匙，切碎（可选）']),
    arr(['吸干鱼柳，两面刷橄榄油。','撒盐、胡椒和柠檬皮。','烤架或烤盘中大火预热（约 400F）。','用蘸油的厨房纸擦烤架防粘。','每面烤 4-5 分钟（视厚度），至叉测可散。','静置 2 分钟，撒莳萝，配柠檬角食用。']),
    '大比目鱼价格不菲——不要过熟。达 145F 或刚开始散开即熟。1 英寸厚每面约 4 分钟。')

add('p26', 'Pan-Fried Scallops', '8 min', '6 scallops',
    'Sweet, tender scallops with a caramelized golden crust — an elegant protein ready in minutes.',
    arr(['Large sea scallops 6 (about 1 lb / 450 g)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Olive oil 1 tbsp','Butter 1 tbsp','Garlic clove 1, crushed','Lemon juice 1 tsp']),
    arr(['Remove the small side muscle from each scallop if still attached. Rinse briefly and pat thoroughly dry — moisture prevents searing.','Season both sides with salt and pepper.','Heat olive oil in a heavy skillet over high heat until smoking.','Place scallops in the pan, flat-side down, leaving space between them. Do not crowd the pan.','Sear for 2 minutes undisturbed until a deep golden crust forms. Flip and cook 1-2 more minutes.','Add butter, garlic and lemon juice in the last 30 seconds, basting the scallops.','Remove immediately when the centres are just translucent — overcooked scallops become rubbery.']),
    'The key to perfect scallops is a dry surface and a very hot pan. Cook in two batches if needed to avoid crowding.',
    '煎扇贝', '8 分钟', '6 只',
    '鲜甜软嫩的扇贝配焦糖金壳——几分钟即成的优雅蛋白。',
    arr(['大扇贝 6 只（约 450 克）','海盐 半茶匙','黑胡椒 1/4 茶匙','橄榄油 1 汤匙','黄油 1 汤匙','蒜 1 瓣，压碎','柠檬汁 1 茶匙']),
    arr(['如有侧肌则去除。快速冲洗后彻底吸干——水分影响煎制。','两面撒盐和胡椒。','厚底锅大火加油至冒烟。','扇贝平面朝下放入锅中，留间距，不要挤。','不翻动煎 2 分钟至深金色焦壳。翻面再煎 1-2 分钟。','最后 30 秒加入黄油、蒜和柠檬汁，淋浇扇贝。','中心刚变半透明即盛出——过熟会变硬。']),
    '完美扇贝的关键：干燥的表面和极热的锅。避免拥挤可分两批煎。')

add('p27', 'Steamed Mussels', '15 min', '2 lb',
    'Briny, tender mussels steamed in a fragrant broth — simple to prepare and naturally flavourful.',
    arr(['Fresh mussels 2 lb (900 g), scrubbed and debearded','Dry white wine 1/2 cup (120 ml) or water','Garlic 3 cloves, minced','Shallot 1, finely chopped','Butter 2 tbsp','Fresh parsley 2 tbsp chopped','Sea salt to taste']),
    arr(['Discard any mussels that are open and do not close when tapped — they are dead. Also discard any with cracked shells.','Melt butter in a large pot with a tight-fitting lid over medium heat. Add shallot and garlic, saute for 2 minutes.','Add wine (or water) and bring to a simmer.','Add the mussels, cover, and steam for 5-7 minutes, shaking the pot once halfway through.','When most mussels have opened, remove from heat. Discard any that remain closed.','Stir in parsley, adjust salt, and serve in deep bowls with the cooking broth.']),
    'Mussels that do not open after cooking are unsafe — discard them. Serve with crusty bread to soak up the broth.',
    '蒸青口贝', '15 分钟', '2 磅',
    '鲜美软嫩的青口贝蒸于香浓汤汁中——制作简单，天然提味。',
    arr(['新鲜青口贝 900 克，刷洗去须','干白葡萄酒 120 毫升或清水','蒜 3 瓣，切末','红葱头 1 个，切碎','黄油 2 汤匙','新鲜欧芹 2 汤匙，切碎','海盐 适量']),
    arr(['丢弃敲后不闭合的开口青口——已死。丢弃破壳的。','大锅中火融化黄油，加入红葱头和蒜炒 2 分钟。','加酒（或水）煮至微沸。','放入青口贝，盖紧盖子蒸 5-7 分钟，中途晃锅一次。','大多数开口后离火。未开的丢弃。','拌入欧芹，调盐，连汤盛入深碗食用。']),
    '煮后不开口的青口不安全——丢弃。搭配面包蘸汤汁食用。')

add('p33', 'Scrambled Tofu', '10 min', '2',
    'A plant-based scramble with a fluffy, egg-like texture — high in protein and naturally cholesterol-free.',
    arr(['Firm tofu 8 oz (225 g), drained','Olive oil 1 tbsp','Nutritional yeast 2 tbsp','Turmeric 1/2 tsp','Garlic powder 1/2 tsp','Onion powder 1/4 tsp','Sea salt 1/2 tsp','Black pepper 1/8 tsp','Soy sauce 1 tsp','(Optional) spinach 1 cup, chopped']),
    arr(['Press the tofu to remove excess water, then crumble it into bite-sized pieces with your hands or a fork.','Heat olive oil in a skillet over medium heat.','Add the crumbled tofu and cook for 3 minutes, stirring occasionally.','Sprinkle in nutritional yeast, turmeric, garlic powder, onion powder, salt, pepper and soy sauce. Stir well to combine.','Cook for 3-4 more minutes until heated through and slightly golden. Add chopped spinach in the last minute if using.','Taste and adjust seasoning. Serve immediately.']),
    'Turmeric gives the scramble a golden egg-like colour. For a softer texture, add a splash of plant milk while cooking.',
    '豆腐炒蛋', '10 分钟', '2 份',
    '植物基炒蛋——蓬松如蛋，高蛋白且无胆固醇。',
    arr(['硬豆腐 225 克，沥水','橄榄油 1 汤匙','营养酵母 2 汤匙','姜黄粉 半茶匙','蒜粉 半茶匙','洋葱粉 1/4 茶匙','海盐 半茶匙','黑胡椒 1/8 茶匙','酱油 1 茶匙','（可选）菠菜 1 杯，切碎']),
    arr(['压去豆腐多余水分，用手或叉子掰成小块。','平底锅中火加油。','放入碎豆腐炒 3 分钟，不时翻动。','撒入营养酵母、姜黄、蒜粉、洋葱粉、盐、胡椒和酱油，拌匀。','再炒 3-4 分钟至热透微金。最后 1 分钟加菠菜（如用）。','尝味调整，立即食用。']),
    '姜黄赋予金黄蛋色。更软口感可加少许植物奶。')

add('p34', 'Marinated Tempeh', '20 min', '2',
    'Nutty, firm tempeh marinated in a savoury-sweet glaze — a probiotic-rich plant protein with satisfying bite.',
    arr(['Tempeh 8 oz (225 g)','Soy sauce 3 tbsp','Apple cider vinegar 1 tbsp','Maple syrup 1 tbsp','Garlic clove 1, minced','Smoked paprika 1/2 tsp','Olive oil 1 tbsp','Water 2 tbsp']),
    arr(['Slice the tempeh into 1/4-inch strips or cubes.','In a shallow dish, whisk together soy sauce, apple cider vinegar, maple syrup, garlic, smoked paprika and water.','Add tempeh pieces and marinate for at least 10 minutes (or overnight in the fridge), turning once.','Heat olive oil in a skillet over medium heat.','Remove tempeh from marinade (reserve the liquid) and pan-fry for 3-4 minutes per side until golden and crisp.','Pour the reserved marinade into the pan and cook 1-2 minutes, stirring to glaze the tempeh until the sauce reduces and coats each piece.','Serve immediately in bowls, wraps or salads.']),
    'Steaming tempeh for 10 minutes before marinating removes bitterness and helps it absorb more flavour.',
    '卤豆豉', '20 分钟', '2 份',
    '坚果风味的豆豉配咸甜卤汁——富含益生菌的植物蛋白，口感扎实。',
    arr(['豆豉 225 克','酱油 3 汤匙','苹果醋 1 汤匙','枫糖浆 1 汤匙','蒜 1 瓣，切末','烟熏辣椒粉 半茶匙','橄榄油 1 汤匙','清水 2 汤匙']),
    arr(['将豆豉切成 0.5 厘米条或方块。','浅盘中混合酱油、苹果醋、枫糖浆、蒜、烟熏辣椒粉和水。','放入豆豉腌至少 10 分钟（或冰箱过夜），翻面一次。','平底锅中火加油。','取出豆豉（保留卤汁），每面煎 3-4 分钟至金黄酥脆。','倒入保留的卤汁，煮 1-2 分钟搅拌裹匀至酱汁收浓。','立即用于饭碗、卷饼或沙拉。']),
    '腌制前蒸 10 分钟可去苦味并帮助入味。')

add('p35', 'Seitan Strips', '10 min', '1 cup',
    'A chewy, meat-like plant protein — seitan absorbs flavours well and pan-fries into satisfying strips.',
    arr(['Pre-made seitan 4 oz (110 g)','Olive oil 1 tbsp','Soy sauce 1 tbsp','Smoked paprika 1/4 tsp','Garlic powder 1/4 tsp','Black pepper 1/8 tsp']),
    arr(['Slice the seitan into 1/4-inch strips.','Heat olive oil in a skillet over medium-high heat.','Add seitan strips and cook for 2-3 minutes per side until browned and slightly crispy.','Drizzle with soy sauce and sprinkle with smoked paprika, garlic powder and pepper.','Toss to coat and cook 1 more minute until the seasoning is absorbed.','Use in stir-fries, wraps, bowls or sandwiches.']),
    'Seitan is very high in protein (about 25 g per 4 oz). If it seems dry, add a splash of broth while cooking.',
    '面筋条', '10 分钟', '1 杯',
    '似肉口感的植物蛋白——面筋吸味力强，煎后有嚼劲。',
    arr(['成品面筋 110 克','橄榄油 1 汤匙','酱油 1 汤匙','烟熏辣椒粉 1/4 茶匙','蒜粉 1/4 茶匙','黑胡椒 1/8 茶匙']),
    arr(['将面筋切成 0.5 厘米条。','平底锅中大火加油。','放入面筋条每面煎 2-3 分钟至焦黄微脆。','淋酱油，撒烟熏辣椒粉、蒜粉和胡椒。','翻拌裹匀，再炒 1 分钟至调料吸收。','用于炒菜、卷饼、饭碗或三明治。']),
    '面筋蛋白质含量很高（每 110 克约 25 克）。偏干可加少许高汤。')

add('p39', 'Kidney Beans', '10 min', '1 cup',
    'A hearty, fibre-rich legume — kidney beans are the base of chili and a versatile plant protein.',
    arr(['Canned kidney beans 1 can (15 oz / 425 g)','Water for rinsing','Sea salt 1/4 tsp','Olive oil 1 tsp (optional)']),
    arr(['Open the can and pour the beans into a colander. Rinse thoroughly under cold water until the water runs clear — this removes excess sodium and the starchy liquid.','Shake off excess water. The beans are now ready to use.','For warm beans: heat olive oil in a small pot over medium heat, add beans and salt, and stir for 2-3 minutes until heated through.','For chili or stew: add directly to the pot with other ingredients and simmer for 15-20 minutes to absorb flavours.']),
    'Never eat raw or undercooked kidney beans — they contain a toxin that is destroyed by boiling. Canned beans are pre-cooked and safe.',
    '红腰豆', '10 分钟', '1 杯',
    '高纤维的丰盛豆类——红腰豆是辣豆酱的基础，也是百搭植物蛋白。',
    arr(['红腰豆罐头 1 罐（425 克）','清水（冲洗用）','海盐 1/4 茶匙','橄榄油 1 茶匙（可选）']),
    arr(['开罐倒入滤网，冷水冲洗至水变清——去除多余钠和淀粉液。','甩去多余水分，即可使用。','热豆：小锅中火加橄榄油，放入豆和盐翻炒 2-3 分钟至热透。','用于辣豆酱或炖菜：直接加入锅中与其他食材炖 15-20 分钟入味。']),
    '切勿食用生或未熟红腰豆——含毒素需煮沸破坏。罐头已预煮安全。')

add('p40', 'Navy Beans', '10 min', '1 cup',
    'Small, creamy white beans with a mild flavour — the classic base for baked beans and hearty soups.',
    arr(['Canned navy beans 1 can (15 oz / 425 g)','Water for rinsing','Sea salt 1/4 tsp']),
    arr(['Open the can and pour beans into a colander. Rinse well under cold water until the foam is gone.','Shake off excess water and the beans are ready to use.','For soups or stews: add directly to the pot and simmer 15-20 minutes with other ingredients.','For a simple side: heat with a splash of broth, salt and a bay leaf for 5 minutes, then drain and serve.']),
    'Navy beans are an excellent source of fibre and folate. They mash easily for dips or spreads.',
    '白豆', '10 分钟', '1 杯',
    '小巧奶白色的温和豆类——焗豆和浓汤的经典基底。',
    arr(['白豆罐头 1 罐（425 克）','清水（冲洗用）','海盐 1/4 茶匙']),
    arr(['开罐倒入滤网，冷水冲洗至泡沫消失。','甩去多余水分即可使用。','用于汤或炖菜：直接加入锅中与其他食材炖 15-20 分钟。','简易配菜：加少许高汤、盐和月桂叶煮 5 分钟，沥水上桌。']),
    '白豆富含纤维和叶酸。易压成泥用于蘸酱或涂抹。')

add('p42', 'Canned Tuna', '5 min', '1 can',
    'A convenient, shelf-stable protein — tuna is rich in omega-3 fatty acids and ready in seconds.',
    arr(['Canned tuna 1 can (5 oz / 140 g), drained','Olive oil 1 tsp','Lemon juice 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) mayonnaise 1 tbsp','(Optional) chopped celery 1 tbsp']),
    arr(['Open the can and drain the liquid — for oil-packed tuna, drain well; for water-packed, drain completely.','Transfer tuna to a bowl and flake with a fork.','Drizzle with olive oil and lemon juice. Season with salt and pepper. Toss gently.','For tuna salad: add mayonnaise and chopped celery, mix until combined.','Serve immediately on its own, in lettuce cups, on toast or in a wrap.']),
    'Choose chunk light tuna for lower mercury levels than albacore. Rinse with water to reduce sodium if needed.',
    '金枪鱼罐头', '5 分钟', '1 罐',
    '方便耐储的蛋白质——金枪鱼富含 omega-3 脂肪酸，秒速即成。',
    arr(['金枪鱼罐头 1 罐（140 克），沥干','橄榄油 1 茶匙','柠檬汁 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）蛋黄酱 1 汤匙','（可选）芹菜末 1 汤匙']),
    arr(['开罐沥液——油浸的沥干，水浸的完全沥干。','将金枪鱼放入碗中，用叉拨散。','淋橄榄油和柠檬汁，撒盐和胡椒，轻拌。','金枪鱼沙拉：加蛋黄酱和芹菜末拌匀。','立即食用，可放生菜杯、吐司或卷饼中。']),
    '大眼金枪鱼汞含量高于碎块浅色金枪鱼。需减钠可用水冲洗。')

add('p46', 'Roasted Edamame', '25 min', '1 cup',
    'Crispy, nutty roasted soybeans — a high-protein, high-fibre snack that satisfies like nuts but with less fat.',
    arr(['Frozen shelled edamame 2 cups (300 g), thawed','Olive oil 1 tbsp','Sea salt 1/2 tsp','Garlic powder 1/2 tsp','Smoked paprika 1/4 tsp']),
    arr(['Preheat oven to 400F (200C). Line a baking sheet with parchment paper.','Pat the thawed edamame completely dry with paper towels — moisture prevents crispiness.','Toss edamame with olive oil, salt, garlic powder and smoked paprika in a bowl until evenly coated.','Spread in a single layer on the baking sheet, leaving space between each bean.','Roast for 18-20 minutes, stirring once halfway, until golden and crispy.','Cool 5 minutes on the baking sheet — they crisp further as they cool.']),
    'These keep for 3 days in an airtight container at room temperature. Re-crisp in a 350F oven for 3 minutes if needed.',
    '烤毛豆', '25 分钟', '1 杯',
    '酥脆坚果味的烤大豆——高蛋白高纤维零食，比坚果更低脂。',
    arr(['去壳冷冻毛豆 2 杯（300 克），解冻','橄榄油 1 汤匙','海盐 半茶匙','蒜粉 半茶匙','烟熏辣椒粉 1/4 茶匙']),
    arr(['烤箱预热 400F（200C），烤盘铺烘焙纸。','用厨房纸彻底吸干解冻毛豆的水分——水分影响酥脆。','碗中用橄榄油、盐、蒜粉和烟熏辣椒粉拌匀毛豆。','平铺烤盘，留间距。','烤 18-20 分钟，中途翻一次，至金黄酥脆。','在烤盘上冷却 5 分钟——冷却后更脆。']),
    '密封室温保存 3 天。不脆可 350F 烤 3 分钟恢复。')

# === VEGETABLES ===
add('v06', 'Sugar Snap Peas', '5 min', '1 cup',
    'A sweet, crunchy vegetable enjoyed raw or lightly cooked — rich in vitamin C and fibre.',
    arr(['Sugar snap peas 1 cup (about 10 pods, washed)','(Optional) sea salt pinch','(Optional) olive oil 1 tsp','(Optional) garlic clove 1, minced']),
    arr(['Wash the snap peas and trim off the stem end and any tough string along the seam.','Serve raw as a crunchy snack, optionally with a pinch of sea salt.','For a quick saute: heat olive oil in a skillet over medium-high heat, add snap peas and minced garlic, and stir-fry for 2-3 minutes until bright green and crisp-tender.','For steaming: place in a steamer basket over boiling water for 2 minutes.']),
    'Snap peas are best enjoyed crisp — do not overcook. Look for bright green, plump pods with no blemishes.',
    '甜脆豆', '5 分钟', '1 杯',
    '爽脆清甜的蔬菜，生食或轻烹皆可——富含维生素C和纤维。',
    arr(['甜脆豆 1 杯（约 10 荚，洗净）','（可选）海盐 少许','（可选）橄榄油 1 茶匙','（可选）蒜 1 瓣，切末']),
    arr(['洗净甜脆豆，去蒂及荚缝硬筋。','生食作为脆爽零食，可撒少许海盐。','快炒：平底锅中大火加油，放入甜脆豆和蒜末翻炒 2-3 分钟至翠绿脆嫩。','蒸制：沸水上方蒸笼蒸 2 分钟。']),
    '甜脆豆以脆为佳——不要过熟。选鲜绿饱满无斑点的豆荚。')

add('v11', 'Kale', '5 min', '1 cup',
    'A nutrient-dense leafy green — massaging with oil tenderises the leaves and reduces bitterness.',
    arr(['Kale 1 cup, stems removed and chopped','Olive oil 1 tsp','Lemon juice 1 tsp','Sea salt pinch','(Optional) nutritional yeast 1 tsp']),
    arr(['Remove the tough centre stems from the kale leaves and discard or save for stock. Finely chop the leaves.','Place chopped kale in a bowl. Add olive oil, lemon juice and a pinch of salt.','Massage the leaves with your hands for 1-2 minutes until they soften, darken slightly and reduce in volume by about half.','Let sit for 5 minutes to allow the acid to further tenderise the leaves.','Sprinkle with nutritional yeast if using and serve.']),
    'Massaging kale is the secret to making it tender enough for raw salads. Lacinato (dinosaur) kale is more tender than curly kale.',
    '羽衣甘蓝', '5 分钟', '1 杯',
    '营养密集的叶菜——按摩揉油可软化叶片并减轻苦味。',
    arr(['羽衣甘蓝 1 杯，去梗切碎','橄榄油 1 茶匙','柠檬汁 1 茶匙','海盐 少许','（可选）营养酵母 1 茶匙']),
    arr(['去除羽衣甘蓝的硬梗（留作高汤用），切碎叶片。','放入碗中，加橄榄油、柠檬汁和少许盐。','用手按摩叶片 1-2 分钟至变软、颜色变深、体积减半。','静置 5 分钟让酸进一步软化。','撒营养酵母（如用）食用。']),
    '按摩是让羽衣甘蓝柔软可生食的秘诀。恐龙羽衣甘蓝比卷边品种更嫩。')

add('v14', 'Roasted Butternut Squash', '35 min', '4',
    'Sweet, caramelised squash with a crispy edge — a comforting autumn side rich in vitamin A and fibre.',
    arr(['Butternut squash 1 medium (about 2 lb / 900 g)','Olive oil 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Maple syrup 1 tsp (optional)','Cinnamon 1/4 tsp (optional)']),
    arr(['Preheat oven to 400F (200C). Line a baking sheet with parchment paper.','Peel the squash with a vegetable peeler, cut in half lengthwise, and scoop out the seeds with a spoon.','Cut the squash into 1-inch cubes.','Toss with olive oil, salt, pepper, maple syrup and cinnamon (if using) in a bowl until evenly coated.','Spread in a single layer on the baking sheet, leaving space between pieces.','Roast for 25-30 minutes, flipping once halfway, until edges are caramelised and the squash is tender when pierced with a fork.']),
    'The skin is edible once roasted if you prefer to skip peeling. For extra caramelisation, roast at 425F.',
    '烤南瓜', '35 分钟', '4 份',
    '焦糖甜香、边缘酥脆的南瓜——秋日暖心配菜，富含维生素A和纤维。',
    arr(['南瓜 1 个（约 900 克）','橄榄油 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','枫糖浆 1 茶匙（可选）','肉桂粉 1/4 茶匙（可选）']),
    arr(['烤箱预热 400F（200C），烤盘铺烘焙纸。','削皮器去皮，纵向切半，勺挖去籽。','切成 3 厘米方块。','碗中用橄榄油、盐、胡椒、枫糖浆和肉桂（如用）拌匀。','平铺烤盘留间距。','烤 25-30 分钟，中途翻面一次，至边缘焦糖化、叉可插入即软。']),
    '烤后皮可食。更焦可 425F 烤。')

add('v15', 'Roasted Beets', '45 min', '4',
    'Earthy, sweet beets with concentrated flavour — roasting intensifies their natural sugars.',
    arr(['Beets 4 medium (about 1.5 lb / 680 g)','Olive oil 1 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) balsamic vinegar 1 tbsp','(Optional) fresh goat cheese 2 tbsp']),
    arr(['Preheat oven to 400F (200C).','Wash beets thoroughly and trim the tops to 1 inch, leaving the root tail intact — this prevents bleeding.','Rub beets with olive oil and season with salt and pepper.','Wrap each beet individually in foil and place on a baking sheet.','Roast for 40-50 minutes until a knife slides easily into the centre.','Cool until handleable, then slip off the skins with your fingers or a paper towel.','Slice or cube and drizzle with balsamic vinegar and crumbled goat cheese if using.']),
    'Wear gloves when handling beets to avoid staining your hands. Golden or chioggia beets are milder and less messy.',
    '烤甜菜根', '45 分钟', '4 份',
    '泥土甜香、风味浓缩的甜菜根——烤制增强天然甜味。',
    arr(['甜菜根 4 个（约 680 克）','橄榄油 1 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','（可选）香醋 1 汤匙','（可选）新鲜山羊芝士 2 汤匙']),
    arr(['烤箱预热 400F（200C）。','彻底洗净甜菜根，顶部留 2 厘米切去，根尾保留——防止渗汁。','抹橄榄油，撒盐和胡椒。','每个单独包锡纸，放烤盘上。','烤 40-50 分钟至刀可轻松插入中心。','冷却至可手触，用手指或厨房纸搓去皮。','切片或切块，淋香醋和山羊芝士（如用）。']),
    '处理甜菜根时戴手套防染色。金黄或奇奥贾甜菜根更温和少染。')

add('v16', 'Roasted Parsnips', '30 min', '4',
    'Sweet, nutty roasted parsnips with caramelised edges — an underappreciated root vegetable worth discovering.',
    arr(['Parsnips 4 medium (about 1 lb / 450 g)','Olive oil 2 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Honey or maple syrup 1 tsp (optional)','Fresh thyme 1 tsp (optional)']),
    arr(['Preheat oven to 425F (220C). Line a baking sheet with parchment paper.','Peel parsnips and cut into 2-inch sticks, similar to thick fries.','Toss with olive oil, salt, pepper, honey and thyme in a bowl until evenly coated.','Spread in a single layer on the baking sheet.','Roast for 20-25 minutes, flipping once halfway, until golden and tender with caramelised edges.','Serve immediately.']),
    'Parsnips become sweeter after a frost — late autumn and winter crops are the best. Remove the woody core if present.',
    '烤欧防风', '30 分钟', '4 份',
    '甜坚果味的焦边烤欧防风——值得发现的根菜。',
    arr(['欧防风 4 根（约 450 克）','橄榄油 2 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','蜂蜜或枫糖浆 1 茶匙（可选）','新鲜百里香 1 茶匙（可选）']),
    arr(['烤箱预热 425F（220C），烤盘铺烘焙纸。','去皮切 5 厘米条状如粗薯条。','碗中用橄榄油、盐、胡椒、蜂蜜和百里香拌匀。','平铺烤盘。','烤 20-25 分钟，中途翻面一次，至金黄软嫩边缘焦糖化。','立即食用。']),
    '霜后欧防风更甜——秋冬产最佳。如有木质芯则去除。')

add('v18', 'Steamed Green Beans', '8 min', '4',
    'Crisp-tender bright green beans — steaming preserves their colour and nutrients better than boiling.',
    arr(['Green beans 8 oz (225 g), trimmed','Water 1 inch','Sea salt 1/4 tsp','(Optional) butter 1 tsp','(Optional) lemon juice 1 tsp']),
    arr(['Trim the stem ends of the green beans and wash them.','Bring 1 inch of water to a boil in a pot with a steamer basket.','Add beans to the steamer basket, cover, and steam for 5-7 minutes until crisp-tender — they should bend but still have a slight snap.','Remove from heat immediately and transfer to a serving bowl to stop the cooking.','Toss with salt, butter and lemon juice if using. Serve hot.']),
    'For the brightest colour, plunge steamed beans into ice water for 30 seconds, then drain. This stops cooking and preserves the green.',
    '蒸四季豆', '8 分钟', '4 份',
    '脆嫩翠绿的四季豆——蒸制比煮更能保色和营养。',
    arr(['四季豆 225 克，去蒂','清水 1 英寸深','海盐 1/4 茶匙','（可选）黄油 1 茶匙','（可选）柠檬汁 1 茶匙']),
    arr(['去蒂洗净四季豆。','锅中加 1 英寸水煮沸，放蒸笼。','放入四季豆盖盖蒸 5-7 分钟至脆嫩——可弯但仍有弹性。','立即离火移至碗中停止烹饪。','拌入盐、黄油和柠檬汁（如用），热食。']),
    '为最翠绿色，蒸后冰水浸泡 30 秒再沥干。此法止烹保色。')

add('v19', 'Steamed Asparagus', '7 min', '4',
    'Tender-crisp asparagus with a clean, grassy flavour — steaming is the gentlest way to cook it.',
    arr(['Asparagus 1 bunch (about 1 lb / 450 g)','Water 1 inch','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) olive oil 1 tsp','(Optional) lemon juice 1 tsp']),
    arr(['Snap off the woody bottom ends of each asparagus spear — they will break naturally at the right point.','Wash the spears and place in a steamer basket over 1 inch of boiling water.','Cover and steam for 4-6 minutes depending on thickness: thin spears 4 min, thick spears 6 min.','Test by piercing the thickest part with a fork — it should slide in with slight resistance.','Remove immediately, season with salt, pepper, olive oil and lemon juice.','Serve hot or at room temperature.']),
    'Choose asparagus with tightly closed tips and firm stalks. Store upright in a glass of water in the fridge for up to 4 days.',
    '蒸芦笋', '7 分钟', '4 份',
    '嫩脆的芦笋配清草味——蒸制是最温和的烹饪方式。',
    arr(['芦笋 1 束（约 450 克）','清水 1 英寸深','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）橄榄油 1 茶匙','（可选）柠檬汁 1 茶匙']),
    arr(['折去每根芦笋底部木质部分——会自然断在对的位置。','洗净放入沸水上方蒸笼中（水深 1 英寸）。','盖盖蒸 4-6 分钟：细的 4 分钟，粗的 6 分钟。','用叉刺最粗处——略有阻力即可。','立即取出，撒盐、胡椒、橄榄油和柠檬汁。','热食或室温食用。']),
    '选笋尖紧闭、茎干硬挺的芦笋。冰箱中竖放水杯内可存 4 天。')

add('v20', 'Steamed Carrots', '8 min', '4',
    'Sweet, tender carrots that retain more nutrients steamed than boiled — a simple and colourful side dish.',
    arr(['Carrots 4 medium (about 1 lb / 450 g)','Water 1 inch','Sea salt 1/4 tsp','(Optional) butter 1 tsp','(Optional) honey 1 tsp','(Optional) fresh dill 1 tsp']),
    arr(['Peel carrots and cut into 2-inch sticks or rounds, about 1/4 inch thick.','Bring 1 inch of water to a boil in a pot with a steamer basket.','Add carrots, cover, and steam for 5-7 minutes until tender but not mushy — a fork should pierce with slight resistance.','Drain any excess water and transfer to a serving bowl.','Toss with salt, butter, honey and dill if using. Serve immediately.']),
    'Rainbow carrots add visual appeal. Baby carrots work but take 1-2 minutes less to steam.',
    '蒸胡萝卜', '8 分钟', '4 份',
    '甜软的胡萝卜——蒸制比煮保留更多营养，简单多彩的配菜。',
    arr(['胡萝卜 4 根（约 450 克）','清水 1 英寸深','海盐 1/4 茶匙','（可选）黄油 1 茶匙','（可选）蜂蜜 1 茶匙','（可选）新鲜莳萝 1 茶匙']),
    arr(['去皮切 5 厘米条或 0.5 厘米圆片。','锅中加 1 英寸水煮沸，放蒸笼。','放入胡萝卜盖盖蒸 5-7 分钟至软但不烂——叉刺略有阻力。','沥去余水移入碗中。','拌入盐、黄油、蜂蜜和莳萝（如用），立即食用。']),
    '彩虹胡萝卜增色。小胡萝卜可用但少蒸 1-2 分钟。')

add('v21', 'Boiled Corn', '10 min', '4 ears',
    'Sweet, juicy corn on the cob — boiling is the classic method that delivers plump, tender kernels.',
    arr(['Fresh corn on the cob 4 ears','Water 4 quarts (enough to cover)','Sea salt 1 tsp','(Optional) butter 2 tbsp','(Optional) black pepper 1/8 tsp']),
    arr(['Husk the corn and remove all silk threads. Break or cut each ear in half if desired.','Bring a large pot of salted water to a rolling boil.','Add the corn and boil for 5-7 minutes — do not overcook or the kernels become starchy and tough.','Remove with tongs and let drain briefly.','Brush with butter and season with salt and pepper if desired. Serve immediately.']),
    'For the sweetest corn, cook it within hours of picking — sugar converts to starch rapidly after harvest.',
    '煮玉米', '10 分钟', '4 根',
    '甜嫩多汁的煮玉米——经典煮法制出饱满软嫩的玉米粒。',
    arr(['新鲜玉米 4 根','清水（没过玉米）','海盐 1 茶匙','（可选）黄油 2 汤匙','（可选）黑胡椒 1/8 茶匙']),
    arr(['剥去玉米皮和须。如需可将每根折或切半。','大锅加盐水大火煮沸。','放入玉米煮 5-7 分钟——不要过熟否则粒变硬粉。','用夹子取出沥水。','刷黄油撒盐和胡椒（如用），立即食用。']),
    '采摘后数小时内煮制最甜——采摘后糖分迅速转为淀粉。')

add('v23', 'Sautéed Spinach', '5 min', '2',
    'Quick-cooked spinach with garlic — a nutrient-dense side that wilts down to concentrate its vitamins.',
    arr(['Fresh baby spinach 6 cups (180 g)','Olive oil 1 tbsp','Garlic 2 cloves, sliced','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) lemon juice 1 tsp','(Optional) red pepper flakes pinch']),
    arr(['Wash spinach if needed and drain well — wet spinach will steam rather than saute.','Heat olive oil in a large skillet or wok over medium heat.','Add sliced garlic and red pepper flakes if using. Cook for 30 seconds until fragrant but not browned.','Add spinach by the handful, tossing with tongs to coat with oil. Add more as each batch wilts.','Cook for 2-3 minutes total until all spinach is wilted but still bright green.','Season with salt, pepper and lemon juice. Serve immediately.']),
    'Spinach reduces dramatically — 6 cups of raw spinach yields about 1 cup cooked. Do not overcook or it becomes mushy.',
    '炒菠菜', '5 分钟', '2 份',
    '蒜香快炒菠菜——营养密集的配菜，炒后浓缩维生素。',
    arr(['新鲜嫩菠菜 6 杯（180 克）','橄榄油 1 汤匙','蒜 2 瓣，切片','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）柠檬汁 1 茶匙','（可选）红辣椒片 少许']),
    arr(['如需洗净沥干——湿菠菜会变蒸而非炒。','大平底锅或炒锅中火加橄榄油。','放入蒜片和红辣椒片（如用），炒 30 秒出香但不焦。','用手抓菠菜分批加入，用夹子翻拌裹油。','共炒 2-3 分钟至全部软塌但仍翠绿。','撒盐、胡椒和柠檬汁，立即食用。']),
    '菠菜大幅缩小——6 杯生菠菜约出 1 杯熟。不要过熟否则变糊。')

add('v25', 'Spaghetti Squash', '40 min', '4',
    'A low-carb vegetable that shreds into noodle-like strands — a fun, nutritious alternative to pasta.',
    arr(['Spaghetti squash 1 medium (about 3 lb / 1.4 kg)','Olive oil 1 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp']),
    arr(['Preheat oven to 400F (200C).','Carefully cut the squash in half lengthwise — microwave for 3 minutes first to soften if needed.','Scoop out the seeds and stringy bits with a spoon.','Rub the cut sides with olive oil and season with salt and pepper.','Place cut-side down on a baking sheet lined with parchment paper.','Roast for 35-40 minutes until the skin gives slightly when pressed.','Flip over and use a fork to scrape the flesh into spaghetti-like strands.','Toss with more oil or sauce and serve.']),
    'Do not overcook or the strands become mushy. The squash is ready when the strands separate easily but still have a slight bite.',
    '金丝瓜', '40 分钟', '4 份',
    '低碳水蔬菜——撕成面条状，是有趣营养的意面替代。',
    arr(['金丝瓜 1 个（约 1.4 公斤）','橄榄油 1 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙']),
    arr(['烤箱预热 400F（200C）。','小心纵向切半——可先微波 3 分钟软化。','勺挖去籽和丝。','切面抹橄榄油，撒盐和胡椒。','切面朝下放在铺烘焙纸的烤盘上。','烤 35-40 分钟至按压外皮微凹。','翻面用叉刮出面条状细丝。','拌油或酱食用。']),
    '不要过熟否则丝变糊。丝易分离但仍有嚼劲即熟。')

add('v26', 'Mashed Turnips', '25 min', '4',
    'Creamy, peppery mashed turnips — a lower-carb alternative to mashed potatoes with a distinctive earthy flavour.',
    arr(['Turnips 4 medium (about 1.5 lb / 680 g)','Butter 2 tbsp','Milk or cream 3 tbsp','Sea salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) garlic clove 1, roasted']),
    arr(['Peel turnips and cut into 1-inch cubes.','Place in a pot and cover with salted water. Bring to a boil.','Boil for 15-20 minutes until very tender when pierced with a fork.','Drain thoroughly and return to the warm pot.','Add butter, milk, salt and pepper. Mash with a potato masher or hand blender until smooth.','Taste and adjust seasoning. Serve hot.']),
    'Turnips have a slightly peppery, bitter edge — a pinch of sugar in the cooking water mellows it. Parsnips can be added for sweetness.',
    '芜菁泥', '25 分钟', '4 份',
    '奶滑微辣的芜菁泥——低碳水替代土豆泥，独特泥土风味。',
    arr(['芜菁 4 个（约 680 克）','黄油 2 汤匙','牛奶或奶油 3 汤匙','海盐 半茶匙','黑胡椒 1/4 茶匙','（可选）蒜 1 瓣，烤制']),
    arr(['去皮切 3 厘米块。','放入锅中加盐水没过，煮沸。','煮 15-20 分钟至叉可轻松穿透。','彻底沥干放回温锅。','加黄油、牛奶、盐和胡椒，用压泥器或搅拌棒压至顺滑。','尝味调整，热食。']),
    '芜菁略带辛辣苦味——煮水中加少许糖可缓和。可加欧防风增甜。')

add('v27', 'Steamed Mixed Vegetables', '10 min', '4',
    'A colourful medley of seasonal vegetables — steaming preserves their individual flavours and nutrients.',
    arr(['Broccoli florets 1 cup','Carrot 1, sliced','Cauliflower florets 1 cup','Green beans 8, trimmed','Water 1 inch','Sea salt 1/4 tsp','(Optional) olive oil 1 tsp','(Optional) lemon juice 1 tsp']),
    arr(['Wash and prepare all vegetables: cut broccoli and cauliflower into florets, slice carrots, trim beans.','Bring 1 inch of water to a boil in a pot with a steamer basket.','Add the harder vegetables first (carrots and cauliflower), cover, and steam for 3 minutes.','Add softer vegetables (broccoli and green beans), cover, and steam for 3-4 more minutes until all are crisp-tender.','Remove from heat, season with salt, olive oil and lemon juice.','Serve immediately.']),
    'Stagger vegetables by hardness — dense roots need more time than leafy greens. Frozen mixed vegetables work too — steam for 5 minutes.',
    '蒸杂菜', '10 分钟', '4 份',
    '多彩时令蔬菜——蒸制保留各自风味和营养。',
    arr(['西兰花小朵 1 杯','胡萝卜 1 根，切片','花椰菜小朵 1 杯','四季豆 8 根，去蒂','清水 1 英寸深','海盐 1/4 茶匙','（可选）橄榄油 1 茶匙','（可选）柠檬汁 1 茶匙']),
    arr(['洗净切备所有蔬菜：西兰花和花椰菜切小朵，胡萝卜切片，四季豆去蒂。','锅中加 1 英寸水煮沸放蒸笼。','先放硬蔬菜（胡萝卜和花椰菜）盖盖蒸 3 分钟。','加入软蔬菜（西兰花和四季豆）盖盖再蒸 3-4 分钟至脆嫩。','离火撒盐、橄榄油和柠檬汁。','立即食用。']),
    '按硬度分批蒸——根类需更长时间。冷冻杂菜也可——蒸 5 分钟。')

add('v28', 'Coleslaw', '10 min', '4',
    'A crisp, creamy cabbage salad — a refreshing side that pairs with everything from burgers to fish.',
    arr(['Green cabbage 4 cups, finely shredded','Carrot 1 large, grated','Mayonnaise 3 tbsp','Apple cider vinegar 1 tbsp','Honey or sugar 1 tsp','Celery seed 1/4 tsp (optional)','Sea salt 1/4 tsp','Black pepper 1/8 tsp']),
    arr(['Finely shred the cabbage with a knife or mandoline. Grate the carrot.','In a small bowl, whisk together mayonnaise, apple cider vinegar, honey, celery seed, salt and pepper.','In a large bowl, combine cabbage and carrot. Pour the dressing over and toss until evenly coated.','Let sit for 10 minutes before serving — the cabbage softens slightly and the flavours meld.','Adjust seasoning to taste. Serve chilled.']),
    'For a lighter version, substitute half the mayo with plain Greek yogurt. Red cabbage adds colour.',
    '凉拌卷心菜', '10 分钟', '4 份',
    '爽脆奶滑的卷心菜沙拉——百搭配菜，从汉堡到鱼皆可。',
    arr(['绿卷心菜 4 杯，切细丝','大胡萝卜 1 根，擦丝','蛋黄酱 3 汤匙','苹果醋 1 汤匙','蜂蜜或糖 1 茶匙','芹菜籽 1/4 茶匙（可选）','海盐 1/4 茶匙','黑胡椒 1/8 茶匙']),
    arr(['用刀或切片器将卷心菜切细丝，胡萝卜擦丝。','小碗混合蛋黄酱、苹果醋、蜂蜜、芹菜籽、盐和胡椒。','大碗混合卷心菜和胡萝卜，倒入酱汁翻拌均匀。','静置 10 分钟后食用——卷心菜略软、味道融合。','按需调盐，冷食。']),
    '更清淡可用希腊酸奶替代一半蛋黄酱。紫甘蓝增色。')

add('v31', 'Seaweed Salad', '5 min', '2',
    'A mineral-rich, umami-packed Japanese side — rehydrated wakame seaweed tossed in a sweet-sesame dressing.',
    arr(['Dried wakame seaweed 2 tbsp','Cucumber 1 small, thinly sliced','Rice vinegar 1 tbsp','Soy sauce 1 tsp','Sesame oil 1 tsp','Sugar 1 tsp','Toasted sesame seeds 1 tsp']),
    arr(['Place dried wakame in a bowl of cold water and soak for 5 minutes until expanded and tender.','Drain and squeeze out excess water. Trim any tough central stems.','In a small bowl, whisk together rice vinegar, soy sauce, sesame oil and sugar until the sugar dissolves.','Combine wakame and cucumber slices in a bowl. Pour dressing over and toss.','Sprinkle with sesame seeds and chill 10 minutes before serving.']),
    'Wakame expands 5-7 times when rehydrated — a little goes a long way. Find it at Asian grocery stores.',
    '海藻沙拉', '5 分钟', '2 份',
    '富含矿物质和鲜味的日式配菜——裙带菜配甜芝麻酱汁。',
    arr(['干裙带菜 2 汤匙','小黄瓜 1 根，切薄片','米醋 1 汤匙','酱油 1 茶匙','麻油 1 茶匙','白糖 1 茶匙','烤芝麻 1 茶匙']),
    arr(['将干裙带菜放入冷水中泡 5 分钟至膨胀变软。','沥干挤去多余水分，去除硬梗。','小碗混合米醋、酱油、麻油和糖至糖溶化。','碗中混合裙带菜和黄瓜片，倒入酱汁拌匀。','撒芝麻，冷藏 10 分钟后食用。']),
    '裙带菜泡发后膨胀 5-7 倍——少量即可。亚洲超市有售。')

add('v34', 'Corn on the Cob', '10 min', '4 ears',
    'Classic boiled corn on the cob — sweet, juicy and satisfying with butter and salt.',
    arr(['Fresh corn 4 ears','Water 4 quarts','Sea salt 1 tsp','Butter 2 tbsp','Black pepper 1/8 tsp']),
    arr(['Husk corn and remove all silk. Optionally break in half.','Bring a large pot of salted water to a boil.','Add corn and boil for 5-7 minutes until kernels are bright yellow and tender.','Remove with tongs, brush with butter, and season with salt and pepper.','Serve immediately while hot.']),
    'Add a tablespoon of sugar to the cooking water for sweeter corn — never add salt as it toughens the kernels.',
    '煮玉米棒', '10 分钟', '4 根',
    '经典煮玉米棒——甜嫩多汁，配黄油和盐。',
    arr(['新鲜玉米 4 根','清水 4 夸脱','海盐 1 茶匙','黄油 2 汤匙','黑胡椒 1/8 茶匙']),
    arr(['剥去玉米皮和须。可折半。','大锅加盐水煮沸。','放入玉米煮 5-7 分钟至粒鲜黄软嫩。','用夹子取出刷黄油撒盐和胡椒。','趁热立即食用。']),
    '煮水中加 1 汤匙糖更甜——切勿加盐因会使粒变硬。')

add('v35', 'Green Peas', '5 min', '1 cup',
    'Sweet, vibrant green peas — a quick-cooking vegetable rich in protein and fibre.',
    arr(['Frozen green peas 1 cup (140 g)','Water 2 tbsp','Sea salt 1/4 tsp','Butter 1 tsp (optional)','Fresh mint 1 tsp chopped (optional)']),
    arr(['Place frozen peas in a small saucepan with 2 tbsp water.','Cover and heat over medium heat for 3-5 minutes, stirring once, until peas are heated through and bright green.','Drain any excess water.','Toss with salt, butter and fresh mint if using.','Serve immediately — peas lose their sweetness as they cool.']),
    'Frozen peas are often sweeter than fresh because they are frozen within hours of picking. Do not overcook.',
    '豌豆', '5 分钟', '1 杯',
    '甜嫩翠绿的豌豆——快煮蔬菜，富含蛋白质和纤维。',
    arr(['冷冻豌豆 1 杯（140 克）','清水 2 汤匙','海盐 1/4 茶匙','黄油 1 茶匙（可选）','新鲜薄荷 1 茶匙，切碎（可选）']),
    arr(['将冷冻豌豆放入小锅中加 2 汤匙水。','盖盖中火加热 3-5 分钟，中途搅拌一次，至热透翠绿。','沥去余水。','拌入盐、黄油和薄荷（如用）。','立即食用——豌豆冷却后甜味降低。']),
    '冷冻豌豆常比新鲜的更甜，因采摘后数小时内速冻。不要过熟。')

add('v36', 'Spinach Dip', '10 min', '4',
    'A creamy, garlicky dip with spinach — a crowd-pleasing appetizer that works with bread or veggie sticks.',
    arr(['Frozen chopped spinach 1 package (10 oz / 280 g), thawed and squeezed dry','Greek yogurt or sour cream 1/2 cup','Mayonnaise 1/4 cup','Garlic 2 cloves, minced','Parmesan cheese 2 tbsp, grated','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) artichoke hearts 2, chopped']),
    arr(['Thaw the spinach and squeeze out as much water as possible using your hands or a clean kitchen towel.','In a bowl, combine the squeezed spinach, yogurt, mayonnaise, garlic, parmesan, salt and pepper.','Stir until well combined. Fold in chopped artichoke hearts if using.','Chill for at least 30 minutes to allow flavours to meld.','Serve with bread cubes, crackers, cucumber slices or carrot sticks.']),
    'Squeezing the spinach dry is critical — wet spinach makes a watery dip. For a warm version, bake at 350F for 15 minutes.',
    '菠菜蘸酱', '10 分钟', '4 份',
    '奶滑蒜香菠菜蘸酱——老少皆宜的开胃菜，配面包或蔬菜条。',
    arr(['冷冻碎菠菜 1 包（280 克），解冻挤干','希腊酸奶或酸奶油 120 毫升','蛋黄酱 60 毫升','蒜 2 瓣，切末','帕玛森芝士 2 汤匙，擦丝','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）洋蓟心 2 个，切碎']),
    arr(['解冻菠菜，用手或厨房巾尽量挤干水分。','碗中混合挤干的菠菜、酸奶、蛋黄酱、蒜、帕玛森、盐和胡椒。','搅拌至均匀。拌入洋蓟心（如用）。','冷藏至少 30 分钟让味道融合。','搭配面包块、饼干、黄瓜片或胡萝卜条。']),
    '挤干菠菜是关键——湿菠菜使蘸酱水。热版可 350F 烤 15 分钟。')

add('v37', 'Salsa', '10 min', '4',
    'A fresh, zesty tomato salsa — far better than store-bought and ready in minutes.',
    arr(['Roma tomatoes 4, diced','Red onion 1/4 cup, finely diced','Jalapeño 1, seeded and minced','Fresh cilantro 2 tbsp, chopped','Lime juice 2 tbsp','Sea salt 1/2 tsp','Garlic clove 1, minced']),
    arr(['Dice the tomatoes and place in a bowl. For a chunkier salsa, keep the seeds; for smoother, remove them.','Add the diced onion, minced jalapeño, cilantro, garlic and lime juice.','Stir to combine and season with salt.','Let sit for 10 minutes before serving to allow the flavours to develop.','Adjust lime and salt to taste. Serve with tortilla chips or over eggs, tacos or grilled fish.']),
    'For a smoky salsa, char the tomatoes and jalapeño under the broiler for 5 minutes before chopping. Refrigerate up to 3 days.',
    '莎莎酱', '10 分钟', '4 份',
    '清新番茄莎莎酱——比市售好得多，几分钟即成。',
    arr(['罗马番茄 4 个，切丁','红洋葱 1/4 杯，切碎','墨西哥辣椒 1 个，去籽切末','新鲜香菜 2 汤匙，切碎','青柠汁 2 汤匙','海盐 半茶匙','蒜 1 瓣，切末']),
    arr(['番茄切丁放入碗中。粗莎莎保留籽，细腻的去除。','加入洋葱末、辣椒末、香菜、蒜和青柠汁。','拌匀调盐。','静置 10 分钟让味道发展。','按需调青柠和盐。配玉米片或淋鸡蛋、塔可、烤鱼。']),
    '烟熏莎莎：番茄和辣椒先在烤架下烤 5 分钟再切。冷藏 3 天。')

add('v38', 'Marinara Sauce', '30 min', '4',
    'A simple, vibrant tomato sauce — the foundation of Italian cooking, made from pantry staples.',
    arr(['Crushed tomatoes 1 can (28 oz / 800 g)','Garlic 3 cloves, minced','Olive oil 2 tbsp','Dried oregano 1 tsp','Dried basil 1 tsp (or fresh basil 2 tbsp)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','(Optional) red pepper flakes pinch','(Optional) onion 1/2, finely diced']),
    arr(['Heat olive oil in a saucepan over medium heat. Add minced garlic (and onion if using) and cook for 2 minutes until fragrant and soft.','Add dried oregano and red pepper flakes if using. Stir for 30 seconds.','Pour in the crushed tomatoes. Add salt, pepper and dried basil.','Bring to a gentle simmer, then reduce heat to low.','Cover partially and simmer for 20-25 minutes, stirring occasionally, until the sauce thickens slightly.','Stir in fresh basil if using. Taste and adjust seasoning.','Use immediately or cool and store.']),
    'A pinch of sugar balances acidity if the tomatoes are tart. This sauce freezes beautifully for up to 3 months.',
    '番茄酱', '30 分钟', '4 份',
    '简单的鲜番茄酱——意大利菜的基础，用储藏室常备材料。',
    arr(['碎番茄罐头 1 罐（800 克）','蒜 3 瓣，切末','橄榄油 2 汤匙','干牛至 1 茶匙','干罗勒 1 茶匙（或新鲜罗勒 2 汤匙）','海盐 半茶匙','黑胡椒 1/4 茶匙','（可选）红辣椒片 少许','（可选）洋葱 半个，切碎']),
    arr([' saucepan 中火加橄榄油，放入蒜末（和洋葱如用）炒 2 分钟出香变软。','加干牛至和红辣椒片（如用）搅拌 30 秒。','倒入碎番茄，加盐、胡椒和干罗勒。','小火慢煮，盖半盖。','炖 20-25 分钟，偶尔搅拌，至酱汁略浓。','拌入新鲜罗勒（如用），尝味调整。','立即使用或冷却保存。']),
    '番茄偏酸可加少许糖平衡。冷冻可存 3 个月。')

add('v39', 'Chimichurri', '10 min', '6',
    'A vibrant, herbaceous Argentine sauce — perfect drizzled over grilled steak, chicken or fish.',
    arr(['Fresh parsley 1 cup, packed','Fresh oregano 2 tbsp (or 1 tsp dried)','Garlic 3 cloves','Red wine vinegar 3 tbsp','Olive oil 1/3 cup (80 ml)','Sea salt 1/2 tsp','Black pepper 1/4 tsp','Red pepper flakes 1/4 tsp (optional)']),
    arr(['Finely chop the parsley and oregano (or pulse in a food processor). Mince the garlic.','In a bowl, combine the herbs, garlic, red wine vinegar, salt, pepper and red pepper flakes.','Slowly drizzle in the olive oil while whisking, creating a slightly emulsified sauce.','Let sit for at least 15 minutes before serving — the flavours meld and the garlic mellows.','Stir before serving. Drizzle over grilled meats or use as a marinade.']),
    'Chimichurri is best made ahead — it improves after a few hours and keeps for 5 days refrigerated.',
    '阿根廷青酱', '10 分钟', '6 份',
    '清新草本阿根廷酱——淋在烤牛排、鸡肉或鱼上绝佳。',
    arr(['新鲜欧芹 1 杯，压实','新鲜牛至 2 汤匙（或干 1 茶匙）','蒜 3 瓣','红酒醋 3 汤匙','橄榄油 80 毫升','海盐 半茶匙','黑胡椒 1/4 茶匙','红辣椒片 1/4 茶匙（可选）']),
    arr(['切碎欧芹和牛至（或料理机打碎），蒜切末。','碗中混合香草、蒜、红酒醋、盐、胡椒和红辣椒片。','边搅边慢慢淋入橄榄油，形成微乳化的酱汁。','静置至少 15 分钟——味道融合、蒜味柔和。','食用前搅拌。淋在烤肉上或作腌料。']),
    '提前制作更佳——数小时后更佳，冷藏 5 天。')

# === CARBS ===
add('c01', 'Steamed Taro', '25 min', '4',
    'A starchy, slightly sweet root vegetable — steaming reveals its creamy, potato-like texture.',
    arr(['Taro root 1 lb (450 g)','Water for steaming','Sea salt 1/2 tsp']),
    arr(['Wear gloves to peel taro — its skin can cause itching. Peel and cut into 1-inch cubes.','Place taro in a steamer basket over boiling water.','Cover and steam for 20-25 minutes until a fork pierces easily.','Season with salt and serve hot.']),
    'Never eat raw taro — it contains calcium oxalate crystals that cause throat irritation. Always cook thoroughly.',
    '蒸芋头', '25 分钟', '4 份',
    '淀粉微甜的根菜——蒸制展现奶油般土豆质感。',
    arr(['芋头 450 克','清水（蒸用）','海盐 半茶匙']),
    arr(['戴手套去皮——芋头皮可致痒。切 3 厘米块。','放入沸水上方蒸笼中。','盖盖蒸 20-25 分钟至叉可轻松穿透。','撒盐热食。']),
    '切勿生食芋头——含草酸钙结晶刺激喉咙。必须完全煮熟。')

add('c02', 'Boiled Cassava', '25 min', '4',
    'A dense, calorie-rich tuber — boiled cassava has a fluffy texture similar to potatoes but slightly sweet.',
    arr(['Cassava root 1 lb (450 g)','Water for boiling','Sea salt 1 tsp']),
    arr(['Peel the cassava deeply — remove both the outer waxy skin and the inner pinkish layer. Cut into 3-inch chunks.','Place in a pot, cover with water and add salt. Bring to a boil.','Boil for 15-20 minutes until fork-tender and the fibrous core can be easily removed.','Drain and remove any tough stringy core from each piece.','Serve hot with butter or olive oil.']),
    'Cassava must be peeled and cooked thoroughly — raw cassava contains cyanogenic compounds. Never eat it raw.',
    '煮木薯', '25 分钟', '4 份',
    '高热量密度的块根——煮木薯口感蓬松如土豆但略甜。',
    arr(['木薯 450 克','清水（煮用）','海盐 1 茶匙']),
    arr(['深剥木薯——去除外蜡皮和内层粉皮。切 8 厘米段。','放入锅中加水加盐煮沸。','煮 15-20 分钟至叉可插入且纤维芯可轻松去除。','沥去每块中的硬丝芯。','配黄油或橄榄油热食。']),
    '木薯必须去皮煮熟——生木薯含氰苷。切勿生食。')

add('c03', 'Steamed Yam', '25 min', '4',
    'A creamy, sweet tuber — yams are denser and drier than sweet potatoes, with a distinctive earthy flavour.',
    arr(['Yam 1 lb (450 g)','Water for steaming','Sea salt 1/2 tsp']),
    arr(['Peel the yam and cut into 1-inch rounds or cubes.','Place in a steamer basket over boiling water.','Cover and steam for 20-25 minutes until a fork pierces easily.','Season with salt and serve hot with butter or oil.']),
    'True yams have dark brown, bark-like skin and white or purple flesh. They are different from sweet potatoes.',
    '蒸山药', '25 分钟', '4 份',
    '奶滑微甜的块根——山药比红薯更密实干燥，独特泥土风味。',
    arr(['山药 450 克','清水（蒸用）','海盐 半茶匙']),
    arr(['去皮切 3 厘米段或块。','放入沸水上方蒸笼中。','盖盖蒸 20-25 分钟至叉可轻松穿透。','撒盐配黄油或油热食。']),
    '真山药外皮棕褐似树皮，肉白或紫。与红薯不同。')

add('c04', 'Plantain', '15 min', '2',
    'A starchy banana relative — plantains are cooked, not eaten raw, and make a satisfying side dish.',
    arr(['Ripe plantain 1 (skin mostly black)','Olive oil or coconut oil 1 tbsp','Sea salt pinch']),
    arr(['Cut off both ends of the plantain and score the peel lengthwise. Remove the peel.','Slice the plantain diagonally into 1/2-inch thick ovals.','Heat oil in a skillet over medium heat.','Fry slices for 2-3 minutes per side until golden and caramelised.','Drain on paper towels and sprinkle with salt. Serve warm.']),
    'Green plantains are starchy like potatoes — use for tostones. Ripe (black-skinned) ones are sweet — use for maduros.',
    '大蕉', '15 分钟', '2 份',
    '淀粉质香蕉近亲——大蕉需烹饪不可生食，是满足的配菜。',
    arr(['熟大蕉 1 根（皮大部分发黑）','橄榄油或椰子油 1 汤匙','海盐 少许']),
    arr(['切去大蕉两端，纵向划开剥皮。','斜切 1 厘米厚椭圆片。','平底锅中火加油。','每面煎 2-3 分钟至金黄焦糖化。','沥油撒盐，温热食用。']),
    '绿大蕉淀粉质如土豆——做炸大蕉。熟（黑皮）甜——做甜蕉。')

add('c05', 'Boiled Potato', '20 min', '4',
    'A classic, comforting staple — boiled potatoes are fluffy and versatile, ready to absorb butter or herbs.',
    arr(['Potatoes 4 medium (about 1.5 lb / 680 g), Yukon Gold or red','Water for boiling','Sea salt 1 tsp','(Optional) butter 2 tbsp','(Optional) fresh parsley 2 tbsp chopped','(Optional) black pepper 1/4 tsp']),
    arr(['Scrub potatoes clean. Peel if desired, or leave skins on for more nutrients.','Cut into 1.5-inch chunks for faster cooking. Place in a pot and cover with cold salted water.','Bring to a boil, then reduce heat to a simmer.','Cook for 15-20 minutes until a fork slides in easily.','Drain thoroughly. Toss with butter, salt, pepper and parsley if using.','Serve hot.']),
    'Start potatoes in cold water so they heat evenly — dropping them into boiling water makes the outside mushy before the centre is done.',
    '煮土豆', '20 分钟', '4 份',
    '经典舒适主食——煮土豆蓬松百搭，可吸黄油和香草。',
    arr(['土豆 4 个（约 680 克），黄皮或红皮','清水（煮用）','海盐 1 茶匙','（可选）黄油 2 汤匙','（可选）新鲜欧芹 2 汤匙，切碎','（可选）黑胡椒 1/4 茶匙']),
    arr(['刷净土豆。如需去皮，或保留皮以增营养。','切 4 厘米块加速烹饪。放入锅中加冷水没过加盐。','煮沸后转小火。','煮 15-20 分钟至叉可轻松插入。','彻底沥干。拌入黄油、盐、胡椒和欧芹（如用）。','热食。']),
    '冷水起步使受热均匀——直接放入沸水会使外层糊而中心未熟。')

add('c06', 'Mashed Sweet Potato', '25 min', '4',
    'Creamy, naturally sweet mashed sweet potatoes — rich in beta-carotene and vitamin A.',
    arr(['Sweet potatoes 2 lb (900 g)','Butter 2 tbsp','Milk or cream 3 tbsp','Sea salt 1/2 tsp','Cinnamon 1/4 tsp (optional)','Maple syrup 1 tsp (optional)']),
    arr(['Peel sweet potatoes and cut into 1.5-inch chunks.','Place in a pot, cover with water and bring to a boil.','Boil for 15-20 minutes until very tender.','Drain thoroughly and return to the warm pot.','Add butter, milk, salt, cinnamon and maple syrup if using. Mash with a potato masher until smooth.','Taste and adjust seasoning. Serve hot.']),
    'Sweet potatoes are moister than regular potatoes — use less milk than you would for mashed potatoes.',
    '红薯泥', '25 分钟', '4 份',
    '奶滑天然甜的红薯泥——富含β-胡萝卜素和维生素A。',
    arr(['红薯 900 克','黄油 2 汤匙','牛奶或奶油 3 汤匙','海盐 半茶匙','肉桂粉 1/4 茶匙（可选）','枫糖浆 1 茶匙（可选）']),
    arr(['去皮切 4 厘米块。','放入锅中加水没过煮沸。','煮 15-20 分钟至非常软。','彻底沥干放回温锅。','加黄油、牛奶、盐、肉桂和枫糖浆（如用），用压泥器压至顺滑。','尝味调整，热食。']),
    '红薯比普通土豆更湿润——牛奶用量比土豆泥少。')

add('c16', 'Rice-Paper Wrappers', '5 min', '8 wrappers',
    'Thin, translucent Vietnamese wrappers — soak briefly to create pliable wraps for fresh spring rolls.',
    arr(['Round rice-paper wrappers 8 (8.5 inch / 22 cm)','Warm water in a wide shallow pan']),
    arr(['Fill a wide, shallow pan or pie plate with warm water (not hot — hot water makes them tear).','Submerge one rice-paper wrapper in the water for 5-10 seconds until it softens but still has slight resistance — do not over-soak or it becomes sticky and tears.','Remove and lay flat on a damp clean kitchen towel or cutting board.','Add fillings (lettuce, herbs, protein, vermicelli) in the lower third. Fold the bottom up over the filling, fold in the sides, and roll tightly.','Repeat with remaining wrappers. Keep finished rolls under a damp towel to prevent drying.']),
    'If a wrapper tears, double-wrap with a second soaked wrapper. Keep a damp paper towel over the stack of unused wrappers to prevent them from cracking.',
    '米纸', '5 分钟', '8 张',
    '薄而透明的越南春卷皮——浸泡后变软用于包裹鲜春卷。',
    arr(['圆形米纸 8 张（22 厘米）','温水（放入宽浅盘中）']),
    arr(['宽浅盘或派盘中倒入温水（不可热水——热水使皮破裂）。','将一张米纸浸入水中 5-10 秒至变软但仍有微弹——不要泡过久否则变粘破烂。','取出平放在湿厨房巾或砧板上。','在下三分之一处放馅料（生菜、香草、蛋白、粉丝），下边向上折盖馅，两侧折入，紧紧卷起。','重复剩余米纸。做好的卷下垫湿巾防干。']),
    '如破裂可用第二张湿米纸双层包裹。未用米纸堆上盖湿纸巾防裂。')

add('c17', 'Gluten-Free Pasta', '12 min', '2',
    'A versatile pasta alternative made from rice, corn or quinoa flour — cook carefully to avoid mushiness.',
    arr(['Gluten-free pasta 8 oz (225 g)','Water 3 quarts','Sea salt 1 tbsp','Olive oil 1 tsp (optional)']),
    arr(['Bring a large pot of salted water to a rolling boil.','Add the pasta and stir immediately to prevent sticking — gf pasta sticks more than regular.','Cook for 8-12 minutes depending on shape, tasting a piece 2 minutes before the package time. GF pasta goes from firm to mushy quickly.','Drain immediately and rinse briefly with warm water to remove surface starch.','Toss with olive oil to prevent sticking. Sauce immediately.']),
    'GF pasta does not tolerate overcooking — test early and drain as soon as it is al dente. It does not reheat as well as wheat pasta.',
    '无麸质意面', '12 分钟', '2 份',
    '由大米、玉米或藜麦粉制成的百搭意面替代——需小心煮制避免过软。',
    arr(['无麸质意面 225 克','清水 3 夸脱','海盐 1 汤匙','橄榄油 1 茶匙（可选）']),
    arr(['大锅加盐水大火煮沸。','放入意面立即搅拌防粘——无麸面比普通面更易粘。','根据形状煮 8-12 分钟，在包装时间前 2 分钟试吃。无麸面很快从硬变糊。','立即沥干，温水快速冲洗去表面淀粉。','拌橄榄油防粘，立即加酱。']),
    '无麸面不耐过煮——提前试吃，刚有嚼劲即沥干。复热效果不如小麦面。')

add('p44', 'Chickpea Pasta', '10 min', '2',
    'A high-protein, gluten-free pasta made from chickpea flour — it has a slightly nutty flavour and extra protein.',
    arr(['Chickpea pasta 8 oz (225 g)','Water 3 quarts','Sea salt 1 tbsp','Olive oil 1 tsp (optional)']),
    arr(['Bring a large pot of salted water to a boil.','Add chickpea pasta and stir well — it produces more foam than regular pasta, so keep the heat slightly reduced.','Cook for 8-10 minutes, tasting 1 minute before the package time. It should be al dente with a slight bite.','Drain and rinse briefly with warm water.','Toss with olive oil and sauce immediately.']),
    'Chickpea pasta creates a lot of foam — do not walk away while cooking or it may boil over. It has about 3x the protein of regular pasta.',
    '鹰嘴豆意面', '10 分钟', '2 份',
    '由鹰嘴豆粉制成的高蛋白无麸意面——略带坚果味和额外蛋白质。',
    arr(['鹰嘴豆意面 225 克','清水 3 夸脱','海盐 1 汤匙','橄榄油 1 茶匙（可选）']),
    arr(['大锅加盐水煮沸。','放入意面搅拌——比普通面产生更多泡沫，略微调小火。','煮 8-10 分钟，包装时间前 1 分钟试吃。应有嚼劲。','沥干温水快速冲洗。','拌橄榄油立即加酱。']),
    '鹰嘴豆意面泡沫多——不可离锅否则溢出。蛋白质约为普通面的 3 倍。')

add('p45', 'Lentil Pasta', '10 min', '2',
    'A protein-rich, gluten-free pasta made from red or green lentil flour — quick-cooking with an earthy flavour.',
    arr(['Lentil pasta 8 oz (225 g)','Water 3 quarts','Sea salt 1 tbsp','Olive oil 1 tsp (optional)']),
    arr(['Bring a large pot of salted water to a boil.','Add lentil pasta and stir immediately to prevent sticking.','Cook for 7-9 minutes, testing 1 minute before the package time. Lentil pasta cooks faster than wheat pasta.','Drain and rinse briefly with warm water to remove starch.','Toss with olive oil and your favourite sauce.']),
    'Lentil pasta can become mealy if overcooked — err on the side of al dente. It works best with robust sauces like marinara or pesto.',
    '扁豆意面', '10 分钟', '2 份',
    '由红或绿扁豆粉制成的高蛋白无麸意面——快熟，泥土风味。',
    arr(['扁豆意面 225 克','清水 3 夸脱','海盐 1 汤匙','橄榄油 1 茶匙（可选）']),
    arr(['大锅加盐水煮沸。','放入意面立即搅拌防粘。','煮 7-9 分钟，包装时间前 1 分钟试吃。扁豆面比小麦面熟更快。','沥干温水冲洗去淀粉。','拌橄榄油和喜欢的酱。']),
    '过熟会变粉——宁可偏硬。配番茄酱或青酱等浓郁酱最佳。')

add('c18', 'Soba Noodles', '8 min', '2',
    'Japanese buckwheat noodles with a nutty, earthy flavour — serve cold with dipping sauce or hot in broth.',
    arr(['Soba noodles 8 oz (225 g)','Water 3 quarts','(For cold) soy sauce 2 tbsp, mirin 1 tbsp, dashi or water 2 tbsp','(For hot) dashi broth 4 cups','Green onion 1, sliced','Nori seaweed 1 sheet, shredded (optional)']),
    arr(['Bring a large pot of water to a boil. Do not salt the water — soba is cooked in unsalted water.','Add soba noodles and stir gently to separate. Cook for 5-7 minutes until tender but still firm.','Drain and rinse thoroughly under cold running water, rubbing gently to remove excess starch — this gives soba its characteristic smooth texture.','For cold soba: serve on a plate with a small bowl of dipping sauce (soy, mirin, dashi). Dip and slurp.','For hot soba: place in bowls and pour hot dashi broth over. Top with sliced green onion and shredded nori.']),
    'Rinsing soba under cold water is essential — it removes the starch that makes them gummy. 100% buckwheat soba is gluten-free.',
    '荞麦面', '8 分钟', '2 份',
    '日式荞麦面——坚果泥土风味，冷食蘸酱或热汤皆宜。',
    arr(['荞麦面 225 克','清水 3 夸脱','（冷食）酱油 2 汤匙、味醂 1 汤匙、出汁或水 2 汤匙','（热食）出汁高汤 4 杯','葱 1 根，切丝','海苔 1 片，撕丝（可选）']),
    arr(['大锅加水煮沸——不要加盐，荞麦面用无盐水煮。','放入面条轻搅拨散。煮 5-7 分钟至软但仍弹。','沥干冷水彻底冲洗，轻搓去多余淀粉——此步骤赋予荞麦面特有滑润口感。','冷食：装盘配小碗蘸汁（酱油、味醂、出汁），蘸食。','热食：放入碗中倒入热出汁高汤，撒葱丝和海苔丝。']),
    '冷水冲洗荞麦面至关重要——去除使面变粘的淀粉。100% 荞麦面无麸质。')

add('c19', 'Udon Noodles', '8 min', '2',
    'Thick, chewy Japanese wheat noodles — comforting in a hot broth or stir-fried with sauce.',
    arr(['Udon noodles 8 oz (225 g), fresh or dried','Water 3 quarts','(For soup) dashi broth 4 cups','Soy sauce 1 tbsp','Mirin 1 tbsp','Green onion 1, sliced','(Optional) tempura, tofu or egg']),
    arr(['Bring a large pot of water to a boil.','Add udon noodles. Fresh udon needs 2-3 minutes; dried udon needs 7-9 minutes. Stir occasionally.','Drain and rinse briefly with warm water.','For soup: combine dashi broth, soy sauce and mirin in a pot. Bring to a simmer.','Place noodles in bowls, pour hot broth over, and top with sliced green onion and your choice of tempura, tofu or egg.']),
    'Fresh frozen udon has the best texture — it springs back when pressed. Dried udon is more convenient but slightly less chewy.',
    '乌冬面', '8 分钟', '2 份',
    '厚实有嚼劲的日式小麦面——热汤或炒皆舒适。',
    arr(['乌冬面 225 克，鲜或干','清水 3 夸脱','（汤面）出汁高汤 4 杯','酱油 1 汤匙','味醂 1 汤匙','葱 1 根，切丝','（可选）天妇罗、豆腐或鸡蛋']),
    arr(['大锅加水煮沸。','放入乌冬面。鲜面 2-3 分钟，干面 7-9 分钟，偶尔搅拌。','沥干温水略冲。','汤面：锅中混合出汁、酱油和味醂，煮至微沸。','面条放入碗中，倒入热汤，撒葱丝和天妇罗、豆腐或蛋。']),
    '冷冻鲜乌冬口感最佳——按压会弹回。干乌冬更方便但嚼劲略逊。')

add('c20', 'Shirataki Noodles', '5 min', '2',
    'Near-zero-calorie konjac noodles — a low-carb pasta alternative with a neutral taste that absorbs sauce flavours.',
    arr(['Shirataki noodles 2 packages (7 oz / 200 g each)','Water for boiling','(Optional) soy sauce 1 tsp','(Optional) garlic clove 1, minced','(Optional) sesame oil 1 tsp']),
    arr(['Open the packages and drain the water. The noodles may have a slight earthy smell — this is normal and rinsing removes it.','Rinse the noodles thoroughly under cold running water for 30 seconds.','Bring a pot of water to a boil. Add the noodles and boil for 2-3 minutes to improve texture.','Drain well and pat dry with paper towels — dry noodles absorb sauce better.','Heat a dry skillet over medium heat. Add the noodles and stir-fry for 1-2 minutes to remove excess moisture.','Toss with soy sauce, garlic and sesame oil, or use in any pasta or stir-fry recipe.']),
    'Shirataki noodles are made from konjac root and contain almost zero calories and carbs. The key step is boiling and dry-frying to remove their natural water content and improve the rubbery texture.',
    '魔芋丝', '5 分钟', '2 份',
    '近零卡路里的魔芋面——低碳意面替代品，味道中性，能吸收酱汁风味。',
    arr(['魔芋丝 2 包（每包 200 克）','煮沸用水','（可选）酱油 1 茶匙','（可选）蒜 1 瓣，切末','（可选）麻油 1 茶匙']),
    arr(['开包沥干水分。面条可能有轻微泥土味——正常现象，冲洗即可去除。','冷水下彻底冲洗 30 秒。','烧一锅开水，放入面条煮 2-3 分钟改善口感。','沥干用厨房纸吸干——干燥的面条更吸酱汁。','干锅中大火，放入面条炒 1-2 分钟去多余水分。','拌酱油、蒜末和麻油，或用于任何意面或炒菜食谱。']),
    '魔芋丝由魔芋根制成，几乎零卡零碳水。关键步骤是煮和干炒以去除天然水分并改善橡胶般口感。')

# === FATS & FLAVOURS ===
add('f20', 'Pesto', '10 min', '4',
    'A vibrant, herbaceous Italian sauce — fresh basil blended with pine nuts, garlic and Parmesan for a burst of flavour on pasta or vegetables.',
    arr(['Fresh basil leaves 2 cups (packed)','Pine nuts 1/3 cup (or walnuts)','Garlic clove 1','Parmesan cheese 1/2 cup grated','Extra-virgin olive oil 1/2 cup','Sea salt 1/4 tsp','Black pepper 1/8 tsp','Lemon juice 1 tsp (optional)']),
    arr(['Toast the pine nuts in a dry skillet over medium heat for 2-3 minutes until golden and fragrant. Watch closely — they burn easily.','Combine basil, toasted pine nuts, garlic and a pinch of salt in a food processor. Pulse until finely chopped.','With the motor running, slowly drizzle in the olive oil through the feed tube until the mixture forms a smooth paste.','Add the Parmesan cheese and pulse to combine. Season with salt, pepper and lemon juice to taste.','Transfer to a jar and cover with a thin layer of olive oil to prevent browning. Refrigerate up to 5 days.']),
    'Pesto darkens when exposed to air — the olive oil layer preserves the green colour. Use walnuts for a budget option, or sunflower seeds for a nut-free version.',
    '青酱', '10 分钟', '4 份',
    '鲜艳香浓的意式酱——新鲜罗勒与松子、蒜、帕玛森打碎，淋在意面或蔬菜上风味绝佳。',
    arr(['新鲜罗勒叶 2 杯（压紧）','松子 1/3 杯（或核桃）','蒜 1 瓣','帕玛森芝士 半杯，擦丝','特级初榨橄榄油 半杯','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','柠檬汁 1 茶匙（可选）']),
    arr(['干锅中火烘松子 2-3 分钟至金黄出香。注意看——易焦。','食物处理器中放入罗勒、松子、蒜和少许盐，打至细碎。','开机运转中从进料口慢慢淋入橄榄油，打成顺滑酱。','加帕玛森芝士脉冲打匀。用盐、胡椒和柠檬汁调味。','装入瓶中，表面盖一层橄榄油防变色。冷藏 5 天。']),
    '青酱遇空气会变暗——橄榄油层可保绿。核桃是经济替代，葵花籽可做无坚果版。')

add('f21', 'Homemade Vinaigrette', '5 min', '4',
    'A classic oil-and-vinegar emulsion — brighter and healthier than bottled dressings, ready in under a minute.',
    arr(['Extra-virgin olive oil 6 tbsp','Vinegar 2 tbsp (red wine, apple cider or balsamic)','Dijon mustard 1 tsp','Honey 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp']),
    arr(['In a small jar or bowl, combine the vinegar, Dijon mustard, honey, salt and pepper.','Slowly add the olive oil while whisking vigorously (or shaking the jar) until the dressing emulsifies and thickens slightly.','Taste and adjust — more vinegar for tanginess, more honey for sweetness.','Use immediately or store in the jar at room temperature for up to 1 week. Shake before each use.']),
    'The ratio is 3 parts oil to 1 part acid. The mustard acts as an emulsifier to keep the dressing from separating. For a creamier version, add 1 tbsp Greek yogurt.',
    '油醋汁', '5 分钟', '4 份',
    '经典的油醋乳化酱——比瓶装更新鲜更健康，不到一分钟做好。',
    arr(['特级初榨橄榄油 6 汤匙','醋 2 汤匙（红酒醋、苹果醋或黑醋）','第戎芥末 1 茶匙','蜂蜜 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙']),
    arr(['小瓶或碗中混合醋、芥末、蜂蜜、盐和胡椒。','边搅边慢慢加入橄榄油（或盖盖摇瓶），至酱乳化微稠。','试味调整——醋多更酸，蜂蜜多更甜。','立即使用或室温存放 1 周。每次用前摇匀。']),
    '比例为三份油一份酸。芥末起乳化剂作用防止分层。更浓郁可加 1 汤匙希腊酸奶。')

add('f22', 'Tzatziki', '10 min', '4',
    'A refreshing Greek yogurt and cucumber dip — cool, garlicky and tangy, perfect with grilled meats or as a vegetable dip.',
    arr(['Greek yogurt 1 cup (full-fat)','English cucumber 1/2','Garlic clove 1, minced','Lemon juice 1 tbsp','Fresh dill 1 tbsp chopped (or mint)','Extra-virgin olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp']),
    arr(['Grate the cucumber on the coarse side of a box grater.','Place the grated cucumber in a clean kitchen towel and squeeze firmly to remove as much water as possible — this prevents a watery dip.','In a bowl, combine the squeezed cucumber, Greek yogurt, minced garlic, lemon juice, dill, olive oil, salt and pepper.','Stir until smooth and well combined. Taste and adjust seasoning.','Refrigerate for at least 30 minutes before serving to let flavours meld. Keeps 3-4 days refrigerated.']),
    'Removing the cucumber water is the key step — skip it and your dip will be runny by the next day. English cucumbers have fewer seeds and less water than regular ones.',
    '酸奶黄瓜酱', '10 分钟', '4 份',
    '清爽的希腊酸奶黄瓜蘸酱——冰凉、蒜香、微酸，搭配烤肉或蔬菜条极佳。',
    arr(['希腊酸奶 1 杯（全脂）','英式黄瓜 半根','蒜 1 瓣，切末','柠檬汁 1 汤匙','鲜莳萝 1 汤匙，切碎（或薄荷）','特级初榨橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙']),
    arr(['用粗孔刨丝器刨碎黄瓜。','将碎黄瓜放入干净厨房毛巾中用力挤压，尽量去除水分——防止酱变稀。','碗中混合挤干的黄瓜、希腊酸奶、蒜末、柠檬汁、莳萝、橄榄油、盐和胡椒。','搅拌至顺滑均匀。试味调整。','冷藏至少 30 分钟让风味融合。可存 3-4 天。']),
    '去除黄瓜水分是关键——不做的话酱第二天就稀了。英式黄瓜比普通黄瓜籽少水少。')

add('f23', 'Greek Yogurt Dip', '5 min', '4',
    'A simple, protein-rich dip — tangy yogurt brightened with garlic and lemon, ready in minutes for raw vegetables or chips.',
    arr(['Greek yogurt 1 cup','Garlic clove 1, minced','Lemon juice 1 tbsp','Extra-virgin olive oil 1 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) dried dill 1 tsp']),
    arr(['In a small bowl, combine the Greek yogurt, minced garlic, lemon juice, olive oil, salt and pepper.','Whisk until smooth and creamy.','Sprinkle with dried dill if using. Taste and adjust seasoning — more lemon for tanginess, more salt to taste.','Let sit for 5 minutes for the garlic flavour to develop. Serve with vegetables, pita or grilled meats.']),
    'Letting the dip rest briefly mellows the raw garlic. For a thicker dip, strain the yogurt through cheesecloth for 1 hour first.',
    '酸奶蘸酱', '5 分钟', '4 份',
    '简单高蛋白蘸酱——酸奶配蒜和柠檬，几分钟做好，搭配生蔬菜或薯片。',
    arr(['希腊酸奶 1 杯','蒜 1 瓣，切末','柠檬汁 1 汤匙','特级初榨橄榄油 1 茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）干莳萝 1 茶匙']),
    arr(['小碗中混合希腊酸奶、蒜末、柠檬汁、橄榄油、盐和胡椒。','搅拌至顺滑细腻。','撒干莳萝（如用）。试味调整——柠檬多更酸，盐按口味加。','静置 5 分钟让蒜味散发。搭配蔬菜、皮塔饼或烤肉。']),
    '静置片刻可缓和生蒜味。更浓稠可先用纱布沥水 1 小时。')

add('f24', 'Ranch Dip', '5 min', '4',
    'A creamy, herbaceous dip — healthier than bottled ranch with all the classic flavour from Greek yogurt and simple seasonings.',
    arr(['Greek yogurt 1/2 cup','Mayonnaise 2 tbsp (or more yogurt)','Garlic powder 1/2 tsp','Onion powder 1/2 tsp','Dried dill 1 tsp','Dried parsley 1/2 tsp','Sea salt 1/4 tsp','Black pepper 1/8 tsp','(Optional) apple cider vinegar 1 tsp']),
    arr(['In a small bowl, whisk together the Greek yogurt and mayonnaise until smooth.','Add the garlic powder, onion powder, dried dill, dried parsley, salt, pepper and vinegar.','Stir until well combined and no lumps remain. Taste and adjust — more salt or herbs to preference.','Refrigerate for at least 10 minutes before serving to let the dried herbs rehydrate. Keeps 5 days.']),
    'Using mostly Greek yogurt with a little mayo gives the classic ranch flavour with much less fat. The dried herbs rehydrate and intensify after resting.',
    '牧场蘸酱', '5 分钟', '4 份',
    '奶滑香草蘸酱——以希腊酸奶为主，比瓶装牧场酱更健康但风味不减。',
    arr(['希腊酸奶 半杯','蛋黄酱 2 汤匙（或更多酸奶）','蒜粉 半茶匙','洋葱粉 半茶匙','干莳萝 1 茶匙','干欧芹 半茶匙','海盐 1/4 茶匙','黑胡椒 1/8 茶匙','（可选）苹果醋 1 茶匙']),
    arr(['小碗中搅打希腊酸奶和蛋黄酱至顺滑。','加蒜粉、洋葱粉、干莳萝、干欧芹、盐、胡椒和醋。','搅拌至均匀无块。试味调整——盐或香草按喜好加。','冷藏至少 10 分钟让干香草吸水复原。可存 5 天。']),
    '以希腊酸奶为主加少量蛋黄酱，经典牧场风味但脂肪大减。干香草静置后吸水复原更浓郁。')

add('f26', 'Peanut Sauce', '10 min', '4',
    'A rich, savoury-sweet Southeast Asian sauce — creamy peanut butter thinned with soy, lime and a touch of honey for satay or noodles.',
    arr(['Peanut butter 1/2 cup (smooth, natural)','Soy sauce 2 tbsp','Lime juice 1 tbsp (or rice vinegar)','Honey 1 tbsp','Garlic clove 1, minced','Ginger 1 tsp grated','Warm water 3-4 tbsp','Sesame oil 1 tsp','(Optional) sriracha or chili flakes 1/4 tsp']),
    arr(['In a bowl, combine the peanut butter, soy sauce, lime juice, honey, minced garlic and grated ginger.','Whisk together — it will be thick and stiff at first.','Gradually add warm water, 1 tablespoon at a time, whisking until you reach the desired consistency — smooth and pourable but still creamy.','Add sesame oil and sriracha if using. Stir to combine.','Taste and adjust — more soy for saltiness, more honey for sweetness, more lime for brightness.','Use immediately or refrigerate up to 1 week. Reheat gently and thin with water if needed.']),
    'Natural peanut butter (just peanuts and salt) gives the best flavour and texture. For a nut-free version, use sunflower seed butter.',
    '花生酱汁', '10 分钟', '4 份',
    '浓郁咸甜的东南亚酱汁——花生酱配酱油、青柠和蜂蜜调稀，蘸沙爹或拌面皆宜。',
    arr(['花生酱 半杯（顺滑天然）','酱油 2 汤匙','青柠汁 1 汤匙（或米醋）','蜂蜜 1 汤匙','蒜 1 瓣，切末','姜 1 茶匙，磨泥','温水 3-4 汤匙','麻油 1 茶匙','（可选）是拉差或辣椒片 1/4 茶匙']),
    arr(['碗中混合花生酱、酱油、青柠汁、蜂蜜、蒜末和姜末。','搅打——开始很稠很硬。','逐次加 1 汤匙温水搅打至理想稠度——顺滑可倒但仍浓稠。','加麻油和是拉差（如用），搅匀。','试味调整——酱油多更咸，蜂蜜多更甜，青柠多更鲜。','立即使用或冷藏 1 周。需加热微温并加水调稀。']),
    '天然花生酱（仅花生和盐）风味口感最佳。无坚果版可用葵花籽酱。')

add('f27', 'Sesame Dressing', '5 min', '4',
    'A nutty, umami-rich Japanese dressing — toasted sesame oil combined with rice vinegar and soy for a bright, savoury drizzle.',
    arr(['Toasted sesame oil 3 tbsp','Rice vinegar 2 tbsp','Soy sauce 1 tbsp','Honey 1 tsp','Ginger 1/2 tsp grated','Garlic clove 1, grated','Sea salt 1/8 tsp','(Optional) sesame seeds 1 tsp']),
    arr(['In a small jar, combine the sesame oil, rice vinegar, soy sauce, honey, grated ginger, grated garlic and salt.','Cover and shake vigorously until well combined and slightly thickened.','Sprinkle with sesame seeds if using. Taste and adjust — more vinegar for acidity, more soy for saltiness.','Use immediately on salads, steamed vegetables or cold noodles. Store at room temperature up to 1 week.']),
    'Toasted sesame oil has a strong, smoky flavour — a little goes a long way. Do not heat this dressing, as the oil loses its aroma when cooked.',
    '芝麻沙拉酱', '5 分钟', '4 份',
    '坚果香、鲜味浓郁的日式酱——烤芝麻油配米醋和酱油，咸鲜明亮。',
    arr(['烤芝麻油 3 汤匙','米醋 2 汤匙','酱油 1 汤匙','蜂蜜 1 茶匙','姜 半茶匙，磨泥','蒜 1 瓣，磨泥','海盐 1/8 茶匙','（可选）芝麻 1 茶匙']),
    arr(['小瓶中混合芝麻油、米醋、酱油、蜂蜜、姜末、蒜泥和盐。','盖盖用力摇匀至微稠。','撒芝麻（如用）。试味调整——醋多更酸，酱油多更咸。','立即用于沙拉、蒸蔬菜或凉面。室温存放 1 周。']),
    '烤芝麻油烟熏味浓——少量即可。不要加热此酱，油受热会失香。')

add('f28', 'Aioli', '5 min', '4',
    'A garlicky, creamy Mediterranean sauce — mayonnaise elevated with fresh garlic and lemon for a bold, pungent accompaniment.',
    arr(['Mayonnaise 1/2 cup (or Greek yogurt for lighter)','Garlic clove 1, minced or grated to a paste','Lemon juice 1 tsp','Extra-virgin olive oil 1 tsp','Sea salt 1/8 tsp','Black pepper 1/8 tsp','(Optional) fresh parsley 1 tsp chopped']),
    arr(['Mince the garlic, then sprinkle with a pinch of salt and drag the flat of your knife across it repeatedly to form a smooth paste.','In a small bowl, combine the garlic paste, mayonnaise, lemon juice and olive oil.','Whisk until smooth and well blended. Season with salt and pepper.','Add chopped parsley if using. Let rest for 5 minutes for the garlic flavour to infuse.','Serve with fries, grilled meats, fish or vegetables. Refrigerate up to 5 days.']),
    'Making a garlic paste with salt mellows the raw bite. For a more authentic version, whisk 1 egg yolk with the garlic, then slowly emulsify with olive oil — but the mayonnaise shortcut is faster and safer.',
    '蒜蓉蛋黄酱', '5 分钟', '4 份',
    '蒜香浓郁的地中海酱——蛋黄酱配鲜蒜和柠檬提升，浓烈大胆。',
    arr(['蛋黄酱 半杯（或希腊酸奶更轻）','蒜 1 瓣，切末或磨泥','柠檬汁 1 茶匙','特级初榨橄榄油 1 茶匙','海盐 1/8 茶匙','黑胡椒 1/8 茶匙','（可选）鲜欧芹 1 茶匙，切碎']),
    arr(['蒜切末后撒少许盐，用刀面反复刮压成泥。','小碗中混合蒜泥、蛋黄酱、柠檬汁和橄榄油。','搅打至顺滑均匀。用盐和胡椒调味。','加切碎欧芹（如用）。静置 5 分钟让蒜味渗入。','搭配薯条、烤肉、鱼或蔬菜。冷藏 5 天。']),
    '用盐做蒜泥可缓和生蒜辣味。更正宗做法是用蛋黄加蒜慢慢乳化橄榄油——但蛋黄酱更快更安全。')

add('f30', 'Coconut Curry Sauce', '10 min', '4',
    'A fragrant, spiced coconut sauce — Thai curry paste bloomed in oil, then simmered with coconut milk for a rich, versatile curry base.',
    arr(['Coconut milk 1 cup (full-fat, canned)','Red or green curry paste 1-2 tbsp','Garlic clove 1, minced','Ginger 1 tsp grated','Coconut oil 1 tbsp','Fish sauce 1 tsp (optional)','Lime juice 1 tsp','(Optional) cilantro for garnish']),
    arr(['Heat coconut oil in a small saucepan over medium heat.','Add the curry paste and cook for 1-2 minutes, stirring constantly, until fragrant — this "blooms" the spices and releases their flavour.','Add the minced garlic and grated ginger. Cook for 30 seconds more.','Pour in the coconut milk and stir until smooth and the curry paste is fully dissolved.','Bring to a gentle simmer and cook for 3-5 minutes, stirring occasionally, until slightly thickened.','Remove from heat. Add fish sauce and lime juice to taste.','Garnish with cilantro if desired. Use as a sauce for meat, fish, vegetables or rice.']),
    'Bloating the curry paste in oil before adding liquid is essential — it unlocks the complex spice flavours. Adjust the curry paste amount for your preferred heat level.',
    '椰香咖喱酱', '10 分钟', '4 份',
    '香料芬芳的椰奶酱——泰式咖喱酱在油中爆香，再与椰奶同煮成浓郁百搭的咖喱底。',
    arr(['椰奶 1 杯（全脂罐头）','红或绿咖喱酱 1-2 汤匙','蒜 1 瓣，切末','姜 1 茶匙，磨泥','椰油 1 汤匙','鱼露 1 茶匙（可选）','青柠汁 1 茶匙','（可选）香菜装饰']),
    arr(['小锅中火加热椰油。','加咖喱酱炒 1-2 分钟，不停搅至出香——此步骤"唤醒"香料释放风味。','加蒜末和姜末炒 30 秒。','倒入椰奶搅拌至顺滑、咖喱酱完全溶解。','微沸煮 3-5 分钟，偶尔搅至微稠。','离火。加鱼露和青柠汁调味。','按需撒香菜。用于肉、鱼、蔬菜或米饭的酱汁。']),
    '咖喱酱先用油爆香再加液体是关键——释放复合香料风味。咖喱酱量按辣度喜好调整。')

add('f31', 'Gravy', '10 min', '4',
    'A rich, savoury pan sauce — built from meat drippings, thickened with flour and finished with broth for a classic accompaniment.',
    arr(['Pan drippings 2 tbsp (from roasted or fried meat)','All-purpose flour 2 tbsp','Broth 1 cup (chicken, beef or vegetable)','Worcestershire sauce 1 tsp (optional)','Black pepper 1/8 tsp','Sea salt to taste']),
    arr(['After cooking your meat, remove it from the pan and pour off all but 2 tablespoons of drippings.','Place the pan over medium heat.','Sprinkle the flour over the drippings and whisk constantly for 1 minute to cook out the raw flour taste — this is the roux.','Gradually pour in the broth, whisking constantly to prevent lumps.','Continue cooking and whisking for 3-5 minutes until the gravy thickens to your desired consistency.','Add Worcestershire sauce and pepper. Taste and add salt if needed — drippings are already salty.','If the gravy is too thick, add more broth. If too thin, simmer a few more minutes.','Serve hot over meat, mashed potatoes or biscuits.']),
    'The key ratio is equal parts fat and flour. If you do not have enough drippings, supplement with butter. Strain the gravy through a fine sieve for a silky texture.',
    '肉汁', '10 分钟', '4 份',
    '浓郁咸鲜的锅底酱——用肉底汁、面粉增稠、高汤收尾的经典酱汁。',
    arr(['锅底汁 2 汤匙（烤肉或煎肉剩余）','中筋面粉 2 汤匙','高汤 1 杯（鸡、牛或蔬菜）','伍斯特酱 1 茶匙（可选）','黑胡椒 1/8 茶匙','海盐适量']),
    arr(['肉烤好后取出，锅中只留 2 汤匙底汁。','中火加热锅。','撒面粉在底汁上，不停搅 1 分钟炒去生粉味——这就是面糊。','慢慢倒入高汤，不停搅防结块。','继续搅煮 3-5 分钟至理想稠度。','加伍斯特酱和胡椒。试味按需加盐——底汁本身已咸。','太稠加高汤，太稀多煮几分钟。','趁热浇在肉、土豆泥或饼干上。']),
    '关键比例是等量油脂和面粉。底汁不够可用黄油补。过筛可得更丝滑口感。')

# === APPLY IMPROVEMENTS ===
applied = 0
skipped = []
for rid, (en_new, zh_new) in IMPROVEMENTS.items():
    if rid not in id_lines:
        skipped.append(rid)
        continue
    idx = id_lines[rid]
    # Find the en:{...} and zh:{...} lines for this recipe
    # en block starts on the line containing "en:{"
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
        # Remove lines en_start+1 through en_end (the rest of the old en block)
        del lines[en_start+1:en_end+1]
        # Adjust zh indices after deletion
        offset = en_end - en_start
        if zh_start is not None:
            zh_start -= offset
        if zh_end is not None:
            zh_end -= offset
        # Re-find zh after deletion
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