"use client";
import React, { Dispatch, SetStateAction } from "react";
import useBuyProperty from "./useBuyProperty";
import { XCircle, ChevronsLeft } from "lucide-react";
import { BankTransfer, InvestmentPrice, SelectPayment } from "@/app/components";

interface BuyPropertyProps {
  setShowBuyProperty: Dispatch<SetStateAction<boolean>>;
}

const BuyNow = ({ setShowBuyProperty }: BuyPropertyProps) => {
  const { selectedItem, handleGoBack, setSelectedItem } = useBuyProperty();
  return (
    <div className=" inset-0 bg-black  bg-opacity-10 backdrop-blur-sm z-50 animate__animated animate__fadeIn animate__faster flex justify-center items-center  fixed h-screen w-screen px-4 top-0 bottom-0 right-0 left-0">
      <div className="bg-background lg:w-1/3 w-full  text-foreground p-5 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <div className=" text-primary">
            {(selectedItem === "selected-payment" || selectedItem === "bank-transfer" ) && (
              <div className=" flex items-center space-x-3 cursor-pointer" onClick={()=>handleGoBack()}>
                <ChevronsLeft /> <span className="font-bold ">Back</span>
              </div>
            )}
          </div>
          <div className=" font-extrabold text-primary">
            COvest by Pertinence
          </div>
          <XCircle
            onClick={() => setShowBuyProperty(false)}
            className=" cursor-pointer hover:text-destructive hover:shadow-md hover:shadow-primary  rounded-full ease-in-out duration-150"
          />
        </div>
        <hr />
        {selectedItem === "investment-price" && (
          <InvestmentPrice setSelectedItem={setSelectedItem} setShowBuyProperty={setShowBuyProperty}/>
        )}
        {selectedItem === "selected-payment" && <SelectPayment setSelectedItem={setSelectedItem}  />}
        {selectedItem === "bank-transfer" && <BankTransfer/>}
      </div>
    </div>
  );
};

export default BuyNow;
