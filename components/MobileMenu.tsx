"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useBodyScrollLock } from "./hooks/BodyLock";
import LanguageButton from "./LanguageButton";

type MobileMenuProps = {
    open: boolean;
    onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
    // Lock/unlock scroll
    useBodyScrollLock(open);

    // Close on Esc
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div
            className={`
        md:hidden fixed inset-0 z-[1000] transition-opacity duration-300
        ${open ? "pointer-events-auto" : "pointer-events-none"}
      `}
            aria-hidden={!open}
        >
            {/* Panel (slides from right) */}
            <nav
                className={`
          absolute inset-0 w-screen h-screen
          bg-bg border-l border-border
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col
          px-[clamp(1.25rem,6vw,2rem)]
          gap-[15vh]
        `}
                role="dialog"
                aria-modal="true"
            >
                {/* Header row: title + X (X is in same spot as hamburger) */}
                <div className="flex items-center justify-between h-[5.625rem]">
                    <p className="font-bold">
                        Rino Bago - <span className="text-primary">Web Developer</span>
                    </p>

                    {/* X button (same position as hamburger in navbar) */}
                    <button aria-label="Close menu" onClick={onClose} className="w-[26px] h-[26px] grid place-items-center active:scale-95 transition cursor-pointer">
                        <img src="/MobileXIcon.svg" alt="Close menu" />
                    </button>
                </div>

                {/* Links */}
                <div className="w-full flex flex-col justify-center items-center gap-[50px] text-[1.875rem] font-semibold">
                    <Link href="/#about" className="text-muted hover-muted-white" onClick={onClose}>
                        About
                    </Link>
                    <Link href="/#projects" className="text-muted hover-muted-white" onClick={onClose}>
                        Projects
                    </Link>
                    <Link href="/#services" className="text-muted hover-muted-white" onClick={onClose}>
                        Services
                    </Link>
                    <Link href="/contact" className="btn-primary-outline w-fit text-[1.875rem]" onClick={onClose}>
                        Contact
                    </Link>

                    {/* Language switch (copied from desktop) */}
                    <LanguageButton variant="mobile" onClick={onClose} menuOpen={open} />
                </div>
            </nav>
        </div>
    );
}
