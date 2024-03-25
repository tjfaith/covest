"use client";
import React from "react";
import Image from "next/image";
import useLandOpportunities from "./useLandOpportunities";
import Link from "next/link";
import { Loader, Pagination } from "@/app/components";

const LandOpportunities = () => {
  const {
    properties,
    currentPage,
    itemsPerPage,
    totalItem,
    loading,
    setCurrentPage,
  } = useLandOpportunities();

  return (
    <>
      {loading ? (
        <Loader fullScreen size={100} color="white" />
      ) : (
        <>
          {properties.length > 0 ? (
            <div>
              <div className="flex flex-wrap gap-10 mb-10">
                {properties.map((val: any, index: number) => (
                  <Link
                    href={`/dashboard/buyProperty/${val.id}`}
                    key={index}
                    className=" w-full max-w-xs flex-shrink-0  rounded overflow-hidden border border-border transition-all duration-200 ease-in-out hover:shadow-lg"
                  >
                    <div className="bg-white text-foreground px-3 py-2">
                      {val.total_units_sold >= val.total_units ? (
                        <div className="text-red-500 font-bold">Property Units Sold out</div>
                      ) : (
                        <div>
                          <span className="font-bold">Units: </span>
                          <span>
                            {val.total_units_sold} of {val.total_units} Sold
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="h-56 w-full ">
                      <Image
                        src={JSON.parse(val.images)[0].url}
                        alt="feature image"
                        className="w-full h-full object-cover object-top"
                        width={200}
                        height={200}
                        priority={false}
                      />
                    </div>
                    <div className="px-3 py-4">
                      <div className="font-bold text-xl mb-2 text-primary">
                        {val.title}
                      </div>
                      <p className="text-foreground text-base">
                        {val.description.length > 100
                          ? val.description.slice(0, 100) + "..."
                          : val.description}
                      </p>
                    </div>
                    <div className="px-6 py-4">
                      <span className="inline-block bg-muted rounded-full px-3 py-1 text-sm font-semibold text-foreground mr-2">
                        {val.currency == "naira" && <span>&#8358;</span>}
                        {Number(val.price).toLocaleString()}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <Pagination
                totalItem={totalItem}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          ) : (
            <div className="text-primary font-bold uppercase text-center h-screen-60 flex items-center justify-center">
              No Property found, please check back later
            </div>
          )}
        </>
      )}
    </>
  );
};

export default LandOpportunities;
