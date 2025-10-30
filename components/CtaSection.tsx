import { useTranslations } from "next-intl";
import Link from "next/link";

const CtaSection = () => {
    const t = useTranslations("CtaSection");

    return (
        <div className="ctaSection">
            <div className="w-full flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="h-[213px] md:h-[330px] w-full"></div>
                <p className="text-[clamp(1.875rem,6.5vw,3.125rem)] mb-[20px] md:mb-[75px] px-[20px]">
                    {t("text.fg")}
                    <span className="font-bold text-secondary">{t("text.colored")}</span>?
                </p>
                <Link href="/contact" className="btn-primary text-xl md:text-[1.563rem] px-[30px] py-[25px]">
                    {t("button")}
                </Link>
                <div className="relative h-[213px] md:h-[330px] w-full">
                    <img
                        src="/PurpleBlob.svg"
                        alt="Purple Blob"
                        className="animate-breathe blob top-[-80%] left-[60%] opacity-75 scale-x-120 scale-y-110 rotate-[-30deg] max-[768px]:scale-y-160 max-[550px]:left-[50%] max-[390px]:top-[-40%] max-[360px]:top-[-60%] max-[360px]:scale-y-140"
                    />
                    <img
                        src="/GoldBlob.svg"
                        alt="Gold Blob"
                        style={{ animationDelay: "3s" }}
                        className="animate-breathe blob top-[-80%] left-[-10%] opacity-50 scale-x-70 scale-y-100 rotate-[-75deg] max-[1600px]:left-[-20%] max-[1200px]:left-[-30%] max-[1100px]:top-[-60%] max-[950px]:top-[-40%] max-[850px]:top-[-20%] max-[768px]:top-[-60%] max-[620px]:top-[-40%] max-[550px]:top-[-20%] max-[420px]:top-[0%] max-[360px]:scale-y-140 max-[360px]:scale-x-110 max-[340px]:top-[10%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
