import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleCircleSquare,
  faInbox,
  faUser,
  faArrowRightToBracket,
  faTable,
  faShoppingCart,
  faPaw,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

const SideBarDet = ({ open }: any) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 w-48 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 ${
        open ? "sm:translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <div className="space-y-2 font-medium">
          <Link
            href="/profile"
            className="flex items-center p-2 text-gray-900 rounded-lg "
          >
            <FontAwesomeIcon
              icon={faTriangleCircleSquare}
              className="w-6 h-6 text-gray-500 transition duration-75 "
            />
            <p className="ml-3">Dashboard</p>
          </Link>

          <Link
            href="/profile/pets"
            className="flex items-center p-2 text-gray-900 rounded-lg "
          >
            <FontAwesomeIcon
              icon={faPaw}
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
            />
            <div className="flex-1 ml-3 whitespace-nowrap">Pets</div>
          </Link>

          <Link
            href="/profile/products"
            className="flex items-center p-2 text-gray-900 rounded-lg "
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
            />

            <div className="flex-1 ml-3 whitespace-nowrap">Products</div>
          </Link>

          <Link
            href="/profile/users"
            className="flex items-center p-2 text-gray-900 rounded-lg "
          >
            <FontAwesomeIcon
              icon={faUser}
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
            />
            <div className="flex-1 ml-3 whitespace-nowrap">Users</div>
          </Link>
          <Link
            href="/profile/blogWrite"
            className="flex items-center p-2 text-gray-900 rounded-lg "
          >
            <FontAwesomeIcon
            icon={faPenToSquare}
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
            />
            <div className="flex-1 ml-3 whitespace-nowrap">Blogs</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarDet;
