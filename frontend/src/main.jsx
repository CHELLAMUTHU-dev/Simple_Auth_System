import { StrictMode , useContext} from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { UserContextProvider } from './context/userContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
    <App />
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
