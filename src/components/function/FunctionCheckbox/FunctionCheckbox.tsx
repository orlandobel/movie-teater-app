import "./FunctionCheckbox.css"

interface FunctionCheckboxProps {
    onClick: () => void;
    name: string;
    label: string;
}

export const FunctionCheckbox = ({ onClick, name, label }: FunctionCheckboxProps) => {
    return (
        <label>
            <input className="option__checkbox option__checkbox--active" type="radio" name={name} onClick={onClick} />
            <span className="option__span--hover">{label}</span>
        </label>
    )
}