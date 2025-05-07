import React from 'react';
import uploadIcon from '../assets/upload-icon.svg';
import valuationIcon from '../assets/valuation_icon.svg';
import paymentIcon from '../assets/payment_icon.svg';

const HowItWorks = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="step bg-white shadow-lg rounded-lg p-6 m-4">
                        <img src={uploadIcon} alt="Upload License" className="mx-auto mb-4 w-16 h-16" />
                        <h3 className="text-xl font-semibold text-blue-600">Upload License</h3>
                        <p className="text-gray-600">Start by uploading your software license to our platform.</p>
                    </div>
                    <div className="step bg-white shadow-lg rounded-lg p-6 m-4">
                        <img src={valuationIcon} alt="Get Valuation" className="mx-auto mb-4 w-16 h-16" />
                        <h3 className="text-xl font-semibold text-blue-600">Get Valuation</h3>
                        <p className="text-gray-600">Receive a fair market valuation for your license quickly.</p>
                    </div>
                    <div className="step bg-white shadow-lg rounded-lg p-6 m-4">
                        <img src={paymentIcon} alt="Get Paid" className="mx-auto mb-4 w-16 h-16" />
                        <h3 className="text-xl font-semibold text-blue-600">Get Paid</h3>
                        <p className="text-gray-600">Once you accept the offer, get paid instantly!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;