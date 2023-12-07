import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero/Hero'

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
    </ChakraProvider>
  )
}

export default App
