import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const t = useTranslations("Hero");
    const locale = useLocale();

    const titleSize = locale === "hr" ? "text-[clamp(2.35rem,4vw,3.5rem)]" : "text-[clamp(3.1rem,5.2vw,4.375rem)]";
    const titleLeading = locale === "hr" ? "leading-[clamp(40px,5vw,71px)]" : "leading-[clamp(55px,6.5vw,88px)]";

    return (
        <section className="section">
            <div className="hero relative mb-[clamp(112px,41.2vw,640px)]">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[-70%] left-[-55%] scale-y-115 rotate-45 max-[1140px]:top-[-50%] max-[1140px]:left-[-40%] max-[823px]:top-[-30%] max-[823px]:left-[-40%] max-[600px]:top-[-25%] max-[600px]:left-[-40%] max-[600px]:scale-y-150 max-[600px]:scale-x-120 max-[430px]:top-[-10%] max-[430px]:left-[-50%] max-[430px]:scale-x-190"
                />
                <img
                    src="/GoldBlob.svg"
                    alt="Gold Blob"
                    style={{ animationDelay: "3s" }}
                    className="animate-breathe blob top-[-50%] left-[25%] scale-x-80 scale-y-115 rotate-[-50deg] max-[1140px]:top-[20%] max-[1140px]:left-[60%] max-[823px]:top-[30%] max-[823px]:left-[70%] max-[823px]:scale-x-160 max-[600px]:top-[25%] max-[600px]:left-[70%] max-[600px]:scale-y-150 max-[600px]:scale-x-120 max-[430px]:top-[30%] max-[430px]:left-[70%] max-[430px]:scale-x-190"
                />
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    style={{ animationDelay: "1s" }}
                    className="animate-breathe blob top-[30%] left-[60%] scale-x-90 scale-y-105 rotate-[-50deg] max-[1140px]:top-[65%] max-[1140px]:left-[-10%] max-[823px]:top-[75%] max-[823px]:left-[-12%] max-[823px]:scale-y-110 max-[600px]:top-[65%] max-[600px]:left-[-20%] max-[600px]:scale-y-150 max-[600px]:scale-x-120 max-[430px]:top-[70%] max-[430px]:left-[-20%] max-[430px]:scale-x-190"
                />
                <div className="w-full h-full relative flex flex-col justify-center items-center [@media(min-width:1140px)]:flex-row [@media(min-width:1140px)]:gap-[clamp(200px,27vw,500px)] gap-[2.5rem]">
                    <div className="w-full [@media(min-width:1140px)]:w-[44.188rem] flex flex-col items-center [@media(min-width:1140px)]:items-baseline gap-4">
                        <h1 className={`font-semibold text-center [@media(min-width:1140px)]:text-left ${titleSize} ${titleLeading} w-full [@media(min-width:1140px)]:w-[44.188rem]`}>
                            {t("title.fg")}
                            <span className="text-primary">{t("title.colored")}</span>
                        </h1>
                        <p className="w-full text-center text-base [@media(min-width:1140px)]:text-left [@media(min-width:1140px)]:text-xl max-w-[23.438rem]">
                            {t("description.greeting")}
                            <span className="text-secondary">Rino</span>
                            {t("description.build")}
                            <span className="font-bold">
                                <span className="text-secondary">{t("description.modern")}</span>
                                {t("description.fast")}
                                <span className="text-gold">{t("description.unforgettable")}</span>
                            </span>
                            .
                        </p>
                        <div className="mt-[4.5rem] flex max-[350px]:flex-col gap-4 justify-center items-center">
                            <Link href="/contact" className="btn-primary whitespace-nowrap shrink-0">
                                {t("quote")}
                            </Link>
                            <a href="#projects" className="btn-secondary-outline whitespace-nowrap shrink-0">
                                <div className="flex gap-[10px]">
                                    <span>{t("work")}</span>
                                    <img src="/View My Work.svg" alt="arrow" className="aspect-square max-[350px]:w-[14px]" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="relative w-[326px] h-[326px] flex justify-center [@media(min-width:1140px)]:w-[100px] [@media(min-width:1140px)]:static">
                        <div className="[@media(min-width:1140px)]:right-[0%] absolute">
                            <Image
                                src="/MyPhoto.png"
                                alt="Rino Bago image"
                                width={700}
                                height={700}
                                className="w-[45vw] max-[1140px]:w-[60vw] max-w-[700px] min-w-[325px] max-[370px]:w-[85vw] max-[370px]:min-w-[278px] aspect-square"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
