import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import theme from "@modules/theme";
import Router from "next/router";
import LinearDeterminate from "@components/progress-bar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { globalStyle } from "styles/globalStyle";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./_error";
import { wrapper } from "../redux/store";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

const Helper = () => <ErrorComponent statusCode={500} _url={window.location.pathname} />;

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Router.events.on("routeChangeStart", () => setLoading(true));
        Router.events.on("routeChangeComplete", () => setLoading(false));
        Router.events.on("routeChangeError", () => setLoading(false));
        return () => {
            Router.events.off("routeChangeError", () => setLoading(false));
        };
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

export default wrapper.withRedux(MyApp);
