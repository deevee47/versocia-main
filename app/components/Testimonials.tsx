import React from 'react'
import Heading from './ui/Heading'

const Testimonials = () => {
  return (
    <div id='testimonials' className=' py-16  flex flex-col justify-center items-center bg-black text-white sm:px-20'>
      <span className='text-left w-full'><Heading label={'Moments of Trust'} /></span>
      <img loading="lazy" src="./testimonials.png" alt="Versocia Customer Reviews/Testimonials" />
    </div>
  )
}

export default Testimonials
