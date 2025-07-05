import { type IconType } from "react-icons";
import "./buttons.css"

interface IconButtonProps {
    Icon: IconType;
}

export const IconButton = ({ Icon }: IconButtonProps) => {
    return (
        <button className="btn--icon">
            <Icon />
        </button>
    )
}