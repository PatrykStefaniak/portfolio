import Background from "./Background";
import ProjectList from "./projects/List";

export default function Main() {
    return <div id="container">
        <div className="bg-radial-[at_5%_5%] to-(--bg) from-(--bg-dark) fixed inset-0 ">
            <Background />
        </div>
        <main className="z-10 relative">
            <section className="w-[90%] sm:w-[55%] mx-auto p-px h-[100vh]">
                <div className="animate-fade-in sm:w-[60vh] mx-auto py-15 px-5 sm:p-20 bg-(--bg)/90 text-(--text) text-center mt-[25vh] rounded-xl shadow-2xl border-t border-(--border-muted)">
                    <h1 className="text-lg font-semibold">Hi, I&apos;m Patryk, nice to meet you!</h1>
                    <div>
                        This is my work-in-progress portfolio website.
                    </div>
                </div>
            </section>
            <div
                className="border-separator w-full h-[20vh] bg-linear-to-b from-(--bg) from-60% to-(transparent)"
            />
            <ProjectList />
        </main>
    </div>
}