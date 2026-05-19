import { getArticles } from '@/lib/articles'
import Link from 'next/link'

export const revalidate = 60

export const metadata = {
  title: 'Artikler | grillbogen.dk',
  description: 'Artikler og guides på grillbogen.dk',
}

export default async function ArtiklerPage() {
  const { articles } = await getArticles({ limit: 100 })

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">&larr; Tilbage til forsiden</Link>
      <h1 className="text-3xl font-bold mb-8">Artikler</h1>
      {articles.length === 0 ? (
        <p className="text-gray-500">Ingen artikler endnu.</p>
      ) : (
        <div className="space-y-4">
          {articles.map((article: any) => (
            <Link key={article.id} href={`/artikler/${article.slug}`} className="block p-6 bg-white rounded-lg border hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              {article.excerpt && <p className="text-gray-600">{article.excerpt}</p>}
              <time className="text-sm text-gray-400 mt-2 block">
                {new Date(article.publishedAt).toLocaleDateString('da-DK')}
              </time>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
