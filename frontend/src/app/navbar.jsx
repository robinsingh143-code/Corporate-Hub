'use client';
import Link from 'next/link'
import { useState } from 'react'


export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
    {/* <div  className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
      <div className='ml-10 text-4xl text-left md:text-center lg:text-left font-bold uppercase '>
      <h1>corporate hub</h1>

      </div>
      <div className='ml-10 grid grid-cols-1 lg:grid-cols-2 gap-2 text-xl'>
      <h1 className='sm:text-left md:text-center '>robinsingh6997@gamil.com</h1>
      <h1 className='sm:text-left md:text-center'>8707387489</h1>

      </div>
      
      
    </div> */}

    
      <nav className='bg-slate-500 flex items-center  flex-wrap px-2 md:px-6'>
      <Link href="/">
              <img className='h-[30px] ' src="data:image/png;base64,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" alt="img" />
              </Link>
        <button
          className='inline-flex p-3 rounded lg:hidden ml-auto outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? 'bg-slate-300 rounded-xl ' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col  lg:h-auto'>
              <Link
               href="/"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-700'>
                 Home
              </Link>
              <Link 
              href="/manageuser"
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-700'>
                manageuser
              </Link>
              

              <Link
               href="/about"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-700'>
                About us
            </Link>

              <Link
               href="/contactus"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-700'>
                Contact us
              </Link>
              <Link
               href="/signin"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 bg-blue-500 rounded-lg items-center justify-center hover:bg-blue-700'>
                Sign In
              </Link>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
