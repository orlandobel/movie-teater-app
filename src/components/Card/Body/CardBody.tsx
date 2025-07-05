import "./CardBody.css"

interface CardBodyProps {
    className?: string
    children: React.ReactNode
}

export const CardBody = ({ children, className }: CardBodyProps) => {
    const cn = `Card__Body ${className}` 

    return (<article className={cn}>
        {children}
    </article>)
}
