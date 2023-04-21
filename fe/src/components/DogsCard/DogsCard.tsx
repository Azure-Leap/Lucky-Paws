import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

const dogs = [
  {
    name: "Koby",
    img: "/koby.png",
  },
  {
    name: "Sara",
    img: "/sara.png",
  },
  {
    name: "Max",
    img: "/max.png",
  },
];

const Dogs = () => {
  return (
    <div className="flex justify-evenly items-center h-screen">
      {dogs.map((d, name) => (
        <div className="flex items-center text-center">
          <Link href="#">
            <div className="rounded-t-[35px] rounded-b-[18px] bg-white">
              <Image src={d.img} width={250} height={350} alt="koby" />
              <h1 className={`${fredoka.className} p-7 text-3xl`}>{d.name}</h1>
            </div>
          </Link>
        </div>
      ))}

      <div className="flex items-center text-center ">
        <Link href="#">
          <div className="flex flex-col rounded-[18px] w-[250px] text-white bg-gradient-to-t from-orange-500 to-yellow-300 items-center justify-evenly p-10">
            <FontAwesomeIcon
              icon={faPaw}
              className="w-[75px] h-[75px] mt-5 mb-14"
            />
            <div className="w-full border-b my-2"></div>
            <h1 className={`${fredoka.className} text-3xl w-full`}>See more</h1>
          </div>
        </Link>
      </div>

      {/* <div className="flex justify-center items-center text-center bg-slate-600">
        <Link href="#">
          <div className="rounded-t-[35px] rounded-b-[18px] bg-white">
            <Image src={koby} width={250} height={350} alt="koby" />
            <h1 className={`${fredoka.className} p-7 text-3xl`}>Name</h1>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Dogs;
