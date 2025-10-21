const About = () => {
    return (
        <div className="about text-xl text-center pt-[40rem] pb-[20.625rem]">
            <div className="w-full flex justify-center items-center gap-[25px]">
                <div className="card h-[305px] flex flex-col gap-6 justify-center items-center basis-[485px] py-[15px] px-[25px]">
                    <p>
                        I'm Rino Bago, a web developer crafting websites that <span className="font-bold text-secondary">impress</span> and <span className="font-bold text-secondary">perform</span>.
                    </p>
                    <p>
                        Your website is the <span className="font-bold text-gold">face</span> of your business, the first impression your customers get.
                    </p>
                    <p>
                        I turn that moment into impact with <span className="font-bold">sleek, high-performing</span> websites that look incredible and convert visitors into{" "}
                        <span className="font-bold text-secondary">clients</span>.
                    </p>
                </div>
                <div className="card h-[305px] flex flex-col gap-6 justify-center items-center basis-[485px] py-[15px] px-[25px]">
                    <p>
                        Every site I build is tailored to your <span className="font-bold text-secondary">brand</span> and goals -{" "}
                        <span className="font-bold">fast, modern, and effortlessly functional.</span>
                    </p>
                    <p>
                        <span className="font-bold text-secondary">No clutter</span>. Just clean, professional design that makes your business <span className="font-bold text-gold">stand out</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
