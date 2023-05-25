import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const logoImg = require("../../assets/images/NavBar/logo.png");

const ProfileDropDown = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const userName = localStorage.getItem("name");
  const profile = String(localStorage.getItem("profile"));

  const LogoutAlert = () => {
    return toast.warn("Loggin Out. PEACE!!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // const img = profile
  //   ? profile
  //   : "https://vaumc.org/wp-content/uploads/2021/06/PicturePlaceholder-1.jpg";

  return (
    <div className="flex items-center">
      <div className="flex items-center ml-3">
        <div>
          <button
            type="button"
            className="flex text-smrounded-full focus:ring-4 focus:ring-gray-300"
            onClick={() => {
              setdropdownOpen(!dropdownOpen);
            }}
          >
            <Image
              className="w-8 h-8 rounded-full"
              src={
                !profile
                  ? "https://vaumc.org/wp-content/uploads/2021/06/PicturePlaceholder-1.jpg"
                  : profile
              }
              alt="user"
              width={300}
              height={300}
            />
            <div
              className={`${
                dropdownOpen ? `mt-12 visible ` : "invisible opacity-0"
              } duration-300 text-black text-start mr-2 rounded-xl group-hover:block shadow-[0_8px_16px_rgba(132,74,20,0.25)] absolute -right-0 z-40  w-48 border-[.5px] border-light  shadow-card `}
            >
              <p className="rounded-t-xl bg-white py-2 px-4 block whitespace-no-wrap">
                {userName}
              </p>
              <hr />
              <Link
                className=" bg-white hover:bg-orange-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="/profile"
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
                <div
                  onClick={() => {
                    // logOut();
                    // alert("Bye!!!");
                  }}
                >
                  <ToastContainer />
                  Sign out
                </div>
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
