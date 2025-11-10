import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://rinobago.com";

    const routes = ["/", "/contact"];

    const lastModified = new Date().toISOString().split("T")[0];

    const items: MetadataRoute.Sitemap = routes.map((path, index) => ({
        url: `${baseUrl}${path}`,
        lastModified,
        changeFrequency: "weekly",
        priority: path === "/" ? 1 : 0.8,
    }));

    return items;
}
