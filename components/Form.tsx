import { useTranslations } from "next-intl";

const Form = () => {
    const t = useTranslations("Form");

    return (
        <section className="formSection overflow-clip">
            <div className="overflow-hidden w-full">
                <div className="w-full flex flex-col justify-center items-center gap-[50px] pt-[3.125rem]">
                    <h2 className="text-[3.125rem] text-center font-bold text-secondary">{t("title")}</h2>
                    <div className="w-full flex flex-col justify-center items-center px-[clamp(1.5rem,4vw,var(--spacing-section))]">
                        <div className="card w-full max-w-[720px] flex flex-col justify-center items-center p-[32px]">
                            <form method="POST" action="/api/contact" className="w-full">
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
                                            className="placeholder:max-[350px]:text-[0.8rem] resize-y w-full h-[160px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0 scrollbar"
                                        />
                                    </div>

                                    {/* Honeypot */}
                                    <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

                                    {/* Submit (span 2 cols on md+) */}
                                    <div className="w-full flex flex-col justify-center items-center pt-[8px] sm:col-span-2">
                                        <button type="submit" className="btn-primary text-[1.563rem] px-[30px] py-[18px]">
                                            {t("card.button")}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
