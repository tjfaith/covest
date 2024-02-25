"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useSingleLand() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateActivePage("buy_land"));
  }, []);
  return {};
}
export default useSingleLand;
