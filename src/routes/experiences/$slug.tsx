import { createFileRoute, notFound } from '@tanstack/react-router';
import { useState } from 'react';

import { ExperienceDetail } from '@/components/experience-detail';
import { ExperienceMenu, ExperienceSidebar } from '@/components/experience-nav';
import { getExperience } from '@/data/experiences';
import { TABLET_QUERY, useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

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
	const isTablet = useMediaQuery(TABLET_QUERY);
	const [menuOpen, setMenuOpen] = useState(false);
	const navOpen = menuOpen && !isTablet;

	return (
		<div className="flex w-full animate-experience-fast flex-col items-center justify-start px-8 pt-24">
			<div className="flex flex-col items-center justify-center gap-4 pt-12 tablet:grid tablet:w-5/6 tablet:grid-cols-6 tablet:items-start">
				<main
					className={cn(
						'col-span-4 transition-opacity duration-1000 laptop:min-h-screen',
						navOpen && 'opacity-25'
					)}
				>
					{/* key replays the fade-in when switching between experiences */}
					<div key={experience.slug} className="animate-experience">
						<ExperienceDetail experience={experience} />
					</div>
				</main>
				<ExperienceSidebar />
				<ExperienceMenu open={navOpen} onOpenChange={setMenuOpen} />
			</div>
		</div>
	);
}
