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
      <h1 className="text-lg font-bold">Referrals</h1>

      <div className="mt-5 space-y-4">
        <div className="animate__animated animate__fadeInUp animate__faster bg-foreground  rounded-sm p-5 flex items-center justify-between pr-24 pl-10">
          <div className="flex-grow">
            <h1 className="text-4xl font-light w-1/3">
              Refer Client to get free coupon{" "}
            </h1>
            <div className="flex items-center mt-5 ">
              <div className="bg-primary p-2">
                https://dribbble.com/shots/19232108-Earn-more-BTRST
              </div>
              <div className=" inline-block">
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
        <div className="animate__animated animate__fadeInUp animate__slow bg-foreground  rounded-sm p-5 flex items-center justify-between pr-24 pl-10">
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
