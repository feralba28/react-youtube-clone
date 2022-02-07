import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
          {/* <!-- Roofstrap CSS --> */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/RooftopAcademy/rooftstrap@v2.5.0/dist/css/app.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
