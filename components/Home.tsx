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

export default function Main() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const isInView = useIntersectionObserver(aboutRef);

    return <div id="container" className="overflow-clip">
        <div
            className={`${isInView ? "animate-slow-invert" : "animate-slow-reverse-invert"} bg-radial-[at_5%_5%] to-(--bg) from-(--bg-light) fixed inset-0`}
        >
            <Background/>
        </div>
        <main className="z-10 relative">
            <NavMenu/>
            <ProgressBar/>
            <Welcome/>
            <Separator/>
            <About
                ref={aboutRef}
            />
            <ProjectList/>
        </main>
    </div>
}