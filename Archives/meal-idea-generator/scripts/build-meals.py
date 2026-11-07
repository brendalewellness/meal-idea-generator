# -*- coding: utf-8 -*-
"""Generate data/meals.js from scripts/_meals_src.py"""
import json, os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _meals_src import MEALS

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'data', 'meals.js')

HEADER = """/* ============================================================================
   MEAL LIBRARY  --  Recipe library (editable at runtime via the UI)
   ----------------------------------------------------------------------------
   Field reference:
     id        unique id
     type      breakfast | lunch | dinner | snack
     carb      low | moderate
     tags      filter tags (multi-select):
               gut-healing . asian . quick-easy . no-cook . batch-cook
               high-protein . vegetarian . vegan . gluten-free
     contains  allergens present (for "avoid" filter):
               dairy . gluten . nuts . egg . soy . fish . shellfish . sesame
     focus     EDITABLE display labels shown on the card / handout
               (defaults below mirror the tag-derived labels; the user can
                override these via the Recipe Library editor without
                touching the filter tags)
     img       image filename in /images, OR a data: URI (uploaded via UI),
               OR null to use the emoji placeholder
     emoji     placeholder icon (used when img is null)
     macros    per-serving nutrition: { protein, fat, netCarbs }
               each with { g, pct }  (grams + % of calories from that macro)
     en / zh   bilingual copy, each with:
               name . time . servings . why . ingredients[] . steps[] . notes
   ========================================================================== */

const MEALS = """

def py_to_js(obj, indent=0):
    """Convert python dict/list/primitives to a JS-literal string.
       Keeps ASCII quotes only and outputs JS object literal (not JSON),
       so the file is plain JS that loads directly."""
    pad = '  ' * indent
    if isinstance(obj, dict):
        if not obj:
            return '{}'
        items = []
        for k, v in obj.items():
            items.append(f"{pad}  {k}: {py_to_js(v, indent+1)}")
        return '{\n' + ',\n'.join(items) + '\n' + pad + '}'
    if isinstance(obj, list):
        if not obj:
            return '[]'
        items = [pad + '  ' + py_to_js(x, indent+1) for x in obj]
        return '[\n' + ',\n'.join(items) + '\n' + pad + ']'
    if isinstance(obj, bool):
        return 'true' if obj else 'false'
    if isinstance(obj, (int, float)):
        return str(obj)
    if obj is None:
        return 'null'
    s = str(obj).replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')
    return f"'{s}'"

# Convert each meal dict, expanding macros into { protein:{g,pct}, ... }
def expand_macros(meal):
    m = dict(meal)
    raw = m.pop('macros')
    m['macros'] = {
        'protein':  { 'g': raw['protein'][0],    'pct': raw['protein'][1] },
        'fat':      { 'g': raw['fat'][0],        'pct': raw['fat'][1] },
        'netCarbs': { 'g': raw['netCarbs'][0],   'pct': raw['netCarbs'][1] },
    }
    return m

expanded = [expand_macros(m) for m in MEALS]

# Render the MEALS array as JS
body = py_to_js(expanded, 1)

footer = """

/* Expose to browser */
if (typeof window !== 'undefined') window.MEALS = MEALS;
"""

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(HEADER + body + footer)

# Stats
from collections import Counter
by_type = Counter(m['type'] for m in MEALS)
print(f'Wrote {OUT}')
print(f'  total: {len(MEALS)} meals')
for t in ['breakfast','lunch','dinner','snack']:
    print(f'    {t:10s}: {by_type[t]}')
print(f'  file size: {os.path.getsize(OUT)} bytes')
