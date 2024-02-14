"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Login, Signup } from "@/app/components";
import { XCircle } from "lucide-react";

interface AuthenticationProps {
  setShowAuthentication: Dispatch<SetStateAction<boolean>>;
}

const Authentication = ({ setShowAuthentication }: AuthenticationProps) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className=" inset-0 bg-background/50 bg-opacity-10 backdrop-blur-lg z-20 animate__animated animate__fadeIn animate__faster flex justify-center px-5 items-center  fixed h-screen w-screen top-0 bottom-0 right-0 left-0">
      <div className="  min-h-70-screen  lg:w-70-screen bg-primary flex items-center">
        <div className="flex-grow hidden lg:flex flex-col items-center w-1/2 p-10   h-full">
          <div className="text-secondary font-bold text-xl mb-8">
            Welcome to
          </div>
          <div className="flex flex-col items-center font-bold space-x-3 text-xl  ">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt="site logo"
              className="animate__animated animate__rotateIn animate__slower"
            />
            <div>COvest</div>
          </div>
          <p className="text-center text-secondary/80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis animi
            iusto cum repellendus enim asperiores nobis fugit nam aspernatur.
            Possimus voluptatum explicabo consequuntur? Voluptas, deleniti
            neque. Nam, magni est? Dolores!
          </p>
          <small className="text-xs gap-3 flex items-center text-secondary">
            <span>covest@gmail.com</span>
            <span>+2348144141555</span>
          </small>
        </div>
        <div className=" min-h-70-screen flex-grow bg-secondary w-full h-full">
          <div className="flex items-center text-primary justify-between w-full pl-10 font-bold space-x-3 text-xl   px-5 pt-5">
            <div className=" font-light">
              {showLogin ? <span>Login</span> : <span>Signup</span>}
            </div>
            <XCircle
              onClick={() => setShowAuthentication(false)}
              className=" cursor-pointer hover:text-destructive hover:shadow-md hover:shadow-primary  rounded-full ease-in-out duration-150"
            />
          </div>
          <div className=" px-10 min-h-70-screen flex items-center justify-center pb-3 w-full">
            <div className="w-full">
              {showLogin ? (
                <Login setShowLogin={setShowLogin} />
              ) : (
                <Signup setShowLogin={setShowLogin} />
              )}
              <div className="text-primary text-center w-full my-2">or</div>
              <button className="bg-primary hover:bg-primary/50 hover:text-white transition-all ease-in-out duration-200 text-secondary font-bold py-2 px-4 w-full ">
                Continue&nbsp;with&nbsp;Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
