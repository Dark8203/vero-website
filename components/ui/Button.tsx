import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full active:scale-[0.98]";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-input shadow-sm",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-foreground",
    ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};