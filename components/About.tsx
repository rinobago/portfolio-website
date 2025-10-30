import { useTranslations } from "next-intl";

const About = () => {
    const t = useTranslations("About");

    return (
        <section className="section">
            <div id="about" className="about text-xl text-center pb-[217px] md:pb-[330px] scroll-mt-[3rem] md:scroll-mt-[7rem]">
                <div className="w-full max-[867]:text-[clamp(1rem,2.3vw,1.25rem)] max-[768]:text-[clamp(1rem,4vw,1.25rem)] justify-center items-center justify-items-stretch grid grid-cols-1 grid-rows-[360px] md:grid-cols-[minmax(0,485px)_minmax(0,485px)] gap-[25px]">
                    <div className="card h-full min-h-[360px] flex flex-col gap-6 justify-center items-center py-[clamp(10px,4vw,15px)] px-[clamp(15px,4vw,25px)] break-words">
                        <p>
                            {t("card1.p1.fg")}
                            <span className="font-bold text-secondary">{t("card1.p1.impress")}</span>
                            {t("card1.p1.and")}
                            <span className="font-bold text-secondary">{t("card1.p1.perform")}</span>.
                        </p>
                        <p>
                            {t("card1.p2.fg1")}
                            <span className="font-bold text-gold">{t("card1.p2.face")}</span>
                            {t("card1.p2.fg2")}
                        </p>
                        <p>
                            {t("card1.p3.fg1")}
                            <span className="font-bold">{t("card1.p3.bold")}</span>
                            {t("card1.p3.fg2")}
                            <span className="font-bold text-secondary">{t("card1.p3.clients")}</span>.
                        </p>
                    </div>
                    <div className="card h-full min-h-[360px] flex flex-col gap-6 justify-center items-center py-[10px] px-[15px] sm:py-[15px] sm:px-[25px] break-words">
                        <p>
                            {t("card2.p1.fg")}
                            <span className="font-bold text-secondary">{t("card2.p1.brand")}</span>
                            {t("card2.p1.goals")}
                            <span className="font-bold">{t("card2.p1.bold")}</span>
                        </p>
                        <p>
                            <span className="font-bold text-secondary">{t("card2.p2.clutter")}</span>
                            {t("card2.p2.fg")}
                            <span className="font-bold text-gold">{t("card2.p2.gold")}</span>
                            {t("card2.p2.your")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
