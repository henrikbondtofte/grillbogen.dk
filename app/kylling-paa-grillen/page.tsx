import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kylling på grillen: hel kylling, bryst og lår uden tørt kød",
  description: "Hel kylling, kyllingebryst og lår på grillen. Spatchcock, saltlage, kernetemperaturer og de fejl der gør kyllingen tør - samlet i én guide.",
  alternates: {
    canonical: "/kylling-paa-grillen",
  },
  openGraph: {
    title: "Kylling på grillen: hel kylling, bryst og lår uden tørt kød",
    description: "Hel kylling, kyllingebryst og lår på grillen. Spatchcock, saltlage, kernetemperaturer og de fejl der gør kyllingen tør - samlet i én guide.",
    url: "https://grillbogen.dk/kylling-paa-grillen",
    siteName: "Grillbogen.dk",
    locale: "da_DK",
    type: "article",
  },
};

function ArticleSchema() {
  // Hardcoded schema data - no user input, safe to render
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Kylling på grillen - hel kylling, bryst og lår uden tørt kød",
      description: "Hel kylling, kyllingebryst og lår på grillen. Spatchcock, saltlage, kernetemperaturer og de fejl der gør kyllingen tør - samlet i én guide.",
      url: "https://grillbogen.dk/kylling-paa-grillen",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/kylling-paa-grillen",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Kylling på grillen", item: "https://grillbogen.dk/kylling-paa-grillen" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hvor længe skal en hel kylling have på grillen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En hel kylling på 1,4-1,6 kg tager 60-75 minutter ved 180-200 grader indirekte varme. Spatchcock - hvor rygbenet klippes ud og kyllingen foldes flad - skærer tiden ned til 40-50 minutter og giver sprødt skind over det hele.",
          },
        },
        {
          "@type": "Question",
          name: "Hvilken kernetemperatur skal grillet kylling have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brystkød er færdigt ved 72-74 grader, lår og underlår ved 80-85 grader hvor bindevævet er smeltet. Mål på det tykkeste sted uden at ramme ben. Kylling skal altid være gennemstegt - der er ingen rosa mellemvej som på oksekød.",
          },
        },
        {
          "@type": "Question",
          name: "Hvordan undgår man tørt kyllingebryst på grillen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brug en simpel saltlage på 30 minutter, grill ved middelvarme i stedet for fuld knald, og tag brystet af ved 72-74 grader kernetemperatur. De fleste tørre bryster er ikke grillet forkert - de er grillet for længe.",
          },
        },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function KyllingPaaGrillen() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?w=1400&h=500&fit=crop"
          alt="Hel kylling med gyldent skind under tilberedning på grillen"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)]/80 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-4xl mx-auto px-4 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="category-badge">Opskrifter</span>
            <div className="h-px w-8 bg-[var(--ember)]/50" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: '-0.025em' }}>
            Kylling på grillen
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Kylling på grillen</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Kylling er det kød flest griller - og det kød der oftest går galt. Enten er skindet sort og kødet råt ved benet, eller også er brystet så tørt at det skal skylles ned. Begge dele har samme årsag: kylling bliver behandlet som en bøf, og det er den ikke. Her er teknikken til hel kylling, bryst og lår - uden tørre overraskelser.
        </p>

        <div className="prose max-w-none">
          <h2>Vælg din kylling</h2>
          <p>
            Kvaliteten kan smages tydeligere på kylling end på de fleste andre råvarer. En billig turbokylling er vokset op på 30 dage og smager derefter - meget vand, lidt kød. En langsomt voksende kylling eller en økologisk fugl har fastere kød, mere smag og et fedtlag under skindet der faktisk kan blive sprødt.
          </p>
          <ul>
            <li><strong>Hel kylling, 1,4-1,6 kg:</strong> Den bedste økonomi og den flotteste servering. Kræver indirekte varme og tid.</li>
            <li><strong>Bryst:</strong> Hurtigst og magrest - og dermed lettest at ødelægge. Saltlage er din redning.</li>
            <li><strong>Lår og underlår:</strong> Det mest taknemmelige grillkød overhovedet. Mere fedt, mere smag, og næsten umulige at tørre ud.</li>
          </ul>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Hel kylling: 60-75 min indirekte ved 180-200°C, kernetemp 74°C i brystet. Spatchcock: 40-50 min. Bryst: saltlage 30 min, 6-8 min per side ved middelvarme. Lår: 35-45 min indirekte, 80-85°C i kernen.
          </div>

          <h2>Saltlagen: ti minutters arbejde, hele forskellen</h2>
          <p>
            Kyllingebryst uden saltlage er et sats. Med saltlage er det næsten snyd. Saltet trænger ind i kødet, løsner proteinstrukturen og holder på væsken under grillningen.
          </p>
          <ol>
            <li>Rør 1 liter koldt vand med 60 g salt og 30 g sukker til det er opløst.</li>
            <li>Læg brysterne i lagen - 30 minutter i køleskabet er nok. En hel kylling må gerne få 2-4 timer.</li>
            <li>Skyl kort, og dup kødet <em>helt</em> tørt. Vådt skind bliver aldrig sprødt.</li>
          </ol>
          <p>
            Vil du videre derfra, så tilsæt laurbærblade, peberkorn, hvidløg eller citronskal til lagen. Men salt og sukker gør 90 procent af arbejdet.
          </p>

          <h2>Hel kylling: indirekte varme og lukket låg</h2>
          <p>
            En hel kylling over direkte flammer ender altid samme sted: forkullet udenpå, rå indeni. Den skal ligge på den indirekte side af grillen - kul i den ene side, kyllingen i den anden, eller de midterste blus slukket på gasgrillen. Har du styr på zonerne fra <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link>, er det samme princip.
          </p>
          <ol>
            <li>Gnid den tørre kylling med olie, salt, peber og røget paprika - også i hulrummet.</li>
            <li>Læg den med brystet opad på den indirekte side ved 180-200°C og luk låget.</li>
            <li>Lad den passe sig selv i 60-75 minutter. Ingen vending, ingen kiggen hvert femte minut.</li>
            <li>Mål kernetemperaturen i den tykkeste del af brystet uden at ramme ben: 72-74°C. Låret skal ramme 80-85°C.</li>
            <li>Hvil fuglen 10-15 minutter under løst folie før du skærer.</li>
          </ol>

          <h3>Spatchcock: den bedre måde</h3>
          <p>
            Klip rygbenet ud med en fjerkræsaks, vend kyllingen om og tryk den flad med håndroden til brystbenet giver et knæk. Nu ligger hele fuglen i ét jævnt lag: den bliver færdig på 40-50 minutter, bryst og lår bliver færdige næsten samtidig, og alt skindet vender opad og bliver sprødt. Det er fem minutters klippearbejde for et markant bedre resultat - den hele, runde kylling vinder kun på udseendet.
          </p>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1630564510761-a560db92a09b?w=800&h=450&fit=crop"
                alt="Grillet kylling med sprødt, gyldent skind på sort grillrist"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@mandimelanie" target="_blank" rel="noopener noreferrer">Amanda Lim</a> / Unsplash</p>
          </div>

          <h2>Kyllingebryst: middelvarme og termometer</h2>
          <p>
            Fuld varme er brystets værste fjende. Det magre kød går fra saftigt til savsmuld på få grader, og over høj direkte varme har du ingen margin.
          </p>
          <ol>
            <li>Saltlage som beskrevet, dup tørt, pensl med olie.</li>
            <li>Grill ved middelvarme, 180-200°C direkte, 6-8 minutter per side.</li>
            <li>Er brystet meget tykt i den ene ende, så bank det let fladt først - jævn tykkelse er jævn tilberedning.</li>
            <li>Af ved 72-74°C i kernen. Termometeret er ikke til forhandling her - <Link href="/perfekte-ribeye">tommelfingertests</Link> hører til på oksekød.</li>
            <li>Hvil 5 minutter før du skærer.</li>
          </ol>

          <h2>Lår og underlår: dem der tilgiver alt</h2>
          <p>
            Lårkød har fedt og bindevæv nok til at klare både lidt for lang tid og lidt for høj varme. Det er stedet at starte som nybegynder - og stedet de erfarne vender tilbage til, fordi smagen simpelthen er bedre. Er du helt ny ved grillen, så læs <Link href="/grill-for-begyndere">begynder-guiden</Link> først og øv dig på lår.
          </p>
          <ol>
            <li>Krydr med rub - samme blanding som til <Link href="/spareribs-paa-grillen">spareribs</Link> fungerer perfekt.</li>
            <li>Start indirekte ved 180°C i 30-35 minutter med skindsiden opad.</li>
            <li>Flyt dem over direkte varme de sidste 5-10 minutter for sprødt skind - hold øje, fedtet drypper og flammerne blusser op.</li>
            <li>Kernetemperatur 80-85°C. Ved 74°C er låret sikkert at spise, men sejt; bindevævet skal have de ekstra grader for at smelte.</li>
          </ol>

          <div className="tip-box">
            <strong>Marinade med sukker = sidst på grillen:</strong> Honning, barbecuesauce og søde marinader brænder ved cirka 150°C. Grill kyllingen næsten færdig først, og pensl de sidste 5-10 minutter. Skal marinaden virke i dybden, så brug <Link href="/marinader-til-grill">en uden sukker</Link> og tilsæt det søde til sidst.
          </div>

          <h2>De fem typiske fejl</h2>
          <ul>
            <li><strong>Direkte varme til hel kylling:</strong> Sort skind, råt kød. Indirekte varme og lukket låg er den eneste vej.</li>
            <li><strong>Ingen termometer:</strong> Kylling skal være gennemstegt, og gæt er ikke en metode. Et kernetermometer koster mindre end den kylling du smider ud.</li>
            <li><strong>Vådt skind:</strong> Fugt damper i stedet for at brune. Dup kyllingen tør - grundigt - før den rammer risten.</li>
            <li><strong>Brystet af ved samme tid som lårene:</strong> De er færdige ved forskellige temperaturer. Spatchcock mindsker problemet; termometeret løser det.</li>
            <li><strong>Ingen hvile:</strong> 10 minutter for hel kylling, 5 for bryst. Saften skal fordele sig, ikke løbe ud på skærebrættet.</li>
          </ul>

          <h2>Tilbehør</h2>
          <p>
            Kylling er neutral nok til at tilbehøret må fylde: <Link href="/grillet-majs">grillet majs med kryddersmør</Link>, <Link href="/grillede-grontsager">grillede grøntsager</Link> med syrlig dressing, eller en kold kartoffelsalat. Og skal måltidet slutte ordentligt, står <Link href="/is-dessert-efter-grillen">is-guiden</Link> klar.
          </p>

          {/* YouTube video - verificeret via oembed 2026-09-06 */}
          <h2>Se det i praksis</h2>
          <p>
            Hel kylling på grillen fra krydring til udskæring:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/zQO7-b5r8GU"
              title="Hel kylling på grill"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Madens Verden (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Byg videre på rub og lage med <Link href="/marinader-til-grill">marinade-guiden</Link></li>
            <li>Kør kyllingelår og <Link href="/grillspyd">grillspyd</Link> samme aften - de deler varmezone</li>
            <li>Fisk i stedet? <Link href="/varmroeget-laks">Varmrøget laks</Link> bruger samme indirekte teknik</li>
            <li>Vælg det rigtige grej i <Link href="/kulgrill-vs-gasgrill">kulgrill vs. gasgrill</Link></li>
            <li>Kyllingefedt sviner - se <Link href="/rengoering-af-grill">rengøring af grill</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
