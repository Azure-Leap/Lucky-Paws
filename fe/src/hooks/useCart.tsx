import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ICart} from "@/utils/interfaces";
import { UserContext } from "@/context/UserContext"


export const useCart= () => {
  const { user}:any = useContext(UserContext)
  const [addProductToShoppingCart, setProductToShoppingCart] = useState<ICart[]>(user.productList);



  
  const getproductListByUserId = async (uid:string,pid:string) => {
    try {
      const res = await axios.get(`http://localhost:8000/user/shoppingProduct/${uid}`,
     );

     console.log({res})
     setProductToShoppingCart(res.data.user.favAnimal);
    } catch (err) {
      console.log("get error", err);
    }
  };
  const addProducToShoppingCart = async (uid:string,pid:string) =>  {

    try {
      const res = await axios.post(`http://localhost:8000/user/shoppingProduct/${uid}`, {
        userId:  user?._id,
        pid
      });

      const updatedUser = res.data.user;
      console.log("FAV",updatedUser.productList);
      setProductToShoppingCart(updatedUser.productList);
    } catch (err) {
      console.log("addFavorite err", err);
    }
  };

  const removeProductList= async (uid:string,pid:string) => {
    const userId = localStorage.getItem("userId")
    try {
      const res = await axios.put(`http://localhost:8000/user/shoppingProduct/${uid}`, {
        userId:  user?._id,
        pid

      });
      const updatedUser = res.data.user;
      setProductToShoppingCart(updatedUser);
    } catch (err) {
      console.log("removeProduct err", err);
    }
  };

  return {getproductListByUserId,removeProductList,addProducToShoppingCart,addProductToShoppingCart, setProductToShoppingCart};
};