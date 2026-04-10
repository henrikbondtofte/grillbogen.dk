import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marinader til Grill - 8 Opskrifter der Virker (2026)",
  description:
    "De bedste marinader til grill: Klassisk BBQ, asiatisk, chimichurri, jerk og mere. Lær teknikken bag en god marinade og hvor længe kød skal marinere.",
};

export default function MarinaderTilGrill() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1558030006-450675393462?w=1400&h=500&fit=crop"
          alt="Marineret kød klar til grillen"
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Marinader til Grill
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Marinader til Grill</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          En god marinade gør tre ting: den tilfører smag, den mørgør kødet, og den hjælper med at holde safterne inde under grillning. De fleste marinader kan laves på 5 minutter med ingredienser du allerede har. Her er teknikken og otte gennemtestede opskrifter.
        </p>

        <div className="prose max-w-none">
          <h2>Sådan virker en marinade</h2>
          <p>
            En marinade er grundlæggende tre komponenter:
          </p>
          <ul>
            <li><strong>Syre</strong> - citrus, eddike, vin, yoghurt eller tomat. Syren bryder proteinfibrene ned og gør kødet mørere. Men pas på: for meget syre eller for lang tid gør kødet grynet og tørt i overfladen.</li>
            <li><strong>Fedt</strong> - olie, smør eller kokosmælk. Fedtet bærer de fedtopløselige smagstoffer ind i kødet og hjælper med at forhindre at kødet klæber til risten.</li>
            <li><strong>Smag</strong> - krydderier, urter, hvidløg, chili, sojasauce, honning. Det er her du sætter retningen: asiatisk, mexicansk, middelhavs eller klassisk BBQ.</li>
          </ul>
          <p>
            Balancen mellem de tre er nøglen. For meget syre giver gummikonsistens. For lidt fedt giver tør overflade. For få krydderier giver en marinade der ikke smager af noget. En god tommelfingerregel er 3 dele fedt, 1 del syre og krydderier efter smag.
          </p>

          <h2>Marineringstid: Den vigtigste variabel</h2>
          <p>
            Længere er ikke altid bedre. Faktisk er overmarinering en af de mest almindelige fejl. Her er en guide baseret på udskæring:
          </p>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Kødtype</th>
                <th>Minimum</th>
                <th>Optimalt</th>
                <th>Maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Kyllingebryst</strong></td>
                <td>30 min</td>
                <td>2-4 timer</td>
                <td>6 timer</td>
              </tr>
              <tr>
                <td><strong>Kyllingelår</strong></td>
                <td>1 time</td>
                <td>4-8 timer</td>
                <td>12 timer</td>
              </tr>
              <tr>
                <td><strong>Svinekotelet</strong></td>
                <td>30 min</td>
                <td>2-4 timer</td>
                <td>8 timer</td>
              </tr>
              <tr>
                <td><strong>Oksebøf (tynd)</strong></td>
                <td>15 min</td>
                <td>30-60 min</td>
                <td>2 timer</td>
              </tr>
              <tr>
                <td><strong>Flanksteak</strong></td>
                <td>2 timer</td>
                <td>4-8 timer</td>
                <td>12 timer</td>
              </tr>
              <tr>
                <td><strong>Svinenakke</strong></td>
                <td>4 timer</td>
                <td>Natten over</td>
                <td>24 timer</td>
              </tr>
              <tr>
                <td><strong>Lam</strong></td>
                <td>2 timer</td>
                <td>4-8 timer</td>
                <td>12 timer</td>
              </tr>
              <tr>
                <td><strong>Fisk/rejer</strong></td>
                <td>10 min</td>
                <td>15-30 min</td>
                <td>45 min</td>
              </tr>
              <tr>
                <td><strong>Grøntsager</strong></td>
                <td>10 min</td>
                <td>15-30 min</td>
                <td>1 time</td>
              </tr>
            </tbody>
          </table>

          <div className="tip-box">
            <strong>Fisk og skaldyr:</strong> Mariner ALDRIG fisk i mere end 45 minutter i syrlig marinade. Syren &quot;koger&quot; proteinet (det er sådan ceviche laves), og du ender med en konsistens der minder om kogt fisk i stedet for grillet. Kort og intenst er vejen med fisk.
          </div>

          <h2>8 marinader der dækker alt</h2>
          <p>
            Hver opskrift giver nok til ca. 1 kg kød. Bland alle ingredienser i en skål, hæld over kødet i en pose eller beholder, og stil i køleskabet.
          </p>

          <h3>1. Klassisk BBQ</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>4 spsk olivenolie</li>
              <li>2 spsk æblecidereddike</li>
              <li>2 spsk brunt sukker</li>
              <li>1 spsk paprika</li>
              <li>1 tsk hvidløgspulver</li>
              <li>1 tsk løgpulver</li>
              <li>1 tsk røget paprika</li>
              <li>Salt og peber</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Svinekotelet, kylling, spareribs. Giver den klassiske, lidt søde BBQ-smag med en røget undertone.</p>
          </div>

          <h3>2. Asiatisk soja-ingefær</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>3 spsk sojasauce</li>
              <li>2 spsk sesamolie</li>
              <li>1 spsk riseddike</li>
              <li>1 spsk honning</li>
              <li>2 fed hvidløg, revet</li>
              <li>2 cm ingefær, revet</li>
              <li>1 tsk chilifnug</li>
              <li>1 forårsløg, finthakket</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Kylling, flanksteak, rejer. Den umami-rige soja og den varme ingefær giver en dyb, kompleks smag.</p>
          </div>

          <h3>3. Argentinsk chimichurri</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>1 stort bundt persille</li>
              <li>4 fed hvidløg</li>
              <li>6 spsk olivenolie</li>
              <li>3 spsk rødvinseddike</li>
              <li>1 tsk oregano</li>
              <li>1 tsk chilifnug</li>
              <li>Salt og peber</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Oksekød - især flanksteak, entrecote og ribeye. Hakkes fint, bruges både som marinade og sauce ved bordet. Frisk, skarp, urtepræget.</p>
          </div>

          <h3>4. Jamaicansk jerk</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>3 spsk olivenolie</li>
              <li>2 spsk limesaft</li>
              <li>2 spsk sojasauce</li>
              <li>3 forårsløg</li>
              <li>2 fed hvidløg</li>
              <li>1 scotch bonnet (eller habanero)</li>
              <li>2 tsk allehånde</li>
              <li>1 tsk timian</li>
              <li>1 tsk kanel</li>
              <li>1 tsk brunt sukker</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Kyllingelår, svinekotelet. Blend alt til en pasta. Stærk, aromatisk og vanedannende. Juster chili efter tolerance.</p>
          </div>

          <h3>5. Middelhavs citron-urter</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>5 spsk olivenolie</li>
              <li>Saft og skal af 1 citron</li>
              <li>3 fed hvidløg, revet</li>
              <li>2 spsk frisk rosmarin</li>
              <li>1 spsk frisk timian</li>
              <li>1 tsk oregano</li>
              <li>Salt og peber</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Kylling, lam, fisk, grøntsager. Den mest alsidige marinade på listen. Frisk, let og sommeren i en skål.</p>
          </div>

          <h3>6. Koreansk bulgogi</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>4 spsk sojasauce</li>
              <li>2 spsk sesamolie</li>
              <li>2 spsk brunt sukker</li>
              <li>1 pære, blendet (eller 2 spsk pæresaft)</li>
              <li>3 fed hvidløg, revet</li>
              <li>1 spsk ingefær, revet</li>
              <li>Sort peber</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Tyndskåret oksekød, svinekød. Pæren er hemmeligheden - den indeholder enzymer der mørgør kødet naturligt og giver en subtil sødme.</p>
          </div>

          <h3>7. Tandoori-inspireret yoghurt</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>2 dl græsk yoghurt</li>
              <li>2 spsk olivenolie</li>
              <li>1 spsk citronsaft</li>
              <li>2 tsk garam masala</li>
              <li>1 tsk gurkemeje</li>
              <li>1 tsk spidskommen</li>
              <li>1 tsk paprika</li>
              <li>2 fed hvidløg, revet</li>
              <li>Salt</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Kylling og lam. Yoghurten mørgør kødet utroligt effektivt og giver en cremet, krydret skorpe på grillen.</p>
          </div>

          <h3>8. Honning-sennep</h3>
          <div className="bg-white rounded-2xl p-7 my-6 shadow-sm border border-stone-100">
            <h4 className="text-[var(--charcoal)] mt-0 border-0 !mb-3 !text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Ingredienser</h4>
            <ul className="columns-2 !mt-0">
              <li>3 spsk olivenolie</li>
              <li>2 spsk grov sennep</li>
              <li>2 spsk honning</li>
              <li>1 spsk æblecidereddike</li>
              <li>2 fed hvidløg, revet</li>
              <li>1 tsk rosmarin</li>
              <li>Salt og peber</li>
            </ul>
            <p className="text-sm text-[var(--ash)] mt-3 mb-0"><strong>Bedst til:</strong> Svinekotelet, kylling, pølser. Sødt, skarpt og enkelt. Et hit hver gang - selv børn elsker den her.</p>
          </div>

          <h2>Teknik: Sådan marinerer du korrekt</h2>
          <ul>
            <li><strong>Brug en lynlåspose.</strong> Det giver bedst kontakt mellem marinade og kød, og du kan vende posen undervejs. Mindre spild end en skål.</li>
            <li><strong>Altid i køleskabet.</strong> Marinering ved stuetemperatur er en bakteriefest. Hold det koldt.</li>
            <li><strong>Tag kødet op 30 minutter før grillning.</strong> Koldt kød griller ujævnt. Lad det nå stuetemperatur inden det rammer risten.</li>
            <li><strong>Dup kødet tørt.</strong> Overskydende marinade på overfladen damper i stedet for at karamellisere. Tør kødet let af med køkkenrulle for den bedste Maillard-reaktion.</li>
            <li><strong>Smid brugt marinade ud.</strong> Marinade der har haft kontakt med rå kød er potentielt farlig. Vil du bruge marinaden som sauce? Sæt en portion til side FØR du tilføjer kødet, eller kog den brugte marinade i minimum 5 minutter.</li>
          </ul>

          <div className="tip-box">
            <strong>Hurtig-marinade når tiden er knap:</strong> Lav snit i overfladen af kødet med en skarp kniv (1 cm dybt, i et krydsmønster). Det fordobler den overflade marinaden kan trænge ind igennem og halverer den nødvendige tid. 30 minutters marinering med snit svarer til 2 timer uden.
          </div>

          <h2>Marinade vs. rub: Hvornår bruger du hvad?</h2>
          <p>
            Kort sagt: marinader tilfører fugt og smag i dybden. Rubs giver en koncentreret smagsoverflade og bedre bark. De to udelukker ikke hinanden - mange konkurrence-grillere bruger begge dele.
          </p>
          <ul>
            <li><strong>Brug marinade når:</strong> Kødet er magert og risikerer at tørre ud (kyllingebryst, svinekotelet), eller du vil have en bestemt smagsprofil hele vejen igennem.</li>
            <li><strong>Brug rub når:</strong> Du kører low and slow (pulled pork, brisket), eller du vil have en markant bark/skorpe.</li>
            <li><strong>Brug begge når:</strong> Du marinerer natten over og tilføjer en rub lige inden grillning. Klassisk teknik til konkurrence-ribs.</li>
          </ul>

          <h2>Tre fejl der ødelægger din marinade</h2>
          <ul>
            <li><strong>For lang tid i syrlig marinade.</strong> Citrus og eddike bryder proteinerne ned. Det er godt i 2-4 timer, men efter 12 timer er overfladen grød. Yoghurt-baserede marinader er mere tilgivende.</li>
            <li><strong>Sukker ved høj varme.</strong> Marinader med honning, sukker eller sirup brænder let over direkte varme. Brug medium varme eller tilføj sukkerkomponenten først de sidste 10 minutter.</li>
            <li><strong>Marinering i metal.</strong> Syrlige marinader reagerer med aluminium og reaktivt metal. Brug glas, plastik eller emaljeret stål.</li>
          </ul>

          <h2>Læs videre</h2>
          <ul>
            <li>Prøv marinaden på <Link href="/grillede-grontsager">grillede grøntsager</Link></li>
            <li>Lær at lave en perfekt <Link href="/pulled-pork-paa-grillen">pulled pork med rub</Link></li>
            <li>Test marinaden på en <Link href="/perfekte-ribeye">ribeye steak</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
