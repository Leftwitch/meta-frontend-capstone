import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/menu',
    element: <PlaceholderPage />
  },
  {
    path: '/contact',
    element: <PlaceholderPage />
  },
  {
    path: '/gallery',
    element: <PlaceholderPage />
  },
]);

const queryClient = new QueryClient();

function App() {

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Box minH='100vh'>
          <RouterProvider router={router} />
        </Box>
        <Footer />
      </QueryClientProvider>

    </ChakraProvider>
  )
}

export default App
