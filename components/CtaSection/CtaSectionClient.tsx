"use client";

import { motion } from "motion/react";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

type CtaSectionClientProps = {
    fg: string;
    colored: string;
    buttonLabel: string;
};

const CtaSectionClient = ({ fg, colored, buttonLabel }: CtaSectionClientProps) => {
    return (
        <>
            <motion.p
                className="text-[clamp(1.875rem,6.5vw,3.125rem)] mb-[20px] md:mb-[75px] px-[20px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.6 }}
            >
                {fg}
                <span className="font-bold text-secondary">{colored}</span>?
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ amount: 0.5, once: true }} transition={{ duration: 0.6 }}>
                <Link href="/contact" className="max-w-[280px] md:max-w-[510px] btn-primary text-xl md:text-[1.563rem] px-[30px] py-[25px]">
                    {buttonLabel}
                </Link>
            </motion.div>
        </>
    );
};

export default CtaSectionClient;
