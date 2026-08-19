import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grillet majs: tre metoder, og den ene der virker bedst",
  description: "Majs på grillen med og uden svøb, tider, temperaturer og kryddersmør der løfter kolben. Plus elote-versionen og de fejl der gør majsen sej.",
  alternates: {
    canonical: "/grillet-majs",
  },
  openGraph: {
    title: "Grillet majs: tre metoder, og den ene der virker bedst",
    description: "Majs på grillen med og uden svøb, tider, temperaturer og kryddersmør der løfter kolben. Plus elote-versionen og de fejl der gør majsen sej.",
    url: "https://grillbogen.dk/grillet-majs",
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
      headline: "Grillet Majs - Komplet Guide til Majskolber på Grillen",
      description: "Majs på grillen med og uden svøb, tider, temperaturer og kryddersmør der løfter kolben. Plus elote-versionen og de fejl der gør majsen sej.",
      url: "https://grillbogen.dk/grillet-majs",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/grillet-majs",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Grillet majs", item: "https://grillbogen.dk/grillet-majs" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hvor længe skal majs på grillen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Med svøbet på: 15-20 minutter over middelhøj varme, vendt hvert femte minut. Nøgen på risten: 8-12 minutter, vendt hvert andet minut. Forkogt majs skal kun have 4-6 minutter for at få farve.",
          },
        },
        {
          "@type": "Question",
          name: "Skal majs lægges i blød før grillning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kun hvis du griller den med svøbet på. Tredive minutter i koldt vand gør svøbet fugtigt så det damper kolben i stedet for at brænde. Griller du majsen nøgen, er iblødsætning unødvendig.",
          },
        },
        {
          "@type": "Question",
          name: "Hvornår er dansk majs i sæson?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dansk sukkermajs høstes typisk fra midten af august til begyndelsen af oktober. Uden for sæsonen er frosne kolber et bedre valg end trætte importerede.",
          },
        },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function GrilletMajs() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&h=500&fit=crop"
          alt="Farverige grøntsager skåret og lagt klar til grillen"
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
            Grillet Majs
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Grillet majs</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Majskolber bliver behandlet som noget der bare skal fylde risten ud ved siden af kødet. Det er ærgerligt, for grillet majs er en af de få ting hvor grillen gør noget ved råvaren som ingen gryde kan: sukkeret karamelliserer, kernerne får røgnoter, og de brændte pletter bliver den bedste del.
        </p>

        <div className="prose max-w-none">
          <h2>Køb af majs</h2>
          <p>
            Sukkermajs mister sødme fra det øjeblik den bliver plukket. Sukkeret omdannes til stivelse, og en kolbe der har ligget en uge i køledisken smager af papir uanset hvad du gør ved den. Derfor er indkøbet halvdelen af arbejdet.
          </p>
          <ul>
            <li><strong>Køb den med svøbet på.</strong> Afskallede kolber i plastbakke er allerede på vej ned ad bakke. Svøbet er kolbens egen emballage og holder på fugten.</li>
            <li><strong>Kig på støvfanget.</strong> De silketråde der stikker ud i toppen skal være lyse og lidt klæbrige. Tørre, brune tråde betyder at kolben har ligget for længe.</li>
            <li><strong>Mærk gennem svøbet.</strong> Kernerne skal føles faste og tætpakkede hele vejen ned til spidsen. Bløde huller betyder manglende kerner.</li>
            <li><strong>Svøbet skal være grønt og saftigt</strong>, ikke gulnet eller sprødt.</li>
          </ul>
          <p>
            Dansk sukkermajs er i sæson fra midten af august til begyndelsen af oktober, og det er i det vindue kolberne er værd at grille. Resten af året er frosne majskolber faktisk et bedre valg end importerede, der har rejst i en uge - de fryses lige efter høst, mens sukkeret stadig er der.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Med svøb: 30 min i vand, 15-20 min over middelhøj varme. Uden svøb: pensl med olie, 8-12 min over direkte varme, vend hvert andet minut. Smør på til sidst, aldrig før.
          </div>

          <h2>Metode 1: Med svøbet på</h2>
          <p>
            Den mest tilgivende metode. Svøbet virker som en indbygget damppose - kolben tilberedes i sin egen fugt og bliver saftig hele vejen igennem. Til gengæld får du ikke meget farve.
          </p>
          <ol>
            <li>Træk de yderste, snavsede blade af, men lad de inderste sidde.</li>
            <li>Læg kolberne i koldt vand i 30 minutter. Vandet gør svøbet fugtigt nok til at det ikke brænder op.</li>
            <li>Ryst dem af og læg dem direkte på risten over middelhøj varme, cirka 200°C.</li>
            <li>Vend hvert femte minut. I alt 15-20 minutter.</li>
            <li>Svøbet bliver sort og forkullet udenpå - det er meningen. Kernerne indeni er dampet møre.</li>
            <li>Træk svøbet af med et grillhandske på. Silketrådene følger som regel med.</li>
          </ol>
          <p>
            Vil du have både saftighed og farve, kan du kombinere: damp med svøbet på i 15 minutter, træk det af, og giv kolberne 3-4 minutter nøgne over høj varme til sidst.
          </p>

          <h2>Metode 2: Nøgen på risten</h2>
          <p>
            Den her giver den bedste grillsmag, og det er den de fleste ender med at foretrække. Kernerne kommer i direkte kontakt med varmen, sukkeret karamelliserer og de sorte pletter smager af netop det man tændte grillen for.
          </p>
          <ol>
            <li>Fjern svøb og silketråde helt. Skyl kolben og dup den tør.</li>
            <li>Pensl med et tyndt lag neutral olie - ikke smør. Smør indeholder mælkeprotein der brænder ved den her temperatur.</li>
            <li>Læg kolberne på direkte varme, 200-230°C.</li>
            <li>Vend en kvart omgang hvert andet minut. I alt 8-12 minutter.</li>
            <li>Klar når kernerne er blevet dybt gule og der er spredte, mørkebrune til sorte pletter rundt om kolben.</li>
          </ol>

          <div className="tip-box">
            <strong>Sorte pletter er ikke fejl:</strong> Det er Maillard-reaktionen på sukkerholdige kerner. Sigt efter pletvis brunfarvning - ikke en jævn sort overflade. Er hele kolben kulsort, var varmen for høj eller vendingerne for langsomme.
          </div>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1689011266277-f7c82c6f4ce4?w=800&h=450&fit=crop"
                alt="Nærbillede af gasgrillens brændere klar til direkte varme"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@dvln_dnl" target="_blank" rel="noopener noreferrer">Daniel</a> / Unsplash</p>
          </div>

          <h2>Metode 3: Forkogt og hurtigt brunet</h2>
          <p>
            Skal du servere for mange, eller skal majsen være klar samtidig med kødet, er det her den praktiske løsning. Du flytter tilberedningen væk fra grillen og bruger kun risten til farve.
          </p>
          <ol>
            <li>Kog kolberne i letsaltet vand i 5-6 minutter. Tilsæt gerne en spiseskefuld sukker - det holder på sødmen.</li>
            <li>Tag dem op og lad dem dryppe af. De kan stå sådan i op til en time.</li>
            <li>Pensl med olie og læg dem på grillen mens kødet <Link href="/perfekte-ribeye">hviler</Link>.</li>
            <li>4-6 minutter under hyppig vending er nok til at give farve og røgsmag.</li>
          </ol>
          <p>
            Ulempen er at en del af sødmen bliver i kogevandet. Fordelen er kontrol - og på en travl grillaften er kontrol tit mere værd.
          </p>

          <h2>Kryddersmør: hvor kolben bliver interessant</h2>
          <p>
            Smør skal på når majsen kommer af grillen, ikke før. Rør det sammen i god tid og lad det stå ved stuetemperatur, så det smelter ned mellem kernerne i det sekund det rammer kolben.
          </p>

          <h3>Hvidløgs- og persillesmør</h3>
          <ul>
            <li>100 g blødt smør</li>
            <li>2 fed hvidløg, finthakket</li>
            <li>En håndfuld hakket persille</li>
            <li>Revet skal af 1/2 citron</li>
            <li>Flagesalt</li>
          </ul>

          <h3>Chili- og limesmør</h3>
          <ul>
            <li>100 g blødt smør</li>
            <li>1 tsk røget paprika</li>
            <li>1/2 tsk chiliflager</li>
            <li>Revet skal og saft af 1 lime</li>
            <li>1/2 tsk groft salt</li>
          </ul>

          <h3>Elote - den mexicanske gadeversion</h3>
          <p>
            Den mest kendte måde at spise grillet majs på, og med god grund. Pensl den varme kolbe med en blanding af 3 spsk mayonnaise og 2 spsk creme fraiche, rul den i finrevet parmesan eller feta, drys med chilipulver og pres lime over. Fedt, syre, salt og varme på én gang - det er svært at gøre bedre.
          </p>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=450&fit=crop"
                alt="Forskellige farverige grøntsager skåret klar til grillen"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@danedeaner" target="_blank" rel="noopener noreferrer">Dane Deaner</a> / Unsplash</p>
          </div>

          <h2>Timing i forhold til resten af maden</h2>
          <p>
            Majs er taknemmelig at planlægge efter, fordi den tåler at vente. En færdig kolbe kan holdes lun i alufolie i 20 minutter uden at tage skade.
          </p>
          <ul>
            <li><strong>Griller du bøffer:</strong> Læg majsen på først. Den er færdig når kødet skal på den varme zone.</li>
            <li><strong>Griller du <Link href="/pulled-pork-paa-grillen">low and slow</Link>:</strong> Majsen kommer på til allersidst, over den direkte side, mens kødet hviler.</li>
            <li><strong>Serverer du til mange:</strong> Brug den forkogte metode og kør kolberne over risten i hold.</li>
          </ul>

          <h2>Rester</h2>
          <p>
            Grillet majs er en af de få grillrester der bliver til noget bedre end den var. Skær kernerne af kolben med en skarp kniv - stil den lodret i en dyb skål så kernerne ikke flyver ud over køkkenet.
          </p>
          <ul>
            <li>I en salat med sorte bønner, rødløg, koriander og lime</li>
            <li>Rørt i en majssalsa til fisk eller tacos</li>
            <li>I en majssuppe hvor de grillede kerner giver røgsmagen</li>
            <li>Blandet i en kartoffelsalat sammen med <Link href="/grillede-grontsager">andre grillede grøntsager</Link></li>
          </ul>
          <p>
            Afskårne kerner holder 3-4 dage i køleskabet og kan fryses i portioner.
          </p>

          <h2>De fem typiske fejl</h2>
          <ul>
            <li><strong>Smør på før grillning:</strong> Mælkeproteinet i smørret brænder ved 150°C og bliver bittert. Olie før, smør efter.</li>
            <li><strong>For høj varme:</strong> Over 250°C brænder overfladen sort før kernerne er varme indeni. Middelhøj og hyppig vending slår høj og hurtig.</li>
            <li><strong>Glemt at vende:</strong> Ligger kolben stille i fem minutter, får du én forkullet stribe og tre rå. Vend hvert andet minut.</li>
            <li><strong>Salt for tidligt:</strong> Salt direkte på rå kerner trækker fugt ud og gør dem sejere. Salt til sidst, gerne som flagesalt.</li>
            <li><strong>Gammel majs:</strong> Ingen teknik redder en kolbe der har ligget to uger. Køb den i sæson, og grill den samme dag du køber den.</li>
          </ul>

          {/* YouTube video */}
          <h2>Se det i praksis</h2>
          <p>
            Majskolber på grillen fra rå kolbe til færdig servering:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/XIJc-ARDm28"
              title="Grillopskrift - Majskolber med revet parmesan"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Traeger Grill Danmark (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Byg hele tilbehørsbordet i <Link href="/grillede-grontsager">guiden til grillede grøntsager</Link></li>
            <li>Find hovedretten: <Link href="/flanksteak-paa-grillen">flanksteak</Link> eller <Link href="/perfekte-ribeye">ribeye</Link></li>
            <li>Skal det være en hel dag ved grillen? Se <Link href="/brisket-paa-grillen">brisket-guiden</Link></li>
            <li>Styr varmezonerne rigtigt med <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link></li>
            <li>Slut af med <Link href="/is-dessert-efter-grillen">is som dessert</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
