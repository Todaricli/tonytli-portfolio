/** Site-wide constants shared by the header, footer, about and contact sections. */
export const site = {
	name: 'TONY TUOCHENG LI',
	email: 'leetony347@yahoo.com',
	github: 'https://github.com/Todaricli',
	linkedin: 'https://www.linkedin.com/in/tuocheng-li-b86b59231/',
	/** getform.io endpoint the contact form POSTs to. */
	contactFormAction: 'https://getform.io/f/pagxpqeb'
} as const;

export const navLinks = [
	{ to: '/', label: 'Home' },
	{ to: '/experiences', label: 'Experiences' },
	{ to: '/projects', label: 'Projects' },
	{ to: '/about', label: 'About' },
	{ to: '/contact', label: 'Contact' }
] as const;
