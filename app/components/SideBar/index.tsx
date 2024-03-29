"use client";

import React from "react";
import Image from "next/image";
import useSidebar from "./useSidebar";
import { CircleUserRound, LogOut, LucideIcon } from "lucide-react";
import Link from "next/link";
import { ConfirmAlert } from "@/app/components";

const SideBar = () => {
  const {
    navMenu,
    activePage,
    confirmLogout,
    showSideBar,
    hideMenu,
    handleChangePage,
    handleLogout,
    setConfirmLogout,
  } = useSidebar();
  return (
    <>
      {confirmLogout && (
        <ConfirmAlert
          title={"Logout?"}
          description={"Are you sure you want to logout"}
          confirmBtnText={"Yes"}
          confirmFunction={handleLogout}
          setShowConfirm={() => setConfirmLogout(false)}
        />
      )}

      <div
        className={`${
          showSideBar ? "flex" : "hidden lg:flex"
        } h-screen w-72 bg-gradient-to-b from-primary to-accent-foreground  flex-col fixed pb-10 z-30   animate__animated animate__slideInLeft`}
      >
        <Link href={'/'} className="flex items-center font-bold space-x-3 text-xl p-5   ">
          <Image
            src={"/logo.png"}
            width={30}
            height={30}
            alt="site logo"
            className="animate__animated animate__rotateIn animate__slower w-auto h-auto"
          />
          <div className="text-primary-foreground">COvest</div>
        </Link>
        <div className=" flex flex-col h-full justify-between">
          <ul className=" pr-3 space-y-3 mt-5">
            {navMenu.map(
              (val: Record<string, string | LucideIcon>, index: number) => (
                <li key={index} className="flex items-center space-x-3">
                  <div
                    className={`${
                      activePage === val.id &&
                      "bg-primary-foreground animate__animated animate__fadeInLeft"
                    }  w-1 h-5 rounded-r-md`}
                  ></div>

                  <div
                    onClick={() => handleChangePage(val.route_to as string)}
                    className={`${
                      activePage === val.id
                        ? "bg-primary-foreground text-secondary-foreground animate__animated animate__headShake shadow-lg"
                        : "bg-transparent text-primary-foreground hover:text-yellow-300 duration-300 transition-all ease-in-out"
                    } px-2 flex items-center font-bold space-x-3  p-2 text-sm rounded-lg  w-full cursor-pointer   `}
                  >
                    {<val.icon className="w-4 h-4" />}
                    <span>{val.label as string}</span>
                  </div>
                </li>
              )
            )}
          </ul>

          <ul className=" pr-3 space-y-3 mt-5">
            <li className="flex items-center space-x-3">
              <div
                className={`${
                  activePage === "profile" &&
                  "bg-primary-foreground animate__animated animate__fadeInLeft"
                }  w-1 h-5 rounded-r-md`}
              ></div>

              <div
                onClick={()=>handleChangePage("/dashboard/profile")}
                className={`${
                  activePage === "profile"
                    ? "bg-primary-foreground text-secondary-foreground animate__animated animate__headShake"
                    : "bg-transparent text-primary-foreground hover:text-yellow-300 duration-300 transition-all ease-in-out"
                } px-2 flex items-center font-bold space-x-3  p-2 text-sm rounded-lg cursor-pointer   w-full`}
              >
                <CircleUserRound className="w-4 h-4" />
                <span>Profile</span>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <div className={`  w-1 h-5 rounded-r-md`}></div>

              <div
                onClick={() => setConfirmLogout(true)}
                className="
                bg-transparent text-primary-foreground hover:text-yellow-300 duration-300 transition-all ease-in-out cursor-pointer px-2 flex items-center font-bold space-x-3  p-1 text-sm rounded-lg  w-full"
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          showSideBar ? "bg-yellow-300/20 lg:hidden inset-0 z-10 fixed w-full h-screen " : "hidden w-72 lg:flex"
        }  `}
        onClick={hideMenu}
      ></div>
    </>
  );
};

export default SideBar;
