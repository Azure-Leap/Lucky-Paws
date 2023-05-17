import { Menu } from "@headlessui/react";
import { useState } from "react";
import { Fredoka } from "next/font/google";
import SortMenu from "./SortMenu";
import { valueOrDefault } from "chart.js/dist/helpers/helpers.core";

const fredoka = Fredoka({ subsets: ["latin"] });

const subMenuList = [
  {
    name:"All",
    value:"645c9695d4a8fa0b9a04d3bd"
  },
  {
    value:"645c8df8e049adbd7a7956e0",
    name: "Cat",
    menu1: "Food",
    menu2: "Toy & Supplies",
  },
  {
    value:"645c8e0ae049adbd7a7956e4",
    name: "Dog",
    menu1: "Food",
    menu2: "Toy & Supplies",
  },
  {
    name:"Supplies",
    value:"645c988909354b18b57381af"
  }
];

export default function SortList({setSelectedCategory}:any) {
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
              <SortMenu data={menu} setSelectedCategory={setSelectedCategory}/>
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
}
