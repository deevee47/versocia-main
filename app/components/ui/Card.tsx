import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="card border-2 m-4 sticky bg-black p-6 rounded-lg shadow-md shadow-gray-800 mb-4 border-gray-800">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-500 text-xl mt-2">{description}</p>
        </div>
    );
};

export default Card;