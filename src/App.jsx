import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tienda from './pages/Tienda'

function App() {
  return (
    <div className='h-screen dark:bg-stone-900 text-center py-4'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='tienda' element={<Tienda />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
