import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { navLinks, site } from '@/data/site';
import { TABLET_QUERY, useMediaQuery } from '@/hooks/use-media-query';

const navLinkClass = 'type-label transition-colors duration-300 hover:text-brand';

/** Sticky top bar: theme toggle + wordmark on the left, section links on the right. */
export function SiteHeader() {
	const isTablet = useMediaQuery(TABLET_QUERY);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-4 tablet:px-8 laptop:px-12">
				<div className="flex items-center gap-4">
					<ModeToggle />
					<Link to="/" hash="top" className="font-grotesk text-sm font-medium tracking-[0.08em]">
						{site.wordmark}
					</Link>
				</div>

				<nav aria-label="Main" className="hidden items-center gap-6 tablet:flex laptop:gap-8">
					{navLinks.map((link) => (
						<Link key={link.hash} to="/" hash={link.hash} className={navLinkClass}>
							{link.label}
						</Link>
					))}
					<a
						href={`mailto:${site.email}`}
						className="hidden type-label text-brand hover:underline laptop:inline"
					>
						{site.email}
					</a>
				</nav>

				{/* The menu can't stay open once the desktop nav takes over */}
				<DropdownMenu open={menuOpen && !isTablet} onOpenChange={setMenuOpen}>
					<DropdownMenuTrigger
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						className="flex size-8 items-center justify-center tablet:hidden"
					>
						{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						sideOffset={14}
						className="w-56 border border-line p-2 shadow-none ring-0"
					>
						{navLinks.map((link) => (
							<DropdownMenuItem
								key={link.hash}
								asChild
								className="cursor-pointer py-2 font-grotesk text-sm tracking-[0.06em] uppercase focus:bg-muted focus:text-brand"
							>
								<Link to="/" hash={link.hash}>
									{link.label}
								</Link>
							</DropdownMenuItem>
						))}
						<DropdownMenuItem
							asChild
							className="cursor-pointer py-2 font-grotesk text-xs text-brand focus:bg-muted focus:text-brand"
						>
							<a href={`mailto:${site.email}`}>{site.email}</a>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
