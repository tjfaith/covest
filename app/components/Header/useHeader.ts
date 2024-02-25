'use client'
import { useState } from "react";

function useHeader(){
  const [showAuthentication, setShowAuthentication] = useState(false);
  const [showNav, setShowNav] = useState(false)

    return { showAuthentication, showNav, setShowNav, setShowAuthentication };
}

export default useHeader