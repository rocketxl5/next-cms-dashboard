'use client';

import { Button } from '../Button';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/providers';

import { resolveNextTheme } from '@/lib/theme';

export function ToggleThemeBtn() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = async () => {
    const nextTheme = resolveNextTheme(theme);

    toggleTheme(); // UI state update

    try {
      const res = await fetch('/api/user/theme', {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ theme: nextTheme }),
      });

      if (!res.ok) {
        console.error('Server error updating theme', res.status);
      }
    } catch (error) {
      console.error('Network error updating theme', error);
    }
  };

  return (
    <Button className="mx-2" onClick={handleClick} variant="muted" height="md">
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </Button>
  );
}