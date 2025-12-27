'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export type ThemeMode = 'light' | 'dark' | 'system';

// Fonction pour déterminer si c'est l'heure du mode sombre (19h-8h)
const isDarkHours = (): boolean => {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 8;
};

// Fonction pour appliquer le thème
export const applyTheme = (mode: ThemeMode) => {
  let shouldBeDark = false;
  
  if (mode === 'dark') {
    shouldBeDark = true;
  } else if (mode === 'system') {
    shouldBeDark = isDarkHours();
  }
  
  if (shouldBeDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Fonction pour récupérer le mode sauvegardé
export const getSavedThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('themeMode') as ThemeMode) || 'light';
};

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = getSavedThemeMode();
    setMode(savedMode);
    applyTheme(savedMode);
    updateIsDark(savedMode);
    
    // Si mode système, vérifier toutes les minutes
    if (savedMode === 'system') {
      const interval = setInterval(() => {
        applyTheme('system');
        updateIsDark('system');
      }, 60000);
      return () => clearInterval(interval);
    }
  }, []);

  // Écouter les changements de mode depuis les settings
  useEffect(() => {
    const handleStorageChange = () => {
      const newMode = getSavedThemeMode();
      setMode(newMode);
      applyTheme(newMode);
      updateIsDark(newMode);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('themeChange', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChange', handleStorageChange);
    };
  }, []);

  const updateIsDark = (currentMode: ThemeMode) => {
    if (currentMode === 'dark') {
      setIsDark(true);
    } else if (currentMode === 'light') {
      setIsDark(false);
    } else {
      setIsDark(isDarkHours());
    }
  };

  const toggleTheme = () => {
    // Cycle: light -> dark -> system -> light
    let newMode: ThemeMode;
    if (mode === 'light') {
      newMode = 'dark';
    } else if (mode === 'dark') {
      newMode = 'system';
    } else {
      newMode = 'light';
    }
    
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
    applyTheme(newMode);
    updateIsDark(newMode);
    
    // Émettre un événement pour synchroniser avec les settings
    window.dispatchEvent(new Event('themeChange'));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl 
        bg-gray-100 dark:bg-gray-800 
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-all duration-300 ease-out
        group relative"
      aria-label="Toggle dark mode"
      title={mode === 'light' ? 'Mode clair' : mode === 'dark' ? 'Mode sombre' : 'Mode système'}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-amber-500
            transition-all duration-500 ease-out
            ${isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
            }
          `}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-blue-400
            transition-all duration-500 ease-out
            ${isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
            }
          `}
        />
      </div>
      
      {/* Indicateur de mode système */}
      {mode === 'system' && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
      )}
    </button>
  );
}
