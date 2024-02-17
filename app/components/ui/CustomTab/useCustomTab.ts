'use client'
import { useState } from "react";
import { CustomTabProps } from "@/app/functions/interface";

function useCustomTab({tabItems}:CustomTabProps){
    const [currentTab, setCurrentTab] = useState('profile')

    return {currentTab, setCurrentTab}
}
export default useCustomTab;