import { StoreProvider } from "easy-peasy";

import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />;
    </StoreProvider>
  );
}

export default MyApp;
