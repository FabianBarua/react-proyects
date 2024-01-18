import { createContext, useState } from 'react'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = ({ product }) => {
    console.log(product)
    const cartProductIndex = cart.findIndex(
      productInCart => productInCart.id === product.id
    )

    if (cartProductIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[cartProductIndex].quantity += 1
      setCart(newCart)
      return
    }

    setCart(prevState => [...prevState, { ...product, quantity: 1 }])
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </cartContext.Provider>
  )
}
