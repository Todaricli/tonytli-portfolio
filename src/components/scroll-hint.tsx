import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

/** Bouncing chevron under the big page titles (laptop and up). */
export function ScrollHint({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'hidden w-full animate-bounce flex-row items-center justify-center text-2xl text-white opacity-50 laptop:flex',
				className
			)}
		>
			<ChevronDown className="size-7" aria-hidden />
		</div>
	);
}
