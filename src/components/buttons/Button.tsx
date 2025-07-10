import "./buttons.css"

interface ButtonProps {
    children: React.ReactNode
    buttonType?: "primary" | "secondary" | "warning" | "danger"
    className?: string
    onClick?: () => void
}

export const Button = ({ children, buttonType = "primary", className, onClick }: ButtonProps) => {
    return (<button className={`btn btn--${buttonType} ${className}`} onClick={onClick}>{children}</button>)
}