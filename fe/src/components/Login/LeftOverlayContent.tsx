import React from "react";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

const LeftOverlayContent = ({ isAnimated, setIsAnimated }: any) => {
  return (
    <div className="p-8 text-center">
      <h1 className={`${fredoka.className} text-6xl font-bold text-white mb-4`}>
        Hello,Friend!
      </h1>

      <h5 className={`${fredoka.className} text-xl text-white`}>
        Enter your personal details and start journey with us
      </h5>
      <div className="mt-16">
        <button
          className={`${fredoka.className} py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white bg-orange-500 active:scale-110 transition-transform ease-in`}
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LeftOverlayContent;
