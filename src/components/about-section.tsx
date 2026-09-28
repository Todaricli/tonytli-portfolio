import { site } from '@/data/site';

const keyInfoHeading = 'flex flex-col justify-end border-b border-white/20 font-bebas';
const contactLink = 'text-sm transition-transform duration-1000 hover:translate-x-4';

export function AboutSection() {
	return (
		<div className="flex animate-page flex-col items-center gap-4 px-12 pt-24 transition-[padding,transform] duration-1000 tablet:grid tablet:grid-cols-6 tablet:px-16 laptop:min-h-screen laptop:px-56">
			<div className="col-span-2 flex h-full flex-col items-center justify-start">
				<div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-100 p-2 tablet:max-h-96">
					<img
						className="w-full rounded-3xl tablet:max-h-96"
						src="/about_icon/tony.jpg"
						alt="tony li"
					/>
				</div>
				<div className="flex flex-col items-start gap-5 pt-6 pb-10 pl-6 text-xl tracking-widest text-gray-200 opacity-100 tablet:gap-0 tablet:text-gray-200">
					<div>
						<h1 className={keyInfoHeading}>TONY TUOCHENG Li</h1>
					</div>
					<div className="tablet:pt-4">
						<div className="flex flex-col items-start justify-center gap-2 tablet:pt-0">
							<h1 className={keyInfoHeading}>Contacts:</h1>
							<span className={contactLink}>
								<a href={`mailto:${site.email}`}>{site.email}</a>
							</span>
							<span className={contactLink}>
								<a href={site.github} target="_blank" rel="noreferrer">
									Github
								</a>
							</span>
							<span className={contactLink}>
								<a href={site.linkedin} target="_blank" rel="noreferrer">
									Linkedin
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-2 flex h-full flex-col items-start text-sm text-white">
				<h1 className="pb-4 font-teko text-3xl">Summary</h1>
				<div className="mb-[50px] space-y-5 text-sm">
					<p>
						My name is Tuocheng Li, also known as Tony, and I am currently pursuing a Master of
						Information Technology at the University of Auckland. My transition into ICT began
						during the final year of my Bachelor’s in Finance and Economics, where a demo of
						Microsoft’s Bing AI analyzing a financial report can be much faster than a experienced
						analyst sparked my interest in technology.
					</p>
					<p>
						I am passionate about software development, drawn to its constant learning and
						problem-solving opportunities. I have skills in JavaScript, TypeScript, Java, Python,
						HTML5, CSS, SQL, and frameworks such as React, Node.js, PostgreSQL, and MongoDB. I’m
						also experienced with Google Cloud Platform, Pub/Sub, and Gmail API.
					</p>
					<p>
						A key project I’m working on is the CPNZ Patrol App, where I contribute as a backend
						developer. I’ve also enhanced platforms like Lecturmo by adding AI-driven features.
					</p>
					<p>
						What sets me apart is my ability to bridge technical expertise with strong communication
						skills, refined through roles in retail, teaching, and finance. In my free time, I enjoy
						hiking and immersing myself in nature, a peaceful escape from the fast pace of daily
						life.
					</p>
				</div>
			</div>
		</div>
	);
}
