'use client'
import { toggleSideBar } from "@/app/Store/Features/settingsSlice";
import { useDispatch } from "react-redux";

function useTopBar(){
    const dispatch = useDispatch();

    const showSideBar=()=>{
        dispatch(toggleSideBar(true));
    }

    return{showSideBar}
}
export default useTopBar;