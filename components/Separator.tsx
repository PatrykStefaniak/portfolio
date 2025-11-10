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
            <div ref={elRef} className="w-[90vw] sm:w-[65vw] mx-auto p-px">
                {isInView && (
                    <div className="animate-fade-in sm:w-[70vh] mx-auto py-[5vh] sm:py-[10vh] sm:mt-[45vh] mt-[50vh] sm:mt-[40vh] px-5 sm:p-20 bg-(--bg-lighter)/30 text-(--text) text-center text-lg mt-[25vh] rounded-xl shadow-2xl border-t border-(--border-muted)">
                        <h2 className="text-md">I love picking up new challanges, especially logical ones. Doesn&apos;t matter if it&apos;s a complex layout, 3D web app, or a leet code style algorithm, solving those types of challanges is really fun and rewarding to me</h2>
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