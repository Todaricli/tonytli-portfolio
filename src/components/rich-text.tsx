import { cn } from '@/lib/utils';

/**
 * Renders the HTML description strings from src/data/*.ts.
 * Safe only because that content is authored in this repo; never pass user input.
 */
export function RichText({ html, className }: { html: string; className?: string }) {
	return <div className={cn('rich-text', className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
