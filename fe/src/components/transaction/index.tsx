import React from "react";
import Left01 from "./Left01";
import Right01 from "./Right01";
import Left02 from "./Left02";
import Right02 from "./Right02";

const Transaction = () => {
  return (
    <div className="lg:w-4/6 bg-[#ECF2FF] rounded-xl container mx-auto mt-10">
      <div className="grid grid-cols-3">
        <div className="col-span-1 px-10 py-8">
          <Left01 />
          <Left02 />
        </div>
        <div className="col-span-2 px-10 py-8">
          <Right01 />
          <Right02 />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
