import React, { useState, useEffect } from "react";
import axios from "axios";

import { IAnimal } from "../utils/interfaces/index";

export const useAnimals = () => {
  const [animals, setAnimal] = useState<IAnimal[]>([]);
  // const [newAnimal, setNewAnimal] = useState({
  //   name: "",
  //   age: "",
  //   type: "",
  //   typeId: "",
  //   gender: "",
  //   size: "",
  //   health: "",
  //   location: "",
  //   imgs: [],
  // });

  const getAllAnimals = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/animal"
      );
      setAnimal(result.data.animal);
      // console.log(result);
    } catch (err) {
      console.log("ERR", err);
    }
  };

  const addAnimal = async (newAnimal:any) => {
    try {
      const response = await axios.post("https://lucky-paws-api.onrender.com/animal", newAnimal);
      const createdAnimal = response.data.animal;
      // Update the animals state to include the newly created animal
      setAnimal([...animals, createdAnimal]);
    } catch (error) {
      console.error("Error adding animal:", error,newAnimal);
    }
  };

  const updateAnimal = async ({animalId,dataPass}:any)=>{
    try {
      const response = await axios.put(`https://lucky-paws-api.onrender.com/animal/${animalId}`,dataPass)
      console.log("Updated animal: ",response.data)
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  // const addAnimal = async (newAnimal:any) => {
  //   try {
  //     const result = await axios.post(
  //       "http://lucky-paws-api.onrender.com/animal", newAnimal
  //     );
  //     setNewAnimal({
  //       name: "",
  //       age: "",
  //       type: "",
  //       typeId: "",
  //       gender: "",
  //       size: "",
  //       health: "",
  //       location: "",
  //       imgs: [],
  //     });     
  //   } catch (err) {
  //     console.log("ERR", err,newAnimal);
  //   }
  // };

  const deleteAnimal = async (animalId: string) => {
    try {
      await axios.delete(
        `https://lucky-paws-api.onrender.com/animal/${animalId}`
      );
      // setAnimal(result.data.animal);
      console.log(animalId);
    } catch (err) {
      console.log("ERR", err);
      // console.log(animalId);
    }
  };

  useEffect(() => {
    getAllAnimals();
  }, [deleteAnimal]);

  return { animals, setAnimal, deleteAnimal, addAnimal , updateAnimal};
};
