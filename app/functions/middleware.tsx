'use client'
import { LocalStorageServices } from "@/app/api";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function middleware(Component:any){
    return function WithAuth(props:any){
        const session = LocalStorageServices().getAccessToken()
        useEffect(()=>{
            if(!session){
                redirect('/')
            }
        },[]);

        if(!session){
            return null;
        }

        return <Component {...props}/>;
    }
}