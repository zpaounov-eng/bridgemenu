# Menu Live

Static PWA prototype for a menu recipe app.

## Features

- Items and Live tabs
- Searchable item blocks
- Tap to expand ingredients
- Plus button to add items to Live
- Editable item name, ingredients, category, aliases, photo, and video
- Preloaded with 281 Sofia menu item names from the provided CSV files
- CSV import with `name`, `ingredients`, `category`, and `aliases` columns
- Camera or image-upload OCR using Tesseract.js
- Local PWA storage through `localStorage`

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

This can deploy as a static site immediately. For shared editing across devices, replace `localStorage` with Supabase, Neon, or Vercel Postgres and move media files to object storage such as Supabase Storage or Vercel Blob.
