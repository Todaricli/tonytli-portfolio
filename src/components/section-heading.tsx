import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
	index: string;
	label: string;
	children: ReactNode;
	className?: string;
}

/** Numbered label ("01 — Work") above a large section title. */
export function SectionHeading({ index, label, children, className }: SectionHeadingProps) {
	return (
		<div className={cn('flex flex-col gap-4 tablet:gap-6', className)}>
			<p className="type-label text-muted-foreground">
				<span className="text-brand">{index}</span> — {label}
			</p>
			<h2 className="type-section font-medium">{children}</h2>
		</div>
	);
}
