import React from 'react';
import SectionTag from './shared/SectionTag';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
    <div className="bg-gradient-to-br from-[#1C1C1C]/80 to-[#111111]/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
        <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
        <p className="text-[#A3A3A3]">{answer}</p>
    </div>
);

const faqs = [
    {
        question: 'What does VERO offer?',
        answer: 'VERO provides a comprehensive platform for the evaluation and continuous monitoring of RAG pipelines, ensuring optimal performance and reliability.'
    },
    {
        question: 'How do I use VERO?',
        answer: 'Simply connect your pipeline and run an evaluation. Get detailed reports specialized for developers, product managers, and stakeholders.'
    },
    {
        question: 'How long does a report take?',
        answer: 'Our evaluation engine generates reports within hours, not days. Fast insights when you need them most.'
    },
    {
        question: 'Does VERO support version control?',
        answer: 'Yes, robust version control is a core feature, allowing you to track changes and compare performance over time.'
    },
    {
        question: 'What is RAG?',
        answer: 'Retrieval-Augmented Generation (RAG) is an AI framework for improving LLM responses by grounding the model on external knowledge sources.'
    },
    {
        question: 'What happens after joining?',
        answer: "You'll be first in line for early access, a product demo, and an invitation to set up your first evaluation."
    }
];

const Faq: React.FC = () => {
    return (
        <section id="faq" className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center">
                    <SectionTag>FAQ</SectionTag>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Frequently Asked Questions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;