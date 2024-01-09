'use client'
import { useState } from "react";

function useCustomInput() {
  const [canSee, setCanSee] = useState(false);

  return {  canSee, setCanSee };
}
export default useCustomInput;
