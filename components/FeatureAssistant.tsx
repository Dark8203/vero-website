import React from 'react';
import { Section } from './ui/Section';
import { Bot, TrendingUp, AlertTriangle, ArrowRight, Banknote, Zap } from 'lucide-react';
import { Button } from './ui/Button';

export const FeatureAssistant: React.FC = () => {
  return (
    <Section id="assistant" className="bg-background relative overflow-hidden py-32 scroll-mt-32">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
        
        {/* Content */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold tracking-wider uppercase text-xs md:text-sm shadow-md shadow-primary/20 cursor-default mb-8">
            <Bot size={18} />
            <span>Revenue Assistant</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your revenue assistant <br/> <span className="text-primary">for search</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            Clear answers about which searches lose money - and what to fix first
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Banknote size={28} />
              </div>
              <div>
                <h4 className="text-foreground font-bold text-lg mb-1">Talks in revenue</h4>
                <p className="text-muted-foreground">Identifies revenue opportunities, not just abstract metrics</p>
              </div>
            </div>
            <div className="flex gap-5">
               <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Zap size={28} />
              </div>
              <div>
                <h4 className="text-foreground font-bold text-lg mb-1">Proactive Insights</h4>
                <p className="text-muted-foreground">"These queries will spike in 3 weeks - prepare now"</p>
              </div>
            </div>
          </div>
        </div>

        {/* UI Demo - Glass Cards */}
        <div className="flex-1 order-1 lg:order-2 w-full perspective-1000">
           <div className="space-y-5 relative">
             
             {/* Decorative grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none -z-10"></div>

             {/* Card 1 */}
             <div className="glass-dark rounded-3xl p-7 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 hover:shadow-primary/10 hover:border-primary/30">
               <div className="flex items-start justify-between mb-3">
                 <div className="flex items-center gap-2 text-amber-400 font-bold text-sm bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                   <AlertTriangle size={14} />
                   <span>Intent</span>
                 </div>
                 <span className="text-xs text-white/50 font-medium">1 day ago</span>
               </div>
               <p className="text-white/90 font-medium text-lg mb-4 leading-relaxed">
                 <span className="text-white font-bold">"Red leather boots"</span> had 400 searches but 0 cart additions last week
               </p>
               <div className="flex gap-3">
                 <Button size="sm" className="bg-white text-black hover:bg-gray-200 border-none font-bold h-9 px-4">
                    Fix Results
                 </Button>
               </div>
             </div>

             {/* Card 2 */}
             <div className="glass-dark rounded-3xl p-7 shadow-2xl ml-8 lg:ml-12 transform hover:-translate-y-2 transition-transform duration-500 hover:shadow-primary/10 hover:border-primary/30">
               <div className="flex items-start justify-between mb-3">
                 <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                   <TrendingUp size={14} />
                   <span>Seasonal Alert</span>
                 </div>
                 <span className="text-xs text-white/50 font-medium">Today</span>
               </div>
               <p className="text-white/90 font-medium text-lg mb-4">
                 Wedding outfit queries are spiking <span className="text-emerald-400">20% week-over-week</span>
               </p>
               <div className="bg-white/10 p-4 rounded-xl text-sm text-white/70 border border-white/10">
                 <div className="flex gap-3 items-start mb-3">
                   <div className="mt-0.5 text-primary-foreground"><Bot size={16}/></div>
                   <span>Suggestion: Boost "Wedding Collection" for related generic queries</span>
                 </div>
                 <button className="ml-7 text-emerald-400 hover:text-emerald-300 font-bold text-xs uppercase tracking-wide transition-colors flex items-center gap-1">
                    Apply suggestion <ArrowRight size={12} />
                 </button>
               </div>
             </div>

             {/* Card 3 */}
             <div className="glass-dark rounded-3xl p-7 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 hover:shadow-primary/10 hover:border-primary/30">
               <div className="flex items-start justify-between mb-3">
                 <div className="flex items-center gap-2 text-primary-foreground font-bold text-sm bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
                   <Bot size={14} />
                   <span>Pattern Detected</span>
                 </div>
                 <span className="text-xs text-white/50 font-medium">1 hour ago</span>
               </div>
               <div className="space-y-4">
                 <p className="text-white/90 font-medium text-lg leading-relaxed">
                   "Summer dress", "Beach gown", and "Resort dress" behave the same in search
                 </p>
                 <div className="flex flex-col gap-3">
                    <p className="text-white/70 text-sm font-medium">Group these under one intent?</p>
                    <Button size="sm" className="bg-white text-black hover:bg-gray-200 border-none font-bold w-fit h-9 px-4">
                       Group queries
                    </Button>
                 </div>
               </div>
             </div>

           </div>
        </div>

      </div>
    </Section>
  );
};