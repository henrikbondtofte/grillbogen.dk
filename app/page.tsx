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
      {/* Hero Section */}
      <section className="relative bg-[var(--charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&h=600&fit=crop"
            alt="Saftige steaks på en varm grill"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-[var(--charcoal)]/60 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-[var(--ember)] text-white text-sm font-semibold px-3 py-1 rounded-full mb-6">
              Danmarks Grillguide
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Mestre grillen.
              <br />
              <span className="text-[var(--ember)]">Hver eneste gang.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Guides, opskrifter og teknikker til dig der vil have mere ud af
              din grill. Uanset om du er helt grøn eller erfaren grillmester.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/grill-for-begyndere"
                className="bg-[var(--ember)] hover:bg-[var(--fire-red)] text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline"
              >
                Start her
              </Link>
              <Link
                href="/perfekte-ribeye"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline border border-white/20"
              >
                Se opskrifter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--charcoal)] mb-6">
          Velkommen til Grillbogen
        </h2>
        <p className="text-lg text-[var(--smoke)] leading-relaxed mb-4">
          Grillbogen.dk er for dig der elsker at stå ved grillen. Her finder du
          ingen lange forklaringer om ting du allerede ved - bare konkrete
          guides, testede opskrifter og ærlige tips der faktisk virker.
        </p>
        <p className="text-lg text-[var(--smoke)] leading-relaxed">
          Vi dækker alt fra valg af grill og grundlæggende teknikker til
          avanceret smoking og pulled pork. Klar til at tænde op?
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold text-[var(--charcoal)]">
            Populære Guides
          </h2>
          <span className="hidden md:block h-px flex-1 bg-gray-200 mx-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="article-card group bg-white rounded-xl overflow-hidden shadow-md no-underline"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[var(--ember)] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--charcoal)] mb-2 group-hover:text-[var(--ember)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--smoke)] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--wood)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYyaDJ2Mmgtdi0yaC0ydi0yem0wLTMwVjBoMnY0aDJ2Mmgtdi0ySDM2em0tMzAgMGgkdjJIMHYtMmg0djJoMnYtMnptMCAzMHYtMmgydjRIMHYtMmg0em0xMi0xMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] " />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Klar til at tænde grillen?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Start med vores begynderguide og bliv den grillmester du altid har
            drømt om at være.
          </p>
          <Link
            href="/grill-for-begyndere"
            className="inline-block bg-white text-[var(--wood)] font-bold px-8 py-3 rounded-lg hover:bg-[var(--cream)] transition-colors no-underline"
          >
            Læs begynderguiden
          </Link>
        </div>
      </section>
    </>
  );
}
