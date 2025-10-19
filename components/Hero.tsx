import Button from "./Button";

export default function Hero() {
    return (
        <section className="pt-[calc(var(--section-y)+60px)] pb-[var(--section-y)] px-6 md:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div>
                    <h1 className="font-display text-5xl leading-tight tracking-tight">
                        Hi, I'm Rino.
                        <br />
                        Frontend Developer
                    </h1>
                    <p className="mt-6 text-lg text-muted">Short value proposition subheading that matches your Figma Main frame text exactly.</p>
                    <div className="mt-8 flex items-center gap-4">
                        <Button>Primary CTA</Button>
                        <Button variant="ghost">Secondary</Button>
                    </div>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-fg/5" />
            </div>
        </section>
    );
}
