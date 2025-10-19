import { JSX, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type SectionProps = PropsWithChildren<{
    className?: string;
    id?: string;
    as?: keyof JSX.IntrinsicElements;
}>;

export default function Section({ className, children, id, as: Tag = "section" }: SectionProps) {
    return (
        <Tag id={id} className={cn("px-6 md:px-8", className)}>
            <div className="mx-auto w-full container" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
                {children}
            </div>
        </Tag>
    );
}
