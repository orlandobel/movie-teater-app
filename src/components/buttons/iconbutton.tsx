import { type IconType } from "react-icons";

interface IconButtonProps {
    Icon: IconType;
}

export const IconButton = ({ Icon }: IconButtonProps) => {
    return (
        <button>
            <Icon />
        </button>
    )
}