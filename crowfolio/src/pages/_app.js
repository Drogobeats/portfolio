import '@/styles/globals.css'
import React from 'react'
import Layout from '@/components/Layout'
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

export default function App( {Component, pageProps}) {

  const { Button } = chakraTheme.components
  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  const theme = extendBaseTheme({ colors })

  return (
      <React.Fragment>
        <ChakraProvider theme={theme}>
          <Layout/>
          <Component {...pageProps} />
        </ChakraProvider>
      </React.Fragment>
  )
}
