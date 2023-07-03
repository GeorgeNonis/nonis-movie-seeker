import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import * as Comp from "@/components";
import Starsbackdrop from "@/components/starsbackdrop/starsbackdrop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Comp.Modal>
        <Comp.MovieModal />
      </Comp.Modal>
      <Comp.Modal>
        <Comp.SettingsModal />
      </Comp.Modal>
      <Comp.Headercomponent />
      <Comp.Carousel />
      <Component {...pageProps} />
      <Comp.ScrollToTop />
      <Comp.Techonologies />
      <Comp.Footer />
      <Starsbackdrop />
    </Provider>
  );
}
