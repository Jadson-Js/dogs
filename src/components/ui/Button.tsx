export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  text,
  className = "",
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`bg-yellow-500 text-yellow-900 rounded py-2 px-4 hover:bg-yellow-600 cursor-pointer  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
