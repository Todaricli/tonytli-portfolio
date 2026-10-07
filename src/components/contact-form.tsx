import { useEffect, useRef } from 'react';
import type { FormEvent } from 'react';

import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/data/site';
import { useReveal } from '@/hooks/use-reveal';

// Underline-only fields
const fieldClass =
	'h-auto rounded-none border-0 border-b border-line bg-transparent px-0 py-2 type-body-lg shadow-none placeholder:text-muted-foreground/60 focus-visible:border-brand focus-visible:ring-0 dark:bg-transparent';
const labelClass = 'type-label font-normal text-muted-foreground';
const contactLinkClass =
	'type-body-lg border-b border-line pb-1 transition-colors duration-300 hover:border-brand hover:text-brand';

const otherContacts = [
	{ href: `mailto:${site.email}`, label: site.email },
	{ href: site.github, label: 'GitHub ↗' },
	{ href: site.linkedin, label: 'LinkedIn ↗' }
];

// Humans need a few seconds to fill the form; scripted posts usually don't wait.
const MIN_FILL_MS = 3000;

/** #contact: native HTML form POST to getform.io, guarded by a honeypot + time trap. */
export function ContactForm() {
	const ref = useReveal<HTMLElement>();
	const mountedAt = useRef(0);

	useEffect(() => {
		mountedAt.current = Date.now();
	}, []);

	// Silently drop likely-bot submissions; real ones fall through to the native POST.
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		const honeypot = new FormData(event.currentTarget).get('_gotcha');
		const tooFast = Date.now() - mountedAt.current < MIN_FILL_MS;
		if (honeypot || tooFast) event.preventDefault();
	}

	return (
		<section
			ref={ref}
			id="contact"
			data-reveal
			className="mx-auto max-w-[1600px] scroll-mt-16 px-4 py-20 tablet:px-8 laptop:px-12 laptop:py-32"
		>
			<SectionHeading index="05" label="Contact" className="pb-12 laptop:pb-20">
				Let's <span className="text-brand">build</span> something.
			</SectionHeading>

			<div className="grid gap-16 laptop:grid-cols-[1fr_minmax(0,0.6fr)]">
				<form
					action={site.contactFormAction}
					method="POST"
					onSubmit={handleSubmit}
					className="flex flex-col gap-10"
				>
					<div className="grid gap-10 tablet:grid-cols-2">
						<div className="flex flex-col gap-2">
							<Label htmlFor="name" className={labelClass}>
								Name
							</Label>
							<Input
								required
								id="name"
								type="text"
								name="name"
								placeholder="Your name"
								autoComplete="name"
								className={fieldClass}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="email" className={labelClass}>
								Email
							</Label>
							<Input
								required
								id="email"
								type="email"
								name="email"
								placeholder="you@example.com"
								autoComplete="email"
								className={fieldClass}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="message" className={labelClass}>
							Message
						</Label>
						<Textarea
							id="message"
							name="message"
							placeholder="Hello Tony, I would like..."
							className={`${fieldClass} min-h-40 resize-y`}
						/>
					</div>
					{/* Honeypot: a real text field moved off-screen (not type=hidden / display:none,
					    which bots skip). Humans never fill it; getform rejects posts where _gotcha is set. */}
					<div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
						<label htmlFor="website">Website</label>
						<input id="website" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
					</div>

					<Button
						type="submit"
						className="h-auto self-start rounded-none bg-brand px-8 py-4 type-label text-canvas transition-opacity duration-300 hover:bg-brand hover:opacity-85"
					>
						Send details ↗
					</Button>
				</form>

				<div className="flex flex-col items-start gap-4">
					<p className="type-label text-muted-foreground">Or reach me directly</p>
					{otherContacts.map((contact) => (
						<a
							key={contact.label}
							href={contact.href}
							target="_blank"
							rel="noreferrer"
							className={contactLinkClass}
						>
							{contact.label}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
