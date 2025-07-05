import { Link } from "react-router"
import "./FunctionLink.css"

interface FunctionLinkProps {
    label: string;
    to: string;
}

export const FunctionLink = ({ label, to }: FunctionLinkProps) => {
    return (
        <Link className="link link--hover" to={to}>{label}</Link>
    )
}