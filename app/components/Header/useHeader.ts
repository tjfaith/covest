'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store";
import { toggleAuth } from "@/app/Store/Features/authSlice";
import { LocalStorageServices } from "@/app/api";
import { useRouter } from "next/navigation";


function useHeader(){
  const dispatch = useDispatch()
  const router = useRouter()
  const [showNav, setShowNav] = useState(false)
  const { showAuth } = useSelector((state: RootState) => state.auth);
  const isLogin = LocalStorageServices().getAccessToken()

    const handleToggleAuth=(val:boolean)=>{
      dispatch(toggleAuth(val))
    }
    return { showNav,showAuth,isLogin, router, handleToggleAuth, setShowNav };
}

export default useHeader