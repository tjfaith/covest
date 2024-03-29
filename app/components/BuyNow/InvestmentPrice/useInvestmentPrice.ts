"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BuyNow_SelectedItem } from "@/app/functions/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store";
import { updatePropertyPaymentDetails } from "@/app/Store/Features/propertySlice";

interface InvestmentPriceProp {
  setSelectedItem: Dispatch<SetStateAction<BuyNow_SelectedItem>>;
}
function useBuyProperty({ setSelectedItem }: InvestmentPriceProp) {
  const { selectedProperty, propertyPaymentDetails } = useSelector(
    (state: RootState) => state.property
  );

  const dispatch = useDispatch();

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [unitRemaining, setUnitRemaining] = useState(0)
  const maximumUnit = Number(selectedProperty.total_units) -Number(selectedProperty.total_units_sold)
  const [formData, setFormData] = useState(propertyPaymentDetails);

  const [validateDetails, setValidateDetails] = useState<Record<
    string,
    boolean
  > | null>(null);

  const computeROI = (noOfUnit: number) => {
    console.log(selectedProperty, 'selected property')
    if(noOfUnit <= maximumUnit){
    
    const total_amount = (noOfUnit * Number(selectedProperty.price)) | 0;

    const roi = (total_amount * (selectedProperty?.roi ?? 0)) / 100;
    const total_return = total_amount + roi;
    setFormData({
      ...formData,
      noOfUnit,
      totalAmountPayable: total_amount,
      estimateROI: total_return,
    });
  }
  };

  const handleValidation = () => {
    let validated = 0;
    if (formData.noOfUnit === 0 || !formData.noOfUnit) {
      setValidateDetails((prevVal) => ({
        ...prevVal,
        noOfUnit: true,
      }));
      validated += 1;
    }

    if (acceptTerms === false) {
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
      setSelectedItem("selected-payment");
      dispatch(
        updatePropertyPaymentDetails({
          ...formData,
          propertyId: selectedProperty.id as string,
        })
      );
      setLoading(false);
    }
  };

  const sumUnitRemaining = () => {
    setUnitRemaining(Number(selectedProperty.total_units)  - (Number(selectedProperty.total_units_sold)  + formData.noOfUnit) )
  };
  useEffect(() => {
    setValidateDetails(null);
  }, [formData, acceptTerms]);

  useEffect(()=>{
    sumUnitRemaining()
  }, [formData.noOfUnit])
  return {
    handleSubmit,
    setFormData,
    computeROI,
    setAcceptTerms,
    maximumUnit,
    unitRemaining,
    selectedProperty,
    acceptTerms,
    formData,
    validateDetails,
    loading,
  };
}

export default useBuyProperty;
