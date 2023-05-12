import React from "react";

export const Transactions = () => {
  return (
    <div className="col-span-4 border-[1px] border-gray-300 rounded-3xl p-3 shadow-[0_3px_12px_rgba(0,0,0,0.25)]">
      <div className="">
        <h1 className="text-xl font-bold">Latest transactions</h1>
        <p className="text-base text-gray-500">
          Table of latest transaction list
        </p>
      </div>
      <div className="w-full my-3">
        <table className="w-full mx-auto text-left">
          <thead className="text-xs text-gray-500 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold">
                Transaction
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Date & Time
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Amount
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="px-3 py-4 font-normal">
                Payment from <span className="font-bold">Bonnie Green</span>
              </th>
              <td className="px-3 py-4 text-gray-500">Apr 23, 2023</td>
              <td className="px-3 py-4 font-bold">$2300</td>
              <td className="px-3 py-4 ">
                <span className="bg-green-300 p-2 rounded-lg text-green-800 text-xs font-medium">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-4 font-normal">
                Payment from <span className="font-bold">Bonnie Green</span>
              </th>
              <td className="px-3 py-4 text-gray-500">Apr 23, 2023</td>
              <td className="px-3 py-4 font-bold">$2300</td>
              <td className="px-3 py-4 ">
                <span className="bg-green-300 p-2 rounded-lg text-green-800 text-xs font-medium">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-4 font-normal">
                Payment from <span className="font-bold">Bonnie Green</span>
              </th>
              <td className="px-3 py-4 text-gray-500">Apr 23, 2023</td>
              <td className="px-3 py-4 font-bold">$2300</td>
              <td className="px-3 py-4 ">
                <span className="bg-green-300 p-2 rounded-lg text-green-800 text-xs font-medium">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-4 font-normal">
                Payment from <span className="font-bold">Bonnie Green</span>
              </th>
              <td className="px-3 py-4 text-gray-500">Apr 23, 2023</td>
              <td className="px-3 py-4 font-bold">$2300</td>
              <td className="px-3 py-4 ">
                <span className="bg-green-300 p-2 rounded-lg text-green-800 text-xs font-medium">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-4 font-normal">
                Payment from <span className="font-bold">Bonnie Green</span>
              </th>
              <td className="px-3 py-4 text-gray-500">Apr 23, 2023</td>
              <td className="px-3 py-4 font-bold">$2300</td>
              <td className="px-3 py-4 ">
                <span className="bg-green-300 p-2 rounded-lg text-green-800 text-xs font-medium">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-4 font-normal">
                Payment from <span className="font-bold">Bonnie Green</span>
              </th>
              <td className="px-3 py-4 text-gray-500">Apr 23, 2023</td>
              <td className="px-3 py-4 font-bold">$2300</td>
              <td className="px-3 py-4 ">
                <span className="bg-green-300 p-2 rounded-lg text-green-800 text-xs font-medium">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-4 font-normal">
                Payment from <span className="font-bold">Bonnie Green</span>
              </th>
              <td className="px-3 py-4 text-gray-500">Apr 23, 2023</td>
              <td className="px-3 py-4 font-bold">$2300</td>
              <td className="px-3 py-4 ">
                <span className="bg-green-300 p-2 rounded-lg text-green-800 text-xs font-medium">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
