import React from 'react';
import SectionTag from './shared/SectionTag';
import { VeroTrustLogo, InsightsIcon, ArrowUpIcon, CubeIcon, CheckSpeechIcon, TargetIcon, ShieldIcon, WarningIcon } from './Icons';

const StepCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-gradient-to-br from-[#1C1C1C]/80 to-[#111111]/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm h-full flex flex-col group transition-all duration-300 hover:border-white/20">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        {children}
    </div>
);

const ServiceItem = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
    <div className="flex items-center gap-4 bg-[#222222]/50 p-3 rounded-lg border border-white/10 transition-colors duration-200 hover:bg-[#222222]">
        <div className="text-[#A3A3A3]">{icon}</div>
        <span className="text-white">{name}</span>
    </div>
);

const ReportVisualization = () => (
    <div className="bg-[#1C1C1C] rounded-lg border border-white/10 text-left text-sm text-[#A3A3A3] overflow-hidden h-full flex flex-col">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#222222]/50 border-b border-white/10 shrink-0">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 bg-[#FF5F56] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#FFBD2E] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#27C93F] rounded-full"></div>
            </div>
            <div className="text-xs text-white/50 font-mono">VERO_Report_v2.md</div>
        </div>
        
        <div className="p-3 overflow-y-auto space-y-3 text-xs flex-grow">
            <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#333"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#16a34a"
                            strokeWidth="1.5"
                            strokeDasharray="93, 100"
                            strokeLinecap="round"
                            transform="rotate(-90 18 18)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-base">93.0</span>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-white">Overall Score</h4>
                    <p className="text-gray-400">Strong performance.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white/80">Relevancy</span>
                        <span className="text-white/80">95%</span>
                    </div>
                    <div className="w-full bg-[#333] rounded-full h-1.5">
                        <div className="bg-green-600 h-1.5 rounded-full" style={{width: '95%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white/80">Precision</span>
                        <span className="text-white/80">98%</span>
                    </div>
                    <div className="w-full bg-[#333] rounded-full h-1.5">
                        <div className="bg-green-600 h-1.5 rounded-full" style={{width: '98%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white/80">Faithfulness</span>
                        <span className="text-white/80">91%</span>
                    </div>
                    <div className="w-full bg-[#333] rounded-full h-1.5">
                        <div className="bg-green-600 h-1.5 rounded-full" style={{width: '91%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white/80">Recall</span>
                        <span className="text-white/80">88%</span>
                    </div>
                    <div className="w-full bg-[#333] rounded-full h-1.5">
                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
                    </div>
                </div>
            </div>
            
            <div>
                 <h4 className="font-semibold text-white mt-2 mb-1 border-b border-white/10 pb-1">Key Findings</h4>
                 <ul className="text-gray-400 space-y-1 mt-2">
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>Excellent context precision (98%).</li>
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>High faithfulness & answer relevancy.</li>
                    <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold mt-0.5">!</span>Minor information recall gaps noted.</li>
                 </ul>
            </div>
        </div>
    </div>
);


const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center">
                    <SectionTag>CONNECT • CONFIGURE • VALIDATE • ANALYZE</SectionTag>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Simple Path to AI Trust</h2>
                    <p className="max-w-3xl text-lg text-[#A3A3A3] mb-16">
                        Our straightforward, four-step process to evaluate, monitor, and gain unparalleled confidence in your RAG pipelines.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StepCard title="Connect Your Pipeline">
                        <p className="text-[#A3A3A3] mb-6 flex-grow">Securely link your RAG model to the VERO platform using our developer-friendly API.</p>
                        <div className="w-full aspect-square bg-black/30 rounded-2xl flex items-center justify-center border border-white/10">
                            <div className="w-24 h-24 rounded-full bg-[#1C1C1C]/50 flex items-center justify-center border border-white/10 animate-pulse">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                     <VeroTrustLogo className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </StepCard>

                    <StepCard title="Configure Tests">
                        <p className="text-[#A3A3A3] mb-6">Select from our extensive library of pre-built tests or create custom evaluations.</p>
                        <div className="flex flex-col gap-3">
                            <ServiceItem icon={<CheckSpeechIcon />} name="Answer Relevancy" />
                            <ServiceItem icon={<TargetIcon />} name="Domain Alignment" />
                            <ServiceItem icon={<ShieldIcon />} name="Faithfulness" />
                            <ServiceItem icon={<WarningIcon />} name="Toxic Language" />
                            <ServiceItem icon={<InsightsIcon />} name="Custom Metrics" />
                        </div>
                    </StepCard>
                    
                    <StepCard title="Run Validation">
                        <p className="text-[#A3A3A3] mb-6 flex-grow">Initiate the evaluation process to analyze every aspect of your pipeline's performance.</p>
                        <div className="flex-grow flex flex-col items-center justify-center bg-black/30 rounded-2xl p-4 border border-white/10">
                             <div className="flex-grow flex items-center justify-center">
                                <CubeIcon className="w-20 h-20 text-white/20" />
                            </div>
                            <div className="w-full mt-4 flex items-center bg-[#222222]/70 p-2 rounded-full border border-white/10">
                                <input type="text" placeholder="Run validation..." className="bg-transparent text-gray-300 placeholder-[#888888] flex-grow focus:outline-none px-2 text-sm"/>
                                <button className="w-8 h-8 flex-shrink-0 bg-white/90 text-black rounded-full flex items-center justify-center hover:bg-white">
                                    <ArrowUpIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </StepCard>
                    
                    <StepCard title="Analyze Reports">
                        <p className="text-[#A3A3A3] mb-6">Receive detailed, stakeholder-ready reports with clear insights and recommendations.</p>
                        <div className="flex-grow">
                           <ReportVisualization />
                        </div>
                    </StepCard>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;