// pages/_document.js
// noinspection ES6CheckImport

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import customTheme from '../chakra-ui/customTheme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <a rel="me" href="https://hachyderm.io/@tiff"></a>
        </Head>
        <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}