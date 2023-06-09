
import { createContext, useState, useEffect } from "react";
import { IFavAnimal, IFavAnimalContext } from "@/utils/interfaces";
import { useFavAnimal} from "../hooks/useFavAnimal";

export const FavAnimalContext = createContext<IFavAnimalContext>({} as IFavAnimalContext);

export const FavAnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [addAnimal, setAddAnimal] = useState<IFavAnimal>({ user_Id: "", animals: [] });
  const { addAnimalToFav}  = useFavAnimal();

  useEffect(() => {
    addAnimalToFav();
  }, [addAnimal]);

  
  return (
    <FavAnimalContext.Provider value={{ addAnimal, setAddAnimal }}>
      {children}
    </FavAnimalContext.Provider>
  );
};
