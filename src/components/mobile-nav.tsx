import { Link } from '@tanstack/react-router';
import { ChevronUp, List } from 'lucide-react';

import { ModeToggle } from '@/components/mode-toggle';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { navLinks } from '@/data/site';

interface MobileNavProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

/** Floating theme toggle + hamburger menu (top-left) shown below the tablet breakpoint. */
export function MobileNav({ open, onOpenChange }: MobileNavProps) {
	return (
		<div className="fixed top-11 left-5 z-20 flex items-center gap-4 tablet:hidden">
			<ModeToggle />
			<DropdownMenu open={open} onOpenChange={onOpenChange}>
				<DropdownMenuTrigger
					aria-label={open ? 'Close menu' : 'Open menu'}
					className="text-neutral-900 hover:animate-pulse dark:text-white"
				>
					{open ? <ChevronUp className="size-8" /> : <List className="size-8" />}
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="start"
					sideOffset={12}
					className="w-72 animate-dropdown-items rounded-2xl p-2 font-titillium text-2xl text-neutral-900 shadow-none ring-0 backdrop-blur-sm dark:text-white"
				>
					<nav className="flex flex-col items-center justify-evenly gap-5">
						{navLinks.map((link) => (
							<DropdownMenuItem
								key={link.to}
								asChild
								className="justify-center text-2xl transition-[transform,color] duration-1000 hover:translate-x-5 hover:text-stone-500 focus:bg-transparent focus:text-stone-500 dark:hover:text-stone-400 dark:focus:text-stone-400"
							>
								<Link to={link.to}>{link.label}</Link>
							</DropdownMenuItem>
						))}
					</nav>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
