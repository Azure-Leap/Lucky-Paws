import React from "react";
import "@/styles/globals.css";
import Layout from "./layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FavAnimalProvider } from "@/context/FavAnimalContext";
import { CartProvider } from "@/context/ShoppingCartContext";
import { UserContextProvider } from "@/context/UserContext";

export default function App({ Component, pageProps }: any) {
  const renderProfileLayout =
    Component.getLayout ||
    function (page: any) {
      return (
        <UserContextProvider>
          <CartProvider>
            <FavAnimalProvider>
              <Layout>{page}</Layout>
            </FavAnimalProvider>
          </CartProvider>
        </UserContextProvider>
      );
    };
  return renderProfileLayout(<Component {...pageProps} />);
}
