"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import CustomButton from "../CustomButton";
import useDynamicPage from "./useDynamicPage";

import { PhoneOutgoing, Tag } from "lucide-react";
import { ContactRetailor } from "@/app/components";

import "react-image-gallery/styles/css/image-gallery.css";

const PropertyDynamicPage = () => {
  const { images, details } = useDynamicPage();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between gap-10">
        <div className="w-4/12 h-screen-50">
          <h1 className="text-3xl font-bold mb-4">4 bed room flat</h1>
          <ImageGallery
            items={images}
            showPlayButton={false}
            lazyLoad={true}
            showIndex={true}
          />
        </div>

        <div className="w-8/12">
          <h2 className="text-lg font-bold mb-2">Item Description</h2>
          <p className="text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
            velit ducimus nisi nulla ratione, modi cumque doloremque inventore
            odit corporis eligendi commodi ullam repudiandae veniam facere
            dolorum magnam. Esse! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint sed velit ducimus nisi nulla ratione, modi
            cumque doloremque inventore odit corporis eligendi commodi ullam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
            velit ducimus nisi nulla ratione, modi cumque doloremque inventore
            odit corporis eligendi commodi ullam repudiandae veniam facere
            dolorum magnam. Esse! repudiandae veniam facere dolorum magnam.
            Esse!
          </p>
          <div className="flex justify-between">
            <div className="text-sm mt-5">
              <div className="flex items-center">
                <Tag className="h-5" /> Asking
              </div>
              <span className=" font-extrabold text-2xl">
                {" "}
                &#8358;5,000,000.00
              </span>
            </div>
            <div className="mt-2 inline-block self-end">
              <CustomButton
                label={"PURCHASE PROPERTY"}
                handleClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="w-1/2 space-y-2 flex-grow">
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
        </div>
        <div className="w-full flex-grow space-y-8 ">
          <h1 className="text-lg font-bold">Property Details</h1>

          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 text-center">Category</th>
                <th className="py-3 px-6 bg-gray-200 text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="py-2 px-6 text-center">{detail.category}</td>
                  <td className="py-2 px-6 text-center">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyDynamicPage;