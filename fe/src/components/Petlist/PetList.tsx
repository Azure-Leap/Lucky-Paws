import { Cardo } from "next/font/google";
import React from "react";
import CardList from "./cardList";
import Pagination from "./pagination";
import SortList from "./SortList";

const Section = () => {
  return (
    <div className="bg-[#FFF3D3] p-10">
      <div className="flex w-full">
        <SortList />
        <CardList />
      </div>

      <Pagination />
    </div>
  );
};

export default Section;
