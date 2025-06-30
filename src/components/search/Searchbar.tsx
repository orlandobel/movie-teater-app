import { IoMdSearch } from "react-icons/io";
import { IconButton } from "../buttons/Iconbutton";

export const Searchbar = () => {
    return (
        <div className="flex bg-white rounded-full h-8 text-gray-500 justify-center items-center px-3">
            <input type="text" name="search" placeholder="Search" />
            <IconButton Icon={IoMdSearch} />
        </div>
    )
}