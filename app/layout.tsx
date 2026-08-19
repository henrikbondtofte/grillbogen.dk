import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://grillbogen.dk"),
  title: {
    default: "Grillbogen.dk - Det danske grilltidsskrift",
    template: "%s | Grillbogen.dk",
  },
  description:
    "Et redaktionelt grillmagasin om røg, glød og håndværk. Guides, opskrifter, teknikker og anmeldelser - fra første tænding til perfekt brisket.",
  // BEMÆRK: sæt ALDRIG en default canonical her. Metadata arves ned i
  // segmenterne, så en canonical i layoutet gør, at enhver side der glemmer
  // at overskrive den, peger på forsiden. Det skete for /artikler og alle
  // LexHub-artikler under den. Hver side sætter sin egen canonical.
  openGraph: {
    siteName: "Grillbogen.dk",
    locale: "da_DK",
    type: "website",
    url: "https://grillbogen.dk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const navLinks = [
  { href: "/fuldstaendig-guide-til-gasgrill", label: "Gasgrill" },
  { href: "/kulgrill-vs-gasgrill", label: "Kul vs. gas" },
  { href: "/perfekte-ribeye", label: "Ribeye" },
  { href: "/tomahawk-paa-grillen", label: "Tomahawk" },
  { href: "/pulled-pork-paa-grillen", label: "Pulled pork" },
  { href: "/varmroeget-laks", label: "Røget laks" },
  { href: "/marinader-til-grill", label: "Marinader" },
  { href: "/rengoering-af-grill", label: "Rengøring" },
  { href: "/grill-for-begyndere", label: "Begynder" },
  { href: "/artikler", label: "Artikler" },
  { href: "/om", label: "Om" },
];

const footerArticles = [
  { href: "/fuldstaendig-guide-til-gasgrill", label: "Guide til gasgrill" },
  { href: "/kulgrill-vs-gasgrill", label: "Kulgrill vs. gasgrill" },
  { href: "/perfekte-ribeye", label: "Perfekt ribeye" },
  { href: "/tomahawk-paa-grillen", label: "Tomahawk steak" },
  { href: "/pulled-pork-paa-grillen", label: "Pulled pork" },
  { href: "/varmroeget-laks", label: "Varmrøget laks" },
  { href: "/grillet-svinemoerbrad", label: "Svinemørbrad" },
  { href: "/grillede-grontsager", label: "Grillede grøntsager" },
  { href: "/marinader-til-grill", label: "Marinader" },
  { href: "/rengoering-af-grill", label: "Rengøring af grill" },
  { href: "/grill-for-begyndere", label: "Begynderguide" },
  { href: "/is-dessert-efter-grillen", label: "Is som dessert" },
  { href: "/artikler", label: "Alle artikler" },
];

function SchemaMarkup() {
  // All schema data is hardcoded - no user input, safe to render as JSON-LD
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Grillbogen.dk",
      url: "https://grillbogen.dk",
      // Ingen logo-property: /icon.png findes ikke i public/, og en logo-URL
      // der giver 404 er værre end ingen logo-property.
      description:
        "Et redaktionelt grillmagasin med opskrifter, teknikker og anmeldelser",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Grillbogen.dk",
      url: "https://grillbogen.dk",
      description:
        "Et redaktionelt grillmagasin om røg, glød og håndværk.",
      inLanguage: "da",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      // Peger på /artikler, som faktisk filtrerer på ?q=. Forsiden gjorde
      // ingenting med parameteren, og en SearchAction der ikke søger er
      // reelt en falsk erklæring over for Google.
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://grillbogen.dk/artikler?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,600;1,9..144,700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SchemaMarkup />
        {/* Top issue strip */}
        <div className="bg-[var(--ink)] text-[var(--butter)] text-[0.65rem] tracking-[0.3em] uppercase">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
            <span className="hidden sm:inline">Vol. 01 · Det danske grilltidsskrift</span>
            <span className="sm:hidden">Grillbogen</span>
            <span className="flex items-center gap-2">
              <svg width="11" height="14" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7 17.5c-3.3 0-6-2.3-6-5.4 0-2 1.2-3.4 2.4-4.7C3.6 9.1 4 10 4.7 10.6 4 8.2 5.4 6.6 7 4.6c1.6 2 3 3.6 2.3 6 .7-.6 1.1-1.5 1.3-3.2 1.2 1.3 2.4 2.7 2.4 4.7 0 3.1-2.7 5.4-6 5.4z" fill="var(--ember)"/>
              </svg>
              <span>Røg · Glød · Håndværk</span>
            </span>
          </div>
        </div>

        {/* Masthead */}
        <header className="bg-[var(--paper)] border-b border-[var(--paper-edge)] sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between gap-6 py-4">
              <Link href="/" className="flex items-center gap-3 no-underline group">
                <svg width="42" height="42" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="var(--wine)" />
                  <circle cx="32" cy="32" r="30" fill="none" stroke="var(--butter)" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.7" />
                  <text x="32" y="42" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="700" fontSize="30" fill="var(--butter)" fontStyle="italic">G</text>
                </svg>
                <div className="leading-none">
                  <span
                    className="block text-[1.6rem] font-bold text-[var(--ink)]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.025em" }}
                  >
                    Grillbogen
                  </span>
                  <span className="block mt-1 text-[0.6rem] font-bold tracking-[0.3em] uppercase text-[var(--wine)]">
                    Det danske grillmagasin
                  </span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link text-[0.85rem] text-[var(--char)] hover:text-[var(--wine)] transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <details className="lg:hidden relative">
                <summary className="list-none cursor-pointer text-[var(--char)] hover:text-[var(--wine)] p-2 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 top-12 bg-[var(--paper)] border border-[var(--paper-edge)] shadow-[8px_10px_0_var(--paper-edge)] py-3 w-64 z-50">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3 text-sm text-[var(--char)] hover:text-[var(--wine)] hover:bg-[var(--paper-soft)] no-underline font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-[var(--ink)] text-[var(--smoke)] relative overflow-hidden">
          <div className="absolute inset-0 grain-texture pointer-events-none" />
          <div className="h-[3px] bg-gradient-to-r from-transparent via-[var(--ember)] to-transparent opacity-60" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-12">
            <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-16">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-5">
                  <svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="32" cy="32" r="30" fill="var(--wine)" />
                    <circle cx="32" cy="32" r="30" fill="none" stroke="var(--butter)" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.7" />
                    <text x="32" y="42" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="700" fontSize="30" fill="var(--butter)" fontStyle="italic">G</text>
                  </svg>
                  <span className="text-2xl font-bold text-[var(--paper)]" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                    Grillbogen<span className="text-[var(--ember)]">.</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--smoke)] max-w-md">
                  Et redaktionelt grillmagasin om røg, glød og håndværk.
                  Konkrete guides, testede opskrifter og anmeldelser uden
                  reklamesnak - skrevet til grillen, ikke til algoritmen.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-[var(--saffron)]">
                  <svg width="11" height="14" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 17.5c-3.3 0-6-2.3-6-5.4 0-2 1.2-3.4 2.4-4.7C3.6 9.1 4 10 4.7 10.6 4 8.2 5.4 6.6 7 4.6c1.6 2 3 3.6 2.3 6 .7-.6 1.1-1.5 1.3-3.2 1.2 1.3 2.4 2.7 2.4 4.7 0 3.1-2.7 5.4-6 5.4z" fill="var(--ember)"/>
                  </svg>
                  <span>Vol. 01 · Forår 2026</span>
                </div>
              </div>

              <div className="md:col-span-4">
                <h4 className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--butter)] font-bold mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Fra indholdet
                </h4>
                <ul className="space-y-2.5">
                  {footerArticles.map((article, idx) => (
                    <li key={article.href} className="flex items-baseline gap-3">
                      <span className="text-[0.7rem] text-[var(--ember)] font-mono">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <Link
                        href={article.href}
                        className="text-sm text-[var(--smoke)] hover:text-[var(--butter)] transition-colors no-underline"
                      >
                        {article.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-3">
                <h4 className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--butter)] font-bold mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Sektioner
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rotate-45 bg-[var(--ember)]" />
                    <span>Guides &amp; teknik</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rotate-45 bg-[var(--saffron)]" />
                    <span>Opskrifter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rotate-45 bg-[var(--wine-light)]" />
                    <span>Vedligeholdelse</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rotate-45 bg-[var(--butter)]" />
                    <span>Anmeldelser</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--ash)]">
                Del af{" "}
                <a href="https://lexhub.dk" target="_blank" rel="noopener noreferrer" className="text-[var(--ember)] hover:text-[var(--butter)] transition-colors no-underline">
                  LexHub.dk
                </a>
                -netværket
              </p>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--ash)]">
                &copy; 2026 Grillbogen.dk
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
