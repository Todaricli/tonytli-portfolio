import { createFileRoute } from '@tanstack/react-router';

import { ExperienceCard } from '@/components/experience-card';
import { ScrollHint } from '@/components/scroll-hint';
import { experiences } from '@/data/experiences';

export const Route = createFileRoute('/experiences/')({
	staticData: { loaderLabel: 'Experience.' },
	loader: () => ({ experiences }),
	component: ExperiencesPage
});

function ExperiencesPage() {
	const { experiences } = Route.useLoaderData();

	return (
		<div className="flex h-full w-full animate-page flex-col items-center justify-center px-16 py-4">
			<div className="mb-12 flex w-full flex-col items-start pt-24 transition-[margin,transform,padding] duration-800 tablet:ml-6 laptop:mb-0 laptop:min-h-screen">
				<div className="font-titillium text-lg text-black transition-[margin,transform,padding] duration-800 tablet:w-[400px] tablet:pb-4 tablet:pl-16 laptop:pb-24 laptop:pl-14">
					<p>
						With a rich history spanning Finance, Economic,and Information Technology, I bring a
						wealth of experience as a developer, analyst and investment advisor. My journey reflects
						a commitment to innovation, collaboration, and driving measurable impact in dynamic,
						global environments.
					</p>
				</div>
				<h1 className="mt-8 pt-2 font-titillium text-6xl text-neutral-900 opacity-70 transition-[margin,transform,padding] duration-1000 tablet:translate-x-24 tablet:scale-[1.8] laptop:translate-x-80 laptop:scale-[2.8] laptop:pr-0 desktop:translate-x-[530px] desktop:scale-[3.5] dark:text-white">
					MY EXPERIENCE
				</h1>
				<ScrollHint className="laptop:pt-36 desktop:pt-48" />
			</div>

			<div className="flex flex-col items-center justify-center gap-16 border-t border-black/15 pt-12 pb-24 tablet:grid tablet:grid-cols-2 dark:border-white/20">
				{experiences.map((experience) => (
					<ExperienceCard key={experience.slug} experience={experience} />
				))}
			</div>
		</div>
	);
}
