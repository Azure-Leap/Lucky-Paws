import React, { ReactElement } from "react";
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
  return (
    <div className="grid grid-flow-row gap-12 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="px-16 pt-10 pb-6 flex flex-col gap-10 text-center justify-center rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
        <FontAwesomeIcon icon={faDog} size="8x" className="text-orange-500" />
        <div
          className={`text-4xl font-extrabold text-orange-500 ${fredokaOne.className}`}
        >
          Dogs
        </div>
      </div>
      <div className="px-16 pt-10 pb-6 flex flex-col gap-10 text-center justify-center rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
        <FontAwesomeIcon icon={faCat} size="8x" className="text-orange-500" />
        <div
          className={`text-4xl font-extrabold text-orange-500 ${fredokaOne.className}`}
        >
          Cats
        </div>
      </div>
      <div className="px-16 pt-10 pb-6 flex flex-col gap-10 text-center justify-center rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="8x"
          className="text-orange-500"
        />
        <div
          className={`text-4xl font-extrabold text-orange-500 ${fredokaOne.className}`}
        >
          Shopping
        </div>
      </div>
      <div className="px-16 pt-10 pb-6 flex flex-col gap-10 text-center justify-center rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
        <FontAwesomeIcon icon={faPaw} size="8x" className="text-orange-500" />
        <div
          className={`text-4xl font-extrabold text-orange-500 ${fredokaOne.className}`}
        >
          Blogs
        </div>
      </div>
    </div>
  );
}
