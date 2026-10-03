import { createFileRoute, redirect } from '@tanstack/react-router';

// Legacy page, now a section of the single-page home
export const Route = createFileRoute('/experiences/')({
	beforeLoad: () => {
		throw redirect({ to: '/', hash: 'experience', replace: true });
	}
});
