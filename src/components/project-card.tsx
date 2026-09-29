import { useState, type KeyboardEvent } from 'react';

import { RichText } from '@/components/rich-text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Project } from '@/data/types';

const linkButtonClass =
	'h-auto w-16 rounded-xl bg-slate-200 p-2 text-base font-normal text-emerald-400 transition-colors duration-500 ease-in-out hover:scale-105 hover:bg-slate-200 hover:text-black';

/** 3D flip card: front shows image + links, back shows details. Click (or Enter/Space) to flip. */
export function ProjectCard({ project }: { project: Project }) {
	const [flipped, setFlipped] = useState(false);
	const isPrivate = project.github === 'private' || project.website === 'private';

	const toggle = () => setFlipped((value) => !value);
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.target !== event.currentTarget) return;
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggle();
		}
	};

	return (
		<div className="flip-box flex w-full flex-col items-center justify-center rounded-3xl pb-2">
			<Card
				role="button"
				tabIndex={0}
				aria-pressed={flipped}
				aria-label={`${project.name}: show ${flipped ? 'overview' : 'details'}`}
				onClick={toggle}
				onKeyDown={onKeyDown}
				data-flipped={flipped}
				// overflow-visible is required: overflow-hidden would flatten preserve-3d
				className="flip-box-inner relative h-96 w-full max-w-96 min-w-80 cursor-pointer items-center justify-center gap-0 overflow-visible rounded-3xl bg-white p-4 shadow-[0px_5px_5px_5px_rgb(180,186,192)] ring-0 dark:bg-black dark:shadow-[0px_5px_5px_5px_rgb(44,50,56)]"
			>
				{/* Front */}
				<div className="flip-box-face absolute w-full rounded-3xl font-bebas">
					<div className="flex flex-col items-center rounded-3xl p-2.5 shadow-[0_0_5px_2px_rgba(50,50,50,0.25)]">
						<img
							className="w-full max-w-96 p-2.5 opacity-50"
							src={project.image}
							alt={project.name}
						/>
					</div>
					<h2 className="px-2 text-center text-xl tracking-wide text-neutral-900 dark:text-white">
						{project.name}
					</h2>
					{project.github && project.website && (
						<div className="flex w-full flex-row justify-evenly px-2 pt-6 text-emerald-400">
							{isPrivate ? (
								<p className="px-5">
									Due to this web app is now linking to police communication system for testing, no
									Demo or GitHub Repo provided
								</p>
							) : (
								<>
									<Button asChild className={linkButtonClass}>
										<a
											href={project.github}
											target="_blank"
											rel="noreferrer"
											onClick={(event) => event.stopPropagation()}
										>
											Github
										</a>
									</Button>
									<Button asChild className={linkButtonClass}>
										<a
											href={project.website}
											target="_blank"
											rel="noreferrer"
											onClick={(event) => event.stopPropagation()}
										>
											Demo
										</a>
									</Button>
								</>
							)}
						</div>
					)}
				</div>

				{/* Back */}
				<div className="flip-box-face flip-box-back absolute flex min-h-96 w-full flex-col items-start justify-start overflow-hidden rounded-3xl p-2 font-titillium text-neutral-900 dark:text-white">
					<div className="px-2 font-teko tracking-wider">
						<h2>{project.name}</h2>
						<h2>Duration: {project.duration}</h2>
						<h2>Client: {project.company}</h2>
					</div>
					<div className="flex w-full flex-col items-center pt-0 text-sky-800 dark:text-sky-100">
						<div className="grid grid-cols-3 gap-2 py-2">
							{project.technologies.map((tech) => (
								<Badge
									key={tech}
									asChild
									variant="ghost"
									className="h-auto justify-center rounded-none border-0 border-r-2 border-r-neutral-800 px-0 pr-2 text-xs font-normal whitespace-normal text-sky-800 transition-[transform,z-index] duration-500 hover:z-10 hover:translate-x-4 hover:animate-pulse hover:bg-transparent hover:text-sky-800 dark:border-r-gray-200 dark:text-sky-100 dark:hover:text-sky-100"
								>
									<a
										href={`https://www.google.co.nz/search?q=${encodeURIComponent(tech)}`}
										target="_blank"
										rel="noreferrer"
										onClick={(event) => event.stopPropagation()}
									>
										{tech}
									</a>
								</Badge>
							))}
						</div>
					</div>
					<div className="flex w-full flex-col items-center justify-center overflow-hidden px-2 pt-2">
						<RichText html={project.desc} className="text-xs" />
					</div>
				</div>
			</Card>
		</div>
	);
}
