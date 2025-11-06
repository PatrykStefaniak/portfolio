'use client'

import { useRef } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import DownChevron from "./ui/DownChevron";
import useScrollAfterDelay from "./hooks/useScrollAfterDelay";

export default function Separator() {
    const elRef = useRef<HTMLDivElement | null>(null);
    const isInView = useIntersectionObserver(elRef);
    const doScroll = useScrollAfterDelay({selector: "#about", block: "start"});

    const onContinueDown = () => {
        doScroll();
    };

    return (
        <section
            id="separator"
            className="border-separator w-full h-[150vh] bg-linear-to-b from-(--bg)/95 from-40% via-80% via-(--bg-lighter)/90 to-(transparent)"
        >
            <div ref={elRef} className="w-[90%] sm:w-[55%] mx-auto p-px">
                {isInView && (
                    <div className="animate-fade-in sm:w-[60vh] mx-auto py-[5vh] sm:py-[10vh] sm:mt-[50vh] mt-[60vh] sm:mt-[40vh] px-5 sm:p-20 bg-(--bg-lighter)/30 text-(--text) text-center mt-[25vh] rounded-xl shadow-2xl border-t border-(--border-muted)">
                        <h2 className="text-md">I love picking up new challanges, especially logical ones. My last one was Three js, as you may be able to tell by the background!</h2>
                    </div>
                )}
            </div>
            {isInView && <DownChevron
                handler={onContinueDown}
                isLight
            />}
        </section>
    );
}