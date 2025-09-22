import React from 'react';
// Make sure this path is correct based on your folder structure
import heroImage from './heroImage.jpg'; 

const HeroBackground: React.FC = () => {
    return (
        <div
            className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* The SVG code is replaced by this styled div */}
        </div>
    );
};

export default HeroBackground;