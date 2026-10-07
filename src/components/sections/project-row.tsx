import { Plus } from 'lucide-react';

import { RichText } from '@/components/rich-text';
import type { Project } from '@/data/types';
import { cn } from '@/lib/utils';

const linkClass =
	'type-label border-b border-current pb-0.5 transition-colors duration-300 hover:text-brand';

interface ProjectRowProps {
	project: Project;
	index: number;
	active: boolean;
	onActivate: () => void;
}

/** One entry in Selected Work. On laptop+ the parent dims inactive rows and shows the image beside the list. */
export function ProjectRow({ project, index, active, onActivate }: ProjectRowProps) {
	const isPrivate = project.github === 'private' || project.website === 'private';

	return (
		<article
			onMouseEnter={onActivate}
			onFocus={onActivate}
			className={cn(
				'grid gap-6 border-t border-line py-10 transition-opacity duration-300 laptop:grid-cols-[3.5rem_1fr]',
				!active && 'laptop:opacity-45'
			)}
		>
			<span className="type-label text-brand">{String(index + 1).padStart(2, '0')}</span>

			<div className="flex flex-col gap-6">
				<div className="flex aspect-4/3 items-center justify-center bg-muted p-10 laptop:hidden">
					<img src={project.image} alt="" className="max-h-full max-w-full object-contain" />
				</div>

				<h3
					className={cn(
						'type-project font-medium transition-colors duration-300',
						active && 'laptop:text-brand'
					)}
				>
					{project.name}
				</h3>

				<dl className="grid grid-cols-2 gap-4 tablet:max-w-lg">
					<div>
						<dt className="type-label text-muted-foreground">Duration</dt>
						<dd className="type-body">{project.duration}</dd>
					</div>
					<div>
						<dt className="type-label text-muted-foreground">Client</dt>
						<dd className="type-body">{project.company}</dd>
					</div>
				</dl>

				<ul className="flex flex-wrap gap-2" aria-label="Technologies">
					{project.technologies.map((tech) => (
						<li key={tech} className="border border-line px-2 py-1 type-label">
							{tech}
						</li>
					))}
				</ul>

				{isPrivate ? (
					<p className="max-w-[60ch] type-body text-muted-foreground">
						This app is linked to a police communication system for testing, so no demo or
						repository is available.
					</p>
				) : (
					<div className="flex gap-8">
						<a href={project.github} target="_blank" rel="noreferrer" className={linkClass}>
							GitHub ↗
						</a>
						<a href={project.website} target="_blank" rel="noreferrer" className={linkClass}>
							Demo ↗
						</a>
					</div>
				)}

				<details className="group border-t border-line pt-4">
					<summary className="flex list-none items-center justify-between type-label transition-colors duration-300 hover:text-brand [&::-webkit-details-marker]:hidden">
						Details
						<Plus
							className="size-4 transition-transform duration-300 group-open:rotate-45"
							aria-hidden
						/>
					</summary>
					<RichText
						html={project.desc}
						className="max-w-[70ch] pt-4 type-body text-muted-foreground"
					/>
				</details>
			</div>
		</article>
	);
}
