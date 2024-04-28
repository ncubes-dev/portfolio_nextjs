import React from 'react'
import Navbar from './navbar'

const header = () => {
  return (
    <div className='container mx-auto flex justify-between p-3 md:p-5 '>
      <Navbar />
    </div>
  )
}

export default header
