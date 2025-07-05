import { IoMdSearch } from "react-icons/io";
import { IconButton } from "@components/buttons/iconbutton";
import "./searchbar.css"

export const Searchbar = () => {
    return (
        <div className="searchbar searchbar--focus">
            <input className="searchbar__input" type="text" name="search" placeholder="Search" />
            <IconButton Icon={IoMdSearch} />
        </div>
    )
}