import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Header } from './components/Header'

const theme = extendTheme({
  colors: {
    primary: '#F4CE14',
    secondary: '#495E5'
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
    </ChakraProvider>
  )
}

export default App
