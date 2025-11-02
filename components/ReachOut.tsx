"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const ReachOut = () => {
    const t = useTranslations("ReachOut");
    const locale = useLocale();

    const divWidth = locale === "hr" ? "w-[350px]" : "w-[300px]";

    return (
        <section className="section">
            <div className="reachOut mb-[95px] md:mb-44">
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[50px]">
                    <p className={`text-[clamp(1.75rem,5vw,2.5rem)] text-left ${divWidth} [@media(min-width:570px)]:w-full leading-[clamp(35px,5vw,50px)]`}>
                        <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ amount: "all", once: true }} transition={{ duration: 0.6 }}>
                            {t("text.row1")}
                        </motion.span>
                        <br />
                        <motion.span className="text-primary" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ amount: "all", once: true }} transition={{ duration: 0.6 }}>
                            {t("text.row2")}
                        </motion.span>
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
