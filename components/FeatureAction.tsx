import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Wand2, Zap, Clock, ShieldCheck, ArrowRight, BrainCircuit, LineChart, Target } from 'lucide-react';

export const FeatureAction: React.FC = () => {
  return (
    <>
      {/* One-click Fixes */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent text-primary rounded-3xl mb-8 rotate-3 hover:rotate-6 transition-transform">
            <Wand2 size={36} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
             Fix issues in one click
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium mb-6">
            Vero doesn't just tell you what's wrong; it builds the fix for you. Preview changes, then apply instantly
          </p>
          <p className="text-sm font-bold text-primary/80 uppercase tracking-wide">
             These are searches with real buying intent - not just traffic
          </p>
        </div>

        <div className="bg-card rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto shadow-sm border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-left space-y-2 flex-1">
               <h3 className="font-bold text-xl text-foreground">Recommended Action</h3>
               <p className="text-muted-foreground text-lg">Boost best-selling heels for wedding outfit intent</p>
             </div>
             <div className="flex flex-wrap justify-center gap-4">
               <Button className="!bg-gray-100 !text-gray-700 !border-gray-200 hover:!bg-gray-200" size="md">Preview Results</Button>
               <Button className="!bg-primary !text-primary-foreground hover:!opacity-90 !shadow-lg !shadow-primary/30 !border-transparent" size="md">Apply Fix</Button>
             </div>
          </div>
          <div className="mt-10 pt-10 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center">
               <span className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-sm mb-3 text-foreground font-bold border border-input">1</span>
               <span className="block font-bold text-foreground">No Guessing</span>
               <span className="text-sm text-muted-foreground mt-1">Data-backed decisions</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-sm mb-3 text-foreground font-bold border border-input">2</span>
               <span className="block font-bold text-foreground">No Code</span>
               <span className="text-sm text-muted-foreground mt-1">Zero dev time needed</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-sm mb-3 text-foreground font-bold border border-input">3</span>
               <span className="block font-bold text-foreground">Easy Undo</span>
               <span className="text-sm text-muted-foreground mt-1">Revert anytime</span>
             </div>
          </div>
        </div>
      </Section>

      {/* Why Vero is different */}
      <Section className="bg-background border-t border-b border-border/50">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Why Vero is different</h2>
           <div className="grid md:grid-cols-3 gap-12">
             <div className="flex flex-col gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                   <BrainCircuit size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Intent</h3>
                <p className="text-muted-foreground font-medium">Understands shopper intent from text, images, and context - not just keywords</p>
             </div>
             <div className="flex flex-col gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                   <LineChart size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Revenue</h3>
                <p className="text-muted-foreground font-medium">Connects search behavior directly to revenue impact, not vanity metrics</p>
             </div>
             <div className="flex flex-col gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                   <Target size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Action</h3>
                <p className="text-muted-foreground font-medium">Fixes search issues instantly with guided, one‑click changes</p>
             </div>
           </div>
        </div>
      </Section>

      {/* Install Speed */}
      <Section id="install" className="bg-background text-foreground relative overflow-hidden py-32">
        
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-accent/30 rounded-[100%] blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 leading-tight text-foreground">From install to impact in <br/> <span className="text-primary">under 10 minutes</span></h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <div className="p-10 bg-card rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
               <div className="w-14 h-14 bg-teal-500/10 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Zap size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3 text-foreground">Immediate Insights</h3>
               <p className="text-muted-foreground leading-relaxed">Connect your store and see actionable revenue opportunities instantly</p>
             </div>
             
             <div className="p-10 bg-card rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
               <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Clock size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3 text-foreground">No Long Setup</h3>
               <p className="text-muted-foreground leading-relaxed">We sync your catalog automatically. No manual tagging required</p>
             </div>

             <div className="p-10 bg-card rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
               <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <ShieldCheck size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3 text-foreground">Risk Free</h3>
               <p className="text-muted-foreground leading-relaxed">Runs alongside your current setup until you're ready to switch fully</p>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};