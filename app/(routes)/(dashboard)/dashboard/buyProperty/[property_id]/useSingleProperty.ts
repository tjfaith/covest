"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useSingleProperty() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateActivePage("buy_property"));
  }, []);
  return {};
}
export default useSingleProperty;
