import "./emptylayout.css"

interface EmptyLayoutProps {
    className?: string
    children: React.ReactNode
}

export const EmptyLayout = ({ className, children }: EmptyLayoutProps) => {
    return (<>
        <header className="LayoutHeader"></header>
        <main className={className}> {children} </main>
    </>)
}
