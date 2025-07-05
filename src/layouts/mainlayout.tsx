import type { JSX } from "react/jsx-runtime"
import { Searchbar } from "@components/search/searchbar"
import "./mainlayout.css"

interface MainLayoutProps {
    children: string | JSX.Element | JSX.Element[] 
    className?: string
}

export const Mainlayout = ({ children, className } : MainLayoutProps) => {
    return (
        <>
        <header className="header">
            <nav className="header__nav">
                <Searchbar />
            </nav>
        </header>
        <main className={className}>
            {children}
        </main>
        </>
    )
}