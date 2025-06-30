import { Searchbar } from "../components/search/Searchbar";

export const Mainpage = () => {
    return (
        <>
        <header className="flex justify-between bg-slate-500 h-18 w-full">
            <nav className="w-full px-4 flex flex-row-reverse items-center">
                <Searchbar />
            </nav>
        </header>
        <main>
            <h1>test main</h1>
        </main>
        </>
    )
}