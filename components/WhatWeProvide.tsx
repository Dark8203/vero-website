import React from 'react';
import { useState } from 'react';
import SectionTag from './shared/SectionTag';

const FORMSPARK_ACTION_URL = "https://submit-form.com/tWxjNTekk";

const WhatWeProvide: React.FC = () => {
    const [email, setEmail] = useState('');
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [message, setMessage] = useState('');
    
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitting(true);
            setMessage('');
    
            try {
                await fetch(FORMSPARK_ACTION_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({ email: email }),
                });
                setMessage('Success! You have been added to the waitlist.');
                setEmail(''); // Clear input after successful submission
            } catch (error) {
                setMessage('Something went wrong. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        };

    return (
        <section id='whatweprovide' className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center">
                    <SectionTag>GET STARTED</SectionTag>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stop guessing... <br/> Start proving your AI works</h2>
                    <p className="max-w-3xl text-lg text-[#A3A3A3] mb-10">
                        Join early access to catch failures fast and run your first evaluation in minutes.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-10 w-full max-w-lg">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow w-full px-5 py-3 bg-[#1C1C1C] border border-white/10 rounded-full text-white placeholder-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-white/50 transition-shadow"
                        />
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100"
                        >
                            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </div>
                    {message && <p className="mt-4 text-sm text-white/80">{message}</p>}
                </form>
                </div>
            </div>
        </section>
    );
};

export default WhatWeProvide;