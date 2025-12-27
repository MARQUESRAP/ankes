'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-3.5 pr-10
              bg-white dark:bg-gray-800
              border-2 border-gray-200 dark:border-gray-600
              rounded-xl
              text-gray-800 dark:text-gray-100
              appearance-none
              cursor-pointer
              transition-all duration-200
              focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
              hover:border-gray-300 dark:hover:border-gray-500
              disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
              ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
        </div>
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

Select.displayName = 'Select';

export default Select;
