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
            currentPage === 1 ? "bg-muted cursor-not-allowed" : "bg-background"
          } flex items-center w-10 h-10 rounded-full justify-center space-x-2 border-2  border-primary text-primary   font-semibold`}
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
                    val === currentPage && "bg-white rounded-lg text-foreground"
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
              ? "bg-muted cursor-not-allowed"
              : "bg-background"
          } flex items-center w-10 h-10 justify-center space-x-2 border-2 rounded-full border-primary text-primary  font-semibold`}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
