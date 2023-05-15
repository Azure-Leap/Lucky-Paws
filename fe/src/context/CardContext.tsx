
// export const CardContext = createContext([]) as any

// export interface ICard {
//     userId: string,
//     items: any[]
// }

// export const CardProvider = ({children}:any)=>{
//     const [card, setCard] = useState([]) as any
//     useEffect(()=>{
//         //backend-d hadgalay  POST HUSELT
        


//     }, [card])

//     return <CardContext.Provider value={{card, setCard}}>
//         {children}
//     </CardContext.Provider>
// }
import { createContext, useState, useEffect } from "react";
import { IAnimal } from "@/utils/interfaces";

export interface ICard {
  userId: string;
  items: any[];
}

interface ICardContext {
  card: ICard;
  setCard: React.Dispatch<React.SetStateAction<ICard>>;
}

export const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [card, setCard] = useState<ICard>({ userId: "", items: [] });

  useEffect(() => {
    //backend-d hadgalay  POST HUSELT

  }, [card]);

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
};
