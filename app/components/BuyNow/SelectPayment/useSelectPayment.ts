"use client";

import { BuyNow_SelectedItem } from "@/app/functions/types";
import { Dispatch, SetStateAction, useState } from "react";

interface SelectPaymentProp {
  setSelectedItem: Dispatch<SetStateAction<BuyNow_SelectedItem>>;
}

function useSelectPayment({ setSelectedItem }: SelectPaymentProp) {
  const [selectedCheckbox, setSelectedCheckbox] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const changePaymentMethod = (selected: string) => {
    setSelectedCheckbox(selected);
    setSelectedItem("bank-transfer");
  };
  return {
    selectedCheckbox,
    loading,
    changePaymentMethod,
    setSelectedCheckbox,
  };
}

export default useSelectPayment;
