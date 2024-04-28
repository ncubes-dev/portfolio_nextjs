import { ServiceCard } from '../components/service-card'

const Services = () => {
  const my_data = [
    {
      topic: 'WEB',
      image: 'webdev',
      services: ['Development', 'Consultancy', 'Web to Android Conversions']
    },
    {
      topic: 'UI/UX',
      image: 'uiux',
      services: ['Design', 'Consultancy', 'Figma']
    },
    {
      topic: 'ANDROID',
      image: 'appdev',
      services: [
        'Development',
        'Consultancy',
        'Debugging',
        'Mobile to Web Conversions',
        'Migration to kotlin',
        'Updating',
        'Google Play'
      ]
    }
  ]
  return (
    <div>
      <div className='flex flex-col mt-2'>
        <div className='flex justify-center'>
          <span className='font-thin pr-3 text-3xl md:text-4xl text-center '>
            Our
          </span>
          <span className='font-bold text-mediumBlue text-3xl md:text-4xl text-center '>
            Services
          </span>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col items-top justify-between mx-auto container md:divide-x pt-5'>
        {my_data.map((data, key) => {
          return <ServiceCard data={data} />
        })}
      </div>
    </div>
  )
}

export default Services
