import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex w-full bg-primary text-secondary pt-44 h-screen justify-between items-center px-32">
      <div>
        <h1 className=" text-6xl w-7/12  font-bold ">
          <span className="text-card animate__animated animate__fadeInDown animate__slow">
            Real Estate
          </span>
          <div className="animate__animated animate__fadeIn  animate__delay-1s animate__slow">
            Investment Never Get any Easier Than This
          </div>
        </h1>
        <p className=" text-2xl mt-10 font-bold w-8/12">
          Choose from our wide range of estate collection and start investing
        </p>
        <button className="bg-secondary text-primary mt-4 flex item-center space-x-3 p-2 rounded-lg border-2">
          <span>Start Investing</span> <ArrowRight />
        </button>
      </div>
      <Image
        src="/images/stress_ball.png"
        alt="stress ball"
        width={150}
        height={150}
        className="absolute -left-20 to-5 opacity-20"
      />
      <div className="bg-gradient-to-b from-secondary to-primary flex-grow rounded-3xl z-10 relative">
        <div className="bg-gradient-to-b from-secondary to-primary px-10 pt-10 rounded-3xl relative">
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
