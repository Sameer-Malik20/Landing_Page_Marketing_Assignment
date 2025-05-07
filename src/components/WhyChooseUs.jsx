import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '🌟',
            title: 'Trusted Expertise',
            description: 'Our team has years of experience in software resale, ensuring you get the best value for your licenses.'
        },
        {
            icon: '💰',
            title: 'Competitive Pricing',
            description: 'We offer the most competitive prices in the market, maximizing your returns on unused licenses.'
        },
        {
            icon: '🔒',
            title: 'Secure Transactions',
            description: 'Your data security is our priority. We ensure all transactions are safe and confidential.'
        },
        {
            icon: '📞',
            title: '24/7 Support',
            description: 'Our dedicated support team is available around the clock to assist you with any inquiries.'
        }
    ];

    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-4xl mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;