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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Navigation */}
        <nav className="bg-[var(--charcoal)] sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center gap-2 no-underline"
              >
                <span className="text-3xl">&#x1F525;</span>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Grillbogen<span className="text-[var(--ember)]">.dk</span>
                </span>
              </Link>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <details className="lg:hidden relative">
                <summary className="list-none cursor-pointer text-white p-2">
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
                <div className="absolute right-0 top-12 bg-[var(--charcoal)] rounded-lg shadow-2xl py-2 w-56 border border-white/10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 no-underline"
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
        <footer className="bg-[var(--charcoal)] text-gray-400">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">&#x1F525;</span>
                  <span className="text-lg font-bold text-white">
                    Grillbogen<span className="text-[var(--ember)]">.dk</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed">
                  Danmarks komplette grillguide. Fra den første tænding til
                  perfekt pulled pork - alt hvad du skal vide om grill.
                </p>
              </div>

              {/* Articles */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Populære Guides
                </h4>
                <ul className="space-y-3">
                  {footerArticles.map((article) => (
                    <li key={article.href}>
                      <Link
                        href={article.href}
                        className="text-sm text-gray-400 hover:text-[var(--ember)] transition-colors no-underline"
                      >
                        {article.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Kategorier
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>Guides &amp; Teknik</li>
                  <li>Opskrifter</li>
                  <li>Vedligeholdelse</li>
                  <li>Anmeldelser</li>
                </ul>
              </div>
            </div>

            {/* Network + copyright */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs">
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
                <p className="text-xs">
                  &copy; {new Date().getFullYear()} Grillbogen.dk - Alt om grill
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
