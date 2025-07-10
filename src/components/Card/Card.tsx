import "./Card.css"

interface CardProps {
    children: React.ReactNode
    className?: string
}

export const Card = ({ children, className }: CardProps) => {
    return (<div className={`Card ${className}`}>
        {children}
    </div>)
}