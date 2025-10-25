const Projects = () => {
    return (
        <div id="projects" className="projects mb-[20.625rem] relative scroll-mt-[7rem]">
            <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[-50%] left-[-20%] scale-x-85 scale-y-105 rotate-[30deg]" />
            <img src="/GoldBlob.svg" alt="Gold Blob" style={{ animationDelay: "3s" }} className="animate-breathe blob top-[5%] left-[25%] scale-x-50 scale-y-80 rotate-[60deg]" />
            <div className="flex flex-col gap-8 justify-center items-center">
                <h2 className="text-[3.125rem] font-bold">My Past Projects</h2>
                <p className="text-xl text-muted">See what I've built for my clients</p>
            </div>
            <div className="card relative w-[680px] h-[480px] overflow-hidden mt-[100px] hover:brightness-125 cursor-pointer transition duration-300">
                <img src="/EtCetera.png" alt="EtCetera banner" className="w-full h-full object-cover block opacity-[30%]"></img>
            </div>
        </div>
    );
};

export default Projects;
