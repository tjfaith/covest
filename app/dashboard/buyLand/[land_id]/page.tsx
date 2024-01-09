'use client'
import { PropertyDynamicPage } from "@/app/components";
import React from "react";
import useSingleLand from "./useSingleLand";
const page = () => {
  const {} = useSingleLand();
  return <PropertyDynamicPage />;
};

export default page;
