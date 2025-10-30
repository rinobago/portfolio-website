import { useLocale, useTranslations } from "next-intl";

const Services = () => {
    const t = useTranslations("Services");
    const locale = useLocale();

    const titleLeading = locale === "hr" ? "leading-[45px]" : "leading-[50px]";

    return (
        <section className="section">
            <div id="services" className="services mb-[95px] md:mb-44 relative scroll-mt-[3rem] md:scroll-mt-[7rem]">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[-25%] left-[-60%] scale-x-70 rotate-[-15deg] max-[1530px]:top-[-20%] max-[1530px]:left-[-50%] max-[900px]:top-[-20%] max-[900px]:left-[-50%] max-[768px]:top-[-20%] max-[768px]:left-[-50%] max-[630px]:top-[-10%] max-[630px]:left-[-50%] max-[630px]:scale-y-150 max-[630px]:scale-x-100 max-[430px]:top-[-5%] max-[430px]:left-[-50%] max-[430px]:scale-y-160 max-[430px]:scale-x-110"
                />
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    style={{ animationDelay: "2s" }}
                    className="animate-breathe blob top-[15%] left-[40%] scale-x-70 rotate-[-15deg] max-[1050px]:top-[20%] max-[1050px]:left-[40%] max-[900px]:top-[30%] max-[900px]:left-[50%] max-[630px]:top-[40%] max-[630px]:left-[50%] max-[630px]:scale-y-150 max-[630px]:scale-x-100 max-[430px]:scale-y-160 max-[430px]:scale-x-110 max-[350px]:top-[30%] max-[350px]:left-[50%]"
                />
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    style={{ animationDelay: "3s" }}
                    className="animate-breathe blob top-[64%] left-[-20%] scale-x-70 rotate-[-15deg] max-[1400px]:top-[64%] max-[1400px]:left-[-30%] max-[1050px]:top-[70%] max-[1050px]:left-[-40%] max-[850px]:top-[80%] max-[850px]:left-[-40%] max-[768px]:top-[80%] max-[768px]:left-[-40%] max-[630px]:top-[80%] max-[630px]:left-[-50%] max-[630px]:scale-y-150 max-[630px]:scale-x-100 max-[500px]:top-[90%] max-[500px]:left-[-40%] max-[430px]:scale-y-190 max-[430px]:scale-x-150"
                />
                <img
                    src="/GoldBlob.svg"
                    alt="Gold Blob"
                    className="animate-breathe blob top-[73%] left-[50%] opacity-60 scale-x-40 scale-y-80 rotate-[60deg] max-[1100px]:top-[77%] max-[1100px]:left-[50%] max-[900px]:top-[85%] max-[900px]:left-[50%] max-[768px]:top-[80%] max-[768px]:left-[50%] max-[768px]:rotate-[30deg] max-[768px]:scale-x-50 max-[630px]:top-[70%] max-[630px]:left-[50%] max-[630px]:scale-x-110 max-[630px]:scale-y-150 max-[350px]:scale-x-130 max-[350px]:scale-y-180"
                />
                <div className="w-full flex flex-col justify-center items-center gap-[115px]">
                    <div className="w-full flex flex-col justify-center items-center gap-[0.75rem] md:gap-8 text-center">
                        <h2 className="text-[2.5rem] md:text-[3.125rem] font-bold">{t("title")}</h2>
                        <p className="text-base md:text-xl text-muted w-[clamp(300px,30vw,375px)]">
                            {t("description.row1")}
                            {t("description.row2")}
                        </p>
                    </div>
                    <div className="card w-full max-w-[658px] flex flex-col justify-center items-center gap-[45px] px-[25px] max-[350px]:px-[15px] py-[35px]">
                        <div className="w-full flex flex-col justify-center items-center gap-[25px]">
                            <h3 className="font-semibold text-[1.875rem]">{t("card.title")}</h3>
                            <h3 className="font-semibold text-[1.875rem]">{t("card.price")}</h3>
                            <ul className="w-full flex flex-col justify-start text-base max-[350px]:text-[0.875rem] text-muted">
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                                    <p>{t("card.included.row1")}</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                                    <p>{t("card.included.row2")}</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                                    <p>{t("card.included.row3")}</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                                    <p>{t("card.included.row4")}</p>
                                </li>
                                <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                                    <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                                    <p>{t("card.included.row5")}</p>
                                </li>
                            </ul>
                            <p className="text-xl max-[350px]:text-[1rem] text-fg w-full">{t("card.delivery")}</p>
                        </div>
                        <p className="text-xl max-[350px]:text-[1rem] text-secondary text-center w-full">{t("card.description")}</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-[54px]">
                        <h2 className={`text-[2.5rem] md:text-[3.125rem] ${titleLeading} text-center font-bold`}>{t("included.title")}</h2>
                        <ul className="w-full max-w-[845px] flex flex-col justify-start gap-[15px] text-[0.875rem] md:text-xl text-fg">
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">{t("included.services.row1.title")}</span>
                                    {t("included.services.row1.description")}
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">{t("included.services.row2.title")}</span>
                                    {t("included.services.row2.description")}
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">{t("included.services.row3.title")}</span>
                                    {t("included.services.row3.description")}
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">{t("included.services.row4.title")}</span>
                                    {t("included.services.row4.description")}
                                </p>
                            </li>
                            <li className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]">
                                <img src="/Checkmark.svg" alt="checkmark" />
                                <p>
                                    <span className="font-bold text-primary">{t("included.services.row5.title")}</span>
                                    {t("included.services.row5.description")}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
