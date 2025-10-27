const CtaSection = () => {
    return (
        <div className="ctaSection pt-[213px] md:pt-[330px]">
            <div className="w-full flex flex-col justify-center items-center text-center overflow-hidden">
                <p className="text-[clamp(1.875rem,6.5vw,3.125rem)] mb-[20px] md:mb-[75px] px-[20px]">
                    Interested in working with <span className="font-bold text-secondary">me</span>?
                </p>
                <a href="/contact" className="btn-primary text-xl md:text-[1.563rem] px-[30px] py-[25px]">
                    Let's make it happen!
                </a>
                <div className="relative h-[213px] md:h-[330px] w-full">
                    <img src="/PurpleBlob.svg" alt="Purple Blob" className="animate-breathe blob top-[-80%] left-[60%] opacity-75 scale-x-120 scale-y-110 rotate-[-30deg]" />
                    <img
                        src="/GoldBlob.svg"
                        alt="Gold Blob"
                        style={{ animationDelay: "3s" }}
                        className="animate-breathe blob top-[-80%] left-[-10%] opacity-50 scale-x-70 scale-y-100 rotate-[-75deg]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
