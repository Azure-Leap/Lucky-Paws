import { FavAnimalContext } from "@/context/FavAnimalContext";
import React, { useContext, useState } from "react";
import Image from "next/image";

const FavAnimals = ({}) => {
  const { addAnimal, setAddAnimal } = useContext(FavAnimalContext);
  const favAnimals = addAnimal?.animals;

  return (
    <div className="container mx-auto ">
      {favAnimals?.map((el: any, idx: number) => (
        <div
          key={idx}
          className="group bg-white hover:scale-105 shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl mx-6 mt-16 max-sm:col-span-3 sm:col-span-3  md:col-span-3 lg:col-span-1 "
        >
          <div className="group grid grid-cols-2">
            <div className="max-sm:col-span-1 col-span-1 md:col-span-1 xl:col-span-1 ">
              <Image
                src={el.animals.imgs[0].src}
                alt="animalPhoto"
                width={300}
                height={100}
                className="h-[200px] w-full rounded-lg object-contain "
              />
            </div>
            <div className="max-sm:col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-1 m-auto">
              <div className=" max-sm:text-2xl sm:text-2xl md:text-xl text-center p-1 ">
                {el.animals.name}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavAnimals;
