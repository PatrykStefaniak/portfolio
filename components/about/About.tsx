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
            className={`${isInView ? "animate-fade-in" : "opacity-0"} sm:w-[80vw] mx-auto mt-20 border-t border-stone-50 bg-stone-200/85 p-5 sm:p-20 rounded-xl shadow-xl`}
        >
            <div className="border-b-3 border-color-(--border) w-80 pb-1">
                <div className="text-3xl font-semibold border-b-3 border-color-(--border) w-65">
                    <h2>More about me</h2>
                </div>
            </div>
            <div className="gap-y-5 flex flex-col mt-5">
                <p>
                    I am a Frontend Developer with 5 years of professional experience building enterprise web applications.
                    Skilled in JavaScript, React, ExtJs, and modern frontend workflows. I&apos;ve implemented and optimized
                    applications for customer-facing websites, led frontend development for complex multi-user VoIP
                    dashboards, and developed and integrated Web CRM solutions with Salesforce among others.
                </p>
                <p>
                    With a background in developing software for a telecomunications company, I had the chance to gain
                    plenty of experience with <b>SaaS</b> and <b>CRM</b> oriented web apps.
                    I&apos;m always excited to learn new technologies and always striving to improve, as I believe that self improvement,
                    not only on a professional level, but also on a personal level is key to accomplishment.
                    Confident in my abilities but open to criticism and to both mentoring and to being mentored.
                </p>
                <div className="flex gap-5">
                    <p className="mt-5 flex-3">
                        
                    </p>
                    <div className="flex-1">
                        <Image
                            src={"/me.jpg"}
                            alt={"Image of a handsome frontend developer"}
                            width={200}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}