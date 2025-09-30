import React from 'react';
import SectionTag from './shared/SectionTag';
import { ExternalLinkIcon } from './Icons';

const CodeSyntax = ({ children, color }: { children: React.ReactNode; color: string }) => (
    <span className={color}>{children}</span>
);

const CodeBlock = () => (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1C1C1C]/80 to-[#111111]/80 border border-white/10 rounded-3xl p-1 backdrop-blur-sm transition-all duration-300 hover:border-white/20 group">
        <div className="bg-[#111] rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#222222]/50 border-b border-white/10">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-[#FF5F56] rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-[#FFBD2E] rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-[#27C93F] rounded-full"></div>
                </div>
                 <div className="text-xs text-white/50 font-mono">terminal</div>
            </div>
            <pre className="p-6 font-mono text-sm leading-relaxed text-left overflow-x-auto">
                <code className="text-[#A3A3A3]">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 shrink-0">$</span>
                        <span className="text-white">pip install vero-eval</span>
                    </div>

                    <div className="my-6 border-t border-dashed border-white/10"></div>

                    <div>
                        <CodeSyntax color="text-gray-500"># measuring context sufficiency</CodeSyntax><br />
                        <CodeSyntax color="text-pink-400">from</CodeSyntax> <CodeSyntax color="text-white">vero.metrics</CodeSyntax> <CodeSyntax color="text-pink-400">import</CodeSyntax> <CodeSyntax color="text-white">SufficiencyScore</CodeSyntax><br /><br />
                        <CodeSyntax color="text-white">score</CodeSyntax> = <CodeSyntax color="text-cyan-400">SufficiencyScore</CodeSyntax>(<CodeSyntax color="text-yellow-400">user_query</CodeSyntax>, <CodeSyntax color="text-yellow-400">retrieved_context</CodeSyntax>)<br /><br />
                        <CodeSyntax color="text-cyan-400">print</CodeSyntax>(<CodeSyntax color="text-white">score</CodeSyntax>)
                    </div>

                    <div className="my-6 border-t border-dashed border-white/10"></div>

                    <div>
                        <CodeSyntax color="text-green-400">0.9</CodeSyntax> <CodeSyntax color="text-gray-500"># out of 1</CodeSyntax>
                    </div>
                </code>
            </pre>
        </div>
    </div>
);


const EasyToSetup: React.FC = () => {
    return (
        <section id="easy-setup" className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center">
                    <SectionTag>EASY TO SETUP</SectionTag>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get started in minutes</h2>
                    <p className="max-w-3xl text-lg text-[#A3A3A3] mb-16">
                        Integrate VERO into your workflow with just a few lines of code. Our intuitive Python library makes it simple to start evaluating your AI pipelines.
                    </p>
                </div>
                <CodeBlock />
                <div className="mt-16">
                    <a
                        href="https://pypi.org/project/vero-eval/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 group"
                    >
                        <span>View Documentation</span>
                        <ExternalLinkIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EasyToSetup;