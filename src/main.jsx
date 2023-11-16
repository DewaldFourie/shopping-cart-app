import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Router from './Router'
import { CartProvider } from './context/cartContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </React.StrictMode>,
)





