import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brisket på grillen: den lange vej til perfekt oksebryst",
  description: "Brisket på almindelig kul- eller gasgrill: udskæring, trimning, rub, stallen, kernetemperatur og hvile. Hele forløbet trin for trin - uden smoker.",
  alternates: {
    canonical: "/brisket-paa-grillen",
  },
  openGraph: {
    title: "Brisket på grillen: den lange vej til perfekt oksebryst",
    description: "Brisket på almindelig kul- eller gasgrill: udskæring, trimning, rub, stallen, kernetemperatur og hvile. Hele forløbet trin for trin - uden smoker.",
    url: "https://grillbogen.dk/brisket-paa-grillen",
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
      headline: "Brisket på Grillen - Komplet Guide til Oksebryst",
      description: "Brisket på almindelig kul- eller gasgrill: udskæring, trimning, rub, stallen, kernetemperatur og hvile. Hele forløbet trin for trin - uden smoker.",
      url: "https://grillbogen.dk/brisket-paa-grillen",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/brisket-paa-grillen",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Brisket på grillen", item: "https://grillbogen.dk/brisket-paa-grillen" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hvor lang tid tager en brisket på grillen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regn med 1,5-2 timer pr. kilo ved 110-120 grader. En brisket på 5 kg tager typisk 10-14 timer inklusive stallen. Læg altid 2-3 timers buffer ind - brisket bliver færdig når den er færdig, ikke når klokken siger den skal.",
          },
        },
        {
          "@type": "Question",
          name: "Hvad hedder brisket på dansk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brisket er oksebryst. Bed din slagter om hele brystet med fedtkappen på - ikke det udbenede, afpudsede bryst der sælges til kogning.",
          },
        },
        {
          "@type": "Question",
          name: "Hvilken kernetemperatur skal brisket have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "95-98 grader i kernen. Men temperaturen er kun en indikator - brisketten er først klar når termometerspiddet glider ind i kødet uden modstand.",
          },
        },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function BrisketPaaGrillen() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1519253328475-d8d3f8d521cc?w=1400&h=500&fit=crop"
          alt="Røgen står ud af en lukket grill under langtidstilberedning"
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
            Brisket på Grillen
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Brisket på grillen</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Brisket er den udskæring der skiller fårene fra bukkene i BBQ. Ikke fordi den er teknisk svær, men fordi den kræver noget de færreste har lyst til at give: tid. Til gengæld findes der ingen anden udskæring hvor forskellen mellem middelmådigt og fremragende er så tydelig.
        </p>

        <div className="prose max-w-none">
          <h2>Hvad er brisket egentlig?</h2>
          <p>
            Brisket er oksebryst - musklen der sidder på undersiden af oksen mellem forbenene. Den har båret dyrets vægt hele livet og er dermed proppet med bindevæv. Det er både problemet og pointen. Bindevævet gør kødet sejt hvis du behandler det som en bøf, men smelter til gelatine hvis du giver det timer nok. Resultatet er kød der er både saftigt og fast nok til at holde formen i en skive.
          </p>
          <p>
            Hos den danske slagter hedder det bare oksebryst. Problemet er at det ofte sælges afpudset og udbenet til kogning - fedtkappen skåret helt væk. Det duer ikke. Bed specifikt om <strong>hel brisket med fedtkappe</strong>, gerne 4-6 kg. De fleste slagtere kan skaffe den med et par dages varsel. Vil du gå hele vejen, er packer brisket det du leder efter: hele brystet med både flat og point i ét stykke.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Trim fedtkappen til ca. 6 mm, rub med salt og peber, læg på indirekte varme ved 110-120°C. Regn med 1,5-2 timer pr. kilo. Pak ind når barken sidder fast omkring 70°C. Tag af ved 95-98°C når spiddet glider i uden modstand. Hvil mindst 2 timer.
          </div>

          <h2>De to muskler du skal kende</h2>
          <p>
            En hel brisket består af to muskler der ligger oven på hinanden med et fedtlag imellem:
          </p>
          <ul>
            <li><strong>The flat:</strong> Den flade, magre del. Det er her de pæne, ensartede skiver kommer fra. Den bliver hurtigst færdig og tørrer også hurtigst ud.</li>
            <li><strong>The point:</strong> Den tykke, fede ende. Mere marmoreret, mere tilgivende og klart det saftigste kød på hele stykket. Det er her burnt ends laves.</li>
          </ul>
          <p>
            Fordi de to muskler er forskellige i tykkelse og fedtindhold, bliver de aldrig helt færdige samtidig. Det er derfor du måler i den tykkeste del af flat - hvis den er mør, er point det for længst.
          </p>

          <h2>Trimning</h2>
          <p>
            Køb din brisket dagen før og trim den kold. Kold fedt skærer sig som smør, lunkent fedt smører sig ud over kniven.
          </p>
          <ol>
            <li>Læg brisketten med fedtsiden opad. Skær fedtkappen ned til cirka 6 mm jævn tykkelse. Skær ikke det hele væk - fedtet beskytter kødet i de mange timer, og det du fjerner, får du ikke tilbage.</li>
            <li>Vend den om og fjern det hårde, sølvfarvede fedt på kødsiden. Det smelter aldrig og bliver til en gummiagtig hinde.</li>
            <li>Rund hjørnerne af. Tynde flige brænder på og bliver til kul længe før resten er færdig.</li>
            <li>Skær et lille hak i den ene ende på tværs af fibrene. Efter 12 timer i røg kan du ikke se fiberretningen, og et forkert snit ved servering ødelægger hele arbejdet.</li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1502030818212-8601501607a6?w=800&h=450&fit=crop"
                alt="Glødende røgtræ brændt ned til jævn glød - grundlaget for den lave, stabile varme brisketten skal have"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@ludenus" target="_blank" rel="noopener noreferrer">Andrey Andreyev</a> / Unsplash</p>
          </div>

          <h2>Rub: hold igen</h2>
          <p>
            Texas-skolen bruger salt og peber. Det er det. Og der er en grund til at den skole har vundet: oksebryst har masser af egen smag, og en rub med femten ingredienser lægger sig som et tæppe over den.
          </p>
          <p>
            Grundopskrift til en brisket på 5 kg:
          </p>
          <ul>
            <li>3 spsk groft salt</li>
            <li>3 spsk groftkværnet sort peber (16 mesh hvis du kan få det - de grove korn giver barken struktur)</li>
            <li>1 spsk løgpulver (valgfrit)</li>
            <li>1 spsk hvidløgspulver (valgfrit)</li>
          </ul>
          <p>
            Dup kødet tørt, smør et tyndt lag sennep eller neutral olie på som bindemiddel, og drys rubben på fra 30 cm højde så den fordeler sig jævnt. Lad den trække mindst en time ved stuetemperatur - gerne natten over i køleskabet.
          </p>

          <h2>Grill-opsætning</h2>

          <h3>På kulgrill</h3>
          <ol>
            <li>Anlæg et snake-bed: briketter i to lag langs kanten af grillen i en halvcirkel, som en slange der brænder langsomt videre.</li>
            <li>Læg 5-6 stykker røgtræ ovenpå med jævne mellemrum langs slangen.</li>
            <li>Tænd kun de første 8-10 briketter i den ene ende.</li>
            <li>Sæt en aluminiumsbakke med varmt vand i midten. Den stabiliserer temperaturen og holder luften fugtig.</li>
            <li>Juster spjældene til 110-120°C. Et snake-bed kan holde temperaturen i 8-10 timer uden at du rører det.</li>
          </ol>

          <h3>På gasgrill</h3>
          <ol>
            <li>Tænd kun den yderste brænder og sæt den lavt. Brisketten ligger i den modsatte ende.</li>
            <li>Læg røgflis i en røgkasse over den tændte brænder - eller pak en håndfuld i alufolie med huller i.</li>
            <li>Sæt en vandbakke under risten på den kolde side.</li>
            <li>Sigt efter 110-120°C med lukket låg. På mange gasgrills er laveste indstilling stadig for varm - så tænd kun brænderen halvvejs og hold øje.</li>
          </ol>
          <p>
            Til oksekød fungerer eg, hickory og mesquite. Eg er det sikre valg og den mest brugte til brisket i Texas. Hickory er kraftigere og skal doseres med måde. Mesquite er den mest markante af dem alle - fint i små mængder, brutalt i store. Æble og kirsebær er for milde til at markere sig mod okse.
          </p>

          <h2>Stallen - når termometeret går i stå</h2>
          <p>
            Et sted mellem 65 og 75°C sker der noget der får de fleste førstegangsgrillere til at gå i panik: temperaturen stopper. I to timer. Nogle gange tre. Den falder måske endda lidt.
          </p>
          <p>
            Det hedder stallen, og det er fordi kødet fordamper fugt fra overfladen præcis så hurtigt som varmen tilføres. Det er fysik, ikke fejl. Grillen fungerer fint. Kødet har det fint. Du skal bare vente.
          </p>
          <p>
            Du kan skyde genvej med Texas crutch - pak brisketten stramt ind i slagterpapir eller alufolie når barken er mørkebrun og sidder fast. Det bryder fordampningen og sparer typisk 2-3 timer. Slagterpapir ånder lidt og bevarer barken bedst. Alufolie er hurtigere, men blødgør barken.
          </p>

          <div className="tip-box">
            <strong>Pak først når barken er klar:</strong> Test med en fingernegl. Kan du skrabe rubben af, er den ikke klar. Sidder den fast som lak, kan du pakke. Pakker du for tidligt, damper du barken væk og får en grå, blød overflade.
          </div>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1530166906126-2235e533180a?w=800&h=450&fit=crop"
                alt="Kød der ligger på grillen med tydelige grillstreger og let røg omkring sig"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@arizonanthony" target="_blank" rel="noopener noreferrer">Anthony Cantin</a> / Unsplash</p>
          </div>

          <h2>Hvornår er den færdig?</h2>
          <p>
            Kernetemperaturen skal ligge på 95-98°C. Men det tal er en indikator, ikke et facit. To briskets på samme vægt kan være færdige med tre graders forskel.
          </p>
          <p>
            Det rigtige mål hedder probe tender: stik termometerspiddet ind i den tykkeste del af flat. Glider det ind uden modstand - som i et glas peanutbutter ved stuetemperatur - er den klar. Møder du modstand, mangler den. Så giver du den en halv time mere og prøver igen.
          </p>
          <p>
            Regn med 1,5-2 timer pr. kilo som planlægningsgrundlag. En brisket på 5 kg tager typisk 10-14 timer. Læg altid buffer ind, og planlæg efter at den bliver færdig for tidligt frem for for sent - en færdig brisket kan holdes varm i timevis, en ufærdig kan ikke skyndes.
          </p>

          <h2>Hvilen er ikke valgfri</h2>
          <p>
            Skær du i brisketten med det samme, løber saften ud på skærebrættet og kødet bliver tørt. Hvilen er lige så meget en del af tilberedningen som røgen.
          </p>
          <ul>
            <li><strong>Minimum:</strong> 1 time pakket ind på køkkenbordet.</li>
            <li><strong>Bedre:</strong> 2-4 timer i en køletaske eller termokasse foret med håndklæder. Brisketten holder over 60°C i mange timer og bliver kun bedre.</li>
            <li><strong>Vigtigt:</strong> Luk pakken op og lad den ånde i 10 minutter, hvis kernetemperaturen stadig er over 90°C. Ellers tilbereder den videre af sin egen varme.</li>
          </ul>

          <h2>Skæring - hvor de fleste ødelægger det</h2>
          <p>
            Fiberretningen skifter mellem flat og point. Det er derfor du lavede et hak i kanten før tilberedningen.
          </p>
          <ol>
            <li>Del brisketten hvor de to muskler møder hinanden - der er et tydeligt fedtlag imellem.</li>
            <li>Skær flat på tværs af fibrene i skiver på cirka en blyants tykkelse.</li>
            <li>Drej point 90 grader og skær den på tværs af sin egen fiberretning, i lidt tykkere skiver.</li>
            <li>Skær kun det du skal bruge nu. Resten holder sig saftigt i hel form.</li>
          </ol>
          <p>
            Er der rester, bliver de til noget godt: hakket brisket på et brød med syltede rødløg, eller terningskåret point vendt i BBQ-sauce og givet 30 minutter mere over varmen - burnt ends.
          </p>

          <h2>De fem typiske fejl</h2>
          <ul>
            <li><strong>For høj temperatur:</strong> Over 140°C strammer bindevævet i stedet for at smelte. Du får sejt kød uanset hvor længe du kører.</li>
            <li><strong>Panik under stallen:</strong> At skrue op for varmen fordi termometeret står stille er den hurtigste vej til tør brisket.</li>
            <li><strong>For lidt trimning - eller for meget:</strong> Uden fedtkappe tørrer den ud. Med hele kappen på bliver barken aldrig ordentlig.</li>
            <li><strong>Sprunget hvilen over:</strong> En time er minimum. Er der gæster, planlæg efter at brisketten hviler mens du griller <Link href="/grillede-grontsager">tilbehøret</Link>.</li>
            <li><strong>Skåret med fibrene:</strong> Perfekt tilberedt kød skåret forkert føles sejt i munden. Find fiberretningen før du skærer.</li>
          </ul>

          {/* YouTube video */}
          <h2>Se det i praksis</h2>
          <p>
            Hele forløbet på video - trimning, rub, den lave varme og det lange træk:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/52E-KZ5-hxE"
              title="Grillopskrift - Brisket"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Napoleon Grill Danmark (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Ny til low and slow? Start med <Link href="/pulled-pork-paa-grillen">pulled pork</Link> - mere tilgivende, samme teknik</li>
            <li>Vil du bygge videre på røgen? Prøv <Link href="/varmroeget-laks">varmrøget laks</Link></li>
            <li>Har du en gasgrill? Se hvordan du styrer varmezonerne i <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link></li>
            <li>Vil du hellere have en bøf på tyve minutter? Læs om <Link href="/perfekte-ribeye">den perfekte ribeye</Link></li>
            <li>Efter 12 timers røg trænger grillen til en omgang: <Link href="/rengoering-af-grill">rengøring af grill</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
