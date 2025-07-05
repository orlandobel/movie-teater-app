import "./CardHeader.css"

interface CardHeaderProps {
    className?: string
    children: React.ReactNode
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
    const cn = `Card__Header ${className}`
    return (<header className={cn}>
        {children}
    </header>)
}