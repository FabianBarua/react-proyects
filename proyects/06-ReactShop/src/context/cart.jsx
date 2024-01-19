import { createContext, useState } from 'react'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const removeFromCart = ({ product }) => {
    console.log(product)
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const addQuantity = ({ product, quantity = 1 }) => {
    const cartProductIndex = cart.findIndex(
      productInCart => productInCart.id === product.id
    )

    if (cartProductIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[cartProductIndex].quantity += quantity
      newCart[cartProductIndex].quantity === 0 &&
        newCart.splice(cartProductIndex, 1)

      setCart(newCart)
      return
    }

    setCart(prevState => [...prevState, { ...product, quantity: quantity }])
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider
      value={{ cart, addQuantity, clearCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  )
}
