import Image from 'next/image'
const Images = () => {
  return (
    <div>
      <div className='relative '>
        {/*//hidden md:block */}
        <Image
          src='/Vector2.png'
          className='absolute top-0 left-0 hidden md:block'
          width={500}
          height={500}
          alt='Background Image'
        />
        <Image
          src='/man2.png'
          className='md:absolute top-0 left-0 md:mb-40 md:mr-40 -mt-16'
          width={500}
          height={500}
          alt='Foreground'
        />
        <Image
          src='/Vector1.png'
          width={500}
          height={500}
          alt='Background Image'
          className='hidden md:block'
        />
      </div>
    </div>
  )
}
export default Images
