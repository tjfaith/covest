'use client'
import { useState } from "react";

function useBanner(){
  const [showAuthentication, setShowAuthentication] = useState(false);

    return { showAuthentication, setShowAuthentication };
}

export default useBanner