import { site } from '@/data/site';

const socials = [
	{ href: site.github, label: 'GitHub' },
	{ href: site.linkedin, label: 'LinkedIn' },
	{ href: `mailto:${site.email}`, label: 'Email' }
];

export function SiteFooter() {
	return (
		<footer className="border-t border-line">
			<div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-4 pt-16 pb-8 tablet:px-8 laptop:px-12">
				<p className="type-section font-medium text-ink/15" aria-hidden>
					{site.wordmark}
				</p>
				<div className="flex flex-col gap-6 border-t border-line pt-6 tablet:flex-row tablet:items-center tablet:justify-between">
					<p className="type-body text-muted-foreground">{site.tagline}</p>
					<nav aria-label="Social" className="flex gap-6">
						{socials.map(({ href, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								className="type-label transition-colors duration-300 hover:text-brand"
							>
								{label}
							</a>
						))}
					</nav>
				</div>
				<div className="flex flex-col gap-2 type-label text-muted-foreground tablet:flex-row tablet:justify-between">
					<span>© 2026 Tony Tuocheng Li</span>
					<span>
						Company images from{' '}
						<a
							className="underline hover:text-brand"
							href="https://www.pngwing.com/en/search?q=king"
							target="_blank"
							rel="noreferrer"
						>
							PNGWING
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}
