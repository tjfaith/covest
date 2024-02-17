"use client";

import { useState } from "react";

function useBuyProperty() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    noOfUnit: 0,
    totalAmountPayable: 0.00,
    estimateROI: 0.00,
  });

  const [validateDetails, setValidateDetails] = useState<Record<
    string,
    boolean
  > | null>(null);

  const handleValidation = () => {
    let validated = 0;
    if (formData.noOfUnit === 0 || !formData.noOfUnit) {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        noOfUnit: true,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
    }
  };
  return { handleSubmit,setFormData, formData, validateDetails,loading };
}

export default useBuyProperty;
