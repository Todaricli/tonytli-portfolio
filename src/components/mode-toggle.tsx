import { Check, Moon, Sun } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTheme, type Theme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

const options: { value: Theme; label: string }[] = [
	{ value: 'light', label: 'Light' },
	{ value: 'dark', label: 'Dark' },
	{ value: 'system', label: 'System' }
];

/** Light / Dark / System theme picker (sun/moon trigger). */
export function ModeToggle({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				aria-label="Toggle theme"
				className={cn(
					'relative flex size-8 items-center justify-center text-neutral-900 transition-transform duration-1000 hover:rotate-45 dark:text-white',
					className
				)}
			>
				<Sun className="size-6 scale-100 rotate-0 transition-transform duration-500 dark:scale-0 dark:-rotate-90" />
				<Moon className="absolute size-6 scale-0 rotate-90 transition-transform duration-500 dark:scale-100 dark:rotate-0" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="start"
				sideOffset={12}
				className="w-40 animate-dropdown-items rounded-2xl p-2 font-titillium text-neutral-900 shadow-none ring-0 backdrop-blur-sm dark:text-white"
			>
				{options.map((option) => (
					<DropdownMenuItem
						key={option.value}
						onSelect={() => setTheme(option.value)}
						className="cursor-pointer justify-between text-lg transition-[transform,color] duration-1000 hover:translate-x-2 focus:bg-transparent focus:text-stone-500 dark:focus:text-stone-400"
					>
						{option.label}
						{theme === option.value && <Check className="size-4" aria-hidden />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
