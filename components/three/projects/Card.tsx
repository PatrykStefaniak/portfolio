import { Project } from "@/types/types";
import Image from "next/image";

const technologyColors = {
    javascript: {
        border: "border-yellow-700",
        background: "bg-yellow-100/80",
    },
    html: {
        border: "border-orange-700",
        background: "bg-orange-100/80",
    },
    css: {
        border: "border-cyan-700",
        background: "bg-cyan-100/80",
    },
    react: {
        border: "border-cyan-700",
        background: "bg-cyan-100/80",
    },
    "next.js": {
        border: "border-stone-700",
        background: "bg-stone-100/80",
    },
    "three.js": {
        border: "border-slate-700",
        background: "bg-slate-100/80",
    },
    "three fiber": {
        border: "border-cyan-700",
        background: "bg-cyan-100/80",
    },
    tailwind: {
        border: "border-sky-700",
        background: "bg-sky-100/80",
    },
    default: {
        border: "border-lime-700",
        background: "bg-lime-100/80",
    }
};

type Technology = keyof typeof technologyColors;

export default function Card(props: Project) {
    const { header, text, imageAlt, imageSrc, demoUrl, codeUrl, technology }  = props;

    return (
        <div className="bg-(--bg-lighter) rounded-xl overflow-auto">
            <div>
                <Image
                    className="w-full max-h-40"
                    height="400"
                    width="200"
                    alt={imageAlt}
                    src={imageSrc}
                />
            </div>
            <div className="p-[20px] text-(--text-muted)">
                <h3 className="text-(--text) text-2xl">{header}</h3>
                <div>
                    {text}
                </div>
                <div className="flex gap-2 my-[10px]">
                    {
                        (technology || []).map((tech, index) => {
                            const colors = technologyColors[tech.toLowerCase() as Technology] || technologyColors.default;
                            const bg = colors.background;
                            const border = colors.border;

                            return <div
                                className={`border-1 p-[5px] rounded-full text-(--text-dark) ${bg} ${border}`}
                                key={index}
                            >
                                {tech}
                            </div>
                        })
                    }
                </div>
                <div className="flex gap-2 flex-row-reverse">
                    <div>
                        <a
                            className="border-1 border-(--border) rounded p-[10px]"
                            href={codeUrl}
                        >
                            Code
                        </a>
                    </div>
                    {demoUrl && (
                        <div>
                            <a href={demoUrl}>Demo</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}