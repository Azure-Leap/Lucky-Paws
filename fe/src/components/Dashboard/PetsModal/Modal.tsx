import React, { useEffect, useState } from "react";
import { Radio } from "@material-tailwind/react";
import { add, initial, set } from "lodash";
import { useAnimals } from "@/hooks/usePets";

export default function PetModal({
  modalOpen,
  setModalOpen,
  addNew,
  dataPass,
}: any) {
  const { addAnimal, updateAnimal } = useAnimals();

  const initialName = addNew ? "" : dataPass.name;
  const initialTypeId = addNew ? "" : dataPass.typeId;
  const initialType = addNew ? "" : dataPass.animaltype;
  const initialGender = addNew ? "" : dataPass.gender;
  const initialAge = addNew ? undefined : dataPass.age;
  const initialSize = addNew ? "" : dataPass.size;
  const initialHealth = addNew ? "" : dataPass.health;
  const initialLocation = addNew ? "" : dataPass.location;

  const [name, setName] = useState(initialName);
  const [typeId, setTypeId] = useState(initialTypeId);
  const [type, setType] = useState(initialType);
  const [gender, setGender] = useState(initialGender);
  const [age, setAge] = useState(initialAge);
  const [size, setSize] = useState(initialSize);
  const [health, setHealth] = useState(initialHealth);
  const [location, setLocation] = useState(initialLocation);

  const typeMenu = [
    { text: "Dog", value: "6454a1a4a4948f1874896b8f" },
    { text: "Cat", value: "6454a196a4948f1874896b8b" },
  ];
  const genderMenu = [{ text: "Male" }, { text: "Female" }];
  const ageMenu = [
    { text: "0-1", value: 0 },
    { text: "1-2", value: 1 },
    { text: "2-3", value: 2 },
    { text: "3-4", value: 3 },
    { text: "4-5", value: 4 },
  ];
  const sizeMenu = [
    { text: "Small" },
    { text: "Normal" },
    { text: "Large" },
    { text: "Extra Large" },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    const newAnimal = {
      name,
      age,
      animaltype: typeId,
      publishedBy: userId,
      gender,
      size,
      health,
      location,
      date: new Date(),
      imgs: [
        {
          src: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
        },
      ],
    };

    if (addNew) {
      addAnimal(newAnimal);
      setModalOpen(false);
      console.log("NEW: ", newAnimal);
    } else {
      updateAnimal(newAnimal);
      console.log("UPDATE: ", newAnimal);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen ? (
        <div className="bg-opacity-50 bg-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
            {/*content*/}
            <form
              onSubmit={handleSubmit}
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {addNew ? "Add new animal" : "Edit pet info"}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleClose}
                >
                  <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 "
                  />
                </div>
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Animal Type
                  </label>
                  <div className="flex gap-3 items-center my-4">
                    {typeMenu.map((item: any, idx: number) => (
                      <div className="flex items-center" key={idx}>
                        <input
                          name="animalType"
                          type="radio"
                          checked={typeId === item.value}
                          onChange={() => {
                            console.log("TEXT", item.text);
                            console.log("TYPE", typeId);
                            setTypeId(item.value);
                          }}
                          value={type}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 ">
                          {item.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Gender
                  </label>
                  <div className="flex gap-3 items-center my-4">
                    {genderMenu.map((item: any, idx: number) => (
                      <div className="flex items-center" key={idx}>
                        <input
                          name="gender"
                          type="radio"
                          checked={gender === item.text}
                          onChange={() => {
                            setGender(item.text);
                            console.log(gender);
                          }}
                          value={initialGender}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 ">
                          {item.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Age
                  </label>
                  <div className="flex gap-3 items-center my-4">
                    {ageMenu.map((item: any, idx: number) => (
                      <div className="flex items-center" key={idx}>
                        <input
                          name="age"
                          type="radio"
                          checked={age === item.value}
                          onChange={() => setAge(item.value)}
                          value={initialAge}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 ">
                          {item.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Size
                  </label>
                  <div className="flex gap-3 items-center my-4">
                    {sizeMenu.map((item: any, idx: number) => (
                      <div className="flex items-center" key={idx}>
                        <input
                          name="size"
                          type="radio"
                          checked={size === item.text}
                          onChange={() => setSize(item.text)}
                          value={initialSize}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 ">
                          {item.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Location
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5"
                    onChange={(e: any) => {
                      setLocation(e.target.value);
                    }}
                    value={location}
                    placeholder="Vaccinated..."
                  />
                </div>
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Health
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5"
                    onChange={(e: any) => {
                      setHealth(e.target.value);
                    }}
                    value={health}
                    placeholder="Vaccinated..."
                  />
                </div>
                <div className="mb-6 border-b border-orange-500">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Images
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5"
                  />
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                  // onClick={
                  //   addNew
                  //     ? () => {
                  //         console.log(dataPass);
                  //       }
                  //     : () => {
                  //         // setOpen(false);
                  //         console.log("CHECKING", health);
                  //       }
                  // }
                >
                  {addNew ? "Add" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
