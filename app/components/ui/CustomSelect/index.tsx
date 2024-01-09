import { ShieldAlert } from "lucide-react";
import { CustomSelectProps } from "@/app/functions/interface";

const CustomSelect = ({
  label,
  error,
  errorMessage,
  data,
  value,
  defaultText,
  labelColor = "text-foreground",
  textColor = "text-primary",
  bgColor = "bg-secondary",
  borderColor = "border-primary",
  handleChange,
}: CustomSelectProps) => {
  return (
    <div className="flex flex-col items-start w-full">
      <span className={`text-sm ${labelColor} font-medium mb-1.5`}>
        {label}
      </span>
      <div
        className={`${
          error ? "border-red-500" : borderColor
        } flex w-full px-3 py-2 items-center  border-b ${bgColor} shadow-xs `}
      >
        <div className="flex w-full">
          <select
            value={value}
            className={`${textColor} ${bgColor} border-none ml-2  w-full outline-none`}
            onChange={(e) => handleChange(e.target.value)}
          >
            {defaultText !== "" && (
              <option value="" className="" disabled>
                {defaultText}
              </option>
            )}
            {data.map((val: any, index: number) => (
              <option value={val.id} key={index}>
                {val.label}
              </option>
            ))}
          </select>
        </div>

        {error && <ShieldAlert className="text-red-500" />}
      </div>
      <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
    </div>
  );
};

export default CustomSelect;
