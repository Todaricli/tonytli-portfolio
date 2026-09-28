import { Link } from '@tanstack/react-router';

import { navLinks } from '@/data/site';

/** Desktop navigation (tablet breakpoint and up). */
export function SiteHeader() {
	return (
		<div className="hidden flex-row justify-between p-2 font-titillium text-gray-300 tablet:flex">
			<h1 className="invisible">Tony T Li</h1>
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
