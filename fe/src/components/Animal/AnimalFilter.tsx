import React, { useState } from "react";
import { faPaw, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";

export const AnimalFilter = () => {
  const [dogAge, setDogAge] = useState(false);
  const [catAge, setCatAge] = useState(false);
  const [dogSize, setDogSize] = useState(false);
  const [catSize, setCatSize] = useState(false);
  const [type, setType] = useState();
  const filterDogs = [
    {
      main: "Dog",
      mainValue: "",
      age: ["0-1", "1-2", "2-3", "3-4", "4-5"],
      ageValue: "",
      size: ["Small", "Normal", "Large", "Extra Large"],
      sizeValue: "",
    },
  ];
  const filterCats = [
    {
      main: "Cat",
      mainValue: "",
      age: ["0-1", "1-2", "2-3", "3-4", "4-5"],
      size: ["Small", "Normal", "Large", "Extra Large"],
      sizeValue: "",
    },
  ];
  return (
    <div className=" m-3 ">
      <Button
        // onClick={handleCategory}
        className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
        value="645c9695d4a8fa0b9a04d3bd"
      >
        All
      </Button>
      {filterDogs?.map((e: any, idx: number) => (
        <div>
          <Button
            //   onClick={handleCategory}
            className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
            value="645c8e0ae049adbd7a7956e4"
          >
            {e.main}
          </Button>
          <div>
            <Button
              className="inline-flex justify-between w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none uppercase my-1"
              onClick={(e: any) => {
                setDogAge(!dogAge);
              }}
              value={e.main}
            >
              Age
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${dogAge ? "rotate-180" : ""} duration-300`}
              />
            </Button>
            {e.age.map((age: number, idx: number) => (
              <Button
                //   onClick={handleType}
                className={`${
                  dogAge ? "flex" : "hidden"
                } duration-300 hover:text-orange-400 focus:text-orange-400 w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1 normal-case`}
                value={age}
              >
                <FontAwesomeIcon icon={faPaw} />
                {age}
              </Button>
            ))}
          </div>
          <div>
            <Button
              onClick={(e: any) => {
                setDogSize(!dogSize);
              }}
              className="inline-flex justify-between w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none uppercase my-1"
            >
              Size
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${dogSize ? "rotate-180" : ""} duration-300`}
              />
            </Button>
            {e.size.map((size: string, idx: number) => (
              <Button
                key={idx}
                className={`${
                  dogSize ? "flex" : "hidden"
                } hover:text-orange-400 focus:text-orange-400 w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1 normal-case`}
                value="645c8f39cca335fb21956148"
              >
                <FontAwesomeIcon icon={faPaw} />
                {size}
              </Button>
            ))}
          </div>
        </div>
      ))}
      {filterCats?.map((e: any, idx: number) => (
        <div>
          <Button
            //   onClick={handleCategory}
            className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
            value="645c8e0ae049adbd7a7956e4"
          >
            {e.main}
          </Button>
          <div>
            <Button
              className="inline-flex justify-between w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none uppercase my-1"
              onClick={(e: any) => {
                setCatAge(!catAge);
              }}
              value={e.main}
            >
              Age
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${catAge ? "rotate-180" : ""} duration-300`}
              />
            </Button>
            {e.age.map((age: number, idx: number) => (
              <Button
                //   onClick={handleType}
                className={`${
                  catAge ? "flex" : "hidden"
                } duration-300 hover:text-orange-400 focus:text-orange-400 w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1 normal-case`}
                value={age}
              >
                <FontAwesomeIcon icon={faPaw} />
                {age}
              </Button>
            ))}
          </div>
          <div>
            <Button
              onClick={(e: any) => {
                setCatSize(!catSize);
              }}
              className="inline-flex justify-between w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none uppercase my-1"
            >
              Size
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${catSize ? "rotate-180" : ""} duration-300`}
              />
            </Button>
            {e.size.map((size: string, idx: number) => (
              <Button
                key={idx}
                className={`${
                  catSize ? "flex" : "hidden"
                } hover:text-orange-400 focus:text-orange-400 w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1 normal-case`}
                value="645c8f39cca335fb21956148"
              >
                <FontAwesomeIcon icon={faPaw} />
                {size}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
