const AdditionalServices = () => {
    return (
        <section className="section">
            <div className="additionalServices relative">
                <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[30%] left-[-38%] scale-x-70 rotate-[-15deg]" />
                <img src="/PurpleBlob.svg" alt="Purple Blob" style={{ animationDelay: "2s" }} className="animate-breathe blob top-[-35%] left-[47%] scale-x-70 rotate-[-15deg]" />
                <div className="max-w-[1150px] w-full flex flex-col justify-center items-center gap-[clamp(40px,6vw,115px)]">
                    <h2 className="text-[2.5rem] text-center md:text-[3.125rem] font-bold text-secondary">Additional Services</h2>
                    <ul className="card w-full flex flex-col justify-center items-center gap-[10px] px-[25px] py-[clamp(10px,3vw,25px)]">
                        <li className="h-auto w-full flex justify-between items-center border-b-1 border-muted px-[5px] py-[15px] md:px-[20px] md:py-[20px]">
                            <h3 className="w-[436px] text-left font-bold text-[clamp(1rem,3vw,1.875rem)]">Website Maintenance</h3>
                            <p className="hidden md:block text-base text-accent w-[488px] h-auto">
                                Keep your site fast, secure, and up-to-date with monthly performance checks, content updates, and continuous technical support.
                            </p>
                            <img src="/MenuArrowDown.svg" alt="Menu Arrow Down" className="w-[11.6px] h-[6.1px]" />
                        </li>
                        <li className="h-auto w-full flex justify-between items-center border-b-1 border-muted px-[5px] py-[15px] md:px-[20px] md:py-[20px]">
                            <h3 className="w-[436px] text-left font-bold text-[clamp(1rem,3vw,1.875rem)]">SEO Optimization</h3>
                            <p className="hidden md:block text-base text-accent w-[488px] h-auto">
                                Monthly boost your visibility and ranking on Google with targeted keyword setup, metadata tuning, and site speed optimization.
                            </p>
                            <img src="/MenuArrowDown.svg" alt="Menu Arrow Down" className="w-[11.6px] h-[6.1px]" />
                        </li>
                        <li className="h-auto w-full flex justify-between items-center border-b-1 border-muted px-[5px] py-[15px] md:px-[20px] md:py-[20px]">
                            <h3 className="w-[436px] text-left font-bold text-[clamp(1rem,3vw,1.875rem)]">AI Chatbot Integration</h3>
                            <p className="hidden md:block text-base text-accent w-[488px] h-auto">
                                Add a custom AI-powered chatbot that greets visitors, answers questions, or captures leads - perfect for businesses, clinics, or service providers.
                            </p>
                            <img src="/MenuArrowDown.svg" alt="Menu Arrow Down" className="w-[11.6px] h-[6.1px]" />
                        </li>
                        <li className="h-auto w-full flex justify-between items-center border-b-1 border-muted px-[5px] py-[15px] md:px-[20px] md:py-[20px]">
                            <h3 className="w-[436px] text-left font-bold text-[clamp(1rem,3vw,1.875rem)]">Analytics & Tracking</h3>
                            <p className="hidden md:block text-base text-accent w-[488px] h-auto">
                                I'll set up Google Analytics, visitor tracking, and performance dashboards so you know exactly how your audience interacts with your site - and where you're converting
                                best.
                            </p>
                            <img src="/MenuArrowDown.svg" alt="Menu Arrow Down" className="w-[11.6px] h-[6.1px]" />
                        </li>
                        <li className="h-auto w-full flex justify-between items-center px-[5px] py-[15px] md:px-[20px] md:py-[20px]">
                            <h3 className="w-[436px] text-left font-bold text-[clamp(1rem,3vw,1.875rem)]">Motion & Interaction Design</h3>
                            <p className="hidden md:block text-base text-accent w-[488px] h-auto">
                                Smooth scroll effects, fade-ins, and subtle animations that make your website feel modern and alive - designed to enhance user engagement and perceived quality.
                            </p>
                            <img src="/MenuArrowDown.svg" alt="Menu Arrow Down" className="w-[11.6px] h-[6.1px]" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices;
