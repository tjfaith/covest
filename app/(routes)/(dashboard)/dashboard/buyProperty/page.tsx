"use client";
import React from "react";
import Image from "next/image";
import {
  CustomTab,
  MyProperties,
  Opportunities,
  Pagination,
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
    </div>
  );
};

export default BuyProperty;
