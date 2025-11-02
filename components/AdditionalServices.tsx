"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import DropdownRow from "./DropdownRow";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const AdditionalServices = () => {
    const t = useTranslations("AdditionalServices");

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
                <div className="max-w-[1150px] w-full flex flex-col justify-center items-center gap-[clamp(40px,6vw,115px)]">
                    <motion.h2
                        className="text-[2.5rem] text-center md:text-[3.125rem] font-bold text-secondary"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.ul
                        className="card w-full flex flex-col justify-center items-center gap-[10px] px-[25px] py-[clamp(10px,3vw,25px)] [&>li:last-child]:border-none"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.2, once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <DropdownRow title={t("card.row1.title")} desc={t("card.row1.description")} />
                        <DropdownRow title={t("card.row2.title")} desc={t("card.row2.description")} />
                        <DropdownRow title={t("card.row3.title")} desc={t("card.row3.description")} />
                        <DropdownRow title={t("card.row4.title")} desc={t("card.row4.description")} />
                        <DropdownRow title={t("card.row5.title")} desc={t("card.row5.description")} />
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices;
