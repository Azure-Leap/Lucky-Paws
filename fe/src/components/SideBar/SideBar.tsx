import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import SideBarDet from "./SideBarDet";

const logoImg = require("../../assets/images/NavBar/logo.png");
const luckyPaws = require("../../assets/images/NavBar/LuckyPaws.png");

export default function Sidebar() {
   
const [dropdownOpen, setdropdownOpen] = useState(false);
const [open, setOpen]=useState(true);

const handleOpen=()=>{
  setOpen(!open)
}
return(
<> 
<div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
<div className="px-3 py-3 lg:px-5 lg:pl-3">
  <div className="flex items-center justify-between">
    {/* logo nav */}
    <div className="flex items-center justify-start">
      <button
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        onClick={handleOpen}>
       <FontAwesomeIcon icon={faBars} />      
      </button>
      
      <Link href="/" className="flex ml-2 md:mr-24 max-sm:text-center">
        <Image
          src={logoImg}
          className="h-full mr-3"
          alt=" Logo"
        />
          <Image
          src={luckyPaws}
          className="h-full my-auto mr-3"
          alt="Logo"
        />
      </Link>
    </div>
    {/* profile dropdown */}
    <ProfileDropDown/>
  </div>
</div>
</div>
<SideBarDet open={open}/>
</>
);
    }
