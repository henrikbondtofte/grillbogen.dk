import type { Metadata } from 'next'
import { getArticles, type Article } from '@/lib/articles'
import Link from 'next/link'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Artikler om grill: guides og opskrifter',
  description:
    'Alle artikler fra Grillbogen.dk samlet ét sted: guides, opskrifter, teknik og udstyr til kul, gas og røg. Find artiklen du mangler, og kom i gang ved grillen.',
  alternates: {
    canonical: '/artikler',
  },
  openGraph: {
    title: 'Artikler om grill: guides og opskrifter',
    description:
      'Alle artikler fra Grillbogen.dk samlet ét sted - guides, opskrifter, teknikker og udstyr til kul, gas og røg.',
    url: 'https://grillbogen.dk/artikler',
    siteName: 'Grillbogen.dk',
    locale: 'da_DK',
    type: 'website',
  },
}

// Redaktionelle guides der ligger som egne routes. De hører til i oversigten,
// så /artikler ikke er en blindgyde for hverken læsere eller crawlere.
const guides = [
  { href: '/fuldstaendig-guide-til-gasgrill', label: 'Guide til gasgrill' },
  { href: '/kulgrill-vs-gasgrill', label: 'Kulgrill vs. gasgrill' },
  { href: '/grill-for-begyndere', label: 'Grill for begyndere' },
  { href: '/perfekte-ribeye', label: 'Den perfekte ribeye' },
  { href: '/tomahawk-paa-grillen', label: 'Tomahawk steak' },
  { href: '/pulled-pork-paa-grillen', label: 'Pulled pork' },
  { href: '/spareribs-paa-grillen', label: 'Spareribs på grillen' },
  { href: '/kylling-paa-grillen', label: 'Kylling på grillen' },
  { href: '/grillspyd', label: 'Grillspyd' },
  { href: '/varmroeget-laks', label: 'Varmrøget laks' },
  { href: '/grillet-svinemoerbrad', label: 'Grillet svinemørbrad' },
  { href: '/grillede-grontsager', label: 'Grillede grøntsager' },
  { href: '/marinader-til-grill', label: 'Marinader til grill' },
  { href: '/rengoering-af-grill', label: 'Rengøring af grill' },
  { href: '/is-dessert-efter-grillen', label: 'Is som dessert' },
]

function Schema({ articles }: { articles: Article[] }) {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Artikler om grill',
      description:
        'Alle artikler fra Grillbogen.dk - guides, opskrifter, teknikker og udstyr til kul, gas og røg.',
      url: 'https://grillbogen.dk/artikler',
      inLanguage: 'da',
      isPartOf: { '@type': 'WebSite', name: 'Grillbogen.dk', url: 'https://grillbogen.dk' },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: articles.map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: a.title,
          url: `https://grillbogen.dk/artikler/${a.slug}`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: 'https://grillbogen.dk' },
        { '@type': 'ListItem', position: 2, name: 'Artikler', item: 'https://grillbogen.dk/artikler' },
      ],
    },
  ]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default async function ArtiklerPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const { articles } = await getArticles({ limit: 100 })

  const query = (q || '').trim().toLowerCase()
  const visible = query
    ? articles.filter((a) =>
        [a.title, a.excerpt || '', a.category || '', ...(a.tags || [])]
          .join(' ')
          .toLowerCase()
          .includes(query)
      )
    : articles

  return (
    <>
      <Schema articles={articles} />

      <div className="bg-[var(--obsidian)] grain-texture">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-[var(--ember)] to-transparent" />
            <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-[0.25em]">
              Arkivet
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-black text-white leading-[0.95]"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: '-0.025em' }}
          >
            Artikler
          </h1>
          <p className="mt-6 text-lg text-[var(--smoke)] max-w-2xl leading-relaxed">
            Alt indhold fra Grillbogen samlet ét sted. Guides til udstyret,
            opskrifter der er kørt igennem på grillen, og teknikken bag.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="Brødkrumme" className="text-sm text-[var(--ash)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">
            Forside
          </Link>
          <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--charcoal)] font-medium">Artikler</span>
        </nav>

        <form action="/artikler" method="get" role="search" className="mb-12 flex gap-3">
          <label htmlFor="q" className="sr-only">
            Søg i artikler
          </label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={q || ''}
            placeholder="Søg i artikler - fx ribeye, røg, marinade"
            className="flex-1 border border-[var(--paper-edge)] bg-[var(--paper)] px-4 py-3 text-sm text-[var(--ink)] outline-none focus:border-[var(--ember)]"
          />
          <button
            type="submit"
            className="bg-[var(--wine)] text-[var(--butter)] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--wine-deep)] transition-colors"
          >
            Søg
          </button>
        </form>

        {query && (
          <p className="mb-8 text-sm text-[var(--ash)]">
            {visible.length === 0
              ? `Ingen artikler matcher "${q}".`
              : `${visible.length} ${visible.length === 1 ? 'artikel' : 'artikler'} matcher "${q}".`}{' '}
            <Link href="/artikler" className="text-[var(--wine)] hover:text-[var(--ember)]">
              Vis alle
            </Link>
          </p>
        )}

        {visible.length === 0 && !query ? (
          <p className="text-[var(--ash)]">
            Der er ingen artikler i arkivet endnu. Kig i mellemtiden på{' '}
            <Link href="/grill-for-begyndere" className="text-[var(--wine)] hover:text-[var(--ember)]">
              begynderguiden
            </Link>{' '}
            eller{' '}
            <Link href="/kulgrill-vs-gasgrill" className="text-[var(--wine)] hover:text-[var(--ember)]">
              sammenligningen af kul og gas
            </Link>
            .
          </p>
        ) : (
          <div className="space-y-6">
            {visible.map((article) => (
              <article key={article.id} className="border-b border-[var(--paper-edge)] pb-6 last:border-0">
                <Link href={`/artikler/${article.slug}`} className="group block no-underline">
                  {article.coverImage && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-56 object-cover mb-5"
                    />
                  )}
                  {article.category && <span className="category-badge">{article.category}</span>}
                  <h2
                    className="mt-3 text-2xl font-bold text-[var(--ink)] group-hover:text-[var(--wine)] transition-colors"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.02em' }}
                  >
                    {article.title}
                  </h2>
                  {article.excerpt && (
                    <p className="mt-2 text-[var(--char)] leading-relaxed">{article.excerpt}</p>
                  )}
                  <time
                    dateTime={article.publishedAt}
                    className="mt-3 block text-[0.7rem] tracking-[0.2em] uppercase text-[var(--ash)]"
                  >
                    {new Date(article.publishedAt).toLocaleDateString('da-DK')}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        )}

        <section className="mt-16 pt-10 border-t border-[var(--paper-edge)]">
          <h2 className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--wine)] font-bold mb-5">
            Guides fra redaktionen
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {guides.map((guide) => (
              <li key={guide.href} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rotate-45 bg-[var(--ember)] shrink-0" />
                <Link href={guide.href} className="text-[var(--char)] hover:text-[var(--wine)] no-underline transition-colors">
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
