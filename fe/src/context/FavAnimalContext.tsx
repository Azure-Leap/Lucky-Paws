
import { createContext, useState, useEffect, useContext } from "react";
import { IFavAnimal, IFavAnimalContext } from "@/utils/interfaces";
import { useFavAnimal} from "../hooks/useFavAnimal";
import { UserContext } from "./UserContext";

export const FavAnimalContext = createContext<IFavAnimalContext>({} as IFavAnimalContext);

export const FavAnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const { user}:any = useContext(UserContext)
  const [ addAnimal, setAddAnimal] = useState<IFavAnimal>(user.favAnimal);
  const {getFavAnimalByUserId}  = useFavAnimal();


  useEffect(() => {
    if(user){
      getFavAnimalByUserId()
    }
  }, [user]);

  
  return (
    <FavAnimalContext.Provider value={{ addAnimal, setAddAnimal}}>
      {children}
    </FavAnimalContext.Provider>
  );
};
