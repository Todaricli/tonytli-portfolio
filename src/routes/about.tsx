import { createFileRoute } from '@tanstack/react-router';

import { AboutSection } from '@/components/about-section';

export const Route = createFileRoute('/about')({
	staticData: { loaderLabel: 'About.' },
	component: AboutSection
});
