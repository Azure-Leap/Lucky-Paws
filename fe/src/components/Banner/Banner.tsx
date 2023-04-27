import Image from "next/image";
import { Inter } from "next/font/google";

const banner = require("../../assets/images/BannerPic/banner.png");

const inter = Inter({ subsets: ["latin"] });

export default function Banner() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="bg-[#FFE3A8] flex justify-evenly items-center w-full h-[40%] ">
        <div className=" w-1/4 relative h-full">
          <div className="absolute -bottom-5 lg:-bottom-5 md:-bottom-3 sm:-bottom-3 min-[320px]:-bottom-2 max-[600px]:-bottom-2 min-[320px]:relative max-[600px]:relative min-[320px]:z-10 max-[600px]:z-10 min-[320px]:top-0 max-[600px]:top-0 min-[320px]:left-0 max-[600px]:left-0">
            <Image width={350} height={350} src={banner} alt="banner" />
          </div>
        </div>

        <div className=" bg-white leading-7 xl:w-[50%] lg:w-2/4 md:w-[40%] sm:w-[50%] min-[320px]:w-[30%] max-[600px]:w-[30%] min-[320px]:absolute max-[600px]:absolute min-[320px]:z-20 max-[600px]:z-20">
          <h1 className="text-5xl mb-6 font-bold lg:w-[55%] md:w-[100%] min-[400px]:w-[100%] sm:w-full lg:text-5xl md:text-xl sm:text-lg min-[400px]:text-xs">
            Let’s surf through our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
              Lucky
            </span>{" "}
            Paws story
          </h1>
          <p className="mb-6 lg:w-[55%] md:w-[100%] sm:w-full min-[400px]:w-full lg:text-lg md:text-sm sm:text-xs min-[400px]:text-xs md:mb-5">
            Once upon a time, there was a little girl named Sarah who always
            wanted a pet. Her parents had always been hesitant about getting a
            pet asted and pleaded with her parents for a pet...
          </p>
          <button className="bg-orange-500 border-orange-500 text-white rounded-2xl px-5 py-1 md:text-xl lg:text-2xl min-[400px]:text-xs sm:text-base">
            Read Stories
          </button>
        </div>
      </div>
    </div>
  );
}
