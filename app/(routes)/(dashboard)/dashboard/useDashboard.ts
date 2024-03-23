'use client'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";
import { UserServices } from "@/app/api";
import { updateLoggedInUser } from "@/app/Store/Features/userSlice";


function useDashboard() {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(updateActivePage("dashboard"));
  }, []);
  return {};
}

export default useDashboard;
