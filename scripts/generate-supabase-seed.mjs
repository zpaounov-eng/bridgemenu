import fs from "node:fs";

const data = fs.readFileSync("menu-data.js", "utf8");
const items = JSON.parse(data.replace(/^window\.MENU_SEED_ITEMS = /, "").replace(/;\n?$/, ""));
const categories = [...new Set(items.map((item) => item.category))];
const esc = (value) => String(value).replace(/'/g, "''");

let sql = "insert into public.restaurants (name, slug) values ('Sofia', 'sofia') on conflict (slug) do nothing;\n";

sql += "with r as (select id from public.restaurants where slug='sofia')\n";
sql += "insert into public.menu_categories (restaurant_id, name, sort_order)\nvalues\n";
sql += categories.map((category, index) => `((select id from r), '${esc(category)}', ${index})`).join(",\n");
sql += "\non conflict (restaurant_id, name) do nothing;\n";

sql += "with r as (select id from public.restaurants where slug='sofia')\n";
sql += "insert into public.menu_items ";
sql += "(restaurant_id, category_id, external_id, name, ingredients, steps, mistakes, serve_with, packaging, aliases)\nvalues\n";
sql += items
  .map((item) => {
    return `((select id from r), (select id from public.menu_categories where restaurant_id=(select id from r) and name='${esc(item.category)}'), '${esc(item.id)}', '${esc(item.name)}', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb)`;
  })
  .join(",\n");
sql += "\non conflict (restaurant_id, external_id) do nothing;\n";

fs.writeFileSync("/private/tmp/bridgemenu_seed.sql", sql);
console.log(JSON.stringify({ items: items.length, categories: categories.length, bytes: sql.length }));
