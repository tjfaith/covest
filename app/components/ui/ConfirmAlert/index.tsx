'use client'
import { ConfirmAlertProps } from "@/app/functions/interface";
import { Loader } from "@/app/components";

const ConfirmAlert = ({
  title,
  description,
  confirmBtnText = "Confirm",
  loading,
  setShowConfirm,
  confirmFunction,
}: ConfirmAlertProps) => {
  return (
    <div className=" inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-50 animate__animated animate__fadeIn animate__faster flex justify-center items-center  fixed h-screen w-screen top-0 bottom-0 right-0 left-0">
      <div className="bg-white max-w-lg p-6 rounded shadow-lg animate__animated animate__faster animate__headShake ">
        <h1 className=" font-bold text-secondary">{title}</h1>
        <hr />
        <p className="text-md text-gray-500 mb-4 mt-2" id="confirmMessage">
          {description}
        </p>
        <div className="flex justify-center">
          <button
            disabled={loading}
            onClick={confirmFunction}
            className="bg-secondary hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            {loading ? <Loader /> : <>{confirmBtnText}</>}
          </button>
          <button
            disabled={loading}
            onClick={() => setShowConfirm(false)}
            className={` text-white font-bold py-2 px-4 rounded ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
