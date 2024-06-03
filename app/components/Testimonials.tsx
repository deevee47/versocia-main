import React from 'react'
import Heading from './ui/Heading'

const Testimonials = () => {
  return (
    <div id='testimonials' className='pt-44 h-screen flex flex-col justify-center items-center bg-black text-white sm:px-20'>
      <span className='text-left w-full'><Heading label={'Moments of Trust'} /></span>
          <img src="./testimonials.png" alt="Versocia Customer Reviews/Testimonials" />
    </div>
  )
}

export default Testimonials
