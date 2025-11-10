import Image from "next/image";
import { Ref, RefObject } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

type AboutProps = {
    ref?: Ref<HTMLDivElement>
};

export default function About(props: AboutProps) {
    const {ref} = props;
    const isInView = useIntersectionObserver(ref as RefObject<HTMLElement | null>);

    return (
        <section
            id="about"
            ref={ref}
            className={`${isInView ? "animate-fade-in" : "opacity-0"} sm:w-[75vw] mx-auto mt-20 border-t border-stone-50 bg-stone-200/85 p-5 sm:p-20 sm:rounded-xl shadow-xl`}
        >
            <div className="w-full flex flex-col mb-10">
                <h2 className="mx-auto text-4xl font-semibold text-shadow-lg text-shadow-(--border)">More About Me</h2>
                <div className="mt-2 mx-auto border-b-3 border-(--highlight) w-15 shadow-[0_0_10px_rgba(0,0,0,1)]"/>
            </div>
            <div>
                <p>
                    I am a Frontend Developer with 5 years of professional experience building enterprise web applications.
                    Skilled in JavaScript, React, ExtJs, and modern frontend workflows. I&apos;ve implemented and optimized
                    applications for customer-facing websites, led frontend development for complex multi-user VoIP
                    dashboards, and developed and integrated Web CRM solutions with Salesforce among others.
                </p>
                <Image
                    className="float-left mr-3 mt-5"
                    src={"/me.jpg"}
                    alt={"Image of a handsome frontend developer"}
                    width={200}
                    height={400}
                />
                <p className="mt-5">
                    With a background in developing software for a telecomunications company, I had the chance to gain
                    plenty of experience with <b>SaaS</b> and <b>CRM</b>-oriented web applications.
                    I&apos;m always excited to learn new technologies and constantly strive to improve, not just professionally, but personally as well.
                    I believe self-improvement is key to genuine accomplishment.
                    I&apos;m confident in my abilities, but also open to feedback, collaboration, and both mentoring and being mentored.
                </p>
                <p className="mt-5">
                    When I&apos;m away from the computer, I love working out, stuff like running, weight lifting, bouldering and swimming. I&apos;m also into social psychology and philosophy audio books, love motorcycling, catching a pretty sunset/ sunrise, hiking, and occasionally gaming.
                </p>
            </div>
        </section>
    )
}