import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Fredoka } from "next/font/google";
import SortMenu from "./SortMenu";

const fredoka = Fredoka({ subsets: ["latin"] });

const subMenuList = [
  {
    name: "Age",
    menus: ["0-1", "1-2", "2-3", "3-4"],
  },
  { name: "Size", menus: ["Small", "Medium", "Large"] },
  { name: "Gender", menus: ["Male", "Female"] },
  { name: "Health", menus: ["Vaccinated", "not-Vaccinated"] },
];

export default function SortList() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="rounded-xl m-5 ">
      <h1
        className={`lg:text-3xl md:text-2xl sm:text-xl mb-12 text-black font-bold ${fredoka.className}`}
      >
        Sort
      </h1>
      <Menu as="div" className="">
        <div className=" w-full">
          {subMenuList?.map((menu, idx) => (
            <div key={idx} className="flex flex-col  text-black ">
              <SortMenu data={menu} />
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
}
