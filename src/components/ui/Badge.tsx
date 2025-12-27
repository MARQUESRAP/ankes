'use client';

import { getStatusColor, getStatusLabel } from '@/lib/utils';

interface BadgeProps {
  status: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Badge({ status, size = 'md' }: BadgeProps) {
  const colors = getStatusColor(status);
  const label = getStatusLabel(status);

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2 
        font-medium rounded-full
        ${colors.bg} ${colors.text}
        ${sizes[size]}
      `}
    >
      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      {label}
    </span>
  );
}
