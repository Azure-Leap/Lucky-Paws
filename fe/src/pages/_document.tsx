import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>Lucky Paws</title> */}
        <script src="../path/to/soft-ui-dashboard-tailwind.js"></script>
        <script src="../path/to/chartjs.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
