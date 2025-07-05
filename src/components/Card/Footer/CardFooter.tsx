import "./CardFooter.css"

interface CardFooterProps {
    className?: string
    children: React.ReactNode
}

export const CardFooter = ({ children, className }: CardFooterProps) => {
    const cn = `Card__Footer ${className}`
    return (<footer className={cn}>
        {children}
    </footer>)
}