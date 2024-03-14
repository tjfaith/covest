"use client";
import React, { Dispatch, SetStateAction } from "react";
import useLogin from "./useSignup";
import { CustomInput, CustomButton } from "@/app/components";
import { AtSign, KeyRound, XCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SignupProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setSuccessfulMessage: Dispatch<SetStateAction<string>>;
}

const Signup = ({ setShowLogin, setSuccessfulMessage }: SignupProps) => {
  const {
    signUpDetails,
    validateDetails,
    feedbackMessage,
    isChecked,
    loading,
    setIsChecked,
    setSignUpDetails,
    handleSignup,
  } = useLogin({setShowLogin,setSuccessfulMessage });
  return (
    <div>
   <form
      className="space-y-5 h-full animate__animated animate__bounceIn  "
      onSubmit={(e) => handleSignup(e)}
    >
      <div className="text-red-500 text-sm">{feedbackMessage}</div>

      <CustomInput
        error={validateDetails.email}
        icon={<AtSign />}
        label="Email*"
        placeholder="youremail@domain.com"
        inputType="email"
        value={signUpDetails.email}
        handleChange={(value: string) =>
          setSignUpDetails({ ...signUpDetails, email: value })
        }
      />


      <div className=" text-xs">
       <div className=" text-red-500 font-bold"> Password Must contain at least one:</div>
        <ul className=" flex gap-5 font-extrabold mb-3">
          <li className={`${/[A-Z]/.test(signUpDetails.password)?'text-primary':'text-red-400'}`}>Uppercase</li>
          <li className={`${/[a-z]/.test(signUpDetails.password)?'text-primary':'text-red-400'}`}>Lowercase</li>
          <li className={`${/[^\w\s]/.test(signUpDetails.password)?'text-primary':'text-red-400'}`}>Symbol</li>
          <li className={`${/\d/.test(signUpDetails.password)?'text-primary':'text-red-400'}`}>Number</li>
        </ul>
      <CustomInput
        error={validateDetails.password}
        icon={<KeyRound />}
        label="Password*"
        isPassword
        inputType="password"
        placeholder="***********"
        value={signUpDetails.password}
        handleChange={(value: string) =>
          setSignUpDetails({ ...signUpDetails, password: value })
        }
        />
        <div>
          </div>
      <CustomInput
        error={validateDetails.confirmPassword}
        icon={<KeyRound />}
        label="Confirm Password*"
        isPassword
        inputType="password"
        placeholder="***********"
        value={signUpDetails.confirmPassword}
        handleChange={(value: string) =>
          setSignUpDetails({ ...signUpDetails, confirmPassword: value })
        }
        />
        </div>
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
          handleClick={() => {}}
        />
        <CustomButton
          label={"Login"}
          type="button"
          bgColor="bg-foreground/50"
          handleClick={() => {
            setShowLogin(true);
          }}
        />
      </div>
          </form>
    </div>
  );
};

export default Signup;
