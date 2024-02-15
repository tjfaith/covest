"use client";
import React from "react";
import useReferrals from "./useReferrals";
import Image from "next/image";
import { CustomButton } from "@/app/components";
import { Copy, Users } from "lucide-react";
const Referrals = () => {
  const {} = useReferrals();
  return (
    <div>
      <h1 className="text-lg font-bold text-primary">Referrals</h1>

      <div className="mt-5 space-y-4">
        <div className="animate__animated animate__fadeInUp animate__faster  rounded-sm p-5 flex md:flex-row flex-col items-center justify-between  md:pr-24 md:pl-10 border-y-2 bg-gradient-to-br from-white via-slate-50 to-transparent">
          <div className="flex-grow  ">
            <div className="flex items-center mt-5 md:flex-row flex-col lg:text-4xl md:font-light font-extrabold lg:w-1/3  break-words text-primary">
              Refer Client to get free coupon
            </div>
            <div className="flex items-center mt-5 md:flex-row flex-col ">
              <div className="text-foreground p-2 w-10/12 break-words bg-card">
                https://dribbble.com/shots/19232108-Earn-more-BTRST
              </div>
              <div>
                <CustomButton
                  label={""}
                  icon={<Copy />}
                  handleClick={() => {}}
                />
              </div>
            </div>
          </div>
          <Image
            src="/images/refer.gif"
            alt="refer"
            height={30}
            width={150}
            className=""
          />
        </div>
        <div className="animate__animated animate__fadeInUp animate__slow bg-card text-foreground  rounded-sm p-5 flex items-center justify-between pr-24 pl-10">
          <div className="flex items-center space-x-2">
            <Users />
            <div className="text-lg font-bold">Total Referrals</div>
          </div>
          <div className="text-xl font-extrabold">20</div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
