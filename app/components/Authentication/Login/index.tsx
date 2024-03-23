"use client";
import Link from "next/link";
import useLogin from "./useLogin";
import React, { Dispatch, SetStateAction } from "react";
import { CustomInput, CustomButton } from "@/app/components";
import { AtSign, KeyRound } from "lucide-react";


interface LoginProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setShowLogin }: LoginProps) => {
  const {
    loginDetails,
    validateDetails,
    feedbackMessage,
    isChecked,
    loading,
    showSignUp,
    toggleForgotPassword,
    setShowSignUp,
    setIsChecked,
    setLoginDetails,
    handleLogin,
  } = useLogin();
  return (
    <form
      className="space-y-5 h-full animate__animated animate__bounceIn"
      onSubmit={(e) => handleLogin(e)}
    >
      <div className="text-red-500 text-sm">{feedbackMessage}</div>

      <CustomInput
        error={validateDetails.email}
        icon={<AtSign />}
        label="Email*"
        placeholder="youremail@domain.com"
        inputType="email"
        value={loginDetails.email}
        handleChange={(value: string) =>
          setLoginDetails({ ...loginDetails, email: value })
        }
      />
      <CustomInput
        error={validateDetails.password}
        icon={<KeyRound />}
        label="Password*"
        isPassword
        inputType="password"
        placeholder="***********"
        value={loginDetails.password}
        handleChange={(value: string) =>
          setLoginDetails({ ...loginDetails, password: value })
        }
      />
      <div className=" flex md:flex-nowrap flex-wrap justify-between md:items-center text-sm font-medium gap-3">
        <div className="flex items-center justify-between space-x-2">
          <input
            className="bg-secondary border text-primary  rounded w-4 h-4  checked:bg-primary checked:border-primary checked:bg-no-repeat checked:bg-center"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="text-primary">Keep me logged in</span>
        </div>
        <div
        onClick={()=>toggleForgotPassword(true)}
          className=" underline cursor-pointer text-primary "
        >
          Forgot Password?
        </div>
      </div>
      <div className="flex md:flex-row flex-col item-center justify-between gap-3">
        <CustomButton
          showLoading={loading}
          label={"Login"}
          type="submit"
          // bgColor="bg-background/50"
          handleClick={() => {}}
        />
        <CustomButton
          label={"signup"}
          type="button"
          bgColor="bg-foreground/50"
          handleClick={() => {
            setShowLogin(false);
          }}
        />
      </div>
    </form>
  );
};

export default Login;
