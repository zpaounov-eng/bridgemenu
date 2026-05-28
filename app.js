const DEMO_LIMIT_MS = 30 * 60 * 1000;
const DEMO_LIMIT_EDITS = 20;
const RESTAURANT_SLUG = "sofia";
const SUPABASE_URL = "https://lfktexztaiaqazxiwosz.supabase.co";
const SUPABASE_KEY = "sb_publishable_3P5IfNNgYiot4GK7mSscXg__RkKQ6zb";

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
    needsIngredients: "Needs",
    demoAccess: "Demo access",
    demoLimited: "Demo edits are limited. Enter the restaurant passcode to keep editing.",
    passcode: "4 digit passcode",
    unlock: "Unlock",
    unlocked: "Unlocked",
    demoStatus: "Demo",
    accountPrompt: "Demo limit reached. A paid restaurant link can keep editing with the 4 digit menu passcode.",
    wrongPasscode: "Passcode did not match this restaurant.",
    checkingPasscode: "Checking passcode...",
    needsIngredientsTitle: "Needs ingredients",
    previous: "Previous",
    next: "Next",
    editItemButton: "Edit item",
    uploadDocument: "Upload document",
    noIngredientItems: "Every item has ingredients.",
    documentMatched: "Matched document items",
    documentNoMatches: "No matching item names found in that document.",
    documentApplied: "Updated matched items with ingredient text where a line had Item: ingredients.",
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
    needsIngredients: "Faltan",
    demoAccess: "Acceso demo",
    demoLimited: "Las ediciones demo son limitadas. Ingresa el codigo del restaurante para seguir editando.",
    passcode: "Codigo de 4 digitos",
    unlock: "Desbloquear",
    unlocked: "Desbloqueado",
    demoStatus: "Demo",
    accountPrompt: "Limite demo alcanzado. Un enlace pagado puede seguir editando con el codigo de 4 digitos.",
    wrongPasscode: "El codigo no coincide con este restaurante.",
    checkingPasscode: "Revisando codigo...",
    needsIngredientsTitle: "Faltan ingredientes",
    previous: "Anterior",
    next: "Siguiente",
    editItemButton: "Editar articulo",
    uploadDocument: "Subir documento",
    noIngredientItems: "Todos los articulos tienen ingredientes.",
    documentMatched: "Articulos encontrados",
    documentNoMatches: "No se encontraron articulos en ese documento.",
    documentApplied: "Se actualizaron articulos encontrados donde habia una linea Articulo: ingredientes.",
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
let usage = loadUsage();
let guideIndex = 0;
let restaurantId = null;
let categoryIdsByName = new Map();
let supabaseReady = false;

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
  needsIngredientsBtn: $("#needsIngredientsBtn"),
  usageStatusBtn: $("#usageStatusBtn"),
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
  usageDialog: $("#usageDialog"),
  usageForm: $("#usageForm"),
  usageDialogTitle: $("#usageDialogTitle"),
  usageMessage: $("#usageMessage"),
  passcodeInput: $("#passcodeInput"),
  passcodeStatus: $("#passcodeStatus"),
  ingredientsGuideDialog: $("#ingredientsGuideDialog"),
  ingredientsGuideTitle: $("#ingredientsGuideTitle"),
  guideCurrentItem: $("#guideCurrentItem"),
  guidePrevBtn: $("#guidePrevBtn"),
  guideEditBtn: $("#guideEditBtn"),
  guideNextBtn: $("#guideNextBtn"),
  guideDocumentInput: $("#guideDocumentInput"),
  guideStatus: $("#guideStatus"),
  guideMatches: $("#guideMatches"),
};

render();
bindEvents();
syncFromSupabase();
setInterval(syncFromSupabase, 15000);
setInterval(renderUsageStatus, 30000);
registerServiceWorker();

function loadItems() {
  return seedItems.map(normalizeItemRecord);
}

function normalizeItemRecord(item) {
  return {
    id: item.id || crypto.randomUUID(),
    dbId: item.dbId || null,
    externalId: item.externalId || item.external_id || item.id || null,
    name: item.name || "",
    ingredients: item.ingredients || [],
    steps: item.steps || [],
    mistakes: item.mistakes || item.commonMistakes || [],
    serveWith: item.serveWith || [],
    packaging: item.packaging || item.packing || [],
    aliases: item.aliases || [],
    category: item.category || "",
    media: item.media || item.media_url || null,
  };
}

function mergeSeedWithStored(seed, stored) {
  const storedById = new Map(stored.map((item) => [item.id, item]));
  const merged = seed.map((item) => storedById.get(item.id) || normalizeItemRecord(item));
  const seedIds = new Set(seed.map((item) => item.id));
  return [...merged, ...stored.filter((item) => !seedIds.has(item.id))];
}

function loadLiveIds() {
  return [];
}

function loadLanguage() {
  return "en";
}

function loadLibrary() {
  return mergeLibraryEntries({});
}

function loadUsage() {
  return {
    startedAt: Date.now(),
    edits: 0,
    unlocked: false,
    unlockedAt: null,
  };
}

function saveUsage() {
  return usage;
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
  return items;
}

function saveLive() {
  return liveIds;
}

function saveLibrary() {
  return libraryEntries;
}

function bindEvents() {
  els.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.language;
      render();
    });
  });

  els.librarySearchInput.addEventListener("input", renderLibrary);
  els.libraryForm.addEventListener("submit", saveLibraryFromDialog);
  els.removeLibraryMediaBtn.addEventListener("click", removeCurrentLibraryMedia);
  els.usageStatusBtn.addEventListener("click", openUsageDialog);
  els.usageForm.addEventListener("submit", unlockWithPasscode);
  document.querySelectorAll("[data-close-usage]").forEach((button) => {
    button.addEventListener("click", () => els.usageDialog.close());
  });
  els.needsIngredientsBtn.addEventListener("click", openIngredientsGuide);
  els.guidePrevBtn.addEventListener("click", () => moveGuide(-1));
  els.guideNextBtn.addEventListener("click", () => moveGuide(1));
  els.guideEditBtn.addEventListener("click", editGuideItem);
  els.guideDocumentInput.addEventListener("change", processGuideDocument);
  document.querySelectorAll("[data-close-guide]").forEach((button) => {
    button.addEventListener("click", () => els.ingredientsGuideDialog.close());
  });
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
    if (!ensureCanEdit()) return;
    liveIds = [];
    saveLive();
    recordEdit();
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
  renderUsageStatus();
  renderNeedsIngredientsStatus();
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
  els.usageDialogTitle.textContent = tr("demoAccess");
  els.usageMessage.textContent = isDemoExpired() ? tr("accountPrompt") : tr("demoLimited");
  els.passcodeInput.closest("label").childNodes[0].textContent = tr("passcode");
  els.usageForm.querySelector('button[type="submit"]').textContent = tr("unlock");
  els.ingredientsGuideTitle.textContent = tr("needsIngredientsTitle");
  els.guidePrevBtn.textContent = tr("previous");
  els.guideNextBtn.textContent = tr("next");
  els.guideEditBtn.textContent = tr("editItemButton");
  els.ingredientsGuideDialog.querySelector(".file-btn").childNodes[0].textContent = tr("uploadDocument");
  document.querySelectorAll("[data-close-library]").forEach((button) => {
    if (!button.classList.contains("icon-btn")) button.textContent = tr("cancel");
    button.title = tr("close");
  });
  els.libraryForm.querySelector('button[type="submit"]').textContent = tr("save");
  document.querySelector("[data-close-media]").title = tr("close");
  document.querySelector("[data-close-usage]").title = tr("close");
  document.querySelector("[data-close-guide]").title = tr("close");
}

function renderUsageStatus() {
  const elapsedMs = Date.now() - usage.startedAt;
  const minutes = Math.min(30, Math.floor(elapsedMs / 60000));
  const expired = isDemoExpired();
  els.usageStatusBtn.textContent = usage.unlocked
    ? tr("unlocked")
    : `${tr("demoStatus")} ${usage.edits}/${DEMO_LIMIT_EDITS} · ${minutes}m`;
  els.usageStatusBtn.classList.toggle("is-unlocked", usage.unlocked);
  els.usageStatusBtn.classList.toggle("is-warning", expired);
  if (els.usageDialog.open) {
    els.usageMessage.textContent = expired ? tr("accountPrompt") : tr("demoLimited");
  }
}

function renderNeedsIngredientsStatus() {
  els.needsIngredientsBtn.textContent = `${tr("needsIngredients")} ${itemsNeedingIngredients().length}`;
}

function itemsNeedingIngredients() {
  return items.filter((item) => !item.ingredients?.length);
}

function isDemoExpired() {
  if (usage.unlocked) return false;
  return usage.edits >= DEMO_LIMIT_EDITS || Date.now() - usage.startedAt >= DEMO_LIMIT_MS;
}

function ensureCanEdit() {
  if (!isDemoExpired()) return true;
  openUsageDialog();
  return false;
}

function recordEdit() {
  if (usage.unlocked) return;
  usage.edits += 1;
  saveUsage();
  renderUsageStatus();
}

function openUsageDialog() {
  if (els.usageDialog.open) return;
  els.passcodeInput.value = "";
  els.passcodeStatus.textContent = "";
  els.passcodeStatus.className = "form-status";
  els.usageMessage.textContent = isDemoExpired() ? tr("accountPrompt") : tr("demoLimited");
  try {
    els.usageDialog.showModal();
  } catch (error) {
    els.usageDialog.show();
  }
  setTimeout(() => els.passcodeInput.focus(), 50);
}

async function unlockWithPasscode(event) {
  event.preventDefault();
  const code = els.passcodeInput.value.trim();
  if (!/^\d{4}$/.test(code)) {
    showPasscodeStatus(tr("wrongPasscode"), "error");
    return;
  }
  showPasscodeStatus(tr("checkingPasscode"));
  const isValid = await validateRestaurantPasscode(code);
  if (!isValid) {
    showPasscodeStatus(tr("wrongPasscode"), "error");
    return;
  }
  usage.unlocked = true;
  usage.unlockedAt = new Date().toISOString();
  saveUsage();
  showPasscodeStatus(tr("unlocked"), "ok");
  renderUsageStatus();
  setTimeout(() => els.usageDialog.close(), 250);
}

function showPasscodeStatus(message, state = "") {
  els.passcodeStatus.textContent = message;
  els.passcodeStatus.className = `form-status${state ? ` is-${state}` : ""}`;
}

async function validateRestaurantPasscode(code) {
  try {
    const result = await supabaseRequest("rpc/validate_restaurant_passcode", {
      method: "POST",
      body: JSON.stringify({ menu_slug: RESTAURANT_SLUG, passcode: code }),
    });
    return result === true || result?.valid === true;
  } catch (error) {
    console.warn("Passcode validation failed", error);
    return false;
  }
}

async function supabaseRequest(path, options = {}) {
  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (options.method && options.method !== "GET" && !headers.Prefer) {
    headers.Prefer = "return=representation,resolution=merge-duplicates";
  }
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers,
  });
  if (!response.ok) throw new Error(`${response.status}: ${await response.text()}`);
  if (response.status === 204) return null;
  return response.json();
}

async function syncFromSupabase() {
  if (document.querySelector("dialog[open]")) return;
  try {
    const [restaurant] = await supabaseRequest(
      `restaurants?slug=eq.${encodeURIComponent(RESTAURANT_SLUG)}&select=id,name,slug&limit=1`,
    );
    if (!restaurant) return;
    restaurantId = restaurant.id;
    const categories = await supabaseRequest(
      `menu_categories?restaurant_id=eq.${restaurantId}&select=id,name,sort_order&order=sort_order.asc,name.asc`,
    );
    categoryIdsByName = new Map(categories.map((category) => [category.name, category.id]));
    const rows = await supabaseRequest(
      `menu_items?restaurant_id=eq.${restaurantId}&select=*,menu_categories(name)&order=name.asc`,
    );
    if (rows.length) {
      items = rows.map(dbRowToItem);
      supabaseReady = true;
      liveIds = liveIds.filter((id) => items.some((item) => item.id === id));
      render();
    }
  } catch (error) {
    console.warn("Supabase sync failed", error);
  }
}

function dbRowToItem(row) {
  return normalizeItemRecord({
    id: row.external_id || row.id,
    dbId: row.id,
    externalId: row.external_id || row.id,
    name: row.name,
    ingredients: row.ingredients || [],
    steps: row.steps || [],
    mistakes: row.mistakes || [],
    serveWith: row.serve_with || [],
    packaging: row.packaging || [],
    aliases: row.aliases || [],
    category: row.menu_categories?.name || "",
    media: row.media_url || null,
  });
}

async function getCategoryId(name) {
  const categoryName = name || tr("uncategorized");
  if (categoryIdsByName.has(categoryName)) return categoryIdsByName.get(categoryName);
  if (!restaurantId) await syncFromSupabase();
  const [category] = await supabaseRequest("menu_categories?on_conflict=restaurant_id,name", {
    method: "POST",
    body: JSON.stringify([
      {
        restaurant_id: restaurantId,
        name: categoryName,
        sort_order: categoryIdsByName.size,
      },
    ]),
  });
  if (category?.id) categoryIdsByName.set(category.name, category.id);
  return category?.id || null;
}

async function saveItemToSupabase(item) {
  if (!restaurantId) await syncFromSupabase();
  if (!restaurantId) throw new Error("Restaurant was not loaded from Supabase.");
  const categoryId = await getCategoryId(item.category);
  const externalId = item.externalId || item.id;
  const [row] = await supabaseRequest("menu_items?on_conflict=restaurant_id,external_id", {
    method: "POST",
    body: JSON.stringify([
      {
        restaurant_id: restaurantId,
        category_id: categoryId,
        external_id: externalId,
        name: item.name,
        ingredients: item.ingredients || [],
        steps: item.steps || [],
        mistakes: item.mistakes || [],
        serve_with: item.serveWith || [],
        packaging: item.packaging || [],
        aliases: item.aliases || [],
        media_url: item.media || null,
      },
    ]),
  });
  return row ? dbRowToItem({ ...row, menu_categories: { name: item.category } }) : item;
}

async function deleteItemFromSupabase(item) {
  if (!item?.dbId) return;
  await supabaseRequest(`menu_items?id=eq.${item.dbId}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
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

function openIngredientsGuide() {
  guideIndex = 0;
  els.guideStatus.textContent = "";
  els.guideMatches.innerHTML = "";
  els.guideDocumentInput.value = "";
  renderIngredientsGuide();
  els.ingredientsGuideDialog.showModal();
}

function renderIngredientsGuide() {
  const missing = itemsNeedingIngredients();
  const item = missing[guideIndex];
  if (!item) {
    els.guideCurrentItem.innerHTML = `<strong>${tr("noIngredientItems")}</strong>`;
    els.guideEditBtn.disabled = true;
    els.guidePrevBtn.disabled = true;
    els.guideNextBtn.disabled = true;
    return;
  }
  els.guideEditBtn.disabled = false;
  els.guidePrevBtn.disabled = missing.length < 2;
  els.guideNextBtn.disabled = missing.length < 2;
  els.guideCurrentItem.innerHTML = `
    <strong>${escapeHtml(item.name)}</strong>
    <span>${escapeHtml(displayCategory(item.category))} · ${guideIndex + 1} / ${missing.length}</span>
  `;
}

function moveGuide(direction) {
  const missing = itemsNeedingIngredients();
  if (!missing.length) return;
  guideIndex = (guideIndex + direction + missing.length) % missing.length;
  renderIngredientsGuide();
}

function editGuideItem() {
  const item = itemsNeedingIngredients()[guideIndex];
  if (!item) return;
  els.ingredientsGuideDialog.close();
  openItemDialog(item);
}

async function processGuideDocument(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!ensureCanEdit()) {
    event.target.value = "";
    return;
  }
  els.guideStatus.textContent = file.type.startsWith("image/") ? tr("readingText") : "";
  const text = file.type.startsWith("image/") ? await ocrDocumentFile(file) : await file.text();
  const matches = matchItems(text);
  await applyDocumentIngredients(text, matches);
  els.guideMatches.innerHTML = matches.map((item) => `<span class="match-chip">${escapeHtml(item.name)}</span>`).join("");
  els.guideStatus.textContent = matches.length
    ? `${tr("documentMatched")}: ${matches.length}. ${tr("documentApplied")}`
    : tr("documentNoMatches");
  event.target.value = "";
  render();
  if (els.ingredientsGuideDialog.open) renderIngredientsGuide();
}

async function ocrDocumentFile(file) {
  const tesseract = await loadTesseractForGuide();
  if (!tesseract) return "";
  const result = await tesseract.recognize(await readFileAsDataUrl(file), "eng", {
    logger(message) {
      if (message.status) {
        els.guideStatus.textContent = `${message.status}${message.progress ? ` ${Math.round(message.progress * 100)}%` : ""}`;
      }
    },
  });
  return result.data.text.trim();
}

async function loadTesseractForGuide() {
  const previousStatus = els.scanStatus;
  const tesseract = await loadTesseract();
  if (!tesseract) els.guideStatus.textContent = tr("ocrMissing");
  if (previousStatus && !els.scanDialog.open) previousStatus.textContent = tr("scanHelp");
  return tesseract;
}

async function applyDocumentIngredients(text, matches) {
  let changed = false;
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const nextItems = [];
  for (const item of items) {
    const matched = matches.find((match) => match.id === item.id);
    if (!matched) {
      nextItems.push(item);
      continue;
    }
    const line = lines.find((entry) => normalize(entry).startsWith(normalize(item.name)));
    const [, rest = ""] = line?.match(/[:\-–]\s*(.+)$/) || [];
    const ingredients = splitList(rest);
    if (!ingredients.length) {
      nextItems.push(item);
      continue;
    }
    changed = true;
    const updatedItem = { ...item, ingredients };
    nextItems.push(await saveItemToSupabase(updatedItem));
  }
  items = nextItems;
  if (changed) {
    saveItems();
    recordEdit();
  }
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
  if (!ensureCanEdit()) return;
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
  recordEdit();
  els.libraryDialog.close();
  render();
}

function removeCurrentLibraryMedia() {
  if (!ensureCanEdit()) return;
  const key = els.libraryKey.value;
  if (libraryEntries[key]) {
    libraryEntries[key].media = null;
    saveLibrary();
    recordEdit();
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
  if (isDemoExpired()) {
    openUsageDialog();
    return;
  }
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
  if (!ensureCanEdit()) return;
  if (!liveIds.includes(id)) {
    liveIds.push(id);
    saveLive();
    recordEdit();
    render();
  }
}

function removeFromLive(id) {
  if (!ensureCanEdit()) return;
  liveIds = liveIds.filter((liveId) => liveId !== id);
  saveLive();
  recordEdit();
  render();
}

function openItemDialog(item = null) {
  if (isDemoExpired()) {
    openUsageDialog();
    return;
  }
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
  if (!ensureCanEdit()) return;
  const existingId = els.itemId.value;
  const mediaFile = els.itemMedia.files[0];
  const existing = items.find((item) => item.id === existingId);
  const media = mediaFile ? await readFileAsDataUrl(mediaFile) : existing?.media || null;
  const item = {
    id: existingId || crypto.randomUUID(),
    dbId: existing?.dbId || null,
    externalId: existing?.externalId || existingId || null,
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

  try {
    const savedItem = await saveItemToSupabase(item);
    if (existingId) items = items.map((entry) => (entry.id === existingId ? savedItem : entry));
    else items.unshift(savedItem);
  } catch (error) {
    console.error("Supabase item save failed", error);
    alert("Could not save to Supabase. Check the connection and try again.");
    return;
  }

  saveItems();
  recordEdit();
  els.itemDialog.close();
  render();
}

async function deleteCurrentItem() {
  if (!ensureCanEdit()) return;
  const id = els.itemId.value;
  const existing = items.find((item) => item.id === id);
  try {
    await deleteItemFromSupabase(existing);
  } catch (error) {
    console.error("Supabase item delete failed", error);
    alert("Could not delete from Supabase. Check the connection and try again.");
    return;
  }
  items = items.filter((item) => item.id !== id);
  liveIds = liveIds.filter((liveId) => liveId !== id);
  saveItems();
  saveLive();
  recordEdit();
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
  if (!ensureCanEdit()) {
    event.target.value = "";
    return;
  }
  const text = await file.text();
  const rows = parseCsv(text);
  const imported = rows.map(csvRowToItem).filter((item) => item.name);
  try {
    const savedImported = [];
    for (const item of imported) {
      savedImported.push(await saveItemToSupabase(item));
    }
    items = mergeItems(savedImported, items);
  } catch (error) {
    console.error("Supabase CSV import failed", error);
    alert("Could not import to Supabase. Check the connection and try again.");
    return;
  }
  saveItems();
  recordEdit();
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
  if (!ensureCanEdit()) return;
  let changed = false;
  currentMatches.forEach((item) => {
    if (!liveIds.includes(item.id)) {
      liveIds.push(item.id);
      changed = true;
    }
  });
  saveLive();
  if (changed) recordEdit();
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
