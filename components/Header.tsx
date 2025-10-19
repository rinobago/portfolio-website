"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled ? "shadow-soft bg-bg/80 backdrop-blur" : ""}`}>
            <div className="container mx-auto flex items-center justify-between px-6 md:px-8 py-4">
                <Link href="#" className="font-display text-xl">
                    Rino
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="#projects" className="hover:opacity-70">
                        Projects
                    </Link>
                    <Link href="#about" className="hover:opacity-70">
                        About
                    </Link>
                    <Link href="#contact" className="hover:opacity-70">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
