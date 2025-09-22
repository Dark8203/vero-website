import React from 'react';
import SectionTag from './shared/SectionTag';
import { LightningIcon, InsightsIcon, VersionControlIcon } from './Icons';

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <div className="relative bg-gradient-to-br from-[#1C1C1C]/80 to-[#111111]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:scale-105 group">
        <div className="absolute -inset-px bg-gradient-to-r from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
            <div className="mb-4 w-12 h-12 bg-[#222222] border border-white/10 rounded-lg flex items-center justify-center text-white">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-[#A3A3A3]">{children}</p>
        </div>
    </div>
);

const WhatIs: React.FC = () => {
    return (
        <section id="features" className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center">
                    <SectionTag>WHY CHOOSE VERO?</SectionTag>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive evaluation and monitoring</h2>
                    <p className="max-w-3xl text-lg text-[#A3A3A3] mb-16">
                        Comprehensive evaluation and monitoring for RAG pipelines with enterprise-grade reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <FeatureCard icon={<LightningIcon />} title="Lightning Fast Reports">
                        Get comprehensive evaluation reports in hours, not days. Our optimized engine delivers insights when you need them most.
                    </FeatureCard>
                    <FeatureCard icon={<InsightsIcon />} title="End-to-End Insights">
                        Detailed reports specialized for developers, product managers, and stakeholders. Everyone gets the data they need.
                    </FeatureCard>
                    <FeatureCard icon={<VersionControlIcon />} title="Version Control">
                        Track changes and compare performance over time with robust version control for your RAG pipeline configurations.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default WhatIs;