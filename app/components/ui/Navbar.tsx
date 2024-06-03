import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex justify-between px-36 py-4 bg-[#fafafb] overflow-hidden items-center'>
      <a href="#about"><img className='w-9' src="./white-icon.png" alt="versocia logo" /></a>
      <a href="#about" className='hover:text-gray-500 font-medium'>About</a> 
      <a href="#howwedoit" className='hover:text-gray-500 font-medium'>How we do it</a> 
      <a href="#testimonials" className='hover:text-gray-500 font-medium'>Testimonials</a> 
      <a href="#offer" className='hover:text-gray-500 font-medium'>Offer</a> 
      <a href="#contact" className='hover:text-gray-500 font-medium'>Contact</a> 
    </nav>
  )
}

export default Navbar