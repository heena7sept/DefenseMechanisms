'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-foreground">Dark Mode</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
          className="sr-only peer"
        />
        <div
          className={`
            w-11 h-6 rounded-full 
            peer-focus:ring-4 peer-focus:ring-ring 
            after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
            after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-5 after:w-5 after:transition-all 
            peer-checked:after:translate-x-full 
            relative 
            ${isDark ? 'bg-blue-600' : 'bg-gray-300'}
          `}
        />
      </label>
    </div>
  );
}
