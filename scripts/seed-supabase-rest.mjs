import fs from "node:fs";

const SUPABASE_URL = "https://lfktexztaiaqazxiwosz.supabase.co";
const SUPABASE_KEY = "sb_publishable_3P5IfNNgYiot4GK7mSscXg__RkKQ6zb";

const data = fs.readFileSync("menu-data.js", "utf8");
const items = JSON.parse(data.replace(/^window\.MENU_SEED_ITEMS = /, "").replace(/;\n?$/, ""));
const categories = [...new Set(items.map((item) => item.category))];

async function request(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation,resolution=merge-duplicates",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
  }
  if (response.status === 204) return [];
  return response.json();
}

const [restaurant] = await request("restaurants?on_conflict=slug", {
  method: "POST",
  body: JSON.stringify([{ name: "Sofia", slug: "sofia" }]),
});

const categoryRows = await request("menu_categories?on_conflict=restaurant_id,name", {
  method: "POST",
  body: JSON.stringify(
    categories.map((name, sort_order) => ({
      restaurant_id: restaurant.id,
      name,
      sort_order,
    })),
  ),
});

const categoryIds = new Map(categoryRows.map((category) => [category.name, category.id]));
const rows = items.map((item) => ({
  restaurant_id: restaurant.id,
  category_id: categoryIds.get(item.category),
  external_id: item.id,
  name: item.name,
  ingredients: item.ingredients || [],
  steps: item.steps || [],
  mistakes: item.mistakes || [],
  serve_with: item.serveWith || [],
  packaging: item.packaging || [],
  aliases: item.aliases || [],
}));

for (let index = 0; index < rows.length; index += 100) {
  await request("menu_items?on_conflict=restaurant_id,external_id", {
    method: "POST",
    body: JSON.stringify(rows.slice(index, index + 100)),
  });
}

console.log(JSON.stringify({ restaurant: restaurant.name, categories: categoryRows.length, items: rows.length }));
