import React, { useState } from 'react';
import { VeroTrustLogo, MenuIcon } from './Icons';

const NavLinks = () => (
    <>
        <a href="#features" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">Features</a>
        <a href="#how-it-works" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">How it Works</a>
        <a href="#reports" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">Reports</a>
        <a href="#easy-setup" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">Setup</a>
        <a href="#faq" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">FAQ</a>
    </>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/50 backdrop-blur-md">
            {/* ✅ Added 'relative' to make it a positioning context */}
            <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
                <a href="#" className="flex items-center gap-3">
                    <VeroTrustLogo />
                    <span className="text-white text-xl font-bold">VERO</span>
                </a>

                {/* ✅ Centered the nav links with absolute positioning */}
                <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <NavLinks />
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                     <a 
                        href="#easy-setup"
                        className="bg-transparent border border-white/40 text-white text-center font-semibold py-2 px-5 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        Install VERO
                    </a>
                    <a 
                        href="https://calendly.com/alakhagr/vero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                        Book Demo
                    </a>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-[#0D0D0D]/70 backdrop-blur-lg">
                    <nav className="flex flex-col items-center gap-6 py-8">
                        <NavLinks />
                        <div className="flex flex-col items-center gap-4 mt-4 w-full px-6">
                            <a href="#easy-setup" className="bg-transparent border border-white/40 text-white font-semibold py-2 px-6 rounded-full hover:bg-white/10 transition-all duration-300 w-full max-w-xs text-center">
                                Install VERO
                            </a>
                            <a 
                                href="https://calendly.com/vero-ai/demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors duration-200 w-full max-w-xs text-center">
                                Book Demo
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;