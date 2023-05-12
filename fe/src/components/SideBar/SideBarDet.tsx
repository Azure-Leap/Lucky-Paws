import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleCircleSquare,faInbox,faUser,faArrowRightToBracket,faTable, faShoppingCart, } from "@fortawesome/free-solid-svg-icons";

const SideBarDet = ({open}:any) => {
  return (
    <div className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 ${open ? "sm:translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <div className="space-y-2 font-medium">
                    <Link
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                    <FontAwesomeIcon icon={ faTriangleCircleSquare }  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <p className="ml-3">Dashboard</p>
                    </Link>
                    
                    
                    <Link
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >

                        <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <div className="flex-1 ml-3 whitespace-nowrap">Kanban</div>
                    
                    </Link>
                
                    <Link
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <FontAwesomeIcon icon={faInbox} className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <div className="flex-1 ml-3 whitespace-nowrap">Inbox</div>
                    
                    </Link>
                
                    <Link
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <FontAwesomeIcon icon={faUser}  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <div className="flex-1 ml-3 whitespace-nowrap">Users</div>
                    </Link>
                
                    <Link
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <FontAwesomeIcon icon={faShoppingCart}  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                        <div className="flex-1 ml-3 whitespace-nowrap">Products</div>
                    </Link>
                
                    <Link
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <FontAwesomeIcon icon={faArrowRightToBracket}  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <div className="flex-1 ml-3 whitespace-nowrap">Sign In</div>
                    </Link>
                
                    <Link
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <FontAwesomeIcon icon={faTable} className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <div className="flex-1 ml-3 whitespace-nowrap">Sign Up</div>
                    </Link>
                    
                </div>
        </div>
    </div>
  )
}

export default SideBarDet