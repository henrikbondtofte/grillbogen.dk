import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grill for Begyndere - Alt Du Skal Vide (2026)",
  description:
    "Komplet begynderguide til grill. Lær at vælge grill, tænde korrekt, styre temperaturen og lave din første perfekte grillmiddag.",
};

export default function GrillForBegyndere() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-[var(--charcoal)]">
        <Image
          src="https://images.unsplash.com/photo-1504564321926-4bd1b3929d93?w=1400&h=400&fit=crop"
          alt="Person der griller udendørs i solskin"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-8">
          <span className="inline-block bg-[var(--ember)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            GUIDES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Grill for Begyndere
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--smoke)] mb-6">
          <Link href="/" className="hover:text-[var(--ember)] no-underline">Forside</Link>
          <span className="mx-2">/</span>
          <span>Grill for Begyndere</span>
        </nav>

        <p className="text-xl text-[var(--smoke)] mb-8 leading-relaxed">
          Første gang med grillen? Ingen stress. Grill er ikke raketvidenskab - det er mad over ild. Denne guide tager dig fra &quot;jeg har aldrig tændt en grill&quot; til &quot;den middag var fantastisk&quot; på én eftermiddag.
        </p>

        <div className="prose max-w-none">
          <h2>Valg af din første grill</h2>
          <p>
            Du behøver ikke bruge en formue på din første grill. Her er hvad du skal overveje:
          </p>

          <h3>Gasgrill - det nemme valg</h3>
          <p>
            Hvis du vil have det nemmest muligt, er gasgrill vejen frem. Tænd knappen, vent 10 minutter, grill. Ingen kul, ingen aske, minimal rengøring.
          </p>
          <ul>
            <li><strong>Budget:</strong> 2.000-4.000 kr for en solid begyndergrill</li>
            <li><strong>Brændere:</strong> Minimum 2, gerne 3 (giver mulighed for indirekte varme)</li>
            <li><strong>Mærker:</strong> Weber Spirit-serien er et sikkert valg. Char-Broil og Landmann har gode budget-modeller.</li>
          </ul>

          <h3>Kulgrill - det autentiske valg</h3>
          <p>
            Vil du have den &quot;rigtige&quot; grillsmag med røg og kul? Kulgrill er billigere at købe og giver en autentisk oplevelse.
          </p>
          <ul>
            <li><strong>Budget:</strong> 500-2.500 kr for en god kulgrill</li>
            <li><strong>Anbefaling:</strong> En Weber Kettle (kuglegriller) er den klassiker de fleste starter med</li>
            <li><strong>Ulempe:</strong> Kræver mere tid og tålmodighed at lære</li>
          </ul>

          <div className="tip-box">
            <strong>Vores anbefaling til begyndere:</strong> Start med gasgrill hvis du vil grille ofte og nemt. Start med kulgrill hvis smag og oplevelse er vigtigere end bekvemmelighed. Læs vores dybdegående <Link href="/kulgrill-vs-gasgrill">sammenligning af kulgrill og gasgrill</Link>.
          </div>

          <h2>Det essentielle udstyr</h2>
          <p>
            Du behøver ikke en masse udstyr for at komme i gang. Her er det absolutte minimum:
          </p>

          <div className="bg-[var(--warm-gray)] rounded-xl p-6 my-6">
            <h3 className="text-[var(--charcoal)] mt-0 border-0">Starter-kit (under 500 kr)</h3>
            <ol>
              <li><strong>Grilltang</strong> - Lang, med fjedrende greb. Dit vigtigste redskab.</li>
              <li><strong>Stegetermometer</strong> - Digital, instant-read. Stop med at gætte.</li>
              <li><strong>Grillbørste</strong> - Til at rense risten. Vælg en med messinghår (ikke stål).</li>
              <li><strong>Groft salt og peber</strong> - Det eneste krydderi du har brug for til at starte.</li>
            </ol>
          </div>

          <p>
            Det er det. Alt andet kan du købe senere når du finder ud af hvad du har brug for. Undgå fristelsen til at købe 15 forskellige grillredskaber på dag 1.
          </p>

          <h2>Din første grillsession - step by step</h2>
          <p>
            Her er en simpel plan for din allerførste grillmiddag. Vi holder det enkelt med pølser og burgere - det er tilgivende mad der er svær at ødelægge.
          </p>

          <h3>Indkøb</h3>
          <ul>
            <li>Gode kvalitetspølser (ikke de billigste)</li>
            <li>Hakket oksekød (15-20% fedt - IKKE magert, fedt = smag)</li>
            <li>Burgerboller</li>
            <li>Groft salt og peber</li>
            <li>Salatblade, tomat, løg til topping</li>
          </ul>

          <h3>Forberedelse</h3>
          <ol>
            <li>Form burgere: ca. 150g per burger, 2 cm tykke. Lav en lille fordybning i midten (forhindrer at de buler op).</li>
            <li>Krydre med salt og peber. Ferdig. Ingen æg, ingen rasp, ingen hakkede løg. Hold det simpelt.</li>
            <li>Lad pølser og burgere nå stuetemperatur (20-30 min ud af køleskabet).</li>
          </ol>

          <h3>Grillning</h3>
          <ol>
            <li><strong>Forvarm:</strong> Tænd grillen og lad den nå fuld temperatur (250°C+). Det tager 10-15 min.</li>
            <li><strong>Olie risten:</strong> Dyp et stykke køkkenrulle i olie og gnid risten med din grilltang. Det forhindrer at maden klæber.</li>
            <li><strong>Pølser først:</strong> Læg dem på medium varme. Vend hver 2-3 minutter. De tager 8-12 min.</li>
            <li><strong>Burgere:</strong> Høj direkte varme. 3-4 min per side for medium. TRYK ALDRIG med spatlen - du presser safterne ud.</li>
            <li><strong>Tjek temperaturen:</strong> Burgere er færdige ved 70°C kernetemperatur.</li>
          </ol>

          <div className="tip-box">
            <strong>Begynderregel #1:</strong> Rør ikke ved maden for meget. Lad den ligge. Hvis du konstant vender og flytter, får du aldrig den gode grillskorpe. Tålmodighed betaler sig.
          </div>

          <h2>5 fejl alle begyndere laver</h2>
          <ol>
            <li>
              <strong>Manglende forvarming</strong>
              <p>En kold grill giver kød der klæber fast og mangler smag. Vent altid til grillen er varm.</p>
            </li>
            <li>
              <strong>For meget fiflen</strong>
              <p>Lad maden være. Vend én gang. Mere behøver du ikke. Hvert løft og vending koster dig stegeflade og skorpe.</p>
            </li>
            <li>
              <strong>Ingen hviletid</strong>
              <p>Lad kød hvile 5 minutter efter grillning. Safterne fordeler sig og forskellen er enorm.</p>
            </li>
            <li>
              <strong>Gætteri i stedet for termometer</strong>
              <p>Du kan IKKE se om en burger er gennemstegt ved at trykke på den. Brug termometer.</p>
            </li>
            <li>
              <strong>For komplicerede opskrifter</strong>
              <p>Start simpelt. Salt, peber, godt kød, korrekt temperatur. Det er 90% af vejen.</p>
            </li>
          </ol>

          <h2>Sikkerhed - de vigtige regler</h2>
          <ul>
            <li><strong>Gasgrill:</strong> ALTID tænd med åbent låg. Gas + lukket rum = eksplosionsfare.</li>
            <li><strong>Kulgrill:</strong> Brug ALDRIG lighter fluid. Brug optændingsblokke eller skorsten.</li>
            <li><strong>Placering:</strong> Minimum 1 meter fra bygninger, hegn og brændbare materialer.</li>
            <li><strong>Børn og kæledyr:</strong> Hold dem væk fra grillen. Altid.</li>
            <li><strong>Slukning:</strong> Luk grillen og lad den køle helt af. Hæld aldrig varme kul i skraldespanden.</li>
          </ul>

          <h2>Dit næste skridt</h2>
          <p>
            Tillykke - du er i gang! Når du har mestret burgere og pølser, er du klar til at gå videre:
          </p>
          <ul>
            <li>Prøv en <Link href="/perfekte-ribeye">ribeye steak</Link> - det er nemmere end du tror</li>
            <li>Lær mere om din gasgrill i vores <Link href="/fuldstaendig-guide-til-gasgrill">komplette gasgrill-guide</Link></li>
            <li>Sammenlign grilltyper i <Link href="/kulgrill-vs-gasgrill">kulgrill vs gasgrill</Link></li>
            <li>Klar til en udfordring? Prøv <Link href="/pulled-pork-paa-grillen">pulled pork</Link></li>
          </ul>

          {/* YouTube video */}
          <h2>Se det i praksis</h2>
          <p>
            Se denne video for en god visuel introduktion til grill-basics:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/Q5y2voEWJ6U"
              title="Weber's begynderguide til grillning"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Weber Grill (YouTube)</p>
        </div>
      </article>
    </>
  );
}
