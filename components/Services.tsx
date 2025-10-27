const Services = () => {
    return (
        <section className="section">
            <div id="services" className="services mb-[95px] md:mb-44 relative scroll-mt-[7rem]">
                <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[-25%] left-[-60%] scale-x-70 rotate-[-15deg]" />
                <img src="/PurpleBlob.svg" alt="Purple Blob" style={{ animationDelay: "2s" }} className="animate-breathe blob top-[15%] left-[40%] scale-x-70 rotate-[-15deg]" />
                <img src="/PurpleBlob.svg" alt="Purple Blob" style={{ animationDelay: "3s" }} className="animate-breathe blob top-[64%] left-[-20%] scale-x-70 rotate-[-15deg]" />
                <img src="/GoldBlob.svg" alt="Gold Blob" className="animate-breathe blob top-[73%] left-[50%] opacity-60 scale-x-40 scale-y-80 rotate-[60deg]" />
                <div className="w-full flex flex-col justify-center items-center gap-[115px]">
                    <div className="w-full flex flex-col justify-center items-center gap-[0.75rem] md:gap-8 text-center">
                        <h2 className="text-[2.5rem] md:text-[3.125rem] font-bold">Services</h2>
                        <p className="text-base md:text-xl text-muted w-[clamp(300px,30vw,375px)]">
                            Built around your goals. <br />
                            Designed to stand out, perform fast, and grow with your business
                        </p>
                    </div>
                    <div className="card w-full max-w-[658px] flex flex-col justify-center items-center gap-[45px] px-[25px] max-[350px]:px-[15px] py-[35px]">
                        <div className="w-full flex flex-col justify-center items-center gap-[25px]">
                            <h3 className="font-semibold text-[1.875rem]">Quick Launch</h3>
                            <h3 className="font-semibold text-[1.875rem]">€350</h3>
                            <ul className="w-full flex flex-col justify-start text-base max-[350px]:text-[0.875rem] text-muted">
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px]" />
                                    <p>For getting online quickly</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px]" />
                                    <p>1-3 pages built from a refined, customizable template</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px]" />
                                    <p>Responsive design for all devices</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px]" />
                                    <p>Speed optimization</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px]" />
                                    <p>Domain and hosting guidance</p>
                                </li>
                            </ul>
                            <p className="text-xl max-[350px]:text-[1rem] text-fg w-full">Delivery: 2-3 days</p>
                        </div>
                        <p className="text-xl max-[350px]:text-[1rem] text-secondary text-center w-full">Perfect if you need a clean, reliable site right now.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-[54px]">
                        <h2 className="text-[2.5rem] md:text-[3.125rem] text-center font-bold">What's Included in Your Website:</h2>
                        <ul className="w-full max-w-[845px] flex flex-col justify-start gap-[15px] text-[0.875rem] md:text-xl text-fg">
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">RESPONSIVE DESIGN</span> - Your website will look and function perfectly on any device - from large desktop screens to
                                    tablets and smartphones. I carefully design and test each page to ensure it's fully responsive, so your visitors always get the same smooth experience no matter how
                                    they browse.
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">FAST LOADING SPEEDS</span> - Speed is everything! A slow website loses visitors before they even see your content. That's
                                    why I focus on optimized performance and efficient hosting setups to make sure your site loads instantly and runs reliably.
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">MODERN, CLEAN DESIGN</span> - Every design choice is tailored to your brand and audience. Clean layouts, balanced spacing,
                                    and visuals that feel both professional and modern.
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">DOMAIN AND HOSTING GUIDANCE</span> - I'll help you set up your domain and hosting the right way - secure, reliable, and
                                    fast. Whether you already have a provider or need help choosing one, I'll walk you through the process so your website is live and running without any confusion.
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">SEO SETUP</span> - Your website will be built with search engines in mind from day one. I'll optimize your structure,
                                    metadata, and keyword placement to help you appear on Google and reach more potential customers.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
