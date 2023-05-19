import React, { useState } from "react";

const card = [
  { cardNum: "1234 5678 1235 4567", donate: 10000 },
  { cardNum: "1234 5678 1235 4567", donate: 20000 },
  { cardNum: "1234 5678 1235 4567", donate: 30000 },
  { cardNum: "1234 5678 1235 4567", donate: 40000 },
];
const Right02 = () => {
  const [showCards, setShowCards] = useState(false);

  const handleDonationClick = () => {
    setShowCards(true);
  };
  return (
    <div className="mt-12 grid grid-cols-2 gap-10">
      <div className="bg-white w-full rounded-lg shadow-sm p-8 shadow-[#7373ff]">
        <h1 className="text-center text-black text-lg font-bold">
          Transaction history
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <button
            className="text-sm border-dotted border-2 rounded-md text-center border-[#7373ff] font-medium hover:text-[#7373ff]"
            onClick={handleDonationClick}
          >
            Donation
          </button>
          <button className="text-sm border-dotted border-2 rounded-md text-center border-[#7373ff] font-medium hover:text-[#7373ff]">
            Donated
          </button>
          <button className="text-sm border-dotted border-2 rounded-md text-center border-[#7373ff] font-medium hover:text-[#7373ff]">
            Volunteer
          </button>
        </div>
        {/* plugins: [require("tailwind-scrollbar-hide")], */}
        <div className="m-2 h-[200px] w-full px-1 mx-auto overflow-y-scroll scrollbar-hide">
          {showCards ? (
            <>
              {card.map((item: any, index: number) => (
                <div
                  className="bg-white w-full mx-[1px] rounded-lg shadow-sm py-2 px-1 mb-1 shadow-[#7373ff] flex justify-between items-center mt-5"
                  key={index}
                >
                  <div>
                    <p className="text-xs text-[#7373ff] font-medium">
                      {item.cardNum}
                    </p>
                    <p className="text-xs text-gray-400">
                      01/02/2022<span className="text-black"> 12:34</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      <span>-</span>
                      {item.donate}
                      <span>₮</span>
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="bg-white w-full rounded-lg shadow-sm py-2 px-1 shadow-[#7373ff] flex justify-between items-center mt-5">
                <div>
                  <p className="text-xs text-[#7373ff] font-medium">
                    1234 5678 4765 8399
                  </p>
                  <p className="text-xs text-gray-400">
                    01/02/2022<span className="text-black"> 12:34</span>
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">
                    <span>-</span>1000<span>₮</span>
                  </p>
                </div>
              </div>
              <div className="bg-white w-full rounded-lg shadow-sm py-2 px-1 shadow-[#7373ff] flex justify-between items-center mt-5">
                <div>
                  <p className="text-xs text-[#7373ff] font-medium">
                    1234 5678 4765 8399
                  </p>
                  <p className="text-xs text-gray-400">
                    01/02/2022<span className="text-black"> 12:34</span>
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">
                    <span>-</span>1000<span>₮</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bg-[#ACBCFF] w-full rounded-lg shadow-sm p-8 shadow-[#66347F]">
        <div>
          <h1 className="text-center text-white text-lg font-bold">
            Bla bla Donation
          </h1>
          <p className="text-base text-white text-justify mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim
            magnam tenetur modi! Tempora quo explicabo culpa ut, amet porro
            ipsum quod numquam molestias eveniet iste fugit, praesentium magnam
            accusantium!
          </p>
          <div className="text-center mt-4">
            <button className="bg-white text-[#7373ff] py-2 px-8 font-bold rounded-xl hover:bg-[#7373ff] hover:text-white">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right02;
