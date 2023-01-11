import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCarrito, removeCarrito } from '../features/cart/cartSlice'

const Carrito = () => {
  const carrito = useSelector(state => state.carrito)
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  return (
    <div>
      <h1 className='text-4xl'>Carrito</h1>
      <div className='container'>
        {carrito.length === 0 ? (
          <h2 className='text-5xl mt-20'>
            No hay Productos en el carrito.
            <br />
            <Link className='text-indigo-600 hover:text-indigo-900' to='/tienda'>Ir a Tienda</Link>
          </h2>
        ) : (
          carrito?.map(producto => (
            <div>
              <h1>{producto.title}</h1>
              <div>
                <button onClick={() => dispatch(removeCarrito(producto))}>
                  -
                </button>
                <p>{producto.cantidad}</p>

                <button onClick={() => dispatch(addCarrito(producto))}>
                  +
                </button>
              </div>
              <p>{producto.precio}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Carrito
