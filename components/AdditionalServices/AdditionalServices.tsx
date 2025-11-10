import { getTranslations } from "next-intl/server";
import AdditionalServicesClient from "./AdditionalServicesClient";

const AdditionalServices = async () => {
    const t = await getTranslations("AdditionalServices");

    const content = {
        title: t("title"),
        rows: [
            {
                title: t("card.row1.title"),
                desc: t("card.row1.description"),
            },
            {
                title: t("card.row2.title"),
                desc: t("card.row2.description"),
            },
            {
                title: t("card.row3.title"),
                desc: t("card.row3.description"),
            },
            {
                title: t("card.row4.title"),
                desc: t("card.row4.description"),
            },
            {
                title: t("card.row5.title"),
                desc: t("card.row5.description"),
            },
        ],
    };

    return (
        <section className="section">
            <div className="additionalServices relative">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[30%] left-[-38%] scale-x-70 rotate-[-15deg] max-[1350px]:top-[30%] max-[1350px]:left-[-50%] max-[1100px]:top-[45%] max-[1100px]:left-[-40%] max-[950px]:top-[50%] max-[950px]:left-[-40%] max-[850px]:top-[60%] max-[850px]:left-[-40%] max-[768px]:top-[40%] max-[768px]:left-[-40%] max-[650px]:top-[55%] max-[650px]:left-[-40%] max-[550px]:top-[65%] max-[550px]:left-[-40%] max-[550px]:scale-x-120 max-[550px]:scale-y-110 max-[430px]:top-[75%] max-[430px]:left-[-40%] max-[330px]:top-[85%] max-[330px]:left-[-40%] max-[330px]:scale-x-150 max-[330px]:scale-y-130"
                />
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    style={{ animationDelay: "2s" }}
                    className="animate-breathe blob top-[-35%] left-[47%] scale-x-70 rotate-[-15deg] max-[850px]:top-[-30%] max-[850px]:left-[47%] max-[550px]:top-[-20%] max-[550px]:left-[47%] max-[550px]:scale-x-120 max-[550px]:scale-y-150 max-[420px]:top-[0%] max-[420px]:left-[47%]"
                />
                <AdditionalServicesClient content={content} />
            </div>
        </section>
    );
};

export default AdditionalServices;
