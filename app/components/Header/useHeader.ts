'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store";
import { toggleAuth } from "@/app/Store/Features/authSlice";

function useHeader(){
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false)
  const { showAuth } = useSelector((state: RootState) => state.auth);


    const handleToggleAuth=(val:boolean)=>{
      dispatch(toggleAuth(val))
    }
    return { showNav,showAuth, handleToggleAuth, setShowNav };
}

export default useHeader