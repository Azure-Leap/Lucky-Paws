import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Fredoka_One } from "next/font/google";

const fredokaOne = Fredoka_One({ subsets: ["latin"], weight: ["400"] });

const kobyImg = require("../../assets/images/AnimalCards/koby.jpg");
const saraImg = require("../../assets/images/AnimalCards/sara.jpg");
const maxImg = require("../../assets/images/AnimalCards/max.jpg");

const dogs = [
  {
    name: "Koby",
    image: kobyImg,
    link: "#",
  },
  {
    name: "Sara",
    image: saraImg,
    link: "#",
  },
  {
    name: "Max",
    image: maxImg,
    link: "#",
  },
];

const Dogs = () => {
  return (
    <div className="container mx-auto my-48 grid grid-flow-row gap-12 text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dogs.map((e, idx) => (
        <Link
          key={idx}
          href={e.link}
          className="flex flex-col bg-white text-center rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)] hover:scale-105"
        >
          <div className="relative w-full h-52">
            <Image
              src={e.image}
              alt="koby"
              fill
              sizes="100%"
              className="rounded-t-3xl w-auto h-auto"
            />
          </div>
          <div
            className={`text-4xl font-bold my-auto text-orange-500 ${fredokaOne.className}`}
          >
            {e.name}
          </div>
        </Link>
      ))}
      <Link
        href="#"
        className="px-16 pt-10 pb-6 flex flex-col gap-10   text-center justify-center rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)] bg-gradient-to-t from-orange-500 to-yellow-300 hover:scale-105"
      >
        <FontAwesomeIcon icon={faPaw} size="8x" className="text-white " />
        <div
          className={`text-4xl font-extrabold text-white border-t-2  ${fredokaOne.className}`}
        >
          See More
        </div>
      </Link>
    </div>
    // <div className="flex justify-evenly items-center h-screen">
    //   {dogs.map((d, name) => (
    //     <div className="flex items-center text-center">
    //       <Link href="#">
    //         <div className="rounded-t-[35px] rounded-b-[18px] bg-white">
    //           <Image src={d.img} width={250} height={350} alt="koby" />
    //           <h1 className={`${fredoka.className} p-7 text-3xl`}>{d.name}</h1>
    //         </div>
    //       </Link>
    //     </div>
    //   ))}

    //   <div className="flex items-center text-center ">
    //     <Link href="#">
    //       <div className="flex flex-col rounded-[18px] w-[250px] text-white bg-gradient-to-t from-orange-500 to-yellow-300 items-center justify-evenly p-10">
    //         <FontAwesomeIcon
    //           icon={faPaw}
    //           className="w-[75px] h-[75px] mt-5 mb-14"
    //         />
    //         <div className="w-full border-b my-2"></div>
    //         <h1 className={`${fredoka.className} text-3xl w-full`}>See more</h1>
    //       </div>
    //     </Link>
    //   </div>

    //   {/* <div className="flex justify-center items-center text-center bg-slate-600">
    //     <Link href="#">
    //       <div className="rounded-t-[35px] rounded-b-[18px] bg-white">
    //         <Image src={koby} width={250} height={350} alt="koby" />
    //         <h1 className={`${fredoka.className} p-7 text-3xl`}>Name</h1>
    //       </div>
    //     </Link>
    //   </div> */}
    // </div>
  );
};

export default Dogs;
