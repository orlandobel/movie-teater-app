import type { JSX } from "react/jsx-runtime"
import { Searchbar } from "@components/search/searchbar"

interface MainLayoutProps {
    children: string | JSX.Element | JSX.Element[] 
    className?: string
}

export const Mainlayout = ({ children, className } : MainLayoutProps) => {
    return (
        <>
        <header className="flex justify-between bg-blue-800 h-18 w-full">
            <nav className="w-full px-4 flex flex-row-reverse items-center">
                <Searchbar />
            </nav>
        </header>
        <main className={className}>
            {children}
        </main>
        </>
    )
}