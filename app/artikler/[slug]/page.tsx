import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamicParams = true
export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return { title: 'Artikel ikke fundet' }
  return { title: article.title, description: article.excerpt || '' }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/artikler" className="text-blue-600 hover:underline mb-8 block">&larr; Alle artikler</Link>
      <article>
        {article.coverImage && (
          <img src={article.coverImage} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        )}
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <time className="text-gray-500 text-sm mb-8 block">
          {new Date(article.publishedAt).toLocaleDateString('da-DK', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        <div className="article-content max-w-none" dangerouslySetInnerHTML={{ __html: article.content || '' }} />
      </article>
    </div>
  )
}
