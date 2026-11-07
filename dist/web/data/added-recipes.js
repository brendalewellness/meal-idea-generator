/* ============================================================================
   ADDED RECIPES  --  36 new recipe entries for the meal library
   ----------------------------------------------------------------------------
   Format mirrors MEALS in meals.js. See that file's header for field docs.
   IDs: b129-b134, l144-l153, l44-l54->l144-l153, d138-d147, s130-s139
   Each recipe has detailed ingredients with amounts, step-by-step directions,
   serving sizes that reflect how many servings the recipe makes, and full
   bilingual (en/zh) content matching the detail level of older recipes.
   ========================================================================== */

const ADDED_RECIPES = [

  /* ==================== BREAKFAST ==================== */

  {
    id: 'b129',
    type: 'breakfast',
    carb: 'low',
    tags: ['quick-easy','high-protein','gluten-free'],
    contains: ['egg','pork'],
    focus: ['Quick & easy','High protein'],
    img: null,
    emoji: '🍳',
    en: {
      name: 'Eggs and Bacon',
      time: '10 min',
      servings: '1',
      why: 'A classic high-protein, low-carb breakfast that keeps blood sugar stable and satisfies hunger for hours.',
      ingredients: [
        'Eggs 3',
        'Bacon 3 strips',
        'Olive oil or butter 1 tsp (if needed)',
        'Sea salt and black pepper to taste',
        '(Optional) fresh chives or parsley for garnish'
      ],
      steps: [
        'Heat a skillet over medium heat and cook the bacon strips for 3-4 minutes per side until crisp. Remove and drain on paper towels.',
        'In the same pan with the bacon fat (add a touch of butter or oil if the pan is dry), crack the eggs and cook to your preference: sunny-side up, over-easy, or scrambled.',
        'Season with salt and pepper, garnish with chives if using, and serve immediately alongside the bacon.'
      ],
      notes: 'For lower fat, use turkey bacon or reduce to 2 strips. Add spinach or tomatoes for more vegetables.'
    },
    zh: {
      name: '鸡蛋培根',
      time: '10 分钟',
      servings: '1 份',
      why: '经典高蛋白低碳早餐，稳定血糖，饱腹感持久。',
      ingredients: [
        '鸡蛋 3 个',
        '培根 3 片',
        '橄榄油或黄油 1 茶匙（视需要）',
        '海盐、黑胡椒 适量',
        '（可选）细香葱或欧芹 点缀'
      ],
      steps: [
        '中火加热平底锅，放入培根每面煎 3-4 分钟至脆，取出放在厨房纸上吸油。',
        '原锅留培根油（如不够可加少许黄油），打入鸡蛋按喜好煎成太阳蛋、两面煎或炒蛋。',
        '撒盐和黑胡椒调味，点缀香葱，趁热配培根上桌。'
      ],
      notes: '想更低脂可用火鸡培根或减至 2 片；加菠菜或番茄增加蔬菜。'
    },
    macros: { protein: { g: 28, pct: 35 }, fat: { g: 30, pct: 60 }, netCarbs: { g: 1, pct: 5 } }
  },

  {
    id: 'b130',
    type: 'breakfast',
    carb: 'moderate',
    tags: ['quick-easy','vegetarian','gluten-free'],
    contains: ['egg','dairy'],
    focus: ['Quick & easy'],
    img: null,
    emoji: '🥞',
    en: {
      name: 'Buckwheat Pancakes',
      time: '20 min',
      servings: '4',
      why: 'Naturally gluten-free buckwheat flour makes hearty, nutty pancakes that are higher in protein and fibre than regular pancakes.',
      ingredients: [
        'Buckwheat flour 1 cup',
        'Eggs 2',
        'Milk of choice 3/4 cup',
        'Baking powder 1 tsp',
        'Maple syrup or honey 1 tbsp',
        'Pinch of salt',
        'Coconut oil or butter for cooking',
        '(Optional) berries or banana to serve'
      ],
      steps: [
        'Whisk the buckwheat flour, eggs, milk, baking powder, maple syrup and salt into a smooth batter. Let rest 5 minutes.',
        'Heat a non-stick pan with coconut oil over medium heat. Pour 1/4 cup of batter per pancake.',
        'Cook 2-3 minutes until bubbles form on the surface, then flip and cook 1-2 minutes until golden brown.',
        'Serve warm with berries, banana or a drizzle of maple syrup.'
      ],
      notes: 'Buckwheat despite the name contains no wheat — it is naturally gluten-free. Extras freeze well; toast to reheat.'
    },
    zh: {
      name: '荞麦松饼',
      time: '20 分钟',
      servings: '4 份',
      why: '荞麦天然无麸质，蛋白质和纤维高于普通面粉，口感扎实有坚果香。',
      ingredients: [
        '荞麦粉 1 杯',
        '鸡蛋 2 个',
        '喜爱的奶 3/4 杯',
        '泡打粉 1 茶匙',
        '枫糖或蜂蜜 1 汤匙',
        '盐 少许',
        '椰子油或黄油 适量',
        '（可选）莓果或香蕉 配餐'
      ],
      steps: [
        '荞麦粉、鸡蛋、奶、泡打粉、枫糖和盐搅成顺滑面糊，静置 5 分钟。',
        '不粘锅刷椰子油中火，每次舀 1/4 杯面糊。',
        '煎 2-3 分钟至表面冒泡，翻面再煎 1-2 分钟至金黄。',
        '趁热配莓果、香蕉或淋枫糖。'
      ],
      notes: '荞麦虽叫"麦"但不含小麦，天然无麸质。多余的可冷冻，烤一下即可复热。'
    },
    macros: { protein: { g: 10, pct: 18 }, fat: { g: 6, pct: 24 }, netCarbs: { g: 28, pct: 58 } }
  },

  {
    id: 'b131',
    type: 'breakfast',
    carb: 'moderate',
    tags: ['gut-healing','vegetarian','gluten-free','vegan','batch-cook'],
    contains: [],
    focus: ['Gut-healing'],
    img: null,
    emoji: '🥣',
    en: {
      name: 'Buckwheat Porridge',
      time: '15 min',
      servings: '2',
      why: 'A warming, gluten-free grain porridge that is gentle on the gut and rich in minerals like magnesium and rutin.',
      ingredients: [
        'Buckwheat groats 1/2 cup (rinsed)',
        'Water or milk 2 cups',
        'Pinch of salt',
        'Maple syrup 1 tsp (optional)',
        'Cinnamon 1/4 tsp',
        '(Optional) berries, chopped nuts, or banana to top'
      ],
      steps: [
        'Rinse the buckwheat groats under cold water. Combine with water or milk and salt in a small pot.',
        'Bring to a boil, then reduce to a simmer and cook 10-12 minutes, stirring occasionally, until soft and creamy.',
        'Stir in cinnamon and maple syrup to taste. Spoon into bowls and top with berries, nuts or banana.'
      ],
      notes: 'For a creamier texture, soak the groats overnight. Toasted buckwheat (kasha) has a deeper, nuttier flavour.'
    },
    zh: {
      name: '荞麦粥',
      time: '15 分钟',
      servings: '2 份',
      why: '无麸质谷物粥，温和养胃，富含镁和芦丁等矿物质。',
      ingredients: [
        '荞麦粒 半杯（洗净）',
        '水或奶 2 杯',
        '盐 少许',
        '枫糖 1 茶匙（可选）',
        '肉桂粉 1/4 茶匙',
        '（可选）莓果、碎坚果或香蕉 点缀'
      ],
      steps: [
        '荞麦粒冷水冲洗，与水或奶、盐放入小锅。',
        '煮开后转小火煮 10-12 分钟，不时搅拌至软糯。',
        '拌入肉桂和枫糖，盛碗点缀莓果、坚果或香蕉。'
      ],
      notes: '提前浸泡口感更绵滑；烤荞麦（kasha）味道更浓郁。'
    },
    macros: { protein: { g: 6, pct: 15 }, fat: { g: 2, pct: 10 }, netCarbs: { g: 30, pct: 75 } }
  },

  {
    id: 'b132',
    type: 'breakfast',
    carb: 'low',
    tags: ['quick-easy','vegetarian','gluten-free','batch-cook'],
    contains: ['egg','dairy'],
    focus: ['Quick & easy','Batch-cook'],
    img: null,
    emoji: '🍳',
    en: {
      name: 'Tomato and Herb Frittata',
      time: '20 min',
      servings: '4',
      why: 'Eggs baked with tomatoes, spinach and basil — a protein-rich, vegetable-packed dish that works for breakfast or lunch.',
      ingredients: [
        'Eggs 8',
        'Cherry tomatoes 1 cup (halved)',
        'Baby spinach 2 cups',
        'Fresh basil 1/4 cup (chopped)',
        'Olive oil 1 tbsp',
        'Sea salt and black pepper to taste',
        '(Optional) Parmesan cheese 2 tbsp (grated)'
      ],
      steps: [
        'Preheat the oven to 180°C (350°F). Heat olive oil in an oven-safe skillet over medium heat.',
        'Wilt the spinach and soften the tomatoes for 2-3 minutes. Spread evenly across the pan.',
        'Beat the eggs with salt, pepper and basil; pour over the vegetables. Sprinkle with Parmesan if using.',
        'Cook on the stovetop for 3 minutes until edges set, then transfer to the oven and bake 12-15 minutes until golden and set in the centre.',
        'Cut into wedges and serve warm or at room temperature.'
      ],
      notes: 'Keeps 3 days in the fridge — great for meal prep. Reheat in a pan or eat cold.'
    },
    zh: {
      name: '番茄香草烘蛋',
      time: '20 分钟',
      servings: '4 份',
      why: '鸡蛋与番茄、菠菜、罗勒一起烤，高蛋白蔬菜丰富，早午餐皆宜。',
      ingredients: [
        '鸡蛋 8 个',
        '小番茄 1 杯（对半切）',
        '嫩菠菜 2 杯',
        '新鲜罗勒 1/4 杯（切碎）',
        '橄榄油 1 汤匙',
        '海盐、黑胡椒 适量',
        '（可选）帕玛森 2 汤匙（擦丝）'
      ],
      steps: [
        '烤箱 180°C 预热。烤箱适用平底锅中火加热橄榄油。',
        '炒软菠菜和小番茄 2-3 分钟，铺匀锅底。',
        '鸡蛋加盐、胡椒和罗勒打匀，倒入锅中，撒帕玛森。',
        '炉上 3 分钟至边缘凝固，转烤箱烤 12-15 分钟至中心凝固金黄。',
        '切块温食或室温食用。'
      ],
      notes: '冷藏可存 3 天，适合备餐。锅里加热或冷食均可。'
    },
    macros: { protein: { g: 20, pct: 35 }, fat: { g: 14, pct: 52 }, netCarbs: { g: 4, pct: 13 } }
  },

  {
    id: 'b133',
    type: 'breakfast',
    carb: 'low',
    tags: ['no-cook','quick-easy','high-protein','gluten-free'],
    contains: ['fish'],
    focus: ['High protein','No-cook'],
    img: null,
    emoji: '🐟',
    en: {
      name: 'Smoked Salmon',
      time: '2 min',
      servings: '1',
      why: 'Ready-to-eat smoked salmon is rich in omega-3 fatty acids and high-quality protein — an effortless, no-cook option.',
      ingredients: [
        'Smoked salmon 100g',
        'Lemon juice 1 tsp',
        'Capers 1 tsp (optional)',
        'Fresh dill or chives for garnish',
        '(Optional) cucumber slices or sourdough crackers to serve'
      ],
      steps: [
        'Arrange the smoked salmon on a plate.',
        'Squeeze over the lemon juice and scatter capers and dill on top.',
        'Serve with cucumber slices or crackers if desired.'
      ],
      notes: 'Smoked salmon is high in sodium — pair with potassium-rich vegetables like avocado or cucumber. Look for wild-caught when possible.'
    },
    zh: {
      name: '烟熏三文鱼',
      time: '2 分钟',
      servings: '1 份',
      why: '即食烟熏三文鱼富含 Omega-3 和优质蛋白，免烹方便。',
      ingredients: [
        '烟熏三文鱼 100g',
        '柠檬汁 1 茶匙',
        '酸豆 1 茶匙（可选）',
        '新鲜莳萝或细香葱 点缀',
        '（可选）黄瓜片或酸面包饼干 配餐'
      ],
      steps: [
        '烟熏三文鱼摆盘。',
        '挤柠檬汁，撒酸豆和莳萝。',
        '按需配黄瓜片或饼干。'
      ],
      notes: '烟熏三文鱼钠含量高，搭配富含钾的牛油果或黄瓜。尽量选野生捕捞。'
    },
    macros: { protein: { g: 22, pct: 55 }, fat: { g: 12, pct: 40 }, netCarbs: { g: 1, pct: 5 } }
  },

  {
    id: 'b134',
    type: 'breakfast',
    carb: 'moderate',
    tags: ['asian','quick-easy','high-protein','gluten-free'],
    contains: ['egg','pork','soy'],
    focus: ['Asian','Quick & easy'],
    img: null,
    emoji: '🍜',
    en: {
      name: 'Easy Ramen Bowl',
      time: '15 min',
      servings: '2',
      why: 'A comforting Asian-style bowl with gluten-free ramen, tender pork slices, and a soft-boiled egg — quick enough for a weeknight.',
      ingredients: [
        'Gluten-free ramen noodles 2 servings',
        'Pork slices 150g (thinly sliced, leftover or fresh)',
        'Eggs 2',
        'Broth 4 cups (chicken or pork)',
        'Tamari 2 tbsp',
        'Sesame oil 1 tsp',
        'Scallions 2 (sliced)',
        '(Optional) nori sheets, bamboo shoots, or spinach'
      ],
      steps: [
        'Soft-boil the eggs: simmer 6 minutes, then transfer to ice water. Peel and halve.',
        'Heat the broth in a pot with tamari and sesame oil; keep warm.',
        'Cook the gluten-free ramen noodles according to the package; drain and divide between two bowls.',
        'If using raw pork, simmer the slices in the broth for 2-3 minutes until cooked through. If using leftover cooked pork, warm briefly.',
        'Ladle the hot broth over the noodles. Top with pork slices, egg halves, scallions and any optional garnishes.'
      ],
      notes: 'Use 100% rice or buckwheat ramen to keep it gluten-free. Marinate the eggs in tamari and mirin overnight for a richer flavour.'
    },
    zh: {
      name: '简易拉面碗',
      time: '15 分钟',
      servings: '2 份',
      why: '亚洲风暖心碗，无麸质拉面配嫩猪片和溏心蛋，快手适合工作日。',
      ingredients: [
        '无麸质拉面 2 份',
        '猪肉片 150g（薄片，剩肉或鲜切）',
        '鸡蛋 2 个',
        '高汤 4 杯（鸡或猪）',
        '无麸质生抽 2 汤匙',
        '芝麻油 1 茶匙',
        '葱花 2 根',
        '（可选）海苔、笋片或菠菜'
      ],
      steps: [
        '煮溏心蛋：水开煮 6 分钟，冰水降温，剥壳对半切。',
        '高汤加生抽和芝麻油加热保温。',
        '拉面按包装煮好，沥干分入两碗。',
        '生猪肉片入汤煮 2-3 分钟至熟；熟肉片略热即可。',
        '热汤浇面，摆猪肉、蛋、葱花及配菜。'
      ],
      notes: '用纯米或纯荞麦拉面确保无麸质。蛋可用生抽和味醂腌过夜更入味。'
    },
    macros: { protein: { g: 24, pct: 30 }, fat: { g: 10, pct: 28 }, netCarbs: { g: 30, pct: 42 } }
  },

  /* ==================== LUNCH ==================== */

  {
    id: 'l144',
    type: 'lunch',
    carb: 'moderate',
    tags: ['asian','no-cook','quick-easy','high-protein','gluten-free'],
    contains: ['fish','soy','sesame'],
    focus: ['Asian','High protein'],
    img: null,
    emoji: '🍚',
    en: {
      name: 'Tuna Nori Rice Bowl',
      time: '10 min',
      servings: '2',
      why: 'A Japanese-inspired rice bowl with canned tuna, nori and sesame — no cooking required if rice is pre-made.',
      ingredients: [
        'Cooked rice 2 bowls (white or brown)',
        'Canned tuna 1 tin (drained)',
        'Nori sheets 2 (cut into strips)',
        'Avocado 1 (sliced)',
        'Cucumber 1/2 (sliced)',
        'Tamari 1.5 tbsp',
        'Sesame oil 1 tsp',
        'Sesame seeds 1 tsp',
        'Rice vinegar 1 tsp'
      ],
      steps: [
        'Divide the cooked rice between two bowls.',
        'Arrange the tuna, avocado slices and cucumber on top of the rice.',
        'Mix tamari, sesame oil and rice vinegar; drizzle over the bowls.',
        'Scatter with nori strips and sesame seeds. Serve immediately.'
      ],
      notes: 'Use sushi-grade raw tuna if preferred. Add pickled ginger or wasabi for extra flavour.'
    },
    zh: {
      name: '金枪鱼海苔饭碗',
      time: '10 分钟',
      servings: '2 份',
      why: '日式饭碗配金枪鱼罐头、海苔和芝麻，米饭现成则免烹。',
      ingredients: [
        '米饭 2 碗（白或糙）',
        '金枪鱼罐头 1 罐（沥干）',
        '海苔 2 片（切丝）',
        '牛油果 1 个（切片）',
        '黄瓜 半根（切片）',
        '无麸质生抽 1.5 汤匙',
        '芝麻油 1 茶匙',
        '芝麻 1 茶匙',
        '米醋 1 茶匙'
      ],
      steps: [
        '米饭分入两碗。',
        '摆上金枪鱼、牛油果片和黄瓜。',
        '生抽、芝麻油和米醋调匀淋碗上。',
        '撒海苔丝和芝麻，即刻食用。'
      ],
      notes: '可用刺身级生金枪鱼。加腌姜片或芥末更提味。'
    },
    macros: { protein: { g: 26, pct: 35 }, fat: { g: 10, pct: 27 }, netCarbs: { g: 28, pct: 38 } }
  },

  {
    id: 'l145',
    type: 'lunch',
    carb: 'low',
    tags: ['no-cook','quick-easy','high-protein','gluten-free'],
    contains: ['beef'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🥗',
    en: {
      name: 'Steak Salad',
      time: '15 min',
      servings: '2',
      why: 'Sliced grilled steak over crisp greens with cucumber and tomatoes — a protein-rich salad that is satisfying and low-carb.',
      ingredients: [
        'Grilled steak 300g (rested and sliced)',
        'Mixed leafy greens 4 cups',
        'Cucumber 1/2 (sliced)',
        'Cherry tomatoes 1 cup (halved)',
        'Olive oil 2 tbsp',
        'Balsamic vinegar 1 tbsp',
        'Sea salt and black pepper to taste',
        '(Optional) red onion, thinly sliced'
      ],
      steps: [
        'If the steak is cold, let it sit at room temperature for 10 minutes. Slice thinly against the grain.',
        'Arrange the greens, cucumber, tomatoes and red onion in two large bowls or plates.',
        'Layer the steak slices over the salad.',
        'Whisk olive oil and balsamic vinegar with salt and pepper; drizzle over the salads and serve.'
      ],
      notes: 'Use leftover grilled steak for speed. For a warmer salad, sear the steak fresh and serve while warm.'
    },
    zh: {
      name: '牛排沙拉',
      time: '15 分钟',
      servings: '2 份',
      why: '切片烤牛排配脆绿蔬菜与黄瓜番茄，高蛋白低碳饱腹沙拉。',
      ingredients: [
        '烤牛排 300g（静置后切片）',
        '混合绿叶菜 4 杯',
        '黄瓜 半根（切片）',
        '小番茄 1 杯（对半切）',
        '橄榄油 2 汤匙',
        '巴萨米克醋 1 汤匙',
        '海盐、黑胡椒 适量',
        '（可选）紫洋葱 薄片'
      ],
      steps: [
        '牛排冷的话室温回温 10 分钟，逆纹切薄片。',
        '绿叶菜、黄瓜、番茄和洋葱分摆两个大盘。',
        '牛排片铺沙拉上。',
        '橄榄油和巴萨米克醋加盐胡椒调匀，淋沙拉上桌。'
      ],
      notes: '用剩烤牛排更省时；现煎牛排趁热做温沙拉更香。'
    },
    macros: { protein: { g: 35, pct: 50 }, fat: { g: 16, pct: 38 }, netCarbs: { g: 5, pct: 12 } }
  },

  {
    id: 'l146',
    type: 'lunch',
    carb: 'moderate',
    tags: ['no-cook','quick-easy','high-protein'],
    contains: ['fish','gluten'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🥗',
    en: {
      name: 'Tuna Pasta Salad',
      time: '15 min',
      servings: '4',
      why: 'Canned tuna tossed with cooked pasta, cucumber and cherry tomatoes — a protein-rich, make-ahead lunch that feeds four.',
      ingredients: [
        'Cooked pasta 300g (any shape)',
        'Canned tuna 2 tins (drained)',
        'Cucumber 1 (diced)',
        'Cherry tomatoes 1 cup (halved)',
        'Fresh parsley 1/4 cup (chopped)',
        'Olive oil 3 tbsp',
        'Lemon juice 1 tbsp',
        'Sea salt and black pepper to taste',
        '(Optional) red onion 2 tbsp (finely diced)'
      ],
      steps: [
        'Cook the pasta according to the package; drain and rinse under cold water to cool.',
        'In a large bowl, combine the cooled pasta, tuna, cucumber, tomatoes, red onion and parsley.',
        'Whisk the olive oil and lemon juice with salt and pepper; toss everything together until well coated.',
        'Taste and adjust seasoning. Serve immediately or chill for later.'
      ],
      notes: 'Use gluten-free pasta if needed. Keeps 3 days in the fridge — great for meal prep lunches.'
    },
    zh: {
      name: '金枪鱼意面沙拉',
      time: '15 分钟',
      servings: '4 份',
      why: '金枪鱼罐头配意面、黄瓜和小番茄，高蛋白可提前备的四人份午餐。',
      ingredients: [
        '煮熟意面 300g（任意形状）',
        '金枪鱼罐头 2 罐（沥干）',
        '黄瓜 1 根（切丁）',
        '小番茄 1 杯（对半切）',
        '欧芹 1/4 杯（切碎）',
        '橄榄油 3 汤匙',
        '柠檬汁 1 汤匙',
        '海盐、黑胡椒 适量',
        '（可选）紫洋葱 2 汤匙（细丁）'
      ],
      steps: [
        '意面按包装煮好，冷水冲凉沥干。',
        '大碗中混合凉意面、金枪鱼、黄瓜、番茄、洋葱和欧芹。',
        '橄榄油和柠檬汁加盐胡椒调匀，拌入沙拉至均匀裹汁。',
        '试味调整，即食或冷藏备用。'
      ],
      notes: '无麸质者换无麸质意面。冷藏可存 3 天，适合备餐。'
    },
    macros: { protein: { g: 24, pct: 32 }, fat: { g: 12, pct: 30 }, netCarbs: { g: 28, pct: 38 } }
  },

  {
    id: 'l147',
    type: 'lunch',
    carb: 'low',
    tags: ['no-cook','quick-easy','vegetarian','gluten-free'],
    contains: ['dairy'],
    focus: ['Quick & easy','Vegetarian'],
    img: null,
    emoji: '🍅',
    en: {
      name: 'Caprese Salad',
      time: '5 min',
      servings: '2',
      why: 'Fresh tomatoes, mozzarella and basil dressed with olive oil and balsamic — a simple Italian classic that celebrates quality ingredients.',
      ingredients: [
        'Fresh tomatoes 2 (sliced)',
        'Fresh mozzarella 200g (sliced)',
        'Fresh basil leaves 10-12',
        'Olive oil 2 tbsp',
        'Balsamic vinegar 1 tbsp',
        'Sea salt and black pepper to taste'
      ],
      steps: [
        'Arrange alternating slices of tomato and mozzarella on a serving plate.',
        'Tuck the fresh basil leaves between the slices.',
        'Drizzle with olive oil and balsamic vinegar.',
        'Season with sea salt and freshly ground black pepper. Serve immediately.'
      ],
      notes: 'Use the ripest, in-season tomatoes you can find. Fresh mozzarella (the ball kind in water) is best, not pre-shredded.'
    },
    zh: {
      name: '卡普雷塞沙拉',
      time: '5 分钟',
      servings: '2 份',
      why: '新鲜番茄、马苏里拉和罗勒配橄榄油和巴萨米克醋，简单意式经典。',
      ingredients: [
        '新鲜番茄 2 个（切片）',
        '新鲜马苏里拉 200g（切片）',
        '新鲜罗勒叶 10-12 片',
        '橄榄油 2 汤匙',
        '巴萨米克醋 1 汤匙',
        '海盐、黑胡椒 适量'
      ],
      steps: [
        '番茄片和马苏里拉片交替摆盘。',
        '罗勒叶夹入片间。',
        '淋橄榄油和巴萨米克醋。',
        '撒海盐和现磨黑胡椒，即刻上桌。'
      ],
      notes: '尽量选当季熟透的番茄；新鲜水浸马苏里拉最佳。'
    },
    macros: { protein: { g: 14, pct: 25 }, fat: { g: 18, pct: 65 }, netCarbs: { g: 5, pct: 10 } }
  },

  {
    id: 'l148',
    type: 'lunch',
    carb: 'low',
    tags: ['no-cook','quick-easy','high-protein','gluten-free'],
    contains: ['shellfish'],
    focus: ['High protein','No-cook'],
    img: null,
    emoji: '🦐',
    en: {
      name: 'Shrimp Avocado Salad',
      time: '10 min',
      servings: '2',
      why: 'Cooked shrimp paired with creamy avocado, cucumber and fresh lime — a bright, high-protein salad with healthy fats.',
      ingredients: [
        'Cooked shrimp 300g (peeled, chilled)',
        'Avocado 1 (diced)',
        'Cucumber 1/2 (diced)',
        'Cherry tomatoes 1/2 cup (halved)',
        'Fresh lime juice 2 tbsp',
        'Olive oil 1 tbsp',
        'Cilantro 2 tbsp (chopped)',
        'Sea salt and black pepper to taste'
      ],
      steps: [
        'In a large bowl, combine the cooked shrimp, diced avocado, cucumber and cherry tomatoes.',
        'Whisk the lime juice, olive oil, salt and pepper into a dressing.',
        'Pour the dressing over the salad and toss gently to avoid mashing the avocado.',
        'Scatter with cilantro and serve immediately.'
      ],
      notes: 'Use pre-cooked shrimp for a true no-cook meal. Add mango for a tropical twist.'
    },
    zh: {
      name: '虾仁牛油果沙拉',
      time: '10 分钟',
      servings: '2 份',
      why: '熟虾仁配牛油果、黄瓜和青柠，清爽高蛋白沙拉含好脂肪。',
      ingredients: [
        '熟虾仁 300g（去壳冷藏）',
        '牛油果 1 个（切丁）',
        '黄瓜 半根（切丁）',
        '小番茄 半杯（对半切）',
        '青柠汁 2 汤匙',
        '橄榄油 1 汤匙',
        '香菜 2 汤匙（切碎）',
        '海盐、黑胡椒 适量'
      ],
      steps: [
        '大碗混合虾仁、牛油果丁、黄瓜和小番茄。',
        '青柠汁、橄榄油、盐和胡椒调成汁。',
        '淋沙拉上轻拌避免压碎牛油果。',
        '撒香菜即刻上桌。'
      ],
      notes: '用现成熟虾仁真正免烹。加芒果有热带风味。'
    },
    macros: { protein: { g: 28, pct: 40 }, fat: { g: 15, pct: 45 }, netCarbs: { g: 5, pct: 15 } }
  },

  {
    id: 'l149',
    type: 'lunch',
    carb: 'low',
    tags: ['no-cook','quick-easy','high-protein','vegetarian','gluten-free'],
    contains: ['egg'],
    focus: ['High protein','No-cook'],
    img: null,
    emoji: '🥚',
    en: {
      name: 'Egg Salad',
      time: '15 min',
      servings: '4',
      why: 'A protein-rich classic made with hard-boiled eggs — versatile as a sandwich filling, lettuce wrap, or scoop with crackers.',
      ingredients: [
        'Eggs 8 (hard-boiled, peeled)',
        'Mayonnaise 1/4 cup',
        'Dijon mustard 1 tsp',
        'Celery 1 stalk (finely diced)',
        'Fresh dill or parsley 1 tbsp (chopped)',
        'Lemon juice 1 tsp',
        'Sea salt and black pepper to taste',
        '(Optional) paprika for garnish'
      ],
      steps: [
        'Chop the hard-boiled eggs into small pieces or mash with a fork for a chunkier texture.',
        'In a bowl, mix the mayonnaise, mustard, lemon juice, salt and pepper.',
        'Fold in the chopped eggs, celery and herbs until combined.',
        'Taste and adjust seasoning. Sprinkle with paprika if desired.',
        'Serve in lettuce cups, on toast, or with crackers.'
      ],
      notes: 'Keeps 4 days in the fridge. For a lighter version, replace half the mayo with Greek yogurt.'
    },
    zh: {
      name: '鸡蛋沙拉',
      time: '15 分钟',
      servings: '4 份',
      why: '高蛋白经典水煮蛋沙拉，可夹三明治、生菜杯或蘸饼干。',
      ingredients: [
        '鸡蛋 8 个（煮熟去壳）',
        '蛋黄酱 1/4 杯',
        '第戎芥末 1 茶匙',
        '芹菜 1 根（细丁）',
        '莳萝或欧芹 1 汤匙（切碎）',
        '柠檬汁 1 茶匙',
        '海盐、黑胡椒 适量',
        '（可选）红椒粉 点缀'
      ],
      steps: [
        '水煮蛋切碎或用叉子压成粗粒。',
        '碗中拌蛋黄酱、芥末、柠檬汁、盐和胡椒。',
        '拌入碎蛋、芹菜和香草至均匀。',
        '试味调整，撒红椒粉。',
        '配生菜杯、吐司或饼干。'
      ],
      notes: '冷藏可存 4 天。减脂版可将一半蛋黄酱换成希腊酸奶。'
    },
    macros: { protein: { g: 14, pct: 25 }, fat: { g: 16, pct: 65 }, netCarbs: { g: 2, pct: 10 } }
  },

  {
    id: 'l150',
    type: 'lunch',
    carb: 'low',
    tags: ['asian','quick-easy','high-protein','gluten-free'],
    contains: ['pork','soy','sesame'],
    focus: ['Asian','Quick & easy'],
    img: null,
    emoji: '🥬',
    en: {
      name: 'Pork Lettuce Cups',
      time: '15 min',
      servings: '2',
      why: 'Ground pork sauteed with cilantro and tamari, spooned into crisp lettuce leaves with cucumber and rice — a low-carb Asian favourite.',
      ingredients: [
        'Ground pork 300g',
        'Butter or iceberg lettuce leaves 8',
        'Cucumber 1/2 (julienned)',
        'Cooked rice 1 cup',
        'Fresh cilantro 1/4 cup (chopped)',
        'Tamari 1.5 tbsp',
        'Sesame oil 1 tsp',
        'Garlic 2 cloves (minced)',
        'Ginger 1 tsp (minced)',
        'Fresh herbs: mint, basil or scallions to garnish'
      ],
      steps: [
        'Heat sesame oil in a pan over medium-high heat. Add garlic and ginger and saute 30 seconds until fragrant.',
        'Add the ground pork and break it up with a spatula; cook 5-7 minutes until browned and cooked through.',
        'Stir in the tamari and cilantro; cook 1 minute more. Remove from heat.',
        'Arrange the lettuce leaves on a plate. Spoon the pork mixture into each leaf, add a small portion of rice and julienned cucumber.',
        'Garnish with fresh herbs and serve immediately.'
      ],
      notes: 'Soy-free? Use coconut aminos instead of tamari. Add a squeeze of lime for brightness.'
    },
    zh: {
      name: '猪肉生菜包',
      time: '15 分钟',
      servings: '2 份',
      why: '猪肉末炒香菜和生抽，舀入脆生菜叶配黄瓜和米饭，低碳亚洲风。',
      ingredients: [
        '猪肉末 300g',
        '黄油或结球生菜叶 8 片',
        '黄瓜 半根（切丝）',
        '米饭 1 杯',
        '香菜 1/4 杯（切碎）',
        '无麸质生抽 1.5 汤匙',
        '芝麻油 1 茶匙',
        '蒜末 2 瓣',
        '姜末 1 茶匙',
        '薄荷、罗勒或葱花 点缀'
      ],
      steps: [
        '中大火热芝麻油，炒蒜姜末 30 秒出香。',
        '下猪肉末炒散，5-7 分钟至变色熟透。',
        '加生抽和香菜炒 1 分钟，离火。',
        '生菜叶摆盘，每叶舀入猪肉，加少许米饭和黄瓜丝。',
        '点缀新鲜香草即刻上桌。'
      ],
      notes: '无大豆者用椰子氨基代替生抽。挤青柠更鲜。'
    },
    macros: { protein: { g: 28, pct: 40 }, fat: { g: 16, pct: 40 }, netCarbs: { g: 8, pct: 20 } }
  },

  {
    id: 'l151',
    type: 'lunch',
    carb: 'moderate',
    tags: ['asian','no-cook','quick-easy','high-protein','gluten-free'],
    contains: ['shellfish','fish'],
    focus: ['Asian','No-cook'],
    img: null,
    emoji: '🦐',
    en: {
      name: 'Shrimp Rice Paper Rolls',
      time: '20 min',
      servings: '4',
      why: 'Vietnamese-style fresh spring rolls with cooked shrimp, rice vermicelli and herbs wrapped in translucent rice paper — light, healthy and no cooking required.',
      ingredients: [
        'Rice paper wrappers 8',
        'Cooked shrimp 200g (peeled, halved)',
        'Rice vermicelli 100g (cooked, cooled)',
        'Lettuce leaves 4',
        'Cucumber 1/2 (julienned)',
        'Fresh mint 8 leaves',
        'Fresh cilantro 8 sprigs',
        'Avocado 1/2 (sliced)',
        'For the dipping sauce: tamari 2 tbsp, lime juice 1 tbsp, honey 1 tsp, garlic 1 clove (minced)'
      ],
      steps: [
        'Prepare the rice vermicelli according to the package; rinse under cold water and drain.',
        'Fill a shallow dish with warm water. Dip one rice paper wrapper for 5 seconds until soft, then lay flat on a clean surface.',
        'Place a lettuce leaf, a small handful of vermicelli, 3-4 shrimp halves, cucumber, avocado, mint and cilantro in the lower third of the wrapper.',
        'Fold the sides inward, then roll tightly from the bottom up. Repeat with remaining wrappers.',
        'Mix the dipping sauce ingredients in a small bowl. Cut rolls in half and serve with the sauce.'
      ],
      notes: 'Keep rolls covered with a damp cloth to prevent drying. Add rice noodles inside for a heartier roll.'
    },
    zh: {
      name: '虾仁米纸卷',
      time: '20 分钟',
      servings: '4 份',
      why: '越式鲜春卷，熟虾仁、米粉和香草包在透明米纸中，清爽健康免烹。',
      ingredients: [
        '米纸 8 张',
        '熟虾仁 200g（去壳对半切）',
        '米粉 100g（煮熟冷却）',
        '生菜叶 4 片',
        '黄瓜 半根（切丝）',
        '薄荷叶 8 片',
        '香菜 8 根',
        '牛油果 半个（切片）',
        '蘸酱：无麸质生抽 2 汤匙、青柠汁 1 汤匙、蜂蜜 1 茶匙、蒜末 1 瓣'
      ],
      steps: [
        '米粉按包装煮好，冷水冲凉沥干。',
        '浅盘装温水，米纸浸 5 秒至软，平铺干净台面。',
        '米纸下方三分之一处放生菜叶、少许米粉、3-4 片虾、黄瓜、牛油果、薄荷和香菜。',
        '两侧折入，从下往上卷紧。重复至包完。',
        '蘸酱材料小碗调匀。卷对半切配酱上桌。'
      ],
      notes: '卷好用湿布盖住防干。加米粉让卷更饱腹。'
    },
    macros: { protein: { g: 14, pct: 22 }, fat: { g: 5, pct: 17 }, netCarbs: { g: 26, pct: 61 } }
  },

  {
    id: 'l152',
    type: 'lunch',
    carb: 'moderate',
    tags: ['asian','quick-easy','high-protein','gluten-free'],
    contains: ['beef'],
    focus: ['Asian','High protein'],
    img: null,
    emoji: '🍚',
    en: {
      name: 'Beef and Rice Bowl',
      time: '15 min',
      servings: '2',
      why: 'Seasoned ground beef served over rice with cucumber, tomatoes and fresh parsley — a simple, balanced bowl with protein and vegetables.',
      ingredients: [
        'Ground beef 300g',
        'Cooked rice 2 bowls',
        'Cucumber 1/2 (diced)',
        'Cherry tomatoes 1/2 cup (halved)',
        'Fresh parsley 2 tbsp (chopped)',
        'Olive oil 1 tbsp',
        'Soy sauce or tamari 1 tbsp',
        'Sea salt and black pepper to taste',
        '(Optional) sesame seeds, fried egg'
      ],
      steps: [
        'Heat olive oil in a pan over medium-high heat. Add the ground beef and cook 6-8 minutes, breaking it up, until browned.',
        'Season with tamari, salt and pepper. Remove from heat.',
        'Divide the cooked rice between two bowls. Spoon the beef over the rice.',
        'Top with diced cucumber, cherry tomatoes and fresh parsley.',
        'Garnish with sesame seeds or a fried egg if desired and serve.'
      ],
      notes: 'Use 85% lean ground beef for the best flavour-to-fat ratio. Add kimchi for a Korean twist.'
    },
    zh: {
      name: '牛肉饭碗',
      time: '15 分钟',
      servings: '2 份',
      why: '调味牛肉末盖饭配黄瓜、番茄和欧芹，简单均衡的蛋白蔬菜碗。',
      ingredients: [
        '牛肉末 300g',
        '米饭 2 碗',
        '黄瓜 半根（切丁）',
        '小番茄 半杯（对半切）',
        '欧芹 2 汤匙（切碎）',
        '橄榄油 1 汤匙',
        '生抽或无麸质生抽 1 汤匙',
        '海盐、黑胡椒 适量',
        '（可选）芝麻、煎蛋'
      ],
      steps: [
        '中大火热橄榄油，下牛肉末炒 6-8 分钟炒散至变色。',
        '加生抽、盐和胡椒调味，离火。',
        '米饭分两碗，舀牛肉盖饭上。',
        '摆黄瓜丁、小番茄和欧芹。',
        '按需撒芝麻或加煎蛋上桌。'
      ],
      notes: '85% 瘦肉末口感最佳。加泡菜有韩式风味。'
    },
    macros: { protein: { g: 30, pct: 38 }, fat: { g: 14, pct: 32 }, netCarbs: { g: 24, pct: 30 } }
  },

  {
    id: 'l153',
    type: 'lunch',
    carb: 'moderate',
    tags: ['asian','quick-easy','high-protein','gluten-free'],
    contains: ['shellfish'],
    focus: ['Asian','High protein'],
    img: null,
    emoji: '🍤',
    en: {
      name: 'Shrimp Rice Bowl',
      time: '15 min',
      servings: '2',
      why: 'Sauteed shrimp served over rice with cucumber and avocado — a quick, protein-rich Asian-style bowl that is ready in minutes.',
      ingredients: [
        'Shrimp 300g (peeled, deveined)',
        'Cooked rice 2 bowls',
        'Cucumber 1/2 (sliced)',
        'Avocado 1 (sliced)',
        'Olive oil 1 tbsp',
        'Garlic 2 cloves (minced)',
        'Tamari 1 tbsp',
        'Sesame oil 1 tsp',
        'Lemon juice 1 tsp',
        'Sea salt and black pepper to taste'
      ],
      steps: [
        'Heat olive oil in a pan over medium-high heat. Add garlic and saute 30 seconds.',
        'Add the shrimp and cook 2-3 minutes per side until pink and opaque.',
        'Drizzle with tamari, sesame oil and lemon juice; toss to coat. Remove from heat.',
        'Divide the rice between two bowls. Top with the shrimp, cucumber slices and avocado.',
        'Season with salt and pepper and serve immediately.'
      ],
      notes: 'Do not overcook shrimp — they become rubbery. Use pre-cooked shrimp and skip the pan step for a no-cook version.'
    },
    zh: {
      name: '虾仁饭碗',
      time: '15 分钟',
      servings: '2 份',
      why: '快炒虾仁盖饭配黄瓜和牛油果，几分钟即成的高蛋白亚洲碗。',
      ingredients: [
        '虾仁 300g（去壳去肠）',
        '米饭 2 碗',
        '黄瓜 半根（切片）',
        '牛油果 1 个（切片）',
        '橄榄油 1 汤匙',
        '蒜末 2 瓣',
        '无麸质生抽 1 汤匙',
        '芝麻油 1 茶匙',
        '柠檬汁 1 茶匙',
        '海盐、黑胡椒 适量'
      ],
      steps: [
        '中大火热橄榄油，炒蒜末 30 秒。',
        '下虾仁每面炒 2-3 分钟至变粉不透明。',
        '淋生抽、芝麻油和柠檬汁翻匀，离火。',
        '米饭分两碗，摆虾仁、黄瓜片和牛油果。',
        '撒盐胡椒即刻上桌。'
      ],
      notes: '虾仁别炒过头否则变硬。用熟虾仁跳过炒制即成免烹版。'
    },
    macros: { protein: { g: 28, pct: 35 }, fat: { g: 10, pct: 28 }, netCarbs: { g: 26, pct: 37 } }
  },

  /* ==================== DINNER ==================== */

  {
    id: 'd138',
    type: 'dinner',
    carb: 'moderate',
    tags: ['batch-cook','gut-healing','high-protein','gluten-free'],
    contains: ['pork'],
    focus: ['Gut-healing','Batch-cook'],
    img: null,
    emoji: '🍲',
    en: {
      name: 'Ham and Split Pea Soup',
      time: '60 min',
      servings: '6',
      why: 'A comforting, fibre-rich soup that uses a ham bone or leftover ham — makes six portions and freezes beautifully.',
      ingredients: [
        'Split peas 1.5 cups (rinsed)',
        'Ham bone or 300g leftover ham',
        'Onion 1 (diced)',
        'Carrots 2 (diced)',
        'Celery 2 stalks (diced)',
        'Garlic 3 cloves (minced)',
        'Chicken or vegetable stock 6 cups',
        'Bay leaf 1',
        'Olive oil 1 tbsp',
        'Sea salt and black pepper to taste'
      ],
      steps: [
        'Heat olive oil in a large pot. Saute the onion, carrots and celery 5 minutes until softened.',
        'Add the garlic and cook 1 minute more.',
        'Add the split peas, ham bone or leftover ham, stock and bay leaf. Bring to a boil.',
        'Reduce to a simmer and cook 45-50 minutes, stirring occasionally, until the peas are soft and the soup is thick.',
        'Remove the ham bone and bay leaf. If using a bone, shred the meat and return it to the pot. Season to taste.',
        'Ladle into bowls and serve with crusty bread if desired.'
      ],
      notes: 'Keeps 5 days in the fridge and freezes for 3 months. The soup thickens as it sits — add water when reheating if needed.'
    },
    zh: {
      name: '火腿豌豆汤',
      time: '60 分钟',
      servings: '6 份',
      why: '舒适高纤维汤，用火腿骨或剩火腿，一次六份可冷冻。',
      ingredients: [
        '干豌豆 1.5 杯（洗净）',
        '火腿骨或 300g 剩火腿',
        '洋葱 1 个（切丁）',
        '胡萝卜 2 根（切丁）',
        '西芹 2 根（切丁）',
        '蒜末 3 瓣',
        '鸡或蔬菜高汤 6 杯',
        '月桂叶 1 片',
        '橄榄油 1 汤匙',
        '海盐、黑胡椒 适量'
      ],
      steps: [
        '大锅热橄榄油，炒洋葱、胡萝卜、西芹 5 分钟至软。',
        '加蒜末炒 1 分钟。',
        '放入豌豆、火腿骨或剩火腿、高汤和月桂叶，煮开。',
        '转小火炖 45-50 分钟，不时搅拌至豌豆软烂汤变稠。',
        '取出火腿骨和月桂叶。骨肉撕碎回锅。调味。',
        '盛碗，按需配面包。'
      ],
      notes: '冷藏 5 天、冷冻 3 个月。汤放久会变稠，加热时可加水。'
    },
    macros: { protein: { g: 22, pct: 35 }, fat: { g: 6, pct: 20 }, netCarbs: { g: 24, pct: 45 } }
  },

  {
    id: 'd139',
    type: 'dinner',
    carb: 'moderate',
    tags: ['batch-cook','gut-healing','high-protein','gluten-free'],
    contains: ['beef'],
    focus: ['Gut-healing','Batch-cook'],
    img: null,
    emoji: '🍲',
    en: {
      name: 'Beef and Barley Soup',
      time: '50 min',
      servings: '6',
      why: 'A hearty, warming soup with tender beef and pearl barley — a complete meal in a bowl that improves with time.',
      ingredients: [
        'Beef stewing meat 400g (cut into 1-inch cubes)',
        'Pearl barley 1 cup (rinsed)',
        'Onion 1 (diced)',
        'Carrots 2 (diced)',
        'Celery 2 stalks (diced)',
        'Tinned tomatoes 1 tin',
        'Beef stock 6 cups',
        'Garlic 3 cloves (minced)',
        'Olive oil 1 tbsp',
        'Bay leaf 1, thyme 1 tsp',
        'Sea salt and black pepper to taste'
      ],
      steps: [
        'Season the beef cubes with salt and pepper. Heat olive oil in a large pot and brown the meat in batches, 3-4 minutes per batch. Set aside.',
        'In the same pot, saute the onion, carrots and celery 5 minutes until softened. Add the garlic and cook 1 minute.',
        'Return the beef to the pot. Add the tinned tomatoes, stock, barley, bay leaf and thyme. Bring to a boil.',
        'Reduce to a simmer and cook 35-40 minutes, stirring occasionally, until the beef is tender and the barley is soft.',
        'Remove the bay leaf, season to taste and serve hot.'
      ],
      notes: 'Use gluten-free oats instead of barley if gluten-free is needed. Freezes well for 3 months.'
    },
    zh: {
      name: '牛肉大麦汤',
      time: '50 分钟',
      servings: '6 份',
      why: '暖心汤品，嫩牛肉配珍珠大麦，一碗即全餐，越放越入味。',
      ingredients: [
        '炖牛肉 400g（切 2.5 厘米块）',
        '珍珠大麦 1 杯（洗净）',
        '洋葱 1 个（切丁）',
        '胡萝卜 2 根（切丁）',
        '西芹 2 根（切丁）',
        '番茄罐头 1 罐',
        '牛肉高汤 6 杯',
        '蒜末 3 瓣',
        '橄榄油 1 汤匙',
        '月桂叶 1 片、百里香 1 茶匙',
        '海盐、黑胡椒 适量'
      ],
      steps: [
        '牛肉块撒盐胡椒，大锅热橄榄油分批煎至变色每批 3-4 分钟，盛出。',
        '原锅炒洋葱、胡萝卜、西芹 5 分钟至软，加蒜末炒 1 分钟。',
        '牛肉回锅，加番茄、高汤、大麦、月桂叶和百里香，煮开。',
        '转小火炖 35-40 分钟至牛肉软烂大麦熟透。',
        '取出月桂叶调味，趁热上桌。'
      ],
      notes: '无麸质者用无麸质燕麦代替大麦。冷冻可存 3 个月。'
    },
    macros: { protein: { g: 24, pct: 35 }, fat: { g: 8, pct: 22 }, netCarbs: { g: 22, pct: 43 } }
  },

  {
    id: 'd140',
    type: 'dinner',
    carb: 'low',
    tags: ['quick-easy','high-protein','gluten-free','batch-cook'],
    contains: ['pork'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🥩',
    en: {
      name: 'Herb Pork Tenderloin',
      time: '30 min',
      servings: '4',
      why: 'Roasted pork tenderloin with thyme, rosemary, olive oil and salt — tender, lean and high in protein, perfect for a family dinner.',
      ingredients: [
        'Pork tenderloin 600g (1-2 pieces)',
        'Fresh thyme 1 tbsp (or 1 tsp dried)',
        'Fresh rosemary 1 tsp (or 1/2 tsp dried, chopped)',
        'Olive oil 2 tbsp',
        'Sea salt 1 tsp',
        'Black pepper 1/2 tsp',
        'Garlic 2 cloves (minced)',
        '(Optional) lemon wedges to serve'
      ],
      steps: [
        'Preheat the oven to 200°C (400°F). Pat the pork tenderloin dry with paper towels.',
        'In a small bowl, mix the olive oil, thyme, rosemary, garlic, salt and pepper into a paste.',
        'Rub the herb paste all over the tenderloin. Let it sit 10 minutes if time allows.',
        'Sear the tenderloin in an oven-safe pan over medium-high heat, 2 minutes per side until golden.',
        'Transfer the pan to the oven and roast 15-18 minutes until the internal temperature reaches 63°C (145°F).',
        'Remove from the oven, cover loosely with foil and rest 5 minutes. Slice into medallions and serve with lemon wedges.'
      ],
      notes: 'Do not overcook — pork tenderloin is lean and dries out quickly. Use a meat thermometer for best results.'
    },
    zh: {
      name: '香草猪里脊',
      time: '30 分钟',
      servings: '4 份',
      why: '烤猪里脊配百里香、迷迭香、橄榄油和盐，嫩瘦高蛋白，适合家庭晚餐。',
      ingredients: [
        '猪里脊 600g（1-2 条）',
        '新鲜百里香 1 汤匙（或干 1 茶匙）',
        '新鲜迷迭香 1 茶匙（或干半茶匙，切碎）',
        '橄榄油 2 汤匙',
        '海盐 1 茶匙',
        '黑胡椒 半茶匙',
        '蒜末 2 瓣',
        '（可选）柠檬角 配餐'
      ],
      steps: [
        '烤箱 200°C 预热。猪里脊用厨房纸擦干。',
        '小碗拌橄榄油、百里香、迷迭香、蒜末、盐和胡椒成酱。',
        '香草酱均匀涂抹里脊，时间允许静置 10 分钟。',
        '烤箱适用平底锅中大火，每面煎 2 分钟至金黄。',
        '转烤箱烤 15-18 分钟至内部温度 63°C。',
        '取出松盖锡纸静置 5 分钟，切厚片配柠檬角。'
      ],
      notes: '别过熟——里脊瘦容易干。用温度计最佳。'
    },
    macros: { protein: { g: 32, pct: 55 }, fat: { g: 10, pct: 35 }, netCarbs: { g: 1, pct: 10 } }
  },

  {
    id: 'd141',
    type: 'dinner',
    carb: 'low',
    tags: ['quick-easy','high-protein','batch-cook'],
    contains: ['pork'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🍔',
    en: {
      name: 'Pork Burger Patties',
      time: '20 min',
      servings: '4',
      why: 'Homemade ground pork patties with fresh parsley — juicy, high-protein and far better than store-bought.',
      ingredients: [
        'Ground pork 500g',
        'Fresh parsley 3 tbsp (chopped)',
        'Onion 1/2 (finely diced)',
        'Garlic 2 cloves (minced)',
        'Egg 1',
        'Sea salt 1 tsp',
        'Black pepper 1/2 tsp',
        'Olive oil 1 tbsp',
        '(Optional) lettuce leaves, tomato slices, or buns to serve'
      ],
      steps: [
        'In a bowl, combine the ground pork, parsley, onion, garlic, egg, salt and pepper. Mix gently until just combined.',
        'Divide the mixture into 4 equal portions and shape into patties about 2 cm thick.',
        'Heat olive oil in a pan over medium-high heat.',
        'Cook the patties 4-5 minutes per side until golden and cooked through (internal temperature 71°C / 160°F).',
        'Serve in lettuce wraps or on buns with tomato slices, or alongside vegetables.'
      ],
      notes: 'Do not overmix or the patties become tough. Make a batch and freeze raw patties between parchment paper.'
    },
    zh: {
      name: '猪肉饼',
      time: '20 分钟',
      servings: '4 份',
      why: '自制猪肉末饼配新鲜欧芹，多汁高蛋白，远胜成品。',
      ingredients: [
        '猪肉末 500g',
        '新鲜欧芹 3 汤匙（切碎）',
        '洋葱 半个（细丁）',
        '蒜末 2 瓣',
        '鸡蛋 1 个',
        '海盐 1 茶匙',
        '黑胡椒 半茶匙',
        '橄榄油 1 汤匙',
        '（可选）生菜叶、番茄片或面包 配餐'
      ],
      steps: [
        '碗中混合猪肉末、欧芹、洋葱、蒜末、鸡蛋、盐和胡椒，轻拌至刚好均匀。',
        '分 4 等份搓成 2 厘米厚的饼。',
        '中大火热橄榄油。',
        '每面煎 4-5 分钟至金黄熟透（内部 71°C）。',
        '配生菜叶或面包夹番茄片，或配蔬菜。'
      ],
      notes: '别过度搅拌否则变硬。可批量做，生饼用烘焙纸隔开冷冻。'
    },
    macros: { protein: { g: 26, pct: 40 }, fat: { g: 18, pct: 52 }, netCarbs: { g: 2, pct: 8 } }
  },

  {
    id: 'd142',
    type: 'dinner',
    carb: 'moderate',
    tags: ['quick-easy','high-protein','batch-cook'],
    contains: ['pork','gluten'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🍝',
    en: {
      name: 'Pork and Tomato Pasta',
      time: '25 min',
      servings: '4',
      why: 'Ground pork cooked with crushed tomatoes, basil and oregano, tossed with pasta — a flavourful twist on a classic pasta dinner.',
      ingredients: [
        'Ground pork 400g',
        'Pasta 300g (any shape)',
        'Crushed tomatoes 1 tin (400g)',
        'Fresh basil 1/4 cup (chopped) or 1 tbsp dried',
        'Dried oregano 1 tsp',
        'Garlic 3 cloves (minced)',
        'Olive oil 1 tbsp',
        'Sea salt and black pepper to taste',
        '(Optional) Parmesan cheese to serve'
      ],
      steps: [
        'Cook the pasta according to the package; drain and set aside.',
        'Heat olive oil in a large pan over medium heat. Add the garlic and saute 30 seconds.',
        'Add the ground pork and cook 6-8 minutes, breaking it up, until browned.',
        'Stir in the crushed tomatoes, basil and oregano. Simmer 10 minutes, stirring occasionally.',
        'Season with salt and pepper. Toss the cooked pasta into the sauce until well coated.',
        'Serve hot with grated Parmesan if desired.'
      ],
      notes: 'Use gluten-free pasta if needed. The pork sauce keeps 4 days in the fridge and freezes well.'
    },
    zh: {
      name: '猪肉番茄意面',
      time: '25 分钟',
      servings: '4 份',
      why: '猪肉末配碎番茄、罗勒和牛至，拌意面——经典意面的美味变奏。',
      ingredients: [
        '猪肉末 400g',
        '意面 300g（任意形状）',
        '碎番茄罐头 1 罐（400g）',
        '新鲜罗勒 1/4 杯（切碎）或干 1 汤匙',
        '干牛至 1 茶匙',
        '蒜末 3 瓣',
        '橄榄油 1 汤匙',
        '海盐、黑胡椒 适量',
        '（可选）帕玛森 配餐'
      ],
      steps: [
        '意面按包装煮好沥干备用。',
        '大锅中火热橄榄油，炒蒜末 30 秒。',
        '下猪肉末炒 6-8 分钟炒散至变色。',
        '加碎番茄、罗勒和牛至，小火炖 10 分钟。',
        '调味，拌入意面至均匀裹汁。',
        '趁热配帕玛森。'
      ],
      notes: '无麸质者换无麸质意面。肉酱冷藏 4 天可冷冻。'
    },
    macros: { protein: { g: 28, pct: 33 }, fat: { g: 12, pct: 28 }, netCarbs: { g: 30, pct: 39 } }
  },

  {
    id: 'd143',
    type: 'dinner',
    carb: 'moderate',
    tags: ['quick-easy','high-protein'],
    contains: ['fish','gluten'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🌮',
    en: {
      name: 'Fish Tacos',
      time: '20 min',
      servings: '4',
      why: 'Pan-fried white fish with cabbage, cucumber and a mild lime-yogurt dressing in soft tortillas — a fresh and satisfying dinner.',
      ingredients: [
        'White fish fillets 400g (cod, tilapia or halibut)',
        'Soft tortillas 8 (corn or flour)',
        'Cabbage 2 cups (shredded)',
        'Cucumber 1/2 (julienned)',
        'Plain yogurt 1/4 cup',
        'Lime juice 2 tbsp',
        'Olive oil 1 tbsp',
        'Cumin 1 tsp',
        'Paprika 1 tsp',
        'Sea salt and black pepper to taste',
        'Fresh cilantro to garnish'
      ],
      steps: [
        'Pat the fish dry and cut into strips. Season with cumin, paprika, salt and pepper.',
        'Heat olive oil in a pan over medium-high heat. Cook the fish strips 3-4 minutes per side until golden and flaky. Set aside.',
        'In a small bowl, mix the yogurt with 1 tbsp lime juice and a pinch of salt to make the dressing.',
        'Warm the tortillas in a dry pan or microwave for 10 seconds.',
        'Assemble the tacos: place cabbage and cucumber in each tortilla, add fish strips, drizzle with yogurt dressing and sprinkle with cilantro and remaining lime juice.'
      ],
      notes: 'Use corn tortillas for gluten-free. Add salsa or hot sauce for extra kick.'
    },
    zh: {
      name: '鱼塔可',
      time: '20 分钟',
      servings: '4 份',
      why: '香煎白鱼配卷心菜、黄瓜和青柠酸奶酱，卷软饼——清爽满足的晚餐。',
      ingredients: [
        '白鱼排 400g（鳕鱼、罗非或大比目鱼）',
        '软饼 8 张（玉米或面粉）',
        '卷心菜 2 杯（切丝）',
        '黄瓜 半根（切丝）',
        '原味酸奶 1/4 杯',
        '青柠汁 2 汤匙',
        '橄榄油 1 汤匙',
        '孜然 1 茶匙',
        '红椒粉 1 茶匙',
        '海盐、黑胡椒 适量',
        '香菜 点缀'
      ],
      steps: [
        '鱼排擦干切条，撒孜然、红椒粉、盐和胡椒。',
        '中大火热橄榄油，鱼条每面煎 3-4 分钟至金黄酥散，盛出。',
        '小碗拌酸奶、1 汤匙青柠汁和少许盐成酱。',
        '软饼干锅或微波热 10 秒。',
        '组装：每张饼放卷心菜和黄瓜，加鱼条，淋酸奶酱，撒香菜和剩余青柠汁。'
      ],
      notes: '无麸质用玉米饼。加莎莎酱或辣酱更带劲。'
    },
    macros: { protein: { g: 26, pct: 35 }, fat: { g: 8, pct: 22 }, netCarbs: { g: 26, pct: 43 } }
  },

  {
    id: 'd144',
    type: 'dinner',
    carb: 'moderate',
    tags: ['quick-easy','high-protein','gluten-free'],
    contains: ['shellfish','gluten'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🍝',
    en: {
      name: 'Shrimp and Zucchini Pasta',
      time: '20 min',
      servings: '4',
      why: 'Shrimp and zucchini sauteed with olive oil, lemon and fresh parsley, tossed with pasta — a light yet protein-rich dinner.',
      ingredients: [
        'Shrimp 300g (peeled, deveined)',
        'Pasta 300g (any shape)',
        'Zucchini 2 (sliced or spiralised)',
        'Fresh parsley 1/4 cup (chopped)',
        'Olive oil 2 tbsp',
        'Garlic 3 cloves (minced)',
        'Lemon juice 2 tbsp',
        'Lemon zest 1 tsp',
        'Red pepper flakes 1/4 tsp (optional)',
        'Sea salt and black pepper to taste'
      ],
      steps: [
        'Cook the pasta according to the package; drain and set aside.',
        'Heat 1 tbsp olive oil in a large pan over medium-high heat. Add the shrimp and cook 2 minutes per side until pink. Remove and set aside.',
        'Add the remaining olive oil and zucchini to the pan. Saute 4-5 minutes until tender and lightly golden.',
        'Add the garlic and red pepper flakes; cook 1 minute until fragrant.',
        'Return the shrimp to the pan. Add the lemon juice, zest, parsley, salt and pepper. Toss everything together.',
        'Add the cooked pasta and toss to combine. Serve immediately.'
      ],
      notes: 'Use gluten-free pasta if needed. Swap half the pasta for extra zucchini noodles to lower carbs.'
    },
    zh: {
      name: '虾仁西葫芦意面',
      time: '20 分钟',
      servings: '4 份',
      why: '虾仁和西葫芦配橄榄油、柠檬和欧芹炒拌意面，清淡高蛋白晚餐。',
      ingredients: [
        '虾仁 300g（去壳去肠）',
        '意面 300g（任意形状）',
        '西葫芦 2 根（切片或刨丝）',
        '欧芹 1/4 杯（切碎）',
        '橄榄油 2 汤匙',
        '蒜末 3 瓣',
        '柠檬汁 2 汤匙',
        '柠檬皮 1 茶匙',
        '红辣椒片 1/4 茶匙（可选）',
        '海盐、黑胡椒 适量'
      ],
      steps: [
        '意面按包装煮好沥干备用。',
        '大锅中大火热 1 汤匙橄榄油，虾仁每面炒 2 分钟至变粉，盛出。',
        '加剩余橄榄油和西葫芦炒 4-5 分钟至软微黄。',
        '加蒜末和红辣椒片炒 1 分钟出香。',
        '虾仁回锅，加柠檬汁、柠檬皮、欧芹、盐和胡椒翻匀。',
        '拌入意面至均匀，即刻上桌。'
      ],
      notes: '无麸质者换无麸质意面。一半意面换西葫芦面可低碳。'
    },
    macros: { protein: { g: 24, pct: 32 }, fat: { g: 10, pct: 27 }, netCarbs: { g: 28, pct: 41 } }
  },

  {
    id: 'd145',
    type: 'dinner',
    carb: 'moderate',
    tags: ['batch-cook','high-protein'],
    contains: ['pork','gluten','dairy'],
    focus: ['High protein','Batch-cook'],
    img: null,
    emoji: '🍆',
    en: {
      name: 'Stuffed Eggplant Boats',
      time: '45 min',
      servings: '4',
      why: 'Eggplant halves filled with ground pork, tomatoes, basil and mozzarella, baked until tender — a hearty, vegetable-rich dinner.',
      ingredients: [
        'Eggplants 2 (medium)',
        'Ground pork 300g',
        'Tinned tomatoes 1 tin (crushed)',
        'Fresh basil 1/4 cup (chopped)',
        'Mozzarella 150g (shredded)',
        'Olive oil 2 tbsp',
        'Garlic 3 cloves (minced)',
        'Onion 1/2 (diced)',
        'Sea salt and black pepper to taste',
        'Parmesan 2 tbsp (grated, optional)'
      ],
      steps: [
        'Preheat the oven to 190°C (375°F). Halve the eggplants lengthwise and scoop out the flesh, leaving a 1 cm shell. Chop the flesh.',
        'Brush the eggplant shells with 1 tbsp olive oil and bake 10 minutes to soften.',
        'Heat the remaining olive oil in a pan. Saute the onion and garlic 3 minutes, then add the ground pork and cook 6-8 minutes until browned.',
        'Stir in the chopped eggplant flesh, crushed tomatoes and basil. Simmer 8 minutes until thickened. Season.',
        'Spoon the pork mixture into the eggplant shells. Top with shredded mozzarella and Parmesan.',
        'Bake 20 minutes until the cheese is golden and the eggplant is tender. Serve hot.'
      ],
      notes: 'Use ground beef or turkey instead of pork. The filling can be made ahead and refrigerated overnight.'
    },
    zh: {
      name: '酿茄子船',
      time: '45 分钟',
      servings: '4 份',
      why: '茄子对半切开填猪肉末、番茄、罗勒和马苏里拉烤至软烂，蔬菜丰富的晚餐。',
      ingredients: [
        '茄子 2 根（中等）',
        '猪肉末 300g',
        '碎番茄罐头 1 罐',
        '新鲜罗勒 1/4 杯（切碎）',
        '马苏里拉 150g（切丝）',
        '橄榄油 2 汤匙',
        '蒜末 3 瓣',
        '洋葱 半个（切丁）',
        '海盐、黑胡椒 适量',
        '帕玛森 2 汤匙（可选）'
      ],
      steps: [
        '烤箱 190°C 预热。茄子纵向对半切，挖出茄肉留 1 厘米外壳，茄肉切碎。',
        '茄壳刷 1 汤匙橄榄油烤 10 分钟至软。',
        '剩余橄榄油热锅炒洋葱蒜末 3 分钟，加猪肉末炒 6-8 分钟至变色。',
        '拌入碎茄肉、番茄和罗勒，炖 8 分钟收汁，调味。',
        '猪肉馅填入茄壳，铺马苏里拉和帕玛森。',
        '烤 20 分钟至芝士金黄茄子软烂，趁热上桌。'
      ],
      notes: '可换牛肉末或火鸡末。馅可提前做好冷藏过夜。'
    },
    macros: { protein: { g: 24, pct: 32 }, fat: { g: 14, pct: 37 }, netCarbs: { g: 18, pct: 31 } }
  },

  {
    id: 'd146',
    type: 'dinner',
    carb: 'low',
    tags: ['batch-cook','high-protein','gluten-free'],
    contains: ['pork'],
    focus: ['High protein','Batch-cook'],
    img: null,
    emoji: '🍖',
    en: {
      name: 'Baby Back Ribs',
      time: '4 hours',
      servings: '4',
      why: 'Slow-roasted baby back ribs basted with a homemade tomato-soy-balsamic glaze — fall-off-the-bone tender and deeply flavourful.',
      ingredients: [
        'Tomato sauce 1 to 1.5 cups',
        'Soy sauce 1/2 cup',
        'Balsamic vinegar 1/2 cup',
        'Sucanat or coconut sugar 1/2 cup',
        'Liquid smoke 1 tsp (optional)',
        'Baby back pork ribs 1 entire rack'
      ],
      steps: [
        'Mix all the marinade ingredients (tomato sauce, soy sauce, balsamic vinegar, sucanat or coconut sugar, and liquid smoke) in a bowl.',
        'Brush the ribs on both sides with the marinade and refrigerate overnight.',
        'Bring the ribs to room temperature. Preheat the oven to 250°F (120°C).',
        'Baste the ribs on both sides and place bone-side up on a baking sheet. Roast for 30 minutes.',
        'Turn the ribs over so the meat side is up. Baste the meat side. Do not turn again.',
        'Continue roasting for a total of 4 hours, basting every 30 minutes for the first 3 hours and every 15 minutes for the last hour.',
        'The ribs are done when the meat is tender and pulls away easily from the bone. Let rest 5 minutes before cutting.'
      ],
      notes: 'The low-and-slow method is key to tenderness. Leftover ribs reheat well in a 300°F oven covered with foil for 15 minutes.'
    },
    zh: {
      name: '烤小排骨',
      time: '4 小时',
      servings: '4 份',
      why: '慢烤小排骨刷自制番茄酱油巴萨米克酱汁——肉骨分离，浓郁入味。',
      ingredients: [
        '番茄酱 1 至 1.5 杯',
        '生抽 1/2 杯',
        '巴萨米克醋 1/2 杯',
        '蔗糖或椰子糖 1/2 杯',
        '烟熏液 1 茶匙（可选）',
        '小排骨 1 整排'
      ],
      steps: [
        '碗中混合所有酱汁材料（番茄酱、生抽、巴萨米克醋、蔗糖或椰子糖、烟熏液）。',
        '排骨两面刷酱汁，冷藏过夜。',
        '排骨回室温。烤箱 250°F（120°C）预热。',
        '排骨两面刷酱，骨面朝上放烤盘，烤 30 分钟。',
        '翻至肉面朝上，刷肉面，不再翻转。',
        '继续烤总计 4 小时：前 3 小时每 30 分钟刷一次，最后 1 小时每 15 分钟刷一次。',
        '肉嫩脱骨即好，静置 5 分钟再切。'
      ],
      notes: '低温慢烤是关键。剩排 300°F 盖锡纸加热 15 分钟即可。'
    },
    macros: { protein: { g: 28, pct: 38 }, fat: { g: 18, pct: 45 }, netCarbs: { g: 8, pct: 17 } }
  },

  {
    id: 'd147',
    type: 'dinner',
    carb: 'low',
    tags: ['quick-easy','high-protein','gluten-free'],
    contains: ['pork'],
    focus: ['High protein','Quick & easy'],
    img: null,
    emoji: '🥩',
    en: {
      name: 'Ground Pork',
      time: '10 min',
      servings: '4',
      why: 'Versatile seasoned ground pork that can be used on its own or as a base for bowls, tacos and stir-fries — lean and high in protein.',
      ingredients: [
        'Ground pork 500g',
        'Olive oil 1 tbsp',
        'Garlic 2 cloves (minced)',
        'Sea salt 1 tsp',
        'Black pepper 1/2 tsp',
        '(Optional) paprika 1/2 tsp, cumin 1/2 tsp',
        '(Optional) tamari 1 tbsp for Asian-style seasoning'
      ],
      steps: [
        'Heat olive oil in a large skillet over medium-high heat.',
        'Add the garlic and saute 30 seconds until fragrant.',
        'Add the ground pork and break it up with a spatula into small pieces.',
        'Cook 7-9 minutes, stirring occasionally, until fully browned and no pink remains.',
        'Season with salt, pepper and any optional spices. Stir to combine and cook 1 minute more.',
        'Serve immediately over rice, in lettuce cups, or alongside vegetables.'
      ],
      notes: 'Ground pork is very versatile — use the seasoned meat in rice bowls, pasta sauces, tacos, or stuffed vegetables. Cooked pork keeps 4 days in the fridge.'
    },
    zh: {
      name: '猪肉末',
      time: '10 分钟',
      servings: '4 份',
      why: '百搭调味猪肉末，可单食或做饭碗、塔可、炒菜底料——瘦而高蛋白。',
      ingredients: [
        '猪肉末 500g',
        '橄榄油 1 汤匙',
        '蒜末 2 瓣',
        '海盐 1 茶匙',
        '黑胡椒 半茶匙',
        '（可选）红椒粉半茶匙、孜然半茶匙',
        '（可选）无麸质生抽 1 汤匙 亚洲调味'
      ],
      steps: [
        '大煎锅中大火热橄榄油。',
        '加蒜末炒 30 秒出香。',
        '下猪肉末用铲炒散成小块。',
        '炒 7-9 分钟不时翻动至完全变色无粉红。',
        '撒盐、胡椒和可选香料，翻匀再炒 1 分钟。',
        '盖饭、夹生菜或配蔬菜即刻上桌。'
      ],
      notes: '猪肉末用途广泛——可做饭碗、意面酱、塔可或酿蔬菜。熟肉冷藏 4 天。'
    },
    macros: { protein: { g: 26, pct: 42 }, fat: { g: 16, pct: 52 }, netCarbs: { g: 1, pct: 6 } }
  },

  /* ==================== SNACK ==================== */

  {
    id: 's130',
    type: 'snack',
    carb: 'low',
    tags: ['no-cook','quick-easy','vegetarian','gluten-free','vegan'],
    contains: ['sesame'],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🥣',
    en: {
      name: 'Hummus',
      time: '10 min',
      servings: '6',
      why: 'A creamy, plant-based dip made from chickpeas and tahini — rich in fibre, protein and healthy fats.',
      ingredients: [
        'Chickpeas 1 tin (drained and rinsed)',
        'Tahini 3 tbsp',
        'Olive oil 2 tbsp',
        'Lemon juice 2 tbsp',
        'Garlic 1 clove',
        'Cumin 1/2 tsp',
        'Sea salt 1/2 tsp',
        'Water 2-3 tbsp (to adjust consistency)',
        '(Optional) paprika and olive oil to serve'
      ],
      steps: [
        'Add the chickpeas, tahini, olive oil, lemon juice, garlic, cumin and salt to a food processor.',
        'Blend until smooth, scraping down the sides as needed.',
        'With the motor running, add water 1 tbsp at a time until the hummus reaches your desired consistency.',
        'Taste and adjust salt and lemon. Spoon into a bowl.',
        'Drizzle with olive oil and sprinkle with paprika. Serve with vegetables, pita or crackers.'
      ],
      notes: 'For ultra-smooth hummus, peel the chickpea skins first. Keeps 5 days in the fridge.'
    },
    zh: {
      name: '鹰嘴豆泥',
      time: '10 分钟',
      servings: '6 份',
      why: '鹰嘴豆和芝麻酱做的奶油植物蘸酱，富含纤维、蛋白和好脂肪。',
      ingredients: [
        '鹰嘴豆罐头 1 罐（沥干洗净）',
        '芝麻酱 3 汤匙',
        '橄榄油 2 汤匙',
        '柠檬汁 2 汤匙',
        '大蒜 1 瓣',
        '孜然 半茶匙',
        '海盐 半茶匙',
        '水 2-3 汤匙（调稠度）',
        '（可选）红椒粉和橄榄油 点缀'
      ],
      steps: [
        '鹰嘴豆、芝麻酱、橄榄油、柠檬汁、蒜、孜然和盐放入料理机。',
        '打至顺滑，刮壁辅助。',
        '开机状态下逐次加 1 汤匙水至理想稠度。',
        '试味调整盐和柠檬，盛碗。',
        '淋橄榄油撒红椒粉。配蔬菜、皮塔饼或饼干。'
      ],
      notes: '想超滑可先剥鹰嘴豆皮。冷藏可存 5 天。'
    },
    macros: { protein: { g: 6, pct: 18 }, fat: { g: 10, pct: 55 }, netCarbs: { g: 8, pct: 27 } }
  },

  {
    id: 's131',
    type: 'snack',
    carb: 'low',
    tags: ['no-cook','quick-easy','vegetarian','gluten-free','vegan'],
    contains: [],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🥑',
    en: {
      name: 'Guacamole',
      time: '10 min',
      servings: '4',
      why: 'Fresh mashed avocado with lime, tomato and onion — a heart-healthy, no-cook dip rich in healthy fats and potassium.',
      ingredients: [
        'Avocados 2 (ripe)',
        'Lime juice 2 tbsp',
        'Cherry tomato 1 (diced)',
        'Red onion 2 tbsp (finely diced)',
        'Fresh cilantro 2 tbsp (chopped)',
        'Sea salt 1/2 tsp',
        '(Optional) jalapeno 1 tsp (minced)'
      ],
      steps: [
        'Halve the avocados, remove the pits and scoop the flesh into a bowl.',
        'Mash with a fork to your preferred texture — smooth or chunky.',
        'Add the lime juice immediately to prevent browning.',
        'Fold in the diced tomato, red onion, cilantro, salt and jalapeno if using.',
        'Taste and adjust seasoning. Serve immediately with tortilla chips or vegetable sticks.'
      ],
      notes: 'Press plastic wrap directly onto the surface of leftover guacamole to prevent browning. Keeps 1-2 days in the fridge.'
    },
    zh: {
      name: '牛油果酱',
      time: '10 分钟',
      servings: '4 份',
      why: '新鲜牛油果配青柠、番茄和洋葱——护心免烹蘸酱，富含好脂肪和钾。',
      ingredients: [
        '牛油果 2 个（熟）',
        '青柠汁 2 汤匙',
        '小番茄 1 个（切丁）',
        '紫洋葱 2 汤匙（细丁）',
        '香菜 2 汤匙（切碎）',
        '海盐 半茶匙',
        '（可选）墨西哥辣椒 1 茶匙（切末）'
      ],
      steps: [
        '牛油果对半切开去核，果肉刮入碗中。',
        '用叉子压至喜欢的口感——顺滑或粗粒。',
        '立刻加青柠汁防氧化变色。',
        '拌入番茄丁、洋葱、香菜、盐和辣椒。',
        '试味调整。配玉米片或蔬菜条即刻上桌。'
      ],
      notes: '剩酱表面贴保鲜膜防变色。冷藏 1-2 天。'
    },
    macros: { protein: { g: 2, pct: 6 }, fat: { g: 15, pct: 80 }, netCarbs: { g: 4, pct: 14 } }
  },

  {
    id: 's132',
    type: 'snack',
    carb: 'low',
    tags: ['no-cook','quick-easy','vegetarian','gluten-free'],
    contains: ['dairy'],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🧈',
    en: {
      name: 'Butter',
      time: '1 min',
      servings: '1',
      why: 'A simple, satisfying spread — grass-fed butter provides conjugated linoleic acid and vitamins A and K2.',
      ingredients: [
        'Grass-fed butter 1 tbsp',
        '(Optional) flaky sea salt to sprinkle',
        '(Optional) sourdough bread, rice cake or crackers to serve'
      ],
      steps: [
        'Soften the butter at room temperature for 5 minutes if straight from the fridge.',
        'Spread evenly on bread, a rice cake or crackers.',
        'Sprinkle with flaky sea salt if desired and serve.'
      ],
      notes: 'Grass-fed butter has a deeper yellow colour and higher nutrient content than conventional butter. Use ghee if dairy-sensitive.'
    },
    zh: {
      name: '黄油',
      time: '1 分钟',
      servings: '1 份',
      why: '简单满足的涂抹酱——草饲黄油含共轭亚油酸和维生素 A、K2。',
      ingredients: [
        '草饲黄油 1 汤匙',
        '（可选）海盐片 撒',
        '（可选）酸面包、米饼或饼干 配餐'
      ],
      steps: [
        '黄油如冷藏取出室温放软 5 分钟。',
        '均匀涂抹面包、米饼或饼干。',
        '按需撒海盐片。'
      ],
      notes: '草饲黄油颜色更深黄，营养更高。乳糖敏感者可用酥油（ghee）。'
    },
    macros: { protein: { g: 0, pct: 1 }, fat: { g: 11, pct: 99 }, netCarbs: { g: 0, pct: 0 } }
  },

  {
    id: 's133',
    type: 'snack',
    carb: 'moderate',
    tags: ['no-cook','quick-easy','vegetarian','gluten-free','vegan'],
    contains: [],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🍇',
    en: {
      name: 'Grapes',
      time: '1 min',
      servings: '1',
      why: 'A naturally sweet, hydrating snack — grapes provide resveratrol, antioxidants and a quick energy boost.',
      ingredients: [
        'Grapes 1 cup (about 20 grapes, washed)',
        '(Optional) cheese cubes for pairing',
        '(Optional) freeze for a refreshing summer treat'
      ],
      steps: [
        'Wash the grapes thoroughly under cold water and remove any stems.',
        'Pat dry and serve in a small bowl.',
        'For a refreshing twist, freeze the grapes for 2 hours before eating.'
      ],
      notes: 'Frozen grapes taste like sorbet. Red and purple grapes contain more resveratrol than green grapes.'
    },
    zh: {
      name: '葡萄',
      time: '1 分钟',
      servings: '1 份',
      why: '天然甜味补水零食——葡萄含白藜芦醇、抗氧化物，快速补充能量。',
      ingredients: [
        '葡萄 1 杯（约 20 颗，洗净）',
        '（可选）奶酪块 搭配',
        '（可选）冷冻做夏日冰爽零食'
      ],
      steps: [
        '葡萄冷水冲洗干净，去梗。',
        '擦干盛小碗。',
        '想更爽口可冷冻 2 小时再吃。'
      ],
      notes: '冻葡萄吃起来像冰沙。红紫葡萄白藜芦醇多于绿葡萄。'
    },
    macros: { protein: { g: 1, pct: 5 }, fat: { g: 0, pct: 3 }, netCarbs: { g: 16, pct: 92 } }
  },

  {
    id: 's134',
    type: 'snack',
    carb: 'low',
    tags: ['no-cook','quick-easy','vegetarian','gluten-free','vegan'],
    contains: [],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🥥',
    en: {
      name: 'Coconut Butter (Coconut Manna)',
      time: '2 min',
      servings: '1',
      why: 'Whole coconut flesh blended into a creamy spread — rich in medium-chain triglycerides (MCTs) that provide quick energy.',
      ingredients: [
        'Coconut butter (coconut manna) 1 tbsp',
        '(Optional) warm water 1 tsp to soften',
        '(Optional) berries, banana or dark chocolate to pair'
      ],
      steps: [
        'If the coconut butter is solid (below 24°C/76°F), warm the jar in a bowl of hot water for 2-3 minutes and stir.',
        'Spoon 1 tablespoon into a small dish.',
        'Eat as-is, spread on toast, or drizzle over berries and banana.',
        'For a quick dessert, mix with a square of melted dark chocolate.'
      ],
      notes: 'Coconut butter is different from coconut oil — it contains the whole coconut flesh and has a richer, sweeter flavour. Stir well before each use as it separates.'
    },
    zh: {
      name: '椰子黄油（椰子甘露）',
      time: '2 分钟',
      servings: '1 份',
      why: '整颗椰肉打成奶油酱——富含中链甘油三酯（MCT），快速供能。',
      ingredients: [
        '椰子黄油（椰子甘露）1 汤匙',
        '（可选）温水 1 茶匙 软化',
        '（可选）莓果、香蕉或黑巧克力 搭配'
      ],
      steps: [
        '椰子黄油凝固时（24°C 以下）将罐放入热水碗 2-3 分钟搅拌。',
        '舀 1 汤匙入小碟。',
        '直接吃、抹吐司或淋莓果香蕉。',
        '快速甜品可与一块融化的黑巧克力混合。'
      ],
      notes: '椰子黄油不同于椰子油——含整颗椰肉，更浓郁香甜。每次用前搅匀会分离。'
    },
    macros: { protein: { g: 1, pct: 4 }, fat: { g: 10, pct: 90 }, netCarbs: { g: 1, pct: 6 } }
  },

  {
    id: 's135',
    type: 'snack',
    carb: 'low',
    tags: ['no-cook','quick-easy','vegetarian','gluten-free','vegan'],
    contains: [],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🍅',
    en: {
      name: 'Cherry Tomatoes',
      time: '1 min',
      servings: '1',
      why: 'A bite-sized, hydrating snack — cherry tomatoes are rich in vitamin C, potassium and the antioxidant lycopene.',
      ingredients: [
        'Cherry tomatoes 1 cup (washed)',
        'Sea salt and black pepper to taste',
        '(Optional) olive oil 1 tsp',
        '(Optional) balsamic vinegar 1 tsp',
        '(Optional) mozzarella balls for pairing'
      ],
      steps: [
        'Wash the cherry tomatoes and pat dry.',
        'Place in a small bowl and season with salt and pepper.',
        'Drizzle with olive oil and balsamic vinegar if desired.',
        'Serve as-is, or pair with mozzarella balls for a quick caprese snack.'
      ],
      notes: 'Tomatoes are best stored at room temperature — refrigerating dulls the flavour. Different colours (red, orange, yellow) offer slightly different antioxidant profiles.'
    },
    zh: {
      name: '小番茄',
      time: '1 分钟',
      servings: '1 份',
      why: '一口一个的补水零食——小番茄富含维生素 C、钾和抗氧化番茄红素。',
      ingredients: [
        '小番茄 1 杯（洗净）',
        '海盐、黑胡椒 适量',
        '（可选）橄榄油 1 茶匙',
        '（可选）巴萨米克醋 1 茶匙',
        '（可选）马苏里拉球 搭配'
      ],
      steps: [
        '小番茄洗净擦干。',
        '放小碗撒盐和胡椒。',
        '按需淋橄榄油和巴萨米克醋。',
        '直接吃或配马苏里拉球做快手卡普雷塞。'
      ],
      notes: '番茄室温存放最佳——冷藏会损失风味。不同颜色（红橙黄）抗氧化略有不同。'
    },
    macros: { protein: { g: 1, pct: 15 }, fat: { g: 0, pct: 5 }, netCarbs: { g: 5, pct: 80 } }
  },

  {
    id: 's136',
    type: 'snack',
    carb: 'low',
    tags: ['no-cook','batch-cook','quick-easy','vegetarian','gluten-free'],
    contains: ['dairy'],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🍫',
    en: {
      name: 'Chocolate Fat Bomb',
      time: '10 min + chill',
      servings: '6',
      why: 'A low-carb, high-fat treat made with cocoa powder, butter and honey — satisfying for a sweet craving without spiking blood sugar.',
      ingredients: [
        'Cocoa powder 3 tbsp (unsweetened)',
        'Butter 1/4 cup (or coconut oil)',
        'Honey 2 tbsp',
        'Vanilla extract 1/2 tsp',
        'Pinch of sea salt',
        '(Optional) chopped nuts or shredded coconut to top'
      ],
      steps: [
        'Melt the butter in a small saucepan over low heat.',
        'Remove from heat and whisk in the cocoa powder, honey, vanilla and salt until smooth.',
        'Line a mini muffin tin with 6 paper liners or use a silicone mold.',
        'Pour the chocolate mixture evenly into the liners.',
        'Sprinkle with chopped nuts or coconut if using.',
        'Refrigerate at least 30 minutes until set. Store in the fridge.'
      ],
      notes: 'These keep 2 weeks in the fridge and 1 month in the freezer. Use coconut oil instead of butter for a dairy-free version.'
    },
    zh: {
      name: '巧克力脂肪弹',
      time: '10 分钟 + 冷藏',
      servings: '6 份',
      why: '低碳高脂零食，可可粉、黄油和蜂蜜制成，满足甜食不升糖。',
      ingredients: [
        '可可粉 3 汤匙（无糖）',
        '黄油 1/4 杯（或椰子油）',
        '蜂蜜 2 汤匙',
        '香草精 半茶匙',
        '海盐 少许',
        '（可选）碎坚果或椰蓉 撒'
      ],
      steps: [
        '小锅小火融化黄油。',
        '离火搅入可可粉、蜂蜜、香草和盐至顺滑。',
        '迷你麦芬模垫 6 个纸杯或用硅胶模。',
        '巧克力液均分倒入。',
        '撒碎坚果或椰蓉。',
        '冷藏至少 30 分钟至凝固。冰箱保存。'
      ],
      notes: '冷藏 2 周、冷冻 1 个月。用椰子油代黄油即为无乳版。'
    },
    macros: { protein: { g: 1, pct: 4 }, fat: { g: 12, pct: 85 }, netCarbs: { g: 3, pct: 11 } }
  },

  {
    id: 's137',
    type: 'snack',
    carb: 'low',
    tags: ['no-cook','batch-cook','quick-easy','vegetarian','gluten-free'],
    contains: ['nuts','dairy'],
    focus: ['No-cook','Quick & easy'],
    img: null,
    emoji: '🥜',
    en: {
      name: 'Peanut Fudge',
      time: '10 min + chill',
      servings: '6',
      why: 'A rich, low-carb fudge made with coconut butter, peanut butter and honey — a satisfying treat that provides sustained energy.',
      ingredients: [
        'Coconut butter 1/4 cup',
        'Peanut butter 1/4 cup (natural, no added sugar)',
        'Honey 2 tbsp',
        'Sea salt 1/4 tsp',
        'Vanilla extract 1/2 tsp',
        '(Optional) chopped peanuts or dark chocolate chips to top'
      ],
      steps: [
        'Warm the coconut butter in a bowl of hot water for 2-3 minutes until soft and stirrable.',
        'In a small saucepan over low heat, combine the coconut butter, peanut butter and honey. Stir until melted and smooth.',
        'Remove from heat and stir in the salt and vanilla.',
        'Line a mini muffin tin with 6 paper liners. Pour the mixture evenly into the liners.',
        'Sprinkle with chopped peanuts or chocolate chips if using.',
        'Refrigerate at least 1 hour until firm. Store in the fridge.'
      ],
      notes: 'Keeps 2 weeks in the fridge and 1 month in the freezer. Use almond butter instead of peanut butter if preferred. For a vegan version, use maple syrup instead of honey.'
    },
    zh: {
      name: '花生软糖',
      time: '10 分钟 + 冷藏',
      servings: '6 块',
      why: '用椰子黄油、花生酱和蜂蜜制成的浓郁低碳软糖，满足甜食欲的同时提供持久能量。',
      ingredients: [
        '椰子黄油 1/4 杯',
        '花生酱 1/4 杯（天然无糖）',
        '蜂蜜 2 汤匙',
        '海盐 1/4 茶匙',
        '香草精 半茶匙',
        '（可选）碎花生或黑巧克力碎 撒'
      ],
      steps: [
        '将椰子黄油碗放入热水中浸泡 2-3 分钟至软化可搅。',
        '小锅小火，混合椰子黄油、花生酱和蜂蜜，搅拌至融化顺滑。',
        '离火加入盐和香草精搅匀。',
        '迷你麦芬模垫 6 个纸杯，将混合液均分倒入。',
        '撒碎花生或巧克力碎（如用）。',
        '冷藏至少 1 小时至凝固。冰箱保存。'
      ],
      notes: '冷藏 2 周、冷冻 1 个月。可用杏仁酱替代花生酱。纯素版可用枫糖浆替代蜂蜜。'
    },
    macros: { protein: { g: 5, pct: 13 }, fat: { g: 14, pct: 72 }, netCarbs: { g: 6, pct: 15 } }
  },

  {
    id: 's138',
    type: 'snack',
    carb: 'low',
    tags: ['quick-easy','batch-cook','vegan','vegetarian','gluten-free','dairy-free'],
    contains: ['legume'],
    focus: ['Quick & easy','Batch-cook'],
    img: null,
    emoji: '🫘',
    en: {
      name: 'Black Bean Dip',
      time: '10 min',
      servings: '4',
      why: 'A creamy, protein-packed dip made from black beans, garlic and lime — perfect with veggie sticks or gluten-free crackers for a satisfying snack.',
      ingredients: [
        'Black beans 1 can (15 oz / 425 g), drained and rinsed',
        'Olive oil 2 tbsp',
        'Garlic 1 clove, minced',
        'Lime juice 2 tbsp (about 1 lime)',
        'Ground cumin 1/2 tsp',
        'Sea salt 1/2 tsp, or to taste',
        'Fresh cilantro 2 tbsp, chopped (optional)',
        '(Optional) water 1-2 tbsp to thin',
        '(To serve) carrot sticks, cucumber slices, bell pepper strips, or gluten-free crackers'
      ],
      steps: [
        'Add the drained black beans, olive oil, garlic, lime juice, cumin and salt to a food processor.',
        'Process until smooth, scraping down the sides once or twice. If the dip is too thick, add water 1 tbsp at a time until you reach the desired consistency.',
        'Taste and adjust seasoning — more salt, lime or cumin as needed.',
        'Transfer to a serving bowl and top with a drizzle of olive oil and chopped cilantro if using.',
        'Serve with raw vegetable sticks or gluten-free crackers.'
      ],
      notes: 'Keeps 5 days in the fridge. For a smoky version, add 1/2 tsp smoked paprika. For a spicy kick, add half a jalapeño before blending.'
    },
    zh: {
      name: '黑豆酱',
      time: '10 分钟',
      servings: '4 份',
      why: '用黑豆、大蒜和青柠制成的浓郁蛋白蘸酱，搭配蔬菜条或无麸质饼干是理想的健康零食。',
      ingredients: [
        '黑豆 1 罐（425 克），沥干冲洗',
        '橄榄油 2 汤匙',
        '大蒜 1 瓣，切末',
        '青柠汁 2 汤匙（约 1 个青柠）',
        '孜然粉 半茶匙',
        '海盐 半茶匙，或适量',
        '新鲜香菜 2 汤匙，切碎（可选）',
        '（可选）清水 1-2 汤匙调节稠度',
        '（配用）胡萝卜条、黄瓜片、甜椒条或无麸饼干'
      ],
      steps: [
        '将沥干的黑豆、橄榄油、蒜末、青柠汁、孜然和盐放入料理机。',
        '搅打至顺滑，中途刮壁一两次。太稠则逐次加水 1 汤匙至理想稠度。',
        '尝味调整——按需加盐、青柠或孜然。',
        '盛入碗中，淋上少许橄榄油，撒香菜（如用）。',
        '搭配生蔬菜条或无麸饼干食用。'
      ],
      notes: '冷藏 5 天。烟熏版可加半茶匙烟熏辣椒粉。辣味版可加半个墨西哥辣椒一起搅打。'
    },
    macros: { protein: { g: 6, pct: 22 }, fat: { g: 7, pct: 48 }, netCarbs: { g: 8, pct: 30 } }
  },

  {
    id: 's139',
    type: 'snack',
    carb: 'low',
    tags: ['vegetarian','vegan','gluten-free','dairy-free','low-carb'],
    contains: ['vegetable'],
    focus: ['fiber','vitaminC','vitaminK'],
    img: '',
    emoji: '🫛',
    en: {
      name: 'Snap Peas',
      time: '2 min',
      servings: '1',
      why: 'A crunchy, sweet snack eaten raw — snap peas are rich in vitamin C, vitamin K and fiber, with a satisfying crisp texture.',
      ingredients: [
        'Snap peas 1 cup (about 10 pods, washed)',
        '(Optional) sea salt pinch',
        '(Optional) hummus or tzatziki for dipping'
      ],
      steps: [
        'Wash the snap peas and trim off the stem end and any tough string along the seam.',
        'Serve raw as a crunchy snack, optionally with a pinch of sea salt.',
        'Pair with hummus or tzatziki for dipping if desired.'
      ],
      notes: 'Snap peas can also be lightly steamed for 2 minutes or stir-fried for 3-4 minutes for a cooked side. Look for bright green, plump pods with no blemishes.'
    },
    zh: {
      name: '甜脆豆',
      time: '2 分钟',
      servings: '1 份',
      why: '生吃即爽脆清甜的零食——甜脆豆富含维生素C、维生素K和膳食纤维，口感脆嫩满足。',
      ingredients: [
        '甜脆豆 1 杯（约 10 荚，洗净）',
        '（可选）海盐 少许',
        '（可选）鹰嘴豆泥或酸奶黄瓜酱蘸食'
      ],
      steps: [
        '洗净甜脆豆，去蒂及荚缝处的硬筋。',
        '生食作为脆爽零食，可撒少许海盐。',
        '可搭配鹰嘴豆泥或酸奶黄瓜酱蘸食。'
      ],
      notes: '甜脆豆也可轻蒸 2 分钟或快炒 3-4 分钟作为熟食配菜。挑选时选鲜绿饱满、无斑点的豆荚。'
    },
    macros: { protein: { g: 3, pct: 21 }, fat: { g: 0, pct: 0 }, netCarbs: { g: 11, pct: 79 } }
  },,

  /* ==================== NEW RECIPES — Batch 2 (Nov 2026) ==================== */

  {
    id: 'b135',
    type: 'breakfast',
    carb: 'moderate',
    tags: ['batch-cook','vegetarian'],
    contains: ['gluten','dairy','egg'],
    focus: ['Batch-cook'],
    img: null,
    emoji: '🧁',
    en: {
      name: 'Strawberry Barley Muffins',
      time: '30 min',
      servings: '12',
      why: 'Barley flour gives these muffins a nutty, hearty texture and extra fibre. Strawberries add natural sweetness and vitamin C — perfect for make-ahead breakfasts or snacks.',
      ingredients: ['Whole barley flour 2 cups (500 g)','Granulated sugar 1/2 cup (100 g)','Baking powder 4 tsp','Salt 1/2 tsp','Cinnamon 1/2 tsp','Fresh or frozen strawberries, chopped 1 cup (150 g)','Eggs 2','Milk 1 cup (250 mL)','Canola oil 1/4 cup (60 mL)'],
      steps: ['Preheat oven to 400°F (200°C). Line or grease 12 muffin cups.','In a large bowl, whisk together barley flour, sugar, baking powder, salt, and cinnamon. Fold in the chopped strawberries.','In a separate bowl, beat the eggs; stir in milk and oil.','Pour the wet ingredients into the dry and stir until just combined — do not overmix.','Fill muffin cups almost full. Bake 18 minutes or until centres spring back when lightly touched.','Cool in the tin 5 minutes, then transfer to a rack.'],
      notes: 'Freezes well for up to 3 months. Thaw overnight or microwave 30 seconds. Swap strawberries for blueberries, raspberries, or diced apple.'
    },
    zh: {
      name: '草莓大麦松饼',
      time: '30 分钟',
      servings: '12 个',
      why: '大麦粉让松饼口感扎实带坚果香，富含纤维。草莓增添天然甜味和维生素C，适合提前做好当早餐或加餐。',
      ingredients: ['大麦全粉 2 杯（500g）','白砂糖 1/2 杯（100g）','泡打粉 4 茶匙','盐 1/2 茶匙','肉桂粉 1/2 茶匙','草莓（鲜或冻）切碎 1 杯（150g）','鸡蛋 2 个','牛奶 1 杯（250mL）','菜籽油 1/4 杯（60mL）'],
      steps: ['烤箱预热至 200°C，松饼模垫纸杯或抹油。','大碗中混合大麦粉、糖、泡打粉、盐和肉桂粉，拌入切碎草莓。','另一碗中打散鸡蛋，加入牛奶和油搅匀。','将湿料倒入干料，搅拌至刚好混合，不要过度搅拌。','将面糊装入松饼模至几乎满，烤 18 分钟至中心轻按回弹。','在模中放凉 5 分钟后移到凉架。'],
      notes: '可冷冻保存 3 个月。解冻隔夜或微波 30 秒。可用蓝莓、覆盆子或苹果丁替换草莓。'
    },
    macros: { protein: { g: 4, pct: 9 }, fat: { g: 5, pct: 27 }, netCarbs: { g: 22, pct: 64 } }
  },

  {
    id: 'b136',
    type: 'breakfast',
    carb: 'moderate',
    tags: ['batch-cook','vegetarian','gluten-free'],
    contains: ['dairy','egg'],
    focus: ['Batch-cook'],
    img: null,
    emoji: '🥣',
    en: {
      name: 'Baked Oatmeal',
      time: '40 min',
      servings: '6',
      why: 'A warm, comforting make-ahead breakfast that reheats beautifully. Oats provide slow-release energy and soluble fibre, while the egg and milk add protein.',
      ingredients: ['Rolled oats 2 cups (200 g)','Milk 2 cups (500 mL)','Eggs 2','Maple syrup or honey 1/4 cup (60 mL)','Melted butter or coconut oil 2 tbsp','Vanilla extract 1 tsp','Cinnamon 1 tsp','Salt 1/4 tsp','Fresh or frozen berries 1 cup (150 g)','(Optional) chopped nuts 1/4 cup'],
      steps: ['Preheat oven to 350°F (175°C). Grease an 8×8 inch baking dish.','In a large bowl, whisk together milk, eggs, maple syrup, melted butter, vanilla, cinnamon, and salt.','Stir in the oats and half the berries (and nuts if using).','Pour into the prepared dish and scatter remaining berries on top.','Bake 30-35 minutes until set and golden on top.','Cool slightly before slicing into 6 portions.'],
      notes: 'Keeps refrigerated 5 days. Reheat individual portions in the microwave for 60 seconds. Freeze up to 2 months. Try apple-cinnamon, banana-walnut, or mixed berry variations.'
    },
    zh: {
      name: '烤燕麦',
      time: '40 分钟',
      servings: '6 份',
      why: '温暖舒适的提前准备早餐，加热后依然美味。燕麦提供持久能量和可溶性纤维，鸡蛋牛奶补充蛋白质。',
      ingredients: ['传统燕麦片 2 杯（200g）','牛奶 2 杯（500mL）','鸡蛋 2 个','枫糖浆或蜂蜜 1/4 杯（60mL）','融化黄油或椰子油 2 汤匙','香草精 1 茶匙','肉桂粉 1 茶匙','盐 1/4 茶匙','鲜或冷冻浆果 1 杯（150g）','（可选）碎坚果 1/4 杯'],
      steps: ['烤箱预热至 175°C，8×8 英寸烤盘抹油。','大碗中搅匀牛奶、鸡蛋、枫糖浆、黄油、香草精、肉桂粉和盐。','拌入燕麦和一半浆果（及坚果）。','倒入烤盘，将剩余浆果撒在表面。','烤 30-35 分钟至凝固表面金黄。','稍放凉后切成 6 份。'],
      notes: '冷藏 5 天，微波加热 60 秒。冷冻 2 个月。可做苹果肉桂、香蕉核桃或混合浆果口味。'
    },
    macros: { protein: { g: 8, pct: 18 }, fat: { g: 7, pct: 24 }, netCarbs: { g: 26, pct: 58 } }
  },

  {
    id: 'b137',
    type: 'breakfast',
    carb: 'moderate',
    tags: ['batch-cook','high-protein','vegetarian','gluten-free'],
    contains: ['dairy','egg'],
    focus: ['Batch-cook','High protein'],
    img: null,
    emoji: '🥣',
    en: {
      name: 'Baked Oatmeal with Greek Yogurt',
      time: '40 min',
      servings: '6',
      why: 'Adding plain Greek yogurt to baked oatmeal boosts the protein to 15g per serving, making it a more balanced, satiating breakfast that keeps blood sugar steady.',
      ingredients: ['Rolled oats 2 cups (200 g)','Milk 1 1/2 cups (375 mL)','Plain Greek yogurt 1 cup (250 g)','Eggs 2','Maple syrup or honey 2 tbsp','Melted butter or coconut oil 2 tbsp','Vanilla extract 1 tsp','Cinnamon 1 tsp','Salt 1/4 tsp','Fresh or frozen berries 1 cup (150 g)'],
      steps: ['Preheat oven to 350°F (175°C). Grease an 8×8 inch baking dish.','In a large bowl, whisk together milk, Greek yogurt, eggs, maple syrup, melted butter, vanilla, cinnamon, and salt until smooth.','Stir in the oats and half the berries.','Pour into the baking dish and top with remaining berries.','Bake 30-35 minutes until set and lightly golden.','Cool 5 minutes before slicing. Serve with an extra dollop of Greek yogurt if desired.'],
      notes: 'Keeps refrigerated 5 days. The yogurt makes this extra creamy and filling. Reheat individual portions 60-90 seconds in microwave. Add a scoop of protein powder for even more protein.'
    },
    zh: {
      name: '希腊酸奶烤燕麦',
      time: '40 分钟',
      servings: '6 份',
      why: '加入原味希腊酸奶将每份蛋白质提升至 15g，让早餐更均衡饱腹，稳定血糖。',
      ingredients: ['传统燕麦片 2 杯（200g）','牛奶 1 1/2 杯（375mL）','原味希腊酸奶 1 杯（250g）','鸡蛋 2 个','枫糖浆或蜂蜜 2 汤匙','融化黄油或椰子油 2 汤匙','香草精 1 茶匙','肉桂粉 1 茶匙','盐 1/4 茶匙','鲜或冷冻浆果 1 杯（150g）'],
      steps: ['烤箱预热至 175°C，8×8 英寸烤盘抹油。','大碗中搅匀牛奶、希腊酸奶、鸡蛋、枫糖浆、黄油、香草精、肉桂粉和盐至顺滑。','拌入燕麦和一半浆果。','倒入烤盘，撒上剩余浆果。','烤 30-35 分钟至凝固微金黄。','放凉 5 分钟后切块，可再配一勺希腊酸奶。'],
      notes: '冷藏 5 天。酸奶让口感更奶油更饱腹。微波加热 60-90 秒。可加蛋白粉提升蛋白质。'
    },
    macros: { protein: { g: 15, pct: 28 }, fat: { g: 7, pct: 18 }, netCarbs: { g: 25, pct: 54 } }
  },

  {
    id: 'l154',
    type: 'lunch',
    carb: 'moderate',
    tags: ['batch-cook','vegetarian','gluten-free'],
    contains: ['dairy'],
    focus: ['Batch-cook'],
    img: null,
    emoji: '🥗',
    en: {
      name: 'Mediterranean Quinoa Salad with Protein',
      time: '25 min',
      servings: '4',
      why: 'A bright, protein-packed salad that uses leftover cooked protein (chicken, tuna, chickpeas, or tofu). Quinoa adds complete protein and fibre, while olives, feta, and sun-dried tomatoes bring Mediterranean flavour.',
      ingredients: ['Cooked quinoa 2 cups (from 2/3 cup dry)','Leftover cooked protein 1 cup (chicken, tuna, chickpeas, or tofu)','Cucumber, diced 1 cup','Cherry tomatoes, halved 1 cup','Kalamata olives, pitted 1/4 cup','Feta cheese, crumbled 1/3 cup (50 g)','Sun-dried tomatoes in oil, chopped 2 tbsp','Red onion, finely diced 1/4 cup','Fresh parsley, chopped 1/4 cup','Extra virgin olive oil 2 tbsp','Lemon juice 2 tbsp','Dried oregano 1 tsp','Salt and black pepper to taste'],
      steps: ['If quinoa is not already cooked, rinse 2/3 cup dry quinoa and cook in 1 1/3 cups water for 15 minutes. Fluff and cool.','In a large bowl, combine the cooked quinoa, leftover protein, cucumber, cherry tomatoes, olives, feta, sun-dried tomatoes, red onion, and parsley.','In a small jar, shake together olive oil, lemon juice, oregano, salt, and pepper.','Pour the dressing over the salad and toss gently to combine.','Taste and adjust seasoning. Serve at room temperature or chilled.'],
      notes: 'Keeps refrigerated up to 4 days and actually improves as flavours meld. Great for meal prep lunches. Use dairy-free feta to make it vegan.'
    },
    zh: {
      name: '地中海藜麦沙拉配蛋白质',
      time: '25 分钟',
      servings: '4 份',
      why: '清爽高蛋白沙拉，利用剩蛋白（鸡肉、金枪鱼、鹰嘴豆或豆腐）。藜麦提供完整蛋白和纤维，橄榄、羊奶酪和日晒番茄干带来地中海风味。',
      ingredients: ['熟藜麦 2 杯（由 2/3 杯干藜麦煮成）','剩熟蛋白 1 杯（鸡肉、金枪鱼、鹰嘴豆或豆腐）','黄瓜切丁 1 杯','小番茄对切 1 杯','卡拉马塔橄榄去核 1/4 杯','羊奶酪碎 1/3 杯（50g）','油浸日晒番茄干切碎 2 汤匙','红葱头细丁 1/4 杯','新鲜欧芹碎 1/4 杯','特级初榨橄榄油 2 汤匙','柠檬汁 2 汤匙','干牛至 1 茶匙','盐、黑胡椒 适量'],
      steps: ['藜麦未煮则：冲洗 2/3 杯干藜麦，加 1 1/3 杯水煮 15 分钟，松散放凉。','大碗中混合藜麦、蛋白、黄瓜、小番茄、橄榄、羊奶酪、日晒番茄干、红葱头和欧芹。','小罐中摇匀橄榄油、柠檬汁、牛至、盐和胡椒。','将酱汁淋在沙拉上轻轻拌匀。','试味调整调味，室温或冷藏食用。'],
      notes: '冷藏 4 天，放置后更入味。适合备餐午餐。用纯素羊奶酪即可做纯素版。'
    },
    macros: { protein: { g: 20, pct: 28 }, fat: { g: 14, pct: 30 }, netCarbs: { g: 25, pct: 42 } }
  },

  {
    id: 'd148',
    type: 'dinner',
    carb: 'moderate',
    tags: ['batch-cook','high-protein','gluten-free'],
    contains: ['pork','dairy','egg'],
    focus: ['Batch-cook','High protein'],
    img: null,
    emoji: '🍚',
    en: {
      name: 'Pulled Pork Rice Bowl with Coleslaw',
      time: '40 min (plus slow cooker time)',
      servings: '5',
      why: 'Slow-cooked pulled pork served over rice with a crunchy coleslaw — a balanced bowl with tender protein, complex carbs, and fresh vegetables. The pork can be cooked ahead and used across multiple meals.',
      ingredients: ['Pork shoulder 700 g','BBQ sauce 1/2 cup (120 mL)','Chicken broth 1/2 cup','Paprika 1 tsp','Garlic powder 1 tsp','Onion powder 1 tsp','Salt and black pepper to taste','Cooked rice 2 1/2 cups (from 1 cup dry)','Coleslaw mix (shredded cabbage and carrot) 3 cups','Mayonnaise 2 tbsp','Apple cider vinegar 1 tbsp','Honey or sugar 1 tsp','Salt and pepper to taste'],
      steps: ['Season the pork shoulder with salt, pepper, paprika, garlic powder, and onion powder. Place in a slow cooker with chicken broth. Cook on low for 6-8 hours or high for 4 hours until fork-tender.','Remove the pork and shred with two forks. Stir in BBQ sauce.','While the pork finishes, whisk together mayonnaise, apple cider vinegar, honey, salt, and pepper. Toss with the coleslaw mix.','Cook rice if not already done.','Assemble bowls: start with rice, top with pulled pork, and add a generous scoop of coleslaw on the side.'],
      notes: 'The pulled pork freezes beautifully — make a large batch and freeze in portions. Use leftover pork in tacos, sandwiches, or on its own. Replace pork with chicken thighs for a lighter version.'
    },
    zh: {
      name: '手撕猪肉饭配凉拌卷心菜',
      time: '40 分钟（另加慢炖时间）',
      servings: '5 份',
      why: '慢炖手撕猪肉盖在米饭上搭配爽脆凉拌卷心菜——一碗均衡的嫩滑蛋白、复合碳水与新鲜蔬菜。猪肉可提前做好多餐使用。',
      ingredients: ['猪肩肉 700g','烧烤酱 1/2 杯（120mL）','鸡汤 1/2 杯','辣椒粉 1 茶匙','蒜粉 1 茶匙','洋葱粉 1 茶匙','盐、黑胡椒 适量','熟米饭 2 1/2 杯（由 1 杯生米煮成）','凉拌菜丝（卷心菜丝和胡萝卜丝）3 杯','蛋黄酱 2 汤匙','苹果醋 1 汤匙','蜂蜜或糖 1 茶匙','盐、胡椒 适量'],
      steps: ['猪肩肉抹盐、胡椒、辣椒粉、蒜粉和洋葱粉，放入慢炖锅加鸡汤，低温 6-8 小时或高温 4 小时至叉子可撕。','取出猪肉用两把叉子撕成丝，拌入烧烤酱。','猪肉快好时，将蛋黄酱、苹果醋、蜂蜜、盐和胡椒搅匀，拌入菜丝。','如米饭未煮则煮饭。','组装饭碗：米饭打底，盖上手撕猪肉，旁边放一大勺凉拌菜丝。'],
      notes: '手撕猪肉适合冷冻保存——大批做好分装冷冻。剩肉可做塔可、三明治或单吃。用鸡腿替代猪肉更清淡。'
    },
    macros: { protein: { g: 28, pct: 30 }, fat: { g: 18, pct: 33 }, netCarbs: { g: 28, pct: 37 } }
  },

  {
    id: 'd149',
    type: 'dinner',
    carb: 'moderate',
    tags: ['quick-easy','high-protein','gluten-free'],
    contains: ['dairy'],
    focus: ['Quick & easy','High protein'],
    img: null,
    emoji: '🌮',
    en: {
      name: 'Build-Your-Own Tacos',
      time: '15 min',
      servings: '4',
      why: 'A quick, customizable dinner that turns leftover protein into a fun, balanced meal. Everyone builds their own, so it works for families with different preferences. Corn tortillas keep it gluten-free.',
      ingredients: ['Leftover cooked protein 2 cups (chicken, beef, pork, or beans)','Corn tortillas 8 small','Shredded lettuce 2 cups','Diced tomato 1 cup','Sour cream 1/2 cup','Salsa 1/2 cup','Guacamole 1/2 cup','Shredded cheese 1/2 cup (cheddar or Mexican blend)','(Optional) chopped cilantro, lime wedges, hot sauce'],
      steps: ['Warm the corn tortillas in a dry skillet over medium heat for 30 seconds per side, or wrap in foil and heat in a 350°F (175°C) oven for 10 minutes.','Reheat the leftover protein in a skillet or microwave until warmed through.','Arrange all toppings in small bowls: lettuce, tomato, sour cream, salsa, guacamole, and cheese.','Let everyone build their own tacos: tortilla, protein, toppings, and a squeeze of lime.'],
      notes: 'For a lower-carb version, use lettuce wraps instead of tortillas. Set up a taco bar for gatherings. Leftover taco fillings make great next-day salad toppings.'
    },
    zh: {
      name: '自选塔可',
      time: '15 分钟',
      servings: '4 份',
      why: '快速可定制的晚餐，将剩蛋白变成有趣均衡的一餐。每人自己组装，适合不同口味的家庭。玉米饼皮保持无麸质。',
      ingredients: ['剩熟蛋白 2 杯（鸡肉、牛肉、猪肉或豆类）','小号玉米饼皮 8 张','生菜丝 2 杯','番茄丁 1 杯','酸奶油 1/2 杯','莎莎酱 1/2 杯','牛油果酱 1/2 杯','奶酪丝 1/2 杯（切达或墨西哥混合）','（可选）香菜碎、青柠角、辣酱'],
      steps: ['干锅中火将玉米饼每面加热 30 秒，或包锡纸 175°C 烤 10 分钟。','将剩蛋白在锅或微波中加热。','将所有配料分装小碗：生菜、番茄、酸奶油、莎莎酱、牛油果酱和奶酪。','每人自己组装塔可：饼皮、蛋白、配料，挤一点青柠汁。'],
      notes: '低碳版可用生菜叶代替饼皮。聚会时可设塔可吧。剩料第二天做沙拉浇头很棒。'
    },
    macros: { protein: { g: 25, pct: 28 }, fat: { g: 18, pct: 36 }, netCarbs: { g: 22, pct: 36 } }
  },

  {
    id: 'd150',
    type: 'dinner',
    carb: 'low',
    tags: ['batch-cook','high-protein','gluten-free'],
    contains: ['pork'],
    focus: ['Batch-cook','High protein'],
    img: null,
    emoji: '🥬',
    en: {
      name: 'Cabbage Roll in a Bowl',
      time: '30 min',
      servings: '4',
      why: 'All the flavours of traditional cabbage rolls without the rolling. Ground meat and cabbage simmered in tomato sauce with a touch of rice — a comforting, deconstructed one-pan meal.',
      ingredients: ['Ground beef or pork 500 g','Green cabbage, shredded 4 cups','Onion, diced 1 medium','Garlic, minced 3 cloves','Cooked rice 1 cup (from 1/3 cup dry)','Crushed tomatoes 1 can (796 mL)','Tomato paste 2 tbsp','Worcestershire sauce 1 tbsp','Dried dill 1 tsp','Paprika 1 tsp','Salt and black pepper to taste','Olive oil 1 tbsp'],
      steps: ['Heat olive oil in a large skillet or Dutch oven over medium-high heat. Add the ground meat and cook until browned, breaking it up with a spoon.','Add the onion and garlic and cook 3 minutes until softened.','Stir in the shredded cabbage and cook 5 minutes until it begins to wilt.','Add crushed tomatoes, tomato paste, Worcestershire sauce, dill, paprika, salt, and pepper. Stir well.','Bring to a simmer, reduce heat to low, cover, and cook 15 minutes until cabbage is tender.','Stir in the cooked rice. Taste and adjust seasoning. Serve hot.'],
      notes: 'Keeps refrigerated 4 days, frozen 3 months. For a lower-carb version, omit the rice or use cauliflower rice. Traditional cabbage rolls use a mix of beef and pork — use either or both.'
    },
    zh: {
      name: '碗版卷心菜卷',
      time: '30 分钟',
      servings: '4 份',
      why: '传统卷心菜卷的全部风味，免去卷的步骤。肉末和卷心菜在番茄酱中炖煮，加一点米饭——舒适的去组装一锅餐。',
      ingredients: ['牛肉或猪肉末 500g','圆白菜切丝 4 杯','洋葱丁 1 个（中等）','蒜末 3 瓣','熟米饭 1 杯（由 1/3 杯生米煮成）','碎番茄罐头 1 罐（796mL）','番茄膏 2 汤匙','伍斯特酱 1 汤匙','干莳萝 1 茶匙','辣椒粉 1 茶匙','盐、黑胡椒 适量','橄榄油 1 汤匙'],
      steps: ['大平底锅或荷兰锅中火加热橄榄油，放入肉末炒至变色，用勺子拨散。','加洋葱和蒜炒 3 分钟至软。','加入卷心菜丝炒 5 分钟至开始变软。','加碎番茄、番茄膏、伍斯特酱、莳萝、辣椒粉、盐和胡椒搅匀。','煮沸后转小火，盖盖炖 15 分钟至卷心菜软烂。','拌入熟米饭，试味调整，趁热上桌。'],
      notes: '冷藏 4 天，冷冻 3 个月。低碳版可去掉米饭或用花菜米。传统卷心菜卷用牛肉猪肉混合——用任一或皆可。'
    },
    macros: { protein: { g: 30, pct: 38 }, fat: { g: 16, pct: 30 }, netCarbs: { g: 15, pct: 32 } }
  },

  {
    id: 'd151',
    type: 'dinner',
    carb: 'moderate',
    tags: ['asian','high-protein','batch-cook'],
    contains: ['pork','fish'],
    focus: ['Asian','High protein'],
    img: null,
    emoji: '🍜',
    en: {
      name: 'Grilled Pork Vermicelli Bowl',
      time: '35 min',
      servings: '4',
      why: 'A fresh Vietnamese-inspired noodl bowl with lemongrass grilled pork, cool herbs, pickled vegetables, and a savoury-sweet nuoc cham dressing. Light but filling, with a perfect balance of sweet, sour, salty, and umami.',
      ingredients: ['Pork loin or shoulder, thinly sliced 500 g','Lemongrass, minced 2 stalks','Garlic, minced 3 cloves','Fish sauce 3 tbsp','Sugar or honey 2 tbsp','Lime juice 2 tbsp','Vermicelli rice noodles 200 g','Cucumber, julienned 1','Carrot, julienned 1','Bean sprouts 1 cup','Fresh mint leaves 1/2 cup','Fresh cilantro 1/2 cup','Crushed peanuts 1/4 cup','For nuoc cham: fish sauce 3 tbsp, sugar 2 tbsp, lime juice 2 tbsp, warm water 1/4 cup, minced chilli to taste'],
      steps: ['Marinate pork: combine lemongrass, garlic, fish sauce, sugar, and lime juice. Add sliced pork and marinate at least 20 minutes (or overnight).','Make nuoc cham: dissolve sugar in warm water, then stir in fish sauce, lime juice, and chilli. Set aside.','Cook vermicelli noodles according to package directions (usually soak in boiling water 3-5 minutes). Drain and rinse under cold water.','Grill or pan-sear the marinated pork over high heat 2-3 minutes per side until caramelised and cooked through.','Assemble bowls: divide noodles among 4 bowls. Top with grilled pork, cucumber, carrot, bean sprouts, mint, and cilantro.','Drizzle with nuoc cham and sprinkle crushed peanuts on top.'],
      notes: 'The pork marinade doubles as a stir-fry flavour base. Make nuoc cham ahead — it keeps 2 weeks refrigerated. Substitute chicken or tofu for pork.'
    },
    zh: {
      name: '香茅烤肉米粉碗',
      time: '35 分钟',
      servings: '4 份',
      why: '越式风味米粉碗——香茅烤肉、清爽香草、腌菜和咸甜鱼露蘸汁。轻盈但满足，酸甜咸鲜完美平衡。',
      ingredients: ['猪里脊或肩肉切薄片 500g','香茅切碎 2 根','蒜末 3 瓣','鱼露 3 汤匙','糖或蜂蜜 2 汤匙','青柠汁 2 汤匙','米粉（细线粉）200g','黄瓜切丝 1 根','胡萝卜切丝 1 根','豆芽 1 杯','薄荷叶 1/2 杯','香菜 1/2 杯','碎花生 1/4 杯','蘸汁：鱼露 3 汤匙、糖 2 汤匙、青柠汁 2 汤匙、温水 1/4 杯、辣椒碎 适量'],
      steps: ['腌肉：混合香茅、蒜、鱼露、糖和青柠汁，放入肉片腌至少 20 分钟（或过夜）。','做蘸汁：温水化糖，加入鱼露、青柠汁和辣椒，备用。','按包装说明煮米粉（通常沸水泡 3-5 分钟），沥干冷水冲。','高温烤或煎腌好的猪肉，每面 2-3 分钟至焦香熟透。','组装：米粉分入 4 碗，放上烤肉、黄瓜、胡萝卜、豆芽、薄荷和香菜。','淋上蘸汁，撒碎花生。'],
      notes: '腌肉料也可做炒菜底味。蘸汁可提前做好，冷藏 2 周。可用鸡肉或豆腐替猪肉。'
    },
    macros: { protein: { g: 32, pct: 34 }, fat: { g: 8, pct: 13 }, netCarbs: { g: 35, pct: 53 } }
  },

  {
    id: 'd152',
    type: 'dinner',
    carb: 'moderate',
    tags: ['batch-cook','high-protein','gut-healing'],
    contains: ['dairy'],
    focus: ['Batch-cook','High protein'],
    img: null,
    emoji: '🥧',
    en: {
      name: 'Shepherd\'s Pie',
      time: '50 min',
      servings: '6',
      why: 'A classic comfort food that combines savoury ground meat and vegetables under a fluffy mashed potato crust. One pan feeds six and reheats beautifully, making it ideal for batch cooking.',
      ingredients: ['Ground beef or lamb 600 g','Onion, diced 1 large','Carrot, diced 2','Celery, diced 2 stalks','Garlic, minced 3 cloves','Frozen peas 1 cup','Tomato paste 2 tbsp','Beef broth 1 cup','Worcestershire sauce 1 tbsp','Dried thyme 1 tsp','Salt and black pepper to taste','Olive oil 1 tbsp','Potatoes 4 large (about 1 kg)','Butter 3 tbsp','Milk 1/3 cup','Salt and pepper to taste','(Optional) egg yolk 1, beaten'],
      steps: ['Peel and quarter the potatoes. Place in a pot of salted water, bring to a boil, and cook 15-20 minutes until fork-tender.','While potatoes cook, heat olive oil in a large skillet over medium-high heat. Add ground meat and brown, breaking it up.','Add onion, carrot, and celery. Cook 5 minutes until softened. Add garlic and cook 1 minute.','Stir in tomato paste, beef broth, Worcestershire sauce, thyme, salt, and pepper. Simmer 10 minutes until slightly thickened. Stir in frozen peas.','Drain potatoes and mash with butter and milk until smooth. Season with salt and pepper. (For a golden crust, stir in beaten egg yolk.)','Transfer meat mixture to a baking dish. Spread mashed potatoes over the top, roughing the surface with a fork.','Bake at 400°F (200°C) for 20 minutes until the top is golden and the filling is bubbling.'],
      notes: 'Keeps refrigerated 4 days, frozen 3 months. For a lower-carb version, top with mashed cauliflower instead of potato. Traditional shepherd\'s pie uses lamb; cottage pie uses beef.'
    },
    zh: {
      name: '牧羊人派',
      time: '50 分钟',
      servings: '6 份',
      why: '经典舒适食物——咸香肉末蔬菜盖在蓬松土豆泥下。一盘供六人份，加热后依然美味，适合批量烹饪。',
      ingredients: ['牛肉或羊肉末 600g','洋葱丁 1 个（大）','胡萝卜丁 2 根','芹菜丁 2 根','蒜末 3 瓣','冻豌豆 1 杯','番茄膏 2 汤匙','牛肉汤 1 杯','伍斯特酱 1 汤匙','干百里香 1 茶匙','盐、黑胡椒 适量','橄榄油 1 汤匙','土豆 4 个（约 1kg）','黄油 3 汤匙','牛奶 1/3 杯','盐、胡椒 适量','（可选）蛋黄 1 个打散'],
      steps: ['土豆去皮切块，放入盐水煮沸 15-20 分钟至叉子可插入。','煮土豆时，大平底锅中火加热橄榄油，放入肉末炒至变色拨散。','加洋葱、胡萝卜和芹菜炒 5 分钟至软，加蒜炒 1 分钟。','拌入番茄膏、牛肉汤、伍斯特酱、百里香、盐和胡椒，小火炖 10 分钟至微稠，拌入冻豌豆。','沥干土豆，加黄油和牛奶压成泥，调味。（如需金黄表面，拌入蛋黄。）','肉料倒入烤盘，铺上土豆泥，用叉子划出纹理。','200°C 烤 20 分钟至表面金黄馅料冒泡。'],
      notes: '冷藏 4 天，冷冻 3 个月。低碳版用花菜泥代替土豆泥。传统牧羊人派用羊肉，牛肉版叫 cottage pie。'
    },
    macros: { protein: { g: 28, pct: 30 }, fat: { g: 15, pct: 28 }, netCarbs: { g: 28, pct: 42 } }
  },

  {
    id: 's140',
    type: 'snack',
    carb: 'moderate',
    tags: ['vegetarian','high-protein'],
    contains: ['dairy','egg','gluten'],
    focus: ['High protein'],
    img: null,
    emoji: '🍰',
    en: {
      name: 'Cottage Cheesecake',
      time: '40 min + chilling',
      servings: '4',
      why: 'A protein-packed twist on traditional cheesecake — cottage cheese and Greek yogurt replace cream cheese for a lighter, higher-protein dessert that still feels indulgent.',
      ingredients: ['Graham cracker crumbs 3/4 cup','Sugar 1 tbsp','Salt a pinch','Melted butter 3 tbsp','Cottage cheese 1 cup (227 g)','Greek yogurt 1/4 cup (57 g)','Egg 1 large','Sugar 2 1/2 tbsp','Flour or cornstarch 1 1/2 tbsp','Vanilla extract 1/2 tsp','Lemon zest 1/2 tsp'],
      steps: ['Preheat oven to 350°F (175°C). Grease a 6-inch springform pan.','Combine graham crumbs, sugar, and salt. Stir in melted butter. Press into bottom of pan and bake 10-12 minutes until golden.','In a blender, combine cottage cheese, Greek yogurt, egg, sugar, flour, vanilla, and lemon zest. Blend until completely smooth.','Pour filling onto the crust and bake 30-35 minutes until edges are set and centre is slightly jiggly.','Cool to room temperature, then refrigerate at least 3 hours or overnight.','Top with fresh berries, fruit compote, or granola before serving.'],
      notes: 'For gluten-free, use cornstarch instead of flour and GF graham crackers. Recipe doubles easily for an 8 or 9-inch pan — add 10-15 minutes baking time.'
    },
    zh: {
      name: '奶酪起司蛋糕',
      time: '40 分钟 + 冷藏',
      servings: '4 份',
      why: '高蛋白版的传统起司蛋糕——用茅屋奶酪和希腊酸奶代替奶油奶酪，更轻盈高蛋白，依然满足甜食欲。',
      ingredients: ['全麦饼干碎 3/4 杯','糖 1 汤匙','盐 一撮','融化黄油 3 汤匙','茅屋奶酪 1 杯（227g）','希腊酸奶 1/4 杯（57g）','鸡蛋 1 个','糖 2 1/2 汤匙','面粉或玉米淀粉 1 1/2 汤匙','香草精 1/2 茶匙','柠檬皮 1/2 茶匙'],
      steps: ['烤箱预热至 175°C，6 英寸弹簧模抹油。','混合饼干碎、糖和盐，拌入融化黄油，压实底部，烤 10-12 分钟至金黄。','搅拌机中放入茅屋奶酪、希腊酸奶、鸡蛋、糖、面粉、香草精和柠檬皮，搅至完全顺滑。','将馅料倒在饼皮上，烤 30-35 分钟至边缘凝固中心微晃。','放凉至室温，冷藏至少 3 小时或过夜。','食用前放鲜果、果酱或燕麦粒。'],
      notes: '无麸质版用玉米淀粉代替面粉和 GF 饼干。翻倍用 8 或 9 英寸模——增加 10-15 分钟烘烤时间。'
    },
    macros: { protein: { g: 12, pct: 22 }, fat: { g: 10, pct: 33 }, netCarbs: { g: 20, pct: 45 } }
  },

  {
    id: 's141',
    type: 'snack',
    carb: 'moderate',
    tags: ['vegetarian','gut-healing'],
    contains: ['dairy','gluten','egg'],
    focus: ['Gut-healing'],
    img: null,
    emoji: '🍐',
    en: {
      name: 'Pear Cobbler',
      time: '40 min',
      servings: '6',
      why: 'A warming, fibre-rich dessert using seasonal pears. The oat-topped cobbler is less sweet than cake but deeply comforting, and pears provide soluble fibre for gut health.',
      ingredients: ['Pears, peeled and sliced 4 medium (about 600 g)','Lemon juice 1 tbsp','Sugar 2 tbsp','Cinnamon 1/2 tsp','Rolled oats 1 cup','Whole wheat flour 1/2 cup','Brown sugar 1/3 cup','Butter, melted 1/3 cup','Salt 1/4 tsp','Vanilla extract 1/2 tsp','Chopped walnuts or pecans 1/4 cup (optional)'],
      steps: ['Preheat oven to 350°F (175°C). Grease an 8-inch baking dish.','Toss pear slices with lemon juice, sugar, and cinnamon. Spread in the baking dish.','In a bowl, combine oats, flour, brown sugar, salt, and nuts if using.','Stir in melted butter and vanilla until the mixture forms clumps.','Sprinkle the oat topping evenly over the pears.','Bake 30 minutes until the top is golden and the pears are bubbling.'],
      notes: 'Serve warm with vanilla ice cream or Greek yogurt. Use apples instead of pears for a classic apple crisp. Keeps 3 days refrigerated.'
    },
    zh: {
      name: '梨酥粒烤',
      time: '40 分钟',
      servings: '6 份',
      why: '温暖高纤维甜点，使用当季梨。燕麦酥粒顶比蛋糕低糖但同样舒适，梨提供有助肠道健康的可溶性纤维。',
      ingredients: ['梨去皮切片 4 个（约 600g）','柠檬汁 1 汤匙','糖 2 汤匙','肉桂粉 1/2 茶匙','燕麦片 1 杯','全麦面粉 1/2 杯','红糖 1/3 杯','融化黄油 1/3 杯','盐 1/4 茶匙','香草精 1/2 茶匙','碎核桃或碧根果 1/4 杯（可选）'],
      steps: ['烤箱预热至 175°C，8 英寸烤盘抹油。','梨片拌柠檬汁、糖和肉桂粉，铺在烤盘中。','碗中混合燕麦、面粉、红糖、盐和坚果（如用）。','拌入融化黄油和香草精至成块状。','将燕麦酥粒均匀撒在梨上。','烤 30 分钟至表面金黄梨冒泡。'],
      notes: '温热配香草冰淇淋或希腊酸奶。用苹果替梨做经典苹果酥。冷藏 3 天。'
    },
    macros: { protein: { g: 4, pct: 8 }, fat: { g: 9, pct: 33 }, netCarbs: { g: 24, pct: 59 } }
  },

  {
    id: 's142',
    type: 'snack',
    carb: 'moderate',
    tags: ['quick-easy','vegetarian','gluten-free'],
    contains: ['dairy'],
    focus: ['Quick & easy','High protein'],
    img: null,
    emoji: '🥤',
    en: {
      name: 'Strawberry Smoothie',
      time: '5 min',
      servings: '1',
      why: 'A quick, protein-rich smoothie using Greek yogurt for satiety and fruit juice for natural sweetness. Strawberries add vitamin C and antioxidants.',
      ingredients: ['Fresh or frozen strawberries 1 cup (150 g)','Plain Greek yogurt 1/2 cup (125 g)','Apple juice or orange juice 1/2 cup (125 mL)','Honey or maple syrup 1-2 tsp (to taste)','Ice cubes 4-5 (if using fresh strawberries)','(Optional) 1 tbsp chia seeds or flax seeds'],
      steps: ['Add strawberries, Greek yogurt, juice, honey, and ice to a blender.','Blend on high for 30-45 seconds until smooth and creamy.','Taste and add more honey if needed. Add a splash of water or milk if too thick.','Pour into a glass and enjoy immediately.'],
      notes: 'For more protein, add a scoop of protein powder. For a dairy-free version, use coconut yogurt and a dairy-free milk. Frozen strawberries make a thicker, colder smoothie without needing ice.'
    },
    zh: {
      name: '草莓奶昔',
      time: '5 分钟',
      servings: '1 份',
      why: '快速高蛋白奶昔，希腊酸奶提供饱腹感，果汁增添天然甜味。草莓富含维生素C和抗氧化物。',
      ingredients: ['鲜或冷冻草莓 1 杯（150g）','原味希腊酸奶 1/2 杯（125g）','苹果汁或橙汁 1/2 杯（125mL）','蜂蜜或枫糖浆 1-2 茶匙（按口味）','冰块 4-5 颗（如用鲜草莓）','（可选）奇亚籽或亚麻籽 1 汤匙'],
      steps: ['将草莓、希腊酸奶、果汁、蜂蜜和冰块放入搅拌机。','高速搅拌 30-45 秒至顺滑细腻。','试味按需加蜂蜜，太稠可加少许水或奶。','倒入杯中立即饮用。'],
      notes: '加蛋白粉提升蛋白质。无乳版用椰子酸奶和无乳奶。冷冻草莓可做更稠更凉的奶昔，无需加冰。'
    },
    macros: { protein: { g: 15, pct: 30 }, fat: { g: 2, pct: 7 }, netCarbs: { g: 25, pct: 63 } }
  },

  {
    id: 's143',
    type: 'snack',
    carb: 'moderate',
    tags: ['quick-easy','vegetarian','vegan','gluten-free'],
    contains: ['sesame'],
    focus: ['Quick & easy'],
    img: null,
    emoji: '🍚',
    en: {
      name: 'Black Sesame Butter with Rice Cakes',
      time: '5 min',
      servings: '1',
      why: 'A mineral-rich snack pairing creamy black sesame butter with crunchy rice cakes. Black sesame seeds are naturally high in calcium, iron, and healthy fats.',
      ingredients: ['Black sesame butter 2 tbsp','Rice cakes 2','(Optional) honey or maple syrup 1/2 tsp','(Optional) sliced banana or berries','(Optional) pinch of sea salt'],
      steps: ['Spread black sesame butter evenly on each rice cake.','Drizzle with honey if using, and top with banana slices or berries.','Sprinkle with a pinch of sea salt to enhance the nutty flavour.','Serve immediately.'],
      notes: 'Black sesame butter can be store-bought or homemade by grinding black sesame seeds in a food processor until they release their oils and form a paste (similar to tahini). If the butter is too thick, thin with a few drops of sesame oil.'
    },
    zh: {
      name: '黑芝麻酱抹米饼',
      time: '5 分钟',
      servings: '1 份',
      why: '富含矿物质的零食——细腻黑芝麻酱配脆米饼。黑芝麻天然富含钙、铁和健康脂肪。',
      ingredients: ['黑芝麻酱 2 汤匙','米饼 2 片','（可选）蜂蜜或枫糖浆 1/2 茶匙','（可选）香蕉片或浆果','（可选）海盐 少许'],
      steps: ['将黑芝麻酱均匀涂在每片米饼上。','如用蜂蜜淋上，放上香蕉片或浆果。','撒少许海盐提升坚果风味。','立即食用。'],
      notes: '黑芝麻酱可买现成或自制：食物处理器中将黑芝麻研磨至出油成酱（类似塔希尼）。太稠可加几滴芝麻油稀释。'
    },
    macros: { protein: { g: 6, pct: 15 }, fat: { g: 14, pct: 52 }, netCarbs: { g: 14, pct: 33 } }
  },

  {
    id: 's144',
    type: 'snack',
    carb: 'moderate',
    tags: ['batch-cook','vegetarian','vegan','gluten-free'],
    contains: ['sesame'],
    focus: ['Batch-cook'],
    img: null,
    emoji: '⚫',
    en: {
      name: 'Black Sesame Energy Balls',
      time: '15 min + chilling',
      servings: '12 balls',
      why: 'A nutrient-dense snack combining black sesame butter, oats, and raisins. Rich in calcium, iron, and healthy fats, these energy balls are perfect for a pre-workout boost or afternoon pick-me-up.',
      ingredients: ['Black sesame butter 1/2 cup','Rolled oats 1 cup','Raisins, finely chopped 1/3 cup','Maple syrup or monk fruit sweetener 1-2 tbsp (to taste)','Water 1-2 tbsp (as needed)','Salt a pinch','Chia seeds 1 tbsp','(Optional) extra black sesame seeds or ground oats for rolling'],
      steps: ['If you want a smoother texture, pulse half the oats in a blender into oat flour.','In a bowl, mix the black sesame butter, oats (and oat flour if made), raisins, chia seeds, sweetener, and salt.','Add water a teaspoon at a time until the mixture holds together when squeezed.','Refrigerate for 20-30 minutes to firm up.','Roll into 12-14 balls about 1 inch in diameter.','Optionally roll in black sesame seeds or finely ground oats for coating.'],
      notes: 'Keep refrigerated up to 2 weeks or frozen 3 months. These are naturally vegan and gluten-free (use certified GF oats). Substitute dried cranberries or chopped dates for the raisins.'
    },
    zh: {
      name: '黑芝麻能量球',
      time: '15 分钟 + 冷藏',
      servings: '12 个',
      why: '营养密集的零食——黑芝麻酱、燕麦和葡萄干组合。富含钙、铁和健康脂肪，适合运动前或下午提神。',
      ingredients: ['黑芝麻酱 1/2 杯','传统燕麦片 1 杯','葡萄干切碎 1/3 杯','枫糖浆或罗汉果糖 1-2 汤匙（按口味）','水 1-2 汤匙（视需要）','盐 一撮','奇亚籽 1 汤匙','（可选）额外黑芝麻或细磨燕麦用于裹面'],
      steps: ['如需更细腻口感，将一半燕麦用搅拌机打成燕麦粉。','碗中混合黑芝麻酱、燕麦（及燕麦粉）、葡萄干、奇亚籽、甜味剂和盐。','逐茶匙加水至混合物捏紧可成团。','冷藏 20-30 分钟使其变硬。','搓成约 2.5 厘米直径的 12-14 个球。','可在黑芝麻或细磨燕麦中滚一下裹面。'],
      notes: '冷藏 2 周，冷冻 3 个月。天然纯素无麸质（用认证无麸燕麦）。可用蔓越莓干或椰枣丁替换葡萄干。'
    },
    macros: { protein: { g: 5, pct: 14 }, fat: { g: 8, pct: 38 }, netCarbs: { g: 15, pct: 48 } }
  }

];

if(typeof window !== 'undefined') window.ADDED_RECIPES = ADDED_RECIPES;
