import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om Grillbogen.dk",
  description:
    "Lær mere om Grillbogen.dk - Danmarks komplette grillguide med guides, opskrifter og teknikker til alle niveauer.",
};

export default function Om() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm text-[var(--smoke)] mb-6">
        <Link href="/" className="hover:text-[var(--ember)] no-underline">
          Forside
        </Link>
        <span className="mx-2">/</span>
        <span>Om</span>
      </nav>

      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--charcoal)] mb-8">
        Om Grillbogen.dk
      </h1>

      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-[var(--smoke)]">
          Grillbogen.dk er for dig der elsker at stå ved grillen. Vi samler
          guides, opskrifter og teknikker på ét sted - uden unødvendig snak og
          uden salgstricks.
        </p>

        <h2>Hvad finder du her?</h2>

        <h3>Guides der faktisk hjælper</h3>
        <p>
          Fra{" "}
          <Link href="/grill-for-begyndere">begynderen der lige har købt sin
          første grill</Link>{" "}
          til den erfarne grillmester der vil mestre{" "}
          <Link href="/pulled-pork-paa-grillen">pulled pork</Link>. Vi dækker
          alle aspekter af grill - gasgrill, kulgrill, temperaturkontrol,
          vedligeholdelse og teknikker.
        </p>

        <h3>Opskrifter der virker</h3>
        <p>
          Ingen fancy kokke-sprog. Vi giver dig opskrifter der er testet og
          virker. Fra{" "}
          <Link href="/perfekte-ribeye">den perfekte ribeye</Link> til{" "}
          <Link href="/pulled-pork-paa-grillen">pulled pork på grillen</Link> -
          alt forklaret trin for trin med konkrete temperaturer og tidspunkter.
        </p>

        <h3>Ærlige sammenligninger</h3>
        <p>
          <Link href="/kulgrill-vs-gasgrill">Kulgrill vs gasgrill?</Link> Vi
          giver dig fakta og erfaring - ikke salgssnak. Ingen af vores guides
          er sponsoreret, og vi anbefaler kun produkter baseret på reel
          erfaring.
        </p>

        <h2>Vores filosofi</h2>
        <p>Grill skal være sjovt, ikke kompliceret. Vi tror på:</p>
        <ul>
          <li>
            <strong>Simpelhed:</strong> Gode råvarer, simple teknikker, præcis
            temperatur. Det er 90% af hemmeligheden.
          </li>
          <li>
            <strong>Ærlighed:</strong> Vi fortæller det som det er. Også når vi
            brænder en steak af.
          </li>
          <li>
            <strong>Tålmodighed:</strong> God grill tager tid. Rushed grill
            tager endnu længere (fordi du skal starte forfra).
          </li>
          <li>
            <strong>Fællesskab:</strong> Grill samler mennesker. Det er hele
            pointen.
          </li>
        </ul>

        <h2>Start her</h2>
        <p>
          Ny til grill? Start med vores{" "}
          <Link href="/grill-for-begyndere">begynderguide</Link>. Har du
          allerede styr på det grundlæggende? Dyk ned i vores{" "}
          <Link href="/perfekte-ribeye">opskrifter</Link> eller læs den{" "}
          <Link href="/fuldstaendig-guide-til-gasgrill">
            fuldstændige guide til gasgrill
          </Link>
          .
        </p>

        <p>
          Grillbogen.dk er en del af{" "}
          <a
            href="https://lexhub.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LexHub.dk
          </a>
          -netværket.
        </p>
      </div>
    </div>
  );
}
