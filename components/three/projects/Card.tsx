import { Project } from "@/types/types";
import Image from "next/image";

export default function Card(props: Project) {
    const { header, text, imageAlt, imageSrc, demoUrl, codeUrl, technology }  = props;

    return (
        <div className="bg-(--bg-lighter)">
            <div>{header}</div>
            <div>
                <Image
                    height="50"
                    width="50"
                    alt={imageAlt}
                    src={imageSrc}
                />
            </div>
            <div>
                {text}
            </div>
            {
                (technology || []).map((tech, index) => (
                    <div key={index}>{tech}</div>
                ))
            }
            <div>
                <div>
                    <a href={codeUrl}>Code</a>
                </div>
                {demoUrl && (
                    <div>
                        <a href={codeUrl}>Code</a>
                    </div>
                )}
            </div>
        </div>
    )
}