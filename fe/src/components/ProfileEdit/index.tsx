import React, { useState } from "react";
import ProfileImgEdit from "./ProfileImgEdit";

const EditProfile = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <div className="lg:w-1/5 shadow-md rounded-xl p-4">
      <div className="flex items-center justify-between border-b">
        <button className="text-base text-slate-800 hover:text-indigo-800">
          Cancel
        </button>
        <p className="text-base text-slate-800 font-medium">Edit Profile</p>
        <button className="text-base text-indigo-400 hover:text-indigo-800">
          Done
        </button>
      </div>
      <div className="grid border-b">
        <ProfileImgEdit />
      </div>
      <div>
        <div className="mt-4 grid grid-cols-2 gap-4 content-center">
          <h3 className="text-base text-slate-800 font-medium">Name</h3>
          <div>
            <input
              className="outline-none w-full rounded-xl px-1 text-base text-slate-500"
              placeholder="laala"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 content-center">
          <h3 className="text-base text-slate-800 font-medium">Age</h3>
          <div>
            <input
              className="outline-none w-full rounded-xl px-1 text-base text-slate-500"
              placeholder="20"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 content-center">
          <h3 className="text-base text-slate-800 font-medium">Email</h3>
          <div>
            <input
              className="outline-none w-full rounded-xl px-1 text-base text-slate-500"
              placeholder="lala@gmail.com"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 content-center">
          <h3 className="text-base text-slate-800 font-medium">Number</h3>
          <div>
            <input
              className="outline-none w-full rounded-xl px-1 text-base text-slate-500"
              placeholder="6758768787"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 content-center">
          <h3 className="text-base text-slate-800 font-medium">Gender</h3>
          <div>
            <select className="outline-none w-full rounded-xl  text-base text-slate-500">
              <option className="py-1">Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 content-center">
          <h3 className="text-base text-slate-800 font-medium">Province</h3>
          <div>
            <select className="outline-none w-full rounded-xl  text-base text-slate-500">
              <option className="py-1">Ulaanbaatar</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
