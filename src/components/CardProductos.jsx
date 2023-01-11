import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCarrito } from '../features/cart/cartSlice'
import { fetchProductos } from '../features/products/productsSlice'

const CardProductos = () => {
  const [productos] = useSelector(state => state.productos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductos())
  }, [dispatch])
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 container'>
      {productos?.map(producto => (
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
              <h3 className='text-lg font-bold py-2 '>{producto.title}</h3>
              <div>
                <p className='text-lg m-3'>${producto.price.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => dispatch(addCarrito(producto))}
                className='bg-black text-white mt-4 p-2 w-6/12 m-auto rounded-lg'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardProductos
