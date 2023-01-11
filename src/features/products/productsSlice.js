import { createSlice } from '@reduxjs/toolkit'
import 'axios'
import axios from 'axios'
const initialState = []

const productsSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {
    addProductos: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addProductos } = productsSlice.actions

export default productsSlice.reducer

export const fetchProductos = () => dispatch => {
  const url = 'https://fakestoreapi.com/products?limit=15'
  axios.get(url).then(res => dispatch(addProductos(res.data)))
}
