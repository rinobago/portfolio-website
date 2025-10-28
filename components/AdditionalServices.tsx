import DropdownRow from "./DropdownRow";

const AdditionalServices = () => {
    return (
        <section className="section">
            <div className="additionalServices relative">
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    className="animate-breathe blob top-[30%] left-[-38%] scale-x-70 rotate-[-15deg] max-[1350px]:top-[30%] max-[1350px]:left-[-50%] max-[1100px]:top-[45%] max-[1100px]:left-[-40%] max-[950px]:top-[50%] max-[950px]:left-[-40%] max-[850px]:top-[60%] max-[850px]:left-[-40%] max-[768px]:top-[40%] max-[768px]:left-[-40%] max-[650px]:top-[55%] max-[650px]:left-[-40%] max-[550px]:top-[65%] max-[550px]:left-[-40%] max-[550px]:scale-x-120 max-[550px]:scale-y-110 max-[430px]:top-[75%] max-[430px]:left-[-40%] max-[330px]:top-[85%] max-[330px]:left-[-40%] max-[330px]:scale-x-150 max-[330px]:scale-y-130"
                />
                <img
                    src="/PurpleBlob.svg"
                    alt="Purple Blob"
                    style={{ animationDelay: "2s" }}
                    className="animate-breathe blob top-[-35%] left-[47%] scale-x-70 rotate-[-15deg] max-[850px]:top-[-30%] max-[850px]:left-[47%] max-[550px]:top-[-20%] max-[550px]:left-[47%] max-[550px]:scale-x-120 max-[550px]:scale-y-150 max-[420px]:top-[0%] max-[420px]:left-[47%]"
                />
                <div className="max-w-[1150px] w-full flex flex-col justify-center items-center gap-[clamp(40px,6vw,115px)]">
                    <h2 className="text-[2.5rem] text-center md:text-[3.125rem] font-bold text-secondary">Additional Services</h2>
                    <ul className="card w-full flex flex-col justify-center items-center gap-[10px] px-[25px] py-[clamp(10px,3vw,25px)] [&>li:last-child]:border-none">
                        <DropdownRow
                            title="Website Maintenance"
                            desc="Keep your site fast, secure, and up-to-date with monthly performance checks, content updates, and continuous technical support."
                        />
                        <DropdownRow title="SEO Optimization" desc="Monthly boost your visibility and ranking on Google with targeted keyword setup, metadata tuning, and site speed optimization." />
                        <DropdownRow
                            title="AI Chatbot Integration"
                            desc="Add a custom AI-powered chatbot that greets visitors, answers questions, or captures leads - perfect for businesses, clinics, or service providers."
                        />
                        <DropdownRow
                            title="Analytics & Tracking"
                            desc="I'll set up Google Analytics, visitor tracking, and performance dashboards so you know exactly how your audience interacts with your site - and where you're converting best."
                        />
                        <DropdownRow
                            title="Motion & Interaction Design"
                            desc="Smooth scroll effects, fade-ins, and subtle animations that make your website feel modern and alive - designed to enhance user engagement and perceived quality."
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices;
