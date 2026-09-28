import { createFileRoute } from '@tanstack/react-router';

import { ProjectCard } from '@/components/project-card';
import { ScrollHint } from '@/components/scroll-hint';
import { projects } from '@/data/projects';

export const Route = createFileRoute('/projects')({
	staticData: { loaderLabel: 'Projects.' },
	loader: () => ({ projects }),
	component: ProjectsPage
});

function ProjectsPage() {
	const { projects } = Route.useLoaderData();

	return (
		<div className="flex h-full w-full animate-page flex-col justify-center gap-5 px-2 pb-24 tablet:px-16 laptop:px-16">
			<div className="flex w-full flex-col items-start pt-24 pb-12 pl-14 transition-[margin,transform,padding,height] duration-1000 tablet:pb-16 laptop:min-h-screen laptop:pb-24">
				<div className="font-titillium text-lg text-black transition-[margin,transform,padding] duration-1000 tablet:w-[380px] tablet:pb-4 tablet:pl-16 laptop:pb-24 laptop:pl-14 desktop:pb-32">
					<p>
						During my academic journey, I've undertaken some projects, including a blogging web app
						for a course assignment at UOA and my personal web portfolio. These endeavors allowed me
						to demonstrate proficiency in modern technologies such as HTML, CSS, JavaScript, Svelte,
						Node.js, Express, and SQL.
					</p>
				</div>
				<h1 className="pt-10 font-titillium text-6xl text-white opacity-70 transition-[margin,transform,padding] duration-1000 tablet:translate-x-28 tablet:scale-[1.8] laptop:translate-x-80 laptop:scale-[2.8] laptop:pt-4 laptop:pr-0 desktop:translate-x-[500px] desktop:scale-[3.5]">
					MY PROJECTS
				</h1>
				<ScrollHint className="laptop:pt-36 desktop:pt-48" />
			</div>
			<div className="mx-6 flex flex-col items-center justify-center gap-16 border-t border-white/20 pt-12 tablet:mx-12 tablet:grid tablet:grid-cols-2 laptop:px-36 desktop:grid-cols-3 desktop:px-64">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</div>
	);
}
