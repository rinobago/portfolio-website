import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
    const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg";
    const variants = {
        primary: "bg-primary text-white hover:opacity-90 focus:ring-primary",
        secondary: "bg-secondary text-white hover:opacity-90 focus:ring-secondary",
        ghost: "bg-transparent text-fg hover:bg-fg/5 focus:ring-fg/20",
    };

    return <button className={cn(base, variants[variant], className)} {...props} />;
}
