import Background from "./Background";

export default function Main() {
    return <div id="container">
        <div className="bg-radial-[at_5%_5%] to-slate-950 from-fuchsia-950 fixed inset-0 ">
            <Background />
        </div>
        <main className="w-[55%] mx-auto mt-[20vh] z-10 relative">
            <div className="w-[60vh] mx-auto p-20 bg-(--bg)/90 text-(--text) text-center mt-[30vh] rounded-xl">
                <h1 className="text-lg font-semibold">Hi, I&apos;m Patryk, nice to meet you!</h1>
                <div>
                    This is my work-in-progress portfolio website.
                </div>
            </div>
        </main>
    </div>
}