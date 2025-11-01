import {Projects} from "@/public/projects.json";
import Card from "./Card";
import { Project } from "@/types/types";

export default function ProjectList() {
    const gridRowsClass = "grid-rows-[" + (Projects.length * 3 + 1) + "]";

    return (
        <section className="p-px hidden">
            {/* <div className="absolute inset-0 -z-10 bg-red-900/40"></div> */}
            <div className={"bg-(--bg-light)/95 my-[20vh] mx-auto w-[80vw] py-20 rounded-xl animate-fade-in shadow-2xl border-t border-(--border-muted)"}>
                <div className={`sm:w-[60%] mx-auto gap-3 grid grid-cols-2 ${gridRowsClass} grid-flow-row`}>
                    {(Projects as Project[]).map((project, index) => {
                        const col = index == 0 || index % 2 == 0 ? "col-start-1" : "col-start-2";

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
