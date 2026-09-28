import { useSyncExternalStore } from 'react';

/** Subscribes to a CSS media query, e.g. useMediaQuery('(min-width: 740px)'). */
export function useMediaQuery(query: string): boolean {
	return useSyncExternalStore(
		(onChange) => {
			const mql = window.matchMedia(query);
			mql.addEventListener('change', onChange);
			return () => mql.removeEventListener('change', onChange);
		},
		() => window.matchMedia(query).matches,
		() => false
	);
}

/** Matches the `tablet:` breakpoint in src/index.css. */
export const TABLET_QUERY = '(min-width: 740px)';
