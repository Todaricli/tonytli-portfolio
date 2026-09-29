import { Link } from '@tanstack/react-router';

import type { Experience } from '@/data/types';

/** Grid card on /experiences linking to the detail page. */
export function ExperienceCard({ experience }: { experience: Experience }) {
	return (
		<div className="group flex w-full flex-col items-start justify-start rounded-3xl">
			<div className="flex h-96 flex-col items-center justify-center rounded-3xl bg-gray-300">
				<img
					className="w-full max-w-96 opacity-50 group-hover:animate-image"
					src={experience.image}
					alt={experience.company}
				/>
			</div>
			<div className="flex flex-col items-start justify-start gap-4 pr-14 pl-2 font-serif text-xl text-slate-700 dark:text-slate-300">
				<p className="pt-2 text-sm">Tenure: {experience.tenure} Months</p>
				<div className="p-2 pl-0">
					<Link
						to="/experiences/$slug"
						params={{ slug: experience.slug }}
						className="inline-block text-center transition-[margin,transform,padding,color] duration-800 hover:translate-x-10 hover:text-stone-600"
					>
						{experience.job_title} &#8594;
					</Link>
				</div>
			</div>
		</div>
	);
}
