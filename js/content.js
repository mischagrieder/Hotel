/* =============================================================================
   HOTEL-WEBSITE · ZENTRALE INHALTSDATEI
   -----------------------------------------------------------------------------
   Das ist die EINZIGE Datei, die du pro Hotel ausfüllen musst.
   Ändere die Texte, Preise, Kontaktdaten und Bildpfade unten – der Rest der
   Website (Layout, Design, Technik) passt sich automatisch an.

   Tipp: Farben & Schriften stehen im Abschnitt "theme" ganz oben.
   Bilder liegen im Ordner /images (siehe images/README.md).
   ============================================================================= */

window.HOTEL = {

  /* --- 1. Grunddaten & SEO ------------------------------------------------ */
  meta: {
    name: "Hotel Seeblick",                       // Name des Hotels
    tagline: "Boutique-Hotel am See",             // kurzer Slogan (Untertitel)
    seoDescription:
      "Boutique-Hotel Seeblick – stilvolle Zimmer, herzlicher Service und " +
      "traumhafter Blick auf den See. Jetzt Ihren Aufenthalt anfragen.",
    url: "https://example.com",                   // spätere Domain (für SEO/OpenGraph)
    lang: "de"
  },

  /* --- 2. Design (Farben & Schriften) ------------------------------------- */
  // Diese Werte überschreiben das Standard-Design. Einfach Hex-Farben tauschen.
  theme: {
    colorPrimary: "#1b1b1b",   // Dunkler Grundton (Header, Footer, Überschriften)
    colorAccent:  "#c8a45c",   // Akzentfarbe (Buttons, Linien, Highlights) – z.B. Gold
    colorBg:      "#faf8f5",   // Heller Seitenhintergrund
    colorText:    "#2e2b28",   // Fließtextfarbe
    fontHeading:  "'Cormorant Garamond', Georgia, serif",  // Überschriften (elegant)
    fontBody:     "'Inter', system-ui, sans-serif"          // Fließtext (klar)
  },

  /* --- 3. Logo / Marke ---------------------------------------------------- */
  brand: {
    logoText: "Seeblick",       // Text-Logo im Menü (leer lassen, wenn logoImage genutzt wird)
    logoImage: ""               // optional: "images/logo.svg" (überschreibt logoText)
  },

  /* --- 4. Hero (großes Bild ganz oben) ------------------------------------ */
  hero: {
    image: "images/hero.svg",
    headline: "Ankommen. Durchatmen. Genießen.",
    subline: "Ihr stilvolles Rückzugsort direkt am Seeufer.",
    ctaText: "Jetzt anfragen",
    ctaHref: "#kontakt"
  },

  /* --- 5. Willkommen / Über uns ------------------------------------------- */
  about: {
    title: "Herzlich willkommen",
    text:
      "Eingebettet zwischen sanften Hügeln und glitzerndem Wasser verbindet das " +
      "Hotel Seeblick zeitlose Eleganz mit herzlicher Gastfreundschaft. Seit drei " +
      "Generationen empfangen wir unsere Gäste wie Freunde – mit Liebe zum Detail, " +
      "regionaler Küche und dem schönsten Blick weit und breit.\n\n" +
      "Ob Kurzurlaub, Familienfeier oder Geschäftsreise: Bei uns finden Sie Ruhe, " +
      "Komfort und einen Ort, an dem Sie sich sofort zu Hause fühlen.",
    image: "images/about.svg"
  },

  /* --- 6. Zimmer & Suiten ------------------------------------------------- */
  rooms: [
    {
      name: "Doppelzimmer Komfort",
      description:
        "Gemütliches Zimmer mit französischem Balkon und Blick ins Grüne – ideal " +
        "für Erholungssuchende.",
      price: "ab 120 € / Nacht",
      size: "24 m²",
      image: "images/room-1.svg",
      features: ["2 Personen", "Kingsize-Bett", "Kostenloses WLAN", "Regendusche"]
    },
    {
      name: "Juniorsuite Seeblick",
      description:
        "Großzügige Suite mit eigenem Balkon und direktem Blick auf den See. " +
        "Ihr Panorama zum Aufwachen.",
      price: "ab 190 € / Nacht",
      size: "38 m²",
      image: "images/room-2.svg",
      features: ["2–3 Personen", "Balkon mit Seeblick", "Sitzecke", "Nespresso"]
    },
    {
      name: "Panorama-Suite",
      description:
        "Unser Highlight: Wohn-/Schlafbereich, Badewanne am Fenster und ein " +
        "Rundumblick, den Sie nie vergessen werden.",
      price: "ab 260 € / Nacht",
      size: "55 m²",
      image: "images/room-3.svg",
      features: ["2–4 Personen", "Freistehende Badewanne", "Wohnbereich", "Minibar inkl."]
    }
  ],

  /* --- 7. Ausstattung & Services ------------------------------------------ */
  // icon: einer der Namen aus der Icon-Liste unten in dieser Datei (siehe ICONS)
  amenities: [
    { icon: "wifi",       title: "Kostenloses WLAN",   text: "Schnelles Internet im ganzen Haus." },
    { icon: "breakfast",  title: "Frühstücksbuffet",   text: "Regional & frisch, bis 11 Uhr." },
    { icon: "parking",    title: "Parkplätze",         text: "Kostenlos direkt am Hotel." },
    { icon: "spa",        title: "Wellness & Sauna",   text: "Entspannen mit Blick aufs Wasser." },
    { icon: "restaurant", title: "Restaurant",         text: "Saisonale Küche aus der Region." },
    { icon: "pet",        title: "Haustiere",          text: "Ihr Vierbeiner ist willkommen." }
  ],

  /* --- 8. Galerie --------------------------------------------------------- */
  gallery: [
    "images/gallery-1.svg",
    "images/gallery-2.svg",
    "images/gallery-3.svg",
    "images/gallery-4.svg",
    "images/gallery-5.svg",
    "images/gallery-6.svg"
  ],

  /* --- 9. Bewertungen / Stimmen ------------------------------------------- */
  testimonials: [
    {
      quote: "Der schönste Blick, den wir je aus einem Hotelzimmer hatten. Wir kommen wieder!",
      author: "Familie Berger",
      source: "Google-Bewertung"
    },
    {
      quote: "Herzlicher Empfang, tolles Frühstück und absolute Ruhe. Rundum perfekt.",
      author: "Sabine K.",
      source: "Booking.com"
    },
    {
      quote: "Stilvoll eingerichtet und liebevoll geführt. Ein echtes Kleinod am See.",
      author: "Thomas M.",
      source: "TripAdvisor"
    }
  ],

  /* --- 10. Lage & Anfahrt ------------------------------------------------- */
  location: {
    address: "Seepromenade 12, 8640 Rapperswil, Schweiz",
    mapsQuery: "Seepromenade 12, 8640 Rapperswil",  // wird in Google Maps eingebettet
    directions:
      "5 Minuten vom Bahnhof entfernt · direkt an der Seepromenade · " +
      "kostenlose Parkplätze am Haus."
  },

  /* --- 11. Kontakt -------------------------------------------------------- */
  contact: {
    phone: "+41 55 123 45 67",
    email: "willkommen@hotel-seeblick.example",
    address: "Seepromenade 12, 8640 Rapperswil",
    hours: "Rezeption täglich 7:00 – 22:00 Uhr"
  },

  /* --- 12. Buchung / Anfrage ---------------------------------------------- */
  // type "email": Anfrageformular öffnet eine vorausgefüllte E-Mail.
  // type "external": CTA verlinkt direkt auf ein Buchungssystem (externalUrl).
  // formEndpoint (optional): Formspree-URL – dann wird das Formular direkt gesendet.
  booking: {
    type: "email",
    externalUrl: "",          // z.B. "https://www.booking.com/hotel/..."
    formEndpoint: ""          // z.B. "https://formspree.io/f/xxxxxxx"
  },

  /* --- 13. Social Media (leer lassen = wird ausgeblendet) ----------------- */
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tripadvisor: ""
  },

  /* --- 14. Rechtliches (für Impressum & Datenschutz) ---------------------- */
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
   ICONS – verfügbare Werte für "icon" im Abschnitt amenities:
   wifi · breakfast · parking · spa · restaurant · pet · pool · ac ·
   room-service · bar · bike · view · family · reception
   (Brauchst du ein anderes Symbol? Einfach einen dieser Namen verwenden.)
   ============================================================================= */
