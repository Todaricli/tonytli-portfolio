import { Link } from '@tanstack/react-router';
import { ChevronUp, List } from 'lucide-react';

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

/** Floating hamburger menu shown below the tablet breakpoint. */
export function MobileNav({ open, onOpenChange }: MobileNavProps) {
	return (
		<div className="fixed top-11 left-5 z-20 hover:animate-pulse tablet:hidden">
			<DropdownMenu open={open} onOpenChange={onOpenChange}>
				<DropdownMenuTrigger aria-label={open ? 'Close menu' : 'Open menu'} className="text-white">
					{open ? <ChevronUp className="size-8" /> : <List className="size-8" />}
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="start"
					sideOffset={12}
					className="w-72 animate-dropdown-items rounded-2xl p-2 font-titillium text-2xl text-white shadow-none ring-0"
				>
					<nav className="flex flex-col items-center justify-evenly gap-5">
						{navLinks.map((link) => (
							<DropdownMenuItem
								key={link.to}
								asChild
								className="justify-center text-2xl transition-[transform,color] duration-1000 hover:translate-x-5 hover:text-stone-400 focus:bg-transparent focus:text-stone-400"
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
