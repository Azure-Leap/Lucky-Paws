import React from "react";

const Right01 = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div className="bg-white w-full rounded-xl shadow-sm py-3 px-6 shadow-[#7373ff]">
          <div className="grid place-content-center">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/ultraviolet/40/welfare.png"
              alt="welfare"
            />
          </div>
          <div>
            <p className="font-medium text-lg text-black text-center">
              Total Donated
            </p>
            <p className="font-bold text-sm text-[#7373ff] text-center">
              4000<span>₮</span>
            </p>
          </div>
        </div>
        {/* donation */}
        <div className="bg-white w-full rounded-xl shadow-sm py-3 px-6 shadow-[#7373ff]">
          <div className="grid place-content-center">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-donation-love-moment-photo3ideastudio-gradient-photo3ideastudio.png"
              alt="donation"
            />
          </div>
          <div>
            <p className="font-medium text-lg text-black text-center">
              Total Donation
            </p>
            <p className="font-bold text-sm text-[#7373ff] text-center">
              8000<span>₮</span>
            </p>
          </div>
        </div>
        {/* vlnter */}
        <div className="bg-white w-full rounded-xl shadow-sm py-3 px-6 shadow-[#7373ff]">
          <div className="grid place-content-center">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/nolan/64/volunteering.png"
              alt="volunteering"
            />
          </div>
          <div>
            <p className="font-medium text-lg text-black text-center">
              Volunteer
            </p>
            <p className="font-bold text-sm text-[#7373ff] text-center">
              9000<span>₮</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right01;
