"use client";

import Background from "./three/Background";
import ProjectList from "./projects/List";
import Welcome from "./Welcome";
import Separator from "./Separator";
import ProgressBar from "./ProgressBar";
import About from "./about/About";
import { useRef } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import NavMenu from "./NavMenu";
import { getInvertAnimation } from "@/lib/utils";

export default function Main() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const isInView = useIntersectionObserver(aboutRef);

    return <div id="container" className="overflow-clip">
        <div
            className={`${getInvertAnimation(isInView)} bg-radial-[at_5%_5%] to-(--bg) from-(--bg-light) fixed inset-0`}
        >
            <Background/>
        </div>
        <main className="z-10 relative">
            <NavMenu invert={isInView} />
            <ProgressBar invert={isInView} />
            <Welcome/>
            <Separator/>
            <About
                ref={aboutRef}
            />
            <ProjectList/>
        </main>
    </div>
}