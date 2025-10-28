const About = () => {
    return (
        <section className="section">
            <div id="about" className="about text-xl text-center pb-[217px] md:pb-[330px] scroll-mt-[3rem] md:scroll-mt-[7rem]">
                <div className="w-full max-[867]:text-[clamp(1rem,2.3vw,1.25rem)] max-[768]:text-[clamp(1rem,4vw,1.25rem)] justify-center items-center justify-items-stretch grid grid-cols-1 grid-rows-[360px] md:grid-cols-[minmax(0,485px)_minmax(0,485px)] gap-[25px]">
                    <div className="card h-full min-h-[360px] flex flex-col gap-6 justify-center items-center py-[clamp(10px,4vw,15px)] px-[clamp(15px,4vw,25px)] break-words">
                        <p>
                            I'm Rino Bago, a web developer crafting websites that <span className="font-bold text-secondary">impress</span> and{" "}
                            <span className="font-bold text-secondary">perform</span>.
                        </p>
                        <p>
                            Your website is the <span className="font-bold text-gold">face</span> of your business, the first impression your customers get.
                        </p>
                        <p>
                            I turn that moment into impact with <span className="font-bold">sleek, high-performing</span> websites that look incredible and convert visitors into{" "}
                            <span className="font-bold text-secondary">clients</span>.
                        </p>
                    </div>
                    <div className="card h-full min-h-[360px] flex flex-col gap-6 justify-center items-center py-[10px] px-[15px] sm:py-[15px] sm:px-[25px] break-words">
                        <p>
                            Every site I build is tailored to your <span className="font-bold text-secondary">brand</span> and goals -{" "}
                            <span className="font-bold">fast, modern, and effortlessly functional.</span>
                        </p>
                        <p>
                            <span className="font-bold text-secondary">No clutter</span>. Just clean, professional design that makes your business{" "}
                            <span className="font-bold text-gold">stand out</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
