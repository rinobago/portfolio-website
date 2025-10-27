const ReachOut = () => {
    return (
        <section className="section">
            <div className="reachOut mb-[95px] md:mb-44">
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[50px]">
                    <p className="text-[clamp(1.75rem,5vw,2.5rem)] text-left w-[300px] [@media(min-width:570px)]:w-full leading-[clamp(35px,5vw,50px)]">
                        Ready to take your business online? <br />
                        <span className="text-primary">Let's talk.</span>
                    </p>
                    <a href="/contact" className="btn-primary">
                        Reach Out
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReachOut;
