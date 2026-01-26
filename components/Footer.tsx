import React from 'react';
import { Search } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-90">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
               <Search size={18} strokeWidth={3} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">Vero</span>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto font-medium">
          AI-powered intent search and revenue intelligence built for modern Shopify stores
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-sm text-muted-foreground font-medium">
          <span className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-700">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Built for Shopify
          </span>
          <span className="hidden md:inline text-border text-lg">•</span>
          <span>Designed with ecommerce teams in mind</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border mt-8 text-sm text-muted-foreground font-medium">
          <p>&copy; {new Date().getFullYear()} Vero AI Inc. All rights reserved</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};