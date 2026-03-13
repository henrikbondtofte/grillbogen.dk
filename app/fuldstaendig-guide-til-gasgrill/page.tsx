import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fuldstændig Guide til Gasgrill (2026)",
  description:
    "Lær alt om gasgrill - valg, tænding, temperaturzoner, teknikker og vedligeholdelse. Komplet guide for begyndere og erfarne grillmestre.",
};

export default function GasgrillGuide() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-[var(--charcoal)]">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&h=400&fit=crop"
          alt="Gasgrill med flammer og mad"
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
            Fuldstændig Guide til Gasgrill
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-[var(--smoke)] mb-6">
          <Link href="/" className="hover:text-[var(--ember)] no-underline">Forside</Link>
          <span className="mx-2">/</span>
          <span>Guide til Gasgrill</span>
        </nav>

        <p className="text-xl text-[var(--smoke)] mb-8 leading-relaxed">
          Gasgrill er den mest populære grilltype i Danmark - og med god grund. Hurtig opvarmning, præcis temperaturkontrol og nem rengøring gør den til et oplagt valg for både hverdagsgrill og weekendfester.
        </p>

        <div className="prose max-w-none">
          <h2>Hvorfor vælge gasgrill?</h2>
          <p>
            Gasgrill har taget det danske marked med storm. Over 60% af danske husstande har en gasgrill stående i haven eller på altanen. Her er grundene til at den er så populær:
          </p>

          <ul>
            <li><strong>Klar på 10-15 minutter:</strong> Tænd, vent, grill. Ingen tålmodighed med kul og optænding.</li>
            <li><strong>Præcis temperatur:</strong> Drej på knappen og hold nøjagtigt den varme du har brug for.</li>
            <li><strong>Ren drift:</strong> Ingen aske, ingen sodede hænder, minimalt spild.</li>
            <li><strong>Konstant varme:</strong> Perfekt til pulled pork, hele kyllinger og andre langvarige sessioner.</li>
            <li><strong>Zonekogning:</strong> Opret let flere temperaturzoner til forskellige typer mad samtidig.</li>
          </ul>

          <div className="tip-box">
            <strong>Pro-tip:</strong> En god gasgrill med 3+ brændere giver dig mulighed for at lave indirekte varme - det er nøglen til at grille store udskæringer uden at brænde dem.
          </div>

          <h2>Sådan tænder du en gasgrill korrekt</h2>
          <p>
            Korrekt tænding handler om sikkerhed og optimal opvarmning. Følg disse trin hver gang:
          </p>

          <ol>
            <li><strong>Åbn gasflasken</strong> - Drej ventilen helt op.</li>
            <li><strong>Åbn låget</strong> - ALTID åbent låg ved tænding. Lukket låg kan give gasophobning.</li>
            <li><strong>Tænd første brænder</strong> - Sæt på lav og tryk på piezo-tænderen.</li>
            <li><strong>Tænd resten</strong> - Når første brænder brænder stabilt, tænd de øvrige.</li>
            <li><strong>Skru op og luk låget</strong> - Sæt alle brændere på max og luk låget.</li>
            <li><strong>Vent 10-15 minutter</strong> - Grillen skal nå 250-300°C inden du starter.</li>
          </ol>

          <div className="tip-box">
            <strong>Sikkerhed:</strong> Tænd ALDRIG en gasgrill med lukket låg. Gas kan samle sig under låget og antænde eksplosivt. Det lyder dramatisk - og det ER det.
          </div>

          <h2>Temperaturzoner - din bedste ven</h2>
          <p>
            Hemmeligheden bag god gasgrillning er temperaturzoner. I stedet for at bruge hele risten ens, opdeler du den i zoner:
          </p>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Zone</th>
                <th>Temperatur</th>
                <th>Bruges til</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Direkte høj</strong></td>
                <td>250-300°C</td>
                <td>Steaks, burgere, pølser - alt der skal have skorpe</td>
              </tr>
              <tr>
                <td><strong>Direkte medium</strong></td>
                <td>180-220°C</td>
                <td>Kyllingebryst, fisk, grøntsager</td>
              </tr>
              <tr>
                <td><strong>Indirekte</strong></td>
                <td>120-160°C</td>
                <td>Hele kyllinger, nakkefilet, pulled pork</td>
              </tr>
              <tr>
                <td><strong>Hvile/varm zone</strong></td>
                <td>Under 120°C</td>
                <td>Hold mad varm, smelt ost, hvil kød</td>
              </tr>
            </tbody>
          </table>

          <h2>Vedligeholdelse - hold din grill i topform</h2>
          <p>
            En velholdt grill giver bedre resultater og holder markant længere. Her er det minimum du bør gøre:
          </p>

          <h3>Efter hver grillsession</h3>
          <ul>
            <li>Lad grillen køre på max i 10 minutter med lukket låg (brænder madrester af)</li>
            <li>Børst risten med en god grillbørste mens den stadig er varm</li>
            <li>Tøm fedtbakken når den er halvfyldt</li>
          </ul>

          <h3>Hver måned i sæsonen</h3>
          <ul>
            <li>Tjek gasslanger for revner og skader</li>
            <li>Rens brænderne med en nål (tilstoppede huller giver ujævn flamme)</li>
            <li>Vask ydersiden med varmt sæbevand</li>
          </ul>

          <h3>Før og efter sæsonen</h3>
          <ul>
            <li>Grundig rengøring af alle dele</li>
            <li>Tjek alle forbindelser med sæbevand (bobler = utætheder)</li>
            <li>Opbevar under overdækning eller i tørt rum</li>
          </ul>

          <h2>Almindelige fejl du skal undgå</h2>
          <ul>
            <li><strong>Tænding med lukket låg:</strong> Farligt. Punkt. Se sikkerhedstip ovenfor.</li>
            <li><strong>For tidlig vending:</strong> Hvis kødet sidder fast, er det ikke klar til at vendes. Vent.</li>
            <li><strong>Konstant låg-kiggen:</strong> Hver gang du åbner låget, mister du 50-75°C. Hold det lukket.</li>
            <li><strong>Manglende forvarming:</strong> En kold grill giver kød der klæber fast og mangler karakter.</li>
            <li><strong>Ingen termometer:</strong> Stop med at gætte. Investér i et digitalt stegetermometer.</li>
          </ul>

          <div className="tip-box">
            <strong>Bedste investering:</strong> Et godt digitalt stegetermometer koster 200-400 kr og er den absolut bedste måde at forbedre dit grillresultat på. Ingen erfaring kan erstatte præcis temperaturmåling.
          </div>

          <h2>Næste skridt</h2>
          <p>
            Nu har du det grundlæggende på plads. Herfra kan du dykke dybere ned i specifikke teknikker og opskrifter:
          </p>
          <ul>
            <li>Lær at lave <Link href="/perfekte-ribeye">den perfekte ribeye steak</Link></li>
            <li>Prøv kræfter med <Link href="/pulled-pork-paa-grillen">pulled pork på grillen</Link></li>
            <li>Stadig i tvivl om grilltype? Læs <Link href="/kulgrill-vs-gasgrill">kulgrill vs gasgrill</Link></li>
            <li>Helt ny? Start med <Link href="/grill-for-begyndere">vores begynderguide</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
