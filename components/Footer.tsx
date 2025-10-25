const Footer = () => {
    return (
        <div className="footer-desktop">
            <div className="w-auto flex justify-center gap-[2.5rem]">
                <div className="w-[307px] flex justify-center items-center text-center">
                    <a href="/#" className="w-[300px] flex flex-col items-center gap-5 font-semibold">
                        <p className="text-xl">
                            Rino Bago - <span className="text-primary">Web Developer</span>
                        </p>
                        <p className="text-base text-accent">Building modern, fast, and unforgettable websites</p>
                    </a>
                </div>
                <div className="w-[307px] flex flex-col items-center gap-5 font-semibold">
                    <p className="text-accent">Pages</p>
                    <a href="/#about" className="text-muted">
                        About
                    </a>
                    <a href="/#projects" className="text-muted">
                        Projects
                    </a>
                    <a href="/#services" className="text-muted">
                        Services
                    </a>
                </div>
                <div className="w-[307px] flex flex-col items-center gap-5 font-semibold">
                    <p className="text-accent">Contact</p>
                    <a href="tel:+385989466220" className="text-muted flex justify-center items-ce nter gap-1">
                        <img src="/Telephone.svg" alt="Telephone" className="w-5 h-5" />
                        +385 98 9466 220
                    </a>
                    <a href="mailto:rino.bago@gmail.com" className="text-muted flex justify-center items-center gap-1">
                        <img src="/Mail.svg" alt="Mail" className="w-5 h-5" />
                        rino.bago@gmail.com
                    </a>
                    <div className="flex justify-center items-center gap-5">
                        <a href="https://www.instagram.com/rinobago" target="_blank" rel="noopener noreferrer">
                            <img src="/Instagram.svg" alt="Instagram" className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/385989466220" target="_blank" rel="noopener noreferrer">
                            <img src="/Whatsapp.svg" alt="Whatsapp" className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="font-light text-muted">© 2025 | Rino Bago</p>
        </div>
    );
};

export default Footer;
