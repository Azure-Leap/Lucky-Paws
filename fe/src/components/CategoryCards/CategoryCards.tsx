import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faShoppingCart,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { Fredoka_One } from "next/font/google";

const fredokaOne = Fredoka_One({ subsets: ["latin"], weight: ["400"] });

export default function CategoryCards(): any {
  const categoryItems = [
    { icon: faDog, link: "#", title: "Dogs" },
    { icon: faCat, link: "#", title: "Cats" },
    { icon: faShoppingCart, link: "/products", title: "Shopping" },
    { icon: faPaw, link: "/blog", title: "Blogs" },
  ];
  return (
    <div className="container mx-auto p-5  mb-24 grid grid-flow-row gap-12 text-neutral-600 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categoryItems.map((e, index) => (
        <Link
          key={index}
          href={e.link}
          className="pt-10 pb-6 flex flex-col gap-10 text-center justify-center rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)] hover:scale-105"
        >
          <FontAwesomeIcon
            icon={e.icon}
            className="text-orange-500 text-8xl"
          />
          <div
            key={index}
            className={`text-center xl:text-4xl max-sm:text-xl font-extrabold text-orange-500 ${fredokaOne.className}`}
          >
            {e.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
