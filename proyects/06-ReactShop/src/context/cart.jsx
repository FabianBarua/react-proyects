import { createContext } from 'react'
import { useCart } from './../hooks/useCart'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const { cart, addQuantity, clearCart, removeFromCart } = useCart()

  return (
    <cartContext.Provider
      value={{ cart, addQuantity, clearCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  )
}
