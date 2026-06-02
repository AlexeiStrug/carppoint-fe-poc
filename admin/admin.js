/* CarpPoint Admin — shell, icons, components */
(function(){
  "use strict";
  const AD = window.AD = window.AD || {};

  const I = {
    dash:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    cart:'<circle cx="9" cy="21" r="1.4"/><circle cx="18" cy="21" r="1.4"/><path d="M2.5 3h2.2l2.3 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21.5 7H6.3"/>',
    users:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5.4M21 20a6 6 0 0 0-4-5.6"/>',
    star:'<path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7z"/>',
    tag:'<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="7.5" r="1.4"/>',
    layers:'<path d="M12 3 3 8l9 5 9-5z"/><path d="m3 13 9 5 9-5M3 18l9 5 9-5"/>',
    history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 4v4h4"/><path d="M12 8v4l3 2"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H7a1.6 1.6 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 17 2.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V7a1.6 1.6 0 0 0 1.5 1H23a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
    shield:'<path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    download:'<path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
    filter:'<path d="M3 5h18M6 12h12M10 19h4"/>',
    edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
    eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    check:'<path d="m20 6-11 11-5-5"/>',
    chevron:'<path d="m6 9 6 6 6-6"/>',
    chleft:'<path d="m15 18-6-6 6-6"/>',
    chright:'<path d="m9 6 6 6-6 6"/>',
    up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
    down:'<path d="M12 5v14M5 12l7 7 7-7"/>',
    arrowup:'<path d="m6 15 6-6 6 6"/>',
    arrowdown:'<path d="m6 9 6 6 6-6"/>',
    coins:'<ellipse cx="9" cy="6" rx="6" ry="3"/><path d="M3 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6"/><path d="M15 12c0 1.7 2.7 3 6 3M9 15v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-6"/>',
    truck:'<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>',
    alert:'<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    drop:'<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z"/>',
    logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
    reply:'<path d="M9 17V7l-6 5 6 5z" fill="none"/><path d="M9 12h7a4 4 0 0 1 4 4v3"/>',
    copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    ban:'<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
    external:'<path d="M15 3h6v6M21 3l-9 9"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
    dots:'<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
    cal:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  };
  AD.icon = function(n, cls){
    return '<svg'+(cls?' class="'+cls+'"':'')+' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(I[n]||'')+'</svg>';
  };
  const ic = AD.icon;
  AD.esc = s => String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  AD.zl = v => new Intl.NumberFormat('pl-PL',{minimumFractionDigits:2,maximumFractionDigits:2}).format(v).replace(/\u00A0/g,' ')+' zł';
  AD.num = v => new Intl.NumberFormat('pl-PL').format(v).replace(/\u00A0/g,' ');
  AD.initials = n => n.split(' ').map(x=>x[0]).slice(0,2).join('');

  /* ---- nav model ---- */
  const NAV = [
    { group:"Główne", items:[
      ["dash","Pulpit","index.html","dash"],
      ["box","Produkty","products.html","products"],
      ["cart","Zamówienia","orders.html","orders"],
      ["users","Klienci","customers.html","customers"],
    ]},
    { group:"Sklep", items:[
      ["star","Opinie","reviews.html","reviews"],
      ["tag","Kupony i promocje","coupons.html","coupons"],
      ["layers","Kategorie","categories.html","categories"],
    ]},
    { group:"System", items:[
      ["history","Dziennik zdarzeń","audit.html","audit"],
      ["settings","Ustawienia","settings.html","settings"],
    ]},
  ];
  // dynamic badges
  function navBadge(key){
    if(key==="orders"){ const n=(AD.orders||[]).filter(o=>["PENDING","PAID","PROCESSING"].includes(o.status)).length; return n||null; }
    if(key==="reviews"){ const n=(AD.reviews||[]).filter(r=>r.status==="PENDING").length; return n||null; }
    return null;
  }

  AD.sidebar = function(active){
    const groups = NAV.map(g=>`
      <div class="sb-group">
        <div class="sb-group-label">${g.group}</div>
        ${g.items.map(([i,t,h,k])=>{
          const b=navBadge(k);
          return `<a class="sb-link ${active===k?'active':''}" href="${h}">${ic(i)}<span>${t}</span>${b?`<span class="badge-n">${b}</span>`:''}</a>`;
        }).join('')}
      </div>`).join('');
    return `
      <div class="sb-logo">
        <span class="sb-mark">${ic('drop')}</span>
        <span><b>CarpPoint</b><span>panel admina</span></span>
      </div>
      <div class="sb-scroll">${groups}</div>
      <div class="sb-foot">
        <a class="sb-user" href="#" title="Konto administratora">
          <span class="sb-av">JK</span>
          <span style="flex:1;min-width:0"><b>Jan Kowalski</b><span>Super Admin</span></span>
          ${ic('logout')}
        </a>
      </div>`;
  };

  AD.topbar = function(title){
    return `
      <button class="tb-btn sb-toggle" data-sb-toggle aria-label="Menu">${ic('menu')}</button>
      <div class="tb-search">${ic('search')}<input placeholder="Szukaj zamówień, produktów, klientów…"></div>
      <div class="tb-right">
        <a class="tb-view" href="../index.html" target="_blank">${ic('external')}<span>Zobacz sklep</span></a>
        <button class="tb-btn" aria-label="Powiadomienia">${ic('bell')}<span class="dot"></span></button>
        <button class="tb-btn" aria-label="Konto"><span class="sb-av" style="width:30px;height:30px;font-size:12px">JK</span></button>
      </div>`;
  };

  /* ---- status pill ---- */
  AD.statusPill = function(st){
    const m = AD.statusMap[st]; if(!m) return st;
    return `<span class="pill pill-${m[1]}">${m[0]}</span>`;
  };

  /* ---- trend chip ---- */
  AD.trend = function(cur, prev){
    if(prev==null||prev===0) return '';
    const pct = ((cur-prev)/prev*100);
    const dir = pct>0.5?'up':pct<-0.5?'down':'flat';
    const ico = dir==='up'?'arrowup':dir==='down'?'arrowdown':'';
    const sign = pct>0?'+':'';
    return `<span class="trend ${dir}">${ico?ic(ico):''}${sign}${pct.toFixed(1)}%</span>`;
  };

  /* ---- toast ---- */
  let tw;
  AD.toast = function(msg, kind){
    if(!tw){ tw=document.createElement('div'); tw.className='toast-wrap'; document.body.appendChild(tw); }
    const t=document.createElement('div'); t.className='toast '+(kind||'');
    t.innerHTML = ic(kind==='ok'?'check':kind==='bad'?'alert':'bell')+'<span>'+msg+'</span>';
    tw.appendChild(t);
    requestAnimationFrame(()=>t.classList.add('show'));
    setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),320); }, 2600);
  };

  /* ---- drawer helpers ---- */
  AD.openDrawer = function(html, opts){
    opts = opts||{};
    let scrim=document.getElementById('adScrim');
    if(!scrim){ scrim=document.createElement('div'); scrim.id='adScrim'; scrim.className='drawer-scrim'; document.body.appendChild(scrim); scrim.addEventListener('click', AD.closeDrawer); }
    let d=document.getElementById('adDrawer');
    if(!d){ d=document.createElement('aside'); d.id='adDrawer'; d.className='drawer'; document.body.appendChild(d); }
    d.className = 'drawer'+(opts.wide?' wide':'');
    d.innerHTML = html;
    requestAnimationFrame(()=>{ d.classList.add('open'); scrim.classList.add('open'); });
    d.querySelectorAll('[data-close-drawer]').forEach(b=>b.addEventListener('click', AD.closeDrawer));
  };
  AD.closeDrawer = function(){
    const d=document.getElementById('adDrawer'), s=document.getElementById('adScrim');
    if(d) d.classList.remove('open'); if(s) s.classList.remove('open');
  };
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') AD.closeDrawer(); });

  /* ---- sidebar toggle (mobile) ---- */
  document.addEventListener('click', e=>{
    if(e.target.closest('[data-sb-toggle]')){ const sb=document.querySelector('.sidebar'); const sc=document.getElementById('navScrim'); sb.classList.toggle('open'); if(sc) sc.classList.toggle('open'); }
    if(e.target.closest('#navScrim')){ document.querySelector('.sidebar').classList.remove('open'); document.getElementById('navScrim').classList.remove('open'); }
  });

  /* ---- mount shell ---- */
  AD.mount = function(active, title){
    const sb=document.querySelector('.sidebar'); if(sb) sb.innerHTML = AD.sidebar(active);
    const tb=document.querySelector('.topbar'); if(tb) tb.innerHTML = AD.topbar(title);
    if(!document.getElementById('navScrim')){ const s=document.createElement('div'); s.id='navScrim'; s.className='scrim'; document.body.appendChild(s); }
    // shared live theme playground
    if(!document.getElementById('adThemeScript')){
      const s=document.createElement('script'); s.id='adThemeScript'; s.src='../theme-panel.js';
      document.body.appendChild(s);
    }
  };

  /* ---- simple bar chart ---- */
  AD.barChart = function(values, labels, opts){
    opts=opts||{};
    const max=Math.max(...values)*1.1;
    return `<div class="bars" style="--chart-h:${opts.h||190}px">${values.map((v,i)=>`
      <div class="bar-col">
        <div class="bar-track"><div class="bar ${opts.alt&&i===values.length-1?'':''}" style="height:${(v/max*100).toFixed(1)}%" title="${AD.zl(v)}"></div></div>
        <div class="bx">${labels[i]}</div>
      </div>`).join('')}</div>`;
  };

  /* ---- sparkline ---- */
  AD.sparkline = function(values, color){
    color=color||'var(--brand-600)';
    const w=240,h=54,max=Math.max(...values),min=Math.min(...values),rng=(max-min)||1;
    const pts=values.map((v,i)=>[i/(values.length-1)*w, h-4-((v-min)/rng)*(h-10)]);
    const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
    const area=d+` L ${w} ${h} L 0 ${h} Z`;
    const id='sg'+Math.random().toString(36).slice(2,7);
    return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".22"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
      <path d="${area}" fill="url(#${id})"/><path d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  };

  AD.stockColor = (s,low)=> s===0?'var(--bad-600)': s<=low?'var(--warn-700)':'var(--ok-600)';
})();
