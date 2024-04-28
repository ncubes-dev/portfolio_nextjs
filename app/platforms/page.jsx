import { PlatformCard } from '../components/platform-card'

const Platforms = () => {
  const links = [
    {
      href: 'https://github.com/ncubes-dev',
      image: '/github.png',
      platform: 'Github'
    },
    {
      href: 'https://www.upwork.com/freelancers/~0131ebf2d330179145',
      image: '/upwork.png',
      platform: 'Upwork'
    },
    {
      href: 'https://www.youtube.com/@thencode8403',
      image: '/youtube.png',
      platform: 'Youtube Channel'
    }
  ]
  return (
    <div>
      <div className='flex flex-col mt-2 pt-5  md:mt-10'>
        <div className='flex justify-center'>
          <span className='font-thin pr-3 text-3xl md:text-4xl text-center  text-black'>
            Follow
          </span>
          <span className='font-bold text-mediumBlue text-3xl md:text-4xl text-center '>
            Me On
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center p-5 space-x-4'>
        {links.map((link, index) => {
          return <PlatformCard data={link} />
        })}
      </div>
    </div>
  )
}

export default Platforms
