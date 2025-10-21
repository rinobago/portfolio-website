const Projects = () => {
    return (
        <div className="projects mb-[20.625rem]">
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
