"use client";
import React from "react";
import useDashboard from "./useDashboard";
import Image from "next/image";
import {
  BarChartHorizontal,
  CandlestickChart,
  ScatterChart,
  Users,
} from "lucide-react";
import { CustomButton } from "@/app/components";

const Dashboard = () => {
  const {} = useDashboard();
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="font-extrabold">Dashboard</div>
        <div className="flex items-center ">
          <Image
            src="/images/hand_wave.png"
            className="ml-2"
            alt="Hand Waving"
            width={30}
            height={30}
          />
          <span>Hello</span>{" "}
          <span className=" font-extrabold text-secondary ml-1">
            {"Tejiri"}
          </span>
        </div>
      </div>
      {/* <hr className="border-t border-muted-foreground" /> */}
      <div className=" flex flex-wrap gap-4 items-center justify-between mt-10 overflow-hidden">
        <div className="animate__animated animate__fadeInRight animate__slow relative overflow-hidden inline-flex items-center bg-secondary/50 text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-secondary p-3 rounded-lg h-full w-1/3 text-2xl flex items-center justify-center font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5 text-secondary">
            <div>Total Portfolio</div>
          </div>
          <CandlestickChart className="h-28 w-28 text-primary/40 absolute  bottom-0 right-0 -rotate-45" />
        </div>

        <div className="animate__animated animate__fadeInRight animate__fast relative overflow-hidden inline-flex items-center bg-secondary/10 text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-primary text-secondary p-3 h-full w-1/3 text-2xl flex items-center justify-center rounded-lg font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5 text-secondary">
            <div>Total Property Costs</div>
          </div>
          <ScatterChart className="h-28 w-28 text-secondary/40 absolute  bottom-0 right-0 -rotate-45" />
        </div>

        <div className="animate__animated animate__fadeInRight animate__faster relative overflow-hidden inline-flex items-center bg-secondary/90 text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-secondary/50 shadow-sm p-3 rounded-lg h-full w-1/3 text-2xl flex items-center justify-center font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5 text-primary flex-grow">
            <div>Total Land Costs</div>
          </div>
          <BarChartHorizontal className="h-28 w-28 text-primary/40 absolute bottom-0 right-0 -rotate-45" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center mt-10 gap-4">
        <div className="bg-foreground p-5 rounded-xl flex md:items-center md:flex-row flex-col gap-3 justify-between  ">
          <div>
            <span className="text-4xl font-extrabold text-secondary">
              With this LandBanking offer
            </span>{" "}
            <br />
            <span className="font-extrabold">
              you too can buy land as an investment, hold it for 18 months, and
              earn 45% Return of Investment
            </span>
          </div>
          <div className="">
            <CustomButton
              label={"Proceed"}
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
        <div className=" relative overflow-hidden inline-flex items-center bg-secondary/50 text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-secondary p-3 rounded-lg h-full w-1/3 text-2xl flex items-center justify-center font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5 text-secondary">
            <div>Total Referrals</div>
          </div>
          <Users className="h-28 w-28 text-primary/40 absolute  bottom-0 right-0 " />
        </div>
      </div>

      <div className="bg-gray-100 font-sans mt-5">
        <h1 className="text-lg font-bold mb-4">Recent Activity</h1>

        Activity Item 1
        <div className="bg-blue-50 rounded p-2 shadow mb-2">
          <p className="text-blue-600 mb-1">New Property Listing:</p>
          <p className="text-blue-800 text-sm">
            Check out the stunning waterfront property just listed in your area.
          </p>
          <p className="text-blue-500 text-xs mt-1">2 hours ago</p>
        </div>

        Activity Item 2
        <div className="bg-green-50 rounded p-2 shadow mb-2">
          <p className="text-green-600 mb-1">Open House Reminder:</p>
          <p className="text-green-800 text-sm">
            Don&apos;t forget about the open house event this weekend. See you there!
          </p>
          <p className="text-green-500 text-xs mt-1">4 hours ago</p>
        </div>

        Activity Item 3
        <div className="bg-yellow-50 rounded p-2 shadow mb-2">
          <p className="text-yellow-600 mb-1">New Buyer Inquiry:</p>
          <p className="text-yellow-800 text-sm">
            A potential buyer has shown interest in your listed property. Follow
            up soon!
          </p>
          <p className="text-yellow-500 text-xs mt-1">1 day ago</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
