"use client";
import React from "react";
import useVerifyEmail from "./useVerifyEmail";
import { CustomButton, Loader } from "@/app/components";
const VerifyEmail = () => {
  const { error, loading, verifyEmail } = useVerifyEmail();
  return (
    <div className=" h-screen-60 flex items-center justify-center w-full ">
      {loading && <Loader fullScreen={true} size={200} background="bg-white" />}
      <div className=" w-full md:w-5/12 flex items-center flex-col gap-2  text-gray-600 ">
        <div className="  p-4 text-center text-red-500 w-full text-xl font-bold">
          {error}
        </div>
        <div className="w-1/2">
          <CustomButton label={"Home Page"} handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
