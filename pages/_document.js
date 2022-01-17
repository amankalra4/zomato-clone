/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" href="/icons/zomato.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" defer />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin defer />
        <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" defer />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const renderStatic = async (html) => {
  if (html === undefined) {
    throw new Error("did you forget to return html from renderToString?");
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};

MyDocument.getInitialProps = async (ctx) => {

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
  });

  const initialProps = await Document.getInitialProps(ctx);
  const { css, ids } = await renderStatic(ctx.renderPage().html);

  return {
    ...initialProps,
    styles: [(
      <>
        {initialProps.styles}
        <style
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
        />
      </>
    ), sheets.getStyleElement()]
  };
};

export default MyDocument;
