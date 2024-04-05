import { error } from '@sveltejs/kit';
import { jobExperiences } from '../experiences.js'
import exp from 'constants';

export function load({ params }) {
	const singleExperience = jobExperiences.find((experience) => experience.company === params.slug);

	if (!singleExperience) throw error(404);

	return {
		singleExperience
	};
}

export let _windowWidth = ({ }) => {
	window.onresize = displayWindowSize;
	window.onload = displayWindowSize;

	function displayWindowSize() {
		let myWidth = window.innerWidth;
		let myHeight = window.innerHeight;
		// your size calculation code here
		console.log("current-width: " + myWidth + "; current-height: " + myHeight)
	}
}