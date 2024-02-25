"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useBuyLand() {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("land_opportunities");

  const tabPayload = {
    land_opportunities: "Opportunities",
    my_lands: "My Lands",
    land_payments: "Payments",
  };

  useEffect(() => {
    dispatch(updateActivePage("buy_land"));
  }, []);
  return { tabPayload, currentTab, setCurrentTab };
}

export default useBuyLand;
