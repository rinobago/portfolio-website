import Image from "next/image";

const Projects = () => {
    return (
        <section className="section">
            <div id="projects" className="projects mb-[213px] md:mb-[330px] relative scroll-mt-[3rem] md:scroll-mt-[7rem]">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[-50%] left-[-20%] scale-x-85 scale-y-105 rotate-[30deg] max-[1140px]:top-[-40%] max-[1140px]:left-[-30%] max-[1000px]:top-[-30%] max-[1000px]:left-[-35%] max-[823px]:top-[-20%] max-[823px]:left-[-40%] max-[823px]:scale-y-150 max-[823px]:scale-x-120 max-[600px]:top-[-15%] max-[600px]:left-[-40%] max-[600px]:scale-y-150 max-[600px]:scale-x-120 max-[430px]:top-[-5%] max-[430px]:left-[-40%] max-[430px]:scale-x-110 max-[390px]:top-[20%] max-[390px]:left-[-40%]"
                />
                <img
                    src="/GoldBlob.svg"
                    alt="Gold Blob"
                    style={{ animationDelay: "3s" }}
                    className="animate-breathe blob top-[5%] left-[25%] scale-x-50 scale-y-80 rotate-[60deg] max-[1140px]:top-[10%] max-[1140px]:left-[25%] max-[1000px]:top-[30%] max-[1000px]:left-[35%] max-[823px]:top-[50%] max-[823px]:left-[40%] max-[823px]:scale-y-110 max-[823px]:scale-x-90 max-[600px]:top-[50%] max-[600px]:left-[40%] max-[600px]:scale-y-150 max-[600px]:scale-x-120 max-[430px]:top-[50%] max-[430px]:left-[30%] max-[430px]:scale-x-90 max-[390px]:top-[60%] max-[390px]:left-[40%]"
                />
                <div className="flex flex-col gap-[0.75rem] md:gap-8 justify-center items-center">
                    <h2 className="text-[2.5rem] text-center md:text-[3.125rem] font-bold">My Past Projects</h2>
                    <p className="text-base text-center md:text-xl text-muted">See what I've built for my clients</p>
                </div>
                <a
                    href="https://www.etc.com.hr/"
                    className="card relative w-[clamp(297px,80vw,680px)] aspect-[17/12] overflow-hidden mt-[85px] md:mt-[100px] hover:brightness-125 hover:scale-101 active:brightness-95 active:scale-99 cursor-pointer ease-in-out transition transform duration-50"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="absolute z-1 font-semibold text-[clamp(1rem,3.5vw,1.75rem)] top-[15px] left-[20px]">Et Cetera / Prijevodi</p>
                    <Image src="/EtCetera.png" alt="EtCetera banner" fill className="w-full h-full object-cover block opacity-[30%] select-none"></Image>
                </a>
            </div>
        </section>
    );
};

export default Projects;
