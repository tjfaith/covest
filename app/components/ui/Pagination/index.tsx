"use client";

import { PaginationProps } from "@/app/functions/interface";
import usePagination from "./usePagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({
  totalItem,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}: PaginationProps) => {
  const {
    getPageNumber,
    handleUpdatePage,
    handleNext,
    handlePrev,
    totalPages,
  } = usePagination({ totalItem, currentPage, itemsPerPage, setCurrentPage });
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex  gap-3 items-center text-sm mt-3">
        <button
          onClick={handlePrev}
          className={`${
            currentPage === 1 ? "bg-gray-100 cursor-not-allowed" : "bg-white"
          } flex items-center w-10 h-10 rounded-full justify-center space-x-2 border-2  border-secondary   font-semibold`}
        >
          <ArrowLeft />
        </button>
        <div className="flex items-center bg-foreground p-2 rounded-lg">
          {getPageNumber().map((val, index) => (
            <div key={index}>
              {val === "..." ? (
                <div className=" p-3  w-10 h-10">{val}</div>
              ) : (
                <button
                  onClick={() => handleUpdatePage(Number(val))}
                  className={`${
                    val === currentPage && "bg-secondary rounded-lg text-primary"
                  }  p-3  w-10 h-10 `}
                  key={index}
                >
                  {val}
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`${
            currentPage === totalPages
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-white"
          } flex items-center w-10 h-10 justify-center space-x-2 border-2 rounded-full border-secondary  font-semibold`}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
