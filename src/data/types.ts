export interface Experience {
	/** URL-safe id used in /experiences/$slug (lowercase, hyphenated). */
	slug: string;
	job_title: string;
	/** Length in months. */
	tenure: number;
	/** MM/YYYY */
	start: string;
	/** MM/YYYY or "current" */
	end: string;
	/** Trusted static HTML, rendered with dangerouslySetInnerHTML. */
	desc: string;
	/** Absolute path under public/, e.g. /company_icon/uoa.png */
	image: string;
	company: string;
	address: string;
}

export interface Project {
	slug: string;
	name: string;
	duration: string;
	/** Client or context, shown as "Client: ..." */
	company: string;
	/** Absolute path under public/, e.g. /project_icon/blog.png */
	image: string;
	/** Repo URL, or 'private' to hide the buttons and show a notice. */
	github: string;
	/** Live demo URL, or 'private'. */
	website: string;
	technologies: string[];
	/** Trusted static HTML, rendered with dangerouslySetInnerHTML. */
	desc: string;
}
