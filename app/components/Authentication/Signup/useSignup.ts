"use client";

import { useEffect, useState } from "react";

function useSignup() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [validateDetails, setValidateDetails] = useState({
    username: false,
    password: false,
  });

  const handleValidation = () => {
    let validated = 0;
    if (loginDetails.username === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        username: true,
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
      username: false,
      password: false,
    });
    setFeedbackMessage("");
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
    }
  };

  useEffect(() => {
    resetValidation();
  }, [loginDetails]);

  return {
    loginDetails,
    validateDetails,
    feedbackMessage,
    isChecked,
    loading,
    setIsChecked,
    setLoginDetails,
    handleSignup,
  };
}

export default useSignup;
