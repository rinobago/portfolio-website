import { useEffect, useRef } from "react";

export function useBodyScrollLock(open: boolean) {
    const scrollYRef = useRef(0);

    useEffect(() => {
        const body = document.body;

        if (open) {
            // save current scroll
            scrollYRef.current = window.scrollY;

            // lock body
            body.style.position = "fixed";
            body.style.top = `-${scrollYRef.current}px`;
            body.style.left = "0";
            body.style.right = "0";
            body.style.width = "100%";
            body.style.overflow = "hidden"; // optional; prevents iOS rubber-banding
        } else {
            // restore
            const y = -parseInt(body.style.top || "0", 10) || 0;
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.width = "";
            body.style.overflow = "";
            if (y) window.scrollTo(0, y);
        }

        return () => {
            // ensure cleanup even if component unmounts while open
            const y = -parseInt(body.style.top || "0", 10) || 0;
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.width = "";
            body.style.overflow = "";
            if (y) window.scrollTo(0, y);
        };
    }, [open]);
}
