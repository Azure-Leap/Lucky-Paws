import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IAnimal } from "@/utils/interfaces";
import { UserContext } from "@/context/UserContext"


export const useFavAnimal = () => {
  const { user}:any = useContext(UserContext)
  const [addAnimal, setAddAnimal] = useState<IAnimal[]>(user.favAnimal);
  
  const getFavAnimalByUserId = async (uid:string,aid:string) => {
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.get(`http://localhost:8000/user/favorites/${uid}`,
     );

     console.log({res})
     setAddAnimal(res.data.user.favAnimal);
    } catch (err) {
      console.log("get error", err);
    }
  };
  const addAnimalToFav = async (uid:string,aid:string) =>  {
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.post(`http://localhost:8000/user/favorites/${uid}`, {
        userId:  user?._id,
        aid
      });

      const updatedUser = res.data.user;
      console.log("FAV",updatedUser.favAnimal);
      setAddAnimal(updatedUser.favAnimav);
    } catch (err) {
      console.log("addFavorite err", err);
    }
  };

  const removeFavAnimal = async (uid:string,aid:string) => {
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.put(`http://localhost:8000/user/favorites/${uid}`, {
        userId:  user?._id,
        aid

      });
      const updatedUser = res.data.user;
      setAddAnimal(updatedUser);
    } catch (err) {
      console.log("removeFavorite err", err);
    }
  };

  return {addAnimal,addAnimalToFav ,removeFavAnimal,getFavAnimalByUserId};
};