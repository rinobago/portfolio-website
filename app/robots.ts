import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://rinobago.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "Googlebot-Image",
                disallow: "/", // block ALL images by default
                allow: ["/rino-bago-picture-image.JPG"], // whitelist ONLY this image
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
