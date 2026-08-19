import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flanksteak på grillen: marinade, hed varme og det rigtige snit",
  description: "Flanksteak på grill fra start til slut: udskæringen, marinaden der virker, den høje direkte varme, kernetemperatur og hvorfor snittet afgør alt.",
  alternates: {
    canonical: "/flanksteak-paa-grillen",
  },
  openGraph: {
    title: "Flanksteak på grillen: marinade, hed varme og det rigtige snit",
    description: "Flanksteak på grill fra start til slut: udskæringen, marinaden der virker, den høje direkte varme, kernetemperatur og hvorfor snittet afgør alt.",
    url: "https://grillbogen.dk/flanksteak-paa-grillen",
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
      headline: "Flanksteak på Grillen - Komplet Guide",
      description: "Flanksteak på grill fra start til slut: udskæringen, marinaden der virker, den høje direkte varme, kernetemperatur og hvorfor snittet afgør alt.",
      url: "https://grillbogen.dk/flanksteak-paa-grillen",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/flanksteak-paa-grillen",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Flanksteak på grillen", item: "https://grillbogen.dk/flanksteak-paa-grillen" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hvor længe skal flanksteak have på grillen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "3-5 minutter på hver side over høj direkte varme. En flanksteak er typisk 2 cm tyk og bliver færdig hurtigt. Mål kernetemperaturen - 52-54 grader giver medium rare.",
          },
        },
        {
          "@type": "Question",
          name: "Hvad er flanksteak på dansk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Flanksteak er slagsiden - bugmusklen fra oksens underside bag ribbenene. Den er flad, aflang og har meget grove, tydelige kødfibre.",
          },
        },
        {
          "@type": "Question",
          name: "Skal flanksteak marineres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Flanksteak er mager og grovfibret, og en marinade med syre og olie i 4-12 timer gør reel forskel for både mørhed og smag. Marinér ikke over 24 timer - så bliver overfladen grødet.",
          },
        },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function FlanksteakPaaGrillen() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1503220178855-e31ec372b8ad?w=1400&h=500&fit=crop"
          alt="Bøf der steger over åbne flammer på en kulgrill"
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
            Flanksteak på Grillen
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Flanksteak på grillen</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Flanksteak giver dig mest smag for pengene af alle oksekødsudskæringer. Den koster en brøkdel af en ribeye, tager under ti minutter over kullene og smager af mere okse end det halve kølemontre. Til gengæld straffer den to fejl hårdt: for lidt varme og et forkert snit.
        </p>

        <div className="prose max-w-none">
          <h2>Hvad er flanksteak?</h2>
          <p>
            Flanksteak er slagsiden - bugmusklen der sidder på oksens underside lige bag ribbenene. Den er flad, aflang og typisk 1,5-2,5 cm tyk, og den vejer normalt 600-900 gram. Det mest karakteristiske ved den er fibrene: de er grove, lange og løber synligt på langs af hele stykket. Det er derfor du kan se strukturen med det blotte øje.
          </p>
          <p>
            Musklen har arbejdet hele oksens liv, og det giver den to egenskaber. Den har voldsom kødsmag - langt mere markant end mørbrad eller filet. Og den er mager, med næsten ingen intramuskulær marmorering. Det betyder at du ikke har fedt som sikkerhedsnet. Griller du den for længe, er der intet der redder dig.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Marinér 4-12 timer, tør kødet helt af, læg det på maksimal direkte varme i 3-5 minutter pr. side til kernetemperatur 52-54°C, hvil 10 minutter, skær i tynde skiver på tværs af fibrene i en 45 graders vinkel.
          </div>

          <h2>Flanksteak, bavette og onglet - hold dem adskilt</h2>
          <p>
            De tre udskæringer bliver forvekslet konstant, også i danske kølediske. De ligner hinanden, men opfører sig ikke ens:
          </p>
          <ul>
            <li><strong>Flanksteak (slagside):</strong> Bred, flad, ensartet tykkelse. Grove fibre der løber på langs. Mager. Det er den her guide handler om.</li>
            <li><strong>Bavette (skirt steak):</strong> Smallere og tyndere, med mere fedt gennem kødet. Bliver færdig endnu hurtigere - regn med 2-3 minutter pr. side.</li>
            <li><strong>Onglet (nyretap):</strong> Tyk, kort muskel med en kraftig sene ned gennem midten som skal skæres ud. Mest markant smag af de tre, nærmest lidt jernagtig.</li>
          </ul>
          <p>
            Får du solgt en bavette som flanksteak, er det ikke en katastrofe - men skru tiden ned. Den tyndere udskæring er færdig mens du stadig venter på den anden.
          </p>

          <h2>Marinaden</h2>
          <p>
            På en ribeye er marinade unødvendig. På en flanksteak er den forskellen mellem godt og virkelig godt. Kødet er magert og grovfibret, og en marinade med både syre og olie trænger ind mellem de åbne fibre på en måde den ikke gør i en tætpakket bøf.
          </p>
          <p>
            En marinade der virker til 800 g flanksteak:
          </p>
          <ul>
            <li>4 spsk olivenolie</li>
            <li>4 spsk soja</li>
            <li>2 spsk balsamico eller saft af 1 lime</li>
            <li>3 fed hvidløg, knust</li>
            <li>1 spsk brun farin eller honning</li>
            <li>1 tsk groftkværnet sort peber</li>
            <li>1 tsk tørret oregano eller en håndfuld frisk koriander</li>
          </ul>
          <p>
            Bland det hele, kom kødet i en pose og mas luften ud. I køleskab i 4-12 timer. Under 4 timer når marinaden ikke længere end overfladen. Over 24 timer begynder syren at nedbryde de yderste millimeter til noget grødet - lige det modsatte af hvad du ville.
          </p>
          <p>
            Vil du ikke marinere, så salt kødet i stedet. Groft salt på begge sider, mindst 45 minutter før grillning. Saltet trækker fugt ud, opløses og suges tilbage ind i kødet. Effekten er ikke den samme som en marinade, men det er langt bedre end at salte lige inden.
          </p>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1494358856891-c9a46d446c39?w=800&h=450&fit=crop"
                alt="Glødende kul i en kulgrill klar til grillning ved høj direkte varme"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@armandoascorve" target="_blank" rel="noopener noreferrer">Armando Ascorve Morales</a> / Unsplash</p>
          </div>

          <h2>Varmen: så meget du overhovedet kan skaffe</h2>
          <p>
            Flanksteak er en udskæring der skal have det hele på én gang. Der er ingen indirekte fase, ingen reverse sear, ingen låg der skal lukkes i tyve minutter. Du vil have maksimal overfladebruning på kortest mulig tid, fordi kødet er tyndt og kernen bliver færdig lynhurtigt.
          </p>
          <ul>
            <li><strong>Kulgrill:</strong> Fyld en fuld skorstenstænder og hæld kullene ud i ét lag. Vent til de er dækket af grå aske. Risten skal være så tæt på gløderne som muligt.</li>
            <li><strong>Gasgrill:</strong> Alle brændere på fuld styrke, låget lukket i 10-15 minutter. Sigt efter mindst 260°C på risten. Har din grill en sear-zone eller en sidebrænder med lavarist, er det her den skal bruges.</li>
            <li><strong>Rist:</strong> Skal være ren og oliet. Flanksteak har lidt fedt og hænger fast i en snusket rist.</li>
          </ul>
          <p>
            Tag kødet op af marinaden 30 minutter før og lad det komme til stuetemperatur. Dup det <em>helt</em> tørt med køkkenrulle. Vådt kød damper i stedet for at brune, og så mister du hele skorpen - som er halvdelen af pointen.
          </p>

          <h2>Selve grillningen</h2>
          <ol>
            <li>Læg flanksteaken på den varmeste del af risten. Den skal hvæse med det samme. Gør den ikke det, er grillen ikke varm nok - tag kødet af og vent.</li>
            <li>Lad den ligge helt stille i 3-4 minutter. Ingen flytning, ingen kigge-under. Skorpen dannes mens kødet ligger i ro.</li>
            <li>Vend én gang. Vil du have et diamantmønster, kan du dreje den 90 grader halvvejs på hver side - men det er kosmetik, ikke smag.</li>
            <li>Yderligere 3-4 minutter på anden side.</li>
            <li>Mål i den tykkeste del. Tag den af 2-3 grader før måltemperaturen - eftervarmen gør resten.</li>
          </ol>

          <h3>Kernetemperaturer</h3>
          <ul>
            <li><strong>Rare:</strong> 48-50°C. Meget rød kerne, blødt bid.</li>
            <li><strong>Medium rare:</strong> 52-54°C. Det er her flanksteak hører hjemme.</li>
            <li><strong>Medium:</strong> 56-58°C. Stadig fint, men fibrene begynder at stramme.</li>
            <li><strong>Well done:</strong> Over 62°C. Så har du lavet noget der minder om et gammelt bilsæde. Lad være.</li>
          </ul>

          <div className="tip-box">
            <strong>Ingen bøf har det samme ur:</strong> En 1,5 cm flanksteak er færdig efter 6 minutter i alt. En 2,5 cm skal have 10. Termometeret er det eneste der ved forskellen - og på en mager udskæring er der 90 sekunder mellem perfekt og ærgerligt.
          </div>

          <h2>Hvile og skæring - her afgøres det</h2>
          <p>
            Læg kødet på et skærebræt eller en rist og lad det hvile 8-10 minutter. Dæk det løst med folie hvis det er koldt udenfor, men pak det ikke stramt - så damper skorpen blød.
          </p>
          <p>
            Og så kommer det vigtigste øjeblik i hele processen. Flanksteakens fibre er grove og lange. Skærer du med fibrene, får du lange, seje tråde i munden uanset hvor perfekt du ramte temperaturen. Skærer du på tværs, klipper du fibrene over i korte stykker, og det samme kød føles pludselig mørt.
          </p>
          <ol>
            <li>Find fiberretningen - den er tydelig, som årerne i et bræt.</li>
            <li>Vend kødet så fibrene løber på tværs af dig.</li>
            <li>Hold kniven i cirka 45 graders vinkel og skær tynde skiver, 5-8 mm.</li>
            <li>Skær hele stykket op før servering. Flanksteak serveres i skiver, ikke som en hel bøf på tallerkenen.</li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1560614382-33bd4daa1b9e?w=800&h=450&fit=crop"
                alt="Person med grilltang der vender kød på en varm grillrist"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@quaritsch" target="_blank" rel="noopener noreferrer">Quaritsch Photography</a> / Unsplash</p>
          </div>

          <h2>Servering</h2>
          <p>
            Flanksteak i skiver er en af de mest fleksible ting du kan lægge på bordet:
          </p>
          <ul>
            <li>Direkte på tallerkenen med flagesalt og en klat kryddersmør, der smelter ned over de varme skiver</li>
            <li>I tortillas med grillet løg, koriander og lime - udskæringen stammer fra det mexicanske køkken og fungerer stadig bedst der</li>
            <li>På en salat med tomat, rødløg og en skarp vinaigrette</li>
            <li>Koldt dagen efter i en sandwich. Flanksteak er en af de få bøffer der faktisk holder til at blive spist kold</li>
          </ul>
          <p>
            Tilbehør: <Link href="/grillede-grontsager">grillede grøntsager</Link> kan ligge på risten mens kødet hviler, og en simpel <Link href="/marinader-til-grill">chimichurri</Link> er den klassiske makker.
          </p>

          <h2>De fem typiske fejl</h2>
          <ul>
            <li><strong>For lav varme:</strong> En lunken grill giver grå, kedelig overflade og et kød der er gennemstegt før det har fået skorpe.</li>
            <li><strong>Vådt kød på risten:</strong> Marinaden skal dryppe af og kødet duppes tørt. Ellers koger overfladen i stedet for at brune.</li>
            <li><strong>Grillet for længe:</strong> Der er ingen marmorering til at redde en gennemstegt flanksteak. Over 60°C er den tabt.</li>
            <li><strong>Ingen hvile:</strong> Skærer du med det samme, ender saften på brættet. Ti minutter koster ingenting.</li>
            <li><strong>Skåret med fibrene:</strong> Den fejl alene kan gøre en perfekt bøf uspiselig sej. Kig efter fiberretningen hver gang.</li>
          </ul>

          {/* YouTube video */}
          <h2>Se det i praksis</h2>
          <p>
            Hele forløbet på video - fra marinade til den hede rist og det afgørende snit:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/zi65lG8Ipn0"
              title="Grillopskrift - Flanksteak"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Napoleon Grill Danmark (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Vil du have en tykkere bøf med reverse sear? Læs om <Link href="/perfekte-ribeye">den perfekte ribeye</Link></li>
            <li>Eller gå hele vejen med en <Link href="/tomahawk-paa-grillen">tomahawk</Link></li>
            <li>Byg din egen marinade fra bunden i <Link href="/marinader-til-grill">marinade-guiden</Link></li>
            <li>Vil du i den modsatte grøft - lav og langsom? Prøv <Link href="/brisket-paa-grillen">brisket</Link></li>
            <li>Helt ny til grill? Start i <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
