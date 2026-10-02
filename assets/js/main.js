/* =========================================================
   Bili Mitsubishi — interaksi halaman
   Data model ada di array MODELS di bawah. Harga dalam Rupiah;
   isi null jika ingin menampilkan "Hubungi Sales".
   ========================================================= */
(() => {
  'use strict';

  const C = Object.assign({
    salesName: 'Bili', salesTitle: 'Sales Consultant', dealer: 'Bosowa Berlian Motor',
    whatsapp: '', phoneDisplay: '', address: '', mapsQuery: 'Bosowa Berlian Motor', hours: ''
  }, window.SITE_CONFIG || {});

  /* ---------- DATA MODEL ----------
     Harga = estimasi "harga mulai" OTR. Perbarui sesuai pricelist resmi terbaru. */
  const MODELS = [
    {
      id: 'xpander', brand: 'Mitsubishi', name: 'Xpander', category: 'passenger', type: 'MPV',
      tagline: 'MPV keluarga yang lega, nyaman, dan irit.',
      chips: ['7 Penumpang', '1.5L MIVEC', 'CVT / MT'], price: 269000000, img: 'assets/img/xpander.jpg',
      desc: 'Xpander memadukan desain Dynamic Shield yang tegas dengan kabin lapang dan suspensi yang nyaman. Pilihan favorit keluarga Indonesia untuk perjalanan harian maupun luar kota.',
      specs: [['Mesin', '1.5L MIVEC, 4 silinder'], ['Tenaga', '105 PS'], ['Transmisi', 'CVT / 5-percepatan manual'], ['Kapasitas', '7 penumpang'], ['Penggerak', 'Roda depan (FWD)']],
      variants: ['GLS', 'Exceed', 'Ultimate', 'Xpander Cross']
    },
    {
      id: 'xforce', brand: 'Mitsubishi', name: 'Xforce', category: 'passenger', type: 'Compact SUV',
      tagline: 'Compact SUV stylish dengan ground clearance tinggi.',
      chips: ['5 Penumpang', '1.5L MIVEC', 'CVT'], price: 383500000, img: 'assets/img/xforce.jpg',
      desc: 'Xforce hadir dengan desain futuristik, ground clearance 222 mm, sistem audio Dynamic Sound Yamaha Premium, serta empat mode berkendara untuk berbagai kondisi jalan.',
      specs: [['Mesin', '1.5L MIVEC, 4 silinder'], ['Tenaga', '105 PS'], ['Transmisi', 'CVT'], ['Kapasitas', '5 penumpang'], ['Ground clearance', '222 mm']],
      variants: ['Exceed', 'Ultimate', 'Ultimate DS']
    },
    {
      id: 'destinator', brand: 'Mitsubishi', name: 'Destinator', category: 'passenger', type: 'SUV 7 Penumpang',
      tagline: 'SUV 7-seater bertenaga turbo untuk keluarga aktif.',
      chips: ['7 Penumpang', '1.5L Turbo', 'CVT'], price: 399900000, img: 'assets/img/destinator.jpg',
      desc: 'Destinator adalah SUV tiga baris dengan mesin 1.5L turbo yang responsif, kabin luas untuk tujuh penumpang, dan beragam fitur keselamatan serta kenyamanan modern.',
      specs: [['Mesin', '1.5L MIVEC Turbo'], ['Tenaga', '163 PS'], ['Transmisi', 'CVT'], ['Kapasitas', '7 penumpang'], ['Penggerak', 'Roda depan (FWD)']],
      variants: ['GLS', 'Exceed', 'Ultimate', 'Ultimate Premium']
    },
    {
      id: 'pajero-sport', brand: 'Mitsubishi', name: 'Pajero Sport', category: 'passenger', type: 'SUV Premium',
      tagline: 'SUV premium tangguh dengan mesin diesel bertenaga.',
      chips: ['7 Penumpang', '2.4L Diesel', '8AT / 4x4'], price: 573000000, img: 'assets/img/pajero-sport.jpg',
      desc: 'Pajero Sport menggabungkan kemewahan dan ketangguhan. Mesin 2.4L MIVEC Turbo Diesel dipadukan transmisi otomatis 8-percepatan, dengan pilihan penggerak Super Select 4WD-II.',
      specs: [['Mesin', '2.4L MIVEC Turbo Diesel'], ['Tenaga', '181 PS'], ['Transmisi', '8AT / 6MT'], ['Kapasitas', '7 penumpang'], ['Penggerak', '4x2 / 4x4 Super Select 4WD-II']],
      variants: ['Exceed', 'GLX 4x4', 'Dakar', 'Dakar Ultimate 4x2', 'Dakar Ultimate 4x4']
    },
    {
      id: 'triton', brand: 'Mitsubishi', name: 'Triton', category: 'commercial', type: 'Pick-up',
      tagline: 'Double cab tangguh untuk kerja berat dan petualangan.',
      chips: ['Single / Double Cab', '2.4L Diesel', '4x4'], price: 340000000, img: 'assets/img/triton.jpg',
      desc: 'All New Triton dibangun di atas sasis baru yang lebih kokoh, dengan mesin 2.4L turbo diesel bertenaga dan pilihan kabin single, club, hingga double cab.',
      specs: [['Mesin', '2.4L MIVEC Turbo Diesel'], ['Tenaga', 'Hingga 184 PS'], ['Transmisi', '6MT / 6AT'], ['Kabin', 'Single / Club / Double Cab'], ['Penggerak', '4x2 / 4x4']],
      variants: ['GLX', 'GLS', 'Exceed', 'Ultimate']
    },
    {
      id: 'l300', brand: 'Mitsubishi', name: 'L300', category: 'commercial', type: 'Niaga Ringan',
      tagline: 'Pick-up legendaris, kuat dan andal untuk usaha.',
      chips: ['Pick-up', '2.3L Diesel', '5MT'], price: 255000000, img: 'assets/img/l300.jpg',
      desc: 'Colt L300 terkenal tangguh, mudah perawatan, dan bernilai jual kembali tinggi. Kini bermesin diesel turbo intercooler standar Euro 4 yang lebih bertenaga dan efisien.',
      specs: [['Mesin', '2.3L Diesel Turbo Intercooler'], ['Emisi', 'Euro 4'], ['Transmisi', '5-percepatan manual'], ['Tipe', 'Pick-up / Cab Chassis'], ['Penggerak', 'Roda belakang (RWD)']],
      variants: ['Pick-up Flat Deck', 'Cab Chassis']
    },
    {
      id: 'canter', brand: 'FUSO', name: 'Canter', category: 'fuso', type: 'Truk Light Duty',
      tagline: 'Truk ringan andalan untuk distribusi dan proyek.',
      chips: ['Light Duty', 'Diesel Euro 4', '4x2'], price: null, img: 'assets/img/canter.jpg',
      desc: 'FUSO Canter adalah truk ringan yang terbukti tangguh di berbagai medan. Tersedia dalam beragam tipe dan dapat dilengkapi karoseri dump, box, wing box, hingga tangki.',
      specs: [['Mesin', 'Diesel Turbo Intercooler'], ['Emisi', 'Euro 4'], ['Konfigurasi', '4x2, siap karoseri'], ['Aplikasi', 'Dump, box, wing box, tangki'], ['Varian', 'Standar hingga HD']],
      variants: ['FE 71', 'FE 71 Long', 'FE 73 HD', 'FE 74 HD']
    },
    {
      id: 'fighter-x', brand: 'FUSO', name: 'Fighter X', category: 'fuso', type: 'Truk Medium Duty',
      tagline: 'Truk medium duty bertenaga untuk muatan besar.',
      chips: ['Medium Duty', 'Diesel 6 Silinder', '4x2 / 6x2 / 6x4'], price: null, img: 'assets/img/fighter-x.jpg',
      desc: 'FUSO Fighter X dirancang untuk muatan besar dan perjalanan jarak jauh, dengan mesin diesel 6 silinder bertenaga, kabin nyaman, serta pilihan konfigurasi as roda sesuai kebutuhan usaha.',
      specs: [['Mesin', 'Diesel 6 silinder Turbo Intercooler'], ['Emisi', 'Euro 4'], ['Konfigurasi', '4x2 / 6x2 / 6x4'], ['Aplikasi', 'Box, wing box, dump, tangki'], ['Segmen', 'Medium duty']],
      variants: ['FM 65 F', 'FN 61 F', 'FN 62 F']
    }
  ];
  const byId = Object.fromEntries(MODELS.map(m => [m.id, m]));
  const CATS = { passenger: 'SUV & MPV', commercial: 'Pick-up & Niaga', fuso: 'Truk FUSO' };
  const RATE = { 1: '3,5', 2: '4', 3: '4,5', 4: '5', 5: '5,5' };   // estimasi bunga flat / tahun

  /* ---------- helpers ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = n => Math.round(n).toLocaleString('id-ID');
  const rp = n => 'Rp ' + num(n);
  const rpShort = n => n >= 1e9
    ? 'Rp ' + (n / 1e9).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + ' M'
    : 'Rp ' + (n / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' Jt';
  const digits = s => Number(String(s).replace(/\D/g, '')) || 0;
  const fullName = m => `${m.brand} ${m.name}`;
  const icon = (id, fill) => `<svg class="ic${fill ? ' f' : ''}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const waUrl = msg => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;
  const fill = s => String(s).replace(/\{name\}/g, C.salesName);

  let toastTimer;
  function toast(text, link) {
    const t = $('#toast');
    t.textContent = text;
    t.classList.toggle('has-link', !!link);
    if (link) {
      const a = document.createElement('a');
      a.href = link; a.target = '_blank'; a.rel = 'noopener';
      a.className = 'toast-link';
      a.innerHTML = icon('wa', true) + 'Buka WhatsApp';
      a.addEventListener('click', () => t.classList.remove('show'));
      t.append(' ', a);
    }
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), link ? 10000 : 2600);
  }

  // Buka WhatsApp; jika browser memblokir jendela baru, tampilkan tombol cadangan.
  function openWa(msg) {
    const url = waUrl(msg);
    let w = null;
    try { w = window.open(url, '_blank'); } catch (err) { w = null; }
    if (w) { try { w.opener = null; } catch (err) { /* abaikan */ } toast('Membuka WhatsApp…'); }
    else toast('Pesan Anda sudah disiapkan.', url);
  }

  if (/X/i.test(C.whatsapp) || !C.whatsapp) {
    console.warn('[Bili Mitsubishi] Nomor WhatsApp belum diisi. Ubah di assets/js/config.js');
  }

  /* ---------- config → DOM ---------- */
  $$('[data-cfg]').forEach(el => { const v = C[el.dataset.cfg]; if (v) el.textContent = v; });
  $$('[data-wa]').forEach(el => {
    const msg = el.dataset.wa ? fill(el.dataset.wa) : `Halo ${C.salesName}, saya ingin bertanya tentang kendaraan Mitsubishi.`;
    el.href = waUrl(msg); el.target = '_blank'; el.rel = 'noopener';
  });
  $$('[data-tel]').forEach(el => { el.href = 'tel:+' + C.whatsapp.replace(/\D/g, ''); });
  $$('[data-maps]').forEach(el => {
    el.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(C.mapsQuery);
    el.target = '_blank'; el.rel = 'noopener';
  });
  const map = $('#mapFrame');
  if (map) map.src = `https://maps.google.com/maps?q=${encodeURIComponent(C.mapsQuery)}&z=15&output=embed`;
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- selects ---------- */
  function fillSelect(sel, { placeholder } = {}) {
    if (!sel) return;
    let html = placeholder ? `<option value="" disabled selected>${placeholder}</option>` : '';
    for (const [key, label] of Object.entries(CATS)) {
      html += `<optgroup label="${label}">` +
        MODELS.filter(m => m.category === key).map(m => `<option value="${m.id}">${esc(fullName(m))}</option>`).join('') +
        '</optgroup>';
    }
    sel.innerHTML = html;
  }
  fillSelect($('#quickModel'), { placeholder: 'Pilih model' });
  fillSelect($('#formModel'), { placeholder: 'Pilih model' });
  fillSelect($('#calcModel'));

  /* ---------- model cards ---------- */
  const grid = $('#modelGrid');
  grid.innerHTML = MODELS.map(m => `
    <article class="card reveal" data-cat="${m.category}">
      <button class="card-media" type="button" data-open="${m.id}" aria-label="Lihat detail ${esc(fullName(m))}">
        <span class="card-tag">${esc(m.type)}</span>
        <img src="${m.img}" alt="${esc(fullName(m))}" width="1000" height="625" loading="lazy">
      </button>
      <div class="card-body">
        <span class="card-brand">${esc(m.brand)}</span>
        <h3>${esc(m.name)}</h3>
        <p class="tagline">${esc(m.tagline)}</p>
        <ul class="chips">${m.chips.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
        <div class="price">
          <small>${m.price ? 'Harga mulai*' : 'Harga menyesuaikan karoseri'}</small>
          <strong class="${m.price ? '' : 'ask'}">${m.price ? rpShort(m.price) : 'Hubungi Sales'}</strong>
        </div>
        <div class="card-actions">
          <button class="btn btn-outline btn-sm" type="button" data-open="${m.id}">Detail</button>
          <a class="btn btn-red btn-sm" href="${waUrl(`Halo ${C.salesName}, saya tertarik dengan ${fullName(m)}. Mohon info harga dan promo terbaru.`)}" target="_blank" rel="noopener">${icon('wa', true)}Tanya Harga</a>
        </div>
      </div>
    </article>`).join('');

  // tabs
  const tabs = $$('#tabs .tab');
  tabs.forEach(tab => {
    const f = tab.dataset.filter;
    const count = f === 'all' ? MODELS.length : MODELS.filter(m => m.category === f).length;
    tab.insertAdjacentHTML('beforeend', `<span class="count">${count}</span>`);
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab)));
      $$('.card', grid).forEach(card => {
        const show = f === 'all' || card.dataset.cat === f;
        card.hidden = !show;
        if (show) { card.classList.remove('in'); requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('in'))); }
      });
    });
  });

  // footer model links
  const fm = $('#footerModels');
  if (fm) fm.innerHTML = MODELS.map(m => `<li><button type="button" data-open="${m.id}">${esc(fullName(m))}</button></li>`).join('');

  /* ---------- modal ---------- */
  const modal = $('#modelModal');
  let current = null;
  function openModel(id) {
    const m = byId[id]; if (!m) return;
    current = m;
    $('#mImg').src = m.img; $('#mImg').alt = fullName(m);
    $('#mBrand').textContent = m.brand;
    $('#mTitle').textContent = m.name;
    $('#mType').textContent = m.type;
    $('#mDesc').textContent = m.desc;
    $('#mSpecs').innerHTML = m.specs.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
    $('#mVariants').innerHTML = m.variants.map(v => `<span>${esc(v)}</span>`).join('');
    $('#mPriceLabel').textContent = m.price ? 'Harga mulai*' : 'Harga';
    $('#mPrice').textContent = m.price ? rp(m.price) : 'Hubungi Sales';
    $('#mWa').href = waUrl(`Halo ${C.salesName}, saya tertarik dengan ${fullName(m)}. Mohon kirimkan penawaran harga, pilihan varian, dan promo terbaru.`);
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    $('.modal-body', modal).scrollTop = 0;
  }
  function closeModal() { if (modal.open) modal.close ? modal.close() : modal.removeAttribute('open'); }
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-open]');
    if (opener) { e.preventDefault(); openModel(opener.dataset.open); }
  });
  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
  $('#mCalc').addEventListener('click', () => {
    closeModal();
    if (current) { calcModel.value = current.id; onModelChange(); }
    document.getElementById('kredit').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- credit calculator ---------- */
  const calcModel = $('#calcModel'), calcPrice = $('#calcPrice'), calcDp = $('#calcDp'), calcRate = $('#calcRate');

  function onModelChange() {
    const m = byId[calcModel.value];
    calcPrice.value = m && m.price ? num(m.price) : '';
    if (m && !m.price) calcPrice.focus({ preventScroll: true });
    compute();
  }
  function compute() {
    const price = digits(calcPrice.value);
    const pct = Number(calcDp.value);
    const years = Number(($('input[name="tenor"]:checked') || {}).value || 3);
    const rate = parseFloat(String(calcRate.value).replace(',', '.')) || 0;
    const months = years * 12;
    const dp = Math.round(price * pct / 100);
    const loan = Math.max(price - dp, 0);
    const interest = loan * (rate / 100) * years;
    const inst = loan ? Math.ceil((loan + interest) / months / 1000) * 1000 : 0;

    const min = Number(calcDp.min), max = Number(calcDp.max);
    calcDp.style.setProperty('--p', ((pct - min) / (max - min) * 100) + '%');
    $('#dpOut').textContent = `${pct}% · ${rp(dp)}`;
    $('#rInst').textContent = rp(inst);
    $('#rPer').textContent = `per bulan selama ${months} bulan`;
    $('#rPrice').textContent = price ? rp(price) : '–';
    $('#rDp').textContent = price ? rp(dp) : '–';
    $('#rLoan').textContent = price ? rp(loan) : '–';
    $('#rInterest').textContent = price ? rp(interest) : '–';
    $('#rTdp').textContent = price ? rp(dp + inst) : '–';

    const m = byId[calcModel.value];
    $('#calcWa').href = waUrl(price
      ? `Halo ${C.salesName}, saya ingin mengajukan kredit:\n` +
        `• Model: ${m ? fullName(m) : '-'}\n` +
        `• Harga OTR: ${rp(price)}\n` +
        `• DP: ${pct}% (${rp(dp)})\n` +
        `• Tenor: ${years} tahun (${months} bulan)\n` +
        `• Estimasi angsuran: ${rp(inst)}/bulan\n\n` +
        `Mohon info detail angsuran resmi dan promo terbarunya. Terima kasih.`
      : `Halo ${C.salesName}, saya ingin simulasi kredit untuk ${m ? fullName(m) : 'kendaraan Mitsubishi'}. Mohon info harga dan skema cicilannya.`);
  }
  calcModel.addEventListener('change', onModelChange);
  calcPrice.addEventListener('input', () => {
    const n = digits(calcPrice.value);
    calcPrice.value = n ? num(n) : '';
    compute();
  });
  calcDp.addEventListener('input', compute);
  calcRate.addEventListener('input', () => { calcRate.value = calcRate.value.replace(/[^\d.,]/g, ''); compute(); });
  $$('input[name="tenor"]').forEach(r => r.addEventListener('change', () => { calcRate.value = RATE[r.value]; compute(); }));
  calcModel.value = 'xforce';
  onModelChange();

  /* ---------- commercial stage ---------- */
  const NIAGA = ['fighter-x', 'canter', 'triton', 'l300'];
  const thumbs = $('#thumbs');
  let stageId = 'fighter-x';
  thumbs.innerHTML = NIAGA.map(id => {
    const m = byId[id];
    return `<button class="thumb" type="button" role="tab" aria-selected="${id === stageId}" data-stage="${id}">
      <span class="tm"><img src="${m.img}" alt="" width="1000" height="625" loading="lazy"></span>${esc(m.name)}</button>`;
  }).join('');
  thumbs.addEventListener('click', e => {
    const b = e.target.closest('[data-stage]'); if (!b || b.dataset.stage === stageId) return;
    stageId = b.dataset.stage;
    const m = byId[stageId];
    $$('.thumb', thumbs).forEach(t => t.setAttribute('aria-selected', String(t === b)));
    const img = $('#stageImg');
    img.classList.add('swap');
    setTimeout(() => {
      img.src = m.img; img.alt = fullName(m);
      $('#stageBrand').textContent = m.brand;
      $('#stageName').textContent = m.name;
      $('#stageType').textContent = m.type;
      img.classList.remove('swap');
    }, 220);
  });
  $('#stageDetail').addEventListener('click', () => openModel(stageId));

  /* ---------- forms → WhatsApp ---------- */
  $('#quickForm').addEventListener('submit', e => {
    e.preventDefault();
    const sel = $('#quickModel');
    const field = sel.closest('.field');
    if (!sel.value) { field.classList.add('invalid'); sel.focus(); toast('Silakan pilih model terlebih dahulu'); return; }
    field.classList.remove('invalid');
    const m = byId[sel.value];
    openWa(`Halo ${C.salesName}, saya tertarik dengan ${fullName(m)} dengan pembayaran ${$('#quickPay').value.toLowerCase()}. Mohon kirimkan penawaran harga dan promo terbaru.`);
  });
  $('#quickModel').addEventListener('change', e => e.target.closest('.field').classList.remove('invalid'));

  const lead = $('#leadForm');
  lead.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    $$('[required]', lead).forEach(inp => {
      const valid = inp.checkValidity() && String(inp.value).trim() !== '';
      inp.closest('.field').classList.toggle('invalid', !valid);
      if (!valid && ok) { inp.focus(); ok = false; }
    });
    if (!ok) { toast('Mohon lengkapi data yang wajib diisi'); return; }
    const d = Object.fromEntries(new FormData(lead));
    const m = byId[d.model];
    const lines = [
      `Halo ${C.salesName}, saya ingin ${d.keperluan.toLowerCase()}.`,
      '',
      `• Nama: ${d.nama.trim()}`,
      `• No. WhatsApp: ${d.hp.trim()}`,
      `• Model: ${m ? fullName(m) : '-'}`,
      `• Pembayaran: ${d.bayar}`
    ];
    if (d.kota.trim()) lines.push(`• Domisili: ${d.kota.trim()}`);
    if (d.pesan.trim()) lines.push('', d.pesan.trim());
    openWa(lines.join('\n'));
    lead.reset();
  });
  lead.addEventListener('input', e => {
    const f = e.target.closest('.field');
    if (f && f.classList.contains('invalid') && e.target.checkValidity()) f.classList.remove('invalid');
  });

  /* ---------- header, nav, mobile menu ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  const menuBtn = $('#menuBtn'), navLinks = $('#navLinks');
  const setMenu = open => {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    $('use', menuBtn).setAttribute('href', open ? '#i-x' : '#i-menu');
  };
  menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
  navLinks.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', e => { if (!e.target.closest('.header')) setMenu(false); });

  const links = $$('.nav-links a[href^="#"]');
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    const rev = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); rev.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(el => {
      const sib = el.parentElement ? Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal')) : [];
      const i = sib.indexOf(el);
      if (i > 0) el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
      rev.observe(el);
    });
  } else {
    $$('.reveal').forEach(el => el.classList.add('in'));
  }
})();
