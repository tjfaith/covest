"use client";
import React, { Dispatch, SetStateAction } from "react";
import useBuyProperty from "./useBuyProperty";
import { Percent, Shapes, XCircle } from "lucide-react";
import { CustomButton, CustomInput } from "@/app/components";
import Link from "next/link";

interface BuyPropertyProps {
  setShowBuyProperty: Dispatch<SetStateAction<boolean>>;
}

const BuyProperty = ({ setShowBuyProperty }: BuyPropertyProps) => {
  const { handleSubmit, setFormData, loading, formData, validateDetails } =
    useBuyProperty();
  return (
    <div className=" inset-0 bg-black  bg-opacity-10 backdrop-blur-sm z-50 animate__animated animate__fadeIn animate__faster flex justify-center items-center  fixed h-screen w-screen px-4 top-0 bottom-0 right-0 left-0">
      <div className="bg-background md:w-1/3 w-full  text-foreground p-5 rounded-md">
        <div className="flex items-center justify-between">
          <div className=" font-extrabold text-primary">
            COvest by Pertinence
          </div>
          <XCircle
            onClick={() => setShowBuyProperty(false)}
            className=" cursor-pointer hover:text-destructive hover:shadow-md hover:shadow-primary  rounded-full ease-in-out duration-150"
          />
        </div>
        <hr />
        <div className=" mt-5">
          <form onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="mb-4 flex gap-4 flex-col">
              <CustomInput
                error={validateDetails?.fullName}
                icon={<Shapes className="w-4" />}
                label="Number of Units*"
                placeholder="Number of Units"
                inputType="number"
                labelColor="text-primary"
                bgColor="bg-background"
                textColor="text-primary"
                borderColor="border-primary"
                value={String(formData.noOfUnit)}
                handleChange={(value: string) =>
                  setFormData({ ...formData, noOfUnit: Number(value) })
                }
              />

              <div>
                <div className="text-primary mb-2">Total Amount Payable</div>
                <div className="bg-muted border-b border-primary px-3 py-1 text-primary flex space-x-2 items-center">
                  <div>&#8358;</div>
                  <div>{formData.totalAmountPayable}</div>
                </div>
              </div>

              <div>
                <div className="text-primary mb-2">Estimated ROI</div>
                <div className="bg-muted border-b border-primary px-3 py-1 text-primary flex space-x-2 items-center">
                  <div>&#8358;</div>
                  <div>{formData.estimateROI}</div>
                </div>
              </div>

              <div className=" space-x-2">
                <input type="checkbox" />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms_condition"
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
                showLoading={loading}
                handleClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyProperty;
