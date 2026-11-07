# Meal Idea Generator — Project Notes

## Branding
- Practice: Brenda Le Wellness
- Practitioner: Brenda Le, RD
- Brand colors: --brand-dark #495a58, --brand-coral #d4967d, --brand-cream #dcd9d0
- Fonts: Lora (headings), Source Sans Pro (body) via Google Fonts
- Logos: images/logo-icon.png, images/logo-wordmark.png

## Architecture
- Single-page app: index.html with inline CSS/JS
- Data: data/meals.js (58 base recipes) + data/new-recipes.js (26 added recipes) = 84 total
- Persistence: localStorage keys mig_state_v3 (plan state), mig_recipes_v2 (custom recipes), mig_week_v1 (7-day plan)
- PDF export: browser print (window.print) with @media print CSS
- Build: build-standalone.py inlines images + scripts into single HTML file

## Recipe data model
- Each recipe: id, type, carb, tags[], contains[], focus[], img, emoji, en{}, zh{}, macros{}
- macros: { protein:{g,pct}, fat:{g,pct}, netCarbs:{g,pct} }
- Custom recipes: stored in localStorage, merged at runtime with base recipes
- Built-in recipes can be overridden (edits) or deleted (hidden)

## Validation
- Run: `node validate-meals.js`
- Checks: recipe structure, bilingual completeness, tag/allergen logic, macros, focus, image refs, HTML syntax, i18n keys

## Key design decisions
- 3-day plan (was 2-day), day headings editable
- 7-day generator uses "natural repeat" strategy for realistic meal repetition
- Macros optional in handout via checkbox toggle
