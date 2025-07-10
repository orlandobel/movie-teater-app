import type { JSX } from "react/jsx-runtime"
import { Searchbar } from "@components/search/searchbar"
import "./mainlayout.css"

interface MainLayoutProps {
    children: string | JSX.Element | JSX.Element[] 
    className?: string
    onSearch?: (search: string) => void
}

export const Mainlayout = ({ children, className, onSearch } : MainLayoutProps) => {
    return (
        <>
        <header className="header">
            <nav className="header__nav">
                <Searchbar onSearch={onSearch}/>
            </nav>
        </header>
        <main className={className}>
            {children}
        </main>
        </>
    )
}