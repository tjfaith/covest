"use client";

import { ShieldAlert, Eye, EyeOff } from "lucide-react";
import useCustomInput from "./useCustomInput";
import { CustomInputProps } from "@/app/functions/interface";

const CustomInput = ({
  icon,
  iconPosition = "left",
  label,
  placeholder,
  inputType,
  error,
  value,
  errorMessage,
  labelColor="text-foreground",
  textColor = "text-primary",
  bgColor = "bg-background",
  borderColor ='border-primary',
  handleChange,
}: CustomInputProps) => {
  const { canSee, setCanSee } = useCustomInput();
  return (
    <div className="flex flex-col items-start w-full">
      <span className={`text-sm ${labelColor} font-medium mb-1.5`}>
        {label}
      </span>
      <div
        className={`${
          error ? "border-red-500" : borderColor
        }  flex w-full px-3 py-2 items-center  border-b ${bgColor} shadow-xs`}
      >
        {iconPosition === "left" && (
          <div className={`${textColor}`}>{icon}</div>
        )}
        {error && iconPosition === "right" && (
          <ShieldAlert className="text-red-500" />
        )}

        <div className="flex w-full">
          {inputType == "password" ? (
            <input
              autoComplete=""
              placeholder={placeholder}
              className={`${textColor} ${bgColor} border-none ml-2 w-full outline-none`}
              type={!canSee ? "password" : "text"}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
            />
          ) : (
            <input
              autoComplete=""
              placeholder={placeholder}
              className={`${textColor} ${bgColor} border-none ml-2  w-full outline-none`}
              type={inputType}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
            />
          )}
        </div>
        {inputType == "password" && !error && (
          <div
            className="flex cursor-pointer text-primary"
            onClick={() => setCanSee(!canSee)}
          >
            {canSee ? <Eye /> : <EyeOff />}
          </div>
        )}
        {error && iconPosition === "left" && (
          <ShieldAlert className="text-red-500" />
        )}
        {iconPosition === "right" && (
          <div className={`${textColor}`}>{icon}</div>
        )}
      </div>
      <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
    </div>
  );
};

export default CustomInput;
