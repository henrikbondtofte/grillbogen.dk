import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kulgrill vs Gasgrill - Hvad Skal Du Vælge? (2026)",
  description:
    "Komplet sammenligning af kulgrill og gasgrill: smag, pris, bekvemmelighed, vedligeholdelse og hvad der passer bedst til dig.",
};

export default function KulgrillVsGasgrill() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1529193591184-b1d58069ecf0?w=1400&h=500&fit=crop"
          alt="Kulgrill med glødende kul"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)]/80 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-4xl mx-auto px-4 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="category-badge">Guides</span>
            <div className="h-px w-8 bg-[var(--ember)]/50" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Kulgrill vs Gasgrill
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Kulgrill vs Gasgrill</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Det er den evige debat blandt grillfolk: kulgrill eller gasgrill? Svaret afhænger af hvad du prioriterer. Her får du en ærlig sammenligning uden salgssnak - bare fakta og erfaring.
        </p>

        <div className="prose max-w-none">
          <h2>Den hurtige oversigt</h2>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Kulgrill</th>
                <th>Gasgrill</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Smag</strong></td>
                <td>Autentisk røgsmag</td>
                <td>Ren grillsmag, mindre røg</td>
              </tr>
              <tr>
                <td><strong>Opstartstid</strong></td>
                <td>20-30 minutter</td>
                <td>10-15 minutter</td>
              </tr>
              <tr>
                <td><strong>Temperaturkontrol</strong></td>
                <td>Kræver erfaring</td>
                <td>Nem - drej på knappen</td>
              </tr>
              <tr>
                <td><strong>Pris (start)</strong></td>
                <td>500-3.000 kr</td>
                <td>2.000-15.000 kr</td>
              </tr>
              <tr>
                <td><strong>Driftsomkostning</strong></td>
                <td>Kul + briketter</td>
                <td>Gasflaske (billigere)</td>
              </tr>
              <tr>
                <td><strong>Rengøring</strong></td>
                <td>Aske + sod</td>
                <td>Minimal</td>
              </tr>
              <tr>
                <td><strong>Portabilitet</strong></td>
                <td>Let og nem at flytte</td>
                <td>Tung, stationær</td>
              </tr>
            </tbody>
          </table>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1494358856891-c9a46d446c39?w=800&h=450&fit=crop"
                alt="Glødende kul i kulgrill klar til grillning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@armandoascorve" target="_blank" rel="noopener noreferrer">Armando Ascorve Morales</a> / Unsplash</p>
          </div>

          <h2>Smagen - her skiller vandene</h2>
          <p>
            Lad os starte med elefanten i rummet. Kulgrill giver en røgsmag som gasgrill simpelthen ikke kan matche. Det er ikke marketing - det er kemi. Når fedt drypper ned på glødende kul, stiger røgen op og giver kødet den karakteristiske grillsmag som de fleste forbinder med &quot;rigtig grill&quot;.
          </p>
          <p>
            Gasgrill giver til gengæld en renere smag hvor råvarens kvalitet virkelig skinner igennem. Mange professionelle kokke foretrækker faktisk gasgrill netop fordi den ikke maskerer smagen. Du kan tilføje røgsmag med træchips i en smoker box - det er ikke helt det samme, men det kommer tæt på.
          </p>

          <div className="tip-box">
            <strong>Ærlig snak:</strong> Hvis røgsmag er det vigtigste for dig, vinder kulgrillen. Hvis du prioriterer kontrol og konsistens, vinder gasgrillen. Der er ingen &quot;forkert&quot; beslutning.
          </div>

          <h2>Bekvemmelighed i hverdagen</h2>
          <p>
            Her vinder gasgrillen med længder. Forestil dig en tirsdag aften: Du kommer hjem fra arbejde klokken 17 og vil grille til aftensmad. Med gasgrill:
          </p>
          <ol>
            <li>Tænd grillen (10 sek)</li>
            <li>Vent 10 min på opvarmning</li>
            <li>Grill maden (10-20 min)</li>
            <li>Børst risten, sluk - færdig</li>
          </ol>
          <p>
            Med kulgrill:
          </p>
          <ol>
            <li>Fyld kul, tænd op (5 min)</li>
            <li>Vent 20-30 min på gløder</li>
            <li>Fordel kullene, grill maden (10-20 min)</li>
            <li>Vent til kul er kolde, fjern aske (kan tage timer)</li>
          </ol>
          <p>
            Den ekstra tid gør at mange kulgrillsejere ender med at bruge grillen sjældnere. Og en grill der ikke bruges, er uanset type den dårligste grill.
          </p>

          <h2>Pris - hvad koster det egentlig?</h2>
          <p>
            Kulgrill er billigere at købe. En solid Weber Kettle koster omkring 1.500-2.500 kr, og den holder i mange år. En sammenlignelig gasgrill med 3 brændere koster typisk 4.000-8.000 kr.
          </p>
          <p>
            Men driftsomkostningerne er anderledes. En 11 kg gasflaske koster ca. 250-300 kr og holder 15-20 grillsessioner. Kul og briketter koster 50-80 kr per session. Over en hel sæson jævner det sig faktisk ud, og gasgrill bliver billigere over tid.
          </p>

          <h2>Temperaturkontrol og teknik</h2>
          <p>
            Gasgrill giver dig digital-lignende kontrol. Drej knappen op, temperaturen stiger. Drej den ned, den falder. Det er intuitivt og forudsigeligt.
          </p>
          <p>
            Kulgrill kræver at du mestrer luftventiler, kulplacering og timing. Det er mere udfordrende - men for mange er det netop det der gør det sjovt. Der er en tilfredsstillelse i at &quot;tæmme ilden&quot; som gasgrillere aldrig oplever.
          </p>

          <div className="tip-box">
            <strong>For begyndere:</strong> Gasgrill er nemmere at lære. Kulgrill kræver 5-10 sessioner før du virkelig har styr på det. Men begge typer kan mestres af alle - det kræver bare lidt tålmodighed.
          </div>

          <h2>Vedligeholdelse og holdbarhed</h2>
          <p>
            Gasgrill kræver mere vedligeholdelse af selve grillen (brændere, gasslanger, fedtbakke), men den daglige rengøring er minimal. Kulgrill er simpel i konstruktionen og der er mindre der kan gå i stykker, men aske og sod kræver opmærksomhed efter hver brug.
          </p>

          <h2>Hvem skal vælge hvad?</h2>

          <h3>Vælg kulgrill hvis du:</h3>
          <ul>
            <li>Elsker autentisk røgsmag og er villig til at lære teknikken</li>
            <li>Primært griller i weekender og har tid til processen</li>
            <li>Har et lavere budget til selve grillen</li>
            <li>Nyder selve &quot;ritualet&quot; ved at tænde op og arbejde med ilden</li>
            <li>Vil have en grill der er nem at tage med (strand, camping, park)</li>
          </ul>

          <h3>Vælg gasgrill hvis du:</h3>
          <ul>
            <li>Vil grille flere gange om ugen uden stort besvær</li>
            <li>Prioriterer præcis temperaturkontrol</li>
            <li>Ikke har lyst til at håndtere aske og sod</li>
            <li>Vil have hurtig opstart - også på en travl hverdag</li>
            <li>Laver mange forskellige retter der kræver forskellige temperaturer</li>
          </ul>

          <h2>Eller begge dele?</h2>
          <p>
            Mange erfarne grillfolk ender med at have begge. Gasgrillen til hverdagen og kulgrillen til weekend-projekterne. Det er lidt ligesom at have både en hverdagsbil og en sportsvogn - begge har deres plads.
          </p>

          <h2>Se sammenligning i praksis</h2>
          <p>
            Her er en god video der gennemgår fordele og ulemper ved begge grilltyper:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/nP7eNKsZbKc"
              title="Gas Grill vs Charcoal: Which is Right for You?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Grill Top Experience (YouTube)</p>

          <h2>Læs videre</h2>
          <ul>
            <li>Valgt gasgrill? Læs vores <Link href="/fuldstaendig-guide-til-gasgrill">komplette gasgrill-guide</Link></li>
            <li>Klar til at grille? Start med <Link href="/perfekte-ribeye">den perfekte ribeye</Link></li>
            <li>Første grill? Se <Link href="/grill-for-begyndere">vores begynderguide</Link></li>
            <li>Klar til low &amp; slow? Prøv <Link href="/pulled-pork-paa-grillen">pulled pork</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
