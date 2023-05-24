import React, { useState, useEffect } from "react";
import axios from "axios";
import { IAnimal } from "@/utils/interfaces";


export const useFavAnimal = () => {
  const [addAnimal, setAddAnimal] = useState<IAnimal[]>([]);
  const [removeAnimal, setRemoveAnimal] = useState<IAnimal[]>([]);

  const addAnimalToFav = async () => {
    try {
      const result = await axios.post(
        "https://lucky-paws-api.onrender.com/favAnimal"
      );
      setAddAnimal(result.data.favAnimal);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  useEffect(() => {
    addAnimalToFav();
  }, []);

  const removeFavAnimal = async () => {
    try {
      const result = await axios.delete(
        "https://lucky-paws-api.onrender.com/favAnimal"
      );
      setAddAnimal(result.data.favAnimal);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  useEffect(() => {
    addAnimalToFav();
  }, []);

  return {addAnimal,addAnimalToFav};
};