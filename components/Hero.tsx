import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero relative mb-[40rem]">
            <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[-70%] left-[-55%] scale-y-115 rotate-45" />
            <img src="/GoldBlob.svg" alt="Gold Blob" style={{ animationDelay: "3s" }} className="animate-breathe blob top-[-50%] left-[25%] scale-x-80 scale-y-115 rotate-[-50deg]" />
            <img src="/PurpleBlob.svg" alt="Purple Blob" style={{ animationDelay: "1s" }} className="animate-breathe blob top-[30%] left-[60%] scale-x-90 scale-y-105 rotate-[-50deg]" />
            <div className="w-[44.188rem] flex flex-col gap-4">
                <h1 className="font-semibold text-[4.375rem] leading-[88px]">
                    Modern Websites, Built <span className="text-primary">Right</span>
                </h1>
                <p className="text-xl max-w-[23.438rem]">
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
            <div className="absolute right-[-4%]">
                <Image src="/MyAvatar.jpg" alt="Rino Bago image" width={700} height={700} className="aspect-square object-cover object-[center_10%] rounded-full absolute top-6 right-6"></Image>
                <img src="/AvatarPurpleCircle.svg" alt="circle" className="w-[700px]" />
            </div>
        </div>
    );
};

export default Hero;
