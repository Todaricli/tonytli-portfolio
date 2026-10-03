import { Fragment } from 'react';

import { projects } from '@/data/projects';

const technologies = [...new Set(projects.flatMap((project) => project.technologies))];

/** Slow, single-line scroll of every technology used across the projects. */
export function TechMarquee() {
	return (
		<div
			className="overflow-hidden border-y border-line py-6 whitespace-nowrap"
			aria-label={`Technologies: ${technologies.join(', ')}`}
		>
			{[0, 1].map((copy) => (
				<div key={copy} aria-hidden className="inline-block animate-marquee type-project">
					{technologies.map((tech) => (
						<Fragment key={tech}>
							<span className="px-6">{tech}</span>
							<span className="text-brand">✦</span>
						</Fragment>
					))}
				</div>
			))}
		</div>
	);
}
