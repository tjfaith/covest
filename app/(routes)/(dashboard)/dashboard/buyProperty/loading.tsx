import React from "react";
import { Loader } from "@/app/components";

const loading = () => {
  return (
    <div className=" bg-background/50 bg-opacity-50 h-screen w-screen absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
      <Loader size={100}   />
    </div>
  );
};

export default loading;
