import React from 'react';

// Define the props interface
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

// Define the array of navigation items
const navItems: string[] = ['About', 'How we do it', 'Testimonials', 'Offer', 'Contact'];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Function to convert item text to URL-friendly format
    const getItemHref = (item: string): string => {
        return `#${item.toLowerCase().replace(/\s/g, '')}`;
    };

    // Function to render each navigation item
    const renderNavItem = (item: string): React.ReactElement => {
        return (
            <a
                key={item}
                href={getItemHref(item)}
                className='text-2xl font-semibold relative overflow-hidden group'
                onClick={onClose}
            >
                <span className="transition-transform duration-500 ease-in-out group-hover:-translate-y-full inline-block">
                    {item}
                </span>
                <span className="absolute left-0 top-full transition-transform duration-500 ease-in-out group-hover:-translate-y-full inline-block text-black">
                    {item}
                </span>
            </a>
        );
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={onClose}
                role="button"
                aria-label="Close sidebar"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onClose()}
            />
            <nav className="fixed top-0 right-0 w-full h-full bg-white p-6 pt-12 transform transition-transform duration-300 ease-in-out translate-x-0 shadow-xl">
                <div className="flex justify-between items-center mb-12">
                    <a href="#about" className="group">
                        <img
                            className='w-12 transition-transform duration-300 ease-in-out group-hover:rotate-[360deg]'
                            src="./white-icon.png"
                            alt="versocia logo"
                        />
                    </a>
                    <button
                        onClick={onClose}
                        className="p-2 transition-transform duration-300 ease-in-out hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                        aria-label="Close sidebar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col space-y-12 text-left pl-6 pt-6">
                    {navItems.map(renderNavItem)}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;