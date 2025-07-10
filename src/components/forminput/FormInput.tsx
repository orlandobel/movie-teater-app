
import "./FormInput.css"

interface FormInputProps {
    label?: string;
    name?: string;
    type?: string;
    value?: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormInput = ({ label, name, type, value, required, onChange }: FormInputProps) => {
    return (
    <div className="FormGroup">
        <label className="FormInput__label">{label}</label>
        {type === "textarea" 
            ? <textarea value={value} name={name} required={required} onChange={onChange} className="FormInput__textarea" /> 
            : <input type={type} value={value} name={name} required={required} onChange={onChange} className="FormInput__input" />}
      </div>
      )
}