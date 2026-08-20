import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Grillbogen.dk - guides, opskrifter og grillteknik",
  },
  description:
    "Dansk grillmagasin med testede opskrifter og konkrete guides til kul, gas og røg. Temperaturer, tider og teknik samlet ét sted - find din næste ret her.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grillbogen.dk - guides, opskrifter og grillteknik",
    description:
      "Dansk grillmagasin med testede opskrifter og konkrete guides til kul, gas og røg. Temperaturer, tider og teknik samlet ét sted.",
    url: "https://grillbogen.dk",
    siteName: "Grillbogen.dk",
    locale: "da_DK",
    type: "website",
  },
};

const articles = [
  {
    slug: "fuldstaendig-guide-til-gasgrill",
    title: "Fuldstændig guide til gasgrill",
    excerpt:
      "Alt du skal vide om gasgrill - fra valg og tænding til temperaturzoner og vedligeholdelse.",
    category: "Guide",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&h=700&fit=crop",
    imageAlt: "Gasgrill med flammer og mad på risten",
    imageCredit: "Lily Banse",
  },
  {
    slug: "kulgrill-vs-gasgrill",
    title: "Kulgrill eller gasgrill?",
    excerpt:
      "Den store sammenligning: smag, pris, bekvemmelighed og vedligeholdelse. Hvad passer bedst til dig?",
    category: "Guide",
    image:
      "https://images.unsplash.com/photo-1512719724284-dbb9ef47eac5?w=900&h=700&fit=crop",
    imageAlt: "Kulgrill med flammende kul klar til grillning",
    imageCredit: "Jaco Pretorius",
  },
  {
    slug: "perfekte-ribeye",
    title: "Den perfekte ribeye steak",
    excerpt:
      "Reverse sear, kernetemperaturer og de tricks der gør forskellen mellem godt og fantastisk.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=900&h=700&fit=crop",
    imageAlt: "Perfekt grillet ribeye steak med tydelige grillmærker",
    imageCredit: "Emerson Vieira",
  },
  {
    slug: "pulled-pork-paa-grillen",
    title: "Pulled pork på grillen",
    excerpt:
      "Low and slow er nøgleordet. Mørt, saftigt pulled pork med ægte røgsmag direkte på din grill.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop",
    imageAlt: "Saftigt pulled pork trukket fra hinanden i tråde",
    imageCredit: "Sander Dalhuisen",
  },
  {
    slug: "grill-for-begyndere",
    title: "Grill for begyndere",
    excerpt:
      "Første gang med grillen? Her er alt du skal vide for at komme godt i gang - uden stress.",
    category: "Guide",
    image:
      "https://images.unsplash.com/photo-1569352950703-7d2f2bdfcd71?w=900&h=700&fit=crop",
    imageAlt: "Mand der griller ved et træhegn i haven",
    imageCredit: "Zach Reiner",
  },
  {
    slug: "is-dessert-efter-grillen",
    title: "Is som dessert efter grillen",
    excerpt:
      "Den perfekte afslutning. Fra grillede frugter med flødeis til is-bar for mange gæster.",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1528344227352-9a704db46536?w=900&h=700&fit=crop",
    imageAlt: "Grillede frugter serveret med flødeis som dessert",
    imageCredit: "Dale Gray",
  },
  {
    slug: "grillede-grontsager",
    title: "Grillede grøntsager",
    excerpt:
      "Temperaturer, tider og teknikker til peberfrugter, squash, majs og meget mere.",
    category: "Teknik",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&h=700&fit=crop",
    imageAlt: "Farverige grøntsager skåret klar til grillen",
    imageCredit: "Dane Deaner",
  },
  {
    slug: "rengoering-af-grill",
    title: "Rengøring af grill",
    excerpt:
      "Hold din grill i topform. Vedligeholdelse efter hver brug, sæsonrengøring og opbevaring.",
    category: "Vedligehold",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=900&h=700&fit=crop",
    imageAlt: "Grillrist der rengøres med stålbørste",
    imageCredit: "Stephen Andrews",
  },
  {
    slug: "marinader-til-grill",
    title: "Marinader til grill",
    excerpt:
      "8 gennemtestede marinader fra klassisk BBQ til koreansk bulgogi. Plus teknikken bag.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1611171711912-e3f6b536f532?w=900&h=700&fit=crop",
    imageAlt: "Marineret kød der grilles over jævn varme",
    imageCredit: "Z Grills",
  },
  {
    slug: "varmroeget-laks",
    title: "Varmrøget laks på grillen",
    excerpt:
      "Saltlage, røgtræ og kernetemperaturer. Saftig, røgfyldt laks der overgår alt det dyre i køledisken.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1633524792906-73b111908d9c?w=900&h=700&fit=crop",
    imageAlt: "Laksefilet med skindet nedad på grillristen under varmrøgning",
    imageCredit: "Kostiantyn Li",
  },
  {
    slug: "grillet-svinemoerbrad",
    title: "Grillet svinemørbrad",
    excerpt:
      "Saftig og rosa hver gang. Marinade, kernetemperatur, hviletid og teknikken med direkte og indirekte varme.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1612156502174-bbbad9882af2?w=900&h=700&fit=crop",
    imageAlt: "Grillet svinemørbrad skåret i tykke skiver med rosa kerne",
    imageCredit: "Frank Zhang",
  },
  {
    slug: "tomahawk-paa-grillen",
    title: "Tomahawk på grillen",
    excerpt:
      "5 cm tyk kongebøf med 30 cm langt ribben. Reverse sear, krydring og hvile - så lykkes den hver gang.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1602945072881-75915b0f641f?w=900&h=700&fit=crop",
    imageAlt: "Tomahawk steak med langt ribben og tyk marmoreret kerne",
    imageCredit: "Amin Hasani",
  },
  {
    slug: "brisket-paa-grillen",
    title: "Brisket på grillen",
    excerpt:
      "Oksebryst uden smoker. Trimning, rub, stallen, kernetemperatur og den hvile de fleste springer over.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1519253328475-d8d3f8d521cc?w=900&h=700&fit=crop",
    imageAlt: "Røgen står ud af en lukket grill under langtidstilberedning",
    imageCredit: "Quilia",
  },
  {
    slug: "flanksteak-paa-grillen",
    title: "Flanksteak på grillen",
    excerpt:
      "Mest smag for pengene af alle oksebøffer. Marinade, maksimal varme og det snit der afgør om den er mør.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1530166906126-2235e533180a?w=900&h=700&fit=crop",
    imageAlt: "Kød på grillen med tydelige grillstreger og let røg",
    imageCredit: "Anthony Cantin",
  },
  {
    slug: "grillet-majs",
    title: "Grillet majs",
    excerpt:
      "Tre metoder, tider og temperaturer - plus kryddersmør og elote. Tilbehøret der klarer sig selv.",
    category: "Opskrift",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&h=700&fit=crop",
    imageAlt: "Farverige grøntsager skåret klar til grillen",
    imageCredit: "Dane Deaner",
  },
];

const featured = articles[2]; // ribeye
const secondary = [articles[0], articles[3]]; // gasgrill + pulled pork
const restOfList = articles.filter(
  (a) => a.slug !== featured.slug && !secondary.find((s) => s.slug === a.slug)
);

// ItemList over forsidens artikler. Giver Google en eksplicit liste over
// sitets vigtigste sider fra den side der har flest interne links ind.
function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grillbogen.dk",
    description:
      "Dansk grillmagasin med testede opskrifter og konkrete guides til kul, gas og røg.",
    url: "https://grillbogen.dk",
    inLanguage: "da",
    isPartOf: { "@type": "WebSite", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `https://grillbogen.dk/${a.slug}`,
      })),
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export default function Home() {
  return (
    <>
      <HomeSchema />
      {/* ============== MAGAZINE COVER HERO ============== */}
      <section className="relative bg-[var(--paper)] border-b border-[var(--paper-edge)] overflow-hidden">
        <div className="absolute inset-0 paper-grain pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-12 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* LEFT: Cover masthead */}
            <div className="md:col-span-7 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="kicker">Vol. 01 · Forår 2026</span>
              </div>

              <h1
                className="display text-[3.2rem] sm:text-[4.2rem] md:text-[5.5rem] lg:text-[6.4rem] text-[var(--ink)] mb-6"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Røg,
                <br />
                <em>glød</em>
                <br />
                &amp; håndværk.
              </h1>

              <p className="text-lg md:text-xl text-[var(--char)] leading-relaxed max-w-xl mb-10">
                Et redaktionelt grillmagasin om den ærlige varme: testede
                opskrifter, konkrete teknikker og udstyr der holder. Skrevet til
                dig der står ved grillen - ikke til algoritmen.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/grill-for-begyndere"
                  className="bg-[var(--wine)] hover:bg-[var(--wine-deep)] text-[var(--paper)] font-semibold px-7 py-3.5 transition-all no-underline text-[0.78rem] tracking-[0.22em] uppercase shadow-[5px_5px_0_var(--ink)] hover:shadow-[7px_7px_0_var(--ink)] hover:-translate-y-0.5"
                >
                  Start her →
                </Link>
                <Link
                  href="/perfekte-ribeye"
                  className="text-[var(--ink)] hover:text-[var(--wine)] font-medium px-1 py-3.5 transition-colors no-underline text-[0.85rem] underline underline-offset-4 decoration-[var(--paper-edge)] hover:decoration-[var(--wine)]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic" }}
                >
                  Bladr i opskrifterne
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-12 pt-6 border-t border-[var(--paper-edge)] max-w-xl">
                <div>
                  <div className="text-2xl font-bold text-[var(--wine)]" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                    12
                  </div>
                  <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--ash)] mt-1">
                    artikler
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--paper-edge)]" />
                <div>
                  <div className="text-2xl font-bold text-[var(--wine)]" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                    4
                  </div>
                  <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--ash)] mt-1">
                    sektioner
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--paper-edge)]" />
                <div>
                  <div className="text-2xl font-bold text-[var(--wine)]" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                    0
                  </div>
                  <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--ash)] mt-1">
                    reklamer
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Cover image plate */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] bg-[var(--ink)] overflow-hidden shadow-[12px_14px_0_var(--paper-edge)]">
                <Image
                  src="https://images.unsplash.com/photo-1558030006-450675393462?w=900&h=1200&fit=crop"
                  alt="Saftig ribeye på grillen"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className="kicker light" style={{ color: "var(--butter)" }}>
                    Forsiden
                  </span>
                  <span className="text-[var(--butter)] text-[0.7rem] tracking-[0.25em] uppercase font-bold">
                    Nr. 03
                  </span>
                </div>
                <p className="image-credit absolute bottom-1 right-3 z-20 m-0 text-[var(--smoke)]">
                  Foto:{" "}
                  <a
                    href="https://unsplash.com/@emersonvieira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--smoke)]"
                  >
                    Emerson Vieira
                  </a>{" "}
                  / Unsplash
                </p>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[var(--butter)] text-[0.65rem] tracking-[0.3em] uppercase font-bold mb-2 block">
                    Månedens opskrift
                  </span>
                  <h2
                    className="text-[var(--paper)] text-2xl md:text-3xl leading-[1.05]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700 }}
                  >
                    Den perfekte <em className="font-normal text-[var(--butter)]">ribeye</em>
                  </h2>
                  <Link
                    href="/perfekte-ribeye"
                    className="inline-flex items-center gap-2 mt-4 text-[var(--butter)] hover:text-[var(--ember)] no-underline text-[0.75rem] tracking-[0.2em] uppercase font-bold transition-colors"
                  >
                    Læs opskriften
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Decorative stamp */}
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full border-2 border-[var(--wine)] flex items-center justify-center bg-[var(--paper)] rotate-[-12deg] hidden md:flex">
                <div className="text-center">
                  <div
                    className="text-[var(--wine)] text-[0.55rem] tracking-[0.3em] uppercase font-bold"
                  >
                    Smag
                    <br />
                    først
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="flame-divider max-w-6xl mx-auto px-4">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 0c2 4-2 6-2 10 0 2.5 1.8 3.5 1.8 5.5 0 1-.5 2-1.8 2.5 1-3.8-2.8-3.8-2.8-7.6C9.2 7 13 5 14 0z" fill="var(--ember)"/>
          </svg>
        </div>
      </section>

      {/* ============== EDITOR'S NOTE ============== */}
      <section className="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
        <span className="kicker mx-auto justify-center">Redaktørens hilsen</span>
        <h2
          className="display text-3xl md:text-5xl text-[var(--ink)] mt-6 mb-6"
        >
          Velkommen til <em>Grillbogen</em>
        </h2>
        <p className="text-lg text-[var(--char)] leading-relaxed mb-4">
          Det her er for dig der elsker at stå ved grillen. Ingen lange
          forklaringer om ting du allerede ved - bare konkrete guides, testede
          opskrifter og ærlige tips der faktisk virker.
        </p>
        <p className="text-lg text-[var(--char)] leading-relaxed">
          Vi dækker alt fra valg af grill og grundlæggende teknikker til
          avanceret smoking og pulled pork.
        </p>
      </section>

      {/* ============== FEATURED + SECONDARY ============== */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-end justify-between mb-10 border-b border-[var(--paper-edge)] pb-4">
          <div>
            <span className="kicker">I dette nummer</span>
            <h2 className="display text-4xl md:text-5xl text-[var(--ink)] mt-3">
              Anbefalede læsninger
            </h2>
          </div>
          <span className="hidden md:inline issue-number">side 12-32</span>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Featured */}
          <Link
            href={`/${featured.slug}`}
            className="issue-card md:col-span-7 group no-underline"
          >
            <div className="photo relative aspect-[4/3]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute top-4 left-4">
                <span className="category-badge">{featured.category}</span>
              </div>
              <div className="absolute top-4 right-4 text-[var(--paper)] text-[0.7rem] tracking-[0.25em] uppercase font-bold drop-shadow">
                Anbefalet
              </div>
              <span className="image-credit absolute bottom-1 right-3 text-[var(--paper)]/70 drop-shadow">
                Foto: {featured.imageCredit} / Unsplash
              </span>
            </div>
            <div className="p-7 md:p-9">
              <span className="issue-number">Nr. 03</span>
              <h3
                className="text-3xl md:text-[2.4rem] leading-[1.05] text-[var(--ink)] group-hover:text-[var(--wine)] transition-colors mt-2"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                {featured.title}
              </h3>
              <p className="text-[var(--char)] mt-4 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 mt-5 text-[var(--wine)] text-[0.75rem] tracking-[0.22em] uppercase font-bold">
                Læs opskriften
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Secondary stack */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            {secondary.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="issue-card group no-underline flex-1 flex flex-col"
              >
                <div className="photo relative aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="category-badge">{article.category}</span>
                  </div>
                  <span className="image-credit absolute bottom-1 right-3 text-[var(--paper)]/70 drop-shadow">
                    Foto: {article.imageCredit} / Unsplash
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="issue-number">Nr. 0{idx + 4}</span>
                  <h3
                    className="text-xl md:text-2xl leading-[1.1] text-[var(--ink)] group-hover:text-[var(--wine)] transition-colors mt-1.5"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--char)] mt-2.5 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TOC / ALL ARTICLES ============== */}
      <section className="bg-[var(--paper-soft)] border-y border-[var(--paper-edge)] relative overflow-hidden">
        <div className="absolute inset-0 paper-grain pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <span className="kicker">Indholdsfortegnelse</span>
              <h2 className="display text-4xl md:text-5xl text-[var(--ink)] mt-4">
                Hele <em>kataloget</em>
              </h2>
              <p className="text-[var(--char)] mt-5 max-w-md">
                Bladr i samlingen af guides, opskrifter og teknikker. Hver
                artikel er testet på rigtig glød - ikke bare research bag et
                tastatur.
              </p>
            </div>
            <div className="md:col-span-7 md:pl-8 md:border-l border-[var(--paper-edge)]">
              <ul className="divide-y divide-[var(--paper-edge)]">
                {restOfList.map((article, idx) => (
                  <li key={article.slug}>
                    <Link
                      href={`/${article.slug}`}
                      className="flex items-start gap-5 py-5 group no-underline"
                    >
                      <span
                        className="text-2xl text-[var(--wine)] font-bold w-12 flex-shrink-0"
                        style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em" }}
                      >
                        {String(idx + 4).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--ash)] font-bold">
                            {article.category}
                          </span>
                          <span className="flex-1 border-b border-dotted border-[var(--paper-edge)] mb-1.5" />
                        </div>
                        <h3
                          className="text-xl md:text-[1.4rem] text-[var(--ink)] group-hover:text-[var(--wine)] transition-colors leading-tight"
                          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: "-0.02em" }}
                        >
                          {article.title}
                        </h3>
                        <p className="text-sm text-[var(--ash)] mt-1 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <span className="text-[var(--wine)] opacity-0 group-hover:opacity-100 transition-opacity pt-1.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA - DARK SMOKEHOUSE FINALE ============== */}
      <section className="relative bg-[var(--ink)] overflow-hidden">
        <div className="absolute inset-0 grain-texture" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(ellipse at 30% 50%, var(--ember) 0%, transparent 55%), radial-gradient(ellipse at 80% 60%, var(--saffron) 0%, transparent 50%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
          <span className="kicker light mx-auto justify-center">Sidste side</span>
          <h2
            className="display text-4xl md:text-6xl text-[var(--paper)] mt-6 mb-6"
          >
            Klar til at <em className="on-dark">tænde op?</em>
          </h2>
          <p className="text-lg text-[var(--smoke)] mb-10 max-w-xl mx-auto leading-relaxed">
            Start med begynderguiden, lær teknikkerne, og find din egen rytme
            ved grillen. En bid ad gangen.
          </p>
          <Link
            href="/grill-for-begyndere"
            className="inline-block bg-[var(--ember)] hover:bg-[var(--saffron)] text-[var(--ink)] font-bold px-10 py-4 transition-all no-underline text-[0.78rem] tracking-[0.22em] uppercase shadow-[6px_6px_0_var(--wine)] hover:shadow-[8px_8px_0_var(--wine-deep)] hover:-translate-y-0.5"
          >
            Læs begynderguiden →
          </Link>
        </div>
      </section>
    </>
  );
}
