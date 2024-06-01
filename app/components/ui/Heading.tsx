import React from 'react';
import FadeInUp from '../FadeInUp';

interface HeadingProps {
    label: React.ReactNode | string;
}

const Heading: React.FC<HeadingProps> = ({ label }) => {
    return (
        <>
            <FadeInUp>
                <div className="font-bold sm:text-6xl text-5xl py-8">
                    {label}
                </div>
            </FadeInUp>
        </>
    );
};

export default Heading;