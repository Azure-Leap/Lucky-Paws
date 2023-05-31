import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import { useAnimals } from "../../hooks/usePets";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Animal = ({ animal }: any) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const { animals } = useAnimals();
  const router = useRouter();

  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }

  const plusSlides = (n: number) => {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  };

  const slideShow = (n: number) => {
    if (n > animal.imgs.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(animal.imgs.length);
    }
  };

  const breadCrumbs = [
    { name: "animal", link: "/animal" },
    { name: animal.title, link: "" },
  ];

  return (
    <div className="bg-[#fff3d3]">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className=" container mx-auto my-10 p-5 mt-7 rounded-xl">
        <div className="grid grid-cols-2  bg-white m-5 rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
          <div className="animal-page-img w-full h-auto xl:col-span-1 sm:col-span-2 max-sm:col-span-2 ">
            <div className="big-images w-full h-3/4 relative">
              {animal.imgs.map((image: any, index: number) => (
                <div
                  key={index}
                  className="mySlides w-full h-full"
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <div className="numbertext absolute text-gray-500 font-bold m-3">
                    {index + 1}/{animal.imgs.length}
                  </div>
                  <Image
                    src={image.src}
                    fill
                    alt="animal_image"
                    className="mx-auto object-fill "
                  />
                </div>
              ))}

              <a
                className="prev text-orange-500 absolute top-1/2 -translate-y-1/2 left-4  text-4xl cursor-pointer"
                onClick={() => {
                  plusSlides(-1);
                  console.log("Prev", slideIndex);
                }}
              >
                &#10094;
              </a>
              <a
                className="next absolute top-1/2 -translate-y-1/2 right-4 text-orange-500 text-4xl cursor-pointer"
                onClick={() => {
                  plusSlides(1);
                  console.log("Next", slideIndex);
                }}
              >
                &#10095;
              </a>
            </div>

            <div
              className="slider-img w-full h-1/4 overflow-x-scroll scrollbar-hide flex snap-x"
              draggable={true}
            >
              {animal.imgs.map((image: any, index: number) => (
                <div
                  key={index}
                  className={`bg-blue-400 slider-box w-1/3 bottom-0 flex-none h-full cursor-pointer inline opacity-100 snap-end ${
                    index === slideIndex - 1 ? "border-4 border-green-500" : ""
                  }`}
                  onClick={() => setSlideIndex(index + 1)}
                >
                  <img
                    src={image.src}
                    alt=""
                    style={{
                      objectFit: "fill",
                      display: "inline-block",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="m-6  xl:col-span-1 sm:col-span-2 max-sm:col-span-2 ">
            <div className="mb-5 text-4xl p-1 font-bold my-2 ">
              {animal.name}
            </div>
            <div className="mt-2 text-3xl p-1 font-bold">Gender</div>
            <div className="mt-2 p-1 text-xl">{animal.gender}</div>
            <div className="mt-2 text-3xl p-1 font-bold">Age</div>
            <div className="mt-2 flex p-1">{animal.age}</div>
            <div className="mt-2 text-3xl p-1 font-bold">Size</div>
            <div className="mt-2 p-1 text-xl">{animal.size}</div>
            <div className="text-3xl p-1 font-bold">Health</div>
            <div className="mt-2 text-xl p-1">{animal.health}</div>
            <div className="grid grid-cols-6 my-16">
              <button className="bg-orange-400 rounded-lg text-white font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-white hover:text-orange-400 hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
                Start your inquiry
              </button>
              <Link href={`#`} passHref>
                <button className="bg-white rounded-lg mx-8 w-28 text-orange-400 font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-orange-400 hover:text-white hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
                  Sponsor
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" mx-auto md:col-span-4 sm:col-span-5 max-sm:col-span-5 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2 ">
          {animals?.slice(0, 3).map((animal: any, index: number) => (
            <Link key={index} href={`animal/${animal._id}`} passHref>
              <div
                key={index}
                className="group bg-white hover:scale-105 shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl mx-6 mt-16 max-sm:col-span-3 sm:col-span-3  md:col-span-3 lg:col-span-1 "
              >
                <div className="group grid grid-cols-2">
                  <div className="max-sm:col-span-1 col-span-1 md:col-span-1 xl:col-span-1 ">
                    <Image
                      src={animal.imgs[0].src}
                      alt="animalPhoto"
                      width={300}
                      height={100}
                      className="h-[200px] w-full rounded-lg object-contain "
                    />
                  </div>
                  <div className="max-sm:col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-1 m-auto">
                    <div className=" max-sm:text-2xl sm:text-2xl md:text-xl text-center p-1 ">
                      {animal.name}
                    </div>
                    <div className=" max-sm:p-4 sm:text-2xl md:text-xl p-1 ">
                      {animal.health}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://lucky-paws-chi.vercel.app/animal");
  const animals = await res.json();
  const ids = animals?.animal?.map((animal: any) => animal._id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://lucky-paws-chi.vercel.app/animal/${params.id}`
  );
  const data = await res.json();
  console.log("data:", data);

  return { props: { animal: data.animal } };
}

export default Animal;
