import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grillbogen.dk - Danmarks Komplette Grillguide",
  description: "Alt om grill - guides, opskrifter, teknikker og anmeldelser. Lær at mestre gasgrill og kulgrill.",
};

const articles = [
  { slug: 'fuldstaendig-guide-til-gasgrill', title: 'Guide til Gasgrill' },
  { slug: 'kulgrill-eller-gasgrill', title: 'Kulgrill vs Gasgrill' },
  { slug: 'perfekte-ribeye', title: 'Perfekt Ribeye' },
  { slug: 'groentsager-paa-grillen', title: 'Grøntsager på Grill' },
  { slug: 'rengøring-af-grill', title: 'Rengøring' },
  { slug: 'bedste-grill-tilbehoer', title: 'Grill-Tilbehør' }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body>
        <nav className="bg-[var(--charcoal)] text-white py-4 shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-[var(--fire-red)]">
                Grillbogen.dk
              </Link>
              <div className="hidden md:flex gap-6">
                <Link href="/" className="hover:text-[var(--fire-red)] transition-colors">
                  Forside
                </Link>
                <Link href="/om" className="hover:text-[var(--fire-red)] transition-colors">
                  Om
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-[var(--charcoal)] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--fire-red)] mb-4">
                  Grillbogen.dk
                </h3>
                <p className="text-sm text-[var(--smoke)]">
                  Din komplette guide til alt om grill. Fra begynder til mester.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[var(--cream)]">
                  Populære Artikler
                </h4>
                <ul className="space-y-2 text-sm">
                  {articles.slice(0, 4).map((article) => (
                    <li key={article.slug}>
                      <Link href={`/${article.slug}`} className="text-[var(--smoke)] hover:text-[var(--fire-red)] transition-colors">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[var(--cream)]">
                  Kategorier
                </h4>
                <ul className="space-y-2 text-sm text-[var(--smoke)]">
                  <li>Guides</li>
                  <li>Opskrifter</li>
                  <li>Vedligeholdelse</li>
                  <li>Anmeldelser</li>
                </ul>
              </div>
            </div>
            {/* Netværk */}
            <div className="mt-8 pt-8 border-t border-[var(--smoke)]">
              <p className="text-xs text-[var(--smoke)]">
                Del af{" "}
                <a
                  href="https://lexhub.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--fire-red)] hover:text-[var(--cream)] transition-colors"
                >
                  LexHub.dk
                </a>
                -netværket
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--smoke)] text-center text-sm text-[var(--smoke)]">
              © {new Date().getFullYear()} Grillbogen.dk - Alt om grill
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
