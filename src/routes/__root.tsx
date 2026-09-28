import { createRootRoute, Link, Outlet, useMatches, useRouterState } from '@tanstack/react-router';
import { lazy, Suspense, useState } from 'react';

import { MobileNav } from '@/components/mobile-nav';
import { PageLoader } from '@/components/page-loader';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TABLET_QUERY, useMediaQuery } from '@/hooks/use-media-query';
import { usePageReady } from '@/hooks/use-page-ready';
import { cn } from '@/lib/utils';

declare module '@tanstack/react-router' {
	interface StaticDataRouteOption {
		/** When set, the route shows the full-screen PageLoader with this label on every visit. */
		loaderLabel?: string;
	}
}

const RouterDevtools = import.meta.env.DEV
	? lazy(() =>
			import('@tanstack/react-router-devtools').then((mod) => ({
				default: mod.TanStackRouterDevtools
			}))
		)
	: () => null;

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFound
});

function RootLayout() {
	const matches = useMatches();
	const loaderLabel = [...matches].reverse().find((match) => match.staticData?.loaderLabel)
		?.staticData.loaderLabel;
	// Unique per navigation, so revisiting a page replays the loader
	const navigationKey = useRouterState({
		select: (state) => state.location.state.__TSR_key ?? state.location.href
	});
	const ready = usePageReady(loaderLabel ? navigationKey : null);

	const isTablet = useMediaQuery(TABLET_QUERY);
	const [menuOpen, setMenuOpen] = useState(false);
	// The mobile menu can't stay open once the desktop nav takes over
	const navOpen = menuOpen && !isTablet;

	return (
		<>
			<SiteHeader />
			{ready && <MobileNav open={navOpen} onOpenChange={setMenuOpen} />}
			{!ready && loaderLabel && <PageLoader message={loaderLabel} />}

			<div
				className={cn(
					'transition-opacity duration-2000',
					navOpen && 'opacity-25',
					!ready && 'hidden'
				)}
			>
				<Outlet />
			</div>

			{ready && <SiteFooter />}
			<Suspense>
				<RouterDevtools />
			</Suspense>
		</>
	);
}

function NotFound() {
	return (
		<div className="flex min-h-[60vh] animate-page flex-col items-center justify-center gap-6 px-8 pt-24 text-center text-white">
			<h1 className="font-titillium text-6xl opacity-70">404</h1>
			<p className="text-lg text-gray-300">This page doesn't exist.</p>
			<Link to="/" className="font-mono text-gray-300 underline hover:text-white">
				Back home
			</Link>
		</div>
	);
}
