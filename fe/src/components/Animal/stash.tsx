import React, { useState,useEffect } from "react";
import _ from "lodash"
import { faPaw, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";

export const AnimalFilter = ({animals,filteredList,setFilteredList}:any) => {
  const [menuItems, setMenuItems] = useState([
    {
      main: "Dog",
      mainValue: "6454a1a4a4948f1874896b8f",
      gender: [{text:"Male",category:"Dog"},{text:"Female",category:"Dog"}],
      age: [{text:"0-1",value:0,category:"Dog"},{text:"1-2",value:1,category:"Dog"},{text:"2-3",value:2,category:"Dog"},{text:"3-4",value:3,category:"Dog"},{text:"4-5",value:4,category:"Dog"},{text:"5-6",value:5,category:"Dog"}],
      size: [{text:"Small",category:"Dog"},{text:"Normal",category:"Dog"}, {text:"Large",category:"Dog"}, {text:"Extra Large",category:"Dog"}],
      genderDrop: false,
      ageDrop: false,
      sizeDrop: false,
    },
    {
      main: "Cat",
      mainValue: "6454a196a4948f1874896b8b",
      gender: [{text:"Male",category:"Cat"},{text: "Female"},{category:"Cat"}],
      age: [{text:"0-1",value:0,category:"Cat"},{text:"1-2",value:1,category:"Cat"},{text:"2-3",value:2,category:"Cat"},{text:"3-4",value:3,category:"Cat"},{text:"4-5",value:4,category:"Cat"},{text:"5-6",value:5,category:"Cat"}],
      size: [{text:"Small",category:"Cat"},{text:"Normal",category:"Cat"}, {text:"Large",category:"Cat"}, {text:"Extra Large",category:"Cat"}],
      genderDrop: false,
      ageDrop: false,
      sizeDrop: false,
    },
  ]);

  useEffect(()=>{
    setFilteredList(animals)
  },[animals])

  const toggleDropdown = (index:number, dropdownName:string) => {
    setMenuItems((prevItems) => {
      const updatedMenu:any = [...prevItems];

      updatedMenu[index] = {
        ...updatedMenu[index],
        [dropdownName]: !updatedMenu[index][dropdownName],
      };
      return updatedMenu;
    });
  };

  function handleAll() {
    setFilteredList(animals);
    console.log("All: ", animals );
  }

  function handleCategory(e: any) {
    const categoryValue = e.target.value;
    
    const newFilter = _.filter(animals, (item: any) => {
      return item.animaltype._id === categoryValue;
    });
    
    setFilteredList(newFilter);
    console.log("Category: ",newFilter)
  }

  function handleGender(e:any){
    const genderValue=e.target.value;
    const categoryValue=e.target.name
    const newFilter = _.filter(animals,(item:any)=>{
      return (item.gender === genderValue && 
      item.animaltype.title === categoryValue);
    })
    setFilteredList(newFilter);
    console.log("Gender: ", genderValue, categoryValue)
  }

  function handleAge(e:any){
    const ageValue=e.target.value;
    const categoryValue=e.target.name;
    const newFilter = _.filter(animals,(item:any)=>{
      return (item.age == ageValue && 
      item.animaltype.title === categoryValue);
    })
    setFilteredList(newFilter);
    console.log("Age: ", ageValue, categoryValue)
  }

  function handleSize(e:any){
    const sizeValue=e.target.value;
    const categoryValue=e.target.name;
    const newFilter = _.filter(animals,(item:any)=>{
      return (item.size == sizeValue && 
      item.animaltype.title === categoryValue);
    })
    setFilteredList(newFilter);
    console.log("Size: ", sizeValue, categoryValue)
  }

  return (
    <div className="m-3">
      <Button
        onClick={handleAll}
        className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
      >
        All
      </Button>
      {menuItems?.map((e, idx) => (
        <div key={idx}>
          <Button
            onClick={handleCategory}
            className="hover:text-orange-400 focus:text-orange-400 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1"
            value={e.mainValue}
          >
            {e.main}
          </Button>
          <div>
            <Button
              className="inline-flex justify-between w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none uppercase my-1"
              onClick={() => toggleDropdown(idx, "genderDrop")}
              value={e.main}
            >
              Gender
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${e.genderDrop ? "rotate-180" : ""} duration-300`}
              />
            </Button>
            {e.gender.map((gender:any, idx:number) => (
              <Button
                onClick={handleGender}
                className={`${
                  e.genderDrop ? "flex" : "hidden"
                } duration-300 hover:text-orange-400 focus:text-orange-400 w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1 normal-case`}
                value={gender.text}
                name={gender.category}
                key={idx}
              >
                <FontAwesomeIcon icon={faPaw} />
                {gender.text}
              </Button>
            ))}
          </div>
          <div>
            <Button
              className="inline-flex justify-between w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none uppercase my-1"
              onClick={() => toggleDropdown(idx, "ageDrop")}
              value={e.main}
            >
              Age
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${e.ageDrop ? "rotate-180" : ""} duration-300`}
              />
            </Button>
            {e.age.map((age:any, idx:number) => (
              <Button
                onClick={handleAge}
                className={`${
                  e.ageDrop ? "flex" : "hidden"
                } duration-300 hover:text-orange-400 focus:text-orange-400 w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1 normal-case`}
                value={age.value}
                name={age.category}
                key={idx}
              >
                <FontAwesomeIcon icon={faPaw} />
                {age.text}
              </Button>
            ))}
          </div>
          <div>
            <Button
              onClick={() => toggleDropdown(idx, "sizeDrop")}
              className="inline-flex justify-between w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none uppercase my-1"
            >
              Size
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${e.sizeDrop ? "rotate-180" : ""} duration-300`}
              />
            </Button>
            {e.size.map((size, index) => (
              <Button
                key={index}
                onClick={handleSize}
                className={`${
                  e.sizeDrop ? "flex" : "hidden"
                } hover:text-orange-400 focus:text-orange-400 w-full gap-3 rounded-xl bg-white pl-10 py-2 text-base font-semibold text-gray-900 shadow-none hover:bg-gray-50 my-1 normal-case`}
                value={size.text}
                name={size.category}
              >
                <FontAwesomeIcon icon={faPaw} />
                {size.text}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};