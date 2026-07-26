/* =============================================================================
   HOTEL-WEBSITE · ZENTRALE INHALTSDATEI
   -----------------------------------------------------------------------------
   Das ist die EINZIGE Datei, die du pro Hotel ausfüllen musst.
   Ändere Texte, Preise, Kontaktdaten und Bildpfade – Layout, Design, Technik,
   SEO (inkl. Google-Rich-Results) passen sich automatisch an.

   Reihenfolge in dieser Datei:
   1 Grunddaten/SEO · 2 Design · 3 Logo · 4 Hero · 5 Kennzahlen · 6 Bewertung
   7 Über-uns · 8 Erlebnisse · 9 Zimmer · 10 Ausstattung · 11 Galerie
   12 Stimmen · 13 Umgebung · 14 Lage · 15 Kontakt · 16 Buchung · 17 Social · 18 Recht
   ============================================================================= */

window.HOTEL = {

  /* --- 1. Grunddaten & SEO ------------------------------------------------ */
  meta: {
    name: "Hotel Seeblick",
    tagline: "Boutique-Hotel am See",
    // SEO-Titel (Browser-Tab & Google-Ergebnis). Kurz, mit Ort & Nutzen:
    seoTitle: "Hotel Seeblick · Boutique-Hotel direkt am See in Rapperswil",
    seoDescription:
      "Stilvoll übernachten direkt am Seeufer: das Hotel Seeblick in Rapperswil " +
      "vereint moderne Zimmer, regionale Küche und einen Panoramablick, der bleibt. " +
      "Jetzt Verfügbarkeit anfragen.",
    url: "https://example.com",       // spätere Domain (für SEO/OpenGraph/Sitemap)
    lang: "de",
    priceRange: "€€",                 // €, €€, €€€ – erscheint in Google
    currency: "CHF"
  },

  /* --- 2. Design (Farben & Schriften) ------------------------------------- */
  // Tausche einfach die Hex-Werte. --accent ist die Markenfarbe (Buttons/Links).
  theme: {
    colorInk:        "#1b1a17",   // Haupttext & Überschriften
    colorBg:         "#faf6ef",   // warmer Elfenbein-Hintergrund
    colorSand:       "#f1e9dc",   // abgesetzte Sektionen
    colorSurface:    "#ffffff",   // Karten
    colorAccent:     "#1f4a3f",   // Marke: tiefes Kiefern-/Seegrün
    colorAccentDark: "#163a31",   // Hover
    fontDisplay:     "'Fraunces', 'Cormorant Garamond', Georgia, serif",
    fontBody:        "'Inter', system-ui, -apple-system, sans-serif"
  },

  /* --- 3. Logo / Marke ---------------------------------------------------- */
  brand: {
    logoText: "Seeblick",
    logoImage: ""                 // optional: "images/logo.svg"
  },

  /* --- 4. Hero ------------------------------------------------------------ */
  hero: {
    image: "images/hero.svg",
    imageAlt: "Blick über den See auf das Hotel Seeblick in der Abendsonne",
    kicker: "Rapperswil · Direkt am Seeufer",
    headline: "Wo der Tag am Wasser beginnt.",
    subline: "Ein Boutique-Hotel für alle, die Ruhe, guten Geschmack und den " +
             "schönsten Blick weit und breit suchen.",
    ctaPrimaryText: "Verfügbarkeit anfragen",
    ctaPrimaryHref: "#buchen",
    ctaSecondaryText: "Zimmer entdecken",
    ctaSecondaryHref: "#zimmer"
  },

  /* --- 5. Kennzahlen (kleine Trust-Zeile unter dem Hero) ------------------ */
  // Werte mit einer Zahl werden sanft hochgezählt (z.B. "18", "1932", "4.9").
  stats: [
    { value: "4.9", label: "★ Gästebewertung" },
    { value: "18",  label: "Zimmer & Suiten" },
    { value: "1",   suffix: " Min.", label: "zum Seeufer" },
    { value: "1932", label: "familiengeführt seit" }
  ],

  /* --- 6. Bewertung (für Social Proof & Google-Rich-Results) -------------- */
  rating: {
    value: 4.9,      // Durchschnitt
    count: 214,      // Anzahl Bewertungen
    source: "Google & Booking.com"
  },

  /* --- 7. Über uns / Willkommen (Story) ----------------------------------- */
  about: {
    kicker: "Willkommen",
    title: "Ein Haus mit Blick – und mit Haltung.",
    lead: "Seit drei Generationen empfangen wir unsere Gäste wie Freunde.",
    body:
      "Eingebettet zwischen sanften Hügeln und glitzerndem Wasser verbindet das " +
      "Hotel Seeblick zeitgemässe Ruhe mit herzlicher Gastfreundschaft. Jedes " +
      "Detail – von der regionalen Küche bis zum Leinen auf dem Bett – ist mit " +
      "Bedacht gewählt.\n\n" +
      "Ob Kurzurlaub, Feier oder Geschäftsreise: Bei uns kommen Sie an, atmen durch " +
      "und fühlen sich sofort zu Hause.",
    image: "images/about.svg",
    imageAlt: "Gemütliche Lounge des Hotels mit Blick auf den See",
    signatureName: "Familie Muster",
    signatureRole: "Gastgeberinnen & Gastgeber"
  },

  /* --- 8. Erlebnisse (Bild/Text im Wechsel – das Herz des Storytellings) --- */
  experiences: [
    {
      kicker: "Am Wasser",
      title: "Aufwachen mit Seeblick",
      text: "Öffnen Sie die Balkontür und der Morgen gehört Ihnen: stiller See, " +
            "erste Sonne, ein Kaffee auf der Terrasse. Näher ans Wasser geht kaum.",
      image: "images/exp-1.svg",
      imageAlt: "Balkon mit Panoramablick über den ruhigen Morgensee"
    },
    {
      kicker: "Genuss",
      title: "Küche mit Charakter",
      text: "Unsere Küche kocht saisonal und regional – ehrlich, frisch und mit " +
            "Liebe zum Handwerk. Am Abend ein Glas Wein, dazu Licht über dem See.",
      image: "images/exp-2.svg",
      imageAlt: "Regionales Gericht, angerichtet auf einem Holztisch"
    },
    {
      kicker: "Ruhe",
      title: "Wellness & Weite",
      text: "Sauna, warmes Holz, weicher Bademantel – und dahinter immer der See. " +
            "Zeit, die nur Ihnen gehört.",
      image: "images/exp-3.svg",
      imageAlt: "Ruhiger Wellnessbereich mit Sauna und Blick ins Grüne"
    }
  ],

  /* --- 9. Zimmer & Suiten ------------------------------------------------- */
  rooms: [
    {
      name: "Doppelzimmer Komfort",
      description: "Gemütliches Zimmer mit französischem Balkon und Blick ins Grüne.",
      price: "ab CHF 120",
      priceNote: "/ Nacht",
      size: "24 m²",
      occupancy: "2 Personen",
      image: "images/room-1.svg",
      imageAlt: "Modern eingerichtetes Doppelzimmer mit hellem Holz",
      features: ["Kingsize-Bett", "Kostenloses WLAN", "Regendusche"]
    },
    {
      name: "Juniorsuite Seeblick",
      description: "Grosszügige Suite mit eigenem Balkon und direktem Blick auf den See.",
      price: "ab CHF 190",
      priceNote: "/ Nacht",
      size: "38 m²",
      occupancy: "2–3 Personen",
      image: "images/room-2.svg",
      imageAlt: "Helle Juniorsuite mit Balkon und Seeblick",
      features: ["Balkon mit Seeblick", "Sitzecke", "Nespresso"]
    },
    {
      name: "Panorama-Suite",
      description: "Unser Highlight: Wohnbereich, Badewanne am Fenster, Rundumblick.",
      price: "ab CHF 260",
      priceNote: "/ Nacht",
      size: "55 m²",
      occupancy: "2–4 Personen",
      image: "images/room-3.svg",
      imageAlt: "Grosse Panorama-Suite mit freistehender Badewanne am Fenster",
      features: ["Freistehende Badewanne", "Wohnbereich", "Minibar inklusive"]
    }
  ],

  /* --- 10. Ausstattung & Services ----------------------------------------- */
  // icon: siehe Liste am Dateiende (ICONS)
  amenities: [
    { icon: "wifi",       title: "Kostenloses WLAN",  text: "Schnell im ganzen Haus." },
    { icon: "breakfast",  title: "Frühstücksbuffet",  text: "Regional & frisch, bis 11 Uhr." },
    { icon: "parking",    title: "Parkplätze",        text: "Kostenlos direkt am Hotel." },
    { icon: "spa",        title: "Wellness & Sauna",  text: "Entspannen mit Seeblick." },
    { icon: "restaurant", title: "Restaurant",        text: "Saisonale Küche der Region." },
    { icon: "pet",        title: "Haustiere",         text: "Ihr Vierbeiner ist willkommen." }
  ],

  /* --- 11. Galerie -------------------------------------------------------- */
  // Objekte mit Alt-Text (gut für SEO). Reine Strings gehen auch.
  gallery: [
    { src: "images/gallery-1.svg", alt: "Aussenansicht des Hotels am Seeufer" },
    { src: "images/gallery-2.svg", alt: "Detail der gemütlichen Zimmereinrichtung" },
    { src: "images/gallery-3.svg", alt: "Terrasse mit Blick auf den See" },
    { src: "images/gallery-4.svg", alt: "Regionales Frühstück am Morgen" },
    { src: "images/gallery-5.svg", alt: "Wellnessbereich mit Sauna" },
    { src: "images/gallery-6.svg", alt: "Sonnenuntergang über dem See" }
  ],

  /* --- 12. Gästestimmen --------------------------------------------------- */
  testimonials: [
    { quote: "Der schönste Blick, den wir je aus einem Hotelzimmer hatten. Wir kommen wieder!",
      author: "Familie Berger", source: "Google", rating: 5 },
    { quote: "Herzlicher Empfang, tolles Frühstück und absolute Ruhe. Rundum perfekt.",
      author: "Sabine K.", source: "Booking.com", rating: 5 },
    { quote: "Stilvoll eingerichtet und liebevoll geführt. Ein echtes Kleinod am See.",
      author: "Thomas M.", source: "TripAdvisor", rating: 5 }
  ],

  /* --- 13. In der Umgebung (Storytelling + lokales SEO) ------------------- */
  nearby: [
    { title: "Altstadt Rapperswil", distance: "5 Min.", text: "Gassen, Rosengärten und das Schloss über dem See." },
    { title: "Seepromenade",        distance: "1 Min.", text: "Spazieren, baden, Schiff fahren – direkt vor der Tür." },
    { title: "Wander- & Radwege",   distance: "vor Ort", text: "Startpunkte für Touren rund um den See." }
  ],

  /* --- 14. Lage & Anfahrt ------------------------------------------------- */
  location: {
    address: "Seepromenade 12, 8640 Rapperswil, Schweiz",
    street: "Seepromenade 12",
    postalCode: "8640",
    city: "Rapperswil",
    country: "CH",
    mapsQuery: "Seepromenade 12, 8640 Rapperswil",
    lat: 47.2266,
    lng: 8.8180,
    directions: "5 Minuten vom Bahnhof · direkt an der Seepromenade · kostenlose Parkplätze am Haus."
  },

  /* --- 15. Kontakt -------------------------------------------------------- */
  contact: {
    phone: "+41 55 123 45 67",
    email: "willkommen@hotel-seeblick.example",
    address: "Seepromenade 12, 8640 Rapperswil",
    hours: "Rezeption täglich 7:00 – 22:00 Uhr"
  },

  /* --- 16. Buchung / Anfrage ---------------------------------------------- */
  // type "email": Formular öffnet vorausgefüllte E-Mail.
  // type "external": CTA verlinkt auf ein Buchungssystem (externalUrl).
  // formEndpoint (optional): Formspree-URL – dann wird direkt gesendet.
  booking: {
    type: "email",
    externalUrl: "",
    formEndpoint: "",
    ctaText: "Verfügbarkeit anfragen"
  },

  /* --- 17. Social Media (leer lassen = ausgeblendet) ---------------------- */
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tripadvisor: ""
  },

  /* --- 18. Rechtliches (für Impressum & Datenschutz) ---------------------- */
  legal: {
    company: "Hotel Seeblick GmbH",
    owner: "Maria Muster",
    addressLines: ["Seepromenade 12", "8640 Rapperswil", "Schweiz"],
    email: "willkommen@hotel-seeblick.example",
    phone: "+41 55 123 45 67",
    vatId: "CHE-123.456.789"
  }
};

/* =============================================================================
   ICONS – verfügbare Werte für "icon" (Abschnitt amenities):
   wifi · breakfast · parking · spa · restaurant · pet · pool · ac ·
   room-service · bar · bike · view · family · reception
   ============================================================================= */
