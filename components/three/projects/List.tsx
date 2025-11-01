import {Projects} from "@/public/projects.json";
import Card from "./Card";
import { Project } from "@/types/types";

export default function ProjectList() {
    return (
        <div>
            {(Projects as Project[]).map((project, index) => (
                <Card
                    key={index}
                    {...project}
                />
            ))}
        </div>
    )
}
