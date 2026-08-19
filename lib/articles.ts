const LEXHUB_API = "https://www.lexhub.dk/api/public/articles"
const SITE_DOMAIN = "grillbogen.dk"

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content?: string
  coverImage: string | null
  category: string | null
  tags: string[]
  publishedAt: string
  author: {
    name: string | null
  }
}

export interface ArticlesResponse {
  articles: Article[]
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }
}

export async function getArticles(options?: {
  limit?: number
  offset?: number
  category?: string
}): Promise<ArticlesResponse> {
  const params = new URLSearchParams({
    domain: SITE_DOMAIN,
    limit: String(options?.limit || 10),
    offset: String(options?.offset || 0),
  })
  if (options?.category) params.set('category', options.category)
  const res = await fetch(`${LEXHUB_API}?${params}`, { next: { revalidate: 60 } })
  if (!res.ok) return { articles: [], pagination: { total: 0, limit: 0, offset: 0, hasMore: false } }
  return res.json()
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetch(`${LEXHUB_API}/${slug}?domain=${SITE_DOMAIN}`, { next: { revalidate: 60 } })
  if (!res.ok) return null
  return res.json()
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const { articles } = await getArticles({ limit: 500 })
  return articles.map(a => a.slug)
}
