"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AuthServices } from "@/app/api";

interface SignupProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setSuccessfulMessage: Dispatch<SetStateAction<string>>;
}

function useSignup({ setShowLogin, setSuccessfulMessage }: SignupProps) {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validateDetails, setValidateDetails] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleValidation = () => {
    let validated = 0;
    if (signUpDetails.email === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        email: true,
      }));
      validated += 1;
    }

    if (signUpDetails.password === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        password: true,
      }));
      validated += 1;
    }

    if (
      signUpDetails.password !== "" &&
      signUpDetails.password !== signUpDetails.confirmPassword
    ) {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        confirmPassword: true,
      }));
      validated += 1;
    }

    if (validated == 0) {
      return true;
    } else {
      validateDetails.confirmPassword
        ? setFeedbackMessage("Password did not match")
        : setFeedbackMessage("Fill all required felid");
      return false;
    }
  };

  const resetValidation = () => {
    setValidateDetails({
      ...validateDetails,
      email: false,
      password: false,
    });
    setFeedbackMessage("");
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
      const {confirmPassword, ...rest} = signUpDetails
      await AuthServices()
        .signup(rest)
        .then(
          (response) => {
            console.log(response);
            setShowLogin(true);;
            setSuccessfulMessage('Account created successfully, check your email to verify your account')
            setLoading(false);
          },
          (error) => {
            console.log(error);
            error.response.data.error?  
            setFeedbackMessage(error.response.data.error):
            setFeedbackMessage(error.response.data.message)

            ;
            setLoading(false);
          }
        );
    }
  };

  useEffect(() => {
    resetValidation();
  }, [signUpDetails]);

  useEffect(() => {
    if (
      signUpDetails.password !== "" &&
      signUpDetails.password !== signUpDetails.confirmPassword
    ) {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        confirmPassword: true,
      }));
      setFeedbackMessage("Password did not match");
    } else {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        confirmPassword: false,
      }));
      setFeedbackMessage("");
    }
  }, [signUpDetails.password, signUpDetails.confirmPassword]);
  return {
    signUpDetails,
    validateDetails,
    feedbackMessage,
    isChecked,
    loading,
    setIsChecked,
    setSignUpDetails,
    handleSignup,
  };
}

export default useSignup;
