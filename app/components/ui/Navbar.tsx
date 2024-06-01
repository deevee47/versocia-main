import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex justify-evenly mx-20 py-4 bg-[#fafafb] overflow-hidden items-center'>
      <a href="#about"><div><img className='w-9' src="./white-icon.png" alt="versocia logo" /></div></a>
      <a href="#about"><div className='hover:text-gray-500 font-medium'>About</div></a> 
      <a href="#howwedoit"><div className='hover:text-gray-500 font-medium'>How we do it</div></a> 
      <a href="#offer"><div className='hover:text-gray-500 font-medium'>Offer</div></a> 
      <a href="#contact"><div className='hover:text-gray-500 font-medium'>Contact</div></a> 
    </nav>
  )
}

export default Navbar