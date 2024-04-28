import Image from 'next/image'
export const ServiceCard = props => {
  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row  w-full m-3 md:justify-between p-2 h-auto'>
        <div className=' flex  max-w-sm  flex-col p-2 h-200 '>
          <div className='flex space-x-2 items-center'>
            <Image
              className='block  w-18 h-18'
              width={30}
              height={30}
              src='/arrow.png'
              alt='arrow'
            />
            <h1 className='font-bold text-mediumBlue text-xl '>
              {props.data.topic}
            </h1>
          </div>
          {props.data.services.map((service, index) => {
            return (
              <ul className='pl-8' key={index}>
                <div className='flex space-x-2 items-center'>
                  <Image
                    className='block '
                    width={20}
                    height={20}
                    src='/checklist.png'
                    alt='checklist'
                  />
                  <li className='pr-4  text-black'>{service}</li>
                </div>
              </ul>
            )
          })}
        </div>
        <div className='w-full flex container mx-auto justify-center md:bg-white bg-veryLightBlue rounded-xl h-32'>
          <Image
            className='block h-32 w-32 p-2 p'
            width={512}
            height={512}
            src={`/${props.data.image}.png`}
            alt={`/${props.data.topic}`}
          />
        </div>
      </div>
    </div>
  )
}
