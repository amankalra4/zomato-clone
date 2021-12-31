import Head from "next/head";

interface IOgMetaData {
    title?: string;
    description?: string;
    image?: string;
}

export default function OgMetaData(props: IOgMetaData) {
    const { title, description, image = "/zomato.png" } = props;
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
            {image && <meta property="og:image" content={image} />}
        </Head>
    );
}
