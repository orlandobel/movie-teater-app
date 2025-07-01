import { Searchbar } from "../components/search/Searchbar"

export const Mainlayout = ({ children }) => {
    return (
        <>
        <header className="flex justify-between bg-slate-500 h-18 w-full">
            <nav className="w-full px-4 flex flex-row-reverse items-center">
                <Searchbar />
            </nav>
        </header>
        <main className="grid grid-cols-4 gap-6 px-[18svw] py-8">
            {children}
        </main>
        </>
    )
}