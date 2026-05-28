const STORAGE_KEY = "menu-live-items-v1";
const LIVE_KEY = "menu-live-active-v1";
const LANG_KEY = "menu-live-language-v1";
const LIBRARY_KEY = "menu-live-library-v1";

const seedItems = window.MENU_SEED_ITEMS || [];
const FIELD_DEFS = [
  { key: "ingredients", libraryKey: "ingredients", label: "ingredients" },
  { key: "steps", libraryKey: null, label: "steps" },
  { key: "mistakes", libraryKey: "mistakes", label: "mistakes" },
  { key: "serveWith", libraryKey: "serveWith", label: "serveWith" },
  { key: "packaging", libraryKey: "packaging", label: "packaging" },
];
const LIBRARY_DEFS = [
  { key: "ingredients", label: "ingredients" },
  { key: "mistakes", label: "mistakes" },
  { key: "serveWith", label: "serveWith" },
  { key: "packaging", label: "packaging" },
];
const translations = {
  en: {
    language: "Language",
    install: "Install",
    items: "Items",
    live: "Live",
    library: "Library",
    search: "Search",
    searchPlaceholder: "Item, ingredient, alias...",
    librarySearch: "Search Library",
    librarySearchPlaceholder: "Ingredient, mistake, serve with, packing...",
    emptyLibrary: "No library entries yet.",
    importCsv: "Import CSV",
    newItem: "New Item",
    emptyItems: "No items match that search.",
    activeItems: "Active items",
    liveList: "Today's live list",
    scanSlip: "Scan Slip",
    clear: "Clear",
    emptyLive: "Add items manually or scan a printed slip.",
    editItem: "Edit Item",
    itemName: "Item name",
    ingredients: "Ingredients",
    steps: "Steps",
    mistakes: "Common mistakes",
    serveWith: "Serve with",
    packaging: "Packing",
    ingredientsPlaceholder: "One ingredient per line or comma separated",
    stepsPlaceholder: "One step per line or comma separated",
    mistakesPlaceholder: "One mistake per line or comma separated",
    serveWithPlaceholder: "One serve-with item per line or comma separated",
    packagingPlaceholder: "One packing item per line or comma separated",
    aliases: "Aliases",
    aliasesPlaceholder: "Optional OCR-friendly names, one per line",
    category: "Category",
    media: "Photo or video",
    delete: "Delete",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
    useImage: "Use Image",
    captureText: "Capture Text",
    scanHelp: "Camera OCR works on HTTPS or localhost. Deployed Vercel is fine.",
    scanPlaceholder: "OCR text appears here. You can edit it and match again.",
    matchText: "Match Text",
    addMatches: "Add Matches",
    uncategorized: "Uncategorized",
    noIngredients: "No ingredients yet",
    noEntries: "Nothing added yet",
    ingredientCount: "ingredients",
    addToLive: "Add to Live",
    removeFromLive: "Remove from Live",
    editTitle: "Edit item",
    startingCamera: "Starting camera...",
    aimAtSlip: "Aim at the slip, then capture text.",
    cameraUnavailable: "Camera unavailable here. Upload a slip image instead.",
    ocrMissing: "OCR library did not load. Check the internet connection or deploy to Vercel.",
    readingText: "Reading text...",
    loadingOcr: "Loading OCR...",
    noMatches: "No matches yet. Edit the text or add aliases to items.",
    matched: "Matched",
    itemWord: "item",
    itemsWord: "items",
    viewPhoto: "View photo",
    addPhoto: "Add photo",
    libraryEntry: "Library Entry",
    name: "Name",
    libraryCategory: "Library category",
    removeMedia: "Remove media",
    photo: "Photo",
    usedIn: "Used in",
  },
  es: {
    language: "Idioma",
    install: "Instalar",
    items: "Articulos",
    live: "Activo",
    library: "Biblioteca",
    search: "Buscar",
    searchPlaceholder: "Articulo, ingrediente, alias...",
    librarySearch: "Buscar biblioteca",
    librarySearchPlaceholder: "Ingrediente, error, acompanar, empaque...",
    emptyLibrary: "Todavia no hay entradas en la biblioteca.",
    importCsv: "Importar CSV",
    newItem: "Nuevo articulo",
    emptyItems: "No hay articulos para esa busqueda.",
    activeItems: "Articulos activos",
    liveList: "Lista activa de hoy",
    scanSlip: "Escanear nota",
    clear: "Limpiar",
    emptyLive: "Agrega articulos manualmente o escanea una nota impresa.",
    editItem: "Editar articulo",
    itemName: "Nombre del articulo",
    ingredients: "Ingredientes",
    steps: "Pasos",
    mistakes: "Errores comunes",
    serveWith: "Servir con",
    packaging: "Empaque",
    ingredientsPlaceholder: "Un ingrediente por linea o separado por comas",
    stepsPlaceholder: "Un paso por linea o separado por comas",
    mistakesPlaceholder: "Un error por linea o separado por comas",
    serveWithPlaceholder: "Un articulo por linea o separado por comas",
    packagingPlaceholder: "Un empaque por linea o separado por comas",
    aliases: "Alias",
    aliasesPlaceholder: "Nombres opcionales para OCR, uno por linea",
    category: "Categoria",
    media: "Foto o video",
    delete: "Borrar",
    cancel: "Cancelar",
    save: "Guardar",
    close: "Cerrar",
    useImage: "Usar imagen",
    captureText: "Capturar texto",
    scanHelp: "OCR con camara funciona en HTTPS o localhost. Vercel esta bien.",
    scanPlaceholder: "El texto OCR aparece aqui. Puedes editarlo y buscar otra vez.",
    matchText: "Buscar coincidencias",
    addMatches: "Agregar coincidencias",
    uncategorized: "Sin categoria",
    noIngredients: "Sin ingredientes todavia",
    noEntries: "Nada agregado todavia",
    ingredientCount: "ingredientes",
    addToLive: "Agregar a Activo",
    removeFromLive: "Quitar de Activo",
    editTitle: "Editar articulo",
    startingCamera: "Iniciando camara...",
    aimAtSlip: "Apunta a la nota y captura el texto.",
    cameraUnavailable: "Camara no disponible aqui. Sube una imagen de la nota.",
    ocrMissing: "No cargo la libreria OCR. Revisa internet o despliega en Vercel.",
    readingText: "Leyendo texto...",
    loadingOcr: "Cargando OCR...",
    noMatches: "Sin coincidencias. Edita el texto o agrega alias a los articulos.",
    matched: "Coinciden",
    itemWord: "articulo",
    itemsWord: "articulos",
    viewPhoto: "Ver foto",
    addPhoto: "Agregar foto",
    libraryEntry: "Entrada de biblioteca",
    name: "Nombre",
    libraryCategory: "Categoria de biblioteca",
    removeMedia: "Quitar media",
    photo: "Foto",
    usedIn: "Usado en",
  },
};

const categoryTranslations = {
  Appetizers: "Aperitivos",
  Beverage: "Bebidas",
  Breadsticks: "Palitos de pan",
  "Chicken Wings and Tenders": "Alitas y tenders",
  "Cold Subs": "Subs frios",
  Desserts: "Postres",
  Dinners: "Cenas",
  HamBurgers: "Hamburguesas",
  "Homemade Soups": "Sopas caseras",
  "Hot Subs": "Subs calientes",
  Nachos: "Nachos",
  "No Sauce Pizzas": "Pizzas sin salsa",
  "Panini Sandwiches": "Paninis",
  Pasta: "Pasta",
  "Plain Cheese Pizza": "Pizza de queso",
  Quesadillas: "Quesadillas",
  "Roll Up Wraps": "Wraps",
  Salad: "Ensaladas",
  Sandwiches: "Sandwiches",
  "Sofia Combo Meals Special": "Combos especiales de Sofia",
  "Sofia's Specialty Pizzas and Calzones": "Pizzas especiales y calzones de Sofia",
  "Specialty Subs": "Subs especiales",
  "Steak and Cheese Subs": "Subs de steak and cheese",
  "Waffle Fries": "Papas waffle",
};

let items = loadItems();
let liveIds = loadLiveIds();
let language = loadLanguage();
let libraryEntries = loadLibrary();
let openIds = new Set();
let selectedCategory = null;
let currentMatches = [];
let deferredInstallPrompt = null;
let stream = null;
let tesseractLoad = null;

const $ = (selector) => document.querySelector(selector);

const els = {
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  languageButtons: document.querySelectorAll("[data-language]"),
  itemList: $("#itemList"),
  liveList: $("#liveList"),
  libraryList: $("#libraryList"),
  liveCount: $("#liveCount"),
  searchInput: $("#searchInput"),
  backToCategoriesBtn: $("#backToCategoriesBtn"),
  librarySearchInput: $("#librarySearchInput"),
  emptyItems: $("#emptyItems"),
  emptyLive: $("#emptyLive"),
  emptyLibrary: $("#emptyLibrary"),
  newItemBtn: $("#newItemBtn"),
  csvInput: $("#csvInput"),
  itemDialog: $("#itemDialog"),
  itemForm: $("#itemForm"),
  itemDialogTitle: $("#itemDialogTitle"),
  itemId: $("#itemId"),
  itemName: $("#itemName"),
  itemIngredients: $("#itemIngredients"),
  itemSteps: $("#itemSteps"),
  itemMistakes: $("#itemMistakes"),
  itemServeWith: $("#itemServeWith"),
  itemPackaging: $("#itemPackaging"),
  itemAliases: $("#itemAliases"),
  itemCategory: $("#itemCategory"),
  itemMedia: $("#itemMedia"),
  mediaPreview: $("#mediaPreview"),
  deleteItemBtn: $("#deleteItemBtn"),
  clearLiveBtn: $("#clearLiveBtn"),
  scanBtn: $("#scanBtn"),
  scanDialog: $("#scanDialog"),
  cameraVideo: $("#cameraVideo"),
  captureCanvas: $("#captureCanvas"),
  captureBtn: $("#captureBtn"),
  scanStatus: $("#scanStatus"),
  scanText: $("#scanText"),
  scanMatches: $("#scanMatches"),
  matchTextBtn: $("#matchTextBtn"),
  addMatchesBtn: $("#addMatchesBtn"),
  scanImageInput: $("#scanImageInput"),
  installBtn: $("#installBtn"),
  libraryDialog: $("#libraryDialog"),
  libraryForm: $("#libraryForm"),
  libraryDialogTitle: $("#libraryDialogTitle"),
  libraryKey: $("#libraryKey"),
  libraryName: $("#libraryName"),
  libraryCategory: $("#libraryCategory"),
  libraryMedia: $("#libraryMedia"),
  libraryMediaPreview: $("#libraryMediaPreview"),
  removeLibraryMediaBtn: $("#removeLibraryMediaBtn"),
  mediaDialog: $("#mediaDialog"),
  mediaDialogTitle: $("#mediaDialogTitle"),
  mediaDialogBody: $("#mediaDialogBody"),
};

render();
bindEvents();
registerServiceWorker();

function loadItems() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return seedItems.map(normalizeItemRecord);
  const storedItems = JSON.parse(stored).map(normalizeItemRecord);
  const hasOldDemoItems = storedItems.some((item) => ["Chicken Bowl", "Veggie Wrap"].includes(item.name));
  if (hasOldDemoItems && storedItems.length <= 2) return seedItems.map(normalizeItemRecord);
  return mergeSeedWithStored(seedItems, storedItems);
}

function normalizeItemRecord(item) {
  return {
    id: item.id || crypto.randomUUID(),
    name: item.name || "",
    ingredients: item.ingredients || [],
    steps: item.steps || [],
    mistakes: item.mistakes || item.commonMistakes || [],
    serveWith: item.serveWith || [],
    packaging: item.packaging || item.packing || [],
    aliases: item.aliases || [],
    category: item.category || "",
    media: item.media || null,
  };
}

function mergeSeedWithStored(seed, stored) {
  const storedById = new Map(stored.map((item) => [item.id, item]));
  const merged = seed.map((item) => storedById.get(item.id) || normalizeItemRecord(item));
  const seedIds = new Set(seed.map((item) => item.id));
  return [...merged, ...stored.filter((item) => !seedIds.has(item.id))];
}

function loadLiveIds() {
  return JSON.parse(localStorage.getItem(LIVE_KEY) || "[]");
}

function loadLanguage() {
  const stored = localStorage.getItem(LANG_KEY);
  return stored && translations[stored] ? stored : "en";
}

function loadLibrary() {
  const stored = JSON.parse(localStorage.getItem(LIBRARY_KEY) || "{}");
  return mergeLibraryEntries(stored);
}

function mergeLibraryEntries(stored) {
  const existing = stored && typeof stored === "object" ? stored : {};
  const merged = { ...existing };
  items.forEach((item) => {
    FIELD_DEFS.filter((field) => field.libraryKey).forEach((field) => {
      (item[field.key] || []).forEach((value) => {
        const key = libraryEntryKey(field.libraryKey, value);
        merged[key] = {
          key,
          name: merged[key]?.name || value,
          category: field.libraryKey,
          media: merged[key]?.media || null,
        };
      });
    });
  });
  return merged;
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function saveLive() {
  localStorage.setItem(LIVE_KEY, JSON.stringify(liveIds));
}

function saveLibrary() {
  localStorage.setItem(LIBRARY_KEY, JSON.stringify(libraryEntries));
}

function bindEvents() {
  els.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.language;
      localStorage.setItem(LANG_KEY, language);
      render();
    });
  });

  els.librarySearchInput.addEventListener("input", renderLibrary);
  els.libraryForm.addEventListener("submit", saveLibraryFromDialog);
  els.removeLibraryMediaBtn.addEventListener("click", removeCurrentLibraryMedia);
  document.querySelectorAll("[data-close-library]").forEach((button) => {
    button.addEventListener("click", () => els.libraryDialog.close());
  });
  document.querySelectorAll("[data-close-media]").forEach((button) => {
    button.addEventListener("click", () => els.mediaDialog.close());
  });

  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => setTab(tab.dataset.tab));
  });

  els.searchInput.addEventListener("input", renderItems);
  els.backToCategoriesBtn.addEventListener("click", () => {
    selectedCategory = null;
    els.searchInput.value = "";
    renderItems();
  });
  els.newItemBtn.addEventListener("click", () => openItemDialog());
  els.csvInput.addEventListener("change", importCsv);
  els.itemForm.addEventListener("submit", saveItemFromDialog);
  els.deleteItemBtn.addEventListener("click", deleteCurrentItem);
  els.clearLiveBtn.addEventListener("click", () => {
    liveIds = [];
    saveLive();
    render();
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => els.itemDialog.close());
  });

  els.scanBtn.addEventListener("click", openScanDialog);
  document.querySelectorAll("[data-close-scan]").forEach((button) => {
    button.addEventListener("click", closeScanDialog);
  });
  els.captureBtn.addEventListener("click", captureAndOcr);
  els.scanImageInput.addEventListener("change", ocrUploadedImage);
  els.matchTextBtn.addEventListener("click", () => {
    currentMatches = matchItems(els.scanText.value);
    renderMatches();
  });
  els.addMatchesBtn.addEventListener("click", addMatchesToLive);

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    els.installBtn.classList.remove("hidden");
  });
  els.installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt = null;
    els.installBtn.classList.add("hidden");
  });
}

function setTab(tabName) {
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
  els.views.forEach((view) => view.classList.toggle("is-active", view.id === `${tabName}View`));
}

function render() {
  applyLanguage();
  libraryEntries = mergeLibraryEntries(libraryEntries);
  renderItems();
  renderLive();
  renderLibrary();
  els.liveCount.textContent = liveIds.length;
}

function tr(key) {
  return translations[language]?.[key] || translations.en[key] || key;
}

function displayCategory(category) {
  if (language !== "es") return category || tr("uncategorized");
  return categoryTranslations[category] || category || tr("uncategorized");
}

function applyLanguage() {
  document.documentElement.lang = language;
  els.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
  });
  els.installBtn.textContent = tr("install");
  els.installBtn.title = tr("install");
  document.querySelector('[data-tab="items"]').textContent = tr("items");
  document.querySelector('[data-tab="live"]').innerHTML = `${tr("live")} <span id="liveCount">${liveIds.length}</span>`;
  document.querySelector('[data-tab="library"]').textContent = tr("library");
  els.liveCount = $("#liveCount");
  document.querySelector("#itemsView .search-field span").textContent = tr("search");
  els.searchInput.placeholder = tr("searchPlaceholder");
  document.querySelector("#libraryView .search-field span").textContent = tr("librarySearch");
  els.librarySearchInput.placeholder = tr("librarySearchPlaceholder");
  document.querySelector("#itemsView .file-btn").childNodes[0].textContent = tr("importCsv");
  els.newItemBtn.textContent = tr("newItem");
  els.emptyItems.textContent = tr("emptyItems");
  document.querySelector("#liveView .eyebrow").textContent = tr("activeItems");
  document.querySelector("#liveView h2").textContent = tr("liveList");
  els.scanBtn.textContent = tr("scanSlip");
  els.clearLiveBtn.textContent = tr("clear");
  els.emptyLive.textContent = tr("emptyLive");
  els.itemName.closest("label").childNodes[0].textContent = tr("itemName");
  els.itemIngredients.closest("label").childNodes[0].textContent = tr("ingredients");
  els.itemIngredients.placeholder = tr("ingredientsPlaceholder");
  els.itemSteps.closest("label").childNodes[0].textContent = tr("steps");
  els.itemSteps.placeholder = tr("stepsPlaceholder");
  els.itemMistakes.closest("label").childNodes[0].textContent = tr("mistakes");
  els.itemMistakes.placeholder = tr("mistakesPlaceholder");
  els.itemServeWith.closest("label").childNodes[0].textContent = tr("serveWith");
  els.itemServeWith.placeholder = tr("serveWithPlaceholder");
  els.itemPackaging.closest("label").childNodes[0].textContent = tr("packaging");
  els.itemPackaging.placeholder = tr("packagingPlaceholder");
  els.itemAliases.closest("label").childNodes[0].textContent = tr("aliases");
  els.itemAliases.placeholder = tr("aliasesPlaceholder");
  els.itemCategory.closest("label").childNodes[0].textContent = tr("category");
  els.itemMedia.closest("label").childNodes[0].textContent = tr("media");
  els.deleteItemBtn.textContent = tr("delete");
  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    if (!button.classList.contains("icon-btn")) button.textContent = tr("cancel");
    button.title = tr("close");
  });
  els.itemForm.querySelector('button[type="submit"]').textContent = tr("save");
  els.scanDialog.querySelector(".dialog-head h2").textContent = tr("scanSlip");
  document.querySelector("[data-close-scan]").title = tr("close");
  els.scanDialog.querySelector(".file-btn").childNodes[0].textContent = tr("useImage");
  els.captureBtn.textContent = tr("captureText");
  if (!els.scanDialog.open && !els.scanText.value) els.scanStatus.textContent = tr("scanHelp");
  els.scanText.placeholder = tr("scanPlaceholder");
  els.matchTextBtn.textContent = tr("matchText");
  els.addMatchesBtn.textContent = tr("addMatches");
  els.emptyLibrary.textContent = tr("emptyLibrary");
  els.libraryDialogTitle.textContent = tr("libraryEntry");
  els.libraryName.closest("label").childNodes[0].textContent = tr("name");
  els.libraryCategory.closest("label").childNodes[0].textContent = tr("libraryCategory");
  els.libraryMedia.closest("label").childNodes[0].textContent = tr("media");
  els.removeLibraryMediaBtn.textContent = tr("removeMedia");
  document.querySelectorAll("[data-close-library]").forEach((button) => {
    if (!button.classList.contains("icon-btn")) button.textContent = tr("cancel");
    button.title = tr("close");
  });
  els.libraryForm.querySelector('button[type="submit"]').textContent = tr("save");
  document.querySelector("[data-close-media]").title = tr("close");
}

function renderItems() {
  const query = normalize(els.searchInput.value);
  const filtered = items.filter((item) => {
    const matchesSearch = !query || searchableText(item).includes(query);
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  els.backToCategoriesBtn.classList.toggle("hidden", !selectedCategory && !query);
  els.itemList.innerHTML = !selectedCategory && !query ? renderCategoryHome(items) : renderCategorySections(filtered);
  els.emptyItems.classList.toggle("hidden", filtered.length > 0);
  bindCategoryCards();
  bindItemCards(els.itemList);
}

function renderCategoryHome(sourceItems) {
  const grouped = sourceItems.reduce((groups, item) => {
    const category = item.category || tr("uncategorized");
    groups.set(category, (groups.get(category) || 0) + 1);
    return groups;
  }, new Map());

  return `
    <div class="category-grid">
      ${Array.from(grouped.entries())
        .map(
          ([category, count]) => `
            <button class="category-card" type="button" data-category="${escapeHtml(category)}">
              <span>${escapeHtml(displayCategory(category))}</span>
              <strong>${count}</strong>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function bindCategoryCards() {
  els.itemList.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderItems();
    });
  });
}

function renderCategorySections(filteredItems) {
  const grouped = filteredItems.reduce((groups, item) => {
    const category = item.category || tr("uncategorized");
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category).push(item);
    return groups;
  }, new Map());

  return Array.from(grouped.entries())
    .map(
      ([category, categoryItems]) => `
        <section class="category-section">
          <div class="category-head">
            <h2>${escapeHtml(displayCategory(category))}</h2>
            <span>${categoryItems.length}</span>
          </div>
          <div class="category-items">
            ${categoryItems.map((item) => itemCard(item)).join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderLive() {
  const activeItems = liveIds.map((id) => items.find((item) => item.id === id)).filter(Boolean);
  els.liveList.innerHTML = activeItems.map((item) => itemCard(item, true)).join("");
  els.emptyLive.classList.toggle("hidden", activeItems.length > 0);
  bindItemCards(els.liveList);
}

function renderLibrary() {
  if (!els.libraryList) return;
  const query = normalize(els.librarySearchInput.value);
  const entries = Object.values(libraryEntries).filter((entry) => {
    return !query || normalize([entry.name, tr(entry.category), entry.category].join(" ")).includes(query);
  });
  els.libraryList.innerHTML = LIBRARY_DEFS.map((definition) => {
    const groupEntries = entries
      .filter((entry) => entry.category === definition.key)
      .sort((a, b) => a.name.localeCompare(b.name));
    if (!groupEntries.length) return "";
    return `
      <section class="library-group">
        <div class="category-head">
          <h2>${tr(definition.label)}</h2>
          <span>${groupEntries.length}</span>
        </div>
        <div class="library-grid">
          ${groupEntries
            .map(
              (entry) => `
                <button class="library-entry" type="button" data-edit-library="${escapeHtml(entry.key)}">
                  <span>
                    <strong>${escapeHtml(entry.name)}</strong><br />
                    ${entry.media ? tr("viewPhoto") : tr("addPhoto")}
                  </span>
                  <span>${entry.media ? "●" : "+"}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }).join("");
  els.emptyLibrary?.classList.toggle("hidden", entries.length > 0);
  els.libraryList.querySelectorAll("[data-edit-library]").forEach((button) => {
    button.addEventListener("click", () => openLibraryDialog(button.dataset.editLibrary));
  });
}

async function saveLibraryFromDialog(event) {
  event.preventDefault();
  const currentKey = els.libraryKey.value;
  const current = libraryEntries[currentKey] || {};
  const name = els.libraryName.value.trim();
  const category = els.libraryCategory.value;
  const nextKey = libraryEntryKey(category, name);
  const mediaFile = els.libraryMedia.files[0];
  const media = mediaFile ? await readFileAsDataUrl(mediaFile) : current.media || null;
  if (currentKey && currentKey !== nextKey) delete libraryEntries[currentKey];
  libraryEntries[nextKey] = { key: nextKey, name, category, media };
  saveLibrary();
  els.libraryDialog.close();
  render();
}

function removeCurrentLibraryMedia() {
  const key = els.libraryKey.value;
  if (libraryEntries[key]) {
    libraryEntries[key].media = null;
    saveLibrary();
  }
  els.libraryMediaPreview.innerHTML = "";
  render();
}

function openLibraryMedia(key) {
  const entry = libraryEntries[key];
  if (!entry?.media) {
    openLibraryDialog(key);
    return;
  }
  els.mediaDialogTitle.textContent = entry.name || tr("photo");
  els.mediaDialogBody.innerHTML = renderMedia(entry.media);
  els.mediaDialog.showModal();
}

function openLibraryDialog(key) {
  const entry = libraryEntries[key] || parseLibraryKey(key);
  els.libraryDialogTitle.textContent = tr("libraryEntry");
  els.libraryKey.value = key;
  els.libraryName.value = entry.name || "";
  els.libraryCategory.value = entry.category || "ingredients";
  els.libraryMedia.value = "";
  els.libraryMediaPreview.innerHTML = entry.media ? renderMedia(entry.media) : "";
  els.libraryDialog.showModal();
}

function itemCard(item, isLive = false) {
  const isOpen = openIds.has(item.id);
  const isAdded = liveIds.includes(item.id);
  const media = renderMedia(item.media);
  const detailSections = FIELD_DEFS.map((field) => renderDetailSection(item, field)).join("");

  return `
    <article class="item-card ${isOpen ? "is-open" : ""}" data-id="${item.id}">
      <button class="item-main" type="button" data-toggle>
        <div>
          <div class="item-name">${escapeHtml(item.name)}</div>
          <div class="item-meta">${escapeHtml(displayCategory(item.category))} · ${item.ingredients.length} ${tr("ingredientCount")}</div>
        </div>
        <div class="item-actions">
          ${
            isLive
              ? `<button class="round-btn" type="button" data-remove-live title="${tr("removeFromLive")}">-</button>`
              : `<button class="round-btn ${isAdded ? "added" : ""}" type="button" data-add-live title="${tr("addToLive")}">+</button>`
          }
          <button class="round-btn" type="button" data-edit title="${tr("editTitle")}">...</button>
        </div>
      </button>
      <div class="details">
        ${media}
        ${detailSections}
      </div>
    </article>
  `;
}

function renderDetailSection(item, field) {
  const values = item[field.key] || [];
  const emptyLabel = field.key === "ingredients" ? tr("noIngredients") : tr("noEntries");
  const entries = values.length
    ? values.map((value) => renderListEntry(value, field.libraryKey)).join("")
    : `<li><span>${emptyLabel}</span></li>`;
  return `
    <section class="detail-section">
      <h3>${tr(field.label)}</h3>
      <ul class="ingredient-list">${entries}</ul>
    </section>
  `;
}

function renderListEntry(value, libraryCategory) {
  if (!libraryCategory) return `<li><span>${escapeHtml(value)}</span></li>`;
  const key = libraryEntryKey(libraryCategory, value);
  const entry = libraryEntries[key];
  const label = entry?.media ? tr("viewPhoto") : tr("addPhoto");
  return `
    <li>
      <span>${escapeHtml(value)}</span>
      <button class="mini-btn" type="button" data-library-media="${escapeHtml(key)}">${label}</button>
    </li>
  `;
}

function libraryEntryKey(category, value) {
  return `${category}:${normalize(value)}`;
}

function parseLibraryKey(key) {
  const [category, ...nameParts] = String(key || "ingredients:").split(":");
  return {
    key,
    category,
    name: nameParts.join(":").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    media: null,
  };
}

function bindItemCards(root) {
  root.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.closest("[data-add-live], [data-remove-live], [data-edit]")) return;
      const id = button.closest(".item-card").dataset.id;
      if (openIds.has(id)) openIds.delete(id);
      else openIds.add(id);
      render();
    });
  });

  root.querySelectorAll("[data-add-live]").forEach((button) => {
    button.addEventListener("click", () => addToLive(button.closest(".item-card").dataset.id));
  });

  root.querySelectorAll("[data-remove-live]").forEach((button) => {
    button.addEventListener("click", () => removeFromLive(button.closest(".item-card").dataset.id));
  });

  root.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => openItemDialog(items.find((item) => item.id === button.closest(".item-card").dataset.id)));
  });

  root.querySelectorAll("[data-library-media]").forEach((button) => {
    button.addEventListener("click", () => openLibraryMedia(button.dataset.libraryMedia));
  });
}

function addToLive(id) {
  if (!liveIds.includes(id)) {
    liveIds.push(id);
    saveLive();
    render();
  }
}

function removeFromLive(id) {
  liveIds = liveIds.filter((liveId) => liveId !== id);
  saveLive();
  render();
}

function openItemDialog(item = null) {
  const isNew = !item;
  els.itemDialogTitle.textContent = isNew ? tr("newItem") : tr("editItem");
  els.itemId.value = item?.id || "";
  els.itemName.value = item?.name || "";
  els.itemIngredients.value = item?.ingredients?.join("\n") || "";
  els.itemSteps.value = item?.steps?.join("\n") || "";
  els.itemMistakes.value = item?.mistakes?.join("\n") || "";
  els.itemServeWith.value = item?.serveWith?.join("\n") || "";
  els.itemPackaging.value = item?.packaging?.join("\n") || "";
  els.itemAliases.value = item?.aliases?.join("\n") || "";
  els.itemCategory.value = item?.category || "";
  els.itemMedia.value = "";
  els.deleteItemBtn.classList.toggle("hidden", isNew);
  renderMediaPreview(item?.media || null);
  els.itemDialog.showModal();
}

async function saveItemFromDialog(event) {
  event.preventDefault();
  const existingId = els.itemId.value;
  const mediaFile = els.itemMedia.files[0];
  const existing = items.find((item) => item.id === existingId);
  const media = mediaFile ? await readFileAsDataUrl(mediaFile) : existing?.media || null;
  const item = {
    id: existingId || crypto.randomUUID(),
    name: els.itemName.value.trim(),
    ingredients: splitList(els.itemIngredients.value),
    steps: splitList(els.itemSteps.value),
    mistakes: splitList(els.itemMistakes.value),
    serveWith: splitList(els.itemServeWith.value),
    packaging: splitList(els.itemPackaging.value),
    aliases: splitList(els.itemAliases.value),
    category: els.itemCategory.value.trim(),
    media,
  };

  if (existingId) items = items.map((entry) => (entry.id === existingId ? item : entry));
  else items.unshift(item);

  saveItems();
  els.itemDialog.close();
  render();
}

function deleteCurrentItem() {
  const id = els.itemId.value;
  items = items.filter((item) => item.id !== id);
  liveIds = liveIds.filter((liveId) => liveId !== id);
  saveItems();
  saveLive();
  els.itemDialog.close();
  render();
}

function renderMediaPreview(media) {
  els.mediaPreview.innerHTML = media ? renderMedia(media) : "";
}

function renderMedia(media) {
  if (!media) return "";
  const isVideo = media.startsWith("data:video");
  return isVideo
    ? `<video class="media" src="${media}" controls></video>`
    : `<img class="media" src="${media}" alt="" />`;
}

async function importCsv(event) {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();
  const rows = parseCsv(text);
  const imported = rows.map(csvRowToItem).filter((item) => item.name);
  items = mergeItems(imported, items);
  saveItems();
  event.target.value = "";
  render();
}

function csvRowToItem(row) {
  return {
    id: crypto.randomUUID(),
    name: row.name || row.item || row.title || "",
    ingredients: splitList(row.ingredients || row.ingredient || ""),
    steps: splitList(row.steps || row.step || ""),
    mistakes: splitList(row.mistakes || row.commonmistakes || row.commonmistake || ""),
    serveWith: splitList(row.servewith || row.servedwith || ""),
    packaging: splitList(row.packaging || row.packing || ""),
    category: row.category || "",
    aliases: splitList(row.aliases || row.alias || ""),
    media: null,
  };
}

function mergeItems(imported, existing) {
  const byName = new Map(existing.map((item) => [normalize(item.name), item]));
  imported.forEach((item) => {
    const key = normalize(item.name);
    byName.set(key, { ...byName.get(key), ...item, id: byName.get(key)?.id || item.id });
  });
  return Array.from(byName.values()).sort((a, b) => a.name.localeCompare(b.name));
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value.trim());
  if (row.some(Boolean)) rows.push(row);
  const headers = rows.shift()?.map((header) => normalize(header).replace(/\s+/g, "")) || [];
  return rows.map((cells) =>
    Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""])),
  );
}

async function openScanDialog() {
  els.scanDialog.showModal();
  els.scanStatus.textContent = tr("startingCamera");
  currentMatches = [];
  renderMatches();
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
    els.cameraVideo.srcObject = stream;
    await els.cameraVideo.play();
    els.scanStatus.textContent = tr("aimAtSlip");
  } catch (error) {
    els.scanStatus.textContent = tr("cameraUnavailable");
  }
}

function closeScanDialog() {
  stopCamera();
  els.scanDialog.close();
}

function stopCamera() {
  stream?.getTracks().forEach((track) => track.stop());
  stream = null;
}

async function captureAndOcr() {
  if (!els.cameraVideo.videoWidth) return;
  const canvas = els.captureCanvas;
  canvas.width = els.cameraVideo.videoWidth;
  canvas.height = els.cameraVideo.videoHeight;
  canvas.getContext("2d").drawImage(els.cameraVideo, 0, 0);
  const image = canvas.toDataURL("image/png");
  await runOcr(image);
}

async function ocrUploadedImage(event) {
  const file = event.target.files[0];
  if (!file) return;
  await runOcr(await readFileAsDataUrl(file));
  event.target.value = "";
}

async function runOcr(image) {
  const tesseract = await loadTesseract();
  if (!tesseract) {
    els.scanStatus.textContent = tr("ocrMissing");
    return;
  }
  els.scanStatus.textContent = tr("readingText");
  const result = await tesseract.recognize(image, "eng", {
    logger(message) {
      if (message.status) {
        els.scanStatus.textContent = `${message.status}${message.progress ? ` ${Math.round(message.progress * 100)}%` : ""}`;
      }
    },
  });
  els.scanText.value = result.data.text.trim();
  currentMatches = matchItems(els.scanText.value);
  renderMatches();
  els.scanStatus.textContent = currentMatches.length
    ? `${tr("matched")} ${currentMatches.length} ${currentMatches.length === 1 ? tr("itemWord") : tr("itemsWord")}.`
    : tr("noMatches");
}

function loadTesseract() {
  if (window.Tesseract) return Promise.resolve(window.Tesseract);
  if (tesseractLoad) return tesseractLoad;
  els.scanStatus.textContent = tr("loadingOcr");
  tesseractLoad = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.onload = () => resolve(window.Tesseract);
    script.onerror = () => resolve(null);
    document.head.append(script);
  });
  return tesseractLoad;
}

function matchItems(text) {
  const normalizedText = normalize(text);
  if (!normalizedText) return [];
  return items.filter((item) => {
    const names = [item.name, ...item.aliases].map(normalize).filter(Boolean);
    return names.some((name) => normalizedText.includes(name) || similarity(name, normalizedText) > 0.78);
  });
}

function renderMatches() {
  els.scanMatches.innerHTML = currentMatches.map((item) => `<span class="match-chip">${escapeHtml(item.name)}</span>`).join("");
}

function addMatchesToLive() {
  currentMatches.forEach((item) => {
    if (!liveIds.includes(item.id)) liveIds.push(item.id);
  });
  saveLive();
  render();
  closeScanDialog();
  setTab("live");
}

function splitList(value) {
  return value
    .split(/\n|,/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function searchableText(item) {
  return normalize(
    [
      item.name,
      item.category,
      item.ingredients.join(" "),
      item.steps.join(" "),
      item.mistakes.join(" "),
      item.serveWith.join(" "),
      item.packaging.join(" "),
      item.aliases.join(" "),
    ].join(" "),
  );
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function similarity(needle, haystack) {
  const words = haystack.split(" ");
  const phraseLength = needle.split(" ").length;
  let best = 0;
  for (let index = 0; index < words.length; index += 1) {
    const phrase = words.slice(index, index + phraseLength).join(" ");
    best = Math.max(best, diceCoefficient(needle, phrase));
  }
  return best;
}

function diceCoefficient(a, b) {
  if (a.length < 2 || b.length < 2) return a === b ? 1 : 0;
  const bigrams = new Map();
  for (let index = 0; index < a.length - 1; index += 1) {
    const bigram = a.slice(index, index + 2);
    bigrams.set(bigram, (bigrams.get(bigram) || 0) + 1);
  }
  let intersection = 0;
  for (let index = 0; index < b.length - 1; index += 1) {
    const bigram = b.slice(index, index + 2);
    const count = bigrams.get(bigram) || 0;
    if (count > 0) {
      bigrams.set(bigram, count - 1);
      intersection += 1;
    }
  }
  return (2 * intersection) / (a.length + b.length - 2);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const escapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return escapes[char];
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
}
