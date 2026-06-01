/* CarpPoint.pl — shared app logic */
(function(){
  "use strict";
  const CP = window.CP = window.CP || {};

  /* ---------------- ICONS (lucide-style strokes) ---------------- */
  const I = {
    search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    heart:'<path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7Z"/>',
    cart:'<circle cx="9" cy="21" r="1.4"/><circle cx="18" cy="21" r="1.4"/><path d="M2.5 3h2.2l2.3 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21.5 7H6.3"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    truck:'<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
    shield:'<path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
    refresh:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>',
    trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    minus:'<path d="M5 12h14"/>',
    chevron:'<path d="m6 9 6 6 6-6"/>',
    chright:'<path d="m9 6 6 6-6 6"/>',
    check:'<path d="m20 6-11 11-5-5"/>',
    arrow:'<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    zoom:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    lock:'<rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    fb:'<path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.2l.5-3H14V8.2c0-.2.2-.2.2-.2z"/>',
    ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none"/>',
    yt:'<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none"/>',
    rod:'<path d="M3 21 21 3"/><path d="M16 4l4 4M14 10l1.5 1.5M11 13l1.5 1.5"/>',
    reel:'<circle cx="12" cy="13" r="6"/><circle cx="12" cy="13" r="1.6"/><path d="M12 3v3M9 4h6"/>',
    lure:'<path d="M5 6c5 0 9 3 9 6s-4 6-9 6"/><path d="M14 9c2 0 5 1 5 3s-3 3-5 3"/><circle cx="7" cy="12" r="1" fill="currentColor" stroke="none"/>',
    line:'<path d="M5 3c4 4 4 14 0 18M12 3c4 4 4 14 0 18M19 3c4 4 4 14 0 18"/>',
    hook:'<path d="M16 4v9a5 5 0 0 1-10 0v-1"/><path d="M13 4h6"/><path d="m4 12 2 2 2-2"/>',
    bag:'<path d="M6 8h12l-1 12H7z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    drop:'<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z"/>',
    star:'<path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7z" fill="currentColor" stroke="none"/>',
    filter:'<path d="M3 5h18M6 12h12M10 19h4"/>',
    grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    tag:'<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="7.5" r="1.4"/>',
    spark:'<path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  };
  CP.icon = function(name, cls){
    const c = cls ? ' class="'+cls+'"' : '';
    return '<svg'+c+' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(I[name]||'')+'</svg>';
  };
  const ic = CP.icon;
  CP.esc = function(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
  const esc = CP.esc;

  /* ---------------- helpers ---------------- */
  const fmt = CP.price = function(v){
    return new Intl.NumberFormat('pl-PL',{minimumFractionDigits:2, maximumFractionDigits:2}).format(v).replace(/\u00A0/g,' ') + ' zł';
  };
  const stockLabel = { in:["stock-in","Dostępny"], low:["stock-low","Ostatnie sztuki"], out:["stock-out","Brak w magazynie"] };
  function ratePct(r){ return (r/5*100).toFixed(1)+'%'; }

  /* ---------------- product card ---------------- */
  CP.card = function(p){
    const sale = p.was && p.was > p.price;
    const disc = sale ? Math.round((1 - p.price/p.was)*100) : 0;
    const out = p.stock === 'out';
    return `
    <article class="card">
      <div class="card-media">
        <a class="ph" href="product.html?id=${p.id}" data-label="${esc(p.label)}" aria-label="${esc(p.name)}"></a>
        <div class="card-badges">
          ${sale?`<span class="badge badge-sale">−${disc}%</span>`:''}
          ${p.isNew?`<span class="badge badge-new">Nowość</span>`:''}
        </div>
        <button class="card-wish ${CP.inWish(p.id)?'on':''}" aria-label="Dodaj do ulubionych" data-wish="${p.id}">${ic('heart','ico')}</button>
      </div>
      <div class="card-body">
        <span class="card-cat">${p.cat}</span>
        <h3 class="card-name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
        <div class="card-rate">
          <span class="stars" style="--pct:${ratePct(p.rating)}"></span>
          <span>${p.rating.toFixed(1)} · ${p.reviews}</span>
        </div>
        <div class="card-price">
          <span class="price-now ${sale?'sale':''}">${fmt(p.price)}</span>
          ${sale?`<span class="price-was">${fmt(p.was)}</span>`:''}
        </div>
        <span class="stock ${stockLabel[p.stock][0]}">${stockLabel[p.stock][1]}</span>
        <div class="card-foot">
          ${out
            ? `<button class="btn btn-outline btn-block" disabled style="opacity:.55;cursor:not-allowed">Powiadom o dostępności</button>`
            : `<button class="btn btn-primary btn-block" data-add="${p.id}">${ic('cart','ico')} Do koszyka</button>`}
        </div>
      </div>
    </article>`;
  };

  CP.renderGrid = function(sel, list){
    const el = document.querySelector(sel);
    if(!el) return;
    el.innerHTML = list.map(CP.card).join('');
  };

  /* ---------------- CART (localStorage) ---------------- */
  const KEY = 'cp_cart_v1';
  function read(){ try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e){ return []; } }
  function write(c){ localStorage.setItem(KEY, JSON.stringify(c)); updateCount(); }
  CP.getCart = read;
  CP.cartCount = function(){ return read().reduce((s,i)=>s+i.qty,0); };
  CP.cartSubtotal = function(){ return read().reduce((s,i)=>s+i.price*i.qty,0); };

  CP.addToCart = function(id, qty, variant){
    const p = (CP.products||[]).find(x=>x.id==id) || (CP.detail && CP.detail.id==id ? CP.detail : null);
    if(!p) return;
    qty = qty || 1;
    const c = read();
    const key = id + '|' + (variant||'');
    const ex = c.find(i=>i.key===key);
    if(ex){ ex.qty += qty; }
    else c.push({ key, id, name:p.name, brand:p.brand, price:p.price, label:p.label||'produkt', variant:variant||'', qty });
    write(c);
    CP.toast((p.brand?p.brand+' — ':'')+'dodano do koszyka', 'ok');
    renderDrawer(); openDrawer();
  };
  CP.setQty = function(key, qty){
    const c = read(); const it = c.find(i=>i.key===key); if(!it) return;
    it.qty = Math.max(1, qty); write(c); renderDrawer(); if(CP.onCartChange) CP.onCartChange();
  };
  CP.removeItem = function(key){
    write(read().filter(i=>i.key!==key)); renderDrawer(); if(CP.onCartChange) CP.onCartChange();
  };

  function updateCount(){
    const n = CP.cartCount();
    document.querySelectorAll('[data-cart-count]').forEach(e=>{ e.textContent = n; e.style.display = n? '' : 'none'; });
  }

  /* ---------------- WISHLIST (localStorage) ---------------- */
  const WKEY = 'cp_wish_v1';
  function rwish(){ try { return JSON.parse(localStorage.getItem(WKEY)) || []; } catch(e){ return []; } }
  function wwish(a){ localStorage.setItem(WKEY, JSON.stringify(a)); updateWishCount(); }
  CP.getWish = rwish;
  CP.inWish = function(id){ return rwish().includes(+id); };
  CP.wishCount = function(){ return rwish().length; };
  CP.toggleWish = function(id){
    id = +id; const w = rwish(); const i = w.indexOf(id);
    let on;
    if(i>=0){ w.splice(i,1); on=false; } else { w.push(id); on=true; }
    wwish(w); CP.markWishes();
    CP.toast(on?'Dodano do ulubionych':'Usunięto z ulubionych', on?'ok':'');
    if(CP.onWishChange) CP.onWishChange();
    return on;
  };
  function updateWishCount(){
    const n = CP.wishCount();
    document.querySelectorAll('[data-wish-count]').forEach(e=>{ e.textContent=n; e.style.display=n?'':'none'; });
  }
  CP.updateWishCount = updateWishCount;
  CP.markWishes = function(){
    document.querySelectorAll('[data-wish]').forEach(b=>{ b.classList.toggle('on', CP.inWish(b.getAttribute('data-wish'))); });
  };

  /* ---------------- toast ---------------- */
  let toastWrap;
  CP.toast = function(msg, kind){
    if(!toastWrap){ toastWrap = document.createElement('div'); toastWrap.className='toast-wrap'; document.body.appendChild(toastWrap); }
    const t = document.createElement('div');
    t.className = 'toast '+(kind||'');
    t.innerHTML = ic(kind==='ok'?'check':'cart','ico')+'<span>'+msg+'</span>';
    toastWrap.appendChild(t);
    requestAnimationFrame(()=> t.classList.add('show'));
    setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(), 350); }, 2600);
  };

  /* ---------------- cart drawer ---------------- */
  function renderDrawer(){
    const body = document.querySelector('#cartDrawer .drawer-body');
    const foot = document.querySelector('#cartDrawer .drawer-foot');
    if(!body) return;
    const c = read();
    if(!c.length){
      body.innerHTML = `<div class="empty-state">${ic('cart','ico')}<p style="font-weight:600;color:var(--ink-700);margin-bottom:4px">Koszyk jest pusty</p><p class="small">Dodaj produkty, aby kontynuować.</p></div>`;
      if(foot) foot.style.display='none';
      return;
    }
    if(foot) foot.style.display='';
    body.innerHTML = c.map(i=>`
      <div class="cart-line">
        <div class="thumb ph" data-label="${esc(i.label)}" style="font-size:9px"></div>
        <div>
          <div class="nm">${esc(i.name)}</div>
          ${i.variant?`<div class="vr">${esc(i.variant)}</div>`:''}
          <div class="stepper sm" style="margin-top:8px">
            <button data-dec="${i.key}" aria-label="mniej">−</button>
            <input value="${i.qty}" readonly aria-label="ilość">
            <button data-inc="${i.key}" aria-label="więcej">+</button>
          </div>
          <button class="rm" data-rm="${i.key}">${ic('trash','ico')} Usuń</button>
        </div>
        <div class="lt">${fmt(i.price*i.qty)}</div>
      </div>`).join('');
    const sub = CP.cartSubtotal();
    foot.querySelector('[data-sub]').textContent = fmt(sub);
  }
  function openDrawer(){ const d=document.getElementById('cartDrawer'); const s=document.getElementById('scrim'); if(d){ d.classList.add('open'); s.classList.add('open'); } }
  function closeDrawer(){ document.querySelectorAll('.drawer.open').forEach(d=>d.classList.remove('open')); const s=document.getElementById('scrim'); if(s) s.classList.remove('open'); }
  CP.openCart = function(){ renderDrawer(); openDrawer(); };

  /* ---------------- header / footer / chrome injection ---------------- */
  CP.mountChrome = function(active){
    // scrim + drawers + toast root are appended once
    if(!document.getElementById('scrim')){
      const scrim = document.createElement('div'); scrim.id='scrim'; scrim.className='drawer-scrim'; document.body.appendChild(scrim);
      scrim.addEventListener('click', closeDrawer);
    }
    if(!document.getElementById('cartDrawer')){
      const d = document.createElement('aside'); d.id='cartDrawer'; d.className='drawer right';
      d.innerHTML = `
        <div class="drawer-head"><h3>Twój koszyk</h3><button class="icon-btn" data-close>${ic('x','ico')}</button></div>
        <div class="drawer-body"></div>
        <div class="drawer-foot">
          <div class="sumrow"><span class="muted">Suma częściowa</span><b data-sub>0,00 zł</b></div>
          <div class="sumrow small"><span class="muted">Dostawa</span><span class="muted">liczona w kasie</span></div>
          <a class="btn btn-primary btn-block btn-lg" href="cart.html" style="margin-top:12px">Przejdź do koszyka ${ic('arrow','ico')}</a>
          <p class="small muted" style="text-align:center;margin-top:10px;display:flex;gap:6px;justify-content:center;align-items:center">${ic('lock','ico')} Bezpieczne płatności</p>
        </div>`;
      document.body.appendChild(d);
      d.querySelector('[data-close]').addEventListener('click', closeDrawer);
    }
    // mobile nav drawer
    if(!document.getElementById('navDrawer')){
      const nd = document.createElement('aside'); nd.id='navDrawer'; nd.className='drawer';
      nd.innerHTML = `
        <div class="drawer-head"><h3>Menu</h3><button class="icon-btn" data-close>${ic('x','ico')}</button></div>
        <div class="drawer-body">
          <div class="search-bar" style="margin:6px 6px 14px"><span>${ic('search','ico')}</span><input placeholder="Szukaj sprzętu, marek..."></div>
          <nav class="drawer-nav">${navLinks(active)}</nav>
        </div>`;
      document.body.appendChild(nd);
      nd.querySelector('[data-close]').addEventListener('click', closeDrawer);
    }
    updateCount(); renderDrawer(); updateWishCount();
  };

  // category groupings for the Produkty mega-menu
  CP.megaGroups = [
    { h:'Karp', items:[['karp','Kulki proteinowe'],['zanety','Zanęty i pellet'],['akcesoria','Akcesoria karpiowe']] },
    { h:'Wędkarstwo', items:[['wedki','Wędki'],['kolowrotki','Kołowrotki'],['zylki','Żyłki i plecionki']] },
    { h:'Spinning', items:[['przynety','Przynęty — gumy, woblery'],['haczyki','Haczyki i zestawy'],['akcesoria','Podbieraki i sprzęt']] },
  ];
  // top-level nav. {mega:true} item opens the category panel.
  const NAV = [
    { t:'Produkty', mega:true, key:'produkty' },
    { t:'Promocje', h:'catalog.html?promo=1', key:'promo', promo:true },
    { t:'Nowości', h:'catalog.html?new=1', key:'new' },
    { t:'Poradnik', h:'blog.html', key:'blog' },
    { t:'Kontakt', h:'kontakt.html', key:'kontakt' },
  ];

  function megaPanel(){
    const cols = CP.megaGroups.map(g=>`
      <div class="mega-col">
        <div class="mega-col-head">${g.h}</div>
        ${g.items.map(([slug,label])=>{
          const c = CP.categories.find(x=>x.slug===slug)||{};
          return `<a class="mega-link" href="catalog.html?cat=${slug}">
            <span class="mega-ic">${ic(c.icon||'box')}</span>
            <span class="mega-tx"><b>${label}</b><span>${c.count||''} produktów</span></span>
          </a>`;
        }).join('')}
      </div>`).join('');
    return `
    <div class="mega" id="megaProdukty" role="menu">
      <div class="wrap mega-inner">
        <div class="mega-cols">${cols}</div>
        <a class="mega-feature" href="catalog.html?promo=1">
          <span class="ph ph-dark" data-label="promo: −40% na kulki"></span>
          <span class="mega-feat-tx">
            <span class="badge badge-sale">Wyprzedaż</span>
            <b>Do −40% na kulki i przynęty</b>
            <span class="mega-feat-cta">Sprawdź ofertę ${ic('arrow','ico')}</span>
          </span>
        </a>
      </div>
      <div class="mega-foot"><div class="wrap"><a href="catalog.html">Zobacz cały katalog ${ic('arrow','ico')}</a></div></div>
    </div>`;
  }
  CP.megaPanel = megaPanel;

  function navItem(n, active){
    if(n.mega){
      return `<div class="nav-item has-mega ${active==='produkty'||(CP.categories.some(c=>c.slug===active))?'active':''}">
        <button class="nav-trigger" aria-haspopup="true">Produkty ${ic('chevron','ico')}</button>
        ${megaPanel()}
      </div>`;
    }
    const cls = (active===n.key?'active ':'') + (n.promo?'promo-link':'');
    return `<a href="${n.h}" class="${cls.trim()}">${n.promo?ic('spark','ico')+' ':''}${n.t}</a>`;
  }

  function navLinks(active){
    // mobile drawer: Produkty expands to a category list
    const cats = CP.megaGroups.flatMap(g=>g.items).filter((v,i,a)=>a.findIndex(x=>x[0]===v[0])===i);
    const seen = new Set();
    const catLinks = CP.categories.map(c=>`<a href="catalog.html?cat=${c.slug}" class="drawer-sub">${c.name}</a>`).join('');
    return `
      <div class="drawer-group-head">Produkty</div>
      ${catLinks}
      <a href="catalog.html" class="drawer-sub" style="color:var(--brand-700);font-weight:700">Cały katalog →</a>
      <div class="drawer-divider"></div>
      <a href="catalog.html?promo=1" class="${active==='promo'?'active':''}">Promocje</a>
      <a href="catalog.html?new=1" class="${active==='new'?'active':''}">Nowości</a>
      <a href="blog.html" class="${active==='blog'?'active':''}">Poradnik</a>
      <a href="kontakt.html" class="${active==='kontakt'?'active':''}">Kontakt</a>`;
  }
  CP.navLinks = navLinks;
  CP.navItem = navItem;

  /* ---------------- global event delegation ---------------- */
  document.addEventListener('click', function(e){
    const trig = e.target.closest('.nav-trigger');
    if(trig){ e.preventDefault(); const hm=trig.closest('.has-mega'); const was=hm.classList.contains('hovering'); document.querySelectorAll('.has-mega.hovering').forEach(x=>x.classList.remove('hovering')); if(!was) hm.classList.add('hovering'); return; }
    if(!e.target.closest('.mega')){ document.querySelectorAll('.has-mega.hovering').forEach(x=>x.classList.remove('hovering')); }
    const add = e.target.closest('[data-add]');
    if(add){ e.preventDefault(); CP.addToCart(add.getAttribute('data-add'), 1); return; }
    const wish = e.target.closest('[data-wish]');
    if(wish){ e.preventDefault(); CP.toggleWish(wish.getAttribute('data-wish')); return; }
    const inc = e.target.closest('[data-inc]'); if(inc){ const k=inc.getAttribute('data-inc'); const it=read().find(i=>i.key===k); CP.setQty(k,(it?it.qty:1)+1); return; }
    const dec = e.target.closest('[data-dec]'); if(dec){ const k=dec.getAttribute('data-dec'); const it=read().find(i=>i.key===k); CP.setQty(k,(it?it.qty:1)-1); return; }
    const rm = e.target.closest('[data-rm]'); if(rm){ CP.removeItem(rm.getAttribute('data-rm')); return; }
    if(e.target.closest('[data-open-cart]')){ e.preventDefault(); CP.openCart(); return; }
    if(e.target.closest('[data-open-nav]')){ e.preventDefault(); document.getElementById('navDrawer').classList.add('open'); document.getElementById('scrim').classList.add('open'); return; }
  });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeDrawer(); });

  /* ---------------- TWEAKS (CSS-var theming, persisted) ---------------- */
  const TW_KEY='cp_tweaks_v1';
  const TW_DEFAULT = { accent:'#CF4F12', green:'#1B4332', radius:1, font:'bricolage' };
  CP.tweaks = Object.assign({}, TW_DEFAULT);
  try { Object.assign(CP.tweaks, JSON.parse(localStorage.getItem(TW_KEY))||{}); } catch(e){}
  const FONTS = {
    bricolage: ['"Bricolage Grotesque", Georgia, serif','"Hanken Grotesk", system-ui, sans-serif'],
    fraunces:  ['"Newsreader", Georgia, serif','"Hanken Grotesk", system-ui, sans-serif'],
    grotesk:   ['"Hanken Grotesk", system-ui, sans-serif','"Hanken Grotesk", system-ui, sans-serif'],
  };
  function shade(hex, amt){ // amt -1..1 lighten/darken
    const n=parseInt(hex.slice(1),16); let r=n>>16,g=(n>>8)&255,b=n&255;
    const f=(c)=> amt>0 ? Math.round(c+(255-c)*amt) : Math.round(c*(1+amt));
    return '#'+[f(r),f(g),f(b)].map(x=>Math.max(0,Math.min(255,x)).toString(16).padStart(2,'0')).join('');
  }
  CP.applyTweaks = function(){
    const t = CP.tweaks, r = document.documentElement.style;
    r.setProperty('--accent-700', shade(t.accent,-0.22));
    r.setProperty('--accent-600', t.accent);
    r.setProperty('--accent-500', shade(t.accent,0.16));
    r.setProperty('--accent-100', shade(t.accent,0.82));
    r.setProperty('--accent-50',  shade(t.accent,0.92));
    r.setProperty('--brand-900', shade(t.green,-0.32));
    r.setProperty('--brand-800', t.green);
    r.setProperty('--brand-700', shade(t.green,0.22));
    r.setProperty('--brand-600', shade(t.green,0.42));
    r.setProperty('--brand-100', shade(t.green,0.80));
    r.setProperty('--brand-50',  shade(t.green,0.92));
    r.setProperty('--brand-200', shade(t.green,0.66));
    const sc = t.radius;
    r.setProperty('--r-sm', (5*sc)+'px'); r.setProperty('--r-md',(9*sc)+'px');
    r.setProperty('--r-lg',(14*sc)+'px'); r.setProperty('--r-xl',(20*sc)+'px');
    const f = FONTS[t.font]||FONTS.bricolage;
    r.setProperty('--font-display', f[0]); r.setProperty('--font-sans', f[1]);
  };
  CP.setTweak = function(k,v){ CP.tweaks[k]=v; localStorage.setItem(TW_KEY, JSON.stringify(CP.tweaks)); CP.applyTweaks(); };
  CP.applyTweaks();

  /* ---------------- HEADER / FOOTER builders ---------------- */
  const LOGO = `
    <a class="logo" href="index.html">
      <span class="logo-mark">${ic('drop')}</span>
      <span class="logo-text"><b>CarpPoint</b><span>sklep wędkarski</span></span>
    </a>`;

  CP.header = function(active){
    return `
    <div class="topbar"><div class="wrap">
      <div class="tb-left">
        <span class="tb-item">${ic('truck','ico')} Darmowa dostawa od 200 zł</span>
        <span class="tb-item">${ic('pin','ico')} Paczkomat InPost 24/7</span>
      </div>
      <div class="tb-right tb-left">
        <a class="tb-item" href="#">Pomoc</a>
        <a class="tb-item" href="#">Śledź zamówienie</a>
        <a class="tb-item" href="#">PL · PLN</a>
      </div>
    </div></div>
    <header class="site-header">
      <div class="wrap">
        <div class="header-main">
          <button class="icon-btn burger" data-open-nav aria-label="Menu">${ic('menu','ico')}</button>
          ${LOGO}
          <div class="search-bar">
            <span>${ic('search','ico')}</span>
            <input placeholder="Szukaj: kulki, plecionka, kołowrotek, Trinity Baits…" aria-label="Szukaj">
          </div>
          <div class="header-actions">
            <a class="icon-btn" href="account.html" aria-label="Konto">${ic('user','ico')}</a>
            <a class="icon-btn" href="wishlist.html" aria-label="Ulubione">${ic('heart','ico')}<span class="count-dot brand" data-wish-count>0</span></a>
            <button class="icon-btn" data-open-cart aria-label="Koszyk">${ic('cart','ico')}<span class="count-dot" data-cart-count>0</span></button>
          </div>
        </div>
      </div>
      <div class="nav-row"><div class="wrap"><nav class="main-nav">
        ${NAV.map(n=>navItem(n, active)).join('')}
        <span class="nav-spacer"></span>
        <a href="kontakt.html" class="nav-help">${ic('truck','ico')} Pomoc i dostawa</a>
      </nav></div></div>
    </header>`;
  };

  CP.footer = function(){
    const col = (h, links)=>`<div><h4>${h}</h4>${links.map(l=>`<a href="#">${l}</a>`).join('')}</div>`;
    return `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-about">
            ${LOGO}
            <p>Sprzęt wędkarski dla pasjonatów karpia, spinningu i feedera. Sprawdzone marki, szybka wysyłka z magazynu w Polsce.</p>
            <div class="social">
              <a href="#" aria-label="Facebook">${ic('fb','ico')}</a>
              <a href="#" aria-label="Instagram">${ic('ig','ico')}</a>
              <a href="#" aria-label="YouTube">${ic('yt','ico')}</a>
            </div>
          </div>
          ${col('Sklep',['Wędki','Kołowrotki','Przynęty','Kulki proteinowe','Promocje','Nowości'])}
          ${col('Obsługa',['Dostawa i płatność','Zwroty i reklamacje','FAQ','Kontakt','Regulamin'])}
          <div>
            <h4>Newsletter</h4>
            <p style="color:var(--brand-200);font-size:14px;margin-bottom:12px">Porady, nowości i kody rabatowe prosto na maila.</p>
            <form class="newsletter-form" onsubmit="CP.toast('Zapisano na newsletter','ok');return false">
              <input type="email" placeholder="Twój e-mail" required>
              <button class="btn btn-primary" type="submit">Zapisz</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="small">© 2025 CarpPoint.pl — Wszelkie prawa zastrzeżone.</span>
          <div class="pay-icons">
            <span class="pay-chip">Przelewy24</span><span class="pay-chip">BLIK</span>
            <span class="pay-chip">VISA</span><span class="pay-chip">Mastercard</span><span class="pay-chip">InPost</span>
          </div>
        </div>
      </div>
    </footer>`;
  };

  /* ---------------- TWEAKS PANEL ---------------- */
  CP.mountTweakPanel = function(){
    // host toolbar toggles a body class — we render an always-available floating panel
    if(document.getElementById('cpTweaks')) return;
    const swatch = (v)=>`<button class="tw-sw" data-acc="${v}" style="background:${v}"></button>`;
    const gsw = (v)=>`<button class="tw-sw" data-grn="${v}" style="background:${v}"></button>`;
    const panel = document.createElement('div');
    panel.id='cpTweaks';
    panel.innerHTML = `
      <button id="cpTweakToggle" aria-label="Dostosuj wygląd">${ic('spark','ico')}</button>
      <div id="cpTweakBody">
        <div class="tw-head"><b>Personalizacja</b><button data-tw-close>${ic('x','ico')}</button></div>
        <div class="tw-row"><label>Kolor akcji</label><div class="tw-sws">
          ${['#CF4F12','#C2351B','#B8860B','#1F7A8C','#6D597A'].map(swatch).join('')}
        </div></div>
        <div class="tw-row"><label>Zieleń marki</label><div class="tw-sws">
          ${['#1B4332','#14342B','#2A4D3A','#27496D','#3A3A2E'].map(gsw).join('')}
        </div></div>
        <div class="tw-row"><label>Zaokrąglenie</label><div class="tw-seg" data-seg="radius">
          <button data-v="0.4">Ostre</button><button data-v="1">Domyślne</button><button data-v="1.8">Miękkie</button>
        </div></div>
        <div class="tw-row"><label>Typografia</label><div class="tw-seg" data-seg="font">
          <button data-v="bricolage">Bricolage</button><button data-v="fraunces">Editorial</button><button data-v="grotesk">Czysta</button>
        </div></div>
      </div>`;
    document.body.appendChild(panel);
    if(!document.getElementById('cpTweakCSS')){
      const s=document.createElement('style'); s.id='cpTweakCSS';
      s.textContent = `
        #cpTweaks{position:fixed;right:18px;bottom:18px;z-index:150;font-family:var(--font-sans)}
        #cpTweakToggle{width:50px;height:50px;border-radius:50%;border:none;background:var(--brand-800);color:#fff;display:grid;place-items:center;box-shadow:var(--sh-pop)}
        #cpTweakToggle svg{width:22px;height:22px}
        #cpTweakBody{position:absolute;right:0;bottom:62px;width:280px;background:#fff;border:1px solid var(--ink-200);border-radius:var(--r-lg);box-shadow:var(--sh-pop);padding:16px;display:none}
        #cpTweaks.open #cpTweakBody{display:block}
        .tw-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
        .tw-head b{font-family:var(--font-display);font-size:16px;color:var(--brand-900)}
        .tw-head button{border:none;background:none;color:var(--ink-400);display:grid;place-items:center}
        .tw-head svg{width:18px;height:18px}
        .tw-row{margin-bottom:14px}
        .tw-row>label{display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-500);margin-bottom:8px}
        .tw-sws{display:flex;gap:8px}
        .tw-sw{width:30px;height:30px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px var(--ink-200);cursor:pointer}
        .tw-sw.sel{box-shadow:0 0 0 2px var(--brand-700)}
        .tw-seg{display:flex;border:1px solid var(--ink-200);border-radius:var(--r-md);overflow:hidden}
        .tw-seg button{flex:1;border:none;background:#fff;padding:8px 4px;font-size:12.5px;font-weight:600;color:var(--ink-600)}
        .tw-seg button.sel{background:var(--brand-800);color:#fff}
        .tw-seg button+button{border-left:1px solid var(--ink-200)}
      `;
      document.head.appendChild(s);
    }
    const syncSel=()=>{
      panel.querySelectorAll('[data-acc]').forEach(b=>b.classList.toggle('sel', b.dataset.acc===CP.tweaks.accent));
      panel.querySelectorAll('[data-grn]').forEach(b=>b.classList.toggle('sel', b.dataset.grn===CP.tweaks.green));
      panel.querySelectorAll('[data-seg="radius"] button').forEach(b=>b.classList.toggle('sel', +b.dataset.v===CP.tweaks.radius));
      panel.querySelectorAll('[data-seg="font"] button').forEach(b=>b.classList.toggle('sel', b.dataset.v===CP.tweaks.font));
    };
    syncSel();
    panel.querySelector('#cpTweakToggle').addEventListener('click', ()=>panel.classList.toggle('open'));
    panel.querySelector('[data-tw-close]').addEventListener('click', ()=>panel.classList.remove('open'));
    panel.addEventListener('click', e=>{
      const a=e.target.closest('[data-acc]'); if(a){ CP.setTweak('accent',a.dataset.acc); syncSel(); return; }
      const g=e.target.closest('[data-grn]'); if(g){ CP.setTweak('green',g.dataset.grn); syncSel(); return; }
      const rs=e.target.closest('[data-seg="radius"] button'); if(rs){ CP.setTweak('radius',+rs.dataset.v); syncSel(); return; }
      const fs=e.target.closest('[data-seg="font"] button'); if(fs){ CP.setTweak('font',fs.dataset.v); syncSel(); return; }
    });
  };

  /* ---------------- one-call page init ---------------- */
  CP.init = function(active){
    const h=document.getElementById('site-header'); if(h) h.innerHTML = CP.header(active);
    const f=document.getElementById('site-footer'); if(f) f.innerHTML = CP.footer();
    CP.mountChrome(active);
    CP.mountTweakPanel();
  };

  /* expose */
  CP.updateCount = updateCount;
  CP.closeDrawer = closeDrawer;
})();
