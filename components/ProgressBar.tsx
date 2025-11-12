'use client';

import { getInvertAnimation } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type ProgressBarProps = {
    invert: boolean
}

export default function ProgressBar(props: ProgressBarProps) {
    const {invert} = props;
    const [isDragging, setIsDragging] = useState(false);
    const progressBarRef = useRef<HTMLDivElement | null>(null)

    const updateScrollFromMouse = (mouseY: number) => {
        const progressBar = progressBarRef.current;

        if (!progressBar) {
            return;
        }

        const rect = progressBar.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, mouseY / rect.height));
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        window.scrollTo({
            top: percentage * maxScroll,
            behavior: 'auto'
        });
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);

        updateScrollFromMouse(e.clientY);
    };

    useEffect(() => {
        if (!isDragging) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            updateScrollFromMouse(e.clientY);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div 
            ref={progressBarRef}
            onMouseDown={handleMouseDown}
            className={`${getInvertAnimation(invert)} fixed top-0 right-0 h-full w-[8px] bg-(--border-muted)`}
        >
            <div 
                className="animate-progress h-0 border-4 border-(--border) "
            />
        </div>
    );
}