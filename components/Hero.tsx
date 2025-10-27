import Image from "next/image";

const Hero = () => {
    return (
        <section className="section">
            <div className="hero relative mb-[clamp(112px,41.2vw,640px)]">
                <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[-70%] left-[-55%] scale-y-115 rotate-45" />
                <img src="/GoldBlob.svg" alt="Gold Blob" style={{ animationDelay: "3s" }} className="animate-breathe blob top-[-50%] left-[25%] scale-x-80 scale-y-115 rotate-[-50deg]" />
                <img src="/PurpleBlob.svg" alt="Purple Blob" style={{ animationDelay: "1s" }} className="animate-breathe blob top-[30%] left-[60%] scale-x-90 scale-y-105 rotate-[-50deg]" />
                <div className="w-full h-full relative flex flex-col justify-center items-center [@media(min-width:1115px)]:flex-row [@media(min-width:1115px)]:gap-[clamp(200px,27vw,500px)] gap-[2.5rem]">
                    <div className="w-full [@media(min-width:1115px)]:w-[44.188rem] flex flex-col items-center [@media(min-width:1115px)]:items-baseline gap-4">
                        <h1 className="font-semibold text-center [@media(min-width:1115px)]:text-left text-[clamp(3.75rem,5.2vw,4.375rem)] [@media(min-width:1115px)]:leading-[88px] leading-[70px] w-full [@media(min-width:1115px)]:w-[44.188rem]">
                            Modern Websites, Built <span className="text-primary">Right</span>
                        </h1>
                        <p className="w-full text-center text-base [@media(min-width:1115px)]:text-left [@media(min-width:1115px)]:text-xl max-w-[23.438rem]">
                            Hi, I'm <span className="text-secondary">Rino</span>! Let's build something{" "}
                            <span className="font-bold">
                                <span className="text-secondary">modern</span>, fast and <span className="text-gold">unforgettable</span>
                            </span>
                            .
                        </p>
                        <div className="mt-[4.5rem] flex gap-4">
                            <a href="/contact" className="btn-primary">
                                Get a Quote
                            </a>
                            <a href="#" className="btn-secondary-outline">
                                <div className="flex gap-[10px]">
                                    <span>View My Work</span>
                                    <img src="/View My Work.svg" alt="arrow" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="relative w-[326px] h-[326px] flex justify-center [@media(min-width:1115px)]:w-[100px] [@media(min-width:1115px)]:static">
                        <div className="[@media(min-width:1115px)]:right-[0%] absolute">
                            <Image src="/MyPhoto.png" alt="Rino Bago image" width={700} height={700} className="w-[45vw] max-w-[700px] min-w-[326px] aspect-square"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
