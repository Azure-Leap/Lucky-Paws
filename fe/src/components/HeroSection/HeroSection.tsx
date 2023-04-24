import Image from "next/image";
import React from "react";
import { Fredoka_One } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HeroPaws from "./HeroPaws/HeroPaws";

// const linesImg = require("/images/HeroSection/lines.png");

const fredokaOne = Fredoka_One({ subsets: ["latin"], weight: ["400"] });

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative">
      <HeroPaws />
      <div className="grid max-w-screen-xl px-4 pt-24 pb-32 mx-auto lg:grid-cols-12">
        <div className=" my-auto lg:col-span-7 sm:mx-auto md:mr-48">
          <div className="relative">
            <img
              src="/images/HeroSection/lines.png"
              alt="lines"
              className="absolute top-[-20px] left-[-20px]"
            />
            <h1
              className={` max-w-md mb-4 text-4xl font-extrabold tracking-tight leading-none lg:text-5xl xl:text-6xl ${fredokaOne.className}`}
            >
              Give a <br />
              Homeless{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Pet
              </span>{" "}
              a<br />
              Forever Home
            </h1>
            <img
              src="/images/HeroSection/cat.png"
              alt="cat"
              className="absolute top-[-45px] left-[220px] hidden  xl:block"
            />
            <img
              src="/images/HeroPaws/paw4.png"
              alt="paw_no4"
              className="absolute top-[150px] left-[-100px]"
            />
          </div>
          <p className="max-w-lg mb-6 text-black lg:mb-8 md:text-lg lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula, mauris vel tincidunt molestie, nisl dui ullamcorper
            libero, a pharetra dolor urna non odio.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 mr-3 text-base font-bold text-center text-white rounded-3xl bg-orange-500"
          >
            See Pets
          </a>
          <a
            href="#"
            className="inline-flex gap-3 items-center justify-center  py-3 text-base font-bold text-center text-black"
          >
            <FontAwesomeIcon icon={faPhone} />
            Schedule a Call
          </a>
          <img
            src="/images/HeroPaws/paw5.png"
            alt="paw_no5"
            className="absolute left-[200px] bottom-[-10px] -z-10"
          />
        </div>
        <div className="hidden relative lg:mt-0 lg:col-span-5 lg:flex justify-end">
          <img
            src="/images/HeroPaws/paw1.png"
            alt="paw_no1"
            className="absolute right-[350px]"
          />
          <img
            src="/images/HeroPaws/paw2.png"
            alt="paw_no2"
            className="absolute right-[-170px] top-[100px]"
          />
          <img
            src="/images/HeroPaws/paw3.png"
            alt="paw_no3"
            className="absolute right-[500px] top-[350px]"
          />
          <img src="/images/HeroSection/dog.png" alt="dog" />
        </div>
      </div>
    </section>
  );
}
