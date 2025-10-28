import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer-desktop">
            <section className="section">
                <div className="w-auto grid max-[390px]:grid-cols-1 grid-cols-[1fr_auto] md:grid-cols-3 max-[768px]:gap-x-20 justify-center justify-items-center gap-[2.5rem] px-[clamp(0.1rem,2vw,4rem)]">
                    <div className="max-[390px]:col-span-1 col-span-2 md:col-span-1 row-start-1 w-[307px] flex justify-center items-center text-center">
                        <a href="/#" className="w-[300px] flex flex-col items-center gap-[10px] md:gap-5 font-semibold">
                            <p className="text-[1.125rem] md:text-xl">
                                Rino Bago - <span className="text-primary">Web Developer</span>
                            </p>
                            <p className="text-[0.875rem] md:text-base text-accent">Building modern, fast, and unforgettable websites</p>
                        </a>
                    </div>
                    <div className="max-[390px]:col-span-1 col-span-1 row-start-2 md:row-auto flex flex-col items-center gap-[8px] md:gap-5 font-semibold">
                        <p className="text-accent">Pages</p>
                        <Link href="/#about" className="text-muted text-[0.875rem] md:text-base hover-muted-white">
                            About
                        </Link>
                        <Link href="/#projects" className="text-muted text-[0.875rem] md:text-base hover-muted-white">
                            Projects
                        </Link>
                        <Link href="/#services" className="text-muted text-[0.875rem] md:text-base hover-muted-white">
                            Services
                        </Link>
                    </div>
                    <div className="max-[390px]:col-span-1 col-span-1 max-[390px]:row-start-3 row-start-2 md:row-auto flex flex-col items-center gap-[8px] md:gap-5 font-semibold">
                        <p className="text-accent">Contact</p>
                        <a href="tel:+385989466220" className="text-muted text-[0.875rem] md:text-base flex justify-center items-ce nter gap-1">
                            <img src="/Telephone.svg" alt="Telephone" className="w-5 h-5" />
                            <span className="hover-muted-white">+385 98 9466 220</span>
                        </a>
                        <a href="mailto:rino.bago@gmail.com" className="text-muted text-[0.875rem] md:text-base flex justify-center items-center gap-1">
                            <img src="/Mail.svg" alt="Mail" className="w-5 h-5" />
                            <span className="hover-muted-white">rino.bago@gmail.com</span>
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
            <p className="font-light text-muted text-[0.875rem] md:text-base">© {new Date().getFullYear()} | Rino Bago</p>
        </div>
    );
};

export default Footer;
