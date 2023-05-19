import React, { useState } from "react";
const cards = [
  { cardNum: "1234 5678 8765 4567", name: "Julu Evans", date: "09/23" },
  { cardNum: "2515 5678 2515 6451", name: "Henry Roberts", date: "09/24" },
  { cardNum: "5111 0000 8765 4567", name: "Lyly Roberts", date: "09/25" },
];
const Left01 = () => {
  const [card, setCard] = useState(0);

  const nextCard = () => {
    if (card < cards.length - 1) {
      setCard(card + 1);
    }
  };
  const prevCard = () => {
    if (card > 0) {
      setCard(card - 1);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-black text-xl font-medium">Your cards</h2>
      </div>
      <div className="flex items-center gap-2 mt-10">
        <div>
          <button className="font-bold text-xl" onClick={prevCard}>
            ˂
          </button>
        </div>
        {/* cards */}
        <div className="">
          <div className="bg-[#ACBCFF] w-full px-8 py-3 rounded-xl shadow-md shadow-[#7373ff]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-medium text-sm">Universal Card</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  width="40px"
                  height="40px"
                >
                  <path fill="#dff0fe" d="M13 10H27V30H13z" />
                  <path
                    fill="#b6dcfe"
                    d="M13.066,7.5c2.789,0,5.355,0.924,7.434,2.468c-0.148,0.097-0.291,0.202-0.434,0.305 c-3.022,2.181-5,5.724-5,9.727s1.978,7.546,5,9.727c0.144,0.104,0.286,0.208,0.434,0.305c-2.079,1.544-4.646,2.468-7.434,2.468 c-6.904,0-12.5-5.596-12.5-12.5S6.162,7.5,13.066,7.5z"
                  />
                  <path
                    fill="#fff"
                    d="M27,7.5c-2.789,0-5.355,0.924-7.434,2.468c0.148,0.097,0.291,0.202,0.434,0.305 c3.022,2.181,5,5.724,5,9.727s-1.978,7.546-5,9.727c-0.144,0.104-0.286,0.208-0.434,0.305C21.645,31.576,24.211,32.5,27,32.5 c6.904,0,12.5-5.596,12.5-12.5S33.904,7.5,27,7.5z"
                  />
                  <path
                    fill="#4788c7"
                    d="M27,7c-2.968,0-5.698,1.011-7.889,2.691c0.153,0.091,0.307,0.179,0.455,0.277 c0.148,0.097,0.291,0.202,0.434,0.305c0,0,0,0,0,0C21.973,8.849,24.386,8,27,8c6.617,0,12,5.383,12,12s-5.383,12-12,12 c-2.614,0-5.027-0.849-7-2.274c0,0,0,0,0,0c-0.144,0.104-0.286,0.208-0.434,0.305c-0.148,0.097-0.302,0.186-0.455,0.277 C21.302,31.989,24.032,33,27,33c7.168,0,13-5.832,13-13S34.168,7,27,7z"
                  />
                  <path
                    fill="#4788c7"
                    d="M20,29.727L20,29.727L20,29.727L20,29.727C18.027,31.151,15.613,32,13,32C6.383,32,1,26.617,1,20 S6.383,8,13,8c2.613,0,5.027,0.849,7,2.273h0l0,0v0c0.287-0.207,0.586-0.398,0.891-0.58C18.7,8.011,15.969,7,13,7 C5.832,7,0,12.832,0,20s5.832,13,13,13c2.969,0,5.7-1.011,7.891-2.693C20.586,30.125,20.287,29.934,20,29.727z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-5 text-justify text-lg text-white font-bold">
              {cards[card].cardNum}
            </div>
            <div className="mt-5 flex justify-between ">
              <div>
                <p className="text-white text-sm">{cards[card].name}</p>
              </div>
              <div className="text-white text-sm">{cards[card].date}</div>
            </div>
          </div>
        </div>
        {/* cards */}
        <div>
          <button className="font-bold text-xl" onClick={nextCard}>
            ˃
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left01;
