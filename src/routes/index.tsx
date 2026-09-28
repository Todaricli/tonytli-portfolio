import { createFileRoute, Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
	staticData: { loaderLabel: 'Home.' },
	component: HomePage
});

const MARQUEE_TEXT = 'Tony T Li - Prospective Software Developer';

function HomePage() {
	return (
		<div className="flex min-h-screen flex-col justify-start">
			<div className="flex w-full flex-col items-start justify-center gap-5 p-28 pb-20 desktop:pt-32 desktop:pb-24 desktop:pl-44">
				<div className="flex flex-col items-start justify-start gap-5">
					<h3 className="text-lg text-gray-300 tablet:w-80">
						Welcome to Tony Tuocheng Li's World of Tech Wizardry! I'm Tony, a prospective Software
						developer passionate about creating stunning online experiences. Explore my portfolio
						and discover how I can bring your digital dreams to life.
					</h3>
					<Button
						asChild
						className="h-auto animate-pulse rounded-xl bg-stone-950 px-5 py-3 text-base font-normal text-gray-300 transition-[transform,color,background-color] duration-1000 hover:translate-x-5 hover:rounded-r-[100px] hover:bg-slate-300 hover:text-stone-800 hover:[animation-play-state:paused]"
					>
						<Link to="/projects">
							<span className="font-mono">PROJECTS</span>
						</Link>
					</Button>
				</div>
			</div>

			<div className="flex h-auto flex-col items-center justify-end overflow-hidden pb-24">
				<div className="overflow-hidden whitespace-nowrap text-white" aria-label={MARQUEE_TEXT}>
					{[0, 1, 2].map((copy) => (
						<div
							key={copy}
							aria-hidden
							className="inline-block animate-marquee pr-[10em] font-titillium"
						>
							<h1 className="text-[188px] desktop:text-[220px]">{MARQUEE_TEXT}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
