import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Grillbogen.dk - Danmarks Komplette Grillguide",
    template: "%s | Grillbogen.dk",
  },
  description:
    "Alt om grill - guides, opskrifter, teknikker og anmeldelser. Lær at mestre gasgrill, kulgrill og smoking.",
  openGraph: {
    siteName: "Grillbogen.dk",
    locale: "da_DK",
    type: "website",
  },
};

const navLinks = [
  { href: "/fuldstaendig-guide-til-gasgrill", label: "Gasgrill Guide" },
  { href: "/kulgrill-vs-gasgrill", label: "Kulgrill vs Gasgrill" },
  { href: "/perfekte-ribeye", label: "Ribeye Steak" },
  { href: "/pulled-pork-paa-grillen", label: "Pulled Pork" },
  { href: "/grill-for-begyndere", label: "Begynderguide" },
  { href: "/om", label: "Om" },
];

const footerArticles = [
  { href: "/fuldstaendig-guide-til-gasgrill", label: "Guide til Gasgrill" },
  { href: "/kulgrill-vs-gasgrill", label: "Kulgrill vs Gasgrill" },
  { href: "/perfekte-ribeye", label: "Perfekt Ribeye" },
  { href: "/pulled-pork-paa-grillen", label: "Pulled Pork" },
  { href: "/grill-for-begyndere", label: "Begynderguide" },
];

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grillbogen.dk",
    url: "https://grillbogen.dk",
    description:
      "Danmarks komplette grillguide med opskrifter, teknikker og anmeldelser",
  };
  return (
    <script
      type="application/ld+json"
      // Static JSON-LD schema - no user input, safe to inline
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Navigation */}
        <nav className="bg-[var(--obsidian)] sticky top-0 z-50 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-18">
              <Link
                href="/"
                className="flex items-center gap-3 no-underline group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--ember)] to-[var(--copper)] flex items-center justify-center shadow-lg shadow-orange-900/20 group-hover:shadow-orange-900/40 transition-shadow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.5 6 4 9 4 14a8 8 0 0016 0c0-5-4.5-8-8-12z" fill="white" opacity="0.9"/>
                    <path d="M12 8c-2 2.5-4 4.5-4 7a4 4 0 008 0c0-2.5-2-4.5-4-7z" fill="var(--obsidian)" opacity="0.3"/>
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-extrabold text-white tracking-tight block leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Grillbogen
                  </span>
                  <span className="text-[0.65rem] font-medium text-[var(--ember)] uppercase tracking-widest">
                    Danmarks Grillguide
                  </span>
                </div>
              </Link>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link text-sm text-stone-400 hover:text-white px-3.5 py-2 rounded-lg transition-colors no-underline font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <details className="lg:hidden relative">
                <summary className="list-none cursor-pointer text-stone-400 hover:text-white p-2 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>
                <div className="absolute right-0 top-14 bg-[var(--iron)] rounded-2xl shadow-2xl py-3 w-64 border border-white/10 backdrop-blur-sm">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3.5 text-sm text-stone-300 hover:text-white hover:bg-white/5 no-underline font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-[var(--obsidian)] text-stone-500 relative grain-texture overflow-hidden">
          {/* Top accent line */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[var(--ember)] to-transparent opacity-40" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-3 gap-16">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--ember)] to-[var(--copper)] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.5 6 4 9 4 14a8 8 0 0016 0c0-5-4.5-8-8-12z" fill="white" opacity="0.9"/>
                    </svg>
                  </div>
                  <span className="text-lg font-extrabold text-white tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Grillbogen<span className="text-[var(--ember)]">.dk</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-stone-500">
                  Danmarks komplette grillguide. Fra den første tænding til
                  perfekt pulled pork - alt hvad du skal vide om grill.
                </p>
              </div>

              {/* Articles */}
              <div>
                <h4 className="text-stone-300 font-bold mb-5 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Populære Guides
                </h4>
                <ul className="space-y-3.5">
                  {footerArticles.map((article) => (
                    <li key={article.href}>
                      <Link
                        href={article.href}
                        className="text-sm text-stone-500 hover:text-[var(--ember)] transition-colors no-underline"
                      >
                        {article.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-stone-300 font-bold mb-5 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Kategorier
                </h4>
                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember)]" />
                    Guides &amp; Teknik
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    Opskrifter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--copper)]" />
                    Vedligeholdelse
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--flame)]" />
                    Anmeldelser
                  </li>
                </ul>
              </div>
            </div>

            {/* Network + copyright */}
            <div className="mt-16 pt-8 border-t border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-stone-600">
                  Del af{" "}
                  <a
                    href="https://lexhub.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ember)] hover:text-white transition-colors no-underline"
                  >
                    LexHub.dk
                  </a>
                  -netværket
                </p>
                <p className="text-xs text-stone-600">
                  &copy; {new Date().getFullYear()} Grillbogen.dk
                </p>
              </div>
            </div>
          </div>
        </footer>

        <SchemaMarkup />
      </body>
    </html>
  );
}
