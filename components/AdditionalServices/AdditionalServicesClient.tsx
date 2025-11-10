"use client";

import { motion } from "motion/react";
import DropdownRow from "./DropdownRow";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

type Row = {
    title: string;
    desc: string;
};

type AdditionalServicesClientProps = {
    content: {
        title: string;
        rows: Row[];
    };
};

const AdditionalServicesClient = ({ content }: AdditionalServicesClientProps) => {
    const { title, rows } = content;

    return (
        <div className="max-w-[1150px] w-full flex flex-col justify-center items-center gap-[clamp(40px,6vw,115px)]">
            <motion.h2
                className="text-[2.5rem] text-center md:text-[3.125rem] font-bold text-secondary"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h2>
            <motion.ul
                className="card w-full flex flex-col justify-center items-center gap-[10px] px-[25px] py-[clamp(10px,3vw,25px)] [&>li:last-child]:border-none"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.6 }}
            >
                {rows.map((row, index) => (
                    <DropdownRow key={index} title={row.title} desc={row.desc} />
                ))}
            </motion.ul>
        </div>
    );
};

export default AdditionalServicesClient;
