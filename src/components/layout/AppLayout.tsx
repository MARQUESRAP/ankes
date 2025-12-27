'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import ThemeToggle from '../ui/ThemeToggle';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <main className="lg:pl-72">
        {/* Header avec ThemeToggle */}
        <div className="flex justify-end px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6">
          <ThemeToggle />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 py-6 pt-4 lg:pt-4">
          {children}
        </div>
      </main>
    </div>
  );
}
