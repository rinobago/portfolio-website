import Image from "next/image";

export type Project = {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    href?: string;
};

export default function ProjectCard({ title, description, image, tags, href }: Project) {
    return (
        <a href={href} className="group block overflow-hidden rounded-2xl border border-border hover:shadow-soft transition-shadow">
            <div className="relative aspect-[16/9] bg-fg/5">
                <Image src={image} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{description}</p>
                {tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((t) => (
                            <span key={t} className="text-xs rounded-full bg-fg/5 px-2 py-1">
                                {t}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>
        </a>
    );
}
