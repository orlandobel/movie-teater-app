import { IoMdSearch } from "react-icons/io";
import { IconButton } from "@components/buttons/iconbutton";
import "./searchbar.css"

interface SearchbarProps {
    onSearch?: (search: string) => void
}

export const Searchbar = ({ onSearch }: SearchbarProps) => {
    return (
        <div className="searchbar searchbar--focus">
            <input className="searchbar__input" type="text" name="search" placeholder="Search" onChange={(e) => onSearch?.(e.target.value)} />
            <IconButton Icon={IoMdSearch} />
        </div>
    )
}