#!/usr/bin/env python3
"""Generate ingredient-recipes.js from compact data tables."""
import json, os, re

ROOT = os.path.dirname(os.path.abspath(__file__))

# Load existing names for duplicate check
existing = set()
for fname in ['data/meals.js','data/new-recipes.js','data/extra-recipes.js']:
    with open(os.path.join(ROOT,fname),encoding='utf-8') as f:
        for m in re.finditer(r"name:\s*'([^']+)'", f.read()):
            existing.add(m.group(1).lower().strip())

# Compact format: (en, zh, cats, emoji, p, f, c, serv_en, serv_zh, ca,fe,na,k,fib,vc, ing_en, ing_zh, steps_en, steps_zh, contains)
# cats: p=protein c=carb v=vegetable f=fat-flavor r=complete
CAT_MAP = {'p':'protein','c':'carb','v':'vegetable','f':'fat-flavor','r':'complete'}
D = []
def a(en,zh,cats,emoji,p,f,c,se,sz,ca,fe,na,k,fi,vc,ie,iz,se2,sz2,cont=None):
    el=en.lower().strip()
    for ex in existing:
        if el==ex or (len(el)>5 and el in ex) or (len(ex)>5 and ex in el):
            if el not in ('toast',): return
    D.append(dict(en=en,zh=zh,cats=[CAT_MAP[x] for x in cats],emoji=emoji,p=p,f=f,c=c,se=se,sz=sz,ca=ca,fe=fe,na=na,k=k,fi=fi,vc=vc,ie=ie,iz=iz,se2=se2,sz2=sz2,cont=cont or []))

# ---- PROTEINS ----
a('Steak','牛排','pr','🥩',26,15,0,'4 oz','110克',20,3,55,350,0,0,'Beef steak 4 oz, Salt, Pepper, Olive oil 1 tsp','牛排 110克，盐，胡椒，橄榄油 1茶匙','Season with salt and pepper. Sear in hot pan 3-4 min per side. Rest 5 min.','调味。热锅每面煎 3-4 分钟。静置 5 分钟。',['beef'])
a('Ground Beef','牛肉末','p','🥩',24,18,0,'4 oz','110克',15,3,75,320,0,0,'Ground beef 4 oz (85% lean)','牛肉末 110克','Brown in skillet over medium-high heat. Drain fat.','中大火炒散。沥油。',['beef'])
a('Beef Burger Patty','牛肉饼','pr','🍔',24,20,2,'1 patty','1个',15,3,300,280,0,0,'Ground beef 4 oz, Salt, Pepper','牛肉末 110克，盐，胡椒','Form patty. Grill or pan-fry 4-5 min per side.','压成饼。每面煎 4-5 分钟。',['beef'])
a('Roast Beef Slices','烤牛肉片','p','🥩',25,10,1,'4 oz','110克',10,2,350,300,0,0,'Roast beef slices 4 oz','烤牛肉片 110克','Serve cold or gently warm.','冷食或加热。',['beef'])
a('Slow-Cooked Shredded Beef','慢炖手撕牛肉','pr','🥩',28,12,3,'1 cup','1杯',20,4,300,400,1,0,'Beef chuck 1 lb, Onion, Garlic, Broth 1 cup, Salt','牛肩 1磅，洋葱，蒜，高汤 1杯，盐','Sear beef. Slow cook with veg and broth 8 hr on low. Shred.','煎牛肉。加菜和高汤慢炖 8 小时。撕丝。',['beef'])
a('Pork Chops','猪排','pr','🥩',26,14,0,'6 oz','170克',20,1,350,420,0,0,'Pork chops 6 oz, Salt, Pepper, Oil','猪排 170克，盐，胡椒，油','Season. Sear 4-5 min per side to 145F. Rest 3 min.','调味。每面煎 4-5 分钟。静置。',['pork'])
a('Ground Pork','猪肉末','p','🥩',22,16,0,'4 oz','110克',12,2,65,330,0,0,'Ground pork 4 oz','猪肉末 110克','Brown in skillet. Drain fat. Season.','炒散。沥油。调味。',['pork'])
a('Pork Sausage','香肠','pf','🌭',18,22,1,'2 links','2根',15,1,700,200,0,0,'Pork sausage 2 links','香肠 2根','Pan-fry or grill 8-10 min turning.','煎或烤 8-10 分钟。',['pork'])
a('Pork Ribs','排骨','pr','🥩',25,20,1,'1 rack','1排',30,2,400,350,0,0,'Pork ribs 1 rack, Dry rub','排骨 1排，干料','Rub spices. Bake 300F covered 2.5 hr. Broil 5 min.','抹料。300°F 盖烤 2.5 小时。再烤 5 分钟。',['pork'])
a('Ham Slices','火腿片','p','🥩',18,5,1,'3 oz','85克',10,1,1200,240,0,0,'Ham slices 3 oz','火腿片 85克','Serve cold or pan-fry briefly.','冷食或略煎。',['pork'])
a('Bacon','培根','pf','🥓',12,42,0,'3 strips','3片',5,1,600,110,0,0,'Bacon 3 strips','培根 3片','Pan-fry medium heat 3-4 min per side. Drain.','中火每面煎 3-4 分钟。沥油。',['pork'])
a('Chicken Breast','鸡胸肉','p','🍗',31,4,0,'6 oz','170克',15,1,90,300,0,0,'Chicken breast 6 oz, Salt, Pepper','鸡胸肉 170克，盐，胡椒','Season. Pan-fry or bake 375F 20-25 min. Rest 5 min.','调味。煎或烤 20-25 分钟。静置。',['chicken'])
a('Chicken Thighs','鸡腿肉','pr','🍗',26,15,0,'6 oz','170克',20,2,90,300,0,0,'Chicken thighs 6 oz, Salt, Pepper','鸡腿肉 170克，盐，胡椒','Season. Skin-side down 8 min, flip 6 min.','调味。皮朝下煎 8 分钟，翻面 6 分钟。',['chicken'])
a('Chicken Drumsticks','鸡腿','pr','🍗',24,14,0,'2 pieces','2只',15,1,80,260,0,0,'Chicken drumsticks 2, Salt, Pepper','鸡腿 2只，盐，胡椒','Season. Bake 400F 35-40 min.','调味。400°F 烤 35-40 分钟。',['chicken'])
a('Ground Chicken','鸡肉末','p','🍗',26,8,0,'4 oz','110克',12,1,90,260,0,0,'Ground chicken 4 oz','鸡肉末 110克','Cook in skillet breaking up. Season.','炒散。调味。',['chicken'])
a('Chicken Wings','鸡翅','pr','🍗',22,18,0,'4 wings','4只',12,1,350,210,0,0,'Chicken wings 4, Salt, Pepper','鸡翅 4只，盐，胡椒','Season. Bake 400F 40-45 min flip halfway.','调味。400°F 烤 40-45 分钟。',['chicken'])
a('Ground Turkey','火鸡肉末','p','🦃',26,8,0,'4 oz','110克',15,2,90,280,0,0,'Ground turkey 4 oz','火鸡肉末 110克','Cook in skillet. Season.','炒散。调味。',['turkey'])
a('Turkey Slices','火鸡片','p','🦃',24,3,1,'4 oz','110克',10,1,900,280,0,0,'Turkey breast slices 4 oz','火鸡片 110克','Serve cold or pan-fry briefly.','冷食或略煎。',['turkey'])
a('Leftover Roast Turkey','烤火鸡','pr','🦃',28,6,0,'6 oz','170克',15,2,90,320,0,0,'Roast turkey 6 oz','烤火鸡 170克','Slice and serve cold or reheat in gravy.','切片冷食或加肉汁加热。',['turkey'])
a('Lamb Chops','羊排','pr','🥩',24,18,0,'4 chops','4根',15,2,70,280,0,0,'Lamb chops 4, Salt, Pepper, Oil','羊排 4根，盐，胡椒，油','Season. Sear 3 min per side. Rest.','调味。每面煎 3 分钟。静置。',['sheep'])
a('Lamb Meatballs','羊肉丸','pr','🧆',22,16,2,'4 pieces','4个',15,3,300,250,0,0,'Ground lamb 4 oz, Onion, Cumin, Egg, Salt','羊肉末 110克，洋葱，孜然，鸡蛋，盐','Mix and form balls. Bake 400F 15-18 min.','拌均揉丸。400°F 烤 15-18 分钟。',['sheep','egg'])
a('Roast Duck','烤鸭','pr','🦆',22,30,0,'6 oz','170克',12,3,400,300,0,0,'Duck 6 oz','鸭肉 170克','Score skin. Pan-fry skin-side 8 min. Roast 400F 12-15 min.','皮划刀。皮朝下煎 8 分钟。400°F 烤 12-15 分钟。',['duck'])
a('Baked Salmon','烤三文鱼','p','🐟',28,12,0,'6 oz','170克',15,1,60,350,0,0,'Salmon 6 oz, Oil, Salt, Lemon','三文鱼 170克，油，盐，柠檬','Brush with oil. Bake 400F 12-15 min. Squeeze lemon.','刷油。400°F 烤 12-15 分钟。挤柠檬。',['fish'])
a('Smoked Salmon','烟熏三文鱼','p','🐟',22,8,0,'3 oz','85克',10,1,900,250,0,0,'Smoked salmon 3 oz','烟熏三文鱼 85克','Serve cold on toast or bagel.','冷食配吐司或贝果。',['fish'])
a('Pan-Fried Haddock','煎鳕鱼','p','🐟',24,5,0,'6 oz','170克',15,1,300,350,0,0,'Haddock 6 oz, Flour, Butter, Salt','鳕鱼 170克，面粉，黄油，盐','Dust with flour. Pan-fry in butter 4-5 min per side.','裹面粉。黄油煎每面 4-5 分钟。',['fish'])
a('Baked Tilapia','烤罗非鱼','p','🐟',23,3,0,'6 oz','170克',10,1,200,320,0,0,'Tilapia 6 oz, Oil, Salt','罗非鱼 170克，油，盐','Brush with oil. Bake 375F 15-20 min.','刷油。375°F 烤 15-20 分钟。',['fish'])
a('Grilled Halibut','烤比目鱼','p','🐟',28,5,0,'6 oz','170克',15,1,250,450,0,0,'Halibut 6 oz, Oil, Salt','比目鱼 170克，油，盐','Brush with oil. Grill 4-5 min per side.','刷油。每面烤 4-5 分钟。',['fish'])
a('Boiled Shrimp','白灼虾','p','🦐',24,1,0,'6 oz','170克',70,2,200,250,0,0,'Shrimp 6 oz, Salt','虾 170克，盐','Boil salted water. Add shrimp 2-3 min until pink. Drain.','盐水煮 2-3 分钟至变粉红。沥乾。',['shellfish'])
a('Pan-Fried Scallops','煎带子','p','🦪',24,3,2,'6 pieces','6个',40,2,300,350,0,0,'Scallops 6, Butter, Salt','带子 6个，黄油，盐','Pat dry. Sear in butter high heat 2 min per side.','拍乾。大火黄油每面煎 2 分钟。',['shellfish'])
a('Steamed Mussels','蒸青口','pr','🦪',20,4,4,'1 lb','1磅',50,6,500,350,0,5,'Mussels 1 lb, Garlic, Wine, Butter','青口 1磅，蒜，白酒，黄油','Sauté garlic in butter with wine. Add mussels, cover 5 min.','蒜黄油加白酒炒。放青口盖蒸 5 分钟。',['shellfish'])
a('Smoked Oysters','烟熏生蚝','p','🦪',12,4,1,'3 oz','85克',40,2,300,150,0,0,'Smoked oysters 3 oz canned','烟熏生蚝 85克罐头','Serve from tin.','开罐即食。',['shellfish'])
a('Scrambled Eggs','炒蛋','p','🍳',12,11,1,'2 eggs','2个',50,2,300,120,0,0,'Eggs 2, Butter 1 tsp, Salt','鸡蛋 2个，黄油 1茶匙，盐','Beat eggs. Melt butter medium-low. Stir until set.','打散。黄油中小火搅至凝固。',['egg'])
a('Fried Eggs','煎蛋','p','🍳',12,12,0,'2 eggs','2个',50,2,300,120,0,0,'Eggs 2, Oil 1 tsp, Salt','鸡蛋 2个，油 1茶匙，盐','Heat oil. Crack eggs. Cook 2-3 min until whites set.','热油。打入鸡蛋。煎 2-3 分钟。',['egg'])
a('Poached Eggs','水波蛋','p','🍳',12,10,1,'2 eggs','2个',50,2,150,130,0,0,'Eggs 2, Vinegar 1 tsp','鸡蛋 2个，醋 1茶匙','Simmer water with vinegar. Create whirlpool. Drop egg. Cook 3 min.','水加醋微沸。搅旋涡打入蛋。煮 3 分钟。',['egg'])
a('Egg Salad','鸡蛋沙拉','pf','🥚',14,12,2,'1/2 cup','半杯',60,2,400,130,1,0,'Eggs 3 boiled, Mayo 2 tbsp, Mustard, Salt','鸡蛋 3个煮熟，蛋黄酱 2汤匙，芥末，盐','Chop eggs. Mix with mayo, mustard, salt.','切碎鸡蛋。拌蛋黄酱芥末盐。',['egg'])
a('Pan-Fried Firm Tofu','煎豆腐','pf','🧈',12,7,3,'1/2 block','半块',200,3,20,180,1,0,'Firm tofu 1/2 block, Oil, Soy sauce','硬豆腐半块，油，生抽','Press and slice. Pan-fry 3-4 min per side. Drizzle soy.','压水切片。每面煎 3-4 分钟。淋生抽。',['soy'])
a('Scrambled Tofu','豆腐炒','pv','🥄',12,6,4,'1 cup','1杯',200,3,300,200,2,5,'Tofu 1/2 block, Turmeric, Nutritional yeast, Oil, Veg','豆腐半块，姜黄，营养酵母，油，蔬菜','Crumble tofu. Sauté with turmeric and yeast 5 min. Add veg.','压碎豆腐。加姜黄酵母炒 5 分钟。加蔬菜。',['soy'])
a('Marinated Tempeh','卤天贝','p','🥢',19,7,5,'3 oz','85克',40,1,80,220,3,0,'Tempeh 3 oz, Soy sauce, Maple, Garlic, Vinegar','天贝 85克，生抽，枫糖，蒜，醋','Slice. Marinate 20 min. Pan-fry 3 min per side.','切片。腌 20 分钟。每面煎 3 分钟。',['soy'])
a('Seitan Strips','面筋条','p','🍖',25,2,4,'3 oz','85克',20,2,300,100,1,0,'Seitan 3 oz, Oil, Soy sauce','面筋 85克，油，生抽','Slice. Pan-fry 2-3 min. Toss with soy.','切条。煎 2-3 分钟。加生抽。',['wheat'])
a('Plant-Based Burger Patty','植物肉饼','pr','🍔',20,12,4,'1 patty','1个',40,3,400,200,3,0,'Plant-based patty 1','植物肉饼 1个','Pan-fry or grill 3-4 min per side.','每面煎或烤 3-4 分钟。',['soy'])
a('Lentils','扁豆','pc','🫘',9,0,20,'1/2 cup','半杯',25,3,5,360,8,2,'Lentils 1/4 cup dry, Water, Salt','扁豆 1/4杯干，水，盐','Rinse. Simmer 20-25 min. Drain.','洗净。煮 20-25 分钟。沥乾。',[])
a('Chickpeas','鹰嘴豆','pc','🫘',7,2,20,'1/2 cup','半杯',40,2,200,280,6,2,'Chickpeas 1/2 cup canned','鹰嘴豆 半杯罐头','Drain and rinse.','沥乾洗净。',[])
a('Black Beans','黑豆','pc','🫘',7,0,20,'1/2 cup','半杯',25,2,300,280,7,0,'Black beans 1/2 cup','黑豆 半杯','Drain and rinse.','沥乾洗净。',[])
a('Kidney Beans','红腰豆','pc','🫘',7,0,20,'1/2 cup','半杯',30,2,300,300,7,1,'Kidney beans 1/2 cup','红腰豆 半杯','Drain and rinse.','沥乾洗净。',[])
a('Navy Beans','白腰豆','pc','🫘',7,0,20,'1/2 cup','半杯',50,2,300,280,6,0,'Navy beans 1/2 cup','白腰豆 半杯','Drain and rinse.','沥乾洗净。',[])
a('Cottage Cheese','茅屋奶酪','pf','🧀',14,4,5,'1/2 cup','半杯',100,1,400,150,0,0,'Cottage cheese 1/2 cup','茅屋奶酪 半杯','Serve as is or top with fruit.','直接食用或加水果。',['dairy'])
a('Cream Cheese','奶油奶酪','f','🧀',3,10,2,'2 tbsp','2汤匙',20,1,300,50,0,0,'Cream cheese 2 tbsp','奶油奶酪 2汤匙','Spread on bread or toast.','涂面包或吐司。',['dairy'])
a('Paneer','印度奶酪','pf','🧀',14,14,2,'3 oz','85克',250,1,300,100,0,0,'Paneer 3 oz','印度奶酪 85克','Pan-fry cubes 2 min per side. Or add to curries.','切块煎 2 分钟。或加入咖喱。',['dairy'])
a('Canned Tuna','金枪鱼罐头','p','🐟',20,1,0,'1 can','1罐',0,1,250,200,0,0,'Canned tuna 1 can drained','金枪鱼罐头 1罐沥乾','Drain. Flake with fork. Season.','沥乾。拨散。调味。',['fish'])
a('Meat Sticks','肉干棒','pf','🍖',14,16,1,'1 stick','1根',10,1,600,120,0,0,'Meat stick 1','肉干棒 1根','Unwrap and eat.','拆开即食。',['beef'])

# ---- VEGETABLES ----
a('Cucumber Slices','黄瓜片','v','🥒',1,0,4,'1 cup','1杯',20,1,10,150,1,5,'Cucumber 1','黄瓜 1根','Slice into rounds.','切圆片。',[])
a('Carrot Sticks','胡萝卜条','v','🥕',1,0,7,'1 cup','1杯',40,1,60,230,3,8,'Carrots 2','胡萝卜 2根','Cut into sticks.','切条。',[])
a('Celery Sticks','芹菜条','v','🥬',0,0,3,'1 cup','1杯',40,1,80,260,2,3,'Celery 2 stalks','芹菜 2根','Cut into sticks.','切条。',[])
a('Bell Pepper Strips','彩椒条','v','🫑',1,0,6,'1 cup','1杯',10,1,5,210,2,120,'Bell pepper 1','彩椒 1个','Slice into strips.','切条。',[])
a('Radish Slices','萝卜片','v','🥬',0,0,4,'1 cup','1杯',25,1,20,180,2,15,'Radishes 5','小红萝卜 5个','Slice thinly.','切薄片。',[])
a('Sugar Snap Peas','甜脆豆','v','🫛',2,0,7,'1 cup','1杯',40,2,10,180,3,40,'Sugar snap peas 1 cup','甜脆豆 1杯','String if needed. Serve raw or blanch 1 min.','去筋。生食或焯水 1 分钟。',[])
a('Cherry Tomatoes','小番茄','v','🍅',1,0,5,'1 cup','1杯',15,1,10,270,2,25,'Cherry tomatoes 1 cup','小番茄 1杯','Wash and serve.','洗净食用。',[])
a('Romaine Lettuce','罗马生菜','v','🥬',1,0,3,'2 cups','2杯',30,1,5,120,2,10,'Romaine 2 cups','罗马生菜 2杯','Chop and wash.','切碎洗净。',[])
a('Spinach (Raw)','菠菜','v','🥬',1,0,4,'2 cups','2杯',60,2,25,170,2,15,'Fresh spinach 2 cups','新鲜菠菜 2杯','Wash. Use in salads or sauté.','洗净。做沙拉或炒。',[])
a('Mixed Salad Greens','混合沙拉菜','v','🥬',1,0,4,'2 cups','2杯',40,1,10,150,2,10,'Mixed greens 2 cups','混合沙拉菜 2杯','Wash and dry.','洗净沥乾。',[])
a('Arugula','芝麻菜','v','🌿',1,0,4,'2 cups','2杯',80,1,5,150,1,15,'Arugula 2 cups','芝麻菜 2杯','Wash and dry.','洗净沥乾。',[])
a('Kale','羽衣甘蓝','v','🥬',2,0,7,'1 cup','1杯',90,1,20,150,1,80,'Kale 1 cup stemmed','羽衣甘蓝 1杯去梗','Remove stems. Massage with oil 1 min.','去梗。加油揉 1 分钟。',[])
a('Roasted Brussels Sprouts','烤球芽甘蓝','v','🥬',3,1,11,'1 cup','1杯',40,1,30,340,4,70,'Brussels sprouts 1 cup, Oil, Salt','球芽甘蓝 1杯，油，盐','Halve. Toss with oil and salt. Roast 400F 20 min.','对半切。拌油盐。400°F 烤 20 分钟。',[])
a('Roasted Carrots','烤胡萝卜','v','🥕',1,2,12,'1 cup','1杯',40,1,60,300,4,8,'Carrots 3, Oil, Salt','胡萝卜 3根，油，盐','Cut into sticks. Toss with oil. Roast 400F 25 min.','切条。拌油。400°F 烤 25 分钟。',[])
a('Roasted Butternut Squash','烤南瓜','v','🎃',1,1,15,'1 cup','1杯',80,1,10,350,4,20,'Butternut squash 1 cup, Oil, Salt','南瓜 1杯，油，盐','Cube. Toss with oil. Roast 400F 30 min.','切块。拌油。400°F 烤 30 分钟。',[])
a('Roasted Beets','烤甜菜根','v','🫛',2,0,13,'1 cup','1杯',20,1,90,420,4,10,'Beets 2, Oil, Salt','甜菜根 2个，油，盐','Wrap in foil. Roast 400F 45-60 min. Peel.','包锡纸。400°F 烤 45-60 分钟。去皮。',[])
a('Roasted Parsnips','烤欧防风','v','🥬',2,1,18,'1 cup','1杯',40,1,20,370,5,15,'Parsnips 3, Oil, Salt','欧防风 3根，油，盐','Cut into sticks. Roast 400F 25 min.','切条。400°F 烤 25 分钟。',[])
a('Steamed Broccoli','蒸西兰花','v','🥦',3,0,6,'1 cup','1杯',50,1,60,300,3,90,'Broccoli 1 cup florets','西兰花 1杯','Steam 4-5 min.','蒸 4-5 分钟。',[])
a('Steamed Green Beans','蒸四季豆','v','🫛',2,0,7,'1 cup','1杯',40,1,5,180,4,10,'Green beans 1 cup','四季豆 1杯','Steam 5 min.','蒸 5 分钟。',[])
a('Steamed Asparagus','蒸芦笋','v','🌿',3,0,5,'1 cup','1杯',30,2,5,270,3,15,'Asparagus 1 cup trimmed','芦笋 1杯','Snap ends. Steam 3-4 min.','去硬头。蒸 3-4 分钟。',[])
a('Steamed Carrots','蒸胡萝卜','v','🥕',1,0,8,'1 cup','1杯',40,1,40,290,3,8,'Carrots 2 sliced','胡萝卜 2根切片','Steam 6-8 min.','蒸 6-8 分钟。',[])
a('Boiled Corn','煮玉米','vc','🌽',4,1,19,'1 ear','1根',2,1,15,250,3,10,'Corn 1 ear','玉米 1根','Boil salted water 5-7 min.','盐水煮 5-7 分钟。',[])
a('Sautéed Mushrooms','炒蘑菇','vf','🍄',3,4,4,'1 cup','1杯',0,1,50,300,1,0,'Mushrooms 1 cup, Butter, Garlic','蘑菇 1杯，黄油，蒜','Melt butter with garlic. Sauté mushrooms 6-8 min.','黄油蒜炒蘑菇 6-8 分钟。',[])
a('Sautéed Spinach','炒菠菜','v','🥬',3,2,4,'1 cup','1杯',120,2,120,500,4,20,'Spinach 4 cups, Oil, Garlic','菠菜 4杯，油，蒜','Heat oil with garlic. Toss spinach 2-3 min.','油蒜炒菠菜 2-3 分钟。',[])
a('Sautéed Zucchini','炒西葫芦','v','🥒',2,2,4,'1 cup','1杯',20,1,10,250,2,15,'Zucchini 1 cup, Oil, Salt','西葫芦 1杯，油，盐','Slice. Sauté 4-5 min.','切片。炒 4-5 分钟。',[])
a('Cauliflower Rice','花菜饭','vc','🍚',2,1,5,'1 cup','1杯',30,1,40,200,2,40,'Cauliflower 1 cup riced, Oil','花菜碎 1杯，油','Sauté in oil 5 min.','加油炒 5 分钟。',[])
a('Spaghetti Squash','金丝瓜','vc','🎃',1,1,7,'1 cup','1杯',40,1,20,180,1,5,'Spaghetti squash 1','金丝瓜 1个','Halve and roast 400F 40 min. Scrape strands.','对半切 400°F 烤 40 分钟。刮丝。',[])
a('Mashed Turnips','芜菁泥','v','🥬',2,1,8,'1 cup','1杯',60,1,250,300,3,20,'Turnips 2, Butter, Salt','芜菁 2个，黄油，盐','Boil 15 min. Drain and mash with butter.','煮 15 分钟。加黄油捣泥。',[])
a('Steamed Mixed Vegetables','蒸混合蔬菜','v','🥬',2,0,8,'1 cup','1杯',40,1,30,280,3,15,'Mixed veg 1 cup','混合蔬菜 1杯','Steam 5 min.','蒸 5 分钟。',[])
a('Coleslaw','凉拌卷心菜','vf','🥗',2,8,8,'1/2 cup','半杯',40,1,150,180,2,15,'Cabbage 1 cup shredded, Carrot, Mayo, Vinegar','卷心菜 1杯丝，胡萝卜，蛋黄酱，醋','Shred. Toss with mayo and vinegar.','切丝。拌蛋黄酱和醋。',['egg'])
a('Simple Green Salad','绿色沙拉','vf','🥗',1,5,3,'1 bowl','1碗',40,1,10,150,2,10,'Greens 2 cups, Olive oil, Lemon, Salt','沙拉菜 2杯，橄榄油，柠檬，盐','Toss with oil, lemon, salt.','拌匀。',[])
a('Greek Salad','希腊沙拉','vfr','🥗',4,12,8,'1 bowl','1碗',80,2,300,280,3,15,'Tomato, Cucumber, Olives, Feta, Olive oil','番茄，黄瓜，橄榄，菲达奶酪，橄榄油','Chop. Toss together.','切块。拌匀。',['dairy'])
a('Seaweed Salad','海藻沙拉','vf','🌿',2,3,6,'1/2 cup','半杯',50,2,400,50,2,5,'Seaweed 1 cup, Sesame oil, Vinegar, Sesame','海藻 1杯，芝麻油，醋，芝麻','Rehydrate if dried. Toss with dressing.','泡发。拌酱料。',['sesame'])
a('Kimchi','泡菜','vf','🌶️',1,0,2,'1/2 cup','半杯',30,2,500,100,2,15,'Kimchi 1/2 cup','泡菜 半杯','Serve as side.','配菜食用。',[])
a('Sauerkraut','酸菜','vf','🥬',1,0,3,'1/2 cup','半杯',20,1,400,150,3,15,'Sauerkraut 1/2 cup','酸菜 半杯','Serve as side.','配菜食用。',[])
a('Corn on the Cob','玉米棒','vc','🌽',4,1,19,'1 ear','1根',2,1,15,250,3,10,'Corn 1 ear, Butter','玉米 1根，黄油','Boil or grill 5-7 min. Spread butter.','煮或烤 5-7 分钟。抹黄油。',[])
a('Steamed Taro','蒸芋头','c','🥔',2,0,20,'1/2 cup','半杯',30,1,15,400,3,5,'Taro 1/2 cup cubed','芋头 半杯','Steam 20 min.','蒸 20 分钟。',[])
a('Boiled Cassava','煮木薯','c','🥔',1,0,38,'1/2 cup','半杯',20,1,10,280,2,15,'Cassava 1/2 cup cubed','木薯 半杯','Boil 20 min.','煮 20 分钟。',[])
a('Steamed Yam','蒸山药','c','🥔',2,0,28,'1/2 cup','半杯',20,1,10,400,2,5,'Yam 1/2 cup cubed','山药 半杯','Steam 25 min.','蒸 25 分钟。',[])
a('Plantain','大蕉','c','🍌',1,0,30,'1/2 cup','半杯',10,1,5,350,2,15,'Plantain 1 sliced','大蕉 1根切片','Pan-fry in oil 2-3 min per side.','加油每面煎 2-3 分钟。',[])
a('Green Peas','豌豆','vc','🫛',4,0,14,'1/2 cup','半杯',25,1,5,110,5,15,'Green peas 1/2 cup','豌豆 半杯','Steam or boil 3-5 min.','蒸或煮 3-5 分钟。',[])

# ---- CARBS ----
a('Baked Potato','烤土豆','c','🥔',3,0,37,'1 medium','1个',30,1,10,900,4,15,'Potato 1','土豆 1个','Prick with fork. Bake 400F 50-60 min.','戳孔。400°F 烤 50-60 分钟。',[])
a('Boiled Potato','煮土豆','c','🥔',3,0,34,'1 medium','1个',30,1,5,900,3,15,'Potato 1','土豆 1个','Boil salted water 15-20 min.','盐水煮 15-20 分钟。',[])
a('Mashed Sweet Potato','红薯泥','c','🍠',2,0,25,'1/2 cup','半杯',40,1,100,450,4,25,'Sweet potato 1 large','红薯 1大个','Bake or steam until tender. Mash.','烤或蒸至软。捣泥。',[])
a('Rice Cakes','米饼','c','🍘',2,1,14,'2 cakes','2片',10,1,30,40,0,0,'Rice cakes 2','米饼 2片','Top as desired.','按需加配料。',[])
a('Rice Crackers','米饼脆','c','🍘',2,1,18,'10 crackers','10片',10,1,80,40,0,0,'Rice crackers 10','米饼脆 10片','Serve with dip.','配酱料。',[])
a('Whole-Wheat Bread','全麦面包','c','🍞',4,2,14,'1 slice','1片',40,1,120,80,2,0,'Whole-wheat bread 1 slice','全麦面包 1片','Toast or serve as is.','烤或直接食用。',['gluten'])
a('Gluten-Free Bread','无麸质面包','c','🍞',2,2,14,'1 slice','1片',20,1,120,60,1,0,'GF bread 1 slice','无麸质面包 1片','Toast or serve as is.','烤或直接食用。',[])
a('Toast','吐司','c','🍞',4,2,14,'1 slice','1片',40,1,120,80,2,0,'Bread 1 slice','面包 1片','Toast until golden.','烤至金黄。',['gluten'])
a('Flour Tortilla','面粉卷饼','c','🫓',3,3,18,'1 piece','1张',20,1,200,60,1,0,'Flour tortilla 1','面粉卷饼 1张','Warm in dry pan 10 sec.','干锅加热 10 秒。',['gluten'])
a('Corn Tortilla','玉米饼','c','🫓',2,1,12,'1 piece','1张',20,1,15,40,1,0,'Corn tortilla 1','玉米饼 1张','Warm in dry pan 15 sec.','干锅加热 15 秒。',[])
a('Pita Bread','皮塔饼','c','🫓',3,1,16,'1 piece','1个',20,1,250,80,1,0,'Pita 1','皮塔饼 1个','Warm. Cut and stuff.','加热。切开夹馅。',['gluten'])
a('Bagel','贝果','c','🥯',5,2,35,'1 piece','1个',40,2,400,80,2,0,'Bagel 1','贝果 1个','Toast if desired. Split and top.','可烤。切开加料。',['gluten'])
a('Rice-Paper Wrappers','米纸','c','🫓',0,0,20,'2 sheets','2张',10,0,15,20,0,0,'Rice paper 2','米纸 2张','Soak in warm water 5 sec. Fill and roll.','温水泡 5 秒。包卷。',[])
a('Gluten-Free Pasta','无麸质意面','c','🍝',3,1,42,'1 cup','1杯',10,1,10,40,2,0,'GF pasta 1 cup, Salt','无麸质意面 1杯，盐','Boil per package. Drain.','按包装煮。沥乾。',[])
a('Chickpea Pasta','鹰嘴豆意面','pc','🍝',14,3,35,'1 cup','1杯',30,3,15,120,8,0,'Chickpea pasta 1 cup, Salt','鹰嘴豆意面 1杯，盐','Boil 8-10 min. Drain.','煮 8-10 分钟。沥乾。',[])
a('Lentil Pasta','扁豆意面','pc','🍝',13,1,35,'1 cup','1杯',25,3,10,100,8,0,'Lentil pasta 1 cup, Salt','扁豆意面 1杯，盐','Boil 8-10 min. Drain.','煮 8-10 分钟。沥乾。',[])
a('Soba Noodles','荞麦面','c','🍜',8,1,24,'1 cup','1杯',20,1,200,100,2,0,'Soba 1 bundle, Salt','荞麦面 1束，盐','Boil 4-5 min. Rinse cold.','煮 4-5 分钟。过冷水。',['gluten'])
a('Udon Noodles','乌冬面','c','🍜',4,1,40,'1 cup','1杯',10,1,300,50,1,0,'Udon 1 pack, Salt','乌冬面 1包，盐','Boil 8-10 min. Drain.','煮 8-10 分钟。沥乾。',['gluten'])
a('Shirataki Noodles','魔芋面','c','🍜',0,0,3,'1 cup','1杯',20,0,5,10,1,0,'Shirataki 1 pack','魔芋面 1包','Rinse well. Pan-fry dry 2 min. Add sauce.','冲洗。乾炒 2 分钟。加酱。',[])
a('Apple','苹果','c','🍎',0,0,25,'1 medium','1个',15,1,5,260,4,10,'Apple 1','苹果 1个','Wash and eat.','洗净食用。',[])
a('Pear','梨','c','🍐',0,0,25,'1 medium','1个',15,1,5,240,5,10,'Pear 1','梨 1个','Wash and eat.','洗净食用。',[])
a('Banana','香蕉','c','🍌',1,0,27,'1 medium','1根',5,1,25,430,3,10,'Banana 1','香蕉 1根','Peel and eat.','剥皮食用。',[])
a('Orange','橙子','c','🍊',1,0,18,'1 medium','1个',60,1,50,250,3,80,'Orange 1','橙子 1个','Peel and eat.','剥皮食用。',[])
a('Mandarin','橘子','c','🍊',1,0,15,'2 small','2个',40,1,40,200,2,50,'Mandarin 2','橘子 2个','Peel and eat.','剥皮食用。',[])
a('Kiwi','猕猴桃','c','🥝',1,0,15,'2 pieces','2个',50,1,5,450,4,80,'Kiwi 2','猕猴桃 2个','Cut in half. Scoop.','对半切。挖食。',[])
a('Mango','芒果','c','🥭',1,0,25,'1/2','半个',15,1,5,200,3,40,'Mango 1/2','芒果 半个','Cut around pit. Score and scoop.','沿核切。划花刀挖肉。',[])
a('Pineapple','菠萝','c','🍍',1,0,22,'1 cup','1杯',20,1,10,230,2,80,'Pineapple 1 cup cubed','菠萝 1杯','Cut into chunks.','切块。',[])
a('Watermelon','西瓜','c','🍉',1,0,11,'1 cup','1杯',10,1,15,180,1,15,'Watermelon 1 cup','西瓜 1杯','Cut into chunks.','切块。',[])
a('Cantaloupe','哈密瓜','c','🍈',1,0,13,'1 cup','1杯',15,1,15,270,1,60,'Cantaloupe 1 cup','哈密瓜 1杯','Cut into chunks.','切块。',[])
a('Grapes','葡萄','c','🍇',1,0,16,'1 cup','1杯',15,1,5,290,1,5,'Grapes 1 cup','葡萄 1杯','Wash and eat.','洗净食用。',[])
a('Cherries','樱桃','c','🍒',1,0,18,'1 cup','1杯',15,1,10,350,3,10,'Cherries 1 cup','樱桃 1杯','Wash and pit if desired.','洗净。可去核。',[])
a('Peaches','桃子','c','🍑',1,0,14,'1 medium','1个',5,1,5,190,2,10,'Peach 1','桃子 1个','Wash and eat.','洗净食用。',[])
a('Dried Apricots','杏干','c','🟠',1,0,20,'4 halves','4片',15,1,10,300,2,2,'Dried apricots 4','杏干 4片','Eat as snack.','当零食。',[])
a('Raisins','葡萄干','c','🍇',1,0,22,'1/4 cup','1/4杯',20,1,10,300,1,2,'Raisins 1/4 cup','葡萄干 1/4杯','Snack or add to oatmeal.','零食或加入燕麦。',[])
a('Dates','椰枣','c','🌴',1,0,40,'3 pieces','3颗',15,1,5,240,3,0,'Dates 3','椰枣 3颗','Eat as is or stuff with nut butter.','直接食用或夹坚果酱。',[])
a('Prunes','西梅干','c','🟣',1,0,20,'3 pieces','3颗',15,1,5,200,3,2,'Prunes 3','西梅干 3颗','Eat as snack.','当零食。',[])
a('Roasted Edamame','烤毛豆','pc','🫛',14,6,12,'1/2 cup','半杯',100,4,30,400,8,10,'Edamame 1/2 cup, Oil, Salt','毛豆仁 半杯，油，盐','Toss with oil and salt. Roast 400F 20 min.','拌油盐。400°F 烤 20 分钟。',['soy'])
a('Roasted Chickpeas','烤鹰嘴豆','pcf','🫘',7,3,20,'1/2 cup','半杯',40,2,150,250,6,5,'Chickpeas 1/2 cup, Oil, Salt, Spices','鹰嘴豆 半杯，油，盐，香料','Drain and pat dry. Toss with spices. Roast 400F 25 min.','沥乾拍乾。拌香料。400°F 烤 25 分钟。',[])
a('Unsweetened Applesauce','无糖苹果酱','c','🍎',0,0,14,'1/2 cup','半杯',10,1,5,100,2,15,'Applesauce 1/2 cup','苹果酱 半杯','Serve as is.','直接食用。',[])
a('Plain Popcorn','原味爆米花','c','🍿',3,1,19,'3 cups','3杯',3,1,1,80,4,0,'Popcorn kernels 2 tbsp','爆米花玉米粒 2汤匙','Pop in air popper or stovetop.','爆开。',[])
a('Pretzels','椒盐脆饼','c','🥨',2,1,22,'10 pieces','10个',10,1,350,80,1,0,'Pretzels 10','椒盐脆饼 10个','Serve as snack.','当零食。',['gluten'])

# ---- FAT & FLAVOR ----
a('Almonds','杏仁','f','🌰',6,14,6,'1 oz','28克',75,1,0,200,3,0,'Almonds 1 oz','杏仁 28克','Eat as snack or add to salads.','零食或加沙拉。',['nuts'])
a('Pecans','碧根果','f','🌰',1,20,4,'1 oz','28克',20,1,0,120,3,0,'Pecans 1 oz','碧根果 28克','Eat as snack.','当零食。',['nuts'])
a('Cashews','腰果','f','🌰',5,13,9,'1 oz','28克',10,2,15,180,1,0,'Cashews 1 oz','腰果 28克','Snack or add to stir-fries.','零食或入炒菜。',['nuts'])
a('Pistachios','开心果','f','🌰',6,13,8,'1 oz','28克',30,1,130,290,3,0,'Pistachios 1 oz','开心果 28克','Eat as snack.','当零食。',['nuts'])
a('Brazil Nuts','巴西坚果','f','🌰',2,19,3,'1 oz','28克',50,1,0,200,2,0,'Brazil nuts 1 oz','巴西坚果 28克','Eat 1-2 per day.','每天 1-2 粒。',['nuts'])
a('Hazelnuts','榛子','f','🌰',4,17,5,'1 oz','28克',30,1,0,190,3,0,'Hazelnuts 1 oz','榛子 28克','Eat as snack.','当零食。',['nuts'])
a('Pine Nuts','松子','f','🌰',4,19,4,'1 oz','28克',5,1,1,170,1,0,'Pine nuts 1 oz','松子 28克','Toast 2 min. Use in pesto.','干锅烤 2 分钟。做青酱。',['nuts'])
a('Mixed Nuts','综合坚果','f','🌰',5,16,6,'1 oz','28克',40,1,100,200,3,0,'Mixed nuts 1 oz','综合坚果 28克','Eat as snack.','当零食。',['nuts'])
a('Pumpkin Seeds','南瓜籽','f','🎃',5,13,5,'1 oz','28克',35,2,10,230,2,0,'Pumpkin seeds 1 oz','南瓜籽 28克','Eat raw or toast 3 min.','生食或烤 3 分钟。',[])
a('Sunflower Seeds','葵花籽','f','🌻',3,14,6,'1 oz','28克',20,1,1,180,2,0,'Sunflower seeds 1 oz','葵花籽 28克','Eat raw or toast lightly.','生食或稍烤。',[])
a('Chia Seeds','奇亚籽','f','🟤',2,4,10,'1 tbsp','1汤匙',60,1,0,50,5,0,'Chia seeds 1 tbsp','奇亚籽 1汤匙','Soak in liquid 15 min.','泡 15 分钟。',[])
a('Ground Flaxseed','亚麻籽粉','f','🟤',2,3,4,'1 tbsp','1汤匙',20,1,3,70,2,0,'Ground flaxseed 1 tbsp','亚麻籽粉 1汤匙','Add to oatmeal or smoothies.','加入燕麦或思慕雪。',[])
a('Hemp Hearts','火麻仁','f','🟢',3,1,1,'1 tbsp','1汤匙',15,1,0,80,0,0,'Hemp hearts 1 tbsp','火麻仁 1汤匙','Sprinkle on dishes.','撒在菜上。',[])
a('Sesame Seeds','芝麻','f','⚪',2,5,2,'1 tbsp','1汤匙',10,1,1,50,1,0,'Sesame seeds 1 tbsp','芝麻 1汤匙','Toast 1-2 min. Sprinkle.','烤 1-2 分钟。撒上。',['sesame'])
a('Peanut Butter','花生酱','f','🥜',4,8,3,'1 tbsp','1汤匙',10,0,80,100,1,0,'Peanut butter 1 tbsp','花生酱 1汤匙','Spread on bread or apple.','涂面包或苹果。',['nuts'])
a('Almond Butter','杏仁酱','f','🥜',3,9,3,'1 tbsp','1汤匙',40,1,40,60,1,0,'Almond butter 1 tbsp','杏仁酱 1汤匙','Spread on toast.','涂吐司。',['nuts'])
a('Cashew Butter','腰果酱','f','🥜',2,8,4,'1 tbsp','1汤匙',10,1,10,50,0,0,'Cashew butter 1 tbsp','腰果酱 1汤匙','Spread or use in sauces.','涂或做酱。',['nuts'])
a('Sunflower Seed Butter','葵花籽酱','f','🥜',3,8,4,'1 tbsp','1汤匙',20,1,60,60,1,0,'Sunflower butter 1 tbsp','葵花籽酱 1汤匙','Spread on toast.','涂吐司。',[])
a('Tahini','芝麻酱','f','🥣',3,9,3,'1 tbsp','1汤匙',60,1,20,40,1,0,'Tahini 1 tbsp','芝麻酱 1汤匙','Use in hummus or dressings.','做鹰嘴豆泥或沙拉酱。',['sesame'])
a('Olives','橄榄','f','🫒',0,15,4,'10 pieces','10颗',60,1,400,20,1,0,'Olives 10','橄榄 10颗','Serve as snack or in salads.','零食或加沙拉。',[])
a('Extra-Virgin Olive Oil','特级初榨橄榄油','f','🫒',0,14,0,'1 tbsp','1汤匙',0,0,0,1,0,0,'Olive oil 1 tbsp','橄榄油 1汤匙','Drizzle on salads or vegetables.','淋沙拉或蔬菜。',[])
a('Butter','黄油','f','🧈',0,11,0,'1 tbsp','1汤匙',20,0,80,10,0,0,'Butter 1 tbsp','黄油 1汤匙','Spread or cook.','涂或烹饪。',['dairy'])
a('Guacamole','牛油果酱','f','🥑',2,8,5,'1/4 cup','1/4杯',15,1,150,250,3,8,'Avocado 1, Lime, Salt, Onion, Cilantro','牛油果 1个，青柠，盐，洋葱，香菜','Mash avocado with lime and salt. Mix in onion and cilantro.','捣泥。拌入洋葱香菜。',[])
a('Pesto','青酱','f','🌿',3,18,3,'2 tbsp','2汤匙',80,2,300,60,1,2,'Basil 1 cup, Pine nuts, Olive oil, Parmesan, Garlic','罗勒 1杯，松子，橄榄油，帕玛森，蒜','Blend all until smooth.','打至顺滑。',['dairy','nuts'])
a('Homemade Vinaigrette','油醋汁','f','🫗',0,14,1,'2 tbsp','2汤匙',0,0,180,10,0,0,'Olive oil 3 tbsp, Vinegar, Mustard, Salt','橄榄油 3汤匙，醋，芥末，盐','Whisk together.','搅匀。',[])
a('Hummus','鹰嘴豆泥','pf','🥣',3,6,6,'2 tbsp','2汤匙',30,1,120,50,2,0,'Chickpeas, Tahini, Lemon, Garlic, Olive oil','鹰嘴豆，芝麻酱，柠檬，蒜，橄榄油','Blend until smooth.','打至顺滑。',['sesame'])
a('Tzatziki','酸奶黄瓜酱','f','🥒',2,2,3,'2 tbsp','2汤匙',30,0,50,40,0,2,'Greek yogurt, Cucumber, Garlic, Lemon, Dill','希腊酸奶，黄瓜，蒜，柠檬，莳萝','Grate cucumber, squeeze water. Mix with yogurt.','黄瓜磨碎挤水。拌酸奶。',['dairy'])
a('Greek Yogurt Dip','酸奶蘸酱','f','🥣',3,2,3,'2 tbsp','2汤匙',30,0,30,40,0,1,'Greek yogurt, Garlic, Lemon, Salt','希腊酸奶，蒜，柠檬，盐','Mix together.','拌匀。',['dairy'])
a('Ranch Dip','牧场蘸酱','f','🥗',1,8,2,'2 tbsp','2汤匙',10,0,260,20,0,0,'Greek yogurt, Ranch seasoning','希腊酸奶，牧场调味粉','Mix and chill 10 min.','拌匀冷藏。',['dairy'])
a('Spinach Dip','菠菜蘸酱','vf','🥬',2,6,3,'2 tbsp','2汤匙',40,1,200,60,1,3,'Spinach, Greek yogurt, Garlic, Salt','菠菜，希腊酸奶，蒜，盐','Squeeze spinach. Mix with yogurt.','菠菜挤水。拌酸奶。',['dairy'])
a('Salsa','莎莎酱','vf','🍅',1,0,5,'1/4 cup','1/4杯',10,1,150,100,1,10,'Tomato, Onion, Jalapeño, Lime, Cilantro, Salt','番茄，洋葱，辣椒，青柠，香菜，盐','Dice finely. Mix with lime and salt.','切丁。拌青柠和盐。',[])
a('Sour Cream','酸奶油','f','🥛',1,6,2,'2 tbsp','2汤匙',30,0,15,30,0,0,'Sour cream 2 tbsp','酸奶油 2汤匙','Dollop on dishes.','加在菜上。',['dairy'])
a('Marinara Sauce','番茄酱汁','vf','🍅',2,3,8,'1/2 cup','半杯',20,1,400,400,2,15,'Crushed tomatoes, Olive oil, Garlic, Basil, Salt','番茄碎，橄榄油，蒜，罗勒，盐','Sauté garlic. Add tomatoes, simmer 15 min.','炒蒜。加番茄煮 15 分钟。',[])
a('Peanut Sauce','花生酱汁','f','🥜',4,12,6,'2 tbsp','2汤匙',10,1,200,40,1,0,'Peanut butter, Soy sauce, Lime, Honey, Water','花生酱，生抽，青柠，蜂蜜，水','Whisk together. Thin with water.','搅匀。加水调稀。',['nuts'])
a('Sesame Dressing','芝麻沙拉酱','f','🥗',1,12,3,'2 tbsp','2汤匙',20,1,200,30,0,0,'Sesame oil, Rice vinegar, Soy sauce, Honey','芝麻油，米醋，生抽，蜂蜜','Whisk together.','搅匀。',['sesame'])
a('Aioli','蒜蓉蛋黄酱','f','🧄',1,20,1,'1 tbsp','1汤匙',10,0,100,10,0,0,'Mayonnaise, Garlic, Lemon','蛋黄酱，蒜，柠檬','Mix together.','拌匀。',['egg'])
a('Hot Sauce','辣酱','f','🌶️',0,0,1,'1 tsp','1茶匙',5,0,150,10,0,2,'Hot sauce 1 tsp','辣酱 1茶匙','Drizzle on dishes.','加在菜上。',[])
a('Chimichurri','阿根廷青酱','vf','🌿',1,14,2,'2 tbsp','2汤匙',20,1,200,50,0,10,'Parsley, Olive oil, Garlic, Vinegar, Oregano, Salt','欧芹，橄榄油，蒜，醋，牛至，盐','Chop finely. Mix with oil and vinegar.','切细。拌油和醋。',[])
a('Coconut Curry Sauce','椰香咖喱酱','f','🍛',2,14,6,'1/4 cup','1/4杯',20,1,300,120,1,5,'Coconut milk, Curry paste, Garlic, Ginger','椰奶，咖喱酱，蒜，姜','Sauté curry paste. Add coconut milk, simmer 5 min.','炒咖喱酱。加椰奶煮 5 分钟。',[])
a('Gravy','肉汁','f','🍖',2,5,3,'1/4 cup','1/4杯',10,1,300,50,0,0,'Pan drippings, Flour, Broth','锅底汁，面粉，高汤','Whisk flour into drippings. Add broth, thicken.','面粉拌入汁。加高汤煮稠。',['gluten'])
a('Seaweed Snacks','海苔脆','f','🌿',1,1,1,'10 sheets','10片',10,1,200,10,0,0,'Seaweed sheets 10','海苔脆 10片','Eat as crispy snack.','当脆零食。',[])
a('Frozen Vegetables','冷冻蔬菜','v','🥦',2,0,6,'1 cup','1杯',30,1,30,200,3,10,'Frozen mixed veg 1 cup','冷冻混合蔬菜 1杯','Steam or microwave.','蒸或微波。',[])
a('Canned Coconut Milk','椰奶（罐头）','f','🥥',1,12,3,'1/4 cup','1/4杯',10,1,20,80,1,0,'Coconut milk 1/4 cup','罐头椰奶 1/4杯','Shake can. Use in curries or smoothies.','摇匀。做咖喱或思慕雪。',[])

# ---- Generate JS ----
lines = []
lines.append("/* ============================================================================")
lines.append("   INGREDIENT RECIPES  --  Basic food items categorized by food type")
lines.append("   ----------------------------------------------------------------------------")
lines.append(f"   {len(D)} items. Each has foodCats array: protein, carb, vegetable, fat-flavor, complete")
lines.append("   ============================================================================ */")
lines.append("")
lines.append("const INGREDIENT_RECIPES = [")
prefix_map = {'protein':'p','carb':'c','vegetable':'v','fat-flavor':'f','complete':'r'}
counters = {}
for d in D:
    pc = d['cats'][0]
    pf = prefix_map.get(pc,'i')
    counters[pf] = counters.get(pf,0)+1
    rid = f"{pf}{counters[pf]:02d}"
    p,f,c = d['p'],d['f'],d['c']
    cal = p*4+f*9+c*4
    pp = round(p*4/cal*100) if cal else 0
    fp = round(f*9/cal*100) if cal else 0
    cp = round(c*4/cal*100) if cal else 0
    carb_val = 'low' if c<10 else 'moderate'
    ie = json.dumps([x.strip() for x in d['ie'].split(',')])
    iz = json.dumps([x.strip() for x in d['iz'].split('，')])
    se_l = [x.strip() for x in d['se2'].split('.') if x.strip()]
    sz_l = [x.strip() for x in d['sz2'].split('。') if x.strip()]
    lines.append("  {")
    lines.append(f"    id:'{rid}', type:'snack', carb:'{carb_val}', tags:[], contains:{json.dumps(d['cont'])}, focus:[],")
    lines.append(f"    img:null, emoji:'{d['emoji']}', foodCats:{json.dumps(d['cats'])},")
    lines.append(f"    en:{{name:'{d['en']}',time:'5 min',servings:'{d['se']}',why:'',ingredients:{ie},steps:{json.dumps(se_l)},notes:''}},")
    lines.append(f"    zh:{{name:'{d['zh']}',time:'5 分钟',servings:'{d['sz']}',why:'',ingredients:{iz},steps:{json.dumps(sz_l)},notes:''}},")
    lines.append(f"    macros:{{protein:{{g:{p},pct:{pp}}},fat:{{g:{f},pct:{fp}}},netCarbs:{{g:{c},pct:{cp}}}}}")
    lines.append("  },")
lines.append("];")
lines.append("")
# Micronutrient data
lines.append("const INGREDIENT_MICROS = {")
for d in D:
    pc = d['cats'][0]
    pf = prefix_map.get(pc,'i')
    # Need to recount to get same ID — simpler: just track index
# Actually we need to regenerate IDs consistently. Let's do it differently.
# Reset counters and regenerate
counters2 = {}
for d in D:
    pc = d['cats'][0]
    pf = prefix_map.get(pc,'i')
    counters2[pf] = counters2.get(pf,0)+1
    rid = f"{pf}{counters2[pf]:02d}"
    lines.append(f"  '{rid}':{{calcium:{d['ca']},iron:{d['fe']},sodium:{d['na']},potassium:{d['k']},fibre:{d['fi']},vitaminC:{d['vc']}}},")
lines.append("};")
lines.append("if(typeof window!=='undefined'){window.INGREDIENT_RECIPES=INGREDIENT_RECIPES; window.INGREDIENT_MICROS=INGREDIENT_MICROS;}")

out = '\n'.join(lines)
outpath = os.path.join(ROOT,'data','ingredient-recipes.js')
with open(outpath,'w',encoding='utf-8') as f:
    f.write(out)
print(f"Generated {len(D)} recipes -> {outpath}")
print(f"File size: {os.path.getsize(outpath)/1024:.1f} KB")
