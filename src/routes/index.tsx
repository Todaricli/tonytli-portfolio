import { createFileRoute } from '@tanstack/react-router';

import { AboutSection } from '@/components/about-section';
import { ContactForm } from '@/components/contact-form';
import { ExperienceSection } from '@/components/sections/experience-section';
import { Hero } from '@/components/sections/hero';
import { TechMarquee } from '@/components/sections/tech-marquee';
import { WorkSection } from '@/components/sections/work-section';

export const Route = createFileRoute('/')({
	component: HomePage
});

function HomePage() {
	return (
		<>
			<Hero />
			<TechMarquee />
			<WorkSection />
			<ExperienceSection />
			<AboutSection />
			<ContactForm />
		</>
	);
}
