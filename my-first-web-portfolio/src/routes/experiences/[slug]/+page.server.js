import { error } from '@sveltejs/kit';
import { jobExperiences } from '../experiences.js'

export function load({ params }) {
	const singleExperience = jobExperiences.find((experience) => experience.company === params.slug);

	if (!singleExperience) throw error(404);

	return {
		singleExperience
	};
}