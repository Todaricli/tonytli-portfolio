import { createFileRoute } from '@tanstack/react-router';

import { ContactForm } from '@/components/contact-form';

export const Route = createFileRoute('/contact')({
	staticData: { loaderLabel: 'Contact.' },
	component: ContactForm
});
