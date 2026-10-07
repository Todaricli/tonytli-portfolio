import { Link } from '@tanstack/react-router';

import { site } from '@/data/site';

const ctaClass =
	'type-label border-b border-current pb-1 transition-colors duration-300 hover:text-brand';

/** Landing block: status labels, oversized name, intro and two text CTAs. */
export function Hero() {
	const [first, middle, last] = site.name.split(' ');

	return (
		<section
			id="top"
			className="mx-auto flex max-w-[1600px] flex-col gap-10 px-4 pt-16 pb-16 tablet:px-8 tablet:pt-24 laptop:px-12 laptop:pt-32 laptop:pb-24"
		>
			<div className="flex flex-wrap items-center gap-x-8 gap-y-2 type-label text-muted-foreground">
				<span>{site.role}</span>
				<span>{site.location}</span>
				<span className="flex items-center gap-2 text-ink">
					<span className="size-2 rounded-full bg-brand" aria-hidden />
					Open to opportunities
				</span>
			</div>

			<h1 className="-ml-[0.06em] type-display font-medium">
				{first} {middle}
				<br />
				<span className="text-brand">{last}</span>
			</h1>

			<div className="flex flex-col gap-8 border-t border-line pt-8 laptop:flex-row laptop:items-end laptop:justify-between">
				<p className="max-w-[46ch] type-body-lg text-muted-foreground">
					I'm Tony, a software developer passionate about creating thoughtful online experiences.
					Explore my work and discover how I can bring your digital ideas to life.
				</p>
				<div className="flex gap-8">
					<Link to="/" hash="work" className={ctaClass}>
						See work →
					</Link>
					<Link to="/" hash="contact" className={ctaClass}>
						Get in touch ↗
					</Link>
				</div>
			</div>
		</section>
	);
}
