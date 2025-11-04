"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { CircularLoading } from "respinner";
import Checkmark from "./icons/Checkmark";
import ErrorIcon from "./icons/ErrorIcon";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const Form = () => {
    const t = useTranslations("Form");
    const locale = useLocale();

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function setFormData() {
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setError(null);

        const formEl = e.currentTarget;
        const formData = new FormData(formEl);

        const body = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company") || undefined,
            phone: formData.get("phone") || undefined,
            message: formData.get("message"),
            company_website: formData.get("company_website") || "",
            locale: locale === "hr" ? "hr" : "en",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to send message.");
            }

            setStatus("success");
            formEl.reset();
            setFormData();
        } catch (err: any) {
            console.error("Form submit error:", err);
            setStatus("error");
            setFormData();
            setError(err.message || "Something went wrong.");
        }
    }

    return (
        <section className="formSection overflow-x-clip">
            <div className="overflow-hidden w-full">
                <div className="w-full flex flex-col justify-center items-center gap-[50px] pt-[3.125rem]">
                    <motion.h2 className="text-[3.125rem] text-center font-bold text-secondary" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, ease: "easeOut" }}>
                        {t("title")}
                    </motion.h2>
                    <div className="w-full flex flex-col justify-center items-center px-[clamp(1.5rem,4vw,var(--spacing-section))]">
                        <motion.div
                            className="card w-full max-w-[720px] flex flex-col justify-center items-center p-[32px]"
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[24px]">
                                    {/* Name */}
                                    <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="name" className="text-base max-[350px]:text-sm">
                                            {t("card.row1.label1")}
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="email" className="text-base max-[350px]:text-sm">
                                            {t("card.row1.label2")}
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="company" className="text-base max-[350px]:text-sm">
                                            {t("card.row2.label1")}
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="phone" className="text-base max-[350px]:text-sm">
                                            {t("card.row2.label2")}
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>

                                    {/* Details (span 2 cols on md+) */}
                                    <div className="w-full flex flex-col justify-center items-start gap-[2px] sm:col-span-2">
                                        <label htmlFor="message" className="text-base max-[350px]:text-sm">
                                            {t("card.row3.label")}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                            placeholder={t("card.row3.placeholder")}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="placeholder:max-[350px]:text-[0.8rem] resize-y w-full h-[160px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0 scrollbar"
                                        />
                                    </div>

                                    {/* Honeypot */}
                                    <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

                                    {/* Submit (span 2 cols on md+) */}
                                    <div className="w-full flex flex-col justify-center items-center pt-[8px] sm:col-span-2">
                                        <button
                                            type="submit"
                                            disabled={status === "loading" || status === "success" || status === "error"}
                                            style={
                                                status === "loading" || status === "success" || status === "error"
                                                    ? {
                                                          pointerEvents: "none",
                                                          cursor: "default",
                                                          boxShadow: "none",
                                                          transition: "none",
                                                          transform: "none",
                                                      }
                                                    : undefined
                                            }
                                            className="btn-primary text-[1.563rem] px-[30px] py-[18px]"
                                        >
                                            {status === "loading" ? (
                                                <CircularLoading size={37.51} stroke="var(--color-fg)" />
                                            ) : status === "success" ? (
                                                <Checkmark />
                                            ) : status === "error" ? (
                                                <ErrorIcon />
                                            ) : (
                                                t("card.button")
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
                <div className="h-[175px] w-full relative">
                    <img
                        src="/PurpleBlob.svg"
                        alt="Purple Blob"
                        className="animate-breathe blob top-[-500%] left-[45%] opacity-70 scale-x-60 scale-y-200 rotate-[20deg] max-[900px]:top-[-420%] max-[800px]:top-[-360%] max-[700px]:top-[-300%] max-[640px]:top-[-260%] max-[540px]:top-[-200%] max-[500px]:scale-y-290 max-[500px]:scale-x-90 max-[370px]:top-[-120%]"
                    />
                    <img
                        src="/GoldBlob.svg"
                        alt="Gold Blob"
                        style={{ animationDelay: "3s" }}
                        className="animate-breathe blob top-[-620%] left-[-15%] opacity-60 scale-x-70 scale-y-100 rotate-[-50deg] max-[1620px]:left-[-25%] max-[1380px]:left-[-35%] max-[900px]:left-[-40%] max-[900px]:top-[-560%] max-[710px]:top-[-520%] max-[640px]:top-[-600%] max-[640px]:scale-y-190 max-[640px]:scale-x-90 max-[520px]:top-[-560%] max-[430px]:top-[-520%] max-[350px]:top-[-500%]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Form;
