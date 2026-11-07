/* ============================================================================
   MICRONUTRIENT DATA  --  Per-serving values (mg unless noted) for each meal
   ----------------------------------------------------------------------------
   Fields (all per serving, matching the macros in meals.js / new-recipes.js):
     calcium   mg
     iron      mg
     sodium    mg
     potassium mg
     fibre     g  (grams, not mg)
     vitaminC  mg
   Values are estimated from USDA FoodData Central based on listed ingredients.
   The dietitian can refine these in the Recipe Library editor at runtime.
   ========================================================================== */

const MICROS = {
  /* ---- Breakfast (b1–b15, meals.js) ---- */
  'b1':  { calcium: 250, iron: 1.2, sodium: 80,  potassium: 380, fibre: 4,   vitaminC: 8  },
  'b2':  { calcium: 120, iron: 3.8, sodium: 350, potassium: 520, fibre: 2,   vitaminC: 18 },
  'b3':  { calcium: 180, iron: 2.1, sodium: 40,  potassium: 260, fibre: 8,   vitaminC: 2  },
  'b4':  { calcium: 80,  iron: 2.5, sodium: 420, potassium: 340, fibre: 1,   vitaminC: 5  },
  'b5':  { calcium: 60,  iron: 2.0, sodium: 380, potassium: 420, fibre: 4,   vitaminC: 60 },
  'b6':  { calcium: 100, iron: 1.5, sodium: 300, potassium: 400, fibre: 5,   vitaminC: 10 },
  'b7':  { calcium: 60,  iron: 1.8, sodium: 280, potassium: 200, fibre: 2,   vitaminC: 0  },
  'b8':  { calcium: 150, iron: 2.2, sodium: 480, potassium: 400, fibre: 5,   vitaminC: 15 },
  'b9':  { calcium: 80,  iron: 1.0, sodium: 250, potassium: 350, fibre: 4,   vitaminC: 6  },
  'b10': { calcium: 120, iron: 0.8, sodium: 200, potassium: 280, fibre: 3,   vitaminC: 10 },
  'b11': { calcium: 100, iron: 2.0, sodium: 380, potassium: 580, fibre: 5,   vitaminC: 25 },
  'b12': { calcium: 60,  iron: 1.8, sodium: 300, potassium: 480, fibre: 6,   vitaminC: 10 },
  'b13': { calcium: 150, iron: 2.5, sodium: 60,  potassium: 520, fibre: 5,   vitaminC: 40 },
  'b14': { calcium: 40,  iron: 1.5, sodium: 200, potassium: 180, fibre: 4,   vitaminC: 5  },
  'b15': { calcium: 180, iron: 2.8, sodium: 520, potassium: 500, fibre: 6,   vitaminC: 20 },

  /* ---- Lunch (l1–l14, meals.js) ---- */
  'l1':  { calcium: 80,  iron: 3.2, sodium: 420, potassium: 580, fibre: 5,   vitaminC: 22 },
  'l2':  { calcium: 60,  iron: 2.0, sodium: 580, potassium: 420, fibre: 3,   vitaminC: 15 },
  'l3':  { calcium: 40,  iron: 1.8, sodium: 350, potassium: 620, fibre: 5,   vitaminC: 20 },
  'l4':  { calcium: 50,  iron: 3.5, sodium: 380, potassium: 480, fibre: 8,   vitaminC: 18 },
  'l5':  { calcium: 60,  iron: 1.5, sodium: 900, potassium: 520, fibre: 3,   vitaminC: 8  },
  'l6':  { calcium: 80,  iron: 2.2, sodium: 450, potassium: 380, fibre: 4,   vitaminC: 10 },
  'l7':  { calcium: 120, iron: 2.0, sodium: 420, potassium: 480, fibre: 4,   vitaminC: 15 },
  'l8':  { calcium: 40,  iron: 1.5, sodium: 580, potassium: 520, fibre: 3,   vitaminC: 35 },
  'l9':  { calcium: 80,  iron: 2.8, sodium: 380, potassium: 420, fibre: 6,   vitaminC: 15 },
  'l10': { calcium: 80,  iron: 1.8, sodium: 680, potassium: 380, fibre: 3,   vitaminC: 10 },
  'l11': { calcium: 100, iron: 3.0, sodium: 320, potassium: 480, fibre: 6,   vitaminC: 18 },
  'l12': { calcium: 40,  iron: 1.2, sodium: 320, potassium: 380, fibre: 3,   vitaminC: 60 },
  'l13': { calcium: 50,  iron: 1.8, sodium: 380, potassium: 240, fibre: 2,   vitaminC: 5  },
  'l14': { calcium: 40,  iron: 2.5, sodium: 280, potassium: 420, fibre: 6,   vitaminC: 20 },

  /* ---- Dinner (d1–d16, meals.js) ---- */
  'd1':  { calcium: 60,  iron: 1.5, sodium: 320, potassium: 680, fibre: 5,   vitaminC: 60 },
  'd2':  { calcium: 120, iron: 2.0, sodium: 580, potassium: 580, fibre: 4,   vitaminC: 40 },
  'd3':  { calcium: 80,  iron: 3.5, sodium: 520, potassium: 620, fibre: 8,   vitaminC: 18 },
  'd4':  { calcium: 60,  iron: 2.0, sodium: 680, potassium: 520, fibre: 4,   vitaminC: 15 },
  'd5':  { calcium: 80,  iron: 2.5, sodium: 380, potassium: 680, fibre: 5,   vitaminC: 25 },
  'd6':  { calcium: 40,  iron: 1.5, sodium: 480, potassium: 420, fibre: 2,   vitaminC: 10 },
  'd7':  { calcium: 40,  iron: 1.8, sodium: 380, potassium: 480, fibre: 5,   vitaminC: 80 },
  'd8':  { calcium: 60,  iron: 1.0, sodium: 680, potassium: 420, fibre: 3,   vitaminC: 20 },
  'd9':  { calcium: 60,  iron: 2.0, sodium: 380, potassium: 680, fibre: 5,   vitaminC: 25 },
  'd10': { calcium: 40,  iron: 0.8, sodium: 420, potassium: 580, fibre: 2,   vitaminC: 10 },
  'd11': { calcium: 40,  iron: 1.8, sodium: 380, potassium: 420, fibre: 2,   vitaminC: 10 },
  'd12': { calcium: 120, iron: 2.5, sodium: 480, potassium: 480, fibre: 4,   vitaminC: 20 },
  'd13': { calcium: 40,  iron: 0.8, sodium: 320, potassium: 420, fibre: 2,   vitaminC: 10 },
  'd14': { calcium: 40,  iron: 1.2, sodium: 580, potassium: 520, fibre: 3,   vitaminC: 10 },
  'd15': { calcium: 80,  iron: 1.5, sodium: 280, potassium: 520, fibre: 6,   vitaminC: 25 },
  'd16': { calcium: 60,  iron: 2.0, sodium: 520, potassium: 480, fibre: 4,   vitaminC: 20 },

  /* ---- Snacks (s1–s13, meals.js) ---- */
  's1':  { calcium: 60,  iron: 0.8, sodium: 40,  potassium: 220, fibre: 5,   vitaminC: 8  },
  's2':  { calcium: 50,  iron: 1.2, sodium: 200, potassium: 130, fibre: 0,   vitaminC: 0  },
  's3':  { calcium: 40,  iron: 0.5, sodium: 180, potassium: 380, fibre: 4,   vitaminC: 15 },
  's4':  { calcium: 180, iron: 0.5, sodium: 60,  potassium: 260, fibre: 2,   vitaminC: 4  },
  's5':  { calcium: 80,  iron: 2.5, sodium: 280, potassium: 280, fibre: 6,   vitaminC: 5  },
  's6':  { calcium: 100, iron: 3.0, sodium: 200, potassium: 420, fibre: 4,   vitaminC: 8  },
  's7':  { calcium: 20,  iron: 1.5, sodium: 680, potassium: 180, fibre: 0,   vitaminC: 0  },
  's8':  { calcium: 120, iron: 1.5, sodium: 40,  potassium: 180, fibre: 6,   vitaminC: 2  },
  's9':  { calcium: 50,  iron: 1.0, sodium: 80,  potassium: 280, fibre: 3,   vitaminC: 5  },
  's10': { calcium: 120, iron: 0.5, sodium: 200, potassium: 180, fibre: 1,   vitaminC: 40 },
  's11': { calcium: 40,  iron: 0.8, sodium: 150, potassium: 220, fibre: 2,   vitaminC: 5  },
  's12': { calcium: 50,  iron: 1.2, sodium: 200, potassium: 280, fibre: 3,   vitaminC: 5  },
  's13': { calcium: 40,  iron: 1.0, sodium: 20,  potassium: 200, fibre: 3,   vitaminC: 2  },

  /* ---- Breakfast (b16–b23, new-recipes.js) ---- */
  'b16': { calcium: 150, iron: 2.0, sodium: 60,  potassium: 380, fibre: 6,   vitaminC: 8  },
  'b17': { calcium: 180, iron: 2.2, sodium: 40,  potassium: 240, fibre: 7,   vitaminC: 3  },
  'b18': { calcium: 80,  iron: 2.5, sodium: 420, potassium: 340, fibre: 1,   vitaminC: 5  },
  'b19': { calcium: 60,  iron: 1.8, sodium: 280, potassium: 200, fibre: 2,   vitaminC: 0  },
  'b20': { calcium: 60,  iron: 1.0, sodium: 250, potassium: 350, fibre: 4,   vitaminC: 6  },
  'b21': { calcium: 120, iron: 2.0, sodium: 380, potassium: 520, fibre: 3,   vitaminC: 25 },
  'b22': { calcium: 150, iron: 2.5, sodium: 60,  potassium: 520, fibre: 5,   vitaminC: 40 },
  'b23': { calcium: 120, iron: 0.8, sodium: 300, potassium: 280, fibre: 2,   vitaminC: 12 },

  /* ---- Lunch (l15–l21, new-recipes.js) ---- */
  'l15': { calcium: 40,  iron: 1.5, sodium: 380, potassium: 380, fibre: 4,   vitaminC: 8  },
  'l16': { calcium: 80,  iron: 2.5, sodium: 320, potassium: 420, fibre: 6,   vitaminC: 20 },
  'l17': { calcium: 40,  iron: 1.0, sodium: 480, potassium: 520, fibre: 3,   vitaminC: 15 },
  'l18': { calcium: 50,  iron: 2.0, sodium: 380, potassium: 480, fibre: 7,   vitaminC: 18 },
  'l19': { calcium: 60,  iron: 1.5, sodium: 420, potassium: 420, fibre: 4,   vitaminC: 35 },
  'l20': { calcium: 40,  iron: 1.5, sodium: 480, potassium: 320, fibre: 3,   vitaminC: 10 },
  'l21': { calcium: 60,  iron: 2.0, sodium: 380, potassium: 420, fibre: 6,   vitaminC: 15 },

  /* ---- Dinner (d17–d21, new-recipes.js) ---- */
  'd17': { calcium: 80,  iron: 3.5, sodium: 380, potassium: 580, fibre: 8,   vitaminC: 15 },
  'd18': { calcium: 60,  iron: 2.0, sodium: 420, potassium: 620, fibre: 4,   vitaminC: 30 },
  'd19': { calcium: 40,  iron: 1.5, sodium: 480, potassium: 420, fibre: 3,   vitaminC: 15 },
  'd20': { calcium: 120, iron: 1.8, sodium: 380, potassium: 420, fibre: 4,   vitaminC: 20 },
  'd21': { calcium: 80,  iron: 2.0, sodium: 380, potassium: 420, fibre: 7,   vitaminC: 10 },

  /* ---- Snacks (s14–s19, new-recipes.js) ---- */
  's14': { calcium: 120, iron: 0.5, sodium: 200, potassium: 220, fibre: 1,   vitaminC: 12 },
  's15': { calcium: 40,  iron: 0.8, sodium: 380, potassium: 280, fibre: 1,   vitaminC: 10 },
  's16': { calcium: 50,  iron: 1.0, sodium: 60,  potassium: 200, fibre: 3,   vitaminC: 2  },
  's17': { calcium: 40,  iron: 1.5, sodium: 320, potassium: 320, fibre: 4,   vitaminC: 15 },
  's18': { calcium: 40,  iron: 1.2, sodium: 20,  potassium: 200, fibre: 3,   vitaminC: 2  },
  's19': { calcium: 120, iron: 1.5, sodium: 40,  potassium: 180, fibre: 4,   vitaminC: 8  }
};
