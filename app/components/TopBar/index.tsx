"use client";
import React from "react";
import { CustomInput } from "@/app/components";
import { Mail, MailPlus, Search, ShoppingCart } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex gap-2 items-center w-full mb-5">
      <form className="w-full">
        <CustomInput
          error={false}
          icon={<Search />}
          iconPosition="right"
          placeholder="search property"
          textColor="text-secondary"
          bgColor="bg-primary"
          borderColor="border-secondary"
          inputType="email"
          value={""}
          handleChange={(value: string) => {}}
        />
      </form>
      <MailPlus className="text-red-500" />
      {/* <Mail /> */}
      <div className="relative">
        <div className="absolute bg-red-500 text-white rounded-full p-1 flex items-center justify-center h-6 w-6 -top-4 left-4">
          2
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default TopBar;
