import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  IProduct,
  IProductType,
  IStoreCategory,
} from "../utils/interfaces/index";

export const useProducts = () => {
  const [products, setProduct] = useState<IProduct[]>([]);

  const getAllPruducts = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/product"
      );
      const product = result.data.product;
      setProduct(product);
    } catch (err) {
      console.log("ERR", err);
    }
  };

  useEffect(() => {
    getAllPruducts();
  }, []);

  return { products, setProduct };
};
