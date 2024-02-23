import React, { Dispatch, SetStateAction } from "react";
import useSelectPayment from "./useSelectPayment";
import { CustomButton } from "@/app/components";
import { BuyNow_SelectedItem } from "@/app/functions/types";

interface SelectPaymentProp{
  setSelectedItem:Dispatch<SetStateAction<BuyNow_SelectedItem>>;
}


const SelectPayment = ({setSelectedItem}:SelectPaymentProp) => {
  const {selectedCheckbox, loading,changePaymentMethod,  setSelectedCheckbox} = useSelectPayment({setSelectedItem})
  return (
    <div className="mt-3">
      <div className=" space-y-4">
        <div>
          <div className="text-primary mb-2 font-bold">
            Total Amount Payable
          </div>
          <div className="bg-muted border-b border-primary px-3 py-1 text-primary flex space-x-2 items-center">
            <div>&#8358;</div>
            <div>{(200000).toLocaleString()}</div>
          </div>
        </div>

        <div className="text-primary mb-2 font-bold">
          Select a payment method
        </div>
        <div className=" space-y-5">
          <label
            htmlFor="payOnlineCheckbox"
            className=" cursor-pointer  hover:shadow-lg transition-all ease-in-out duration-300 bg-muted border rounded-md border-primary px-3 py-1 text-primary flex space-x-2 items-center"
          >
            <input type="checkbox" id="payOnlineCheckbox" checked={selectedCheckbox === 'payOnlineCheckbox'} onChange={() => setSelectedCheckbox('payOnlineCheckbox')} />
            <div>
              <div>Pay Online</div>
              <div>Pay with card or bank. Transaction fees applies</div>
            </div>
          </label>

          <label
            htmlFor="transferCheckbox"
            className=" cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300 bg-muted border rounded-md border-primary px-3 py-1 text-primary flex space-x-2 items-center"
          >
            <input type="checkbox" id="transferCheckbox" checked={selectedCheckbox === 'transferCheckbox'} onChange={() => changePaymentMethod('transferCheckbox')}  />
            <div>
              <div>Pay With Bank Transfer</div>
              <div>Pay with card or bank. Transaction fees applies</div>
            </div>
          </label>
        </div>

        <div className="mt-6 inline-flex md:flex-row flex-col items-center gap-3 w-full">
              <CustomButton
                bgColor="bg-primary"
                type="submit"
                label={"Proceed"}
                customStyle="whitespace-nowrap"
                showLoading={loading}
                handleClick={() => {}}
              />

              {/* <CustomButton
                bgColor="bg-red-500  to-accent-foreground"
                type="button"
                label={"Cancel"}
                handleClick={() => {}}
              /> */}
            </div>
      </div>
    </div>
  );
};

export default SelectPayment;
