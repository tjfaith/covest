"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useProfile() {
  const dispatch = useDispatch();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const gender = [
    {
      label: "Male",
      id: "male",
    },
    {
      label: "Female",
      id: "female",
    },
  ];

  const maritalStatus = [
    {
      label: "Single",
      id: "single",
    },
    {
      label: "Married",
      id: "married",
    },
    {
      label: "Divorce",
      id: "divorce",
    },
    {
      label: "Separated",
      id: "separated",
    },
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const [validateDetails, setValidateDetails] = useState<Record<
    string,
    boolean
  > | null>(null);

  const handleValidation = () => {
    let validated = 0;
    if (formData.firstName === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        firstName: true,
      }));
      validated += 1;
    }

    if (formData.lastName === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        lastName: true,
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

    if (formData.gender === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        gender: true,
      }));
      validated += 1;
    }

    if (formData.maritalStatus === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        maritalStatus: true,
      }));
      validated += 1;
    }

    if (formData.dateOfBirth==="") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        dateOfBirth: true,
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

    if (formData.city === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        city: true,
      }));
      validated += 1;
    }

    if (formData.state === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        state: true,
      }));
      validated += 1;
    }

    if (formData.country === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        country: true,
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


  const tabPayload = [
    {profile:'Profile', default:true},
    {next_of_kin:'Next of Kin', default:false},
    {security:'Security', default:false}
  ]

  useEffect(() => {
    dispatch(updateActivePage("profile"));
  }, []);
  return {
    handleSubmit,
    setFormData,
    tabPayload,
    maritalStatus,
    gender,
    formData,
    validateDetails,
    loading,
    feedbackMessage,
  };
}

export default useProfile;
