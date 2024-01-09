'use client'
import { useState } from "react";

function useHeader(){
  const [showAuthentication, setShowAuthentication] = useState(false);

    return { showAuthentication, setShowAuthentication };
}

export default useHeader