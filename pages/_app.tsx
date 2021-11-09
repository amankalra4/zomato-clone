import App from "next/app";
import type { AppProps, AppContext } from 'next/app'
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default MyApp
