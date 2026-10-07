import { createFileRoute, redirect } from '@tanstack/react-router';

// Section of the single-page home
export const Route = createFileRoute('/skills')({
	beforeLoad: () => {
		throw redirect({ to: '/', hash: 'skills', replace: true });
	}
});
