import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="card sticky border-2 bg-black p-7 rounded-lg shadow-md shadow-gray-800 mb-8 border-gray-800 z-10">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-500 text-2xl mt-4">{description}</p>
        </div>
    );
};

export default Card;