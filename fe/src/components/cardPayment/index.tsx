import React, { useState } from "react";
import Right01 from "./RightLeft01";
import Left02 from "./Left02";
import Left03 from "./Left03";
import Right02 from "./Right02";
import RightLeft01 from "./RightLeft01";
import Image from "next/image";
import Link from "next/link";



const CardPayment = () => {
  const cardChip = require("../../assets/images/CardPayment/card_chip.png");
  // const check = require("../../assets/images/CardPayment/check.png");
  const nfcIcon = require("../../assets/images/CardPayment/nfc-icon.png");
  const cardLogo = require("../../assets/images/CardPayment/cardLogo.png");

  const [cardNumber, setCardNumber] = useState("2417 3125 3544 3546");
  const [cvvNumber, setCvvNumber] = useState("327");
  const [expiryMonth, setExpiryMonth] = useState("09");
  const [expiryYear, setExpiryYear] = useState("22");
  const [password, setPassword] = useState("adjsbj");
  const [fullName, setFullName] = useState("Jonathan Micheal");
  const [isFlip, setIsFlip] = useState(false);

  const handleCardNumberChange = (event: any) => {
    setCardNumber(event.target.value);
  };
  const formatCardNumber = (cardNumber: string) => {
    const digitsOnly = cardNumber.replace(/\D/g, "");
    const groups = digitsOnly.match(/.{1,4}/g);
    return groups ? groups.join(" ") : "";
  };

  const handleFullNameChange = (event: any) => {
    setFullName(event.target.value);
  };

  const handleCvvNumberChange = (event: any) => {
    setCvvNumber(event.target.value);
  };

  const handleExpiryMonthChange = (event: any) => {
    setExpiryMonth(event.target.value);
  };

  const handleExpiryYearChange = (event: any) => {
    setExpiryYear(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const onCvvFocus = () => {
    setIsFlip(!isFlip);
  };
  const handlePayNowClick = () => {};
  return (
    <div className="w-10/12 shadow-xl h-5/6 container mx-auto rounded-xl mt-10 bg-gradient-to-b from-white to-yellow-50">
      <RightLeft01 />
      <div className="grid grid-cols-4 space-x-14 p-8">
        <div className="col-span-2 my-auto">
          <Left02 />
          <Left03 />
          <div className="border-2 mt-4 rounded-lg bg-transparent ">
            <div className="grid grid-cols-3 place-content-around">
              <div className="col-span-2 inline-flex items-center space-x-4">
                <div className="w-16">
                  <Image width={200} height={200} src={cardLogo} alt="cardLogo" />
                </div>
                <div className="">
                  <input
                    type="text"
                    value={formatCardNumber(cardNumber)}
                    maxLength={19}
                    onChange={handleCardNumberChange}
                    className="font-medium text-black text-base outline-none bg-transparent border-none"
                  />
                </div>
              </div>
              <button className="justify-self-end pr-3 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 place-content-between space-x-6 items-center mt-4">
              <div className="">
                <h3 className="text-black font-bold text-base">FullName</h3>
                <p className="text-black mt-1 text-sm">
                  Enter your fullName
                </p>
              </div>
              <div className="border-2 rounded-xl text-center">
                <input
                  type="text"
                  className="text-gray-500 bg-transparent font-medium text-center text-sm py-3 outline-none"
                  value={fullName}
                  onChange={handleFullNameChange}
                  maxLength={25}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 place-content-between space-x-6 items-center mt-4">
              <div className="">
                <h3 className="text-black font-bold text-base">Expiry Date</h3>
                <p className="text-black mt-1 text-sm">
                  Enter the expiration date of the card
                </p>
              </div>
              <div className="grid grid-cols-3 mt-3">
                <div className="border-2 rounded-xl col-span-1">
                  <input
                    type="text"
                    className="text-black bg-transparent font-medium text-sm text-center py-3 outline-none w-full"
                    value={expiryMonth}
                    onChange={handleExpiryMonthChange}
                    maxLength={2}
                  />
                </div>
                <div className="col-span-1">
                  <p className="text-black font-bold text-base text-center py-3 outline-none">
                    /
                  </p>
                </div>
                <div className="border-2 rounded-xl col-span-1">
                  <input
                    type="text"
                    className="text-black bg-transparent font-medium text-sm text-center py-3 outline-none w-full"
                    value={expiryYear}
                    onChange={handleExpiryYearChange}
                    maxLength={2}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 place-content-between space-x-6 items-center mt-4">
              <div className="">
                <h3 className="text-black font-bold text-base">CVV Number</h3>
                <p className="text-black mt-1 text-sm">
                  Enter the 3 or 4 digit number on the card
                </p>
              </div>
              <div className="border-2 rounded-xl text-center">
                <input
                  type="text"
                  className="text-black bg-transparent font-medium text-center text-sm py-3 outline-none"
                  maxLength={3}
                  value={cvvNumber}
                  onChange={handleCvvNumberChange}
                  onFocus={onCvvFocus}
                  onBlur={onCvvFocus}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 place-content-between  space-x-6 items-center mt-4">
              <div className="">
                <h3 className="text-black font-bold text-base">Password</h3>
                <p className="text-black mt-1 text-sm">
                  Enter your dynamic password
                </p>
              </div>
              <div className="border-2 rounded-xl text-center">
                <input
                  type="password"
                  className="text-black bg-transparent font-medium text-sm text-center py-3 outline-none"
                  value={password}
                  onChange={handlePasswordChange}
                  maxLength={8}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-transparent border-2 border-gray-300 text-center rounded-xl ">
              <Link
              href={"/tran"}
                className="text-black text-base font-bold py-4 "
                onClick={handlePayNowClick}
              >
                Pay Now
              </Link>
            </div>
          </div>
        </div>
        {/* CARD */}
        <div className="col-span-2">
          <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 drop-shadow-xl rounded-xl hover:scale-125 hover:bg-opacity-50 border-2 border-gray-300 [perspective:1000px] ">
            {isFlip ? (
              <div className="mt-12">
                <div className="w-full bg-white h-14"></div>
                <div className="w-4/5 bg-slate-300 h-10 my-12 ms-4 text-end text-base font-bold grid content-center pe-2 text-black">
                  {cvvNumber}
                </div>
              </div>
            ) : (
              <div className="p-8">
                <div className="grid grid-cols-2 place-content-evenly mb-14">
                  <div className="">
                    <Image 
                      width={100} 
                      height={100}
                      src={cardChip} alt="cardChip" className="w-12" />
                  </div>
                  <div className="justify-self-end">
                    <Image 
                      width={100} 
                      height={100}src={nfcIcon}
                     alt="wifiLogo" className="w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-black font-medium text-sm">{fullName}</h3>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={cardNumber}
                    className="text-black text-base font-bold outline-none bg-transparent border-none"
                  />
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-black text-sm font-bold">
                      {expiryMonth}/{expiryYear}
                    </p>
                  </div>
                  <div className="justify-self-end">
                    <Image 
                      width={100} 
                      height={100}
                      src={cardLogo}
                      alt="cardLogo"
                      className=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <Right02 />
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
