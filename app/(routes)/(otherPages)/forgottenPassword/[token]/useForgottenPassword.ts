"use client";
import { useParams, useRouter } from "next/navigation";
import { AuthServices, LocalStorageServices } from "@/app/api";
import { useEffect, useState } from "react";
import {
  setForgottenPassword,
  toggleAuth,
} from "@/app/Store/Features/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function useVerifyEmail() {
  const dispatch = useDispatch();
  const token = useParams().token;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [payload, setPayload] = useState({
    email: LocalStorageServices().getAccountEmail(),
    newPassword: "",
    confirmPassword: "",
    token: token as string,
  });

  const [validateDetails, setValidateDetails] = useState({
    email: false,
    newPassword: false,
    confirmPassword: false,
    token: false,
  });

  const handleValidation = () => {
    let validated = 0;
    if (payload.email === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        email: true,
      }));
      validated += 1;
    }

    if (payload.newPassword === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        newPassword: true,
      }));
      validated += 1;
    }

    if (
      payload.newPassword !== "" &&
      payload.newPassword !== payload.confirmPassword
    ) {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        confirmPassword: true,
      }));
      validated += 1;
    }

    if (payload.token === "") {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        token: true,
      }));
      validated += 1;
    }

    if (validated == 0) {
      return true;
    } else {
      if (
        payload.newPassword !== "" &&
        payload.newPassword !== payload.confirmPassword
      ) {
        setFeedbackMessage("Password did not match");
      } else {
        setFeedbackMessage("Fill all required felid");
      }
      return false;
    }
  };

  const resetValidation = () => {
    setValidateDetails({
      ...validateDetails,
      newPassword: false,
      confirmPassword: false,
    });
    setFeedbackMessage("");
  };

  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
      await AuthServices()
        .resetPassword(payload)
        .then(
          (response) => {
            setLoading(false);
            toast.success(response.data.message);
            dispatch(toggleAuth(true));
            localStorage.removeItem("account_email");
            router.push("/");
          },
          (error) => {
            toast.error(
              error.response.data.error
                ? error.response.data.error
                : error.response.data.message
            );
            setFeedbackMessage(
              error.response.data.error
                ? error.response.data.error
                : error.response.data.message
            );

            setLoading(false);
          }
        );
    }
  };

  useEffect(() => {
    if (payload.email === "" || !payload.email) {
      toast.error(
        "No email detected, resend token, and use the same device to update your password"
      );
      router.push("/");
      dispatch(setForgottenPassword(true));
      dispatch(toggleAuth(true));
    }
  }, []);

  useEffect(() => {
    resetValidation();
  }, [payload]);

  return {
    loading,
    payload,
    validateDetails,
    feedbackMessage,
    setPayload,
    resetPassword,
  };
}

export default useVerifyEmail;
