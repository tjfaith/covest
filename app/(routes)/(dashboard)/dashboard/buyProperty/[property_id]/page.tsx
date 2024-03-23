"use client";

import { CustomButton, PropertyDynamicPage } from "@/app/components";
import React from "react";
import useSingleProperty from "./useSingleProperty";
const Property = () => {
  const {router} = useSingleProperty();
  return (
  <>
     <div className=" inline-flex mb-5">
      <CustomButton label={"Go Back"} handleClick={()=>router.push('/dashboard/buyProperty')}/>
      </div>
  <PropertyDynamicPage />
  </>
  );
};

export default Property;
