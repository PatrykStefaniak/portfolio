import { RefObject, useEffect, useState } from "react";

export default function useIntersectionObserver(ref: RefObject<HTMLElement | null>) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0 }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }
    }, [ref]);

    return isInView;
}