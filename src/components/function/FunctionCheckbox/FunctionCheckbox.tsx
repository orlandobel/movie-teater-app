import "./FunctionCheckbox.css"

interface FunctionCheckboxProps {
    label: string;
}

export const FunctionCheckbox = ({ label }: FunctionCheckboxProps) => {
    return (
        <label>
            <input className="option__checkbox option__checkbox--active" type="checkbox" />
            <span className="option__span--hover">{label}</span>
        </label>
    )
}