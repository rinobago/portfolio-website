"use client";
import { useState } from "react";
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
                    <a href="/#about" className="text-muted font-semibold hover-muted-white">
                        About
                    </a>
                    <a href="/#projects" className="text-muted font-semibold hover-muted-white">
                        Projects
                    </a>
                    <a href="/#services" className="text-muted font-semibold hover-muted-white">
                        Services
                    </a>
                    <a href="/contact" className="btn-primary-outline">
                        Contact
                    </a>
                    <button className="flex gap-3 justify-center items-center cursor-pointer">
                        <img src="/Great Brittain.svg" alt="Great Brittain Flag" className="w-[1.56rem] aspect-[4/3]" />
                        <img src="/Language switch arrow.svg" alt="language switch arrow" className="w-[0.81rem] aspect-[2.16/1]" />
                    </button>
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
