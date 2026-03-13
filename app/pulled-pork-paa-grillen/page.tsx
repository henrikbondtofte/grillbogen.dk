import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pulled Pork på Grillen - Komplet Guide (2026)",
  description:
    "Lær at lave perfekt pulled pork på din grill. Low and slow teknik, rub opskrift, temperaturguide og tips til mørt, saftigt pulled pork med røgsmag.",
};

export default function PulledPorkGuide() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-[var(--charcoal)]">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&h=400&fit=crop"
          alt="Saftigt pulled pork med røgsmag"
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
            Pulled Pork på Grillen
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--smoke)] mb-6">
          <Link href="/" className="hover:text-[var(--ember)] no-underline">Forside</Link>
          <span className="mx-2">/</span>
          <span>Pulled Pork</span>
        </nav>

        <p className="text-xl text-[var(--smoke)] mb-8 leading-relaxed">
          Pulled pork er den ultimative grilltest. Det kræver tålmodighed, den rette teknik og en hel dag - men belønningen er kød der nærmest falder fra hinanden af sig selv. Her er alt du skal vide for at nagle det.
        </p>

        <div className="prose max-w-none">
          <h2>Hvad er pulled pork?</h2>
          <p>
            Pulled pork er svinenakke (også kaldet Boston butt eller pork shoulder) der langsomt tilberedes ved lav temperatur i 8-14 timer, indtil kødet er så mørt at det kan trækkes fra hinanden i tråde med to gafler. Det stammer fra den amerikanske BBQ-tradition og har erobret Danmark de seneste år.
          </p>
          <p>
            Det smukke ved pulled pork er at det er overraskende tilgivende. Svinenakke er en fed udskæring med masser af bindevæv, og det er netop bindevævet der ved langsom tilberedning omdannes til gelatin og giver den utrolige saftighed og smag.
          </p>

          <h2>Udskæringen - valg af kød</h2>
          <p>
            Du skal bruge <strong>svinenakke</strong> (pork shoulder/Boston butt). Det er den vigtigste beslutning du tager:
          </p>
          <ul>
            <li><strong>Vægt:</strong> 2-4 kg er ideelt. Mindre stykker tørrer ud, større kræver meget lang tid.</li>
            <li><strong>Med eller uden ben:</strong> Begge dele virker. Ben giver lidt mere smag og fungerer som mørheds-indikator - når det glider ud, er kødet færdigt.</li>
            <li><strong>Fedtkappe:</strong> Behold den! Fedtet smelter langsomt og holder kødet saftigt.</li>
            <li><strong>Kvalitet:</strong> Økologisk eller frilandsgris giver markant bedre smag. Det er det værd.</li>
          </ul>

          <h2>Rub - krydderiblandingen</h2>
          <p>
            En god rub er grundlaget for smagen. Her er en gennemtestet opskrift til ca. 3 kg svinenakke:
          </p>

          <div className="bg-[var(--warm-gray)] rounded-xl p-6 my-6">
            <h3 className="text-[var(--charcoal)] mt-0 border-0">Klassisk Pulled Pork Rub</h3>
            <ul className="columns-2">
              <li>3 spsk brunt sukker</li>
              <li>2 spsk paprika</li>
              <li>2 spsk groft salt</li>
              <li>1 spsk sort peber</li>
              <li>1 spsk hvidløgspulver</li>
              <li>1 spsk løgpulver</li>
              <li>1 tsk cayennepeber</li>
              <li>1 tsk spidskommen</li>
            </ul>
            <p className="text-sm text-[var(--smoke)] mt-3 mb-0">
              Bland det hele og gnid det grundigt ind i kødet. Gerne aftenen før og lad det stå i køleskabet natten over.
            </p>
          </div>

          <div className="tip-box">
            <strong>Genvej:</strong> Har du ikke tid til hjemmelavet rub? Køb en kvalitets-BBQ rub fra Stokes, Traeger eller lignende. Ingen skam i det - mange konkurrence-grillere bruger færdigblandinger.
          </div>

          <h2>Grillteknik: Low and slow</h2>
          <p>
            Lav temperatur over lang tid er nøglen. Her er processen trin for trin:
          </p>

          <h3>1. Forberedelse (aftenen før)</h3>
          <ul>
            <li>Påfør rub grundigt på hele kødet</li>
            <li>Pak ind i film og stil i køleskabet natten over</li>
            <li>Tag kødet ud 1-2 timer før grillning så det når stuetemperatur</li>
          </ul>

          <h3>2. Opsætning af grillen</h3>
          <ul>
            <li><strong>Gasgrill:</strong> Tænd kun den ene side af brænderne. Kødet placeres på den slukkede side (indirekte varme).</li>
            <li><strong>Kulgrill:</strong> Placer kul i den ene side. Kødet på den anden side med en drypbakke under.</li>
            <li><strong>Temperatur:</strong> Sigt efter 110-120°C inde i grillen. Brug et grilltermometer.</li>
          </ul>

          <h3>3. Røg (valgfrit men anbefalet)</h3>
          <p>
            Tilføj træchips for røgsmag. Hickory, æble eller kirsebær er klassikere til svinekød. Læg chips i en smoker box eller fold dem ind i en foliepakke med huller.
          </p>

          <h3>4. Tilberedningen (8-14 timer)</h3>

          <table className="temp-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Kernetemperatur</th>
                <th>Hvad sker der</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Start</strong></td>
                <td>0-65°C</td>
                <td>Røgen trænger ind, barken begynder at dannes</td>
              </tr>
              <tr>
                <td><strong>The Stall</strong></td>
                <td>65-75°C</td>
                <td>Temperaturen stopper med at stige i 2-4 timer. Panik ikke.</td>
              </tr>
              <tr>
                <td><strong>Gennembrud</strong></td>
                <td>75-88°C</td>
                <td>Temperaturen begynder at stige igen. Bindevæv nedbrydes.</td>
              </tr>
              <tr>
                <td><strong>Færdig!</strong></td>
                <td>93-96°C</td>
                <td>Kødet er mørt og klar til at hvile og trækkes fra hinanden.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip-box">
            <strong>Om The Stall:</strong> Omkring 70°C vil temperaturen gå i stå i flere timer. Det skyldes fordampning fra kødet. Det er normalt! Bliv ikke fristet til at skrue op for varmen. Tålmodighed belønnes.
          </div>

          <h3>5. Texas Crutch (valgfrit)</h3>
          <p>
            Vil du komme hurtigere igennem stall-fasen? Pak kødet ind i slagterfolie (butcher paper) eller aluminiumsfolie ved 70°C. Det fanger fugtigheden og skubber temperaturen hurtigere op. Kompromis: lidt mindre bark.
          </p>

          <h3>6. Hvile - det vigtigste skridt</h3>
          <p>
            Når kernetemperaturen rammer 93-96°C, tag kødet af grillen og pak det ind i folie, derefter i et håndklæde, og læg det i en køletaske (uden is). Lad det hvile i <strong>minimum 1 time, gerne 2-4 timer</strong>. Temperaturen falder langsomt og safterne fordeler sig.
          </p>

          <h3>7. Træk kødet fra hinanden</h3>
          <p>
            Brug to gafler eller bear claws til at trække kødet fra hinanden i tråde. Fjern eventuelle store fedtstykker. Bland med de opsamlede safter. Server med din yndlings BBQ-sauce.
          </p>

          <h2>Servering</h2>
          <p>
            Pulled pork er utroligt alsidigt:
          </p>
          <ul>
            <li><strong>Klassisk:</strong> I brioche-boller med coleslaw og BBQ-sauce</li>
            <li><strong>Tacos:</strong> Med syltede rødløg, koriander og chipotle-mayo</li>
            <li><strong>Nachos:</strong> Over tortillachips med cheddar, jalapeños og sour cream</li>
            <li><strong>Pizza:</strong> Med BBQ-sauce base, rødløg og mozzarella</li>
            <li><strong>Simpelt:</strong> Med kartoffelsalat og brød - mere behøver det ikke</li>
          </ul>

          <h2>Fejl du skal undgå</h2>
          <ul>
            <li><strong>For høj temperatur:</strong> Over 140°C giver tørt kød. Hold dig til 110-120°C.</li>
            <li><strong>Panik ved stall-fasen:</strong> Det er normalt. Vent det ud eller brug crutch-metoden.</li>
            <li><strong>Ingen hviletid:</strong> Spring aldrig hvilen over. Den gør forskellen mellem godt og fantastisk.</li>
            <li><strong>For lidt krydderi:</strong> Svinenakke kan tage MEGET rub. Vær generøs.</li>
            <li><strong>For tidligt ud:</strong> 90°C er ikke nok. Vent til 93-96°C for det perfekte resultat.</li>
          </ul>

          {/* YouTube video */}
          <h2>Se det i praksis</h2>
          <p>
            Her er en god video der viser hele processen fra start til slut:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/LbzEa_juegs"
              title="Pulled pork på grillen - komplet guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: BBQ med Søren (YouTube)</p>

          <h2>Læs videre</h2>
          <ul>
            <li>Brug for det rette setup? Læs <Link href="/fuldstaendig-guide-til-gasgrill">gasgrill-guiden</Link></li>
            <li>Vil du starte med noget hurtigere? Prøv <Link href="/perfekte-ribeye">en perfekt ribeye</Link></li>
            <li>Ny til grill? Start med <Link href="/grill-for-begyndere">begynderguiden</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
