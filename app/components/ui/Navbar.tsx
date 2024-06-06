"use client"
import React, { useState } from 'react';
import Sidebar from './Sidebar';

type NavItem = 'About' | 'How we do it' | 'Offer' | 'Testimonials' | 'Contact';
const navItems: NavItem[] = ['About', 'How we do it', 'Testimonials', 'Offer', 'Contact'];

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleSidebar = (): void => setIsSidebarOpen(!isSidebarOpen);
  const getItemHref = (item: NavItem): string => `#${item.toLowerCase().replace(/\s/g, '')}`;

  return (
    <nav className='sticky top-0 z-50'>
      <div className='sm:hidden flex justify-between items-center p-4 bg-[#fafafb]'>
        <a href="#hero">
          <img className='w-9' src="./white-icon.png" alt="versocia logo" />
        </a>
        <button onClick={toggleSidebar} className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </div>
      <div className='sm:flex hidden justify-between px-36 py-4 bg-[#fafafb] overflow-hidden items-center z-50 top-0 sticky'>
        <a href="#hero">
          <img className='w-9' src="./white-icon.png" alt="versocia logo" />
        </a>
        {navItems.map((item, index) => (
          <a
            key={item}
            href={getItemHref(item)}
            className='font-medium relative group'
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span
              className="transition-transform duration-500 ease-in-out inline-block"
              style={{
                transform: hoveredItem === index ? 'rotateX(-90deg)' : 'rotateX(0)',
                transformOrigin: 'bottom center',
                backfaceVisibility: 'hidden',
              }}
            >
              {item}
            </span>
            <span
              className="absolute top-0 left-0 transition-transform duration-500 ease-in-out opacity-0 text-black inline-block"
              style={{
                transform: hoveredItem === index ? 'rotateX(0)' : 'rotateX(-90deg)',
                transformOrigin: 'top center',
                backfaceVisibility: 'hidden',
                opacity: hoveredItem === index ? 1 : 0
              }}
            >
              {item}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;