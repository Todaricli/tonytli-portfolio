import { useState } from 'react';

import { SectionHeading } from '@/components/section-heading';
import { ProjectRow } from '@/components/sections/project-row';
import { projects } from '@/data/projects';
import { useReveal } from '@/hooks/use-reveal';

/** #work: project list with a sticky preview of the hovered/focused project (laptop+). */
export function WorkSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const active = projects[activeIndex];
	const ref = useReveal<HTMLElement>();

	return (
		<section
			ref={ref}
			id="work"
			data-reveal
			className="mx-auto max-w-[1600px] scroll-mt-16 px-4 py-20 tablet:px-8 laptop:px-12 laptop:py-32"
		>
			<SectionHeading index="01" label="Work" className="pb-12 laptop:pb-20">
				Selected Work
			</SectionHeading>

			<div className="laptop:grid laptop:grid-cols-[1fr_minmax(0,0.8fr)] laptop:gap-16">
				<div className="border-b border-line">
					{projects.map((project, index) => (
						<ProjectRow
							key={project.slug}
							project={project}
							index={index}
							active={index === activeIndex}
							onActivate={() => setActiveIndex(index)}
						/>
					))}
				</div>

				{active && (
					<div className="hidden laptop:block">
						<div className="sticky top-28 flex aspect-4/3 items-center justify-center bg-muted p-16">
							<img
								key={active.slug}
								src={active.image}
								alt={active.name}
								className="max-h-full max-w-full animate-in object-contain duration-500 fade-in"
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
