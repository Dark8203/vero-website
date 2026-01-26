import React from 'react';
import { Button } from './ui/Button';
import { Search, Sparkles, Image as ImageIcon, ArrowRight, TrendingUp, Store } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-36 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-background">
      
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background -z-20"></div>

      {/* Modern Blurred Blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-accent/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/50 border border-border text-foreground text-sm font-semibold mb-8 shadow-sm">
              <Sparkles size={14} className="text-foreground" />
              <span>Waitlist now open for early access</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Recover lost revenue on Shopify <span className="text-primary">automatically</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Vero identifies where shoppers drop off, adapts to their intent, and fixes revenue leaks in real time
            </p>

             {/* Shopify Trust Anchor */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-10 text-foreground/80 font-bold">
               <div className="text-[#96bf48]">
                 <Store size={20} fill="currentColor" strokeWidth={0} className="opacity-20 absolute" /> {/* Fallback/Background */}
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" role="img" aria-label="Shopify"><path d="M20.3 8.3c-1.2-.4-2.5.3-3.1 1.5-.2.6.2 1.2.8 1.1l2.3-.5c.6-.1 1.2.2 1.3.8.2.6-.2 1.2-.8 1.3l-10.8 2.2c-.6.1-1.2-.2-1.3-.8-.2-.6.2-1.2.8-1.3l2.8-.6c.6-.1 1.1-.7.8-1.3l-1.6-3.5c-.7-1.5-2.5-2-3.9-1.2l-3.2 1.9c-.5.3-.6 1-.2 1.4l6 8.8c.4.6 1.2.8 1.8.6l7.8-2.8c.7-.2 1-1 1-1.7l-.2-7.8c0-.6-.5-1.1-1.1-.9z"/></svg>
               </div>
               <span>Built for <span className="text-foreground">Shopify</span> stores</span>
            </div>
            
            <div className="flex flex-col items-center justify-center lg:justify-start gap-3">
              <Button variant="primary" size="lg" onClick={scrollToWaitlist} className="w-full sm:w-auto h-14 px-8 text-lg">
                Join early access <ArrowRight size={18} className="ml-2" />
              </Button>
              <p className="text-sm font-medium text-muted-foreground">Early access for Shopify stores</p>
            </div>
          </div>

          {/* Visual Mockup */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl perspective-1000">
            <div className="relative bg-card/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-primary/10 border border-border p-8 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 ease-out">
              
              {/* Mock Browser Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                </div>
                <div className="ml-auto w-20 h-2 bg-muted rounded-full"></div>
              </div>

              {/* Search Interaction Mock */}
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
                    <Search size={22} />
                  </div>
                  <input 
                    type="text" 
                    readOnly
                    value="What jewelry goes with this dress?"
                    className="w-full pl-12 pr-14 py-4 bg-background border border-input rounded-2xl text-foreground font-medium focus:outline-none shadow-sm"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-muted-foreground">
                      <ImageIcon size={18} />
                    </div>
                  </div>
                </div>

                {/* Context Pill */}
                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                   <div className="w-14 h-20 bg-muted rounded-xl overflow-hidden relative shadow-sm ring-2 ring-background ring-offset-2 ring-offset-primary/10">
                     <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=300" alt="Dress context" className="w-full h-full object-cover" />
                   </div>
                   <div className="bg-card border border-border text-muted-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-foreground animate-pulse"></span>
                     Analyzing Visual Context...
                   </div>
                </div>

                {/* Result Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {/* Card 1: Gold Bracelet (Jewelry suitable for red dress) */}
                    <div onClick={scrollToWaitlist} className="group cursor-pointer bg-card p-3 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden relative mb-3">
                         <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=300" alt="Gold Bracelet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      </div>
                      <div className="space-y-2 px-1">
                        <div className="h-2.5 bg-muted rounded-full w-3/4"></div>
                        <div className="h-2.5 bg-muted rounded-full w-1/3"></div>
                      </div>
                    </div>

                    {/* Card 2: Gold Earrings (Replaced Image) */}
                    <div onClick={scrollToWaitlist} className="group cursor-pointer bg-card p-3 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden relative mb-3">
                         <img src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=300" alt="Gold Earrings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      </div>
                      <div className="space-y-2 px-1">
                        <div className="h-2.5 bg-muted rounded-full w-3/4"></div>
                        <div className="h-2.5 bg-muted rounded-full w-1/3"></div>
                      </div>
                    </div>
                </div>

              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-foreground text-background p-5 rounded-3xl shadow-2xl shadow-primary/20 flex items-center gap-4 max-w-xs animate-in slide-in-from-bottom-8 duration-1000 delay-300 border border-border">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  <TrendingUp size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-0.5">Revenue</p>
                  <p className="text-sm font-bold text-background leading-tight">High intent match<br/><span className="text-primary">More Conversion</span></p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};