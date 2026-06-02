/* CarpPoint Admin — mock data (PL) */
window.AD = window.AD || {};

AD.statusMap = {
  PENDING:    ["Oczekuje","warn"],
  PAID:       ["Opłacone","info"],
  PROCESSING: ["W realizacji","purple"],
  SHIPPED:    ["Wysłane","brand"],
  DELIVERED:  ["Dostarczone","ok"],
  CANCELLED:  ["Anulowane","gray"],
  REFUNDED:   ["Zwrot","bad"],
};
AD.statusFlow = {
  PENDING:["PAID","CANCELLED"], PAID:["PROCESSING","REFUNDED"], PROCESSING:["SHIPPED","CANCELLED"],
  SHIPPED:["DELIVERED"], DELIVERED:[], CANCELLED:[], REFUNDED:[],
};

AD.categories = [
  { id:1, name:"Karp", slug:"karp", parent:null, products:412, order:1 },
  { id:2, name:"Kulki proteinowe", slug:"kulki", parent:1, products:186, order:1 },
  { id:3, name:"Pop-upy i wafters", slug:"popup", parent:1, products:94, order:2 },
  { id:4, name:"Atraktory i liquidy", slug:"liquidy", parent:1, products:73, order:3 },
  { id:5, name:"Wędki", slug:"wedki", parent:null, products:268, order:2 },
  { id:6, name:"Wędki karpiowe", slug:"wedki-karp", parent:5, products:142, order:1 },
  { id:7, name:"Wędki spinningowe", slug:"wedki-spin", parent:5, products:126, order:2 },
  { id:8, name:"Kołowrotki", slug:"kolowrotki", parent:null, products:154, order:3 },
  { id:9, name:"Przynęty spinningowe", slug:"przynety", parent:null, products:521, order:4 },
  { id:10, name:"Żyłki i plecionki", slug:"zylki", parent:null, products:187, order:5 },
  { id:11, name:"Akcesoria", slug:"akcesoria", parent:null, products:446, order:6 },
];

AD.brands = ["Trinity Baits","Mainline","Sticky Baits","Nash","Fox","Carp Spirit","Mikado","Jaxon","Shimano","Daiwa","Dragon","Rapala"];

/* status: ACTIVE | DRAFT | ARCHIVED */
AD.products = [
  { id:1,  sku:"TB-SCS-20-1K", name:"Scopex-Squid — kulki przynętowe 20mm", brand:"Trinity Baits", cat:"Kulki proteinowe", price:64.90, was:84.90, stock:142, low:30, status:"ACTIVE",  sold:1840, rating:4.8, reviews:212, variants:4, label:"boilies 20mm" },
  { id:2,  sku:"ML-CELL-15",   name:"Cell Pop-Ups 15mm — kulki pływające", brand:"Mainline", cat:"Pop-upy i wafters", price:42.00, was:null, stock:88, low:20, status:"ACTIVE", sold:1320, rating:4.9, reviews:158, variants:3, label:"pop-up 15mm" },
  { id:3,  sku:"SB-KRW-16",    name:"Krill Wafters 16mm", brand:"Sticky Baits", cat:"Pop-upy i wafters", price:38.50, was:45.00, stock:14, low:20, status:"ACTIVE", sold:910, rating:4.7, reviews:94, variants:2, label:"wafter 16mm" },
  { id:4,  sku:"TB-GLM-500",   name:"GLM Liquid — atraktor 500ml", brand:"Trinity Baits", cat:"Atraktory i liquidy", price:54.90, was:null, stock:61, low:15, status:"ACTIVE", sold:540, rating:4.6, reviews:73, variants:1, label:"liquid 500ml" },
  { id:5,  sku:"NASH-BWD-100", name:"Bloodworm Dip — koncentrat 100ml", brand:"Nash", cat:"Atraktory i liquidy", price:29.90, was:null, stock:103, low:20, status:"ACTIVE", sold:420, rating:4.5, reviews:61, variants:1, label:"dip 100ml" },
  { id:6,  sku:"CS-DRIG-6",    name:"Ready Rig D-Rig — gotowy zestaw #6", brand:"Carp Spirit", cat:"Karp", price:24.90, was:null, stock:0, low:25, status:"ACTIVE", sold:380, rating:4.4, reviews:48, variants:3, label:"D-rig #6" },
  { id:7,  sku:"FOX-CS-4",     name:"Edges Curve Shank — haczyki #4 (10szt)", brand:"Fox", cat:"Karp", price:19.90, was:26.00, stock:240, low:50, status:"ACTIVE", sold:2100, rating:4.8, reviews:130, variants:5, label:"haczyk #4" },
  { id:8,  sku:"MIK-EXC-360",  name:"Excellence Carp 3,60m 3,5lbs", brand:"Mikado", cat:"Wędki karpiowe", price:289.00, was:359.00, stock:11, low:8, status:"ACTIVE", sold:210, rating:4.6, reviews:87, variants:2, label:"wędka 3,6m" },
  { id:9,  sku:"SHI-BR-10000", name:"Baitrunner DL 10000 — kołowrotek", brand:"Shimano", cat:"Kołowrotki", price:449.00, was:null, stock:34, low:10, status:"ACTIVE", sold:560, rating:4.9, reviews:203, variants:1, label:"kołowrotek" },
  { id:10, sku:"DAI-JB-013",   name:"J-Braid X8 0,13mm 150m — plecionka", brand:"Daiwa", cat:"Żyłki i plecionki", price:74.90, was:null, stock:178, low:40, status:"ACTIVE", sold:1490, rating:4.8, reviews:176, variants:6, label:"plecionka" },
  { id:11, sku:"JAX-FL-35",    name:"Fanatik Larva 3.5″ — guma (5szt)", brand:"Jaxon", cat:"Przynęty spinningowe", price:12.90, was:null, stock:420, low:60, status:"ACTIVE", sold:980, rating:4.5, reviews:64, variants:8, label:"guma 3.5" },
  { id:12, sku:"RAP-OF-9",     name:"Original Floater 9cm — wobler", brand:"Rapala", cat:"Przynęty spinningowe", price:39.90, was:49.90, stock:9, low:15, status:"ACTIVE", sold:760, rating:4.7, reviews:142, variants:4, label:"wobler 9cm" },
  { id:13, sku:"ML-PAM-1K",    name:"Pro-Active Mix — zanęta method 1kg", brand:"Mainline", cat:"Karp", price:34.90, was:null, stock:67, low:20, status:"ACTIVE", sold:340, rating:4.6, reviews:58, variants:2, label:"zanęta" },
  { id:14, sku:"SB-PEL-4",     name:"Pellets 4mm — pellet karpiowy 2,5kg", brand:"Sticky Baits", cat:"Karp", price:46.00, was:null, stock:52, low:15, status:"ACTIVE", sold:290, rating:4.7, reviews:39, variants:3, label:"pellet 4mm" },
  { id:15, sku:"FOX-MRX-31",   name:"Micron RX+ — sygnalizatory (3+1)", brand:"Fox", cat:"Akcesoria", price:899.00, was:1090.00, stock:6, low:5, status:"ACTIVE", sold:88, rating:4.9, reviews:51, variants:1, label:"sygnalizatory" },
  { id:16, sku:"CS-LN-42",     name:"Landing Net 42″ — podbierak", brand:"Carp Spirit", cat:"Akcesoria", price:159.00, was:null, stock:23, low:10, status:"ACTIVE", sold:140, rating:4.5, reviews:44, variants:1, label:"podbierak" },
  { id:17, sku:"NASH-SBO-9",   name:"Scope Black Ops 9ft 3lbs", brand:"Nash", cat:"Wędki karpiowe", price:519.00, was:null, stock:18, low:6, status:"DRAFT", sold:0, rating:0, reviews:0, variants:2, label:"wędka 9ft" },
  { id:18, sku:"DR-PUP-12",    name:"Mega Baits Pop-Up Pineapple 12mm", brand:"Dragon", cat:"Pop-upy i wafters", price:21.90, was:28.00, stock:0, low:20, status:"ARCHIVED", sold:160, rating:4.3, reviews:37, variants:2, label:"pop-up 12mm" },
  { id:19, sku:"TB-AMC-1L",    name:"Amino Complex — liquid 1L", brand:"Trinity Baits", cat:"Atraktory i liquidy", price:69.00, was:null, stock:44, low:15, status:"ACTIVE", sold:230, rating:4.7, reviews:55, variants:1, label:"liquid 1L" },
  { id:20, sku:"MIK-CL-028",   name:"Crystal Line 0,28mm 150m — żyłka", brand:"Mikado", cat:"Żyłki i plecionki", price:18.90, was:null, stock:310, low:50, status:"ACTIVE", sold:670, rating:4.4, reviews:88, variants:5, label:"żyłka 0,28" },
];

const FN = ["Jan","Anna","Piotr","Katarzyna","Tomasz","Magdalena","Marcin","Agnieszka","Paweł","Ewa","Krzysztof","Aleksandra","Michał","Joanna","Łukasz"];
const LN = ["Kowalski","Nowak","Wiśniewski","Wójcik","Kowalczyk","Kamiński","Lewandowski","Zieliński","Szymański","Woźniak","Dąbrowski","Mazur","Kozłowski","Jankowski","Wojciechowski"];
const CITY = ["Warszawa","Kraków","Wrocław","Poznań","Gdańsk","Łódź","Szczecin","Katowice","Lublin","Bydgoszcz"];

function rng(seed){ let s=seed; return ()=> (s=(s*9301+49297)%233280)/233280; }
const R = rng(7);

AD.customers = Array.from({length:28}, (_,i)=>{
  const fn=FN[Math.floor(R()*FN.length)], ln=LN[Math.floor(R()*LN.length)];
  const orders = Math.floor(R()*22);
  const spent = orders ? +(orders*(60+R()*340)).toFixed(2) : 0;
  const roles = i===0?"SUPER_ADMIN": i===1?"ADMIN": i===2?"MANAGER":"USER";
  return {
    id:1000+i, name:`${fn} ${ln}`,
    email:`${fn.toLowerCase()}.${ln.toLowerCase().replace(/[łś]/g,'l')}@example.com`.replace(/[^\x00-\x7F]/g,''),
    city:CITY[Math.floor(R()*CITY.length)],
    role:roles, orders, spent,
    blocked: i===17,
    joined: `${2023+Math.floor(R()*2)}-0${1+Math.floor(R()*9)}-${10+Math.floor(R()*18)}`,
    vip: spent>2500,
  };
});

const NOW = new Date("2026-06-01");
function daysAgo(n){ const d=new Date(NOW); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10); }

const STATS = ["DELIVERED","DELIVERED","DELIVERED","SHIPPED","SHIPPED","PROCESSING","PAID","PENDING","DELIVERED","CANCELLED","SHIPPED","DELIVERED","PROCESSING","REFUNDED","PAID","DELIVERED","SHIPPED","DELIVERED","PENDING","PROCESSING","DELIVERED","PAID","SHIPPED","DELIVERED","CANCELLED","DELIVERED","PROCESSING","SHIPPED"];
const CARRIERS = ["InPost Paczkomat","Kurier DPD","Kurier DHL","Poczta Polska"];

AD.orders = STATS.map((st,i)=>{
  const cust = AD.customers[Math.floor(R()*AD.customers.length)];
  const nItems = 1+Math.floor(R()*4);
  const items = Array.from({length:nItems},()=> AD.products[Math.floor(R()*AD.products.length)]);
  const total = +items.reduce((s,p)=>s+p.price*(1+Math.floor(R()*2)),0).toFixed(2);
  const day = i; // most recent first
  const carrier = CARRIERS[Math.floor(R()*CARRIERS.length)];
  return {
    num:`ORD-2026${(525-i).toString().padStart(4,'0').slice(0,2)}${(28-(i%28)).toString().padStart(2,'0')}-${(4800-i*7).toString().padStart(6,'0')}`,
    id:5000-i,
    customer:cust.name, email:cust.email, city:cust.city,
    status:st, total, items, itemCount:nItems,
    date:daysAgo(day), carrier,
    tracking: (st==="SHIPPED"||st==="DELIVERED")? `${carrier.includes('InPost')?'6200':'DPD'} ${Math.floor(R()*9000+1000)} ${Math.floor(R()*9000+1000)}`:"",
    payment: ["Przelewy24","BLIK","Karta"][Math.floor(R()*3)],
    vat:23, note:"",
  };
});

AD.reviews = [
  { id:1, product:"Scopex-Squid — kulki 20mm", pid:1, author:"Marcin K.", email:"marcin.k@example.com", rating:5, title:"Najlepsze kulki", body:"Karpie biorą pewnie, na sesji 48h cztery ryby powyżej 12 kg. Aromat utrzymuje się długo.", status:"PENDING", verified:true, date:daysAgo(1), helpful:0 },
  { id:2, product:"Cell Pop-Ups 15mm", pid:2, author:"Tomasz W.", email:"tomasz.w@example.com", rating:5, title:"Świetne pop-upy", body:"Idealne na włos. Polecam każdemu karpiarzowi, sprawdzają się też zimą.", status:"PENDING", verified:true, date:daysAgo(1), helpful:0 },
  { id:3, product:"J-Braid X8 0,13mm", pid:10, author:"Anonim", email:"spam@spam.io", rating:1, title:"???", body:"Kup teraz tanie plecionki na mojej stronie www.tani-sklep-xyz.example — najlepsze ceny!!!", status:"PENDING", verified:false, date:daysAgo(2), helpful:0 },
  { id:4, product:"Original Floater 9cm", pid:12, author:"Paweł D.", email:"pawel.d@example.com", rating:4, title:"Dobry wobler", body:"Solidny, łapie szczupaki. Minus za lakier, który po sezonie zaczyna odchodzić.", status:"PENDING", verified:true, date:daysAgo(3), helpful:0 },
  { id:5, product:"Baitrunner DL 10000", pid:9, author:"Krzysztof M.", email:"krzysztof.m@example.com", rating:5, title:"Niezawodny", body:"Druga sztuka w mojej kolekcji. Baitrunner działa bez zarzutu, polecam na karpia.", status:"APPROVED", verified:true, date:daysAgo(6), helpful:12 },
  { id:6, product:"Edges Curve Shank #4", pid:7, author:"Adam R.", email:"adam.r@example.com", rating:5, title:"Ostre jak brzytwa", body:"Haczyki trzymają mocno, nie ma wypięć. Standard w moim zestawie.", status:"APPROVED", verified:true, date:daysAgo(8), helpful:7 },
  { id:7, product:"Krill Wafters 16mm", pid:3, author:"Jakub L.", email:"jakub.l@example.com", rating:2, title:"Słaba trwałość", body:"Rozpadają się w wodzie po kilku godzinach. Spodziewałem się więcej za tę cenę.", status:"REJECTED", verified:false, date:daysAgo(10), helpful:1 },
];

AD.coupons = [
  { code:"SUMMER10", type:"percent", value:10, status:"ACTIVE", used:342, limit:1000, min:0, from:"2026-05-01", to:"2026-08-31", desc:"10% na cały koszyk" },
  { code:"KARP15", type:"percent", value:15, status:"ACTIVE", used:118, limit:500, min:150, from:"2026-05-15", to:"2026-06-30", desc:"15% na zamówienia od 150 zł" },
  { code:"SAVE20", type:"fixed", value:20, status:"ACTIVE", used:89, limit:300, min:100, from:"2026-04-01", to:"2026-06-15", desc:"−20 zł przy zakupach od 100 zł" },
  { code:"FREESHIP", type:"shipping", value:0, status:"ACTIVE", used:521, limit:null, min:0, from:"2026-01-01", to:"2026-12-31", desc:"Darmowa dostawa" },
  { code:"WIOSNA25", type:"percent", value:25, status:"EXPIRED", used:870, limit:870, min:0, from:"2026-03-01", to:"2026-04-30", desc:"25% — wyprzedaż wiosenna" },
  { code:"VIP5", type:"percent", value:5, status:"SCHEDULED", used:0, limit:null, min:0, from:"2026-07-01", to:"2026-12-31", desc:"5% dla klientów VIP" },
];

AD.promotions = [
  { name:"Wyprzedaż kulek −40%", type:"Flash sale", scope:"Kategoria: Kulki proteinowe", status:"ACTIVE", from:"2026-05-28", to:"2026-06-04" },
  { name:"Wędka + kołowrotek −20%", type:"Zestaw (bundle)", scope:"Wędki karpiowe + Kołowrotki", status:"ACTIVE", from:"2026-05-01", to:"2026-06-30" },
  { name:"Trinity Baits −15%", type:"Rabat na markę", scope:"Marka: Trinity Baits", status:"SCHEDULED", from:"2026-06-10", to:"2026-06-20" },
];

const AUD_ACT = [
  ["Jan Kowalski","SUPER_ADMIN","status.change","Zamówienie ORD-20260525-004800","PROCESSING → SHIPPED"],
  ["Anna Nowak","ADMIN","product.update","Produkt TB-SCS-20-1K","Cena 84,90 → 64,90 zł"],
  ["Anna Nowak","ADMIN","review.approve","Opinia #5 (Baitrunner DL)","PENDING → APPROVED"],
  ["Piotr Wiśniewski","MANAGER","stock.update","Produkt SHI-BR-10000","Stan 12 → 34 szt."],
  ["Jan Kowalski","SUPER_ADMIN","user.role","Użytkownik #1002","USER → MANAGER"],
  ["Anna Nowak","ADMIN","coupon.create","Kupon VIP5","Utworzono (5%, VIP)"],
  ["Piotr Wiśniewski","MANAGER","product.create","Produkt NASH-SBO-9","Dodano (DRAFT)"],
  ["Anna Nowak","ADMIN","review.reject","Opinia #7 (Krill Wafters)","PENDING → REJECTED"],
  ["Jan Kowalski","SUPER_ADMIN","user.block","Użytkownik #1017","Zablokowano"],
  ["Piotr Wiśniewski","MANAGER","order.refund","Zamówienie ORD-20260512-004721","Zwrot 146,70 zł"],
  ["Anna Nowak","ADMIN","promo.create","Promocja „Wyprzedaż kulek −40%”","Flash sale utworzony"],
  ["Piotr Wiśniewski","MANAGER","status.change","Zamówienie ORD-20260524-004793","PAID → PROCESSING"],
];
AD.audit = AUD_ACT.map((a,i)=>({
  who:a[0], role:a[1], action:a[2], entity:a[3], change:a[4],
  ts: `2026-05-${(31-i).toString().padStart(2,'0')} ${(9+(i%9))}:${(10+i*3%50).toString().padStart(2,'0')}`,
}));

/* dashboard series */
AD.revenue14 = [4200,3850,5100,4700,6200,7100,5400,4900,6800,7400,6100,8200,7700,9100];
AD.revenueDays = ["19","20","21","22","23","24","25","26","27","28","29","30","31","01"];
AD.kpi = {
  revToday:{ v:9100, prev:7700 }, revWeek:{ v:52200, prev:46800 }, revMonth:{ v:198400, prev:171200 },
  ordersToday:{ v:38, prev:31 }, newUsers:{ v:124, prev:97 }, conversion:{ v:3.4, prev:3.1 },
};
AD.funnel = [ ["Odwiedziny",18420], ["Dodania do koszyka",4210], ["Rozpoczęte zamówienia",1980], ["Opłacone",1624] ];
