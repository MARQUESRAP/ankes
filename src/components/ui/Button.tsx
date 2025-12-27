'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    icon,
    className = '',
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 
      font-semibold rounded-2xl 
      transition-all duration-200 ease-out
      focus:outline-none focus:ring-4
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.98]
    `;

    const variants = {
      primary: `
        bg-gradient-to-b from-blue-500 to-blue-600 
        text-white 
        shadow-lg shadow-blue-500/30
        hover:from-blue-400 hover:to-blue-500 hover:shadow-xl hover:shadow-blue-500/40
        focus:ring-blue-500/30
      `,
      secondary: `
        bg-white 
        text-gray-700 
        border-2 border-gray-200
        shadow-sm
        hover:bg-gray-50 hover:border-gray-300 hover:shadow-md
        focus:ring-gray-500/20
      `,
      danger: `
        bg-gradient-to-b from-red-500 to-red-600 
        text-white 
        shadow-lg shadow-red-500/30
        hover:from-red-400 hover:to-red-500 hover:shadow-xl hover:shadow-red-500/40
        focus:ring-red-500/30
      `,
      ghost: `
        bg-transparent 
        text-gray-600 
        hover:bg-gray-100 hover:text-gray-800
        focus:ring-gray-500/20
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : icon ? (
          icon
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
