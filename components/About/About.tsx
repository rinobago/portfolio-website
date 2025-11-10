import { getTranslations } from "next-intl/server";
import AboutClient from "./AboutClient";

const About = async () => {
    const t = await getTranslations("About");

    const content = {
        card1: {
            p1: {
                fg: t("card1.p1.fg"),
                impress: t("card1.p1.impress"),
                and: t("card1.p1.and"),
                perform: t("card1.p1.perform"),
            },
            p2: {
                fg1: t("card1.p2.fg1"),
                face: t("card1.p2.face"),
                fg2: t("card1.p2.fg2"),
            },
            p3: {
                fg1: t("card1.p3.fg1"),
                bold: t("card1.p3.bold"),
                fg2: t("card1.p3.fg2"),
                clients: t("card1.p3.clients"),
            },
        },
        card2: {
            p1: {
                fg: t("card2.p1.fg"),
                brand: t("card2.p1.brand"),
                goals: t("card2.p1.goals"),
                bold: t("card2.p1.bold"),
            },
            p2: {
                clutter: t("card2.p2.clutter"),
                fg: t("card2.p2.fg"),
                gold: t("card2.p2.gold"),
                your: t("card2.p2.your"),
            },
        },
    };

    return (
        <section className="section">
            <div id="about" className="about text-xl text-center pb-[217px] md:pb-[330px] scroll-mt-[3rem] md:scroll-mt-[7rem]">
                <AboutClient content={content} />
            </div>
        </section>
    );
};

export default About;
