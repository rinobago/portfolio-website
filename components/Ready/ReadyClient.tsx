"use client";

import { motion } from "motion/react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

type ReadyClientProps = {
    content: {
        fg1: string;
        gold: string;
        fg2: string;
        purple: string;
    };
};

const ReadyClient = ({ content }: ReadyClientProps) => {
    const { fg1, gold, fg2, purple } = content;

    return (
        <div className="flex flex-col justify-center items-center gap-[5.625rem] md:gap-44">
            <motion.p
                className="text-[1.75rem] md:text-[2.5rem] text-center w-full"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.6 }}
            >
                {fg1}
                <span className="font-bold text-gold">{gold}</span>
                {fg2}
                <span className="font-bold text-primary">{purple}</span>.
            </motion.p>
            <div className="flex flex-col justify-center items-center gap-[0.625rem] md:gap-4">
                <motion.img
                    src="/AvatarPurpleCircle.svg"
                    alt="Purple circle"
                    className="w-[2.188rem] h-[2.188rem] md:w-[4.063rem] md:h-[4.063rem] select-none"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: "all", once: true }}
                    transition={{ duration: 1 }}
                />
                <motion.img
                    src="/AvatarPurpleCircle.svg"
                    alt="Purple circle"
                    className="w-[2.028rem] h-[2.028rem] md:w-[3.75rem] md:h-[3.75rem] select-none"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: "all", once: true }}
                    transition={{ duration: 1 }}
                />
                <motion.img
                    src="/AvatarPurpleCircle.svg"
                    alt="Purple circle"
                    className="w-[1.829rem] h-[1.829rem] md:w-[3.438rem] md:h-[3.438rem] select-none"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: "all", once: true }}
                    transition={{ duration: 1 }}
                />
                <motion.img
                    src="/AvatarPurpleCircle.svg"
                    alt="Purple circle"
                    className="w-[1.591rem] h-[1.591rem] md:w-[3.125rem] md:h-[3.125rem] select-none"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: "all", once: true }}
                    transition={{ duration: 1 }}
                />
                <motion.img
                    src="/AvatarPurpleCircle.svg"
                    alt="Purple circle"
                    className="w-[1.353rem] h-[1.353rem] md:w-[2.813rem] md:h-[2.813rem] select-none"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: "all", once: true }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );
};

export default ReadyClient;
