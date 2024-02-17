"use client";
import { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useNextOfKin() {
  const dispatch = useDispatch();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    relationship: "",
    address: "",
  });

  const [validateDetails, setValidateDetails] = useState<Record<
    string,
    boolean
  > | null>(null);

  const handleValidation = () => {
    let validated = 0;
    if (formData.fullName === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        fullName: true,
      }));
      validated += 1;
    }

    if (formData.email === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        email: true,
      }));
      validated += 1;
    }

    if (formData.phoneNumber === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        phoneNumber: true,
      }));
      validated += 1;
    }

    if (formData.relationship === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        relationship: true,
      }));
      validated += 1;
    }

    if (formData.address === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        address: true,
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
    setValidateDetails(null);
    setFeedbackMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
    }
  };

  useEffect(() => {
    dispatch(updateActivePage("profile"));
  }, []);
  return {
    handleSubmit,
    setFormData,
    formData,
    validateDetails,
    loading,
    feedbackMessage,
  };
}

export default useNextOfKin;
