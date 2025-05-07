import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white text-gray-800 shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between py-6 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <a href="#hero" className="hover:text-blue-800 transition">
                        SoftSell
                    </a>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6 text-lg font-medium">
                    <li>
                        <a href="#hero" className="hover:text-blue-600 transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#how-it-works" className="hover:text-blue-600 transition">
                            How It Works
                        </a>
                    </li>
                    <li>
                        <a href="#why-choose-us" className="hover:text-blue-600 transition">
                            Why Choose Us
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials" className="hover:text-blue-600 transition">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-600 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-gray-800 focus:outline-none"
                        onClick={() => {
                            const menu = document.getElementById('mobile-menu');
                            menu.classList.toggle('hidden');
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className="hidden bg-gray-100 text-gray-800 md:hidden flex flex-col space-y-4 py-4 px-6"
            >
                <a href="#hero" className="hover:text-blue-600 transition">
                    Home
                </a>
                <a href="#how-it-works" className="hover:text-blue-600 transition">
                    How It Works
                </a>
                <a href="#why-choose-us" className="hover:text-blue-600 transition">
                    Why Choose Us
                </a>
                <a href="#testimonials" className="hover:text-blue-600 transition">
                    Testimonials
                </a>
                <a href="#contact" className="hover:text-blue-600 transition">
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;