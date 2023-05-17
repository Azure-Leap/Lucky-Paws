import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import SideBarDet from "./SideBarDet";

const logoImg = require("../../assets/images/NavBar/logo.png");
const luckyPaws = require("../../assets/images/NavBar/LuckyPaws.png");

export default function Sidebar() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* logo nav */}
            <div className="flex items-center justify-start">
              <button
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={handleOpen}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>

              <Link href="/" className="flex ml-2 md:mr-24 max-sm:text-center">
                <Image src={logoImg} className="h-full mr-3" alt=" Logo" />
                <Image
                  src={luckyPaws}
                  className="h-full my-auto mr-3"
                  alt="Logo"
                />
              </Link>
            </div>
            {/* profile dropdown */}
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-smrounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    onClick={() => {
                      setdropdownOpen(!dropdownOpen);
                    }}
                  >
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={logoImg}
                      alt="user"
                    />
                    <div
                      className={`${
                        dropdownOpen ? `mt-12 visible ` : "invisible opacity-0"
                      } duration-300 text-black text-start mr-2 rounded-xl group-hover:block shadow-[0_8px_16px_rgba(132,74,20,0.25)] absolute -right-0 z-40  w-48 border-[.5px] border-light  shadow-card `}
                    >
                      <p className="rounded-t-xl bg-white py-2 px-4 block whitespace-no-wrap">
                        name
                      </p>
                      <hr />
                      <Link
                        className=" bg-white hover:bg-orange-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Dashboard
                      </Link>
                      <Link
                        className="bg-white  hover:bg-orange-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Settings
                      </Link>
                      <Link
                        className="rounded-b-xl bg-white  hover:bg-orange-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Sign out
                      </Link>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBarDet open={open} />
    </>
  );
}
