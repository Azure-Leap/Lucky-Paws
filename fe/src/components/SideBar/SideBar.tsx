import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faGear, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';
// import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
// import { HiOutlineShoppingBag } from 'react-icons/hi';
// import { FiSettings } from 'react-icons/fi';

const logoImg = require("../../assets/images/NavBar/logo.png");
const luckyPaws = require("../../assets/images/NavBar/LuckyPaws.png");

export default function Sidebar({ children }:any){
  return (
    <div className='col-span-1'>
      <div className=' w-20 h-full p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className=' text-white  rounded-lg inline-block'>
            <Image
                    src={logoImg}
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-auto h-auto"
                  />

                  {/* <Image
                    src={luckyPaws}
                    alt="logo"
                    width={120}
                    height={100}
                    className="w-auto h-auto"
                  /> */}
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/profile/users'>
            <div className='bg-gray-300 hover:bg-gray-400 cursor-pointer my-4 py-3 px-4 rounded-lg inline-block'>
            <FontAwesomeIcon icon={faUser} />
            </div>
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-300 hover:bg-gray-400 cursor-pointer my-4 py-3 px-4 rounded-lg inline-block'>
            <FontAwesomeIcon icon={faBagShopping} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-300 hover:bg-gray-400 cursor-pointer my-4 py-3 px-4 rounded-lg inline-block'>
            <FontAwesomeIcon icon={faPaw} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-300 hover:bg-gray-400 cursor-pointer my-4 py-3 px-4 rounded-lg inline-block'>
            <FontAwesomeIcon icon={faGear} />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};


