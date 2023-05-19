import Image from "next/image";
import React, { useEffect, useState } from "react";


const Left02 = () => {
  
  const cardIcon = require("../../assets/images/CardPayment/card-icon.png");

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(20);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
        alert("time is upppp!");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);
  return (
    <div className="grid grid-cols-2 place-content-between ">
      <div className="inline-flex space-x-2 items-center">
        <div className="h-10 w-10 bg-inherit ">
          <Image
           width={100} 
          height={100}src={cardIcon} alt="cardLogo" />
        </div>
        <div>
          <h4 className="text-black font-bold text-xl ">
            <span className="font-normal">Pay</span>
          </h4>
        </div>
      </div>
      <div className="inline-flex space-x-1 items-center justify-self-end">
        <div className="text-black text-base font-bold">
          {minutes < 10 ? `0${minutes}` : minutes}
        </div>
        <div className="text-black text-base font-bold">:</div>
        <div className=" text-black text-base font-bold">
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </div>
  );
};

export default Left02;
