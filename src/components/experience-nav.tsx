import { Link } from '@tanstack/react-router';
import { ChevronUp, Menu } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { experiences } from '@/data/experiences';

const headingClass = 'border-b border-white/20 font-teko text-2xl text-gray-400';
const linkClass =
	'inline-block font-titillium transition-transform duration-1000 hover:translate-x-5 hover:animate-pulse';
const activeLinkClass = 'border-b border-white/20';

/** "OTHER EXPERIENCES" sidebar (tablet+). */
export function ExperienceSidebar() {
	return (
		<aside className="col-span-2 hidden w-5/6 tablet:flex tablet:w-auto">
			<div className="flex flex-col">
				<h2 className={headingClass}>OTHER EXPERIENCES</h2>
				<ul className="mt-4 flex flex-col">
					{experiences.map((experience) => (
						<li key={experience.slug} className="pb-1 text-white">
							<Link
								to="/experiences/$slug"
								params={{ slug: experience.slug }}
								className={linkClass}
								activeProps={{ className: activeLinkClass }}
							>
								{experience.job_title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}

interface ExperienceMenuProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

/** Floating experiences menu (below tablet), top-right. */
export function ExperienceMenu({ open, onOpenChange }: ExperienceMenuProps) {
	return (
		<div className="fixed top-10 right-5 z-20 hover:animate-pulse tablet:hidden">
			<DropdownMenu open={open} onOpenChange={onOpenChange}>
				<DropdownMenuTrigger
					aria-label={open ? 'Close experiences menu' : 'Open experiences menu'}
					className="text-white"
				>
					{open ? <ChevronUp className="size-8" /> : <Menu className="size-8" />}
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="end"
					sideOffset={8}
					className="w-80 animate-dropdown-items rounded-2xl p-2 shadow-none ring-0"
				>
					<h2 className={headingClass}>OTHER EXPERIENCES</h2>
					<div className="mt-4 flex flex-col items-center gap-4 text-xl text-white">
						{experiences.map((experience) => (
							<DropdownMenuItem
								key={experience.slug}
								asChild
								className="text-xl focus:bg-transparent focus:text-white"
							>
								<Link
									to="/experiences/$slug"
									params={{ slug: experience.slug }}
									className={linkClass}
									activeProps={{ className: activeLinkClass }}
								>
									{experience.job_title}
								</Link>
							</DropdownMenuItem>
						))}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
