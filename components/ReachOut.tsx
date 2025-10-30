import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const ReachOut = () => {
    const t = useTranslations("ReachOut");
    const locale = useLocale();

    const divWidth = locale === "hr" ? "w-[350px]" : "w-[300px]";

    return (
        <section className="section">
            <div className="reachOut mb-[95px] md:mb-44">
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[50px]">
                    <p className={`text-[clamp(1.75rem,5vw,2.5rem)] text-left ${divWidth} [@media(min-width:570px)]:w-full leading-[clamp(35px,5vw,50px)]`}>
                        {t("text.row1")}
                        <br />
                        <span className="text-primary">{t("text.row2")}</span>
                    </p>
                    <Link href="/contact" className="btn-primary">
                        {t("button")}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ReachOut;
