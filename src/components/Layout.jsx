import { Link, Outlet, useLocation } from 'react-router-dom'
import { MdOutlineLocalGroceryStore, MdOutlineStore } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Layout = () => {
  const location = useLocation()
  const carrito = useSelector(state => state.carrito)
  const productosTotal = carrito.reduce((a, b) => a + b.cantidad, 0)
  return (
    <>
      <header className=' text-gris w-full '>
        <nav className='py-2 md:py-4'>
          <div className='container px-4 mx-auto md:flex md:items-center'>
            <div className='flex justify-between items-center'>
              {/* Titulo */}
              <Link to='/' className='font-bold text-5xl text-indigo-600'>
                Shopper Cart
              </Link>
            </div>

            <div
              className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
              id='navbar-collapse'>
              {/* Aqui van los links */}
              <Link
                className='h-fit p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600'
                to='/'>
                Home
              </Link>
              <Link
                className='h-fit p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600'
                to='/tienda'>
                <MdOutlineStore size={30} />
              </Link>
              <Link
                className='h-fit p-2 lg:px-4 md:mx-2 text-sm text-white rounded bg-indigo-600'
                to='/carrito'>
                <MdOutlineLocalGroceryStore size={25} />
                <span className='text-[1rem}'>{productosTotal}</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Layout
