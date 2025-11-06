'use client';

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type DownChevronProps = {
    handler: () => void
    isLight?: boolean
};

export default function DownChevron(props: DownChevronProps) {
    const [animate, setAnimate] = useState(false);
    const {handler, isLight} = props;

    const handleClick = () => {
        setAnimate(true);
        handler();
    };

    useEffect(() => {
        if (animate) {
            const timeout = setTimeout(() => {
                setAnimate(false);
            }, 2000);

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [animate]);

    const animation = animate ? "animate-chevron-fly-down" : "";
    const bgColor = isLight ? "bg-(--bg)/50" : "bg-(--bg-dark)/90";

    return (
        <div className="animate-fade-in" style={{ animationDuration: "6s" }}>
            <div
                className={`${animation} ${bgColor} animate-bounce rounded-full w-14 h-14 mx-auto mt-[20vh] flex justify-center items-center cursor-pointer hover:scale-120`}
                onClick={handleClick}
            >
                <ChevronDown color={"var(--highlight)"} />
                <ChevronDown
                    className="absolute hover:animate-ping"
                    color={"var(--highlight)"}
                />
            </div>
        </div>
    );
}