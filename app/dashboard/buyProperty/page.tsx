"use client";
import React from "react";
import Image from "next/image";
import { Pagination } from "@/app/components";
import useBuyProperty from "./useBuyProperty";
import Link from "next/link";
const BuyProperty = () => {
  const { properties, currentPage, setCurrentPage } = useBuyProperty();
  return (
    <div>
      <div className="flex flex-wrap gap-10 mb-10">
        {properties.map((val: any, index: number) => (
          <Link
            href={`/dashboard/buyProperty/${index}`}
            key={index}
            className=" w-full max-w-xs flex-shrink-0  rounded overflow-hidden border border-secondary/20 transition-all duration-200 ease-in-out hover:shadow-lg"
          >
            <div className="   h-56 w-full ">
              {val.images.map((img: Record<string, string>, index: number) => (
                <React.Fragment key={index}>
                  {img.featured_image && (
                    <Image
                      src={img.src}
                      alt="feature image"
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                      priority={false}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{val.title}</div>
              <p className="text-gray-700 text-base">
                {val.description.length > 100
                  ? val.description.slice(0, 100) + "..."
                  : val.description}
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {val.currency == "naira" && <span>&#8358;</span>}
                {Number(val.price).toLocaleString()}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        totalItem={500}
        currentPage={currentPage}
        itemsPerPage={8}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BuyProperty;
