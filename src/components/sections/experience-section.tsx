import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { experiences } from '@/data/experiences';
import { useReveal } from '@/hooks/use-reveal';

/** #experience: hairline-separated rows, each linking to /experiences/$slug. */
export function ExperienceSection() {
	const ref = useReveal<HTMLElement>();

	return (
		<section
			ref={ref}
			id="experience"
			data-reveal
			className="mx-auto max-w-[1600px] scroll-mt-16 px-4 py-20 tablet:px-8 laptop:px-12 laptop:py-32"
		>
			<SectionHeading index="02" label="Experience" className="pb-12 laptop:pb-20">
				Where I've Worked
			</SectionHeading>

			<ol className="border-b border-line">
				{experiences.map((experience, index) => (
					<li key={experience.slug} className="border-t border-line">
						<Link
							to="/experiences/$slug"
							params={{ slug: experience.slug }}
							className="group grid items-baseline gap-2 py-8 transition-colors duration-300 hover:text-brand tablet:grid-cols-[3.5rem_1fr_auto] tablet:gap-6"
						>
							<span className="type-label text-brand">{String(index + 1).padStart(2, '0')}</span>
							<span className="flex flex-col gap-2">
								<span className="font-display text-2xl font-medium tracking-tight tablet:text-4xl">
									{experience.job_title}
								</span>
								<span className="type-body text-muted-foreground">{experience.company}</span>
							</span>
							<span className="flex items-center gap-4 type-label text-muted-foreground">
								<span>
									{experience.start} – {experience.end} · {experience.tenure} mo
								</span>
								<ArrowRight
									className="size-4 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand"
									aria-hidden
								/>
							</span>
						</Link>
					</li>
				))}
			</ol>
		</section>
	);
}
