"use client";
import React, { Dispatch, SetStateAction } from "react";
import useInvestmentPrice from "./useInvestmentPrice";
import { Shapes } from "lucide-react";
import { CustomButton, CustomInput } from "@/app/components";
import Link from "next/link";
import { BuyNow_SelectedItem } from "@/app/functions/types";

interface InvestmentPriceProp {
  setSelectedItem: Dispatch<SetStateAction<BuyNow_SelectedItem>>;
  setShowBuyProperty: Dispatch<SetStateAction<boolean>>;
}

const InvestmentPrice = ({
  setSelectedItem,
  setShowBuyProperty,
}: InvestmentPriceProp) => {
  const {
    handleSubmit,
    setFormData,
    computeROI,
    setAcceptTerms,
    maximumUnit,
    unitRemaining,
    selectedProperty,
    acceptTerms,
    loading,
    formData,
    validateDetails,
  } = useInvestmentPrice({ setSelectedItem });
  return (
    <div className=" mt-5">
      <div>Units Remaining : {unitRemaining}</div>

      <hr />
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4 flex gap-4 flex-col">
          <CustomInput
            error={validateDetails?.noOfUnit}
            icon={<Shapes className="w-4" />}
            label="Number of Units*"
            placeholder="Number of Units"
            inputType="number"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            maxValue={maximumUnit}
            value={String(formData.noOfUnit)}
            handleChange={(value: string) => computeROI(Number(value))}
          />

          <div>
            <div className="text-primary mb-2">Total Amount Payable</div>
            <div className="bg-muted border-b border-primary px-3 py-1 text-primary flex space-x-2 items-center">
              <div>&#8358;</div>
              <div>{formData.totalAmountPayable.toLocaleString()}</div>
            </div>
          </div>

          <div>
            <div className="text-primary mb-2">Estimated ROI Annually</div>
            <div className="bg-muted border-b border-primary px-3 py-1 text-primary flex space-x-2 items-center">
              <div>&#8358;</div>
              <div>{formData.estimateROI.toLocaleString()}</div>
            </div>
          </div>

          <div
            className={`space-x-2 ${
              validateDetails?.terms &&
              "text-red-500 animate__animated animate__shakeX"
            }`}
          >
            <input
              type="checkbox"
              checked={acceptTerms}
              onClick={() => setAcceptTerms(!acceptTerms)}
            />
            <span>
              I agree to the{" "}
              <Link
                href="/privacyPolicy"
                target="_blank"
                className=" text-primary underline"
              >
                {" "}
                Terms & Conditions{" "}
              </Link>
              of this product
            </span>
          </div>
        </div>
        <div className="mt-6 inline-flex md:flex-row flex-col items-center gap-3 w-full">
          <CustomButton
            bgColor="bg-primary"
            type="submit"
            label={"Proceed to Payment"}
            customStyle="whitespace-nowrap"
            showLoading={loading}
            handleClick={() => {}}
          />

          <CustomButton
            bgColor="bg-red-500  to-accent-foreground"
            type="button"
            label={"Cancel"}
            handleClick={() => setShowBuyProperty(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default InvestmentPrice;
