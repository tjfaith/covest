'use client'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";


function useProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateActivePage("referrals"));
  }, []);
  return {};
}

export default useProfile;
