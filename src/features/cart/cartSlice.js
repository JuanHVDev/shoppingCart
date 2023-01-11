import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    addCarrito: (state, action) => {
      const isInCart = state.find(cartItem => cartItem.id === action.payload.id)
      return isInCart
        ? state.map(cartItem =>
            cartItem.id === action.payload.id
              ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
              : cartItem,
          )
        : [...state, { ...action.payload, cantidad: 1 }]
    },

    removeCarrito: (state, action) => {
      const cartItemToRemove = state.find(
        cartItem => cartItem.id === action.payload.id,
      )
      return cartItemToRemove.cantidad === 1
        ? state.filter(cartItem => cartItem.id !== action.payload.id)
        : state.map(cartItem =>
            cartItem.id === action.payload.id
              ? { ...cartItem, cantidad: cartItem.cantidad - 1 }
              : cartItem,
          )
    },
  },
})

export const { addCarrito, removeCarrito } = cartSlice.actions

export default cartSlice.reducer
