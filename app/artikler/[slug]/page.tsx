import type { Metadata } from 'next'
import { getArticleBySlug, getAllArticleSlugs, type Article } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamicParams = true
export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Meta description skal ligge i 150-160 tegn. Excerpts fra LexHub varierer
// vildt i længde, så vi klipper de lange ved sidste hele ord og falder tilbage
// på en titel-baseret tekst når der slet ingen excerpt er.
function metaDescription(article: Article): string {
  const raw = (article.excerpt || '').replace(/\s+/g, ' ').trim()
  if (!raw) {
    return `${article.title} - guide fra Grillbogen.dk med konkrete temperaturer, tider og teknik. Læs hele artiklen, og tag den med ud til grillen.`.slice(0, 160)
  }
  if (raw.length <= 160) return raw
  const cut = raw.slice(0, 157)
  return `${cut.slice(0, cut.lastIndexOf(' '))}...`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Artikel ikke fundet',
      robots: { index: false, follow: true },
    }
  }

  const description = metaDescription(article)
  const url = `https://grillbogen.dk/artikler/${slug}`

  return {
    title: article.title,
    description,
    alternates: { canonical: `/artikler/${slug}` },
    openGraph: {
      title: article.title,
      description,
      url,
      siteName: 'Grillbogen.dk',
      locale: 'da_DK',
      type: 'article',
      publishedTime: article.publishedAt,
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
    },
  }
}

function ArticleSchema({ article, slug }: { article: Article; slug: string }) {
  const url = `https://grillbogen.dk/artikler/${slug}`
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title.slice(0, 110),
      description: metaDescription(article),
      url,
      mainEntityOfPage: url,
      inLanguage: 'da',
      datePublished: article.publishedAt,
      ...(article.coverImage ? { image: article.coverImage } : {}),
      ...(article.author?.name ? { author: { '@type': 'Person', name: article.author.name } } : {}),
      publisher: { '@type': 'Organization', name: 'Grillbogen.dk', url: 'https://grillbogen.dk' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: 'https://grillbogen.dk' },
        { '@type': 'ListItem', position: 2, name: 'Artikler', item: 'https://grillbogen.dk/artikler' },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  ]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

const relatedGuides = [
  { href: '/grill-for-begyndere', label: 'Grill for begyndere' },
  { href: '/kulgrill-vs-gasgrill', label: 'Kulgrill vs. gasgrill' },
  { href: '/perfekte-ribeye', label: 'Den perfekte ribeye' },
  { href: '/marinader-til-grill', label: 'Marinader til grill' },
  { href: '/rengoering-af-grill', label: 'Rengøring af grill' },
]

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ArticleSchema article={article} slug={slug} />

      <nav aria-label="Brødkrumme" className="text-sm text-[var(--ash)] mb-8 flex flex-wrap items-center gap-2">
        <Link href="/" className="hover:text-[var(--ember)] no-underline transition-colors">
          Forside
        </Link>
        <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/artikler" className="hover:text-[var(--ember)] no-underline transition-colors">
          Artikler
        </Link>
        <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-[var(--charcoal)] font-medium">{article.title}</span>
      </nav>

      <article>
        {article.coverImage && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={article.coverImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-64 object-cover mb-8"
          />
        )}
        {article.category && <span className="category-badge">{article.category}</span>}
        <h1
          className="mt-4 text-3xl md:text-5xl font-black text-[var(--ink)] leading-[1.05]"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: '-0.025em' }}
        >
          {article.title}
        </h1>
        <time
          dateTime={article.publishedAt}
          className="mt-4 mb-10 block text-[0.7rem] tracking-[0.2em] uppercase text-[var(--ash)]"
        >
          {new Date(article.publishedAt).toLocaleDateString('da-DK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <div className="article-content prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content || '' }} />
      </article>

      <section className="mt-16 pt-10 border-t border-[var(--paper-edge)]">
        <h2 className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--wine)] font-bold mb-5">
          Læs videre
        </h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {relatedGuides.map((guide) => (
            <li key={guide.href} className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 rotate-45 bg-[var(--ember)] shrink-0" />
              <Link href={guide.href} className="text-[var(--char)] hover:text-[var(--wine)] no-underline transition-colors">
                {guide.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-3 text-sm">
            <span className="w-1.5 h-1.5 rotate-45 bg-[var(--ember)] shrink-0" />
            <Link href="/artikler" className="text-[var(--char)] hover:text-[var(--wine)] no-underline transition-colors">
              Alle artikler i arkivet
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
