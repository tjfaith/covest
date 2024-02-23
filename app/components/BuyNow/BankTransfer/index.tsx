import React from "react";
import { CustomButton, CustomInput } from "@/app/components";
import { Shapes } from "lucide-react";

const BankTransfer = () => {
  return (
    <div className="mt-3 space-y-4">
      <div>
        <div className="text-primary mb-2 font-bold">Total Amount Payable</div>
        <div className="font-extrabold text-xl bg-muted border-b border-primary px-3 py-1 text-primary flex space-x-2 items-center">
          <div>&#8358;</div>
          <div>{(200000).toLocaleString()}</div>
        </div>
      </div>

      <div>
        <div className="text-primary">Make transfer to the account below</div>
        <div className=" border rounded-md p-3 mt-2">
          <div>
            <div className="flex justify-between items-center">
              <div className="font-bold">Account Number</div>
              <div className="text-primary font-extrabold">0858717807</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-bold">Bank Name</div>
              <div>Guarantee Trust Bank</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-bold">Account Name</div>
              <div>COvest Africa LTD</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-primary">Payment Proof</div>
        <label htmlFor="prof_of_payment ">
          <div className=" border-2 border-dotted rounded-md p-3 mt-2 w-full h-24 flex items-center justify-center cursor-pointer">
            <div className="text-foreground/50">Click here to upload photo</div>
            <input className="w-full" type="file" id="prof_of_payment" hidden />
          </div>
        </label>
      </div>

      <CustomInput
        icon={<Shapes className="w-4" />}
        label="Please input payment reference*"
        placeholder="Payment reference"
        inputType="text"
        labelColor="text-primary"
        bgColor="bg-background"
        textColor="text-primary"
        borderColor="border-primary"
        handleChange={() => {}}
      />

      <CustomButton
        bgColor="bg-primary"
        type="submit"
        label={"Proceed"}
        customStyle="whitespace-nowrap"
        handleClick={() => {}}
      />
    </div>
  );
};

export default BankTransfer;
