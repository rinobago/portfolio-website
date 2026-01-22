"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

type ProjectsClientProps = {
    content: {
        title: string;
        description: string;
        projectName: string;
    };
};

const ProjectsClient = ({ content }: ProjectsClientProps) => {
    const { title, description, projectName } = content;

    return (
        <>
            <motion.div
                className="flex flex-col gap-[0.75rem] md:gap-8 justify-center items-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.6 }}>
                <h2 className="text-[2.5rem] text-center md:text-[3.125rem] font-bold">{title}</h2>
                <p className="text-base text-center md:text-xl text-muted">{description}</p>
            </motion.div>
            <motion.a
                href="https://www.laurusnobilisrent.com"
                className="card relative w-[clamp(297px,80vw,680px)] aspect-[17/12] overflow-hidden mt-[85px] md:mt-[100px] hover:brightness-125 hover:scale-101 active:brightness-95 active:scale-99 cursor-pointer ease-in-out transition transform duration-50"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.6 }}>
                <motion.p
                    className="absolute z-1 font-semibold text-[clamp(1rem,3.5vw,1.75rem)] top-[15px] left-[20px]"
                    variants={fadeUp}
                    transition={{ delay: 0.2, duration: 0.6 }}>
                    {projectName}
                </motion.p>
                <Image
                    src="/LaurusNobilis.jpg"
                    alt="Laurus Nobilis apartment image for website"
                    fill
                    className="w-full h-full object-cover block opacity-[30%] select-none"
                />
            </motion.a>
        </>
    );
};

export default ProjectsClient;
