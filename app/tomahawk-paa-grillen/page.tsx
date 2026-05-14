import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tomahawk Steak på Grillen - Komplet Guide (2026)",
  description:
    "Sådan griller du en tomahawk steak. Reverse sear, krydring, kernetemperaturer og timing for den 5 cm tykke kongebøf. Inklusiv tips til hvile og servering.",
  openGraph: {
    title: "Tomahawk Steak på Grillen",
    description:
      "Komplet guide til tomahawk på grillen. Reverse sear, kernetemperaturer, krydring og de tricks der gør forskellen.",
    url: "https://grillbogen.dk/tomahawk-paa-grillen",
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
      headline: "Tomahawk Steak på Grillen",
      description:
        "Komplet guide til tomahawk på grillen. Reverse sear, kernetemperaturer, krydring og hvile.",
      url: "https://grillbogen.dk/tomahawk-paa-grillen",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/tomahawk-paa-grillen",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Tomahawk på Grillen", item: "https://grillbogen.dk/tomahawk-paa-grillen" },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function TomahawkGuide() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1558030006-450675393462?w=1400&h=500&fit=crop"
          alt="Tomahawk steak med langt ribben og tyk marmoreret kerne"
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
            Tomahawk på Grillen
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Tomahawk på Grillen</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          En tomahawk er en ribeye med det 20-30 cm lange ribben stadig på. Den er imponerende, den er saftig, og den er let at ødelægge hvis du behandler den som en almindelig bøf. Her er teknikken der får den 1,2-kilos kongebøf til at lykkes hver gang.
        </p>

        <div className="prose max-w-none">
          <h2>Hvad er en tomahawk?</h2>
          <p>
            Tomahawk skæres fra højreben - samme udskæring som en ribeye, bare med det rensede ribben i fuld længde stadig fastgjort. Navnet kommer af formen: en stor cirkel kød med et langt &quot;skaft&quot; der ligner indianernes økse.
          </p>
          <p>
            Den vejer typisk mellem 900 g og 1,5 kg, og det meste er kød. Det betyder at den er tyk - 5-6 cm er normalt. Det er præcis denne tykkelse der både er hele charmen og hele udfordringen. Du kan ikke bare smide den på grillen og vende den efter 5 minutter. Det giver dig en sort skorpe og en kold midte.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Tør salt 24 timer, temperér 1-2 timer ude af køleskab, reverse sear ved 120°C til kernetemp 50°C, sear direkte 1-2 min per side, hvil 10-15 min. Total tid: ca. 2 timer fra start til skæring.
          </div>

          <h2>Valg af tomahawk</h2>
          <p>
            En tomahawk er en investering - prisen ligger typisk på 600-1.200 kr for et godt stykke. Vælg den med omhu:
          </p>
          <ul>
            <li><strong>Tykkelse:</strong> Minimum 5 cm i kødet. Tyndere udskæringer kaldes ofte bare cowboy steaks.</li>
            <li><strong>Marmorering:</strong> Synlige fine fedtstriber gennem hele kødet. Det er marmoreringen der giver smag og saftighed.</li>
            <li><strong>Ribbenet:</strong> Skal være pænt renset (frenched). Hvidt og glat, ikke beskidt med kødrester.</li>
            <li><strong>Modning:</strong> Dry aged tomahawk i 30+ dage giver en intens, nøddeagtig smag. Det er pengene værd hvis lejligheden tillader det.</li>
            <li><strong>Oprindelse:</strong> Dansk, irsk og uruguayansk grill-kvalitet er solide valg. US prime og japansk wagyu er en helt anden prisliga.</li>
          </ul>

          <h2>Forberedelse - start dagen før</h2>

          <h3>Tørsaltning (dry brining)</h3>
          <p>
            Det her er den ene teknik der løfter tomahawk fra god til markant bedre. 12-24 timer før grillning:
          </p>
          <ol>
            <li>Tag tomahawken ud af pakken og dup tør</li>
            <li>Drys generøst med groft havsalt på begge sider og kanter</li>
            <li>Læg den på en rist over en bakke i køleskab, utildækket</li>
            <li>Lad den stå i 12-24 timer</li>
          </ol>
          <p>
            Saltet trækker først fugt ud af overfladen. Den fugt opløser saltet og trækkes derefter ind i kødet igen sammen med smagen. Resultatet er kød der er krydret HELT IGENNEM, ikke kun på overfladen, og en tør overflade der danner perfekt skorpe når den rammer varmen.
          </p>

          <div className="tip-box">
            <strong>Bemærk:</strong> Hopper du tørsaltningen over, så salt den i hvert fald 45-60 minutter før grill. Springer du den helt over og salter lige før, trækker saltet vand ud af overfladen og du får dårlig skorpedannelse.
          </div>

          <h3>Temperering</h3>
          <p>
            Tag tomahawken ud af køleskabet 1-2 timer før grillning. På 5-6 cm tykt kød er det her ikke til at sjuske med. Koldt kød på 4°C bruger evigheder på at nå indvendig temperatur - og imens brænder ydersiden.
          </p>

          <h3>Krydring lige før grill</h3>
          <p>
            Hvis du har tørsaltet, behøver du ikke mere salt. Lige inden grillning:
          </p>
          <ul>
            <li>Groft kværnet sort peber - generøst</li>
            <li>Evt. lidt olivenolie pensler du på som tynd film</li>
            <li>Friskklippet rosmarin eller timian som du har liggende på den under hvile</li>
          </ul>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1602945072881-75915b0f641f?w=800&h=450&fit=crop"
                alt="Tyk bøf med synlige grillstreger og karameliseret skorpe på grillen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@aminhasani" target="_blank" rel="noopener noreferrer">Amin Hasani</a> / Unsplash</p>
          </div>

          <h2>Teknikken: Reverse Sear</h2>
          <p>
            På en bøf der er 5-6 cm tyk er reverse sear den eneste fornuftige metode. Almindelig sear-først giver enten brændt yderside eller rå inderside. Med reverse sear varmer du kødet langsomt op først, og afslutter med en kort, kraftig brunering. Resultatet: en jævn rosa kerne fra kant til kant og en mørk, knasende skorpe.
          </p>

          <h3>Trin 1: Indirekte langsomt</h3>
          <ol>
            <li>Saml kullene på den ene halvdel eller tænd kun den ene side af gasgrillen</li>
            <li>Sigt efter en stabil grilltemperatur på 110-120°C</li>
            <li>Læg tomahawken på den kolde side med ribbenet pegende væk fra varmen</li>
            <li>Stik et termometer ind i kødets tykkeste del (ikke gennem fedtkappen)</li>
            <li>Luk låget. Vent. Det tager 45-75 minutter at nå 48-50°C i kernen</li>
          </ol>

          <h3>Trin 2: Hvile før sear</h3>
          <p>
            Når kernetemperaturen rammer 50°C, tag tomahawken af og lad den hvile på et skærebræt i 5 minutter. Imens skruer du grillen op til max - 250-300°C overflade-temperatur, gerne højere på en gasgrill med sear-zone.
          </p>

          <h3>Trin 3: Direkte sear</h3>
          <ol>
            <li>Læg tomahawken direkte over varmen</li>
            <li>1-2 minutter per side - du vil have en mørk, karameliseret skorpe</li>
            <li>Brug kødtang, ikke gaffel. Stikker du hul, mister du saft</li>
            <li>Sear også de tykke kanter - rul tomahawken på siden og hold den der med en tang i 30 sekunder</li>
          </ol>

          <h3>Trin 4: Endelig hvile</h3>
          <p>
            Læg tomahawken på et skærebræt og dæk LØST med folie. 10-15 minutters hvile. Det er ikke til diskussion. Skærer du den med det samme, vælter safterne ud over brættet og du har lavet en dyr, kedelig steak.
          </p>

          <h2>Kernetemperatur guide</h2>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Stegning</th>
                <th>Tag af ved (efter sear)</th>
                <th>Endelig temp</th>
                <th>Resultat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rare</strong></td>
                <td>48-50°C</td>
                <td>50-52°C</td>
                <td>Rød, kølig midte</td>
              </tr>
              <tr className="!bg-[var(--sand)]">
                <td><strong>Medium rare ★</strong></td>
                <td>52-55°C</td>
                <td>54-57°C</td>
                <td>Lys rød, varm midte - hot spot</td>
              </tr>
              <tr>
                <td><strong>Medium</strong></td>
                <td>57-60°C</td>
                <td>60-63°C</td>
                <td>Lyserød midte</td>
              </tr>
              <tr>
                <td><strong>Medium well</strong></td>
                <td>62-65°C</td>
                <td>65-68°C</td>
                <td>Svagt rosa - undgå på tomahawk</td>
              </tr>
            </tbody>
          </table>

          <div className="tip-box">
            <strong>Anbefaling:</strong> Tomahawk er bygget til medium rare. Marmoreringen smelter rigtigt og giver maksimal smag og saftighed ved 54-57°C. Vil du have den mere stegt, så tag en ribeye i stedet - det er billigere og lige så godt.
          </div>

          <h2>Skæring og servering</h2>
          <p>
            Skær først ribbenet fri ved at føre en skarp kniv langs benet. Skær derefter kødet i 1-1,5 cm tykke skiver MOD fibrene. Server skiverne på et stort skærebræt med ribbenet pegende ud - så ved alle hvad der serveres.
          </p>
          <p>
            Klassisk servering:
          </p>
          <ul>
            <li><strong>Flaky havsalt:</strong> Et drys Maldon-salt på de friske skiver</li>
            <li><strong>Urtesmør:</strong> Smør pisket med persille, dragon og lidt citronsaft</li>
            <li><strong>Tilbehør:</strong> Hasselback-kartofler, asparges og en simpel grøn salat</li>
            <li><strong>Vin:</strong> En kraftig rødvin - amarone, malbec eller en god syrah</li>
          </ul>
          <p>
            Ribbenet? Det er den ene gæsts privilegium at få lov at gnaske det. Lad ham eller hende kæmpe lidt - kødet der sidder helt ind til knoglen er ofte den bedste bid på hele tomahawken.
          </p>

          <h2>De fem typiske fejl</h2>
          <ul>
            <li><strong>Direkte sear først:</strong> 5-6 cm tykt kød er umuligt at lave medium rare med traditionel teknik. Reverse sear er ikke til diskussion.</li>
            <li><strong>For koldt kød:</strong> 30 minutter ude af køleskab er for lidt. Sigt efter 1-2 timer på en tomahawk.</li>
            <li><strong>Ingen termometer:</strong> Gætter du på en 1.000 kr bøf, har du ikke fortjent den. Termometer er ikke snyd - det er hvad professionelle bruger.</li>
            <li><strong>For tidlig skæring:</strong> Skær aldrig en tomahawk inden 10 minutters hvile. Ellers løber alle safterne ud.</li>
            <li><strong>For meget krydring:</strong> Den her udskæring har enorm smag i sig selv. Salt, peber, måske rosmarin. Ikke en hel rub.</li>
          </ul>

          <h2>Næste skridt</h2>
          <ul>
            <li>Vil du øve teknikken på en billigere udskæring? Læs <Link href="/perfekte-ribeye">den perfekte ribeye</Link></li>
            <li>Mestre din gasgrill først: <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link></li>
            <li>Eller en helt anden disciplin: <Link href="/pulled-pork-paa-grillen">pulled pork på grillen</Link></li>
            <li>Servér med <Link href="/grillede-grontsager">grillede grøntsager</Link></li>
            <li>Helt ny til grill? Start med <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
