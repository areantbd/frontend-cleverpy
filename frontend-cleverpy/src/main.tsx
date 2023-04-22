import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./sass/style.scss"
import Navbar from './components/ui/Navbar.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </React.StrictMode>,
)
