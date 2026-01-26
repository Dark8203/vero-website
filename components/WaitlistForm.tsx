import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { WaitlistFormState, UserRole } from '../types';
import { Check, Loader2, Sparkles, AlertCircle } from 'lucide-react';

export const WaitlistForm: React.FC = () => {
  const [form, setForm] = useState<WaitlistFormState>({
    email: '',
    storeUrl: '',
    role: '',
    status: 'idle'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForm(prev => ({ ...prev, status: 'loading' }));

    // IMPORTANT: Check your email inbox (and Spam/Promotions) for an 'Activate FormSubmit' email 
    // after the first submission. You must click the link in that email to start receiving submissions.
    const FORM_ENDPOINT = "https://formsubmit.co/ajax/alakhagr@gmail.com";

    const formData = new FormData();
    formData.append("email", form.email);
    formData.append("storeUrl", form.storeUrl || "Not provided");
    formData.append("role", form.role || "Not provided");
    formData.append("_subject", `New Waitlist Signup: ${form.email}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        setForm(prev => ({ ...prev, status: 'success' }));
      } else {
        console.error("FormSubmit returned error:", response.status);
        setForm(prev => ({ ...prev, status: 'error' }));
      }
    } catch (error) {
      console.error("Submission error:", error);
      setForm(prev => ({ ...prev, status: 'error' }));
    }
  };

  return (
    <Section id="waitlist" className="bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-[2.5rem] shadow-soft p-8 md:p-14 border border-border">
          
          <div className="text-center mb-10">
            <div className="inline-block p-3 rounded-2xl bg-accent text-primary mb-6">
               <Sparkles size={24} />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Join early access</h2>
            <p className="text-lg text-muted-foreground">Help shape the product and get priority access</p>
          </div>

          {form.status === 'success' ? (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500 bg-muted rounded-3xl">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">You're on the list!</h3>
              <p className="text-muted-foreground mb-4">Thanks for your interest. We'll reach out soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-input bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-foreground placeholder:text-muted-foreground"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={form.status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="url" className="block text-sm font-bold text-foreground mb-2 ml-1">Store URL <span className="text-muted-foreground font-normal ml-1">(Optional)</span></label>
                <input
                  type="text"
                  id="url"
                  className="w-full px-6 py-4 rounded-2xl border border-input bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-foreground placeholder:text-muted-foreground"
                  placeholder="mystore.myshopify.com"
                  value={form.storeUrl}
                  onChange={(e) => setForm({ ...form, storeUrl: e.target.value })}
                  disabled={form.status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-bold text-foreground mb-2 ml-1">Role <span className="text-muted-foreground font-normal ml-1">(Optional)</span></label>
                <div className="relative">
                  <select
                    id="role"
                    className="w-full px-6 py-4 rounded-2xl border border-input bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-foreground appearance-none cursor-pointer"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value as UserRole })}
                    disabled={form.status === 'loading'}
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="Founder">Founder</option>
                    <option value="Marketer">Marketer</option>
                    <option value="Merchandiser">Merchandiser</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {form.status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <div className="space-y-3">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full mt-4 text-lg h-16"
                  disabled={form.status === 'loading'}
                >
                  {form.status === 'loading' ? (
                    <>
                      <Loader2 size={24} className="animate-spin mr-3" /> Joining...
                    </>
                  ) : (
                    'Join early access'
                  )}
                </Button>
                <p className="text-center text-sm font-medium text-muted-foreground">Early access for Shopify stores</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};