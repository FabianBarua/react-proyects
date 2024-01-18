import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/filter.jsx'
import { CartProvider } from './context/cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FilterProvider>
)
