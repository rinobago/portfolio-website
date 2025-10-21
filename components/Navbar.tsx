const Navbar = () => {
    return (
        <div className="navbar-div-desktop">
            <nav className="navbar-desktop">
                <div className="flex justify-center items-center">
                    <p className="font-bold">
                        Rino Bago - <span className="text-primary">Web Developer</span>
                    </p>
                </div>
                <div className="flex gap-[1.25rem] justify-center items-center">
                    <a href="#" className="text-muted font-semibold">
                        About
                    </a>
                    <a href="#" className="text-muted font-semibold">
                        Projects
                    </a>
                    <a href="#" className="text-muted font-semibold">
                        Services
                    </a>
                    <a href="#" className="btn-primary-outline">
                        Contact
                    </a>
                    <button className="flex gap-3 justify-center items-center cursor-pointer">
                        <img src="/Great Brittain.svg" alt="Great Brittain Flag" className="w-[1.56rem] h-[1.19rem]" />
                        <img src="/Language switch arrow.svg" alt="language switch arrow" className="w-[0.81rem] h-[0.375rem]" />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
