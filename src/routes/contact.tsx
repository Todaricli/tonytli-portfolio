import { createFileRoute, redirect } from '@tanstack/react-router';

// Legacy page, now a section of the single-page home
export const Route = createFileRoute('/contact')({
	beforeLoad: () => {
		throw redirect({ to: '/', hash: 'contact', replace: true });
	}
});
