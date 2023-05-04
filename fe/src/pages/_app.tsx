import "@/styles/globals.css";
import Layout from "./layout";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function App({ Component, pageProps }: any) {
  const renderProfileLayout =
    Component.getLayout ||
    function (page: any) {
      return <Layout>{page}</Layout>;
    };
  return renderProfileLayout(<Component {...pageProps} />);
}
