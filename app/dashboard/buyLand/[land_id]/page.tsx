'use client'
import { PropertyDynamicPage } from "@/app/components";
import React from "react";
import useSingleLand from "./useSingleLand";
const LandProperty = () => {
  const {} = useSingleLand();
  return (<PropertyDynamicPage />);
};

export default LandProperty;
