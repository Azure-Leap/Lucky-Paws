import React, { useState, useContext } from "react";
import Pagination from "../../components/Petlist/pagination";

import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import { useAnimals } from "@/hooks/usePets";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { IAnimal } from "@/utils/interfaces";
import { FavAnimalContext } from "@/context/FavAnimalContext";
import  {AnimalFilter}  from "@/components/Animal/AnimalFilter";
import { UserContext } from "@/context/UserContext";
import { useFavAnimal } from "@/hooks/useFavAnimal";

const Section = () => {
  const { animals } = useAnimals();
  const { user}:any = useContext(UserContext)
  const { addAnimal, setAddAnimal } = useContext(FavAnimalContext);
  const [filteredList,setFilteredList]= useState(animals)

  const {addAnimalToFav}  = useFavAnimal();

  const handleClick = (animal: IAnimal) => {
    console.log("u",user._id);
    console.log("a",animal._id);
    addAnimalToFav(user._id, animal._id);
  };

  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  const breadCrumbs = [{ name: "Pets", link: "" }];
  return (
    <div className="bg-[#FFF3D3] p-10">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="m-auto container grid grid-cols-6">
        <div className="md:col-span-1 bg-white  md:aspect-[9/12] rounded-lg m-5 sm:col-span-5 max-sm:col-span-5 shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
          {/* <SortList /> */}
          <AnimalFilter animals={animals}  setFilteredList={setFilteredList} />
        </div>
        <div className="gap-6 mx-auto md:col-span-5 sm:col-span-5 max-sm:col-span-6 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {filteredList?.map((animal: any, idx: number) => (
            <div key={idx}>
              <div className="group bg-white hover:scale-110  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-3xl m-3">
                <div className="group grid grid-cols-2">
                  <div className="max-sm:col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-2 relative ">
                    <Image
                      src={animal.imgs[0].src}
                      alt="animalsPhoto"
                      width={400}
                      height={100}
                      className="h-[400px] w-full rounded-t-3xl object-fill "
                    />
                    <button onClick={() => handleClick(animal)}>
                      <FontAwesomeIcon
                        icon={faPaw}
                        className="text-black bg-gray-50 absolute z-50 top-1 right-5 text-xl border-2 border-black rounded-full p-2 hover:scale-110"
                      />
                    </button>
                  </div>
                  <Link key={idx} href={`animal/${animal._id}`} passHref>
                    <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 text-center  my-auto">
                      <div className=" max-sm:text-xl sm:text-xl md:text-lg p-1 font-bold">
                        {animal.name}
                      </div>
                      <div className="p-1 font-medium">{animal.gender}</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Section;
