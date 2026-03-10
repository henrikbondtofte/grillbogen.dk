export const metadata = {
  title: 'Om Grillbogen.dk - Danmarks Grillguide',
  description: 'Lær mere om Grillbogen.dk - din komplette reference til alt om grill, opskrifter og teknikker.',
};

export default function Om() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mb-6">
        Om Grillbogen.dk
      </h1>

      <div className="prose prose-lg max-w-none text-[var(--smoke)]">
        <p className="text-xl leading-relaxed mb-6">
          Grillbogen.dk er Danmarks komplette reference til alt om grill. 
          Vi samler guides, opskrifter, anmeldelser og teknikker på ét sted, 
          så du altid kan finde den information du har brug for.
        </p>

        <h2 className="text-2xl font-bold text-[var(--charcoal)] mt-8 mb-4">
          Hvad Finder Du Her?
        </h2>
        
        <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
          Guides til Alle Niveauer
        </h3>
        <p>
          Fra begynder der lige har købt sin første grill til den erfarne grillmester 
          der søger nye teknikker. Vi dækker alle aspekter af grill - gasgrill, 
          kulgrill, røg, temperatur, vedligeholdelse og meget mere.
        </p>

        <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2 mt-6">
          Opskrifter Der Virker
        </h3>
        <p>
          Ingen fancy chef-snak. Vi giver dig opskrifter der er testet og virker. 
          Fra den perfekte ribeye til grillede grøntsager - alt forklaret trin for trin.
        </p>

        <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2 mt-6">
          Anmeldelser og Anbefalinger
        </h3>
        <p>
          Hvilken grill skal du vælge? Hvilket tilbehør er pengene værd? 
          Vi anmelder og anbefaler produkter baseret på reel erfaring.
        </p>

        <h2 className="text-2xl font-bold text-[var(--charcoal)] mt-8 mb-4">
          Vores Filosofi
        </h2>
        <p>
          Grill skal være sjovt - ikke kompliceret. Vi tror på:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Simpelhed:</strong> Gode råvarer, simple teknikker</li>
          <li><strong>Kvalitet:</strong> Bedre at grille lidt og grille godt</li>
          <li><strong>Ærlighed:</strong> Vi fortæller det som det er - også når det går galt</li>
          <li><strong>Fællesskab:</strong> Grill samler mennesker</li>
        </ul>

        <h2 className="text-2xl font-bold text-[var(--charcoal)] mt-8 mb-4">
          Start Her
        </h2>
        <p>
          Ny til grill? Start med vores{" "}
          <a href="/fuldstaendig-guide-til-gasgrill" className="text-[var(--fire-red)] hover:opacity-80">
            fuldstændige guide til gasgrill
          </a>. 
          Har du allerede styr på det? Dyk direkte ned i vores{" "}
          <a href="/perfekte-ribeye" className="text-[var(--fire-red)] hover:opacity-80">
            opskrifter
          </a>.
        </p>

        <p className="mt-8 text-lg">
          God grill-lyst! 🔥
        </p>
      </div>
    </div>
  );
}
