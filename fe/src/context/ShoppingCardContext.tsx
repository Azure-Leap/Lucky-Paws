
import { createContext, useState, useEffect } from "react";
import { ICard, ICardContext } from "@/utils/interfaces";
import { useCard} from "../hooks/useCard";

export const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [card, setCard] = useState<ICard>({ user_Id: "", items: [] });
  const { createCard}  = useCard();
  useEffect(() => {
  createCard();
  }, [card]);

  return (
    <CardContext.Provider value={{ card, setCard}}>
      {children}
    </CardContext.Provider>
  );
};