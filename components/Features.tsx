import React from 'react';
import { Section } from './ui/Section';
import { ScanSearch, Camera, Sparkles, ShoppingCart, History, MousePointerClick, Zap, CheckCircle2 } from 'lucide-react';

// Feature 1: Multimodal
export const FeatureMultimodal: React.FC = () => {
  return (
    <Section id="multimodal" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-8">
          
          {/* Business Pain Point */}
          <div className="mb-2">
            <p className="text-lg font-bold text-muted-foreground/80 leading-snug">
              Most shoppers don’t know what to search - and leave when search doesn’t understand them
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold tracking-wider uppercase text-xs md:text-sm shadow-md shadow-primary/20 cursor-default">
            <div className="w-4 h-4 md:w-5 md:h-5">
              <Sparkles className="w-full h-full" strokeWidth={2.5} />
            </div>
            <span>Intent Search</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
            Capture high-intent <br/> shopping moments
          </h2>
          <div className="text-xl text-muted-foreground leading-relaxed font-medium space-y-4">
            <p>
              When shoppers search with ideas or inspiration, Vero understands the intent behind them and surfaces the most relevant products
            </p>
          </div>
          
          <ul className="space-y-5 pt-4">
            {[
              "Customers don't need to know product names",
              "Higher-value discovery journeys",
              "More cross-sell opportunities"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0 shadow-sm">
                  <CheckCircle2 size={14} strokeWidth={4} />
                </div>
                <span className="text-foreground font-semibold text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full bg-accent/30 rounded-[2.5rem] p-10 relative">
           {/* Abstract decoration */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/20 rounded-full blur-3xl -z-10 opacity-60"></div>

           <div className="glass-card rounded-3xl shadow-soft p-8 max-w-sm mx-auto relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-muted rounded-2xl overflow-hidden flex-shrink-0 shadow-inner">
                  <img src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/05/15200203/Wake-Up-Sid-Bedroom-2.jpg" alt="Earthy Living Room Input" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary font-bold uppercase mb-1">Shopper Input</p>
                  <p className="text-base font-semibold text-foreground leading-tight">Something with earthy and cozy vibe for my living room</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-px bg-border flex-1"></div>
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                    <Sparkles size={14} />
                 </div>
                 <div className="h-px bg-border flex-1"></div>
              </div>

              <p className="text-xs text-muted-foreground font-bold mb-4 uppercase tracking-wider text-center">Vero Recommendations</p>
              <div className="flex gap-4 overflow-hidden justify-center">
                <div className="w-24 h-32 bg-background rounded-2xl flex-shrink-0 relative overflow-hidden shadow-sm group border border-border">
                   <img src="https://media.istockphoto.com/id/1404885159/photo/view-of-tripod-lamp-in-a-cozy-living-room-spending-warm-light.jpg?s=612x612&w=0&k=20&c=ATuSmWvftFaXE_KS5Hiz5b3kBYw81LsllciNcJKUwXY=" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Tripod Lamp" />
                </div>
                <div className="w-24 h-32 bg-background rounded-2xl flex-shrink-0 relative overflow-hidden shadow-sm group border-2 border-primary/50 ring-2 ring-primary/20">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgGSrGkp1kMWW3e_BxM0qf7KcZZmnMHjoNg&s" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Earthy Sofa" />
                </div>
                 <div className="w-24 h-32 bg-background rounded-2xl flex-shrink-0 relative overflow-hidden shadow-sm group border border-border">
                   <img src="https://elledecor.in/wp-content/uploads/2024/09/2-2-4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="White Texture" />
                </div>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

// Feature 2: Context
export const FeatureContext: React.FC = () => {
  return (
    <Section className="relative bg-background">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
          Results that adapt as they browse
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
          Search gets more relevant as shoppers browse, add to cart - increasing conversions in the journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <History size={24} />, title: "Recent Searches", desc: "Remembers previous queries to understand evolving intent" },
          { icon: <MousePointerClick size={24} />, title: "Viewed Products", desc: "Prioritizes styles and brands the user has engaged with" },
          { icon: <ShoppingCart size={24} />, title: "Cart Contents", desc: "Suggests complementary items based on what they're buying" }
        ].map((card, i) => (
          <div key={i} className="group bg-card p-10 rounded-[2rem] hover:shadow-soft transition-all duration-300 border border-border hover:border-primary/20">
            <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};