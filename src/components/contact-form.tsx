import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/data/site';

// Underline-only fields, as in the original design
const fieldClass =
	'h-auto rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-1 text-2xl placeholder:text-gray-400/25 focus-visible:ring-0 dark:bg-transparent';

const otherContacts = [
	{ href: `mailto:${site.email}`, label: site.email },
	{ href: site.github, label: 'Github' },
	{ href: site.linkedin, label: 'Linkedin' }
];

/** Contact page body. Plain HTML form POST to getform.io (no JS submit handling). */
export function ContactForm() {
	return (
		<div className="flex animate-page flex-col items-center justify-center pb-12 tablet:py-16 laptop:min-h-screen laptop:py-24">
			<div className="px-24 pt-12 transition-[padding,transform] duration-1000 laptop:py-24">
				<h2 className="font-titillium text-3xl text-white opacity-75 transition-[font-size,padding] duration-1000 tablet:text-6xl laptop:text-8xl desktop:px-14 desktop:text-9xl">
					Let's start on something incredible together
				</h2>
			</div>

			<div className="flex flex-col items-center justify-between pt-8 pb-12 text-white tablet:grid tablet:grid-cols-4 tablet:items-start">
				<div className="col-span-3 flex flex-col items-center justify-center text-2xl">
					<form action={site.contactFormAction} method="POST" className="w-60">
						<div className="flex flex-col items-center justify-center gap-8">
							<div className="flex w-full flex-col gap-4">
								<Label htmlFor="name" className="text-2xl font-normal">
									Name:
								</Label>
								<Input
									required
									id="name"
									type="text"
									name="name"
									placeholder="Tony Li"
									autoComplete="on"
									className={fieldClass}
								/>
							</div>
							<div className="flex w-full flex-col gap-4">
								<Label htmlFor="email" className="text-2xl font-normal">
									Email:
								</Label>
								<Input
									required
									id="email"
									type="email"
									name="email"
									placeholder={site.email}
									autoComplete="on"
									className={fieldClass}
								/>
							</div>
							<div className="flex w-full flex-col items-start gap-4">
								<Label htmlFor="message" className="text-2xl font-normal">
									Message:
								</Label>
								<Textarea
									id="message"
									name="message"
									placeholder="Hello Tony, I would like..."
									className={`${fieldClass} min-h-48`}
								/>
							</div>
							{/* Honeypot field to deter spam bots */}
							<input type="hidden" name="_gotcha" style={{ display: 'none' }} />

							<Button
								type="submit"
								className="h-auto rounded-lg bg-gray-600 p-2 font-mono text-lg font-normal text-white transition-transform duration-2000 hover:translate-x-5 hover:animate-button-effect hover:bg-gray-600"
							>
								Lets chat!
							</Button>
						</div>
					</form>
				</div>
				<div className="flex flex-col items-start justify-center gap-2 pt-16 tablet:pt-2">
					<h1 className="border-b border-white/20 pb-2">Other Contacts:</h1>
					{otherContacts.map((contact) => (
						<span
							key={contact.label}
							className="py-2 hover:animate-bounce hover:border-b hover:border-white/50"
						>
							<a className="py-2" href={contact.href} target="_blank" rel="noreferrer">
								{contact.label}
							</a>
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
