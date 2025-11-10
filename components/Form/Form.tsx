import { getLocale, getTranslations } from "next-intl/server";
import FormClient from "./FormClient";

const Form = async () => {
    const t = await getTranslations("Form");
    const locale = await getLocale();

    const normalizedLocale = locale === "hr" ? "hr" : "en";

    const content = {
        title: t("title"),
        labels: {
            name: t("card.row1.label1"),
            email: t("card.row1.label2"),
            company: t("card.row2.label1"),
            phone: t("card.row2.label2"),
            message: t("card.row3.label"),
        },
        placeholders: {
            message: t("card.row3.placeholder"),
        },
        button: t("card.button"),
    };

    return (
        <section className="formSection overflow-x-clip">
            <div className="overflow-hidden w-full">
                <FormClient content={content} locale={normalizedLocale} />
                <div className="h-[175px] w-full relative">
                    <img
                        src="/PurpleBlob.svg"
                        alt="Purple Blob"
                        className="animate-breathe blob top-[-500%] left-[45%] opacity-70 scale-x-60 scale-y-200 rotate-[20deg] max-[900px]:top-[-420%] max-[800px]:top-[-360%] max-[700px]:top-[-300%] max-[640px]:top-[-260%] max-[540px]:top-[-200%] max-[500px]:scale-y-290 max-[500px]:scale-x-90 max-[370px]:top-[-120%]"
                    />
                    <img
                        src="/GoldBlob.svg"
                        alt="Gold Blob"
                        style={{ animationDelay: "3s" }}
                        className="animate-breathe blob top-[-620%] left-[-15%] opacity-60 scale-x-70 scale-y-100 rotate-[-50deg] max-[1620px]:left-[-25%] max-[1380px]:left-[-35%] max-[900px]:left-[-40%] max-[900px]:top-[-560%] max-[710px]:top-[-520%] max-[640px]:top-[-600%] max-[640px]:scale-y-190 max-[640px]:scale-x-90 max-[520px]:top-[-560%] max-[430px]:top-[-520%] max-[350px]:top-[-500%]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Form;
