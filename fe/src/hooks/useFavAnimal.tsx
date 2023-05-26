import React, { useState, useEffect } from "react";
import axios from "axios";
import { IAnimal } from "@/utils/interfaces";

export const useFavAnimal = () => {
  const [addAnimal, setAddAnimal] = useState<IAnimal[]>([]);
  const [removeAnimal, setRemoveAnimal] = useState<IAnimal[]>([]);

  const addAnimalToFav = async () => {
    try {
      const result = await axios.post(
        "https://lucky-paws-g5kgwvgpn-luckypaws.vercel.app/favAnimal"
      );
      setAddAnimal(result.data.favAnimal);
      const favAnimal = await result.data.favAnimal;

      console.log("SUCCESS", favAnimal);

      // localStorage.setItem("user", String(data.user));
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
        "https://lucky-paws-g5kgwvgpn-luckypaws.vercel.app/favAnimal"
      );
      setAddAnimal(result.data.favAnimal);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  useEffect(() => {
    addAnimalToFav();
  }, []);

  return { addAnimal, addAnimalToFav };
};
