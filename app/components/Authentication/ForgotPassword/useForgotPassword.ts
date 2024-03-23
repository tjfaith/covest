"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthServices, LocalStorageServices } from "@/app/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setForgottenPassword, updateShowResendLink } from "@/app/Store/Features/authSlice";


function useResendActivationLink() {
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const [validateEmail, setValidateEmail] = useState(false);

  const handleValidation = () => {
    if (email === "") {
      setValidateEmail(true);
      setErrorMessage("Input the email you use for registration");
      return false;
    }
    return true;
  };

  const resetValidation = () => {
    setErrorMessage("");
    setValidateEmail(false);
  };

  const handleSendLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
      AuthServices()
        .initiateForgotPassword(email)
        .then(
          (response) => {
            toggleForgotPassword(false);
            LocalStorageServices().setAccountEmail(email)
            toast.success(response.data.message);
            setLoading(false);
          },
          (error) => {
            console.log(error);
            toast.error(
              error.response.data.error
                ? error.response.data.error
                : error.response.data.message
            );
            setErrorMessage(
              error.response.data.error
                ? error.response.data.error
                : error.response.data.message
            );
            setValidateEmail(true);
            setLoading(false);
          }
        );
    }
  };

  const toggleForgotPassword =(val:boolean)=>{
    dispatch(setForgottenPassword(val))
  }

  useEffect(() => {
    resetValidation();
  }, [email]);

  return {
    handleSendLink,
    setEmail,
    toggleForgotPassword,
    email,
    validateEmail,
    loading,
    errorMessage,
  };
}

export default useResendActivationLink;
