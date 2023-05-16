import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const SortMenu = ({ data,setSelectedCategory }: any) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subListOpen,setSubListOpen]=useState(true);
  const [subList2Open,setSubList2Open]=useState(true);

    function handleTarget(e: any) {
    setSelectedCategory(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>

    {/* cat or dog menu dropdown */}
      <Menu.Button
        onClick={() => {
          setSubMenuOpen(!subMenuOpen)
          handleTarget
          // console.log()
        }}
        value={data.value}
        className={`hover:text-orange-500 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
          subMenuOpen && ""
        }`}
      >
        {data.name}

        <ChevronDownIcon
          aria-hidden="true"
          onClick={() => {
            setSubMenuOpen(!subMenuOpen)
            handleTarget
          }}
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
        <button
          onClick={() => {
            setSubListOpen(!subListOpen)
            handleTarget
          }}
          value={data.value}
          className={` inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 `}
        >
          {data.menu1}
        </button>         
      </div>
 {/* cat eswel dog deer darah uyd garah daraagiin menu "Toy and supplies " dropdown */}
      {/* <div
        className={` flex flex-col pl-5 mb-5 text-lg rounded-lg overflow-hidden h-0 ${
          subMenuOpen && "h-fit"
        }`}
      >
             <button
              onClick={() => {
                setSubList2Open(!subList2Open)
                handleTarget
              }}
              value={data.value}
              className={`inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 active:text-orange-500`}
            >
              {data.menu2}
            </button>      
      </div> */}
    </>
  );
};

export default SortMenu;