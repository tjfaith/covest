"use client";

import { RootState } from "@/app/Store";
import { PaymentServices } from "@/app/api";
import { BuyNow_SelectedItem } from "@/app/functions/types";
import { redirect, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

interface SelectPaymentProp {
  setSelectedItem: Dispatch<SetStateAction<BuyNow_SelectedItem>>;
}

function useSelectPayment({ setSelectedItem }: SelectPaymentProp) {
  const router = useRouter()
  const { propertyPaymentDetails } = useSelector(
    (state: RootState) => state.property
  );
  const { loggedInUser } = useSelector(
    (state: RootState) => state.user
  );
  const [selectedCheckbox, setSelectedCheckbox] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const changePaymentMethod = (selected: string) => {
    setSelectedCheckbox(selected);
    setSelectedItem("bank-transfer");
  };

  const initiateTransfer =async()=>{
    console.log(loggedInUser, 'logged in user...')
    const {totalAmountPayable, noOfUnit, estimateROI, propertyId} = propertyPaymentDetails
    const payload={
      email:loggedInUser.email,
      amount:totalAmountPayable,
      unitBought:noOfUnit,
      estimatedRoi:estimateROI,
      propertyId:propertyId

    }
    await PaymentServices().initiatePayment(payload).then(response=>{
      console.log(response.data.data.authorization_url, 'response...')
      router.push(response.data.data.authorization_url)
    }, error=>{[
      toast.error(error.response.data.error?error.response.data.error : error.response.data.message)
    ]})
  }
  return {
    selectedCheckbox,
    loading,
    propertyPaymentDetails,
    initiateTransfer,
    changePaymentMethod,
    setSelectedCheckbox,
  };
}

export default useSelectPayment;
