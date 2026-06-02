/* ============================================================
   CarpPoint — Shared Theme Playground
   Works in BOTH the storefront (CP) and admin (AD) because they
   share the same CSS-variable token names. Self-mounts a floating
   panel; persists per-app to localStorage.
   ============================================================ */
(function(){
  "use strict";
  if (window.__cpTheme) return;            // guard against double-load
  window.__cpTheme = true;

  const isAdmin = !!(window.AD || document.querySelector('.admin'));
  const NS = isAdmin ? 'cp_admin_theme_v2' : 'cp_theme_v2';

  /* ---- model ---------------------------------------------------------- */
  const DEFAULT = { preset:'forest', green:'#1B4332', accent:'#CF4F12', font:'bricolage', radius:1, dispFont:'Bricolage Grotesque', bodyFont:'Hanken Grotesk' };

  const PRESETS = {
    forest:   { label:'Las',    green:'#1B4332', accent:'#CF4F12', font:'bricolage', radius:1   },
    midnight: { label:'Noc',    green:'#15302A', accent:'#2F74D0', font:'grotesk',   radius:1   },
    coral:    { label:'Koral',  green:'#235C4B', accent:'#E14B3B', font:'editorial', radius:1.4 },
    klasyk:   { label:'Klasyk', green:'#1F6B3B', accent:'#E65100', font:'clean',     radius:0.6 },
    piasek:   { label:'Piasek', green:'#3A5A40', accent:'#BC6C25', font:'modern',    radius:1.2 },
    grafit:   { label:'Grafit', green:'#27425A', accent:'#E0792B', font:'grotesk',   radius:1   },
  };
  const GREENS  = ['#1B4332','#15302A','#235C4B','#1F6B3B','#3A5A40','#27425A','#2C4A3E','#3E3B2E'];
  const ACCENTS = ['#CF4F12','#E65100','#E14B3B','#2F74D0','#BC6C25','#6D597A','#1F8A5B','#C2351B'];
  const FONTS = {
    bricolage: { label:'Bricolage', disp:"'Bricolage Grotesque', Georgia, serif", body:"'Hanken Grotesk', system-ui, sans-serif", dispName:'Bricolage Grotesque', bodyName:'Hanken Grotesk' },
    editorial: { label:'Editorial', disp:"'Newsreader', Georgia, serif",          body:"'Hanken Grotesk', system-ui, sans-serif", dispName:'Newsreader', bodyName:'Hanken Grotesk' },
    grotesk:   { label:'Grotesk',   disp:"'Space Grotesk', sans-serif",            body:"'Inter', system-ui, sans-serif",         dispName:'Space Grotesk', bodyName:'Inter' },
    clean:     { label:'Inter',     disp:"'Inter', system-ui, sans-serif",         body:"'Inter', system-ui, sans-serif",          dispName:'Inter', bodyName:'Inter' },
    modern:    { label:'Sora',      disp:"'Sora', sans-serif",                     body:"'Sora', sans-serif",                      dispName:'Sora', bodyName:'Sora' },
  };

  /* Big curated Google-Fonts list for the headings/body dropdowns.
     All support weights 400/600/700 so on-demand loading never 400s. */
  const FONT_LIST = [
    // sans
    {name:'Hanken Grotesk',type:'sans'},{name:'Inter',type:'sans'},{name:'Space Grotesk',type:'sans'},
    {name:'Sora',type:'sans'},{name:'Manrope',type:'sans'},{name:'Plus Jakarta Sans',type:'sans'},
    {name:'DM Sans',type:'sans'},{name:'Work Sans',type:'sans'},{name:'Outfit',type:'sans'},
    {name:'Figtree',type:'sans'},{name:'Onest',type:'sans'},{name:'Albert Sans',type:'sans'},
    {name:'Archivo',type:'sans'},{name:'Be Vietnam Pro',type:'sans'},{name:'Montserrat',type:'sans'},
    {name:'Poppins',type:'sans'},{name:'Rubik',type:'sans'},{name:'Mulish',type:'sans'},
    {name:'Epilogue',type:'sans'},{name:'Schibsted Grotesk',type:'sans'},{name:'Familjen Grotesk',type:'sans'},
    // serif
    {name:'Newsreader',type:'serif'},{name:'Fraunces',type:'serif'},{name:'Playfair Display',type:'serif'},
    {name:'Lora',type:'serif'},{name:'Spectral',type:'serif'},{name:'Source Serif 4',type:'serif'},
    {name:'Bitter',type:'serif'},{name:'Crimson Pro',type:'serif'},
    // display
    {name:'Bricolage Grotesque',type:'display'},{name:'Syne',type:'display'},{name:'Unbounded',type:'display'},
  ];
  function famType(name){ const e=FONT_LIST.find(f=>f.name.toLowerCase()===String(name||'').toLowerCase()); return e?e.type:'sans'; }
  function cssFamily(name){ const t=famType(name); const fb = t==='serif'?'Georgia, serif':'system-ui, sans-serif'; return "'"+name+"', "+fb; }
  function loadFont(name){
    if(!name) return;
    const id='ctf-'+String(name).toLowerCase().replace(/[^a-z0-9]+/g,'-');
    if(document.getElementById(id)) return;
    const l=document.createElement('link'); l.id=id; l.rel='stylesheet';
    l.href='https://fonts.googleapis.com/css2?family='+encodeURIComponent(name).replace(/%20/g,'+')+':wght@400;600;700&display=swap';
    document.head.appendChild(l);
  }
  function fontOptions(){
    const groups={sans:'Bezszeryfowe',serif:'Szeryfowe',display:'Ozdobne'};
    return Object.keys(groups).map(t=>'<optgroup label="'+groups[t]+'">'+FONT_LIST.filter(f=>f.type===t).map(f=>'<option value="'+f.name+'">'+f.name+'</option>').join('')+'</optgroup>').join('');
  }
  function ensureOption(sel, name){
    if(!sel||!name) return;
    if(![...sel.options].some(o=>o.value===name)){ const o=document.createElement('option'); o.value=name; o.textContent=name+' (własny)'; sel.appendChild(o); }
  }

  /* ---- load the extra font families the pairings need ----------------- */
  if(!document.getElementById('ctFonts')){
    const l=document.createElement('link'); l.id='ctFonts'; l.rel='stylesheet';
    l.href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400..700&display=swap';
    document.head.appendChild(l);
  }

  /* ---- color helpers -------------------------------------------------- */
  function shade(hex, amt){
    hex = (hex||'#000').replace('#','');
    if(hex.length===3) hex = hex.split('').map(c=>c+c).join('');
    const n=parseInt(hex,16); let r=n>>16, g=(n>>8)&255, b=n&255;
    const f=c=> amt>0 ? Math.round(c+(255-c)*amt) : Math.round(c*(1+amt));
    return '#'+[f(r),f(g),f(b)].map(x=>Math.max(0,Math.min(255,x)).toString(16).padStart(2,'0')).join('');
  }

  function applyTheme(t){
    const r=document.documentElement.style;
    // brand ramp from a single green
    r.setProperty('--brand-900', shade(t.green,-0.34));
    r.setProperty('--brand-800', t.green);
    r.setProperty('--brand-700', shade(t.green,0.20));
    r.setProperty('--brand-600', shade(t.green,0.40));
    r.setProperty('--brand-500', shade(t.green,0.52));
    r.setProperty('--brand-200', shade(t.green,0.66));
    r.setProperty('--brand-100', shade(t.green,0.80));
    r.setProperty('--brand-50',  shade(t.green,0.92));
    // accent ramp
    r.setProperty('--accent-700', shade(t.accent,-0.22));
    r.setProperty('--accent-600', t.accent);
    r.setProperty('--accent-500', shade(t.accent,0.16));
    r.setProperty('--accent-100', shade(t.accent,0.82));
    r.setProperty('--accent-50',  shade(t.accent,0.92));
    // radius scale
    const s=t.radius;
    r.setProperty('--r-sm',(5*s).toFixed(1)+'px');
    r.setProperty('--r-md',(8.5*s).toFixed(1)+'px');
    r.setProperty('--r-lg',(13*s).toFixed(1)+'px');
    r.setProperty('--r-xl',(18*s).toFixed(1)+'px');
    // fonts
    if(t.font==='custom'){
      loadFont(t.dispFont); loadFont(t.bodyFont);
      r.setProperty('--font-display', cssFamily(t.dispFont));
      r.setProperty('--font-sans', cssFamily(t.bodyFont));
    } else {
      const f=FONTS[t.font]||FONTS.bricolage;
      r.setProperty('--font-display', f.disp);
      r.setProperty('--font-sans', f.body);
    }
  }

  /* ---- state ---------------------------------------------------------- */
  let theme = Object.assign({}, DEFAULT);
  try { Object.assign(theme, JSON.parse(localStorage.getItem(NS))||{}); } catch(e){}
  applyTheme(theme);                          // apply ASAP (before paint of panel)

  function save(){ try { localStorage.setItem(NS, JSON.stringify(theme)); } catch(e){} }
  function set(patch){ Object.assign(theme, patch); save(); applyTheme(theme); syncUI(); }

  /* ---- icons ---------------------------------------------------------- */
  const paletteIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.3"/><circle cx="17.5" cy="10.5" r="1.3"/><circle cx="8.5" cy="7.5" r="1.3"/><circle cx="6.5" cy="12.5" r="1.3"/><path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.8 1.8-1.8H17a5 5 0 0 0 5-5c0-4.9-4.5-8.9-10-8.9Z"/></svg>';
  const xIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';

  /* ---- styles --------------------------------------------------------- */
  if(!document.getElementById('ctStyle')){
    const st=document.createElement('style'); st.id='ctStyle';
    st.textContent = `
    #cpThemeFab{position:fixed;left:18px;bottom:18px;z-index:160;width:48px;height:48px;border-radius:50%;
      border:none;background:var(--brand-800,#1B4332);color:#fff;display:grid;place-items:center;
      box-shadow:0 10px 28px -8px rgba(16,32,24,.45);transition:transform .15s ease, background .2s;}
    #cpThemeFab:hover{transform:scale(1.06)}
    #cpThemeFab svg{width:23px;height:23px}
    #cpThemePanel{position:fixed;left:18px;bottom:78px;z-index:160;width:min(312px,92vw);
      background:var(--paper,#fff);border:1px solid var(--ink-200,#e2e6ea);border-radius:14px;
      box-shadow:0 24px 60px -18px rgba(16,32,24,.4);overflow:hidden;
      font-family:var(--font-sans,system-ui);color:var(--ink-900,#15181c);
      transform:translateY(8px) scale(.98);opacity:0;visibility:hidden;transform-origin:bottom left;
      transition:opacity .18s ease, transform .18s ease, visibility .18s;}
    #cpThemePanel.open{opacity:1;visibility:visible;transform:none}
    .ct-head{display:flex;align-items:center;gap:10px;padding:15px 16px;border-bottom:1px solid var(--ink-150,#ebeef1)}
    .ct-head b{font-family:var(--font-display,serif);font-size:16px;color:var(--brand-900,#11261c);line-height:1}
    .ct-head .ct-sub{font-size:11.5px;color:var(--ink-500,#76808b)}
    .ct-head .ct-x{margin-left:auto;width:28px;height:28px;border:none;background:none;color:var(--ink-400,#9aa3ad);display:grid;place-items:center;border-radius:7px}
    .ct-head .ct-x:hover{background:var(--ink-100,#f3f5f7);color:var(--ink-800)}
    .ct-head .ct-x svg{width:16px;height:16px}
    .ct-body{padding:14px 16px;max-height:min(64vh,520px);overflow-y:auto}
    .ct-sec{margin-bottom:16px}
    .ct-sec>label{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.07em;
      text-transform:uppercase;color:var(--ink-500,#76808b);margin-bottom:9px}
    .ct-hex{margin-left:auto;font-family:var(--font-mono,monospace);font-size:10.5px;color:var(--ink-400);letter-spacing:0;text-transform:none}
    .ct-presets{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px}
    .ct-preset{display:flex;flex-direction:column;align-items:center;gap:6px;padding:9px 4px;border:1.5px solid var(--ink-200,#e2e6ea);
      border-radius:9px;background:var(--paper,#fff);cursor:pointer;transition:.14s}
    .ct-preset:hover{border-color:var(--brand-500)}
    .ct-preset.sel{border-color:var(--brand-700);background:var(--brand-50)}
    .ct-preset .dots{display:flex;gap:-2px}
    .ct-preset .dots i{width:14px;height:14px;border-radius:50%;border:2px solid var(--paper,#fff);display:block}
    .ct-preset .dots i+i{margin-left:-5px}
    .ct-preset span{font-size:11px;font-weight:600;color:var(--ink-700)}
    .ct-sw{display:flex;flex-wrap:wrap;gap:7px}
    .ct-sw .sw{width:28px;height:28px;border-radius:50%;border:2px solid var(--paper,#fff);
      box-shadow:0 0 0 1px var(--ink-200,#e2e6ea);cursor:pointer;transition:transform .12s}
    .ct-sw .sw:hover{transform:scale(1.12)}
    .ct-sw .sw.sel{box-shadow:0 0 0 2px var(--brand-700)}
    .ct-pick{position:relative;width:28px;height:28px;border-radius:50%;cursor:pointer;overflow:hidden;
      box-shadow:0 0 0 1px var(--ink-200,#e2e6ea);display:grid;place-items:center;
      background:conic-gradient(from 90deg,#e14b3b,#e0792b,#1f8a5b,#2f74d0,#6d597a,#e14b3b)}
    .ct-pick::after{content:"+";color:#fff;font-weight:700;font-size:14px;text-shadow:0 1px 2px rgba(0,0,0,.4)}
    .ct-pick input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
    .ct-fonts{display:flex;flex-direction:column;gap:6px}
    .ct-font{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 12px;
      border:1.5px solid var(--ink-200,#e2e6ea);border-radius:9px;background:var(--paper,#fff);cursor:pointer;transition:.14s}
    .ct-font:hover{border-color:var(--brand-500)}
    .ct-font.sel{border-color:var(--brand-700);background:var(--brand-50)}
    .ct-font .nm{font-size:16px;color:var(--ink-900);line-height:1}
    .ct-font .tag{font-size:10.5px;font-weight:700;color:var(--ink-400);font-family:var(--font-mono,monospace)}
    .ct-fontsel{margin-top:10px;padding-top:12px;border-top:1px dashed var(--ink-200,#e2e6ea)}
    .ct-fsrow{display:flex;align-items:center;gap:8px;margin-bottom:8px}
    .ct-fsrow>span{font-size:11.5px;font-weight:600;color:var(--ink-600);width:62px;flex:none}
    .ct-select{flex:1;min-width:0;height:34px;border:1px solid var(--ink-300,#c7cdd3);border-radius:8px;
      padding:0 26px 0 10px;font-size:12.5px;font-family:inherit;color:var(--ink-900);background:var(--paper,#fff)
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='%2376808b' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 9px center;appearance:none;cursor:pointer}
    .ct-select:focus{outline:none;border-color:var(--brand-600)}
    .ct-custom{margin-top:2px}
    .ct-custom input{flex:1;min-width:0;height:34px;border:1px solid var(--ink-300,#c7cdd3);border-radius:8px;padding:0 10px;font-size:12.5px;font-family:inherit;color:var(--ink-900);background:var(--paper,#fff)}
    .ct-custom input:focus{outline:none;border-color:var(--brand-600)}
    .ct-custom button{flex:none;height:34px;padding:0 14px;border:none;border-radius:8px;background:var(--brand-800,#1B4332);color:#fff;font:inherit;font-size:12.5px;font-weight:600;cursor:pointer}
    .ct-custom button:hover{background:var(--brand-700)}
    .ct-fhint{font-size:10.5px;color:var(--ink-400);margin-top:2px;line-height:1.4}
    .ct-range{width:100%;-webkit-appearance:none;appearance:none;height:5px;border-radius:5px;
      background:var(--ink-200,#e2e6ea);outline:none}
    .ct-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;
      background:#fff;border:2px solid var(--brand-700);cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.2)}
    .ct-range::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid var(--brand-700);cursor:pointer}
    .ct-foot{display:flex;align-items:center;gap:10px;padding:12px 16px;border-top:1px solid var(--ink-150,#ebeef1);background:var(--ink-50,#f8fafb)}
    .ct-reset{border:1px solid var(--ink-300,#c7cdd3);background:var(--paper,#fff);color:var(--ink-700);
      font:inherit;font-size:12.5px;font-weight:600;padding:7px 12px;border-radius:8px;cursor:pointer}
    .ct-reset:hover{border-color:var(--brand-600);color:var(--brand-700)}
    .ct-note{font-size:11px;color:var(--ink-400)}
    @media print{#cpThemeFab,#cpThemePanel{display:none!important}}
    `;
    document.head.appendChild(st);
  }

  /* ---- build UI ------------------------------------------------------- */
  let panel, fab;
  function mount(){
    if(document.getElementById('cpThemeFab')) return;

    fab=document.createElement('button');
    fab.id='cpThemeFab'; fab.setAttribute('aria-label','Personalizacja motywu'); fab.title='Motyw';
    fab.innerHTML=paletteIcon;
    document.body.appendChild(fab);

    panel=document.createElement('div');
    panel.id='cpThemePanel'; panel.setAttribute('role','dialog'); panel.setAttribute('aria-label','Personalizacja motywu');
    panel.innerHTML = `
      <div class="ct-head">
        <div><b>Motyw</b><div class="ct-sub">${isAdmin?'Panel administracyjny':'Sklep'} · eksperymentuj na żywo</div></div>
        <button class="ct-x" aria-label="Zamknij">${xIcon}</button>
      </div>
      <div class="ct-body">
        <div class="ct-sec">
          <label>Gotowe motywy</label>
          <div class="ct-presets">${Object.entries(PRESETS).map(([k,p])=>`
            <button class="ct-preset" data-preset="${k}">
              <span class="dots"><i style="background:${p.green}"></i><i style="background:${p.accent}"></i></span>
              <span>${p.label}</span>
            </button>`).join('')}</div>
        </div>
        <div class="ct-sec">
          <label>Kolor marki <span class="ct-hex" id="ctGreenHex"></span></label>
          <div class="ct-sw" id="ctGreens">
            ${GREENS.map(c=>`<button class="sw" data-green="${c}" style="background:${c}"></button>`).join('')}
            <label class="ct-pick" title="Wybierz dowolny kolor"><input type="color" id="ctGreenPick"></label>
          </div>
        </div>
        <div class="ct-sec">
          <label>Kolor akcentu <span class="ct-hex" id="ctAccentHex"></span></label>
          <div class="ct-sw" id="ctAccents">
            ${ACCENTS.map(c=>`<button class="sw" data-accent="${c}" style="background:${c}"></button>`).join('')}
            <label class="ct-pick" title="Wybierz dowolny kolor"><input type="color" id="ctAccentPick"></label>
          </div>
        </div>
        <div class="ct-sec">
          <label>Typografia</label>
          <div class="ct-fonts" id="ctFontList">
            ${Object.entries(FONTS).map(([k,f])=>`
              <button class="ct-font" data-font="${k}">
                <span class="nm" style="font-family:${f.disp}">${f.label}</span>
                <span class="tag">${k==='clean'?'spec':k}</span>
              </button>`).join('')}
          </div>
          <div class="ct-fontsel">
            <div class="ct-fsrow"><span>Nagłówki</span><select class="ct-select" id="ctDispSel">${fontOptions()}</select></div>
            <div class="ct-fsrow"><span>Tekst</span><select class="ct-select" id="ctBodySel">${fontOptions()}</select></div>
            <div class="ct-fsrow ct-custom"><input id="ctCustomFont" placeholder="Dowolny font z Google Fonts…"><button id="ctCustomGo">Użyj</button></div>
            <p class="ct-fhint">Wpisz nazwę z fonts.google.com — załaduje się od ręki i trafi w nagłówki.</p>
          </div>
        </div>
        <div class="ct-sec" style="margin-bottom:4px">
          <label>Zaokrąglenie <span class="ct-hex" id="ctRadiusVal"></span></label>
          <input type="range" class="ct-range" id="ctRadius" min="0" max="2" step="0.1">
        </div>
      </div>
      <div class="ct-foot">
        <button class="ct-reset" id="ctReset">Resetuj</button>
        <span class="ct-note">Zapisywane automatycznie</span>
      </div>`;
    document.body.appendChild(panel);

    fab.addEventListener('click', e=>{ e.stopPropagation(); panel.classList.toggle('open'); });
    panel.querySelector('.ct-x').addEventListener('click', ()=>panel.classList.remove('open'));
    document.addEventListener('click', e=>{ if(panel.classList.contains('open') && !panel.contains(e.target) && e.target!==fab && !fab.contains(e.target)) panel.classList.remove('open'); });

    panel.querySelector('.ct-presets').addEventListener('click', e=>{ const b=e.target.closest('[data-preset]'); if(!b) return; const p=PRESETS[b.dataset.preset]; set({preset:b.dataset.preset, green:p.green, accent:p.accent, font:p.font, radius:p.radius}); });
    panel.querySelector('#ctGreens').addEventListener('click', e=>{ const b=e.target.closest('[data-green]'); if(b) set({green:b.dataset.green, preset:'custom'}); });
    panel.querySelector('#ctAccents').addEventListener('click', e=>{ const b=e.target.closest('[data-accent]'); if(b) set({accent:b.dataset.accent, preset:'custom'}); });
    panel.querySelector('#ctGreenPick').addEventListener('input', e=>set({green:e.target.value, preset:'custom'}));
    panel.querySelector('#ctAccentPick').addEventListener('input', e=>set({accent:e.target.value, preset:'custom'}));
    panel.querySelector('#ctFontList').addEventListener('click', e=>{ const b=e.target.closest('[data-font]'); if(b) set({font:b.dataset.font, preset:'custom'}); });
    const dispSel=panel.querySelector('#ctDispSel'), bodySel=panel.querySelector('#ctBodySel');
    dispSel.addEventListener('change', ()=>set({font:'custom', preset:'custom', dispFont:dispSel.value, bodyFont:bodySel.value}));
    bodySel.addEventListener('change', ()=>set({font:'custom', preset:'custom', dispFont:dispSel.value, bodyFont:bodySel.value}));
    const custIn=panel.querySelector('#ctCustomFont');
    function applyCustom(){ const v=custIn.value.trim(); if(!v) return; ensureOption(dispSel,v); set({font:'custom', preset:'custom', dispFont:v, bodyFont:bodySel.value}); custIn.value=''; }
    panel.querySelector('#ctCustomGo').addEventListener('click', applyCustom);
    custIn.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); applyCustom(); } });
    panel.querySelector('#ctRadius').addEventListener('input', e=>set({radius:+e.target.value, preset:'custom'}));
    panel.querySelector('#ctReset').addEventListener('click', ()=>set(Object.assign({},DEFAULT)));

    syncUI();
  }

  function syncUI(){
    if(!panel) return;
    panel.querySelectorAll('[data-preset]').forEach(b=>b.classList.toggle('sel', b.dataset.preset===theme.preset));
    panel.querySelectorAll('[data-green]').forEach(b=>b.classList.toggle('sel', b.dataset.green.toLowerCase()===theme.green.toLowerCase()));
    panel.querySelectorAll('[data-accent]').forEach(b=>b.classList.toggle('sel', b.dataset.accent.toLowerCase()===theme.accent.toLowerCase()));
    panel.querySelectorAll('[data-font]').forEach(b=>b.classList.toggle('sel', theme.font!=='custom' && b.dataset.font===theme.font));
    const dispSel=panel.querySelector('#ctDispSel'), bodySel=panel.querySelector('#ctBodySel');
    if(dispSel && bodySel){
      const eff = theme.font==='custom' ? {d:theme.dispFont, b:theme.bodyFont} : {d:(FONTS[theme.font]||FONTS.bricolage).dispName, b:(FONTS[theme.font]||FONTS.bricolage).bodyName};
      ensureOption(dispSel, eff.d); ensureOption(bodySel, eff.b);
      dispSel.value = eff.d; bodySel.value = eff.b;
    }
    const gh=panel.querySelector('#ctGreenHex'); if(gh) gh.textContent=theme.green.toUpperCase();
    const ah=panel.querySelector('#ctAccentHex'); if(ah) ah.textContent=theme.accent.toUpperCase();
    const gp=panel.querySelector('#ctGreenPick'); if(gp) gp.value=theme.green;
    const ap=panel.querySelector('#ctAccentPick'); if(ap) ap.value=theme.accent;
    const rr=panel.querySelector('#ctRadius'); if(rr) rr.value=theme.radius;
    const rv=panel.querySelector('#ctRadiusVal'); if(rv) rv.textContent=theme.radius===0?'Ostre':theme.radius>=1.6?'Bardzo miękkie':theme.radius>=1.1?'Miękkie':theme.radius<=0.6?'Subtelne':'Domyślne';
  }

  if(document.readyState!=='loading') mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
