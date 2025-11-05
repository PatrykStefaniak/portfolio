import Background from "./three/Background";
import ProjectList from "./projects/List";
import Welcome from "./Welcome";
import Separator from "./Separator";

export default function Main() {
    return <div id="container" className="overflow-clip">
        <div className="bg-radial-[at_5%_5%] to-(--bg) from-(--bg-light) fixed inset-0 ">
            <Background/>
        </div>
        <main className="z-10 relative">
            <div className="animate-progress fixed h-0 border-2 border-(--border) top-0 right-0"/>
            <Welcome/>
            <Separator/>
            <ProjectList/>
        </main>
    </div>
}