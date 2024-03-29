"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import useBanner from "./useBanner";

const Banner = () => {
  const { handleToggleAuth, router,isLogin } = useBanner();

  return (
    <div className=" overflow-x-hidden flex flex-col gap-5 md:flex-row w-full bg-background   justify-between items-center px-5 lg:px-32">
      <div>
        <h1 className=" text-2xl lg:text-6xl w-full lg:w-7/12  font-bold ">
          <span className="text-primary animate__animated animate__fadeInDown animate__slow">
            Real Estate
          </span>
          <div className="animate__animated animate__fadeIn  animate__delay-1s animate__slow">
            Investments Never Gets any Easier!
          </div>
        </h1>
        <p className=" lg:text-2xl mt-5 lg:mt-10 font-bold w-8/12">
          Choose from our wide range of estate collection and start investing
        </p>
        <button
          className="bg-primary text-primary-foreground mt-4 flex items-center space-x-3 p-2"
          onClick={() => !isLogin ? handleToggleAuth(true): router.push('/dashboard') }
        >
          <span className=" md:text-base font-bold">Start Investing</span>{" "}
          <ArrowRight />
        </button>
      </div>
      <Image
        src="/images/stress_ball.png"
        alt="stress ball"
        width={150}
        height={150}
        className="absolute -left-20 to-5 opacity-20"
      />
      <div className="bg-gradient-to-b from-popover-foreground to-background flex-grow rounded-3xl z-10 relative">
        <div className="bg-gradient-to-b from-popover-foreground to-background px-10 pt-10 rounded-3xl relative">
          <Image
            src="/images/stress_ball.png"
            alt="stress ball"
            width={150}
            height={150}
            className="absolute -left-20 to-5 -z-10"
          />
          <Image
            src="/images/stress_ball.png"
            alt="stress ball"
            width={150}
            height={150}
            className="absolute -right-10 bottom-0 z-10"
          />
          <Image
            src={"/images/banner.png"}
            alt="banner image"
            width={600}
            height={200}
          />
        </div>
      </div>
    
    </div>
  );
};

export default Banner;
