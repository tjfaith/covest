'use client'
import { PaginationProps } from "@/app/functions/interface";

function usePagination({
  totalItem,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItem / Number(itemsPerPage));

  const getPageNumber = () => {
    let pageNumbers = [];
    let loopStart = currentPage == 1 ? 0 : 1;

    for (let i = currentPage - loopStart; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    const leftRange = pageNumbers.slice(0, 2);
    const rightRange = pageNumbers.slice(-2);
    const filteredRightRange = rightRange.filter(
      (value) => !leftRange.includes(value)
    );

    const showDots =
      rightRange[0] - leftRange[leftRange.length - 1] > 1 && "...";

    const visiblePages = [
      ...leftRange,
      showDots !== false ? showDots : null,
      ...filteredRightRange,
    ];

    const filteredVisiblePages = visiblePages.filter((value) => value !== null);

    return filteredVisiblePages;
  };

  const handleUpdatePage = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const handleNext = () => {
    setCurrentPage(currentPage !== totalPages ? currentPage + 1 : totalPages);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage !== 1 ? currentPage - 1 : 1);
  };

  return {
    getPageNumber,
    handleUpdatePage,
    handleNext,
    handlePrev,
    totalPages,
  };
}

export default usePagination;
