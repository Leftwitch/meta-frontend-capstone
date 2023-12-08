import { Box, ChakraProvider, Divider, extendTheme } from '@chakra-ui/react'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero/Hero'
import { Reviews } from './components/Review'

const theme = extendTheme({
  colors: {
    primary: '#F4CE14',
    secondary: '#495E57'
  },
  fonts: {
    heading: 'Markazi Text',
    body: 'Markazi Text',
  }
})
function App() {

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <main>
        <Box mt={8} />
        <Featured />
        <Divider my={16} />
        <Box mt={8} />
        <Reviews />
      </main>
      <Box mt={32} />
      <Footer />
    </ChakraProvider>
  )
}

export default App
