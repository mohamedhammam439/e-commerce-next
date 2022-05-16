import Layout from "../components/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "../utiles/Store";


function MyApp({ Component, pageProps }) {
  console.log('MyApp')
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
