'use client'
import { useEffect, useState } from "react";
import { useRouter, redirect } from 'next/navigation'
import { AuthServices, LocalStorageServices } from "@/app/api";
import { setForgottenPassword, toggleAuth, updateShowResendLink } from "@/app/Store/Features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store";
import toast from "react-hot-toast";

function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { showResendLink } = useSelector((state: RootState) => state.auth);

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [validateDetails, setValidateDetails] = useState({
    email: false,
    password: false,
  });

  const handleValidation = () => {
    let validated = 0;
    if (loginDetails.email === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        email: true,
      }));
      validated += 1;
    }

    if (loginDetails.password === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        password: true,
      }));
      validated += 1;
    }

    if (validated == 0) {
      return true;
    } else {
      setFeedbackMessage("Fill all required felid");
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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
      AuthServices().login(loginDetails).then(response=>{
        
        LocalStorageServices().setLocalAccessToken( response.data.data.token);

        toast.success(response.data.message)
        dispatch(toggleAuth(false))
        setLoading(false)
        router.push('/dashboard');
      }, error=>{
        console.log(error)
        setFeedbackMessage(error.response.data.message)
        if (error.response.data.message ==='Account is pending approval.'){
          dispatch(updateShowResendLink(true))
        }
        setLoading(false)
      })
    }
  };

  const toggleForgotPassword =(val:boolean)=>{
    dispatch(setForgottenPassword(val))
  }

  useEffect(() => {
    resetValidation();
  }, [loginDetails]);

  return {
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
  };
}

export default useLogin;
