"use client";
import React from "react";
import useForgottenPassword from "./useForgottenPassword";
import { CustomButton, CustomInput, Loader } from "@/app/components";
import { AtSign, KeyRound } from "lucide-react";
const VerifyEmail = () => {
  const {
    loading,
    payload,
    validateDetails,
    feedbackMessage,
    setPayload,
    resetPassword,
  } = useForgottenPassword();
  return (
    <div className=" h-screen flex  items-center justify-center w-full ">
      <div className=" p-5 text-gray-600 bg-muted rounded-lg  ">
        <form className="space-y-5 h-full w-full " onSubmit={(e) => resetPassword(e)}>
          <div className="text-red-500 text-sm">{feedbackMessage}</div>

          <CustomInput
            error={validateDetails.email}
            icon={<AtSign />}
            label="Email*"
            placeholder="youremail@domain.com"
            inputType="email"
            bgColor="bg-muted"
            disableInput={true}
            customStyle="disabled cursor-not-allowed"
            value={payload.email as string}
            handleChange={() => {}}
          />

          <div className=" text-xs">
            <div className=" text-red-500 font-bold">
              {" "}
              Password Must contain at least one:
            </div>
            <ul className=" flex gap-5 font-extrabold mb-3">
              <li
                className={`${
                  /[A-Z]/.test(payload.newPassword)
                    ? "text-primary"
                    : "text-red-400"
                }`}
              >
                Uppercase
              </li>
              <li
                className={`${
                  /[a-z]/.test(payload.newPassword)
                    ? "text-primary"
                    : "text-red-400"
                }`}
              >
                Lowercase
              </li>
              <li
                className={`${
                  /[^\w\s]/.test(payload.newPassword)
                    ? "text-primary"
                    : "text-red-400"
                }`}
              >
                Symbol
              </li>
              <li
                className={`${
                  /\d/.test(payload.newPassword)
                    ? "text-primary"
                    : "text-red-400"
                }`}
              >
                Number
              </li>
            </ul>
{String(validateDetails.confirmPassword)}
            <CustomInput
              error={validateDetails.newPassword}
              icon={<KeyRound />}
              label="New Password*"
              isPassword
              inputType="password"
              placeholder="***********"
              value={payload.newPassword}
              handleChange={(value: string) =>
                setPayload({ ...payload, newPassword: value })
              }
            />
            <div></div>
            <CustomInput
              error={validateDetails.confirmPassword}
              icon={<KeyRound />}
              label="Confirm Password*"
              isPassword
              inputType="password"
              placeholder="***********"
              value={payload.confirmPassword}
              handleChange={(value: string) =>
                setPayload({ ...payload, confirmPassword: value })
              }
            />
          </div>

          <div className="flex item-center justify-between gap-3">
            <CustomButton
              showLoading={loading}
              label={"Submit"}
              type="submit"
              handleClick={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
