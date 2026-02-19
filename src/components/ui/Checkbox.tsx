interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string // optional
    // checked?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({label, checked, id, ...props}) => {
    return (
        <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <input id={id} checked={checked} type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" {...props} />
        {label && <span className="ml-2">{label}</span>}
        </label>
    )
}