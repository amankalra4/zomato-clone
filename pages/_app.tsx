import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import theme from "@src/modules/theme";
import Router from "next/router";
import LinearDeterminate from "@src/components/progress-bar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { globalStyle } from "styles/globalStyle";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./_error";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const Helper = () => <ErrorComponent statusCode={500} _url={window.location.pathname} />;

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
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).then((registration) => {
          console.log("Service worker registered: ", registration);
        }).catch((registrationError) => {
          console.log("Service worker registration failed: ", registrationError);
        });
      });
    }
  }, []);
  return (
    <div className={globalStyle}>
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
            <ErrorBoundary FallbackComponent={Helper}>
              <Component {...pageProps} />
            </ErrorBoundary>
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
