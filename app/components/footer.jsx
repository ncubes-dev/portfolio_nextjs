import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row w-full justify-between p-3'>
        <h6 className='text-white text-center'>Call/Whatsapp: +263784250787</h6>
        <h6 className='text-white text-center'>Email: ncubes1999@gmail.com</h6>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between w-full '>
        <h1 className='italic p-3 text-white text-sm '>
          ©2024 All Rights Reserved. Ncubesdev
        </h1>
        <div className='flex divide-x '>
          <Link className=' text-white italic text-sm p-3' href='/tsandcs'>
            Terms and Conditions
          </Link>
          <Link
            className=' text-white italic p-3 text-sm'
            href='/privacypolicy'
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
