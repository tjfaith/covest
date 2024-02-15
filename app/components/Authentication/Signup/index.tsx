"use client";
import React, { Dispatch, SetStateAction } from "react";
import useLogin from "./useSignup";
import { CustomInput, CustomButton } from "@/app/components";
import { AtSign, KeyRound, XCircle } from "lucide-react";
import Link from "next/link";

interface SignupProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setShowLogin }: SignupProps) => {
  const {
    loginDetails,
    validateDetails,
    feedbackMessage,
    isChecked,
    loading,
    setIsChecked,
    setLoginDetails,
    handleSignup,
  } = useLogin();
  return (
    <form
      className="space-y-5 h-full animate__animated animate__bounceIn  "
      onSubmit={(e) => handleSignup(e)}
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
      <CustomInput
        error={validateDetails.password}
        icon={<KeyRound />}
        label="Confirm Password*"
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
          label={"Signup"}
          type="submit"
          // bgColor="bg-background/50"
          handleClick={() => {}}
        />
        <CustomButton
          showLoading={loading}
          label={"Login"}
          type="button"
          bgColor="bg-foreground/50"
          handleClick={() => {
            setShowLogin(true);
          }}
        />
      </div>
    </form>
  );
};

export default Signup;
