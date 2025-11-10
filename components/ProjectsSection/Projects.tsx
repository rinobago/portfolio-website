import { getTranslations } from "next-intl/server";
import ProjectsClient from "./ProjectsClient";

const Projects = async () => {
    const t = await getTranslations("Projects");

    const content = {
        title: t("title"),
        description: t("description"),
        projectName: t("projectName"),
    };

    return (
        <section className="section">
            <div id="projects" className="projects mb-[213px] md:mb-[330px] relative scroll-mt-[3rem] md:scroll-mt-[7rem]">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[-50%] left-[-20%] scale-x-85 scale-y-105 rotate-[30deg] max-[1140px]:top-[-40%] max-[1140px]:left-[-30%] max-[1000px]:top-[-30%] max-[1000px]:left-[-35%] max-[823px]:top-[-20%] max-[823px]:left-[-40%] max-[823px]:scale-y-150 max-[823px]:scale-x-120 max-[600px]:top-[-15%] max-[600px]:left-[-40%] max-[600px]:scale-y-150 max-[600px]:scale-x-120 max-[430px]:top-[-5%] max-[430px]:left-[-40%] max-[430px]:scale-x-110 max-[390px]:top-[20%] max-[390px]:left-[-40%]"
                />
                <img
                    src="/GoldBlob.svg"
                    alt="Gold Blob"
                    style={{ animationDelay: "3s" }}
                    className="animate-breathe blob top-[5%] left-[25%] scale-x-50 scale-y-80 rotate-[60deg] max-[1140px]:top-[10%] max-[1140px]:left-[25%] max-[1000px]:top-[30%] max-[1000px]:left-[35%] max-[823px]:top-[50%] max-[823px]:left-[40%] max-[823px]:scale-y-110 max-[823px]:scale-x-90 max-[600px]:top-[50%] max-[600px]:left-[40%] max-[600px]:scale-y-150 max-[600px]:scale-x-120 max-[430px]:top-[50%] max-[430px]:left-[30%] max-[430px]:scale-x-90 max-[390px]:top-[60%] max-[390px]:left-[40%]"
                />
                <ProjectsClient content={content} />
            </div>
        </section>
    );
};

export default Projects;
