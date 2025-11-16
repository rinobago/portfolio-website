"use client";

import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import { CircularLoading } from "respinner";
import Checkmark from "../icons/Checkmark";
import ErrorIcon from "../icons/ErrorIcon";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

type FormContent = {
    title: string;
    labels: {
        name: string;
        email: string;
        company: string;
        phone: string;
        message: string;
    };
    placeholders: {
        message: string;
    };
    button: string;
};

type FormClientProps = {
    content: FormContent;
    locale: string;
};

const FormClient = ({ content, locale }: FormClientProps) => {
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

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
            locale,
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
        <div className="w-full flex flex-col justify-center items-center gap-[50px] pt-[3.125rem]">
            <motion.h1 className="text-[3.125rem] text-center font-bold text-secondary" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, ease: "easeOut" }}>
                {content.title}
            </motion.h1>
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
                            <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                <label htmlFor="name" className="text-base max-[350px]:text-sm">
                                    {content.labels.name}
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
                            <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                <label htmlFor="email" className="text-base max-[350px]:text-sm">
                                    {content.labels.email}
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
                            <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                <label htmlFor="company" className="text-base max-[350px]:text-sm">
                                    {content.labels.company}
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
                            <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                <label htmlFor="phone" className="text-base max-[350px]:text-sm">
                                    {content.labels.phone}
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
                            <div className="w-full flex flex-col justify-center items-start gap-[2px] sm:col-span-2">
                                <label htmlFor="message" className="text-base max-[350px]:text-sm">
                                    {content.labels.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    placeholder={content.placeholders.message}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="placeholder:max-[350px]:text-[0.8rem] resize-y w-full h-[160px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0 scrollbar"
                                />
                            </div>
                            <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
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
                                        content.button
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                    {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
                </motion.div>
            </div>
        </div>
    );
};

export default FormClient;
