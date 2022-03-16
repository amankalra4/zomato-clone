import { ReactText } from "react";
import Head from "next/head";
import { NextPageContext } from "next";
import AppWrapper from "@components/app";
import dynamic from "next/dynamic";
import { ERROR_404_IMAGE, ERROR_500_IMAGE } from "@constants/index";

const ErrorFallback = dynamic(() => /* webpackChunkName: "error-component" */ import("@components/error-component"));

interface IProps {
    _url?: string;
    statusCode?: ReactText;
}

function ErrorComponent(props: IProps) {
    const { statusCode, _url } = props;
    const title = statusCode === 404 ? "Page Not Found" : "Something Went Wrong";
    const imageURL = statusCode === 404 ? ERROR_404_IMAGE : ERROR_500_IMAGE;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="We can't seem to find what you're looking for." />
                <link rel="canonical" href={_url} />
            </Head>
            <AppWrapper>
                <ErrorFallback heading={title} imageURL={imageURL} />
            </AppWrapper>
        </>
    );
}

const getAbsoluteUrlOnServerSide = (req: any) => {
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const protocol = host?.indexOf("localhost") > -1 ? "http:" : "https:";
    return `${protocol}//${host}${req.url}`;
};

ErrorComponent.getInitialProps = ({ req, res, err }: NextPageContext) => {
    const _url = req ? getAbsoluteUrlOnServerSide(req) : window.location.href;
    const statusCode = res?.statusCode || err?.statusCode || null;
    return { _url, statusCode };
};

export default ErrorComponent;
