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
import { useState , useContext } from "react";
import { useRouter } from "next/router";

// import ShoppingCart from "../ShoppingCart/ShoppingCart";
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
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const router = useRouter();
  const {addAnimal, setAddAnimal} = useContext(FavAnimalContext);
  const animalCount = addAnimal?.animals?.length
  const {card, setCard} = useContext(CardContext);
  const cardCount = card?.items?.length

  const handleOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Pets", href: "/animal", current: false },
    { name: "Shop", href: "/products", current: false },
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
                    <button
                      onClick={() => {
                        setdropdownOpen(!dropdownOpen);
                      }}
                      className="group p-2 text-center text-xl font-medium relative  group rounded-md  hover:bg-orange-500 hover:text-white "
                    >
                      Blog
                      <div
                        className={`${
                          dropdownOpen
                            ? `top-full opacity-100 visible `
                            : "invisible opacity-0"
                        } text-black text-start m-2 -ml-2 rounded-xl group-hover:block shadow-[0_8px_16px_rgba(132,74,20,0.25)] absolute left-0 z-40 mt-2 w-48 border-[.5px] border-light  shadow-card transition-all`}
                      >
                        <Link
                          className="rounded-t-xl bg-white hover:bg-orange-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                          href="/blog"
                        >
                          Advice
                        </Link>

                        <Link
                          className="bg-white  hover:bg-orange-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          News
                        </Link>

                        <Link
                          className="rounded-b-xl bg-white  hover:bg-orange-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Abcd
                        </Link>
                      </div>
                    </button>
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
                  {animalCount === 0 ? null : <span className="block">{animalCount}</span>}
                  </div>
                </Link>
                <button
                  type="button"
                  className="rounded-full text-xl p-2  hover:text-orange-500 hidden xl:ml-6 xl:block"
                >
                  <FontAwesomeIcon icon={faShoppingCart} onClick={handleOpen} />
                  <div className="bg-orange-300 rounded-full absolute bottom-1 text-lg text-white">
                  {cardCount === 0 ? null : <span className="block">{cardCount}</span>}
                  </div>
                </button>

                <p className="p-4  text-3xl hidden xl:ml-6 xl:block">|</p>
                <ProfileDropDown/>
                {/* <Link href={"/auth"}>
                  <button className="font-bold text-xl m-3 hidden md:ml-6 md:block">
                    login
                  </button>
                </Link>
                <button className="font-bold m-3 text-xl bg-orange-500 p-2 w-32 rounded-3xl text-white hidden md:ml-6 md:block">
                  Sign Up
                </button> */}
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
          {/* <ShoppingCart open={isCartOpen} setOpen={setIsCartOpen} /> */}
        </>
      )}
    </Disclosure>
  );
}
