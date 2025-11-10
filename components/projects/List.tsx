import {Projects} from "./projects.json";
import Card from "./Card";
import { Project } from "@/types/types";

export default function ProjectList() {
    return (
        <section id="projects" className="pt-[50vh] p-px">
            <div className={"flex flex-col bg-(--bg-light)/90 my-[20vh] mx-auto w-[80vw] py-10 rounded-xl shadow-2xl border-t border-(--border-muted)"}>
                <div className="m-auto pt-5 pb-20 ">
                    <div className="text-5xl text-(--text) text-shadow-lg text-shadow-(color:--highlight)">
                        Projects
                    </div>
                    <div className="mt-2 mx-auto border-b-3 border-(--text-muted) w-10 shadow-[0_0_10px_white]"/>
                </div>
                <div className={`w-full lg:w-[85%] mx-auto gap-x-25 gap-y-10 md:gap-y-0 flex flex-col sm:grid grid-cols-2 grid-flow-row`}>
                    {(Projects as Project[]).map((project, index) => {
                        const col = index == 0 || index % 2 == 0
                            ? "col-start-1 animate-fly-from-left"
                            : "col-start-2 animate-fly-from-right";

                        return (
                            <div
                                className={`row-span-4 ${col}`}
                                style={{
                                    gridRowStart: index * 3 + 1
                                }}
                                key={index}
                            >
                                <Card
                                    {...project}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
