'use client'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";
import { UserServices } from "@/app/api";
import { updateLoggedInUser } from "@/app/Store/Features/userSlice";


function useDashboard() {
  const dispatch = useDispatch();

  const getUserData = async ()=>{
    await UserServices().userData().then(response=>{
      console.log(response.data, 'user data')
      dispatch(updateLoggedInUser(response.data))
    }, error=>{
      console.log(error)
    })
  }

  useEffect(() => {
    dispatch(updateActivePage("dashboard"));
    getUserData()
  }, []);
  return {};
}

export default useDashboard;
