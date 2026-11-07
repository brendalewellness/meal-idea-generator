/* ============================================================================
   EXTRA RECIPES  --  Asian-inspired staples, broths, soups and sides
   ----------------------------------------------------------------------------
   Format mirrors MEALS in meals.js. See that file's header for field docs.
   IDs: b24–b28, l22–l43, d22–d37, s20–s29
   Recipes are intentionally simple and healthy. Images referenced by filename
   in /images (gracefully fall back to the emoji placeholder if absent).
   ========================================================================== */

const EXTRA_RECIPES = [
    /* ---------- Breakfast ---------- */
    {
      id: 'b24',
      type: 'breakfast',
      carb: 'low',
      tags: ['asian','gut-healing','quick-easy','high-protein','gluten-free','batch-cook'],
      contains: ['egg','soy'],
      focus: ['Gut healing','High protein'],
      img: 'tea-eggs.jpg',
      emoji: '🥚',
      en: {
        name: 'Chinese Tea Eggs',
        time: '20 min + simmer',
        servings: '6',
        why: 'A savoury, protein-rich snack born from reusing steeped tea and spices.',
        ingredients: [
          'Eggs 6',
          'Black tea leaves 2 tbsp (or 2 tea bags)',
          'Soy sauce 3 tbsp',
          'Star anise 2, cinnamon 1 stick, sugar 1 tsp',
          'Water 3 cups'
        ],
        steps: [
          'Boil eggs 7 min, then cool and gently crack the shells all over without peeling.',
          'Simmer tea, soy, spices and water for 5 min.',
          'Add cracked eggs, simmer 15 min, then soak at least 1 hr (or overnight) for a marbled look.',
          'Peel and serve warm or chilled.'
        ],
        notes: 'The longer they soak, the deeper the flavour and colour.'
      },
      zh: {
        name: '茶叶蛋',
        time: '20 分钟 + 浸泡',
        servings: '6 个',
        why: '用茶叶与香料再煮一次，蛋白滑嫩入味，高蛋白小食。',
        ingredients: ['鸡蛋 6 个','红茶 2 汤匙（或茶包 2 个）','生抽 3 汤匙','八角 2 个、桂皮 1 段、糖 1 茶匙','水 3 杯'],
        steps: ['鸡蛋煮 7 分钟，捞出轻轻敲裂蛋壳（不剥）。','茶、生抽、香料与水小火煮 5 分钟。','放入裂壳蛋煮 15 分钟，浸泡 1 小时以上（或过夜）呈大理石纹。','剥壳温食或冷食。'],
        notes: '泡得越久，颜色与味道越深。'
      },
      macros: { protein: { g: 6, pct: 30 }, fat: { g: 5, pct: 47 }, netCarbs: { g: 1, pct: 23 } }
    },
    {
      id: 'b25',
      type: 'breakfast',
      carb: 'moderate',
      tags: ['asian','gut-healing','vegetarian','gluten-free','vegan'],
      contains: [],
      focus: ['Gut healing'],
      img: 'millet-porridge.jpg',
      emoji: '🥣',
      en: {
        name: 'Millet Porridge',
        time: '25 min',
        servings: '2',
        why: 'A gentle, easily digested grain porridge that is naturally gluten-free.',
        ingredients: ['Millet 1/2 cup','Water 3 cups','Pinch of salt','(Optional) dates or pumpkin to top'],
        steps: ['Rinse millet, toast in a dry pot 1 min until fragrant.','Add water and salt, bring to a boil then simmer 20 min, stirring now and then.','Spoon into bowls; top with sweet or savoury favourites.'],
        notes: 'For a thinner congee-style porridge, add more water.'
      },
      zh: {
        name: '小米粥',
        time: '25 分钟',
        servings: '2 份',
        why: '小米易消化、无麸质，温和养胃的早餐粥。',
        ingredients: ['小米 半杯','水 3 杯','盐 少许','（可选）红枣或南瓜点缀'],
        steps: ['小米洗净，干锅小火炒 1 分钟至出香。','加水与盐煮开，转小火 20 分钟，不时搅拌。','盛碗，甜咸自选点缀。'],
        notes: '想更稀可多加水，像粥一样。'
      },
      macros: { protein: { g: 3, pct: 11 }, fat: { g: 1, pct: 8 }, netCarbs: { g: 22, pct: 81 } }
    },
    {
      id: 'b26',
      type: 'breakfast',
      carb: 'moderate',
      tags: ['quick-easy','vegetarian'],
      contains: ['gluten','dairy'],
      focus: ['Quick & easy'],
      img: 'sourdough-toast-butter.jpg',
      emoji: '🍞',
      en: {
        name: 'Sourdough Toast with Butter',
        time: '5 min',
        servings: '1',
        why: 'Fermented sourdough is gentler on digestion; butter keeps you full.',
        ingredients: ['Sourdough bread 1 thick slice','Butter 1 tbsp','Flaky salt'],
        steps: ['Toast the sourdough until crisp and golden.','Spread with butter, sprinkle with flaky salt.'],
        notes: 'Add a soft-boiled egg or jam to make it a fuller meal.'
      },
      zh: {
        name: '酸种面包黄油吐司',
        time: '5 分钟',
        servings: '1 份',
        why: '酸种发酵更易消化，黄油带来饱腹感。',
        ingredients: ['酸种面包 1 厚片','黄油 1 汤匙','海盐片 少许'],
        steps: ['面包烤至金黄酥脆。','抹黄油，撒海盐片。'],
        notes: '可加水煮蛋或果酱变成更完整的一餐。'
      },
      macros: { protein: { g: 6, pct: 12 }, fat: { g: 10, pct: 45 }, netCarbs: { g: 28, pct: 43 } }
    },
    {
      id: 'b27',
      type: 'breakfast',
      carb: 'low',
      tags: ['gut-healing','high-protein','vegetarian','gluten-free','no-cook'],
      contains: ['dairy'],
      focus: ['Gut healing','High protein'],
      img: 'plain-greek-yogurt.jpg',
      emoji: '🥛',
      en: {
        name: 'Plain Greek Yogurt',
        time: '1 min',
        servings: '1',
        why: 'Strained yogurt delivers probiotics and concentrated protein, no added sugar.',
        ingredients: ['Plain Greek yogurt 200g','(Optional) a drizzle of honey or berries'],
        steps: ['Spoon yogurt into a bowl.','Add a light topping if desired.'],
        notes: 'Choose 2% or whole milk for satiety; 0% if watching fat.'
      },
      zh: {
        name: '原味希腊酸奶',
        time: '1 分钟',
        servings: '1 份',
        why: '滤乳清后蛋白浓缩，含益生菌，无加糖。',
        ingredients: ['原味希腊酸奶 200g','（可选）少许蜂蜜或莓果'],
        steps: ['酸奶盛碗。','按需点缀。'],
        notes: '选 2% 或全脂更饱腹；控脂选 0%。'
      },
      macros: { protein: { g: 20, pct: 40 }, fat: { g: 5, pct: 22 }, netCarbs: { g: 9, pct: 38 } }
    },
    {
      id: 'b28',
      type: 'breakfast',
      carb: 'moderate',
      tags: ['asian','gut-healing','vegetarian','gluten-free','vegan'],
      contains: [],
      focus: ['Gut healing'],
      img: 'plain-congee.jpg',
      emoji: '🍚',
      en: {
        name: 'Plain Congee',
        time: '40 min',
        servings: '4',
        why: 'A soft rice porridge that is the classic Chinese gut-soothing comfort food.',
        ingredients: ['White rice 1 cup','Water 8 cups','Pinch of salt'],
        steps: ['Rinse rice, add to a pot with water.','Bring to a boil, reduce to low and cook 30–40 min, stirring to prevent sticking.','Season lightly with salt; serve plain or with pickles, eggs or shredded chicken.'],
        notes: 'Leftover rice + less water shortens the cook time.'
      },
      zh: {
        name: '白米粥',
        time: '40 分钟',
        servings: '4 份',
        why: '中式养胃安神粥，米香软糯易吸收。',
        ingredients: ['大米 1 杯','水 8 杯','盐 少许'],
        steps: ['米洗净入锅加水。','煮开转小火 30–40 分钟，搅拌防粘。','少许盐调味，单吃或配咸菜、蛋、鸡丝。'],
        notes: '用剩饭、少加水可缩短时间。'
      },
      macros: { protein: { g: 3, pct: 8 }, fat: { g: 0, pct: 2 }, netCarbs: { g: 38, pct: 90 } }
    },

    /* ---------- Lunch ---------- */
    {
      id: 'l22',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','gut-healing','quick-easy','high-protein','gluten-free','vegetarian'],
      contains: ['egg','soy'],
      focus: ['Gut healing','Quick & easy'],
      img: 'egg-drop-soup-tofu.jpg',
      emoji: '🍲',
      en: {
        name: 'Egg Drop Soup with Tofu',
        time: '15 min',
        servings: '2',
        why: 'A light, protein-rich broth with silky egg ribbons and soft tofu.',
        ingredients: ['Stock 4 cups','Silken tofu 1 block, diced','Eggs 2, beaten','Soy sauce 1 tbsp, sesame oil 1 tsp','Cornstarch 1 tsp mixed in 2 tbsp water','Spring onion to finish'],
        steps: ['Bring stock to a simmer; add tofu and soy sauce.','Pour in cornstarch slurry to lightly thicken.','Slowly drizzle beaten egg in a circle to form ribbons.','Off heat, add sesame oil and spring onion.'],
        notes: 'Use chicken or vegetable stock; mushroom stock works too.'
      },
      zh: {
        name: '豆腐蛋花汤',
        time: '15 分钟',
        servings: '2 份',
        why: '清淡高蛋白汤，蛋花滑嫩，豆腐软嫩。',
        ingredients: ['高汤 4 杯','内酯豆腐 1 盒，切丁','鸡蛋 2 个打散','生抽 1 汤匙、香油 1 茶匙','淀粉 1 茶匙兑 2 汤匙水','葱花 收尾'],
        steps: ['高汤煮开，放豆腐与生抽。','淋水淀粉微稠。','蛋液转圈淋入成蛋花。','离火，加香油与葱花。'],
        notes: '鸡或蔬菜高汤皆可，菌菇汤底也好。'
      },
      macros: { protein: { g: 14, pct: 35 }, fat: { g: 7, pct: 35 }, netCarbs: { g: 6, pct: 30 } }
    },
    {
      id: 'l23',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','high-protein','quick-easy','gluten-free'],
      contains: ['soy'],
      focus: ['High protein'],
      img: 'mapo-tofu.jpg',
      emoji: '🌶️',
      en: {
        name: 'Mapo Tofu with Ground Pork',
        time: '20 min',
        servings: '3',
        why: 'Sichuan comfort: soft tofu in a spicy, savoury pork sauce.',
        ingredients: ['Soft tofu 1 block, cubed','Ground pork 150g','Doubanjiang 1 tbsp','Soy sauce 1 tbsp, garlic & ginger minced','Sichuan peppercorn powder to taste','Spring onion, sesame oil to finish'],
        steps: ['Brown pork with ginger and garlic.','Add doubanjiang, fry until oil reddens.','Add tofu, soy and 1/2 cup water; simmer 5 min.','Thicken lightly, dust with Sichuan pepper, add sesame oil and onion.'],
        notes: 'For a vegetarian version, swap pork for mushrooms.'
      },
      zh: {
        name: '麻婆豆腐（猪肉末）',
        time: '20 分钟',
        servings: '3 份',
        why: '川味家常，豆腐嫩滑、肉末香辣。',
        ingredients: ['嫩豆腐 1 盒切块','猪肉末 150g','豆瓣酱 1 汤匙','生抽 1 汤匙，蒜末姜末','花椒粉 适量','葱花、香油 收尾'],
        steps: ['肉末与姜蒜煸至变色。','加豆瓣酱炒出红油。','放豆腐、生抽与半杯水煮 5 分钟。','微收汁，撒花椒粉，淋香油葱花。'],
        notes: '素食可用菌菇代替肉末。'
      },
      macros: { protein: { g: 18, pct: 32 }, fat: { g: 16, pct: 48 }, netCarbs: { g: 6, pct: 20 } }
    },
    {
      id: 'l24',
      type: 'lunch',
      carb: 'moderate',
      tags: ['asian','vegetarian','vegan','gluten-free','quick-easy'],
      contains: [],
      focus: ['Quick & easy'],
      img: 'steamed-white-rice.jpg',
      emoji: '🍚',
      en: {
        name: 'Steamed White Rice',
        time: '25 min',
        servings: '4',
        why: 'The clean, fluffy base for almost any Asian meal.',
        ingredients: ['White rice 2 cups','Water 2 cups'],
        steps: ['Rinse rice until water runs nearly clear.','Combine with water, bring to a boil, cover and reduce to lowest heat 15 min.','Rest 5 min off heat, then fluff.'],
        notes: 'A rice cooker makes this foolproof.'
      },
      zh: {
        name: '白米饭',
        time: '25 分钟',
        servings: '4 份',
        why: '亚洲餐桌的百搭主食，松软干净。',
        ingredients: ['大米 2 杯','水 2 杯'],
        steps: ['米淘至水清。','加水煮开，盖盖转小火 15 分钟。','离火焖 5 分钟，松饭。'],
        notes: '电饭煲更省心。'
      },
      macros: { protein: { g: 4, pct: 7 }, fat: { g: 0, pct: 2 }, netCarbs: { g: 45, pct: 91 } }
    },
    {
      id: 'l25',
      type: 'lunch',
      carb: 'moderate',
      tags: ['asian','vegetarian','vegan','gluten-free','quick-easy','gut-healing'],
      contains: [],
      focus: ['Gut healing','Quick & easy'],
      img: 'steamed-brown-rice.jpg',
      emoji: '🍚',
      en: {
        name: 'Steamed Brown Rice',
        time: '40 min',
        servings: '4',
        why: 'Whole-grain rice with more fibre and a nutty bite.',
        ingredients: ['Brown rice 2 cups','Water 2¼ cups','Pinch of salt'],
        steps: ['Rinse brown rice well.','Combine with water, bring to a boil, cover and simmer 30 min.','Rest 10 min, fluff.'],
        notes: 'Soak 1 hr beforehand for faster, softer grains.'
      },
      zh: {
        name: '糙米饭',
        time: '40 分钟',
        servings: '4 份',
        why: '全谷物米饭，纤维更高、口感有嚼劲。',
        ingredients: ['糙米 2 杯','水 2¼ 杯','盐 少许'],
        steps: ['糙米淘净。','加水煮开，盖盖小火 30 分钟。','焖 10 分钟，松饭。'],
        notes: '提前泡 1 小时更快更软。'
      },
      macros: { protein: { g: 5, pct: 8 }, fat: { g: 2, pct: 7 }, netCarbs: { g: 44, pct: 85 } }
    },
    {
      id: 'l26',
      type: 'lunch',
      carb: 'moderate',
      tags: ['gut-healing','vegetarian','vegan','gluten-free','high-protein'],
      contains: [],
      focus: ['Gut healing','High protein'],
      img: 'quinoa.jpg',
      emoji: '🌾',
      en: {
        name: 'Fluffy Quinoa',
        time: '20 min',
        servings: '4',
        why: 'A complete-protein seed that works as a rice alternative.',
        ingredients: ['Quinoa 1 cup','Water 2 cups','Pinch of salt','Olive oil 1 tsp'],
        steps: ['Rinse quinoa thoroughly to remove bitterness.','Simmer with water, salt and oil 15 min covered.','Rest 5 min, fluff with a fork.'],
        notes: 'Use as a base for grain bowls or salads.'
      },
      zh: {
        name: '藜麦饭',
        time: '20 分钟',
        servings: '4 份',
        why: '完全蛋白谷物，可替代米饭。',
        ingredients: ['藜麦 1 杯','水 2 杯','盐 少许','橄榄油 1 茶匙'],
        steps: ['藜麦充分冲洗去苦。','加水、盐、油盖盖小火 15 分钟。','焖 5 分钟，叉松。'],
        notes: '可做谷物碗或沙拉底。'
      },
      macros: { protein: { g: 8, pct: 14 }, fat: { g: 4, pct: 16 }, netCarbs: { g: 39, pct: 70 } }
    },
    {
      id: 'l27',
      type: 'lunch',
      carb: 'moderate',
      tags: ['quick-easy','vegetarian'],
      contains: ['gluten','dairy'],
      focus: ['Quick & easy'],
      img: 'pasta.jpg',
      emoji: '🍝',
      en: {
        name: 'Simple Buttered Pasta',
        time: '15 min',
        servings: '2',
        why: 'A comforting, minimal pasta that lets good ingredients shine.',
        ingredients: ['Pasta 200g','Butter 1 tbsp','Parmesan 2 tbsp','Salt and black pepper','Pasta cooking water'],
        steps: ['Boil pasta in well-salted water until al dente.','Toss with butter and a splash of cooking water.','Off heat, add parmesan and pepper; toss to a glossy sauce.'],
        notes: 'Add lemon zest or chilli flakes to vary it.'
      },
      zh: {
        name: '黄油意面',
        time: '15 分钟',
        servings: '2 份',
        why: '极简意面，突出食材本味。',
        ingredients: ['意面 200g','黄油 1 汤匙','帕玛森 2 汤匙','盐、黑胡椒','煮面水 适量'],
        steps: ['盐水煮意面至弹牙。','加黄油与少许煮面水拌匀。','离火撒帕玛森与胡椒，拌至挂汁。'],
        notes: '可加柠檬皮或辣椒片变化风味。'
      },
      macros: { protein: { g: 9, pct: 14 }, fat: { g: 8, pct: 27 }, netCarbs: { g: 42, pct: 59 } }
    },
    {
      id: 'l28',
      type: 'lunch',
      carb: 'moderate',
      tags: ['asian','quick-easy','vegetarian','vegan'],
      contains: ['gluten','soy'],
      focus: ['Quick & easy'],
      img: 'rice-noodles.jpg',
      emoji: '🍜',
      en: {
        name: 'Rice Noodles',
        time: '10 min',
        servings: '2',
        why: 'A gluten-free noodle base ready in minutes, perfect for bowls and stir-fries.',
        ingredients: ['Flat rice noodles 150g','Soy sauce 1 tbsp, sesame oil 1 tsp','Spring onion, sesame seeds to finish'],
        steps: ['Soak noodles in hot water 5–8 min until tender, drain.','Toss with soy and sesame oil.','Top with spring onion and sesame seeds, or add to broth.'],
        notes: 'Rice noodles cook best with a soak, not a hard boil.'
      },
      zh: {
        name: '河粉/米粉',
        time: '10 分钟',
        servings: '2 份',
        why: '无麸质面底，几分钟即好，可拌可炒可入汤。',
        ingredients: ['河粉/米粉 150g','生抽 1 汤匙、香油 1 茶匙','葱花、芝麻 收尾'],
        steps: ['热水泡 5–8 分钟至软，沥干。','拌入生抽与香油。','撒葱花芝麻，或入汤底。'],
        notes: '米粉宜泡不宜久煮。'
      },
      macros: { protein: { g: 3, pct: 5 }, fat: { g: 4, pct: 15 }, netCarbs: { g: 42, pct: 80 } }
    },
    {
      id: 'l29',
      type: 'lunch',
      carb: 'moderate',
      tags: ['asian','quick-easy','gut-healing','high-protein'],
      contains: ['soy'],
      focus: ['Gut healing','Quick & easy'],
      img: 'shabu-shabu-bowl.jpg',
      emoji: '🥘',
      en: {
        name: 'Shabu Shabu Bowl',
        time: '10 min',
        servings: '1',
        why: 'Hotpot-style bowl: broth cooks thin beef and greens in minutes.',
        ingredients: ['Chicken broth 2 cups','Hotpot beef rolls 80g','Leafy greens 1 handful','Glass noodles 30g','Soy sauce & sesame oil to taste'],
        steps: ['Bring broth to a rolling boil in a small pot.','Add glass noodles and greens, cook 1 min.','Swirl in beef rolls; they cook in seconds.','Season with soy and sesame oil; serve hot.'],
        notes: 'Any quick-cooking greens — bok choy, spinach, chrysanthemum greens — work.'
      },
      zh: {
        name: '寿喜锅风牛肉碗',
        time: '10 分钟',
        servings: '1 份',
        why: '火锅风：滚汤秒烫肥牛与青菜。',
        ingredients: ['鸡高汤 2 杯','肥牛卷 80g','青菜 1 把','粉丝 30g','生抽、香油 适量'],
        steps: ['小锅高汤烧开。','下粉丝与青菜煮 1 分钟。','拨入肥牛卷，数秒即熟。','调味生抽香油，趁热吃。'],
        notes: '任何快熟青菜均可——小白菜、菠菜、茼蒿。'
      },
      macros: { protein: { g: 22, pct: 35 }, fat: { g: 12, pct: 43 }, netCarbs: { g: 10, pct: 22 } }
    },
    {
      id: 'l30',
      type: 'lunch',
      carb: 'moderate',
      tags: ['quick-easy','high-protein','gluten-free'],
      contains: ['dairy'],
      focus: ['High protein','Quick & easy'],
      img: 'burrito-bowl.jpg',
      emoji: '🫘',
      en: {
        name: 'Burrito Bowl',
        time: '15 min',
        servings: '2',
        why: 'All the flavour of a burrito, layered in a bowl — no wrap needed.',
        ingredients: ['Cooked rice 2 cups','Black beans 1 cup','Ground beef or chicken 150g','Salsa 4 tbsp','Cheese, avocado, lime to top'],
        steps: ['Brown the meat with a little cumin and salt.','Layer rice, beans, meat and salsa in bowls.','Top with cheese, avocado and a squeeze of lime.'],
        notes: 'Make it vegetarian with extra beans instead of meat.'
      },
      zh: {
        name: '墨西哥卷饭碗',
        time: '15 分钟',
        servings: '2 份',
        why: '卷饼风味层层叠入碗中，无需饼皮。',
        ingredients: ['米饭 2 杯','黑豆 1 杯','牛肉末或鸡肉末 150g','莎莎酱 4 汤匙','奶酪、牛油果、青柠 点缀'],
        steps: ['肉末加孜然与盐煸熟。','碗中分层放饭、豆、肉、莎莎酱。','撒奶酪、牛油果，挤青柠。'],
        notes: '素食可多放豆类代替肉。'
      },
      macros: { protein: { g: 28, pct: 30 }, fat: { g: 16, pct: 35 }, netCarbs: { g: 45, pct: 35 } }
    },
    {
      id: 'l31',
      type: 'lunch',
      carb: 'moderate',
      tags: ['asian','high-protein','quick-easy','gluten-free'],
      contains: ['egg','soy','sesame'],
      focus: ['High protein'],
      img: 'bibimbap-bowl.jpg',
      emoji: '🍱',
      en: {
        name: 'Bibimbap Bowl',
        time: '25 min',
        servings: '2',
        why: 'Korean rice bowl topped with seasoned vegetables, egg and a spicy-sweet sauce.',
        ingredients: ['Cooked rice 2 cups','Spinach, carrot, bean sprouts 1 cup each','Ground beef 100g','Eggs 2','Gochujang 1 tbsp, soy, sesame oil, sugar'],
        steps: ['Season each vegetable separately with salt and sesame oil; sauté briefly.','Brown beef with soy and sugar.','Fry eggs sunny-side up.','Arrange rice, veg, beef and egg in bowls; top with gochujang and sesame oil.'],
        notes: 'Mix everything together just before eating.'
      },
      zh: {
        name: '韩式拌饭',
        time: '25 分钟',
        servings: '2 份',
        why: '韩式饭碗：调味蔬菜、肉、蛋配辣甜酱。',
        ingredients: ['米饭 2 杯','菠菜、胡萝卜、豆芽各 1 杯','牛肉末 100g','鸡蛋 2 个','辣酱 1 汤匙、生抽、香油、糖'],
        steps: ['各蔬菜分别加盐香油快炒。','肉末加生抽糖煸熟。','煎单面蛋。','碗中码饭、菜、肉、蛋，淋辣酱香油。'],
        notes: '吃前拌匀。'
      },
      macros: { protein: { g: 22, pct: 25 }, fat: { g: 14, pct: 32 }, netCarbs: { g: 48, pct: 43 } }
    },
    {
      id: 'l32',
      type: 'lunch',
      carb: 'moderate',
      tags: ['asian','high-protein','quick-easy','gluten-free'],
      contains: ['fish','soy','sesame'],
      focus: ['High protein'],
      img: 'lemongrass-pork-vermicelli.jpg',
      emoji: '🍜',
      en: {
        name: 'Lemongrass Pork Vermicelli Bowl',
        time: '25 min',
        servings: '2',
        why: 'Vietnamese bún bowls: cool noodles, fragrant grilled pork, fresh herbs.',
        ingredients: ['Rice vermicelli 120g','Pork 200g, minced lemongrass marinade','Fish sauce, lime, sugar, chilli','Cucumber, lettuce, mint and coriander'],
        steps: ['Marinate pork in lemongrass, garlic, fish sauce and sugar 15 min.','Cook vermicelli per pack, drain and cool.','Grill or pan-fry the pork until caramelised.','Build bowls: noodles, pork, veg, herbs; drizzle nuoc cham.'],
        notes: 'Nuoc cham = fish sauce, lime, sugar, chilli, garlic.'
      },
      zh: {
        name: '香茅猪肉檬粉',
        time: '25 分钟',
        servings: '2 份',
        why: '越式檬粉：凉粉配香茅烤肉与香草。',
        ingredients: ['米粉 120g','猪肉 200g，香茅蒜末腌制','鱼露、青柠、糖、辣椒','黄瓜、生菜、薄荷、香菜'],
        steps: ['猪肉用香茅、蒜、鱼露、糖腌 15 分钟。','米粉按说明煮、过凉。','煎或烤至焦香。','碗中码粉、肉、菜、香草，淋蘸汁。'],
        notes: '蘸汁＝鱼露、青柠、糖、辣椒、蒜。'
      },
      macros: { protein: { g: 26, pct: 35 }, fat: { g: 10, pct: 27 }, netCarbs: { g: 35, pct: 38 } }
    },
    {
      id: 'l33',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','high-protein','quick-easy','gluten-free','batch-cook'],
      contains: ['fish','soy','egg'],
      focus: ['High protein','Batch cook'],
      img: 'vietnamese-pork-meatballs.jpg',
      emoji: '🍡',
      en: {
        name: 'Vietnamese Pork Meatballs',
        time: '30 min',
        servings: '4',
        why: 'Juicy, lightly sweet pork meatballs with fish sauce and herbs.',
        ingredients: ['Ground pork 400g','Fish sauce 1 tbsp, sugar 1 tsp','Garlic 2 cloves, pepper','Lemongrass 1 stalk (optional)','Lettuce and herbs to serve'],
        steps: ['Mix pork with fish sauce, sugar, garlic, pepper and minced lemongrass.','Roll into 24 balls.','Pan-fry until golden and cooked through.','Serve over rice or in lettuce wraps with herbs.'],
        notes: 'These freeze well; double the batch.'
      },
      zh: {
        name: '越式猪肉丸',
        time: '30 分钟',
        servings: '4 份',
        why: '多汁微甜的鱼露猪肉丸，配香草。',
        ingredients: ['猪肉末 400g','鱼露 1 汤匙、糖 1 茶匙','蒜 2 瓣、胡椒','香茅 1 根（可选）','生菜、香草 配食'],
        steps: ['肉末加鱼露、糖、蒜、胡椒、香茅末拌匀。','搓 24 个丸。','平底锅煎至金黄熟透。','配饭或生菜包吃。'],
        notes: '可冷冻，建议加倍做。'
      },
      macros: { protein: { g: 24, pct: 40 }, fat: { g: 14, pct: 42 }, netCarbs: { g: 4, pct: 18 } }
    },
    {
      id: 'l34',
      type: 'lunch',
      carb: 'low',
      tags: ['high-protein','batch-cook','quick-easy'],
      contains: ['gluten','dairy'],
      focus: ['High protein','Batch cook'],
      img: 'beef-meatballs-marinara.jpg',
      emoji: '🍝',
      en: {
        name: 'Beef Meatballs with Marinara',
        time: '35 min',
        servings: '4',
        why: 'Tender beef meatballs simmered in a simple tomato sauce.',
        ingredients: ['Ground beef 400g','Egg 1, breadcrumbs 1/4 cup','Garlic, salt, pepper','Marinara sauce 2 cups','Basil to finish'],
        steps: ['Mix beef, egg, breadcrumbs, garlic, salt and pepper; roll into balls.','Brown meatballs in a pan.','Pour in marinara, simmer 15 min.','Finish with basil; serve with pasta or zoodles.'],
        notes: 'Meatballs keep 4 days in the fridge.'
      },
      zh: {
        name: '牛肉丸配番茄酱',
        time: '35 分钟',
        servings: '4 份',
        why: '嫩牛肉丸在简易番茄酱中慢炖。',
        ingredients: ['牛肉末 400g','鸡蛋 1 个、面包糠 1/4 杯','蒜、盐、胡椒','番茄酱 2 杯','罗勒 收尾'],
        steps: ['牛肉、蛋、面包糠、蒜、盐胡椒拌匀搓丸。','平底锅煎至微黄。','加番茄酱小火 15 分钟。','撒罗勒，配意面或西葫芦面。'],
        notes: '肉丸冷藏 4 天没问题。'
      },
      macros: { protein: { g: 28, pct: 40 }, fat: { g: 18, pct: 41 }, netCarbs: { g: 10, pct: 19 } }
    },
    {
      id: 'l35',
      type: 'lunch',
      carb: 'low',
      tags: ['high-protein','batch-cook','quick-easy','gluten-free'],
      contains: ['dairy','gluten'],
      focus: ['High protein','Batch cook'],
      img: 'beef-meatballs-gravy.jpg',
      emoji: '🥽',
      en: {
        name: 'Beef Meatballs with Gravy',
        time: '35 min',
        servings: '4',
        why: 'Savoury beef meatballs in a silky onion gravy — comfort food.',
        ingredients: ['Ground beef 400g','Egg 1, almond flour 2 tbsp','Onion 1, beef stock 1 cup','Butter 1 tbsp, flour 1 tbsp'],
        steps: ['Mix beef, egg, almond flour, salt, pepper; roll into balls and brown.','In another pan, soften onion in butter.','Sprinkle flour, whisk in stock to make gravy.','Add meatballs, simmer 10 min until thick.'],
        notes: 'Serve over mashed potato or cauliflower mash.'
      },
      zh: {
        name: '牛肉丸配肉汁',
        time: '35 分钟',
        servings: '4 份',
        why: '洋葱肉汁裹嫩牛肉丸，暖胃comfort food。',
        ingredients: ['牛肉末 400g','鸡蛋 1 个、杏仁粉 2 汤匙','洋葱 1 个、牛高汤 1 杯','黄油 1 汤匙、面粉 1 汤匙'],
        steps: ['牛肉、蛋、杏仁粉、盐胡椒搓丸煎黄。','另锅黄油软化洋葱。','撒面粉，加高汤搅成肉汁。','放入肉丸小火 10 分钟收汁。'],
        notes: '配土豆泥或花椰菜泥。'
      },
      macros: { protein: { g: 27, pct: 38 }, fat: { g: 19, pct: 48 }, netCarbs: { g: 7, pct: 14 } }
    },
    {
      id: 'l36',
      type: 'lunch',
      carb: 'low',
      tags: ['quick-easy','no-cook','high-protein','gluten-free'],
      contains: ['fish','egg','soy'],
      focus: ['High protein','Quick & easy'],
      img: 'tuna-mayo-cucumber-bowl.jpg',
      emoji: '🥒',
      en: {
        name: 'Tuna Mayo Cucumber Bowls',
        time: '8 min',
        servings: '1',
        why: 'A no-cook, high-protein bowl built on crisp cucumber boats.',
        ingredients: ['Cucumber 1 large','Canned tuna 1 can','Mayo 2 tbsp','Soy sauce 1 tsp, sesame seeds'],
        steps: ['Halve cucumber lengthways and scoop out seeds to make boats.','Mix tuna with mayo and soy.','Spoon into cucumber boats; sprinkle sesame seeds.'],
        notes: 'Add chilli oil or avocado for extra flavour.'
      },
      zh: {
        name: '金枪鱼蛋黄酱黄瓜盅',
        time: '8 分钟',
        servings: '1 份',
        why: '免煮高蛋白，脆黄瓜作盅。',
        ingredients: ['大黄瓜 1 根','金枪鱼罐头 1 罐','蛋黄酱 2 汤匙','生抽 1 茶匙、芝麻'],
        steps: ['黄瓜纵切去籽成盅。','金枪鱼拌蛋黄酱与生抽。','填入黄瓜盅，撒芝麻。'],
        notes: '可加辣椒油或牛油果。'
      },
      macros: { protein: { g: 25, pct: 38 }, fat: { g: 15, pct: 45 }, netCarbs: { g: 5, pct: 17 } }
    },
    {
      id: 'l37',
      type: 'lunch',
      carb: 'low',
      tags: ['quick-easy','no-cook','vegetarian','vegan','gluten-free'],
      contains: ['sesame'],
      focus: ['Quick & easy','No-cook'],
      img: 'hummus-vegetables.jpg',
      emoji: '🥕',
      en: {
        name: 'Hummus with Vegetables',
        time: '5 min',
        servings: '2',
        why: 'Plant protein and fibre from chickpeas, with crisp raw veg.',
        ingredients: ['Hummus 1 cup','Carrot, cucumber, bell pepper sticks','Olive oil and paprika to finish'],
        steps: ['Arrange vegetables around a bowl of hummus.','Drizzle olive oil and dust with paprika.'],
        notes: 'Use store-bought hummus or blend chickpeas, tahini, lemon, garlic.'
      },
      zh: {
        name: '鹰嘴豆泥配蔬菜',
        time: '5 分钟',
        servings: '2 份',
        why: '鹰嘴豆提供植物蛋白与纤维，配生蔬。',
        ingredients: ['鹰嘴豆泥 1 杯','胡萝卜、黄瓜、彩椒 条','橄榄油、辣椒粉 收尾'],
        steps: ['蔬菜围着豆泥摆盘。','淋橄榄油撒辣椒粉。'],
        notes: '可买现成或自制（鹰嘴豆、芝麻酱、柠檬、蒜）。'
      },
      macros: { protein: { g: 8, pct: 14 }, fat: { g: 14, pct: 52 }, netCarbs: { g: 15, pct: 34 } }
    },
    {
      id: 'l38',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','high-protein','batch-cook'],
      contains: ['soy','sesame'],
      focus: ['High protein','Batch cook'],
      img: 'twice-cooked-pork.jpg',
      emoji: '🥓',
      en: {
        name: 'Twice-Cooked Pork',
        time: '40 min',
        servings: '3',
        why: 'Sichuan classic: boiled then stir-fried pork belly with leeks and doubanjiang.',
        ingredients: ['Pork belly 300g','Leek or napa cabbage 200g','Doubanjiang 1 tbsp, sweet bean sauce 1 tbsp','Ginger, garlic, soy'],
        steps: ['Simmer pork belly 20 min in water with ginger; cool and slice thin.','Stir-fry slices until edges curl.','Add doubanjiang, sweet bean sauce, garlic.','Toss in sliced leek; cook until just wilted.'],
        notes: 'The boil-then-fry method renders fat for a crisp, less greasy result.'
      },
      zh: {
        name: '回锅肉',
        time: '40 分钟',
        servings: '3 份',
        why: '川味：五花肉先煮后炒，配蒜苗豆瓣酱。',
        ingredients: ['五花肉 300g','蒜苗或大白菜 200g','豆瓣酱 1 汤匙、甜面酱 1 汤匙','姜、蒜、生抽'],
        steps: ['五花肉加姜片煮 20 分钟，晾凉切薄片。','煸至肉片卷曲出油。','加豆瓣酱、甜面酱、蒜。','下蒜苗段炒至断生。'],
        notes: '先煮后炒出油，更香不腻。'
      },
      macros: { protein: { g: 18, pct: 22 }, fat: { g: 35, pct: 65 }, netCarbs: { g: 6, pct: 13 } }
    },
    {
      id: 'l39',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','high-protein','quick-easy','gluten-free'],
      contains: ['soy','fish'],
      focus: ['High protein','Quick & easy'],
      img: 'pad-krapow.jpg',
      emoji: '🌿',
      en: {
        name: 'Pad Krapow (Thai Basil Pork)',
        time: '15 min',
        servings: '2',
        why: 'Thai street favourite: spicy, garlicky pork with holy basil over rice.',
        ingredients: ['Ground pork 250g','Thai holy basil 1 cup','Garlic 3 cloves, bird\'s-eye chilli 2','Oyster & soy sauce, splash of fish sauce','Cooked rice to serve'],
        steps: ['Pound garlic and chilli in a mortar.','Stir-fry pork until just done.','Add sauces; toss to coat.','Off heat, stir in basil. Serve over rice with a fried egg.'],
        notes: 'Use Thai holy basil if you can find it; sweet basil is a milder substitute.'
      },
      zh: {
        name: '泰式打抛猪肉',
        time: '15 分钟',
        servings: '2 份',
        why: '泰式街头：蒜辣猪肉末配九层塔盖饭。',
        ingredients: ['猪肉末 250g','九层塔 1 杯','蒜 3 瓣、小米辣 2 个','蚝油、生抽、少许鱼露','米饭 配食'],
        steps: ['蒜与辣椒舂碎。','肉末煸熟。','下酱料炒匀。','离火拌入九层塔。盖饭，加煎蛋。'],
        notes: '用泰式九层塔最佳，甜罗勒可代。'
      },
      macros: { protein: { g: 24, pct: 35 }, fat: { g: 16, pct: 42 }, netCarbs: { g: 8, pct: 23 } }
    },
    {
      id: 'l40',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','quick-easy','vegetarian','gluten-free'],
      contains: ['egg','soy'],
      focus: ['Quick & easy'],
      img: 'chinese-chive-egg.jpg',
      emoji: '🥚',
      en: {
        name: 'Chinese Chive and Egg',
        time: '10 min',
        servings: '2',
        why: 'A quick scramble of garlic chives and egg — soft, fragrant, simple.',
        ingredients: ['Eggs 4','Garlic chives 150g, cut into 2 cm pieces','Salt, white pepper','Oil 1 tbsp'],
        steps: ['Beat eggs with salt and pepper.','Heat oil, briefly wilt chives.','Pour in eggs, fold gently until just set.'],
        notes: 'Don\'t overcook — the eggs should stay soft and the chives bright green.'
      },
      zh: {
        name: '韭菜炒蛋',
        time: '10 分钟',
        servings: '2 份',
        why: '韭菜与蛋快炒，软嫩清香。',
        ingredients: ['鸡蛋 4 个','韭菜 150g 切段','盐、白胡椒','油 1 汤匙'],
        steps: ['蛋加盐胡椒打匀。','热油快炒韭菜至软。','倒蛋液轻拌至刚凝固。'],
        notes: '勿过熟，蛋要嫩、韭菜翠绿。'
      },
      macros: { protein: { g: 14, pct: 30 }, fat: { g: 14, pct: 50 }, netCarbs: { g: 4, pct: 20 } }
    },
    {
      id: 'l41',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','quick-easy','gluten-free'],
      contains: ['egg','soy'],
      focus: ['Quick & easy'],
      img: 'tofu-century-egg.jpg',
      emoji: '🥚',
      en: {
        name: 'Tofu with Century Egg',
        time: '10 min',
        servings: '2',
        why: 'A cool, silky cold dish — cold tofu, century egg, soy and sesame.',
        ingredients: ['Silken tofu 1 block','Century egg 1, quartered','Soy sauce 2 tbsp, sesame oil 1 tsp','Spring onion, sesame seeds'],
        steps: ['Drain tofu, slice and plate.','Arrange century egg pieces on top.','Drizzle soy and sesame oil; scatter onion and sesame.'],
        notes: 'Best chilled; add chilli oil if you like heat.'
      },
      zh: {
        name: '皮蛋豆腐',
        time: '10 分钟',
        servings: '2 份',
        why: '凉菜：凉豆腐配皮蛋，香油生抽。',
        ingredients: ['内酯豆腐 1 盒','皮蛋 1 个切瓣','生抽 2 汤匙、香油 1 茶匙','葱花、芝麻'],
        steps: ['豆腐沥干切片码盘。','皮蛋瓣摆上。','淋生抽香油，撒葱花芝麻。'],
        notes: '冰过更好吃，喜辣可加辣椒油。'
      },
      macros: { protein: { g: 12, pct: 32 }, fat: { g: 9, pct: 42 }, netCarbs: { g: 5, pct: 26 } }
    },
    {
      id: 'l42',
      type: 'lunch',
      carb: 'low',
      tags: ['asian','quick-easy','high-protein','no-cook','gluten-free'],
      contains: ['soy','sesame'],
      focus: ['High protein','Quick & easy'],
      img: 'shredded-chicken-cold.jpg',
      emoji: '🐔',
      en: {
        name: 'Liang Ban Ji Si (Cold Shredded Chicken)',
        time: '10 min',
        servings: '2',
        why: 'A no-cook way to turn leftover chicken into a fragrant cold dish.',
        ingredients: ['Cooked shredded chicken 200g','Soy sauce 2 tbsp','Sesame oil 1 tbsp','Spring onion, optional chilli oil'],
        steps: ['Shred leftover chicken by hand.','Toss with soy, sesame oil and spring onion.','Add chilli oil if desired; serve at room temperature.'],
        notes: 'Perfect use for rotisserie or poached chicken.'
      },
      zh: {
        name: '凉拌鸡丝',
        time: '10 分钟',
        servings: '2 份',
        why: '剩鸡肉变香喷凉菜，免煮。',
        ingredients: ['熟鸡丝 200g','生抽 2 汤匙','香油 1 汤匙','葱花、可选辣椒油'],
        steps: ['剩鸡手撕成丝。','拌入生抽、香油、葱花。','可加辣椒油，常温食。'],
        notes: '烤鸡或白煮鸡都适用。'
      },
      macros: { protein: { g: 30, pct: 55 }, fat: { g: 12, pct: 40 }, netCarbs: { g: 2, pct: 5 } }
    },
    {
      id: 'l43',
      type: 'lunch',
      carb: 'low',
      tags: ['quick-easy','no-cook','high-protein','gluten-free'],
      contains: [],
      focus: ['High protein','Quick & easy'],
      img: 'rotisserie-chicken-salad.jpg',
      emoji: '🥗',
      en: {
        name: 'Rotisserie Chicken with Bagged Salad',
        time: '5 min',
        servings: '2',
        why: 'The fastest real-food meal: hot chicken, crisp bagged greens.',
        ingredients: ['Rotisserie chicken 1','Bagged salad mix 2 servings','Olive oil and vinegar or favourite dressing'],
        steps: ['Carve the chicken into pieces.','Toss salad with dressing.','Plate chicken alongside the salad.'],
        notes: 'Strip leftover meat for tomorrow\'s lunches or broth.'
      },
      zh: {
        name: '烤鸡配袋装沙拉',
        time: '5 分钟',
        servings: '2 份',
        why: '最快正餐：热烤鸡配袋装沙拉。',
        ingredients: ['烤鸡 1 只','袋装沙拉 2 人份','橄榄油醋汁或喜爱酱'],
        steps: ['烤鸡切块。','沙拉拌酱。','同盘上桌。'],
        notes: '剩肉可做次日午餐或熬汤。'
      },
      macros: { protein: { g: 35, pct: 45 }, fat: { g: 18, pct: 42 }, netCarbs: { g: 4, pct: 13 } }
    },

    /* ---------- Dinner ---------- */
    {
      id: 'd22',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','quick-easy','high-protein','gluten-free','vegetarian'],
      contains: ['egg','soy'],
      focus: ['High protein','Quick & easy'],
      img: 'tomato-egg-stir-fry.jpg',
      emoji: '🍅',
      en: {
        name: 'Tomato Egg Stir-Fry',
        time: '12 min',
        servings: '2',
        why: 'A beloved home-style dish: juicy tomatoes folded into soft scrambled eggs.',
        ingredients: ['Eggs 4','Ripe tomatoes 3','Sugar 1 tsp, salt','Spring onion, oil'],
        steps: ['Beat eggs with a pinch of salt; soft-scramble and set aside.','Add tomatoes to the pan with sugar; cook until saucy.','Fold eggs back in; top with spring onion.'],
        notes: 'A splash of ketchup deepens the colour and tang.'
      },
      zh: {
        name: '番茄炒蛋',
        time: '12 分钟',
        servings: '2 份',
        why: '家常菜：多汁番茄裹软炒蛋。',
        ingredients: ['鸡蛋 4 个','熟番茄 3 个','糖 1 茶匙、盐','葱花、油'],
        steps: ['蛋加盐打匀，嫩炒盛出。','番茄入锅加糖炒至出汁。','倒回蛋花，撒葱花。'],
        notes: '少许番茄酱增色增酸。'
      },
      macros: { protein: { g: 16, pct: 30 }, fat: { g: 15, pct: 50 }, netCarbs: { g: 6, pct: 20 } }
    },
    {
      id: 'd23',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','gut-healing','high-protein','quick-easy','gluten-free'],
      contains: ['fish','soy'],
      focus: ['Gut healing','High protein'],
      img: 'steamed-fish.jpg',
      emoji: '🐟',
      en: {
        name: 'Steamed Fish with Ginger and Spring Onion',
        time: '15 min',
        servings: '2',
        why: 'Gentle steaming keeps fish tender and digestible — a gut-friendly protein.',
        ingredients: ['White fish fillet 300g','Ginger 1 thumb, julienned','Spring onion 2, shredded','Soy 2 tbsp, oil 2 tbsp'],
        steps: ['Lay fish on a plate; scatter half the ginger.','Steam 8–10 min until just opaque.','Top with spring onion and remaining ginger.','Heat oil until smoking; pour over to sizzle. Add soy.'],
        notes: 'Any firm white fish — cod, tilapia, barramundi — works.'
      },
      zh: {
        name: '清蒸鱼（葱姜）',
        time: '15 分钟',
        servings: '2 份',
        why: '清蒸保嫩易消化，养胃高蛋白。',
        ingredients: ['白鱼柳 300g','姜 1 块切丝','葱 2 根切丝','生抽 2 汤匙、油 2 汤匙'],
        steps: ['鱼置盘，撒一半姜丝。','蒸 8–10 分钟至刚透。','放葱丝与余下姜。','热油浇淋激香，淋生抽。'],
        notes: '鳕鱼、罗非、盲槽皆可。'
      },
      macros: { protein: { g: 34, pct: 65 }, fat: { g: 8, pct: 25 }, netCarbs: { g: 2, pct: 10 } }
    },
    {
      id: 'd24',
      type: 'dinner',
      carb: 'low',
      tags: ['high-protein','quick-easy','gluten-free'],
      contains: [],
      focus: ['High protein','Quick & easy'],
      img: 'steak-asparagus.jpg',
      emoji: '🥩',
      en: {
        name: 'Steak with Asparagus',
        time: '15 min',
        servings: '2',
        why: 'A simple iron- and protein-rich dinner with tender green veg.',
        ingredients: ['Steak 2 (sirloin or flank, 300g)','Asparagus 1 bunch','Butter 1 tbsp, salt, pepper','Garlic 1 clove'],
        steps: ['Season steak with salt; sear in a hot pan 3 min per side for medium-rare.','Rest the steak.','In the same pan, wilt garlic and asparagus in butter 3 min.','Slice steak; serve with asparagus.'],
        notes: 'Rest the meat before slicing to keep it juicy.'
      },
      zh: {
        name: '牛排配芦笋',
        time: '15 分钟',
        servings: '2 份',
        why: '高蛋白高铁，配嫩芦笋。',
        ingredients: ['牛排 2 块（西冷或牛腩排 300g）','芦笋 1 把','黄油 1 汤匙、盐、胡椒','蒜 1 瓣'],
        steps: ['牛排抹盐，热锅每面 3 分钟至三五分熟。','静置。','原锅黄油蒜芦笋炒 3 分钟。','牛排切片配芦笋。'],
        notes: '切前静置保汁。'
      },
      macros: { protein: { g: 40, pct: 50 }, fat: { g: 22, pct: 44 }, netCarbs: { g: 4, pct: 6 } }
    },
    {
      id: 'd25',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','high-protein','batch-cook'],
      contains: ['soy','fish'],
      focus: ['High protein','Batch cook'],
      img: 'steamed-ribs-black-bean.jpg',
      emoji: '🍖',
      en: {
        name: 'Steamed Ribs in Black Bean Sauce',
        time: '40 min',
        servings: '3',
        why: 'Cantonese steamed spare ribs with fermented black beans — tender and savoury.',
        ingredients: ['Pork spare ribs 400g, chopped small','Fermented black beans 1 tbsp','Garlic, ginger, soy, sugar','Cornstarch 1 tsp'],
        steps: ['Marinate ribs with mashed black beans, garlic, ginger, soy, sugar and starch 20 min.','Spread ribs in a shallow dish; steam over high heat 25 min.','Scatter spring onion; serve hot with rice.'],
        notes: 'Ask the butcher to chop the ribs small for steaming.'
      },
      zh: {
        name: '豆豉蒸排骨',
        time: '40 分钟',
        servings: '3 份',
        why: '粤式小排配豆豉，软嫩咸香。',
        ingredients: ['猪小排 400g 斩小件','豆豉 1 汤匙','蒜、姜、生抽、糖','淀粉 1 茶匙'],
        steps: ['排骨加压碎豆豉、蒜姜、生抽、糖、淀粉腌 20 分钟。','铺平盘大火蒸 25 分钟。','撒葱花，配饭。'],
        notes: '请肉贩把小排斩小件。'
      },
      macros: { protein: { g: 26, pct: 35 }, fat: { g: 22, pct: 50 }, netCarbs: { g: 6, pct: 15 } }
    },
    {
      id: 'd26',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','gut-healing','vegetarian','vegan','gluten-free'],
      contains: ['soy'],
      focus: ['Gut healing'],
      img: 'savory-tofu-pudding.jpg',
      emoji: '🍮',
      en: {
        name: 'Savory Tofu Pudding (Dou Hua)',
        time: '10 min',
        servings: '2',
        why: 'Silky warm tofu pudding with a savoury soy-sesame sauce.',
        ingredients: ['Silken tofu 1 block','Soy sauce 2 tbsp','Sesame oil 1 tsp','Pickled radish, chilli oil, spring onion to top'],
        steps: ['Gently heat tofu in hot water 2 min; drain and scoop into bowls.','Combine soy and sesame oil; pour over.','Top with pickled radish, spring onion and chilli oil.'],
        notes: 'The softest tofu you can find gives the best texture.'
      },
      zh: {
        name: '咸豆花',
        time: '10 分钟',
        servings: '2 份',
        why: '嫩滑热豆花配咸香酱汁。',
        ingredients: ['内酯豆腐 1 盒','生抽 2 汤匙','香油 1 茶匙','萝卜干、辣椒油、葱花 点缀'],
        steps: ['豆腐热水温 2 分钟，沥干舀入碗。','生抽香油混合浇上。','撒萝卜干、葱花、辣椒油。'],
        notes: '越嫩的豆腐口感越好。'
      },
      macros: { protein: { g: 10, pct: 30 }, fat: { g: 7, pct: 40 }, netCarbs: { g: 5, pct: 30 } }
    },
    {
      id: 'd27',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','high-protein','quick-easy','gluten-free'],
      contains: ['soy'],
      focus: ['High protein','Quick & easy'],
      img: 'pork-liver-stir-fry.jpg',
      emoji: '🫀',
      en: {
        name: 'Pork Liver Stir-Fry with Chives',
        time: '12 min',
        servings: '2',
        why: 'Iron- and vitamin-A rich liver, quick-cooked to stay tender.',
        ingredients: ['Pork liver 200g, sliced','Garlic chives or leek 150g','Ginger, garlic','Soy, cooking wine, starch'],
        steps: ['Soak liver in water 10 min; drain and toss with soy, wine and starch.','Blanch liver 30 sec, drain.','Stir-fry ginger and garlic, add liver, then chives; season and serve.'],
        notes: 'Quick cooking keeps liver tender; overcooking makes it grainy.'
      },
      zh: {
        name: '韭菜炒猪肝',
        time: '12 分钟',
        servings: '2 份',
        why: '高铁高维A，快炒保嫩。',
        ingredients: ['猪肝 200g 切片','韭菜或蒜苗 150g','姜、蒜','生抽、料酒、淀粉'],
        steps: ['猪肝水泡 10 分钟，沥干加生抽、料酒、淀粉。','焯水 30 秒沥干。','姜蒜爆炒，下肝再下韭菜，调味即可。'],
        notes: '快炒保嫩，过熟会起沙。'
      },
      macros: { protein: { g: 24, pct: 38 }, fat: { g: 8, pct: 26 }, netCarbs: { g: 6, pct: 16 } }
    },
    {
      id: 'd28',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','gut-healing','batch-cook'],
      contains: ['soy'],
      focus: ['Gut healing','Batch cook'],
      img: 'braised-pork-feet.jpg',
      emoji: '🍖',
      en: {
        name: 'Braised Pork Feet',
        time: '2 hr',
        servings: '4',
        why: 'Collagen-rich, slow-braised until meltingly tender.',
        ingredients: ['Pork feet 1 kg','Soy sauce 1/3 cup, dark soy 2 tbsp','Rock sugar 2 tbsp','Ginger, star anise, cooking wine','Water to cover'],
        steps: ['Blanch pork feet 5 min; rinse.','Simmer with all seasonings and water 1.5–2 hr until tender.','Reduce sauce to glossy; serve hot.'],
        notes: 'Make ahead — flavour improves overnight; skim fat before reheating.'
      },
      zh: {
        name: '红烧猪脚',
        time: '2 小时',
        servings: '4 份',
        why: '富含胶原蛋白，慢炖至软糯。',
        ingredients: ['猪脚 1 kg','生抽 1/3 杯、老抽 2 汤匙','冰糖 2 汤匙','姜、八角、料酒','水 适量'],
        steps: ['猪脚焯水 5 分钟洗净。','加所有调料与水小火 1.5–2 小时至软糯。','收汁挂亮，趁热食。'],
        notes: '提前做好味更浓；复热前撇油。'
      },
      macros: { protein: { g: 28, pct: 30 }, fat: { g: 36, pct: 60 }, netCarbs: { g: 6, pct: 10 } }
    },
    {
      id: 'd29',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','high-protein','quick-easy','gluten-free','gut-healing'],
      contains: ['fish','soy','sesame'],
      focus: ['High protein','Gut healing'],
      img: 'teriyaki-salmon.jpg',
      emoji: '🍣',
      en: {
        name: 'Teriyaki Glazed Salmon',
        time: '15 min',
        servings: '2',
        why: 'Omega-3-rich salmon with a glossy sweet-savoury glaze.',
        ingredients: ['Salmon fillets 2','Soy 2 tbsp, mirin 2 tbsp, sugar 1 tsp','Ginger 1 tsp grated','Sesame seeds, spring onion'],
        steps: ['Sear salmon skin-down 3 min; flip and cook 2 min.','Add soy, mirin, sugar and ginger; spoon glaze over until thick.','Top with sesame and spring onion.'],
        notes: 'Serve with steamed rice or greens.'
      },
      zh: {
        name: '照烧三文鱼',
        time: '15 分钟',
        servings: '2 份',
        why: '富含Omega-3，甜咸挂汁。',
        ingredients: ['三文鱼柳 2 块','生抽 2 汤匙、味淋 2 汤匙、糖 1 茶匙','姜 1 茶匙磨泥','芝麻、葱花'],
        steps: ['鱼皮朝下煎 3 分钟，翻面 2 分钟。','加生抽、味淋、糖、姜，淋汁挂稠。','撒芝麻葱花。'],
        notes: '配米饭或青菜。'
      },
      macros: { protein: { g: 34, pct: 45 }, fat: { g: 22, pct: 45 }, netCarbs: { g: 4, pct: 10 } }
    },
    {
      id: 'd30',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','high-protein','batch-cook'],
      contains: ['soy'],
      focus: ['High protein','Batch cook'],
      img: 'braised-chicken-drumsticks.jpg',
      emoji: '🍗',
      en: {
        name: 'Soy-Braised Chicken Drumsticks',
        time: '45 min',
        servings: '4',
        why: 'Fall-apart drumsticks in a deeply savoury soy rock-sugar glaze.',
        ingredients: ['Chicken drumsticks 8','Soy 3 tbsp, dark soy 1 tbsp','Rock sugar 1 tbsp, cooking wine 2 tbsp','Ginger, star anise, water'],
        steps: ['Brown drumsticks in oil.','Add ginger, star anise, soy, wine, sugar and water to nearly cover.','Simmer 30 min, turning once, until tender.','Reduce sauce to coat.'],
        notes: 'Make a day ahead; the flavour deepens overnight.'
      },
      zh: {
        name: '红烧鸡腿',
        time: '45 分钟',
        servings: '4 份',
        why: '脱骨鸡腿，酱香浓挂。',
        ingredients: ['鸡腿 8 只','生抽 3 汤匙、老抽 1 汤匙','冰糖 1 汤匙、料酒 2 汤匙','姜、八角、水'],
        steps: ['鸡腿煎至上色。','加姜、八角、生抽、酒、糖、水近没。','小火 30 分钟翻一次至软。','收汁挂匀。'],
        notes: '提前一天更入味。'
      },
      macros: { protein: { g: 30, pct: 45 }, fat: { g: 18, pct: 45 }, netCarbs: { g: 4, pct: 10 } }
    },
    {
      id: 'd31',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','gut-healing','high-protein','batch-cook'],
      contains: ['soy'],
      focus: ['Gut healing','Batch cook'],
      img: 'braised-beef-shank.jpg',
      emoji: '🥩',
      en: {
        name: 'Braised Beef Shank',
        time: '2.5 hr',
        servings: '6',
        why: 'Slow-braised shank turns meltingly tender; the gelatin is gut-friendly.',
        ingredients: ['Beef shank 1 kg','Soy 1/3 cup, dark soy 2 tbsp','Rock sugar, star anise, cinnamon, ginger','Cooking wine 1/4 cup','Water to cover'],
        steps: ['Blanch shank 5 min; rinse.','Simmer with all seasonings and water 2–2.5 hr until a skewer slides in easily.','Cool in the liquid, then slice thinly.','Reduce braising liquid to a dipping sauce.'],
        notes: 'Chilled slices make a great cold plate; broth keeps for soups.'
      },
      zh: {
        name: '卤牛腱',
        time: '2.5 小时',
        servings: '6 份',
        why: '慢卤至软糯，胶质养胃。',
        ingredients: ['牛腱 1 kg','生抽 1/3 杯、老抽 2 汤匙','冰糖、八角、桂皮、姜','料酒 1/4 杯','水 适量'],
        steps: ['牛腱焯水 5 分钟洗净。','加所有调料与水小火 2–2.5 小时至筷子穿透。','卤汁中晾凉切薄片。','卤汁收浓作蘸料。'],
        notes: '冷片作冷盘；卤汁留作汤底。'
      },
      macros: { protein: { g: 32, pct: 55 }, fat: { g: 10, pct: 30 }, netCarbs: { g: 4, pct: 15 } }
    },
    {
      id: 'd32',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','gut-healing','batch-cook','gluten-free'],
      contains: ['soy','fish'],
      focus: ['Gut healing','Batch cook'],
      img: 'pork-rib-lotus-soup.jpg',
      emoji: '🍲',
      en: {
        name: 'Pork Rib and Lotus Root Soup',
        time: '1.5 hr',
        servings: '4',
        why: 'A clear, nourishing slow soup; lotus root is crunchy and soothing.',
        ingredients: ['Pork ribs 400g','Lotus root 300g, sliced','Ginger 3 slices','Goji berries 1 tbsp','Water 8 cups'],
        steps: ['Blanch ribs 3 min; rinse.','Simmer ribs, lotus root, ginger and water 1 hour.','Add goji; simmer 15 min; salt to taste.'],
        notes: 'A clay pot gives the clearest, sweetest soup.'
      },
      zh: {
        name: '排骨莲藕汤',
        time: '1.5 小时',
        servings: '4 份',
        why: '清润慢汤，莲藕粉脆养胃。',
        ingredients: ['排骨 400g','莲藕 300g 切片','姜 3 片','枸杞 1 汤匙','水 8 杯'],
        steps: ['排骨焯水 3 分钟洗净。','排骨、莲藕、姜、水小火 1 小时。','加枸杞 15 分钟，盐调味。'],
        notes: '砂锅煲最清甜。'
      },
      macros: { protein: { g: 22, pct: 45 }, fat: { g: 12, pct: 40 }, netCarbs: { g: 6, pct: 15 } }
    },
    {
      id: 'd33',
      type: 'dinner',
      carb: 'moderate',
      tags: ['quick-easy','vegetarian','gluten-free','gut-healing'],
      contains: ['dairy'],
      focus: ['Gut healing','Quick & easy'],
      img: 'mashed-potato.jpg',
      emoji: '🥔',
      en: {
        name: 'Mashed Potato',
        time: '20 min',
        servings: '4',
        why: 'A soft, easily digested side; gentle on the stomach.',
        ingredients: ['Potatoes 600g','Butter 2 tbsp','Milk or cream 1/4 cup','Salt, white pepper'],
        steps: ['Boil peeled potatoes 15 min until tender; drain.','Mash with butter, milk, salt and pepper until smooth.','Taste and adjust seasoning.'],
        notes: 'For a lighter version, swap butter/milk for stock.'
      },
      zh: {
        name: '土豆泥',
        time: '20 分钟',
        servings: '4 份',
        why: '软糯易消化的配菜，养胃。',
        ingredients: ['土豆 600g','黄油 2 汤匙','牛奶或淡奶油 1/4 杯','盐、白胡椒'],
        steps: ['去皮土豆煮 15 分钟至软，沥干。','加黄油、奶、盐胡椒压成泥。','调咸淡。'],
        notes: '清淡版可用高汤代奶。'
      },
      macros: { protein: { g: 4, pct: 9 }, fat: { g: 7, pct: 30 }, netCarbs: { g: 28, pct: 61 } }
    },
    {
      id: 'd34',
      type: 'dinner',
      carb: 'moderate',
      tags: ['quick-easy','vegetarian','vegan','gluten-free','gut-healing'],
      contains: [],
      focus: ['Gut healing','Quick & easy'],
      img: 'roasted-sweet-potato.jpg',
      emoji: '🍠',
      en: {
        name: 'Roasted Sweet Potato',
        time: '40 min',
        servings: '2',
        why: 'Naturally sweet, fibre-rich, and gentle on digestion.',
        ingredients: ['Sweet potatoes 2','Olive oil 1 tsp','Salt, cinnamon (optional)'],
        steps: ['Heat oven to 200°C.','Rub potatoes with oil and salt.','Roast 35–40 min until a knife slides through.'],
        notes: 'Top with butter and cinnamon for a sweeter side.'
      },
      zh: {
        name: '烤红薯',
        time: '40 分钟',
        servings: '2 份',
        why: '自然甜、纤维高，养胃。',
        ingredients: ['红薯 2 个','橄榄油 1 茶匙','盐、肉桂（可选）'],
        steps: ['烤箱 200°C。','红薯抹油盐。','烤 35–40 分钟至刀透。'],
        notes: '抹黄油肉桂更甜。'
      },
      macros: { protein: { g: 4, pct: 7 }, fat: { g: 2, pct: 8 }, netCarbs: { g: 38, pct: 85 } }
    },
    {
      id: 'd35',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','gut-healing','quick-easy','gluten-free','high-protein'],
      contains: ['egg','soy','fish'],
      focus: ['Gut healing','Quick & easy'],
      img: 'seaweed-egg-soup.jpg',
      emoji: '🌊',
      en: {
        name: 'Seaweed Egg Drop Soup',
        time: '10 min',
        servings: '2',
        why: 'A mineral-rich, light soup with silky egg and nori.',
        ingredients: ['Stock or water 4 cups','Dried seaweed/nori 5g','Eggs 2','Soy 1 tbsp, sesame oil 1 tsp','White pepper'],
        steps: ['Bring stock to a boil; add seaweed.','Drizzle beaten egg in a thin stream to form ribbons.','Season with soy, sesame oil and pepper.'],
        notes: 'A 5-minute soup when you need something warm and gentle.'
      },
      zh: {
        name: '紫菜蛋花汤',
        time: '10 分钟',
        servings: '2 份',
        why: '矿物质丰富，紫菜蛋花清淡。',
        ingredients: ['高汤或水 4 杯','紫菜 5g','鸡蛋 2 个','生抽 1 汤匙、香油 1 茶匙','白胡椒'],
        steps: ['汤烧开下紫菜。','蛋液细流淋入成蛋花。','生抽香油胡椒调味。'],
        notes: '5 分钟暖汤。'
      },
      macros: { protein: { g: 12, pct: 35 }, fat: { g: 7, pct: 35 }, netCarbs: { g: 4, pct: 30 } }
    },
    {
      id: 'd36',
      type: 'dinner',
      carb: 'low',
      tags: ['asian','gut-healing','quick-easy','vegetarian','vegan','gluten-free'],
      contains: ['soy'],
      focus: ['Gut healing','Quick & easy'],
      img: 'mushroom-tofu-soup.jpg',
      emoji: '🍄',
      en: {
        name: 'Mushroom Tofu Soup',
        time: '20 min',
        servings: '2',
        why: 'A savoury, umami soup with soft tofu and mushrooms.',
        ingredients: ['Mixed mushrooms 200g','Silken tofu 1 block','Stock 4 cups','Soy 1 tbsp, sesame oil 1 tsp','Spring onion'],
        steps: ['Simmer mushrooms in stock 8 min.','Add cubed tofu; simmer 5 min.','Season with soy and sesame oil; top with spring onion.'],
        notes: 'Shiitake, oyster and enoki make a good mix.'
      },
      zh: {
        name: '菌菇豆腐汤',
        time: '20 分钟',
        servings: '2 份',
        why: '鲜味汤，豆腐菌菇软嫩。',
        ingredients: ['混合菌菇 200g','内酯豆腐 1 盒','高汤 4 杯','生抽 1 汤匙、香油 1 茶匙','葱花'],
        steps: ['菌菇入汤煮 8 分钟。','加豆腐丁煮 5 分钟。','生抽香油调味，撒葱花。'],
        notes: '香菇、杏鲍菇、金针菇混搭。'
      },
      macros: { protein: { g: 12, pct: 35 }, fat: { g: 6, pct: 30 }, netCarbs: { g: 8, pct: 35 } }
    },
    {
      id: 'd37',
      type: 'dinner',
      carb: 'low',
      tags: ['gut-healing','high-protein','quick-easy','gluten-free'],
      contains: [],
      focus: ['Gut healing','High protein'],
      img: 'tomato-beef-soup.jpg',
      emoji: '🍅',
      en: {
        name: 'Tomato Beef Soup',
        time: '35 min',
        servings: '4',
        why: 'A tangy, comforting soup with tender beef and ripe tomatoes.',
        ingredients: ['Beef chuck 300g, cubed','Ripe tomatoes 4','Onion 1, garlic 2 cloves','Stock 4 cups, salt, bay leaf'],
        steps: ['Brown beef with onion and garlic.','Add tomatoes; cook until they break down.','Pour in stock and bay leaf; simmer 25 min.','Season with salt.'],
        notes: 'Pressure-cook for 12 min to cut the time drastically.'
      },
      zh: {
        name: '番茄牛肉汤',
        time: '35 分钟',
        servings: '4 份',
        why: '酸甜暖胃，牛肉软烂。',
        ingredients: ['牛腩 300g 切块','熟番茄 4 个','洋葱 1 个、蒜 2 瓣','高汤 4 杯、盐、香叶'],
        steps: ['牛腩与洋葱蒜煸炒。','加番茄炒至出沙。','加高汤香叶煮 25 分钟。','盐调味。'],
        notes: '高压锅 12 分钟更快。'
      },
      macros: { protein: { g: 26, pct: 45 }, fat: { g: 12, pct: 35 }, netCarbs: { g: 8, pct: 20 } }
    },

    /* ---------- Snacks ---------- */
    {
      id: 's20',
      type: 'snack',
      carb: 'low',
      tags: ['quick-easy','no-cook','vegetarian','vegan','gluten-free'],
      contains: ['nuts'],
      focus: ['Quick & easy','No-cook'],
      img: 'toasted-walnuts.jpg',
      emoji: '🌰',
      en: {
        name: 'Toasted Walnuts',
        time: '8 min',
        servings: '4',
        why: 'Omega-3-rich crunch; toasting deepens flavour.',
        ingredients: ['Walnut halves 1 cup','Pinch of salt'],
        steps: ['Toast walnuts in a dry pan 5 min over medium heat, stirring.','Sprinkle with salt; cool before serving.'],
        notes: 'Cool fully to keep them crisp.'
      },
      zh: {
        name: '烤核桃',
        time: '8 分钟',
        servings: '4 份',
        why: '富含Omega-3，烘烤更香。',
        ingredients: ['核桃仁 1 杯','盐 少许'],
        steps: ['干锅中火烘 5 分钟搅拌。','撒盐，晾凉再吃。'],
        notes: '完全晾凉才脆。'
      },
      macros: { protein: { g: 5, pct: 10 }, fat: { g: 20, pct: 80 }, netCarbs: { g: 4, pct: 10 } }
    },
    {
      id: 's21',
      type: 'snack',
      carb: 'moderate',
      tags: ['quick-easy','no-cook','vegetarian','vegan','gluten-free'],
      contains: ['nuts'],
      focus: ['Quick & easy','No-cook'],
      img: 'nut-butter-stuffed-dates.jpg',
      emoji: '🍯',
      en: {
        name: 'Nut Butter Stuffed Dates',
        time: '5 min',
        servings: '4',
        why: 'A naturally sweet, energy-boosting snack with healthy fats.',
        ingredients: ['Medjool dates 8','Almond or peanut butter 4 tbsp','Flaky salt'],
        steps: ['Pit the dates.','Spoon nut butter into each; sprinkle with salt.'],
        notes: 'Chill 10 min so the butter firms up.'
      },
      zh: {
        name: '坚果酱夹心椰枣',
        time: '5 分钟',
        servings: '4 份',
        why: '天然甜、能量足，含好脂肪。',
        ingredients: ['椰枣 8 颗','杏仁酱或花生酱 4 汤匙','海盐片'],
        steps: ['枣去核。','填入坚果酱，撒盐。'],
        notes: '冷藏 10 分钟更凝实。'
      },
      macros: { protein: { g: 4, pct: 8 }, fat: { g: 14, pct: 50 }, netCarbs: { g: 22, pct: 42 } }
    },
    {
      id: 's22',
      type: 'snack',
      carb: 'low',
      tags: ['asian','quick-easy','vegetarian','vegan','gluten-free'],
      contains: ['soy','sesame'],
      focus: ['Quick & easy'],
      img: 'smashed-cucumber.jpg',
      emoji: '🥒',
      en: {
        name: 'Smashed Cucumber Salad',
        time: '10 min',
        servings: '2',
        why: 'A refreshing, crunchy cold side with a garlicky soy dressing.',
        ingredients: ['Cucumber 2','Garlic 2 cloves','Soy 1 tbsp, vinegar 1 tbsp, sesame oil 1 tsp','Chilli flakes (optional)'],
        steps: ['Smash cucumbers with a rolling pin; tear into chunks.','Toss with minced garlic, soy, vinegar, sesame oil and chilli.','Chill 5 min before serving.'],
        notes: 'Smashing helps the dressing soak in.'
      },
      zh: {
        name: '凉拌拍黄瓜',
        time: '10 分钟',
        servings: '2 份',
        why: '脆爽凉菜，蒜香酱汁。',
        ingredients: ['黄瓜 2 根','蒜 2 瓣','生抽 1 汤匙、醋 1 汤匙、香油 1 茶匙','辣椒片（可选）'],
        steps: ['擀面杖拍碎黄瓜撕块。','拌蒜蓉、生抽、醋、香油、辣椒。','冷藏 5 分钟。'],
        notes: '拍碎更入味。'
      },
      macros: { protein: { g: 2, pct: 12 }, fat: { g: 5, pct: 40 }, netCarbs: { g: 5, pct: 48 } }
    },
    {
      id: 's23',
      type: 'snack',
      carb: 'moderate',
      tags: ['quick-easy','no-cook','vegetarian','gluten-free'],
      contains: ['dairy'],
      focus: ['Quick & easy','No-cook'],
      img: 'grapes-cheddar.jpg',
      emoji: '🧀',
      en: {
        name: 'Grapes with Cheddar',
        time: '2 min',
        servings: '1',
        why: 'A sweet-salty, no-prep snack with protein and fruit.',
        ingredients: ['Grapes 1 cup','Aged cheddar 40g, cubed'],
        steps: ['Cube the cheese; plate with grapes.'],
        notes: 'Any firm cheese works — try manchego or gouda.'
      },
      zh: {
        name: '葡萄配车打奶酪',
        time: '2 分钟',
        servings: '1 份',
        why: '咸甜免备，蛋白配水果。',
        ingredients: ['葡萄 1 杯','陈年车打奶酪 40g 切丁'],
        steps: ['奶酪切丁，与葡萄同盘。'],
        notes: '可用曼彻格或高达。'
      },
      macros: { protein: { g: 10, pct: 25 }, fat: { g: 12, pct: 50 }, netCarbs: { g: 14, pct: 25 } }
    },
    {
      id: 's24',
      type: 'snack',
      carb: 'low',
      tags: ['gut-healing','asian','batch-cook','gluten-free'],
      contains: [],
      focus: ['Gut healing'],
      img: 'chicken-bone-broth.jpg',
      emoji: '🍵',
      en: {
        name: 'Chicken Bone Broth',
        time: '12 hr',
        servings: '6',
        why: 'Long-simmered broth rich in collagen and minerals; sips like a warm tonic.',
        ingredients: ['Chicken carcass / bones 1 kg','Carrot, onion, celery','Ginger, peppercorns, vinegar 1 tbsp','Water 10 cups'],
        steps: ['Roast bones 30 min for deeper flavour.','Simmer all with water 8–12 hr, skimming foam.','Strain; season with salt.'],
        notes: 'Freeze in jars; sip warm or use as a cooking base.'
      },
      zh: {
        name: '鸡骨汤',
        time: '12 小时',
        servings: '6 份',
        why: '久熬出胶原矿物质，暖身如饮汤。',
        ingredients: ['鸡架/鸡骨 1 kg','胡萝卜、洋葱、芹菜','姜、胡椒、醋 1 汤匙','水 10 杯'],
        steps: ['骨头烤 30 分钟更香。','加水小火 8–12 小时撇沫。','过滤，盐调味。'],
        notes: '分装冷冻，可饮可作汤底。'
      },
      macros: { protein: { g: 6, pct: 40 }, fat: { g: 2, pct: 30 }, netCarbs: { g: 2, pct: 30 } }
    },
    {
      id: 's25',
      type: 'snack',
      carb: 'low',
      tags: ['gut-healing','batch-cook','gluten-free'],
      contains: [],
      focus: ['Gut healing'],
      img: 'beef-bone-broth.jpg',
      emoji: '🍵',
      en: {
        name: 'Beef Bone Broth',
        time: '18 hr',
        servings: '6',
        why: 'Rich, gelatinous broth from marrow bones — deeply nourishing.',
        ingredients: ['Beef bones (marrow / knuckle) 1 kg','Onion, carrot, celery','Peppercorns, bay, vinegar 1 tbsp','Water 10 cups'],
        steps: ['Roast bones 40 min at 200°C.','Simmer with veg and water 12–18 hr.','Strain; season with salt.'],
        notes: 'The longer the simmer, the more collagen extracted.'
      },
      zh: {
        name: '牛骨汤',
        time: '18 小时',
        servings: '6 份',
        why: '骨髓骨熬出胶质，滋补。',
        ingredients: ['牛骨（骨髓/关节）1 kg','洋葱、胡萝卜、芹菜','胡椒、香叶、醋 1 汤匙','水 10 杯'],
        steps: ['骨头 200°C 烤 40 分钟。','加菜与水小火 12–18 小时。','过滤，盐调味。'],
        notes: '越久胶原越多。'
      },
      macros: { protein: { g: 7, pct: 45 }, fat: { g: 3, pct: 35 }, netCarbs: { g: 1, pct: 20 } }
    },
    {
      id: 's26',
      type: 'snack',
      carb: 'low',
      tags: ['gut-healing','asian','batch-cook','gluten-free'],
      contains: [],
      focus: ['Gut healing'],
      img: 'pork-bone-broth.jpg',
      emoji: '🍵',
      en: {
        name: 'Pork Bone Broth',
        time: '10 hr',
        servings: '6',
        why: 'A milky-white, collagen-rich broth — the base of tonkotsu and many soups.',
        ingredients: ['Pork bones (trotter / ribs) 1 kg','Ginger, spring onion','Peppercorns','Water 10 cups'],
        steps: ['Blanch bones 5 min; rinse well.','Simmer with ginger, onion and water 8–10 hr, keeping it at a gentle boil for a milky colour.','Strain; season with salt.'],
        notes: 'A rolling boil gives the signature milky white colour.'
      },
      zh: {
        name: '猪骨汤',
        time: '10 小时',
        servings: '6 份',
        why: '奶白胶原汤，豚骨汤底。',
        ingredients: ['猪骨（猪蹄/排骨）1 kg','姜、葱','胡椒','水 10 杯'],
        steps: ['骨焯水 5 分钟洗净。','加姜葱水微滚 8–10 小时成奶白。','过滤，盐调味。'],
        notes: '保持微滚才出奶白。'
      },
      macros: { protein: { g: 6, pct: 40 }, fat: { g: 4, pct: 40 }, netCarbs: { g: 1, pct: 20 } }
    },
    {
      id: 's27',
      type: 'snack',
      carb: 'low',
      tags: ['gut-healing','asian','gluten-free'],
      contains: ['fish'],
      focus: ['Gut healing'],
      img: 'fish-meat-stock.jpg',
      emoji: '🍲',
      en: {
        name: 'Fish Meat Stock',
        time: '1.5 hr',
        servings: '4',
        why: 'A short-simmered, meaty fish stock — lighter than bone broth, GAPS-friendly.',
        ingredients: ['Fish heads / frames with meat 500g','Onion, leek, ginger','Water 6 cups, white wine 1/4 cup'],
        steps: ['Cover bones with cold water; bring just to a simmer.','Skim foam; add veg and wine.','Simmer 1–2 hr gently; strain.'],
        notes: 'Meat stock cooks 1–2 hr for fish; longer gives a stronger bone broth.'
      },
      zh: {
        name: '鱼肉高汤',
        time: '1.5 小时',
        servings: '4 份',
        why: '短炖肉鱼汤，比骨汤轻，GAPS 友好。',
        ingredients: ['带肉鱼头/鱼架 500g','洋葱、大葱、姜','水 6 杯、白酒 1/4 杯'],
        steps: ['骨加冷水刚煮开。','撇沫，加菜与酒。','小火 1–2 小时，过滤。'],
        notes: '鱼肉肉汤炖 1–2 小时；更久则为骨汤。'
      },
      macros: { protein: { g: 8, pct: 45 }, fat: { g: 2, pct: 25 }, netCarbs: { g: 1, pct: 30 } }
    },
    {
      id: 's28',
      type: 'snack',
      carb: 'low',
      tags: ['gut-healing','batch-cook','gluten-free'],
      contains: [],
      focus: ['Gut healing'],
      img: 'chicken-meat-stock.jpg',
      emoji: '🍲',
      en: {
        name: 'Chicken Meat Stock',
        time: '3 hr',
        servings: '4',
        why: 'Meaty chicken joints simmered 2–4 hr — a GAPS-style restorative stock.',
        ingredients: ['Chicken wings / backs / feet 700g','Onion, carrot, celery','Water 8 cups, vinegar 1 tbsp'],
        steps: ['Cover meaty joints with water and vinegar.','Simmer 2–4 hr, skimming foam.','Strain; season with salt.'],
        notes: 'Meat stock is shorter than bone broth; use within 5 days or freeze.'
      },
      zh: {
        name: '鸡肉高汤',
        time: '3 小时',
        servings: '4 份',
        why: '带肉鸡件炖 2–4 小时，GAPS 修护汤。',
        ingredients: ['鸡翅/鸡架/鸡爪 700g','洋葱、胡萝卜、芹菜','水 8 杯、醋 1 汤匙'],
        steps: ['带肉件加水醋。','小火 2–4 小时撇沫。','过滤，盐调味。'],
        notes: '肉汤比骨汤时间短；5 天内食完或冷冻。'
      },
      macros: { protein: { g: 9, pct: 45 }, fat: { g: 3, pct: 30 }, netCarbs: { g: 1, pct: 25 } }
    },
    {
      id: 's29',
      type: 'snack',
      carb: 'low',
      tags: ['gut-healing','batch-cook','gluten-free'],
      contains: [],
      focus: ['Gut healing'],
      img: 'beef-meat-stock.jpg',
      emoji: '🍲',
      en: {
        name: 'Beef Meat Stock',
        time: '6 hr',
        servings: '4',
        why: 'Meaty beef joints simmered 4–8 hr for a deeply restorative GAPS stock.',
        ingredients: ['Beef shank / oxtail / marrow bones with meat 700g','Onion, carrot, peppercorns','Water 8 cups, vinegar 1 tbsp'],
        steps: ['Brown meaty bones in a hot pan.','Cover with water and vinegar; simmer 4–8 hr, skimming.','Strain; season with salt.'],
        notes: 'Use the tender meat for soup; keep the stock for sipping or cooking.'
      },
      zh: {
        name: '牛肉高汤',
        time: '6 小时',
        servings: '4 份',
        why: '带肉牛件炖 4–8 小时，GAPS 修护汤。',
        ingredients: ['牛腱/牛尾/带肉骨髓骨 700g','洋葱、胡萝卜、胡椒','水 8 杯、醋 1 汤匙'],
        steps: ['带肉骨热锅煎香。','加水醋小火 4–8 小时撇沫。','过滤，盐调味。'],
        notes: '肉可入汤，汤可饮可煮。'
      },
      macros: { protein: { g: 10, pct: 45 }, fat: { g: 4, pct: 35 }, netCarbs: { g: 1, pct: 20 } }
    },

    /* ---------- New recipes (l44–l50, d38, s30–s32) ---------- */

    /* 1. High-protein fried rice — heavy on eggs, veggies & Chinese sausage,
          light on rice */
    {
      id: 'l44',
      type: 'lunch',
      types: ['lunch','dinner'],
      carb: 'moderate',
      tags: ['asian','quick-easy','high-protein','batch-cook'],
      contains: ['egg','soy'],
      focus: ['High protein'],
      img: 'high-protein-fried-rice.jpg',
      emoji: '🍳',
      en: {
        name: 'High-Protein Fried Rice',
        time: '15 min',
        servings: '2',
        why: 'More eggs, more veggies, less rice — a protein-forward twist on a takeaway classic.',
        ingredients: [
          'Cooked rice (cold) 1 cup',
          'Eggs 3',
          'Chinese sausage (lap cheong) 50g, sliced',
          'Frozen mixed vegetables 1 cup',
          'Garlic 2 cloves, minced',
          'Light soy sauce 1 tbsp, sesame oil 1 tsp',
          'Spring onion to garnish'
        ],
        steps: [
          'Heat a wok or large pan with a little oil; scramble the eggs quickly, then set aside.',
          'Stir-fry the sliced sausage until lightly caramelised; add garlic and frozen veg.',
          'Add the cold rice, breaking up clumps; toss over high heat 2–3 min.',
          'Return eggs, drizzle soy and sesame oil; toss to combine.',
          'Garnish with spring onion and serve.'
        ],
        notes: 'Using cold, day-old rice gives the best texture. Add more eggs for extra protein.'
      },
      zh: {
        name: '高蛋白蛋炒饭',
        time: '15 分钟',
        servings: '2 份',
        why: '蛋多菜多饭少，蛋白质满满的改良炒饭。',
        ingredients: ['冷饭 1 碗','鸡蛋 3 个','广式腊肠 50g 切片','冷冻杂菜 1 碗','蒜 2 瓣切末','生抽 1 汤匙、麻油 1 茶匙','葱花适量'],
        steps: ['热锅少油，鸡蛋快速炒散，盛出备用。','腊肠片煎至微焦，加蒜末和杂菜翻炒。','加入冷饭打散，大火翻炒 2–3 分钟。','放回鸡蛋，淋生抽和麻油翻匀。','撒葱花出锅。'],
        notes: '用隔夜冷饭口感最佳，多加蛋更营养。'
      },
      macros: { protein: { g: 22, pct: 25 }, fat: { g: 20, pct: 45 }, netCarbs: { g: 25, pct: 30 } }
    },

    /* 2. Crackers with cheese */
    {
      id: 's30',
      type: 'snack',
      carb: 'moderate',
      tags: ['quick-easy','no-cook'],
      contains: ['dairy','gluten'],
      focus: [],
      img: 'crackers-with-cheese.jpg',
      emoji: '🧀',
      en: {
        name: 'Crackers with Cheese',
        time: '2 min',
        servings: '1',
        why: 'A simple, satisfying snack with carbs, fat and protein for steady energy.',
        ingredients: [
          'Whole-grain crackers 4',
          'Cheddar cheese 40g, sliced'
        ],
        steps: ['Arrange cheese slices on crackers. Serve.'],
        notes: 'Add a slice of apple or cherry tomatoes for extra fibre.'
      },
      zh: {
        name: '芝士梳打饼',
        time: '2 分钟',
        servings: '1 份',
        why: '简单的碳水加蛋白质加脂肪组合，稳能量的快手小食。',
        ingredients: ['全麦梳打饼 4 块','车打芝士 40g 切片'],
        steps: ['芝士片放饼上即可。'],
        notes: '可加苹果片或小番茄增加纤维。'
      },
      macros: { protein: { g: 10, pct: 15 }, fat: { g: 14, pct: 47 }, netCarbs: { g: 20, pct: 38 } }
    },

    /* 3. Sardines (canned) */
    {
      id: 's31',
      type: 'snack',
      carb: 'low',
      tags: ['no-cook','high-protein','gut-healing','gluten-free'],
      contains: ['fish'],
      focus: ['Gut healing','High protein'],
      img: 'canned-sardines.jpg',
      emoji: '🐟',
      en: {
        name: 'Canned Sardines',
        time: '1 min',
        servings: '1',
        why: 'Omega-3-rich fish with bones for calcium — one of nature\u2019s most nutrient-dense snacks.',
        ingredients: [
          'Canned sardines in olive oil 1 tin (≈ 92g)',
          'Lemon juice or hot sauce to taste'
        ],
        steps: ['Open tin, drain excess oil. Squeeze lemon or add hot sauce. Eat from the tin or plate.'],
        notes: 'Bones are soft and edible — they provide calcium.'
      },
      zh: {
        name: '沙丁鱼罐头',
        time: '1 分钟',
        servings: '1 份',
        why: '富含 Omega-3 与钙质（骨可食），天然高营养小食。',
        ingredients: ['橄榄油沙丁鱼罐头 1 罐（约 92g）','柠檬汁或辣酱适量'],
        steps: ['开罐沥油，挤柠檬汁或加辣酱即可。'],
        notes: '鱼骨软可食，是天然钙源。'
      },
      macros: { protein: { g: 23, pct: 48 }, fat: { g: 11, pct: 52 }, netCarbs: { g: 0, pct: 0 } }
    },

    /* 4. Simple tuna salad */
    {
      id: 'l45',
      type: 'lunch',
      carb: 'low',
      tags: ['no-cook','high-protein','quick-easy','gluten-free'],
      contains: ['fish','egg','soy'],
      focus: ['High protein'],
      img: 'simple-tuna-salad.jpg',
      emoji: '🥗',
      en: {
        name: 'Simple Tuna Salad',
        time: '5 min',
        servings: '1',
        why: 'No-cook, high-protein lunch that travels well — just mix and eat.',
        ingredients: [
          'Canned tuna in water 1 tin (≈ 140g), drained',
          'Mayonnaise 2 tbsp',
          'Celery 1 stalk, finely diced',
          'Red onion 1 tbsp, minced',
          'Lettuce leaves for serving',
          'Salt and pepper to taste'
        ],
        steps: ['Flake tuna into a bowl. Add mayo, celery, onion, salt and pepper. Mix well.','Serve on lettuce leaves or with crackers.'],
        notes: 'Swap mayo for Greek yogurt for a lighter version.'
      },
      zh: {
        name: '简易金枪鱼沙拉',
        time: '5 分钟',
        servings: '1 份',
        why: '免煮高蛋白午餐，混合即食，适合外带。',
        ingredients: ['水浸金枪鱼罐头 1 罐（约 140g），沥干','蛋黄酱 2 汤匙','芹菜 1 根切丁','红洋葱 1 汤匙切末','生菜叶数片','盐胡椒适量'],
        steps: ['金枪鱼放入碗中，加蛋黄酱、芹菜、洋葱、盐和胡椒拌匀。','配生菜叶或梳打饼食用。'],
        notes: '用希腊酸奶代替蛋黄酱可减脂。'
      },
      macros: { protein: { g: 31, pct: 53 }, fat: { g: 11, pct: 42 }, netCarbs: { g: 3, pct: 5 } }
    },

    /* 5. Plain white rice (1 : 1.5 ratio) */
    {
      id: 'l46',
      type: 'lunch',
      types: ['lunch','dinner'],
      carb: 'moderate',
      tags: ['quick-easy','vegetarian','vegan','gluten-free'],
      contains: [],
      focus: [],
      img: 'plain-white-rice.jpg',
      emoji: '🍚',
      en: {
        name: 'Plain White Rice',
        time: '20 min',
        servings: '2',
        why: 'A fluffy, neutral base that pairs with any stir-fry, stew or curry.',
        ingredients: [
          'White rice (jasmine or short-grain) 1 cup',
          'Water 1½ cups'
        ],
        steps: ['Rinse rice until water runs clear.','Combine rice and water in a pot; bring to a boil.','Cover, reduce to lowest heat and cook 15 min.','Rest off heat 5 min, then fluff with a fork.'],
        notes: 'Ratio 1 : 1.5 (rice : water). For rice cooker, use the same ratio.'
      },
      zh: {
        name: '白米饭',
        time: '20 分钟',
        servings: '2 份',
        why: '蓬松中性的主食基底，百搭炒菜炖菜。',
        ingredients: ['白米（茉莉或圆粒）1 杯','水 1.5 杯'],
        steps: ['淘米至水清。','米水入锅大火煮开。','盖盖转小火煮 15 分钟。','离火焖 5 分钟，松饭。'],
        notes: '米水比 1 : 1.5。电饭锅同比例。'
      },
      macros: { protein: { g: 4, pct: 9 }, fat: { g: 0, pct: 0 }, netCarbs: { g: 45, pct: 91 } }
    },

    /* 6. Plain brown rice (1 : 2 ratio) */
    {
      id: 'l47',
      type: 'lunch',
      types: ['lunch','dinner'],
      carb: 'moderate',
      tags: ['quick-easy','vegetarian','vegan','gluten-free','gut-healing'],
      contains: [],
      focus: ['Gut healing'],
      img: 'plain-brown-rice.jpg',
      emoji: '🍚',
      en: {
        name: 'Plain Brown Rice',
        time: '40 min',
        servings: '2',
        why: 'Whole-grain rice with more fibre and minerals than white — gut-friendly and filling.',
        ingredients: [
          'Brown rice 1 cup',
          'Water 2 cups'
        ],
        steps: ['Rinse brown rice well.','Combine rice and water in a pot; bring to a boil.','Cover, reduce to lowest heat and cook 35 min.','Rest off heat 10 min, then fluff.'],
        notes: 'Ratio 1 : 2 (rice : water). Soaking 30 min beforehand shortens cooking time.'
      },
      zh: {
        name: '糙米饭',
        time: '40 分钟',
        servings: '2 份',
        why: '全谷米，纤维与矿物质高于白米，养胃饱腹。',
        ingredients: ['糙米 1 杯','水 2 杯'],
        steps: ['糙米充分淘洗。','米水入锅大火煮开。','盖盖转小火煮 35 分钟。','离火焖 10 分钟，松饭。'],
        notes: '米水比 1 : 2。提前浸泡 30 分钟可缩短煮制时间。'
      },
      macros: { protein: { g: 5, pct: 9 }, fat: { g: 2, pct: 8 }, netCarbs: { g: 42, pct: 83 } }
    },

    /* 7. Plain quinoa */
    {
      id: 'l48',
      type: 'lunch',
      types: ['lunch','dinner'],
      carb: 'moderate',
      tags: ['quick-easy','vegetarian','vegan','gluten-free','high-protein','gut-healing'],
      contains: [],
      focus: ['Gut healing','High protein'],
      img: 'plain-quinoa.jpg',
      emoji: '🌾',
      en: {
        name: 'Plain Quinoa',
        time: '20 min',
        servings: '2',
        why: 'A complete-protein grain with all nine essential amino acids — a nutritious rice alternative.',
        ingredients: [
          'Quinoa 1 cup, rinsed',
          'Water 2 cups'
        ],
        steps: ['Rinse quinoa thoroughly under cold water to remove bitterness.','Combine with water in a pot; bring to a boil.','Cover, reduce heat and simmer 15 min until water is absorbed.','Rest off heat 5 min, then fluff with a fork.'],
        notes: 'Ratio 1 : 2 (quinoa : water). Cooked quinoa keeps 5 days in the fridge.'
      },
      zh: {
        name: '藜麦饭',
        time: '20 分钟',
        servings: '2 份',
        why: '含全部九种必需氨基酸的完全蛋白谷物，米饭替代佳品。',
        ingredients: ['藜麦 1 杯，冲洗','水 2 杯'],
        steps: ['藜麦充分冷水冲洗去苦味。','加水入锅大火煮开。','盖盖小火煮 15 分钟至水收干。','离火焖 5 分钟，松饭。'],
        notes: '藜麦水比 1 : 2。煮熟冷藏可放 5 天。'
      },
      macros: { protein: { g: 8, pct: 14 }, fat: { g: 4, pct: 16 }, netCarbs: { g: 39, pct: 70 } }
    },

    /* 8. Plain rice noodles */
    {
      id: 'l49',
      type: 'lunch',
      types: ['lunch','dinner'],
      carb: 'moderate',
      tags: ['quick-easy','vegetarian','vegan','gluten-free'],
      contains: [],
      focus: [],
      img: 'plain-rice-noodles.jpg',
      emoji: '🍜',
      en: {
        name: 'Plain Rice Noodles',
        time: '8 min',
        servings: '2',
        why: 'A light, gluten-free noodle base that absorbs the flavour of any sauce or broth.',
        ingredients: [
          'Dried rice noodles (vermicelli or flat) 100g',
          'Boiling water to cover'
        ],
        steps: ['Place noodles in a heatproof bowl.','Pour boiling water to cover; let soak 3–5 min until tender.','Drain and rinse briefly with warm water. Serve with your favourite sauce or stir-fry.'],
        notes: 'Soaking time varies by thickness — check the package instructions.'
      },
      zh: {
        name: '米粉',
        time: '8 分钟',
        servings: '2 份',
        why: '无麸质清淡主食，吸附酱汁与汤底。',
        ingredients: ['干米粉（细或宽）100g','沸水没过'],
        steps: ['米粉放入耐热碗。','倒入沸水浸泡 3–5 分钟至软。','沥水，温水略冲，可拌酱或炒制。'],
        notes: '浸泡时间因粗细而异，参考包装说明。'
      },
      macros: { protein: { g: 3, pct: 8 }, fat: { g: 0, pct: 0 }, netCarbs: { g: 28, pct: 92 } }
    },

    /* 9. Plain pasta */
    {
      id: 'l50',
      type: 'lunch',
      types: ['lunch','dinner'],
      carb: 'moderate',
      tags: ['quick-easy','vegetarian'],
      contains: ['gluten'],
      focus: [],
      img: 'plain-pasta.jpg',
      emoji: '🍝',
      en: {
        name: 'Plain Pasta',
        time: '12 min',
        servings: '2',
        why: 'A comforting carb base — dress simply with olive oil and salt, or build any sauce on top.',
        ingredients: [
          'Dried pasta (spaghetti, penne, etc.) 160g',
          'Water 2 L, salt 1 tbsp',
          'Olive oil 1 tsp (optional)'
        ],
        steps: ['Bring salted water to a rolling boil.','Add pasta, stir to prevent sticking; cook per package (usually 8–11 min).','Drain, reserving ½ cup pasta water. Toss with olive oil to prevent clumping.'],
        notes: 'Check doneness 1 min before the package time for al dente texture.'
      },
      zh: {
        name: '意面',
        time: '12 分钟',
        servings: '2 份',
        why: '舒适的碳水基底，可简单橄榄油盐拌，或搭配任意酱料。',
        ingredients: ['干意面（细面、通心粉等）160g','水 2 升、盐 1 汤匙','橄榄油 1 茶匙（可选）'],
        steps: ['盐水大火烧开。','放入意面搅拌防粘，按包装时间煮（一般 8–11 分钟）。','沥水，留半杯面汤。拌橄榄油防结块。'],
        notes: '比包装时间提前 1 分钟试口感，弹牙为佳。'
      },
      macros: { protein: { g: 10, pct: 16 }, fat: { g: 1, pct: 4 }, netCarbs: { g: 50, pct: 80 } }
    },

    /* 10. Seared tuna */
    {
      id: 'd38',
      type: 'dinner',
      types: ['lunch','dinner'],
      carb: 'low',
      tags: ['quick-easy','high-protein','gluten-free','asian'],
      contains: ['fish','soy'],
      focus: ['High protein'],
      img: 'seared-tuna.jpg',
      emoji: '🐟',
      en: {
        name: 'Seared Tuna',
        time: '10 min',
        servings: '1',
        why: 'A restaurant-quality dish at home — crisp crust, rare centre, packed with lean protein.',
        ingredients: [
          'Tuna steak (sashimi-grade) 150g',
          'Sesame oil 1 tsp, soy sauce 1 tsp',
          'Black and white sesame seeds 2 tbsp',
          'Wasabi or pickled ginger to serve'
        ],
        steps: ['Coat tuna with soy and sesame oil; press sesame seeds onto all sides.','Sear in a smoking-hot pan 30–45 seconds per side (keep centre rare).','Rest 2 min, then slice across the grain.','Serve with wasabi or pickled ginger.'],
        notes: 'Use sashimi-grade tuna for safe raw centre. Freeze for 15 min before searing for easier slicing.'
      },
      zh: {
        name: '香煎金枪鱼',
        time: '10 分钟',
        servings: '1 份',
        why: '家中可做的餐厅级料理——外脆内嫩，瘦蛋白满满。',
        ingredients: ['金枪鱼扒（刺身级）150g','麻油 1 茶匙、生抽 1 茶匙','黑白芝麻 2 汤匙','芥末或腌姜适量'],
        steps: ['鱼扒抹酱油麻油，各面压芝麻。','热锅冒烟，每面煎 30–45 秒（中心保持生）。','静置 2 分钟，逆纹切片。','配芥末或腌姜食用。'],
        notes: '须用刺身级金枪鱼，中心可安全生食。煎前冷冻 15 分钟更易切片。'
      },
      macros: { protein: { g: 35, pct: 76 }, fat: { g: 5, pct: 24 }, netCarbs: { g: 0, pct: 0 } }
    },

    /* 11. Baked potato wedges */
    {
      id: 's32',
      type: 'snack',
      types: ['snack','lunch'],
      carb: 'moderate',
      tags: ['quick-easy','vegetarian','vegan','gluten-free'],
      contains: [],
      focus: [],
      img: 'baked-potato-wedges.jpg',
      emoji: '🥔',
      en: {
        name: 'Baked Potato Wedges',
        time: '35 min',
        servings: '2',
        why: 'A healthier alternative to fried chips — crispy outside, fluffy inside, with the skin on for fibre.',
        ingredients: [
          'Potatoes 2 medium (≈ 400g total)',
          'Olive oil 1 tbsp',
          'Paprika ½ tsp, garlic powder ½ tsp, salt ½ tsp',
          'Black pepper to taste'
        ],
        steps: ['Preheat oven 220 °C / 425 °F. Cut each potato into 6–8 wedges (leave skin on).','Toss wedges with oil and spices in a bowl.','Arrange on a lined baking tray, cut-side up.','Bake 25–30 min until golden and crisp. Serve hot.'],
        notes: 'Soak cut wedges in cold water 15 min before baking for extra crispiness.'
      },
      zh: {
        name: '烤薯角',
        time: '35 分钟',
        servings: '2 份',
        why: '比炸薯条更健康——外脆内软，带皮保纤维。',
        ingredients: ['土豆 2 个中号（约 400g）','橄榄油 1 汤匙','红椒粉 ½ 茶匙、蒜粉 ½ 茶匙、盐 ½ 茶匙','黑胡椒适量'],
        steps: ['预热烤箱 220°C。每个土豆切 6–8 块（带皮）。','薯角与油和调料在碗中拌匀。','排列在铺纸烤盘上，切面朝上。','烤 25–30 分钟至金黄酥脆，趁热享用。'],
        notes: '切好的薯角先冷水泡 15 分钟会更脆。'
      },
      macros: { protein: { g: 4, pct: 7 }, fat: { g: 7, pct: 28 }, netCarbs: { g: 34, pct: 65 } }
    },

    /* Cheddar Slices */
    {
      id: 's33',
      type: 'snack',
      carb: 'low',
      tags: ['no-cook','gluten-free'],
      contains: ['dairy'],
      focus: [],
      img: 'cheddar-slices.jpg',
      emoji: '🧀',
      en: {
        name: 'Cheddar Slices',
        time: '1 min',
        servings: '1',
        why: 'A protein-rich, zero-prep snack that curbs hunger fast.',
        ingredients: [
          'Cheddar cheese 40 g, sliced into 4 pieces'
        ],
        steps: ['Slice and serve.'],
        notes: 'Pair with a few almonds for extra crunch and healthy fats.'
      },
      zh: {
        name: '车打芝士片',
        time: '1 分钟',
        servings: '1 份',
        why: '高蛋白零准备小食，快速止饿。',
        ingredients: ['车打芝士 40g 切 4 片'],
        steps: ['切片即食。'],
        notes: '可配几粒杏仁增加口感和健康脂肪。'
      },
      macros: { protein: { g: 10, pct: 27 }, fat: { g: 12, pct: 72 }, netCarbs: { g: 1, pct: 1 } }
    },

    /* Plain Crackers */
    {
      id: 's34',
      type: 'snack',
      carb: 'moderate',
      tags: ['no-cook','quick-easy'],
      contains: ['gluten'],
      focus: [],
      img: 'plain-crackers.jpg',
      emoji: '🍪',
      en: {
        name: 'Plain Crackers',
        time: '1 min',
        servings: '1',
        why: 'A quick carb top-up for between-meal energy dips.',
        ingredients: [
          'Whole-grain crackers 5 (about 30 g)'
        ],
        steps: ['Open and eat.'],
        notes: 'Top with cheese or nut butter for added protein.'
      },
      zh: {
        name: '梳打饼',
        time: '1 分钟',
        servings: '1 份',
        why: '快速补充碳水，缓解餐间能量下降。',
        ingredients: ['全麦梳打饼 5 块（约 30g）'],
        steps: ['拆包即食。'],
        notes: '可加芝士或坚果酱增加蛋白质。'
      },
      macros: { protein: { g: 3, pct: 9 }, fat: { g: 4, pct: 28 }, netCarbs: { g: 20, pct: 63 } }
    },

    /* Half Avocado */
    {
      id: 's35',
      type: 'snack',
      carb: 'low',
      tags: ['no-cook','gluten-free','vegan'],
      contains: [],
      focus: ['Gut healing'],
      img: 'half-avocado.jpg',
      emoji: '🥑',
      en: {
        name: 'Half Avocado',
        time: '1 min',
        servings: '1',
        why: 'Creamy, fibre-rich and loaded with heart-healthy monounsaturated fats.',
        ingredients: [
          'Avocado ½ (about 100 g)',
          'Pinch of salt',
          'Lemon juice or chilli flakes (optional)'
        ],
        steps: ['Halve avocado, remove pit, season the cavity. Scoop and eat with a spoon.'],
        notes: 'Sprinkle with Everything Bagel seasoning for extra flavour.'
      },
      zh: {
        name: '半个牛油果',
        time: '1 分钟',
        servings: '1 份',
        why: '口感细腻，富含纤维和有益心脏的单不饱和脂肪。',
        ingredients: ['牛油果 半个（约 100g）','少许盐','柠檬汁或辣椒碎（可选）'],
        steps: ['牛油果对半切开去核，撒上调料，用勺子挖食。'],
        notes: '撒点综合调味料更提味。'
      },
      macros: { protein: { g: 2, pct: 5 }, fat: { g: 15, pct: 81 }, netCarbs: { g: 6, pct: 14 } }
    },

    /* Mixed Berries */
    {
      id: 's36',
      type: 'snack',
      carb: 'moderate',
      tags: ['no-cook','gluten-free','vegan'],
      contains: [],
      focus: ['Gut healing'],
      img: 'mixed-berries.jpg',
      emoji: '🫐',
      en: {
        name: 'Mixed Berries',
        time: '1 min',
        servings: '1',
        why: 'Antioxidant-packed, low-GI fruit that satisfies a sweet craving without a sugar crash.',
        ingredients: [
          'Mixed berries 1 cup (blueberries, raspberries, strawberries) ~150 g'
        ],
        steps: ['Wash and serve in a bowl.'],
        notes: 'Add a dollop of Greek yogurt for extra protein.'
      },
      zh: {
        name: '混合莓果',
        time: '1 分钟',
        servings: '1 份',
        why: '富含抗氧化物、低升糖指数水果，满足甜食欲望又不致血糖飙升。',
        ingredients: ['混合莓果 1 杯（蓝莓、覆盆子、草莓）约 150g'],
        steps: ['洗净盛碗即食。'],
        notes: '加一勺希腊酸奶增加蛋白质。'
      },
      macros: { protein: { g: 1, pct: 6 }, fat: { g: 1, pct: 7 }, netCarbs: { g: 15, pct: 87 } }
    },

    /* Hummus with Crackers */
    {
      id: 's37',
      type: 'snack',
      carb: 'moderate',
      tags: ['no-cook','quick-easy'],
      contains: ['gluten'],
      focus: ['Gut healing'],
      img: 'hummus-with-crackers.jpg',
      emoji: '🧆',
      en: {
        name: 'Hummus with Crackers',
        time: '2 min',
        servings: '1',
        why: 'Plant protein and fibre from chickpeas paired with satisfying crunch.',
        ingredients: [
          'Hummus 3 tablespoons (~45 g)',
          'Whole-grain crackers 4'
        ],
        steps: ['Scoop hummus onto a plate, arrange crackers alongside. Dip and enjoy.'],
        notes: 'Add cucumber or carrot sticks for extra veg. Use gluten-free crackers if needed.'
      },
      zh: {
        name: '鹰嘴豆泥配梳打饼',
        time: '2 分钟',
        servings: '1 份',
        why: '鹰嘴豆提供植物蛋白和纤维，搭配酥脆饼干。',
        ingredients: ['鹰嘴豆泥 3 汤匙（约 45g）','全麦梳打饼 4 块'],
        steps: ['鹰嘴豆泥盛碟，搭配饼干蘸食。'],
        notes: '可加黄瓜或胡萝卜条增加蔬菜。需要无麸质可换无麸饼干。'
      },
      macros: { protein: { g: 4, pct: 9 }, fat: { g: 8, pct: 42 }, netCarbs: { g: 21, pct: 49 } }
    },

    /* Granola (1/2 cup) */
    {
      id: 's38',
      type: 'snack',
      carb: 'moderate',
      tags: ['no-cook','quick-easy'],
      contains: ['nuts','oats'],
      focus: [],
      img: 'granola-½-cup.jpg',
      emoji: '🥣',
      en: {
        name: 'Granola (½ cup)',
        time: '1 min',
        servings: '1',
        why: 'A crunchy, energy-dense handful of oats, nuts and seeds — great pre-workout.',
        ingredients: [
          'Granola ½ cup (~60 g)'
        ],
        steps: ['Portion into a small bowl. Eat dry or with a splash of milk.'],
        notes: 'Check the label — many store-bought granolas are high in added sugar.'
      },
      zh: {
        name: '格兰诺拉麦片（半杯）',
        time: '1 分钟',
        servings: '1 份',
        why: '燕麦、坚果和种子的酥脆能量组合——适合运动前补充。',
        ingredients: ['格兰诺拉麦片 半杯（约 60g）'],
        steps: ['盛入小碗干食或加少许牛奶。'],
        notes: '注意标签——许多市售格兰诺拉含糖量较高。'
      },
      macros: { protein: { g: 5, pct: 9 }, fat: { g: 8, pct: 34 }, netCarbs: { g: 30, pct: 57 } }
    },

    /* Macadamia Nuts */
    {
      id: 's39',
      type: 'snack',
      carb: 'low',
      tags: ['no-cook','gluten-free','keto'],
      contains: ['nuts'],
      focus: [],
      img: 'macadamia-nuts.jpg',
      emoji: '🌰',
      en: {
        name: 'Macadamia Nuts',
        time: '1 min',
        servings: '1',
        why: 'The highest-fat, lowest-carb nut — buttery and rich, perfect for keto snacking.',
        ingredients: [
          'Macadamia nuts 30 g (about 10 nuts)'
        ],
        steps: ['Portion and enjoy.'],
        notes: 'Macadamias are calorie-dense — stick to a small handful.'
      },
      zh: {
        name: '夏威夷果',
        time: '1 分钟',
        servings: '1 份',
        why: '脂肪最高、碳水最低的坚果——口感醇厚，适合生酮零食。',
        ingredients: ['夏威夷果 30g（约 10 粒）'],
        steps: ['取量即食。'],
        notes: '夏威夷果热量密度高，请控制在手心一把。'
      },
      macros: { protein: { g: 3, pct: 5 }, fat: { g: 24, pct: 91 }, netCarbs: { g: 2, pct: 3 } }
    },

    /* Calcium-Fortified Soy Milk */
    {
      id: 's40',
      type: 'snack',
      carb: 'low',
      tags: ['no-cook','gluten-free','vegan','dairy-free'],
      contains: ['soy'],
      focus: ['Bone health'],
      img: 'calcium-fortified-soy-milk.jpg',
      emoji: '🥛',
      en: {
        name: 'Calcium-Fortified Soy Milk',
        time: '1 min',
        servings: '1',
        why: 'A dairy-free, high-calcium beverage — ideal for lactose-intolerant or plant-based diets.',
        ingredients: [
          'Calcium-fortified soy milk (unsweetened) 1 cup (240 ml)'
        ],
        steps: ['Pour into a glass. Drink cold or warm.'],
        notes: 'Shake well before pouring. Choose unsweetened for lowest carbs.'
      },
      zh: {
        name: '高钙豆浆',
        time: '1 分钟',
        servings: '1 份',
        why: '无乳制品的高钙饮品——适合乳糖不耐受或植物性饮食。',
        ingredients: ['高钙无糖豆浆 1 杯（240ml）'],
        steps: ['倒入杯中，冷饮或加热均可。'],
        notes: '倒前摇匀。选无糖版碳水最低。'
      },
      macros: { protein: { g: 7, pct: 35 }, fat: { g: 4, pct: 45 }, netCarbs: { g: 4, pct: 20 } }
    },

    /* 2% Milk */
    {
      id: 's41',
      type: 'snack',
      carb: 'moderate',
      tags: ['no-cook','gluten-free'],
      contains: ['dairy'],
      focus: ['Bone health'],
      img: '2-milk.jpg',
      emoji: '🥛',
      en: {
        name: '2% Milk',
        time: '1 min',
        servings: '1',
        why: 'Reduced-fat milk with a balance of protein, calcium and carbs for bone health.',
        ingredients: [
          '2% reduced-fat milk 1 cup (240 ml)'
        ],
        steps: ['Pour into a glass. Drink cold or warm.'],
        notes: 'Whole milk (3.25%) has more fat; skim milk has less. 2% is the sweet spot for many.'
      },
      zh: {
        name: '2% 牛奶',
        time: '1 分钟',
        servings: '1 份',
        why: '减脂牛奶——蛋白质、钙和碳水平衡，有益骨骼健康。',
        ingredients: ['2% 减脂牛奶 1 杯（240ml）'],
        steps: ['倒入杯中，冷饮或加热均可。'],
        notes: '全脂牛奶（3.25%）脂肪更高；脱脂牛奶脂肪更少。2% 是多数人的理想选择。'
      },
      macros: { protein: { g: 8, pct: 26 }, fat: { g: 5, pct: 36 }, netCarbs: { g: 12, pct: 38 } }
    }
];

if (typeof window !== 'undefined') window.EXTRA_RECIPES = EXTRA_RECIPES;
