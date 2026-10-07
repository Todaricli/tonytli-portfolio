import { Link } from '@tanstack/react-router';

import { experiences } from '@/data/experiences';
import { cn } from '@/lib/utils';

/** "Other roles" list on /experiences/$slug; the current role is highlighted in brand blue. */
export function OtherRoles({ className }: { className?: string }) {
	return (
		<nav aria-label="Other roles" className={cn('flex flex-col gap-4', className)}>
			<h2 className="type-label text-muted-foreground">Other roles</h2>
			<ul className="border-b border-line">
				{experiences.map((experience) => (
					<li key={experience.slug} className="border-t border-line">
						<Link
							to="/experiences/$slug"
							params={{ slug: experience.slug }}
							className="flex flex-col gap-1 py-4 transition-colors duration-300 hover:text-brand"
							activeProps={{ className: 'text-brand', 'aria-current': 'page' }}
						>
							<span className="type-body font-medium">{experience.job_title}</span>
							<span className="type-label text-muted-foreground">{experience.company}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
