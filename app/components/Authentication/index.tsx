"use client";

import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import {
  ForgotPassword,
  Login,
  ResendActivationLink,
  Signup,
  SocialLogin,
} from "@/app/components";
import { X, XCircle } from "lucide-react";
import useAuthentication from "./useAuthentication";

const Authentication = () => {
  const {
    showResendLink,
    showLogin,
    successfulMessage,
    resendActivationLink,
    forgottenPassword,
    handleToggleAuth,
    setResendActivationLink,
    setShowLogin,
    setSuccessfulMessage,
  } = useAuthentication();
  return (
    <div className=" inset-0 bg-black bg-opacity-30 backdrop-blur-md z-20 animate__animated animate__fadeIn animate__faster flex justify-center px-5 items-center  fixed h-screen w-screen top-0 bottom-0 right-0 left-0">
      <div className="  min-h-70-screen  lg:w-70-screen bg-primary flex items-center">
        <div className="flex-grow hidden lg:flex flex-col items-center w-1/2 p-10   h-full">
          <div className="text-primary-foreground font-bold text-xl mb-8">
            Welcome to
          </div>
          <div className="flex flex-col items-center font-bold space-x-3 text-xl  ">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt="site logo"
              className="animate__animated animate__rotateIn animate__slower w-auto h-auto"
            />
            <div className="text-primary-foreground">COvest</div>
          </div>
          <p className="text-center text-primary-foreground mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis animi
            iusto cum repellendus enim asperiores nobis fugit nam aspernatur.
            Possimus voluptatum explicabo consequuntur? Voluptas, deleniti
            neque. Nam, magni est? Dolores!
          </p>
          <small className="text-xs gap-3 flex items-center text-primary-foreground mt-4">
            <span>covest@gmail.com</span>
            <span>+2348144141555</span>
          </small>
        </div>
        <div className=" min-h-70-screen flex-grow bg-muted w-full h-full">
          <div className="flex items-center text-primary justify-between w-full pl-10 font-bold space-x-3 text-xl   px-5 pt-5">
            <div className=" font-bold">
              {showLogin ? <span>Login</span> : <span>Signup</span>}
            </div>
            <XCircle
              onClick={() => handleToggleAuth(false)}
              className=" cursor-pointer hover:text-destructive hover:shadow-md hover:shadow-primary  rounded-full ease-in-out duration-150"
            />
          </div>
          <div className=" px-10 min-h-70-screen flex items-center justify-center pb-3 w-full relative">
            <div className="w-full">
              {successfulMessage !== "" && (
                <div>
                  <div className="text-primary bg-primary/10 p-2 rounded-sm">
                    {successfulMessage}
                  </div>
                </div>
              )}
              {showResendLink && (
                <small
                  className=" text-xs underline text-red-500 cursor-pointer "
                  onClick={() => setResendActivationLink(true)}
                >
                  Resend activation link
                </small>
              )}

              {resendActivationLink && (
                <div className="absolute inset-0 z-20 bg-black bg-opacity-50 p-10 flex items-center justify-center">
                  <div className="bg-white p-5">
                    <div className="flex items-center justify-end">
                      <X
                        className="cursor-pointer"
                        onClick={() => setResendActivationLink(false)}
                      />
                    </div>
                    <ResendActivationLink
                      setResendActivationLink={setResendActivationLink}
                    />
                  </div>
                </div>
              )}

              {forgottenPassword && <ForgotPassword />}

              {showLogin ? (
                <Login setShowLogin={setShowLogin} />
              ) : (
                <Signup
                  setShowLogin={setShowLogin}
                  setSuccessfulMessage={setSuccessfulMessage}
                />
              )}
              <div className="text-primary text-center w-full my-2">or</div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
