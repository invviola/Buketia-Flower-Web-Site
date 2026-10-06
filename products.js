// Bu dosyadaki ürünleri düzenleyerek katalog fiyatlarını, stok durumunu ve görselleri yönetebilirsiniz.
window.BUKETIA_PRODUCTS = [
  {
    id: "romantik-pudra",
    name: "Romantik Pudra",
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
    name: "Derin Aşk",
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
    name: "Fuşya Rüya",
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
    name: "İyi Hisset",
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
    name: "Kırmızı Kalp",
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
    name: "Pembe Masal",
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
    name: "Yeni Başlangıç",
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
    name: "Mercan Güller",
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
    name: "Pastel Kutlama",
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
    name: "İsme Özel Gül Kutusu",
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
    name: "Güneşli Gün",
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
    name: "Beyaz Lilyum",
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
    name: "Bahar Sepeti",
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
    name: "Lavanta Bahçesi",
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
    name: "Altın Gece",
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
    name: "Kır Esintisi",
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
    name: "Mor Melodi",
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
    name: "Orman Buketi",
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
    name: "Gri Zarafet",
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
    name: "Beyaz Rüya",
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
    name: "Yaz Şenliği",
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
    name: "Mutluluk Sepeti",
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
    name: "Bohem Sepet",
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
    name: "Saf Zarafet Orkide",
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
    name: "İnci Gelin Buketi",
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
    name: "Mavi Bahçe Çelengi",
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
    name: "Zümrüt Altın Çelengi",
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
    name: "Güneş Mavisi Çelengi",
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
    name: "Gri Mavi Çelengi",
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
    name: "Altın Sarı Damla Çelengi",
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
    name: "Güneş Damla Çelengi",
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
    name: "Siyah Yuvarlak Çelengi",
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
    name: "Siyah Halka Çelengi",
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
    name: "Sarı Papatya Damla Çelengi",
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
    name: "Kırmızı Beyaz Damla Çelengi",
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
    name: "Sarı Çift Katlı Çelengi",
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
    name: "Kırmızı Beyaz Saygı Çelengi",
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
    name: "Kırmızı Gerbera Damla Çelengi",
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
    name: "Yeşil Kenarlı Renkli Çelengi",
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
    name: "Üç Renkli Damla Çelengi",
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
    name: "Beyaz Kırmızı Kıvrım Çelengi",
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
    name: "Krem Gerbera Çelengi",
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
    name: "Beyaz Çift Katlı Çelengi",
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
    name: "Kırmızı Beyaz Çapraz Çelengi",
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
    name: "Kırmızı Beyaz Armut Çelengi",
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
    name: "Krem Papatya Çelengi",
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
    "name": "Buket 01",
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
    "name": "Buket 02",
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
    "name": "Buket 03",
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
    "name": "Buket 04",
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
    "name": "Buket 06",
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
    "name": "Buket 07",
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
    "name": "Buket 08",
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
    "name": "Buket 09",
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
    "name": "Buket 10",
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
    "name": "Buket 11",
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
    "name": "Buket 12",
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
    "name": "Buket 13",
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
    "name": "Buket 14",
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
    "name": "Buket 15",
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
    "name": "Buket 16",
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
    "name": "Buket 17",
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
    "name": "Buket 18",
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
    "name": "Buket 19",
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
    "name": "Buket 20",
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
    "name": "Buket 21",
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
    "name": "Buket 22",
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
    "name": "Buket 23",
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
    "name": "Buket 24",
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
    "name": "Buket 25",
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
    "name": "Buket 26",
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
    "name": "Buket 27",
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
    "name": "Buket 28",
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
    "name": "Buket 29",
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
    "name": "Buket 30",
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
    "name": "Buket 31",
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
    "name": "Buket 32",
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
    "name": "Buket 33",
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
    "name": "Buket 34",
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
    "name": "Buket 35",
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
    "name": "Buket 36",
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
    "name": "Buket 38",
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
    "name": "Buket 39",
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
    "name": "Buket 40",
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
    "name": "Buket 41",
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
    "name": "Buket 42",
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
    "name": "Buket 43",
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
    "name": "Buket 44",
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
    "name": "Buket 45",
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
    "name": "Buket 46",
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
    "name": "Buket 47",
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
    "name": "Buket 48",
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
    "name": "Buket 49",
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
    "name": "Buket 50",
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
    "name": "Buket 51",
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
    "name": "Buket 52",
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
    "name": "Buket 53",
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
    "name": "Buket 54",
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
    "name": "Buket 55",
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
    "name": "Buket 56",
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
    "name": "Buket 57",
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
    "name": "Buket 58",
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
    "name": "Buket 59",
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
    "name": "Buket 60",
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
    "name": "Buket 61",
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
    "name": "Buket 62",
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
    "name": "Buket 63",
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
    "name": "Buket 64",
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
    "name": "Buket 65",
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
    "name": "Buket 66",
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
    "name": "Buket 67",
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
    "name": "Buket 68",
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
    "name": "Buket 69",
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
    "name": "Buket 70",
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
    "name": "Buket 71",
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
    "name": "Buket 72",
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
    "name": "Buket 73",
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
    "name": "Buket 74",
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
    "name": "Buket 75",
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
    "name": "Buket 76",
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
    "name": "Buket 77",
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
    "name": "Buket 78",
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
    "name": "Buket 79",
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
    "name": "Buket 80",
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
    "name": "Buket 81",
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
    "name": "Buket 82",
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
    "name": "Buket 83",
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
    "name": "Buket 84",
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
    "name": "Buket 85",
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
    "name": "Buket 86",
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
    "name": "Buket 87",
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
    "name": "Buket 88",
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
    "name": "Buket 89",
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
    "name": "Buket 90",
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
    "name": "Buket 91",
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
    "name": "Sevgiliye Özel 01",
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
    "name": "Sevgiliye Özel 02",
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
    "name": "Sevgiliye Özel 03",
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
    "name": "Sevgiliye Özel 04",
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
    "name": "Sevgiliye Özel 05",
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
    "name": "Sevgiliye Özel 06",
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
    "name": "Sevgiliye Özel 07",
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
    "name": "Sevgiliye Özel 08",
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
    "name": "Sevgiliye Özel 09",
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
    "name": "Sevgiliye Özel 10",
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
    "name": "Sevgiliye Özel 11",
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
    "name": "Hoş Geldin Bebek 01",
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
    "name": "Hoş Geldin Bebek 02",
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
    "name": "Hoş Geldin Bebek 03",
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
    "name": "Hoş Geldin Bebek 04",
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
    "name": "Hoş Geldin Bebek 05",
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
    "name": "Orkide 01",
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
    "name": "Orkide 02",
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
    "name": "Özel Aranjman 01",
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
    "name": "Özel Aranjman 02",
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
    "name": "Özel Aranjman 03",
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
    "name": "Özel Aranjman 04",
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
    "name": "Özel Aranjman 06",
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
    "name": "Özel Aranjman 07",
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
    "name": "Özel Aranjman 08",
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
    "name": "Özel Aranjman 09",
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
    "name": "Özel Aranjman 10",
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
    "name": "Özel Aranjman 11",
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
    "name": "Özel Aranjman 12",
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
    "name": "Özel Aranjman 13",
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
    "name": "Yapay Buket 01",
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
    "name": "Yapay Buket 02",
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
    "name": "Yapay Buket 03",
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
    "name": "Yapay Buket 04",
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
    "name": "Yapay Buket 05",
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
    "name": "Yapay Buket 06",
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
    "name": "Yapay Buket 07",
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
    "name": "Yapay Buket 08",
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
    "name": "Yapay Buket 09",
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
    "name": "Yapay Buket 11",
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
    "name": "Yapay Buket 12",
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
    "name": "Yapay Buket 13",
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
    "name": "Yapay Buket 14",
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
    "name": "Yapay Buket 15",
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
    "name": "Yapay Buket 16",
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
    "name": "Yapay Buket 17",
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
    "name": "Yapay Buket 18",
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
    "name": "Yapay Buket 19",
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
    "name": "Yapay Buket 20",
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
    "name": "Yapay Buket 21",
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
    "name": "Yapay Buket 22",
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
    "name": "Yapay Buket 23",
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
    "name": "Yapay Buket 24",
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
    "name": "Yapay Buket 25",
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
    "name": "Yapay Buket 26",
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
    "name": "Yapay Buket 27",
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
    "name": "Yapay Aranjman 01",
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
    "name": "Yapay Aranjman 02",
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
    "name": "Yapay Aranjman 03",
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
    "name": "Yapay Aranjman 04",
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
    "name": "Yapay Aranjman 05",
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
    "name": "Yapay Aranjman 06",
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
    "name": "Yapay Aranjman 07",
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
    "name": "Yapay Aranjman 08",
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
    "name": "Yapay Aranjman 09",
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
    "name": "Yapay Aranjman 10",
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
    "name": "Yapay Aranjman 11",
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
    "name": "Yapay Aranjman 12",
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
    "name": "Yapay Aranjman 13",
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
    "name": "Yapay Aranjman 14",
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
    "name": "İsteme Çiçeği & Çikolata 01",
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
    "name": "İsteme Çiçeği & Çikolata 02",
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
