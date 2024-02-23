"use client";
import React from "react";
import Image from "next/image";
import {
  CustomTab,
  MyProperties,
  Opportunities,
  Pagination,
  Payments,
} from "@/app/components";
import useBuyProperty from "./useBuyProperty";
const BuyProperty = () => {
  const { tabPayload, currentTab, setCurrentTab } = useBuyProperty();
  return (
    <div>
      <CustomTab
        tabItems={tabPayload}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === "opportunities" && <Opportunities />}
      {currentTab === "my_properties" && <MyProperties />}
      {currentTab === "payments" && <Payments />}
    </div>
  );
};

export default BuyProperty;
