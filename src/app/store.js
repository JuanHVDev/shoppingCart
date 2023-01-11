import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import productsReducer from '../features/products/productsSlice'
export const store = configureStore({
  reducer: {
    carrito: cartReducer,
    productos: productsReducer,
  },
})
