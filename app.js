(() => {
  const products = window.BUKETIA_PRODUCTS || [];
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
  const locationLink = document.querySelector("#location-link");
  const shopAddress = "52/1 Sokak No: 7/C, Seferihisar, İzmir";
  const mapsFallback = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopAddress)}`;
  const designerChoice = {
    id: "bize-birak",
    name: "Bize Bırak",
    category: "Buketia seçkisi",
    description: "Bütçenizi belirleyin; mevsimin en güzel çiçekleriyle buketinizi Buketia Flower’ın zevkine bırakın.",
    tone: "ivory",
    image: "",
    custom: true
  };

  locationLink?.addEventListener("click", (event) => {
    const userAgent = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      event.preventDefault();
      window.location.href = `maps://?q=${encodeURIComponent(shopAddress)}`;
    } else if (!/Android/i.test(userAgent)) {
      event.preventDefault();
      window.open(mapsFallback, "_blank", "noopener,noreferrer");
    }
  });
  let activeProduct = products[0] || null;

  const money = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 });

  const visualMarkup = (product) => product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : `<span>Görsel eklenecek</span>`;

  function productCard(product) {
    return `<article class="product-card">
      <button class="product-button" type="button" data-product="${product.id}" aria-label="${product.name} ürününü incele">
        <div class="product-visual tone-${product.tone}">
          ${visualMarkup(product)}
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        </div>
        <div class="product-meta">
          <small>${product.category}</small>
          <h3>${product.name}</h3>
        </div>
      </button>
    </article>`;
  }

  function render(category = "Tümü") {
    const visible = category === "Tümü" ? products : products.filter((p) => p.categories.includes(category));
    grid.innerHTML = visible.map(productCard).join("");
    count.textContent = `${visible.length} tasarım`;
  }

  function setProduct(product) {
    activeProduct = product;
    document.querySelector("#dialog-category").textContent = product.category;
    document.querySelector("#dialog-title").textContent = product.name;
    document.querySelector("#dialog-description").textContent = product.description;
    const priceLabel = document.querySelector("#dialog-price");
    priceLabel.textContent = product.custom ? "₺1.500 – ₺5.000" : "Fiyat bilgisi WhatsApp üzerinden iletilir.";
    priceLabel.classList.toggle("price-note", !product.custom);
    budgetField.hidden = !product.custom;
    budgetInput.disabled = !product.custom;
    budgetInput.required = Boolean(product.custom);
    if (product.custom) budgetInput.value = "";
    const visual = document.querySelector("#dialog-visual");
    visual.className = `dialog-visual product-visual tone-${product.tone}`;
    visual.innerHTML = visualMarkup(product);
  }

  function openProduct(product) {
    setProduct(product);
    error.textContent = "";
    if (!dialog.open) dialog.showModal();
  }

  function orderData() {
    const data = new FormData(form);
    return Object.fromEntries(data.entries());
  }

  function buildMessage(values) {
    const deliveryTime = values.deliveryTime === "custom" ? values.customDeliveryTime : values.deliveryTime;
    const budgetLines = activeProduct.custom ? [`Bütçe: ${money.format(Number(values.budget))}`] : [];
    return [
      "Merhaba Buketia Flower, bu ürün için sipariş vermek istiyorum:",
      "",
      `Ürün: ${activeProduct.name}`,
      ...budgetLines,
      `Teslimat: ${values.deliveryDate} · ${deliveryTime}`,
      `Alıcı: ${values.recipientName}`,
      `Adres: ${values.address}`,
      "Kurye ücreti: Buketia tarafından belirlenecek",
      `Kart notu: ${values.cardNote || "—"}`,
      "",
      `Siparişi veren: ${values.customerName}`,
      `Telefon: ${values.customerPhone}`
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
    if (!form.reportValidity()) {
      error.textContent = "Lütfen zorunlu alanları tamamlayın.";
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
          address: { type: "string" },
          cardNote: { type: "string" },
          customerName: { type: "string" },
          customerPhone: { type: "string" }
        },
        required: ["productId", "deliveryDate", "deliveryTime", "recipientName", "address", "customerName", "customerPhone"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const product = products.find((item) => item.id === input.productId);
        if (!product) throw new Error("Ürün bulunamadı.");
        const deliveryTime = input.deliveryTime === "custom" ? input.customDeliveryTime : input.deliveryTime;
        if (!input.deliveryDate || !deliveryTime || !input.recipientName || !input.address || !input.customerName || !input.customerPhone) throw new Error("Zorunlu sipariş bilgileri eksik.");
        openProduct(product);
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
