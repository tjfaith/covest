"use client";

import { PropertyDynamicPage } from "@/app/components";
import React from "react";
import useSingleProperty from "./useSingleProperty";
const Property = () => {
  const {} = useSingleProperty();
  return <PropertyDynamicPage />;
};

export default Property;
