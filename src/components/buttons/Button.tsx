import "./buttons.css"

interface ButtonProps {
    children: React.ReactNode
    buttonType?: "primary" | "secondary" | "warning" | "danger"
    onClick?: () => void
}

export const Button = ({ children, buttonType = "primary", onClick }: ButtonProps) => {
    return (<button className={`btn btn--${buttonType}`} onClick={onClick}>{children}</button>)
}