import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  IProduct,
  IProductType,
  IStoreCategory,
} from "../utils/interfaces/index";

export const useProducts = () => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [storeCategories, setStoreCategories] = useState<IStoreCategory[]>([]);
  const [productType,setProductType] =useState<IProductType[]>([])

  // const getProductCategories = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://lucky-paws-api.onrender.com/productType"
  //     );
  //     setCategory(res.data.productType.title);
  //     console.log("TESTTT", res.data.productType);
  //   } catch (error) {
  //     console.log("ERROR", error);
  //   }
  // };

  const getAllPruducts = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/product"
      );
      const storeCategories = result.data.product.map((e: any) => e.productType.storeCategory);
      const productType = result.data.product.map((e: any) => e.productType.title);
      setProduct(result.data.product);
      setStoreCategories(storeCategories);
      setProductType(productType)
      // console.log("Check: ", productType);
    } catch (err) {
      console.log("ERR", err);
    }
  };

  

  useEffect(() => {
    getAllPruducts();
    // getProductCategories();
  }, []);

  return [products,storeCategories,productType];
};
