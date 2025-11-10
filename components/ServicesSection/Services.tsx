import { getLocale, getTranslations } from "next-intl/server";
import ServicesClient from "./ServicesClient";

const Services = async () => {
    const t = await getTranslations("Services");
    const locale = await getLocale();

    const titleLeading = locale === "hr" ? "leading-[45px]" : "leading-[50px]";

    const content = {
        title: t("title"),
        description: {
            row1: t("description.row1"),
            row2: t("description.row2"),
        },
        card: {
            title: t("card.title"),
            price: t("card.price"),
            included: {
                row1: t("card.included.row1"),
                row2: t("card.included.row2"),
                row3: t("card.included.row3"),
                row4: t("card.included.row4"),
                row5: t("card.included.row5"),
            },
            delivery: t("card.delivery"),
            description: t("card.description"),
        },
        included: {
            title: t("included.title"),
            services: {
                row1: {
                    title: t("included.services.row1.title"),
                    description: t("included.services.row1.description"),
                },
                row2: {
                    title: t("included.services.row2.title"),
                    description: t("included.services.row2.description"),
                },
                row3: {
                    title: t("included.services.row3.title"),
                    description: t("included.services.row3.description"),
                },
                row4: {
                    title: t("included.services.row4.title"),
                    description: t("included.services.row4.description"),
                },
                row5: {
                    title: t("included.services.row5.title"),
                    description: t("included.services.row5.description"),
                },
            },
        },
    };

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
                <ServicesClient content={content} titleLeading={titleLeading} />
            </div>
        </section>
    );
};

export default Services;
