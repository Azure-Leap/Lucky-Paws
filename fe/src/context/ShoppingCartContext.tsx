
import { createContext, useState, useEffect,useContext } from "react";
import { ICart, ICardContext } from "@/utils/interfaces";
import { useCart} from "../hooks/useCart";
import { UserContext } from "./UserContext";

export const CartContext = createContext<ICardContext>({} as ICardContext);


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user}:any = useContext(UserContext)
  const [addProductToShoppingCart, setProductToShoppingCart] = useState<ICart>(user.productList);
  const {addProducToShoppingCart }  = useCart();
  useEffect(() => {
    addProducToShoppingCart();
  }, [addProductToShoppingCart]);

  return (
    <CartContext.Provider value={{ addProductToShoppingCart, setProductToShoppingCart}}>
      {children}
    </CartContext.Provider>
  );
};