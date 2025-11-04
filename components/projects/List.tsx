import {Projects} from "./projects.json";
import Card from "./Card";
import { Project } from "@/types/types";

export default function ProjectList() {
    return (
        <section className="p-px">
            <div className={"bg-(--bg-light)/90 my-[20vh] mx-auto w-[80vw] py-20 rounded-xl shadow-2xl border-t border-(--border-muted)"}>
                <div className={`sm:w-[65%] mx-auto gap-x-15 grid grid-cols-2 grid-flow-row`}>
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
