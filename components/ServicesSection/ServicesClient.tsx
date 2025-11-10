"use client";

import { motion } from "motion/react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

type ServicesContent = {
    title: string;
    description: {
        row1: string;
        row2: string;
    };
    card: {
        title: string;
        price: string;
        included: {
            row1: string;
            row2: string;
            row3: string;
            row4: string;
            row5: string;
        };
        delivery: string;
        description: string;
    };
    included: {
        title: string;
        services: {
            row1: {
                title: string;
                description: string;
            };
            row2: {
                title: string;
                description: string;
            };
            row3: {
                title: string;
                description: string;
            };
            row4: {
                title: string;
                description: string;
            };
            row5: {
                title: string;
                description: string;
            };
        };
    };
};

type ServicesClientProps = {
    content: ServicesContent;
    titleLeading: string;
};

const ServicesClient = ({ content, titleLeading }: ServicesClientProps) => {
    const { title, description, card, included } = content;

    return (
        <div className="w-full flex flex-col justify-center items-center gap-[115px]">
            <motion.div
                className="w-full flex flex-col justify-center items-center gap-[0.75rem] md:gap-8 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-[2.5rem] md:text-[3.125rem] font-bold">{title}</h2>
                <p className="text-base md:text-xl text-muted w-[clamp(300px,30vw,375px)]">
                    {description.row1}
                    {description.row2}
                </p>
            </motion.div>
            <motion.div
                className="card w-full max-w-[658px] flex flex-col justify-center items-center gap-[45px] px-[25px] max-[350px]:px-[15px] py-[35px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="w-full flex flex-col justify-center items-center gap-[25px]">
                    <h3 className="font-semibold text-[1.875rem]">{card.title}</h3>
                    <h3 className="font-semibold text-[1.875rem]">{card.price}</h3>
                    <ul className="w-full flex flex-col justify-start text-base max-[350px]:text-[0.875rem] text-muted">
                        <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                            <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                            <p>{card.included.row1}</p>
                        </li>
                        <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                            <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                            <p>{card.included.row2}</p>
                        </li>
                        <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                            <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                            <p>{card.included.row3}</p>
                        </li>
                        <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                            <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                            <p>{card.included.row4}</p>
                        </li>
                        <li className="flex gap-[10px] py-[15px] border-b-1 border-muted">
                            <img src="/Checkmark.svg" alt="checkmark" className="max-[350px]:aspect-square max-[350px]:w-[16px] select-none" />
                            <p>{card.included.row5}</p>
                        </li>
                    </ul>
                    <p className="text-xl max-[350px]:text-[1rem] text-fg w-full">{card.delivery}</p>
                </div>
                <p className="text-xl max-[350px]:text-[1rem] text-secondary text-center w-full">{card.description}</p>
            </motion.div>
            <div className="w-full flex flex-col justify-center items-center gap-[54px]">
                <motion.h2
                    className={`text-[2.5rem] md:text-[3.125rem] ${titleLeading} text-center font-bold`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.5, once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {included.title}
                </motion.h2>
                <ul className="w-full max-w-[845px] flex flex-col justify-start gap-[15px] text-[0.875rem] md:text-xl text-fg">
                    <motion.li
                        className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/Checkmark.svg" alt="checkmark" />
                        <p>
                            <span className="font-bold text-primary">{included.services.row1.title}</span>
                            {included.services.row1.description}
                        </p>
                    </motion.li>
                    <motion.li
                        className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/Checkmark.svg" alt="checkmark" />
                        <p>
                            <span className="font-bold text-primary">{included.services.row2.title}</span>
                            {included.services.row2.description}
                        </p>
                    </motion.li>
                    <motion.li
                        className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/Checkmark.svg" alt="checkmark" />
                        <p>
                            <span className="font-bold text-primary">{included.services.row3.title}</span>
                            {included.services.row3.description}
                        </p>
                    </motion.li>
                    <motion.li
                        className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/Checkmark.svg" alt="checkmark" />
                        <p>
                            <span className="font-bold text-primary">{included.services.row4.title}</span>
                            {included.services.row4.description}
                        </p>
                    </motion.li>
                    <motion.li
                        className="w-full h-auto flex gap-[10px] px-[10px] py-[10px]"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/Checkmark.svg" alt="checkmark" />
                        <p>
                            <span className="font-bold text-primary">{included.services.row5.title}</span>
                            {included.services.row5.description}
                        </p>
                    </motion.li>
                </ul>
            </div>
        </div>
    );
};

export default ServicesClient;
