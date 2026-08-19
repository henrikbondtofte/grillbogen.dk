import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grillet svinemørbrad: saftig hver gang",
  description: "Sådan griller du svinemørbrad uden at tørre den ud: marinade, direkte og indirekte varme, kernetemperatur og hviletid. Prøv den til den næste grillaften.",
  alternates: {
    canonical: "/grillet-svinemoerbrad",
  },
  openGraph: {
    title: "Grillet svinemørbrad: saftig hver gang",
    description: "Sådan griller du svinemørbrad uden at tørre den ud: marinade, direkte og indirekte varme, kernetemperatur og hviletid. Prøv den til den næste grillaften.",
    url: "https://grillbogen.dk/grillet-svinemoerbrad",
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
      headline: "Grillet Svinemørbrad - Saftig Hver Gang",
      description: "Sådan griller du svinemørbrad uden at tørre den ud: marinade, direkte og indirekte varme, kernetemperatur og hviletid. Prøv den til den næste grillaften.",
      url: "https://grillbogen.dk/grillet-svinemoerbrad",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/grillet-svinemoerbrad",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Grillet Svinemørbrad", item: "https://grillbogen.dk/grillet-svinemoerbrad" },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function GrilletSvinemoerbradGuide() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1612156502174-bbbad9882af2?w=1400&h=500&fit=crop"
          alt="Grillet svinemørbrad skåret i tykke skiver med rosa kerne"
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
            Grillet Svinemørbrad
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Grillet Svinemørbrad</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Svinemørbrad er den udskæring vi alle elsker og halvdelen af os ødelægger. For mager til at klare gennemstegning, for hurtig til at glemme. Her er teknikken der giver dig saftig, rosa mørbrad hver gang - også hvis du har en gæst der mener kød skal &quot;være gennemstegt&quot;.
        </p>

        <div className="prose max-w-none">
          <h2>Hvorfor svinemørbrad er svær</h2>
          <p>
            Svinemørbrad er det møreste stykke svin du kan købe. Det er også et af de magreste. Den kombination er hele udfordringen: så snart kernetemperaturen kryber over 65°C, begynder den at tørre ud hurtigere end en bøf.
          </p>
          <p>
            De gamle regler om at svinekød skal være gennemstegt (over 70°C) er for længst forældede. Dansk forbrugerinformation har siden 2011 anbefalet 65°C som sikker kernetemperatur. Det betyder rosa kerne, saftigt kød og en mørbrad der faktisk smager af noget.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Marinér eller krydr 1-12 timer, brun direkte 2-3 min på alle sider, færdiggør indirekte til kernetemp 60°C, hvil 8-10 minutter. Servér ved 63°C i kernen.
          </div>

          <h2>Valg af mørbrad</h2>
          <p>
            En svinemørbrad vejer typisk 350-500 g. To er nok til 4 personer hvis du serverer ordentligt tilbehør.
          </p>
          <ul>
            <li><strong>Hel mørbrad med sølvhinde:</strong> Køb hellere én med sølvhinde og skær den selv. Du sparer 30% og får en pænere mørbrad.</li>
            <li><strong>Farve:</strong> Lyserød til lakserød. Grålig eller brunlig = ikke frisk.</li>
            <li><strong>Form:</strong> Den smalle ende kaldes &quot;halen&quot;. Bøj den ind under for ensartet tykkelse - så bliver hele mørbraden færdig samtidig.</li>
            <li><strong>Marmorering:</strong> Mørbrad har næsten ingen. Det er normalt. Sigt efter en frisk, fast mørbrad i stedet.</li>
          </ul>

          <h2>Forberedelse</h2>

          <h3>Fjern sølvhinden</h3>
          <p>
            Sølvhinden er det sølvgrå, sejlignende lag på den ene side af mørbraden. Den krymper når den varmer og kan gøre mørbraden buet. Stik kniven ind under hinden, vinkl bladet svagt opad og før kniven hen langs mørbraden i lange snit. Det tager 30 sekunder når du har gjort det et par gange.
          </p>

          <h3>Marinade eller tørrub</h3>
          <p>
            Mørbrad har lidt smag selv, så krydring giver gevinst. To gode veje:
          </p>

          <p><strong>Tør rub (sæt på 1 time før):</strong></p>
          <ul>
            <li>2 spsk brunt sukker</li>
            <li>1 spsk groft havsalt</li>
            <li>1 spsk paprika (gerne røget)</li>
            <li>1 tsk hvidløgspulver</li>
            <li>1 tsk friskkværnet sort peber</li>
          </ul>

          <p><strong>Vådmarinade (3-12 timer):</strong></p>
          <ul>
            <li>4 spsk olivenolie</li>
            <li>3 spsk soya</li>
            <li>2 spsk balsamico</li>
            <li>2 fed presset hvidløg</li>
            <li>1 spsk frisk timian eller rosmarin</li>
            <li>1 tsk dijonsennep</li>
            <li>Friskkværnet peber</li>
          </ul>

          <div className="tip-box">
            <strong>Pas på sukker:</strong> Hvis marinaden indeholder honning eller meget brunt sukker, brænder den af ved direkte varme. Brun mørbraden hurtigt over middel varme i stedet for max - eller skyl marinaden af inden grillning.
          </div>

          <h2>Grill-opsætning</h2>
          <p>
            Mørbrad griller du i to faser: høj direkte varme til at danne skorpe, lav indirekte varme til at færdiggøre indersiden uden at tørre den ud.
          </p>

          <h3>Gasgrill</h3>
          <ol>
            <li>Tænd alle brændere og varm grillen op til 220-250°C</li>
            <li>Sluk den ene side - så har du en direkte og en indirekte zone</li>
            <li>Hold låget lukket mellem stegningerne for at holde temperaturen stabil</li>
          </ol>

          <h3>Kulgrill</h3>
          <ol>
            <li>Saml kullene på den ene halvdel for direkte zone</li>
            <li>Den anden halvdel forbliver tom = indirekte zone</li>
            <li>Vent til kullene er hvidglødende uden flammer - flammer er fjenden for marineret kød</li>
          </ol>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1530166906126-2235e533180a?w=800&h=450&fit=crop"
                alt="Kødet ligger på grillen med tydelige grillstreger og let røg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@arizonanthony" target="_blank" rel="noopener noreferrer">Anthony Cantin</a> / Unsplash</p>
          </div>

          <h2>Selve grillningen - trin for trin</h2>

          <h3>Trin 1: Brun på direkte varme</h3>
          <p>
            Læg mørbraden over den varme zone. Brun 2-3 minutter per side - vend en kvart omgang ad gangen, 4 sider i alt. Du vil have en mørk, karameliseret skorpe hele vejen rundt. Det er her smagen sidder.
          </p>

          <h3>Trin 2: Flyt til indirekte zone</h3>
          <p>
            Når skorpen er klar, flyt mørbraden over på den kolde side. Luk låget. Sigt efter en grilltemperatur på 160-180°C i den indirekte zone.
          </p>

          <h3>Trin 3: Kernetermometer</h3>
          <p>
            Stik et termometer ind i den tykkeste del. Det tager 10-15 minutter at nå 60°C afhængig af tykkelse. Lad ikke termometret røre fedt eller sølvhindereste - så får du et falsk lavt tal.
          </p>

          <h3>Trin 4: Tag af og hvil</h3>
          <p>
            Tag mørbraden af ved 60°C i kernen. Læg den på et skærebræt og dæk løst med folie. Lad den hvile i 8-10 minutter. Kernetemperaturen stiger 3-5°C i hvilen (carryover cooking) - du ender på 63-65°C, præcis hvor du vil være.
          </p>

          <h2>Kernetemperatur guide</h2>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Stegning</th>
                <th>Tag af ved</th>
                <th>Endelig temp</th>
                <th>Resultat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Medium rare</strong></td>
                <td>56-58°C</td>
                <td>60-62°C</td>
                <td>Tydelig rosa kerne, meget saftig</td>
              </tr>
              <tr className="!bg-[var(--sand)]">
                <td><strong>Medium ★</strong></td>
                <td>60-62°C</td>
                <td>63-65°C</td>
                <td>Let rosa, saftig, sikker for de fleste</td>
              </tr>
              <tr>
                <td><strong>Medium well</strong></td>
                <td>65-67°C</td>
                <td>68-70°C</td>
                <td>Svagt rosa kant, kan stadig være saftig</td>
              </tr>
              <tr>
                <td><strong>Well done</strong></td>
                <td>70°C+</td>
                <td>72°C+</td>
                <td>Gråt og tørt - undgå</td>
              </tr>
            </tbody>
          </table>

          <div className="tip-box">
            <strong>Anbefaling:</strong> Sigt efter medium (63-65°C). Du får et saftigt resultat med en svag rosa kerne. Hvis du har en gæst der ikke kan klare rosa svinekød, så skær en skive af enden hvor den allerede er lidt mere gennemstegt. Diplomati ved skærebrættet.
          </div>

          <h2>Skæring og servering</h2>
          <p>
            Skær mørbraden med en skarp kniv, vinkelret på fibrene, i tykke skiver à 1-1,5 cm. Tynde skiver tørrer ud på en gang.
          </p>
          <p>
            Klassikere der virker:
          </p>
          <ul>
            <li><strong>Sennepscreme:</strong> 2 dl creme fraiche, 1 spsk grov sennep, 1 tsk honning, salt, peber. Rør sammen, servér koldt.</li>
            <li><strong>Bagte rodfrugter:</strong> Pastinak, gulerod, persillerod skåret i stænger, vendt i olie og timian, bagt 30 min ved 200°C.</li>
            <li><strong>Æblechutney:</strong> Klassisk svinekødskombi der fungerer hele året.</li>
            <li><strong>Til hverdag:</strong> Skiver på rugbrød med remoulade og syltede agurker.</li>
          </ul>

          <h2>De fem typiske fejl</h2>
          <ul>
            <li><strong>Gennemstegt:</strong> 70°C+ er det modsatte af mørt. 63-65°C er den nye standard - og 100% sikker.</li>
            <li><strong>Ingen hviletid:</strong> Skærer du den med det samme, løber alle safterne ud på brættet og mørbraden bliver tør på 30 sekunder.</li>
            <li><strong>For høj indirekte varme:</strong> Over 200°C tørrer den ud. 160-180°C er det rigtige niveau.</li>
            <li><strong>Glemt sølvhinden:</strong> Den krymper og gør mørbraden buet og besværlig at skære.</li>
            <li><strong>Ingen termometer:</strong> Du kan ikke gætte dig til 60°C i kernen. Køb et termometer til 200 kroner - det betaler sig hjem på første mørbrad.</li>
          </ul>

          {/* YouTube video */}
          <h2>Se det i praksis</h2>
          <p>
            Her er hele forløbet på video - fra klargøring og krydring til den færdige mørbrad på skærebrættet:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/0f2NFRZ5ZVI"
              title="Grillopskrift - BBQ pimpet svinemørbrad"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Napoleon Grill Danmark (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Vil du udvide marinadekassen? Læs <Link href="/marinader-til-grill">marinader til grill</Link></li>
            <li>Sammenlign teknikker med <Link href="/perfekte-ribeye">den perfekte ribeye</Link></li>
            <li>Prøv en længere udfordring: <Link href="/pulled-pork-paa-grillen">pulled pork på grillen</Link></li>
            <li>Servér med <Link href="/grillede-grontsager">grillede grøntsager</Link></li>
            <li>Helt ny til grill? Start med <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
