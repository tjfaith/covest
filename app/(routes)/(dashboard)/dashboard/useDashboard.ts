'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";
import { RootState } from "@/app/Store";


function useDashboard() {
  const dispatch = useDispatch();
  const {loggedInUser} = useSelector(
    (state: RootState) => state.user
  );


  useEffect(() => {
    dispatch(updateActivePage("dashboard"));
  }, []);
  return {loggedInUser};
}

export default useDashboard;
