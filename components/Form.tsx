const Form = () => {
    return (
        <div className="formSection">
            <div className="overflow-hidden w-full">
                <div className="flex flex-col justify-center items-center gap-[50px] pt-[140px]">
                    <h2 className="text-[3.125rem] font-bold text-secondary">Contact Me</h2>
                    <div className="card flex flex-col justify-center items-center p-[32px]">
                        <form method="POST" action="/api/contact">
                            <div className="flex flex-col justify-start items-start gap-[24px]">
                                <div className="flex justify-center items-center gap-[16px]">
                                    <div className="w-[320px] flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="name" className="text-base">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>

                                    <div className="w-[320px] flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="email" className="text-base">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-[16px]">
                                    <div className="w-[320px] flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="company" className="text-base">
                                            Company name (optional)
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>

                                    <div className="w-[320px] flex flex-col justify-center items-start gap-[2px]">
                                        <label htmlFor="phone" className="text-base">
                                            Phone number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex flex-col justify-center items-start gap-[2px]">
                                    <label htmlFor="message" className="text-base">
                                        Details
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        placeholder="Enter the website details"
                                        className="resize-y w-full h-[160px] rounded-[8px] px-[16px] py-[12px] border-1 border-muted outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] focus:ring-offset-0 scrollbar"
                                    ></textarea>
                                </div>
                                {/* Honeypot (spam protection) */}
                                <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

                                <div className="w-full flex flex-col justify-center items-center pt-[8px]">
                                    <button type="submit" className="btn-primary text-[1.563rem] px-[30px] py-[18px]">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="h-[175px] w-full relative">
                    <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[-500%] left-[45%] opacity-70 scale-x-60 scale-y-200 rotate-[20deg]" />
                    <img
                        src="/GoldBlob.svg"
                        alt="Gold Blob"
                        style={{ animationDelay: "3s" }}
                        className="animate-breathe blob top-[-620%] left-[-15%] opacity-60 scale-x-70 scale-y-100 rotate-[-50deg]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Form;
