import type { MetadataRoute } from "next";

function baseSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://grillbogen.dk";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/fuldstaendig-guide-til-gasgrill", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/kulgrill-vs-gasgrill", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/perfekte-ribeye", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pulled-pork-paa-grillen", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/varmroeget-laks", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/grillet-svinemoerbrad", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tomahawk-paa-grillen", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/grill-for-begyndere", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/grillede-grontsager", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/marinader-til-grill", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rengoering-af-grill", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/is-dessert-efter-grillen", priority: 0.7, changeFrequency: "monthly" as const },
    // /artikler hører til her og ikke i lexhubArticleUrls(): oversigten findes
    // uanset om LexHub-kaldet fejler, og skal ikke forsvinde ud af sitemappet
    // hver gang API'et er nede.
    { path: "/artikler", priority: 0.7, changeFrequency: "daily" as const },
    { path: "/om", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}


// ── LexHub-artikler ──────────────────────────────────────────────────
// Salgsartikler publiceret gennem lexhub.dk/admin ligger på /artikler/<slug>.
// De manglede i sitemappet, hvilket bremsede indeksering af sider kunder
// betaler for skal rangere.
async function lexhubArticleUrls(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(
      `https://www.lexhub.dk/api/public/articles?domain=grillbogen.dk&limit=500`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    const articles: Array<{ slug: string; publishedAt: string | null }> =
      data?.articles ?? []
    return [
      ...articles.map((a) => ({
        url: `https://grillbogen.dk/artikler/${a.slug}`,
        lastModified: a.publishedAt ? new Date(a.publishedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    ]
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [base, lexhub] = await Promise.all([baseSitemap(), lexhubArticleUrls()])
  return [...base, ...lexhub]
}
