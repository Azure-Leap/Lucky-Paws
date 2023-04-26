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
    <div className="bg-white ml-auto mt-24 max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 w-[15%] h-[25%] rounded-xl ">
      <h1
        className={`lg:text-5xl md:text-3xl sm:text-xl mb-12 text-black font-bold ${fredoka.className}`}
      >
        Sort
      </h1>
      <Menu as="div" className="">
        <div className=" w-full">
          {subMenuList?.map((menu) => (
            <div key={menu.name} className="flex flex-col text-black ">
              <SortMenu data={menu} />
            </div>
          ))}
        </div>

        {/* <Menu.Button
                key={i}
                className="inline-flex w-full justify-between mb-7 gap-x-1.5 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <span>{e.type}</span>

                <ChevronDownIcon
                  aria-hidden="true"
                  onClick={() => setSubMenuOpen(!subMenuOpen)}
                  className={`-mr-1 h-5 w-5 text-gray-400 ${
                    subMenuOpen && "rotate-180"
                  }`}
                />
              </Menu.Button> */}

        {/* <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //   >
    //     <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //       <div className="py-1">
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                 "block px-4 py-2 text-sm"
    //               )}
    //             >
    //               Account settings
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                 "block px-4 py-2 text-sm"
    //               )}
    //             >
    //               Support
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                 "block px-4 py-2 text-sm"
    //               )}
    //             >
    //               License
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <form method="POST" action="#">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 type="submit"
    //                 className={classNames(
    //                   active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                   "block w-full px-4 py-2 text-left text-sm"
    //                 )}
    //               >
    //                 Sign out
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </form>
    //       </div>
    //     </Menu.Items>
    //   </Transition> */}
      </Menu>
    </div>
  );
}
