import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource-variable/archivo';
import '@fontsource-variable/funnel-display';
import '@fontsource-variable/space-grotesk';

import { ThemeProvider } from '@/components/theme-provider';

import './index.css';
import { routeTree } from './routeTree.gen';

const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
	scrollRestoration: true,
	defaultHashScrollIntoView: { behavior: 'smooth' }
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
