import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

import client from '../client'

import ClientOnly from '../helpers/client-only'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <ClientOnly>
          <Component {...pageProps} />
        </ClientOnly>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
