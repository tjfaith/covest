"use client";

import { PropertyDynamicPage } from "@/app/components";
import React from "react";
import useSingleProperty from "./useSingleProperty";
const page = () => {
  const {} = useSingleProperty();
  return <PropertyDynamicPage />;
};

export default page;
