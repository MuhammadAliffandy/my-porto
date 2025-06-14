"use client";

interface AppButton {
  text: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const AppButton: React.FC<AppButton> = ({
  text,
  onClick,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      className={`px-[30px] py-3 w-full text-[14px] font-extrabold cursor-pointer bg-black text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default AppButton;
