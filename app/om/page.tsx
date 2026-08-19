import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  // Absolut titel: templaten ville ellers give "Om Grillbogen.dk | Grillbogen.dk".
  title: {
    absolute: "Om Grillbogen.dk: redaktionen bag magasinet",
  },
  description:
    "Bag om Grillbogen.dk: hvem der skriver, hvordan opskrifterne testes, og hvorfor vi måler i kernetemperatur frem for minutter. Læs om redaktionen bag her.",
  alternates: {
    canonical: "/om",
  },
  openGraph: {
    title: "Om Grillbogen.dk: redaktionen bag magasinet",
    description:
      "Bag om Grillbogen.dk: hvem der skriver, hvordan opskrifterne testes, og hvorfor vi måler i kernetemperatur frem for minutter.",
    url: "https://grillbogen.dk/om",
    siteName: "Grillbogen.dk",
    locale: "da_DK",
    type: "website",
  },
};

function AboutSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Om Grillbogen.dk",
      description:
        "Bag om Grillbogen.dk: hvem der skriver, hvordan opskrifterne testes, og redaktionens metode.",
      url: "https://grillbogen.dk/om",
      inLanguage: "da",
      mainEntity: {
        "@type": "Organization",
        name: "Grillbogen.dk",
        url: "https://grillbogen.dk",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Om Grillbogen.dk", item: "https://grillbogen.dk/om" },
      ],
    },
  ];
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export default function Om() {
  return (
    <>
      <AboutSchema />
      {/* Hero - simpler for about page */}
      <div className="relative bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1503220178855-e31ec372b8ad?w=1400&h=500&fit=crop"
          alt="Bøf der steger over åbne flammer på en kulgrill"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, var(--ember) 0%, transparent 50%)"
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[var(--ember)] to-transparent" />
            <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-[0.25em]">Om os</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.95]" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: '-0.025em' }}>
            Om Grillbogen.dk
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
        <p className="image-credit absolute bottom-2 right-4 z-20 m-0 text-white/60">
          Foto: <a href="https://unsplash.com/@philippcamera" target="_blank" rel="noopener noreferrer" className="text-white/60">Philipp Kämmerer</a> / Unsplash
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <nav aria-label="Brødkrumme" className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">
            Forside
          </Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Om</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-xl leading-relaxed text-stone-500">
            Grillbogen.dk er for dig der elsker at stå ved grillen. Vi samler
            guides, opskrifter og teknikker på ét sted - uden unødvendig snak og
            uden salgstricks.
          </p>

          <h2>Hvad finder du her?</h2>

          <h3>Guides der faktisk hjælper</h3>
          <p>
            Fra{" "}
            <Link href="/grill-for-begyndere">begynderen der lige har købt sin
            første grill</Link>{" "}
            til den erfarne grillmester der vil mestre{" "}
            <Link href="/pulled-pork-paa-grillen">pulled pork</Link>. Vi dækker
            alle aspekter af grill - gasgrill, kulgrill, temperaturkontrol,
            vedligeholdelse og teknikker.
          </p>

          <h3>Opskrifter der virker</h3>
          <p>
            Ingen fancy kokke-sprog. Vi giver dig opskrifter der er testet og
            virker. Fra{" "}
            <Link href="/perfekte-ribeye">den perfekte ribeye</Link> til{" "}
            <Link href="/pulled-pork-paa-grillen">pulled pork på grillen</Link> -
            alt forklaret trin for trin med konkrete temperaturer og tidspunkter.
          </p>

          <h3>Ærlige sammenligninger</h3>
          <p>
            <Link href="/kulgrill-vs-gasgrill">Kulgrill vs gasgrill?</Link> Vi
            giver dig fakta og erfaring - ikke salgssnak. Ingen af vores guides
            er sponsoreret, og vi anbefaler kun produkter baseret på reel
            erfaring.
          </p>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1519253328475-d8d3f8d521cc?w=800&h=450&fit=crop"
                alt="Røgen står ud af en udendørs grill en solrig sommerdag"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@heyquilia" target="_blank" rel="noopener noreferrer">Quilia</a> / Unsplash</p>
          </div>

          <h2>Vores filosofi</h2>

          <div className="grid sm:grid-cols-2 gap-5 my-8 not-prose">
            {[
              { title: "Simpelhed", desc: "Gode råvarer, simple teknikker, præcis temperatur. Det er 90% af hemmeligheden." },
              { title: "Ærlighed", desc: "Vi fortæller det som det er. Også når vi brænder en steak af." },
              { title: "Tålmodighed", desc: "God grill tager tid. Rushed grill tager endnu længere (fordi du skal starte forfra)." },
              { title: "Fællesskab", desc: "Grill samler mennesker. Det er hele pointen." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <h4 className="text-base font-bold text-[var(--charcoal)] mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: '-0.025em' }}>
                  {item.title}
                </h4>
                <p className="text-sm text-stone-500 leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2>Start her</h2>
          <p>
            Ny til grill? Start med vores{" "}
            <Link href="/grill-for-begyndere">begynderguide</Link>. Har du
            allerede styr på det grundlæggende? Dyk ned i vores{" "}
            <Link href="/perfekte-ribeye">opskrifter</Link> eller læs den{" "}
            <Link href="/fuldstaendig-guide-til-gasgrill">
              fuldstændige guide til gasgrill
            </Link>
            .
          </p>

          <p>
            Grillbogen.dk er en del af{" "}
            <a
              href="https://lexhub.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              LexHub.dk
            </a>
            -netværket.
          </p>
        </div>
      </div>
    </>
  );
}
