import { SectionHeading } from '@/components/section-heading';
import { skills } from '@/data/site';
import { useReveal } from '@/hooks/use-reveal';

/** #skills: numbered skillset grid between hairlines. */
export function SkillsSection() {
	const ref = useReveal<HTMLElement>();

	return (
		<section
			ref={ref}
			id="skills"
			data-reveal
			className="mx-auto max-w-[1600px] scroll-mt-16 px-4 py-20 tablet:px-8 laptop:px-12 laptop:py-32"
		>
			<SectionHeading index="04" label="Skills" className="pb-12 laptop:pb-20">
				What I Bring
			</SectionHeading>

			<ol className="grid border-y border-line tablet:grid-cols-2 laptop:grid-cols-4">
				{skills.map((skill, index) => (
					<li
						key={skill.title}
						className="flex flex-col gap-4 border-b border-line py-8 last:border-b-0 tablet:pr-8 tablet:nth-last-2:border-b-0 laptop:border-b-0"
					>
						<span className="type-label text-brand">{String(index + 1).padStart(2, '0')}</span>
						<span className="font-display text-2xl font-medium tracking-tight">{skill.title}</span>
						<p className="type-body text-muted-foreground">{skill.desc}</p>
					</li>
				))}
			</ol>
		</section>
	);
}
