"use client";
import React from "react";
import { CustomButton, CustomInput } from "@/app/components";
import { Mail, MailPlus, Menu, Search, ShoppingCart } from "lucide-react";
import useTopBar from "./useTopBar";

const TopBar = () => {
  const {showSideBar} = useTopBar()
  return (
    <div className="flex gap-2 items-center mb-5  w-full">
      <div className="w-10 lg:hidden flex items-center justify-center bg-secondary text-primary rounded-lg p-2" onClick={showSideBar}><Menu className="h-5 w-5  " /></div>
      <form className="w-full">
        <CustomInput
          error={false}
          icon={<Search />}
          iconPosition="right"
          placeholder="search property"
          textColor="text-primary"
          borderColor="border-primary"
          inputType="email"
          value={""}
          handleChange={(value: string) => {}}
        />
      </form>
      <MailPlus className="text-destructive" />
      {/* <Mail /> */}
      <div className="relative">
        <div className="absolute bg-red-500 text-white rounded-full p-1 flex items-center justify-center h-6 w-6 -top-4 left-4">
          2
        </div>
        <ShoppingCart className="text-destructive" />
      </div>
    </div>
  );
};

export default TopBar;
