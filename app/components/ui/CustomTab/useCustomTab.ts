'use client'
import { useState } from "react";
import { CustomTabProps } from "@/app/functions/interface";

function useCustomTab({tabItems, defaultItem}:CustomTabProps){
    const [currentTab, setCurrentTab] = useState(defaultItem)

    return {currentTab, setCurrentTab}
}
export default useCustomTab;