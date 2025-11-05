import Background from "./three/Background";
import ProjectList from "./projects/List";
import Welcome from "./Welcome";
import Separator from "./Separator";
import ProgressBar from "./ProgressBar";

export default function Main() {

    return <div id="container" className="overflow-clip">
        <div className="bg-radial-[at_5%_5%] to-(--bg) from-(--bg-light) fixed inset-0 ">
            <Background/>
        </div>
        <main className="z-10 relative">
            <ProgressBar/>
            <Welcome/>
            <Separator/>
            <ProjectList/>
        </main>
    </div>
}