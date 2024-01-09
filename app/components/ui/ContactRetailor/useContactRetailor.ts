'use client'
import { useEffect, useState } from "react";

function useContactRetailor() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [validateDetails, setValidateDetails] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleValidation = () => {
    let validated = 0;
    if (formData.name === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        name: true,
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

    if (formData.subject === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        subject: true,
      }));
      validated += 1;
    }

    if (formData.message === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        message: true,
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
        name: false,
        email: false,
        subject: false,
        message: false,
      });
      setFeedbackMessage("");
    };

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (handleValidation()) {
        setLoading(true);
      }
    };

      useEffect(() => {
        resetValidation();
      }, [formData]);

  return { formData, validateDetails,loading, feedbackMessage, handleSendMessage, setFormData };
}
export default useContactRetailor;
