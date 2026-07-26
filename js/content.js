/* =============================================================================
   HOTEL-WEBSITE · ZENTRALE INHALTSDATEI
   -----------------------------------------------------------------------------
   Das ist die EINZIGE Datei, die du pro Hotel ausfüllen musst.
   Ändere Texte, Preise, Kontaktdaten und Bildpfade. Layout, Design, Technik
   und SEO (inkl. Google-Rich-Results) passen sich automatisch an.

   Reihenfolge:
   1 Grunddaten/SEO · 2 Design · 3 Logo · 4 Hero · 5 Kennzahlen · 6 Bewertung
   7 Bewertungs-Diagramm · 8 Vertrauen · 9 Über uns · 10 Erlebnisse · 11 Zimmer
   12 Ausstattung · 13 Galerie · 14 Stimmen · 15 Umgebung · 16 FAQ · 17 Lage
   18 Kontakt · 19 Buchung · 20 Social · 21 Recht
   ============================================================================= */

window.HOTEL = {

  /* --- 1. Grunddaten & SEO ------------------------------------------------ */
  meta: {
    name: "Hotel Seeblick",
    tagline: "Boutique-Hotel am See",
    seoTitle: "Hotel Seeblick · Boutique-Hotel direkt am See in Rapperswil",
    seoDescription:
      "Stilvoll übernachten direkt am Seeufer: das Hotel Seeblick in Rapperswil " +
      "vereint moderne Zimmer, regionale Küche und einen Panoramablick, der bleibt. " +
      "Jetzt Verfügbarkeit anfragen.",
    url: "https://example.com",
    lang: "de",
    priceRange: "€€",
    currency: "CHF"
  },

  /* --- 2. Design ----------------------------------------------------------- */
  theme: {
    colorInk:        "#1b1a17",
    colorBg:         "#faf6ef",
    colorSand:       "#f1e9dc",
    colorSurface:    "#ffffff",
    colorAccent:     "#1f4a3f",
    colorAccentDark: "#163a31",
    fontDisplay:     "'Fraunces', 'Cormorant Garamond', Georgia, serif",
    fontBody:        "'Inter', system-ui, -apple-system, sans-serif",
    // Hintergrundbild hinter dem "Papier"-Layout (leicht unscharf gerendert)
    backgroundImage: "images/hero.jpg"
  },

  /* --- 3. Logo ------------------------------------------------------------- */
  brand: { logoText: "Seeblick", logoImage: "" },

  /* --- 4. Hero ------------------------------------------------------------- */
  hero: {
    image: "images/hero.jpg",
    imageAlt: "Blick über den See auf das Hotel Seeblick in der Abendsonne",
    kicker: "Rapperswil · Direkt am Seeufer",
    headline: "Wo der Tag am Wasser beginnt.",
    subline: "Ein Boutique-Hotel für alle, die Ruhe, guten Geschmack und den schönsten Blick weit und breit suchen.",
    ctaPrimaryText: "Verfügbarkeit anfragen",
    ctaPrimaryHref: "#buchen",
    ctaSecondaryText: "Zimmer entdecken",
    ctaSecondaryHref: "#zimmer"
  },

  /* --- 5. Kennzahlen -------------------------------------------------------- */
  stats: [
    { value: "4.9", label: "★ Gästebewertung" },
    { value: "18",  label: "Zimmer & Suiten" },
    { value: "1",   suffix: " Min.", label: "zum Seeufer" },
    { value: "1932", label: "familiengeführt seit" }
  ],

  /* --- 6. Gesamtbewertung (Social Proof & Google) --------------------------- */
  rating: { value: 4.9, count: 214, source: "Google & Booking.com" },

  /* --- 7. Bewertungs-Diagramm (Skala 0 bis 99) ------------------------------ */
  ratingBreakdown: {
    title: "So bewerten uns unsere Gäste",
    note: "Basis: 214 verifizierte Bewertungen der letzten 24 Monate",
    max: 99,
    items: [
      { label: "Lage",            value: 99 },
      { label: "Personal",        value: 98 },
      { label: "Sauberkeit",      value: 97 },
      { label: "Frühstück",       value: 96 },
      { label: "Komfort",         value: 94 },
      { label: "Preis & Leistung", value: 92 }
    ]
  },

  /* --- 8. Vertrauenselemente ------------------------------------------------ */
  trust: [
    { icon: "tag",    title: "Bestpreis bei Direktanfrage", text: "Direkt anfragen lohnt sich immer." },
    { icon: "clock",  title: "Antwort innert 24 Stunden",   text: "Persönlich, nicht automatisiert." },
    { icon: "shield", title: "Kostenlos stornierbar",       text: "Bis 48 Stunden vor Anreise." },
    { icon: "heart",  title: "Familiengeführt seit 1932",   text: "In dritter Generation." }
  ],

  /* --- 9. Über uns / Story --------------------------------------------------- */
  about: {
    kicker: "Willkommen",
    title: "Ein Haus mit Blick und mit Haltung.",
    lead: "Seit drei Generationen empfangen wir unsere Gäste wie Freunde.",
    body:
      "Eingebettet zwischen sanften Hügeln und glitzerndem Wasser verbindet das " +
      "Hotel Seeblick zeitgemässe Ruhe mit herzlicher Gastfreundschaft. Jedes Detail " +
      "ist mit Bedacht gewählt, von der regionalen Küche bis zum Leinen auf dem Bett.\n\n" +
      "Ob Kurzurlaub, Feier oder Geschäftsreise: Bei uns kommen Sie an, atmen durch " +
      "und fühlen sich sofort zu Hause.",
    image: "images/about.jpg",
    imageAlt: "Gemütliche Lounge des Hotels mit Blick auf den See",
    signatureName: "Familie Muster",
    signatureRole: "Gastgeberinnen & Gastgeber"
  },

  /* --- 10. Erlebnisse (Scroll-Kapitel: Text und Bild wechseln beim Scrollen) -- */
  experiencesIntro: {
    kicker: "Erlebnisse",
    title: "Drei Momente, die bleiben."
  },
  experiences: [
    {
      kicker: "Am Wasser",
      title: "Aufwachen mit Seeblick",
      text: "Öffnen Sie die Balkontür und der Morgen gehört Ihnen: stiller See, " +
            "erste Sonne, ein Kaffee auf der Terrasse. Näher ans Wasser geht kaum.",
      points: ["Zimmer zur Seeseite verfügbar", "Frühstück auf Wunsch auf dem Balkon"],
      image: "images/exp-1.jpg",
      imageAlt: "Balkon mit Panoramablick über den ruhigen Morgensee"
    },
    {
      kicker: "Genuss",
      title: "Küche mit Charakter",
      text: "Unsere Küche kocht saisonal und regional. Ehrlich, frisch und mit " +
            "Liebe zum Handwerk. Am Abend ein Glas Wein, dazu Licht über dem See.",
      points: ["Saisonkarte mit Produkten aus der Region", "Ausgewählte Schweizer Weine"],
      image: "images/exp-2.jpg",
      imageAlt: "Regionales Gericht, angerichtet auf einem Holztisch"
    },
    {
      kicker: "Ruhe",
      title: "Zeit für sich: Sauna & Ruheraum",
      text: "Sauna, warmes Holz, weicher Bademantel. Und dahinter immer der See. " +
            "Hier gehört die Zeit nur Ihnen.",
      points: ["Sauna mit Blick ins Grüne", "Ruheraum mit Lesebibliothek"],
      image: "images/exp-3.jpg",
      imageAlt: "Ruhiger Wellnessbereich mit Sauna und Blick ins Grüne"
    }
  ],

  /* --- 11. Zimmer & Suiten (mit Zweitbild für mehr Einblick) ------------------ */
  rooms: [
    {
      name: "Doppelzimmer Komfort",
      description:
        "Gemütliches Zimmer mit französischem Balkon und Blick ins Grüne. " +
        "Helles Holz, weiches Leinen und eine Regendusche, die den Tag gut beginnen lässt.",
      price: "ab CHF 120",
      priceNote: "/ Nacht",
      size: "24 m²",
      occupancy: "2 Personen",
      image: "images/room-1.jpg",
      imageAlt: "Modern eingerichtetes Doppelzimmer mit hellem Holz",
      image2: "images/room-1b.jpg",
      image2Alt: "Badezimmer mit Regendusche und warmem Naturstein",
      features: ["Kingsize-Bett", "Regendusche", "Kostenloses WLAN", "Zimmersafe"]
    },
    {
      name: "Juniorsuite Seeblick",
      description:
        "Grosszügige Suite mit eigenem Balkon und direktem Blick auf den See. " +
        "Morgens Kaffee am Wasser, abends das letzte Licht über den Hügeln.",
      price: "ab CHF 190",
      priceNote: "/ Nacht",
      size: "38 m²",
      occupancy: "2 bis 3 Personen",
      image: "images/room-2.jpg",
      imageAlt: "Helle Juniorsuite mit Balkon und Seeblick",
      image2: "images/room-2b.jpg",
      image2Alt: "Balkon-Sitzecke mit Blick auf den See",
      features: ["Balkon mit Seeblick", "Sitzecke", "Nespresso", "Bademäntel"]
    },
    {
      name: "Panorama-Suite",
      description:
        "Unser Highlight: eigener Wohnbereich, freistehende Badewanne am Fenster " +
        "und ein Rundumblick, den Sie so schnell nicht vergessen.",
      price: "ab CHF 260",
      priceNote: "/ Nacht",
      size: "55 m²",
      occupancy: "2 bis 4 Personen",
      image: "images/room-3.jpg",
      imageAlt: "Grosse Panorama-Suite mit freistehender Badewanne am Fenster",
      image2: "images/room-3b.jpg",
      image2Alt: "Wohnbereich der Suite mit Sofa und Seeblick am Abend",
      features: ["Freistehende Badewanne", "Wohnbereich", "Minibar inklusive", "Späte Abreise möglich"]
    }
  ],

  /* --- 12. Ausstattung -------------------------------------------------------- */
  amenities: [
    { icon: "wifi",       title: "Kostenloses WLAN",  text: "Schnell im ganzen Haus." },
    { icon: "breakfast",  title: "Frühstücksbuffet",  text: "Regional & frisch, bis 11 Uhr." },
    { icon: "parking",    title: "Parkplätze",        text: "Kostenlos direkt am Hotel." },
    { icon: "spa",        title: "Wellness & Sauna",  text: "Entspannen mit Seeblick." },
    { icon: "restaurant", title: "Restaurant",        text: "Saisonale Küche der Region." },
    { icon: "pet",        title: "Haustiere",         text: "Ihr Vierbeiner ist willkommen." }
  ],

  /* --- 13. Galerie (Einblicke ins Haus) ---------------------------------------- */
  gallery: [
    { src: "images/gallery-1.jpg",   alt: "Aussenansicht des Hotels am Seeufer" },
    { src: "images/lobby.jpg",       alt: "Empfang mit warmem Licht und frischen Blumen" },
    { src: "images/gallery-3.jpg",   alt: "Terrasse mit Blick auf den See" },
    { src: "images/restaurant.jpg",  alt: "Frühstücksraum mit grossen Fenstern zum See" },
    { src: "images/gallery-4.jpg",   alt: "Regionales Frühstück am Morgen" },
    { src: "images/gallery-2.jpg",   alt: "Detail der Zimmereinrichtung" },
    { src: "images/gallery-5.jpg",   alt: "Wellnessbereich mit Sauna" },
    { src: "images/gallery-6.jpg",   alt: "Sonnenuntergang über dem See" }
  ],

  /* --- 14. Gästestimmen --------------------------------------------------------- */
  testimonials: [
    { quote: "Der schönste Blick, den wir je aus einem Hotelzimmer hatten. Wir kommen wieder!",
      author: "Familie Berger", source: "Google", rating: 5 },
    { quote: "Herzlicher Empfang, tolles Frühstück und absolute Ruhe. Rundum perfekt.",
      author: "Sabine K.", source: "Booking.com", rating: 5 },
    { quote: "Stilvoll eingerichtet und liebevoll geführt. Ein echtes Kleinod am See.",
      author: "Thomas M.", source: "TripAdvisor", rating: 5 }
  ],

  /* --- 15. In der Umgebung -------------------------------------------------------- */
  nearby: [
    { title: "Altstadt Rapperswil", distance: "5 Min.",  text: "Gassen, Rosengärten und das Schloss über dem See." },
    { title: "Seepromenade",        distance: "1 Min.",  text: "Spazieren, baden, Schiff fahren. Direkt vor der Tür." },
    { title: "Wander- & Radwege",   distance: "vor Ort", text: "Startpunkte für Touren rund um den See." }
  ],

  /* --- 16. FAQ (häufige Fragen, erscheint auch in Google) -------------------------- */
  faq: [
    { q: "Wann kann ich einchecken und auschecken?",
      a: "Check-in ab 14:00 Uhr, Check-out bis 11:00 Uhr. Früher ankommen oder später abreisen? Fragen Sie uns einfach an, wir machen fast immer etwas möglich." },
    { q: "Gibt es Parkplätze am Hotel?",
      a: "Ja, direkt am Haus stehen kostenlose Parkplätze für unsere Gäste bereit. E-Ladestation auf Anfrage." },
    { q: "Ist das Frühstück im Preis inbegriffen?",
      a: "Bei den meisten Raten ja. Unser regionales Frühstücksbuffet gibt es täglich bis 11 Uhr. Details stehen bei Ihrer Anfrage in der Bestätigung." },
    { q: "Sind Haustiere willkommen?",
      a: "Sehr gerne. Ihr Hund übernachtet für CHF 15 pro Nacht inklusive Näpfchen und Decke. Bitte bei der Anfrage kurz erwähnen." },
    { q: "Wie kann ich kostenlos stornieren?",
      a: "Bis 48 Stunden vor Anreise stornieren Sie kostenlos per E-Mail oder Telefon. Danach verrechnen wir die erste Nacht." },
    { q: "Wie erreiche ich das Hotel mit dem Zug?",
      a: "Vom Bahnhof Rapperswil sind es 5 Minuten zu Fuss der Seepromenade entlang. Auf Wunsch holen wir Sie mit dem Hotelwagen ab." }
  ],

  /* --- 17. Lage (für SEO und Footer, keine Karten-Sektion) -------------------------- */
  location: {
    address: "Seepromenade 12, 8640 Rapperswil, Schweiz",
    street: "Seepromenade 12",
    postalCode: "8640",
    city: "Rapperswil",
    country: "CH",
    lat: 47.2266,
    lng: 8.8180,
    directions: "5 Minuten vom Bahnhof, direkt an der Seepromenade. Kostenlose Parkplätze am Haus."
  },

  /* --- 18. Kontakt ------------------------------------------------------------------ */
  contact: {
    phone: "+41 55 123 45 67",
    email: "willkommen@hotel-seeblick.example",
    address: "Seepromenade 12, 8640 Rapperswil",
    hours: "Rezeption täglich 7:00 bis 22:00 Uhr"
  },

  /* --- 19. Buchung / Anfrage ---------------------------------------------------------- */
  booking: { type: "email", externalUrl: "", formEndpoint: "", ctaText: "Verfügbarkeit anfragen" },

  /* --- 20. Social ------------------------------------------------------------------------ */
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/", tripadvisor: "" },

  /* --- 21. Rechtliches --------------------------------------------------------------------- */
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
   ICONS für amenities: wifi · breakfast · parking · spa · restaurant · pet ·
   pool · ac · room-service · bar · bike · view · family · reception
   ICONS für trust: tag · clock · shield · heart
   ============================================================================= */
