import { getLocale, getTranslations } from "next-intl/server";
import ReachOutClient from "./ReachOutClient";

const ReachOut = async () => {
    const t = await getTranslations("ReachOut");
    const locale = await getLocale();

    const content = {
        text: {
            row1: t("text.row1"),
            row2: t("text.row2"),
        },
        button: t("button"),
    };

    const divWidth = locale === "hr" ? "w-[350px]" : "w-[300px]";

    return (
        <section className="section">
            <div className="reachOut mb-[95px] md:mb-44">
                <ReachOutClient content={content} divWidth={divWidth} />
            </div>
        </section>
    );
};

export default ReachOut;
