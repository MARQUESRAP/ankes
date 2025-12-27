'use client';

import { ReactNode } from 'react';
import Card from './Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

export default function StatCard({ 
  title, 
  value, 
  icon, 
  trend,
  color = 'blue' 
}: StatCardProps) {
  const colors = {
    blue: {
      bg: 'bg-blue-50',
      icon: 'bg-blue-500',
      iconShadow: 'shadow-blue-500/30',
    },
    green: {
      bg: 'bg-emerald-50',
      icon: 'bg-emerald-500',
      iconShadow: 'shadow-emerald-500/30',
    },
    orange: {
      bg: 'bg-amber-50',
      icon: 'bg-amber-500',
      iconShadow: 'shadow-amber-500/30',
    },
    red: {
      bg: 'bg-red-50',
      icon: 'bg-red-500',
      iconShadow: 'shadow-red-500/30',
    },
    purple: {
      bg: 'bg-purple-50',
      icon: 'bg-purple-500',
      iconShadow: 'shadow-purple-500/30',
    },
  };

  const colorStyles = colors[color];

  // Déterminer la taille du texte en fonction de la longueur de la valeur
  const valueLength = String(value).length;
  const textSizeClass = valueLength > 12 ? 'text-xl' : valueLength > 9 ? 'text-2xl' : 'text-3xl';

  return (
    <Card variant="default" padding="lg" hover>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className={`${textSizeClass} font-bold text-gray-800`}>{value}</p>
          {trend && (
            <p className={`text-sm mt-2 font-medium ${trend.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              <span className="text-gray-400 font-normal ml-1">vs mois dernier</span>
            </p>
          )}
        </div>
        <div className={`p-4 rounded-2xl ${colorStyles.icon} shadow-lg ${colorStyles.iconShadow} flex-shrink-0`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>
    </Card>
  );
}
