"use client";

import React from "react";
import Image from "next/image";
import useSidebar from "./useSidebar";
import { CircleUserRound, LogOut, LucideIcon } from "lucide-react";
import Link from "next/link";
import { ConfirmAlert } from "@/app/components";

const SideBar = () => {
  const { navMenu, activePage, confirmLogout, setConfirmLogout } = useSidebar();
  return (
    <>
      {confirmLogout && (
        <ConfirmAlert
          title={"Logout?"}
          description={"Are you sure you want to logout"}
          confirmBtnText={"Yes"}
          confirmFunction={() => setConfirmLogout(false)}
          setShowConfirm={() => setConfirmLogout(false)}
        />
      )}
      <div className="h-screen w-72 bg-secondary flex flex-col fixed pb-10 ">
        <div className="flex items-center font-bold space-x-3 text-xl p-5   ">
          <Image
            src={"/logo.png"}
            width={30}
            height={30}
            alt="site logo"
            className="animate__animated animate__rotateIn animate__slower"
          />
          <div>COvest</div>
        </div>
        <div className=" flex flex-col h-full justify-between">
          <ul className=" pr-3 space-y-3 mt-5">
            {navMenu.map(
              (val: Record<string, string | LucideIcon>, index: number) => (
                <li key={index} className="flex items-center space-x-3">
                  <div
                    className={`${
                      activePage === val.id &&
                      "bg-primary animate__animated animate__fadeInLeft"
                    }  w-1 h-5 rounded-r-md`}
                  ></div>

                  <Link
                    href={val.route_to as string}
                    className={`${
                      activePage === val.id
                        ? "bg-primary/50 text-secondary animate__animated animate__headShake shadow-lg"
                        : "bg-secondary text-primary hover:text-yellow-300 duration-300 transition-all"
                    } px-2 flex items-center font-bold space-x-3  p-2 text-sm rounded-lg  w-full   `}
                  >
                    {<val.icon className="w-4 h-4" />}
                    <span>{val.label as string}</span>
                  </Link>
                </li>
              )
            )}
          </ul>

          <ul className=" pr-3 space-y-3 mt-5">
            <li className="flex items-center space-x-3">
              <div
                className={`${
                  activePage === "profile" &&
                  "bg-primary animate__animated animate__fadeInLeft"
                }  w-1 h-5 rounded-r-md`}
              ></div>

              <Link
                href="/dashboard/profile"
                className={`${
                  activePage === "profile"
                    ? "bg-primary/50 text-secondary animate__animated animate__headShake"
                    : "bg-secondary text-primary"
                } px-2 flex items-center font-bold space-x-3  p-2 text-sm rounded-lg  w-full`}
              >
                <CircleUserRound className="w-4 h-4" />
                <span>Profile</span>
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <div className={`  w-1 h-5 rounded-r-md`}></div>

              <div
                onClick={() => setConfirmLogout(true)}
                className="
                bg-secondary cursor-pointer text-primary px-2 flex items-center font-bold space-x-3  p-1 text-sm rounded-lg  w-full"
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
