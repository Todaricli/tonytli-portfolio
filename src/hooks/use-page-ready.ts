import { useEffect, useState } from 'react';

/**
 * The site is static and renders instantly, so the preloader is purely cosmetic:
 * a random 800–2000 ms delay, picked once per session (same as the original Svelte store).
 */
export const LOADING_DURATION = Math.floor(Math.random() * (2000 - 800 + 1) + 800);

/**
 * Returns false for LOADING_DURATION ms every time `key` changes, then true.
 * Pass `null` to skip the delay (routes without a loader label).
 */
export function usePageReady(key: string | null): boolean {
	const [readyKey, setReadyKey] = useState<string | null>(null);

	useEffect(() => {
		if (key === null) return;
		const timer = setTimeout(() => setReadyKey(key), LOADING_DURATION);
		return () => clearTimeout(timer);
	}, [key]);

	return key === null || readyKey === key;
}
