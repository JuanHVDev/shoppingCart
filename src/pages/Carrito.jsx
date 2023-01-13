import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCarrito, removeCarrito } from '../features/cart/cartSlice'

const Carrito = () => {
  const carrito = useSelector(state => state.carrito)
  const [total, setTotal] = useState(0)

  const sumaTotal = () =>
    carrito.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.cantidad,
      0,
    )

  const dispatch = useDispatch()
  return (
    <div className=''>
      <div className=''>
        <h1 className='text-4xl'>Carrito</h1>
        {carrito.length === 0 ? (
          <h2 className='text-5xl mt-20'>
            No hay Productos en el carrito.
            <br />
            <Link
              className='text-indigo-600 hover:text-indigo-900'
              to='/tienda'>
              Ir a Tienda
            </Link>
          </h2>
        ) : (
          <>
            <div className='w-5/12'>
              <h2 className='text-3xl'>Total ${sumaTotal().toFixed(2)} </h2>
            </div>
            <div className='grid grid-cols-2 h-full w-9/12 items-end gap-3 container'>
              {carrito?.map(producto => (
                <div key={producto.id} className='card'>
                  <figure className='image'>
                    <img
                      src={producto.image}
                      alt={producto.title}
                      className='rounded-2xl'
                    />
                  </figure>

                  <div className='info'>
                    <div>
                      <h3 className='text-lg font-bold py-2 '>
                        {producto.title}
                      </h3>
                      <div>
                        <p className='text-lg m-3'>
                          ${producto.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

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
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Carrito
