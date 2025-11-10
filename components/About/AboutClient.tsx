"use client";

import { motion } from "motion/react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

type AboutContent = {
    card1: {
        p1: {
            fg: string;
            impress: string;
            and: string;
            perform: string;
        };
        p2: {
            fg1: string;
            face: string;
            fg2: string;
        };
        p3: {
            fg1: string;
            bold: string;
            fg2: string;
            clients: string;
        };
    };
    card2: {
        p1: {
            fg: string;
            brand: string;
            goals: string;
            bold: string;
        };
        p2: {
            clutter: string;
            fg: string;
            gold: string;
            your: string;
        };
    };
};

type AboutClientProps = {
    content: AboutContent;
};

const AboutClient = ({ content }: AboutClientProps) => {
    const { card1, card2 } = content;

    return (
        <motion.div
            className="w-full max-[867]:text-[clamp(1rem,2.3vw,1.25rem)] max-[768]:text-[clamp(1rem,4vw,1.25rem)] justify-center items-center justify-items-stretch grid grid-cols-1 grid-rows-[360px] md:grid-cols-[minmax(0,485px)_minmax(0,485px)] gap-[25px]"
            variants={fadeUp}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="card h-full min-h-[360px] flex flex-col gap-6 justify-center items-center py-[clamp(10px,4vw,15px)] px-[clamp(15px,4vw,25px)] break-words">
                <p>
                    {card1.p1.fg}
                    <span className="font-bold text-secondary">{card1.p1.impress}</span>
                    {card1.p1.and}
                    <span className="font-bold text-secondary">{card1.p1.perform}</span>.
                </p>
                <p>
                    {card1.p2.fg1}
                    <span className="font-bold text-gold">{card1.p2.face}</span>
                    {card1.p2.fg2}
                </p>
                <p>
                    {card1.p3.fg1}
                    <span className="font-bold">{card1.p3.bold}</span>
                    {card1.p3.fg2}
                    <span className="font-bold text-secondary">{card1.p3.clients}</span>.
                </p>
            </div>
            <div className="card h-full min-h-[360px] flex flex-col gap-6 justify-center items-center py-[10px] px-[15px] sm:py-[15px] sm:px-[25px] break-words">
                <p>
                    {card2.p1.fg}
                    <span className="font-bold text-secondary">{card2.p1.brand}</span>
                    {card2.p1.goals}
                    <span className="font-bold">{card2.p1.bold}</span>
                </p>
                <p>
                    <span className="font-bold text-secondary">{card2.p2.clutter}</span>
                    {card2.p2.fg}
                    <span className="font-bold text-gold">{card2.p2.gold}</span>
                    {card2.p2.your}
                </p>
            </div>
        </motion.div>
    );
};

export default AboutClient;
