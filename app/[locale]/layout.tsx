import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";

const baseUrl = "https://rinobago.com";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Rino Bago - Web Developer",
        template: "%s | Rino Bago",
    },
    description: "Web developer crafting modern, fast and unforgettable websites that convert visitors into clients. Custom Next.js sites, SEO setup, and ongoing maintenance.",
    keywords: ["Rino Bago", "web developer", "web dizajn", "Next.js developer", "frontend developer", "modern websites", "SEO optimization", "Croatia web developer", "freelance web developer"],
    authors: [{ name: "Rino Bago", url: baseUrl }],
    creator: "Rino Bago",
    publisher: "Rino Bago",
    openGraph: {
        type: "website",
        url: baseUrl,
        title: "Rino Bago - Web Developer",
        description: "Modern websites, built right. I build fast, clean and conversion-focused websites for businesses.",
        siteName: "Rino Bago",
        locale: "en_US",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Rino Bago - Web Developer portfolio website preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rino Bago - Web Developer",
        description: "Modern websites, built right. I build fast, clean and conversion-focused websites for businesses.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "/",
        languages: {
            en: "/",
            hr: "/",
            "x-default": "/",
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    category: "technology",
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            </head>
            <body>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
