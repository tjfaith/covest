"use client";

import { useState } from "react";
import { BuyNow_SelectedItem } from "@/app/functions/types";

function useBuyProperty() {
  const [selectedItem, setSelectedItem] =
    useState<BuyNow_SelectedItem>("investment-price");

  const handleGoBack = () => {
    if (selectedItem === "selected-payment") {
      setSelectedItem("investment-price");
    } else if (selectedItem === "bank-transfer") {
      setSelectedItem("selected-payment");
    }
  };

  return { selectedItem, handleGoBack, setSelectedItem };
}
export default useBuyProperty;
