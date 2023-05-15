import React from "react";
import "@/styles/globals.css";
import Layout from "./layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CardProvider } from "@/context/CardContext";

export default function App({ Component, pageProps }: any) {
  const renderProfileLayout =
    Component.getLayout ||
    function (page: any) {
      return <CardProvider>
        <Layout>{page}</Layout>
      </CardProvider>;
    };
  return renderProfileLayout(<Component {...pageProps} />);
}
