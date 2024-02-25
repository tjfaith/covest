"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomTab, LandOpportunities, LandPayments, MyLands, Pagination } from "@/app/components";
import useBuyLand from "./useBuyLand";
const BuyLand = () => {
  const { tabPayload, currentTab, setCurrentTab } = useBuyLand();
  return (
    <div>

<CustomTab
        tabItems={tabPayload}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === "land_opportunities" && <LandOpportunities />}
      {currentTab === "my_lands" && <MyLands />}
      {currentTab === "land_payments" && <LandPayments />}


    </div>
  );
};

export default BuyLand;
