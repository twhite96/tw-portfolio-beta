import Head from 'next/head'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import customTheme from '../chakra-ui/customTheme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Tiffany's Personal Site</title>
      </Head>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App