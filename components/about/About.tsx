import Image from "next/image";
import { Ref, RefObject } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

type AboutProps = {
    ref?: Ref<HTMLElement>
};

export default function About(props: AboutProps) {
    const {ref} = props;
    const isInView = useIntersectionObserver(ref as RefObject<HTMLElement | null>);

    return (
        <section
            id="about"
            ref={ref}
            className={`${isInView ? "slow-invert" : "slow-reverse-invert"} sm:w-[80vw] mx-auto mt-20 border-t border-stone-50 bg-stone-200/85 p-5 sm:p-20 rounded-xl shadow-xl`}
        >
            <div className="border-b-3 border-color-(--border) w-80 pb-1">
                <div className="text-3xl font-semibold border-b-3 border-color-(--border) w-65">
                    <h2>More about me</h2>
                </div>
            </div>
            <div>
                <p className="flex mt-5">
                    I am a Frontend Developer with 5 years of professional experience building enterprise web applications.
                    Skilled in JavaScript, React, ExtJs, and modern frontend workflows. I've implemented and optimized
                    applications for customer-facing websites, led frontend development for complex multi-user VoIP
                    dashboards, and developed and integrated Web CRM solutions with Salesforce among others.
                    With a background in a telecomunications company I had the chance to gain plenty of experience with SaaS and CRM oriented web products.
                    I'm always excited to learn new technologies and always striving to improve, as I believe that self improvement,
                    not only on a professional level, but also on a personal level is key to feeling accomplished.
                    I'm confident in my abilities but open to criticism and to both mentoring and to being mentored.
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