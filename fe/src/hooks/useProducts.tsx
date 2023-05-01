import React, { useState, useEffect } from "react";
import axios from "axios";

import { IProduct } from "@/utils/interfaces";

export const useProducts = () => {
  const [products, setProduct] = useState<IProduct[]>([]);

  const getAllPruducts = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/product"
      );
      setProduct(result.data.product);
      console.log(result);
    } catch (err) {
      console.log("ERR", err);
    }
  };

  useEffect(() => {
    getAllPruducts();
  }, []);

  return [products];
};