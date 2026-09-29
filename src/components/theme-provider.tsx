import { useEffect, useState, type ReactNode } from 'react';

import { ThemeContext, THEME_STORAGE_KEY, type Theme } from '@/hooks/use-theme';

const DARK_QUERY = '(prefers-color-scheme: dark)';

function readStoredTheme(fallback: Theme): Theme {
	try {
		const stored = localStorage.getItem(THEME_STORAGE_KEY);
		return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : fallback;
	} catch {
		return fallback;
	}
}

interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: Theme;
}

/** Applies `light` / `dark` to <html> and persists the choice (shadcn's Vite dark-mode pattern). */
export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(() => readStoredTheme(defaultTheme));

	useEffect(() => {
		const root = document.documentElement;
		const mql = window.matchMedia(DARK_QUERY);
		const apply = () => {
			const resolved = theme === 'system' ? (mql.matches ? 'dark' : 'light') : theme;
			root.classList.remove('light', 'dark');
			root.classList.add(resolved);
		};

		apply();
		if (theme !== 'system') return;
		// Follow OS changes live while on "system"
		mql.addEventListener('change', apply);
		return () => mql.removeEventListener('change', apply);
	}, [theme]);

	const setTheme = (next: Theme) => {
		try {
			localStorage.setItem(THEME_STORAGE_KEY, next);
		} catch {
			// Storage unavailable (private mode etc.): the choice lasts for this visit only
		}
		setThemeState(next);
	};

	return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
