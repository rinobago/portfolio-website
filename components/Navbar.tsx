const Navbar = () => {
    return (
        <div className="navbar-div-desktop">
            <nav className="navbar-desktop">
                <div className="block col-start-1 md:hidden justify-self-start w-[26px] opacity-0 pointer-events-none" aria-hidden />
                <a href="/#" className="col-start-2 justify-self-center md:col-start-1 md:justify-self-start">
                    <p className="font-bold">
                        Rino Bago - <span className="text-primary">Web Developer</span>
                    </p>
                </a>
                <div className="hidden md:flex col-start-3 md:justify-self-end gap-[1.25rem] justify-center items-center">
                    <a href="/#about" className="text-muted font-semibold">
                        About
                    </a>
                    <a href="/#projects" className="text-muted font-semibold">
                        Projects
                    </a>
                    <a href="/#services" className="text-muted font-semibold">
                        Services
                    </a>
                    <a href="/contact" className="btn-primary-outline">
                        Contact
                    </a>
                    <button className="flex gap-3 justify-center items-center cursor-pointer">
                        <img src="/Great Brittain.svg" alt="Great Brittain Flag" className="w-[1.56rem] h-[1.19rem]" />
                        <img src="/Language switch arrow.svg" alt="language switch arrow" className="w-[0.81rem] h-[0.375rem]" />
                    </button>
                </div>
                <div className="col-start-3 justify-self-end md:hidden">
                    <img src="/HamburgerIcon.svg" alt="hambruger icon" className="w-[26px]" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
