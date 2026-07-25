/* =============================================================================
   HOTEL-WEBSITE · RENDER- & INTERAKTIONS-LOGIK
   -----------------------------------------------------------------------------
   Diese Datei musst du normalerweise NICHT anfassen.
   Sie liest window.HOTEL aus js/content.js und baut daraus die Seite auf.
   ============================================================================= */
(function () {
  "use strict";

  var H = window.HOTEL || {};

  /* --- kleine Helfer ----------------------------------------------------- */
  function $(sel) { return document.querySelector(sel); }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k.indexOf("on") === 0 && typeof attrs[k] === "function")
          node.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] != null && attrs[k] !== false) node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }
  function setText(sel, value) { var n = $(sel); if (n && value != null) n.textContent = value; }
  function setAttr(sel, attr, value) { var n = $(sel); if (n && value != null) n.setAttribute(attr, value); }

  /* --- Inline-Icons (für Ausstattung) ------------------------------------ */
  var ICON_WRAP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">';
  var ICONS = {
    wifi: '<path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M8.5 16.11a6 6 0 0 1 7 0"/><path d="M12 20h.01"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>',
    breakfast: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
    parking: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',
    spa: '<path d="M12 2s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z"/>',
    restaurant: '<path d="M4 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3"/><path d="M6 12v9"/><path d="M17 3c-1.5 0-3 1.5-3 4s1.5 4 3 4v10"/>',
    pet: '<circle cx="5.5" cy="12.5" r="1.5"/><circle cx="9.5" cy="8.5" r="1.5"/><circle cx="14.5" cy="8.5" r="1.5"/><circle cx="18.5" cy="12.5" r="1.5"/><path d="M8 16.5c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5-1.8 3.5-4 3.5-4-1.5-4-3.5z"/>',
    pool: '<path d="M2 20c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1"/><path d="M6 16V5a2 2 0 0 1 2-2"/><path d="M14 16V5a2 2 0 0 1 2-2"/><line x1="6" y1="9" x2="14" y2="9"/>',
    ac: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/>',
    "room-service": '<path d="M4 17h16"/><path d="M5 17a7 7 0 0 1 14 0"/><line x1="12" y1="7" x2="12" y2="10"/><circle cx="12" cy="6" r="1"/>',
    bar: '<path d="M4 3h16l-8 9z"/><line x1="12" y1="12" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/>',
    bike: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8"/><path d="M10 9l2-4h3"/>',
    view: '<path d="M3 20l6-9 4 5 3-4 5 8z"/><circle cx="8" cy="7" r="2"/>',
    family: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    reception: '<path d="M3 21h18"/><path d="M5 21V10l7-4 7 4v11"/><path d="M9 21v-6h6v6"/>'
  };
  function iconSvg(name) { return ICON_WRAP + (ICONS[name] || '<path d="M20 6L9 17l-5-5"/>') + "</svg>"; }

  /* --- 1. Theme anwenden ------------------------------------------------- */
  function applyTheme() {
    var t = H.theme || {};
    var root = document.documentElement.style;
    if (t.colorPrimary) root.setProperty("--color-primary", t.colorPrimary);
    if (t.colorAccent)  root.setProperty("--color-accent", t.colorAccent);
    if (t.colorBg)      root.setProperty("--color-bg", t.colorBg);
    if (t.colorText)    root.setProperty("--color-text", t.colorText);
    if (t.fontHeading)  root.setProperty("--font-heading", t.fontHeading);
    if (t.fontBody)     root.setProperty("--font-body", t.fontBody);
  }

  /* --- 2. Meta / SEO ----------------------------------------------------- */
  function applyMeta() {
    var m = H.meta || {};
    if (m.name) document.title = m.name + (m.tagline ? " · " + m.tagline : "");
    if (m.lang) document.documentElement.setAttribute("lang", m.lang);
    setAttr('meta[name="description"]', "content", m.seoDescription);
    setAttr('meta[property="og:title"]', "content", m.name);
    setAttr('meta[property="og:description"]', "content", m.seoDescription);
    if (H.hero && H.hero.image) setAttr('meta[property="og:image"]', "content", H.hero.image);
    if (m.url) setAttr('meta[property="og:url"]', "content", m.url);
  }

  /* --- 3. Marke / Logo --------------------------------------------------- */
  function applyBrand() {
    var b = H.brand || {};
    var logo = $("#logo"), footerLogo = $("#footerLogo");
    if (b.logoImage) {
      var img = '<img src="' + b.logoImage + '" alt="' + ((H.meta && H.meta.name) || "") + '" style="height:40px" />';
      if (logo) logo.innerHTML = img;
    } else if (b.logoText) {
      if (logo) logo.textContent = b.logoText;
      if (footerLogo) footerLogo.textContent = b.logoText;
    }
  }

  /* --- 4. Hero ----------------------------------------------------------- */
  function renderHero() {
    var h = H.hero || {};
    if (h.image) { var bg = $("#heroBg"); if (bg) bg.style.backgroundImage = "url('" + h.image + "')"; }
    setText("#heroEyebrow", (H.meta && H.meta.tagline) || "");
    setText("#heroHeadline", h.headline);
    setText("#heroSubline", h.subline);
    var cta = $("#heroCta");
    if (cta && h.ctaText) cta.textContent = h.ctaText;
    // Externes Buchungssystem: CTA-Buttons dorthin verlinken
    var booking = H.booking || {};
    if (booking.type === "external" && booking.externalUrl) {
      [cta, $(".nav-cta")].forEach(function (n) {
        if (n) { n.setAttribute("href", booking.externalUrl); n.setAttribute("target", "_blank"); n.setAttribute("rel", "noopener"); }
      });
    } else if (cta && h.ctaHref) {
      cta.setAttribute("href", h.ctaHref);
    }
  }

  /* --- 5. Über uns ------------------------------------------------------- */
  function renderAbout() {
    var a = H.about || {};
    setText("#aboutTitle", a.title);
    var box = $("#aboutText");
    if (box && a.text) {
      box.innerHTML = "";
      String(a.text).split("\n\n").forEach(function (p) { box.appendChild(el("p", { text: p })); });
    }
    if (a.image) setAttr("#aboutImage", "src", a.image);
    setAttr("#aboutImage", "alt", a.title || "");
  }

  /* --- 6. Zimmer --------------------------------------------------------- */
  function renderRooms() {
    var grid = $("#roomsGrid"); if (!grid) return;
    (H.rooms || []).forEach(function (r) {
      var features = (r.features || []).map(function (f) { return el("span", { class: "room-tag", text: f }); });
      var card = el("article", { class: "room-card reveal" }, [
        el("div", { class: "room-img" }, [ el("img", { src: r.image, alt: r.name, loading: "lazy" }) ]),
        el("div", { class: "room-body" }, [
          el("div", { class: "room-head" }, [
            el("h3", { text: r.name }),
            r.size ? el("span", { class: "room-size", text: r.size }) : null
          ]),
          el("p", { class: "room-desc", text: r.description }),
          el("div", { class: "room-tags" }, features),
          el("div", { class: "room-foot" }, [
            el("span", { class: "room-price", text: r.price || "" }),
            el("a", { class: "room-link", href: "#kontakt", text: "Anfragen →" })
          ])
        ])
      ]);
      grid.appendChild(card);
    });
  }

  /* --- 7. Ausstattung ---------------------------------------------------- */
  function renderAmenities() {
    var grid = $("#amenitiesGrid"); if (!grid) return;
    (H.amenities || []).forEach(function (a) {
      grid.appendChild(el("div", { class: "amenity reveal" }, [
        el("div", { class: "amenity-icon", html: iconSvg(a.icon) }),
        el("h3", { text: a.title }),
        el("p", { text: a.text })
      ]));
    });
  }

  /* --- 8. Galerie + Lightbox --------------------------------------------- */
  var galleryImages = [];
  function renderGallery() {
    var grid = $("#galleryGrid"); if (!grid) return;
    galleryImages = H.gallery || [];
    galleryImages.forEach(function (src, i) {
      var fig = el("button", { class: "gallery-item reveal", type: "button", "aria-label": "Bild vergrößern" }, [
        el("img", { src: src, alt: "Galeriebild " + (i + 1), loading: "lazy" })
      ]);
      fig.addEventListener("click", function () { openLightbox(i); });
      grid.appendChild(fig);
    });
  }

  var lbIndex = 0;
  function openLightbox(i) {
    lbIndex = i;
    var lb = $("#lightbox"), img = $("#lightboxImg");
    if (!lb || !img || !galleryImages.length) return;
    img.src = galleryImages[i];
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    var lb = $("#lightbox");
    if (!lb) return;
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function stepLightbox(dir) {
    if (!galleryImages.length) return;
    lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
    $("#lightboxImg").src = galleryImages[lbIndex];
  }
  function initLightbox() {
    var close = $("#lightboxClose"), prev = $("#lightboxPrev"), next = $("#lightboxNext"), lb = $("#lightbox");
    if (close) close.addEventListener("click", closeLightbox);
    if (prev) prev.addEventListener("click", function () { stepLightbox(-1); });
    if (next) next.addEventListener("click", function () { stepLightbox(1); });
    if (lb) lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!$("#lightbox") || !$("#lightbox").classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  /* --- 9. Bewertungen ---------------------------------------------------- */
  function renderTestimonials() {
    var grid = $("#testimonialsGrid"); if (!grid) return;
    (H.testimonials || []).forEach(function (t) {
      grid.appendChild(el("figure", { class: "testimonial reveal" }, [
        el("div", { class: "stars", text: "★★★★★" }),
        el("blockquote", { text: "„" + t.quote + "“" }),
        el("figcaption", {}, [
          el("strong", { text: t.author }),
          t.source ? el("span", { text: " · " + t.source }) : null
        ])
      ]));
    });
  }

  /* --- 10. Lage ---------------------------------------------------------- */
  function renderLocation() {
    var l = H.location || {};
    setText("#locationAddress", l.address);
    setText("#locationDirections", l.directions);
    var query = l.mapsQuery || l.address || "";
    if (query) {
      var enc = encodeURIComponent(query);
      setAttr("#mapFrame", "src", "https://www.google.com/maps?q=" + enc + "&output=embed");
      setAttr("#mapsLink", "href", "https://www.google.com/maps/search/?api=1&query=" + enc);
    }
  }

  /* --- 11. Kontakt ------------------------------------------------------- */
  function renderContact() {
    var c = H.contact || {};
    var list = $("#contactList");
    if (list) {
      var rows = [
        c.phone ? { label: "Telefon", value: c.phone, href: "tel:" + c.phone.replace(/\s/g, "") } : null,
        c.email ? { label: "E-Mail", value: c.email, href: "mailto:" + c.email } : null,
        c.address ? { label: "Adresse", value: c.address } : null,
        c.hours ? { label: "Rezeption", value: c.hours } : null
      ];
      rows.forEach(function (r) {
        if (!r) return;
        list.appendChild(el("li", {}, [
          el("span", { class: "contact-label", text: r.label }),
          r.href ? el("a", { href: r.href, text: r.value }) : el("span", { text: r.value })
        ]));
      });
    }
    // Social
    var s = H.social || {}, sBox = $("#contactSocial");
    if (sBox) {
      var links = [
        { key: "instagram", label: "Instagram" },
        { key: "facebook", label: "Facebook" },
        { key: "tripadvisor", label: "TripAdvisor" }
      ];
      links.forEach(function (li) {
        if (s[li.key]) sBox.appendChild(el("a", { href: s[li.key], target: "_blank", rel: "noopener", text: li.label }));
      });
    }
  }

  /* --- 12. Kontaktformular ----------------------------------------------- */
  function initForm() {
    var form = $("#contactForm"), status = $("#formStatus");
    if (!form) return;
    var booking = H.booking || {}, contact = H.contact || {};

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);

      // Variante A: Formspree-Endpoint hinterlegt → direkt senden
      if (booking.formEndpoint) {
        status.textContent = "Wird gesendet …";
        fetch(booking.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (res) {
            if (res.ok) { form.reset(); status.textContent = "Vielen Dank! Ihre Anfrage wurde gesendet."; status.className = "form-status ok"; }
            else { throw new Error("fail"); }
          })
          .catch(function () { status.textContent = "Senden fehlgeschlagen. Bitte per E-Mail an " + (contact.email || "") + "."; status.className = "form-status err"; });
        return;
      }

      // Variante B (Standard): vorausgefüllte E-Mail öffnen
      var subject = "Anfrage über die Website – " + (data.get("name") || "");
      var body =
        "Name: " + (data.get("name") || "") + "\n" +
        "E-Mail: " + (data.get("email") || "") + "\n" +
        "Anreise: " + (data.get("anreise") || "") + "\n" +
        "Abreise: " + (data.get("abreise") || "") + "\n\n" +
        "Nachricht:\n" + (data.get("nachricht") || "");
      var mail = "mailto:" + (contact.email || "") +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = mail;
      status.textContent = "Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die Nachricht ab.";
      status.className = "form-status ok";
    });
  }

  /* --- 13. Footer -------------------------------------------------------- */
  function renderFooter() {
    setText("#footerYear", String(new Date().getFullYear()));
    setText("#footerName", (H.meta && H.meta.name) || "");
    setText("#footerTagline", (H.meta && H.meta.tagline) || "");
  }

  /* --- 14. Navigation: mobil, sticky, smooth-scroll ---------------------- */
  function initNav() {
    var toggle = $("#navToggle"), nav = $("#mainNav"), header = $("#header");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("open"); toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
    // Sticky-Zustand
    function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 40); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Smooth-Scroll für interne Anker
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
    });
  }

  /* --- 15. Scroll-Reveal-Animation --------------------------------------- */
  function initReveal() {
    var items = [].slice.call(document.querySelectorAll(".reveal"));
    function showAll() { items.forEach(function (i) { i.classList.add("visible"); }); }

    // Ohne IntersectionObserver: alles direkt sichtbar (nie „hängen" bleiben)
    if (!("IntersectionObserver" in window)) { showAll(); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });

    // Sicherheitsnetz 1: alles, was schon im/über dem Sichtfenster liegt, sofort zeigen
    function revealInView() {
      items.forEach(function (i) {
        if (i.getBoundingClientRect().top < window.innerHeight) i.classList.add("visible");
      });
    }
    revealInView();
    window.addEventListener("load", revealInView);

    // Sicherheitsnetz 2: falls JS/Observer aus irgendeinem Grund nicht greift,
    // spätestens nach 2,5 s garantiert alles einblenden
    setTimeout(showAll, 2500);
  }

  /* --- Start ------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme();
    applyMeta();
    applyBrand();
    renderHero();
    renderAbout();
    renderRooms();
    renderAmenities();
    renderGallery();
    renderTestimonials();
    renderLocation();
    renderContact();
    renderFooter();
    initLightbox();
    initForm();
    initNav();
    initReveal();
  });
})();
