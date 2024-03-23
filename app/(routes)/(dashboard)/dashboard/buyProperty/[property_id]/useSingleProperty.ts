"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";
import { useRouter } from "next/navigation";

function useSingleProperty() {
  const dispatch = useDispatch();
  const router = useRouter()
  useEffect(() => {
    dispatch(updateActivePage("buy_property"));
  }, []);
  return {router};
}
export default useSingleProperty;
