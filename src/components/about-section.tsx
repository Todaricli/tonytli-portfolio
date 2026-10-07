import { SectionHeading } from '@/components/section-heading';
import { site } from '@/data/site';
import { useReveal } from '@/hooks/use-reveal';

/** #about: inverted "night" block with photo and summary. */
export function AboutSection() {
	const ref = useReveal<HTMLDivElement>();

	return (
		<section id="about" className="surface-night scroll-mt-16 dark:border-y dark:border-line">
			<div
				ref={ref}
				data-reveal
				className="mx-auto max-w-[1600px] px-4 py-20 tablet:px-8 laptop:px-12 laptop:py-32"
			>
				<SectionHeading index="03" label="About" className="pb-12 laptop:pb-20">
					About Me
				</SectionHeading>

				<div className="grid gap-12 laptop:grid-cols-[minmax(0,0.8fr)_1fr] laptop:gap-16">
					<figure className="flex flex-col gap-3">
						<img
							src="/about_icon/tony.jpg"
							alt="Tony Tuocheng Li"
							className="aspect-4/5 w-full max-w-md object-cover grayscale-20"
						/>
						<figcaption className="type-label text-muted-foreground">
							{site.name} — {site.location}
						</figcaption>
					</figure>

					<div className="flex max-w-[62ch] flex-col gap-5 type-body-lg text-ink/85">
						<p>
							My name is Tuocheng Li, also known as Tony, and I am currently pursuing a Master of
							Information Technology at the University of Auckland. My transition into ICT began
							during the final year of my Bachelor's in Finance and Economics, when a demo of
							Microsoft's Bing AI analysing a financial report faster than an experienced analyst
							sparked my interest in technology.
						</p>
						<p>
							I am passionate about software development, drawn to its constant learning and
							problem-solving opportunities. I have skills in JavaScript, TypeScript, Java, Python,
							HTML5, CSS, SQL, and frameworks such as React, Node.js, PostgreSQL, and MongoDB. I'm
							also experienced with Google Cloud Platform, Pub/Sub, and Gmail API.
						</p>
						<p>
							A key project I'm working on is the CPNZ Patrol App, where I contribute as a backend
							developer. I've also enhanced platforms like Lecturmo by adding AI-driven features.
						</p>
						<p>
							What sets me apart is my ability to bridge technical expertise with strong
							communication skills, refined through roles in retail, teaching, and finance. In my
							free time, I enjoy hiking and immersing myself in nature, a peaceful escape from the
							fast pace of daily life.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
