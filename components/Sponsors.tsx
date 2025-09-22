import React from 'react';
import { GithubIcon } from './Icons';

const SponsorLogo = ({ name, children }: { name: string, children: React.ReactNode }) => (
    <div className="flex items-center gap-2 text-[#888888] hover:text-white transition-colors duration-200">
        {children}
        <span className="font-medium">{name}</span>
    </div>
);

const Sponsors: React.FC = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
                    <SponsorLogo name="Google">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.7,18.35 21.7,12.33C21.7,11.7 21.52,11.1 21.35,11.1Z" /></svg>
                    </SponsorLogo>
                    <SponsorLogo name="Brave">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4L19,7.5V12C19,13.67 17.5,16.5 12,19.5C6.5,16.5 5,13.67 5,12V7.5L12,4M12,5.91L7,8.61V12C7,13 8.33,15.17 12,17.5C15.67,15.17 17,13 17,12V8.61L12,5.91Z" /></svg>
                    </SponsorLogo>
                    <SponsorLogo name="Alchemy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7V17L12 22L22 17V7L12 2M4.5 8.25L12 12.55L19.5 8.25L12 4L4.5 8.25M17.91 10.2L12 13.5L6.09 10.2L4.5 11.08L12 15.37L19.5 11.08L17.91 10.2Z" /></svg>
                    </SponsorLogo>
                     <SponsorLogo name="GitHub">
                        <GithubIcon />
                    </SponsorLogo>
                     <SponsorLogo name="Solana">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.17,4.32L4.54,4.86C5.17,5.09 5.37,5.85 5,6.4L2.83,9.65C2.46,10.2 1.63,10.15 1.25,9.58L.42,8.2C-.03,7.55 0,6.67 0.63,6.33L3.17,4.32M19.46,6.4L18.91,4.54C18.68,3.91 17.92,3.71 17.37,4.1L14.22,6.27C13.67,6.64 13.72,7.47 14.19,7.85L15.57,8.68C16.12,9.13 17,9.03 17.35,8.38L19.46,6.4M5,17.6L6.4,19.46C6.63,19.79 7.04,20 7.5,20H7.5A0.5,0.5 0 0,0 8,19.5V19.5C8,19 7.63,18.5 7.09,18.17L5,17.6M18.14,15.8L15.69,17.64C15.06,18.08 14.86,18.91 15.2,19.5L17,22.05C17.3,22.6 18.03,22.71 18.59,22.4L20.8,20.89C21.36,20.5 21.5,19.67 21.13,19.1L19.27,16.4C18.9,15.83 18.14,15.8 18.14,15.8M9.62,9.33L8.25,8.87C7.62,8.64 7.42,7.88 7.77,7.33L9.94,4.08C10.31,3.53 11.14,3.58 11.5,4.15L12.33,5.53C12.78,6.18 12.68,7.06 12.05,7.4L9.62,9.33Z" /></svg>
                    </SponsorLogo>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;