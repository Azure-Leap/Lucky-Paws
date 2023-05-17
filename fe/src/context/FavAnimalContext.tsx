
import { createContext, useState, useEffect } from "react";
import { IFavAnimal, IFavAnimalContext } from "@/utils/interfaces";

export const FavAnimalContext = createContext<IFavAnimalContext>({} as IFavAnimalContext);

export const FavAnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [addAnimal, setAddAnimal] = useState<IFavAnimal>({ user_Id: "", animals: [] });


  useEffect(() => {
  

  }, [addAnimal]);

  return (
    <FavAnimalContext.Provider value={{ addAnimal, setAddAnimal }}>
      {children}
    </FavAnimalContext.Provider>
  );
};
