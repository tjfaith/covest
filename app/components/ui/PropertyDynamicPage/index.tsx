"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import CustomButton from "../CustomButton";
import useDynamicPage from "./useDynamicPage";

import { PhoneOutgoing, Tag } from "lucide-react";
import { BuyNow, ContactRetailor, Loader } from "@/app/components";

import "react-image-gallery/styles/css/image-gallery.css";
import { Toaster } from "react-hot-toast";

const PropertyDynamicPage = () => {
  const { images, details, showBuy,loading,router, setShowBuy } = useDynamicPage();

  return (
    <>
      <Toaster/>

    { loading ? <Loader fullScreen size={100} color="white"/>:
    <div className=" ">
      <div className="flex w-full justify-between md:flex-row flex-col md:gap-10">
        <div className="md:w-4/12 my-5 ">
          <h1 className="text-3xl font-bold mb-4 text-primary">
            {details.title}
          </h1>
    
          <ImageGallery
            items={images}
            showPlayButton={false}
            lazyLoad={true}
            showIndex={true}
          />
        </div>

        <div className="md:w-8/12">
          <div className="flex md:flex-row flex-col justify-between mb-5">
            <div className="text-sm mt-5 text-primary">
              <div className="flex items-center">
                <Tag className="h-5" /> Asking
              </div>
              <span className=" font-extrabold text-2xl">
                {" "}
                &#8358;{Number(details.price).toLocaleString()}
              </span>
            </div>
            <div className="mt-2 inline-block md:self-end">
             {details.total_units_sold >= details.total_units ? <div className="font-bold text-red-500">UNITS SOLD OUT</div> :
               <CustomButton
                label={"BUY PROPERTY"}
                handleClick={() => setShowBuy(true)}
              />}
            </div>
          </div>
          <hr />

          <h2 className="text-lg font-bold mb-2 text-primary mt-5">
            Item Description
          </h2>
          <p className="text-foreground text-justify">{details.description}</p>
        </div>
      </div>

      <div className="flex gap-10 md:flex-nowrap flex-wrap-reverse mt-5">
        {/* <div className="w-1/2 space-y-2 flex-grow">
          <h1 className="text-lg font-bold">Contact Retailor</h1>
          <div className="text-lg font-bold">
            <a
              href="tel:+2348144153062"
              className="flex items-center space-x-2"
            >
              <PhoneOutgoing className="h-4 w-4" />
              <span>+234 814 415 3062</span>
            </a>
          </div>
          <div className="flex items-center">
            <hr className="flex-grow  bg-secondary mr-2" />
            <span className="text-secondary">Or</span>
            <hr className="flex-grow  bg-secondary ml-2" />
          </div>
          <ContactRetailor />
        </div> */}
        <div className="w-full flex-grow space-y-8 ">
          <h1 className="text-lg font-bold text-primary">Property Details</h1>

          <table className="min-w-full bg-white border border-gray-300 text-foreground">
            <thead>
 
                  <tr>
                    <th className="py-3 px-6 bg-gray-200 text-center">Category</th>
                    <th className="py-3 px-6 bg-gray-200 text-center">Details</th>
                  </tr>
            
            </thead>
            <tbody>
              {details.property_details && details.property_details.map((val:any, index:number)=>
                (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="py-2 px-6 text-center">{val.category}</td>
                    <td className="py-2 px-6 text-center">{val.details}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showBuy && <BuyNow setShowBuyProperty={setShowBuy} />}
    </div>}
    </>
  );
};

export default PropertyDynamicPage;
