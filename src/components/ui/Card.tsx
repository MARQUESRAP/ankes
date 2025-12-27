'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    variant = 'default', 
    padding = 'md',
    hover = false,
    className = '', 
    ...props 
  }, ref) => {
    const variants = {
      default: 'bg-white shadow-sm border border-gray-100',
      elevated: 'bg-white shadow-xl shadow-gray-200/50',
      outlined: 'bg-white border-2 border-gray-200',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const hoverStyles = hover 
      ? 'transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 cursor-pointer' 
      : '';

    return (
      <div
        ref={ref}
        className={`
          rounded-2xl 
          ${variants[variant]} 
          ${paddings[padding]}
          ${hoverStyles}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
