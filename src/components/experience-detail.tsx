import { RichText } from '@/components/rich-text';
import type { Experience } from '@/data/types';

const keyInfoClass =
	'flex flex-col justify-end border-b border-black/15 font-bebas dark:border-white/20';

/** Body of /experiences/$slug. */
export function ExperienceDetail({ experience }: { experience: Experience }) {
	return (
		<div className="flex flex-col items-center tablet:grid tablet:grid-cols-2 tablet:items-start">
			<div className="col-span-1 flex flex-col items-center justify-center pr-6">
				<div className="flex h-96 w-96 flex-col items-center justify-center rounded-3xl bg-gray-100 p-2 tablet:h-64 tablet:w-auto">
					<img
						className="w-full tablet:max-w-64"
						src={experience.image}
						alt={experience.job_title}
					/>
				</div>
				<div className="mt-6 flex flex-row gap-5 pb-10 pl-6 text-xl tracking-wider text-neutral-700 opacity-100 tablet:flex-col tablet:items-start tablet:gap-0 laptop:items-center dark:text-gray-200">
					<div className={keyInfoClass}>
						<p>{experience.job_title}</p>
					</div>
					<div className={`${keyInfoClass} tablet:pt-4 laptop:text-center`}>
						<p>Tenure: {experience.tenure} Months</p>
						<p>
							From {experience.start} to {experience.end}
						</p>
					</div>
					<div className={`${keyInfoClass} tablet:pt-4`}>
						<p>{experience.address}</p>
					</div>
				</div>
			</div>
			<div className="col-span-1 pr-8 text-sm text-neutral-900 dark:text-white">
				<h1 className="pb-4 font-teko text-3xl">ABOUT THIS ROLE</h1>
				<RichText html={experience.desc} className="mb-[50px] tablet:text-sm laptop:text-[16px]" />
			</div>
		</div>
	);
}
