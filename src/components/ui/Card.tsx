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
      default: 'bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700',
      elevated: 'bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50',
      outlined: 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const hoverStyles = hover 
      ? 'transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1 cursor-pointer' 
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
