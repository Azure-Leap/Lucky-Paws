import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = () => {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  function next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly  w-1/5 ">
        <button
          onClick={back}
          className="h-12 border-2 border-white bg-white text-black
               px-3 rounded-full hover:bg-orange-500 hover:text-white"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {pages.map((pg, i) => (
          <button
            key={i}
            onClick={() => setCur(pg.page)}
            className={`h-12 border-2 rounded-full border-white bg-white hover:bg-orange-500 hover:text-white text-black
          w-12 ${cur === pg.page && "bg-indigo-600 text-black"}`}
          >
            {pg.page}
          </button>
        ))}
        <button
          onClick={next}
          className="h-12 border-2 border-white bg-white text-black
               px-3 rounded-full hover:bg-orange-500 hover:text-white"
        >
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
