import { Link, Outlet, useLocation } from 'react-router-dom'
import { MdOutlineLocalGroceryStore, MdOutlineStore } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Layout = () => {
  const location = useLocation()
  const carrito = useSelector(state => state.carrito)
  return (
    <>
      <header className='fixed bg-gris w-full'>
        <h1 className='text-4xl '>blok</h1>
        <nav className=' right-4 flex justify-end align-middle place-content-center items-center'>
          <Link
            className={`p-3 font-bold text-lg ${
              location.pathname === '/' && 'bg-blue-700 text-white rounded'
            }`}
            to='/'>
            Inicio
          </Link>
          <Link
            className={` p-2 font-bold ${
              location.pathname === '/tienda' &&
              'bg-blue-700 text-white rounded'
            }`}
            to='/tienda'>
            <MdOutlineStore size={40} />
          </Link>
          <Link
            className={`p-3 font-bold ${
              location.pathname === '/carrito' &&
              'bg-blue-700 text-white rounded'
            }`}
            to='/carrito'>
            <MdOutlineLocalGroceryStore className='' size={40} />
            {carrito.length}
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Layout
