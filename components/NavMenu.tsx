'use client';

import { getInvertAnimation } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

const MENU_ITEMS = ["IDK", "About Me", "Projects"]

type NavMenuProps = {
    invert: boolean
}

export default function NavMenu(props: NavMenuProps) {
    const {invert} = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((v) => !v);
    };

    return (
        <>
            <div className={`${getInvertAnimation(invert)} fixed z-10`}>
                <Menu
                    onClick={handleClick}
                    className="relative top-10 left-10 cursor-pointer hover:rotate-360 hover:scale-150 duration-1000 rounded-full bg-(--bg-dark)/90 p-3 text-(--text-muted)"
                    size={48}
                />
            </div>
            <div
                className={`${isOpen ? "aniamte-nav-in" : "opacity-0"} fixed w-[30vw] h-[100vh] bg-linear-to-r from-(--bg-dark)/95 from-40% via-80% via-(--bg)/90 to-(transparent) flex flex-col items-center justify-center text-center`}
                // style={{
                //     animationDelay: "1s"
                // }}
            >
                {
                    MENU_ITEMS.map((item, index) => (
                        <a
                            href=""
                            key={index}
                            className="h-16 text-(--text) w-60 text-lg"
                        >
                            {item}
                        </a>
                    ))
                }
            </div>
        </>
    );
}