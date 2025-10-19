import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Rino Bago - Web Developer",
    description: "Portfolio and contact website of Rino Bago, a web developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
