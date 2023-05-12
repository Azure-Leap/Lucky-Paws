import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  IProduct,
  IProductType,
  IStoreCategory,
} from "../utils/interfaces/index";

export const useProducts = () => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [categories, setCategory] = useState<IProductType[]>([]);

  const getProductCategories = async () => {
    try {
      const res = await axios.get(
        "https://lucky-paws-api.onrender.com/productType"
      );
      setCategory(res.data);
      console.log("TESTTT", res);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getAllPruducts = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/product"
      );
      setProduct(result.data.product);
      const map = result.data.product.map((e: any) => e.productType.title);
      // const map = result.data.product.productType.title;
      // setCategory(result.data.product.map((e: any) => e.productType.title));
      setCategory(map);
      console.log("TeSt", products);
    } catch (err) {
      console.log("ERR", err);
    }
  };

  useEffect(() => {
    getAllPruducts();
  }, []);

  return [products, categories];
};
