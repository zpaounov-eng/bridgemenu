# Menu Live

Static PWA prototype for a menu recipe app.

## Features

- Items and Live tabs
- Searchable item blocks
- Tap to expand ingredients
- Plus button to add items to Live
- Editable item name, ingredients, category, aliases, photo, and video
- Editable steps, common mistakes, serve-with items, and packing notes
- Shared library entries for ingredients, common mistakes, serve-with, and packing media
- Preloaded with 281 Sofia menu item names from the provided CSV files
- CSV import with `name`, `ingredients`, `category`, and `aliases` columns
- Camera or image-upload OCR using Tesseract.js
- Supabase-backed menu item loading and editing across devices

## CSV format

```csv
name,ingredients,category,aliases
Chicken Bowl,"chicken,rice,beans,salsa",Entree,"chicken rice bowl,bowl chicken"
Veggie Wrap,"tortilla,lettuce,tomato,hummus",Wrap,"vegetable wrap,veg wrap"
```

## Running locally

Use a local server so camera permissions and the service worker behave like a deployed site:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Vercel path

This deploys as a static site on Vercel and uses Supabase as the shared menu data source.

## Supabase

The first Supabase schema is designed for restaurants, menu categories, menu items, shared library entries, and live sessions. Use `scripts/seed-supabase-rest.mjs` to seed Sofia data from `menu-data.js`.
