'use client'
import { toggleAuth } from "@/app/Store/Features/authSlice";
import { LocalStorageServices } from "@/app/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useBanner(){
  const dispatch = useDispatch()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(LocalStorageServices().getAccessToken())

  const handleToggleAuth=(val:boolean)=>{
    dispatch(toggleAuth(val))
  }

  useEffect(()=>{
    setIsLogin(LocalStorageServices().getAccessToken())
  }, [LocalStorageServices().getAccessToken()])

    return { handleToggleAuth, router, isLogin };
}

export default useBanner