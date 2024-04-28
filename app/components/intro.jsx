import Link from 'next/link'
const Intro = () => {
  return (
    <div>
      <div className='flex flex-col justify-items-center'>
        <h1 className='  text-4xl md:text-6xl text-center'>Hi! I Am{'.'}</h1>
        <h1 className='font-bold text-mediumBlue text-3xl md:text-4xl text-center p-2 '>
          Themba Ncube
        </h1>
        <div className='flex justify-center'>
          <p className='text-sm md:text-xl md:w-3/4 text-center p-4 justify-center'>
            I am am expert level native Android Developer and Web Developer with
            high level of experience in App designing and development, producing
            Quality and maintainable Apps.
          </p>
        </div>
        <div className='flex justify-center space-x-3'>
          <Link
            href='/contacts'
            className=' bg-mediumBlue text-white hover:bg-darkBlue p-2 px-3 text-sm rounded-full shadow-lg  shadow-lightBlue w-28 pt-4 mt-5 text-center'
          >
            Hire me
          </Link>
          <Link
            href='https://www.upwork.com/freelancers/~0131ebf2d330179145'
            className='p-2 px-3 text-sm items-center text-center hover:border-darkBlue border-2 rounded-full border-veryLightBlue w-28 pt-4 mt-5'
          >
            Repo
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Intro
