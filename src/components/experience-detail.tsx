import { RichText } from '@/components/rich-text';
import type { Experience } from '@/data/types';

/** Body of /experiences/$slug. */
export function ExperienceDetail({ experience }: { experience: Experience }) {
	const facts = [
		{ label: 'Company', value: experience.company },
		{ label: 'Location', value: experience.address },
		{ label: 'Period', value: `${experience.start} – ${experience.end}` },
		{ label: 'Tenure', value: `${experience.tenure} months` }
	];

	return (
		<article className="flex flex-col gap-12">
			<h1 className="type-section font-medium">{experience.job_title}</h1>

			<dl className="grid gap-6 border-y border-line py-6 tablet:grid-cols-2 laptop:grid-cols-4">
				{facts.map((fact) => (
					<div key={fact.label} className="flex flex-col gap-1">
						<dt className="type-label text-muted-foreground">{fact.label}</dt>
						<dd className="type-body">{fact.value}</dd>
					</div>
				))}
			</dl>

			<div className="grid gap-12 laptop:grid-cols-[16rem_1fr] laptop:gap-16">
				<div className="flex aspect-square w-48 items-center justify-center bg-white p-6 laptop:w-full">
					<img src={experience.image} alt={experience.company} className="max-h-full max-w-full" />
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="type-label text-muted-foreground">About this role</h2>
					<RichText html={experience.desc} className="max-w-[65ch] type-body-lg" />
				</div>
			</div>
		</article>
	);
}
