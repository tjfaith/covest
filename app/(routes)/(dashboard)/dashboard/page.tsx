"use client";
import React from "react";
import useDashboard from "./useDashboard";
import Image from "next/image";
import {
  BarChartHorizontal,
  CandlestickChart,
  LandPlot,
  Pyramid,
  ScatterChart,
  Users,
} from "lucide-react";
import { CustomButton } from "@/app/components";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const {loggedInUser} = useDashboard();
  return (
    <div>
      <Toaster/>

      <div className="flex items-center justify-between mb-5">
        <div className="font-extrabold text-primary">Dashboard</div>
        <div className="flex items-center text-primary">
          <Image
            src="/images/hand_wave.png"
            className="ml-2"
            alt="Hand Waving"
            width={30}
            height={30}
          />
          <span>Hello</span>{" "}
          <span className=" font-extrabold  ml-1">
            {loggedInUser.first_name && loggedInUser.first_name}
          </span>
        </div>
      </div>
      {/* <hr className="border-t border-muted-foreground" /> */}
      <div className=" flex flex-wrap gap-4 items-center justify-between mt-10 overflow-hidden bg-destructive-foreground shadow-md p-2 rounded-lg">
        <Link href="/dashboard/buyProperty" className="animate__animated animate__fadeInUp animate__slow relative overflow-hidden inline-flex items-center bg-gradient-to-r from-card  to-destructive text-primary rounded-lg  flex-grow justify-between shadow">
          <div className="relative text-lg font-bold px-5 text-destructive">
            <div>Buy Property</div>
          </div>
          <div className="bg-gradient-to-l from-destructive p-3 rounded-lg h-full  text-2xl flex items-center justify-center font-extrabold">
          <LandPlot className="h-10 w-10 text-muted  " />
          </div>
        </Link>


        <Link href="/dashboard/buyLand" className="animate__animated animate__fadeInUp animate__fast relative overflow-hidden inline-flex items-center bg-gradient-to-r from-card  to-destructive text-primary rounded-lg  flex-grow justify-between shadow">
          <div className="relative text-lg font-bold px-5 text-destructive">
            <div>Buy Land</div>
          </div>
          <div className="bg-gradient-to-l from-destructive p-3 rounded-lg h-full  text-2xl flex items-center justify-center font-extrabold">
          <Pyramid className="h-10 w-10 text-muted  " />
          </div>
        </Link>

        <Link href="/dashboard/referrals" className="animate__animated animate__fadeInUp animate__faster relative overflow-hidden inline-flex items-center bg-gradient-to-r from-card  to-destructive text-primary rounded-lg  flex-grow justify-between shadow">
          <div className="relative text-lg font-bold px-5 text-destructive">
            <div>Referrals</div>
          </div>
          <div className=" bg-gradient-to-l from-destructive p-3 rounded-lg h-full  text-2xl flex items-center justify-center font-extrabold">
          <Users className="h-10 w-10 text-muted  " />
          </div>
        </Link>
      </div>

      <div className=" flex flex-wrap gap-4 items-center justify-between mt-10 overflow-hidden">
        <div className="animate__animated animate__fadeInRight animate__slow relative overflow-hidden inline-flex items-center bg-card text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-secondary-foreground p-3 rounded-lg h-full w-1/3 text-2xl flex items-center justify-center font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5 text-primary">
            <div>Total Portfolio</div>
          </div>
          <CandlestickChart className="h-28 w-28 text-muted absolute  bottom-0 right-0 -rotate-45" />
        </div>

        <div className="animate__animated animate__fadeInRight animate__fast relative overflow-hidden inline-flex items-center bg-card text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-secondary-foreground p-3 rounded-lg h-full w-1/3 text-2xl flex items-center justify-center font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5 text-primary">
            <div>Total Property Costs</div>
          </div>
          <ScatterChart className="h-28 w-28 text-muted absolute  bottom-0 right-0 -rotate-45" />
        </div>

        <div className="animate__animated animate__fadeInRight animate__faster relative overflow-hidden inline-flex items-center bg-card text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-secondary-foreground shadow-sm p-3 rounded-lg h-full w-1/3 text-2xl flex items-center justify-center font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5 text-primary flex-grow">
            <div>Total Land Costs</div>
          </div>
          <BarChartHorizontal className="h-28 w-28 text-muted absolute bottom-0 right-0 -rotate-45" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center mt-10 gap-4">
        <div className="bg-card p-5 rounded-xl flex md:items-center md:flex-row flex-col gap-3 justify-between  ">
          <div>
            <span className="text-4xl font-extrabold text-primary">
              With this LandBanking offer
            </span>{" "}
            <br />
            <span className="font-extrabold text-secondary-foreground">
              you too can buy land as an investment, hold it for 18 months, and
              earn 45% Return of Investment
            </span>
          </div>
          <Link href="/dashboard/buyLand">
            <CustomButton
              label={"Proceed"}
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Link>
        </div>
        <div className=" relative overflow-hidden inline-flex items-center bg-card text-primary rounded-lg p-2 flex-grow h-26">
          <div className="bg-primary text-primary-foreground p-3 rounded-lg h-full w-1/3 text-2xl flex items-center justify-center font-extrabold">
            500
          </div>
          <div className="relative z-10 text-lg font-bold px-5">
            <div>Total Referrals</div>
          </div>
          <Users className="h-28 w-28 text-muted absolute  bottom-0 right-0 " />
        </div>
      </div>

      <div className=" font-sans mt-5 text-primary">
        <h1 className="text-lg font-bold mb-4 text-primary">Recent Activity</h1>

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
