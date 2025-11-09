import LinkButton from "@/components/ui/LinkButton";
import { Project } from "@/types/types";
import { Code, Play } from "lucide-react";
import Image from "next/image";

const technologyColors = {
    javascript: "border-yellow-400 bg-yellow-100/80 shadow-[0_0_7px_yellow]",
    html: "border-orange-400 bg-orange-100/80 shadow-[0_0_7px_orange]",
    css: "border-cyan-400 bg-cyan-100/80 shadow-[0_0_7px_cyan]",
    react: "border-cyan-400 bg-cyan-100/80 shadow-[0_0_7px_cyan]",
    "next.js": "border-green-500 bg-green-100/80 shadow-[0_0_7px_lightgreen]",
    "three.js": "border-fuchsia-700 bg-fuchsia-100/80 shadow-[0_0_7px_fuchsia]",
    "three fiber": "border-cyan-400 bg-cyan-100/80 shadow-[0_0_7px_cyan]",
    tailwind: "border-sky-500 bg-sky-100/80 shadow-[0_0_7px_lightblue]",
    default: "border-pink-400 bg-lime-100/80 shadow-[0_0_7px_pink]",
};

type Technology = keyof typeof technologyColors;

export default function Card(props: Project) {
    const { header, text, imageAlt, imageSrc, demoUrl, codeUrl, technology }  = props;

    return (
        <div className="bg-(--bg-lighter)/70 rounded-xl overflow-auto animate-fly-from-left shadow-2xl">
            <div className="m-2">
                <Image
                    className="max-h-40 mx-auto object-fill rounded-md"
                    height="400"
                    width="400"
                    alt={imageAlt}
                    src={imageSrc}
                />
            </div>
            <div className="p-[20px] text-(--text-muted)">
                <h3 className="text-(--text) text-2xl">{header}</h3>
                <div>
                    {text}
                </div>
                <div className="flex gap-2 my-5">
                    {
                        (technology || []).map((tech, index) => {
                            const styles = technologyColors[tech.toLowerCase() as Technology] || technologyColors.default;

                            return <div
                                className={`glint-effect border-2 p-[5px] rounded-full text-(--text-dark) ${styles} cursor-default`}
                                key={index}
                            >
                                {tech}
                            </div>
                        })
                    }
                </div>
                <div className="flex gap-2 flex-row-reverse mt-6">
                    {codeUrl && (<LinkButton
                        url={codeUrl}
                        text={"Code"}
                        icon={<Code/>}
                    />)}
                    {demoUrl && (
                        <LinkButton
                            url={demoUrl}
                            text={"Demo"}
                            icon={<Play/>}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}