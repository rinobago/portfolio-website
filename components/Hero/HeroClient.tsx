"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const MotionImage = motion(Image);

type HeroClientProps = {
    content: {
        titleFg: string;
        titleColored: string;
        descriptionGreeting: string;
        descriptionBuild: string;
        descriptionModern: string;
        descriptionFast: string;
        descriptionUnforgettable: string;
        quote: string;
        work: string;
    };
    titleSize: string;
    titleLeading: string;
};

const HeroClient = ({ content, titleSize, titleLeading }: HeroClientProps) => {
    const { titleFg, titleColored, descriptionGreeting, descriptionBuild, descriptionModern, descriptionFast, descriptionUnforgettable, quote, work } = content;

    return (
        <div className="w-full h-full relative flex flex-col justify-center items-center [@media(min-width:1140px)]:flex-row [@media(min-width:1140px)]:gap-[clamp(200px,27vw,500px)] gap-[2.5rem]">
            <div className="w-full [@media(min-width:1140px)]:w-[44.188rem] flex flex-col items-center [@media(min-width:1140px)]:items-baseline gap-4">
                <motion.h1
                    className={`font-semibold text-center [@media(min-width:1140px)]:text-left ${titleSize} ${titleLeading} w-full [@media(min-width:1140px)]:w-[44.188rem]`}
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {titleFg}
                    <span className="text-primary">{titleColored}</span>
                </motion.h1>
                <motion.p
                    className="w-full text-center text-base [@media(min-width:1140px)]:text-left [@media(min-width:1140px)]:text-xl max-w-[23.438rem]"
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    {descriptionGreeting}
                    <span className="text-secondary">Rino</span>
                    {descriptionBuild}
                    <span className="font-bold">
                        <span className="text-secondary">{descriptionModern}</span>
                        {descriptionFast}
                        <span className="text-gold">{descriptionUnforgettable}</span>
                    </span>
                    .
                </motion.p>
                <div className="mt-[4.5rem] flex max-[350px]:flex-col gap-4 justify-center items-center">
                    <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}>
                        <Link href="/contact" className="btn-primary whitespace-nowrap shrink-0">
                            {quote}
                        </Link>
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}>
                        <Link href="#projects" className="btn-secondary-outline whitespace-nowrap shrink-0">
                            <div className="flex gap-[10px]">
                                <span>{work}</span>
                                <img src="/View My Work.svg" alt="arrow" className="aspect-square max-[350px]:w-[14px]" />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className="relative w-[326px] h-[326px] flex justify-center [@media(min-width:1140px)]:w-[100px] [@media(min-width:1140px)]:static">
                <div className="[@media(min-width:1140px)]:right-[0%] absolute">
                    <MotionImage
                        src="/MyPhoto.png"
                        alt="Rino Bago image"
                        width={700}
                        height={700}
                        className="w-[45vw] max-[1140px]:w-[60vw] max-w-[700px] min-w-[325px] max-[370px]:w-[85vw] max-[370px]:min-w-[278px] aspect-square"
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroClient;
