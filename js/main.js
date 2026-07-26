/* =============================================================================
   HOTEL-WEBSITE · RENDER- & INTERAKTIONS-LOGIK
   -----------------------------------------------------------------------------
   Liest window.HOTEL aus js/content.js, baut die Seite auf, injiziert die
   SEO-Strukturdaten (Hotel + FAQ) und steuert alle Animationen:
   Hero-Fade, gepinnte Erlebnis-Kapitel, Diagramm, Count-up, Reveals.
   Muss normalerweise nicht angefasst werden.
   ============================================================================= */
(function () {
  "use strict";
  var H = window.HOTEL || {};
  var REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Helfer ------------------------------------------------------------ */
  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k === "style") n.style.cssText = attrs[k];
      else if (k.indexOf("on") === 0 && typeof attrs[k] === "function") n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] != null && attrs[k] !== false) n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function setText(s, v) { var n = $(s); if (n && v != null) n.textContent = v; }
  function setAttr(s, a, v) { var n = $(s); if (n && v != null) n.setAttribute(a, v); }
  function abs(url) {
    if (!url || /^https?:\/\//.test(url)) return url;
    var base = (H.meta && H.meta.url) ? H.meta.url.replace(/\/$/, "") : "";
    return base ? base + "/" + url.replace(/^\//, "") : url;
  }

  /* --- Icons --------------------------------------------------------------- */
  var W = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">';
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
    reception: '<path d="M3 21h18"/><path d="M5 21V10l7-4 7 4v11"/><path d="M9 21v-6h6v6"/>',
    /* Trust-Icons */
    tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    check: '<path d="M20 6L9 17l-5-5"/>'
  };
  function icon(name) { return W + (ICONS[name] || ICONS.check) + "</svg>"; }

  /* --- Theme, Meta, Strukturdaten ------------------------------------------- */
  function applyTheme() {
    var t = H.theme || {}, r = document.documentElement.style, map = {
      colorInk: "--color-ink", colorBg: "--color-bg", colorSand: "--color-sand",
      colorSurface: "--color-surface", colorAccent: "--color-accent", colorAccentDark: "--color-accent-dark",
      fontDisplay: "--font-display", fontBody: "--font-body"
    };
    Object.keys(map).forEach(function (k) { if (t[k]) r.setProperty(map[k], t[k]); });
    var bg = $("#bgFix");
    if (bg) bg.style.backgroundImage = "url('" + (t.backgroundImage || (H.hero && H.hero.image) || "") + "')";
  }
  function applyMeta() {
    var m = H.meta || {};
    if (m.seoTitle) document.title = m.seoTitle;
    else if (m.name) document.title = m.name + (m.tagline ? " · " + m.tagline : "");
    if (m.lang) document.documentElement.setAttribute("lang", m.lang);
    setAttr('meta[name="description"]', "content", m.seoDescription);
    setAttr('meta[property="og:title"]', "content", m.name + (m.tagline ? " · " + m.tagline : ""));
    setAttr('meta[property="og:description"]', "content", m.seoDescription);
    setAttr('meta[property="og:site_name"]', "content", m.name);
    if (H.hero && H.hero.image) setAttr('meta[property="og:image"]', "content", abs(H.hero.image));
    if (m.url) { setAttr('meta[property="og:url"]', "content", m.url); setAttr('link[rel="canonical"]', "href", m.url); }
    if (H.theme && H.theme.colorAccent) setAttr('meta[name="theme-color"]', "content", H.theme.colorAccent);
  }
  function injectJsonLd() {
    var m = H.meta || {}, loc = H.location || {}, c = H.contact || {}, rt = H.rating || {};
    var hotel = {
      "@context": "https://schema.org", "@type": "Hotel",
      name: m.name, description: m.seoDescription, url: m.url || undefined,
      telephone: c.phone, priceRange: m.priceRange,
      image: H.hero && H.hero.image ? [abs(H.hero.image)] : undefined,
      address: { "@type": "PostalAddress", streetAddress: loc.street, addressLocality: loc.city, postalCode: loc.postalCode, addressCountry: loc.country },
      geo: (loc.lat && loc.lng) ? { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng } : undefined,
      amenityFeature: (H.amenities || []).map(function (a) { return { "@type": "LocationFeatureSpecification", name: a.title, value: true }; })
    };
    if (rt.value && rt.count) hotel.aggregateRating = { "@type": "AggregateRating", ratingValue: rt.value, reviewCount: rt.count, bestRating: 5 };
    var n = $("#ldHotel"); if (n) n.textContent = JSON.stringify(hotel);

    if (H.faq && H.faq.length) {
      var faq = {
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: H.faq.map(function (f) {
          return { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } };
        })
      };
      var fn = $("#ldFaq"); if (fn) fn.textContent = JSON.stringify(faq);
    }
  }

  /* --- Brand & Hero ----------------------------------------------------------- */
  function applyBrand() {
    var b = H.brand || {};
    if (b.logoImage) { var lg = $("#logo"); if (lg) lg.innerHTML = '<img src="' + b.logoImage + '" alt="' + ((H.meta && H.meta.name) || "") + '" style="height:36px">'; }
    else if (b.logoText) { setText("#logo", b.logoText); setText("#footerLogo", b.logoText); }
  }
  function renderHero() {
    var h = H.hero || {};
    if (h.image) { var bg = $("#heroBg"); if (bg) bg.style.backgroundImage = "url('" + h.image + "')"; }
    setText("#heroKicker", h.kicker);
    setText("#heroTitle", h.headline);
    setText("#heroSub", h.subline);
    var c1 = $("#heroCta1"), c2 = $("#heroCta2");
    if (c1 && h.ctaPrimaryText) { c1.textContent = h.ctaPrimaryText; if (h.ctaPrimaryHref) c1.setAttribute("href", h.ctaPrimaryHref); }
    if (c2 && h.ctaSecondaryText) { c2.textContent = h.ctaSecondaryText; if (h.ctaSecondaryHref) c2.setAttribute("href", h.ctaSecondaryHref); }
    var bk = H.booking || {};
    if (bk.type === "external" && bk.externalUrl) {
      [c1, $("#headerCta"), $(".mobile-cta .btn")].forEach(function (n) {
        if (n) { n.setAttribute("href", bk.externalUrl); n.setAttribute("target", "_blank"); n.setAttribute("rel", "noopener"); }
      });
    }
  }

  /* Headline wird beim Scrollen transparent und gleitet nach oben */
  function initHeroFade() {
    var inner = $("#heroInner"); if (!inner || REDUCED) return;
    var ticking = false;
    function update() {
      var y = window.scrollY, range = window.innerHeight * 0.6;
      var p = Math.min(1, y / range);
      inner.style.opacity = String(1 - p);
      inner.style.transform = "translateY(" + (-p * 40) + "px)";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
  }

  /* --- Kennzahlen + Count-up ------------------------------------------------------ */
  function renderStats() {
    var wrap = $("#statsInner"); if (!wrap || !H.stats) return;
    H.stats.forEach(function (s) {
      wrap.appendChild(el("div", { class: "stat" }, [
        el("div", { class: "stat-value", "data-value": s.value, "data-suffix": s.suffix || "", text: s.value + (s.suffix || "") }),
        el("div", { class: "stat-label", text: s.label })
      ]));
    });
  }
  function countUp(node) {
    var raw = node.getAttribute("data-value"), suffix = node.getAttribute("data-suffix") || "";
    var num = parseFloat(raw); if (isNaN(num) || REDUCED) return;
    var dec = (raw.split(".")[1] || "").length, dur = 1100, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1), val = num * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3)));
      node.textContent = val.toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(step); else node.textContent = num.toFixed(dec) + suffix;
    }
    requestAnimationFrame(step);
  }

  /* --- Vertrauens-Badges ------------------------------------------------------------ */
  function renderTrust() {
    var wrap = $("#trustStrip"); if (!wrap || !H.trust) return;
    H.trust.forEach(function (t) {
      wrap.appendChild(el("div", { class: "trust-item reveal" }, [
        el("span", { class: "trust-icon", html: icon(t.icon) }),
        el("div", {}, [
          el("strong", { text: t.title }),
          el("span", { text: t.text })
        ])
      ]));
    });
  }

  /* --- Über uns ----------------------------------------------------------------------- */
  function renderAbout() {
    var a = H.about || {};
    setText("#aboutKicker", a.kicker);
    setText("#aboutTitle", a.title);
    setText("#aboutLead", a.lead);
    var body = $("#aboutBody");
    if (body && a.body) { body.innerHTML = ""; String(a.body).split("\n\n").forEach(function (p) { body.appendChild(el("p", { text: p })); }); }
    if (a.signatureName) {
      var sig = $("#aboutSignature");
      if (sig) { sig.textContent = a.signatureName; if (a.signatureRole) sig.appendChild(el("span", { text: a.signatureRole })); }
    }
    if (a.image) setAttr("#aboutImage", "src", a.image);
    setAttr("#aboutImage", "alt", a.imageAlt || a.title || "");
  }

  /* --- Erlebnisse: gepinnte Scroll-Kapitel --------------------------------------------- */
  function renderExperiences() {
    var texts = $("#expTexts"), visuals = $("#expVisuals"), progress = $("#expProgress");
    if (!texts || !H.experiences) return;
    H.experiences.forEach(function (e, i) {
      texts.appendChild(el("div", { class: "exp-step" + (i === 0 ? " active" : ""), "data-i": i }, [
        // Bild im Step: nur sichtbar auf Mobile / reduced-motion (Fallback ohne Pinning)
        el("figure", { class: "exp-step-media" }, [ el("img", { src: e.image, alt: e.imageAlt || e.title, loading: "lazy" }) ]),
        el("p", { class: "kicker", text: e.kicker }),
        el("h3", { text: e.title }),
        el("p", { text: e.text })
      ]));
      if (visuals) visuals.appendChild(el("div", { class: "exp-visual" + (i === 0 ? " active" : "") }, [
        el("img", { src: e.image, alt: "", loading: "lazy" })
      ]));
      if (progress) progress.appendChild(el("i", { class: i === 0 ? "active" : "" }));
    });
  }
  function initExperiencesPin() {
    var section = $("#erlebnisse"); if (!section || REDUCED) return;
    var steps = section.querySelectorAll(".exp-step");
    var visuals = section.querySelectorAll(".exp-visual");
    var dots = section.querySelectorAll(".exp-progress i");
    if (!steps.length) return;
    var current = 0, ticking = false;
    function setActive(i) {
      if (i === current) return;
      current = i;
      steps.forEach(function (s, k) { s.classList.toggle("active", k === i); });
      visuals.forEach(function (v, k) { v.classList.toggle("active", k === i); });
      dots.forEach(function (d, k) { d.classList.toggle("active", k === i); });
    }
    function update() {
      var rect = section.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      if (total <= 0) { ticking = false; return; }
      var progress = Math.min(1, Math.max(0, -rect.top / total));
      var idx = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActive(idx);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* --- Zimmer: grosse Panels mit Zweitbild ------------------------------------------------ */
  function renderRooms() {
    var list = $("#roomsList"); if (!list) return;
    (H.rooms || []).forEach(function (r) {
      var features = (r.features || []).map(function (f) {
        return el("li", {}, [ el("span", { html: icon("check"), style: "display:inline-flex" }), f ]);
      });
      list.appendChild(el("article", { class: "room-panel reveal" }, [
        el("div", { class: "room-visuals" }, [
          r.size ? el("span", { class: "room-badge", text: r.size + (r.occupancy ? " · " + r.occupancy : "") }) : null,
          el("div", { class: "room-img-main" }, [ el("img", { src: r.image, alt: r.imageAlt || r.name, loading: "lazy" }) ]),
          r.image2 ? el("div", { class: "room-img-detail" }, [ el("img", { src: r.image2, alt: r.image2Alt || "", loading: "lazy" }) ]) : null
        ]),
        el("div", { class: "room-info" }, [
          el("h3", { text: r.name }),
          r.occupancy ? el("p", { class: "room-meta", text: r.size + " · " + r.occupancy }) : null,
          el("p", { class: "room-desc", text: r.description }),
          el("ul", { class: "room-features" }, features),
          el("div", { class: "room-foot" }, [
            el("span", { class: "room-price" }, [ document.createTextNode(r.price || ""), r.priceNote ? el("small", { text: " " + r.priceNote }) : null ]),
            el("a", { class: "room-link", href: "#buchen" }, [ "Anfragen", el("span", { text: "→" }) ])
          ])
        ])
      ]));
    });
  }

  /* --- Bewertungs-Diagramm (0 bis 99) ------------------------------------------------------- */
  function renderRatingChart() {
    var wrap = $("#ratingChart"), rb = H.ratingBreakdown;
    if (!wrap || !rb || !rb.items) return;
    var max = rb.max || 99;
    rb.items.forEach(function (it) {
      var pct = Math.max(0, Math.min(100, (it.value / max) * 100));
      wrap.appendChild(el("div", { class: "chart-row", title: it.label + ": " + it.value + " von " + max }, [
        el("span", { class: "chart-label", text: it.label }),
        el("div", { class: "chart-track" }, [ el("div", { class: "chart-bar", "data-w": pct + "%" }) ]),
        el("span", { class: "chart-value", text: String(it.value) })
      ]));
    });
    setText("#chartNote", rb.note || "");
    // Balken animieren, sobald sichtbar
    if ("IntersectionObserver" in window && !REDUCED) {
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting) {
            wrap.querySelectorAll(".chart-bar").forEach(function (b, i) {
              setTimeout(function () { b.style.width = b.getAttribute("data-w"); }, i * 90);
            });
            io.disconnect();
          }
        });
      }, { threshold: 0.3 });
      io.observe(wrap);
    } else {
      wrap.querySelectorAll(".chart-bar").forEach(function (b) { b.style.width = b.getAttribute("data-w"); });
    }
  }

  /* --- Gästestimmen ---------------------------------------------------------------------------- */
  function renderTestimonials() {
    var grid = $("#testimonialsGrid");
    if (grid) (H.testimonials || []).forEach(function (t, i) {
      grid.appendChild(el("figure", { class: "testimonial reveal", style: "transition-delay:" + (i * 80) + "ms" }, [
        el("div", { class: "stars", text: "★★★★★".slice(0, t.rating || 5) }),
        el("blockquote", { text: "„" + t.quote + "“" }),
        el("figcaption", {}, [ el("strong", { text: t.author }), t.source ? el("span", { text: " · " + t.source }) : null ])
      ]));
    });
    var rt = H.rating || {};
    if (rt.value) { var badge = $("#ratingBadge"); if (badge) badge.innerHTML = "<strong>★ " + rt.value + "</strong> von 5 · " + (rt.count ? rt.count + " Bewertungen" : "") + (rt.source ? " · " + rt.source : ""); }
  }

  /* --- Galerie + Lightbox ------------------------------------------------------------------------ */
  var gallery = [];
  function renderGallery() {
    var grid = $("#galleryGrid"); if (!grid) return;
    gallery = (H.gallery || []).map(function (g) { return typeof g === "string" ? { src: g, alt: "" } : g; });
    gallery.forEach(function (g, i) {
      var btn = el("button", { class: "gallery-item reveal", type: "button", "aria-label": "Bild vergrößern: " + (g.alt || ""), style: "transition-delay:" + ((i % 4) * 60) + "ms" }, [
        el("img", { src: g.src, alt: g.alt || ("Galeriebild " + (i + 1)), loading: "lazy" })
      ]);
      btn.addEventListener("click", function () { openLightbox(i); });
      grid.appendChild(btn);
    });
  }
  var lbi = 0;
  function openLightbox(i) { lbi = i; var lb = $("#lightbox"), im = $("#lightboxImg"); if (!lb || !gallery.length) return; im.src = gallery[i].src; im.alt = gallery[i].alt || ""; lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
  function closeLightbox() { var lb = $("#lightbox"); if (lb) { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; } }
  function stepLb(d) { if (!gallery.length) return; lbi = (lbi + d + gallery.length) % gallery.length; $("#lightboxImg").src = gallery[lbi].src; $("#lightboxImg").alt = gallery[lbi].alt || ""; }
  function initLightbox() {
    var b;
    if (b = $("#lightboxClose")) b.addEventListener("click", closeLightbox);
    if (b = $("#lightboxPrev")) b.addEventListener("click", function () { stepLb(-1); });
    if (b = $("#lightboxNext")) b.addEventListener("click", function () { stepLb(1); });
    if (b = $("#lightbox")) b.addEventListener("click", function (e) { if (e.target === b) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      var lb = $("#lightbox"); if (!lb || !lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox(); if (e.key === "ArrowLeft") stepLb(-1); if (e.key === "ArrowRight") stepLb(1);
    });
  }

  /* --- Ausstattung -------------------------------------------------------------------------------- */
  function renderAmenities() {
    var grid = $("#amenitiesGrid"); if (!grid) return;
    (H.amenities || []).forEach(function (a, i) {
      grid.appendChild(el("div", { class: "amenity reveal", style: "transition-delay:" + ((i % 3) * 70) + "ms" }, [
        el("div", { class: "amenity-icon", html: icon(a.icon) }),
        el("h3", { text: a.title }),
        el("p", { text: a.text })
      ]));
    });
  }

  /* --- Umgebung ------------------------------------------------------------------------------------ */
  function renderNearby() {
    var grid = $("#nearbyGrid"); if (!grid || !H.nearby) return;
    H.nearby.forEach(function (n, i) {
      grid.appendChild(el("article", { class: "near-card reveal", style: "transition-delay:" + (i * 80) + "ms" }, [
        n.distance ? el("span", { class: "near-dist", text: n.distance }) : null,
        el("h3", { text: n.title }),
        el("p", { text: n.text })
      ]));
    });
  }

  /* --- FAQ ------------------------------------------------------------------------------------------ */
  function renderFaq() {
    var list = $("#faqList"); if (!list || !H.faq) return;
    H.faq.forEach(function (f) {
      list.appendChild(el("details", { class: "faq-item reveal" }, [
        el("summary", { text: f.q }),
        el("p", { text: f.a })
      ]));
    });
  }

  /* --- Kontakt (Buchungsblock) ------------------------------------------------------------------------ */
  function renderContact() {
    var c = H.contact || {}, list = $("#contactList");
    if (list) [
      c.phone ? { l: "Telefon", v: c.phone, h: "tel:" + c.phone.replace(/\s/g, "") } : null,
      c.email ? { l: "E-Mail", v: c.email, h: "mailto:" + c.email } : null,
      c.hours ? { l: "Rezeption", v: c.hours } : null
    ].forEach(function (r) {
      if (!r) return;
      list.appendChild(el("li", {}, [ el("span", { class: "contact-label", text: r.l }), r.h ? el("a", { href: r.h, text: r.v }) : el("span", { text: r.v }) ]));
    });
    var s = H.social || {}, box = $("#contactSocial");
    if (box) [["instagram", "Instagram"], ["facebook", "Facebook"], ["tripadvisor", "TripAdvisor"]].forEach(function (p) {
      if (s[p[0]]) box.appendChild(el("a", { href: s[p[0]], target: "_blank", rel: "noopener", text: p[1] }));
    });
  }

  /* --- Formular ------------------------------------------------------------------------------------------ */
  function initForm() {
    var form = $("#contactForm"), status = $("#formStatus"); if (!form) return;
    var bk = H.booking || {}, c = H.contact || {};
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      if (bk.formEndpoint) {
        status.textContent = "Wird gesendet …"; status.className = "form-status";
        fetch(bk.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } })
          .then(function (res) { if (res.ok) { form.reset(); status.textContent = "Vielen Dank! Ihre Anfrage ist bei uns eingegangen."; status.className = "form-status ok"; } else throw 0; })
          .catch(function () { status.textContent = "Senden fehlgeschlagen. Bitte schreiben Sie an " + (c.email || "") + "."; status.className = "form-status err"; });
        return;
      }
      var subject = "Anfrage über die Website: " + (d.get("name") || "");
      var body = "Name: " + (d.get("name") || "") + "\nE-Mail: " + (d.get("email") || "") +
        "\nAnreise: " + (d.get("anreise") || "") + "\nAbreise: " + (d.get("abreise") || "") +
        "\nGäste: " + (d.get("gaeste") || "") + "\n\nNachricht:\n" + (d.get("nachricht") || "");
      window.location.href = "mailto:" + (c.email || "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      status.textContent = "Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die Nachricht noch ab.";
      status.className = "form-status ok";
    });
  }

  /* --- Footer ----------------------------------------------------------------------------------------------- */
  function renderFooter() {
    var c = H.contact || {}, loc = H.location || {};
    setText("#footerYear", String(new Date().getFullYear()));
    setText("#footerName", (H.meta && H.meta.name) || "");
    setText("#footerTagline", (H.meta && H.meta.tagline) || "");
    setText("#footerAddress", loc.address || c.address || "");
    setText("#footerDirections", loc.directions || "");
    var fp = $("#footerPhone");
    if (fp && c.phone) fp.innerHTML = '<a href="tel:' + c.phone.replace(/\s/g, "") + '">' + c.phone + "</a>";
    var fe = $("#footerEmail");
    if (fe && c.email) fe.innerHTML = '<a href="mailto:' + c.email + '">' + c.email + "</a>";
  }

  /* --- Navigation --------------------------------------------------------------------------------------------- */
  function initNav() {
    var toggle = $("#navToggle"), nav = $("#mainNav"), header = $("#header");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open"); toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
        document.body.style.overflow = open ? "hidden" : "";
      });
      nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }); });
    }
    function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 30); }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var t = document.querySelector(id); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" }); } });
    });
  }

  /* --- Hero-Parallax -------------------------------------------------------------------------------------------- */
  function initParallax() {
    var bg = $("#heroBg"); if (!bg || REDUCED) return;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () { var y = window.scrollY; if (y < window.innerHeight) bg.style.transform = "translateY(" + (y * 0.18) + "px) scale(1.06)"; ticking = false; });
    }, { passive: true });
  }

  /* --- Mobile Buchungsleiste --------------------------------------------------------------------------------------- */
  function initMobileCta() {
    var bar = $("#mobileCta"), price = $("#mobileCtaPrice"); if (!bar) return;
    var rooms = H.rooms || [];
    if (price && rooms.length) price.innerHTML = rooms[0].price + " <small>" + (rooms[0].priceNote || "") + "</small>";
    var booking = $("#buchen");
    window.addEventListener("scroll", function () {
      var past = window.scrollY > window.innerHeight * 0.7;
      var atBooking = booking && booking.getBoundingClientRect().top < window.innerHeight * 0.9;
      bar.classList.toggle("show", past && !atBooking);
    }, { passive: true });
  }

  /* --- Reveal (robust) ------------------------------------------------------------------------------------------------ */
  function initReveal() {
    var items = [].slice.call(document.querySelectorAll(".reveal"));
    function showAll() { items.forEach(function (i) { i.classList.add("visible"); }); }
    if (!("IntersectionObserver" in window) || REDUCED) { showAll(); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          if (en.target.classList.contains("stat-value")) countUp(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
    [].slice.call(document.querySelectorAll(".stat-value")).forEach(function (i) { io.observe(i); });
    function inView() { items.forEach(function (i) { if (i.getBoundingClientRect().top < window.innerHeight) i.classList.add("visible"); }); }
    inView(); window.addEventListener("load", inView);
    setTimeout(showAll, 2600);
  }

  /* --- Start ---------------------------------------------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(); applyMeta(); injectJsonLd(); applyBrand();
    renderHero(); renderStats(); renderTrust(); renderAbout(); renderExperiences();
    renderRooms(); renderRatingChart(); renderTestimonials(); renderGallery();
    renderAmenities(); renderNearby(); renderFaq(); renderContact(); renderFooter();
    initLightbox(); initForm(); initNav(); initParallax(); initMobileCta();
    initHeroFade(); initExperiencesPin(); initReveal();
  });
})();
