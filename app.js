(() => {
  // Fotoğrafı olmayan ürünler katalogda gösterilmez; products.js'te image doldurulunca kendiliğinden görünür.
  // İstisna: Çelenk ürünleri fotoğrafsız da (renkli zeminle) yalnızca "Çelenk" kategorisinde görünür, "Tümü"de görünmez.
  const products = (window.BUKETIA_PRODUCTS || []).filter((product) => product.image || product.categories.includes("Çelenk"));
  const grid = document.querySelector("#product-grid");
  const count = document.querySelector("#result-count");
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

  const dictionaries = window.BUKETIA_I18N || {};
  const t = dictionaries[document.documentElement.lang.slice(0, 2)] || dictionaries.tr;
  const isTurkish = t === dictionaries.tr;
  const tx = (product) => ({ ...product, ...(t.products[product.id] || {}), category: t.categories[product.category] || product.category });
  // Alt sayfalarda (/en/ vb.) ürün görselleri bir üst klasördedir.
  const assetBase = document.documentElement.dataset.assetBase || "";

  let activeProduct = products[0] || null;

  const money = new Intl.NumberFormat(t.locale, { style: "currency", currency: "TRY", currencyDisplay: "narrowSymbol", maximumFractionDigits: 0 });

  const visualMarkup = (product) => product.image
    ? `<img src="${assetBase}${product.image}" alt="${product.name}" loading="lazy" />`
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

  function render(category = "Tümü") {
    const visible = category === "Tümü" ? products.filter((p) => p.image) : products.filter((p) => p.categories.includes(category));
    grid.innerHTML = visible.map(productCard).join("");
    // "Bize Bırak" buket seçeneğidir; Çelenk kategorisinde gösterilmez.
    document.querySelector("[data-open-choice]").hidden = category === "Çelenk";
    count.textContent = t.count(visible.length);
  }

  function setProduct(item) {
    activeProduct = item;
    const product = tx(item);
    document.querySelector("#dialog-category").textContent = product.category;
    document.querySelector("#dialog-title").textContent = product.name;
    document.querySelector("#dialog-description").textContent = product.description;
    const priceLabel = document.querySelector("#dialog-price");
    priceLabel.textContent = product.custom ? "₺1.500 – ₺5.000" : t.priceNote;
    priceLabel.classList.toggle("price-note", !product.custom);
    budgetField.hidden = !product.custom;
    budgetInput.disabled = !product.custom;
    budgetInput.required = Boolean(product.custom);
    if (product.custom) budgetInput.value = "";
    const visual = document.querySelector("#dialog-visual");
    visual.className = `dialog-visual product-visual tone-${product.tone}${product.image ? " has-photo" : ""}`;
    visual.innerHTML = visualMarkup(product) + (product.image ? `<span class="dialog-zoom-hint"><span class="dialog-zoom-text">${t.zoomPhoto} </span>⤢</span>` : "");
    if (product.image) {
      visual.setAttribute("role", "button");
      visual.tabIndex = 0;
      visual.setAttribute("aria-label", t.zoomPhoto);
    } else {
      visual.removeAttribute("role");
      visual.removeAttribute("tabindex");
      visual.removeAttribute("aria-label");
    }
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
    img.alt = tx(activeProduct).name;
    viewer.showModal();
  }

  const dialogVisual = document.querySelector("#dialog-visual");
  dialogVisual.addEventListener("click", openViewer);
  dialogVisual.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openViewer(); }
  });

  function orderData() {
    const data = new FormData(form);
    return Object.fromEntries(data.entries());
  }

  function buildMessage(values) {
    const deliveryTime = values.deliveryTime === "custom" ? values.customDeliveryTime : values.deliveryTime;
    const m = t.message;
    // Yabancı dilde ürünün Türkçe adı da yazılır ki dükkân ürünü hemen tanısın.
    const productName = isTurkish ? activeProduct.name : `${tx(activeProduct).name} (${activeProduct.name})`;
    const budgetLines = activeProduct.custom ? [`${m.budget}: ${money.format(Number(values.budget))}`] : [];
    return [
      m.intro,
      "",
      `${m.product}: ${productName}`,
      ...budgetLines,
      `${m.delivery}: ${values.deliveryDate} · ${deliveryTime}`,
      `${m.recipient}: ${values.recipientName}`,
      `${m.recipientPhone}: ${values.recipientPhone}`,
      `${m.address}: ${values.address}`,
      m.courier,
      `${m.card}: ${values.cardNote || "—"}`,
      "",
      `${m.customer}: ${values.customerName}`,
      `${m.phone}: ${values.customerPhone}`
    ].join("\n");
  }

  document.querySelectorAll(".category").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".category.active")?.classList.remove("active");
      button.classList.add("active");
      render(button.dataset.category);
    });
  });

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product]");
    if (!button) return;
    const product = products.find((item) => item.id === button.dataset.product);
    if (product) openProduct(product);
  });

  document.querySelector("[data-open-choice]").addEventListener("click", () => openProduct(designerChoice));
  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

  function syncCustomDeliveryTime() {
    const isCustom = deliveryTimeSelect.value === "custom";
    customTimeField.hidden = !isCustom;
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

  render();
  registerWebMcp();
})();
