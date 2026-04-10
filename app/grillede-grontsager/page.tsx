import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grillede Grøntsager - Perfekte Grøntsager på Grillen (2026)",
  description:
    "Lær at grille grøntsager korrekt. Temperaturer, tider og teknikker til peberfrugter, squash, majs, aubergine og meget mere.",
  openGraph: {
    title: "Grillede Grøntsager - Perfekte Grøntsager på Grillen",
    description:
      "Lær at grille grøntsager korrekt. Temperaturer, tider og teknikker til peberfrugter, squash, majs og aubergine.",
    url: "https://grillbogen.dk/grillede-grontsager",
    siteName: "Grillbogen.dk",
    locale: "da_DK",
    type: "article",
  },
};

function ArticleSchema() {
  // All data is hardcoded string literals - no user input involved, safe for JSON-LD rendering
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Grillede Grøntsager - Perfekte Grøntsager på Grillen",
      description: "Lær at grille grøntsager korrekt. Temperaturer, tider og teknikker til peberfrugter, squash, majs, aubergine og meget mere.",
      url: "https://grillbogen.dk/grillede-grontsager",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/grillede-grontsager",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Grillede Grøntsager", item: "https://grillbogen.dk/grillede-grontsager" },
      ],
    },
  ];
  const jsonString = JSON.stringify(schema);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonString }} />;
}

export default function GrilledeGrontsager() {
  return (
    <>
      <ArticleSchema />
      {/* Hero */}
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&h=500&fit=crop"
          alt="Farverige grøntsager på en varm grill"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)]/80 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-4xl mx-auto px-4 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="category-badge">Teknik</span>
            <div className="h-px w-8 bg-[var(--ember)]/50" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Grillede Grøntsager
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Grillede Grøntsager</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Grøntsager på grillen er ikke en eftertanke eller et kompromis for vegetarerne. Det er en selvstændig disciplin der fortjener lige så meget opmærksomhed som din bøf. Når varmen rammer rigtigt, sker der noget magisk med sukkerindholdet i grøntsagerne - de karamelliserer, får dybde og en røget karakter der er umulig at opnå i en ovn.
        </p>

        <div className="prose max-w-none">
          <h2>Hvorfor grille grøntsager?</h2>
          <p>
            Den intense, direkte varme fra grillen gør noget ved grøntsager som ingen anden tilberedningsmetode kan. Maillard-reaktionen - den samme kemiske proces der giver din bøf den brune skorpe - skaber hundredvis af smagsstoffer når den møder naturligt sukker i grøntsagerne.
          </p>
          <p>
            Resultatet er grøntsager med en kompleksitet der overrasker de fleste. Peberfrugter bliver søde og røgede. Squash får en nøddeagtig dybde. Løg transformeres fra skarpe til nærmest marmeladeagtige. Og majs? Majs på grillen er en helt anden oplevelse end kogt majs.
          </p>

          <h2>De gyldne regler</h2>
          <p>
            Uanset hvilke grøntsager du griller, gælder disse principper:
          </p>
          <ul>
            <li><strong>Olie er obligatorisk.</strong> Pensl grøntsagerne med olie inden de rammer risten. Det forhindrer at de klæber, og hjælper varmen med at fordele sig jævnt. Olivenolie eller rapsolie virker begge.</li>
            <li><strong>Salt FØR grillen.</strong> Salt trækker fugt ud og hjælper med karamelliseringen. Krydret bagefter giver en flad smag.</li>
            <li><strong>Skær rigtigt.</strong> Store flader giver bedre grillmærker og er nemmere at håndtere. Halvér peberfrugter, skær squash på langs, skær løg i tykke skiver.</li>
            <li><strong>Direkte varme, høj temperatur.</strong> De fleste grøntsager vil have det varmt og hurtigt - 200-250°C direkte. Det giver farve uden at de bliver bløde som mos.</li>
            <li><strong>Rør ikke ved dem.</strong> Læg dem, lad dem være. Konstant vending giver ingen grillmærker og trækker tilberedningstiden ud.</li>
          </ul>

          <h2>Grøntsag for grøntsag: Tid og temperatur</h2>
          <p>
            Her er den komplette oversigt. Alle tider er vejledende - brug øjnene og tryk med en finger. Grøntsagerne skal have farve men stadig have bid.
          </p>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Grøntsag</th>
                <th>Forberedelse</th>
                <th>Varme</th>
                <th>Tid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Peberfrugter</strong></td>
                <td>Halveret, kerneløs</td>
                <td>Direkte, høj</td>
                <td>4-6 min per side</td>
              </tr>
              <tr>
                <td><strong>Squash/courgette</strong></td>
                <td>Skåret på langs, 1 cm tykke</td>
                <td>Direkte, høj</td>
                <td>3-4 min per side</td>
              </tr>
              <tr>
                <td><strong>Aubergine</strong></td>
                <td>Skåret i 1,5 cm skiver</td>
                <td>Direkte, medium</td>
                <td>4-5 min per side</td>
              </tr>
              <tr>
                <td><strong>Majs</strong></td>
                <td>Hele kolber, med skal af</td>
                <td>Direkte, medium</td>
                <td>10-15 min, vend ofte</td>
              </tr>
              <tr>
                <td><strong>Løg</strong></td>
                <td>Skåret i 1,5 cm skiver, med spyd</td>
                <td>Direkte, medium</td>
                <td>5-7 min per side</td>
              </tr>
              <tr>
                <td><strong>Asparges</strong></td>
                <td>Hele, tykke stængler, trimmet</td>
                <td>Direkte, høj</td>
                <td>3-5 min, vend én gang</td>
              </tr>
              <tr>
                <td><strong>Champignon</strong></td>
                <td>Hele (store) eller halveret</td>
                <td>Direkte, medium</td>
                <td>4-6 min per side</td>
              </tr>
              <tr>
                <td><strong>Søde kartofler</strong></td>
                <td>Skåret i 1 cm skiver, forkogt 5 min</td>
                <td>Direkte, medium</td>
                <td>4-5 min per side</td>
              </tr>
              <tr>
                <td><strong>Blomkål</strong></td>
                <td>Skåret i 2 cm &quot;steaks&quot;</td>
                <td>Indirekte, derefter direkte</td>
                <td>15-20 min total</td>
              </tr>
              <tr>
                <td><strong>Tomater</strong></td>
                <td>Halveret, kerne i</td>
                <td>Direkte, medium</td>
                <td>3-4 min, kun snitfladen</td>
              </tr>
            </tbody>
          </table>

          <h2>Tre teknikker du skal kende</h2>

          <h3>1. Direkte grillning (de fleste grøntsager)</h3>
          <p>
            Den mest brugte metode. Grøntsagerne placeres direkte over varmekilden ved høj temperatur. Perfekt til alt der er tyndskåret og tilberedes hurtigt - squash, peberfrugter, asparges, aubergine. Du er efter karamellisering og grillmærker, ikke gennemstegning.
          </p>
          <p>
            Hemmeligheden er en ren, varm rist. Skrab risten grundigt med en stålbørste og olie den let med et stykke køkkenrulle dyppet i olie. Det er forskellen mellem grøntsager der ligger pænt og grøntsager der sidder fast og flækker.
          </p>

          <h3>2. Grillkurv eller spyd</h3>
          <p>
            Småskårne grøntsager som cherrytomater, champignon og løgstykker falder gennem risten. Brug en grillkurv (perforeret metalbakke) eller spyd. Metalspyd holder bedre på varmen end bambusspyd og kræver ingen iblødsætning.
          </p>
          <p>
            Et godt trick: Lav &quot;regnbue-spyd&quot; med grøntsager der har samme tilberedningstid. Bland ikke asparges (3 min) med kartofler (10 min) på samme spyd - du ender med enten rå kartofler eller brændte asparges.
          </p>

          <h3>3. Indirekte grillning (store stykker)</h3>
          <p>
            Hele blomkålshoveder, store kartofler eller hele løg kræver tid. Placer dem på den side af grillen der ikke har direkte varme, luk låget, og lad dem tilberede langsomt ved 160-180°C. Det er samme princip som en ovn, bare med røgsmag.
          </p>
          <p>
            Et helt blomkålshoved tager ca. 45-60 minutter indirekte. Når du kan stikke en kniv igennem uden modstand, er den klar. Flyt den til direkte varme de sidste 5 minutter for farve og karamellisering.
          </p>

          <div className="tip-box">
            <strong>Genialt trick:</strong> Grill grøntsagerne mens dit kød hviler. De 15-30 minutter hvor bøffen eller pulled porken hviler er perfekte til at smide grøntsager på den stadig varme grill. Du bruger varmen der alligevel er der, og timingen passer perfekt.
          </div>

          <h2>Marinader og krydderier til grillede grøntsager</h2>
          <p>
            Grøntsager behøver ikke meget - men det rigtige gør en kæmpe forskel:
          </p>
          <ul>
            <li><strong>Basis:</strong> Olivenolie, salt, peber. Mere behøver du strengt taget ikke.</li>
            <li><strong>Middelhavs:</strong> Olivenolie, hvidløg, frisk rosmarin, citronskal. Perfekt til squash og peberfrugter.</li>
            <li><strong>Asiatisk:</strong> Sesamolie, sojasauce, ingefær, chili. Prøv det på aubergine og champignon.</li>
            <li><strong>Mexicansk:</strong> Limesaft, spidskommen, chipotle. Majs og peberfrugter elsker det her.</li>
            <li><strong>Nordisk:</strong> Rapsolie, dild, citron, groft salt. Asparges og nye kartofler.</li>
          </ul>
          <p>
            Mariner i max 30 minutter. Grøntsager er ikke kød - de optager smag hurtigt, og syre (citron, eddike) nedbryder teksturen hvis de ligger for længe.
          </p>

          <h2>Fem grillede grøntsagsretter der stjæler showet</h2>

          <h3>Grillet majskolbe med chili-smør</h3>
          <p>
            Grill hele majskolber over medium varme i 12-15 minutter. Vend dem regelmæssigt. Bland blødt smør med limeskal, chilifnug og et drys salt. Smør det på den varme majs og server med et squeeze lime. Den søde, røgede majs mod det pikante smør er en kombination der får folk til at spørge efter opskriften.
          </p>

          <h3>Grillet aubergine med tahini</h3>
          <p>
            Skær auberginen i 1,5 cm skiver, pensl med olivenolie og grill ved medium-høj varme. 4-5 minutter per side, til den er blød indeni og har tydelige grillmærker. Dryp med tahini, granatæblekerner og frisk mynte. Det her er ikke tilbehør - det er en hovedret.
          </p>

          <h3>Hele grillede peberfrugter</h3>
          <p>
            Grill hele peberfrugter ved høj varme til skindet er sort og forkullet på alle sider. Læg dem i en plastikpose i 10 minutter - dampen løsner skindet. Pil skindet af, fjern kerner, og skær i strimler. Olie, salt, hvidløg. Så simpelt og så godt.
          </p>

          <h3>Blomkåls-steak</h3>
          <p>
            Skær et helt blomkålshoved i 2 cm tykke &quot;steaks&quot; fra midten. Pensl med olivenolie og krydder med spidskommen, paprika og salt. Start indirekte i 15 minutter, flyt til direkte varme for 3-4 minutter per side. Den brune karamellisering mod den hvide blomkål ser imponerende ud og smager endnu bedre.
          </p>

          <h3>Grillede portobello-burgere</h3>
          <p>
            Fjern stænglen fra store portobello-svampe og mariner i balsamico, olivenolie, hvidløg og timian i 15 minutter. Grill lamelsiden op først ved medium varme i 4-5 minutter, vend og grill 3-4 minutter mere. Saften samler sig i hatten - det er meningen. Server i en burger-bolle med pesto, ristede løg og rucola.
          </p>

          <div className="tip-box">
            <strong>Grøntsagernes rækkefølge:</strong> Start med de grøntsager der tager længst tid (kartofler, blomkål, majs) og tilføj de hurtige (asparges, tomater, squash) undervejs. Sådan er alt færdigt på samme tid.
          </div>

          <h2>Klassiske fejl med grøntsager på grillen</h2>
          <ul>
            <li><strong>For tyndt skåret:</strong> Tynde skiver falder igennem risten, tørrer ud og brænder. Hold dig til minimum 1 cm tykkelse.</li>
            <li><strong>Kold grill:</strong> Grøntsager på en halvvarm grill koger i stedet for at grilles. Vent til risten er ordentligt varm.</li>
            <li><strong>For meget vending:</strong> Lad grøntsagerne ligge i fred. De skal have tid til at bygge farve og karamellisering.</li>
            <li><strong>Glemmer olie:</strong> Tørre grøntsager klæber, brænder og smager af ingenting. Olie er ikke valgfrit.</li>
            <li><strong>Alle grøntsager på én gang:</strong> Forskellig størrelse og tykkelse kræver forskellig tid. Hav en plan.</li>
            <li><strong>Overgrilning:</strong> Grøntsager skal have bid. Bløde, slatne grøntsager har mistet det meste af deres karakter.</li>
          </ul>

          <h2>Udstyr der gør det nemmere</h2>
          <p>
            Du behøver ikke meget, men disse ting hjælper:
          </p>
          <ul>
            <li><strong>Grillkurv:</strong> Uundværlig til små grøntsager. Kost: ca. 150 kr.</li>
            <li><strong>Bred spatel:</strong> Til at vende store flader af grøntsager uden de knækker.</li>
            <li><strong>Lang pensel:</strong> Til at oliere grøntsagerne direkte på risten.</li>
            <li><strong>Metalspyd:</strong> Genanvendelige, holder varmen, ingen iblødsætning. Flade spyd er bedst - runde lader maden dreje.</li>
          </ul>

          <h2>Læs videre</h2>
          <ul>
            <li>Prøv en <Link href="/marinader-til-grill">hjemmelavet marinade</Link> til dine grøntsager</li>
            <li>Server grøntsagerne til en <Link href="/perfekte-ribeye">perfekt ribeye</Link></li>
            <li>Ny til grill? Start med <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
