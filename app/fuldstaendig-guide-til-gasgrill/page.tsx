export const metadata = {
  title: 'Fuldstændig Guide til Gasgrill - Grillbogen.dk',
  description: 'Lær alt om gasgrill - valg, tænding, temperatur, teknikker og vedligeholdelse. Komplet guide for begyndere og erfarne.',
};

export default function GasgillGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <span className="text-sm text-[var(--ember)] font-semibold">GUIDES</span>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mt-2 mb-4">
          Fuldstændig Guide til Gasgrill
        </h1>
        <p className="text-xl text-[var(--smoke)]">
          Alt du skal vide om at grille på gasgrill - fra valg af grill til perfekt resultat
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2>Hvorfor Vælge Gasgrill?</h2>
        <p>
          Gasgrill er det foretrukne valg for mange grill-entusiaster, og med god grund. 
          Fordelene er mange: hurtig opstart, præcis temperaturkontrol og nem rengøring.
        </p>

        <h3>Fordele ved Gasgrill</h3>
        <ul>
          <li><strong>Hurtigt klar:</strong> Kun 10-15 minutter opvarmning</li>
          <li><strong>Nem temperaturkontrol:</strong> Drej simpelthen på knappen</li>
          <li><strong>Ren drift:</strong> Ingen aske eller kul at håndtere</li>
          <li><strong>Konstant varme:</strong> Perfekt til længere grillsessioner</li>
        </ul>

        <h2>Sådan Tænder Du en Gasgrill</h2>
        <p>
          Korrekt tænding er afgørende for sikkerhed og optimal funktion:
        </p>
        <ol>
          <li>Sørg for gasflasken er åben</li>
          <li>Åbn låget på grillen</li>
          <li>Tænd for gas på første brænder (lav indstilling)</li>
          <li>Tryk på tændeknappen</li>
          <li>Når første brænder er tændt, tænd de øvrige brændere</li>
          <li>Luk låget og lad grillen varme op i 10-15 minutter</li>
        </ol>

        <h2>Temperaturzoner på Gasgrillen</h2>
        <p>
          En af de store fordele ved gasgrill er muligheden for at skabe forskellige temperaturzoner:
        </p>
        <ul>
          <li><strong>Direkte varme (høj):</strong> Til hurtig stegning af bøffer, burgere</li>
          <li><strong>Indirekte varme (mellem):</strong> Til kylling, svinenakke</li>
          <li><strong>Lav varme:</strong> Til vedligeholdelse af temperatur eller langsom tilberedning</li>
        </ul>

        <h2>Vedligeholdelse af Gasgrill</h2>
        <p>
          En velholdt grill holder længere og giver bedre resultater:
        </p>
        <ul>
          <li>Rens grillristen efter hver brug (brug grillbørste)</li>
          <li>Tøm fedtbakken regelmæssigt</li>
          <li>Tjek gasslanger for revner eller skader</li>
          <li>Rens brænderne mindst en gang i sæsonen</li>
          <li>Opbevar grillen under overdækning om vinteren</li>
        </ul>

        <h2>Almindelige Fejl at Undgå</h2>
        <ul>
          <li><strong>At tænde med lukket låg:</strong> Kan skabe eksplosion</li>
          <li><strong>For tidlig vending:</strong> Lad kødet få ordentlig stegning først</li>
          <li><strong>At åbne låget for ofte:</strong> Spilder varme og forlænger tilberedning</li>
          <li><strong>Manglende forvarming:</strong> Giv grillen tid til at nå temperatur</li>
        </ul>

        <h2>Konklusion</h2>
        <p>
          Gasgrill er et fantastisk valg for både begyndere og erfarne grillmestre. 
          Med denne guide er du godt rustet til at mestre din gasgrill og skabe 
          fantastiske måltider til familie og venner.
        </p>
        <p>
          Næste skridt: Læs vores guide til{" "}
          <a href="/perfekte-ribeye">den perfekte ribeye steak</a>.
        </p>
      </div>
    </article>
  );
}
