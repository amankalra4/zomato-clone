import Head from "next/head";

interface IOgMetaData {
    title?: string;
    description?: string;
}

export default function OgMetaData(props: IOgMetaData) {
    const { title, description } = props;
    return (
        <Head>
            {title && (
                <>
                    <title>{title}</title>
                    <meta property="og:title" content={title} />
                </>
            )}
            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                </>
            )}
            <meta property="og:image" content="/icons/zomato.png" />
        </Head>
    );
}
