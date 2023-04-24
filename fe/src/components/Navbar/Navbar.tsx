import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faShoppingCart,
  faPaw,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Pets", href: "#", current: false },
  { name: "Shop", href: "/products", current: false },
  { name: "Blog", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[85vw] px-5 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-orange-400 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <FontAwesomeIcon
                      icon={faX}
                      className="block h-6 w-6 "
                      aria-hidden="true"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="block h-6 w-6 "
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch md:justify-start">
                <Link href={"/"} className="flex flex-shrink-0 items-center">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />

                  <Image
                    src="/images/LuckyPaws.png"
                    alt="logo"
                    width={120}
                    height={100}
                  />
                </Link>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-orange-500 text-white text-xl"
                            : "text-xl text-black hover:bg-orange-500 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6  sm:pr-0">
                <button
                  type="button"
                  className="rounded-full text-xl p-2  hover:text-orange-500 hidden xl:ml-6 xl:block"
                >
                  <FontAwesomeIcon icon={faPaw} />
                </button>
                <button
                  type="button"
                  className="rounded-full text-xl p-2  hover:text-orange-500 hidden xl:ml-6 xl:block"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3 ">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}

                <p className="p-4  text-3xl hidden xl:ml-6 xl:block">|</p>
                <button className="font-bold text-xl m-3 hidden md:ml-6 md:block">
                  login
                </button>
                <button className="font-bold m-3 text-xl bg-orange-500 p-2 w-32 rounded-3xl text-white hidden md:ml-6 md:block">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-orange-200 text-center">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "  text-black font-bold hover:bg-orange-400 hover:text-white"
                      : "text-black font-bold  hover:bg-orange-400 hover:text-white",
                    "block rounded-md px-3 py-2 text-base "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
