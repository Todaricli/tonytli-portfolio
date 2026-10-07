import { useEffect, useRef } from 'react';

/**
 * One-time fade-up when the element scrolls into view.
 * Put `data-reveal` on the element; this sets `data-revealed` (styled in index.css).
 */
export function useReveal<T extends HTMLElement>() {
	const ref = useRef<T>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return;
				element.setAttribute('data-revealed', '');
				observer.disconnect();
			},
			{ rootMargin: '0px 0px -10% 0px' }
		);
		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return ref;
}
