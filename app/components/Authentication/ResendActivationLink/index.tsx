import React, { Dispatch, SetStateAction } from "react";
import { CustomInput, CustomButton } from "@/app/components";
import { AtSign, KeyRound } from "lucide-react";
import useResendActivationLink from "./useResendActivationLink";


interface Props {
  setResendActivationLink: Dispatch<SetStateAction<boolean>>;
}

const ResendActivationLink = ({setResendActivationLink}:Props) => {
  const {
    handleSendLink,
    setEmail,
    email,
    validateEmail,
    loading,
    errorMessage,
  } = useResendActivationLink({setResendActivationLink});
  return (
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
  );
};

export default ResendActivationLink;
