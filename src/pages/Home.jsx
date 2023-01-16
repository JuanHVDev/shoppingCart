import { Link } from 'react-router-dom'
import foto from '../assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg'

const Home = () => {
  return (
    <main className='bg-indigo-600 text-gris'>
      <section class='flex'>
        <div class='text-center w-5/12 m-auto'>
          <h1 className='text-6xl'>
            Shopper Cart
            <span className='block text-2xl w-72 mt-5 m-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </h1>

          <button className='mt-10 bg-white text-indigo-700 w-40 p-2 rounded-3xl hover:scale-110'>
            <Link className='' to='/tienda'>
              Buy
            </Link>
          </button>
        </div>
        <figure className='w-7/12'>
          <img
            className='h-[86vh] w-full'
            src={foto}
            alt='
  '
          />
        </figure>
      </section>
    </main>
  )
}

export default Home
