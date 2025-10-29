"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageButton from "./LanguageButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar-div-desktop">
            <nav className="navbar-desktop">
                <div className="block col-start-1 md:hidden max-[340px]:hidden justify-self-start w-[26px] opacity-0 pointer-events-none" aria-hidden />
                <a href="/#" className="col-start-2 justify-self-center md:col-start-1 max-[340px]:col-start-1 md:justify-self-start">
                    <p className="font-bold">
                        Rino Bago - <span className="text-primary">Web Developer</span>
                    </p>
                </a>
                <div className="hidden md:flex col-start-3 md:justify-self-end gap-[1.25rem] justify-center items-center">
                    <Link href="/#about" className="text-muted font-semibold hover-muted-white">
                        About
                    </Link>
                    <Link href="/#projects" className="text-muted font-semibold hover-muted-white">
                        Projects
                    </Link>
                    <Link href="/#services" className="text-muted font-semibold hover-muted-white">
                        Services
                    </Link>
                    <Link href="/contact" className="btn-primary-outline">
                        Contact
                    </Link>
                    <LanguageButton variant="desktop" />
                </div>
                <div className="col-start-3 justify-self-end md:hidden">
                    <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((v) => !v)} className="w-[26px] h-[26px] grid place-items-center cursor-pointer">
                        <img src="/HamburgerIcon.svg" alt="Open menu" className="w-[26px] aspect-square" />
                    </button>
                </div>
            </nav>

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
    );
};

export default Navbar;
