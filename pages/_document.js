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
        <link rel="manifest" href="manifest.json" />
        <link rel="preconnect" href="https://b.zmtcdn.com" />
        <link rel="dns-prefetch" href="https://b.zmtcdn.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" defer />
        <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" defer />
        {/* <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
            as="style" 
            onLoad="this.onload=null;this.rel='stylesheet'" 
        />
        <noscript>
          <link 
              rel="stylesheet" 
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous"
          />
        </noscript> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" type="stylesheet" /> */}
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
