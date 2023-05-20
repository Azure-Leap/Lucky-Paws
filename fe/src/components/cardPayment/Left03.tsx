import React from "react";

const Left03 = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 place-content-between items-center">
        <div className="">
          <h3 className="text-black font-bold text-base">Card Number</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Enter the 16-digit card number on the card
          </p>
        </div>
        <div className="justify-self-end">
          <button className="inline-flex items-center space-x-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-black text-lg font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            <p className="text-black text-sm font-bold">Edit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left03;
