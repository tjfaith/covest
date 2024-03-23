import React, { Dispatch, SetStateAction } from "react";
import { CustomInput, CustomButton } from "@/app/components";
import { AtSign, KeyRound, X } from "lucide-react";
import useResendActivationLink from "./useForgotPassword";

const ResendActivationLink = () => {
  const {
    handleSendLink,
    setEmail,
    toggleForgotPassword,
    email,
    validateEmail,
    loading,
    errorMessage,
  } = useResendActivationLink();
  return (
    <div className="absolute inset-0 z-20 bg-black bg-opacity-50 p-10 flex items-center justify-center">
                  <div className="bg-white p-5">
                    <div className="flex items-center mb-3 justify-between">
                      <div className="text-sm ">Forgotten Password</div>
                      <X
                        className="cursor-pointer"
                        onClick={() => toggleForgotPassword(false)}
                      />
                    </div>
    <form
      className="space-y-5 h-full animate__animated animate__bounceIn"
      onSubmit={(e) => handleSendLink(e)}
    >

      <CustomInput
        error={validateEmail}
        errorMessage={errorMessage}
        icon={<AtSign />}
        label="Email*"
        placeholder="youremail@domain.com"
        inputType="email"
        value={email}
        handleChange={(value: string) => setEmail(value)}
      />

      <div className="flex md:flex-row flex-col item-center justify-between gap-3">
        <CustomButton
          showLoading={loading}
          label={"Send Link"}
          type="submit"
          handleClick={() => {}}
        />
      </div>
    </form>
    </div>
                </div>
  );
};

export default ResendActivationLink;
