const Projects = () => {
    return (
        <section className="section">
            <div id="projects" className="projects mb-[213px] md:mb-[330px] relative scroll-mt-[7rem]">
                <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[-50%] left-[-20%] scale-x-85 scale-y-105 rotate-[30deg]" />
                <img src="/GoldBlob.svg" alt="Gold Blob" style={{ animationDelay: "3s" }} className="animate-breathe blob top-[5%] left-[25%] scale-x-50 scale-y-80 rotate-[60deg]" />
                <div className="flex flex-col gap-[0.75rem] md:gap-8 justify-center items-center">
                    <h2 className="text-[2.5rem] text-center md:text-[3.125rem] font-bold">My Past Projects</h2>
                    <p className="text-base text-center md:text-xl text-muted">See what I've built for my clients</p>
                </div>
                <div className="card relative w-[clamp(345px,80vw,680px)] aspect-[17/12] overflow-hidden mt-[85px] md:mt-[100px] hover:brightness-125 cursor-pointer transition duration-300">
                    <p className="absolute z-1 font-semibold text-base md:text-[1.75rem] top-[15px] left-[20px]">Et Cetera / Prijevodi</p>
                    <img src="/EtCetera.png" alt="EtCetera banner" className="w-full h-full object-cover block opacity-[30%]"></img>
                </div>
            </div>
        </section>
    );
};

export default Projects;
