/** Site-wide constants shared by the header, hero, footer, about, skills and contact sections. */
export const site = {
	name: 'TONY TUOCHENG LI',
	wordmark: 'TONY T. LI',
	role: 'Software Developer',
	location: 'Auckland, NZ',
	tagline: 'Somewhere between finance and code.',
	email: 'leetony347@yahoo.com',
	github: 'https://github.com/Todaricli',
	linkedin: 'https://www.linkedin.com/in/tuocheng-li-b86b59231/',
	/** getform.io endpoint the contact form POSTs to. */
	contactFormAction: 'https://getform.io/f/pagxpqeb'
} as const;

/** Home page sections; `hash` is both the element id and the nav target (`/#work`). */
export const navLinks = [
	{ hash: 'work', label: 'Work' },
	{ hash: 'experience', label: 'Experience' },
	{ hash: 'about', label: 'About' },
	{ hash: 'skills', label: 'Skills' },
	{ hash: 'contact', label: 'Contact' }
] as const;

export type SectionHash = (typeof navLinks)[number]['hash'];

/** Numbered skillset grid in the skills section. */
export const skills = [
	{
		title: 'Frontend',
		desc: 'React, TypeScript, JavaScript, HTML5 and CSS: accessible, responsive interfaces with modern tooling like TanStack Router, Tailwind and shadcn/ui.'
	},
	{
		title: 'Backend',
		desc: 'Node.js, Express, Java and Python services backed by SQL, PostgreSQL and MongoDB, currently building the backend of the CPNZ Patrol App.'
	},
	{
		title: 'Cloud & Data',
		desc: 'Google Cloud Platform, Pub/Sub and the Gmail API, plus a finance and economics background that makes data feel familiar.'
	},
	{
		title: 'Communication',
		desc: 'Tutoring, retail and advisory roles taught me to explain technical ideas clearly and to work closely with the people who use the software.'
	}
] as const;
