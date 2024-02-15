'use client'

import { useState } from "react";

function useCustomTab(){
    const [currentTab, setCurrentTab] = useState('profile')

    return {currentTab, setCurrentTab}
}
export default useCustomTab;