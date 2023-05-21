import React from "react";
import { Button } from "@material-tailwind/react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menus = [
  {
    type: "dog",
    text: "Dog",
    value: "645c8e0ae049adbd7a7956e4",
    subMenu: [{ type: "food", text: "Food",category:"645c8e0ae049adbd7a7956e4", value: "645c8e5de049adbd7a7956e6" },{ type: "toy_and_supplies", text: "Toys & Supplies",category:"645c8e0ae049adbd7a7956e4", value: "645c8f39cca335fb21956148" }],
  },
  {
    type: "cat",
    text: "Cat",
    value: "645c8df8e049adbd7a7956e0",
    subMenu: [{ type: "food", text: "Food", category:"645c8df8e049adbd7a7956e0", value: "645c8ef2cca335fb21956144" },{ type: "toy_and_supplies", text: "Toys & Supplies",category:"645c8df8e049adbd7a7956e0", value: "645c90839ee41073358fa725" }],
  },
];

export const ShopFilter = ({ handleCategory, handleType, handleAll }: any) => {
  return (
    <div className=" m-3 ">
      <Button
        onClick={handleAll}
        className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
        value="645c9695d4a8fa0b9a04d3bd"
      >
        All
      </Button>
      {menus.map((e:any,idx:number)=>(
        <div key={idx}>
        <Button
          onClick={handleCategory}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value={e.value}
          name={e.type}
        >
          {e.text}
        </Button>
        {e.subMenu.map((item:any,idx:number)=>(
        
            <Button
            key={idx}
          onClick={handleType}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value={item.value}  
          name={item.category}
        >
          <FontAwesomeIcon icon={faPaw} />
          {item.text}
        </Button>
        
        ))}
      </div>
      ))}
      {/* <div>
        <Button
          onClick={handleCategory}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value="645c8e0ae049adbd7a7956e4"
        >
          Dog
        </Button>
        <Button
          onClick={handleType}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value="645c8e5de049adbd7a7956e6"
        >
          <FontAwesomeIcon icon={faPaw} />
          Food
        </Button>
        <Button
          onClick={handleType}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value="645c8f39cca335fb21956148"
        >
          <FontAwesomeIcon icon={faPaw} />
          Toys & Supplies
        </Button>
      </div>
      <div>
        <Button
          onClick={handleCategory}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value="645c8df8e049adbd7a7956e0"
        >
          Cat
        </Button>
        <Button
          onClick={handleType}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value="645c8ef2cca335fb21956144"
        >
          <FontAwesomeIcon icon={faPaw} />
          Food
        </Button>
        <Button
          onClick={handleType}
          className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
          value="645c90839ee41073358fa725"
        >
          <span>
            <FontAwesomeIcon icon={faPaw} />
          </span>
          Toys & Supplies
        </Button>
      </div> */}
    </div>
  );
};
