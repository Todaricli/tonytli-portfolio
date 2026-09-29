import { Link } from '@tanstack/react-router';

import { ModeToggle } from '@/components/mode-toggle';
import { navLinks } from '@/data/site';

/** Desktop navigation (tablet breakpoint and up); theme toggle sits top-left. */
export function SiteHeader() {
	return (
		<div className="hidden flex-row justify-between p-2 font-titillium text-neutral-700 tablet:flex dark:text-gray-300">
			<h1 className="sr-only">Tony T Li</h1>
			<ModeToggle />
			<nav className="flex w-1/2 flex-row justify-evenly">
				{navLinks.map((link) => (
					<Link
						key={link.to}
						to={link.to}
						className="transition-[transform,color] duration-1000 hover:translate-y-3"
					>
						{link.label}
					</Link>
				))}
			</nav>
		</div>
	);
}
