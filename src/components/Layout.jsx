import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  return (
    <header>
      <h1 className='text-4xl '>blok</h1>
      <nav className='flex justify-end px-8'>
        <Link
          className={`p-3 w-1/12 font-bold text-lg ${
            location.pathname === '/' && 'bg-blue-700 text-white rounded'
          }`}
          to='/'>
          Inicio
        </Link>
        <Link
          className={`p-3 w-1/12 font-bold text-lg ${
            location.pathname === '/tienda' && 'bg-blue-700 text-white rounded'
          }`}
          to='/tienda'>
          Tienda
        </Link>
      </nav>
      <div className='container p-8 m-10'>
        <Outlet />
      </div>
    </header>
  )
}

export default Layout
