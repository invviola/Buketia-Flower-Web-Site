// Bu dosyadaki ürünleri düzenleyerek katalog fiyatlarını, stok durumunu ve görselleri yönetebilirsiniz.
// Ürün kodları sabittir. Yeni ürün için ana kategorisindeki en büyük kodun bir sonrakini kullanın; silinen kodları tekrar kullanmayın.
window.BUKETIA_PRODUCTS = [
  {
    id: "romantik-pudra",
    "searchNames": ["Romantik Pudra","Romantic Blush","Романтичная пудра","Romantisches Puderrosé"],
    code: "BKT-001",
    name: "BKT-001",
    category: "Buket",
    categories: ["Buket", "Sevgiliye"],
    price: 1850,
    description: "Pudra tonlarında mevsim çiçekleri ve zarif yeşilliklerle hazırlanan imza buket.",
    image: "assets/urunler/romantik-pudra-koleksiyon.jpg",
    imageWidth: 768,
    imageHeight: 1365,
    imagePosition: "center",
    imageFit: "cover",
    tone: "rose",
    badge: "Çok sevilen",
    inStock: true
  },
  {
    id: "ask-kirmizi",
    "searchNames": ["Derin Aşk","Deep Love","Глубокая любовь","Tiefe Liebe"],
    code: "BKT-002",
    name: "BKT-002",
    category: "Buket",
    categories: ["Buket", "Sevgiliye"],
    price: 2750,
    description: "Kırmızı güller ve bordo dokularla hazırlanan güçlü, modern bir buket.",
    image: "assets/urunler/ask-kirmizi-koleksiyon.jpg",
    imageWidth: 768,
    imageHeight: 1364,
    imagePosition: "center",
    imageFit: "cover",
    tone: "wine",
    badge: "İmza tasarım",
    inStock: true
  },
  {
    id: "fusya-ruya",
    "searchNames": ["Fuşya Rüya","Fuchsia Dream","Мечта цвета фуксии","Fuchsia-Traum"],
    code: "BKT-003",
    name: "BKT-003",
    category: "Buket",
    categories: ["Buket", "Sevgiliye"],
    description: "Fuşya ambalajda gladiol, krizantem ve güllerle hazırlanan canlı, gösterişli bir buket.",
    image: "assets/urunler/fusya-ruya.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "iyi-hisset",
    "searchNames": ["İyi Hisset","Feel Good","Хорошее настроение","Wohlfühlstrauß"],
    code: "BKT-004",
    name: "BKT-004",
    category: "Buket",
    categories: ["Buket"],
    price: 1650,
    description: "Açık sarı ve beyaz tonlarıyla iç açan, yumuşak dokulu mevsim buketi.",
    image: "assets/urunler/iyi-hisset.jpg",
    tone: "sun",
    badge: "Mevsim seçkisi",
    inStock: true
  },
  {
    id: "kirmizi-kalp",
    "searchNames": ["Kırmızı Kalp","Red Heart","Красное сердце","Rotes Herz"],
    code: "BKT-005",
    name: "BKT-005",
    category: "Buket",
    categories: ["Buket", "Sevgiliye"],
    description: "Kırmızı güllerle kalp şeklinde hazırlanan, unutulmaz bir sevgi aranjmanı.",
    image: "assets/urunler/kirmizi-kalp.jpg",
    tone: "wine",
    badge: "",
    inStock: true
  },
  {
    id: "pembe-masal",
    "searchNames": ["Pembe Masal","Pink Fairytale","Розовая сказка","Rosa Märchen"],
    code: "BKT-006",
    name: "BKT-006",
    category: "Buket",
    categories: ["Buket", "Sevgiliye"],
    description: "Pembe gül, alstroemeria ve lilyumların krem ambalajda buluştuğu romantik bir buket.",
    image: "assets/urunler/pembe-masal-koleksiyon.jpg",
    imageWidth: 768,
    imageHeight: 1364,
    imagePosition: "center",
    imageFit: "cover",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "yeni-baslangic",
    "searchNames": ["Yeni Başlangıç","New Beginnings","Новое начало","Neuanfang"],
    code: "BKT-007",
    name: "BKT-007",
    category: "Buket",
    categories: ["Buket"],
    price: 2100,
    description: "Modern kutuda beyaz ve yeşil çiçeklerle hazırlanan kutlama aranjmanı.",
    image: "assets/urunler/yeni-baslangic.jpg",
    tone: "green",
    badge: "Ofise uygun",
    inStock: true
  },
  {
    id: "mercan-guller",
    "searchNames": ["Mercan Güller","Coral Roses","Коралловые розы","Korallenrosen"],
    code: "BKT-008",
    name: "BKT-008",
    category: "Buket",
    categories: ["Buket", "Sevgiliye"],
    description: "Mercan ve krem tonlarında güller, cipsofilyayla birlikte doğal hasır ambalajda.",
    image: "assets/urunler/mercan-guller.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "pastel-kutlama",
    "searchNames": ["Pastel Kutlama","Pastel Celebration","Пастельный праздник","Pastellfest"],
    code: "BKT-009",
    name: "BKT-009",
    category: "Buket",
    categories: ["Buket"],
    price: 1950,
    description: "Pastel tonlarda hacimli çiçeklerle hazırlanan neşeli doğum günü aranjmanı.",
    image: "assets/urunler/pastel-kutlama.jpg",
    tone: "lilac",
    badge: "Sınırlı sayıda",
    inStock: true
  },
  {
    id: "isme-ozel-gul-kutusu",
    "searchNames": ["İsme Özel Gül Kutusu","Personalised Rose Box","Именная коробка с розами","Rosenbox mit Namen"],
    code: "OAR-001",
    name: "OAR-001",
    category: "Özel Aranjman",
    categories: ["Özel Aranjman", "Sevgiliye"],
    description: "Şeffaf kutuda kırmızı güller ve sevdiğinizin ismiyle hazırlanan kişiye özel tasarım.",
    image: "assets/urunler/isme-ozel-gul-kutusu.jpg",
    tone: "wine",
    badge: "İsme özel",
    inStock: true
  },
  {
    id: "gunesli-gun",
    "searchNames": ["Güneşli Gün","Sunny Day","Солнечный день","Sonniger Tag"],
    code: "BKT-010",
    name: "BKT-010",
    category: "Buket",
    categories: ["Buket"],
    description: "Ayçiçekleri ve turuncu güllerle hazırlanan, yüzleri güldüren bir buket.",
    image: "assets/urunler/gunesli-gun.jpg",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "beyaz-lilyum",
    "searchNames": ["Beyaz Lilyum","White Lily","Белая лилия","Weiße Lilie"],
    code: "BKT-011",
    name: "BKT-011",
    category: "Buket",
    categories: ["Buket"],
    description: "Beyaz lilyumlar ve pembe güllerle hazırlanan ferah, zarif bir buket.",
    image: "assets/urunler/beyaz-lilyum.jpg",
    tone: "ivory",
    badge: "",
    inStock: true
  },
  {
    id: "bahar-sepeti",
    "searchNames": ["Bahar Sepeti","Spring Basket","Весенняя корзина","Frühlingskorb"],
    code: "OAR-002",
    name: "OAR-002",
    category: "Özel Aranjman",
    categories: ["Özel Aranjman"],
    description: "Hasır sepette gerbera, lilyum ve krizantemlerle hazırlanan neşeli bir aranjman.",
    image: "assets/urunler/bahar-sepeti.jpg",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "lavanta-bahcesi",
    "searchNames": ["Lavanta Bahçesi","Lavender Garden","Лавандовый сад","Lavendelgarten"],
    code: "BKT-012",
    name: "BKT-012",
    category: "Buket",
    categories: ["Buket", "Sevgiliye"],
    description: "Mor ambalajda pembe güller ve mevsim çiçekleriyle hazırlanan zarif bir buket.",
    image: "assets/urunler/lavanta-bahcesi.jpg",
    tone: "lilac",
    badge: "",
    inStock: true
  },
  {
    id: "altin-gece",
    "searchNames": ["Altın Gece","Golden Night","Золотая ночь","Goldene Nacht"],
    code: "BKT-013",
    name: "BKT-013",
    category: "Buket",
    categories: ["Buket"],
    description: "Siyah ve altın ambalajda lilyum ve renkli mevsim çiçekleriyle hazırlanan şık bir buket.",
    image: "assets/urunler/altin-gece.jpg",
    tone: "stone",
    badge: "",
    inStock: true
  },
  {
    id: "kir-esintisi",
    "searchNames": ["Kır Esintisi","Country Breeze","Полевой бриз","Landbrise"],
    code: "BKT-014",
    name: "BKT-014",
    category: "Buket",
    categories: ["Buket"],
    description: "Lilyum ile mavi ve sarı mevsim çiçeklerinden hazırlanan doğal, renkli bir buket.",
    image: "assets/urunler/kir-esintisi.jpg",
    tone: "pearl",
    badge: "",
    inStock: true
  },
  {
    id: "mor-melodi",
    "searchNames": ["Mor Melodi","Purple Melody","Фиолетовая мелодия","Violette Melodie"],
    code: "BKT-015",
    name: "BKT-015",
    category: "Buket",
    categories: ["Buket"],
    description: "Mor ambalajda pembe lilyumlar ve renkli mevsim çiçekleriyle hazırlanan neşeli bir buket.",
    image: "assets/urunler/mor-melodi.jpg",
    tone: "lilac",
    badge: "",
    inStock: true
  },
  {
    id: "orman-buketi",
    "searchNames": ["Orman Buketi","Forest Bouquet","Лесной букет","Waldstrauß"],
    code: "BKT-016",
    name: "BKT-016",
    category: "Buket",
    categories: ["Buket"],
    description: "Koyu yeşil ambalajda lilyum ve mevsim çiçekleriyle hazırlanan doğal, canlı bir buket.",
    image: "assets/urunler/orman-buketi.jpg",
    tone: "green",
    badge: "",
    inStock: true
  },
  {
    id: "gri-zarafet",
    "searchNames": ["Gri Zarafet","Grey Elegance","Серая элегантность","Graue Eleganz"],
    code: "BKT-017",
    name: "BKT-017",
    category: "Buket",
    categories: ["Buket"],
    description: "Gri ambalajda lilyum, karanfil ve renkli çiçeklerle hazırlanan modern bir buket.",
    image: "assets/urunler/gri-zarafet.jpg",
    tone: "stone",
    badge: "",
    inStock: true
  },
  {
    id: "beyaz-ruya",
    "searchNames": ["Beyaz Rüya","White Dream","Белая мечта","Weißer Traum"],
    code: "BKT-018",
    name: "BKT-018",
    category: "Buket",
    categories: ["Buket"],
    description: "Beyaz ambalajda pembe lilyum ve mevsim çiçekleriyle hazırlanan zarif bir buket.",
    image: "assets/urunler/beyaz-ruya.jpg",
    tone: "ivory",
    badge: "",
    inStock: true
  },
  {
    id: "yaz-senligi",
    "searchNames": ["Yaz Şenliği","Summer Festival","Летний праздник","Sommerfest"],
    code: "BKT-019",
    name: "BKT-019",
    category: "Buket",
    categories: ["Buket"],
    description: "Rengârenk alstroemeria, lilyum ve karanfillerle hazırlanan neşeli bir buket.",
    image: "assets/urunler/yaz-senligi-koleksiyon.jpg",
    imageWidth: 768,
    imageHeight: 1364,
    imagePosition: "center",
    imageFit: "cover",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "mutluluk-sepeti",
    "searchNames": ["Mutluluk Sepeti","Happiness Basket","Корзина счастья","Glückskorb"],
    code: "OAR-003",
    name: "OAR-003",
    category: "Özel Aranjman",
    categories: ["Özel Aranjman"],
    description: "Hasır sepette gerbera, lilyum ve renkli çiçeklerle hazırlanan bir mutluluk aranjmanı.",
    image: "",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "bohem-sepet",
    "searchNames": ["Bohem Sepet","Boho Basket","Корзина в стиле бохо","Boho-Korb"],
    code: "OAR-004",
    name: "OAR-004",
    category: "Özel Aranjman",
    categories: ["Özel Aranjman"],
    description: "Ortanca, gül ve sarkan amarantlarla hasır sepette hazırlanan bohem bir aranjman.",
    image: "assets/urunler/bohem-sepet-koleksiyon.jpg",
    imageWidth: 768,
    imageHeight: 1364,
    imagePosition: "center",
    imageFit: "cover",
    tone: "wine",
    badge: "Özel tasarım",
    inStock: true
  },
  {
    id: "beyaz-orkide",
    "searchNames": ["Saf Zarafet Orkide","Pure Elegance Orchid","Орхидея «Чистая элегантность»","Orchidee „Reine Eleganz“"],
    code: "ORK-001",
    name: "ORK-001",
    category: "Orkide",
    categories: ["Orkide"],
    price: 2450,
    description: "Mat seramik saksıda, uzun ömürlü ve zarif beyaz çift dallı orkide.",
    image: "",
    tone: "ivory",
    badge: "Yeni",
    inStock: true
  },
  {
    id: "gelin-inci",
    "searchNames": ["İnci Gelin Buketi","Pearl Bridal Bouquet","Свадебный букет «Жемчуг»","Brautstrauß „Perle“"],
    code: "BKT-020",
    name: "BKT-020",
    category: "Buket",
    categories: ["Buket"],
    price: 3250,
    description: "Beyaz tonların katmanlı dokusuyla hazırlanan zamansız gelin buketi.",
    image: "",
    tone: "pearl",
    badge: "Özel tasarım",
    inStock: true
  },
  {
    id: "celenk-01",
    "searchNames": ["Mavi Bahçe Çelengi","Blue Garden Wreath","Венок «Синий сад»","Blauer Garten-Kranz"],
    code: "CLK-001",
    name: "CLK-001",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Beyaz gerbera ve sarı aslanağzı ile hazırlanan ayaklı çiçek aranjmanı. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-01.jpg",
    tone: "stone",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-02",
    "searchNames": ["Zümrüt Altın Çelengi","Emerald Gold Wreath","Венок «Изумруд и золото»","Smaragdgold-Kranz"],
    code: "CLK-002",
    name: "CLK-002",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Beyaz papatya ve gerbera ile hazırlanan ayaklı çiçek aranjmanı. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-02.jpg",
    tone: "sage",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-03",
    "searchNames": ["Güneş Mavisi Çelengi","Sunny Blue Wreath","Венок «Солнечный синий»","Sonnenblau-Kranz"],
    code: "CLK-003",
    name: "CLK-003",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Sarı gerbera ve pembe detaylar ile hazırlanan ayaklı çiçek aranjmanı. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-03.jpg",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-04",
    "searchNames": ["Gri Mavi Çelengi","Slate Blue Wreath","Венок «Серо-синий»","Schieferblau-Kranz"],
    code: "CLK-004",
    name: "CLK-004",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Beyaz gerbera ve yeşillikler ile hazırlanan ayaklı çiçek aranjmanı. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-04.jpg",
    tone: "pearl",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-05",
    "searchNames": ["Altın Sarı Damla Çelengi","Golden Teardrop Wreath","Венок «Золотая капля»","Goldener Tropfen-Kranz"],
    code: "CLK-005",
    name: "CLK-005",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Sarı krizantem ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-05.jpg",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-06",
    "searchNames": ["Güneş Damla Çelengi","Sunshine Teardrop Wreath","Венок «Солнечная капля»","Sonnentropfen-Kranz"],
    code: "CLK-006",
    name: "CLK-006",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Sarı ve turuncu gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-06.jpg",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-07",
    "searchNames": ["Siyah Yuvarlak Çelengi","Black Round Wreath","Венок «Чёрный круг»","Schwarzer Kreis-Kranz"],
    code: "CLK-007",
    name: "CLK-007",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı ve sarı gerbera ile hazırlanan yuvarlak ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-07.jpg",
    tone: "stone",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-08",
    "searchNames": ["Siyah Halka Çelengi","Black Ring Wreath","Венок «Чёрное кольцо»","Schwarzer Ring-Kranz"],
    code: "CLK-008",
    name: "CLK-008",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı gerbera ve krem çiçekler ile hazırlanan yuvarlak ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-08.jpg",
    tone: "stone",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-09",
    "searchNames": ["Sarı Papatya Damla Çelengi","Yellow Daisy Teardrop Wreath","Венок «Жёлтая ромашковая капля»","Gelber Margeritentropfen-Kranz"],
    code: "CLK-009",
    name: "CLK-009",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Sarı papatya ve gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-09.jpg",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-10",
    "searchNames": ["Kırmızı Beyaz Damla Çelengi","Red & White Teardrop Wreath","Венок «Красно-белая капля»","Rot-weißer Tropfen-Kranz"],
    code: "CLK-010",
    name: "CLK-010",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı ve beyaz gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-10.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-11",
    "searchNames": ["Sarı Çift Katlı Çelengi","Yellow Two-Tier Wreath","Венок «Жёлтый двухъярусный»","Gelber Zweistöcker-Kranz"],
    code: "CLK-011",
    name: "CLK-011",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Sarı krizantem ile hazırlanan çift katlı ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-11.jpg",
    tone: "sun",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-12",
    "searchNames": ["Kırmızı Beyaz Saygı Çelengi","Red & White Tribute Wreath","Венок «Красно-белое почтение»","Rot-weiße Würdigung-Kranz"],
    code: "CLK-012",
    name: "CLK-012",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı karanfil ve beyaz papatya ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-12.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-13",
    "searchNames": ["Kırmızı Gerbera Damla Çelengi","Red Gerbera Teardrop Wreath","Венок «Капля из красных гербер»","Roter Gerbera-Tropfen-Kranz"],
    code: "CLK-013",
    name: "CLK-013",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-13.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-14",
    "searchNames": ["Yeşil Kenarlı Renkli Çelengi","Green-Edged Mixed Wreath","Венок «Яркий с зелёным краем»","Bunt mit grünem Rand-Kranz"],
    code: "CLK-014",
    name: "CLK-014",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Sarı krizantem ve pembe gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-14.jpg",
    tone: "sage",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-15",
    "searchNames": ["Üç Renkli Damla Çelengi","Tricolour Teardrop Wreath","Венок «Трёхцветная капля»","Dreifarbiger Tropfen-Kranz"],
    code: "CLK-015",
    name: "CLK-015",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı, sarı ve beyaz gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-15.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-16",
    "searchNames": ["Beyaz Kırmızı Kıvrım Çelengi","White & Red Scallop Wreath","Венок «Бело-красный с волной»","Weiß-roter Wellenrand-Kranz"],
    code: "CLK-016",
    name: "CLK-016",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Krem gerbera ve kırmızı detaylar ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-16.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-17",
    "searchNames": ["Krem Gerbera Çelengi","Cream Gerbera Wreath","Венок «Кремовая гербера»","Cremefarbene Gerbera-Kranz"],
    code: "CLK-017",
    name: "CLK-017",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Krem gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-17.jpg",
    tone: "ivory",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-18",
    "searchNames": ["Beyaz Çift Katlı Çelengi","White Two-Tier Wreath","Венок «Белый двухъярусный»","Weißer Zweistöcker-Kranz"],
    code: "CLK-018",
    name: "CLK-018",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Krem gerbera ve papatya ile hazırlanan çift katlı ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-18.jpg",
    tone: "ivory",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-19",
    "searchNames": ["Kırmızı Beyaz Çapraz Çelengi","Red & White Diagonal Wreath","Венок «Красно-белая диагональ»","Rot-weiße Diagonale-Kranz"],
    code: "CLK-019",
    name: "CLK-019",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı ve beyaz gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-19.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-20",
    "searchNames": ["Kırmızı Beyaz Armut Çelengi","Red & White Pear Wreath","Венок «Красно-белая груша»","Rot-weiße Birne-Kranz"],
    code: "CLK-020",
    name: "CLK-020",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Kırmızı güller ve beyaz papatya ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-20.jpg",
    tone: "rose",
    badge: "",
    inStock: true
  },
  {
    id: "celenk-21",
    "searchNames": ["Krem Papatya Çelengi","Cream Daisy Wreath","Венок «Кремовая ромашка»","Cremefarbene Margerite-Kranz"],
    code: "CLK-021",
    name: "CLK-021",
    category: "Çelenk",
    categories: ["Çelenk"],
    description: "Krem papatya ve gerbera ile hazırlanan damla ayaklı çelenk. Şerit yazısı isteğe göre hazırlanır.",
    image: "assets/urunler/celenk-21.jpg",
    tone: "ivory",
    badge: "",
    inStock: true
  },
  {
    "id": "buket-001",
    "searchNames": ["Buket 01","Bouquet 01","Букет 01","Strauß 01"],
    code: "BKT-021",
    "name": "BKT-021",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-002",
    "searchNames": ["Buket 02","Bouquet 02","Букет 02","Strauß 02"],
    code: "BKT-022",
    "name": "BKT-022",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-003",
    "searchNames": ["Buket 03","Bouquet 03","Букет 03","Strauß 03"],
    code: "BKT-023",
    "name": "BKT-023",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-003-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-004",
    "searchNames": ["Buket 04","Bouquet 04","Букет 04","Strauß 04"],
    code: "BKT-024",
    "name": "BKT-024",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-004-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-006",
    "searchNames": ["Buket 06","Bouquet 06","Букет 06","Strauß 06"],
    code: "BKT-025",
    "name": "BKT-025",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-006-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-007",
    "searchNames": ["Buket 07","Bouquet 07","Букет 07","Strauß 07"],
    code: "BKT-026",
    "name": "BKT-026",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-007-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-008",
    "searchNames": ["Buket 08","Bouquet 08","Букет 08","Strauß 08"],
    code: "BKT-027",
    "name": "BKT-027",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-008-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-009",
    "searchNames": ["Buket 09","Bouquet 09","Букет 09","Strauß 09"],
    code: "BKT-028",
    "name": "BKT-028",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-009-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-010",
    "searchNames": ["Buket 10","Bouquet 10","Букет 10","Strauß 10"],
    code: "BKT-029",
    "name": "BKT-029",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-010-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-011",
    "searchNames": ["Buket 11","Bouquet 11","Букет 11","Strauß 11"],
    code: "BKT-030",
    "name": "BKT-030",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-011-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-012",
    "searchNames": ["Buket 12","Bouquet 12","Букет 12","Strauß 12"],
    code: "BKT-031",
    "name": "BKT-031",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-012-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-013",
    "searchNames": ["Buket 13","Bouquet 13","Букет 13","Strauß 13"],
    code: "BKT-032",
    "name": "BKT-032",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-013-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-014",
    "searchNames": ["Buket 14","Bouquet 14","Букет 14","Strauß 14"],
    code: "BKT-033",
    "name": "BKT-033",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-014-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-015",
    "searchNames": ["Buket 15","Bouquet 15","Букет 15","Strauß 15"],
    code: "BKT-034",
    "name": "BKT-034",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-015-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-016",
    "searchNames": ["Buket 16","Bouquet 16","Букет 16","Strauß 16"],
    code: "BKT-035",
    "name": "BKT-035",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-016-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-017",
    "searchNames": ["Buket 17","Bouquet 17","Букет 17","Strauß 17"],
    code: "BKT-036",
    "name": "BKT-036",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-017-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-018",
    "searchNames": ["Buket 18","Bouquet 18","Букет 18","Strauß 18"],
    code: "BKT-037",
    "name": "BKT-037",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-018-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-019",
    "searchNames": ["Buket 19","Bouquet 19","Букет 19","Strauß 19"],
    code: "BKT-038",
    "name": "BKT-038",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-019-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-020",
    "searchNames": ["Buket 20","Bouquet 20","Букет 20","Strauß 20"],
    code: "BKT-039",
    "name": "BKT-039",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-020-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-021",
    "searchNames": ["Buket 21","Bouquet 21","Букет 21","Strauß 21"],
    code: "BKT-040",
    "name": "BKT-040",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-021-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-022",
    "searchNames": ["Buket 22","Bouquet 22","Букет 22","Strauß 22"],
    code: "BKT-041",
    "name": "BKT-041",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-022-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-023",
    "searchNames": ["Buket 23","Bouquet 23","Букет 23","Strauß 23"],
    code: "BKT-042",
    "name": "BKT-042",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-023-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-024",
    "searchNames": ["Buket 24","Bouquet 24","Букет 24","Strauß 24"],
    code: "BKT-043",
    "name": "BKT-043",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-024-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-025",
    "searchNames": ["Buket 25","Bouquet 25","Букет 25","Strauß 25"],
    code: "BKT-044",
    "name": "BKT-044",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-025-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-026",
    "searchNames": ["Buket 26","Bouquet 26","Букет 26","Strauß 26"],
    code: "BKT-045",
    "name": "BKT-045",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-026-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-027",
    "searchNames": ["Buket 27","Bouquet 27","Букет 27","Strauß 27"],
    code: "BKT-046",
    "name": "BKT-046",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-027-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-028",
    "searchNames": ["Buket 28","Bouquet 28","Букет 28","Strauß 28"],
    code: "BKT-047",
    "name": "BKT-047",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-028-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-029",
    "searchNames": ["Buket 29","Bouquet 29","Букет 29","Strauß 29"],
    code: "BKT-048",
    "name": "BKT-048",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-029-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-030",
    "searchNames": ["Buket 30","Bouquet 30","Букет 30","Strauß 30"],
    code: "BKT-049",
    "name": "BKT-049",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-030-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-031",
    "searchNames": ["Buket 31","Bouquet 31","Букет 31","Strauß 31"],
    code: "BKT-050",
    "name": "BKT-050",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-031-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-032",
    "searchNames": ["Buket 32","Bouquet 32","Букет 32","Strauß 32"],
    code: "BKT-051",
    "name": "BKT-051",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-032-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-033",
    "searchNames": ["Buket 33","Bouquet 33","Букет 33","Strauß 33"],
    code: "BKT-052",
    "name": "BKT-052",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-033-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-034",
    "searchNames": ["Buket 34","Bouquet 34","Букет 34","Strauß 34"],
    code: "BKT-053",
    "name": "BKT-053",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-034-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-035",
    "searchNames": ["Buket 35","Bouquet 35","Букет 35","Strauß 35"],
    code: "BKT-054",
    "name": "BKT-054",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-035-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-036",
    "searchNames": ["Buket 36","Bouquet 36","Букет 36","Strauß 36"],
    code: "BKT-055",
    "name": "BKT-055",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-036-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-038",
    "searchNames": ["Buket 38","Bouquet 38","Букет 38","Strauß 38"],
    code: "BKT-056",
    "name": "BKT-056",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-038-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-039",
    "searchNames": ["Buket 39","Bouquet 39","Букет 39","Strauß 39"],
    code: "BKT-057",
    "name": "BKT-057",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-039-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-040",
    "searchNames": ["Buket 40","Bouquet 40","Букет 40","Strauß 40"],
    code: "BKT-058",
    "name": "BKT-058",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-040-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-041",
    "searchNames": ["Buket 41","Bouquet 41","Букет 41","Strauß 41"],
    code: "BKT-059",
    "name": "BKT-059",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-041-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-042",
    "searchNames": ["Buket 42","Bouquet 42","Букет 42","Strauß 42"],
    code: "BKT-060",
    "name": "BKT-060",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-042-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-043",
    "searchNames": ["Buket 43","Bouquet 43","Букет 43","Strauß 43"],
    code: "BKT-061",
    "name": "BKT-061",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-043-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-044",
    "searchNames": ["Buket 44","Bouquet 44","Букет 44","Strauß 44"],
    code: "BKT-062",
    "name": "BKT-062",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-044-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-045",
    "searchNames": ["Buket 45","Bouquet 45","Букет 45","Strauß 45"],
    code: "BKT-063",
    "name": "BKT-063",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-045-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-046",
    "searchNames": ["Buket 46","Bouquet 46","Букет 46","Strauß 46"],
    code: "BKT-064",
    "name": "BKT-064",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-046-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-047",
    "searchNames": ["Buket 47","Bouquet 47","Букет 47","Strauß 47"],
    code: "BKT-065",
    "name": "BKT-065",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-047-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-048",
    "searchNames": ["Buket 48","Bouquet 48","Букет 48","Strauß 48"],
    code: "BKT-066",
    "name": "BKT-066",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-048-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1365,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-049",
    "searchNames": ["Buket 49","Bouquet 49","Букет 49","Strauß 49"],
    code: "BKT-067",
    "name": "BKT-067",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-049-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1362,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-050",
    "searchNames": ["Buket 50","Bouquet 50","Букет 50","Strauß 50"],
    code: "BKT-068",
    "name": "BKT-068",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-050-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-051",
    "searchNames": ["Buket 51","Bouquet 51","Букет 51","Strauß 51"],
    code: "BKT-069",
    "name": "BKT-069",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-051-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1365,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-052",
    "searchNames": ["Buket 52","Bouquet 52","Букет 52","Strauß 52"],
    code: "BKT-070",
    "name": "BKT-070",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-052-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-053",
    "searchNames": ["Buket 53","Bouquet 53","Букет 53","Strauß 53"],
    code: "BKT-071",
    "name": "BKT-071",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-053-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-054",
    "searchNames": ["Buket 54","Bouquet 54","Букет 54","Strauß 54"],
    code: "BKT-072",
    "name": "BKT-072",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-054-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-055",
    "searchNames": ["Buket 55","Bouquet 55","Букет 55","Strauß 55"],
    code: "BKT-073",
    "name": "BKT-073",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-055-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-056",
    "searchNames": ["Buket 56","Bouquet 56","Букет 56","Strauß 56"],
    code: "BKT-074",
    "name": "BKT-074",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-056-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-057",
    "searchNames": ["Buket 57","Bouquet 57","Букет 57","Strauß 57"],
    code: "BKT-075",
    "name": "BKT-075",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-057-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-058",
    "searchNames": ["Buket 58","Bouquet 58","Букет 58","Strauß 58"],
    code: "BKT-076",
    "name": "BKT-076",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-058-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-059",
    "searchNames": ["Buket 59","Bouquet 59","Букет 59","Strauß 59"],
    code: "BKT-077",
    "name": "BKT-077",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-059-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-060",
    "searchNames": ["Buket 60","Bouquet 60","Букет 60","Strauß 60"],
    code: "BKT-078",
    "name": "BKT-078",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-060-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-061",
    "searchNames": ["Buket 61","Bouquet 61","Букет 61","Strauß 61"],
    code: "BKT-079",
    "name": "BKT-079",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-061-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-062",
    "searchNames": ["Buket 62","Bouquet 62","Букет 62","Strauß 62"],
    code: "BKT-080",
    "name": "BKT-080",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-062-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-063",
    "searchNames": ["Buket 63","Bouquet 63","Букет 63","Strauß 63"],
    code: "BKT-081",
    "name": "BKT-081",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-063-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-064",
    "searchNames": ["Buket 64","Bouquet 64","Букет 64","Strauß 64"],
    code: "BKT-082",
    "name": "BKT-082",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-064-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-065",
    "searchNames": ["Buket 65","Bouquet 65","Букет 65","Strauß 65"],
    code: "BKT-083",
    "name": "BKT-083",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-065-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-066",
    "searchNames": ["Buket 66","Bouquet 66","Букет 66","Strauß 66"],
    code: "BKT-084",
    "name": "BKT-084",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-066-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-067",
    "searchNames": ["Buket 67","Bouquet 67","Букет 67","Strauß 67"],
    code: "BKT-085",
    "name": "BKT-085",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-067-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-068",
    "searchNames": ["Buket 68","Bouquet 68","Букет 68","Strauß 68"],
    code: "BKT-086",
    "name": "BKT-086",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-068-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-069",
    "searchNames": ["Buket 69","Bouquet 69","Букет 69","Strauß 69"],
    code: "BKT-087",
    "name": "BKT-087",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-069-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-070",
    "searchNames": ["Buket 70","Bouquet 70","Букет 70","Strauß 70"],
    code: "BKT-088",
    "name": "BKT-088",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-070-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-071",
    "searchNames": ["Buket 71","Bouquet 71","Букет 71","Strauß 71"],
    code: "BKT-089",
    "name": "BKT-089",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-071-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-072",
    "searchNames": ["Buket 72","Bouquet 72","Букет 72","Strauß 72"],
    code: "BKT-090",
    "name": "BKT-090",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-072-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-073",
    "searchNames": ["Buket 73","Bouquet 73","Букет 73","Strauß 73"],
    code: "BKT-091",
    "name": "BKT-091",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-073-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1365,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-074",
    "searchNames": ["Buket 74","Bouquet 74","Букет 74","Strauß 74"],
    code: "BKT-092",
    "name": "BKT-092",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-074-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-075",
    "searchNames": ["Buket 75","Bouquet 75","Букет 75","Strauß 75"],
    code: "BKT-093",
    "name": "BKT-093",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-075-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-076",
    "searchNames": ["Buket 76","Bouquet 76","Букет 76","Strauß 76"],
    code: "BKT-094",
    "name": "BKT-094",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-076-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-077",
    "searchNames": ["Buket 77","Bouquet 77","Букет 77","Strauß 77"],
    code: "BKT-095",
    "name": "BKT-095",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-077-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-078",
    "searchNames": ["Buket 78","Bouquet 78","Букет 78","Strauß 78"],
    code: "BKT-096",
    "name": "BKT-096",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-078-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-079",
    "searchNames": ["Buket 79","Bouquet 79","Букет 79","Strauß 79"],
    code: "BKT-097",
    "name": "BKT-097",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-079-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-080",
    "searchNames": ["Buket 80","Bouquet 80","Букет 80","Strauß 80"],
    code: "BKT-098",
    "name": "BKT-098",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-080-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-081",
    "searchNames": ["Buket 81","Bouquet 81","Букет 81","Strauß 81"],
    code: "BKT-099",
    "name": "BKT-099",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-081-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-082",
    "searchNames": ["Buket 82","Bouquet 82","Букет 82","Strauß 82"],
    code: "BKT-100",
    "name": "BKT-100",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-082-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-083",
    "searchNames": ["Buket 83","Bouquet 83","Букет 83","Strauß 83"],
    code: "BKT-101",
    "name": "BKT-101",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-083-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-084",
    "searchNames": ["Buket 84","Bouquet 84","Букет 84","Strauß 84"],
    code: "BKT-102",
    "name": "BKT-102",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-084-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-085",
    "searchNames": ["Buket 85","Bouquet 85","Букет 85","Strauß 85"],
    code: "BKT-103",
    "name": "BKT-103",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-085-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-086",
    "searchNames": ["Buket 86","Bouquet 86","Букет 86","Strauß 86"],
    code: "BKT-104",
    "name": "BKT-104",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-086-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-087",
    "searchNames": ["Buket 87","Bouquet 87","Букет 87","Strauß 87"],
    code: "BKT-105",
    "name": "BKT-105",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-087-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-088",
    "searchNames": ["Buket 88","Bouquet 88","Букет 88","Strauß 88"],
    code: "BKT-106",
    "name": "BKT-106",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-088-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-089",
    "searchNames": ["Buket 89","Bouquet 89","Букет 89","Strauß 89"],
    code: "BKT-107",
    "name": "BKT-107",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-089-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-090",
    "searchNames": ["Buket 90","Bouquet 90","Букет 90","Strauß 90"],
    code: "BKT-108",
    "name": "BKT-108",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-090-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "buket-091",
    "searchNames": ["Buket 91","Bouquet 91","Букет 91","Strauß 91"],
    code: "BKT-109",
    "name": "BKT-109",
    "category": "Buket",
    "categories": [
      "Buket"
    ],
    "description": "Buketia Flower buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/buket-091-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-001",
    "searchNames": ["Sevgiliye Özel 01","Romantic Design 01","Романтическая композиция 01","Romantisches Design 01"],
    code: "SVG-001",
    "name": "SVG-001",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-002",
    "searchNames": ["Sevgiliye Özel 02","Romantic Design 02","Романтическая композиция 02","Romantisches Design 02"],
    code: "SVG-002",
    "name": "SVG-002",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-003",
    "searchNames": ["Sevgiliye Özel 03","Romantic Design 03","Романтическая композиция 03","Romantisches Design 03"],
    code: "SVG-003",
    "name": "SVG-003",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-003-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-004",
    "searchNames": ["Sevgiliye Özel 04","Romantic Design 04","Романтическая композиция 04","Romantisches Design 04"],
    code: "SVG-004",
    "name": "SVG-004",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-004-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-005",
    "searchNames": ["Sevgiliye Özel 05","Romantic Design 05","Романтическая композиция 05","Romantisches Design 05"],
    code: "SVG-005",
    "name": "SVG-005",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-005-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-006",
    "searchNames": ["Sevgiliye Özel 06","Romantic Design 06","Романтическая композиция 06","Romantisches Design 06"],
    code: "SVG-006",
    "name": "SVG-006",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-006-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-007",
    "searchNames": ["Sevgiliye Özel 07","Romantic Design 07","Романтическая композиция 07","Romantisches Design 07"],
    code: "SVG-007",
    "name": "SVG-007",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-007-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-008",
    "searchNames": ["Sevgiliye Özel 08","Romantic Design 08","Романтическая композиция 08","Romantisches Design 08"],
    code: "SVG-008",
    "name": "SVG-008",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-008-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-009",
    "searchNames": ["Sevgiliye Özel 09","Romantic Design 09","Романтическая композиция 09","Romantisches Design 09"],
    code: "SVG-009",
    "name": "SVG-009",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-009-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-010",
    "searchNames": ["Sevgiliye Özel 10","Romantic Design 10","Романтическая композиция 10","Romantisches Design 10"],
    code: "SVG-010",
    "name": "SVG-010",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-010-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "sevgiliye-011",
    "searchNames": ["Sevgiliye Özel 11","Romantic Design 11","Романтическая композиция 11","Romantisches Design 11"],
    code: "SVG-011",
    "name": "SVG-011",
    "category": "Sevgiliye",
    "categories": [
      "Sevgiliye"
    ],
    "description": "Buketia Flower sevgiliye koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/sevgiliye-011-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yeni-dogum-001",
    "searchNames": ["Hoş Geldin Bebek 01","Welcome Baby 01","С рождением малыша 01","Willkommen Baby 01"],
    code: "YDG-001",
    "name": "YDG-001",
    "category": "Yeni Doğum",
    "categories": [
      "Yeni Doğum"
    ],
    "description": "Buketia Flower yeni doğum koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yeni-dogum-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yeni-dogum-002",
    "searchNames": ["Hoş Geldin Bebek 02","Welcome Baby 02","С рождением малыша 02","Willkommen Baby 02"],
    code: "YDG-002",
    "name": "YDG-002",
    "category": "Yeni Doğum",
    "categories": [
      "Yeni Doğum"
    ],
    "description": "Buketia Flower yeni doğum koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yeni-dogum-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yeni-dogum-003",
    "searchNames": ["Hoş Geldin Bebek 03","Welcome Baby 03","С рождением малыша 03","Willkommen Baby 03"],
    code: "YDG-003",
    "name": "YDG-003",
    "category": "Yeni Doğum",
    "categories": [
      "Yeni Doğum"
    ],
    "description": "Buketia Flower yeni doğum koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yeni-dogum-003-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yeni-dogum-004",
    "searchNames": ["Hoş Geldin Bebek 04","Welcome Baby 04","С рождением малыша 04","Willkommen Baby 04"],
    code: "YDG-004",
    "name": "YDG-004",
    "category": "Yeni Doğum",
    "categories": [
      "Yeni Doğum"
    ],
    "description": "Buketia Flower yeni doğum koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yeni-dogum-004-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yeni-dogum-005",
    "searchNames": ["Hoş Geldin Bebek 05","Welcome Baby 05","С рождением малыша 05","Willkommen Baby 05"],
    code: "YDG-005",
    "name": "YDG-005",
    "category": "Yeni Doğum",
    "categories": [
      "Yeni Doğum"
    ],
    "description": "Buketia Flower yeni doğum koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yeni-dogum-005-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1362,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "orkide-001",
    "searchNames": ["Orkide 01","Orchid 01","Орхидея 01","Orchidee 01"],
    code: "ORK-002",
    "name": "ORK-002",
    "category": "Orkide",
    "categories": [
      "Orkide"
    ],
    "description": "Buketia Flower orkide koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/orkide-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "orkide-002",
    "searchNames": ["Orkide 02","Orchid 02","Орхидея 02","Orchidee 02"],
    code: "ORK-003",
    "name": "ORK-003",
    "category": "Orkide",
    "categories": [
      "Orkide"
    ],
    "description": "Buketia Flower orkide koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/orkide-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1362,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-001",
    "searchNames": ["Özel Aranjman 01","Custom Arrangement 01","Особая композиция 01","Besonderes Arrangement 01"],
    code: "OAR-005",
    "name": "OAR-005",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-002",
    "searchNames": ["Özel Aranjman 02","Custom Arrangement 02","Особая композиция 02","Besonderes Arrangement 02"],
    code: "OAR-006",
    "name": "OAR-006",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-003",
    "searchNames": ["Özel Aranjman 03","Custom Arrangement 03","Особая композиция 03","Besonderes Arrangement 03"],
    code: "OAR-007",
    "name": "OAR-007",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-003-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-004",
    "searchNames": ["Özel Aranjman 04","Custom Arrangement 04","Особая композиция 04","Besonderes Arrangement 04"],
    code: "OAR-008",
    "name": "OAR-008",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-004-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-006",
    "searchNames": ["Özel Aranjman 06","Custom Arrangement 06","Особая композиция 06","Besonderes Arrangement 06"],
    code: "OAR-009",
    "name": "OAR-009",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-006-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-007",
    "searchNames": ["Özel Aranjman 07","Custom Arrangement 07","Особая композиция 07","Besonderes Arrangement 07"],
    code: "OAR-010",
    "name": "OAR-010",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-007-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-008",
    "searchNames": ["Özel Aranjman 08","Custom Arrangement 08","Особая композиция 08","Besonderes Arrangement 08"],
    code: "OAR-011",
    "name": "OAR-011",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-008-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-009",
    "searchNames": ["Özel Aranjman 09","Custom Arrangement 09","Особая композиция 09","Besonderes Arrangement 09"],
    code: "OAR-012",
    "name": "OAR-012",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-009-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-010",
    "searchNames": ["Özel Aranjman 10","Custom Arrangement 10","Особая композиция 10","Besonderes Arrangement 10"],
    code: "OAR-013",
    "name": "OAR-013",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-010-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-011",
    "searchNames": ["Özel Aranjman 11","Custom Arrangement 11","Особая композиция 11","Besonderes Arrangement 11"],
    code: "OAR-014",
    "name": "OAR-014",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-011-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-012",
    "searchNames": ["Özel Aranjman 12","Custom Arrangement 12","Особая композиция 12","Besonderes Arrangement 12"],
    code: "OAR-015",
    "name": "OAR-015",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-012-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "ozel-aranjman-013",
    "searchNames": ["Özel Aranjman 13","Custom Arrangement 13","Особая композиция 13","Besonderes Arrangement 13"],
    code: "OAR-016",
    "name": "OAR-016",
    "category": "Özel Aranjman",
    "categories": [
      "Özel Aranjman"
    ],
    "description": "Buketia Flower özel aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/ozel-aranjman-013-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-001",
    "searchNames": ["Yapay Buket 01","Faux Bouquet 01","Искусственный букет 01","Kunstblumenstrauß 01"],
    code: "YBK-001",
    "name": "YBK-001",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-002",
    "searchNames": ["Yapay Buket 02","Faux Bouquet 02","Искусственный букет 02","Kunstblumenstrauß 02"],
    code: "YBK-002",
    "name": "YBK-002",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-003",
    "searchNames": ["Yapay Buket 03","Faux Bouquet 03","Искусственный букет 03","Kunstblumenstrauß 03"],
    code: "YBK-003",
    "name": "YBK-003",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-003-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-004",
    "searchNames": ["Yapay Buket 04","Faux Bouquet 04","Искусственный букет 04","Kunstblumenstrauß 04"],
    code: "YBK-004",
    "name": "YBK-004",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-004-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-005",
    "searchNames": ["Yapay Buket 05","Faux Bouquet 05","Искусственный букет 05","Kunstblumenstrauß 05"],
    code: "YBK-005",
    "name": "YBK-005",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-005-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-006",
    "searchNames": ["Yapay Buket 06","Faux Bouquet 06","Искусственный букет 06","Kunstblumenstrauß 06"],
    code: "YBK-006",
    "name": "YBK-006",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-006-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-007",
    "searchNames": ["Yapay Buket 07","Faux Bouquet 07","Искусственный букет 07","Kunstblumenstrauß 07"],
    code: "YBK-007",
    "name": "YBK-007",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-007-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1362,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-008",
    "searchNames": ["Yapay Buket 08","Faux Bouquet 08","Искусственный букет 08","Kunstblumenstrauß 08"],
    code: "YBK-008",
    "name": "YBK-008",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-008-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-009",
    "searchNames": ["Yapay Buket 09","Faux Bouquet 09","Искусственный букет 09","Kunstblumenstrauß 09"],
    code: "YBK-009",
    "name": "YBK-009",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-009-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-011",
    "searchNames": ["Yapay Buket 11","Faux Bouquet 11","Искусственный букет 11","Kunstblumenstrauß 11"],
    code: "YBK-010",
    "name": "YBK-010",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-011-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-012",
    "searchNames": ["Yapay Buket 12","Faux Bouquet 12","Искусственный букет 12","Kunstblumenstrauß 12"],
    code: "YBK-011",
    "name": "YBK-011",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-012-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-013",
    "searchNames": ["Yapay Buket 13","Faux Bouquet 13","Искусственный букет 13","Kunstblumenstrauß 13"],
    code: "YBK-012",
    "name": "YBK-012",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-013-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-014",
    "searchNames": ["Yapay Buket 14","Faux Bouquet 14","Искусственный букет 14","Kunstblumenstrauß 14"],
    code: "YBK-013",
    "name": "YBK-013",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-014-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-015",
    "searchNames": ["Yapay Buket 15","Faux Bouquet 15","Искусственный букет 15","Kunstblumenstrauß 15"],
    code: "YBK-014",
    "name": "YBK-014",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-015-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-016",
    "searchNames": ["Yapay Buket 16","Faux Bouquet 16","Искусственный букет 16","Kunstblumenstrauß 16"],
    code: "YBK-015",
    "name": "YBK-015",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-016-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-017",
    "searchNames": ["Yapay Buket 17","Faux Bouquet 17","Искусственный букет 17","Kunstblumenstrauß 17"],
    code: "YBK-016",
    "name": "YBK-016",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-017-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-018",
    "searchNames": ["Yapay Buket 18","Faux Bouquet 18","Искусственный букет 18","Kunstblumenstrauß 18"],
    code: "YBK-017",
    "name": "YBK-017",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-018-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-019",
    "searchNames": ["Yapay Buket 19","Faux Bouquet 19","Искусственный букет 19","Kunstblumenstrauß 19"],
    code: "YBK-018",
    "name": "YBK-018",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-019-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1365,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-020",
    "searchNames": ["Yapay Buket 20","Faux Bouquet 20","Искусственный букет 20","Kunstblumenstrauß 20"],
    code: "YBK-019",
    "name": "YBK-019",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-020-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-021",
    "searchNames": ["Yapay Buket 21","Faux Bouquet 21","Искусственный букет 21","Kunstblumenstrauß 21"],
    code: "YBK-020",
    "name": "YBK-020",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-021-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-022",
    "searchNames": ["Yapay Buket 22","Faux Bouquet 22","Искусственный букет 22","Kunstblumenstrauß 22"],
    code: "YBK-021",
    "name": "YBK-021",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-022-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-023",
    "searchNames": ["Yapay Buket 23","Faux Bouquet 23","Искусственный букет 23","Kunstblumenstrauß 23"],
    code: "YBK-022",
    "name": "YBK-022",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-023-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1365,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-024",
    "searchNames": ["Yapay Buket 24","Faux Bouquet 24","Искусственный букет 24","Kunstblumenstrauß 24"],
    code: "YBK-023",
    "name": "YBK-023",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-024-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-025",
    "searchNames": ["Yapay Buket 25","Faux Bouquet 25","Искусственный букет 25","Kunstblumenstrauß 25"],
    code: "YBK-024",
    "name": "YBK-024",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-025-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-026",
    "searchNames": ["Yapay Buket 26","Faux Bouquet 26","Искусственный букет 26","Kunstblumenstrauß 26"],
    code: "YBK-025",
    "name": "YBK-025",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-026-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-buket-027",
    "searchNames": ["Yapay Buket 27","Faux Bouquet 27","Искусственный букет 27","Kunstblumenstrauß 27"],
    code: "YBK-026",
    "name": "YBK-026",
    "category": "Yapay Buket",
    "categories": [
      "Yapay Buket"
    ],
    "description": "Buketia Flower yapay buket koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-buket-027-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-001",
    "searchNames": ["Yapay Aranjman 01","Faux Arrangement 01","Искусственная композиция 01","Kunstblumenarrangement 01"],
    code: "YAR-001",
    "name": "YAR-001",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-002",
    "searchNames": ["Yapay Aranjman 02","Faux Arrangement 02","Искусственная композиция 02","Kunstblumenarrangement 02"],
    code: "YAR-002",
    "name": "YAR-002",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-003",
    "searchNames": ["Yapay Aranjman 03","Faux Arrangement 03","Искусственная композиция 03","Kunstblumenarrangement 03"],
    code: "YAR-003",
    "name": "YAR-003",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-003-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-004",
    "searchNames": ["Yapay Aranjman 04","Faux Arrangement 04","Искусственная композиция 04","Kunstblumenarrangement 04"],
    code: "YAR-004",
    "name": "YAR-004",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-004-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-005",
    "searchNames": ["Yapay Aranjman 05","Faux Arrangement 05","Искусственная композиция 05","Kunstblumenarrangement 05"],
    code: "YAR-005",
    "name": "YAR-005",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-005-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1363,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-006",
    "searchNames": ["Yapay Aranjman 06","Faux Arrangement 06","Искусственная композиция 06","Kunstblumenarrangement 06"],
    code: "YAR-006",
    "name": "YAR-006",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-006-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-007",
    "searchNames": ["Yapay Aranjman 07","Faux Arrangement 07","Искусственная композиция 07","Kunstblumenarrangement 07"],
    code: "YAR-007",
    "name": "YAR-007",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-007-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-008",
    "searchNames": ["Yapay Aranjman 08","Faux Arrangement 08","Искусственная композиция 08","Kunstblumenarrangement 08"],
    code: "YAR-008",
    "name": "YAR-008",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-008-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-009",
    "searchNames": ["Yapay Aranjman 09","Faux Arrangement 09","Искусственная композиция 09","Kunstblumenarrangement 09"],
    code: "YAR-009",
    "name": "YAR-009",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-009-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-010",
    "searchNames": ["Yapay Aranjman 10","Faux Arrangement 10","Искусственная композиция 10","Kunstblumenarrangement 10"],
    code: "YAR-010",
    "name": "YAR-010",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-010-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-011",
    "searchNames": ["Yapay Aranjman 11","Faux Arrangement 11","Искусственная композиция 11","Kunstblumenarrangement 11"],
    code: "YAR-011",
    "name": "YAR-011",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-011-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1362,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-012",
    "searchNames": ["Yapay Aranjman 12","Faux Arrangement 12","Искусственная композиция 12","Kunstblumenarrangement 12"],
    code: "YAR-012",
    "name": "YAR-012",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-012-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1362,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-013",
    "searchNames": ["Yapay Aranjman 13","Faux Arrangement 13","Искусственная композиция 13","Kunstblumenarrangement 13"],
    code: "YAR-013",
    "name": "YAR-013",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-013-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "yapay-aranjman-014",
    "searchNames": ["Yapay Aranjman 14","Faux Arrangement 14","Искусственная композиция 14","Kunstblumenarrangement 14"],
    code: "YAR-014",
    "name": "YAR-014",
    "category": "Yapay Aranjman",
    "categories": [
      "Yapay Aranjman"
    ],
    "description": "Buketia Flower yapay aranjman koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/yapay-aranjman-014-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "isteme-cikolata-001",
    "searchNames": ["İsteme Çiçeği & Çikolata 01","Engagement Flowers & Chocolates 01","Цветы и шоколад для помолвки 01","Verlobungsblumen & Pralinen 01"],
    code: "IST-001",
    "name": "IST-001",
    "category": "İsteme Çiçekleri & Çikolataları",
    "categories": [
      "İsteme Çiçekleri & Çikolataları"
    ],
    "description": "Buketia Flower isteme çiçekleri ve çikolataları koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/isteme-cikolata-001-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center bottom",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  },
  {
    "id": "isteme-cikolata-002",
    "searchNames": ["İsteme Çiçeği & Çikolata 02","Engagement Flowers & Chocolates 02","Цветы и шоколад для помолвки 02","Verlobungsblumen & Pralinen 02"],
    code: "IST-002",
    "name": "IST-002",
    "category": "İsteme Çiçekleri & Çikolataları",
    "categories": [
      "İsteme Çiçekleri & Çikolataları"
    ],
    "description": "Buketia Flower isteme çiçekleri ve çikolataları koleksiyonundan bir tasarım. Sipariş ve teslimat ayrıntıları WhatsApp üzerinden netleştirilir.",
    "image": "assets/urunler/isteme-cikolata-002-koleksiyon.jpg",
    "imageWidth": 768,
    "imageHeight": 1364,
    "imagePosition": "center bottom",
    "imageFit": "cover",
    "tone": "ivory",
    "badge": "",
    "inStock": true
  }
];
