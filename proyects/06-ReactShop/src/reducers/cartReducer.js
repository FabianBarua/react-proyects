export const initialState = []

export const CART_REDUCER_TYPES = {
  ADD_QUANTITY: 'ADD_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_REDUCER_TYPES.ADD_QUANTITY: {
      const { product, quantity } = actionPayload

      const cartProductIndex = state.findIndex(
        productInCart => productInCart.id === product.id
      )

      if (cartProductIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[cartProductIndex].quantity += quantity
        newCart[cartProductIndex].quantity === 0 &&
          newCart.splice(cartProductIndex, 1)

        return newCart
      }

      return [...state, { ...product, quantity: quantity }]
    }
    case CART_REDUCER_TYPES.REMOVE_FROM_CART: {
      const { product } = actionPayload
      const newState = state.filter(item => item.id !== product.id)
      return newState
    }
    case CART_REDUCER_TYPES.CLEAR_CART: {
      const newState = []
      return newState
    }
  }
  return state
}
