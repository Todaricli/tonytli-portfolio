import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

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
	return (
		<>
			<SiteHeader />
			<main>
				<Outlet />
			</main>
			<SiteFooter />
			<Suspense>
				<RouterDevtools />
			</Suspense>
		</>
	);
}

function NotFound() {
	return (
		<div className="mx-auto flex min-h-[60vh] max-w-[1600px] flex-col justify-center gap-8 px-4 py-24 tablet:px-8 laptop:px-12">
			<p className="type-label text-muted-foreground">
				<span className="text-brand">404</span> — Not found
			</p>
			<h1 className="type-display font-medium">This page doesn't exist.</h1>
			<Link
				to="/"
				className="self-start border-b border-current pb-1 type-label transition-colors duration-300 hover:text-brand"
			>
				Back home →
			</Link>
		</div>
	);
}
