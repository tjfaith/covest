"use client";
import { setForgottenPassword, toggleAuth, updateShowResendLink } from "@/app/Store/Features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store";
import { useState } from "react";

function useAuthentication() {
  const dispatch = useDispatch();
  const { showResendLink, forgottenPassword } = useSelector((state: RootState) => state.auth);
  const [showLogin, setShowLogin] = useState(true);
  const [successfulMessage, setSuccessfulMessage] = useState("");
  const [resendActivationLink, setResendActivationLink] = useState(false)


  const toggleResendLink =(val:boolean)=>{
    dispatch(updateShowResendLink(val))
  }
  
  const handleToggleAuth=(val:boolean)=>{
    dispatch(toggleAuth(val))
  }

  return {
    showResendLink,
    showLogin,
    successfulMessage,
    resendActivationLink,
    forgottenPassword,
    handleToggleAuth,
    setResendActivationLink,
    toggleResendLink,
    setSuccessfulMessage,
    setShowLogin,
  };
}

export default useAuthentication;
