/* CarpPoint.pl — sample catalogue data (PL) */
window.CP = window.CP || {};

CP.categories = [
  { slug: "karp",       name: "Karp",                icon: "drop",    count: 412 },
  { slug: "wedki",      name: "Wędki",               icon: "rod",     count: 268 },
  { slug: "kolowrotki", name: "Kołowrotki",          icon: "reel",    count: 154 },
  { slug: "przynety",   name: "Przynęty spinningowe", icon: "lure",   count: 521 },
  { slug: "zanety",     name: "Zanęty",              icon: "bag",     count: 203 },
  { slug: "zylki",      name: "Żyłki i plecionki",   icon: "line",    count: 187 },
  { slug: "haczyki",    name: "Haczyki",             icon: "hook",    count: 312 },
  { slug: "akcesoria",  name: "Akcesoria",           icon: "box",     count: 446 },
];

// homepage category tiles
CP.tiles = [
  { slug: "karp",       name: "Kulki proteinowe", count: "412 produktów", label: "boilies 20mm" },
  { slug: "wedki",      name: "Wędki karpiowe",   count: "268 produktów", label: "wędka 3,6m" },
  { slug: "kolowrotki", name: "Kołowrotki",       count: "154 produkty",  label: "kołowrotek 8000" },
  { slug: "przynety",   name: "Przynęty — spinning", count: "521 produktów", label: "guma 3.5″" },
  { slug: "zanety",     name: "Zanęty i pellet",  count: "203 produkty",  label: "zanęta method" },
  { slug: "haczyki",    name: "Haczyki i zestawy",count: "312 produktów", label: "haczyk #6" },
  { slug: "zylki",      name: "Żyłki i plecionki",count: "187 produktów", label: "plecionka 0,12" },
  { slug: "akcesoria",  name: "Akcesoria karpiowe", count: "446 produktów", label: "sygnalizator" },
];

CP.brands = ["Trinity Baits","Mainline","Sticky Baits","Nash","Fox","Carp Spirit","Mikado","Jaxon","Shimano","Daiwa","Dragon","Rapala"];

/* stock: 'in' | 'low' | 'out' */
CP.products = [
  { id:1,  name:"Trinity Baits Scopex-Squid — kulki przynętowe 20mm", brand:"Trinity Baits", cat:"Karp", catSlug:"karp",
    price:64.90, was:84.90, rating:4.8, reviews:212, stock:"in", isNew:true, label:"boilies 20mm", tags:["Karp","Pop-up"] },
  { id:2,  name:"Mainline Cell Pop-Ups 15mm — kulki pływające", brand:"Mainline", cat:"Karp", catSlug:"karp",
    price:42.00, rating:4.9, reviews:158, stock:"in", label:"pop-up 15mm", tags:["Karp"] },
  { id:3,  name:"Sticky Baits Krill Wafters 16mm", brand:"Sticky Baits", cat:"Karp", catSlug:"karp",
    price:38.50, was:45.00, rating:4.7, reviews:94, stock:"low", label:"wafter 16mm", tags:["Karp"] },
  { id:4,  name:"Trinity Baits GLM Liquid — atraktor 500ml", brand:"Trinity Baits", cat:"Karp", catSlug:"karp",
    price:54.90, rating:4.6, reviews:73, stock:"in", isNew:true, label:"liquid 500ml", tags:["Atraktory"] },
  { id:5,  name:"Nash Bloodworm Dip — koncentrat 100ml", brand:"Nash", cat:"Karp", catSlug:"karp",
    price:29.90, rating:4.5, reviews:61, stock:"in", label:"dip 100ml", tags:["Atraktory"] },
  { id:6,  name:"Carp Spirit Ready Rig D-Rig — gotowy zestaw #6", brand:"Carp Spirit", cat:"Karp", catSlug:"karp",
    price:24.90, rating:4.4, reviews:48, stock:"in", label:"D-rig #6", tags:["Zestawy"] },
  { id:7,  name:"Fox Edges Curve Shank — haczyki karpiowe #4 (10szt)", brand:"Fox", cat:"Haczyki", catSlug:"haczyki",
    price:19.90, was:26.00, rating:4.8, reviews:130, stock:"in", label:"haczyk #4", tags:["Karp"] },
  { id:8,  name:"Mikado Excellence Carp 3,60m 3,5lbs — wędka karpiowa", brand:"Mikado", cat:"Wędki", catSlug:"wedki",
    price:289.00, was:359.00, rating:4.6, reviews:87, stock:"low", label:"wędka 3,6m", tags:["Karp"] },
  { id:9,  name:"Shimano Baitrunner DL 10000 — kołowrotek karpiowy", brand:"Shimano", cat:"Kołowrotki", catSlug:"kolowrotki",
    price:449.00, rating:4.9, reviews:203, stock:"in", label:"kołowrotek 10000", tags:["Karp"] },
  { id:10, name:"Daiwa J-Braid X8 0,13mm 150m — plecionka 8x", brand:"Daiwa", cat:"Żyłki i plecionki", catSlug:"zylki",
    price:74.90, rating:4.8, reviews:176, stock:"in", label:"plecionka 0,13", tags:["Spinning"] },
  { id:11, name:"Jaxon Fanatik Larva 3.5″ — guma jadalna (5szt)", brand:"Jaxon", cat:"Przynęty spinningowe", catSlug:"przynety",
    price:12.90, rating:4.5, reviews:64, stock:"in", isNew:true, label:"guma 3.5″", tags:["Spinning","Okoń"] },
  { id:12, name:"Rapala Original Floater 9cm — wobler", brand:"Rapala", cat:"Przynęty spinningowe", catSlug:"przynety",
    price:39.90, was:49.90, rating:4.7, reviews:142, stock:"low", label:"wobler 9cm", tags:["Spinning","Szczupak"] },
  { id:13, name:"Mainline Pro-Active Mix — zanęta method 1kg", brand:"Mainline", cat:"Zanęty", catSlug:"zanety",
    price:34.90, rating:4.6, reviews:58, stock:"in", label:"zanęta 1kg", tags:["Karp","Feeder"] },
  { id:14, name:"Sticky Baits Pellets 4mm — pellet karpiowy 2,5kg", brand:"Sticky Baits", cat:"Zanęty", catSlug:"zanety",
    price:46.00, rating:4.7, reviews:39, stock:"in", label:"pellet 4mm", tags:["Karp"] },
  { id:15, name:"Fox Micron RX+ — sygnalizator brań (zestaw 3+1)", brand:"Fox", cat:"Akcesoria", catSlug:"akcesoria",
    price:899.00, was:1090.00, rating:4.9, reviews:51, stock:"low", label:"sygnalizatory", tags:["Karp"] },
  { id:16, name:"Carp Spirit Landing Net 42″ — podbierak karpiowy", brand:"Carp Spirit", cat:"Akcesoria", catSlug:"akcesoria",
    price:159.00, rating:4.5, reviews:44, stock:"in", label:"podbierak 42″", tags:["Karp"] },
  { id:17, name:"Nash Scope Black Ops 9ft 3lbs — wędka karpiowa", brand:"Nash", cat:"Wędki", catSlug:"wedki",
    price:519.00, rating:4.8, reviews:66, stock:"in", isNew:true, label:"wędka 9ft", tags:["Karp"] },
  { id:18, name:"Dragon Mega Baits Pop-Up Pineapple 12mm", brand:"Dragon", cat:"Karp", catSlug:"karp",
    price:21.90, was:28.00, rating:4.3, reviews:37, stock:"out", label:"pop-up 12mm", tags:["Karp"] },
  { id:19, name:"Trinity Baits Amino Complex — liquid 1L", brand:"Trinity Baits", cat:"Karp", catSlug:"karp",
    price:69.00, rating:4.7, reviews:55, stock:"in", label:"liquid 1L", tags:["Atraktory"] },
  { id:20, name:"Mikado Crystal Line 0,28mm 150m — żyłka monofilowa", brand:"Mikado", cat:"Żyłki i plecionki", catSlug:"zylki",
    price:18.90, rating:4.4, reviews:88, stock:"in", label:"żyłka 0,28", tags:["Karp","Feeder"] },
];

/* the focused product for product.html */
CP.detail = {
  id:1, name:"Scopex-Squid — kulki przynętowe 20mm", brand:"Trinity Baits", cat:"Karp", catSlug:"karp",
  sku:"TB-SCS-20-1K", price:64.90, was:84.90, rating:4.8, reviews:212, stock:"in",
  short:"Kultowe kulki proteinowe na bazie mączki rybnej i ekstraktu kałamarnicy. Słodko-pikantny profil Scopex-Squid sprawdza się przez cały sezon — od wiosny po późną jesień.",
  diameters:["16mm","18mm","20mm","24mm"],
  packs:[{l:"1 kg", v:64.90},{l:"3 kg", v:169.00},{l:"5 kg", v:259.00}],
  thumbs:["boilies 20mm","przekrój","opakowanie 1kg","na włosie"],
  specs:[
    ["Typ","Kulki przynętowe donne (tonące)"],["Aromat","Scopex-Squid"],["Średnica","16 / 18 / 20 / 24 mm"],
    ["Baza","Mączka rybna premium + ekstrakt kałamarnicy"],["Fasowanie","1 / 3 / 5 kg"],
    ["Trwałość","Shelf-life 6 mies."],["Gatunek","Karp, amur, lin"],["Sezon","Całoroczne"],["Producent","Trinity Baits (UA)"]
  ],
  reviewsList:[
    { who:"Marcin K.", when:"12 maja 2025", r:5, v:true, t:"Najlepsze kulki jakich używałem. Karpie biorą pewnie, na sesji 48h cztery ryby powyżej 12 kg." },
    { who:"Tomasz W.", when:"3 maja 2025", r:5, v:true, t:"Aromat mocny, ale nie przesadzony. Sprawdza się też jako przynęta na włosie razem z kukurydzą." },
    { who:"Paweł D.", when:"21 kwietnia 2025", r:4, v:false, t:"Solidna jakość, równe kulki. Minus za cenę, ale efekt wynagradza." },
  ]
};

/* sample order history for the account area */
CP.orders = [
  { num:"ORD-20250528-004812", date:"28 maja 2025", status:"shipped",   total:578.80, items:[1,9], carrier:"InPost Paczkomat", tracking:"6200 1234 5678" },
  { num:"ORD-20250514-004511", date:"14 maja 2025", status:"delivered", total:146.70, items:[2,4,5], carrier:"Kurier DPD", tracking:"DPD-99887766" },
  { num:"ORD-20250430-004203", date:"30 kwietnia 2025", status:"delivered", total:289.00, items:[8], carrier:"InPost Paczkomat", tracking:"6200 9988 1122" },
  { num:"ORD-20250402-003877", date:"2 kwietnia 2025", status:"cancelled", total:74.90, items:[10], carrier:"—", tracking:"" },
];
CP.orderStatus = {
  pending:   ["Oczekuje na płatność","warn"],
  paid:      ["Opłacone","info"],
  processing:["W realizacji","info"],
  shipped:   ["Wysłane","brand"],
  delivered: ["Dostarczone","ok"],
  cancelled: ["Anulowane","bad"],
};

CP.user = { name:"Jan Kowalski", email:"jan.kowalski@example.com", phone:"+48 600 123 456", since:"marzec 2024" };
