import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Search, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-105 duration-300">
            <Search size={20} strokeWidth={3} className="text-primary-foreground" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-foreground">Vero</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-16">
          <a href="#multimodal" className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">Intent Search</a>
          <a href="#assistant" className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">Revenue Assistant</a>
          <Button variant="primary" size="sm" onClick={scrollToWaitlist}>
            Join early access
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-muted-foreground hover:bg-accent rounded-full transition-colors">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a href="#multimodal" className="text-lg font-medium text-foreground py-2 px-2 hover:bg-accent rounded-lg" onClick={() => setMobileMenuOpen(false)}>Intent Search</a>
          <a href="#assistant" className="text-lg font-medium text-foreground py-2 px-2 hover:bg-accent rounded-lg" onClick={() => setMobileMenuOpen(false)}>Revenue Assistant</a>
          <Button variant="primary" onClick={scrollToWaitlist} className="w-full mt-2">
            Join early access
          </Button>
        </div>
      )}
    </nav>
  );
};