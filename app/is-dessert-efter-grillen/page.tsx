import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is som dessert efter grillen: Sådan vælger du rigtigt (2026)",
  description:
    "Guide til at servere is som den perfekte afslutning på en grillaften. Fra klassisk flødeis til sæsonens sorbetter - og hvorfor kvaliteten af isen gør hele forskellen.",
};

export default function IsDessertEfterGrillen() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-[var(--charcoal)]">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-8">
          <span className="inline-block bg-[var(--ember)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            DESSERT
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Is som dessert efter grillen
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--smoke)] mb-6">
          <Link href="/" className="hover:text-[var(--ember)] no-underline">Forside</Link>
          <span className="mx-2">/</span>
          <span>Is som dessert</span>
        </nav>

        <p className="text-xl text-[var(--smoke)] mb-8 leading-relaxed">
          Grillen har leveret. Kød, grøntsager, måske en god salat. Nu skal der dessert til. Is er
          det oplagte valg - det er let, forfriskende og kræver nul forberedelse. Men forskellen
          mellem &quot;bare is&quot; og en dessert folk husker, ligger i detaljerne.
        </p>

        <div className="prose max-w-none">
          <h2>Hvorfor is fungerer efter grillen</h2>
          <p>
            Efter et tungt grillmåltid med røgsmag, krydderi og fedme er kroppen klar til noget
            koldt og let. Is rammer præcis den trang. Det renser ganen, køler ned og afslutter
            måltidet uden at man føler sig overmæt. Det er der en god grund til at isboden altid
            er populær efter restaurantens hovedret.
          </p>
          <p>
            Den praktiske fordel er åbenlys: isen står i fryseren og er klar, når I er det.
            Ingen dessert der skal times med resten af maden. Ingen ovn der skal tændes. Tag den
            frem fem minutter før servering, og den er perfekt.
          </p>

          <h2>Flødeis, sorbet eller softice?</h2>
          <p>
            <strong>Flødeis</strong> er klassikeren. Vanille til de grillede frugter, chokolade
            til de rene hedonister, salt karamel til dem der vil have lidt kant. Vælg is med et
            højt fedtindhold - den har mere smag og en tættere konsistens, der holder bedre i
            varmen.
          </p>
          <p>
            <strong>Sorbet</strong> er det lette alternativ. En rabarber- eller passionsfrugtsorbet
            skærer igennem efter en rig middag og fungerer samtidig som det veganske valg. Bonus:
            sæsonbestemte sorbetter følger naturligt grillsæsonen. Jordbær i juni, brombær i august.
          </p>
          <p>
            <strong>Softice</strong> har fået en renæssance. Den klassiske softice fra strandkiosken
            er blevet opgraderet med ægte ingredienser og højere fedtprocent. Har du en
            softicemaskine, er det den nemmeste dessert du kan servere til en stor flok.
          </p>

          <h2>Kvaliteten gør forskellen</h2>
          <p>
            Industriel is med meget overrun (luft) smelter på sekunder i sommersolen. Det duer ikke
            til en udendørs grillaften. Is med lavt luftindhold og ordentlige råvarer holder
            konsistensen markant længere. Danske mejerier som{' '}
            <a
              href="https://kastbergs.dk/is-til-restauranter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kastbergs i Herning
            </a>{' '}
            batch-fryser deres flødeis i små portioner med frisk dansk mælk, og det kan mærkes i
            teksturen. Isen forbliver cremet i stedet for at blive til en pøl på tallerkenen.
          </p>

          <h2>Grillede frugter og is</h2>
          <p>
            Vil du løfte desserten et niveau, så grill frugterne. Ferskner, ananas og bananer
            karamelliserer på grillen og bliver søde, bløde og let røgede. Læg dem ved siden af
            en kugle vanille- eller pistacieis, og du har en dessert der er uventet imponerende
            med minimal indsats.
          </p>
          <ul>
            <li><strong>Grillet fersken + vanilleis:</strong> Klassikeren. Halvér fersknen, grill 3-4 minutter per side.</li>
            <li><strong>Grillet ananas + kokossorbet:</strong> Tropisk og let. Skær i skiver, grill til gyldne.</li>
            <li><strong>Grillet banan + chokoladeis:</strong> Bananen bliver cremet og intens. Servér i skrællen.</li>
            <li><strong>Friske bær + salt karamel is:</strong> Ingen grill nødvendig. Sødt, salt, perfekt.</li>
          </ul>

          <h2>Servering til mange gæster</h2>
          <p>
            Til større grillselskaber fungerer en is-bar bedst. Stil tre-fire varianter frem i
            skåle med islæg under, og lad folk tage selv. Det tager presset af værten og giver
            gæsterne valgfrihed. Tilføj skåle med toppings: ristede nødder, friske bær,
            knust chokolade, karamelsauce.
          </p>
          <p>
            Regn med ca. to kugler pr. person. Køb lidt mere end du tror du har brug for - is til
            overs er aldrig et problem.
          </p>
        </div>
      </article>
    </>
  );
}
