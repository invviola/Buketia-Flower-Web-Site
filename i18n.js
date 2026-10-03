// Dil dosyası: app.js'in ekrana yazdığı dinamik metinler ve ürün çevirileri.
// Sayfadaki sabit metinler her dilin kendi HTML dosyasındadır: / (tr), /en/, /ru/, /de/.
// Yeni ürün eklerken products.js'teki id ile buraya en, ru ve de çevirisini de ekleyin; çeviri yoksa Türkçe görünür.
(() => {
  const ruPlural = new Intl.PluralRules("ru");

  window.BUKETIA_I18N = {
    tr: {
      locale: "tr-TR",
      time: (h, m) => `${h}.${m}`,
      count: (n) => `${n} tasarım`,
      empty: "Bu kategoriye yakında yeni tasarımlar eklenecek.",
      imagePending: "Görsel eklenecek",
      priceNote: "Fiyat bilgisi WhatsApp üzerinden iletilir.",
      formError: "Lütfen zorunlu alanları tamamlayın.",
      orderStart: "Sipariş oluştur", zoomPhoto: "Fotoğrafı büyüt", closePhoto: "Kapat", backToProduct: "Ürüne dön",
      next: "Devam", stepOf: (n, total) => `Adım ${n} / ${total}`,
      stepQuestions: ["Ne zaman teslim edelim?", "Çiçekler kime gidiyor?", "Sizi nasıl arayalım?"],
      viewProduct: (name) => `${name} ürününü incele`,
      openNow: (t) => `Şu an açık · ${t}’${t.endsWith(".00") ? "ye" : "a"} kadar`,
      opensToday: (t) => `Şu an kapalı · ${t}’da açılır`,
      opensTomorrow: (t) => `Şu an kapalı · yarın ${t}’da açılır`,
      message: {
        intro: "Merhaba Buketia Flower, bu ürün için sipariş vermek istiyorum:",
        product: "Ürün", budget: "Bütçe", delivery: "Teslimat", recipient: "Alıcı", recipientPhone: "Alıcı telefonu", address: "Adres",
        courier: "Kurye ücreti: Buketia tarafından belirlenecek", card: "Kart notu", customer: "Siparişi veren", phone: "Telefon"
      },
      categories: {},
      products: {}
    },

    en: {
      locale: "en-GB",
      time: (h, m) => `${h}:${m}`,
      count: (n) => `${n} ${n === 1 ? "design" : "designs"}`,
      empty: "New designs will be added to this category soon.",
      imagePending: "Photo coming soon",
      priceNote: "Prices are shared via WhatsApp.",
      formError: "Please fill in the required fields.",
      orderStart: "Order now", zoomPhoto: "Enlarge photo", closePhoto: "Close", backToProduct: "Back to product",
      next: "Continue", stepOf: (n, total) => `Step ${n} of ${total}`,
      stepQuestions: ["When should we deliver?", "Who are the flowers for?", "How can we reach you?"],
      viewProduct: (name) => `View ${name}`,
      openNow: (t) => `Open now · until ${t}`,
      opensToday: (t) => `Closed now · opens at ${t}`,
      opensTomorrow: (t) => `Closed now · opens tomorrow at ${t}`,
      message: {
        intro: "Hello Buketia Flower, I would like to order this item:",
        product: "Item", budget: "Budget", delivery: "Delivery", recipient: "Recipient", recipientPhone: "Recipient’s phone", address: "Address",
        courier: "Courier fee: to be set by Buketia", card: "Card message", customer: "Ordered by", phone: "Phone"
      },
      categories: {
        "Doğum Günü": "Birthday", "Sevgiliye": "Romance", "Yeni İş": "New Job", "Geçmiş Olsun": "Get Well",
        "Buket": "Bouquets", "Yeni Doğum": "Newborn", "Yapay Ağaç": "Faux Trees", "Özel Aranjman": "Custom Arrangements", "Orkide": "Orchids", "Gelin Buketi": "Bridal", "Çelenk": "Wreaths", "Buketia seçkisi": "Buketia selection"
      },
      products: {
        "bize-birak": { name: "Leave It to Us", description: "Set your budget and let Buketia Flower create your bouquet with the season’s most beautiful flowers." },
        "romantik-pudra": { name: "Romantic Blush", description: "Our signature bouquet of seasonal flowers in soft blush tones with delicate greenery.", badge: "Most loved" },
        "beyaz-orkide": { name: "Pure Elegance Orchid", description: "A graceful, long-lasting white double-stem orchid in a matte ceramic pot.", badge: "New" },
        "ask-kirmizi": { name: "Deep Love", description: "A bold, modern bouquet of red roses and rich burgundy textures.", badge: "Signature design" },
        "iyi-hisset": { name: "Feel Good", description: "A cheerful, softly textured seasonal bouquet in pale yellow and white.", badge: "Seasonal pick" },
        "yeni-baslangic": { name: "New Beginnings", description: "A celebratory arrangement of white and green flowers in a modern box.", badge: "Office-friendly" },
        "gelin-inci": { name: "Pearl Bridal Bouquet", description: "A timeless bridal bouquet layered in soft shades of white.", badge: "Bespoke design" },
        "saygi-celengi": { name: "Graceful Tribute Wreath", description: "A refined, understated opening wreath of white flowers and select greenery.", badge: "Same day" },
        "taziye-celengi": { name: "Pure Serenity Wreath", description: "A measured condolence wreath of white roses, lilies and simple greenery, made with respect and sympathy." },
        "tebrik-celengi": { name: "Grand Celebration Wreath", description: "A showy congratulatory wreath of fresh seasonal flowers for openings, weddings and celebrations." },
        "pastel-kutlama": { name: "Pastel Celebration", description: "A joyful birthday arrangement of lush blooms in pastel shades.", badge: "Limited" },
        "fusya-ruya": { name: "Fuchsia Dream", description: "A vibrant, eye-catching bouquet of gladioli, chrysanthemums and roses in fuchsia wrap." },
        "kirmizi-kalp": { name: "Red Heart", description: "An unforgettable heart-shaped arrangement of red roses." },
        "pembe-masal": { name: "Pink Fairytale", description: "A romantic bouquet of pink roses, alstroemeria and lilies in cream wrap." },
        "mercan-guller": { name: "Coral Roses", description: "Coral and cream roses with gypsophila in natural straw wrap." },
        "isme-ozel-gul-kutusu": { name: "Personalised Rose Box", description: "A one-of-a-kind design of red roses in a clear box, finished with your loved one’s name.", badge: "Personalised" },
        "gunesli-gun": { name: "Sunny Day", description: "A bouquet of sunflowers and orange roses that is sure to bring a smile." },
        "beyaz-lilyum": { name: "White Lily", description: "A fresh, graceful bouquet of white lilies and pink roses." },
        "bahar-sepeti": { name: "Spring Basket", description: "A cheerful arrangement of gerberas, lilies and chrysanthemums in a wicker basket." },
        "lavanta-bahcesi": { name: "Lavender Garden", description: "An elegant bouquet of pink roses and seasonal flowers in purple wrap." },
        "altin-gece": { name: "Golden Night", description: "A stylish bouquet of lilies and colourful seasonal flowers in black and gold wrap." },
        "kir-esintisi": { name: "Country Breeze", description: "A natural, colourful bouquet of lilies with blue and yellow seasonal flowers." },
        "mor-melodi": { name: "Purple Melody", description: "A cheerful bouquet of pink lilies and colourful seasonal flowers in purple wrap." },
        "orman-buketi": { name: "Forest Bouquet", description: "A natural, vibrant bouquet of lilies and seasonal flowers in deep green wrap." },
        "gri-zarafet": { name: "Grey Elegance", description: "A modern bouquet of lilies, carnations and colourful flowers in grey wrap." },
        "beyaz-ruya": { name: "White Dream", description: "A graceful bouquet of pink lilies and seasonal flowers in white wrap." },
        "yaz-senligi": { name: "Summer Festival", description: "A cheerful bouquet of colourful alstroemeria, lilies and carnations." },
        "mutluluk-sepeti": { name: "Happiness Basket", description: "A joyful arrangement of gerberas, lilies and colourful flowers in a wicker basket." },
        "bohem-sepet": { name: "Boho Basket", description: "A bohemian arrangement of hydrangeas, roses and trailing amaranth in a woven basket.", badge: "Bespoke design" }
      }
    },

    ru: {
      locale: "ru-RU",
      time: (h, m) => `${h}:${m}`,
      count: (n) => `${n} ${{ one: "дизайн", few: "дизайна" }[ruPlural.select(n)] || "дизайнов"}`,
      empty: "Новые композиции скоро появятся в этой категории.",
      imagePending: "Фото скоро появится",
      priceNote: "Цену сообщим в WhatsApp.",
      formError: "Пожалуйста, заполните обязательные поля.",
      orderStart: "Оформить заказ", zoomPhoto: "Увеличить фото", closePhoto: "Закрыть", backToProduct: "Назад к товару",
      next: "Далее", stepOf: (n, total) => `Шаг ${n} из ${total}`,
      stepQuestions: ["Когда доставить?", "Кому эти цветы?", "Как с вами связаться?"],
      viewProduct: (name) => `Подробнее: ${name}`,
      openNow: (t) => `Сейчас открыто · до ${t}`,
      opensToday: (t) => `Сейчас закрыто · откроемся в ${t}`,
      opensTomorrow: (t) => `Сейчас закрыто · откроемся завтра в ${t}`,
      message: {
        intro: "Здравствуйте, Buketia Flower! Хочу заказать:",
        product: "Товар", budget: "Бюджет", delivery: "Доставка", recipient: "Получатель", recipientPhone: "Телефон получателя", address: "Адрес",
        courier: "Стоимость доставки: определит Buketia", card: "Текст открытки", customer: "Заказчик", phone: "Телефон"
      },
      categories: {
        "Doğum Günü": "День рождения", "Sevgiliye": "Любимым", "Yeni İş": "Новая работа", "Geçmiş Olsun": "Выздоравливайте",
        "Buket": "Букеты", "Yeni Doğum": "Новорождённым", "Yapay Ağaç": "Искусственные деревья", "Özel Aranjman": "Особые композиции", "Orkide": "Орхидеи", "Gelin Buketi": "Свадебные", "Çelenk": "Венки", "Buketia seçkisi": "Выбор Buketia"
      },
      products: {
        "bize-birak": { name: "Доверьтесь нам", description: "Укажите бюджет, а Buketia Flower соберёт для вас букет из самых красивых цветов сезона." },
        "romantik-pudra": { name: "Романтичная пудра", description: "Фирменный букет из сезонных цветов в пудровых тонах с изящной зеленью.", badge: "Хит" },
        "beyaz-orkide": { name: "Орхидея «Чистая элегантность»", description: "Изящная долговечная белая орхидея с двумя цветоносами в матовом керамическом горшке.", badge: "Новинка" },
        "ask-kirmizi": { name: "Глубокая любовь", description: "Яркий современный букет из красных роз с насыщенными бордовыми акцентами.", badge: "Авторский дизайн" },
        "iyi-hisset": { name: "Хорошее настроение", description: "Светлый сезонный букет мягкой фактуры в бледно-жёлтых и белых тонах.", badge: "Выбор сезона" },
        "yeni-baslangic": { name: "Новое начало", description: "Праздничная композиция из белых и зелёных цветов в современной коробке.", badge: "Для офиса" },
        "gelin-inci": { name: "Свадебный букет «Жемчуг»", description: "Классический свадебный букет из многослойных оттенков белого.", badge: "Индивидуальный дизайн" },
        "saygi-celengi": { name: "Венок «Почтение»", description: "Сдержанный и изящный венок на открытие из белых цветов и отборной зелени.", badge: "В день заказа" },
        "taziye-celengi": { name: "Венок «Белый покой»", description: "Сдержанный траурный венок из белых роз, лилий и простой зелени — дань уважения и соболезнования." },
        "tebrik-celengi": { name: "Венок «Торжество»", description: "Эффектный поздравительный венок из свежих сезонных цветов для открытий, свадеб и торжеств." },
        "pastel-kutlama": { name: "Пастельный праздник", description: "Радостная композиция ко дню рождения из пышных цветов пастельных оттенков.", badge: "Ограниченная серия" },
        "fusya-ruya": { name: "Мечта цвета фуксии", description: "Яркий, эффектный букет из гладиолусов, хризантем и роз в упаковке цвета фуксии." },
        "kirmizi-kalp": { name: "Красное сердце", description: "Незабываемая композиция из красных роз в форме сердца." },
        "pembe-masal": { name: "Розовая сказка", description: "Романтичный букет из розовых роз, альстромерий и лилий в кремовой упаковке." },
        "mercan-guller": { name: "Коралловые розы", description: "Коралловые и кремовые розы с гипсофилой в натуральной соломенной упаковке." },
        "isme-ozel-gul-kutusu": { name: "Именная коробка с розами", description: "Уникальная композиция из красных роз в прозрачной коробке с именем любимого человека.", badge: "С именем" },
        "gunesli-gun": { name: "Солнечный день", description: "Букет из подсолнухов и оранжевых роз, который обязательно вызовет улыбку." },
        "beyaz-lilyum": { name: "Белая лилия", description: "Свежий, изящный букет из белых лилий и розовых роз." },
        "bahar-sepeti": { name: "Весенняя корзина", description: "Радостная композиция из гербер, лилий и хризантем в плетёной корзине." },
        "lavanta-bahcesi": { name: "Лавандовый сад", description: "Изящный букет из розовых роз и сезонных цветов в фиолетовой упаковке." },
        "altin-gece": { name: "Золотая ночь", description: "Стильный букет из лилий и ярких сезонных цветов в чёрно-золотой упаковке." },
        "kir-esintisi": { name: "Полевой бриз", description: "Природный, яркий букет из лилий с голубыми и жёлтыми сезонными цветами." },
        "mor-melodi": { name: "Фиолетовая мелодия", description: "Весёлый букет из розовых лилий и ярких сезонных цветов в фиолетовой упаковке." },
        "orman-buketi": { name: "Лесной букет", description: "Природный, яркий букет из лилий и сезонных цветов в тёмно-зелёной упаковке." },
        "gri-zarafet": { name: "Серая элегантность", description: "Современный букет из лилий, гвоздик и ярких цветов в серой упаковке." },
        "beyaz-ruya": { name: "Белая мечта", description: "Изящный букет из розовых лилий и сезонных цветов в белой упаковке." },
        "yaz-senligi": { name: "Летний праздник", description: "Весёлый букет из разноцветных альстромерий, лилий и гвоздик." },
        "mutluluk-sepeti": { name: "Корзина счастья", description: "Радостная композиция из гербер, лилий и ярких цветов в плетёной корзине." },
        "bohem-sepet": { name: "Корзина в стиле бохо", description: "Композиция в стиле бохо из гортензий, роз и свисающего амаранта в плетёной корзине.", badge: "Индивидуальный дизайн" }
      }
    },

    de: {
      locale: "de-DE",
      time: (h, m) => `${h}:${m}`,
      count: (n) => `${n} ${n === 1 ? "Design" : "Designs"}`,
      empty: "Bald kommen neue Designs in dieser Kategorie hinzu.",
      imagePending: "Foto folgt",
      priceNote: "Preise erhalten Sie per WhatsApp.",
      formError: "Bitte füllen Sie die Pflichtfelder aus.",
      orderStart: "Jetzt bestellen", zoomPhoto: "Foto vergrößern", closePhoto: "Schließen", backToProduct: "Zurück zum Produkt",
      next: "Weiter", stepOf: (n, total) => `Schritt ${n} von ${total}`,
      stepQuestions: ["Wann sollen wir liefern?", "Für wen sind die Blumen?", "Wie erreichen wir Sie?"],
      viewProduct: (name) => `${name} ansehen`,
      openNow: (t) => `Jetzt geöffnet · bis ${t} Uhr`,
      opensToday: (t) => `Jetzt geschlossen · öffnet um ${t} Uhr`,
      opensTomorrow: (t) => `Jetzt geschlossen · öffnet morgen um ${t} Uhr`,
      message: {
        intro: "Hallo Buketia Flower, ich möchte diesen Artikel bestellen:",
        product: "Artikel", budget: "Budget", delivery: "Lieferung", recipient: "Empfänger", recipientPhone: "Telefon des Empfängers", address: "Adresse",
        courier: "Kuriergebühr: wird von Buketia festgelegt", card: "Kartentext", customer: "Besteller", phone: "Telefon"
      },
      categories: {
        "Doğum Günü": "Geburtstag", "Sevgiliye": "Für die Liebe", "Yeni İş": "Neuer Job", "Geçmiş Olsun": "Gute Besserung",
        "Buket": "Sträuße", "Yeni Doğum": "Zur Geburt", "Yapay Ağaç": "Kunstbäume", "Özel Aranjman": "Besondere Arrangements", "Orkide": "Orchideen", "Gelin Buketi": "Brautstrauß", "Çelenk": "Kränze", "Buketia seçkisi": "Buketia-Auswahl"
      },
      products: {
        "bize-birak": { name: "Überlassen Sie es uns", description: "Legen Sie Ihr Budget fest – Buketia Flower bindet Ihren Strauß aus den schönsten Blumen der Saison." },
        "romantik-pudra": { name: "Romantisches Puderrosé", description: "Unser Signature-Strauß aus Saisonblumen in zarten Pudertönen mit feinem Grün.", badge: "Beliebt" },
        "beyaz-orkide": { name: "Orchidee „Reine Eleganz“", description: "Elegante, langlebige weiße Orchidee mit zwei Rispen im matten Keramiktopf.", badge: "Neu" },
        "ask-kirmizi": { name: "Tiefe Liebe", description: "Ein ausdrucksstarker, moderner Strauß aus roten Rosen und satten Bordeauxtönen.", badge: "Signature-Design" },
        "iyi-hisset": { name: "Wohlfühlstrauß", description: "Ein fröhlicher Saisonstrauß in Hellgelb und Weiß mit weicher Textur.", badge: "Saisonauswahl" },
        "yeni-baslangic": { name: "Neuanfang", description: "Ein festliches Arrangement aus weißen und grünen Blumen in einer modernen Box.", badge: "Fürs Büro" },
        "gelin-inci": { name: "Brautstrauß „Perle“", description: "Ein zeitloser Brautstrauß aus vielschichtigen, zarten Weißtönen.", badge: "Individuelles Design" },
        "saygi-celengi": { name: "Eleganter Ehrenkranz", description: "Ein dezenter, eleganter Eröffnungskranz aus weißen Blumen und ausgewähltem Grün.", badge: "Am selben Tag" },
        "taziye-celengi": { name: "Weißer Friedenskranz", description: "Ein zurückhaltender Kondolenzkranz aus weißen Rosen, Lilien und schlichtem Grün – mit Respekt und Anteilnahme." },
        "tebrik-celengi": { name: "Festlicher Glückwunschkranz", description: "Ein prächtiger Glückwunschkranz aus frischen Saisonblumen für Eröffnungen, Hochzeiten und Feiern." },
        "pastel-kutlama": { name: "Pastellfest", description: "Ein fröhliches Geburtstagsarrangement aus üppigen Blüten in Pastelltönen.", badge: "Limitiert" },
        "fusya-ruya": { name: "Fuchsia-Traum", description: "Ein lebhafter, ausdrucksstarker Strauß aus Gladiolen, Chrysanthemen und Rosen in Fuchsia." },
        "kirmizi-kalp": { name: "Rotes Herz", description: "Ein unvergessliches Herz aus roten Rosen." },
        "pembe-masal": { name: "Rosa Märchen", description: "Ein romantischer Strauß aus rosa Rosen, Inkalilien und Lilien in cremefarbener Verpackung." },
        "mercan-guller": { name: "Korallenrosen", description: "Korallen- und cremefarbene Rosen mit Schleierkraut in natürlicher Strohverpackung." },
        "isme-ozel-gul-kutusu": { name: "Rosenbox mit Namen", description: "Ein einzigartiges Design aus roten Rosen in einer transparenten Box – mit dem Namen Ihres Lieblingsmenschen.", badge: "Personalisiert" },
        "gunesli-gun": { name: "Sonniger Tag", description: "Ein Strauß aus Sonnenblumen und orangefarbenen Rosen, der garantiert ein Lächeln schenkt." },
        "beyaz-lilyum": { name: "Weiße Lilie", description: "Ein frischer, eleganter Strauß aus weißen Lilien und rosa Rosen." },
        "bahar-sepeti": { name: "Frühlingskorb", description: "Ein fröhliches Arrangement aus Gerbera, Lilien und Chrysanthemen im Weidenkorb." },
        "lavanta-bahcesi": { name: "Lavendelgarten", description: "Ein eleganter Strauß aus rosa Rosen und Saisonblumen in violetter Verpackung." },
        "altin-gece": { name: "Goldene Nacht", description: "Ein stilvoller Strauß aus Lilien und bunten Saisonblumen in Schwarz und Gold." },
        "kir-esintisi": { name: "Landbrise", description: "Ein natürlicher, bunter Strauß aus Lilien mit blauen und gelben Saisonblumen." },
        "mor-melodi": { name: "Violette Melodie", description: "Ein fröhlicher Strauß aus rosa Lilien und bunten Saisonblumen in violetter Verpackung." },
        "orman-buketi": { name: "Waldstrauß", description: "Ein natürlicher, lebendiger Strauß aus Lilien und Saisonblumen in dunkelgrüner Verpackung." },
        "gri-zarafet": { name: "Graue Eleganz", description: "Ein moderner Strauß aus Lilien, Nelken und bunten Blumen in grauer Verpackung." },
        "beyaz-ruya": { name: "Weißer Traum", description: "Ein eleganter Strauß aus rosa Lilien und Saisonblumen in weißer Verpackung." },
        "yaz-senligi": { name: "Sommerfest", description: "Ein fröhlicher Strauß aus bunten Inkalilien, Lilien und Nelken." },
        "mutluluk-sepeti": { name: "Glückskorb", description: "Ein fröhliches Arrangement aus Gerbera, Lilien und bunten Blumen im Weidenkorb." },
        "bohem-sepet": { name: "Boho-Korb", description: "Ein Arrangement im Boho-Stil aus Hortensien, Rosen und hängendem Amarant im geflochtenen Korb.", badge: "Individuelles Design" }
      }
    }
  };
})();
