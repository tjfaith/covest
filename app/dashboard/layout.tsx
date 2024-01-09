import React from "react";
import { SideBar, TopBar } from "@/app/components";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-primary">
      <div className="h-screen w-80 ">
        <SideBar />
      </div>
      <div className=" text-secondary px-16 py-5 w-full">
        <TopBar/>
        {children}
        </div>
    </div>
  );
};

export default layout;
