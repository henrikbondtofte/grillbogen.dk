import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Den Perfekte Ribeye Steak på Grillen (2026)",
  description:
    "Step-by-step guide til at grille den perfekte ribeye. Reverse sear teknik, kernetemperaturer, krydring og de tricks der gør forskellen.",
};

export default function RibeyeGuide() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-[var(--charcoal)]">
        <Image
          src="https://images.unsplash.com/photo-1558030006-450675393462?w=1400&h=400&fit=crop"
          alt="Perfekt grillet ribeye steak med grillmærker"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-8">
          <span className="inline-block bg-[var(--ember)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            OPSKRIFTER
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Den Perfekte Ribeye Steak
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--smoke)] mb-6">
          <Link href="/" className="hover:text-[var(--ember)] no-underline">Forside</Link>
          <span className="mx-2">/</span>
          <span>Perfekt Ribeye</span>
        </nav>

        <p className="text-xl text-[var(--smoke)] mb-8 leading-relaxed">
          Ribeye er kongen af steaks. Marmoreringen giver en smag og saftighed som ingen anden udskæring kan matche. Her er alt du skal vide for at nagle den - fra slagteren til tallerkenen.
        </p>

        <div className="prose max-w-none">
          <h2>Hvad gør ribeye speciel?</h2>
          <p>
            Ribeye skæres fra højreben (ribben 6-12) og er kendetegnet ved sin intense marmorering - de fine fedtstriber der løber gennem kødet. Når fedtet smelter under grillning, baster det kødet indefra og giver en smag og saftighed som leaner udskæringer bare ikke kan konkurrere med.
          </p>
          <p>
            Ribeye har også et &quot;øje&quot; - den centrale kerne af kød omgivet af en fedtrand. Det er denne kombination der gør den til den foretrukne steak for de fleste grill-entusiaster.
          </p>

          <h2>Valg af ribeye</h2>
          <p>
            En god ribeye starter i slagterbutikken. Her er hvad du skal kigge efter:
          </p>
          <ul>
            <li><strong>Tykkelse:</strong> Minimum 2,5 cm, ideelt 3-4 cm. Tynde steaks er næsten umulige at grille medium rare.</li>
            <li><strong>Marmorering:</strong> Synlige fedtstriber gennem hele kødet. Jo mere, jo bedre smag.</li>
            <li><strong>Farve:</strong> Dyb kirsebærrød. Brunlig farve = ikke frisk.</li>
            <li><strong>Dry aged?</strong> Hvis slagteren tilbyder dry aged ribeye, er det pengene værd. 21-28 dages modning giver dybere smag.</li>
          </ul>

          <div className="tip-box">
            <strong>Budget-tip:</strong> Køb hele ribeye (entrecote) og skær selv. Du sparer 30-50% per steak sammenlignet med preskårne, og du bestemmer selv tykkelsen.
          </div>

          <h2>Forberedelse</h2>

          <h3>1. Temperering (30-60 min)</h3>
          <p>
            Tag steaken ud af køleskabet 30-60 minutter før grillning. Koldt kød giver ujævn stegning - ydersiden bliver overkogt før midten når temperatur.
          </p>

          <h3>2. Krydring</h3>
          <p>
            Hold det simpelt. Ribeye har så meget smag i sig selv at den ikke har brug for meget:
          </p>
          <ul>
            <li><strong>Groft havsalt</strong> - Generøst. Det trækker fugt ud og giver bedre skorpe.</li>
            <li><strong>Friskkværnet sort peber</strong> - Groft kværnet.</li>
            <li><strong>Evt. olivenolie</strong> - En tynd film hjælper skorpedannelsen.</li>
          </ul>

          <div className="tip-box">
            <strong>Timing:</strong> Salt steaken 40-60 minutter før grillning. Saltet trækker først fugt ud, som derefter absorberes tilbage ind i kødet sammen med smagen. 5 minutter før = våd overflade = dårlig skorpe.
          </div>

          <h2>Grillteknik: Reverse Sear</h2>
          <p>
            Reverse sear er den bedste metode til tykke steaks. I stedet for den traditionelle &quot;sear først, færdiggør bagefter&quot; gør du det omvendt - og resultatet er markant bedre.
          </p>

          <h3>Trin 1: Lav varme (indirekte)</h3>
          <ol>
            <li>Sæt grillen op med indirekte varme (120-140°C)</li>
            <li>Placer steaken på den kolde side</li>
            <li>Grill med lukket låg indtil kernetemperatur er 50-52°C</li>
            <li>Det tager typisk 25-40 minutter afhængig af tykkelse</li>
          </ol>

          <h3>Trin 2: Hvile</h3>
          <p>Tag steaken af og lad den hvile 5 minutter mens du forbereder næste trin.</p>

          <h3>Trin 3: Sear (direkte høj varme)</h3>
          <ol>
            <li>Skru alle brændere på max (250-300°C)</li>
            <li>Sear steaken 1-2 minutter per side - du vil have en mørk, karameliseret skorpe</li>
            <li>Flip kun én gang</li>
          </ol>

          <h3>Trin 4: Hvile igen</h3>
          <p>
            Lad steaken hvile 5-8 minutter tildækket med folie. Kernetemperaturen stiger 2-3°C under hvilen.
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
                <td><strong>Rare</strong></td>
                <td>48-50°C</td>
                <td>50-52°C</td>
                <td>Rød, kølig midte</td>
              </tr>
              <tr className="bg-[#fff3e0]">
                <td><strong>Medium rare ★</strong></td>
                <td>52-55°C</td>
                <td>54-57°C</td>
                <td>Lys rød, varm midte</td>
              </tr>
              <tr>
                <td><strong>Medium</strong></td>
                <td>58-60°C</td>
                <td>60-63°C</td>
                <td>Lyserød midte</td>
              </tr>
              <tr>
                <td><strong>Medium well</strong></td>
                <td>63-65°C</td>
                <td>65-68°C</td>
                <td>Svagt rosa</td>
              </tr>
              <tr>
                <td><strong>Well done</strong></td>
                <td>68-70°C</td>
                <td>71°C+</td>
                <td>Gennemstegt (frarådes for ribeye)</td>
              </tr>
            </tbody>
          </table>

          <div className="tip-box">
            <strong>Anbefaling:</strong> Medium rare (54-57°C) er det sweet spot hvor ribeyes marmorering virkelig udfolder sig. Fedtet er smeltet nok til at give smag, men kødet er stadig saftigt og mørt. Prøv det - du kan altid grille videre, men du kan ikke &quot;un-grille&quot;.
          </div>

          <h2>Servering</h2>
          <p>
            Den perfekte finish:
          </p>
          <ul>
            <li><strong>Flaky havsalt</strong> - Et drys Maldon salt på toppen lige før servering</li>
            <li><strong>Urtesmør</strong> - En skive smør med dragon, persille og hvidløg der smelter på den varme steak</li>
            <li><strong>Tilbehør:</strong> Grillede grøntsager, bagt kartoffel eller en simpel grøn salat</li>
            <li><strong>Skæring:</strong> Skær altid mod fibrene for den møreste oplevelse</li>
          </ul>

          <h2>Almindelige fejl</h2>
          <ul>
            <li><strong>For koldt kød:</strong> Steaken SKAL tempereres. 30 min minimum ud af køleskabet.</li>
            <li><strong>For tidlig vending:</strong> Lad den få en ordentlig skorpe. Hvis den klæber, er den ikke klar.</li>
            <li><strong>Ingen hviletid:</strong> Springer du hvilen over, løber alle safterne ud ved første snit.</li>
            <li><strong>Gætteri:</strong> Brug termometer. Altid. Det er ikke snyd - det er professionelt.</li>
            <li><strong>For tynd steak:</strong> Under 2,5 cm er næsten umuligt at lave medium rare. Insistér på tykkelse.</li>
          </ul>

          {/* YouTube video */}
          <h2>Se teknikken</h2>
          <p>
            Her er en fremragende video der viser reverse sear-teknikken i praksis:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/akO6D_tc0lo"
              title="Reverse sear ribeye steak on the grill"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Guga Foods (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Klar til en større udfordring? Prøv <Link href="/pulled-pork-paa-grillen">pulled pork</Link></li>
            <li>Vil du optimere din gasgrill? Læs <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link></li>
            <li>Helt ny til grill? Start med <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
