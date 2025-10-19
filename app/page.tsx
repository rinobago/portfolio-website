import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard, { Project } from "@/components/ProjectCard";
import Section from "@/components/Section";

const projects: Project[] = [
    {
        title: "Project One",
        description: "Short description that matches the Main frame copy.",
        image: "/og-image.png",
        tags: ["React", "UI"],
        href: "#",
    },
    {
        title: "Project Two",
        description: "Another sample project card.",
        image: "/og-image.png",
        tags: ["Next.js", "Tailwind"],
        href: "#",
    },
];

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Hero />

                <Section id="projects">
                    <h2 className="text-3xl font-semibold">Projects</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {projects.map((p) => (
                            <ProjectCard key={p.title} {...p} />
                        ))}
                    </div>
                </Section>

                <Section id="about">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-semibold">About</h2>
                            <p className="mt-4 text-muted">Replace this with the exact paragraph from your Main frame. Keep line lengths and spacing consistent with the design tokens.</p>
                        </div>
                        <div className="aspect-[4/3] rounded-2xl bg-fg/5" />
                    </div>
                </Section>

                <Section id="contact">
                    <h2 className="text-3xl font-semibold">Contact</h2>
                    <p className="mt-4 text-muted">
                        Email me at{" "}
                        <a className="underline" href="mailto:hello@example.com">
                            hello@example.com
                        </a>
                    </p>
                </Section>
            </main>
            <Footer />
        </>
    );
}
