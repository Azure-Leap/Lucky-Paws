import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const subMenuList = [
  {
    name: "Age",
    menus: ["0-1", "1-2", "2-3", "3-4"],
  },
  { name: "Size", menus: ["Small", "Medium", "Large"] },
  { name: "Gender", menus: ["Male", "Female"] },
  { name: "Health", menus: ["Vaccinated", "not-Vaccinated"] },
];

const SortMenu = ({ data }: any) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      {/* <span>
        <p className="text-black">{data.name}</p>
      </span> */}
      <Menu.Button
        onClick={() => setSubMenuOpen(!subMenuOpen)}
        className={`inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
          subMenuOpen && ""
        }`}
      >
        <span>{data.name}</span>

        <ChevronDownIcon
          aria-hidden="true"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
          className={`-mr-1 h-5 w-5 text-gray-400 ${
            subMenuOpen && "rotate-180"
          }`}
        />
      </Menu.Button>
      <div
        className={`flex flex-col pl-5 mb-7 mt-5 text-lg rounded-lg overflow-hidden h-0 ${
          subMenuOpen && "h-fit"
        }`}
      >
        {data.menus.map((menu: any, idx: any) => (
          <div key={idx} className="">
            <Link
              href="#"
              className="link !bg-transparent capitalize hover:text-orange-500"
            >
              {menu}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SortMenu;
