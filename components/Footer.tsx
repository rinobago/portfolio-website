const Footer = () => {
    return (
        <div className="footer-desktop">
            <section className="section">
                <div className="w-auto grid grid-cols-2 md:grid-cols-3 justify-center justify-items-center gap-[2.5rem] px-[clamp(1.5rem,8vw,3rem)]">
                    <div className="col-span-2 md:col-span-1 row-start-1 w-[307px] flex justify-center items-center text-center">
                        <a href="/#" className="w-[300px] flex flex-col items-center gap-[10px] md:gap-5 font-semibold">
                            <p className="text-[1.125rem] md:text-xl">
                                Rino Bago - <span className="text-primary">Web Developer</span>
                            </p>
                            <p className="text-[0.875rem] md:text-base text-accent">Building modern, fast, and unforgettable websites</p>
                        </a>
                    </div>
                    <div className="col-span-1 row-start-2 md:row-auto w-[307px] flex flex-col items-center gap-[8px] md:gap-5 font-semibold">
                        <p className="text-accent">Pages</p>
                        <a href="/#about" className="text-muted text-[0.875rem] md:text-base">
                            About
                        </a>
                        <a href="/#projects" className="text-muted text-[0.875rem] md:text-base">
                            Projects
                        </a>
                        <a href="/#services" className="text-muted text-[0.875rem] md:text-base">
                            Services
                        </a>
                    </div>
                    <div className="col-span-1 row-start-2 md:row-auto w-[307px] flex flex-col items-center gap-[8px] md:gap-5 font-semibold">
                        <p className="text-accent">Contact</p>
                        <a href="tel:+385989466220" className="text-muted text-[0.875rem] md:text-base flex justify-center items-ce nter gap-1">
                            <img src="/Telephone.svg" alt="Telephone" className="w-5 h-5" />
                            +385 98 9466 220
                        </a>
                        <a href="mailto:rino.bago@gmail.com" className="text-muted text-[0.875rem] md:text-base flex justify-center items-center gap-1">
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
            </section>
            <p className="font-light text-muted text-[0.875rem] md:text-base">© 2025 | Rino Bago</p>
        </div>
    );
};

export default Footer;
