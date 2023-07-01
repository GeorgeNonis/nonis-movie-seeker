import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="settings"></div>
        <div id="movie_modal"></div>
        <div id="lib_modal"></div>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
