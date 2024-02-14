import { ButtonProps } from "@/app/functions/interface";
import { Loader } from "@/app/components";
const CustomButton = ({
  icon,
  label,
  showLoading,
  type = "button",
  bgColor = "bg-secondary",
  textColor = "text-primary",
  handleClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={showLoading}
      onClick={handleClick}
      className={`${bgColor} ${textColor}  h-10 py-2.5 px-7 text-sm font-semibold w-full min-w-min flex items-center justify-center cursor-pointer outline-none border-none`}
    >
      {!showLoading ? (
        <>
          {icon}
          <span>{label}</span>
        </>
      ) : (
        <Loader size={30} />
      )}
    </button>
  );
};

export default CustomButton;
