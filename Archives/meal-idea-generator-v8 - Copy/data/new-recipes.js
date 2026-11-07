/* ============================================================================
   NEW RECIPES  --  26 additional recipe entries for the meal library
   ----------------------------------------------------------------------------
   Format mirrors MEALS in meals.js. See that file's header for field docs.
   IDs: b16–b23, l15–l21, d17–d21, s14–s19
   ========================================================================== */

const NEW_RECIPES = [
    {
      id: 'b16',
      type: 'breakfast',
      carb: 'moderate',
      tags: [
        'batch-cook',
        'no-cook',
        'quick-easy',
        'high-protein',
        'vegetarian'
      ],
      contains: [
        'dairy'
      ],
      focus: [
        'Batch-cook',
        'High protein'
      ],
      img: 'protein-overnight-oats.jpg',
      emoji: '🥛',
      en: {
        name: 'Protein Overnight Oats',
        time: '5 min + overnight',
        servings: '3',
        why: 'Mix the night before for a grab-and-go breakfast with extra protein from Greek yogurt.',
        ingredients: [
          'Rolled oats 1 cup',
          'Greek yogurt 200g',
          'Milk of choice 1 cup',
          'Chia seeds 2 tbsp',
          'Berries to top'
        ],
        steps: [
          'Stir oats, yogurt, milk and chia together in a jar.',
          'Cover and chill overnight.',
          'Top with berries before eating.'
        ],
        notes: 'Keeps 3 days in the fridge — make two or three jars at once.'
      },
      zh: {
        name: '高蛋白隔夜燕麦',
        time: '5 分钟 + 过夜',
        servings: '3 份',
        why: '前一晚拌好，早上直接吃，希腊酸奶额外加蛋白。',
        ingredients: [
          '燕麦片 1 杯',
          '希腊酸奶 200g',
          '喜爱的奶 1 杯',
          '奇亚籽 2 汤匙',
          '莓果 点缀'
        ],
        steps: [
          '燕麦、酸奶、奶与奇亚籽在罐中搅匀。',
          '盖好冷藏过夜。',
          '吃前铺莓果。'
        ],
        notes: '冷藏可存 3 天——一次做两三罐。'
      },
      macros: {
        protein: {
          g: 24,
          pct: 33
        },
        fat: {
          g: 8,
          pct: 25
        },
        netCarbs: {
          g: 30,
          pct: 42
        }
      }
    },
    {
      id: 'b17',
      type: 'breakfast',
      carb: 'moderate',
      tags: [
        'no-cook',
        'batch-cook',
        'gut-healing',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [],
      focus: [
        'Gut-healing',
        'No-cook'
      ],
      img: 'matcha-chia-pudding.jpg',
      emoji: '🍵',
      en: {
        name: 'Matcha Chia Pudding',
        time: '5 min + chill',
        servings: '2',
        why: 'Matcha adds antioxidants; chia brings soluble fibre for a gentle, no-cook breakfast.',
        ingredients: [
          'Chia seeds 4 tbsp',
          'Unsweetened almond milk 250ml',
          'Matcha powder 1 tsp',
          'Maple syrup 1 tsp (optional)',
          'Coconut flakes to top'
        ],
        steps: [
          'Whisk matcha into the almond milk until smooth.',
          'Stir in the chia and maple syrup; rest 10 minutes and stir again.',
          'Chill at least 4 hours; top with coconut flakes.'
        ],
        notes: 'Double or triple the recipe for a week of breakfasts.'
      },
      zh: {
        name: '抹茶奇亚籽布丁',
        time: '5 分钟 + 冷藏',
        servings: '2 份',
        why: '抹茶增抗氧化物，奇亚籽补可溶性纤维，免烹温和早餐。',
        ingredients: [
          '奇亚籽 4 汤匙',
          '无糖杏仁奶 250ml',
          '抹茶粉 1 茶匙',
          '枫糖 1 茶匙（可选）',
          '椰蓉 点缀'
        ],
        steps: [
          '抹茶粉加入杏仁奶搅匀至无颗粒。',
          '拌入奇亚籽与枫糖，静置 10 分钟后再搅一次。',
          '冷藏至少 4 小时，撒椰蓉。'
        ],
        notes: '可翻倍或三倍量做一周早餐。'
      },
      macros: {
        protein: {
          g: 6,
          pct: 13
        },
        fat: {
          g: 12,
          pct: 57
        },
        netCarbs: {
          g: 14,
          pct: 30
        }
      }
    },
    {
      id: 'b18',
      type: 'breakfast',
      carb: 'low',
      tags: [
        'batch-cook',
        'quick-easy',
        'high-protein',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'egg',
        'dairy'
      ],
      focus: [
        'Batch-cook',
        'High protein'
      ],
      img: 'egg-muffin-cups.jpg',
      emoji: '🧁',
      en: {
        name: 'Egg Muffin Cups',
        time: '25 min',
        servings: '6',
        why: 'Bake a batch on Sunday and grab two each morning — a portable, high-protein breakfast.',
        ingredients: [
          'Eggs 8',
          'Bell pepper 1/2 (diced)',
          'Spinach 1 handful (chopped)',
          'Shredded cheese 1/3 cup',
          'Olive oil spray',
          'Sea salt, black pepper'
        ],
        steps: [
          'Preheat oven to 180°C; grease a muffin tin.',
          'Whisk eggs, vegetables, cheese and seasoning; divide into the tin.',
          'Bake 18 minutes until set; cool and store in the fridge.'
        ],
        notes: 'Freeze extras and reheat in the microwave for 40 seconds.'
      },
      zh: {
        name: '鸡蛋麦芬杯',
        time: '25 分钟',
        servings: '6 份',
        why: '周日烤一批，每天早上拿两个，便携高蛋白早餐。',
        ingredients: [
          '鸡蛋 8 个',
          '彩椒半个（切丁）',
          '菠菜 1 把（切碎）',
          '奶酪丝 1/3 杯',
          '橄榄油喷雾',
          '海盐、黑胡椒 适量'
        ],
        steps: [
          '烤箱 180°C 预热，麦芬模刷油。',
          '鸡蛋与蔬菜、奶酪、调味打匀，分装入模。',
          '烤 18 分钟至凝固，冷却后冷藏保存。'
        ],
        notes: '多余的可冷冻，微波加热 40 秒。'
      },
      macros: {
        protein: {
          g: 18,
          pct: 34
        },
        fat: {
          g: 14,
          pct: 58
        },
        netCarbs: {
          g: 4,
          pct: 8
        }
      }
    },
    {
      id: 'b19',
      type: 'breakfast',
      carb: 'moderate',
      tags: [
        'asian',
        'gut-healing',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'sesame'
      ],
      focus: [
        'Gut-healing',
        'Asian'
      ],
      img: 'black-sesame-rice-porridge.jpg',
      emoji: '🥣',
      en: {
        name: 'Black Sesame Rice Porridge',
        time: '30 min',
        servings: '3',
        why: 'Black sesame is rich in calcium and iron; rice porridge is gentle on the stomach.',
        ingredients: [
          'White rice 1/2 cup',
          'Water 5 cups',
          'Black sesame paste 3 tbsp',
          'Maple syrup 1 tsp (optional)',
          'Sea salt, a pinch'
        ],
        steps: [
          'Rinse the rice, add water and bring to a boil; simmer 25 minutes until very soft.',
          'Stir in the black sesame paste until smooth.',
          'Season with salt and maple syrup to taste.'
        ],
        notes: 'Blend the porridge if you prefer a smoother texture.'
      },
      zh: {
        name: '黑芝麻米糊',
        time: '30 分钟',
        servings: '3 份',
        why: '黑芝麻富钙铁，米糊温和养胃。',
        ingredients: [
          '大米 半杯',
          '清水 5 杯',
          '黑芝麻酱 3 汤匙',
          '枫糖 1 茶匙（可选）',
          '海盐 少许'
        ],
        steps: [
          '米洗净加水煮开，转小火熬 25 分钟至软烂。',
          '拌入黑芝麻酱搅匀。',
          '用盐与枫糖调味。'
        ],
        notes: '喜欢更顺滑可用料理机打一下。'
      },
      macros: {
        protein: {
          g: 8,
          pct: 15
        },
        fat: {
          g: 6,
          pct: 25
        },
        netCarbs: {
          g: 32,
          pct: 60
        }
      }
    },
    {
      id: 'b20',
      type: 'breakfast',
      carb: 'moderate',
      tags: [
        'quick-easy',
        'high-protein',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'egg',
        'nuts'
      ],
      focus: [
        'Quick & easy',
        'High protein'
      ],
      img: 'almond-flour-pancakes.jpg',
      emoji: '🥞',
      en: {
        name: 'Almond Flour Pancakes',
        time: '15 min',
        servings: '2',
        why: 'Gluten-free and higher in protein than regular pancakes — fluffy and family-friendly.',
        ingredients: [
          'Almond flour 1 cup',
          'Eggs 2',
          'Almond milk 1/4 cup',
          'Baking powder 1 tsp',
          'Vanilla extract, a few drops',
          'Coconut oil for cooking'
        ],
        steps: [
          'Whisk almond flour, eggs, almond milk, baking powder and vanilla into a batter.',
          'Cook spoonfuls in a hot pan with coconut oil until golden on both sides.',
          'Serve with berries or a drizzle of maple syrup.'
        ],
        notes: 'Keep the pancakes small — they flip more easily.'
      },
      zh: {
        name: '杏仁粉松饼',
        time: '15 分钟',
        servings: '2 份',
        why: '无麸质、比普通松饼高蛋白，松软适合全家。',
        ingredients: [
          '杏仁粉 1 杯',
          '鸡蛋 2 个',
          '杏仁奶 1/4 杯',
          '泡打粉 1 茶匙',
          '香草精 数滴',
          '椰子油 适量'
        ],
        steps: [
          '杏仁粉、鸡蛋、杏仁奶、泡打粉与香草精打成糊。',
          '热锅刷椰子油，舀入面糊煎至两面金黄。',
          '配莓果或少量枫糖。'
        ],
        notes: '松饼做小一点更容易翻面。'
      },
      macros: {
        protein: {
          g: 16,
          pct: 24
        },
        fat: {
          g: 14,
          pct: 48
        },
        netCarbs: {
          g: 18,
          pct: 28
        }
      }
    },
    {
      id: 'b21',
      type: 'breakfast',
      carb: 'low',
      tags: [
        'batch-cook',
        'quick-easy',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'egg',
        'dairy'
      ],
      focus: [
        'Batch-cook',
        'Quick & easy'
      ],
      img: 'veggie-frittata.jpg',
      emoji: '🍳',
      en: {
        name: 'Veggie Frittata',
        time: '20 min',
        servings: '4',
        why: 'A slice-and-go breakfast that keeps three days — packed with vegetables and protein.',
        ingredients: [
          'Eggs 6',
          'Cherry tomatoes 6 (halved)',
          'Baby spinach 2 handfuls',
          'Feta 50g (crumbled)',
          'Olive oil 1 tbsp',
          'Sea salt, black pepper',
          'Oregano, a pinch'
        ],
        steps: [
          'Heat olive oil in an oven-safe pan; wilt the spinach and soften the tomatoes.',
          'Pour beaten seasoned eggs over the vegetables; scatter feta on top.',
          'Cook on low 8 minutes, then finish under the grill until golden.'
        ],
        notes: 'Eat cold or warm — slice into quarters and store in the fridge.'
      },
      zh: {
        name: '蔬菜烘蛋',
        time: '20 分钟',
        servings: '4 份',
        why: '切件即走，可存三天，蔬菜与蛋白满满。',
        ingredients: [
          '鸡蛋 6 个',
          '小番茄 6 颗（对半切）',
          '嫩菠菜 2 把',
          '羊奶酪 50g（碎）',
          '橄榄油 1 汤匙',
          '海盐、黑胡椒 适量',
          '牛至 少许'
        ],
        steps: [
          '烤箱适用锅中热橄榄油，炒软菠菜与小番茄。',
          '倒入调味蛋液，撒羊奶酪。',
          '小火 8 分钟，再放上层烤至金黄。'
        ],
        notes: '冷热皆宜——切四块冷藏保存。'
      },
      macros: {
        protein: {
          g: 20,
          pct: 33
        },
        fat: {
          g: 16,
          pct: 59
        },
        netCarbs: {
          g: 5,
          pct: 8
        }
      }
    },
    {
      id: 'b22',
      type: 'breakfast',
      carb: 'moderate',
      tags: [
        'no-cook',
        'quick-easy',
        'gut-healing',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [],
      focus: [
        'No-cook',
        'Quick & easy'
      ],
      img: 'coconut-berry-smoothie.jpg',
      emoji: '🫐',
      en: {
        name: 'Coconut Berry Smoothie',
        time: '5 min',
        servings: '1',
        why: 'A no-cook plant-based smoothie — electrolytes from coconut and antioxidants from berries.',
        ingredients: [
          'Coconut milk 200ml (carton)',
          'Frozen mixed berries 1 cup',
          'Banana 1/2',
          'Hemp seeds 1 tbsp',
          'Spinach, a small handful'
        ],
        steps: [
          'Blend everything until smooth.',
          'Pour into a glass and enjoy immediately.'
        ],
        notes: 'Use full-fat coconut milk from a tin for a creamier, higher-calorie version.'
      },
      zh: {
        name: '椰香莓果思慕雪',
        time: '5 分钟',
        servings: '1 份',
        why: '免烹植物奶昔，椰子补电解质，莓果补抗氧化。',
        ingredients: [
          '椰奶 200ml（纸盒装）',
          '冷冻混合莓果 1 杯',
          '香蕉 半根',
          '火麻籽 1 汤匙',
          '菠菜 少许'
        ],
        steps: [
          '所有材料打至顺滑。',
          '倒入杯中即刻饮用。'
        ],
        notes: '用罐装全脂椰奶更浓郁、热量更高。'
      },
      macros: {
        protein: {
          g: 6,
          pct: 13
        },
        fat: {
          g: 10,
          pct: 48
        },
        netCarbs: {
          g: 18,
          pct: 39
        }
      }
    },
    {
      id: 'b23',
      type: 'breakfast',
      carb: 'low',
      tags: [
        'no-cook',
        'quick-easy',
        'high-protein',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'dairy'
      ],
      focus: [
        'High protein',
        'No-cook'
      ],
      img: 'savory-cottage-cheese-bowl.jpg',
      emoji: '🧀',
      en: {
        name: 'Savory Cottage Cheese Bowl',
        time: '3 min',
        servings: '1',
        why: 'A high-protein, no-cook savory bowl when you want something salty rather than sweet.',
        ingredients: [
          'Cottage cheese 200g',
          'Cucumber 1/2 (diced)',
          'Cherry tomatoes 4 (halved)',
          'Pumpkin seeds 1 tbsp',
          'Olive oil 1 tsp',
          'Sea salt, black pepper'
        ],
        steps: [
          'Spoon the cottage cheese into a bowl.',
          'Top with cucumber, tomatoes, pumpkin seeds; drizzle with oil and season.'
        ],
        notes: 'Swirl in a spoon of pesto for extra flavour.'
      },
      zh: {
        name: '咸味茅屋奶酪碗',
        time: '3 分钟',
        servings: '1 份',
        why: '高蛋白免烹咸口碗，想吃咸不吃甜时最合适。',
        ingredients: [
          '茅屋奶酪 200g',
          '黄瓜半根（切丁）',
          '小番茄 4 颗（对半切）',
          '南瓜籽 1 汤匙',
          '橄榄油 1 茶匙',
          '海盐、黑胡椒 适量'
        ],
        steps: [
          '茅屋奶酪盛入碗中。',
          '铺黄瓜、番茄、南瓜籽，淋油调味。'
        ],
        notes: '加一勺青酱更香。'
      },
      macros: {
        protein: {
          g: 22,
          pct: 51
        },
        fat: {
          g: 6,
          pct: 31
        },
        netCarbs: {
          g: 8,
          pct: 18
        }
      }
    },
    {
      id: 'l15',
      type: 'lunch',
      carb: 'moderate',
      tags: [
        'asian',
        'quick-easy',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'soy',
        'sesame'
      ],
      focus: [
        'Asian',
        'Quick & easy'
      ],
      img: 'sesame-soba-bowl.jpg',
      emoji: '🍜',
      en: {
        name: 'Sesame Soba Bowl',
        time: '15 min',
        servings: '2',
        why: '100% buckwheat soba is gluten-free and nutty; the sesame dressing brings healthy fats.',
        ingredients: [
          '100% buckwheat soba 200g',
          'Cucumber 1 (julienned)',
          'Carrot 1 (julienned)',
          'Tamari 2 tbsp',
          'Sesame oil 1 tbsp',
          'Rice vinegar 1 tsp',
          'Sesame seeds 1 tbsp'
        ],
        steps: [
          'Cook the soba according to the package; rinse under cold water and drain.',
          'Whisk tamari, sesame oil and vinegar into a dressing.',
          'Toss the noodles with the vegetables and dressing; sprinkle sesame seeds.'
        ],
        notes: 'Check the label — some soba brands add wheat flour.'
      },
      zh: {
        name: '芝麻荞麦面碗',
        time: '15 分钟',
        servings: '2 份',
        why: '纯荞麦面无麸质有坚果香，芝麻酱调汁补好脂肪。',
        ingredients: [
          '纯荞麦面 200g',
          '黄瓜 1 根（切丝）',
          '胡萝卜 1 根（切丝）',
          '无麸质生抽 2 汤匙',
          '芝麻油 1 汤匙',
          '米醋 1 茶匙',
          '芝麻 1 汤匙'
        ],
        steps: [
          '按包装煮荞麦面，冷水冲凉沥干。',
          '生抽、芝麻油与米醋调成汁。',
          '面条与蔬菜、酱汁拌匀，撒芝麻。'
        ],
        notes: '注意标签——部分荞麦面掺小麦粉。'
      },
      macros: {
        protein: {
          g: 14,
          pct: 20
        },
        fat: {
          g: 12,
          pct: 39
        },
        netCarbs: {
          g: 28,
          pct: 41
        }
      }
    },
    {
      id: 'l16',
      type: 'lunch',
      carb: 'moderate',
      tags: [
        'batch-cook',
        'quick-easy',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'dairy'
      ],
      focus: [
        'No-cook',
        'Batch-cook'
      ],
      img: 'greek-quinoa-salad.jpg',
      emoji: '🥗',
      en: {
        name: 'Greek Quinoa Salad',
        time: '20 min',
        servings: '4',
        why: 'A bright, batch-friendly salad with complete protein from quinoa and feta.',
        ingredients: [
          'Quinoa 1 cup (dry)',
          'Cucumber 1 (diced)',
          'Cherry tomatoes 1 cup (halved)',
          'Feta 80g (cubed)',
          'Kalamata olives 1/4 cup',
          'Olive oil 2 tbsp',
          'Lemon juice 1 tbsp'
        ],
        steps: [
          'Cook quinoa in 1:2 water for 15 minutes; fluff and cool.',
          'Mix the quinoa with the vegetables, feta and olives.',
          'Dress with olive oil and lemon juice; season to taste.'
        ],
        notes: 'Use pre-cooked quinoa to make this a true no-cook lunch.'
      },
      zh: {
        name: '希腊藜麦沙拉',
        time: '20 分钟',
        servings: '4 份',
        why: '清爽可批量，藜麦与羊奶酪提供完整蛋白。',
        ingredients: [
          '藜麦 1 杯（生）',
          '黄瓜 1 根（切丁）',
          '小番茄 1 杯（对半切）',
          '羊奶酪 80g（切丁）',
          '卡拉马塔橄榄 1/4 杯',
          '橄榄油 2 汤匙',
          '柠檬汁 1 汤匙'
        ],
        steps: [
          '藜麦 1:2 水煮 15 分钟，松开放凉。',
          '藜麦与蔬菜、羊奶酪、橄榄混合。',
          '加橄榄油与柠檬汁，调味即可。'
        ],
        notes: '用预煮藜麦即成免烹午餐。'
      },
      macros: {
        protein: {
          g: 12,
          pct: 18
        },
        fat: {
          g: 14,
          pct: 47
        },
        netCarbs: {
          g: 24,
          pct: 35
        }
      }
    },
    {
      id: 'l17',
      type: 'lunch',
      carb: 'moderate',
      tags: [
        'asian',
        'high-protein',
        'gluten-free'
      ],
      contains: [
        'fish',
        'soy',
        'sesame'
      ],
      focus: [
        'Asian',
        'High protein'
      ],
      img: 'salmon-poke-bowl.jpg',
      emoji: '🍣',
      en: {
        name: 'Salmon Poke Bowl',
        time: '20 min',
        servings: '2',
        why: 'A fresh bowl with sashimi-grade salmon — high protein and omega-3s in one lunch.',
        ingredients: [
          'Brown rice 2 bowls (cooked)',
          'Sashimi-grade salmon 200g (cubed)',
          'Edamame 1 cup',
          'Cucumber 1 (sliced)',
          'Avocado 1 (sliced)',
          'Tamari 1 tbsp',
          'Sesame oil 1 tsp'
        ],
        steps: [
          'Divide the rice between two bowls.',
          'Arrange the salmon, edamame, cucumber and avocado on top.',
          'Drizzle with tamari and sesame oil.'
        ],
        notes: 'Use leftover cooked salmon if you prefer it cooked.'
      },
      zh: {
        name: '三文鱼波奇碗',
        time: '20 分钟',
        servings: '2 份',
        why: '刺身级三文鱼波奇碗，一份午餐高蛋白加 Omega-3。',
        ingredients: [
          '糙米饭 2 碗（煮熟）',
          '刺身级三文鱼 200g（切块）',
          '毛豆 1 杯',
          '黄瓜 1 根（切片）',
          '牛油果 1 个（切片）',
          '无麸质生抽 1 汤匙',
          '芝麻油 1 茶匙'
        ],
        steps: [
          '糙米饭分入两个碗。',
          '摆上三文鱼、毛豆、黄瓜与牛油果。',
          '淋生抽与芝麻油。'
        ],
        notes: '不喜欢生鱼可用熟三文鱼。'
      },
      macros: {
        protein: {
          g: 30,
          pct: 37
        },
        fat: {
          g: 12,
          pct: 33
        },
        netCarbs: {
          g: 24,
          pct: 30
        }
      }
    },
    {
      id: 'l18',
      type: 'lunch',
      carb: 'moderate',
      tags: [
        'batch-cook',
        'gut-healing',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [],
      focus: [
        'Gut-healing',
        'Batch-cook'
      ],
      img: 'big-batch-veggie-soup.jpg',
      emoji: '🍲',
      en: {
        name: 'Big Batch Veggie Soup',
        time: '35 min',
        servings: '6',
        why: 'A gentle, fibre-rich soup that makes six portions — perfect for a week of lunches.',
        ingredients: [
          'Onion 1 (diced)',
          'Carrots 2 (sliced)',
          'Celery 2 stalks (sliced)',
          'Tinned tomatoes 1 tin',
          'Cabbage 1/4 head (shredded)',
          'Vegetable stock 1.5L',
          'Olive oil 1 tbsp'
        ],
        steps: [
          'Sweat the onion, carrots and celery in olive oil for 5 minutes.',
          'Add the tomatoes, cabbage and stock; simmer 25 minutes.',
          'Season with salt and pepper; portion into containers.'
        ],
        notes: 'Freeze individual portions for instant workday lunches.'
      },
      zh: {
        name: '大份蔬菜汤',
        time: '35 分钟',
        servings: '6 份',
        why: '温和高纤维，一次做六份，一周午餐有着落。',
        ingredients: [
          '洋葱 1 个（切丁）',
          '胡萝卜 2 根（切片）',
          '西芹 2 根（切片）',
          '番茄罐头 1 罐',
          '卷心菜 1/4 颗（切丝）',
          '蔬菜高汤 1.5L',
          '橄榄油 1 汤匙'
        ],
        steps: [
          '橄榄油炒洋葱、胡萝卜、西芹 5 分钟。',
          '加番茄、卷心菜与高汤，小火炖 25 分钟。',
          '调味后分装。'
        ],
        notes: '按份冷冻，工作日午餐随取随热。'
      },
      macros: {
        protein: {
          g: 10,
          pct: 22
        },
        fat: {
          g: 6,
          pct: 30
        },
        netCarbs: {
          g: 22,
          pct: 48
        }
      }
    },
    {
      id: 'l19',
      type: 'lunch',
      carb: 'low',
      tags: [
        'quick-easy',
        'high-protein',
        'gluten-free'
      ],
      contains: [
        'egg',
        'soy',
        'sesame'
      ],
      focus: [
        'Quick & easy',
        'High protein'
      ],
      img: 'chicken-cabbage-slaw.jpg',
      emoji: '🥗',
      en: {
        name: 'Chicken & Cabbage Slaw',
        time: '15 min',
        servings: '2',
        why: 'Crunchy, low-carb and high-protein — uses leftover or rotisserie chicken for speed.',
        ingredients: [
          'Cooked chicken breast 200g (shredded)',
          'Shredded cabbage 3 cups',
          'Grated carrot 1 cup',
          'Mayonnaise 2 tbsp',
          'Tamari 1 tsp',
          'Sesame oil 1 tsp',
          'Sesame seeds 1 tsp'
        ],
        steps: [
          'Toss the chicken, cabbage and carrot in a large bowl.',
          'Mix mayonnaise, tamari and sesame oil into a dressing.',
          'Toss the salad with the dressing; sprinkle sesame seeds.'
        ],
        notes: 'Use bagged coleslaw mix to save even more time.'
      },
      zh: {
        name: '鸡肉卷心菜沙拉',
        time: '15 分钟',
        servings: '2 份',
        why: '爽脆低碳高蛋白，用剩鸡或烤鸡加速。',
        ingredients: [
          '熟鸡胸 200g（撕丝）',
          '卷心菜丝 3 杯',
          '胡萝卜丝 1 杯',
          '蛋黄酱 2 汤匙',
          '无麸质生抽 1 茶匙',
          '芝麻油 1 茶匙',
          '芝麻 1 茶匙'
        ],
        steps: [
          '鸡丝、卷心菜、胡萝卜放大碗拌匀。',
          '蛋黄酱、生抽、芝麻油调成汁。',
          '沙拉拌汁，撒芝麻。'
        ],
        notes: '用现成沙拉菜丝省更多时间。'
      },
      macros: {
        protein: {
          g: 28,
          pct: 43
        },
        fat: {
          g: 14,
          pct: 48
        },
        netCarbs: {
          g: 6,
          pct: 9
        }
      }
    },
    {
      id: 'l20',
      type: 'lunch',
      carb: 'low',
      tags: [
        'asian',
        'quick-easy',
        'high-protein',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'egg',
        'soy',
        'sesame'
      ],
      focus: [
        'Asian',
        'Quick & easy'
      ],
      img: 'egg-fried-cauliflower-rice.jpg',
      emoji: '🍚',
      en: {
        name: 'Egg Fried Cauliflower Rice',
        time: '12 min',
        servings: '2',
        why: 'All the flavour of fried rice with a fraction of the carbs — a quick Asian-style lunch.',
        ingredients: [
          'Cauliflower rice 4 cups',
          'Eggs 3',
          'Frozen peas 1/2 cup',
          'Carrot 1 (diced)',
          'Garlic 2 cloves (minced)',
          'Tamari 1.5 tbsp',
          'Sesame oil 1 tbsp'
        ],
        steps: [
          'Scramble the eggs in sesame oil; set aside.',
          'Sauté garlic, carrot and peas; add the cauliflower rice and stir-fry 4 minutes.',
          'Return the eggs, add tamari and toss.'
        ],
        notes: 'Use bagged cauliflower rice to save prep time.'
      },
      zh: {
        name: '鸡蛋花菜饭',
        time: '12 分钟',
        servings: '2 份',
        why: '有炒饭味但碳水极低，亚洲风快手午餐。',
        ingredients: [
          '花菜米 4 杯',
          '鸡蛋 3 个',
          '冷冻豌豆 半杯',
          '胡萝卜 1 根（切丁）',
          '蒜末 2 瓣',
          '无麸质生抽 1.5 汤匙',
          '芝麻油 1 汤匙'
        ],
        steps: [
          '芝麻油炒散鸡蛋，盛出。',
          '炒蒜、胡萝卜、豌豆，加花菜饭炒 4 分钟。',
          '回锅鸡蛋，加生抽翻匀。'
        ],
        notes: '用袋装花菜米省备料时间。'
      },
      macros: {
        protein: {
          g: 16,
          pct: 30
        },
        fat: {
          g: 14,
          pct: 59
        },
        netCarbs: {
          g: 6,
          pct: 11
        }
      }
    },
    {
      id: 'l21',
      type: 'lunch',
      carb: 'moderate',
      tags: [
        'no-cook',
        'quick-easy',
        'high-protein',
        'gluten-free'
      ],
      contains: [
        'fish'
      ],
      focus: [
        'No-cook',
        'High protein'
      ],
      img: 'white-bean-tuna-salad.jpg',
      emoji: '🐟',
      en: {
        name: 'White Bean Tuna Salad',
        time: '8 min',
        servings: '2',
        why: 'Double protein from tuna and beans — a no-cook lunch that keeps you full for hours.',
        ingredients: [
          'Tuna in water 1 tin',
          'Cannellini beans 1 tin (drained)',
          'Red onion 2 tbsp (diced)',
          'Lemon juice 1 tbsp',
          'Olive oil 1 tbsp',
          'Parsley, sea salt, black pepper'
        ],
        steps: [
          'Drain the tuna; mix with the beans, onion and parsley.',
          'Dress with lemon juice and olive oil; season to taste.'
        ],
        notes: 'Serve over greens or scoop with cucumber slices.'
      },
      zh: {
        name: '白豆金枪鱼沙拉',
        time: '8 分钟',
        servings: '2 份',
        why: '金枪鱼与豆子双重蛋白，免烹午餐，饱腹数小时。',
        ingredients: [
          '水浸金枪鱼 1 罐',
          '白豆罐头 1 罐（沥干）',
          '紫洋葱 2 汤匙（切丁）',
          '柠檬汁 1 汤匙',
          '橄榄油 1 汤匙',
          '欧芹、海盐、黑胡椒 适量'
        ],
        steps: [
          '金枪鱼沥干，与白豆、洋葱、欧芹拌匀。',
          '加柠檬汁与橄榄油，调味即可。'
        ],
        notes: '配沙拉叶或黄瓜片舀着吃。'
      },
      macros: {
        protein: {
          g: 24,
          pct: 35
        },
        fat: {
          g: 12,
          pct: 39
        },
        netCarbs: {
          g: 18,
          pct: 26
        }
      }
    },
    {
      id: 'd17',
      type: 'dinner',
      carb: 'moderate',
      tags: [
        'batch-cook',
        'gut-healing',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [],
      focus: [
        'Gut-healing',
        'Batch-cook'
      ],
      img: 'coconut-lentil-curry.jpg',
      emoji: '🍛',
      en: {
        name: 'Coconut Lentil Curry',
        time: '35 min',
        servings: '4',
        why: 'A gentle, plant-based curry that freezes beautifully — coconut milk soothes the gut.',
        ingredients: [
          'Red lentils 1 cup',
          'Coconut milk 1 tin',
          'Onion 1 (diced)',
          'Tinned tomatoes 1 tin',
          'Curry powder 2 tbsp',
          'Spinach 2 cups',
          'Olive oil 1 tbsp'
        ],
        steps: [
          'Sauté the onion in olive oil; stir in the curry powder.',
          'Add the lentils, tomatoes and coconut milk; simmer 25 minutes.',
          'Stir in the spinach until wilted; season and serve.'
        ],
        notes: 'Freezes well — make a double batch for easy weeknight dinners.'
      },
      zh: {
        name: '椰奶扁豆咖喱',
        time: '35 分钟',
        servings: '4 份',
        why: '温和的植物咖喱，冷冻保存好，椰奶养胃。',
        ingredients: [
          '红扁豆 1 杯',
          '椰奶 1 罐',
          '洋葱 1 个（切丁）',
          '番茄罐头 1 罐',
          '咖喱粉 2 汤匙',
          '菠菜 2 杯',
          '橄榄油 1 汤匙'
        ],
        steps: [
          '橄榄油炒洋葱，加咖喱粉炒香。',
          '加扁豆、番茄与椰奶，小火炖 25 分钟。',
          '拌入菠菜至软，调味上桌。'
        ],
        notes: '可冷冻——做双倍量工作日晚餐随取随热。'
      },
      macros: {
        protein: {
          g: 14,
          pct: 20
        },
        fat: {
          g: 14,
          pct: 45
        },
        netCarbs: {
          g: 24,
          pct: 35
        }
      }
    },
    {
      id: 'd18',
      type: 'dinner',
      carb: 'low',
      tags: [
        'batch-cook',
        'high-protein',
        'gluten-free'
      ],
      contains: [],
      focus: [
        'Batch-cook',
        'High protein'
      ],
      img: 'mediterranean-chicken-traybake.jpg',
      emoji: '🍗',
      en: {
        name: 'Mediterranean Chicken Traybake',
        time: '40 min',
        servings: '4',
        why: 'One tray, four portions — olive oil, tomatoes and herbs make it heart-friendly.',
        ingredients: [
          'Chicken thighs 4',
          'Cherry tomatoes 2 cups',
          'Red onion 1 (wedges)',
          'Bell pepper 1 (chunks)',
          'Kalamata olives 1/4 cup',
          'Olive oil 2 tbsp',
          'Oregano, sea salt, black pepper'
        ],
        steps: [
          'Toss the vegetables and olives in olive oil and oregano; spread on a tray.',
          'Place the chicken on top; season and drizzle with more oil.',
          'Roast at 200°C for 30 minutes until the chicken is golden.'
        ],
        notes: 'Use bone-in thighs for the juiciest result.'
      },
      zh: {
        name: '地中海鸡肉烤盘',
        time: '40 分钟',
        servings: '4 份',
        why: '一盘四份，橄榄油番茄香草，护心抗炎。',
        ingredients: [
          '鸡腿 4 只',
          '小番茄 2 杯',
          '紫洋葱 1 个（切瓣）',
          '彩椒 1 个（切块）',
          '卡拉马塔橄榄 1/4 杯',
          '橄榄油 2 汤匙',
          '牛至、海盐、黑胡椒 适量'
        ],
        steps: [
          '蔬菜与橄榄拌油与牛至，铺烤盘。',
          '鸡腿放上面，调味淋油。',
          '200°C 烤 30 分钟至鸡皮金黄。'
        ],
        notes: '带骨鸡腿更多汁。'
      },
      macros: {
        protein: {
          g: 32,
          pct: 42
        },
        fat: {
          g: 16,
          pct: 47
        },
        netCarbs: {
          g: 8,
          pct: 11
        }
      }
    },
    {
      id: 'd19',
      type: 'dinner',
      carb: 'low',
      tags: [
        'asian',
        'quick-easy',
        'high-protein',
        'gluten-free'
      ],
      contains: [
        'shellfish',
        'soy',
        'sesame'
      ],
      focus: [
        'Asian',
        'Quick & easy'
      ],
      img: 'shrimp-veggie-stir-fry.jpg',
      emoji: '🍤',
      en: {
        name: 'Shrimp & Veggie Stir-Fry',
        time: '15 min',
        servings: '2',
        why: 'Shrimp cooks in minutes and is very high in protein — a quick weeknight dinner.',
        ingredients: [
          'Shrimp 300g (peeled)',
          'Broccoli 1 head (florets)',
          'Bell pepper 1 (sliced)',
          'Garlic 3 cloves (minced)',
          'Ginger 1 tsp (minced)',
          'Tamari 1.5 tbsp',
          'Sesame oil 1 tbsp'
        ],
        steps: [
          'Heat sesame oil; sauté the garlic and ginger until fragrant.',
          'Add the shrimp and stir-fry until pink; remove and set aside.',
          'Stir-fry the vegetables until tender; return the shrimp and add tamari.'
        ],
        notes: 'Add a splash of rice vinegar at the end for brightness.'
      },
      zh: {
        name: '虾仁蔬菜炒',
        time: '15 分钟',
        servings: '2 份',
        why: '虾仁几分钟熟且高蛋白，工作日晚餐快手。',
        ingredients: [
          '虾仁 300g（去壳）',
          '西兰花 1 颗（小朵）',
          '彩椒 1 个（切条）',
          '蒜末 3 瓣',
          '姜末 1 茶匙',
          '无麸质生抽 1.5 汤匙',
          '芝麻油 1 汤匙'
        ],
        steps: [
          '芝麻油热锅，炒香蒜姜。',
          '下虾仁炒至变粉，盛出。',
          '炒蔬菜至软，回锅虾仁加生抽。'
        ],
        notes: '起锅前淋少许米醋更鲜亮。'
      },
      macros: {
        protein: {
          g: 26,
          pct: 44
        },
        fat: {
          g: 12,
          pct: 46
        },
        netCarbs: {
          g: 6,
          pct: 10
        }
      }
    },
    {
      id: 'd20',
      type: 'dinner',
      carb: 'moderate',
      tags: [
        'batch-cook',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'dairy',
        'egg'
      ],
      focus: [
        'Batch-cook',
        'Vegetarian'
      ],
      img: 'zucchini-lasagna.jpg',
      emoji: '🍝',
      en: {
        name: 'Zucchini Lasagna',
        time: '45 min',
        servings: '4',
        why: 'Zucchini replaces pasta for a gluten-free, lower-carb lasagna that still bakes beautifully.',
        ingredients: [
          'Zucchini 3 (sliced lengthwise)',
          'Ricotta 250g',
          'Egg 1',
          'Mozzarella 150g (shredded)',
          'Sugar-free marinara 2 cups',
          'Spinach 2 cups',
          'Olive oil 1 tbsp'
        ],
        steps: [
          'Salt the zucchini slices and drain 15 minutes; pat dry.',
          'Mix ricotta, egg and spinach; layer zucchini, ricotta and marinara in a dish.',
          'Top with mozzarella; bake at 190°C for 30 minutes.'
        ],
        notes: 'Let it rest 10 minutes before slicing for cleaner pieces.'
      },
      zh: {
        name: '西葫芦千层',
        time: '45 分钟',
        servings: '4 份',
        why: '西葫芦替代意面，无麸质低碳千层，烤出来依然香。',
        ingredients: [
          '西葫芦 3 根（纵向切片）',
          '里科塔奶酪 250g',
          '鸡蛋 1 个',
          '马苏里拉 150g（切丝）',
          '无糖番茄酱 2 杯',
          '菠菜 2 杯',
          '橄榄油 1 汤匙'
        ],
        steps: [
          '西葫芦片撒盐腌 15 分钟出水，擦干。',
          '里科塔与蛋、菠菜拌匀；烤盘里铺西葫芦、奶酪、番茄酱。',
          '铺马苏里拉，190°C 烤 30 分钟。'
        ],
        notes: '出炉静置 10 分钟再切更整齐。'
      },
      macros: {
        protein: {
          g: 22,
          pct: 31
        },
        fat: {
          g: 16,
          pct: 50
        },
        netCarbs: {
          g: 14,
          pct: 19
        }
      }
    },
    {
      id: 'd21',
      type: 'dinner',
      carb: 'moderate',
      tags: [
        'batch-cook',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [],
      focus: [
        'Batch-cook',
        'Vegan'
      ],
      img: 'black-bean-veggie-burger.jpg',
      emoji: '🍔',
      en: {
        name: 'Black Bean Veggie Burger',
        time: '30 min',
        servings: '4',
        why: 'A plant-based patty that freezes well — serve in lettuce wraps for a gluten-free meal.',
        ingredients: [
          'Black beans 1 tin (drained)',
          'Cooked brown rice 1/2 cup',
          'Onion 1/2 (diced)',
          'Ground cumin 1 tsp',
          'Smoked paprika 1 tsp',
          'Olive oil 1 tbsp',
          'Lettuce leaves to serve'
        ],
        steps: [
          'Mash the beans; mix with rice, onion and spices.',
          'Form into 4 patties; pan-fry in olive oil until crisp on both sides.',
          'Serve in lettuce leaves with avocado or salsa.'
        ],
        notes: 'Patties freeze raw — thaw overnight then pan-fry.'
      },
      zh: {
        name: '黑豆蔬菜素汉堡',
        time: '30 分钟',
        servings: '4 份',
        why: '植物素肉饼可冷冻，配生菜包即无麸质。',
        ingredients: [
          '黑豆罐头 1 罐（沥干）',
          '煮熟糙米 半杯',
          '洋葱半个（切丁）',
          '孜然粉 1 茶匙',
          '烟熏红椒粉 1 茶匙',
          '橄榄油 1 汤匙',
          '生菜叶 适量'
        ],
        steps: [
          '黑豆压成泥，与糙米、洋葱、香料混合。',
          '做成 4 个饼，橄榄油煎至两面脆。',
          '配生菜叶与牛油果或莎莎酱。'
        ],
        notes: '生饼可冷冻——解冻后煎。'
      },
      macros: {
        protein: {
          g: 14,
          pct: 23
        },
        fat: {
          g: 10,
          pct: 37
        },
        netCarbs: {
          g: 24,
          pct: 40
        }
      }
    },
    {
      id: 's14',
      type: 'snack',
      carb: 'low',
      tags: [
        'no-cook',
        'quick-easy',
        'high-protein',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'dairy'
      ],
      focus: [
        'High protein',
        'No-cook'
      ],
      img: 'cottage-cheese-cherry-tomatoes.jpg',
      emoji: '🍅',
      en: {
        name: 'Cottage Cheese & Cherry Tomatoes',
        time: '2 min',
        servings: '1',
        why: 'A savory, high-protein snack ready in two minutes — no cooking required.',
        ingredients: [
          'Cottage cheese 150g',
          'Cherry tomatoes 6 (halved)',
          'Olive oil 1 tsp',
          'Sea salt, black pepper'
        ],
        steps: [
          'Spoon the cottage cheese into a small bowl.',
          'Add the tomatoes; drizzle with oil and season.'
        ],
        notes: 'Add a sprinkle of hemp seeds for extra crunch.'
      },
      zh: {
        name: '茅屋奶酪配小番茄',
        time: '2 分钟',
        servings: '1 份',
        why: '咸口高蛋白零食，两分钟即成，免烹。',
        ingredients: [
          '茅屋奶酪 150g',
          '小番茄 6 颗（对半切）',
          '橄榄油 1 茶匙',
          '海盐、黑胡椒 适量'
        ],
        steps: [
          '茅屋奶酪盛入小碗。',
          '加小番茄，淋油调味。'
        ],
        notes: '撒点火麻籽更香脆。'
      },
      macros: {
        protein: {
          g: 16,
          pct: 52
        },
        fat: {
          g: 4,
          pct: 29
        },
        netCarbs: {
          g: 6,
          pct: 19
        }
      }
    },
    {
      id: 's15',
      type: 'snack',
      carb: 'low',
      tags: [
        'no-cook',
        'quick-easy',
        'high-protein',
        'gluten-free'
      ],
      contains: [
        'fish',
        'dairy'
      ],
      focus: [
        'No-cook',
        'High protein'
      ],
      img: 'cucumber-smoked-salmon-bites.jpg',
      emoji: '🥒',
      en: {
        name: 'Cucumber Smoked Salmon Bites',
        time: '5 min',
        servings: '1',
        why: 'Elegant yet effortless — protein and omega-3s on a crisp cucumber slice.',
        ingredients: [
          'Cucumber 1 (thick slices)',
          'Smoked salmon 60g',
          'Cream cheese 1 tbsp',
          'Dill, a sprig',
          'Lemon juice, a squeeze'
        ],
        steps: [
          'Cut the cucumber into thick slices; spread each with cream cheese.',
          'Top with smoked salmon, dill and a squeeze of lemon.'
        ],
        notes: 'Capers make a great extra garnish.'
      },
      zh: {
        name: '黄瓜烟熏三文鱼小食',
        time: '5 分钟',
        servings: '1 份',
        why: '好看又省力，黄瓜片上的蛋白与 Omega-3。',
        ingredients: [
          '黄瓜 1 根（厚片）',
          '烟熏三文鱼 60g',
          '奶油奶酪 1 汤匙',
          '莳萝 少许',
          '柠檬汁 少许'
        ],
        steps: [
          '黄瓜切厚片，每片抹奶油奶酪。',
          '铺烟熏三文鱼、莳萝，挤柠檬汁。'
        ],
        notes: '可加酸豆点缀。'
      },
      macros: {
        protein: {
          g: 12,
          pct: 36
        },
        fat: {
          g: 8,
          pct: 55
        },
        netCarbs: {
          g: 3,
          pct: 9
        }
      }
    },
    {
      id: 's16',
      type: 'snack',
      carb: 'moderate',
      tags: [
        'no-cook',
        'batch-cook',
        'quick-easy',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'nuts'
      ],
      focus: [
        'Batch-cook',
        'No-cook'
      ],
      img: 'almond-energy-balls.jpg',
      emoji: '⚡',
      en: {
        name: 'Almond Energy Balls',
        time: '10 min',
        servings: '6',
        why: 'No-bake, batch-friendly and portable — dates and almonds provide sustained energy.',
        ingredients: [
          'Almonds 1 cup',
          'Medjool dates 6 (pitted)',
          'Cocoa powder 2 tbsp',
          'Chia seeds 1 tbsp',
          'Coconut oil 1 tbsp'
        ],
        steps: [
          'Blend the almonds and dates in a food processor until sticky.',
          'Add cocoa, chia and coconut oil; pulse until combined.',
          'Roll into 6 balls; chill 30 minutes to set.'
        ],
        notes: 'Store in the fridge for up to two weeks.'
      },
      zh: {
        name: '杏仁能量球',
        time: '10 分钟',
        servings: '6 份',
        why: '免烤可批量便携，椰枣与杏仁持续供能。',
        ingredients: [
          '杏仁 1 杯',
          '椰枣 6 颗（去核）',
          '可可粉 2 汤匙',
          '奇亚籽 1 汤匙',
          '椰子油 1 汤匙'
        ],
        steps: [
          '杏仁与椰枣用料理机打至粘稠。',
          '加可可粉、奇亚籽与椰子油，搅打均匀。',
          '搓成 6 个球，冷藏 30 分钟定型。'
        ],
        notes: '冷藏可存两周。'
      },
      macros: {
        protein: {
          g: 5,
          pct: 11
        },
        fat: {
          g: 12,
          pct: 59
        },
        netCarbs: {
          g: 14,
          pct: 30
        }
      }
    },
    {
      id: 's17',
      type: 'snack',
      carb: 'moderate',
      tags: [
        'no-cook',
        'quick-easy',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'sesame'
      ],
      focus: [
        'No-cook',
        'Quick & easy'
      ],
      img: 'hummus-veggie-wrap.jpg',
      emoji: '🌯',
      en: {
        name: 'Hummus Veggie Wrap',
        time: '5 min',
        servings: '1',
        why: 'A plant-based wrap loaded with fibre — use a gluten-free tortilla or collard leaf.',
        ingredients: [
          'Gluten-free wrap 1',
          'Hummus 3 tbsp',
          'Cucumber 1/4 (sliced)',
          'Carrot 1/2 (julienned)',
          'Spinach 1 handful',
          'Roasted red pepper 2 strips'
        ],
        steps: [
          'Spread the hummus over the wrap; layer on the vegetables.',
          'Roll tightly and slice in half.'
        ],
        notes: 'Wrap in foil to keep it together for lunch on the go.'
      },
      zh: {
        name: '鹰嘴豆泥蔬菜卷',
        time: '5 分钟',
        servings: '1 份',
        why: '植物纤维卷，用无麸质卷饼或羽衣甘蓝叶包。',
        ingredients: [
          '无麸质卷饼 1 张',
          '鹰嘴豆泥 3 汤匙',
          '黄瓜 1/4 根（切片）',
          '胡萝卜半根（切丝）',
          '菠菜 1 把',
          '烤红椒 2 条'
        ],
        steps: [
          '卷饼抹鹰嘴豆泥，铺蔬菜。',
          '卷紧对半切。'
        ],
        notes: '包锡纸方便外带。'
      },
      macros: {
        protein: {
          g: 8,
          pct: 15
        },
        fat: {
          g: 12,
          pct: 49
        },
        netCarbs: {
          g: 20,
          pct: 36
        }
      }
    },
    {
      id: 's18',
      type: 'snack',
      carb: 'low',
      tags: [
        'batch-cook',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [
        'nuts'
      ],
      focus: [
        'Batch-cook',
        'Vegan'
      ],
      img: 'spiced-roasted-almonds.jpg',
      emoji: '🌰',
      en: {
        name: 'Spiced Roasted Almonds',
        time: '20 min',
        servings: '6',
        why: 'A crunchy, savoury batch snack — far better than shop-bought flavoured nuts.',
        ingredients: [
          'Raw almonds 200g',
          'Olive oil 1 tbsp',
          'Smoked paprika 1 tsp',
          'Sea salt 1/2 tsp'
        ],
        steps: [
          'Toss the almonds with olive oil, paprika and salt.',
          'Roast at 180°C for 15 minutes, stirring once; cool before storing.'
        ],
        notes: 'Keep in an airtight jar for up to two weeks.'
      },
      zh: {
        name: '香料烤杏仁',
        time: '20 分钟',
        servings: '6 份',
        why: '香脆咸口批量零食，比买的调味坚果好太多。',
        ingredients: [
          '生杏仁 200g',
          '橄榄油 1 汤匙',
          '烟熏红椒粉 1 茶匙',
          '海盐 半茶匙'
        ],
        steps: [
          '杏仁拌橄榄油、红椒粉与盐。',
          '180°C 烤 15 分钟中途翻动，放凉后密封保存。'
        ],
        notes: '密封罐可存两周。'
      },
      macros: {
        protein: {
          g: 6,
          pct: 14
        },
        fat: {
          g: 14,
          pct: 74
        },
        netCarbs: {
          g: 5,
          pct: 12
        }
      }
    },
    {
      id: 's19',
      type: 'snack',
      carb: 'moderate',
      tags: [
        'no-cook',
        'quick-easy',
        'vegan',
        'vegetarian',
        'gluten-free'
      ],
      contains: [],
      focus: [
        'No-cook',
        'Quick & easy'
      ],
      img: 'coconut-yogurt-berry-parfait.jpg',
      emoji: '🫐',
      en: {
        name: 'Coconut Yogurt Berry Parfait',
        time: '3 min',
        servings: '1',
        why: 'A fully plant-based, no-cook snack with probiotics and antioxidants.',
        ingredients: [
          'Coconut yogurt 150g',
          'Mixed berries 1/3 cup',
          'Granola 2 tbsp (gluten-free)',
          'Chia seeds 1 tsp',
          'Maple syrup, a drizzle (optional)'
        ],
        steps: [
          'Layer coconut yogurt and berries in a glass.',
          'Top with granola, chia and maple syrup.'
        ],
        notes: 'Use unsweetened coconut yogurt to keep sugar low.'
      },
      zh: {
        name: '椰子酸奶莓果帕妃',
        time: '3 分钟',
        servings: '1 份',
        why: '全植物免烹零食，益生菌加抗氧化。',
        ingredients: [
          '椰子酸奶 150g',
          '混合莓果 1/3 杯',
          '格兰诺拉 2 汤匙（无麸质）',
          '奇亚籽 1 茶匙',
          '枫糖 少许（可选）'
        ],
        steps: [
          '椰子酸奶与莓果在杯中分层。',
          '撒格兰诺拉、奇亚籽与枫糖。'
        ],
        notes: '选无糖椰子酸奶保持低糖。'
      },
      macros: {
        protein: {
          g: 4,
          pct: 10
        },
        fat: {
          g: 10,
          pct: 55
        },
        netCarbs: {
          g: 14,
          pct: 35
        }
      }
    }
];

if (typeof window !== 'undefined') window.NEW_RECIPES = NEW_RECIPES;
