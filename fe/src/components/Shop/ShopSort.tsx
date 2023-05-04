import { Menu } from "@headlessui/react";
import { useState } from "react";
import { Fredoka } from "next/font/google";
import SortMenu from "./SortMenu";

const fredoka = Fredoka({ subsets: ["latin"] });

const subMenuList = [
  {
    name: "Cat",
    menu1:"Food",
    menu2:"Toy & Supplies",
    detail:["...","...","...","...","..."]
  },
  { name: "Dog",   
    menu1:"Food",
    menu2:"Toy & Supplies" ,
    detail:["...","...","...","...","..."]
  },
];

export default function SortList() {
  return (
    <div className="rounded-xl m-5 ">
      <h1
        className={`lg:text-3xl md:text-2xl sm:text-xl mb-12 text-black font-bold ${fredoka.className}`}
      >
        Product List
      </h1>
      <Menu as="div">
        <div className=" w-full">
          {subMenuList?.map((menu, idx) => (
            <div key={idx} className="flex flex-col  text-black ">
              <SortMenu data={menu} />
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
}
