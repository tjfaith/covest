"use client";
import { Check } from "lucide-react";
import useVerifyPayment from "./useVerifyPayment";
import { CustomButton, Loader } from "@/app/components";
const VerifyPayment = () => {
  const { verificationStatus, success, loading, router} = useVerifyPayment();

  return (
    <>
    { loading ? <Loader fullScreen size={100} color="white"/>:
    <div className="flex justify-center items-center h-screen-60">

      {success && <div className="bg-white relative rounded-2xl py-4 w-1/2 flex items-center justify-center shadow">
        <div className="bg-white rounded-full p-2 text-white absolute -top-8 shadow">
          <div className="bg-primary rounded-full p-3">
            <Check />
          </div>
        </div>

        <div className="text-primary mt-8 w-full">
            <div className="text-center font-bold">Payment Successful</div>
            <div className="text-center text-xs">{success?.customer?.email}</div>
            <div className="border-t-2 mt-3 border-dotted w-full"></div>
            <div className="p-4 text-sm space-y-1 ">
                <div className="flex items-center justify-between w-full gap-3">
                    <div className=" font-bold">Payment ID:</div>
                    <div>{success?.id}</div>
                </div>
                <div className="flex items-center justify-between w-full gap-3">
                    <div className=" font-bold">Payment Reference:</div>
                    <div>{success?.reference}</div>
                </div>
                <div className="flex items-center justify-between w-full gap-3">
                    <div className=" font-bold">Amount Paid:</div>
                    <div>{Number(success?.amount).toLocaleString()} {success?.currency}</div>
                </div>
                <div className="flex items-center justify-between w-full gap-3">
                    <div className=" font-bold">Payment Channel:</div>
                    <div>{success?.channel}</div>
                </div>
                <div className="flex items-center justify-between w-full gap-3">
                    <div className=" font-bold">Payment Date:</div>
                    <div>{new Date(success?.paid_at).toLocaleDateString()} {new Date(success?.paid_at).toLocaleTimeString()}</div>
                </div>
            </div>
                <div className="px-4 ">
                <CustomButton label={"Proceed"} handleClick={()=>router.push('/dashboard')} />
                </div>
        </div>
      </div>}

    </div>
}
</>
  );
};

export default VerifyPayment;
