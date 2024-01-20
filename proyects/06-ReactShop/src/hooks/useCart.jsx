import { useReducer } from 'react'
import { cartReducer, CART_REDUCER_TYPES } from '../reducers/cartReducer'

export const useCart = () => {
  const [state, dispatch] = useReducer(cartReducer, [])

  const addQuantity = ({ product, quantity = 1 }) => {
    return dispatch({
      type: CART_REDUCER_TYPES.ADD_QUANTITY,
      payload: { product, quantity }
    })
  }

  const removeFromCart = ({ product }) => {
    return dispatch({
      type: CART_REDUCER_TYPES.REMOVE_FROM_CART,
      payload: { product }
    })
  }

  const clearCart = () => {
    return dispatch({ type: CART_REDUCER_TYPES.CLEAR_CART })
  }
  return { cart: state, addQuantity, clearCart, removeFromCart }
}
