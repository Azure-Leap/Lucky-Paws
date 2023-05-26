import React, { useState, useContext } from "react";
import Pagination from "../../components/Petlist/pagination";
import SortList from "../../components/Petlist/SortList";
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion"

import { useAnimals } from "@/hooks/usePets";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { IAnimal, ICard } from "@/utils/interfaces";
import { FavAnimalContext } from "@/context/FavAnimalContext";
import  {AnimalFilter}  from "@/components/Animal/AnimalFilter";

const Section = () => {
  const { animals } = useAnimals();
  const { addAnimal, setAddAnimal } = useContext(FavAnimalContext);
  const [filteredList,setFilteredList]= useState(animals)
  const handleClick = (animal: IAnimal) => {
    if (animal._id) {
      let newAnimal =
        addAnimal?.animals?.length > 0 ? [...addAnimal?.animals] : [];

      let newFav = {
        animals: animal,
        count: 1,
      };

      const selectedAnimalIdx = newAnimal?.findIndex(
        (e) => e?.animals?._id === animal?._id
      );
      if (selectedAnimalIdx > -1) {
        newAnimal[selectedAnimalIdx].count++;
      } else {
        newAnimal = [...newAnimal, newFav];
      }

      const favAnimal = {
        user_Id: "jhbmb",
        animals: newAnimal,
      };
      setAddAnimal(favAnimal);
    }
  };

  const hoverVariant = {
    hover: {
      scale: 1.05,  
    },
    pressed: {
      scale: 0.98,  
    },
  }

  const containerLeft = {
    hidden: {
      opacity: 0,  
      x: '-100vw',  
    },
    visible: {
      opacity: 1,  
      x: 0,  
      transition: {
        duration: 1,  
        ease: 'easeInOut',  
      },
    },
  };

  const containerRight = {
    hidden: {
      opacity: 0,  // Starts with opacity 0
      x: '100vw',  // Starts outside the right edge of the screen
    },
    visible: {
      opacity: 1,  // Fades in with opacity 1
      x: 0,  // Moves to the center of the screen
      transition: {
        duration: 1,  // Duration of the animation (in seconds)
        ease: 'easeInOut',  // Easing function for a smooth animation
      },
    },
  }

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
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerLeft}
        className="md:col-span-1 bg-white  md:aspect-[9/12] rounded-lg m-5 sm:col-span-5 max-sm:col-span-5 shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
          {/* <SortList /> */}
          <AnimalFilter animals={animals}  setFilteredList={setFilteredList} />
        </motion.div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={containerRight}
        className="gap-6 mx-auto md:col-span-5 sm:col-span-5 max-sm:col-span-6 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {filteredList?.map((animal: any, idx: number) => (
            <motion.div 
            whileHover="hover"
            whileTap="pressed"
            variants={hoverVariant}
            key={idx}>
              <div className="group bg-white  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-3xl m-3">
                <div className="group grid grid-cols-2">
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 relative ">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div initial="hidden"
        animate="visible"
        variants={containerRight} >
        <Pagination />
      </motion.div>
    </div>
  );
};

export default Section;
