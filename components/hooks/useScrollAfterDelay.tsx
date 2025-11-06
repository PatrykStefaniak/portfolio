"use client";

import { useRef } from "react";

type useScrollAfterDelayProps = {
    selector: string
    delay?: number
    block?: ScrollLogicalPosition
}

export default function useScrollAfterDelay(props: useScrollAfterDelayProps) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const {selector, delay = 1000, block = "center"} = props;

    const doScroll = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            document.querySelector(selector)?.scrollIntoView({
                behavior: "smooth",
                block: block
            });
        }, delay);
    };

    return doScroll;
}