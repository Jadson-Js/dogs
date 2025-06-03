export interface InputTextProps {
  id: string;
  type?: "text" | "password" | "email" | "number";
  name?: string;
  placeholder?: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLInputElement>;
}

export function InputText({
  id,
  type = "text",
  placeholder,
  className = "",
  ...props
}: InputTextProps) {
  return (
    <input
      className={`bg-gray-100 rounded py-2 px-4 focus:bg-gray-50 w-full ${className}`}
      id={id}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
}
