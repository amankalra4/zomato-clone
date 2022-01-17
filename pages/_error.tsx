import { ReactText } from "react";
import Head from "next/head";
import { NextPageContext } from "next";
import App from "@src/components/app";
import dynamic from "next/dynamic";
import { ERROR_404_IMAGE, ERROR_500_IMAGE } from "@src/constants";

const ErrorFallback = dynamic(() => /* webpackChunkName: "aman 1" */ import("@src/components/error-component"));

interface IProps {
    url?: string;
    statusCode?: ReactText;
}

function ErrorComponent(props: IProps) {
    const { statusCode, url } = props;
    const title = statusCode === 404 ? "Page Not Found" : "Something Went Wrong";
    const imageURL = statusCode === 404 ? ERROR_404_IMAGE : ERROR_500_IMAGE;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="We can't seem to find what you're looking for."
                />
                <link rel="canonical" href={url} />
            </Head>
            <App>
                <ErrorFallback heading={title} imageURL={imageURL} />
            </App>
        </>
    );
}

const getAbsoluteUrlOnServerSide = (req: any) => {
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const protocol = host?.indexOf("localhost") > -1 ? "http:" : "https:";
    return `${protocol}//${host}${req.url}`;
};

ErrorComponent.getInitialProps = ({ req, res, err }: NextPageContext) => {
    const url = req ? getAbsoluteUrlOnServerSide(req) : window.location.href;
    const statusCode = res?.statusCode || err?.statusCode || null;
    return { url, statusCode };
};

export default ErrorComponent;
