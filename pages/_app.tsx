import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import theme from "@src/modules/theme";
import Router from "next/router";
import LinearDeterminate from "@src/components/progress-bar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import classes from "../styles/globals.module.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, []);
  return (
    <div className={classes.globalStyle}>
      <ThemeProvider theme={theme}>
      {loading && <LinearDeterminate />}
      <SnackbarProvider
          anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
    </div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
