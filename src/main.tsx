import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./sass/style.scss"
import Navbar from './components/ui/Navbar.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import UserContextProvider from './components/contexts/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <Navbar />
        <App />
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
)
