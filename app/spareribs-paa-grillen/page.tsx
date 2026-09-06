import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spareribs på grillen: 3-2-1 metoden og den hurtige vej",
  description: "Møre spareribs på kul- eller gasgrill. Membran, rub, tider og temperaturer - plus den hurtige metode når gæsterne kommer om to timer.",
  alternates: {
    canonical: "/spareribs-paa-grillen",
  },
  openGraph: {
    title: "Spareribs på grillen: 3-2-1 metoden og den hurtige vej",
    description: "Møre spareribs på kul- eller gasgrill. Membran, rub, tider og temperaturer - plus den hurtige metode når gæsterne kommer om to timer.",
    url: "https://grillbogen.dk/spareribs-paa-grillen",
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
      headline: "Spareribs på grillen - 3-2-1 metoden og den hurtige vej",
      description: "Møre spareribs på kul- eller gasgrill. Membran, rub, tider og temperaturer - plus den hurtige metode når gæsterne kommer om to timer.",
      url: "https://grillbogen.dk/spareribs-paa-grillen",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/spareribs-paa-grillen",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Spareribs på grillen", item: "https://grillbogen.dk/spareribs-paa-grillen" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hvor lang tid skal spareribs have på grillen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Low and slow ved 110-120 grader tager 5-6 timer med 3-2-1 metoden. Den hurtige vej - forkogning i 45 minutter og 20-30 minutter på grillen - er klar på under to timer, men giver mindre røgsmag.",
          },
        },
        {
          "@type": "Question",
          name: "Skal membranen fjernes fra spareribs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Membranen på benenes bagside bliver sej som pergament og blokerer for rub og røg. Løsn et hjørne med en teske, tag fat med et stykke køkkenrulle og træk den af i ét stykke.",
          },
        },
        {
          "@type": "Question",
          name: "Hvornår er spareribs færdige?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kødet skal trække sig 5-10 mm tilbage fra benenderne, og racket skal bøje sig tungt når du løfter det i den ene ende med en tang. Kernetemperaturen ligger da typisk omkring 92-95 grader.",
          },
        },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function SpareribsPaaGrillen() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1558030137-d464dd688b00?w=1400&h=500&fit=crop"
          alt="Spareribs med mørk bark på grillristen"
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
            Spareribs på grillen
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Spareribs på grillen</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Spareribs er den ret flest har fået ødelagt på en dansk grill. Seje, tørre ben med brændt barbecuesauce udenpå og gråt kød indeni. Det er ikke ribbenenes skyld - det er tidens. Ribs kræver lav varme og tålmodighed, og til gengæld er de næsten umulige at ødelægge når først du kører dem rigtigt.
        </p>

        <div className="prose max-w-none">
          <h2>Køb de rigtige ribs</h2>
          <p>
            I den danske køledisk møder du typisk to udskæringer, og forskellen betyder mere end mærket på pakken:
          </p>
          <ul>
            <li><strong>Spareribs (St. Louis cut):</strong> Fra grisens bug, flade og fede med meget smag. De tåler lang tid på grillen og er den klassiske BBQ-udskæring.</li>
            <li><strong>Baby back ribs (kamben):</strong> Fra ryggen, kortere og mere buede med magrere kød. De bliver hurtigere færdige - og hurtigere tørre.</li>
          </ul>
          <p>
            Kig efter racks med jævnt kødlag hen over benene. Et rack hvor benene stikker nøgne frem allerede i køledisken, har ikke noget at give af. Regn med et helt rack spareribs per to personer - eller per én, hvis der er tale om folk der har glædet sig.
          </p>
          <p>
            Undgå de færdigmarinerede. Marinaden gemmer på kød af svingende kvalitet, og den søde lage brænder på længe før ribbenene er møre. Køb dem nøgne og krydr selv.
          </p>

          <h2>Membranen skal af</h2>
          <p>
            Vend racket om. På bagsiden sidder en blank, sølvgrå hinde hen over benene - membranen. Den bliver sej som pergament under tilberedning og blokerer for både rub og røg. Løsn et hjørne ved det yderste ben med en teske, tag fat med et stykke køkkenrulle så fingrene ikke glider, og træk den af i ét roligt stykke. Tager det tre forsøg, er det stadig tre minutter godt givet ud.
          </p>

          <h2>Rub: enkel og rigelig</h2>
          <p>
            En god rub behøver ikke 15 ingredienser. Til to racks:
          </p>
          <ul>
            <li>3 spsk brun farin</li>
            <li>2 spsk røget paprika</li>
            <li>1 spsk groft salt</li>
            <li>1 spsk friskkværnet peber</li>
            <li>1 tsk hvidløgspulver</li>
            <li>1 tsk løgpulver</li>
          </ul>
          <p>
            Gnid begge sider grundigt og lad racksene stå tildækket i køleskabet en times tid - gerne natten over. Sukkeret trækker fugt ud, opløser sig og lægger fundamentet for barken.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Membran af, rub på. 3-2-1 ved 110-120°C: 3 timer i røg, 2 timer i folie, 1 time med glaze. Færdige når kødet er trukket 5-10 mm tilbage fra benene. Travlt? Forkog 45 min og grill 20-30 min.
          </div>

          <h2>3-2-1 metoden: den sikre vej</h2>
          <p>
            3-2-1 er standardmetoden af en grund: den virker hver gang, også første gang. Sæt grillen op til indirekte varme ved 110-120°C - på kulgrill med kullene i den ene side, på gasgrill med de midterste blus slukket. Læg et par stykker rygetræ ved. Æble eller kirsebær klæder svinekød; hickory hvis du vil have mere røg i front.
          </p>
          <ol>
            <li><strong>3 timer i røg.</strong> Racksene ligger med benene nedad på den indirekte side. Lad låget være lukket - hver gang du kigger, taber grillen varme.</li>
            <li><strong>2 timer i folie.</strong> Pak hvert rack i dobbelt alufolie med en sjat æblejuice eller en klat smør og lidt farin. Dampen gør arbejdet med bindevævet, og det er her mørheden opstår.</li>
            <li><strong>1 time med glaze.</strong> Ud af folien og tilbage på risten. Pensl med barbecuesauce de sidste 20-30 minutter - aldrig tidligere, for sukkeret i saucen brænder ved omkring 150°C.</li>
          </ol>
          <p>
            Kører du baby back ribs, så klip en time af: 2-2-1 passer bedre til det magrere kød.
          </p>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1679711246825-1f2bd51b16d0?w=800&h=450&fit=crop"
                alt="Rack af spareribs under langtidstilberedning på grillen"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@trytoscareme" target="_blank" rel="noopener noreferrer">Brian Wegman</a> / Unsplash</p>
          </div>

          <h2>Den hurtige vej: når gæsterne kommer om to timer</h2>
          <p>
            Lad os være ærlige: nogle gange er der ikke seks timer. Forkogning er ikke fint i BBQ-kredse, men det slår tørre ribs med længder.
          </p>
          <ol>
            <li>Læg racksene i en stor gryde med vand, et par laurbærblade, peberkorn og en spsk salt.</li>
            <li>Lad dem simre - ikke bulderkoge - i 45-60 minutter, til kødet giver efter for en gaffel.</li>
            <li>Dup dem tørre, gnid dem med rub og læg dem på grillen ved middelvarme, cirka 180°C.</li>
            <li>20-30 minutter med vending og penslinger af barbecuesauce de sidste ti minutter.</li>
          </ol>
          <p>
            Du mister røgdybden og den rigtige bark. Til gengæld står du med møre, glaserede ribs på under to timer, og ingen ved bordet kommer til at klage.
          </p>

          <h2>Hvornår er de færdige?</h2>
          <p>
            Kernetermometeret er sværere at bruge på ribs end på en <Link href="/perfekte-ribeye">ribeye</Link> - benene forstyrrer målingen. Brug øjnene og tangen i stedet:
          </p>
          <ul>
            <li><strong>Tilbagetrækning:</strong> Kødet skal have trukket sig 5-10 mm tilbage fra benenderne, så benene stikker nøgne frem.</li>
            <li><strong>Bøjetesten:</strong> Løft racket i den ene ende med en tang. Det skal bøje tungt og barken skal krakelere på oversiden. Knækker det midt over, er du forbi - stadig spiseligt, men "falder af benet" er faktisk et overdrev og ikke målet.</li>
            <li><strong>Temperaturen</strong>, hvis du måler mellem benene: 92-95°C.</li>
          </ul>

          <div className="tip-box">
            <strong>Drop "falder af benet":</strong> Perfekte ribs slipper benet med et let bid og efterlader et rent ben - de falder ikke af ved synet af en gaffel. Kød der falder af, er kogt ud i folien. Målet er modstand nok til at du kan smage at det er kød.
          </div>

          <h2>Servering og tilbehør</h2>
          <p>
            Lad racksene hvile ti minutter under løst folie, og skær dem i enkeltben med et skarpt snit midt mellem benene. Klassikerne fungerer: coleslaw med syre nok til at skære igennem fedtet, <Link href="/grillet-majs">grillet majs</Link>, og brød til at samle saucen op med. Skal grøntsagsdelen have mere opmærksomhed, så kig i <Link href="/grillede-grontsager">guiden til grillede grøntsager</Link>.
          </p>

          <h2>De typiske fejl</h2>
          <ul>
            <li><strong>Membranen sidder på:</strong> Sej hinde, ingen røgsmag på bagsiden. To minutters arbejde sparet, hele racket forringet.</li>
            <li><strong>For høj varme:</strong> Ribs over direkte varme bliver brændte udenpå og seje indeni. Bindevæv kræver tid ved lav temperatur - der er ingen genvej over flammerne.</li>
            <li><strong>Sauce for tidligt:</strong> Barbecuesauce indeholder sukker, og sukker brænder. De sidste 20-30 minutter, ikke før.</li>
            <li><strong>Folietrinnet springes over:</strong> Kan lade sig gøre, men kræver flere timer og mere styring. Med folie er mørheden næsten garanteret.</li>
            <li><strong>Ingen hvile:</strong> Ti minutter under folie fordeler saften. Skærer du med det samme, ligger den på skærebrættet i stedet for i kødet.</li>
          </ul>

          {/* YouTube video - verificeret via oembed 2026-09-06 */}
          <h2>Se det i praksis</h2>
          <p>
            Møre spareribs fra rub til glaze, trin for trin:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/1V4r81O25aQ"
              title="Møre Spareribs På Grillen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: MrBeef (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Er du klar til den store disciplin? <Link href="/brisket-paa-grillen">Brisket-guiden</Link> kører samme teknik i XXL</li>
            <li>Samme lave varme, mindre kød: <Link href="/pulled-pork-paa-grillen">pulled pork på grillen</Link></li>
            <li>Bland din egen rub og marinade med <Link href="/marinader-til-grill">marinade-guiden</Link></li>
            <li>Styr temperaturzonerne med <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link> eller vælg rigtigt i <Link href="/kulgrill-vs-gasgrill">kul vs. gas</Link></li>
            <li>Fedtet efterlader spor - se <Link href="/rengoering-af-grill">rengøring af grill</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
