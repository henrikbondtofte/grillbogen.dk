import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rengøring af Grill - Komplet Guide til Ren Grill (2026)",
  description:
    "Lær at rengøre din grill korrekt. Vedligeholdelse af gasgrill og kulgrill, fjernelse af fedt og rust, sæsonopbevaring og de bedste rengøringsmidler.",
  openGraph: {
    title: "Rengøring af Grill - Komplet Guide til Ren Grill",
    description:
      "Lær at rengøre din grill korrekt. Vedligeholdelse, fjernelse af fedt og rust, sæsonopbevaring og rengøringsmidler.",
    url: "https://grillbogen.dk/rengoering-af-grill",
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
      headline: "Rengøring af Grill - Komplet Guide til en Ren Grill",
      description: "Lær at rengøre din grill korrekt. Vedligeholdelse af gasgrill og kulgrill, fjernelse af fedt og rust, sæsonopbevaring og de bedste rengøringsmidler.",
      url: "https://grillbogen.dk/rengoering-af-grill",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/rengoering-af-grill",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Rengøring af Grill", item: "https://grillbogen.dk/rengoering-af-grill" },
      ],
    },
  ];
  const jsonString = JSON.stringify(schema);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonString }} />;
}

export default function RengoeringAfGrill() {
  return (
    <>
      <ArticleSchema />
      {/* Hero */}
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1529193591184-b1d58069ecf0?w=1400&h=500&fit=crop"
          alt="Ren grill klar til brug"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)]/80 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-4xl mx-auto px-4 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="category-badge">Vedligeholdelse</span>
            <div className="h-px w-8 bg-[var(--ember)]/50" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Rengøring af Grill
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Rengøring af Grill</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          En ren grill er en bedre grill. Det handler ikke om at være pernittengansen - det handler om smag, sikkerhed og levetid. Gammelt fedt giver harsk smag, tilstoppede brændere giver ujævn varme, og rust æder sig igennem selv den bedste grill. Her er alt du skal vide om at holde din grill i topform.
        </p>

        <div className="prose max-w-none">
          <h2>Hvorfor rengøring faktisk er vigtigt</h2>
          <p>
            Lad os starte med at slå fast: det her handler ikke om æstetik. Der er tre konkrete grunde til at du skal holde din grill ren.
          </p>
          <ul>
            <li><strong>Smag.</strong> Ophobet fedt og madrester bliver harske over tid. De brænder fast og giver en bitter, ubehagelig smag der lægger sig på alt du griller. Det der &quot;seasoning&quot; som nogle hævder forbedrer smagen? Det er gammel fedtfilm. Smid det argument væk.</li>
            <li><strong>Sikkerhed.</strong> Fedtophobninger i bunden af grillen kan antændes og give farlige flare-ups. En gasgrill med tilstoppede brændere kan give gasophobning. Ingen af delene er sjove.</li>
            <li><strong>Levetid.</strong> En velholdt grill kan holde 10-15 år. En forsømt grill er slidt op på 3-4. Rust, korrosion og tilstoppede dele er den direkte årsag.</li>
          </ul>

          <h2>Rengøring efter hver brug (5 minutter)</h2>
          <p>
            Det vigtigste du kan gøre er også det nemmeste. Gør det her HVER gang du har grillet, og den store rengøring bliver meget sjældnere nødvendig.
          </p>

          <h3>Trin 1: Brænd af</h3>
          <p>
            Når du er færdig med at grille, luk låget og skru op til fuld varme i 10-15 minutter. Det brænder madrester og fedt til aske der er let at fjerne. Det er den mest effektive rengøring du kan lave, og den tager nul indsats.
          </p>

          <h3>Trin 2: Børst risten</h3>
          <p>
            Mens risten stadig er varm, skrab den grundigt med en stålbørste eller en kugle af aluminiumsfolie holdt med en tang. Varmen gør det hele nemt - madrester løsner sig praktisk talt af sig selv.
          </p>
          <p>
            <strong>Et ord om stålbørster:</strong> Kontrollér børsten regelmæssigt for løse ståltråde. Løse tråde kan sætte sig fast i risten og ende i maden. Nogle grillere er gået helt over til børster med nylontråd eller trækrabber af den grund.
          </p>

          <h3>Trin 3: Tøm fedtbakken</h3>
          <p>
            Tøm fedtopsamleren efter hver 2-3 brug. Det tager 30 sekunder og forhindrer den mest almindelige årsag til grilbrande. Mange glemmer den fordi den sidder ude af syne - gør det til en vane.
          </p>

          <div className="tip-box">
            <strong>Rutine:</strong> Brænd af mens du spiser. Børst risten når du rydder op. Det tager under 5 minutter og holder grillen i form hele sæsonen.
          </div>

          <h2>Den store rengøring (sæsonstart og -slut)</h2>
          <p>
            To gange om året - når du åbner sæsonen om foråret og lukker den om efteråret - fortjener grillen en grundig gennemgang. Sæt 45-60 minutter af. Det er det værd.
          </p>

          <h3>Gasgrill - trin for trin</h3>
          <ol>
            <li><strong>Afmonter ristene.</strong> Læg dem i en stor balje med varmt vand og opvaskemiddel. Lad dem trække i 30 minutter.</li>
            <li><strong>Fjern varmeplader/deflektorer.</strong> Skrab forbrændte rester af med en spartel. Vask dem i sæbevand.</li>
            <li><strong>Rens brænderne.</strong> Tjek hvert brænderhul for tilstopninger. Brug en tynd ståltråd eller en tandstikker til at åbne blokerede huller. Tilstoppede brændere giver ujævn varme og er den hyppigste årsag til at en grill &quot;ikke fungerer ordentligt&quot;.</li>
            <li><strong>Skrab grillkammeret.</strong> Brug en plastikspatel til at skrabe brændt fedt og aske af siderne og bunden. Det hele skal ned i fedtbakken og ud.</li>
            <li><strong>Vask ydersiden.</strong> Varmt sæbevand og en blød klud. Rustfrit stål kan poleres med en smule babyolie på en klud - tør AF med stålens retning, ikke imod.</li>
            <li><strong>Saml igen.</strong> Sørg for at brændere, deflektorer og riste sidder korrekt. En skæv varmeplade giver varmezoner.</li>
            <li><strong>Testtænd.</strong> Tænd alle brændere og kør grillen i 15 minutter ved fuld varme. Kontrollér at alle brændere tænder jævnt og at der ikke lugter af gas.</li>
          </ol>

          <h3>Kulgrill - trin for trin</h3>
          <ol>
            <li><strong>Fjern al aske.</strong> Gammel aske absorberer fugt og fremskynder rust. Tøm askeopsamleren helt og fej bunden ren.</li>
            <li><strong>Vask risten.</strong> Samme teknik som gasgrill - sæbevand og en stålbørste. Kuglegrillens runde rist kan lægges i en stor affaldssæk med ammoniakholdig rengøring natten over for ekstra effekt.</li>
            <li><strong>Tjek ventilerne.</strong> Sørg for at top- og bundventiler åbner og lukker frit. De styrer temperaturen - klemmer de, har du ingen temperaturkontrol.</li>
            <li><strong>Kontrollér for rust.</strong> Især bunden og benene. Lidt overflade-rust kan slibes af med sandpapir (korn 120) og behandles med varmebestandig maling.</li>
            <li><strong>Olie risten.</strong> Dup en klud i plantefedt og gnid den ind i den rene rist. Det skaber et tyndt beskyttelseslag mod rust.</li>
          </ol>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Del</th>
                <th>Rengøring</th>
                <th>Hyppighed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rist</strong></td>
                <td>Stålbørste + varm rist</td>
                <td>Hver gang</td>
              </tr>
              <tr>
                <td><strong>Fedtbakke</strong></td>
                <td>Tøm og vask</td>
                <td>Hver 2-3 brug</td>
              </tr>
              <tr>
                <td><strong>Brændere</strong></td>
                <td>Tjek huller, rens med tråd</td>
                <td>2x per sæson</td>
              </tr>
              <tr>
                <td><strong>Varmeplader</strong></td>
                <td>Skrab og vask</td>
                <td>2x per sæson</td>
              </tr>
              <tr>
                <td><strong>Indersiden</strong></td>
                <td>Spartel + sæbevand</td>
                <td>2x per sæson</td>
              </tr>
              <tr>
                <td><strong>Ydersiden</strong></td>
                <td>Klud + sæbevand</td>
                <td>Månedligt</td>
              </tr>
              <tr>
                <td><strong>Ventiler (kulgrill)</strong></td>
                <td>Tjek bevægelighed</td>
                <td>2x per sæson</td>
              </tr>
            </tbody>
          </table>

          <h2>Rust: Forebyggelse og fjernelse</h2>
          <p>
            Rust er grillens værste fjende. Feuchtighed plus jern er lig rust, og din grill lever udendørs. Sådan holder du den i skak:
          </p>
          <ul>
            <li><strong>Brug et grillovertræk.</strong> Det er den enkleste og mest effektive beskyttelse. Et overtræk til 200-400 kr forlænger grillens levetid med år. Sørg for at grillen er helt tør og kold inden du dækker den til - fugt fanget under et overtræk er værre end ingen overtræk.</li>
            <li><strong>Olie risten efter rengøring.</strong> Et tyndt lag plantefedt beskytter mod fugt. Tør overskud af med køkkenrulle.</li>
            <li><strong>Tøm asken.</strong> Aske holder på fugt og er korrosiv. En kulgrill med aske i bunden ruster indefra.</li>
            <li><strong>Opbevar tørt om vinteren.</strong> Hvis du kan, flyt grillen ind i et skur eller garage fra november til marts. Ellers dæk den godt til og løft den op fra jorden med et par mursten.</li>
          </ul>

          <h3>Fjernelse af eksisterende rust</h3>
          <p>
            Let rust på risten fjernes med en stålbørste og en runde i opvaskevand. Dybere rust kræver kraftigere metoder:
          </p>
          <ol>
            <li>Skrub med ståluld (korn 0) eller sandpapir (korn 120)</li>
            <li>Vask grundigt med sæbevand</li>
            <li>Tør helt</li>
            <li>Påfør et tykt lag plantefedt</li>
            <li>Kør grillen ved høj varme i 30 minutter (det &quot;indbrænder&quot; olien og skaber beskyttelse)</li>
          </ol>
          <p>
            Er rusten gået igennem metallet (du kan se huller eller tynde steder), er det tid til en ny rist. De fleste producenter sælger reservedele.
          </p>

          <div className="tip-box">
            <strong>Støbejerns-riste:</strong> Støbejern kræver ekstra opmærksomhed. Vask ALDRIG med sæbe - det fjerner den opbyggede patina. Brug kun varmt vand og en stiv børste. Olie grundigt efter hver brug. Behandlet rigtigt holder en støbejerns-rist en menneskealder.
          </div>

          <h2>Opbevaring om vinteren</h2>
          <p>
            Sæsonen er ovre, og grillen skal stå i fred i nogle måneder. Gør det rigtigt, og du er klar dag ét næste forår:
          </p>
          <ol>
            <li><strong>Lav den store rengøring</strong> som beskrevet ovenfor</li>
            <li><strong>Fjern gasflasken</strong> (gasgrill) og opbevar den stående, udendørs, beskyttet mod direkte sol</li>
            <li><strong>Olie alle metalflader</strong> - riste, varmeplader, indersiden af låget</li>
            <li><strong>Dæk til</strong> med et åndbart grillovertræk</li>
            <li><strong>Placer tørt</strong> - undgå direkte jordkontakt, løft grillen op på mursten eller traller</li>
          </ol>

          <h2>Rengøringsmidler: Hvad virker og hvad er spild</h2>
          <ul>
            <li><strong>Varmt vand + opvaskemiddel:</strong> Virker til 90% af alt. Billigt, effektivt, ufarligt for maden.</li>
            <li><strong>Natron (bagesoda):</strong> Blandet med vand til en pasta er det fantastisk til indbrændt fedt. Påfør, vent 20 minutter, skrub af.</li>
            <li><strong>Eddike:</strong> Opløser kalk og let fedtfilm. Spray på, vent 10 minutter, tør af.</li>
            <li><strong>Specialrengøring til grill:</strong> Virker godt til ekstreme tilfælde, men er sjældent nødvendigt hvis du vedligeholder løbende. Skyl ALTID grundigt efter - du vil ikke have kemikalier på din rist.</li>
            <li><strong>Ovnrens:</strong> Effektivt men aggressivt. Kun til riste og dele der kan skylles grundigt. Brug ALDRIG på coatede overflader eller indersiden af grillen.</li>
          </ul>

          <h2>Læs videre</h2>
          <ul>
            <li>Brug for nyt udstyr? Læs <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link></li>
            <li>Klar til at grille? Prøv <Link href="/grillede-grontsager">grillede grøntsager</Link></li>
            <li>Ny til grill? Start med <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
