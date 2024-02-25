"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useProfile() {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("profile")

  const tabPayload = {
    profile:'Profile',
    next_of_kin:'Next of Kin',
    security:'Security',
  }

  useEffect(() => {
    dispatch(updateActivePage("profile"));
  }, []);
  return {
    tabPayload,
    currentTab, setCurrentTab,
  };
}

export default useProfile;
