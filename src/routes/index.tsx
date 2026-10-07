import { createFileRoute } from '@tanstack/react-router';

import { AboutSection } from '@/components/about-section';
import { ContactForm } from '@/components/contact-form';
import { ExperienceSection } from '@/components/sections/experience-section';
import { Hero } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills-section';
import { TechMarquee } from '@/components/sections/tech-marquee';
import { WorkSection } from '@/components/sections/work-section';
import { navLinks } from '@/data/site';
import { useSectionHashSync } from '@/hooks/use-section-hash-sync';

export const Route = createFileRoute('/')({
	component: HomePage
});

const sectionIds = navLinks.map((link) => link.hash);

function HomePage() {
	useSectionHashSync(sectionIds);

	return (
		<>
			<Hero />
			<TechMarquee />
			<WorkSection />
			<ExperienceSection />
			<AboutSection />
			<SkillsSection />
			<ContactForm />
		</>
	);
}
