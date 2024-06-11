export interface InputFieldProp extends React.InputHTMLAttributes<InputFieldProp> {
    label: string,
    type: string,
    placeholder: string,
    required?: boolean,
    error?: string,
    clasName?: string
}
export interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    icon?: string,
    width: string,
    disabled?: boolean,
    className?: string,
    loading: boolean,
    color: string,
    font: string,
    type: "submit" | "reset" | "button",
    onClick?: (e: any) => void
}

