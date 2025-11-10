import { getLocale, getTranslations } from "next-intl/server";
import HeroClient from "./HeroClient";

const Hero = async () => {
    const t = await getTranslations("Hero");
    const locale = await getLocale();

    const titleSize = locale === "hr" ? "text-[clamp(2.35rem,4vw,3.5rem)]" : "text-[clamp(3.1rem,5.2vw,4.375rem)]";

    const titleLeading = locale === "hr" ? "leading-[clamp(40px,5vw,71px)]" : "leading-[clamp(55px,6.5vw,88px)]";

    const content = {
        titleFg: t("title.fg"),
        titleColored: t("title.colored"),
        descriptionGreeting: t("description.greeting"),
        descriptionBuild: t("description.build"),
        descriptionModern: t("description.modern"),
        descriptionFast: t("description.fast"),
        descriptionUnforgettable: t("description.unforgettable"),
        quote: t("quote"),
        work: t("work"),
    };

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
                <HeroClient content={content} titleSize={titleSize} titleLeading={titleLeading} />
            </div>
        </section>
    );
};

export default Hero;
