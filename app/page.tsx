import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    slug: "fuldstaendig-guide-til-gasgrill",
    title: "Fuldstændig Guide til Gasgrill",
    excerpt:
      "Alt du skal vide om gasgrill - fra valg og tænding til temperaturzoner og vedligeholdelse.",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    imageCredit: "Lily Banse",
  },
  {
    slug: "kulgrill-vs-gasgrill",
    title: "Kulgrill eller Gasgrill?",
    excerpt:
      "Den store sammenligning: Smag, pris, bekvemmelighed og vedligeholdelse. Hvad passer bedst til dig?",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecf0?w=600&h=400&fit=crop",
    imageCredit: "Evan Wise",
  },
  {
    slug: "perfekte-ribeye",
    title: "Den Perfekte Ribeye Steak",
    excerpt:
      "Step-by-step: Reverse sear, kernetemperaturer og de tricks der gør forskellen mellem godt og fantastisk.",
    category: "Opskrifter",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop",
    imageCredit: "Emerson Vieira",
  },
  {
    slug: "pulled-pork-paa-grillen",
    title: "Pulled Pork på Grillen",
    excerpt:
      "Low and slow er nøgleordet. Lær at lave mørt, saftigt pulled pork med røgsmag direkte på din grill.",
    category: "Opskrifter",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    imageCredit: "John Doe",
  },
  {
    slug: "grill-for-begyndere",
    title: "Grill for Begyndere",
    excerpt:
      "Første gang med grillen? Her er alt du skal vide for at komme godt i gang - uden stress.",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1504564321926-4bd1b3929d93?w=600&h=400&fit=crop",
    imageCredit: "Vincent Keiman",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Full dramatic smokehouse feel */}
      <section className="relative bg-[var(--obsidian)] overflow-hidden grain-texture">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&h=600&fit=crop"
            alt="Saftige steaks på en varm grill"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/70 to-[var(--obsidian)]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)] via-transparent to-[var(--obsidian)]/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-[var(--ember)] to-transparent" />
              <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-[0.25em]">
                Danmarks Grillguide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Mestre grillen.
              <br />
              <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--gold)] to-[var(--ember)] bg-clip-text text-transparent">
                Hver eneste gang.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-stone-400 mb-10 leading-relaxed max-w-xl">
              Guides, opskrifter og teknikker til dig der vil have mere ud af
              din grill. Uanset om du er helt grøn eller erfaren grillmester.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/grill-for-begyndere"
                className="bg-gradient-to-r from-[var(--ember)] to-[var(--copper)] hover:from-[var(--copper)] hover:to-[var(--ember)] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-900/25 hover:shadow-orange-900/40 no-underline text-sm uppercase tracking-wider"
              >
                Start her
              </Link>
              <Link
                href="/perfekte-ribeye"
                className="bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all no-underline border border-white/10 hover:border-white/20 text-sm uppercase tracking-wider"
              >
                Se opskrifter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 pt-8 pb-16">
        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
          <div className="absolute -top-4 left-8">
            <span className="bg-[var(--charcoal)] text-[var(--sand)] text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Velkommen
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--charcoal)] mb-5 mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Velkommen til Grillbogen
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-4">
            Grillbogen.dk er for dig der elsker at stå ved grillen. Her finder du
            ingen lange forklaringer om ting du allerede ved - bare konkrete
            guides, testede opskrifter og ærlige tips der faktisk virker.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Vi dækker alt fra valg af grill og grundlæggende teknikker til
            avanceret smoking og pulled pork. Klar til at tænde op?
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--charcoal)] whitespace-nowrap" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Populære Guides
          </h2>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="article-card group bg-white rounded-2xl overflow-hidden no-underline"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="category-badge">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[var(--charcoal)] mb-2.5 group-hover:text-[var(--ember)] transition-colors leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {article.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[var(--ember)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Læs mere</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section - Warm smokehouse */}
      <section className="relative bg-[var(--charcoal)] overflow-hidden grain-texture">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, var(--ember) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--gold) 0%, transparent 50%)"
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[var(--ember)]" />
            <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-[0.2em]">Kom i gang</span>
            <div className="h-px w-8 bg-[var(--ember)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Klar til at tænde grillen?
          </h2>
          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Start med vores begynderguide og bliv den grillmester du altid har
            drømt om at være.
          </p>
          <Link
            href="/grill-for-begyndere"
            className="inline-block bg-gradient-to-r from-[var(--ember)] to-[var(--copper)] text-white font-bold px-10 py-4 rounded-xl hover:from-[var(--copper)] hover:to-[var(--ember)] transition-all shadow-lg shadow-orange-900/25 no-underline text-sm uppercase tracking-wider"
          >
            Læs begynderguiden
          </Link>
        </div>
      </section>
    </>
  );
}
