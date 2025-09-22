import React from 'react';
import SectionTag from './shared/SectionTag';
import { WarningIcon } from './Icons';

const MetricBar = ({ label, percentage, color }: { label: string, percentage: number, color: string }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-white/80 text-sm">{label}</span>
            <span className="text-white/80 text-sm">{percentage}%</span>
        </div>
        <div className="w-full bg-[#333] rounded-full h-2">
            <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const QualitativeMetric = ({ label, value, color }: { label: string, value: string, color: string }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-white/80 text-sm">{label}</span>
            <span className={`font-semibold text-sm ${color}`}>{value}</span>
        </div>
        <div className="h-2" />
    </div>
);

const ScoreCard = () => (
    <div className="bg-gradient-to-br from-[#1C1C1C]/80 to-[#111111]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex items-center gap-6 shrink-0 text-center lg:text-left">
                <div className="relative w-28 h-28">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            strokeDasharray="87, 100"
                            strokeLinecap="round"
                            transform="rotate(-90 18 18)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">87.0</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-white">Overall Score</h3>
                    <p className="text-gray-400">Good performance.</p>
                </div>
            </div>

            <div className="w-full lg:w-px lg:h-36 bg-white/10 self-stretch"></div>
            
            <div className="flex-grow w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Retriever</h4>
                    <MetricBar label="Context Sufficiency" percentage={93} color="bg-green-600" />
                    <MetricBar label="Recall Score" percentage={88} color="bg-yellow-500" />
                    <MetricBar label="Chunking Strategy" percentage={89} color="bg-yellow-500" />
                    <MetricBar label="Domain Accuracy" percentage={82} color="bg-yellow-500" />
                </div>
                
                <div className="space-y-4">
                     <h4 className="text-lg font-semibold text-white">Reranker</h4>
                    <QualitativeMetric label="MRR" value="High" color="text-green-400" />
                    <QualitativeMetric label="MAP" value="High" color="text-green-400" />
                    <QualitativeMetric label="NDCG" value="High" color="text-green-400" />
                    <div className="h-8" />
                </div>

                <div className="space-y-4">
                     <h4 className="text-lg font-semibold text-white">Generation</h4>
                    <MetricBar label="Relevancy" percentage={94} color="bg-green-600" />
                    <MetricBar label="Faithfulness" percentage={91} color="bg-green-600" />
                    <MetricBar label="Factual Accuracy" percentage={95} color="bg-green-600" />
                    <QualitativeMetric label="Hallucination" value="Low" color="text-green-400" />
                </div>
            </div>
        </div>
    </div>
);

const KeyFindings = () => (
    <div>
        <h3 className="text-xl font-semibold text-white mb-4">Key Findings</h3>
        <ul className="text-gray-400 space-y-3 text-sm">
            <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 shrink-0">✓</span>
                <span><strong>Excellent Context Precision (98%):</strong> The pipeline consistently retrieves highly relevant and accurate information.</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 shrink-0">✓</span>
                <span><strong>High Faithfulness & Relevancy:</strong> Generated answers are well-grounded in the provided context and directly address user queries.</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold mt-1 shrink-0">!</span>
                <span><strong>Opportunity in Domain Alignment:</strong> While recall is strong, there's an opportunity to improve the retrieval of nuanced, domain-specific information, suggesting an area for embedding refinement.</span>
            </li>
        </ul>
    </div>
);


const BarChart = () => (
    <div className="flex justify-around items-stretch h-56 pt-4 px-2 space-x-2">
        {['Relevancy', 'Precision', 'Domain Alignment'].map((metric, i) => {
            const before = [82, 85, 75][i];
            const after = [95, 98, 88][i];
            const isImproved = metric === 'Domain Alignment';
            const afterColor = isImproved
                ? 'from-yellow-500 to-yellow-600' 
                : 'from-green-500 to-green-600';
            const afterTextColor = isImproved ? 'text-white' : 'text-white';

            return (
                <div key={metric} className="flex-1 flex flex-col items-center">
                    <div className="flex-grow w-full flex justify-center gap-3">
                        <div className="w-12 flex flex-col justify-end items-center">
                            <span className="text-xs text-gray-400 mb-1">{before}%</span>
                            <div className="w-full bg-gradient-to-b from-gray-600 to-gray-700 rounded-t-lg" style={{ height: `${before}%` }}></div>
                        </div>
                        <div className="w-12 flex flex-col justify-end items-center">
                            <span className={`text-xs font-semibold ${afterTextColor} mb-1`}>{after}%</span>
                            <div className={`w-full bg-gradient-to-b ${afterColor} rounded-t-lg`} style={{ height: `${after}%` }}></div>
                        </div>
                    </div>
                    <span className="text-xs font-medium text-gray-300 mt-3">{metric}</span>
                </div>
            );
        })}
    </div>
);

const LineChart = () => {
    const pointsData = [
        { version: 'v1.0', score: 75 },
        { version: 'v1.1', score: 78 },
        { version: 'v1.2', score: 85 },
        { version: 'v2.0', score: 92 },
        { version: 'v2.1', score: 95 },
    ];

    const paddingX = 10;
    const paddingY = 15;
    const chartHeight = 100 - paddingY * 2;
    const chartWidth = 100 - paddingX * 2;

    const calculateY = (score: number) => {
        return (100 - paddingY) - (score / 100) * chartHeight;
    };
    
    const yAxisLabels = [100, 90, 80, 70];

    const points = pointsData.map((data, i) => {
        const x = paddingX + i * (chartWidth / (pointsData.length - 1));
        const y = calculateY(data.score);
        return { x, y, version: data.version };
    });

    const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ');
    const firstPoint = points[0];
    const lastPoint = points[points.length - 1];
    const bottomY = 100 - paddingY;
    const polygonPoints = `${firstPoint.x},${bottomY} ${polylinePoints} ${lastPoint.x},${bottomY}`;

    return (
        <div className="relative h-64 w-full pr-4 pt-4 pb-8">
            {/* Y-Axis Labels (HTML) */}
            <div className="absolute left-0 top-0 h-full w-8 text-right">
                {yAxisLabels.map(score => (
                    <div
                        key={score}
                        className="absolute text-xs text-gray-500"
                        style={{
                            top: `${calculateY(score)}%`,
                            right: '0.25rem',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {score}
                    </div>
                ))}
            </div>
            
            {/* Chart Area */}
            <div className="ml-8 h-full relative">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="line-chart-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    
                    {/* Grid Lines */}
                    {yAxisLabels.map(score => (
                         <line 
                            key={score}
                            x1={paddingX} y1={calculateY(score)} 
                            x2={100} y2={calculateY(score)} 
                            stroke="currentColor" 
                            className="text-white/10"
                            strokeWidth="0.5" vectorEffect="non-scaling-stroke"/>
                    ))}

                    <polygon points={polygonPoints} fill="url(#line-chart-gradient)" />
                    <polyline
                        points={polylinePoints}
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Dots and X-Axis labels */}
                <div className="absolute inset-0">
                    {points.map((p, i) => (
                        <React.Fragment key={i}>
                            <div
                                className="absolute w-2 h-2 bg-[#4ade80] rounded-full"
                                style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
                            />
                             <div 
                                className="absolute -bottom-4 text-xs text-gray-500"
                                style={{ left: `${p.x}%`, transform: 'translateX(-50%)' }}
                            >
                                {p.version}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Report: React.FC = () => {
    return (
        <section id="reports" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <SectionTag>ACTIONABLE REPORTS</SectionTag>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">From Insight to Impact</h2>
                    <p className="max-w-3xl text-lg text-[#A3A3A3] mb-16">
                        VERO reports don't just identify issues; they provide clear, actionable diagnostics to help you fine-tune your pipeline for peak performance.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto space-y-8">
                    <ScoreCard />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3 bg-gradient-to-br from-[#1C1C1C]/80 to-[#111111]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 space-y-12">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Continuous Improvement</h3>
                                <p className="text-sm text-gray-400 mb-4">Overall pipeline score over several versions.</p>
                                <LineChart />
                            </div>
                            <div className="border-t border-white/10"></div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Performance Uplift</h3>
                                <p className="text-sm text-gray-400 mb-4">Comparison of Pipeline v1 vs. v2 after fixes.</p>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs mb-4">
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-700 rounded-sm"></div><span>Pipeline v1</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-sm"></div><span>Pipeline v2 (Goal Met)</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500 rounded-sm"></div><span>Pipeline v2 (Improved)</span></div>
                                </div>
                                <BarChart />
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-gradient-to-br from-[#1C1C1C]/80 to-[#111111]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 space-y-8">
                           <KeyFindings />

                           <div className="border-t border-white/10"></div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Actionable Diagnostics</h3>
                                <div className="bg-black/20 border border-white/10 rounded-2xl p-6 text-left">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="mt-1 w-8 h-8 flex-shrink-0 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center text-yellow-500">
                                            <WarningIcon />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">Domain Context Missed</h4>
                                            <p className="text-sm text-gray-400">Diagnostic from Report #4A2B</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <h5 className="font-semibold text-gray-300 mb-1">Issue Identified:</h5>
                                            <p className="text-gray-400">Pipeline retrieves useful definitions but doesn’t consistently elevate concise trial evidence to the top.</p>
                                        </div>
                                         <div>
                                            <h5 className="font-semibold text-gray-300 mb-1">Current Output:</h5>
                                            <blockquote className="border-l-2 border-white/10 pl-3">
                                                <p className="text-gray-300">
                                                    <span className="font-semibold">Query:</span> “Did multivitamins reduce cancer risk in trials?”
                                                </p>
                                                <p className="text-orange-400 mt-1">
                                                    <span className="font-semibold">→</span> “Multivitamins are commonly used in the U.S. and may influence chronic disease outcomes.” <span className="text-gray-500">[Source: Doc ID 122]</span>
                                                </p>
                                            </blockquote>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-300 mb-1">Suggested Fix:</h5>
                                            <p className="text-gray-400"><span className="text-cyan-400">Use Hybrid-Retrieval strategy like BM-25 along with semantic search</span> to pin-point exact terms required for trial findings.</p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-300 mb-1">After Fix Expected Output:</h5>
                                            <blockquote className="border-l-2 border-white/10 pl-3">
                                                <p className="text-green-400">
                                                    <span className="font-semibold">→</span> “The SU.VI.MAX trial showed a 31% reduction in overall cancer risk in men using vitamin C, vitamin E, β-carotene, selenium, and zinc.” <span className="text-gray-500">[Source: Doc ID 122]</span>
                                                </p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Report;