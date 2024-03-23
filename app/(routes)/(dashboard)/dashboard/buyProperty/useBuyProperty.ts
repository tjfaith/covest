"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useBuyProperty() {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("opportunities");
  


  const tabPayload = {
    opportunities: "Opportunities",
    my_properties: "My Properties",
    payments: "Payments",
  };



  useEffect(() => {
    dispatch(updateActivePage("buy_property"));
  }, []);
  return { tabPayload, currentTab, setCurrentTab };
}

export default useBuyProperty;
