import App from "next/app";
import type { AppProps, AppContext } from 'next/app'
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "@src/modules/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default MyApp
