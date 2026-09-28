import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

import { site } from '@/data/site';

const socials = [
	{ href: site.github, label: 'GitHub', Icon: FaGithub },
	{ href: site.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
	{ href: `mailto:${site.email}`, label: 'Email', Icon: FaEnvelope }
];

export function SiteFooter() {
	return (
		<footer className="mb-5 flex flex-col items-center justify-center pt-28 text-center text-white opacity-50">
			<div className="flex flex-row justify-evenly gap-2 text-2xl">
				{socials.map(({ href, label, Icon }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={label}
						className="hover:scale-110 hover:text-amber-300"
					>
						<Icon />
					</a>
				))}
			</div>
			<div className="flex flex-col items-center">
				<h1 className="text-xl font-bold underline">{site.name}</h1>
				<span>
					Company images from{' '}
					<a className="underline" href="https://www.pngwing.com/en/search?q=king">
						PNGWING
					</a>
				</span>
			</div>
		</footer>
	);
}
