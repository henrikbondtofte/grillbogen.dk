export const metadata = {
  title: 'Den Perfekte Ribeye Steak - Grillbogen.dk',
  description: 'Step-by-step guide til at grille den perfekte ribeye. Lær om temperatur, stegetid og hviletid for saftig, mør steak.',
};

export default function RibeyeGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <span className="text-sm text-[var(--ember)] font-semibold">OPSKRIFTER</span>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mt-2 mb-4">
          Den Perfekte Ribeye Steak
        </h1>
        <p className="text-xl text-[var(--smoke)]">
          Bliv mester i at grille ribeye - den ultimative guide til saftig, mør steak
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2>Hvad er Ribeye?</h2>
        <p>
          Ribeye er en af de mest elskede steaks - og med god grund. Marmoreringen 
          (de små fedtstriber i kødet) giver en utrolig smag og saftighed. Ribeye 
          skæres fra højreben og indeholder en perfekt balance mellem køddele og fedt.
        </p>

        <h2>Valg af Ribeye</h2>
        <p>
          En god ribeye starter i slagterbutikken:
        </p>
        <ul>
          <li><strong>Tykkelse:</strong> Minimum 2,5 cm, ideelt 3-4 cm</li>
          <li><strong>Marmorering:</strong> Synlige fedtstriber gennem kødet</li>
          <li><strong>Farve:</strong> Dyb rød farve (ikke brun)</li>
          <li><strong>Friskhed:</strong> Køb fra en pålidelig slagter</li>
        </ul>

        <h2>Forberedelse</h2>
        <h3>1. Tag Kødet Ud</h3>
        <p>
          Lad steaken nå stuetemperatur i 30-60 minutter før grillning. 
          Koldt kød giver ujævn stegning.
        </p>

        <h3>2. Krydderi</h3>
        <p>
          Hold det simpelt for ribeye:
        </p>
        <ul>
          <li>Groft havsalt</li>
          <li>Friskkværnet sort peber</li>
          <li>Evt. en smule olivenolie</li>
        </ul>
        <p>
          <em>Pro tip: Krydre 30 minutter før grillning for bedre smag.</em>
        </p>

        <h2>Grillteknik</h2>
        <h3>Metode: Reverse Sear (Anbefalet)</h3>
        <ol>
          <li><strong>Lav varme først:</strong> Start på indirekte varme (120-140°C) indtil kernetemperatur er 50-52°C</li>
          <li><strong>Hvil kort:</strong> Lad kødet hvile 5 minutter</li>
          <li><strong>Høj varme:</strong> Sear på direkte høj varme (250-280°C) 1-2 minutter per side</li>
        </ol>

        <h3>Alternativ Metode: Traditionel</h3>
        <ol>
          <li><strong>Høj varme først:</strong> 2-3 minutter per side på høj direkte varme</li>
          <li><strong>Flyt til lav varme:</strong> Færdiggør på indirekte varme til ønsket kernetemperatur</li>
        </ol>

        <h2>Kernetemperatur Guide</h2>
        <ul>
          <li><strong>Rare:</strong> 50-52°C (rød midte)</li>
          <li><strong>Medium rare:</strong> 54-57°C (lys rød midte) ← Anbefalet for ribeye</li>
          <li><strong>Medium:</strong> 60-63°C (lyserød midte)</li>
          <li><strong>Medium well:</strong> 65-68°C</li>
          <li><strong>Well done:</strong> 71°C+ (frarådes for ribeye)</li>
        </ul>

        <h2>Hviletid - Det Vigtigste Skridt!</h2>
        <p>
          Lad steaken hvile i <strong>5-10 minutter</strong> efter grillning, 
          tildækket med folie. Dette lader safterne fordele sig i kødet og 
          sikrer en perfekt, saftig steak.
        </p>

        <h2>Servering</h2>
        <p>
          Server ribeye med:
        </p>
        <ul>
          <li>Groft havsalt på toppen</li>
          <li>Evt. urtesmør (dragon, persille, hvidløg)</li>
          <li>Grillede grøntsager ved siden af</li>
          <li>En god rødvin</li>
        </ul>

        <h2>Almindelige Fejl</h2>
        <ul>
          <li><strong>For koldt kød:</strong> Lad det nå stuetemperatur</li>
          <li><strong>For tidlig vending:</strong> Lad det få en ordentlig skorpe først</li>
          <li><strong>Ingen hviletid:</strong> Safterne løber ud ved skæring</li>
          <li><strong>Overstegt:</strong> Ribeye er bedst medium rare</li>
        </ul>

        <h2>Konklusion</h2>
        <p>
          Med denne guide er du godt rustet til at grille den perfekte ribeye. 
          Husk: Kvalitetskød, simpel krydring, korrekt temperatur og tålmodighed 
          er nøglen til succes.
        </p>
        <p>
          God grill-lyst! 🔥
        </p>
      </div>
    </article>
  );
}
