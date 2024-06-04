import React, { useState, useEffect } from 'react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const navItems = ['About', 'How we do it', 'Testimonials', 'Offer', 'Contact'];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const [clickedItem, setClickedItem] = useState<string | null>(null);
    const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

    useEffect(() => {
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    }, [redirectUrl]);

    if (!isOpen) return null;

    const getItemHref = (item: string): string => {
        return `#${item.toLowerCase().replace(/\s/g, '')}`;
    };

    const handleItemClick = (item: string, href: string) => {
        setClickedItem(item);
        setTimeout(() => {
            setClickedItem(null);
            setRedirectUrl(href);
            onClose();
        }, 500);
    };

    const renderNavItem = (item: string): React.ReactElement => {
        const isClicked = clickedItem === item;
        const href = getItemHref(item);

        return (
            <a
                key={item}
                href={href}
                className='text-2xl font-semibold relative overflow-hidden group'
                onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item, href);
                }}
            >
                {item}
                <div
                    className={`
                        absolute left-0 bottom-0 h-0.5 bg-black transition-all duration-500 ease-in-out
                        ${isClicked ? 'w-full' : 'w-0'}
                    `}
                ></div>
            </a>
        );
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div
                className="absolute inset-0 bg-gray-500 bg-opacity-75"
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
                            className='w-12 transition-transform duration-700 ease-in-out group-hover:rotate-[720deg]'
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