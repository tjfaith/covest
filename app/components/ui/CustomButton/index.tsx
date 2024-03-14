import { ButtonProps } from "@/app/functions/interface";
import { Loader } from "@/app/components";
const CustomButton = ({
  icon,
  label,
  showLoading,
  type = "button",
  bgColor = "bg-primary",
  textColor = "text-primary-foreground",
  customStyle="",
  handleClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={showLoading}
      onClick={handleClick}
      className={`${bgColor} ${textColor} ${customStyle} h-10 py-2.5 px-7 text-sm font-semibold w-full min-w-min flex items-center justify-center cursor-pointer outline-none border-none`}
    >
      {!showLoading ? (
        <>
          {icon}
          <span>{label}</span>
        </>
      ) : (
        <Loader size={30} color='white' />
      )}
    </button>
  );
};

export default CustomButton;
