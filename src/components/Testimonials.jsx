import React from 'react';

const testimonials = [
    {
        name: "John Doe",
        role: "Software Engineer",
        company: "Tech Innovations",
        review: "SoftSell made the process of selling my software licenses incredibly easy and straightforward. Highly recommend!"
    },
    {
        name: "Jane Smith",
        role: "Product Manager",
        company: "Creative Solutions",
        review: "The valuation I received was fair and the payment was prompt. A great experience overall!"
    }
];

const Testimonials = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">"{testimonial.review}"</p>
                            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-500">{testimonial.role} at {testimonial.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;