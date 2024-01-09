"use client";
import Image from "next/image";
import React from "react";
import useHeader from "./useHeader";

import { ArrowRight } from "lucide-react";
import { Authentication } from "@/app/components";

const Header = () => {
  const { showAuthentication, setShowAuthentication } = useHeader();
  return (
    <div className="flex justify-between items-center px-32 py-4 fixed w-full text-secondary bg-primary z-20">
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
      <button
        className="bg-secondary text-primary flex item-center space-x-3 p-2  border-2 cursor-pointer"
        onClick={() => setShowAuthentication(true)}
      >
        <span>Start Investing</span> <ArrowRight />
      </button>
      {showAuthentication && (
        <Authentication setShowAuthentication={setShowAuthentication} />
      )}
    </div>
  );
};

export default Header;
