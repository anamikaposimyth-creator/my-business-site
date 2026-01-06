
import React from 'react';

// Added type prop to support standard HTML button types (submit, button, reset) and fix TS errors in forms
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform active:scale-95 focus:outline-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900",
    ghost: "text-gray-600 hover:bg-gray-100"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
