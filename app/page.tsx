import Link from 'next/link';

const articles = [
  {
    slug: 'fuldstaendig-guide-til-gasgrill',
    title: 'Fuldstændig Guide til Gasgrill',
    excerpt: 'Alt du skal vide om at grille på gasgrill - fra tænding til rengøring.',
    category: 'Guides'
  },
  {
    slug: 'kulgrill-eller-gasgrill',
    title: 'Kulgrill eller Gasgrill?',
    excerpt: 'Vi sammenligner fordele og ulemper ved de to mest populære grilltyper.',
    category: 'Guides'
  },
  {
    slug: 'perfekte-ribeye',
    title: 'Den Perfekte Ribeye Steak',
    excerpt: 'Step-by-step guide til at grille en mør og saftig ribeye hver gang.',
    category: 'Opskrifter'
  },
  {
    slug: 'groentsager-paa-grillen',
    title: 'Grøntsager på Grillen',
    excerpt: 'Glem ikke grøntsagerne! Sådan griller du perfekte grøntsager.',
    category: 'Opskrifter'
  },
  {
    slug: 'rengøring-af-grill',
    title: 'Rengøring af Grill',
    excerpt: 'Hold din grill ren og funktionsdygtig med disse simple tips.',
    category: 'Vedligeholdelse'
  },
  {
    slug: 'bedste-grill-tilbehoer',
    title: 'Bedste Grill-Tilbehør 2026',
    excerpt: 'Det nødvendige tilbehør der gør din grilloplevelse bedre.',
    category: 'Anmeldelser'
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--fire-red)] to-[var(--ember)] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Grillbogen.dk
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Alt om grill - fra begynder til grill-mester
          </p>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Lær at mestre både gasgrill og kulgrill. Opskrifter, teknikker og tips til den perfekte grill-oplevelse.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4">
          Velkommen til Danmarks Grillguide
        </h2>
        <p className="text-[var(--smoke)] leading-relaxed mb-4">
          Grillbogen.dk er din komplette reference til alt om grill. Uanset om du er nybegynder der lige har købt din første grill, eller erfaren grillmester der søger nye teknikker og opskrifter - her finder du det du skal bruge.
        </p>
        <p className="text-[var(--smoke)] leading-relaxed">
          Vi dækker alt fra valg af grill, grundlæggende teknikker, vedligeholdelse og naturligvis massevis af opskrifter der får vandet til at løbe i munden.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-8">
          Populære Artikler
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/${article.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-t-4 border-[var(--fire-red)]"
            >
              <span className="text-sm text-[var(--ember)] font-semibold mb-2 block">
                {article.category}
              </span>
              <h3 className="text-xl font-bold text-[var(--charcoal)] mb-2">
                {article.title}
              </h3>
              <p className="text-[var(--smoke)]">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--wood)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klar til at Tænde Grillen?
          </h2>
          <p className="text-lg opacity-90">
            Udforsk vores guides og bliv den grillmester du altid har drømt om.
          </p>
        </div>
      </section>
    </>
  );
}
