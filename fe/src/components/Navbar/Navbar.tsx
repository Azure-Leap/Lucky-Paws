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
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import { FavAnimalContext } from "@/context/FavAnimalContext";
import { CardContext } from "@/context/ShoppingCardContext";

const logoImg = require("../../assets/images/NavBar/logo.png");
const luckyPaws = require("../../assets/images/NavBar/LuckyPaws.png");

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const { addAnimal, setAddAnimal } = useContext(FavAnimalContext);
  const animalCount = addAnimal?.animals?.length;
  const { card, setCard } = useContext(CardContext);
  const cardCount = card?.items?.length;
  const [local, setLocal] = useState<any>();
  useEffect(() => {
    const a = localStorage.getItem("token");
    setLocal(a);
    if (!localStorage.getItem("token")) {
      setTimeout(() => {}, 5000);
    } else if (localStorage.getItem("token") === " ") {
      router.push("/auth/login");
    }
  });

  const handleOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Pets", href: "/animal", current: false },
    { name: "Shop", href: "/products", current: false },
    { name: "Blog", href: "/blog", current: false },
  ];
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[85vw] px-5 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                    src={logoImg}
                    alt="logo"
                    width={30}
                    height={30}
                    className="w-auto h-auto"
                  />

                  <Image
                    src={luckyPaws}
                    alt="logo"
                    width={120}
                    height={100}
                    className="w-auto h-auto"
                  />
                </Link>
                <div className="hidden lg:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        // onClick={setCurrent(true)}
                        className={classNames(
                          item.current
                            ? "bg-orange-500 text-white text-xl"
                            : "text-xl text-black hover:bg-orange-500 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6  sm:pr-0">
                <Link
                  href={"/favAnimals"}
                  className="rounded-full text-xl p-2  hover:text-orange-500 hidden xl:ml-6 xl:block"
                >
                  <FontAwesomeIcon icon={faPaw} className="text-2xl" />
                  <div className="bg-orange-300 rounded-full absolute bottom-1 text-lg text-white">
                    {animalCount === 0 ? null : (
                      <span className="block">{animalCount}</span>
                    )}
                  </div>
                </Link>
                <button
                  type="button"
                  className="rounded-full text-xl p-2  hover:text-orange-500 hidden xl:ml-6 xl:block"
                >
                  <FontAwesomeIcon icon={faShoppingCart} onClick={handleOpen} />
                  <div className="bg-orange-300 rounded-full absolute bottom-1 text-lg text-white">
                    {cardCount === 0 ? null : (
                      <span className="block">{cardCount}</span>
                    )}
                  </div>
                </button>

                <p className="p-4  text-3xl hidden xl:ml-6 xl:block">|</p>
                {!local ? (
                  <div>
                    <Link href={"/auth"}>
                      <button className="font-bold text-xl m-3 hidden md:ml-6 md:block">
                        Login
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <ProfileDropDown />

                    {/* <button
                        onClick={() => {
                          localStorage.removeItem("token");
                          alert("BYE!!!");
                        }}
                        className="font-bold m-3 text-xl bg-orange-500 p-2 w-32 rounded-3xl text-white hidden md:ml-6 md:block"
                      >
                        Logout
                      </button> */}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-orange-200 text-center">
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
          <ShoppingCart open={isCartOpen} setOpen={setIsCartOpen} />
        </>
      )}
    </Disclosure>
  );
}
