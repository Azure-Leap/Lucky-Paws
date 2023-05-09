import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faChevronLeft,
  faGear,
  faPaw,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const logoImg = require("../../assets/images/NavBar/logo.png");
const luckyPaws = require("../../assets/images/NavBar/LuckyPaws.png");

export default function Sidebar({ children }: any) {
  const [open, setOpen] = useState(true);
  const navigation = [
    { title: "Users", link: "/profile/users", icon: faUser },
    { title: "Pets", link: "/profile/pets", icon: faPaw },
    { title: "Products", link: "/profile/products", icon: faBagShopping },
    { title: "Settings", link: "/profile/setting", icon: faGear },
  ];
  return (
    <div className="col-span-1 bg-purple-300">
      <div
        className={`relative ${
          open ? "w-full" : "w-20"
        } h-full p-4 top-0 bg-white flex flex-col justify-between duration-300`}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`absolute bg-white py-2 px-3 text-orange-400 text-2xl rounded-full top- -right-5 cursor-pointer ${
            !open && "rotate-180"
          } duration-300`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col h-screen">
          <Link href="/profile">
            <div className="grid grid-flow-row justify-items-center gap-2">
              <Image
                src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profile_pic"
                width={70}
                height={70}
                className={`rounded-full ${
                  open ? "scale-100" : "scale-[0.9]"
                } duration-300`}
              />
              <div
                className={`grid grid-flow-row justify-items-center ${
                  open ? "block" : "hidden"
                }`}
              >
                <p className="text-orange-500 text-lg font-bold">
                  Tushig Regzen
                </p>
                <p className="text-sm text-gray-500">Admin</p>
              </div>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          {navigation?.map((item, idx) => (
            <Link key={idx} href={item.link} className="flex">
              <div className="bg-gray-300 hover:bg-orange-400 cursor-pointer my-4 py-3 px-4 rounded-lg inline-block">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h2 className={`my-auto mx-4 ${open ? "block" : "hidden"}`}>
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* //   <main className="ml-20 w-full">{children}</main> */}
    </div>
  );
}
