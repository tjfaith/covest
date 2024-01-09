"use client";
import React, { Dispatch, SetStateAction } from "react";
import useLogin from "./useLogin";
import { CustomInput, CustomButton } from "@/app/components";
import { AtSign, KeyRound } from "lucide-react";
import Link from "next/link";

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
        error={validateDetails.username}
        icon={<AtSign />}
        label="Email*"
        placeholder="youremail@domain.com"
        inputType="email"
        value={loginDetails.username}
        handleChange={(value: string) =>
          setLoginDetails({ ...loginDetails, username: value })
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
      <div className=" flex justify-between items-center text-sm font-medium space-x-3">
        <div className="flex items-center justify-between space-x-2">
          <input
            className="bg-secondary border text-primary  rounded w-4 h-4  checked:bg-primary checked:border-primary checked:bg-no-repeat checked:bg-center"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="text-primary">Keep me logged in</span>
        </div>
        <Link
          href={"/reset_password"}
          className=" underline cursor-pointer text-primary "
        >
          Forgot Password?
        </Link>
      </div>
      <div className="flex item-center justify-between gap-3">
        <CustomButton
          showLoading={loading}
          label={"Login"}
          type="submit"
          bgColor="bg-background/50"
          handleClick={() => {}}
        />
        <CustomButton
          showLoading={loading}
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
