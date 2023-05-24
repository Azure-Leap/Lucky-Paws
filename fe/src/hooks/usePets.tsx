import React, { useState, useEffect } from "react";
import axios from "axios";

import { IAnimal } from "../utils/interfaces/index";

export const useAnimals = () => {
  const [animals, setAnimal] = useState<IAnimal[]>([]);
  const [newAnimal, setNewAnimal] = useState();

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

  const addAnimal = async () => {
    try {
      await axios.post(`https://lucky-paws-api.onrender.com/animal`, newAnimal);
    } catch (error) {
      console.log("ERR", error);
    }
  };

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

  return { animals, setAnimal, deleteAnimal, addAnimal, setNewAnimal };
};
