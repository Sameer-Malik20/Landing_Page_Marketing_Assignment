import React, { useState } from 'react';
import robotIcon from '../assets/image.png'; // Add a robot icon image in the assets folder
import closeIcon from '../assets/close-icon.svg'; // Add a close icon image in the assets folder

const ChatWidget = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false); // For toggling the chat widget

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages([...messages, userMessage]);
            setInput('');

            // Simulate AI response
            setTimeout(() => {
                const botResponse = getBotResponse(input);
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000);
        }
    };

    const getBotResponse = (userInput) => {
        const responses = {
            'How do I sell my license?': { text: 'You can sell your license by uploading it on our platform and getting a valuation.', sender: 'bot' },
            'What types of licenses can I sell?': { text: 'You can sell software licenses, game licenses, and more. Check our website for details.', sender: 'bot' },
            'How long does it take to get paid?': { text: 'Once the valuation is done, you will receive payment within 3-5 business days.', sender: 'bot' },
        };
        return responses[userInput] || { text: 'I am sorry, I do not understand that question.', sender: 'bot' };
    };

    return (
        <div className="fixed bottom-4 right-4">
            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition flex items-center justify-center w-16 h-16"
            >
                {isOpen ? (
                    <img src={closeIcon} alt="Close" className="w-6 h-6" />
                ) : (
                    <img src={robotIcon} alt="Chat" className="w-8 h-8" />
                )}
            </button>

            {/* Chat Widget */}
            {isOpen && (
                <div className="bg-white shadow-lg rounded-lg p-4 w-80 sm:w-64 md:w-80 mt-4 max-h-[80vh]">
                    <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center">
                        <img src={robotIcon} alt="Robot" className="w-6 h-6 mr-2" />
                        Chat with Us
                    </h3>
                    <div className="h-64 sm:h-48 overflow-y-auto border border-gray-300 rounded-lg p-2">
                        {messages.length === 0 ? (
                            <p className="text-gray-500 text-center">Ask us anything!</p>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`my-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.sender === 'bot' && (
                                        <img
                                            src={robotIcon}
                                            alt="Robot"
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                    )}
                                    <div
                                        className={`inline-block p-2 rounded-lg ${
                                            msg.sender === 'user'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 text-black'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="flex mt-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="border border-gray-300 rounded-l-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600 transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;