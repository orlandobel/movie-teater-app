import "./FunctionLink.css"

interface FunctionLinkProps {
    label: string;
    onClick: () => void;
}

export const FunctionLink = ({ label, onClick }: FunctionLinkProps) => {
    return (
        <a className="link link--hover" onClick={onClick}>{label}</a>
    )
}