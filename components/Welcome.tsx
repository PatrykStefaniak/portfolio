"use client";

import { useRef } from "react";
import DownChevron from "./ui/DownChevron";

export default function Welcome() {
    const timeoutRef = useRef<Timeout | null>(null);

    const onContinueDown = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            document.querySelector("#separator")?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 1000);
    };

    return (
        <section className="w-[90%] sm:w-[55%] mx-auto p-px h-[100vh]">
            <div className="animate-slide-fade-in sm:w-[60vh] mx-auto py-15 px-5 sm:p-20 bg-(--bg-light)/90 text-(--text) text-center mt-[25vh] rounded-xl shadow-2xl border-t border-(--border-muted)">
                <h1 className="text-lg font-semibold">Hi, I&apos;m Patryk, nice to meet you!</h1>
                <div>
                    This is my work-in-progress portfolio website.
                </div>
            </div>
            <div className="animate-fade-in" style={{ animationDuration: "6s" }}>
                <DownChevron
                    handler={onContinueDown}
                />
            </div>
        </section>
    );
}