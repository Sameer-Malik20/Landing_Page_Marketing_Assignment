import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Unlock the Value of Your Software Licenses</h1>
            <p className="text-lg mb-6">Sell your unused software licenses effortlessly and get paid quickly.</p>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Get a Quote
            </a>
        </div>
    );
};

export default HeroSection;