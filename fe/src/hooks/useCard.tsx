import React, { useState, useEffect } from "react";
import axios from "axios";

import { ICard } from "@/utils/interfaces";

export const useCard = () => {
  const [card, setCard] = useState<ICard[]>([]);

  const createCard = async () => {
    try {
      const result = await axios.post(
        "https://lucky-paws-api.onrender.com/shoppingProduct"
      );
      setCard(result.data.card);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  useEffect(() => {
    createCard();
  }, []);

  return {card,createCard};
};