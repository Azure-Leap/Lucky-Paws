
import { createContext, useState, useEffect } from "react";
import { ICard, ICardContext } from "@/utils/interfaces";

export const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [card, setCard] = useState<ICard>({ user_Id: "", items: [] });

  useEffect(() => {
//   end cardiin post huselt item
  }, [card]);

  return (
    <CardContext.Provider value={{ card, setCard}}>
      {children}
    </CardContext.Provider>
  );
};