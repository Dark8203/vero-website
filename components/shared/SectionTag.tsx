import React from 'react';

interface SectionTagProps {
    icon?: React.ReactNode;
    children: React.ReactNode;
}

const SectionTag: React.FC<SectionTagProps> = ({ icon, children }) => {
    return (
        <div className="inline-flex items-center gap-2 bg-[#1C1C1C]/50 border border-white/10 rounded-full px-4 py-1 text-sm text-[#E0E0E0] mb-6">
            {icon}
            <span>{children}</span>
        </div>
    );
};

export default SectionTag;