(() => {
  // Fotoğrafı olmayan ürünler katalogda gösterilmez; products.js'te image doldurulunca kendiliğinden görünür.
  // Çelenk ürünleri yalnızca "Çelenk" kategorisinde görünür, "Tümü"de görünmez.
  const products = (window.BUKETIA_PRODUCTS || []).filter((product) => product.image || product.categories.includes("Çelenk"));
  const grid = document.querySelector("#product-grid");
  const count = document.querySelector("#result-count");
  const searchInput = document.querySelector("#product-search");
  const searchClear = document.querySelector(".search-clear");
  const dialog = document.querySelector("#product-dialog");
  const form = document.querySelector("#order-form");
  const error = document.querySelector("#form-error");
  const budgetField = document.querySelector("#budget-field");
  const budgetInput = form.elements.budget;
  const deliveryTimeSelect = form.elements.deliveryTime;
  const customTimeField = document.querySelector("#custom-time-field");
  const customTimeInput = form.elements.customDeliveryTime;
  const customTimeToggle = document.querySelector("#custom-time-toggle");
  const whatsappNumber = "905524072817";
  const designerChoice = {
    id: "bize-birak",
    name: "Bize Bırak",
    category: "Buketia seçkisi",
    description: "Bütçenizi belirleyin; mevsimin en güzel çiçekleriyle buketinizi Buketia Flower’ın zevkine bırakın.",
    tone: "ivory",
    image: "",
    custom: true
  };

  // "Bize Bırak" bütçe aralığı kategoriye göre değişir; listede olmayan kategori varsayılanı kullanır.
  const defaultBudget = [1500, 5000];
  const budgetRanges = { "Yapay Ağaç": [4000, 10000] };
  let currentCategory = "Tümü";

  // Sayfa yalnızca kendi dilinin sözlüğünü yükler (i18n/<dil>.js).
  const pageLanguage = document.documentElement.lang.slice(0, 2);
  const t = (window.BUKETIA_I18N || {})[pageLanguage];
  const isTurkish = pageLanguage === "tr";
  // Görsel alt metni: kategori + kalıcı kod; ürüne özel (şablon olmayan) açıklaması varsa o da eklenir.
  // build.mjs aynı kuralı HTML'e önceden basılan kartlar için uygular; değiştirirseniz ikisini birlikte güncelleyin.
  const genericDescription = /koleksiyonundan bir tasarım/;
  const tx = (product) => {
    const merged = { ...product, ...(t.products[product.id] || {}), category: t.categories[product.category] || product.category };
    const label = `${merged.category} ${merged.code || merged.name}`;
    merged.alt = !product.description || genericDescription.test(product.description) ? `${label} · Buketia Flower` : `${label}: ${merged.description}`;
    return merged;
  };
  // Türkçe karakterler ve kodun tire/boşluk biçimi arama sonucunu değiştirmez.
  const normalizeSearch = (value) => value.toLocaleLowerCase("tr-TR").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i")
    .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  function matchesSearch(product, query) {
    const normalized = normalizeSearch(query);
    if (!normalized) return false;
    const compact = normalized.replace(/\s/g, "");
    const codeQuery = compact.match(/^([a-z]{3})(\d{1,3})$/);
    if (codeQuery) return product.code === `${codeQuery[1].toUpperCase()}-${codeQuery[2].padStart(3, "0")}`;
    const terms = normalized.split(/\s+/).filter(Boolean);
    const names = [product.code, product.name, ...(product.searchNames || [])];
    return names.some((name) => {
      const candidate = normalizeSearch(name);
      return terms.every((term) => candidate.includes(term)) || candidate.replace(/\s/g, "").includes(compact);
    });
  }
  // Alt sayfalarda (/en/ vb.) ürün görselleri bir üst klasördedir.
  const assetBase = document.documentElement.dataset.assetBase || "";

  let activeProduct = products[0] || null;

  const money = new Intl.NumberFormat(t.locale, { style: "currency", currency: "TRY", currencyDisplay: "narrowSymbol", maximumFractionDigits: 0 });

  const visualMarkup = (product) => product.image
    ? `<img src="${assetBase}${product.image}" alt="${(product.alt || product.name).replace(/"/g, "&quot;")}" loading="lazy" decoding="async" width="${product.imageWidth || 675}" height="${product.imageHeight || 900}"${product.imageFit ? ` style="min-width: 0; min-height: 0; object-fit: ${product.imageFit}; object-position: ${product.imagePosition || "center"}"` : ""} />`
    : `<span>${t.imagePending}</span>`;

  function productCard(item) {
    const product = tx(item);
    return `<article class="product-card">
      <button class="product-button" type="button" data-product="${product.id}" aria-label="${t.viewProduct(product.name)}">
        <div class="product-visual tone-${product.tone}">
          ${visualMarkup(product)}
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        </div>
        <div class="product-meta">
          <h3>${product.name}</h3>
        </div>
      </button>
    </article>`;
  }

  // Gizle/göster geçişi: gizlenirken önce çıkış animasyonu oynar, sonra hidden uygulanır.
  function setShown(el, show) {
    clearTimeout(el._leaveTimer);
    if (show) { el.hidden = false; el.classList.remove("is-leaving"); return; }
    if (el.hidden) return;
    el.classList.add("is-leaving");
    el._leaveTimer = setTimeout(() => { el.hidden = true; el.classList.remove("is-leaving"); }, 450);
  }

  function render(category = "Tümü") {
    currentCategory = category;
    const keys = category.split(",");
    const query = searchInput.value.trim();
    const visible = query ? products.filter((p) => matchesSearch(p, query))
      : category === "Tümü" ? products.filter((p) => p.image && !p.categories.includes("Çelenk")) : products.filter((p) => keys.some((k) => p.categories.includes(k)));
    grid.innerHTML = visible.length ? visible.map(productCard).join("") : `<p class="empty-note">${query ? t.searchEmpty : t.empty}</p>`;
    // "Bize Bırak" buket seçeneğidir; Çelenk kategorisinde gösterilmez.
    setShown(document.querySelector("[data-open-choice]"), !query && category !== "Çelenk");
    searchClear.hidden = !searchInput.value;
    count.textContent = t.count(visible.length);
  }

  function setProduct(item) {
    activeProduct = item;
    const product = tx(item);
    document.querySelector("#dialog-category").textContent = product.category;
    document.querySelector("#dialog-title").textContent = product.name;
    const productCode = document.querySelector("#dialog-code");
    productCode.textContent = product.code ? `${t.message.productCode} · ${product.code}` : "";
    productCode.hidden = !product.code || product.name === product.code;
    document.querySelector("#dialog-description").textContent = product.description;
    const priceLabel = document.querySelector("#dialog-price");
    const [minBudget, maxBudget] = item.budgetRange || defaultBudget;
    priceLabel.textContent = product.custom ? `${money.format(minBudget)} – ${money.format(maxBudget)}` : t.priceNote;
    budgetInput.min = minBudget;
    budgetInput.max = maxBudget;
    budgetInput.placeholder = `${minBudget.toLocaleString(t.locale)} – ${maxBudget.toLocaleString(t.locale)} TL`;
    priceLabel.classList.toggle("price-note", !product.custom);
    setShown(budgetField, !!product.custom);
    budgetInput.disabled = !product.custom;
    budgetInput.required = Boolean(product.custom);
    if (product.custom) budgetInput.value = "";
    const visual = document.querySelector("#dialog-visual");
    // Pencere fotoğrafı kırpmaz; fotoğraf alanı ürün fotoğrafının kendi en-boy oranını alır.
    if (product.image) visual.style.setProperty("--photo-ratio", String(((product.imageWidth || 675) / (product.imageHeight || 900)).toFixed(4)));
    else visual.style.removeProperty("--photo-ratio");
    visual.className = `dialog-visual product-visual tone-${product.tone}${product.image ? " has-photo" : ""}`;
    const arrows = item.cart && item.items.length > 1
      ? `<button class="visual-arrow visual-arrow-prev" type="button" data-cart-step="-1" aria-label="${t.cart.prev}">‹</button><button class="visual-arrow visual-arrow-next" type="button" data-cart-step="1" aria-label="${t.cart.next}">›</button>`
      : "";
    visual.innerHTML = visualMarkup(product) + (product.image ? `<span class="dialog-zoom-hint"><span class="dialog-zoom-text">${t.zoomPhoto} </span>⤢</span>` : "") + arrows;
    if (product.image) {
      visual.setAttribute("role", "button");
      visual.tabIndex = 0;
      visual.setAttribute("aria-label", t.zoomPhoto);
    } else {
      visual.removeAttribute("role");
      visual.removeAttribute("tabindex");
      visual.removeAttribute("aria-label");
    }
    cartMessage.textContent = "";
    syncCart();
  }

  // Telefonda pencere iki adımlıdır: önce büyük fotoğraf, "Sipariş oluştur" ile form açılır.
  // Fotoğrafı olmayan "Bize Bırak" doğrudan forma açılır. Masaüstünde form her zaman görünür.
  // Telefonda sipariş üç adımda sorulur (styles.css: data-step); masaüstünde adımlar görünmez.
  const dialogShell = dialog.querySelector(".dialog-shell");
  const stepFields = {
    budget: 1, deliveryDate: 1, deliveryTime: 1,
    recipientName: 2, recipientPhone: 2, address: 2, cardNote: 2,
    customerName: 3, customerPhone: 3
  };
  form.querySelectorAll(".form-grid > label").forEach((label) => {
    const control = label.querySelector("[name]");
    if (control && stepFields[control.name]) label.dataset.step = String(stepFields[control.name]);
  });
  const stepHead = document.createElement("div");
  stepHead.className = "step-head";
  stepHead.innerHTML = `<div class="step-progress" aria-hidden="true"><i></i><i></i><i></i></div><p class="step-count"></p><p class="step-question"></p>`;
  form.prepend(stepHead);
  const stepNext = document.createElement("button");
  stepNext.type = "button";
  stepNext.className = "step-next";
  stepNext.textContent = `${t.next} →`;
  form.append(stepNext);
  let step = 0;

  function setStep(next) {
    step = next;
    dialog.dataset.step = String(step);
    dialog.classList.toggle("is-ordering", step > 0);
    if (step > 0) {
      stepHead.querySelectorAll(".step-progress i").forEach((bar, index) => bar.classList.toggle("on", index < step));
      stepHead.querySelector(".step-count").textContent = t.stepOf(step, 3);
      stepHead.querySelector(".step-question").textContent = t.stepQuestions[step - 1];
    }
    error.textContent = "";
    dialogShell.scrollTop = 0;
  }

  function stepIsValid() {
    const controls = form.querySelectorAll(`.form-grid > label[data-step="${step}"] [name]`);
    for (const control of controls) {
      if (!control.disabled && !control.checkValidity()) {
        control.reportValidity();
        error.textContent = t.formError;
        return false;
      }
    }
    return true;
  }

  const orderStart = document.createElement("button");
  orderStart.type = "button";
  orderStart.className = "order-start";
  orderStart.innerHTML = `<span class="whatsapp-dot" aria-hidden="true"></span>${t.orderStart}`;
  document.querySelector(".dialog-summary").append(orderStart);
  orderStart.addEventListener("click", () => setStep(1));
  stepNext.addEventListener("click", () => { if (stepIsValid()) setStep(step + 1); });

  const orderBack = document.createElement("button");
  orderBack.type = "button";
  orderBack.className = "order-back";
  orderBack.setAttribute("aria-label", t.backToProduct);
  orderBack.textContent = "←";
  document.querySelector(".dialog-product").prepend(orderBack);
  orderBack.addEventListener("click", () => {
    if (step > 1) { setStep(step - 1); return; }
    // Fotoğrafı olmayan "Bize Bırak"ta geri dönülecek bir fotoğraf adımı yok; pencere kapanır.
    if (activeProduct?.custom) { dialog.close(); return; }
    setStep(0);
  });

  // Sepet: birden fazla ürün tek WhatsApp siparişinde toplanır. Sekme kapanana kadar sessionStorage'da tutulur.
  const cartKey = "buketia-cart";
  const cartLimit = 8;
  const productById = new Map(products.map((product) => [product.id, product]));
  let cartIds = [];
  try {
    cartIds = JSON.parse(sessionStorage.getItem(cartKey) || "[]").filter((id) => productById.has(id)).slice(0, cartLimit);
  } catch {}

  const cartToggle = document.createElement("button");
  cartToggle.type = "button";
  cartToggle.className = "cart-toggle";
  const cartLink = document.createElement("button");
  cartLink.type = "button";
  cartLink.className = "cart-link";
  const cartMessage = document.createElement("p");
  cartMessage.className = "cart-message";
  cartMessage.setAttribute("role", "status");
  document.querySelector(".dialog-summary").append(cartToggle, cartMessage, cartLink);

  const cartFab = document.createElement("button");
  cartFab.type = "button";
  cartFab.className = "cart-fab";
  cartFab.hidden = true;
  document.body.append(cartFab);

  const cartDialog = document.createElement("dialog");
  cartDialog.className = "cart-dialog";
  cartDialog.setAttribute("aria-labelledby", "cart-title");
  cartDialog.innerHTML = `<div class="cart-shell">
    <button class="cart-close" type="button" aria-label="${t.cart.close}">×</button>
    <h2 id="cart-title">${t.cart.title}</h2>
    <p class="cart-count"></p>
    <ul class="cart-list"></ul>
    <div class="cart-footer">
      <p class="cart-note">${t.cart.note}</p>
      <button class="whatsapp-button cart-checkout" type="button"><span class="whatsapp-dot" aria-hidden="true"></span>${t.cart.checkout}<span aria-hidden="true">→</span></button>
      <button class="cart-clear" type="button">${t.cart.clear}</button>
    </div>
  </div>`;
  document.body.append(cartDialog);
  const cartList = cartDialog.querySelector(".cart-list");

  const cartItems = () => cartIds.map((id) => productById.get(id));

  function renderCart() {
    const items = cartItems();
    cartDialog.querySelector(".cart-count").textContent = items.length ? t.cart.count(items.length) : "";
    cartDialog.querySelector(".cart-footer").hidden = !items.length;
    cartList.innerHTML = items.length ? items.map((item) => {
      const product = tx(item);
      const label = product.code || product.name;
      return `<li class="cart-item">
        <span class="cart-item-photo tone-${product.tone}">${product.image ? `<img src="${assetBase}${product.image}" alt="" loading="lazy" decoding="async" width="56" height="72" />` : ""}</span>
        <span class="cart-item-info"><strong>${label}</strong><small>${product.category}</small></span>
        <button class="cart-item-remove" type="button" data-remove="${item.id}" aria-label="${t.cart.removeItem(label)}">×</button>
      </li>`;
    }).join("") : `<li class="cart-empty">${t.cart.empty}</li>`;
  }

  // Sepetin durumunu ürün penceresindeki düğmelere, yüzen sepet düğmesine ve (açıksa) sepet penceresine yansıtır.
  function syncCart() {
    try { sessionStorage.setItem(cartKey, JSON.stringify(cartIds)); } catch {}
    const inCart = Boolean(activeProduct) && cartIds.includes(activeProduct.id);
    const orderable = Boolean(activeProduct) && !activeProduct.custom && !activeProduct.cart;
    cartToggle.hidden = !orderable;
    cartToggle.textContent = inCart ? `✓ ${t.cart.remove}` : `+ ${t.cart.add}`;
    cartToggle.setAttribute("aria-pressed", String(inCart));
    cartLink.hidden = !orderable || !cartIds.length;
    cartLink.textContent = t.cart.open(cartIds.length);
    cartFab.hidden = !cartIds.length;
    cartFab.textContent = t.cart.fab(cartIds.length);
    if (cartDialog.open) renderCart();
  }

  function openCart() {
    renderCart();
    cartDialog.showModal();
  }

  // Sepet siparişinde pencere, sepetteki ürünleri ok tuşlarıyla gezdirir; index şu an gösterilen ürünü tutar.
  function cartProduct(index = 0) {
    const items = cartItems();
    const current = items[index];
    return {
      id: "sepet", cart: true, items, index, code: "",
      category: `${t.cart.title} · ${t.cart.count(items.length)}`, name: current.code,
      description: t.cart.position(index + 1, items.length),
      tone: current.tone, image: current.image, imageWidth: current.imageWidth, imageHeight: current.imageHeight,
      imageFit: current.imageFit, imagePosition: current.imagePosition, badge: ""
    };
  }

  function stepCartItem(delta) {
    if (!activeProduct?.cart) return;
    const count = activeProduct.items.length;
    setProduct(cartProduct((activeProduct.index + delta + count) % count));
  }

  cartToggle.addEventListener("click", () => {
    const id = activeProduct.id;
    if (cartIds.includes(id)) {
      cartIds = cartIds.filter((item) => item !== id);
      cartMessage.textContent = "";
    } else if (cartIds.length >= cartLimit) {
      cartMessage.textContent = t.cart.full;
    } else {
      cartIds.push(id);
      cartMessage.textContent = "";
    }
    syncCart();
  });
  cartLink.addEventListener("click", () => { dialog.close(); openCart(); });
  cartFab.addEventListener("click", openCart);
  cartList.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove]");
    if (!remove) return;
    cartIds = cartIds.filter((id) => id !== remove.dataset.remove);
    syncCart();
  });
  cartDialog.querySelector(".cart-clear").addEventListener("click", () => { cartIds = []; syncCart(); });
  cartDialog.querySelector(".cart-close").addEventListener("click", () => cartDialog.close());
  cartDialog.addEventListener("click", (event) => { if (event.target === cartDialog) cartDialog.close(); });
  cartDialog.querySelector(".cart-checkout").addEventListener("click", () => {
    if (!cartIds.length) return;
    cartDialog.close();
    openProduct(cartProduct());
  });

  function openProduct(product) {
    setProduct(product);
    if (!dialog.open) dialog.showModal();
    setStep(product.custom ? 1 : 0);
  }

  // Tam ekran fotoğraf görüntüleyici: fotoğrafa dokununca açılır; dokununca veya Esc ile kapanır.
  const viewer = document.createElement("dialog");
  viewer.className = "photo-viewer";
  viewer.innerHTML = `<img alt="" /><button class="photo-viewer-close" type="button" aria-label="${t.closePhoto}">×</button>`;
  document.body.append(viewer);
  viewer.addEventListener("click", () => viewer.close());

  function openViewer() {
    if (!activeProduct?.image) return;
    const img = viewer.querySelector("img");
    img.src = `${assetBase}${activeProduct.image}`;
    img.alt = tx(activeProduct).alt;
    viewer.showModal();
  }

  const dialogVisual = document.querySelector("#dialog-visual");
  dialogVisual.addEventListener("click", (event) => {
    const arrow = event.target.closest("[data-cart-step]");
    if (arrow) { stepCartItem(Number(arrow.dataset.cartStep)); return; }
    openViewer();
  });
  dialogVisual.addEventListener("keydown", (event) => {
    if (event.target.closest("[data-cart-step]")) return;
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openViewer(); }
  });
  // Sepet siparişinde klavyenin sol/sağ okları da ürünleri gezdirir (form alanlarında yazarken değil).
  dialog.addEventListener("keydown", (event) => {
    if (!activeProduct?.cart || event.target.closest("input, textarea, select")) return;
    if (event.key === "ArrowLeft") stepCartItem(-1);
    if (event.key === "ArrowRight") stepCartItem(1);
  });

  function orderData() {
    const data = new FormData(form);
    return Object.fromEntries(data.entries());
  }

  function buildMessage(values) {
    const deliveryTime = values.deliveryTime === "custom" ? values.customDeliveryTime : values.deliveryTime;
    const m = t.message;
    // Ürün, tüm dillerde aynı kalıcı kodla tanınır.
    let productName = activeProduct.code || (isTurkish ? activeProduct.name : `${tx(activeProduct).name} (${activeProduct.name})`);
    // "Bize Bırak" hangi kategoriden açıldıysa mesajda yazsın (ör. Bize Bırak – Yapay Ağaçlar).
    const chosenKey = activeProduct.custom && activeProduct.categoryKey;
    if (chosenKey && chosenKey !== "Tümü") productName += ` – ${t.categories[chosenKey] || chosenKey}`;
    // Fotoğraf adresi mesajda küçük resimli önizleme olarak görünür; dükkân ürünü bir bakışta tanır.
    const photoUrl = (item) => (item.image ? [`https://buketiaflower.com/${item.image}`] : []);
    const productLines = activeProduct.cart
      ? activeProduct.items.flatMap((item, index) => [`${index + 1}. ${item.code}`, ...photoUrl(item)])
      : [productName, ...photoUrl(activeProduct)];
    const budgetLines = activeProduct.custom ? [`💰 ${m.budget}: ${money.format(Number(values.budget))}`] : [];
    // 2026-10-04 yerine "4 Ekim 2026 Pazar" gibi okunur tarih.
    const [y, mo, d] = String(values.deliveryDate).split("-").map(Number);
    const dateText = y ? new Date(y, mo - 1, d).toLocaleDateString(t.locale, { day: "numeric", month: "long", year: "numeric", weekday: "long" }) : values.deliveryDate;
    return [
      activeProduct.cart ? m.introCart : m.intro,
      "",
      `🌸 *${m.product}*`,
      ...productLines,
      ...budgetLines,
      "",
      `📅 *${m.delivery}*`,
      `${dateText} · ${deliveryTime}`,
      `📍 ${values.address}`,
      "",
      `🎁 *${m.recipient}*`,
      `${values.recipientName} · ${values.recipientPhone}`,
      "",
      `💌 *${m.card}*`,
      values.cardNote || "—",
      "",
      `👤 *${m.customer}*`,
      `${values.customerName} · ${values.customerPhone}`,
      "",
      m.courier
    ].join("\n");
  }


  const switchTo = (category) => {
    grid.classList.add("is-switching");
    clearTimeout(grid._switchTimer);
    grid._switchTimer = setTimeout(() => { render(category); grid.classList.remove("is-switching"); }, 260);
  };

  // Kategori çubuğu: kapalıyken seçili kategoriyi gösterir, dokununca tüm kategoriler açılır.
  const categoryToggle = document.querySelector(".category-toggle");
  const categoryPanel = document.querySelector("#category-panel");
  const setCategoryPanel = (open) => {
    categoryPanel.classList.toggle("is-open", open);
    categoryPanel.inert = !open;
    categoryToggle.setAttribute("aria-expanded", String(open));
  };
  categoryToggle.addEventListener("click", () => setCategoryPanel(!categoryPanel.classList.contains("is-open")));

  searchInput.addEventListener("input", () => {
    clearTimeout(grid._switchTimer);
    grid.classList.remove("is-switching");
    document.querySelectorAll(".category").forEach((button) => button.classList.toggle("active", button.dataset.category === "Tümü"));
    document.querySelector("[data-current]").textContent = document.querySelector('.category[data-category="Tümü"]').textContent.trim();
    setCategoryPanel(false);
    render();
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    render(currentCategory);
    searchInput.focus();
  });

  document.querySelectorAll(".category").forEach((button) => {
    button.addEventListener("click", () => {
      searchInput.value = "";
      document.querySelectorAll(".category.active").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(`.category[data-category="${button.dataset.category}"]`).forEach((b) => b.classList.add("active"));
      document.querySelector("[data-current]").textContent = button.textContent.trim();
      setCategoryPanel(false);
      switchTo(button.dataset.category);
    });
  });

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product]");
    if (!button) return;
    const product = products.find((item) => item.id === button.dataset.product);
    if (product) openProduct(product);
  });

  document.querySelector("[data-open-choice]").addEventListener("click", () => openProduct({
    ...designerChoice,
    budgetRange: budgetRanges[currentCategory.split(",")[0]] || defaultBudget,
    categoryKey: currentCategory
  }));
  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

  function syncCustomDeliveryTime() {
    const isCustom = deliveryTimeSelect.value === "custom";
    setShown(customTimeField, isCustom);
    customTimeInput.required = isCustom;
    customTimeToggle.setAttribute("aria-expanded", String(isCustom));
    if (!isCustom) customTimeInput.value = "";
  }

  deliveryTimeSelect.addEventListener("change", syncCustomDeliveryTime);
  customTimeToggle.addEventListener("click", () => {
    deliveryTimeSelect.value = "custom";
    syncCustomDeliveryTime();
    customTimeInput.focus();
  });
  syncCustomDeliveryTime();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Telefonda klavyeden "Git"e basılırsa son adıma kadar formu göndermek yerine sonraki adıma geç.
    if (getComputedStyle(stepNext).display !== "none") {
      if (stepIsValid()) setStep(step + 1);
      return;
    }
    if (!form.reportValidity()) {
      error.textContent = t.formError;
      return;
    }
    error.textContent = "";
    const message = buildMessage(orderData());
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });

  const dateInput = form.elements.deliveryDate;
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = localToday;
  dateInput.value = localToday;
  document.querySelector("#year").textContent = String(today.getFullYear());

  function updateOpenStatus() {
    const status = document.querySelector("[data-open-status]");
    if (!status) return;
    const parts = Object.fromEntries(new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Istanbul", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date()).map((part) => [part.type, part.value]));
    const minutes = Number(parts.hour) * 60 + Number(parts.minute);
    const isSunday = parts.weekday === "Sun";
    const opens = isSunday ? 9 * 60 : 8 * 60 + 30;
    const closes = isSunday ? 20 * 60 : 20 * 60 + 30;
    const nextOpen = parts.weekday === "Sat" ? t.time("09", "00") : t.time("08", "30");
    const isOpen = minutes >= opens && minutes < closes;
    let text;
    if (isOpen) text = t.openNow(isSunday ? t.time("20", "00") : t.time("20", "30"));
    else if (minutes < opens) text = t.opensToday(isSunday ? t.time("09", "00") : t.time("08", "30"));
    else text = t.opensTomorrow(nextOpen);
    status.querySelector("[data-open-status-text]").textContent = text;
    status.classList.toggle("is-closed", !isOpen);
  }
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

  const langSwitch = document.querySelector(".lang-switch");
  document.addEventListener("click", (event) => {
    if (langSwitch?.open && !langSwitch.contains(event.target)) langSwitch.open = false;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && langSwitch?.open) { langSwitch.open = false; langSwitch.querySelector("summary").focus(); }
  });

  function registerWebMcp() {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const productIds = products.map((product) => product.id);
    Promise.resolve(context.registerTool({
      name: "prepare_whatsapp_order",
      title: "WhatsApp siparişi hazırla",
      description: "Buketia Flower kataloğunda seçilen ürün için teslimat bilgilerini sipariş formuna doldurur ve hazır mesajı döndürür.",
      inputSchema: {
        type: "object",
        properties: {
          productId: { type: "string", enum: productIds },
          deliveryDate: { type: "string", description: "YYYY-MM-DD" },
          deliveryTime: { type: "string" },
          customDeliveryTime: { type: "string", description: "Özel saat seçildiyse HH:MM" },
          recipientName: { type: "string" },
          recipientPhone: { type: "string" },
          address: { type: "string" },
          cardNote: { type: "string" },
          customerName: { type: "string" },
          customerPhone: { type: "string" }
        },
        required: ["productId", "deliveryDate", "deliveryTime", "recipientName", "recipientPhone", "address", "customerName", "customerPhone"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const product = products.find((item) => item.id === input.productId);
        if (!product) throw new Error("Ürün bulunamadı.");
        const deliveryTime = input.deliveryTime === "custom" ? input.customDeliveryTime : input.deliveryTime;
        if (!input.deliveryDate || !deliveryTime || !input.recipientName || !input.recipientPhone || !input.address || !input.customerName || !input.customerPhone) throw new Error("Zorunlu sipariş bilgileri eksik.");
        openProduct(product);
        setStep(3);
        Object.entries(input).forEach(([key, value]) => { if (form.elements[key]) form.elements[key].value = value; });
        syncCustomDeliveryTime();
        const message = buildMessage(input);
        return { product: product.name, message, whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` };
      }
    })).catch(() => {});
  }

  syncCart();
  render();
  registerWebMcp();
})();
