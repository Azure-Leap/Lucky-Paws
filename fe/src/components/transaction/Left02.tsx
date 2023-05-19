import React, { useState } from "react";

const Left02 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h2 className="text-black text-xl font-medium">Transactions</h2>
        <button
          className="flex items-center gap-2 text-xs text-slate-800 font-medium hover:text-[#7373ff]"
          onClick={handleModal}
        >
          View All
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />{" "}
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />{" "}
            </svg>
          </span>
        </button>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-1/4 p-4 rounded-lg shadow-md shadow-[#7373ff] h-3/5">
            <div className="w-full border-b-2 border-[#7373ff] pb-1 flex justify-between items-center">
              <p className="text-lg text-black font-medium">Transactions</p>
              <button className="text-lg text-[#7373ff] " onClick={closeModal}>
                ✘
              </button>
            </div>
            <div className="bg-white w-full rounded-lg shadow-sm py-2 px-4 shadow-[#7373ff] flex justify-between items-center mt-5">
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-donation-love-moment-photo3ideastudio-gradient-photo3ideastudio.png"
                    alt="external-donation-love-moment-photo3ideastudio-gradient-photo3ideastudio"
                  />
                </div>
                <div>
                  <p className="font-medium text-base text-black">Donation</p>
                  <p className="text-xs text-gray-500">Donation Name</p>
                  <p className="text-xs text-gray-400">01/02/2022</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-base">
                  <span>-</span>1000<span>₮</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10 grid space-y-4">
        <div className="bg-white w-full rounded-lg shadow-sm py-2 px-4 shadow-[#7373ff] flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-donation-love-moment-photo3ideastudio-gradient-photo3ideastudio.png"
                alt="donation"
              />
            </div>
            <div>
              <p className="font-medium text-base text-black">Donation</p>
              <p className="text-xs text-gray-500">Donation Name</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-base text-black">
              <span>-</span>1000<span>₮</span>
            </p>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg shadow-sm py-2 px-4 shadow-[#7373ff] flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ultraviolet/40/welfare.png"
                alt="welfare"
              />
            </div>
            <div>
              <p className="font-medium text-base text-black">Donated</p>
              <p className="text-xs text-gray-500">for donation name</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-base text-black">
              <span>+</span>1000<span>₮</span>
            </p>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg shadow-sm py-2 px-4 shadow-[#7373ff] flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/nolan/64/volunteering.png"
                alt="volunteering"
              />
            </div>
            <div>
              <p className="font-medium text-base text-black">Volunteer</p>
              <p className="text-xs text-gray-500">event name</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-base text-black">
              <span>-</span>1000<span>₮</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left02;
