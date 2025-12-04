import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";

const baseUrl = "https://rinobago.com";

export const metadata: Metadata = {
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "none",
            "max-snippet": -1,
        },
    },
    metadataBase: new URL(baseUrl),
    title: {
        default: "Rino Bago - Web Developer",
        template: "%s | Rino Bago",
    },
    description: "Web developer building fast, modern and conversion-focused websites for businesses. Specialist in Next.js, SEO and high-performance web design.",
    keywords: [
        // English
        "Rino Bago",
        "web developer",
        "Next.js developer",
        "frontend developer",
        "SEO expert",
        "AI web developer",
        "AI integration",
        "AI chatbot developer",
        "chatbot developer",
        "freelance web developer",
        "Croatia web developer",
        "custom websites",
        "modern web design",
        "fast websites",
        "website performance optimization",
        "responsive web design",
        "Next.js SEO",
        "small business websites",
        "freelance web designer",
        "landing page developer",
        "Next.js portfolio",
        "Google ranking optimization",
        "website speed optimization",
        "conversion-focused websites",
        "hire web developer Croatia",
        "Next.js freelancer",
        "React developer",
        "WordPress to Next.js migration",
        "web development services",
        "personal portfolio website",
        "Next.js consultant",
        "AI-powered websites",
        "AI automation for websites",
        "AI assistant integration",
        "ChatGPT website integration",
        "AI tools integration",
        "AI chatbot for business",
        "custom AI chatbot development",
        "AI-driven user experience",
        "intelligent website features",

        // Croatian (often searched)
        "web developer Hrvatska",
        "izrada web stranica",
        "freelance web dizajner",
        "web dizajn Hrvatska",
        "moderne web stranice",
        "SEO optimizacija",
        "frontend developer Hrvatska",
        "Next.js programer",
        "izrada web stranica za tvrtke",
        "izrada modernih web stranica",
        "optimizacija web stranica",
        "brze web stranice",
        "web dizajn Zagreb",
        "Next.js razvoj",
        "React programer",
        "freelance programer",
        "izradu portfelj stranica",
        "web stranice koje konvertiraju",
        "AI integracija",
        "AI chatbot",
        "AI web razvoj",
        "AI chatbot Hrvatska",
        "chatbot integracija",
        "izrada AI chatbotova",
        "AI rješenja za web stranice",
        "automatizacija web stranica",
        "ChatGPT integracija",
        "umjetna inteligencija na webu",
        "AI asistent za web stranice",
    ],
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
        canonical: baseUrl,
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
