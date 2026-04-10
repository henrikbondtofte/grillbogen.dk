import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://grillbogen.dk";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/fuldstaendig-guide-til-gasgrill", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/kulgrill-vs-gasgrill", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/perfekte-ribeye", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pulled-pork-paa-grillen", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/grill-for-begyndere", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/grillede-grontsager", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/marinader-til-grill", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rengoering-af-grill", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/is-dessert-efter-grillen", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/om", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
