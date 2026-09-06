import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grillspyd: kød, marinade og teknikken der samler det hele",
  description: "Grillspyd med kylling, okse, svin og grøntsager. Hvorfor blandede spyd fejler, marinader der virker, og tiderne der giver møre spyd med stegeskorpe.",
  alternates: {
    canonical: "/grillspyd",
  },
  openGraph: {
    title: "Grillspyd: kød, marinade og teknikken der samler det hele",
    description: "Grillspyd med kylling, okse, svin og grøntsager. Hvorfor blandede spyd fejler, marinader der virker, og tiderne der giver møre spyd med stegeskorpe.",
    url: "https://grillbogen.dk/grillspyd",
    siteName: "Grillbogen.dk",
    locale: "da_DK",
    type: "article",
  },
};

function ArticleSchema() {
  // Hardcoded schema data - no user input, safe to render
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Grillspyd - kød, marinade og teknikken der samler det hele",
      description: "Grillspyd med kylling, okse, svin og grøntsager. Hvorfor blandede spyd fejler, marinader der virker, og tiderne der giver møre spyd med stegeskorpe.",
      url: "https://grillbogen.dk/grillspyd",
      publisher: { "@type": "Organization", name: "Grillbogen.dk", url: "https://grillbogen.dk" },
      mainEntityOfPage: "https://grillbogen.dk/grillspyd",
      inLanguage: "da",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: "https://grillbogen.dk" },
        { "@type": "ListItem", position: 2, name: "Grillspyd", item: "https://grillbogen.dk/grillspyd" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hvor længe skal grillspyd have på grillen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kyllingespyd: 10-12 minutter over direkte middelhøj varme med vending hvert tredje minut. Oksespyd: 8-10 minutter for rosa kerne. Svinespyd: 12-14 minutter. Rene grøntsagsspyd: 8-12 minutter afhængigt af grøntsagen.",
          },
        },
        {
          "@type": "Question",
          name: "Skal træspyd lægges i blød før grillning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, mindst 30 minutter i koldt vand - ellers brænder de over. Metalspyd er den bedre løsning: de kan genbruges, brænder aldrig, og flade metalspyd forhindrer at kødet roterer når du vender spyddet.",
          },
        },
        {
          "@type": "Question",
          name: "Hvorfor bliver grøntsagerne rå når kødet er færdigt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fordi kød og grøntsager har forskellige tilberedningstider. Løsningen er at lave rene spyd - kød for sig, grøntsager for sig - og servere dem sammen. Blandede spyd ser festlige ud men tilbereder ujævnt.",
          },
        },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function Grillspyd() {
  return (
    <>
      <ArticleSchema />
      <div className="relative h-72 md:h-96 bg-[var(--obsidian)] overflow-hidden grain-texture">
        <Image
          src="https://images.unsplash.com/photo-1626323109252-0adb3b46692b?w=1400&h=500&fit=crop"
          alt="Grillspyd med kød over glødende kul"
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: '-0.025em' }}>
            Grillspyd
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--parchment)] to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">Forside</Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--charcoal)] font-medium">Grillspyd</span>
        </nav>

        <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
          Grillspyd er blevet til noget man køber færdigt i en bakke - regnbuefarvede, over-marinerede og skåret så skævt at halvdelen brænder på. Synd, for spyd er en af de mest taknemmelige ting at lave selv: du bestemmer kødet, marinaden og størrelsen, og på grillen er de klar på et kvarter.
        </p>

        <div className="prose max-w-none">
          <h2>Reglen der ændrer alt: rene spyd</h2>
          <p>
            Det klassiske blandede spyd - kød, peberfrugt, løg, kød, champignon - ser festligt ud og tilbereder elendigt. Kylling skal være gennemstegt, peberfrugten er bedst med bid, og løget er råt længe efter kødet er færdigt. Ét spyd, tre forskellige sluttider. Det regnestykke går aldrig op.
          </p>
          <p>
            Løsningen er lige så enkel som den er upopulær hos øjet: <strong>kød for sig, grøntsager for sig</strong>. Så styrer du hvert spyd efter sin egen tid og samler farverne på tallerkenen i stedet. Vil du absolut blande, så vælg ingredienser med samme tilberedningstid - oksekød og rødløg fungerer, kylling og squash gør ikke.
          </p>

          <div className="tip-box">
            <strong>Hurtigt overblik:</strong> Skær kødet i jævne tern på 2,5-3 cm, mariner 2-4 timer, og pak spyddene tæt for saftigt kød eller løst for mere stegeskorpe. Kylling: 10-12 min, okse: 8-10 min, svin: 12-14 min over direkte middelhøj varme. Vend hvert tredje minut.
          </div>

          <h2>Spyddet selv: metal slår træ</h2>
          <p>
            Træspyd skal ligge i vand mindst 30 minutter, og selv da ender de tit forkullede. Køb i stedet et sæt <strong>flade metalspyd</strong> én gang for alle. De brænder aldrig, de kan gå i opvaskemaskinen, og den flade profil løser spyddets mest irriterende problem: kød der roterer rundt om pinden når du prøver at vende det, så samme side ligger nedad hele tiden.
          </p>

          <h2>Kødet: udskæring og størrelse</h2>
          <ul>
            <li><strong>Kylling:</strong> Brug lårkød frem for bryst. Det tåler varmen, har mere smag og tørrer ikke ud mellem vendingerne. Samme pointe som i <Link href="/kylling-paa-grillen">kyllinge-guiden</Link>: låret tilgiver, brystet straffer.</li>
            <li><strong>Okse:</strong> Tyndsteg, cuvette eller <Link href="/flanksteak-paa-grillen">flanksteak</Link> skåret på tværs af fibrene. Mørbrad er fint men spild af penge på et spyd.</li>
            <li><strong>Svin:</strong> Nakkefilet er spyd-kød nummer ét. Fedtmarmoreringen holder ternene saftige, og prisen er til at feste med.</li>
            <li><strong>Lam:</strong> Kølle eller bov i tern, klassikeren fra hele Middelhavet. Hvidløg, citron og oregano - mere skal der ikke til.</li>
          </ul>
          <p>
            Skær i jævne tern på 2,5-3 cm. Mindre tern tørrer ud, større når ikke at blive færdige i midten før overfladen er mørk. Og jævnheden er vigtigere end målet: ét stort tern på et spyd af små bestemmer hele spyddets skæbne.
          </p>

          <h2>Marinaden: 2-4 timer er nok</h2>
          <p>
            Spyd-tern har stor overflade i forhold til vægten, så marinaden arbejder hurtigt. 2-4 timer i køleskabet er rigeligt - natten over gør ingen skade, men kun marinader med meget syre kan nå at gøre overfladen grødet. Grundprincipperne står i <Link href="/marinader-til-grill">marinade-guiden</Link>; her er to der er bygget til spyd:
          </p>

          <h3>Middelhavsspyd (lam, okse eller kylling)</h3>
          <ul>
            <li>1 dl olivenolie</li>
            <li>Saft og revet skal af 1 citron</li>
            <li>3 fed hvidløg, revet</li>
            <li>1 spsk tørret oregano</li>
            <li>1 tsk groft salt, friskkværnet peber</li>
          </ul>

          <h3>Krydret yoghurtmarinade (kylling og svin)</h3>
          <ul>
            <li>2 dl græsk yoghurt</li>
            <li>2 spsk olie</li>
            <li>1 spsk røget paprika, 1 tsk spidskommen, 1 tsk stødt koriander</li>
            <li>2 fed hvidløg, revet</li>
            <li>1 tsk salt, chiliflager efter temperament</li>
          </ul>
          <p>
            Yoghurten gør noget særligt ved kylling: mælkesyren mørner skånsomt, og sukkeret i yoghurten giver en dyb, gylden skorpe. Det er samme princip som i shawarma og tandoori - og det virker lige så godt over danske kul.
          </p>

          <div className="relative rounded-2xl overflow-hidden my-10">
            <div className="relative h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1779474989201-fe2d22ff3f79?w=800&h=450&fit=crop"
                alt="Spyd med kylling og oksekød over risten på grillen"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="image-credit">Foto: <a href="https://unsplash.com/@isword" target="_blank" rel="noopener noreferrer">Muha Ajjan</a> / Unsplash</p>
          </div>

          <h2>Pakning: tæt eller løst?</h2>
          <p>
            Måden du sætter kødet på spyddet, er en skjult temperaturindstilling:
          </p>
          <ul>
            <li><strong>Tæt pakket</strong> - ternene rører hinanden: kødet beskytter sig selv, tilberedningen går langsommere, og resultatet bliver saftigere. Vælg det til kylling og magert kød.</li>
            <li><strong>Løst pakket</strong> - luft mellem ternene: varmen når hele vejen rundt, du får mere stegeskorpe, og spyddet er hurtigere færdigt. Vælg det til okse, hvor rosa kerne og mørk overflade er målet.</li>
          </ul>
          <p>
            Lad altid et par centimeter af spyddet være frit i "håndtagsenden", så tangen har noget at gribe fat i.
          </p>

          <h2>På grillen: direkte varme og disciplin med vendingerne</h2>
          <ol>
            <li>Tag spyddene ud af køleskabet 20-30 minutter før - koldt kød på varm rist er ujævn tilberedning fra start.</li>
            <li>Lad overskydende marinade dryppe af. Marinade der drypper i gløderne, giver flammer, og flammer giver sod på kødet.</li>
            <li>Grill over direkte middelhøj varme, 200-230°C, med en kold zone i reserve til flammekontrol.</li>
            <li>Vend en kvart omgang hvert tredje minut, så alle fire sider får farve.</li>
            <li><strong>Kylling:</strong> 10-12 minutter, gennemstegt ved 74°C. <strong>Okse:</strong> 8-10 minutter for rosa kerne. <strong>Svin:</strong> 12-14 minutter. <strong>Lam:</strong> 8-10 minutter for rosa.</li>
            <li>Hvil spyddene 3-5 minutter før servering.</li>
          </ol>

          <div className="tip-box">
            <strong>Grøntsagsspyd der faktisk virker:</strong> Skær i store, flade stykker der ikke kan falde gennem risten - peberfrugt i kvarte, rødløg i både med bunden intakt, squash i tykke skiver. Pensl med olie, salt til sidst. 8-12 minutter over direkte varme. Flere teknikker i <Link href="/grillede-grontsager">grøntsagsguiden</Link>.
          </div>

          <h2>De typiske fejl</h2>
          <ul>
            <li><strong>Blandede spyd:</strong> Kød og grøntsager med forskellige tider på samme pind. Rene spyd, hver sin tid.</li>
            <li><strong>Ujævne tern:</strong> Små stykker er tørre når de store er færdige. Brug fem minutter ekstra ved skærebrættet.</li>
            <li><strong>Tørre træspyd:</strong> 30 minutter i vand - eller endnu bedre: metalspyd.</li>
            <li><strong>Marinade i flammerne:</strong> Dryp af før grillen. Sod smager ikke af røg, det smager af sod.</li>
            <li><strong>Vendt for sjældent:</strong> Én side forkullet, tre blege. En kvart omgang hvert tredje minut.</li>
          </ul>

          <h2>Servering</h2>
          <p>
            Spyd er bygget til buffet: stil dem på et stort fad, lad folk trække kødet af selv, og server fladbrød, yoghurtdressing, <Link href="/grillet-majs">grillet majs</Link> og en rå salat med syre ved siden af. Til en større grillaften kan spyddene køre over den direkte zone, mens en <Link href="/grillet-svinemoerbrad">svinemørbrad</Link> ligger på den indirekte - to retter, én grill, ingen stress.
          </p>

          {/* YouTube video - verificeret via oembed 2026-09-06 */}
          <h2>Se det i praksis</h2>
          <p>
            Grillspyd fra skærebræt til servering:
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/iZsqbeZZJgQ"
              title="Grillspyd - nemme og grønne spyd til grillen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="image-credit">Video: Arla Danmark (YouTube)</p>

          <h2>Næste skridt</h2>
          <ul>
            <li>Dyk ned i <Link href="/marinader-til-grill">marinade-guiden</Link> og byg dit eget repertoire</li>
            <li>Mere kylling-teknik i <Link href="/kylling-paa-grillen">kylling på grillen</Link></li>
            <li>Samme direkte varme, større format: <Link href="/flanksteak-paa-grillen">flanksteak</Link></li>
            <li>Ny ved grillen? Start med <Link href="/grill-for-begyndere">begynder-guiden</Link></li>
            <li>Vælg det rigtige setup i <Link href="/kulgrill-vs-gasgrill">kulgrill vs. gasgrill</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
