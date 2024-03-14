"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthServices } from "@/app/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateShowResendLink } from "@/app/Store/Features/authSlice";


interface Props {
  setResendActivationLink: Dispatch<SetStateAction<boolean>>;
}

function useResendActivationLink({setResendActivationLink}:Props) {
  const router = useRouter();
  const dispatch = useDispatch();

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
      AuthServices().resendActivationToken(email).then(response=>{
        console.log(response)
        setResendActivationLink(false)
        toast.success(response.data.message)
      setLoading(false);

      }, error=>{
        console.log(error)
        toast.error(error.response.data.error?error.response.data.error : error.response.data.message)
        setErrorMessage(error.response.data.error?error.response.data.error : error.response.data.message)
        setValidateEmail(true)
      setLoading(false);

      })
    }
  };

  useEffect(() => {
    resetValidation();
  }, [email]);

  return {
    handleSendLink,
    setEmail,
    email,
    validateEmail,
    loading,
    errorMessage,
  };
}

export default useResendActivationLink;
