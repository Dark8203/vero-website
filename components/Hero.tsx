import React, { useState, useEffect } from 'react';

const FORMSPARK_ACTION_URL = "https://submit-form.com/tWxjNTekk";

// A dedicated component for the Calendly widget
const CalendlyWidget = () => {
    // useEffect is used to load the external script when the component mounts
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        
        // Append the script to the document body
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // The empty dependency array ensures this runs only once

    return (
        // This is the div the Calendly script will target
        <div 
            className="calendly-inline-widget w-full" 
            data-url="https://calendly.com/alakhagr/vero?hide_event_type_details=1" 
            style={{ minWidth: '320px', height: '700px' }}
        >
        </div>
    );
};


// const TrustIndicator = ({ children }: { children: React.ReactNode }) => (
//     <div className="flex items-center gap-2 text-sm text-[#888888]">
//         <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="4" cy="4" r="4" fill="#E0E0E0"/>
//         </svg>
//         <span>{children}</span>
//     </div>
// );

const TrustIndicator = ({ children }: { children: React.ReactNode }) => (
    <div className="border border-white/20 rounded-md px-4 py-1 text-sm font-semibold text-white/80 bg-white/5 hover:bg-white/10 transition-all duration-300">
        <span>{children}</span>
    </div>
);

const Hero: React.FC = () => {
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
            setEmail('');
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-12 overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="inline-block bg-[#1C1C1C]/50 border border-white/10 rounded-full px-4 py-1 text-sm text-[#E0E0E0] mb-6 backdrop-blur-sm">
                        🚀 Building the future of trust in AI
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight tracking-tight">
                        Make your AI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 [-webkit-background-clip:text] [background-clip:text] px-0.5"> <span className="inline-block pr-2 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"> Enterprise</span> Grade</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#A3A3A3] mt-6 max-w-3xl">
                        Test your AI, like production will
                    </p>
                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 mt-6 px-6 py-4 bg-slate-800/50 rounded-lg border border-slate-600/30"> */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 mt-6 px-6 py-4 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-800/40">
  <div className="text-center">
    <div className="text-gray-200 font-semibold text-m mb-1">DETECT</div>
    <div className="text-gray-400 text-s">Performance Issues</div>
  </div>
  <div className="text-center">
    <div className="text-gray-200 font-semibold text-m mb-1">EXPLAIN</div>
    <div className="text-gray-400 text-s">Root Cause Analysis</div>
  </div>
  <div className="text-center">
    <div className="text-gray-200 font-semibold text-m mb-1">PREVENT</div>
    <div className="text-gray-400 text-s">Production Failures</div>
  </div>
</div>

                    <div className="mt-10 flex w-full max-w-xs flex-col gap-4 sm:w-auto sm:max-w-none">
                    <a 
                        href="https://calendly.com/alakhagr/vero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-center"
                    >
                        Book a quick 15 min demo
                    </a>
                    <div className="grid grid-cols-2 gap-4">
                        <a 
                            href="#easy-setup"
                            className="bg-transparent border border-white/40 text-white font-semibold text-center py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Install VERO
                        </a>
                        <a 
                            href="#whatweprovide"
                            className="bg-transparent border border-white/40 text-white font-semibold text-center py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Join Waitlist
                        </a>
                    </div>
                </div>

                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 mt-6">
                        <TrustIndicator>Early access priority</TrustIndicator>
                        <TrustIndicator>Customized metrics for your domain</TrustIndicator>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Hero;