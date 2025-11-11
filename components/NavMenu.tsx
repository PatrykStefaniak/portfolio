'use client';

import { Menu } from "lucide-react";
import { useState } from "react";

const MENU_ITEMS = ["IDK", "About Me", "Projects"]

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((v) => !v);
    };

    return (
        <>
            <div
                onClick={handleClick}
                className="absolute top-10 left-10 cursor-pointer hover:rotate-360 hover:scale-150 duration-1000 rounded-full bg-(--bg-dark)/90 p-3 z-10"
            >
                <Menu
                    className="pointer text-(--text-muted)"
                />
            </div>
            {
                isOpen && MENU_ITEMS.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="absolute left-8 top-12 h-8 my-auto w-[10vw] bg-(--bg-dark) text-(--text) flex items-center justify-center animate-menu-slide-out border-2 border-(--border)"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                "--index": index,
                                "--final-x": "50px",
                                "--final-y": `${index * 30}px`
                            } as React.CSSProperties}
                        >
                            {item}
                        </div>
                    );
                })
            }
        </>
    );
}