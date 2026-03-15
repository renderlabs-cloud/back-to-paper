import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = (t: Theme) => {
      const isDark = t === 'dark' || (t === 'system' && systemDark.matches);
      root.classList.toggle('dark', isDark);
    };

    apply(theme);
    localStorage.setItem('theme', theme);

    const listener = () => { if (theme === 'system') apply('system'); };
    systemDark.addEventListener('change', listener);
    return () => systemDark.removeEventListener('change', listener);
  }, [theme]);

  return { theme, setTheme };
}
