import React, { useState, useEffect } from "react";
import axios from "axios";

import { IAnimal } from "../utils/interfaces/index";

export const useAnimals = () => {
  const [animals, setAnimal] = useState<any>([]);

  const getAllAnimals = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/animal"
      );
      const res = result.data.animal;
      setAnimal(res);
      // console.log(result);
    } catch (err) {
      console.log("ERR", err);
    }
  };

  useEffect(() => {
    getAllAnimals();
  }, []);

  return { animals, setAnimal };
};
