"use client";
import Image from "next/image";
import React from "react";
import useHeader from "./useHeader";

import { ArrowRight, Menu, X } from "lucide-react";
import { Authentication } from "@/app/components";
import Link from "next/link";

const Header = () => {
  const { showAuthentication, showNav, setShowNav, setShowAuthentication } =
    useHeader();
  return (
    <div className={`flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-center px-5 lg:px-32 py-4 fixed w-full text-secondary-foreground  bg-opacity-80 backdrop-blur-lg z-20`}>
      <div className=" w-full flex justify-between items-center">

      <div className="flex items-center font-bold space-x-3 text-xl  ">
        <Image
          src={"/logo.png"}
          width={50}
          height={50}
          alt="site logo"
          className="animate__animated animate__rotateIn animate__slower"
        />
        <div>COvest</div>
      </div>
      <div
        className=" cursor-pointer w-10 md:hidden flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-2"
        onClick={() => setShowNav(!showNav)}
      >
        {!showNav ? <Menu className="h-5 w-5   " />:
        <X className="h-5 w-5"/>}
      </div>
      </div>
      <div
        className={`md:flex items-center gap-10 font-bold text-primary   ${
          showNav ? "flex animate_animated animate__fadeIn" : "hidden"
        }`}
      >
        <div className=" flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <ul className="flex flex-col md:flex-row items-center md:gap-10 gap-2">
            <li className=" hover:border-secondary hover:border-b-2 transition-all ease-in-out duration-300">
              <Link href={"/"}> Home</Link>
            </li>
            <li className=" hover:border-secondary hover:border-b-2 transition-all ease-in-out duration-300 cursor-pointer">
              About
            </li>
          </ul>
          <span className=" hidden md:block">|</span>
          <button
            className="hover:border-secondary hover:border-b-2 transition-all ease-in-out duration-300 cursor-pointer whitespace-nowrap"
            onClick={() => setShowAuthentication(true)}
          >
            Sign In
          </button>
          <button
            className="bg-primary text-primary-foreground flex items-center space-x-3 p-2"
            onClick={() => setShowAuthentication(true)}
          >
            <span className=" md:text-base font-bold text-xs">
              Start&nbsp;Investing
            </span>
            <ArrowRight />
          </button>
        </div>
      </div>
      {showAuthentication && (
        <Authentication setShowAuthentication={setShowAuthentication} />
      )}
    </div>
  );
};

export default Header;
