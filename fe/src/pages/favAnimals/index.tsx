import { CardContext } from '@/context/CardContext';
import React, { useContext,useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';


const favAnimals = ({}) => {
  const {card, setCard} = useContext(CardContext)
  const favAnimals = card?.items

  const [slideIndex, setSlideIndex] = useState(1);
  return (
    <div>

      { favAnimals?.map((el):any=>{

        return(   
        <div className=" container mx-auto my-10 p-5 mt-7 rounded-xl">
        <div className="grid grid-cols-2  bg-white m-5 rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
          <div className="animal-page-img w-full h-auto xl:col-span-2 sm:col-span-2 max-sm:col-span-2 ">
            <div className="big-images w-full h-3/4 relative">
              {el.item.imgs.map((image: any, index: number) => (
                <div
                  key={index}
                  className="mySlides w-full h-full"
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <div className="numbertext absolute text-gray-500 font-bold m-3">
                    {index + 1}/{el.item.imgs.length}
                  </div>
                  <Image
                    src={image.src}
                    fill
                    alt="animal_image"
                    className="mx-auto object-fill "
                  />
                </div>
              ))}
            </div>

            <div
              className="slider-img w-full h-1/4 overflow-x-scroll scrollbar-hide flex snap-x"
              draggable={true}
            >
              {el.item.imgs.map((image: any, index: number) => (
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
            <div className="mb-5 text-4xl p-1 font-bold my-2 ">{el.item.name}</div>
            <div className="mt-2 text-3xl p-1 font-bold">Gender</div>
            <div className="mt-2 p-1 text-xl">{el.item.gender}</div>
            <div className="mt-2 text-3xl p-1 font-bold">Age</div>
            <div className="mt-2 flex p-1">
            {el.item.age}
            </div>
            <div className="mt-2 text-3xl p-1 font-bold">Size</div>
            <div className="mt-2 p-1 text-xl">{el.item.size}</div>
            <div className="text-3xl p-1 font-bold">Health</div>
            <div className="mt-2 text-xl p-1">
              {el.item.health}
            </div>
            <div className="grid grid-cols-6 my-16">
              <button className="bg-orange-400 rounded-lg text-white font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-white hover:text-orange-400 hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
               
              </button>
              <Link href={`#`} passHref>
                <button className="bg-white rounded-lg mx-8 w-28 text-orange-400 font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-orange-400 hover:text-white hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
                 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
      })}
        
    </div>
  )
}

export default favAnimals;