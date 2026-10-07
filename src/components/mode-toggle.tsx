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
					'relative flex size-8 items-center justify-center border border-line transition-colors duration-300 hover:border-brand hover:text-brand',
					className
				)}
			>
				<Sun className="size-4 scale-100 transition-transform duration-300 dark:scale-0" />
				<Moon className="absolute size-4 scale-0 transition-transform duration-300 dark:scale-100" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="start"
				sideOffset={14}
				className="w-40 border border-line p-2 shadow-none ring-0"
			>
				{options.map((option) => (
					<DropdownMenuItem
						key={option.value}
						onSelect={() => setTheme(option.value)}
						className="cursor-pointer justify-between py-2 font-grotesk text-sm tracking-[0.06em] uppercase focus:bg-muted focus:text-brand"
					>
						{option.label}
						{theme === option.value && <Check className="size-4 text-brand" aria-hidden />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
