import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const SortMenu = ({ data }: any) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subListOpen,setSubListOpen]=useState(true);
  const [subList2Open,setSubList2Open]=useState(true);
  return (
    <>

    {/* cat or dog menu dropdown */}
      <Menu.Button
        onClick={() => setSubMenuOpen(!subMenuOpen)}
        className={`hover:text-orange-300 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
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


      {/*cat eswel dog deer darah uyd garah ehnii menu "FOOD" dropdown  */}
      <div
        className={`flex flex-col pl-5 mb-7 mt-5 text-lg rounded-lg overflow-hidden h-0 ${
          subMenuOpen && "h-fit"
        }`}
      >
             <div
              onClick={() => setSubListOpen(!subListOpen)}
              className={` inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
                subListOpen && ""
              }`}
            >
              <span>{data.menu1}</span>
      
              <ChevronDownIcon
                aria-hidden="true"
                onClick={() => setSubListOpen(!subListOpen)}
                className={`-mr-1 h-5 w-5 text-gray-400 ${
                  !subListOpen && "rotate-180"
                }`}
              />
            </div>
            <div
        className={`flex flex-col pl-5mt-5 text-lg rounded-lg overflow-hidden h-0 ${
          !subListOpen && "h-fit"
        }`}
      >
        {data.detail.map((menu: any, idx: any) => (
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
      
      </div>
 

     {/* cat eswel dog deer darah uyd garah daraagiin menu "Toy and supplies " dropdown */}
      <div
        className={` flex flex-col pl-5 mb-5 text-lg rounded-lg overflow-hidden h-0 ${
          subMenuOpen && "h-fit"
        }`}
      >
             <div
              onClick={() => setSubList2Open(!subList2Open)}
              className={`inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
                subList2Open && ""
              }`}
            >
              <span>{data.menu2}</span>
      
              <ChevronDownIcon
                aria-hidden="true"
                onClick={() => setSubList2Open(!subList2Open)}
                className={`-mr-1 h-5 w-5 text-gray-400 ${
                  !subList2Open && "rotate-180"
                }`}
              />
            </div>
            <div
        className={` flex flex-col pl-5 text-lg rounded-lg overflow-hidden h-0 ${
          !subList2Open && "h-fit"
        }`}
      >
        {data.detail.map((menu: any, idx: any) => (
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
      
      </div>
    </>
  );
};

export default SortMenu;