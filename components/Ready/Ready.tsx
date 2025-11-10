import { getTranslations } from "next-intl/server";
import ReadyClient from "./ReadyClient";

const Ready = async () => {
    const t = await getTranslations("Ready");

    const content = {
        fg1: t("fg1"),
        gold: t("gold"),
        fg2: t("fg2"),
        purple: t("purple"),
    };

    return (
        <section className="section">
            <div className="ready mb-[5.625rem] md:mb-44 relative">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[-30%] left-[70%] scale-x-70 rotate-[32deg] max-[1535px]:top-[-30%] max-[1535px]:left-[60%] max-[960px]:top-[10%] max-[960px]:left-[55%] max-[768px]:top-[-25%] max-[768px]:left-[50%] max-[630px]:top-[10%] max-[630px]:left-[50%] max-[630px]:scale-y-150 max-[630px]:scale-x-100 max-[430px]:top-[20%] max-[430px]:left-[60%] max-[430px]:scale-y-160 max-[430px]:scale-x-110"
                />
                <ReadyClient content={content} />
            </div>
        </section>
    );
};

export default Ready;
