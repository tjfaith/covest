'use client'
import React from "react";
import { SideBar, TopBar } from "@/app/components";
import middleware from "@/app/functions/middleware";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gradient-to-t to-background from-destructive-foreground">
      <div className="h-screen lg:w-72  ">
        <SideBar />
      </div>
      <div className=" text-secondary p-5 lg:px-10 py-5 w-full">
        <TopBar/>
        {children}
        </div>
    </div>
  );
};

export default middleware(Layout);
