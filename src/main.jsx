import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import CounrtyContextProvider from './Context/CounrtyContext.jsx'

createRoot(document.getElementById('root')).render(
  <ChakraProvider value={defaultSystem}>
    <CounrtyContextProvider>
      <BrowserRouter>    
        <App />
      </BrowserRouter>  
    </CounrtyContextProvider>    
  </ChakraProvider>,
)
