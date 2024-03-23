"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {BuyNow_SelectedItem } from "@/app/functions/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store";
import { updatePropertyPaymentDetails } from "@/app/Store/Features/propertySlice";

interface InvestmentPriceProp{
  setSelectedItem:Dispatch<SetStateAction<BuyNow_SelectedItem>>;
}
function useBuyProperty({setSelectedItem}:InvestmentPriceProp) {
  const { selectedProperty, propertyPaymentDetails } = useSelector(
    (state: RootState) => state.property
  );

  const dispatch = useDispatch()

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(propertyPaymentDetails);

  const [validateDetails, setValidateDetails] = useState<Record<
    string,
    boolean
  > | null>(null);

  const computeROI = (noOfUnit:number)=>{
    const total_amount = noOfUnit * Number(selectedProperty.price) | 0

    const roi = total_amount * 25/100
    const total_return  = total_amount + roi 
    setFormData({...formData, noOfUnit, totalAmountPayable: total_amount, estimateROI:total_return})
  }


  const handleValidation = () => {
    let validated = 0;
    if (formData.noOfUnit === 0 || !formData.noOfUnit) {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        noOfUnit: true,
      }));
      validated += 1;
    }

    if(acceptTerms ===false){
      setValidateDetails((prevVal) => ({
        ...prevVal,
        terms: true,
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
      setSelectedItem('selected-payment')
      dispatch(updatePropertyPaymentDetails({...formData, propertyId:selectedProperty.id as string}))
      setLoading(false)
    }
  };

  useEffect(()=>{
    setValidateDetails(null)
  },[formData, acceptTerms] )
  return { handleSubmit,setFormData,computeROI,setAcceptTerms, acceptTerms, formData, validateDetails,loading };
}

export default useBuyProperty;
