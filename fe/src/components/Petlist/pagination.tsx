import React, { useState, useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationOptions {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationOptions): JSX.Element => {
  const pages = useMemo(() => {
    const result = [];

    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }

    return result;
  }, [totalPages]);

  if (pages.length <= 1) {
    // Only 1 page, no need to show pagination
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    onPageChange(page);
  };

  const handlePrevClick = () => {
    handleClick(currentPage - 1);
  };

  const handleNextClick = () => {
    handleClick(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex justify-evenly  w-1/5 ">
        <button
          onClick={handlePrevClick}
          disabled={isFirstPage}
          className="h-12 border-2 border-white bg-white text-black
               px-3 rounded-full hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white focus:bg-orange-500 focus:text-white"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`h-12 border-2 rounded-full border-white bg-white hover:bg-orange-500 hover:text-white text-black
          w-12 active:bg-orange-500 active:text-white focus:bg-orange-500 focus:text-black `}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextClick}
          className="h-12 border-2 border-white bg-white text-black
               px-3 rounded-full hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white"
        >
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
  // let [num, setNum] = useState(1);
  // let [cur, setCur] = useState(1);
  // const pages = [
  //   { page: num },
  //   { page: num + 1 },
  //   { page: num + 2 },
  //   { page: num + 3 },
  // ];
  // function next() {
  //   setNum(++num);
  // }
  // function back() {
  //   num > 1 && setNum(--num);
  // }
  // return (
  //   <div className="flex justify-center mt-10">
  //     <div className="flex justify-evenly  w-1/5 ">
  //       <button
  //         onClick={back}
  //         className="h-12 border-2 border-white bg-white text-black
  //              px-3 rounded-full hover:bg-orange-500 hover:text-white"
  //       >
  //         <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
  //       </button>
  //       {pages.map((pg, i) => (
  //         <button
  //           key={i}
  //           onClick={() => setCur(pg.page)}
  //           className={`h-12 border-2 rounded-full border-white bg-white hover:bg-orange-500 hover:text-white text-black
  //         w-12 ${cur === pg.page && "bg-indigo-600 text-black"}`}
  //         >
  //           {pg.page}
  //         </button>
  //       ))}
  //       <button
  //         onClick={next}
  //         className="h-12 border-2 border-white bg-white text-black
  //              px-3 rounded-full hover:bg-orange-500 hover:text-white"
  //       >
  //         <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Pagination;
