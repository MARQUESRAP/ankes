'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full px-4 py-3.5 
              ${icon ? 'pl-12' : ''}
              bg-white dark:bg-gray-800
              border-2 border-gray-200 dark:border-gray-600
              rounded-xl
              text-gray-800 dark:text-gray-100
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              transition-all duration-200
              focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
              hover:border-gray-300 dark:hover:border-gray-500
              disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
              ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        {hint && !error && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{hint}</p>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-500 rounded-full" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
