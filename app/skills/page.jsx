import Image from 'next/image'

const Skills = () => {
  return (
    <div>
      <div className='flex flex-col justify-center mt-10 pt-5'>
        <h1 className='md:hidden font-thin text-mediumBlue text-3xl md:text-4xl text-center '>
          My
        </h1>
        <span className='hidden md:block font-thin pr-3 text-3xl md:text-4xl text-center '>
          My
        </span>
        <span className='font-bold text-mediumBlue text-3xl md:text-4xl text-center '>
          Skills & Experiences
        </span>
      </div>
      <div className='flex md:divide-none divide-y-2 flex-col md:flex-row justify-center items-center pt-2 space-x-3 space-y-3'>
        {/* first */}
        <div className='flex  md:justify-between max-w-sm flex-col p-5 h-200'>
          <div className='flex space-x-2 items-center'>
            <Image
              className='block  w-18 h-18'
              width={30}
              height={30}
              src='/checklist.png'
              alt='checklist'
            />
            <h1 className='font-bold text-mediumBlue text-xl '>Android Dev</h1>
          </div>
          <p className='prose pt-3 hover:text-bold '>
            I am a native Android developer with experience building and
            optimizing mobile applications. I have published various mobile apps
            on the Google Play store and have extensive experience with Android
            development tools such as Android Studio, Firebase, Google Maps etc.
          </p>
        </div>

        {/* center */}

        <div className='flex  md:justify-between max-w-sm flex-col p-5 h-200 '>
          <div className='flex space-x-2 items-center'>
            <Image
              className='block  w-18 h-18'
              width={30}
              height={30}
              src='/checklist.png'
              alt='checklist'
            />
            <h1 className='font-bold text-mediumBlue text-xl '>
              Web Development
            </h1>
          </div>
          <p className=' pt-3 hover:text-bold'>
            I am a NextJs frontend web developer with experience in building and
            optimizing responsive high quality applications. I have published a
            number of apps including this portfolio website.
          </p>
        </div>
        {/* last */}
        <div className=' flex  max-w-sm  flex-col p-5 h-200 '>
          <div className='flex space-x-2 items-center'>
            <Image
              className='block  w-18 h-18'
              width={30}
              height={30}
              src='/checklist.png'
              alt='checklist'
            />
            <h1 className='font-bold text-mediumBlue text-xl '>UI/UX Design</h1>
          </div>
          <p className=' pt-3 hover:text-bold  '>
            I am a UI/UX designer with experience web design and mobile design .
            I have extensive experience in app design using technologies like
            figma and I am also well familiar with various sources of icons and
            lottie animations which can make apps look nicer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
