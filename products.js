// Bu dosyadaki ürünleri düzenleyerek katalog fiyatlarını, stok durumunu ve görselleri yönetebilirsiniz.
// Ürün kodları sabittir. Yeni ürün için ana kategorisindeki en büyük kodun bir sonrakini kullanın; silinen kodları tekrar kullanmayın.
window.BUKETIA_PRODUCTS = [
  {
    id: "romantik-pudra",
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
