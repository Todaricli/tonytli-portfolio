import { createFileRoute, Link, notFound } from '@tanstack/react-router';

import { ExperienceDetail } from '@/components/experience-detail';
import { OtherRoles } from '@/components/experience-nav';
import { getExperience } from '@/data/experiences';

export const Route = createFileRoute('/experiences/$slug')({
	loader: ({ params }) => {
		const experience = getExperience(params.slug);
		if (!experience) throw notFound();
		return { experience };
	},
	component: ExperiencePage
});

function ExperiencePage() {
	const { experience } = Route.useLoaderData();

	return (
		<div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-4 pt-12 pb-24 tablet:px-8 laptop:px-12 laptop:pt-20">
			<Link
				to="/"
				hash="experience"
				className="self-start type-label transition-colors duration-300 hover:text-brand"
			>
				← Back to experience
			</Link>

			<div className="grid gap-16 laptop:grid-cols-[1fr_18rem]">
				{/* key replays the fade-in when switching between roles */}
				<div key={experience.slug} className="animate-in duration-500 fade-in">
					<ExperienceDetail experience={experience} />
				</div>
				<OtherRoles className="laptop:sticky laptop:top-28 laptop:self-start" />
			</div>
		</div>
	);
}
