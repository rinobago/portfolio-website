"use client";
import { useState } from "react";

type DropdownRowProps = {
    title: string;
    desc: string;
};

export default function DropdownRow({ title, desc }: DropdownRowProps) {
    const [open, setOpen] = useState(false);

    return (
        <li className="w-full border-b border-muted px-[5px] py-[15px] md:px-[20px] md:py-[20px]">
            {/* Desktop (md+): fixed two-column look, always open, no arrow */}
            <div className="hidden md:flex w-full items-center justify-between">
                <h3 className="w-[436px] text-left font-bold text-[clamp(1rem,3vw,1.875rem)]">{title}</h3>
                <p className="text-base text-accent w-[488px]">{desc}</p>
            </div>

            {/* Mobile (<md): header row is clickable (title + arrow) */}
            <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="md:hidden flex w-full items-center justify-between cursor-pointer">
                <h3 className="text-left font-bold text-[clamp(1rem,6vw,1.5rem)]">{title}</h3>
                <img src="/MenuArrowDown.svg" alt="Toggle details" className={`w-[11.6px] h-[6.1px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            {/* Mobile collapsible body (affects layout, not absolute) */}
            <div
                className={`
          md:hidden overflow-hidden transition-[max-height,margin] duration-400
          ${open ? "max-h-96 mt-3" : "max-h-0 mt-0"}
        `}
            >
                <p className="text-base text-accent">{desc}</p>
            </div>
        </li>
    );
}
