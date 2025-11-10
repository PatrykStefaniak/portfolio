"use client";

import DownChevron from "./ui/DownChevron";
import useScrollAfterDelay from "./hooks/useScrollAfterDelay";

export default function Welcome() {
    const doScroll = useScrollAfterDelay({selector: "#separator"});

    const onContinueDown = () => {
        doScroll();
    };

    return (
        <section className="w-[90%] sm:w-[55%] mx-auto p-px h-[100vh]">
            <div className="animate-slide-fade-in sm:w-[70vh] mx-auto py-15 px-5 sm:p-20 bg-(--bg-light)/90 text-(--text) text-center mt-[25vh] rounded-xl shadow-2xl border-t border-(--border-muted)">
                <h1 className="text-2xl font-semibold text-shadow-lg text-shadow-(color:--highlight)">Hi, I&apos;m Patryk, nice to meet you!</h1>
                <div className="text-lg mt-4">
                    This is my one portfolio to rule them all!
                </div>
            </div>
            <DownChevron
                handler={onContinueDown}
            />
        </section>
    );
}