'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false)
  function handleClick () {
    setIsToggled(!isToggled)
  }

  return (
    <div className='relative  flex items-center justify-between w-full'>
      {isToggled && (
        <div className='md:hidden absolute bg-mediumBlue flex flex-col top-0 right-0 mt-10 mr-10'>
          <Link
            onClick={handleClick}
            className='p-2 text-white hover:bg-darkBlue'
            href='/'
          >
            Home
          </Link>
          <Link
            onClick={handleClick}
            className='p-2 text-white hover:bg-darkBlue'
            href='/skills'
          >
            Skills
          </Link>
          <Link
            onClick={handleClick}
            className='p-2 text-white  hover:bg-darkBlue'
            href='/services'
          >
            Services
          </Link>
          <Link
            onClick={handleClick}
            className='p-2 text-white hover:bg-darkBlue'
            href='/platforms'
          >
            Platforms
          </Link>
          <Link
            onClick={handleClick}
            className='p-2 text-white hover:bg-darkBlue'
            href='/contacts'
          >
            Contact Us
          </Link>
        </div>
      )}
      <div className='flex flex-row items-center  '>
        <div className='rounded-full bg-mediumBlue px-2 '>
          <h1 className='pt-0 text-white font-extrabold text-4xl md:text-4xl'>
            N
          </h1>
        </div>
        <h1 className=' text-black hidden md:flex pt-0 font-extrabold text-3xl md:text-4xl'>
          cubedev
        </h1>
      </div>
      <div>
        <div className='px-4 hidden md:flex'>
          <Link
            className=' text-black p-2 rounded-full hover:bg-veryLightBlue'
            href='/'
          >
            Home
          </Link>
          <Link
            className='p-2 text-black rounded-full hover:bg-veryLightBlue'
            href='/skills'
          >
            Skills
          </Link>
          <Link
            className='p-2 rounded-full text-black hover:bg-veryLightBlue'
            href='/services'
          >
            Services
          </Link>
          <Link
            className='p-2 text-black rounded-full hover:bg-veryLightBlue'
            href='/platforms'
          >
            Platforms
          </Link>
          <Link
            href='/contacts'
            className='hidden md:block bg-mediumBlue text-white hover:bg-darkBlue p-2 px-3 text-sm rounded-full shadow-lg shadow-lightBlue'
          >
            Contact Us
          </Link>
        </div>
        <button onClick={handleClick} className='block md:hidden p-2 px-3 '>
          <Image
            src={isToggled ? '/close.png' : '/menu.png'}
            alt={isToggled ? 'close' : 'menu'}
            width={30}
            height={30}
            className='bg-veryLightBlue p-1 rounded-md'
          />
        </button>
      </div>
    </div>
  )
}

export default Navbar
