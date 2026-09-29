import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark' | 'system';

/** localStorage key; also read by the pre-paint script in index.html. */
export const THEME_STORAGE_KEY = 'theme';

interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Current theme choice and its setter. Must be used inside ThemeProvider. */
export function useTheme(): ThemeContextValue {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within a ThemeProvider');
	return context;
}
