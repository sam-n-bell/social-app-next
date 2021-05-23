import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import myTheme from "../theme";
import { ThemeProvider } from "@material-ui/core";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={myTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
