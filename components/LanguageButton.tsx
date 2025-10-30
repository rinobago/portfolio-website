"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

type Variant = "desktop" | "mobile";

type LanguageButtonProps = {
    variant?: Variant;
    onClick?: () => void;
    menuOpen?: boolean;
};

const SIZES: Record<Variant, { flagRem: number; arrowRem: number; panelPadPx: number; btnWidth: number }> = {
    desktop: { flagRem: 1.56, arrowRem: 0.81, panelPadPx: 10, btnWidth: 70 },
    mobile: { flagRem: 2.5, arrowRem: 1.0, panelPadPx: 15, btnWidth: 100 },
};

type Lang = "hr" | "en";

const LanguageButton = ({ variant = "mobile", onClick, menuOpen }: LanguageButtonProps) => {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState<Lang>("hr");

    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!menuOpen) setOpen(false);
    }, [menuOpen]);

    const { flagRem, arrowRem, panelPadPx, btnWidth } = SIZES[variant];

    const FLAGS = {
        hr: { src: "/Croatia.svg", alt: "Croatian Flag" },
        en: { src: "/Great Brittain.svg", alt: "Great Britain Flag" },
    };

    const current = FLAGS[locale as "en" | "hr"];
    const nextLocale = (locale === "hr" ? "en" : "hr") as "en" | "hr";
    const other = FLAGS[nextLocale];

    const switchLocale = () => {
        // Update URL + re-render with new locale
        // Use `push` if you want back-button to return to previous locale.
        router.replace(pathname, { locale: nextLocale } as any);
        setOpen(false);
        onClick?.();
    };

    return (
        <div className="relative inline-block">
            {/* Button */}
            <button onClick={() => setOpen((v) => !v)} className="flex gap-3 justify-center items-center cursor-pointer">
                <img src={current.src} alt={current.alt} style={{ width: `${flagRem}rem` }} className="aspect-[4/3]" />
                <img
                    src="/Language switch arrow.svg"
                    alt="language switch arrow"
                    style={{ width: `${arrowRem}rem` }}
                    className={`aspect-[2.16/1] transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                />
            </button>

            {/* Dropdown panel */}
            <div
                onClick={switchLocale}
                style={{ width: `${btnWidth}px`, padding: `${panelPadPx}px` }}
                className={`
                            absolute left-[-25%] top-[calc(100%+5px)]
                        bg-bg border border-border rounded-[8px]
                        flex justify-center items-center
                        p-[10px]
                        transition-opacity duration-200
                        hover:brightness-125
                        ${open ? "opacity-100 pointer-events-auto cursor-pointer" : "opacity-0 pointer-events-none"}`}
            >
                <img src={other.src} alt={other.alt} style={{ width: `${flagRem}rem` }} className="aspect-[4/3]" />
            </div>
        </div>
    );
};

export default LanguageButton;
