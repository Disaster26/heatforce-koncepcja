(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- wersja niemiecka ---------- */
  var DE = {
    title: 'Heatforce - Heizung, Klimaanlagen und Installationen in Częstochowa',
    aLogo: 'Heatforce, Startseite', aMenu: 'Menü öffnen', aClose: 'Menü schließen', aMail: 'E-Mail schreiben',
    nUslugi: 'Leistungen', nJak: 'Ablauf', nZap: 'Anfrage', nZapFull: 'Angebot anfragen', nKontakt: 'Kontakt',
    hBtn: 'Angebot anfragen',
    altHero: 'Außeneinheit einer Wärmepumpe an einem Einfamilienhaus',
    heroAdr: 'Częstochowa und Umgebung',
    h1: 'Heizung, Klimaanlagen und Installationen in Częstochowa',
    lead: 'Wir installieren und modernisieren Heizungsanlagen, Klima- und Lüftungsanlagen sowie Wasser-, Abwasser- und Elektroinstallationen. Außerdem reinigen wir Lüftungs- und Schornsteinzüge.',
    heroBtn: 'Angebot anfragen', heroLink: 'Unsere Leistungen',
    uH2: 'Leistungen',
    uP: 'Wir arbeiten in Häusern, Wohnungen und Gewerberäumen. Sie können eine einzelne Installation beauftragen oder mehrere zusammen - dann stimmen wir die Reihenfolge der Arbeiten selbst ab.',
    altG: 'Anschluss eines Heizkörpers an die Heizungsanlage', altK: 'Wandklimagerät im Innenraum', altW: 'Montage von Wasserleitungen', altE: 'Elektriker am Verteilerschrank', altC: 'Schornsteine auf einem Hausdach', altP: 'Einstellen eines Thermostatkopfes am Heizkörper',
    k1h: 'Heizungsanlagen',
    k1p: 'Heizung für Häuser und Wohnungen: Heizkörper und Fußbodenheizung, Heizräume, Anschluss von Wärmepumpen und Heizkesseln. Neue Anlagen und Modernisierung bestehender.',
    k2h: 'Klima und Lüftung', k2p: 'Montage von Klimaanlagen in Häusern, Wohnungen und Büros, Lüftungsanlagen.',
    k3h: 'Wasser und Abwasser', k3p: 'Wasser- und Abwasserinstallationen, Hausanschlüsse, Sanitärmontage, Austausch alter Leitungen.',
    k4h: 'Elektroinstallationen', k4p: 'Verkabelung, Steckdosen und Beleuchtung, Verteiler, Stromversorgung für Heiz- und Klimageräte.',
    k5h: 'Reinigung von Lüftungs- und Schornsteinzügen', k5p: 'Reinigung von Lüftungskanälen und Schornsteinen in Häusern, Wohngebäuden und Gewerberäumen.',
    k6h: 'Mehrere Installationen in einem Auftrag',
    k6p: 'Ein Heizungstausch erfordert oft auch Elektro- und Sanitärarbeiten. Das alles erledigen wir selbst, ohne dass Sie weitere Firmen suchen müssen.',
    k6a: 'Beschreiben Sie Ihr Vorhaben',
    note: 'Die Fotos in diesem Abschnitt dienen nur zur Veranschaulichung.',
    pH2: 'Ablauf',
    pP: 'Zuerst prüfen wir die Situation vor Ort, dann schlagen wir eine Lösung vor und nennen die Kosten. Zum Schluss nehmen wir die Anlage in Betrieb und übergeben sie gemeinsam mit Ihnen.',
    p1: '<strong>Anfrage.</strong> Sie beschreiben, was gemacht werden soll, und fügen Fotos vom Heizraum, von den Heizkörpern oder vom Montageort bei.',
    p2: '<strong>Besichtigung.</strong> Wir kommen vorbei, prüfen die bestehende Anlage und legen den Umfang fest.',
    p3: '<strong>Angebot und Termin.</strong> Wir erstellen einen Kostenvoranschlag und schlagen einen Starttermin vor.',
    p4: '<strong>Montage und Inbetriebnahme.</strong> Wir installieren die Anlage, nehmen sie in Betrieb und zeigen Ihnen die Bedienung.',
    zH2: 'Angebot anfragen',
    zP: 'Beschreiben Sie bitte kurz, worum es geht. Fotos vom Kessel, von den Heizkörpern, vom Verteiler oder vom geplanten Platz für das Klimagerät helfen uns, den Umfang schon vor dem Termin einzuschätzen.',
    zMail: 'Lieber per E-Mail?',
    fCzego: 'Worum geht es?', fKilka: 'Mehrfachauswahl möglich',
    c1: 'Heizung', c2: 'Wärmepumpe oder Kessel', c3: 'Klimaanlage', c4: 'Lüftung', c5: 'Wasser/Abwasser', c6: 'Elektrik', c7: 'Reinigung der Züge',
    fMiejsce: 'Ort', phMiejsce: 'z. B. Częstochowa, Blachownia',
    fObiekt: 'Gebäudeart', o0: 'Bitte wählen', o1: 'Einfamilienhaus', o2: 'Wohnung', o3: 'Gewerberaum / Firma', o4: 'Gebäude im Bau',
    fOpis: 'Beschreibung', phOpis: 'z. B. Austausch des alten Kessels, Haus 140 m², Heizkörper',
    fZdj: 'Fotos', fZdjOpt: 'bis zu 10 Dateien', fDrop: '<b>Fotos hinzufügen</b> oder hierher ziehen',
    fImie: 'Vorname', fEmail: 'E-Mail', fTel: 'Telefon', fOpt: 'optional',
    fZgoda: 'Ich bin mit der Kontaktaufnahme zu meiner Anfrage einverstanden. Die Daten verarbeitet HEATFORCE sp. z o.o. ausschließlich zur Erstellung eines Angebots.',
    fSend: 'Anfrage senden',
    dH: 'Vielen Dank, Ihre Anfrage ist fertig',
    dNote: 'Dies ist eine Vorschau: Auf der fertigen Seite geht die Anfrage samt Fotos direkt an das Postfach der Firma. Jetzt können Sie sie per E-Mail senden.',
    dMail: 'Per E-Mail senden', dAgain: 'Neue Anfrage',
    kH2: 'Kontakt', kAdr: 'Adresse', kUzup: 'wird ergänzt', kObszar: 'Einsatzgebiet', kObszarV: 'Częstochowa und Umgebung', kPotw: '(Umfang wird bestätigt)',
    cred: 'Beispielfotos: Pexels. Konzeptentwurf der Website.'
  };
  var MSG = {
    pl: { pre: 'Prosimy: ', prace: 'zaznacz rodzaj prac lub opisz je', imie: 'podaj imię', email: 'wpisz poprawny e-mail', zgoda: 'zaznacz zgodę na kontakt', max: 'Można dodać do 10 zdjęć lub plików PDF.', opis: 'Zakres opisany w wiadomości', pliki: 'Dołączone pliki: ', usun: 'Usuń ', subj: 'Zapytanie o wycenę', head: 'Zapytanie ze strony Heatforce', lPrace: 'Prace: ', lNizej: 'opisane niżej', lMiejsce: 'Miejscowość: ', lObiekt: 'Budynek: ', lOpis: 'Opis: ', lZal: 'Załączniki: ', lZal2: ' (proszę dołączyć do wiadomości)', lImie: 'Imię: ', lTel: 'Telefon: ' },
    de: { pre: 'Bitte: ', prace: 'Art der Arbeiten wählen oder beschreiben', imie: 'Vornamen angeben', email: 'gültige E-Mail eingeben', zgoda: 'Einverständnis zur Kontaktaufnahme bestätigen', max: 'Es sind bis zu 10 Fotos oder PDF-Dateien möglich.', opis: 'Umfang in der Nachricht beschrieben', pliki: 'Beigefügte Dateien: ', usun: 'Entfernen: ', subj: 'Angebotsanfrage', head: 'Anfrage über die Website Heatforce', lPrace: 'Arbeiten: ', lNizej: 'siehe unten', lMiejsce: 'Ort: ', lObiekt: 'Gebäude: ', lOpis: 'Beschreibung: ', lZal: 'Anhänge: ', lZal2: ' (bitte der Nachricht beifügen)', lImie: 'Vorname: ', lTel: 'Telefon: ' }
  };

  var lang = 'pl', PL = { title: document.title };
  $$('[data-t]').forEach(function (el) { PL[el.getAttribute('data-t')] = el.innerHTML; });
  $$('[data-tp]').forEach(function (el) { PL[el.getAttribute('data-tp')] = el.placeholder; });
  $$('[data-talt]').forEach(function (el) { PL[el.getAttribute('data-talt')] = el.alt; });
  $$('[data-ta]').forEach(function (el) { PL[el.getAttribute('data-ta')] = el.getAttribute('aria-label'); });

  function setLang(l) {
    lang = l === 'de' ? 'de' : 'pl';
    var D = lang === 'de' ? DE : PL;
    var g = function (k) { return D[k] != null ? D[k] : PL[k]; };
    $$('[data-t]').forEach(function (el) { el.innerHTML = g(el.getAttribute('data-t')); });
    $$('[data-tp]').forEach(function (el) { el.placeholder = g(el.getAttribute('data-tp')); });
    $$('[data-talt]').forEach(function (el) { el.alt = g(el.getAttribute('data-talt')); });
    $$('[data-ta]').forEach(function (el) { el.setAttribute('aria-label', g(el.getAttribute('data-ta'))); });
    document.title = g('title');
    document.documentElement.lang = lang;
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    msg.textContent = '';
    try { localStorage.setItem('hf-lang', lang); } catch (e) {}
    try { history.replaceState(null, '', location.pathname + (lang === 'de' ? '?lang=de' : '') + location.hash); } catch (e) {}
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); }); });

  /* menu na telefonie */
  var panel = $('#panel'), burger = $('#burger');
  function openPanel() { panel.hidden = false; burger.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; }
  function closePanel() { panel.hidden = true; burger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  burger.addEventListener('click', openPanel);
  $('#panelX').addEventListener('click', closePanel);
  panel.querySelectorAll('nav a').forEach(function (a) { a.addEventListener('click', closePanel); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) closePanel(); });

  /* dolny pasek: dopiero po przewinięciu za przycisk w hero, chowany przy formularzu */
  var mob = $('#mob'), cta = $('#heroCta'), zap = $('#zapytanie');
  if ('IntersectionObserver' in window) {
    var pastHero = false, inForm = false;
    var upd = function () { mob.classList.toggle('widac', pastHero && !inForm); };
    new IntersectionObserver(function (en) {
      var e = en[0]; pastHero = !e.isIntersecting && e.boundingClientRect.top < 0; upd();
    }).observe(cta);
    new IntersectionObserver(function (en) { inForm = en[0].isIntersecting; upd(); }, { threshold: 0.15 }).observe(zap);
  }

  /* formularz zapytania */
  var form = $('#form'), msg = $('#msg'), lista = $('#lista'), input = $('#pliki'), drop = $('#drop');
  var pliki = [], MAX = 10;
  var M = function (k) { return MSG[lang][k]; };

  function render() {
    lista.innerHTML = '';
    pliki.forEach(function (p, i) {
      var li = document.createElement('li');
      if (p.url) { var im = document.createElement('img'); im.src = p.url; im.alt = p.f.name; li.appendChild(im); }
      else { var d = document.createElement('div'); d.className = 'pdf'; d.textContent = p.f.name; li.appendChild(d); }
      var b = document.createElement('button'); b.type = 'button'; b.className = 'rm'; b.setAttribute('aria-label', M('usun') + p.f.name); b.textContent = '×';
      b.addEventListener('click', function () { if (p.url) URL.revokeObjectURL(p.url); pliki.splice(i, 1); render(); });
      li.appendChild(b); lista.appendChild(li);
    });
  }
  function dodaj(files) {
    var odrzucone = 0;
    Array.prototype.forEach.call(files, function (f) {
      if (pliki.length >= MAX) { odrzucone++; return; }
      var img = /^image\//.test(f.type);
      if (!img && f.type !== 'application/pdf') { odrzucone++; return; }
      pliki.push({ f: f, url: img ? URL.createObjectURL(f) : null });
    });
    render();
    msg.textContent = odrzucone ? M('max') : '';
  }
  input.addEventListener('change', function () { dodaj(input.files); input.value = ''; });
  ['dragenter', 'dragover'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
  ['dragleave', 'drop'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
  drop.addEventListener('drop', function (e) { if (e.dataTransfer) dodaj(e.dataTransfer.files); });

  function oznacz(el, zle) { el.classList.toggle('err', zle); }
  form.addEventListener('input', function (e) { if (e.target.classList) e.target.classList.remove('err'); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var chk = $$('input[name=prace]:checked', form);
    var prace = chk.map(function (c) { return c.parentNode.querySelector('span').textContent; });
    var opis = $('#opis'), imie = $('#imie'), email = $('#email'), zgoda = $('#zgoda');
    var bledy = [];
    if (!prace.length && !opis.value.trim()) { bledy.push(M('prace')); oznacz(opis, true); }
    if (!imie.value.trim()) { bledy.push(M('imie')); oznacz(imie, true); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) { bledy.push(M('email')); oznacz(email, true); }
    if (!zgoda.checked) bledy.push(M('zgoda'));
    if (bledy.length) { msg.textContent = M('pre') + bledy.join(', ') + '.'; return; }
    msg.textContent = '';

    var miejsce = $('#miejsce').value.trim(), ob = $('#obiekt'), obiekt = ob.value ? ob.options[ob.selectedIndex].text : '', tel = $('#tel').value.trim();
    var txt = [
      M('head'),
      M('lPrace') + (prace.join(', ') || M('lNizej')),
      miejsce ? M('lMiejsce') + miejsce : '',
      obiekt ? M('lObiekt') + obiekt : '',
      opis.value.trim() ? M('lOpis') + opis.value.trim() : '',
      pliki.length ? M('lZal') + pliki.length + M('lZal2') : '',
      M('lImie') + imie.value.trim(), 'E-mail: ' + email.value.trim(), tel ? M('lTel') + tel : ''
    ].filter(Boolean).join('\n');

    $('#doneTxt').textContent = (prace.length ? prace.join(', ') : M('opis')) +
      (miejsce ? ', ' + miejsce : '') + (pliki.length ? '. ' + M('pliki') + pliki.length + '.' : '.');
    $('#doneMail').href = 'mailto:heatforce0@gmail.com?subject=' + encodeURIComponent(M('subj') + (miejsce ? ' - ' + miejsce : '')) + '&body=' + encodeURIComponent(txt);
    form.hidden = true; $('#done').hidden = false;
    $('#done').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  $('#again').addEventListener('click', function () {
    form.reset(); pliki.forEach(function (p) { if (p.url) URL.revokeObjectURL(p.url); }); pliki = []; render();
    $('#done').hidden = true; form.hidden = false;
  });

  /* język startowy: ?lang=de albo zapamiętany wybór */
  var start = /[?&]lang=de\b/.test(location.search) ? 'de' : null;
  if (!start) { try { start = localStorage.getItem('hf-lang'); } catch (e) {} }
  if (start === 'de') setLang('de');
})();
