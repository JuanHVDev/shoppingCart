import { useEffect, useState } from 'react'

const Tienda = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const obtenerProductos = async () => {
      const url = 'https://fakestoreapi.com/products?limit=15'
      const res = await fetch(url)
      const data = await res.json()
      setProductos(data)
    }
    obtenerProductos()
  })

  return (
    <>
      <h2 className='text-4xl mb-12'>Productos</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 container'>
        {productos.map(producto => (
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
                  <p className='text-lg m-3'>${producto.price}</p>
                </div>
              </div>
              <div>
                <button className='bg-black text-white mt-4 p-2 w-6/12 m-auto rounded-lg'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tienda
