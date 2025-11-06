import {Projects} from "./projects.json";
import Card from "./Card";
import { Project } from "@/types/types";

export default function ProjectList() {
    return (
        <section className="p-px">
            <div className={"bg-(--bg-light)/90 my-[20vh] mx-auto w-[80vw] py-20 rounded-xl shadow-2xl border-t border-(--border-muted)"}>
                <div className={`w-full lg:w-[85%] mx-auto gap-x-25 gap-y-35 md:gap-y-0 flex sm:grid md:grid-cols-2 grid-cols-1 grid-flow-row`}>
                    {(Projects as Project[]).map((project, index) => {
                        const col = index == 0 || index % 2 == 0
                            ? "col-start-1 animate-fly-from-left"
                            : "col-start-1 md:col-start-2 animate-fly-from-right";

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
