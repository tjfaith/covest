'use client'
import { toggleAuth } from "@/app/Store/Features/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function useBanner(){
  const dispatch = useDispatch()
  const handleToggleAuth=(val:boolean)=>{
    dispatch(toggleAuth(val))
  }


    return { handleToggleAuth };
}

export default useBanner