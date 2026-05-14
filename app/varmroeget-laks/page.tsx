import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Varmrøget Laks på Grillen - Komplet Guide (2026)",
  description:
    "Sådan laver du varmrøget laks på din egen grill. Saltlage, røgtræ, temperaturer og timing. Saftig, røgfyldt laks der overgår alt det dyre i køledisken.",
  alternates: {
    canonical: "/varmroeget-laks",
  },
  openGraph: {
    title: "Varmrøget Laks på Grillen",
    description:
      "Komplet guide til varmrøget laks. Saltlage, røgtræ, kernetemperaturer og de tricks der gør forskellen.",
    url: "https://grillbogen.dk/varmroeget-laks",
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
      headline: "Varmrøget Laks på Grillen - Komplet Guide",
      description:
        "Sådan laver du varmrøget laks på din egen grill. Saltlage, røgtræ, temperaturer og timing.",
      url: "https://grillbogen.dk/varmroeget-laks",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/varmroeget-laks",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Varmrøget Laks", item: "https://grillbogen.dk/varmroeget-laks" },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function VarmroegetLaksGuide() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1400&h=500&fit=crop"
          alt="Varmrøget laksefilet med tydelig røgring og crusty overflade"
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
            Varmrøget Laks på Grillen
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Varmrøget Laks</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Varmrøget laks fra køledisken koster en formue og smager sjældent af andet end salt. Lav den selv på grillen, og du får en saftig, røgfyldt laks med ægte tyngde i smagen - for halvdelen af prisen og dobbelt så meget kontrol.
        </p>

        <div className="prose max-w-none">
          <h2>Varmrøgning kontra koldrøgning</h2>
          <p>
            Forvirringen mellem de to teknikker er almindelig. Forskellen ligger i temperaturen.
          </p>
          <ul>
            <li><strong>Koldrøgning:</strong> Under 30°C i mange timer. Laksen tilberedes ikke - kun røgsmagen tilføres. Det er den traditionelle gravad/koldrøgede laks.</li>
            <li><strong>Varmrøgning:</strong> 70-90°C i 1-2 timer. Laksen tilberedes og får røgsmag samtidig. Resultatet er fastere, mere flaget og varmt på indersiden.</li>
          </ul>
          <p>
            Varmrøgning er det letteste at gå til på en almindelig kuglegrill eller gasgrill. Du behøver ikke en dedikeret smoker eller en røgkasse. Du behøver tålmodighed og lidt røgtræ.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Saltlage 4-6 timer, tør på rist i 1 time (vigtigt!), varmrøg ved 80°C i 60-90 minutter til kernetemp 60°C. Det er hele opskriften.
          </div>

          <h2>Valg af laks</h2>
          <p>
            En god varmrøget laks starter ved disken. Hvad du skal kigge efter:
          </p>
          <ul>
            <li><strong>Hel side eller tykke stykker:</strong> Minimum 2-3 cm tyk. Tynde stykker tørrer ud før de når at suge røg.</li>
            <li><strong>Skind på:</strong> Behold skindet. Det beskytter kødet mod direkte varme og gør det nemt at løfte laksen af grillen.</li>
            <li><strong>Fed laks frem for mager:</strong> Atlanterhavslaks eller norsk laks fungerer bedst. Det høje fedtindhold giver saftighed selv efter en time over varmen.</li>
            <li><strong>Frisk lugt:</strong> Skal lugte af havet, ikke af fisk. Brun misfarvning eller grålig kant = lad være.</li>
          </ul>

          <h2>Saltlagen (det vigtigste trin)</h2>
          <p>
            Saltlage er ikke valgfrit. Det er det der trækker overskydende fugt ud, krydrer kødet helt igennem og danner den klæbrige overflade (pellicle) som røgen sætter sig på.
          </p>
          <p>
            Grundopskrift på saltlage til 1 kg laks:
          </p>
          <ul>
            <li>1 liter koldt vand</li>
            <li>100 g groft salt (havsalt eller flagesalt)</li>
            <li>50 g brunt sukker</li>
            <li>2 spsk friskkværnet sort peber</li>
            <li>1 spsk dildfrø eller 1 håndfuld frisk dild (valgfrit)</li>
          </ul>
          <p>
            Rør salt og sukker ud i vandet til det er helt opløst. Læg laksen i en plastpose eller dyb skål, hæld lagen over og sørg for at fisken er dækket. I køleskab i 4-6 timer for stykker under 3 cm. Større stykker tåler op til 8 timer.
          </p>

          <div className="tip-box">
            <strong>Bemærk:</strong> For lang saltlage = saltet, gummiagtig laks. For kort = vandig og fad. 6 timer er det sweet spot for de fleste filetstørrelser.
          </div>

          <h2>Tørring (springes ALDRIG over)</h2>
          <p>
            Når laksen kommer op af lagen, skyl den hurtigt under koldt vand og dup den tør med køkkenrulle. Læg den derefter på en rist over en bakke og lad den stå utildækket i køleskabet i mindst 1 time - gerne 2.
          </p>
          <p>
            Det her trin lyder kedeligt, men det er det der adskiller god varmrøget laks fra middelmådig. Overfladen tørrer og bliver klistret som glansslappet papir. Det er pellicle-laget, og uden det glider røgen bare af kødet.
          </p>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&h=450&fit=crop"
                alt="Røgtræ flis ligger klar til at blive lagt på glødende kul"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
          </div>

          <h2>Røgtræ - hvad passer til laks</h2>
          <p>
            Røgtræet er ingrediensen, ikke pynten. Vælg det med samme omhu som krydderierne. Til laks fungerer milde træsorter bedst:
          </p>
          <ul>
            <li><strong>Æbletræ:</strong> Mildt, lidt sødligt. Klassikeren til laks og det sikre valg.</li>
            <li><strong>Kirsebærtræ:</strong> Giver let frugtnoter og en flot rødbrun overflade.</li>
            <li><strong>Eg:</strong> Lidt mere markant. Brug sparsomt - en håndfuld er nok.</li>
            <li><strong>El:</strong> Klassisk valg i nordisk røgning. Mild og lidt nøddeagtig.</li>
            <li><strong>Frarådes:</strong> Hickory og mesquite. Begge er for kraftige og overdøver laksens egen smag.</li>
          </ul>

          <h2>Grill-opsætning</h2>

          <h3>På gasgrill</h3>
          <ol>
            <li>Brug indirekte varme - tænd kun den ene side</li>
            <li>Læg røgflis i en røgkasse eller pak en god håndfuld i alufolie med små huller</li>
            <li>Placer røgkassen over den tændte brænder</li>
            <li>Vent til der kommer rigtig røg ud (ikke bare damp), 5-10 minutter</li>
            <li>Sigt efter en stabil temperatur på 80°C</li>
          </ol>

          <h3>På kulgrill</h3>
          <ol>
            <li>Anlæg et bæltebed - kul kun langs ydersiden, ingen i midten</li>
            <li>Brug 8-10 brændende briketter til at starte med - varmen skal være LAV</li>
            <li>Læg røgflisen direkte på kullene (ikke i blød, det er en myte at det giver bedre røg)</li>
            <li>Placer en aluminiumsbakke med vand i midten for fugtighed</li>
            <li>Juster spjældene til en stabil 80°C</li>
          </ol>

          <h2>Selve røgningen</h2>
          <p>
            Læg laksen på risten med skindet nedad, på den indirekte side. Luk låget. Rør ikke ved den.
          </p>
          <ul>
            <li><strong>Temperatur i grillen:</strong> 75-90°C, gerne stabilt omkring 80°C</li>
            <li><strong>Tid:</strong> 60-90 minutter for 2-3 cm tykke filéer. Tykkere stykker kan tage op til 2 timer</li>
            <li><strong>Kernetemperatur:</strong> Tag laksen af ved 58-60°C i kernen</li>
            <li><strong>Røgtid:</strong> Du behøver kun røg i den første halvdel. Bagefter overtager varmen alligevel</li>
          </ul>

          <div className="tip-box">
            <strong>Termometeret afgør:</strong> Gætter du på laks, ender du med tørre laksechips. Stik et termometer ind i den tykkeste del. 60°C i kernen = saftig og fast. 65°C = begyndt at tørre ud. 70°C = du har lavet kattemad.
          </div>

          <h2>Hvile og servering</h2>
          <p>
            Tag laksen af grillen og lad den hvile 10-15 minutter på en rist. Den bliver fastere og lettere at skære. Skæres med skarp kniv i tykke skiver - varmrøget laks må gerne flage, så server den mens den stadig holder formen.
          </p>
          <p>
            Servér med:
          </p>
          <ul>
            <li>Rugbrød, en god creme fraiche og rødløg</li>
            <li>Kogte nye kartofler og dilddressing</li>
            <li>Som hovedret med grillede grøntsager og citronfløde</li>
            <li>Koldt som pålæg på rugbrød dagen efter - holder 3-4 dage i køleskab</li>
          </ul>

          <h2>De fem typiske fejl</h2>
          <ul>
            <li><strong>Sprunget over saltlagen:</strong> Resultatet bliver fad og uden bid. Saltlage er ikke valgfrit.</li>
            <li><strong>Glemt at tørre fisken:</strong> Uden pellicle siver røgen lige forbi. Den time på risten er afgørende.</li>
            <li><strong>For høj temperatur:</strong> Over 100°C tørrer du laksen ud før den når at suge røg. Lav og langsomt er hele pointen.</li>
            <li><strong>For meget røgtræ:</strong> En håndfuld flis er nok. Mere giver bitter, harpiksagtig smag.</li>
            <li><strong>Ingen termometer:</strong> Tid alene lyver. Kernetemperatur er det eneste der gælder.</li>
          </ul>

          <h2>Næste skridt</h2>
          <ul>
            <li>Vil du bygge videre på røg-teknikken? Prøv <Link href="/pulled-pork-paa-grillen">pulled pork</Link></li>
            <li>Brug din gasgrill til lige akkurat det her: <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link></li>
            <li>Servér med <Link href="/grillede-grontsager">grillede grøntsager som tilbehør</Link></li>
            <li>Helt ny til grill? Start med <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
