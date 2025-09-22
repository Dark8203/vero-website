import React from 'react';
import { VeroTrustLogo } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                         <VeroTrustLogo />
                        <span className="text-white text-xl font-bold">VERO</span>
                    </div>
                    <div className="text-center md:text-right text-[#888888]">
                        <p>&copy; {new Date().getFullYear()} VERO. All rights reserved.</p>
                        <p className="text-sm">Building the future of trust in AI.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;