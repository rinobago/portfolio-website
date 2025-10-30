import { useTranslations } from "next-intl";

const Ready = () => {
    const t = useTranslations("Ready");

    return (
        <section className="section">
            <div className="ready mb-[5.625rem] md:mb-44 relative">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[-30%] left-[70%] scale-x-70 rotate-[32deg] max-[1535px]:top-[-30%] max-[1535px]:left-[60%] max-[960px]:top-[10%] max-[960px]:left-[55%] max-[768px]:top-[-25%] max-[768px]:left-[50%] max-[630px]:top-[10%] max-[630px]:left-[50%] max-[630px]:scale-y-150 max-[630px]:scale-x-100 max-[430px]:top-[20%] max-[430px]:left-[60%] max-[430px]:scale-y-160 max-[430px]:scale-x-110"
                />
                <div className="flex flex-col justify-center items-center gap-[5.625rem] md:gap-44">
                    <p className="text-[1.75rem] md:text-[2.5rem] text-center w-full">
                        {t("fg1")}
                        <span className="font-bold text-gold">{t("gold")}</span>
                        {t("fg2")}
                        <span className="font-bold text-primary">{t("purple")}</span>.
                    </p>
                    <div className="flex flex-col justify-center items-center gap-[0.625rem] md:gap-4">
                        <img src="/AvatarPurpleCircle.svg" alt="Purple circle" className="w-[2.188rem] h-[2.188rem] md:w-[4.063rem] md:h-[4.063rem] select-none" />
                        <img src="/AvatarPurpleCircle.svg" alt="Purple circle" className="w-[2.028rem] h-[2.028rem] md:w-[3.75rem] md:h-[3.75rem] select-none" />
                        <img src="/AvatarPurpleCircle.svg" alt="Purple circle" className="w-[1.829rem] h-[1.829rem] md:w-[3.438rem] md:h-[3.438rem] select-none" />
                        <img src="/AvatarPurpleCircle.svg" alt="Purple circle" className="w-[1.591rem] h-[1.591rem] md:w-[3.125rem] md:h-[3.125rem] select-none" />
                        <img src="/AvatarPurpleCircle.svg" alt="Purple circle" className="w-[1.353rem] h-[1.353rem] md:w-[2.813rem] md:h-[2.813rem] select-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ready;
