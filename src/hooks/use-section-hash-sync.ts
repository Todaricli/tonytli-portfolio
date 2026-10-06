import { useRouter } from '@tanstack/react-router';
import { useEffect } from 'react';

/** Height of the sticky header (h-16). */
const HEADER_OFFSET = 64;

/**
 * Scroll-spy for the home page: keeps the URL hash in step with the section in view.
 * Without it the hash stays at the last clicked link (e.g. `#work`), so clicking that
 * link again after scrolling away is a same-location navigation and does nothing.
 * Uses replace navigations with no scrolling, so history isn't polluted and the
 * router never fights the user's scroll. Above the first section the hash is cleared.
 */
export function useSectionHashSync(ids: readonly string[]) {
	const router = useRouter();

	useEffect(() => {
		let frame = 0;

		const sync = () => {
			frame = 0;
			// A section is current once its top passes ~a third of the way down the viewport
			const threshold = HEADER_OFFSET + window.innerHeight / 3;
			let current: string | undefined;
			for (const id of ids) {
				const top = document.getElementById(id)?.getBoundingClientRect().top;
				if (top !== undefined && top <= threshold) current = id;
			}
			// The last section may be too short to ever reach the threshold
			const atBottom =
				window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
			if (atBottom && window.scrollY > 0) current = ids.at(-1);

			if ((current ?? '') === router.state.location.hash) return;
			void router.navigate({
				to: '/',
				hash: current,
				replace: true,
				resetScroll: false,
				hashScrollIntoView: false
			});
		};

		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(sync);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(frame);
		};
	}, [ids, router]);
}
